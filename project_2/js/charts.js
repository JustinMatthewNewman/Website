




// bar Line Chart Code
var chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        type: 'line',
        label: 'Dataset 1',
        borderColor: window.chartColors.blue,
        borderWidth: 2,
        fill: false,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: window.chartColors.red,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ],
        borderColor: 'white',
        borderWidth: 2
    }, {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: window.chartColors.green,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }]

};


function r() {
	randomize();
    chartData.datasets.forEach(function(dataset) {
        dataset.data = dataset.data.map(function() {
            return randomScalingFactor();
        });
    });
    window.myMixedChart.update();
};

// Stacked area Line chart code
var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var config = {
			type: 'line',
			data: {
				labels: ["January", "February", "March", "April", "May", "June", "July"],
				datasets: [{
					label: "My First dataset",
					borderColor: window.chartColors.red,
					backgroundColor: window.chartColors.red,
					data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
				}, {
					label: "My Second dataset",
					borderColor: window.chartColors.blue,
					backgroundColor: window.chartColors.blue,
					data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
				}, {
					label: "My Third dataset",
					borderColor: window.chartColors.green,
					backgroundColor: window.chartColors.green,
					data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
				}, {
					label: "My Third dataset",
					borderColor: window.chartColors.yellow,
					backgroundColor: window.chartColors.yellow,
					data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
				}]
			},
			options: {
				responsive: true,
				title:{
					display:true,
					text:"Chart.js Line Chart - Stacked Area"
				},
				tooltips: {
					mode: 'index',
				},
				hover: {
					mode: 'index'
				},
				scales: {
					xAxes: [{
						scaleLabel: {
							display: true,
							labelString: 'Month'
						}
					}],
					yAxes: [{
						stacked: true,
						scaleLabel: {
							display: true,
							labelString: 'Value'
						}
					}]
				}
			}
		};


		function r6() {
			config.data.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return randomScalingFactor();
				});

			});

			window.myLine.update();
		};

		// line styles example

var config3 = {
	type: 'line',
	data: {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [{
			label: "Unfilled",
			fill: false,
			backgroundColor: window.chartColors.blue,
			borderColor: window.chartColors.blue,
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()
			],
		}, {
			label: "Dashed",
			fill: false,
			backgroundColor: window.chartColors.green,
			borderColor: window.chartColors.green,
			borderDash: [5, 5],
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()
			],
		}, {
			label: "Filled",
			backgroundColor: window.chartColors.red,
			borderColor: window.chartColors.red,
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()
			],
			fill: true,
		}]
	},
	options: {
		responsive: true,
		title:{
			display:true,
			text:'Chart.js Line Chart'
		},
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Value'
				}
			}]
		}
	}
};



function r5() {
	config3.data.datasets.forEach(function(dataset) {
		dataset.data = dataset.data.map(function() {
			return randomScalingFactor();
		});

	});

	window.myLine2.update();
};
//Doughnut Graph

var randomScalingFactor = function() {
	return Math.round(Math.random() * 100);
};

var config2 = {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
			],
			backgroundColor: [
				window.chartColors.red,
				window.chartColors.orange,
				window.chartColors.yellow,
				window.chartColors.green,
				window.chartColors.blue,
			],
			label: 'Dataset 1'
		}],
		labels: [
			"Red",
			"Orange",
			"Yellow",
			"Green",
			"Blue"
		]
	},
	options: {
		responsive: true,
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Chart.js Doughnut Chart'
		},
		animation: {
			animateScale: true,
			animateRotate: true
		}
	}
};


function r4() {
	config2.data.datasets.forEach(function(dataset) {
		dataset.data = dataset.data.map(function() {
			return randomScalingFactor();
		});
	});

	window.myDoughnut.update();
};

// Radial

