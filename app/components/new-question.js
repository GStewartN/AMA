import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        author: this.get('author') ? this.get('author') : "Anonymous",
        content: this.get('content') ? this.get('content') : "No Content...",
        notes: this.get('notes') ? this.get('notes') : "No Notes..."
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
