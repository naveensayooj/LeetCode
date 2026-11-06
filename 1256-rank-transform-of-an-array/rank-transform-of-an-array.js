/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const unique= [...new Set(arr)].sort((a,b)=>a-b);
    let rankedvalues= new Map();
    for(i=0;i<unique.length;i++)
    {
      rankedvalues.set(unique[i],i+1)  
    }
    return arr.map(value=>rankedvalues.get(value));
};