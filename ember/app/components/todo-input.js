import Ember from 'ember';

export default Ember.TextField.extend({
  focusOnInsert: function() {
    this.$().val(this.$().val());
    this.$().focus();
  }.on('didInsertElement')
});
