'use strict';

function collectSameElements(collectionA, collectionB) {
	var result = [];
	collectionA.forEach(function(itemA){
		collectionB.forEach(function(itemB){
			itemB.forEach(function(itemB_B){
				if(itemB_B == itemA)
					result.push(itemA);
			},itemA)
		},itemA)
	},collectionB);
	return result;
}
