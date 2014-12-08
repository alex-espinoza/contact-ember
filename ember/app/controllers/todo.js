import Ember from 'ember';

export default Ember.ObjectController.extend({
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
  }.property('model.isCompleted')
});
