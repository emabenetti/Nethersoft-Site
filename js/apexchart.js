//Charts de apexcharts
var options1 = {
    series: [{
        name: 'HUMEDAD',
        data: [31, 40, 28, 51, 42, 85, 66]
    }, {
        name: 'TEMPERATURA',
        data: [18, 16, 15, 14, 15, 17, 22]
    }],
    chart: {
        height: 350,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2022-09-19T00:00:00.000Z", "2022-09-19T01:30:00.000Z", "2022-09-19T02:30:00.000Z", "2022-09-19T03:30:00.000Z", "2022-09-19T04:30:00.000Z", "2022-09-19T05:30:00.000Z", "2022-09-19T06:30:00.000Z"]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};

var options2 = {
    chart: {
        height: 450,
        type: "radialBar",
    },
    series: [72],
    colors: ["#60d394"],
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            track: {
                background: '#2b2d42',
                startAngle: -135,
                endAngle: 135,
            },
            dataLabels: {
                name: {
                    show: true,
                },
                value: {
                    show: true,
                    fontSize: '14px',
                    formatter: function (val) {
                        return val + '%'
                    }
                },
                total: {
                    show: true,
                    label: 'Humedad'
                }
            }
        }
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "horizontal",
            gradientToColors: ["#4ba3c3"],
            stops: [0, 50]
        }
    },
    stroke: {
        lineCap: "butt"
    },
    labels: ["Progress"]
};

var options3 = {
    chart: {
        height: 280,
        type: "radialBar",
    },

    series: [30],
    colors: ["#20E647"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "70%",
                background: "#293450"
            },
            track: {
                dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    blur: 4,
                    opacity: 0.15
                }
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    color: "#fff",
                    fontSize: "13px"
                },
                value: {
                    color: "#fff",
                    fontSize: "30px",
                    show: true
                }
            }
        }
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["#87D4F9"],
            stops: [0, 100]
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Alarmas disponibles"]
};


new ApexCharts(document.querySelector("#chart1"), options1).render();

new ApexCharts(document.querySelector("#chart2"), options2).render();

new ApexCharts(document.querySelector("#chart3"), options3).render();