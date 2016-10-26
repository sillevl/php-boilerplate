# php-boilerplate
PHP boilerplate project with Grunt tasks, Foundation framework and SASS

## Requirements

* Nodejs and npm: Get nodejs from [https://nodejs.org/](https://nodejs.org/)
* Grunt-cli: `npm install -g grunt-cli`
* Bower: `npm install -g bower`

## Setup

To start a ne project based on `php-boilerplate`, clone the project into a new directory. Replace `your-new-project-name` with the name of your new project.

```
git clone git@github.com:sillevl/php-boilerplate.git your-new-project-name
```
Next install all required packages by running:

```
npm install
```

and
```
bower install
```

## Usage

Just start adding your custom projects code and files.
Run Grunt to compile your css and js files.

```
grunt 
```

## Structure

### PHP

All php files should be placed inside the `src` directory.

### SASS

All custom scss files can be placed inside the `assets/scss` directory. An `app.scss` file is already in place to put custom SASS code.

Note: new files should be added to the `Gruntfile.js` configuration to be included in the Grunt tasks

### JavaScript

All custom JavaScript files can be placed inside the `assets/js` directory. An `app.js` file is already in place to put custom JavaScript code.

Note: new files should be added to the `Gruntfile.js` configuration to be included in the Grunt tasks
