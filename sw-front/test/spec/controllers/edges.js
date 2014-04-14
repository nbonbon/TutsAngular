'use strict';

describe('EdgesController', function () {
	
	var scope;
	
	// fetch the specific module (or in the case the whole applicaiton)
	beforeEach(module('swFrontApp')); 
	
	// inject needed dependencies (mock them, find them, instantiate)
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		$controller('EdgesController', { 
			$scope: scope
		});
	}));

	// actual test
	describe('displayRequirements', function() {
		var reqs;
		it('it concatenates name and value of the requirement', function() {
			reqs = [{ name: 'Agility', value: 'd6'}];
			expect(scope.displayRequirements(reqs)).toEqual('Agility d6');
		});
		it('it ignores name if it is null', function() {
			reqs = [{ name: null, value: 'Novice'}];
			expect(scope.displayRequirements(reqs)).toEqual('Novice');
		});
		it('requirements should be delmited by commas', function() {
			reqs = [{ name: null, value: 'Novice'}, { name: 'Agility', value: 'd6'}];
			expect(scope.displayRequirements(reqs)).toEqual('Novice, Agility d6');
		});
	});
});
