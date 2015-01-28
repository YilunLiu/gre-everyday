isAdmin = function(){
	return Meteor.user() && Meteor.user().username === 'admin';
}