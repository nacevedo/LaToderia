import { Mongo } from "meteor/mongo";
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Comments = new Mongo.Collection("comments");

if(Meteor.isServer) {
	Meteor.publish("comments", () => {
		return Comments.find({});
	});

   const commentRule = {
  userId(userId) {
    const user = Meteor.users.findOne(userId);
    return user;
  },

  type: 'method',
  name: 'comments.vote'
};

  const commentInsert = {
  userId(userId) {
    const user = Meteor.users.findOne(userId);
    return user;
  },

  type: 'method',
  name: 'comments.insert'
};

DDPRateLimiter.addRule(commentRule, 5, 5000);
DDPRateLimiter.addRule(commentInsert, 5, 5000);

}

Meteor.methods({


  'comments.insert'(area, service, date, tecnician, hour, comment) {

 
    // Make sure the user is logged in before inserting a task
    // if (! Meteor.user()) {
    //   throw new Meteor.Error('not-authorized');
    // }
  
 
    Comments.insert({
      area: area, 
      service: service, 
      date: date, 
      tecnician: tecnician, 
      hour: hour, 
      comment: comment,
      who: Meteor.user().profile.name

    });
  },
    'comments.vote'(postId, emoji) {
      


    let postObj = Comments.findOne(postId);
    console.log(postObj); 

    if (!postObj) {
      throw new Meteor.Error('Post not found!');
      //console.err("Post not found!");
      //return;
    }

    postObj.voteCount+=1;
    if (postObj.votes[emoji]===undefined) {
      postObj.votes[emoji]=0;
    }
    postObj.votes[emoji]+=1;

    Comments.update(postObj._id,
      postObj);

  },

});