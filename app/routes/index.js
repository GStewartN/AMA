import Ember from 'ember';

var questions = [{
  id: 1,
  author: "Joe Schmo",
  content: "How do I make a textbox in html?",
  notes: "I tried this: <input value='textbox'>"
}, {
  id: 2,
  author: "Bob Dobbs",
  content: "How do I start an Ember server?",
  notes: "I tried: $ ember -g server"
}];

export default Ember.Route.extend({
  model() {
     return questions;
   },
});
