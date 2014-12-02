import Ember from 'ember';
import startApp from 'contactlist/tests/helpers/start-app';

var App, server;

module('Integration - Contact Page', {
  setup: function() {
    App = startApp();
    var contacts = [
      {
        id: 1,
        name: 'Bugs Bunny',
        phone_number_ids: [1,2]
      },
      {
        id: 2,
        name: 'Wile E. Coyote',
        phone_number_ids: [3]
      },
      {
        id: 3,
        name: 'Yosemite Sam',
        phone_number_ids: [4,5,6]
      }
    ];

    var phoneNumbers = [
      {
        id: 1,
        number: "123-432-5432",
        contact_id: 1
      },
      {
        id: 2,
        number: "342-457-9985",
        contact_id: 1
      },
      {
        id: 3,
        number: "543-544-2233",
        contact_id: 2
      },
      {
        id: 4,
        number: "111-222-2233",
        contact_id: 3
      },
      {
        id: 5,
        number: "666-444-3434",
        contact_id: 3
      },
      {
        id: 6,
        number: "498-238-1143",
        contact_id: 3
      }
    ];

    server = new Pretender(function() {
      this.get('/api/v1/contacts', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({contacts: contacts, phone_numbers: phoneNumbers})];
      });

      this.get('/api/v1/contacts/:id', function(request) {
        var contact = contacts.find(function(contact) {
          if (contact.id === parseInt(request.params.id, 10)) {
            return contact;
          }
        });

        var contactPhoneNumbers = phoneNumbers.filter(function(phoneNumber) {
          if (phoneNumber.contact_id === contact.id) {
            return true;
          }
        });

        return [200, {"Content-Type": "application/json"}, JSON.stringify({contact: contact, phone_numbers: contactPhoneNumbers})];
      });
    });
  },
  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('Should allow navigation to the contacts page from the landing page', function() {
  visit('/').then(function() {
    click('a:contains("Contacts")').then(function() {
      equal(find('h3').text(), 'Contacts');
    });
  });
});

test('Should list all contacts and number of phone numbers', function() {
  visit('/contacts').then(function() {
    equal(find('a:contains("Bugs Bunny (2)")').length, 1);
    equal(find('a:contains("Wile E. Coyote (1)")').length, 1);
    equal(find('a:contains("Yosemite Sam (3)")').length, 1);
  });
});

test('Should list all phone numbers for a speaker', function() {
  visit('/contacts/1').then(function() {
    equal(find('li:contains("123-432-5432")').length, 1);
    equal(find('li:contains("342-457-9985")').length, 1);
  });
});

test('Should be able to navigate to a contact page', function() {
  visit('/contacts').then(function() {
    click('a:contains("Bugs Bunny")').then(function() {
      equal(find('h4').text(), 'Bugs Bunny');
    });
  });
});

test('Should be able to visit a contact page', function() {
  visit('/contacts/1').then(function() {
    equal(find('h4').text(), 'Bugs Bunny');
  });
});
