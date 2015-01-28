Words = new Mongo.Collection('Words');

Meteor.methods({
	wordInsert: function(word){
		if ( !isAdmin())
		{
			throw new Meteor.Error("invalid word" ,"You cannot create word");
		}


		check(word, {
			word: String,
			explaination: String,
			studyId: String

		});

		if (word.word && Words.findOne({word: word.word}))
		{
			throw new Meteor.Error("invalid word", word.word+"已经有了")
		}

		var wordId = Words.insert(word);

		return {_id: wordId};

	}
})