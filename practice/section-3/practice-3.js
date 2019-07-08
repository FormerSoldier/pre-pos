'use strict';

function createUpdatedCollection(collectionA, objectB) {
	
	var new_collectionA = createCollection();
	new_collectionA.forEach(function(itemA){
		objectB['value'].forEach(function(itemB){
			if(itemA['key'] == itemB)
				itemA['count'] -= parseInt(itemA['count'] / 3);
		});
	},objectB);
	return new_collectionA;
	
	function createCollection(){
		let result = [];
		for(let i = 0; i < collectionA.length; i++){
		let flag = false;
		for(let j = 0; j < result.length; j++){
			if(result[j]['key'] == collectionA[i]){
				result[j]['count']++;
				flag = true;
				break;
			}		
		}
		if(!flag)
			result.push({key: collectionA[i], count:1});
		}
		return result;
	};
}


