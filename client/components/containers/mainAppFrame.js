// mainAppFrame.js

import 'bootstrap';

if (Meteor.isClient) {

	Template.mainAppFrame.hooks({

		created: function () {
			var self = this;

			self.initialized = false;

			// Init App
			self.initializeApp = function () {
				Session.setDefault({
					// Set session defaults
				});

				// Do other initializations

				// Set the app initialized state
				self.initialized = true;
			};

			self.autorun(function () {

				// If first run, call initialization method
				if (!self.initialized) {
					self.initializeApp();
				}

			});

		}

	});

	Template.mainAppFrame.helpers({

		appFrameHelper: function () {
		}

	});

}