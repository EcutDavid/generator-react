var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
    this.state = {};
  },

  prompting: function() {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }]).then(function (answers) {
      this.state.name = answers.name;
    }.bind(this));
  },

  method1: function () {
    console.log('method 1 just ran');
    console.log(this.state);
  },

  _method3: function() {
    console.log('this is an internal method');
  }
});
