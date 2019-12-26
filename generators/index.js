const Generator = require("yeoman-generator");
const glob = require("glob");
let type = "p5js";
module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name (no special characters please)",
        default: this.appname // Default to current folder name
      },
      {
        type: "list",
        name: "type",
        message: "Select your sketch type",
        choices: ["p5js", "vanillajs"],
        filter: function(val) {
          return val.toLowerCase();
        }
      }
    ]);
    this.answers.name = this.answers.name.replace(/[^a-zA-Z ]/g, "");
    this.answers.name = this.answers.name.replace(/ /g, "-");
    type = this.answers.type;
  }

  writing() {
    if (this.answers === undefined) {
      throw new Error("Ansers not defined");
    }
    let pgkTemplateName = "";
    switch (this.answers.type) {
      case "p5js": {
        pgkTemplateName = "_package.json";
        break;
      }
      case "vanillajs": {
        pgkTemplateName = "_package-vanillajs.json";
        break;
      }
    }
    this.fs.copyTpl(
      this.templatePath(pgkTemplateName),
      this.destinationPath("package.json"),
      {
        name: this.answers.name
      }
    );

    this.writeRawFiles(type);
    this.writeRawFiles("common");
  }

  // @ts-ignore
  writeRawFiles(templateName) {
    const templateFiles = glob.sync(`${templateName}/**/[!_]*`, {
      nodir: true,
      cwd: __dirname,
      dot: true
    });
    templateFiles.forEach(filePath => {
      const templatePath = this.templatePath(filePath).replace("templates", "");
      const destPath = this.destinationPath(filePath)
        .replace(type, "")
        .replace("common", "");
      // @ts-ignore
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
