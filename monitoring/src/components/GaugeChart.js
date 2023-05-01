import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styles from './GaugeChart.module.css'

const GaugeChart = ({ chartOptions, valor,title }) => { 
    const chartRef = useRef(null);

   
  useEffect(() => {

    if (chartRef.current) {
      const chart = chartRef.current.chart;
      var datetime = (new Date()).getTime();

      // use a API do Highcharts para atualizar o gráfico
      chart.series[0].addPoint([datetime, parseFloat(valor)], true, true);
      chart.redraw();
    }
  }, [valor]);


    return (
        <div className={styles.gaugeChart}>
            <h4>{title}</h4>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} ref={chartRef} />
        </div>
    );
};

export default GaugeChart;