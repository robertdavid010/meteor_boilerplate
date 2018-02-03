// init.js

if (Meteor.isClient) {

	/* Uncomment below after user accounts are set up */
	
	// FlowRouter.wait();
	// var usrSub = Meteor.subscribe("userLoggedIn");
	// Tracker.autorun(function () {

		// Init FlowRouter only after subscriptions ready, so routes can be dependent on them
		// if (Roles.subscription.ready() && usrSub.ready() && !FlowRouter._initialized) {
			// FlowRouter.initialize();
		// };

	// });


	Meteor.startup(function () {
		// Things to do on startup of app, similar to $(document).ready()
	});
	

}