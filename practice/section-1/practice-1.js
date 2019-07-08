'use strict';

function collectSameElements(collectionA, collectionB) {
	var result = [];
	collectionA.forEach(function(itemA){
		collectionB.forEach(function(itemB){
			if(itemA == itemB)
				result.push(itemA);
		})
	},collectionB);
	return result;
}
