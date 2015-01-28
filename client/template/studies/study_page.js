Template.studyPage.helpers({
	wordsWithIndex: function(){
		var words = this.words;
		for (var i = 0;	 i < words.length; i++){
			words[i].index = i+1;
		}
		return words;
	}
});
