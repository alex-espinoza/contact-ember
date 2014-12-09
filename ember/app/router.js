import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('contacts', function() {
    this.route('show', {path: ':contact_id'});
  });

  this.resource('todos', {path: '/'},function() {
    // additional child rotues will go here later
  });
});

export default Router;
