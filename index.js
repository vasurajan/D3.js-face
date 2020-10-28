const svg = d3.select('svg');
const circle = svg.append('circle')
    // chaining
    .attr('r', 200)
    .attr('cx', 700)
    .attr('cy', 250)
    .attr('fill', "yellow")
    .attr('stroke', "black")

const leftEye = svg.append('circle')
    // chaining
    .attr('r', 30)
    .attr('cx', 600)
    .attr('cy', 180)
    .attr('fill', "black")
    .attr('stroke', "black")

const rightEye = svg.append('circle')
    // chaining
    .attr('r', 30)
    .attr('cx', 800)
    .attr('cy', 180)
    .attr('fill', "black")
    .attr('stroke', "black")

const g = svg.append('g')
.attr('transform', 'translate(700, 250)')

var arc = d3.arc();
const mouth = g.append('path')
    .attr('d', arc({
        innerRadius: 0,
        outerRadius: 130,
        startAngle: Math.PI/2,
        endAngle: Math.PI * 3/2
    }));



