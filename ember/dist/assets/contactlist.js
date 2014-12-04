eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"contactlist/adapters/application\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = DS.ActiveModelAdapter.extend({\n      namespace: \'api/v1\'\n    });\n  });//# sourceURL=contactlist/adapters/application.js");

;eval("define(\"contactlist/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"contactlist/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=contactlist/app.js");

;eval("define(\"contactlist/initializers/export-application-global\", \n  [\"ember\",\"contactlist/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize(container, application) {\n      var classifiedName = Ember.String.classify(config.modulePrefix);\n\n      if (config.exportApplicationGlobal) {\n        window[classifiedName] = application;\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=contactlist/initializers/export-application-global.js");

;eval("define(\"contactlist/models/contact\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = DS.Model.extend({\n      name: DS.attr(\'string\'),\n      phoneNumbers: DS.hasMany(\'phone_number\')\n    });\n  });//# sourceURL=contactlist/models/contact.js");

;eval("define(\"contactlist/models/phone_number\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = DS.Model.extend({\n      number: DS.attr(\'string\'),\n      contact: DS.belongsTo(\'contact\')\n    });\n  });//# sourceURL=contactlist/models/phone_number.js");

;eval("define(\"contactlist/models/todo\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = DS.Model.extend({\n      title: DS.attr(\'string\'),\n      isCompleted: DS.attr(\'boolean\')\n    });\n  });//# sourceURL=contactlist/models/todo.js");

;eval("define(\"contactlist/router\", \n  [\"ember\",\"contactlist/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n      this.route(\'about\');\n      this.resource(\'contacts\', function() {\n        this.route(\'show\', {path: \':contact_id\'});\n      });\n\n      this.resource(\'todos\', function() {\n      });\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=contactlist/router.js");

;eval("define(\"contactlist/routes/contacts/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n      model: function() {\n        return this.store.find(\'contact\');\n      }\n    });\n  });//# sourceURL=contactlist/routes/contacts/index.js");

;eval("define(\"contactlist/routes/todos/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n      model: function() {\n        return this.store.find(\'todo\');\n      }\n    });\n  });//# sourceURL=contactlist/routes/todos/index.js");

;eval("define(\"contactlist/templates/about\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      \n\n\n      data.buffer.push(\"<h3>About</h3>\\n\\n<p>Contact Ember is a application that keeps track of your contacts.</p>\\n\");\n      \n    });\n  });//# sourceURL=contactlist/templates/about.js");

;eval("define(\"contactlist/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;\n\n\n      data.buffer.push(\"<h2 id=\'title\'>Welcome to Contact Ember</h2>\\n\\n\");\n      data.buffer.push(escapeExpression((helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:[\"STRING\",\"STRING\"],data:data},helper ? helper.call(depth0, \"Home\", \"application\", options) : helperMissing.call(depth0, \"link-to\", \"Home\", \"application\", options))));\n      data.buffer.push(\"\\n\");\n      data.buffer.push(escapeExpression((helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:[\"STRING\",\"STRING\"],data:data},helper ? helper.call(depth0, \"About\", \"about\", options) : helperMissing.call(depth0, \"link-to\", \"About\", \"about\", options))));\n      data.buffer.push(\"\\n\");\n      data.buffer.push(escapeExpression((helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:[\"STRING\",\"STRING\"],data:data},helper ? helper.call(depth0, \"Contacts\", \"contacts\", options) : helperMissing.call(depth0, \"link-to\", \"Contacts\", \"contacts\", options))));\n      data.buffer.push(\"\\n\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=contactlist/templates/application.js");

;eval("define(\"contactlist/templates/contacts\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      data.buffer.push(\"<h3>Contacts</h3>\\n\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=contactlist/templates/contacts.js");

;eval("define(\"contactlist/templates/contacts/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, self=this, helperMissing=helpers.helperMissing;\n\n    function program1(depth0,data) {\n      \n      var buffer = \'\', stack1, helper, options;\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:[\"STRING\",\"ID\"],data:data},helper ? helper.call(depth0, \"contacts.show\", \"\", options) : helperMissing.call(depth0, \"link-to\", \"contacts.show\", \"\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      }\n    function program2(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n    \");\n      stack1 = helpers._triageMustache.call(depth0, \"name\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\" (\");\n      stack1 = helpers._triageMustache.call(depth0, \"phoneNumbers.length\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\")\");\n      return buffer;\n      }\n\n      stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=contactlist/templates/contacts/index.js");

;eval("define(\"contactlist/templates/contacts/show\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, self=this;\n\n    function program1(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n    <li>\");\n      stack1 = helpers._triageMustache.call(depth0, \"number\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</li>\\n  \");\n      return buffer;\n      }\n\n      data.buffer.push(\"<h4>\");\n      stack1 = helpers._triageMustache.call(depth0, \"name\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</h4>\\n\\n<h5>Phone Numbers</h5>\\n<ul>\\n  \");\n      stack1 = helpers.each.call(depth0, \"phoneNumbers\", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n</ul>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=contactlist/templates/contacts/show.js");

;eval("define(\"contactlist/templates/todos\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=contactlist/templates/todos.js");

;eval("define(\"contactlist/templates/todos/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, self=this;\n\n    function program1(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n        <li>\\n          <input type=\\\"checkbox\\\" class=\\\"toggle\\\">\\n          <label>\");\n      stack1 = helpers._triageMustache.call(depth0, \"title\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</label>\\n          <button class=\\\"destroy\\\"></button>\\n        </li>\\n      \");\n      return buffer;\n      }\n\n      data.buffer.push(\"<section id=\\\"todoapp\\\">\\n  <header id=\\\"header\\\">\\n    <h1>todos</h1>\\n    <input type=\\\"text\\\" id=\\\"new-todo\\\" placeholder=\\\"What needs to be done?\\\" />\\n  </header>\\n\\n  <section id=\\\"main\\\">\\n    <ul id=\\\"todo-list\\\">\\n      \");\n      stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n    </ul>\\n\\n    <input type=\\\"checkbox\\\" id=\\\"toggle-all\\\">\\n  </section>\\n\\n  <footer id=\\\"footer\\\">\\n    <span id=\\\"todo-count\\\">\\n      <strong>2</strong> todos left\\n    </span>\\n    <ul id=\\\"filters\\\">\\n      <li>\\n        <a href=\\\"all\\\" class=\\\"selected\\\">All</a>\\n      </li>\\n      <li>\\n        <a href=\\\"active\\\">Active</a>\\n      </li>\\n      <li>\\n        <a href=\\\"completed\\\">Completed</a>\\n      </li>\\n    </ul>\\n\\n    <button id=\\\"clear-completed\\\">\\n      Clear completed (1)\\n    </button>\\n  </footer>\\n</section>\\n\\n<footer id=\\\"info\\\">\\n  <p>Double-click to edit a todo</p>\\n</footer>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=contactlist/templates/todos/index.js");

;eval("define(\"contactlist/tests/adapters/application.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - adapters\');\n    test(\'adapters/application.js should pass jshint\', function() { \n      ok(true, \'adapters/application.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/adapters/application.jshint.js");

;eval("define(\"contactlist/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/app.jshint.js");

;eval("define(\"contactlist/tests/contactlist/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - contactlist/tests/helpers\');\n    test(\'contactlist/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'contactlist/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/contactlist/tests/helpers/resolver.jshint.js");

;eval("define(\"contactlist/tests/contactlist/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - contactlist/tests/helpers\');\n    test(\'contactlist/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'contactlist/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/contactlist/tests/helpers/start-app.jshint.js");

;eval("define(\"contactlist/tests/contactlist/tests/integration/about-page-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - contactlist/tests/integration\');\n    test(\'contactlist/tests/integration/about-page-test.js should pass jshint\', function() { \n      ok(true, \'contactlist/tests/integration/about-page-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/contactlist/tests/integration/about-page-test.jshint.js");

;eval("define(\"contactlist/tests/contactlist/tests/integration/contacts-page-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - contactlist/tests/integration\');\n    test(\'contactlist/tests/integration/contacts-page-test.js should pass jshint\', function() { \n      ok(true, \'contactlist/tests/integration/contacts-page-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/contactlist/tests/integration/contacts-page-test.jshint.js");

;eval("define(\"contactlist/tests/contactlist/tests/integration/landing-page-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - contactlist/tests/integration\');\n    test(\'contactlist/tests/integration/landing-page-test.js should pass jshint\', function() { \n      ok(true, \'contactlist/tests/integration/landing-page-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/contactlist/tests/integration/landing-page-test.jshint.js");

;eval("define(\"contactlist/tests/contactlist/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - contactlist/tests\');\n    test(\'contactlist/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'contactlist/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/contactlist/tests/test-helper.jshint.js");

;eval("define(\"contactlist/tests/helpers/resolver\", \n  [\"ember/resolver\",\"contactlist/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=contactlist/tests/helpers/resolver.js");

;eval("define(\"contactlist/tests/helpers/start-app\", \n  [\"ember\",\"contactlist/app\",\"contactlist/router\",\"contactlist/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Router.reopen({\n        location: \'none\'\n      });\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      App.reset(); // this shouldn\'t be needed, i want to be able to \"start an app at a specific URL\"\n\n      return App;\n    }\n  });//# sourceURL=contactlist/tests/helpers/start-app.js");

;eval("define(\"contactlist/tests/integration/about-page-test\", \n  [\"ember\",\"contactlist/tests/helpers/start-app\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var startApp = __dependency2__[\"default\"];\n\n    var App;\n\n    module(\'Integration - About Page\', {\n      setup: function() {\n        App = startApp();\n      },\n      teardown: function() {\n        Ember.run(App, \'destroy\');\n      }\n    });\n\n    test(\'Should navigate to About page\', function() {\n      visit(\'/\').then(function() {\n        click(\"a:contains(\'About\')\").then(function() {\n          equal(find(\'h3\').text(), \'About\');\n        });\n      });\n    });\n  });//# sourceURL=contactlist/tests/integration/about-page-test.js");

;eval("define(\"contactlist/tests/integration/contacts-page-test\", \n  [\"ember\",\"contactlist/tests/helpers/start-app\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var startApp = __dependency2__[\"default\"];\n\n    var App, server;\n\n    module(\'Integration - Contact Page\', {\n      setup: function() {\n        App = startApp();\n        var contacts = [\n          {\n            id: 1,\n            name: \'Bugs Bunny\',\n            phone_number_ids: [1,2]\n          },\n          {\n            id: 2,\n            name: \'Wile E. Coyote\',\n            phone_number_ids: [3]\n          },\n          {\n            id: 3,\n            name: \'Yosemite Sam\',\n            phone_number_ids: [4,5,6]\n          }\n        ];\n\n        var phoneNumbers = [\n          {\n            id: 1,\n            number: \"123-432-5432\",\n            contact_id: 1\n          },\n          {\n            id: 2,\n            number: \"342-457-9985\",\n            contact_id: 1\n          },\n          {\n            id: 3,\n            number: \"543-544-2233\",\n            contact_id: 2\n          },\n          {\n            id: 4,\n            number: \"111-222-2233\",\n            contact_id: 3\n          },\n          {\n            id: 5,\n            number: \"666-444-3434\",\n            contact_id: 3\n          },\n          {\n            id: 6,\n            number: \"498-238-1143\",\n            contact_id: 3\n          }\n        ];\n\n        server = new Pretender(function() {\n          this.get(\'/api/v1/contacts\', function(request) {\n            return [200, {\"Content-Type\": \"application/json\"}, JSON.stringify({contacts: contacts, phone_numbers: phoneNumbers})];\n          });\n\n          this.get(\'/api/v1/contacts/:id\', function(request) {\n            var contact = contacts.find(function(contact) {\n              if (contact.id === parseInt(request.params.id, 10)) {\n                return contact;\n              }\n            });\n\n            var contactPhoneNumbers = phoneNumbers.filter(function(phoneNumber) {\n              if (phoneNumber.contact_id === contact.id) {\n                return true;\n              }\n            });\n\n            return [200, {\"Content-Type\": \"application/json\"}, JSON.stringify({contact: contact, phone_numbers: contactPhoneNumbers})];\n          });\n        });\n      },\n      teardown: function() {\n        Ember.run(App, \'destroy\');\n        server.shutdown();\n      }\n    });\n\n    test(\'Should allow navigation to the contacts page from the landing page\', function() {\n      visit(\'/\').then(function() {\n        click(\'a:contains(\"Contacts\")\').then(function() {\n          equal(find(\'h3\').text(), \'Contacts\');\n        });\n      });\n    });\n\n    test(\'Should list all contacts and number of phone numbers\', function() {\n      visit(\'/contacts\').then(function() {\n        equal(find(\'a:contains(\"Bugs Bunny (2)\")\').length, 1);\n        equal(find(\'a:contains(\"Wile E. Coyote (1)\")\').length, 1);\n        equal(find(\'a:contains(\"Yosemite Sam (3)\")\').length, 1);\n      });\n    });\n\n    test(\'Should list all phone numbers for a speaker\', function() {\n      visit(\'/contacts/1\').then(function() {\n        equal(find(\'li:contains(\"123-432-5432\")\').length, 1);\n        equal(find(\'li:contains(\"342-457-9985\")\').length, 1);\n      });\n    });\n\n    test(\'Should be able to navigate to a contact page\', function() {\n      visit(\'/contacts\').then(function() {\n        click(\'a:contains(\"Bugs Bunny\")\').then(function() {\n          equal(find(\'h4\').text(), \'Bugs Bunny\');\n        });\n      });\n    });\n\n    test(\'Should be able to visit a contact page\', function() {\n      visit(\'/contacts/1\').then(function() {\n        equal(find(\'h4\').text(), \'Bugs Bunny\');\n      });\n    });\n  });//# sourceURL=contactlist/tests/integration/contacts-page-test.js");

;eval("define(\"contactlist/tests/integration/landing-page-test\", \n  [\"ember\",\"contactlist/tests/helpers/start-app\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var startApp = __dependency2__[\"default\"];\n\n    var App;\n\n    module(\'Integration - Landing Page\', {\n      setup: function() {\n        App = startApp();\n      },\n      teardown: function() {\n        Ember.run(App, \'destroy\');\n      }\n    });\n\n    test(\'Should welcome me to Contact Ember\', function() {\n      visit(\'/\').then(function() {\n        equal(find(\'h2#title\').text(), \'Welcome to Contact Ember\');\n      });\n    });\n\n    test(\'Should allow navigating back to root from another page\', function() {\n      visit(\'/about\').then(function() {\n        click(\'a:contains(\"Home\")\').then(function() {\n          notEqual(find(\'h3\').text(), \'About\');\n        });\n      });\n    });\n  });//# sourceURL=contactlist/tests/integration/landing-page-test.js");

;eval("define(\"contactlist/tests/models/contact.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - models\');\n    test(\'models/contact.js should pass jshint\', function() { \n      ok(true, \'models/contact.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/models/contact.jshint.js");

;eval("define(\"contactlist/tests/models/phone_number.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - models\');\n    test(\'models/phone_number.js should pass jshint\', function() { \n      ok(true, \'models/phone_number.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/models/phone_number.jshint.js");

;eval("define(\"contactlist/tests/models/todo.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - models\');\n    test(\'models/todo.js should pass jshint\', function() { \n      ok(true, \'models/todo.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/models/todo.jshint.js");

;eval("define(\"contactlist/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/router.jshint.js");

;eval("define(\"contactlist/tests/routes/contacts/index.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes/contacts\');\n    test(\'routes/contacts/index.js should pass jshint\', function() { \n      ok(true, \'routes/contacts/index.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/routes/contacts/index.jshint.js");

;eval("define(\"contactlist/tests/routes/todos/index.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes/todos\');\n    test(\'routes/todos/index.js should pass jshint\', function() { \n      ok(true, \'routes/todos/index.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/routes/todos/index.jshint.js");

;eval("define(\"contactlist/tests/test-helper\", \n  [\"contactlist/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    var containerVisibility = QUnit.urlParams.nocontainer ? \'hidden\' : \'visible\';\n    document.getElementById(\'ember-testing-container\').style.visibility = containerVisibility;\n  });//# sourceURL=contactlist/tests/test-helper.js");

/* jshint ignore:start */

define('contactlist/config/environment', ['ember'], function(Ember) {
  var prefix = 'contactlist';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */


});

if (runningTests) {
  require('contactlist/tests/test-helper');
} else {
  require('contactlist/app')['default'].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}

/* jshint ignore:end */
