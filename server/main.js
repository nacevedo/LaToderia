import { Meteor } from 'meteor/meteor';
import { Inject } from "meteor/meteorhacks:inject-initial";

import "../imports/api/posts";
import "../imports/api/chatMessages";
import "../imports/api/chats";
import "../imports/api/comments";
import "../imports/api/tweets";


Meteor.startup(() => {
  // code to run on server at startup
   Inject.rawModHtml("addLanguage", function(html) {
     return html.replace(/<html>/, '<!-- HTML 5 -->\n<html lang="es">');
   });

});

Roles.addUsersToRoles("cHvGiAggQBbCJs6c3", ['super-admin']);
var tt = Roles.userIsInRole("cHvGiAggQBbCJs6c3", ['super-admin']);

console.log(tt)