// default값 전역변수 설정
var today_power_default = 30000;
var total_power_default = 6000000;
var yesterday_power_default = 38000;
var this_month_power_default = 270000;
var this_year_power_default = 305000;
var yesterday_power_time_default = 15;
var last_month_power_default = 400000;
var last_year_power_default = 7500;

document.addEventListener('DOMContentLoaded', function(){ 
    // default값 설정
    upperTextChange();
    setInterval(function(){
        upperTextChange();
    }, 2000);
    console.log("0");
    // c3Gauge();
    gaugeGraph("power_graph");
    gaugeGraph("factor_graph");
    gaugeGraph("time_graph");
    gaugeGraph("ratio_graph");

    stackChart("situation_graph")
    console.log("1");
});

function upperTextChange(){
    // 현재 출력 설정
    var now_power = randFloat(30000, 40000);
    // 현재 시간당 출력 설정
    var now_power_hour = randFloat(20, 15);
    // 현재 출력값 표시
    document.getElementById("num_power").innerHTML = now_power + "<span>kW</span></p>";
    // 전역 변수에 금일 발전량과 현재 시간당 출력 합산
    today_power_default = parseFloat(today_power_default) + parseFloat(now_power_hour);
    // 금일 발전량 표시
    document.getElementById("today_power").innerHTML = today_power_default.toFixed(1) + "<span>kWh</span></p>";
    // 전역 변수에 누적 발전량과 현재 시간당 출력 합산
    total_power_default = parseFloat(total_power_default) + parseFloat(now_power_hour);
    // 누적 발전량 표시
    document.getElementById("total_power").innerHTML = total_power_default.toFixed(1) + "<span>kWh</span></p>";
    // 전일 발전량 표시
    document.getElementById("yesterday_power").innerHTML = yesterday_power_default + "<span>kWh</span></p>";
    // 금일 발전시간 계산
    var now = new Date();
    var now_time = now.getHours()
    var stop_time
    if(now_time < 5){
        stop_time = now_time;
    }else if(now_time >= 5 && now_time < 21){
        stop_time = 5;
    }else{
        now_time = 20;
    };
    var power_time = now_time - stop_time;
    // 금일 발전시간 표시
    document.getElementById("today_time").innerHTML = power_time + "<span>Hour</span></p>";
    // 금월 발전량 계산
    this_month_power_default = parseFloat(this_month_power_default) + parseFloat(now_power_hour);
    console.log(this_month_power_default)
    // 금월 발전량 표시
    document.getElementById("this_month_power").innerHTML = (this_month_power_default / 1000).toFixed(1) + "<span>MWh</span></p>";
    // 금년 발전량 계산
    this_year_power_default = parseFloat(this_year_power_default) + parseFloat(now_power_hour);
    // 금년 발전량 표시
    document.getElementById("this_year_power").innerHTML = (this_year_power_default / 1000).toFixed(1) + "<span>MWh</span></p>";
    // 전일 발전시간 표시
    document.getElementById("yesterday_power_time").innerHTML = yesterday_power_time_default + "<span>Hour</span></p>";
    // 전월 발전량 표시
    document.getElementById("last_month_power").innerHTML = (last_month_power_default/1000).toFixed(1) + "<span>MWh</span></p>";
    // 전년 발전량 표시
    document.getElementById("last_year_power").innerHTML = last_year_power_default + "<span>MWh</span></p>";
}

function randFloat(min, max){
    return ((Math.random() * (max-min)) + min).toFixed(1);
}

// 게이지 그래프
function gaugeGraph(id_name){
    console.log("start");
    var gaugeOptions = {
        chart: {
            backgroundColor: null,
            type: 'solidgauge',
            plotBackgroundColor: null
        },
    
        title: null,
    
        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
    
        exporting: {
            enabled: false
            // enabled: true
        },
    
        tooltip: {
            enabled: false
        },
    
        // the value axis
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            tickWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },
    
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };
    
    // The speed gauge
    console.log("chart start");
    var chartSpeed = Highcharts.chart(id_name, Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 200,
            labels: {
                style: {
                    color: '#BCF2E9'
                }
            }
            
            // title: {
            //     text: 'Speed'
            // }
        },
    
        credits: {
            enabled: false
        },
    
        series: [{
            name: 'Speed',
            data: [80],
            
            dataLabels: {
                format:
                    '<div style="text-align:center">' +
                    '<span style="font-size:25px">{y}</span><br/>' +
                    '<span style="font-size:12px;opacity:0.4">kw/h</span>' +
                    '</div>',
                color: '#BCF2E9',
            },
            tooltip: {
                valueSuffix: ' kw/h'
            }
        }]
    
    }));
    console.log("chart end");
    
    // Bring life to the dials
    setInterval(function () {
        // Speed
        var point,
            newVal,
            inc;
    
        if (chartSpeed) {
            point = chartSpeed.series[0].points[0];
            inc = Math.round((Math.random() - 0.5) * 100);
            newVal = point.y + inc;
    
            if (newVal < 0 || newVal > 200) {
                newVal = point.y - inc;
            }
    
            point.update(newVal);
        }
    
        // RPM
        // if (chartRpm) {
        //     point = chartRpm.series[0].points[0];
        //     inc = Math.random() - 0.5;
        //     newVal = point.y + inc;
    
        //     if (newVal < 0 || newVal > 5) {
        //         newVal = point.y - inc;
        //     }
    
        //     point.update(newVal);
        // }
    }, 1000);
        
}

// 스택 차트(수평 스택)
function stackChart(id_name){
    Highcharts.chart(id_name, {
        chart: {
            type: 'bar',        // 차트 타입 지정
            backgroundColor:'rgba(255, 255, 255, 0)',       // 차트 배경색 지정(투명)
        },
        // 차트 제목 지정(null : 없음)
        title: {
            text: null
        },
        // 햄버거 메뉴 지정(null : 없음)
        exporting: {
            enabled: false
        },
        // 로고 표시 설정(null: 없음)
        credits: {
            enabled: false
        },
        // x축 설정
        xAxis: {
            // 축 제목 설정
            title: {
                text: null
            },
            // 가로줄 설정
            gridLineWidth: 0,
            // 축 표시 설정
            visible: false,
            // categories: ['Apples',]
        },
        yAxis: {
            // 최대, 최소값 설정
            min: 0,
            // max: 85125,
            // 축 제목 설정
            title: {
                text: null
            },
            // 세로줄 설정
            gridLineWidth: 0,
            // 축 표시 설정
            visible: false,
        },
        // 표시값 하단 표기 설정
        legend: {
            enabled: false
        },
        // legend: {
        //     reversed: true
        // },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        // 데이터
        series: [{
            name: '운영준비중',
            color: '#2BD4B6',
            data: [20]
        }, {
            name: '고장(정지)',
            color : '#F2F180',
            data: [30]
        }, {
            name: '경고',
            color: '#9F2323',
            data: [40]
        }, {
            name: '정상',
            color: '#51BD15',
            data: [50]
        }]
    });
}