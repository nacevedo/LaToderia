import { Mongo } from "meteor/mongo";
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter'


export const Posts = new Mongo.Collection("posts");

if(Meteor.isServer) {
  Meteor.publish("posts", () => {
    return Posts.find({});
  });

  const loginRule = {
  userId(userId) {
    const user = Meteor.users.findOne(userId);
    return user;
  },

  type: 'method',
  name: 'posts.vote'
};

  const postInsert = {
  userId(userId) {
    const user = Meteor.users.findOne(userId);
    return user;
  },

  type: 'method',
  name: 'posts.insert'
};

DDPRateLimiter.addRule(loginRule, 5, 5000);
DDPRateLimiter.addRule(postInsert, 5, 5000);

}

Meteor.methods({

  'posts.insert'(id, text,areas, services) {
   
   // check(text, String);
    // check(city, String);
    // check(text, String);
 
    // Make sure the user is logged in before inserting a task
    if (! Meteor.user()) {
      throw new Meteor.Error('not-authorized');
    }

    Posts.insert({
     name: id, 
     cal : text,
     areas: areas,
     services: services,
     numCal: 0
   }); 
  },
  'posts.vote'(idT, calificacion) {

    //check(postId, String);
    //check(emoji, String);


    let postObj = Posts.findOne(idT);

    console.log("llega hasta aca" , postObj.numCal); 

    if (!postObj) {
      throw new Meteor.Error('Technician not found!');
      //console.err("Post not found!");
      //return;
    }

    
    var mult = postObj.cal * postObj.numCal;
    console.log(mult);
    console.log(calificacion);
    console.log(postObj.numCal);
    var up = mult+parseInt(calificacion);
    console.log("up" ,up); 
    var down = postObj.numCal +1;
    console.log("down" ,down); 
    var prom = up/down;
    console.log(prom);
    postObj.cal = prom;
    postObj.numCal+=1;

    Posts.update(postObj._id,
      postObj);

  },
});


