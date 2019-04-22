const { override, fixBabelImports } = require("customize-cra");

module.exports = override(
  fixBabelImports(
    "import",
    {
      libraryName: "antd",
      libraryDirectory: "es",
      style: "css"
    },
    {
      libraryName: "ant-design-pro",
      libraryDirectory: "lib",
      style: true,
      camel2DashComponentName: false
    }
  )
);
