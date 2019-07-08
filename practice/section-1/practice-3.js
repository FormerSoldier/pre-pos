'use strict';

function collectSameElements(collectionA, objectB) {
	var result = [];
	collectionA.forEach(function(itemA){
		objectB['value'].forEach(function(item_val){
			if(item_val == itemA)
				result.push(itemA);
		}, itemA);
	},objectB);
	return result;
}
