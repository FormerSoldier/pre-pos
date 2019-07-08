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
				if(collectionA[i][0] == result[j]['key'] ){
					if(collectionA[i].length > 1){
						result[j]['count']+= collectionA[i][2];
					}else{
						result[j]['count']++;
					}
					flag = true;
					break;
				}				
			}
			if(!flag){
				if(collectionA[i].length > 1){
					result.push({key: collectionA[i][0],count:parseInt(collectionA[i][2])});
				}else{
					result.push({key: collectionA[i], count:1});
				}
			}		
		}
		return result;
	}
	
}
