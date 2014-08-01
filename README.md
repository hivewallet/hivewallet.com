# hivewallet.com

New launch site for the initial release of Hive's multi-currency HD wallet for web.

## Static build
- [Assemble](http://assemble.io/) (.hbs)
- Sass (.scss)
- [Grunticon](https://github.com/filamentgroup/grunticon)
- [Grunt-aws](https://github.com/jpillora/grunt-aws)

## Getting started

- After cloning the repository, `cd` into the folder and grab the node dependencies: `npm install`
- Create a credentials.json file in the root folder (see below) - this doesn't need correct details yet, it's just so that grunt doesn't wig out over the missing file.
- Install grunt: `npm -g install grunt-cli`
- Build the project: `grunt`
- When you're ready to start tinkering, watch for changes: `grunt watch`
- Finally, fire up the static server: `node server`

## Deployment

Use [Vagrant](http://www.vagrantup.com/)/[Ansible](http://docs.ansible.com/intro_installation.html#latest-releases-via-pip) to test deployment configuration. After ensuring both packages are installed, type `vagrant up` to deploy to a fresh image or `vagrant reload --provision` to test re-deployment. Start from scratch each time with `vagrant destroy -f && vagrant up`.
