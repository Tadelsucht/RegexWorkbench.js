function RWmatch(regexPattern, regexInput, modifiers) {
	if(regexPattern != "" && regexInput != ""){
		try {
			var pattern = RegExp(regexPattern, modifiers);
		} catch (e) {
			// Error: Not a regular expression
		}
		var matchArray = new Array();
		
		
		match = pattern.exec(regexInput);
		for (var i = 0; match != null; i++) {
			matchArray[i] = match[1];
			for(var j = 2; j <= match.length-1; j++){
				matchArray[i] = matchArray[i] + "," + match[j];
			}
			
			match = pattern.exec(regexInput);
		}
	
	
		return matchArray;
	}
}

function RWreplace(regexPattern, regexReplace, regexInput, modifiers) {
	try {
		var pattern = RegExp(regexPattern, modifiers);
	} catch (e) {
		// Error: Not a regular expression
	}
	
	return regexInput.replace(pattern, regexReplace);
}
