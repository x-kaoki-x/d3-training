const d3 = require("d3");

// width と height
const w = 500;
const h = 100;

// データ
const dataset = [5, 10, 15, 20, 25];

// 新規に生成した SVG オブジェクトを指す参照
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => {
    return i * 50 + 25;
  })
  .attr("cy", h / 2)
  .attr("r", (d) => {
    return d;
  })
  .attr("fill", "yellow")
  .attr("stroke", "orange")
  .attr("stroke-width", function (d) {
    return d / 2;
  });
