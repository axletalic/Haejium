document.addEventListener('DOMContentLoaded', function(){ 
    drawGraph();
});

function drawGraph(){
    Highcharts.chart('graph', {
        chart: {
            backgroundColor: null,
            plotBackgroundColor: null
        },
    
        title: {
            text: null
        },
    
        // subtitle: {
        //     text: 'Source: thesolarfoundation.com'
        // },
        exporting: {
            enabled: false
            // enabled: true
        },
        tooltip: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        yAxis: {
            title: {
                text: null
            },
            gridLineColor: '#5b5b5b',
        },
    
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2017'
            }
        },
    
        // legend: {
        //     layout: 'vertical',
        //     align: 'right',
        //     verticalAlign: 'middle'
        // },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
    
        series: [{
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
            color: "#36B1FF"
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
            color: "#F2771D"
        },],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    });
}