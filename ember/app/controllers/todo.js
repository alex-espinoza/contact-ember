import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,
  bufferedTitle: Ember.computed.oneWay('title'),

  isCompleted: function(key, value) {
    var todo = this.get('model');

    if (value === undefined) {
      // property being used a getter
      return todo.get('isCompleted');
    } else {
      // property being used a setter
      todo.set('isCompleted', value);
      todo.save();
      return value;
    }
  }.property('model.isCompleted'),

  removeTodo: function() {
    var todo = this.get('model');
    todo.deleteRecord();
    todo.save();
  },

  actions: {
    editTodo: function() {
      if (!this.get('isCompleted')) {
        this.set('isEditing', true);
      }
    },

    acceptChanges: function() {
      var todo = this.get('model');
      var oldTitle =  todo.get('title');
      var newTitle = this.get('bufferedTitle').trim();

      if (Ember.isEmpty(newTitle)) {
        Ember.run.debounce(this, 'removeTodo', 0);
      } else if (oldTitle === newTitle) {
      } else {
        todo.set('title', newTitle);
        todo.save();
      }

      this.set('bufferedTitle', newTitle);
      this.set('isEditing', false);
    },

    removeTodo: function() {
      this.removeTodo();
    }
  }
});
