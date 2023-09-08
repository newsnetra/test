$(document).ready(function () {


  var data = [


    {
      "month": monthNumToDate(1),
      "victim": 10,
      "incident": 8
    },
    {
      "month": monthNumToDate(2),
      "victim": 7,
      "incident": 6
    },
    {
      "month": monthNumToDate(3),
      "victim": 7,
      "incident": 7
    },
    {
      "month": monthNumToDate(4),
      "victim": 6,
      "incident": 6
    },
    {
      "month": monthNumToDate(5),
      "victim": 9,
      "incident": 8
    },
    {
      "month": monthNumToDate(6),
      "victim": 5,
      "incident": 2
    },
    {
      "month": monthNumToDate(7),
      "victim": 0,
      "incident": 0
    },
    {
      "month": monthNumToDate(8),
      "victim": 6,
      "incident": 6
    },
    {
      "month": monthNumToDate(9),
      "victim": 9,
      "incident": 6
    },
    {
      "month": monthNumToDate(10),
      "victim": 4,
      "incident": 3
    },
    {
      "month": monthNumToDate(11),
      "victim": 7,
      "incident": 6
    },
    {
      "month": monthNumToDate(12),
      "victim": 14,
      "incident": 6
    },
    {
      "month": monthNumToDate(13),
      "victim": 2,
      "incident": 2
    },
    {
      "month": monthNumToDate(14),
      "victim": 19,
      "incident": 12
    },
    {
      "month": monthNumToDate(15),
      "victim": 14,
      "incident": 9
    },
    {
      "month": monthNumToDate(16),
      "victim": 4,
      "incident": 4
    },
    {
      "month": monthNumToDate(17),
      "victim": 4,
      "incident": 2
    },
    {
      "month": monthNumToDate(18),
      "victim": 2,
      "incident": 2
    },
    {
      "month": monthNumToDate(19),
      "victim": 4,
      "incident": 2
    },
    {
      "month": monthNumToDate(20),
      "victim": 4,
      "incident": 3
    },
    {
      "month": monthNumToDate(21),
      "victim": 1,
      "incident": 1
    },
    {
      "month": monthNumToDate(22),
      "victim": 4,
      "incident": 4
    },
    {
      "month": monthNumToDate(23),
      "victim": 3,
      "incident": 2
    },
    {
      "month": monthNumToDate(24),
      "victim": 6,
      "incident": 6
    },
    {
      "month": monthNumToDate(25),
      "victim": 7,
      "incident": 7
    },
    {
      "month": monthNumToDate(26),
      "victim": 69,
      "incident": 29
    },
    {
      "month": monthNumToDate(27),
      "victim": 45,
      "incident": 18
    },
    {
      "month": monthNumToDate(28),
      "victim": 14,
      "incident": 10
    },
    {
      "month": monthNumToDate(29),
      "victim": 19,
      "incident": 13
    },
    {
      "month": monthNumToDate(30),
      "victim": 15,
      "incident": 10
    },
    {
      "month": monthNumToDate(31),
      "victim": 10,
      "incident": 7
    },
    {
      "month": monthNumToDate(32),
      "victim": 11,
      "incident": 5
    },
    {
      "month": monthNumToDate(33),
      "victim": 6,
      "incident": 5
    },
    {
      "month": monthNumToDate(34),
      "victim": 20,
      "incident": 12
    },
    {
      "month": monthNumToDate(35),
      "victim": 10,
      "incident": 9
    },
    {
      "month": monthNumToDate(36),
      "victim": 44,
      "incident": 21
    },
    {
      "month": monthNumToDate(37),
      "victim": 27,
      "incident": 23
    },
    {
      "month": monthNumToDate(38),
      "victim": 12,
      "incident": 11
    },
    {
      "month": monthNumToDate(39),
      "victim": 15,
      "incident": 12
    },
    {
      "month": monthNumToDate(40),
      "victim": 16,
      "incident": 12
    },
    {
      "month": monthNumToDate(41),
      "victim": 39,
      "incident": 23
    },
    {
      "month": monthNumToDate(42),
      "victim": 10,
      "incident": 9
    },
    {
      "month": monthNumToDate(43),
      "victim": 15,
      "incident": 14
    },
    {
      "month": monthNumToDate(44),
      "victim": 6,
      "incident": 5
    },
    {
      "month": monthNumToDate(45),
      "victim": 11,
      "incident": 10
    },
    {
      "month": monthNumToDate(46),
      "victim": 7,
      "incident": 6
    },
    {
      "month": monthNumToDate(47),
      "victim": 4,
      "incident": 3
    },
    {
      "month": monthNumToDate(48),
      "victim": 10,
      "incident": 9
    },
    {
      "month": monthNumToDate(49),
      "victim": 17,
      "incident": 16
    },
    {
      "month": monthNumToDate(50),
      "victim": 30,
      "incident": 26
    },
    {
      "month": monthNumToDate(51),
      "victim": 10,
      "incident": 9
    },
    {
      "month": monthNumToDate(52),
      "victim": 9,
      "incident": 7
    },
    {
      "month": monthNumToDate(53),
      "victim": 17,
      "incident": 16
    },
    {
      "month": monthNumToDate(54),
      "victim": 16,
      "incident": 15
    },
    {
      "month": monthNumToDate(55),
      "victim": 12,
      "incident": 10
    },
    {
      "month": monthNumToDate(56),
      "victim": 15,
      "incident": 13
    },
    {
      "month": monthNumToDate(57),
      "victim": 20,
      "incident": 11
    },
    {
      "month": monthNumToDate(58),
      "victim": 13,
      "incident": 11
    },
    {
      "month": monthNumToDate(59),
      "victim": 9,
      "incident": 8
    },
    {
      "month": monthNumToDate(60),
      "victim": 18,
      "incident": 14
    },
    {
      "month": monthNumToDate(61),
      "victim": 11,
      "incident": 9
    },
    {
      "month": monthNumToDate(62),
      "victim": 13,
      "incident": 13
    },
    {
      "month": monthNumToDate(63),
      "victim": 7,
      "incident": 6
    },
    {
      "month": monthNumToDate(64),
      "victim": 12,
      "incident": 7
    },
    {
      "month": monthNumToDate(65),
      "victim": 7,
      "incident": 6
    },
    {
      "month": monthNumToDate(66),
      "victim": 19,
      "incident": 16
    },
    {
      "month": monthNumToDate(67),
      "victim": 24,
      "incident": 20
    },
    {
      "month": monthNumToDate(68),
      "victim": 17,
      "incident": 15
    },
    {
      "month": monthNumToDate(69),
      "victim": 9,
      "incident": 9
    },
    {
      "month": monthNumToDate(70),
      "victim": 23,
      "incident": 15
    },
    {
      "month": monthNumToDate(71),
      "victim": 24,
      "incident": 16
    },
    {
      "month": monthNumToDate(72),
      "victim": 12,
      "incident": 12
    },
    {
      "month": monthNumToDate(73),
      "victim": 11,
      "incident": 10
    },
    {
      "month": monthNumToDate(74),
      "victim": 17,
      "incident": 16
    },
    {
      "month": monthNumToDate(75),
      "victim": 13,
      "incident": 10
    },
    {
      "month": monthNumToDate(76),
      "victim": 12,
      "incident": 10
    },
    {
      "month": monthNumToDate(77),
      "victim": 11,
      "incident": 10
    },
    {
      "month": monthNumToDate(78),
      "victim": 9,
      "incident": 8
    },
    {
      "month": monthNumToDate(79),
      "victim": 24,
      "incident": 19
    },
    {
      "month": monthNumToDate(80),
      "victim": 6,
      "incident": 6
    },
    {
      "month": monthNumToDate(81),
      "victim": 7,
      "incident": 7
    },
    {
      "month": monthNumToDate(82),
      "victim": 13,
      "incident": 13
    },
    {
      "month": monthNumToDate(83),
      "victim": 16,
      "incident": 14
    },
    {
      "month": monthNumToDate(84),
      "victim": 16,
      "incident": 14
    },
    {
      "month": monthNumToDate(85),
      "victim": 21,
      "incident": 18
    },
    {
      "month": monthNumToDate(86),
      "victim": 11,
      "incident": 10
    },
    {
      "month": monthNumToDate(87),
      "victim": 14,
      "incident": 13
    },
    {
      "month": monthNumToDate(88),
      "victim": 26,
      "incident": 23
    },
    {
      "month": monthNumToDate(89),
      "victim": 154,
      "incident": 123
    },
    {
      "month": monthNumToDate(90),
      "victim": 38,
      "incident": 33
    },
    {
      "month": monthNumToDate(91),
      "victim": 62,
      "incident": 52
    },
    {
      "month": monthNumToDate(92),
      "victim": 27,
      "incident": 24
    },
    {
      "month": monthNumToDate(93),
      "victim": 35,
      "incident": 32
    },
    {
      "month": monthNumToDate(94),
      "victim": 24,
      "incident": 22
    },
    {
      "month": monthNumToDate(95),
      "victim": 36,
      "incident": 31
    },
    {
      "month": monthNumToDate(96),
      "victim": 17,
      "incident": 14
    },
    {
      "month": monthNumToDate(97),
      "victim": 27,
      "incident": 21
    },
    {
      "month": monthNumToDate(98),
      "victim": 36,
      "incident": 30
    },
    {
      "month": monthNumToDate(99),
      "victim": 38,
      "incident": 28
    },
    {
      "month": monthNumToDate(100),
      "victim": 21,
      "incident": 19
    },
    {
      "month": monthNumToDate(101),
      "victim": 41,
      "incident": 31
    },
    {
      "month": monthNumToDate(102),
      "victim": 36,
      "incident": 22
    },
    {
      "month": monthNumToDate(103),
      "victim": 32,
      "incident": 27
    },
    {
      "month": monthNumToDate(104),
      "victim": 26,
      "incident": 20
    },
    {
      "month": monthNumToDate(105),
      "victim": 42,
      "incident": 32
    },
    {
      "month": monthNumToDate(106),
      "victim": 39,
      "incident": 28
    },
    {
      "month": monthNumToDate(107),
      "victim": 24,
      "incident": 22
    },
    {
      "month": monthNumToDate(108),
      "victim": 29,
      "incident": 23
    },
    {
      "month": monthNumToDate(109),
      "victim": 23,
      "incident": 15
    },
    {
      "month": monthNumToDate(110),
      "victim": 22,
      "incident": 19
    },
    {
      "month": monthNumToDate(111),
      "victim": 25,
      "incident": 20
    },
    {
      "month": monthNumToDate(112),
      "victim": 15,
      "incident": 13
    },
    {
      "month": monthNumToDate(113),
      "victim": 32,
      "incident": 27
    },
    {
      "month": monthNumToDate(114),
      "victim": 32,
      "incident": 24
    },
    {
      "month": monthNumToDate(115),
      "victim": 50,
      "incident": 36
    },
    {
      "month": monthNumToDate(116),
      "victim": 5,
      "incident": 4
    },
    {
      "month": monthNumToDate(117),
      "victim": 4,
      "incident": 4
    },
    {
      "month": monthNumToDate(118),
      "victim": 6,
      "incident": 5
    },
    {
      "month": monthNumToDate(119),
      "victim": 3,
      "incident": 3
    },
    {
      "month": monthNumToDate(120),
      "victim": 6,
      "incident": 5
    },
    {
      "month": monthNumToDate(121),
      "victim": 3,
      "incident": 3
    },
    {
      "month": monthNumToDate(122),
      "victim": 6,
      "incident": 4
    },
    {
      "month": monthNumToDate(123),
      "victim": 21,
      "incident": 3
    },
    {
      "month": monthNumToDate(124),
      "victim": 10,
      "incident": 4
    },
    {
      "month": monthNumToDate(125),
      "victim": 9,
      "incident": 7
    },
    {
      "month": monthNumToDate(126),
      "victim": 4,
      "incident": 3
    },
    {
      "month": monthNumToDate(127),
      "victim": 6,
      "incident": 5
    },
    {
      "month": monthNumToDate(128),
      "victim": 8,
      "incident": 6
    },
    {
      "month": monthNumToDate(129),
      "victim": 8,
      "incident": 7
    },
    {
      "month": monthNumToDate(130),
      "victim": 3,
      "incident": 3
    },
    {
      "month": monthNumToDate(131),
      "victim": 22,
      "incident": 12
    },
    {
      "month": monthNumToDate(132),
      "victim": 7,
      "incident": 7
    }
  ];

  if (navigator.userAgent.search("MSIE") >= 0) {
    $(".transline").css({ "stroke-dasharray": "0px", "stroke-dashoffset": "0px" });
  }


  function adjustGraphHeight() {
    var graph = document.getElementById('graph');
    var chartHeight = document.getElementById('line1').clientHeight;
    graph.style.height = chartHeight + 'px';
  }
  

  //IE can't animate stroke - needs this disabled.

  var ww = $(".wrapper").width();
  var margin = { top: 20, right: 20, bottom: 50, left: 20 },
    width = ww - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom;
  
  // Update the parent container's height to match the SVG's
  $(".wrapper").height(height + margin.top + margin.bottom);
  
  var x = d3.time.scale().range([0, width]);


  var y = d3.scale.linear()
    .range([height, 0]);

  var color = d3.scale.category10();

  var xAxis = d3.svg.axis()
    .scale(x)
    .tickFormat(d3.time.format("%Y")) // Change the date format here
    .tickSize(10, 1)
    .orient("bottom");


  if (ww < 700) {
    var xAxis = d3.svg.axis()
      .scale(x)
      .ticks(5)
      .tickSize(10, 5)
      .orient("bottom");
  }

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickSize(-width, 0); // Make it cover the full width of the chart

  var line = d3.svg.line()
    .interpolate("step-after")
    .x(function (d) { return x(d.month); })
    .y(function (d) { return y(+d.people); });

    var svg = d3.select("#line1").append("svg")
    .attr("id", "travel-chart")
    .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  


  var transports;



  function monthNumToDate(monthNum) {
    return new Date(2011, monthNum - 1, 1); // monthNum - 1 because in JS, months start from 0
  }




  color.domain(d3.keys(data[0]).filter(function (key) { return key !== "month"; }));




  transports = color.domain().map(function (name) {
    return {
      name: name,
      values: data.map(function (d) {
        return { month: d.month, people: +d[name] };
      })
    };
  });

  var victim = transports[0];
  var incident = transports[1];

  x.domain(d3.extent(data, function (d) { return d.month; }));

  // .clamp(true);

  y.domain([
    d3.min(transports, function (c) { return d3.min(c.values, function (v) { return v.people; }); }),
    d3.max(transports, function (c) { return d3.max(c.values, function (v) { return v.people; }); })
  ]);
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + 1.05 * height + ")")
    .call(xAxis);


  // Create yAxis first
  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

  // Then create gridlines and apply styles directly
  svg.append("g")
    .attr("class", "grid")
    .call(yAxis.tickSize(-width, 0, 0).tickFormat(""))
    .selectAll(".tick line");

  var dateRanges = [
    { start: new Date(2012, 12, 1), end: new Date(2013, 5, 1), text: 'The 2013-14 pre-election period' },
    { start: new Date(2018, 3, 1), end: new Date(2018, 8, 1), text: 'The 2018-19 post-election period' }
  ];

  dateRanges.forEach(function (range) {
    svg.append("rect")
      .attr("class", "highlight")
      .attr("x", x(range.start))
      .attr("width", x(range.end) - x(range.start))
      .attr("height", height);

    // Define text position
    var textX = x(range.end) + 10; // Move the text to the right of the highlight rectangle
    var textY = height / 2; // Adjust this as needed

    // Add annotation
    var annotationWidth = 100; // set the width you want for your annotation

    svg.append("foreignObject")
      .attr("x", textX)
      .attr("y", textY)
      .attr("width", annotationWidth)
      .attr("height", 100) // Set to an arbitrary height, as long as it's enough to contain your text
      .append("xhtml:div")
      .attr("class", "annotation")
      .style("word-wrap", "break-word") // Enable word-wrap
      .style("color", "black") // Set the color of the text to black
      .html(range.text);
  });



  var strokeWidth;
if (window.innerWidth < 800) {
    strokeWidth = 1; // Reduced stroke width for smaller screens
} else {
    strokeWidth = 3; // Normal stroke width for larger screens
}


  var city = svg.selectAll(".city")
    .data(transports)
    .enter().append("g")
    .attr("class", "city");

    var p1 = city.append("path") //Add the 3 coloured lines for transport type
    .attr("class", "transline")
    .attr("id", function (d) { return d.name; }) // ID of transport type
    .attr("d", function (d) { return line(d.values); }) //data of all Y values
    .each(function () {
      var totalLength = this.getTotalLength();
      d3.select(this)
        .attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength);
    })
    .style("stroke-width", strokeWidth); // Use the variable instead of a fixed value

  var handleLine = svg.append("rect")
  .attr("class", "line")
  .attr("height", (height + 20))
  .attr("transform", "translate(0,-5)")
  .attr("width", 1)
  .attr("fill", "#000");


  var handle = svg.append("svg:image")
    .attr("xlink:href", "../assets/icons/pistol.svg")//christmas ball handle
    .attr("width", 50)
    .attr("height", 50)
    .attr("transform", "translate(-15," + (height + 15) + ")");

  var handleText = svg.append("text")
    .style({ "fill": "#000", "font-size": "14px", "text-anchor": "middle", "display": "none" })
    .attr("transform", "translate(1," + (height + 40) + ")");



  var graph = svg.select("g.graph");
  var lines = graph.select('g.line-container')
    .selectAll('path.line').data(data);

  lines.enter()
    .append('path')
    .attr('class', function (d, i) {
      return 'line' + d.key;
    })
    .attr('fill', 'none')
    .attr('stroke', function (d, i) {
      return colors(i);
    })
    .attr('d', function (d) {
      return line(d.values);
    });

  //** Create a invisible rect for mouse tracking
  var hoverRect = svg.append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'none')
    .style('pointer-events', 'all')
    .on('mousemove', mouseMove)
    .on('mouseout', mouseOut)
    .on('touchmove', mouseMove)
    .on('touchend', mouseOut);

  //** Init Tooltip

 


  
  var toolTip = d3.select("#line1").append('div')
    .attr('class', 'chart-tooltip');

    var circle1 = svg.append("circle")
    .style("fill", "#d94801")
    .style("stroke", "#d94801")
    .style("opacity", 0) // set to 0 as default
    .attr("r", 4); // radius of the circle
  
  var circle2 = svg.append("circle")
    .style("fill", "#fd8d3c")
    .style("stroke", "#fd8d3c")
    .style("opacity", 0) // set to 0 as default
    .attr("r", 4); // radius of the circle

    function mouseMove() {
      handleLine.style("opacity", 1);
      var mouse = d3.mouse(this),
        mouseX = mouse[0],
        mouseY = mouse[1],
        value = x.invert(mouseX);
    
      // Set the day and time to the start of the month
      value.setUTCDate(1);
      value.setUTCHours(0, 0, 0, 0);
    
      var date = d3.time.format.utc("%B %Y")(value);
    
      // Find the closest month in the data
      var closestMonth = data.reduce((prev, curr) => Math.abs(curr.month - value) < Math.abs(prev.month - value) ? curr : prev);
    
      if (closestMonth) {
        var monthVictim = closestMonth.victim;
        var monthIncident = closestMonth.incident;
    
        // Set circle1 position
        circle1.attr("cx", mouseX)  // x position is same as the mouse's x position
               .attr("cy", y(monthVictim))  // y position is the corresponding y-value of the data point for line 1
               .style("opacity", 1);  // make the circle visible
    
        // Set circle2 position
        circle2.attr("cx", mouseX)  // x position is same as the mouse's x position
               .attr("cy", y(monthIncident))  // y position is the corresponding y-value of the data point for line 2
               .style("opacity", 1);  // make the circle visible
    
        //** Display tool tip
        toolTip
          .style('visibility', 'visible')
          .style("left", (20 + mouseX + "px"))
          .style("top", (mouseY + "px"))  // the top position is the mouse's y position
          .html("In " + date + ", security forces killed <span class='textB'>" + monthVictim.toLocaleString() + "</span> people in <span class='textP'>" + monthIncident.toLocaleString() + "</span> deadly incidents.");
    
        handle.attr("x", (mouseX + "px"));
        handleText.attr("x", (mouseX + "px")).html(date);
    
        handleLine.attr("x", (mouseX + "px")); //
      }
      
      var leftLimit = width - 180;
      if (mouseX >= leftLimit) {
        toolTip.style("left", (mouseX - 140 + "px"));
      }
    } // end mouseMove
    
  
  function mouseOut() {
      toolTip.style('visibility', 'hidden');
      circle1.style("opacity", 0); // hide circle1
      circle2.style("opacity", 0); // hide circle2
      var totalVictim = 0,
        totalIncident = 0;//reset values
         // Hide the handle line
  handleLine.style("opacity", 0);
    
  }
  

});