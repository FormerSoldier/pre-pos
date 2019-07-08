'use strict';

function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(function(itemA){
		objectB['value'].forEach(function(itemB){
			if(itemA['key'] == itemB)
				itemA['count'] -= parseInt(itemA['count'] / 3);
		});
	},objectB);
	return collectionA;
}
