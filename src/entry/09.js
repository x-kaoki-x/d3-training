const d3 = require("d3");

const dataset = []; // 配列の宣言と初期化
for (let i = 0; i < 30; i++) {
  // ループを25回繰り返す
  const newNumber = Math.random() * 30; // 0～30のランダムな数を生成
  dataset.push(newNumber); // 生成した数を配列に追加
}

d3.select("body")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", (d) => {
    let barHeight = d * 5; // 高さを 5 倍にします
    return barHeight + "px";
  });
