function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase();
  }
  
  function anagrams(stringA, stringB) {
    const cleanStrA = cleanString(stringA);
    const cleanStrB = cleanString(stringB);
    return cleanStrA.split('').sort().join('') === cleanStrB.split('').sort().join('');
  }
  module.exports = anagrams;
