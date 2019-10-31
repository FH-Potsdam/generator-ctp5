const Generator = require("yeoman-generator");
const glob = require("glob");
const mkdirp = require("mkdirp");
module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name (no special characters please)",
        default: this.appname // Default to current folder name
      }
    ]);
    this.answers.name = this.answers.name.replace(/[^a-zA-Z ]/g, "");
    this.answers.name = this.answers.name.replace(/ /g, "-");
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("_package.json"),
      this.destinationPath("package.json"),
      {
        name: this.answers.name
      }
    );

    this.writeRawFiles("basic");
  }
  writeRawFiles(templateName) {
    const templateFiles = glob.sync(`${templateName}/**/[!_]*`, {
      nodir: true,
      cwd: __dirname,
      dot: true
    });

    templateFiles.forEach(filePath => {
      const templatePath = this.templatePath(filePath).replace("templates", "");
      const destPath = this.destinationPath(filePath).replace("basic", "");

      this.fs.copy(templatePath, destPath, this.props);
    });
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false
    });
  }
};
