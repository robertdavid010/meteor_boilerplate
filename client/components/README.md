## Components

Components are the implementation of the "Modular" approach to software development commonaly referred to in Web application development frameworks.

The purpose of this approach is to appropriately segment application functionality and constructs so as to facilate easy re-use of the component, as well as a safer and easier way to debug or maintain each module, and therefore the application in general.

Current thinking is the segregation of components by "Smartness".

The smartness of a component is dependent upon the degree to which it is able to indepdently create and manage it's own data and view constructs.

Generally these are the categories of components in the modern approach to building "hybrid" applications using Web technology. Any component which goes beyond the capabilities of these categories is generally considered a standalone "package".

1. **Containers**
	
	This component contains the rest of the components that comprise the application as the top level data and view construct, within which other components are included and/or rendered.
	
1. **Modules**
	
	Contains the most logical and data complexity, and will represent a main feature of the app. It generally allows for full access to at least one major process of the associated data model (or segment thereof), along with functionality to access and update the application state. Modules often provide the data context and set the application state for the majority of the remaining components used in the application.
	
1. **Widgets**

	Widgets are slightly "dumber" or more simple than modules. Relying on a smaller data context and set of functions to display and/or allow interaction with smaller subsets of the application data model. They are also often re-used throughout the application in different containers or modules.
	
1. **Views**

	The very dumbest of components. Often just containing code for the view (markup) and very little logic, simply for re-use in the application in any one of the component classes above.

> **Note** Although the above naming conventions will not result in cannonical sequence represented in the ordering of these directories in file systems, their definitions, conventions, and distictions are clear enough. Possible improvements will be considered for conventions.
	