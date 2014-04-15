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
				{ name: null, value: 'Novice', mode: 'rank'}, 
				{ name: 'Vigor', value: 'd6', mode: 'trait'}
			  ]
			},
			{
			  name: 'Very Attractive',
			  description: 'blah blah...',
			  category: {
				name: 'Background'
			  },
			  requirements: [
				{ name: 'rank', value: 'Novice'}, 
				{ name: 'edge', value: 'Attractive'}
			  ]
			},
			{
			  name: 'Not Very Attractive',
			  description: 'bleh bleh...',
			  category: {
				name: 'Frontground'
			  },
			  requirements: [
				{ name: 'biceps', value: 'Huge'}, 
				{ name: 'chesticles', value: 'Medium'}
			  ]
			}
		];
	};
});