//variable svg wordt gemaakt en de margins, width en height worden bepaald 
var margin = {
        top: 40,
        right: 20,
        bottom: 30,
        left: 40
    },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// bepaalt breedte van de gegevens van de barchart 
var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

// bepaalt de hoogte van de gegevens van de barchart 
var y = d3.scale.linear()
    .range([height, 0]);

// x-as wordt onderaan geplaatst
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

// y-as wordt links geplaatst
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")

// tooltip krijgt een class mee die in css gestyled wordt
var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function (d) {
        return "<strong>Gemiddeld kindertal:</strong> <span style='color:#36a9e1'>" + d.frequency + "</span>";
    })

// onderdelen van svg worden 1 geheel
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// de tooltip wordt opgeroepen
svg.call(tip);

// data wordt gehaald uit de tsv. op de x-as komen de jaartallen en op de y-as de frequenties
d3.tsv("data.tsv", type, function (error, data) {
    x.domain(data.map(function (d) {
        return d.jaartal;
    }));
    y.domain([0, d3.max(data, function (d) {
        return d.frequency;
    })]);

    // onderdelen van svg worden 1 geheel    
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // de assen worden specifieker gemaakt met wat text styling
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "translate(10 -15)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .attr("font-weight", "bold")
        .style("text-anchor", "start")
        .text("Gemiddeld kindertal per vrouw");

    // class bar wordt gemaakt en nieuwe attributen worden toegevoegd    
    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x(d.jaartal);
        })
        .attr("width", x.rangeBand())
        .attr("y", function (d) {
            return y(d.frequency);
        })
        .attr("height", function (d) {
            return height - y(d.frequency);
        })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)

});

// functie die de uiteindelijke waardes bepaald door ze toe tevoegen en uit te rekenen. frequency komt uit de data.tsv file
function type(d) {
    d.frequency = +d.frequency;
    return d;
}