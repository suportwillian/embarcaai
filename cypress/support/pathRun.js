// runSpecs.js
const paths = require("../utils/pathManager");

// Execute os arquivos de spec usando os caminhos definidos no pathManager
describe("Executar arquivos de spec", () => {
  Object.keys(paths).forEach((key) => {
    const path = paths[key];
    require(path);
  });
});