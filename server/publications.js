Meteor.publish('allStudies', function(){
	return Studies.find();
})

Meteor.publish('dailyWords', function(studyId){
	return Words.find({studyId: studyId});
})