'use strict';

angular.module('swFrontApp')
.controller('EdgesController', function ($scope, edges) {
	var selectedEdge = null;
	$scope.edges = edges.query();
	
	$scope.selectEdge = function(edge) {
		selectedEdge = (selectedEdge === edge) ? null : edge;
	}
	
	$scope.isSelected = function(edge) {
		return edge === selectedEdge;
	}
	
	$scope.displayRequirements = function(reqs) {
		var result= '';
		for(var i = 0; i < reqs.length; i++) {
			if(result !== '') {
				result += ', ';
			}
			if(reqs[i].name) {
				result += reqs[i].name + ' ';
			}
			result += reqs[i].value;
		}
		return result;
	};
});
