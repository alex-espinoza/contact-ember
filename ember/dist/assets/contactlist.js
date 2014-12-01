eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"contactlist/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"contactlist/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=contactlist/app.js");

;eval("define(\"contactlist/initializers/export-application-global\", \n  [\"ember\",\"contactlist/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize(container, application) {\n      var classifiedName = Ember.String.classify(config.modulePrefix);\n\n      if (config.exportApplicationGlobal) {\n        window[classifiedName] = application;\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=contactlist/initializers/export-application-global.js");

;eval("define(\"contactlist/router\", \n  [\"ember\",\"contactlist/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n      this.route(\'about\');\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=contactlist/router.js");

;eval("define(\"contactlist/templates/about\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      \n\n\n      data.buffer.push(\"<h3>About</h3>\\n\\n<p>Contact Ember is a application that keeps track of your contacts.</p>\\n\");\n      \n    });\n  });//# sourceURL=contactlist/templates/about.js");

;eval("define(\"contactlist/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;\n\n\n      data.buffer.push(\"<h2 id=\'title\'>Welcome to Contact Ember</h2>\\n\\n\");\n      data.buffer.push(escapeExpression((helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:[\"STRING\",\"STRING\"],data:data},helper ? helper.call(depth0, \"Home\", \"application\", options) : helperMissing.call(depth0, \"link-to\", \"Home\", \"application\", options))));\n      data.buffer.push(\"\\n\");\n      data.buffer.push(escapeExpression((helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:[\"STRING\",\"STRING\"],data:data},helper ? helper.call(depth0, \"About\", \"about\", options) : helperMissing.call(depth0, \"link-to\", \"About\", \"about\", options))));\n      data.buffer.push(\"\\n\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=contactlist/templates/application.js");

;eval("define(\"contactlist/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/app.jshint.js");

;eval("define(\"contactlist/tests/contactlist/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - contactlist/tests/helpers\');\n    test(\'contactlist/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'contactlist/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/contactlist/tests/helpers/resolver.jshint.js");

;eval("define(\"contactlist/tests/contactlist/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - contactlist/tests/helpers\');\n    test(\'contactlist/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'contactlist/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/contactlist/tests/helpers/start-app.jshint.js");

;eval("define(\"contactlist/tests/contactlist/tests/integration/about-page-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - contactlist/tests/integration\');\n    test(\'contactlist/tests/integration/about-page-test.js should pass jshint\', function() { \n      ok(true, \'contactlist/tests/integration/about-page-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/contactlist/tests/integration/about-page-test.jshint.js");

;eval("define(\"contactlist/tests/contactlist/tests/integration/landing-page-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - contactlist/tests/integration\');\n    test(\'contactlist/tests/integration/landing-page-test.js should pass jshint\', function() { \n      ok(true, \'contactlist/tests/integration/landing-page-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/contactlist/tests/integration/landing-page-test.jshint.js");

;eval("define(\"contactlist/tests/contactlist/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - contactlist/tests\');\n    test(\'contactlist/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'contactlist/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/contactlist/tests/test-helper.jshint.js");

;eval("define(\"contactlist/tests/helpers/resolver\", \n  [\"ember/resolver\",\"contactlist/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=contactlist/tests/helpers/resolver.js");

;eval("define(\"contactlist/tests/helpers/start-app\", \n  [\"ember\",\"contactlist/app\",\"contactlist/router\",\"contactlist/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Router.reopen({\n        location: \'none\'\n      });\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      App.reset(); // this shouldn\'t be needed, i want to be able to \"start an app at a specific URL\"\n\n      return App;\n    }\n  });//# sourceURL=contactlist/tests/helpers/start-app.js");

;eval("define(\"contactlist/tests/integration/about-page-test\", \n  [\"ember\",\"contactlist/tests/helpers/start-app\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var startApp = __dependency2__[\"default\"];\n\n    var App;\n\n    module(\'Integration - About Page\', {\n      setup: function() {\n        App = startApp();\n      },\n      teardown: function() {\n        Ember.run(App, \'destroy\');\n      }\n    });\n\n    test(\'Should navigate to About page\', function() {\n      visit(\'/\').then(function() {\n        click(\"a:contains(\'About\')\").then(function() {\n          equal(find(\'h3\').text(), \'About\');\n        });\n      });\n    });\n  });//# sourceURL=contactlist/tests/integration/about-page-test.js");

;eval("define(\"contactlist/tests/integration/landing-page-test\", \n  [\"ember\",\"contactlist/tests/helpers/start-app\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var startApp = __dependency2__[\"default\"];\n\n    var App;\n\n    module(\'Integration - Landing Page\', {\n      setup: function() {\n        App = startApp();\n      },\n      teardown: function() {\n        Ember.run(App, \'destroy\');\n      }\n    });\n\n    test(\'Should welcome me to Contact Ember\', function() {\n      visit(\'/\').then(function() {\n        equal(find(\'h2#title\').text(), \'Welcome to Contact Ember\');\n      });\n    });\n\n    test(\'Should allow navigating back to root from another page\', function() {\n      visit(\'/about\').then(function() {\n        click(\'a:contains(\"Home\")\').then(function() {\n          notEqual(find(\'h3\').text(), \'About\');\n        });\n      });\n    });\n  });//# sourceURL=contactlist/tests/integration/landing-page-test.js");

;eval("define(\"contactlist/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=contactlist/tests/router.jshint.js");

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
