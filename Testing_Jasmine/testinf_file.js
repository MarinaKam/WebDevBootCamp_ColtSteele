function countPairs(arr, numb){
    let cache = new Set(arr);
    let count = 0;
    for(let val of arr){
        cache.delete(val);
        if(cache.has(numb - val)){
            count++;
        }
    }
    return count;
}

countPairs([8,2,6,4,10,0],10);

describe("countPairs", function(){
    it("should return the number of unique pairs === 3", function(){
        expect(countPairs([8,2,6,4,10,0],10)).toEqual(3);
    });
    it("should return the number of unique pairs === 1", function(){
        expect(countPairs([8,2],10)).toEqual(1);
    });
    it("should return the number of unique pairs === 0", function(){
        expect(countPairs([1,2],10)).toEqual(0);
        expect(countPairs([1,2,3,4,5],10)).toEqual(0);
    });
    it("should return the number of unique pairs === 0", function(){
        expect(countPairs([1,2,3,4,5],10)).toEqual(0);
    });
});