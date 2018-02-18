// tasksList.js

if (Meteor.isClient) {

	Template.tasksList.onCreated(function () {
		var self = this;
		self.setCompleted = function (id) {
			Tasks.update({_id:id},{$set:{status:"completed"}});
		}
	});

	Template.tasksList.helpers({
		status: function () {
			// this sets the default for view since it is passed to helper below
			return FlowRouter.getParam("status") || "incomplete"; 
		},
		tasks: function (param) {
			return Tasks.find({status:param});
		}
	});

	Template.tasksList.events({
		"click [data-action='select-tab']" : function (event, temp) {
			event.preventDefault();
			var e = event.currentTarget;
			// var active = $(e).hasClass('active');
			if (!$(e).hasClass('active')) {
				FlowRouter.setParams({status:e.dataset.param});
			}
		},
		"click [data-action='complete-task']" : function (event, templ) {
			event.preventDefault();
			var id = event.currentTarget.dataset.id;
			templ.setCompleted(id);
		}
	});
}