var presets = window.chartColors;
		var utils = Samples.utils;
		var inputs = {
			min: 8,
			max: 16,
			count: 8,
			decimals: 2,
			continuity: 1
		};

		function generateData() {
			// radar chart doesn't support stacked values, let's do it manually
			var values = utils.numbers(inputs);
			inputs.from = values;
			return values;
		}

		function generateLabels(config) {
			return utils.months({count: inputs.count});
		}

		utils.srand(42);

		var data = {
			labels: generateLabels(),
			datasets: [{
				backgroundColor: utils.transparentize(presets.red),
				borderColor: presets.red,
				data: generateData(),
				label: 'D0'
			}, {
				backgroundColor: utils.transparentize(presets.orange),
				borderColor: presets.orange,
				data: generateData(),
				hidden: true,
				label: 'D1',
				fill: '-1'
			}, {
				backgroundColor: utils.transparentize(presets.yellow),
				borderColor: presets.yellow,
				data: generateData(),
				label: 'D2',
				fill: 1
			}, {
				backgroundColor: utils.transparentize(presets.green),
				borderColor: presets.green,
				data: generateData(),
				label: 'D3',
				fill: false
			}, {
				backgroundColor: utils.transparentize(presets.blue),
				borderColor: presets.blue,
				data: generateData(),
				label: 'D4',
				fill: '-1'
			}, {
				backgroundColor: utils.transparentize(presets.purple),
				borderColor: presets.purple,
				data: generateData(),
				label: 'D5',
				fill: '-1'
			}]
		};

		var options = {
			maintainAspectRatio: true,
			spanGaps: false,
			elements: {
				line: {
					tension: 0.000001
				}
			},
			plugins: {
				filler: {
					propagate: false
				},
				samples_filler_analyser: {
					target: 'chart-analyser'
				}
			}
		};

		var chart = new Chart('chart-0', {
			type: 'radar',
			data: data,
			options: options
		});

		function togglePropagate(btn) {
			var value = btn.classList.toggle('btn-on');
			chart.options.plugins.filler.propagate = value;
			chart.update();
		}

		function toggleSmooth(btn) {
			var value = btn.classList.toggle('btn-on');
			chart.options.elements.line.tension = value? 0.4 : 0.000001;
			chart.update();
		}

		function randomize() {
			inputs.from = [];
			chart.data.datasets.forEach(function(dataset) {
				dataset.data = generateData();
			});
			chart.update();
			randomize2();
			
		}

// scatter

var color = Chart.helpers.color;
	var scatterChartData = {
		datasets: [{
			label: "My First dataset",
			xAxisID: "x-axis-1",
			yAxisID: "y-axis-1",
			borderColor: window.chartColors.red,
			backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
			data: [{
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}]
		}, {
			label: "My Second dataset",
			xAxisID: "x-axis-1",
			yAxisID: "y-axis-2",
			borderColor: window.chartColors.blue,
			backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
			data: [{
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}]
		}]
	};


	function r3() {
		scatterChartData.datasets.forEach(function(dataset) {
			dataset.data = dataset.data.map(function() {
				return {
					x: randomScalingFactor(),
					y: randomScalingFactor()
				};
			});
		});
		window.myScatter.update();
	};



// polar area

var randomScalingFactor = function() {
	return Math.round(Math.random() * 100);
};

var chartColors = window.chartColors;
var color = Chart.helpers.color;
var config7 = {
	data: {
		datasets: [{
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
			],
			backgroundColor: [
				color(chartColors.red).alpha(0.5).rgbString(),
				color(chartColors.orange).alpha(0.5).rgbString(),
				color(chartColors.yellow).alpha(0.5).rgbString(),
				color(chartColors.green).alpha(0.5).rgbString(),
				color(chartColors.blue).alpha(0.5).rgbString(),
			],
			label: 'My dataset' // for legend
		}],
		labels: [
			"Red",
			"Orange",
			"Yellow",
			"Green",
			"Blue"
		]
	},
	options: {
		responsive: true,
		legend: {
			position: 'right',
		},
		title: {
			display: true,
			text: 'Chart.js Polar Area Chart'
		},
		scale: {
		  ticks: {
			beginAtZero: true
		  },
		  reverse: false
		},
		animation: {
			animateRotate: false,
			animateScale: true
		}
	}
};


function r2() {
	config7.data.datasets.forEach(function(piece, i) {
		piece.data.forEach(function(value, j) {
			config7.data.datasets[i].data[j] = randomScalingFactor();
		});
	});
	window.myPolarArea.update();
};


// Radial2

