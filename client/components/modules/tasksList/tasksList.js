// tasksList.js

if (Meteor.isClient) {

	Template.tasksList.onCreated(function () {
		var self = this;
		self.completeTask = function (id) {
			Tasks.update({_id:id},{$set:{status:"completed"}});
		}
		self.deleteTask = function (id) {
			Tasks.remove(id);
		}
	});

	Template.tasksList.helpers({
		status: function () {
			// this sets the default for view since it is passed to helper below
			return FlowRouter.getParam("status") || "incomplete"; 
		},
		tasks: function (param) {
			return Tasks.find({status:param},{sort:{updatedAt:-1}});
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
			templ.completeTask(id);
		},
		"click [data-action='delete-task']" : function (event, templ) {
			event.preventDefault();
			var id = event.currentTarget.dataset.id;
			templ.deleteTask(id);
		}
	});
}