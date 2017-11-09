//variable svg wordt gemaakt en de margins, width en height worden bepaald 
var margin = {
        top: 40,
        right: 50,
        bottom: 30,
        left: 40
    },
    width = 1500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// nieuwe bandschaal met het lege domein 
var x0 = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.1);

var x1 = d3.scaleBand()
    .padding(0.05);

// bepaalt de hoogte van de gegevens van de chart 
var y = d3.scaleLinear()
    .rangeRound([height, 0]);

// bepaalt breedte van de gegevens van de chart en volgorde van kleuren
var z = d3.scaleOrdinal()
    .range(["#9cb1bf", "#2d587b", "#184169", "#ffd0c7", "#ffbdb1", "#ffa08f", "#ff8c77"]);

var g = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// data wordt in de chart geladen en opgestapelde kolommen worden bepaald
d3.csv("data_2.csv", function (d, i, columns) {
    for (var i = 1, n = columns.length; i < n; ++i) d[columns[i]] = +d[columns[i]];
    return d;
}, function (error, data) {
    if (error) throw error;

    var keys = data.columns.slice(1);

    x0.domain(data.map(function (d) {
        return d.State;
    }));
    x1.domain(keys).rangeRound([0, x0.bandwidth()]);
    y.domain([0, d3.max(data, function (d) {
        return d3.max(keys, function (key) {
            return d[key];
        });
    })]).nice();

    // delen van de svg worden bij elkaar gezet 
    g.append("g")
        .selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function (d) {
            return "translate(" + x0(d.State) + ",0)";
        })
        .selectAll("rect")
        .data(function (d) {
            return keys.map(function (key) {
                return {
                    key: key,
                    value: d[key]
                };
            });
        })
        .enter().append("rect")
        .attr("x", function (d) {
            return x1(d.key);
        })
        .attr("y", function (d) {
            return y(d.value);
        })
        .attr("width", x1.bandwidth())
        .attr("height", function (d) {
            return height - y(d.value);
        })
        .attr("fill", function (d) {
            return z(d.key);
        });

    g.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x0));

    // de assen worden specifieker gemaakt met wat text styling
    g.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(y).ticks(null, "s"))
        .append("text")
        .attr("x", 2)
        .attr("y", y(y.ticks().pop()) + 0.5)
        .attr("dy", "0.32em")
        .attr("fill", "#000")
        .attr("font-weight", "bold")
        .attr("text-anchor", "start")
        .text("Hoeveelheid kinderen");

    // legenda wordt toegevoegd en gestyled    
    var legenda = g.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "end")
        .selectAll("g")
        .data(keys.slice().reverse())
        .enter().append("g")
        .attr("transform", function (d, i) {
            return "translate(40," + i * 20 + ")";
        });

    // styling van de legenda blokjes
    legenda.append("rect")
        .attr("x", width - 19)
        .attr("width", 19)
        .attr("height", 19)
        .attr("fill", z);

    // styling van de tekst bij de legenda    
    legenda.append("text")
        .attr("x", width - 24)
        .attr("y", 9.5)
        .attr("dy", "0.32em")
        .text(function (d) {
            return d;
        });
});