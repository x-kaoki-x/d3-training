const d3 = require("d3");

// 幅（Width）と高さ（ height）
const w = 600;
const h = 300;
const padding = 30;

// 動的でランダムなデータセット
const dataset = [];
const numDataPoints = 50;
const xRange = Math.random() * 1000;
const yRange = Math.random() * 1000;
for (let i = 0; i < numDataPoints; i++) {
  const newNumber1 = Math.round(Math.random() * xRange);
  const newNumber2 = Math.round(Math.random() * yRange);
  dataset.push([newNumber1, newNumber2]);
}

const xScale = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(dataset, function (d) {
      return d[0];
    })
  ])
  .range([padding, w - padding]);

const yScale = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(dataset, function (d) {
      return d[1];
    })
  ])
  .range([h - padding, padding]);

const rScale = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(dataset, function (d) {
      return d[1];
    })
  ])
  .range([2, 10]);

// X軸の定義
// 目盛りに明示的な指定が無い場合、D3 はスケール xScale を調べ、それに基づいて目盛りの個数や目盛り間隔を自動的に判断します。
const xAxis = d3
  .axisBottom() //
  .scale(xScale)
  .ticks(5); // 目盛りの数。中途半端な数にならないように、D3が自動で調整してくれる。

// Y軸の定義
var yAxis = d3
  .axisLeft() //
  .scale(yScale)
  .ticks(4);

// Create SVG element
var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", function (d) {
    return xScale(d[0]);
  })
  .attr("cy", function (d) {
    return yScale(d[1]);
  })
  .attr("r", function (d) {
    return rScale(d[1]);
  });

// ラベルの追加
// svg
//   .selectAll("text")
//   .data(dataset)
//   .enter()
//   .append("text")
//   .text(function (d) {
//     return d[0] + "," + d[1];
//   })
//   .attr("x", function (d) {
//     return xScale(d[0]);
//   })
//   .attr("y", function (d) {
//     return yScale(d[1]);
//   })
//   .attr("font-family", "sans-serif")
//   .attr("font-size", "11px")
//   .attr("fill", "red");

// X軸の作成
svg
  .append("g") // グループ要素を追加
  .attr("class", "axis") // "axis" クラスを適用
  .attr("transform", "translate(0," + (h - padding) + ")") // transform属性
  .call(xAxis);

// Y軸の作成
svg
  .append("g")
  .attr("class", "axis")
  .attr("transform", "translate(" + padding + ",0)")
  .call(yAxis);
