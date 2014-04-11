'use strict';

describe('Navigation Menu', function () {
	it('changes active link depending on route', function() {
//		------------------TEST 1---------------------
		browser.get('/');
		var activeListItem = element(by.css('.active'));
		var text = activeListItem.findElement(by.tagName('a')).getText();
		
		expect(text).toEqual('Home');
		
//		------------------TEST 2---------------------
		var edgesLink = element(by.linkText('Edges'));
		edgesLink.click();
		activeListItem = element(by.css('.active'));
		text = activeListItem.findElement(by.tagName('a')).getText();
		expect(text).toEqual('Edges');
	});
});