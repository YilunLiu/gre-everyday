Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function(){
		return Meteor.subscribe('allStudies');
	}
});


Router.route('/studies/:_id', {
	name: 'studyPage',
	waitOn: function(){
		return Meteor.subscribe('dailyWords',this.params._id);
	},
	data: function() {
		return {
			words: Words.find({studyId: this.params._id}).fetch()
		};
	}
});

Router.route('/',{
	name: 'home',
	template: "studiesList"
});

Router.route('/studies',{
	name: 'studiesList',
	template: "studiesList"
})

Router.route('/studySubmit',{
	name: 'studySubmit',
	template: 'studySubmit'
})