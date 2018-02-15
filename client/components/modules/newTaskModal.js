// newTaskModal.js

if (Meteor.isClient) {

	AutoForm.hooks({
		newTaskModalForm: {
			onSubmit: function (doc) {
				console.log("submitted the form?");
				this.done();
				return false;
			}
		}
	})

	Template.newTaskModal.onCreated(function () {
		console.log("we created the new task template");
	});

}