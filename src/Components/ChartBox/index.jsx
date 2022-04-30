import "./styles.css";

import { Chart } from "react-google-charts";

export function ChartContainer() {
  const data = [
    ["Categoria", "Valor"],
    ["Casa", 11],
    ["Alimentação", 7],
    ["Serviços", 2],
    ["Saúde", 2],
    ["Outros", 2] // CSS-style declaration
  ];

  const options = {
    pieHole: 0.5,
    is3D: false,
    width: "100%",
    backgroundColor: "transparent",
    legend: {
      position: "right",
      textStyle: { color: "white", fontSize: 12 },
      alignment: "center"
    },
    chartArea: { left: 20, top: 10, botton: 10, width: "100%", height: "90%" }
  };

  return (
    <div className="boxContent">
      <p>Gastos Por Categoria</p>
      <div className="chartBox">
        <Chart
          chartType="PieChart"
          width="100%"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}
