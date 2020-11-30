var arrayStringsAreEqual = function(word1, word2) {
    let aaa = word1.join('')
    let bbb = word2.join('')
    return word1.join('') == word2.join('')
   };

   console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]))