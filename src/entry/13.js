const d3 = require("d3");

// 幅（Width）と高さ（ height）
const w = 500;
const h = 150;
const barPadding = 1;

const dataset = [
  5,
  10,
  13,
  19,
  21,
  25,
  22,
  18,
  15,
  13,
  11,
  12,
  15,
  20,
  18,
  17,
  16,
  18,
  23,
  25
];

// SVG 要素の生成
var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => {
    return i * (w / dataset.length);
  })
  .attr("y", (d) => {
    return h - d * 4; // SVG の高さからデータの値を引く
  })
  .attr("width", w / dataset.length - barPadding)
  .attr("height", (d) => {
    return d * 4; // データの値 * 5
  })
  .attr("fill", (d) => {
    return "rgb(0, 0, " + d * 10 + ")";
  });

// ラベルの追加
svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => {
    return d;
  })
  .attr("x", (d, i) => {
    return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
  })
  .attr("y", (d) => {
    return h - d * 4 + 14; // 15 を 14 に
  })
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "white")
  .attr("text-anchor", "middle");
