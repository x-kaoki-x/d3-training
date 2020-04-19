const d3 = require("d3");

const dataset = [5, 10, 15, 20, 25];

// 要素にクラスを追加するには、selection.attr()を使う。
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
