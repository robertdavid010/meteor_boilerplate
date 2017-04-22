# meteor_boilerplate

A boiler plate for the MeteorJS framework using BlazeJS renderer including basic file structure as well as methods and classes.

Designed to work in conjunction with [meteor_init](https://github.com/robertdavid010/meteor_init)

### Codebase architecture

For file structure, this boilerplate uses built in Meteor "eager" loading of code files. It is a good idea to be familiar with the load sequence priority. Also this means the boilerplate is intended to support only limited use of code file imports as required.

From [Meteor Docs](https://guide.meteor.com/structure.html#load-order):

**Default file load order**

1. HTML template files are always loaded before everything else
1. Files beginning with `main.` are loaded last
1. Files inside any `lib/` directory are loaded next
1. Files with deeper paths are loaded next
1. Files are then loaded in alphabetical order of the entire path

> This approach differs from some popular conventions, and is merely the opinionated approach of this boilerplate's developer.

**TODO**

1. Add base code files to support minimal application model CRUD.