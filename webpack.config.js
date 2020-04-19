const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "production",
  // devtool: "source-map",
  entry: {
    "04": "@/entry/04.js",
    "06": "@/entry/06.js",
    "07": "@/entry/07.js",
    "08": "@/entry/08.js",
    "09": "@/entry/09.js",
    "11": "@/entry/11.js",
    "13": "@/entry/13.js"
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve("src")
    }
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "public/js")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  performance: { hints: false }
};
