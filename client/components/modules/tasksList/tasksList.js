// tasksList.js

if (Meteor.isClient) {

	Template.tasksList.onCreated(function () {
		var self = this;
	});

	Template.tasksList.helpers({
		timer: function () {
			var time = 0;
			console.log("check the timer")
			setInterval(function () {
				time += 1;
			},1000)
			return x;
		}
	});

}