Studies = new Mongo.Collection('Studies');


Meteor.methods({
	createAStudy: function(){

		if ( !isAdmin())
		{
			throw new Meteor.Error("invalid list", "You cannot create list");
		}
		
		var date = moment().date();
		var month = moment().month()+1;
		var year = moment().year();

		var studyId;

		if (0 && Studies.find({date: date, month: month, year: year}).count() != 0){
			 throw new Meteor.Error("invalid list","今天已经有一个单词表了，不要这么勤奋哦");
		}
		else{
			var study = {
				date: date,
				month: month,
				year: year
			};
			studyId = Studies.insert(study);
			return {_id: studyId};
		}
	}
});
