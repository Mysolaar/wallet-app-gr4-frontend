import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { COLORS } from "./../../values/colors";
ChartJS.register(
  ArcElement
  //  Tooltip
  // to consider if it's really necessary
);

function Chart() {
  const data = {
    labels: [
      "Main expenses",
      "Products",
      "Car",
      "Self care",
      "Child care",
      "Household products",
      "Education",
      "Leisure",
      "Other expenses",
    ],
    datasets: [
      {
        label: "Expense",
        data: [8700, 3800.74, 1500, 800, 2208.5, 300, 3400, 1230, 610],
        backgroundColor: [
          COLORS.yellow300,
          COLORS.orange100,
          COLORS.red200,
          COLORS.purple50,
          COLORS.indigo300,
          COLORS.indigo500,
          COLORS.blue200,
          COLORS.green300,
          COLORS.teal400,
        ],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
    options: {
      plugins: {
        tooltip: {
          backgroundColor: "red",
        },
      },
    },
  };

  const hoverLabel = {
    id: "hoverLabel",
    afterDatasetDraw(chart) {
      const {
        ctx,
        chartArea: { width, height },
      } = chart;
      ctx.save();

      ctx.font = "700 18px Circe";
      ctx.textBaseLine = "center";
      ctx.textAlign = "center";

      if (chart._active.length > 0) {
        const numberLabel =
          chart.config.data.datasets[chart._active[0].datasetIndex].data[
            chart._active[0].index
          ];

        console.log(ctx.font);
        const textLabel = chart.config.data.labels[chart._active[0].index];
        const color =
          chart.config.data.datasets[chart._active[0].datasetIndex]
            .backgroundColor[chart._active[0].index];

        ctx.fillStyle = color;
        ctx.fillText(`${textLabel}:`, width / 2, height / 2.2);
        ctx.fillText(`€${numberLabel}`, width / 2, height / 1.8);
      } else {
        ctx.save();
        ctx.fillStyle = COLORS.black;
        ctx.fillText(
          `€ ${data.datasets[0].data.reduce((p, c) => p + c).toFixed(2)}`,
          chart.getDatasetMeta(0).data[0].x,
          chart.getDatasetMeta(0).data[0].y
        );
      }
    },
  };

  return (
    <div
      style={{
        width: "288px",
        height: "288px",
      }}
    >
      <Doughnut data={data} plugins={[hoverLabel]} />
    </div>
  );
}

export default Chart;
