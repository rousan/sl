# Contribution Guidelines

The new features and bug fixes are merged into `develop` branch. The `master` branch
contains the latest stable release.

Please, try to follow:

* Clone the repository.
* Checkout `develop` branch.
* Create feature or bug fixing branch using `git flow`
* Install dependencies.
* Add your new features or fixes.
* Run test.
* Build the project.
* Send PR.

```sh
$ git clone https://github.com/rousan/sl.git
$ cd sl
$ git checkout develop
$ git flow init
$ git flow feature start <your-feature-branch-name>
$ npm i
$ npm test
$ npm run build
```