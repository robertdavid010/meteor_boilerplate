// tasksList.js

if (Meteor.isClient) {

	Template.tasksList.onCreated(function () {
		var self = this;
		self.setCompleted = function (id) {
			console.log("completing" + id);
			Tasks.update({_id:id},{$set:{status:"completed"}});
		}
	});

	Template.tasksList.helpers({
		status: function () {
			return FlowRouter.getParam("status") || "incomplete";
		},
		tasks: function (param) {
			var doc = [
				{_id:"403845098",title:"New taksers",content:"do this task plz",status:"incomplete"},
				{_id:"403845999",title:"New taksers",content:"do this task plz",status:"incomplete"},
				{_id:"403846000",title:"New taksers",content:"do this task plz",status:"completed"},
				{_id:"403846001",title:"New taksers",content:"do this task plz",status:"incomplete"}
			];
			return Tasks.find({status:param});
			// return doc.filter(function (e) {
			// 	return e.status ===  param;
			// });
		}
	});

	Template.tasksList.events({
		"click #status-tabs .nav-link" : function (event, temp) {
			event.preventDefault();
			var e = event.currentTarget;
			console.log(event.currentTarget.dataset.param);
			var active = $(event.currentTarget).hasClass('active');
			if (!active) {
				console.log("we setting param");
				FlowRouter.setParams({status:e.dataset.param});
				// $("#status-nav .nav-link").not(e).addClass('active');
			}
			// body...
		},
		"click [data-action='complete-task']" : function (event, templ) {
			event.preventDefault();
			var id = event.currentTarget.dataset.id;
			templ.setCompleted(id);
		}
	});
}