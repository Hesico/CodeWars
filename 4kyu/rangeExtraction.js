// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

const solution = (arr) => {
    let reduced = arr.reduce((acc,el, i) => {
        if( !acc.atual.length || acc.atual.includes(el-1)){
            acc.atual.push(el);
        } else {
            if(acc.atual.length ){
                if(acc.atual.length > 2){
                    acc.total.push(acc.atual);
                } else {
                    acc.atual.forEach(e => acc.total.push(e));
                }
                acc.atual = [];
            }
            acc.atual.push(el)
        }
        
        if(acc.atual.length && i === arr.length -1){
            if(acc.atual.length > 2){
                acc.total.push(acc.atual);
            } else {
                acc.atual.forEach(e => acc.total.push(e));
            }
        }
        return acc;
    },{total : [], atual: []})
    
    return reduced.total.map(e => e.length > 1 ? `${e[0]}-${e[e.length-1]}` : `${e}`).join(",")
}