'use strict';

function countSameElements(collection) {
	var result = [];
	for(let i = 0; i < collection.length; i++){
		let flag = false;
		for(let j = 0; j < result.length; j++){
			if(collection[i][0] == result[j]['key'] ){
				if(collection[i].length > 1){
					result[j]['count']+= collection[i][2];
				}else{
					result[j]['count']++;
				}
				flag = true;
				break;
			}				
		}
		if(!flag){
			if(collection[i].length > 1){
				result.push({key: collection[i][0],count:parseInt(collection[i][2])});
			}else{
				result.push({key: collection[i], count:1});
			}
		}		
	}
	return result;
}
