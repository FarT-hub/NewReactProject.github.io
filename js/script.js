function getRandomArbitrary() {
    let min = 10;
    let max = 250;
    let random = Math.random() * (max - min) + min
    return random.toFixed(2);
}

function getRandomArray() {
    let items = new Array(12);
    for(let i = 0;  i < items.length; i++ ) {
        items[i] = +getRandomArbitrary();
    };
    return items;
}


function createBlokForCharts() {
    let firstChart = document.createElement('div');
    firstChart.setAttribute('id', 'firstChart');
    firstChart.setAttribute('class', 'charts-item');

    let secondChart = document.createElement('div');
    secondChart.setAttribute('id', 'secondChart');
    secondChart.setAttribute('class', 'chart');

    let thirdChart = document.createElement('div');
    thirdChart.setAttribute('id', 'thirdChart');
    thirdChart.setAttribute('class', 'chart');

    let fourthChart = document.createElement('div');
    fourthChart.setAttribute('id', 'fourthChart');
    fourthChart.setAttribute('class', 'chart');

    let parentBlock = document.getElementsByClassName('charts-cards');
    parentBlock[0].appendChild(firstChart);
    parentBlock[0].appendChild(secondChart);
    parentBlock[0].appendChild(thirdChart);
    parentBlock[0].appendChild(fourthChart);
}

function createCharts() {
    createBlokForCharts();
    let charts = [
        {
            hide: false,
            chart: {
                chart: {
                    renderTo: 'firstChart',
                    type: 'column',
                    options3d: {
                        enabled: false,
                    }
                },
                
                plotOptions: {
                    column: {
                        depth: 25
                    }
                },
                series: [{
                    data: getRandomArray()
                }]
            },
        },
        {
            hide: false,
            chart: {
                chart: {
                renderTo: 'secondChart',
                type: 'column',
                options3d: {
                    enabled: false,
                }
                },
                title: {
                    text: 'New Tickets'
                },
            subtitle: {
                text: 'Test options by dragging the sliders below'
            },
            plotOptions: {
                column: {
                    depth: 25
                }
            },
            series: [{
                data: getRandomArray()
            }]
            }
        },
        {
            hide: false,
            chart: {
                chart: {
                    renderTo: 'thirdChart',
                    type: 'column',
                    options3d: {
                        enabled: false,
                    }
                },
                title: {
                    text: 'New Tickets'
                },
                subtitle: {
                    text: 'Test options by dragging the sliders below'
                },
                plotOptions: {
                    column: {
                        depth: 25
                    }
                },
                series: [{
                    data: getRandomArray()
                }]
            }
        },
        {
            hide: false,
            chart: {
                chart: {
                    renderTo: 'fourthChart',
                    type: 'column',
                    options3d: {
                        enabled: false,
                    }
                },
                title: {
                    text: 'New Tickets'
                },
                subtitle: {
                    text: 'Test options by dragging the sliders below'
                },
                plotOptions: {
                    column: {
                        depth: 25
                    }
                },
                series: [{
                    data: getRandomArray()
                }]
            }
        }
    ]

    charts.forEach(item => {
        new Highcharts.Chart(item.chart)
    })
}
createCharts();
