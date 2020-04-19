const d3 = require("d3");

// 「スケールとは、入力ドメイン（領域）を出力レンジ（範囲）へとマッピングする（対応づける）関数である」
// スケールと聞くと、数値を示す目盛りのように、何か目に見えるものを想像しがちですがそうではありません！

// リンゴの月ごとの売上
// const dataset = [100, 200, 300, 400, 500];

// スケールの入力ドメインとは、入力データの値の取りうる範囲のことです。
// 上記リンゴの売り上げデータでは、100 から 500（すなわちデータセットの最小値と最大値）

// 一方、スケールの出力レンジとは、出力値の取りうる範囲のことです。
// 通常その値は、画面表示用のピクセル単位となります。 出力レンジを決めるのはあなたです。
// もしリンゴ売上棒グラフの高さを、最小 10 ピクセル、最大 350 ピクセルとしたいのなら、10 から 350 が出力レンジとなります。

// 正規化とは
// 正規化とは、元の数値を、その取りうる最小値と最大値に基づいて、0 から 1 の間の値に変換する処理のことです。
// たとえば一年 365 日の中の 310 日目は、一年間のうちのおよそ 0.85、あるいは 85% に変換されます。

// スケールの生成
// 線形スケールの場合、scaleLinear() を使う。
// const scale = d3.scaleLinear().domain([100, 500]).range([10, 350]);

// scale(100); // 10 が戻る
// scale(300); // 180 が戻る
// scale(500); // 350 が戻る

// 幅（Width）と高さ（ height）
const w = 600;
const h = 300;
const padding = 50;

const dataset = [
  [5, 20],
  [480, 90],
  [250, 50],
  [100, 33],
  [330, 95],
  [410, 12],
  [475, 44],
  [25, 67],
  [85, 21],
  [220, 88],
  [600, 150]
];

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
svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function (d) {
    return d[0] + "," + d[1];
  })
  .attr("x", function (d) {
    return xScale(d[0]);
  })
  .attr("y", function (d) {
    return yScale(d[1]);
  })
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "red");
