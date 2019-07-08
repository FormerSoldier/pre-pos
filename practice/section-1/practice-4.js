'use strict';

function collectSameElements(collectionA, objectB) {
	var result = [];
	collectionA.forEach(function(itemA){
		objectB['value'].forEach(function(itemB){
			if(itemB == itemA.key)
				result.push(itemA.key);
		},itemA);
	}, objectB);
	return result;
}
