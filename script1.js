//variable svg wordt gemaakt en de margins, width en height worden bepaald 
var margin = {
        top: 40,
        right: 20,
        bottom: 30,
        left: 40
    },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// nieuwe bandschaal met het lege domein 
var x = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.05)
    .align(0.1);

// bepaalt de hoogte van de gegevens van de barchart 
var y = d3.scaleLinear()
    .rangeRound([height, 0]);

// bepaalt breedte van de gegevens van de barchart en volgorde van kleuren
var z = d3.scaleOrdinal()
    .range(["#13314d", "#f49d90"]);

var g = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// data wordt in de visualisatie geladen en opgestapelde kolommen worden bepaald
d3.csv("data.csv", function (d, i, columns) {
    for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
    d.total = t;
    return d;
}, function (error, data) {
    if (error) throw error;

    var keys = data.columns.slice(1);

    //  op de x-as verschijnt het jaartal, op de y-as worden de waardes bij elkaar opgeteld en krijg je een totaal, z-domain laat de diverse kolommen zien
    x.domain(data.map(function (d) {
        return d.Jaartal;
    }));
    y.domain([0, d3.max(data, function (d) {
        return d.total;
    })]).nice();
    z.domain(keys);

    // delen van de svg worden bij elkaar gezet    
    g.append("g")
        .selectAll("g")
        .data(d3.stack().keys(keys)(data))
        .enter().append("g")
        .attr("fill", function (d) {
            return z(d.key);
        })
        .selectAll("rect")
        .data(function (d) {
            return d;
        })
        .enter().append("rect")
        .attr("x", function (d) {
            return x(d.data.Jaartal);
        })
        .attr("y", function (d) {
            return y(d[1]);
        })
        .attr("height", function (d) {
            return y(d[0]) - y(d[1]);
        })
        .attr("width", x.bandwidth());

    g.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

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
        .text("Aantal geboren kinderen");

    // legenda wordt toegevoegd en gestyled    
    var legenda = g.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "end")
        .selectAll("g")
        .data(keys.slice().reverse())
        .enter().append("g")
        .attr("transform", function (d, i) {
            return "translate(0," + i * 20 + ")";
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
        .attr("fill", "#000")
        .text(function (d) {
            return d;
        });
});