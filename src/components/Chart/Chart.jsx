import { useEffect } from "react";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { COLORS } from "./../../values/colors";
import PropTypes from "prop-types";

ChartJS.register(ArcElement);

function Chart({ statistics }) {
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

  const noDataCheck = () => {
    return (
      !statistics ||
      Object.keys(statistics).length === 0 ||
      statistics.usedCategoryIds.length === 0
    );
  };

  useEffect(() => {}, [
    statistics?.balanceForMonth,
    statistics?.usedCategoryIds?.length,
  ]);

  const data = {
    labels: noDataCheck() ? ["Category"] : [...statistics.categoryNames],
    datasets: [
      {
        label: "Expense",
        data: noDataCheck() ? [1] : [...statistics.categoryIdValues],
        balance: statistics.balanceForMonth,
        backgroundColor: noDataCheck()
          ? [COLORS.white]
          : [...statistics.categoryColors],
        borderWidth: noDataCheck() ? 1 : 0,
        cutout: "70%",
      },
    ],
  };

  const hoverLabel = {
    id: "hoverLabel",
    afterDatasetDraw(chart) {
      const newValue = statistics.balanceForMonth;

      const {
        ctx,
        chartArea: { width, height },
      } = chart;

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
        ctx.fillText(
          `${
            noDataCheck() ? "Add income or expense" : formatBalance(numberLabel)
          }`,
          width / 2,
          height / 1.8
        );
      } else {
        ctx.fillStyle = COLORS.black;
        chart.update();

        ctx.fillText(
          `${noDataCheck() ? 0 : formatBalance(newValue)}`,
          chart.getDatasetMeta(0).data[0].x,
          chart.getDatasetMeta(0).data[0].y
        );
      }
      chart.update();
    },
  };

  return (
    <div
      style={{
        width: "288px",
        height: "288px",
      }}
    >
      <Doughnut
        data={data}
        key={statistics.balanceForMonth}
        plugins={[hoverLabel]}
        options={{ resizable: false, maintainAspectRatio: true }}
      />
    </div>
  );
}

Chart.propTypes = {
  statistics: PropTypes.object,
};

export default Chart;
