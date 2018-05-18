import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import {SimpleSchema} from "simpl-schema/dist/SimpleSchema";



export const Tweets = new Mongo.Collection("tweets");



if (Meteor.isServer) {
    Meteor.publish("tweets", () => {
        return Tweets.find({query: "latoderia"});
    });
}

Meteor.methods({
    "tweets.stream"() {

        
        Tweets.remove({});
        var Twitter = require("twitter");

        var client = new Twitter({
            consumer_key: process.env.TWITTER_CONSUMER_KEY,
            consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
            access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
            access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        });
        console.log("hola");

        /**
         * Stream statuses filtered by keyword
         * number of tweets per second depends on topic popularity
         **/
        stream = client.stream("statuses/filter", {track: '#' + "latoderia"}, (stream) => {
            stream.on("data", Meteor.bindEnvironment(function (data) {
                // Construct a new tweet object
                console.log("hola!");
                const tweet = {
                    query: "latoderia",
                    twid: data["id"],
                    author: data["user"]["name"],
                    avatar: data["user"]["profile_image_url"],
                    body: data["text"],
                    screenname: data["user"]["screen_name"]
                };

                new SimpleSchema({
                    query: {type: String},
                    twid: {type: Number},
                    author: {type: String},
                    avatar: {type: String},
                    body: {type: String},
                    screenname: {type: String},
                }).validate(tweet);
                console.log(tweet);
                Tweets.insert(tweet);
                
                
                client.post('statuses/update', { in_reply_to_status_id: data["id_str"], status: '@' + tweet.screenname+ ' Visita nuestra nueva página web.. https://la-toderia.herokuapp.com !'})
                      .then(function (tweet) {
                        console.log(tweet);
                      })
                      .catch(function (error) {
                        throw error;
                      })

                setTimeout(() => stream.destroy(), 10000000);
            }));
            stream.on("error", Meteor.bindEnvironment(function (error) {

            }));

        });
    }
});