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
      message : 'Your project name'
    }]).then(function (answers) {
      this.state.name = answers.name;
    }.bind(this));
  },

  writing: function() {
      this.directory(
          '',
          this.state.name
      );
  }
});
