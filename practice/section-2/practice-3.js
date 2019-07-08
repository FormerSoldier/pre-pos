'use strict';

function countSameElements(collection) {
	var result = [];
	var reg = /\d+/;
	for(let i = 0; i < collection.length; i++){
		let flag = false;
		for(let j = 0; j < result.length; j++){
			if(collection[i][0] == result[j]['name'] ){
				if(collection[i].length > 1){
					result[j]['summary']+= parseInt(reg.exec(collection[i])[0]);
				}else{
					result[j]['summary']++;
				}
				flag = true;
				break;
			}				
		}
		if(!flag){
			if(collection[i].length > 1){
				result.push({name: collection[i][0],summary:parseInt(reg.exec(collection[i])[0])});
			}else{
				result.push({name: collection[i], summary:1});
			}
		}		
	}
	return result;
}
