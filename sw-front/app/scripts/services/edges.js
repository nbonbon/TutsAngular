'use strict';

angular.module('swFrontApp')
.service('edges', function() {
	this.query = function() {
		return 	[
			{
			  name: 'Attractive',
			  description: 'blah...',
			  category: {
				name: 'Background'
			  },
			  requirements: [
				{ name: null, value: 'Novice'}, 
				{ name: 'Vigor', value: 'd6'}
			  ]
			},
			{
			  name: 'Attractive',
			  description: 'blah...',
			  category: {
				name: 'Background'
			  },
			  requirements: [
				{ name: null, value: 'Novice'}, 
				{ name: 'Vigor', value: 'd6'}
			  ]
			}
		];
	};
});