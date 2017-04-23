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

### Installation

**Do not simply clone the repository (or a fork) directly into your application.**

#### Prepare directory

You will want to remove all existing placeholder files in your new application directory, but keeping the application library and npm related files and directories.

You can run the below to prepare the top level application directory for this boilerplate:

```bash
rm .gitignore
rm -rf client import lib packages private public server

wget https://raw.githubusercontent.com/robertdavid010/meteor_init/master/.gitignore
wget https://github.com/robertdavid010/meteor_boilerplate/archive/master.zip
```

#### Download boilerplate


Download this repository [as a zip](https://github.com/robertdavid010/meteor_boilerplate/archive/master.zip) and extract it into the top level empty Meteor app directory to either initialize or propagate your codebase. A basic way to setup the new app is with the [meteor_init](https://github.com/robertdavid010/meteor_init) method.



**TODO**

1. Add base code files to support minimal application model CRUD.