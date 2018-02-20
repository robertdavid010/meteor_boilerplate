# meteor_boilerplate

A boiler plate for the MeteorJS framework using BlazeJS renderer including basic file structure as well as methods and classes.

Designed to work in conjunction with [meteor_init](https://github.com/robertdavid010/meteor_init)

## Codebase architecture

For file structure, this boilerplate uses built in Meteor "eager" loading of code files. It is a good idea to be familiar with the load sequence priority. Also this means the boilerplate is intended to support only limited use of code file imports as required.

> This approach differs from some popular conventions, and is merely the opinionated approach of this boilerplate's developer.

From [Meteor Docs](https://guide.meteor.com/structure.html#load-order):

**Default file load order**

1. HTML template files are always loaded before everything else
1. Files beginning with `main.` are loaded last
1. Files inside any `lib/` directory are loaded next
1. Files with deeper paths are loaded next
1. Files are then loaded in alphabetical order of the entire path

## Installation

> **Do not simply clone the repository (or a fork) directly into your application.**

### Prepare directory

You will want to remove all existing placeholder files in your new application directory, but keeping the application library and npm related files and directories.

You can run the below to prepare the top level application directory for this boilerplate:

```bash
rm .gitignore
rm -rf client import lib packages private public server

wget https://raw.githubusercontent.com/robertdavid010/meteor_init/master/.gitignore
wget https://github.com/robertdavid010/meteor_boilerplate/archive/master.zip
```

### Download boilerplate

Download this repository [as a zip](https://github.com/robertdavid010/meteor_boilerplate/archive/master.zip) and extract it into the top level empty Meteor app directory to either initialize or propagate your codebase. A basic way to setup the new app is with the [meteor_init](https://github.com/robertdavid010/meteor_init) method.


### Bootstrap Support

Currently this boilerplate supports the installatin as outlined in the initialization above. It is also based on this [Meteor & Bootstrap4](https://medium.com/@g1zmo/bootstrap-4-and-meteor-js-4cec073a4f6c) article.

The main point being, is that basic bootsrap JQuery pugins typically used are not implemented, as they are generally very basic hide/show methods which are asily done in Blaze (see the Bootsrap tabs in the example Todo List for the boilerplate). The bootstrap styles are of course used, as well as support for Popperjs and Tetherjs.


### Notable Patterns

**Event Binding**

For event binding to template DOM elements, we use the `data-event` attribute, which is then targeted specifically by the template method.

```javascript
Template.myTemplate.events({
  "click [data-event='clicker']": function (event, templ) {
    console.log("clicked the clicker element");
  }
});
```

**Schemas**

Patterns for SimlpeSchema included demonstrate a modular approach to creating data validation schemas. Important distiction between traditional Database Table schemes is not attempting to strictly define the schema in its entirety, and rather build up a final collection validation schema from relevant schemas for the collection.

```javascript
Schemas.MasterTaskSchema = new SimpleSchema(Schemas.baseSchema);
Schemas.MasterTaskSchema.extend(Schemas.task);
Tasks.attachSchema(Schemas.MasterTaskSchema);
```

**Missing Blaze Helpers**

There is also included several global Blaze helpers. Most interesting being the comparison helpers. These allow for non-boolean values to be compared simple in the Blaze template. To illustrate:

*Tyipcal Blaze*
```handlebars
{{#if checked}}
<!-- Render some element -->
{{/if}}
```

However the issue with the above is that unless you store the value as boolean in the data field 'checked', you will have to transpose the value. With the coparison helpers the following is possible:

*Boilerplate Comparison Helpers*
```handlebars
{{#if eq status 'checked'}}
<!-- Render some element -->
{{/if}}
```

All basic comparison operators are supported:

|Javascript|Helper|
|---|---|
|===|eq|
|!==|ne|
|<|lt|
|>|gt|
|<=|lte|
|>=|gte|
|&&|AND|
|\|\||OR|

Additional:
+ `isZero` Check the value for zero
+ `not` Check existance/false
+ `in` Check if string contains


**TODO**
1. Add base code files to support minimal application model CRUD.
