'use strict';

function countSameElements(collection) {
	var result = [];
	for(let i = 0; i < collection.length; i++){
		let flag = false;
		for(let j = 0; j < result.length; j++){
			if(result[j]['key'] == collection[i]){
				result[j]['count']++;
				flag = true;
				break;
			}		
		}
		if(!flag)
			result.push({key: collection[i], count:1});
	}
	return result;
}
