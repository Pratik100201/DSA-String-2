var reverseWords = function(s) {
	
    s = s.split(' ')
	
	
    for (let word = 0; word < s.length; word++) {
        s[word] = reverse(s[word])
    } 
	
	
    return s.join(' ')
};