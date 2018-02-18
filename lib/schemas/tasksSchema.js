// taskSchema.js

Schemas = (typeof Schemas === "undefined") ? {} : Schemas;

// Simple form only schema for testing
Schemas.task = new SimpleSchema({
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
	},
	status: {
		type: String,
		allowedValues: ["incomplete","completed"],
		defaultValue: "incomplete",
		autoform: {
			afFieldInput: {
				type: "hidden"
			},
			afFormGroup: {
	      label: false
	    }
		}
	},
});

Schemas.MasterTaskSchema = new SimpleSchema(Schemas.baseSchema);
Schemas.MasterTaskSchema.extend(Schemas.task);
Tasks.attachSchema(Schemas.MasterTaskSchema);