var presets2 = window.chartColors;
		var utils = Samples.utils;
		var inputs2 = {
			min: 8,
			max: 16,
			count: 5,
			decimals: 2,
			continuity: 1
		};

		function generateData2() {
			// radar chart doesn't support stacked values, let's do it manually
			var values = utils.numbers(inputs2);
			inputs2.from = values;
			return values;
		}


		utils.srand(42);

		var data10 = {
			labels: ['Calculus', 'CS412', 'CS430', 'CS361', 'CS345'],
			datasets: [{
				backgroundColor: utils.transparentize(presets2.red),
				borderColor: presets2.red,
				data: generateData2(),
				label: 'Person1'
			}, {
				backgroundColor: utils.transparentize(presets2.orange),
				borderColor: presets2.orange,
				data: generateData2(),
				hidden: true,
				label: 'Person2',
				fill: '-1'
			}, {
				backgroundColor: utils.transparentize(presets2.yellow),
				borderColor: presets2.yellow,
				data: generateData2(),
				label: 'Person3',
				fill: 1
			}, {
				backgroundColor: utils.transparentize(presets2.green),
				borderColor: presets2.green,
				data: generateData2(),
				label: 'Person4',
				fill: false
			}, {
				backgroundColor: utils.transparentize(presets2.blue),
				borderColor: presets2.blue,
				data: generateData2(),
				label: 'Person5',
				fill: '-1'
			}, {
				backgroundColor: utils.transparentize(presets2.purple),
				borderColor: presets2.purple,
				data: generateData2(),
				label: 'Person6',
				fill: '-1'
			}]
		};

		var options = {
			maintainAspectRatio: true,
			spanGaps: false,
			elements: {
				line: {
					tension: 0.000001
				}
			},
			plugins: {
				filler: {
					propagate: false
				},
				samples_filler_analyser: {
					target: 'chart-analyser'
				}
			}
		};

		var chart10 = new Chart('chart10', {
			type: 'radar',
			data: data10,
			options: options
		});
		

		function togglePropagate(btn) {
			var value = btn.classList.toggle('btn-on');
			chart10.options.plugins.filler.propagate = value;
			chart10.update();
		}

		function toggleSmooth(btn) {
			var value = btn.classList.toggle('btn-on');
			chart10.options.elements.line.tension = value? 0.4 : 0.000001;
			chart10.update();
		}

		function randomize2() {
			inputs2.from = [];
			chart10.data.datasets.forEach(function(dataset) {
				dataset.data = generateData2();
			});
			chart10.update();
			
		}

		document.getElementById("randomizeData").onclick = function() {
			r();
			r2();
			r3();
			r4();
			r5();
			r6();
		};


window.onload = function() {

	

	var ctx = document.getElementById("chart2").getContext("2d");
	window.myLine = new Chart(ctx, config);

    var ctx = document.getElementById("chart1").getContext("2d");
    window.myMixedChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Chart.js Combo Bar Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: true
            }
        }
    });

	var ctx = document.getElementById("chart-area");
	window.myPolarArea = Chart.PolarArea(ctx, config7);

	var ctx = document.getElementById("chart3").getContext("2d");
	window.myDoughnut = new Chart(ctx, config2);

	var ctx = document.getElementById("chart4").getContext("2d");
	window.myLine2 = new Chart(ctx, config3);

	var ctx = document.getElementById("scatter").getContext("2d");
	window.myScatter = Chart.Scatter(ctx, {
		data: scatterChartData,
		options: {
			responsive: true,
			hoverMode: 'nearest',
			intersect: true,
			title: {
				display: true,
				text: 'Chart.js Scatter Chart - Multi Axis'
			},
			scales: {
				xAxes: [{
					position: "bottom",
					gridLines: {
						zeroLineColor: "rgba(0,0,0,1)"
					}
				}],
				yAxes: [{
					type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
					display: true,
					position: "left",
					id: "y-axis-1",
				}, {
					type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
					display: true,
					position: "right",
					reverse: true,
					id: "y-axis-2",

					// grid line settings
					gridLines: {
						drawOnChartArea: false, // only want the grid lines for one axis to show up
					},
				}],
			}
		}
	});

	getUser();
	if (currentuser == null) {
	  userlink.innerText= "";
	  userlink.classList.replace("nav-link","btn");
	  userlink.classList.add("btn-primary");
	  userlink.href = "signup.html";
  
	  signout.innerText = "Login";
	  signout.classList.replace("nav-link","btn");
	  signout.classList.add("btn-success");
	  signout.href = "signup.html";
  
	} else {
	  userlink.innerText = currentuser.username;
	  userlink.classList.replace("btn","nav-link");
	  userlink.classList.remove("btn-primary");
	  userlink.href = "./user.html";
  
	  signout.innerText = "Sign Out";
	  signout.classList.replace("btn", "nav-link");
	  signout.classList.remove("btn-success");
	  signout.href = "javascript:signUserout()";
	}


};







let userlink = document.getElementById('userlink');
let signout = document.getElementById('signout');
var currentuser = null;

function getUser() {
  let keepLoggedIn = localStorage.getItem("keepLoggedIn");
  if (keepLoggedIn == "yes") {
    currentuser = JSON.parse(localStorage.getItem('user'));
  } else {
    currentuser = JSON.parse(sessionStorage.getItem('user'));
  }
}

function signUserout() {
  sessionStorage.removeItem('user');
  localStorage.removeItem('user');
  localStorage.removeItem('keepLoggedIn');
  window.location = "index.html";
}

