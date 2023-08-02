import React from "react";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { COLORS } from "./../../values/colors";
import PropTypes from "prop-types";

ChartJS.register(ArcElement);

function Chart({ statistics }) {
  const data = {
    labels: [...statistics.categoryNames],
    datasets: [
      {
        label: "Expense",
        data: [...statistics.categoryIdValues],
        backgroundColor: [...statistics.categoryColors],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const formatBalance = (statistics) => {
    const formatedBalance = statistics.toLocaleString("pl-PL", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: true,
      style: "currency",
      currency: "PLN",
    });

    return formatedBalance.replace(",", ".");
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
        const textLabel = chart.config.data.labels[chart._active[0].index];
        const color =
          chart.config.data.datasets[chart._active[0].datasetIndex]
            .backgroundColor[chart._active[0].index];

        ctx.fillStyle = color;
        ctx.fillText(`${textLabel}:`, width / 2, height / 2.2);
        ctx.fillText(`${formatBalance(numberLabel)}`, width / 2, height / 1.8);
      } else {
        ctx.save();
        ctx.fillStyle = COLORS.black;
        ctx.fillText(
          `${formatBalance(statistics.balanceForMonth)}`,
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

Chart.propTypes = {
  statistics: PropTypes.object,
};

export default Chart;
