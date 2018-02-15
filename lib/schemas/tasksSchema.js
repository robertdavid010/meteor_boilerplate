// taskSchema.js

Schemas = (typeof Schemas === "undefined") ? {} : Schemas;

// Simple form only schema for testing
Schemas.newTask = new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 56
	},
	content: {
		type: String,
		label: "Task Content",
		max: 144,
		autoform: {
			rows: 2
		}
	}
});
