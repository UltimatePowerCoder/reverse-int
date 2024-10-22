module.exports = function reverse(n) {
    const numString = n.toString();
    const numArray = numString.split('');
    const reversedArray = numArray.reverse();
    const reversedString = reversedArray.join('');
    return parseInt(reversedString, 10);
}
