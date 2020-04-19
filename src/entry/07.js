const d3 = require("d3");

const dataset = [5, 10, 15, 20, 25];

// data() でループすることで、メソッドチェーン内で無名関数が使えるようになる。
d3.select("body")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text((d) => {
    return d;
  })
  .style("color", function (d) {
    if (d > 15) {
      // 15 が区切り
      return "red";
    } else {
      return "black";
    }
  });
