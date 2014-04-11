'use strict';

describe('Navigation Menu', function () {
	it('changes active link depending on route', function() {
		browser.get('/');
		var activeListItem = element(by.css('.active'));
		var text = activeListItem.findElement(by.tagName('a')).getText();
		
		expect(text).toEqual('Home');
	});
});