if (!Meteor.users.find({username: 'admin'}).count()){
	Accounts.createUser({
		username: "admin",
		email: "klun1994@qq.com",
		password: "11291993"
	});
}