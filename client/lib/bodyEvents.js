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

    /***** Global event to reset bootstrap states on UI elements after click *****/
    "mouseup a, mouseup button, mouseup .btn:not(select), mouseup .list-group-item, mouseup option" : function (event) {
      $(event.currentTarget).blur();
    },
    

	});

}
