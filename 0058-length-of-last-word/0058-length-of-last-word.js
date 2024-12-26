/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let answer = s.split(' ').filter((v) => v!='')
    return answer[answer.length-1].length
};