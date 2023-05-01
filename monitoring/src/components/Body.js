import React from "react";
import Highcharts from 'highcharts';
import styles from './Body.module.css'
import Card from './Card'
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsMore from 'highcharts/highcharts-more';
import solidGauge from "highcharts/modules/solid-gauge.js";
import GaugeChart from "./GaugeChart";
HighchartsExporting(Highcharts);
HighchartsMore(Highcharts);
solidGauge(Highcharts);

const options = {
    chart: {
        type: "solidgauge",
        backgroundColor: 'transparent',
        spacing: [0, 0, 0, 0],
        borderRadius: 10,
        width: 300,
        height: 300,
        marginTop: 0, // Define as propriedades de margem como 0
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0
    },
    title: null,

    credits: {
        enabled: false
    },
    pane: {
        center: ['50%', '60%'],
        size: '90%',
        startAngle: -90,
        endAngle: 90,
        background: [
            {
                // Track for Move
                backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        ]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        stops: [
            [0.1, '#538EFF'], // blue
            [0.3, '#55BF3B'], // green
            [0.7, '#DDDF0D'], // yellow
            [0.9, '#DF5353'] // red
        ],
        title: {
            y: -60,
            style: {
                color: '#FFFF',
            },
        },
        labels: {
            y: 20,
            format: '{value} °C',
            style: {
                color: '#FFFF',
            }
        },

    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true,
                color:"#fff"
            }

        }
    },

    series: [
        {
            name: "Temperatura",
            type: "solidgauge",
            data: [0],
            color: "#fff",
            borderWidth: 0,
            dataLabels: {
                textOutlineWidth: 0,
                format:
                    '<div style="text-align:center">' +
                    '<span style="font-size:25px">{y}</span> ºC<br/>' +
                    '</div>'
            },
        },

    ],
    exporting: {
        enabled: false
    },

    tooltip: {
        enabled: false
    },
};


function Body({ valorJson }) {

    return (
        <div className={styles.body}>

            <div className={styles.body_cards}>

                <h4>Alimentação</h4>
                <div className={styles.cards}>
                    
                    <Card
                        titulo={"Alimentador"}
                        valor={valorJson.alimentador}
                        SI={"RPM"}
                    />
                     <Card
                        titulo={"Taxa Separador Magnético"}
                        valor={valorJson.taxa_separador_magnetico}
                        SI={"ton"}
                    />
                    <Card
                        titulo={"Balança Entrada"}
                        valor={valorJson.balanca_entrada}
                        SI={"ton"}
                    />                   
                    <Card
                        titulo={"Balança Saída"}
                        valor={valorJson.balanca_saida}
                        SI={"ton"}

                    />
                      <Card
                        titulo={"Balança Perca"}
                        valor={valorJson.balanca_perca}
                        SI={"ton"}

                    />
                </div>

            </div>
            <div  className={styles.cards}>
                <GaugeChart
                    chartOptions={options}
                    valor={valorJson.temp_sm1}
                    title="Temperatura SM 1"
                />
                <GaugeChart
                    chartOptions={options}
                    valor={valorJson.temp_sm2}
                    title="Temperatura SM 1"
                />
                <GaugeChart
                    chartOptions={options}
                    valor={valorJson.temp_sm3}
                    title="Temperatura Fornalha"
                />
            </div>
        </div>
    )

}


export default Body;