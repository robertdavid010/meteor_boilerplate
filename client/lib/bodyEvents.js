// bodyEvents.js

if (Meteor.isClient) {
	
	Template.body.events({

		"click [data-event='UserLogout']": function (event, templ) {
      Meteor.logout();
		},

		"click [data-nav]": function (event) {
			event.preventDefault();
			var route = event.currentTarget.dataset.nav;
			FlowRouter.go(route)
		},

		"click [data-href]" : function (event) {
      event.preventDefault();
      var url = event.currentTarget.dataset.href;
      window.open(url, '_blank');
      window.focus();
    },

    /***** Global Bootstrap events *****/
    "mouseup a, mouseup button, mouseup .btn:not(select), mouseup .list-group-item, mouseup option" : function (event) {
      // Remove focus on clicked UI elements
      $(event.currentTarget).blur();
    },
    "mouseup .navbar-nav a, mouseup .navbar-nav .btn": function (event) {
    	// Collapse the navbar on menu item click in mobile
    	if ($('.navbar-toggler').css('display') !== 'none') {
	    	$('.navbar-collapse').collapse('hide');
      }
    },
    
    // Global app specific functions
    "click [data-event='sidebar-left-toggle']": function (event, self) {
      event.preventDefault();
      $("#wrapper").toggleClass("toggled");
    },

	});

}
