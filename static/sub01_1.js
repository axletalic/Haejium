document.addEventListener('DOMContentLoaded', function(){ 
    powerGraph();
});

function powerGraph(){
    Highcharts.chart('power_graph', {
        chart: {
            backgroundColor: null,
            zoomType: 'xy',
            plotBackgroundColor: null
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
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

        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true,
            
        }],
        yAxis: [{ // Primary yAxis
            title: {
                text: null,
                style: {
                    // color: Highcharts.getOptions().colors[0]
                    color: '#62ed32'
                }
            },
            labels: {
                format: '{value}kw/h',
                style: {
                    // color: Highcharts.getOptions().colors[0]
                    color: '#62ed32'
                }
            },
            opposite: true,
            // gridLineWidth: 0,
            // minorGridLineWidth: 0

        },{ // Secondary yAxis 
            labels: {
                format: '{value}%',
                style: {
                    // color: Highcharts.getOptions().colors[1]
                    color: '#6699cc'
                }
            },
            title: {
                text: null,
                style: {
                    // color: Highcharts.getOptions().colors[1]
                    color: '#6699cc'
                }
            },
            // gridLineWidth: 0,
            // minorGridLineWidth: 0
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            // align: 'right',
            x: 1650,
            verticalAlign: 'top',
            y: 10,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)',
            itemStyle: {
                //color: '#000000',
                color: '#faebd7',
                fontWeight: 'bold'
            }
        },
        series: [{
            name: '발전량',
            type: 'column',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: ' kw/h'
            },
            color: '#62ed32',
    
        }, {
            name: '발전효율',
            type: 'spline',
            yAxis: 1,
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                // valueSuffix: '°C'
                valueSuffix: '%'
            },
            color: '#6699cc',
        }]
    });
}