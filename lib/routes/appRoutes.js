// appRoutes.js 

/* ********************* */
/* Authentication Routes */
// Here is where the login/register routes go


/* *********** */
/* Open routes */
// These are routes that anyone can access.
var openRoutes = FlowRouter.group({
	name:"openRoutes",
	triggersEnter: [function (context, redirect) {
		var router = FlowRouter.current();
		var rGroup = router.route.group.name;
  	if (Meteor.loggingIn() || Meteor.user()) {
  		if (router.route.name === "userRegister" || router.route.name === "userLogin" || router.route.name === "adminAuth") {
	  		redirect("home");
  		}
  	}
	}]
});

openRoutes.route('/register', {
	name: "userRegister",
	action: function(params, queryParams) {
		BlazeLayout.render("entryAppFrame", {contentMain:"userAuth"});
	}
});

/* *********************** */
/* Main Application Routes */
var appRoutes = FlowRouter.group({
	name: "mainAppRoutes",
	triggersEnter: [function (context, redirect){
  	/* SECURITY!:
  		 Main app routing security logic.
  	*/
		var router = FlowRouter.current();
		var rGroup = router.route.group.name;
		var userDoc = Meteor.user();
		if (!(Meteor.loggingIn() || Meteor.userId())) {
			if (router.route.name !== 'userRegister' || router.route.name !== 'userLogin') {
				// Redirect non-user unless logging in or logged in
			}
    } else {
    	// Other conditions for redirecting users if they are logged in
    }
  }],
});

appRoutes.route('/', {
	name: 'home',
	triggersEnter: [function(context, redirect) {
    redirect('/tasks');
  }]
});

appRoutes.route('/tasks/:status?', {
	name: 'tasks',
	action: function(params, queryParams) {
		BlazeLayout.render("mainAppFrame", {contentMain:"tasksList"});
	}
});
