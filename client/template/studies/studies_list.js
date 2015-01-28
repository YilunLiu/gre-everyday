Template.studiesList.helpers({
	studies: function () {
		return Studies.find();
	}
});