var path = require('path');

describe('angularjs add contact', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');
		element(by.css('[value="add"]')).click();
		var contacts = element.all(by.repeater('contact in vm.contacts'));
		expect(contacts.count()).toEqual(4);
		var tim = contacts.get(1);
		expect(tim.element(by.model('contact.name')).getAttribute('value')).toBe('Tim');
		expect(tim.element(by.model('contact.phone')).getAttribute('value')).toBe('3934203242');
	});
});