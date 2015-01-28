Template.studySubmit.events({
	'submit form': function (e) {
		e.preventDefault();


		var date = moment().date();
		var month = moment().month() + 1;
		var year = moment().year();

		var study = Studies.findOne({date: date, year: year, month: month});

		if (!study){
			Meteor.call('createAStudy', 1, function (error, result) {
				if (error){
					return throwError(error.reason);
				}
				else{
					for (var i=1; i<=10 ;i++){
						var word = {
							word: $(e.target).find("#word"+i).val(),
							explaination: $(e.target).find("#explaination"+i).val(),
							studyId: result._id
						};
						Meteor.call('wordInsert', word, function (error, result) {
							if (error){
								throwError(error.reason);
							}
						});
					}
					Router.go('studyPage',{_id: result._id});
				}
			});
		}
		else {
			throwError("今天已经有一个单词表了，不要这么勤奋哦~");
			Router.go('studyPage',{_id: study.fetch()._id});
		}
	}
});