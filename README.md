# Project Information Design - individueel

In deze readme beschrijf ik wat ik heb gedaan tijdens deel A van het project, welke charts ik heb gebruikt, welke data ik heb gebruikt, welke features ik heb gebruikt van D3 en welke bronnen ik heb gebruikt.

___

### Beschrijving

Ik wilde voor deel A dezelfde data gebruiken als in deel B. Deel B is concept gericht, dus hier zou ik meer data voor nodig hebben. Voor deel A heb ik een andere invalshoek genomen dan voor deel B. Deel A is gericht op statische data van CBS en minder persoonlijk, het geeft een globale weergave. Deel B maakt een persoonlijk verhaal van data.<br>
In deel A wil ik datavisualisaties laten zien van de bevolkingsgroei in Nederland, gericht op geboortes. Ik heb 3 verschillende charts gebruikt.

### Charts
* [Stacked Bar Chart van Mike Bostock](https://bl.ocks.org/mbostock/3886208)
* [Bar Chart with Tooltip van Justin Palmer](http://bl.ocks.org/Caged/6476579)
* [Grouped Bar Chart van Mike Bostock](https://bl.ocks.org/mbostock/3887051)

### Data
Stacked Bar Chart - Comma-separated values (CSV) met 28 rijen en 3 kolommen:
*   `Jaartal` — jaartal 1990-2016
*   `Jongens` — aantal geboren jongens in 1 jaar
*   `Meisjes` — aantal geboren meisjes in 1 jaar

Bar Chart with Tooltip - Tab-separated values (TSV) met 28 rijen en 2 kolommen:
*   `jaartal` — jaartal 1990-2016
*   `frequency` — gemiddeld hoeveelheid kinderen

Grouped Bar Chart - Comma-separated values (CSV) met 28 rijen en 8 kolommen:
*   `State` — jaartal 1990-2016
*   `Jonger dan 20 jaar` — vrouwen jonger dan 20 jaar
*   `20 tot 25 jaar` — vrouwen 20 tot 25 jaar
*   `25 tot 30 jaar` — vrouwen 25 tot 30 jaar
*   `30 tot 35 jaar` — vrouwen 30 tot 35 jaar
*   `35 tot 40 jaar` — vrouwen 35 tot 40 jaar
*   `35 tot 40 jaar` — vrouwen 40 tot 45 jaar
*   `45 jaar of ouder` — vrouwen 45 jaar of ouder

### Features

*   [`d3-selection`](https://github.com/d3/d3-selection#api-reference)
    — `d3.select`
    — Huidige selectie teruggeven, of een nieuwe selectie
*   [`d3-scale`](https://github.com/d3/d3-scale#api-reference)
    — `d3.scaleBand` and `d3.scaleLinear`
    — Positie bepalen
*   [`d3-array`](https://github.com/d3/d3-axis#api-reference)
    — `d3.axisBottom` and `d3.axisLeft`
    — Asgenerators voor schalen
*   [`d3-format`](https://github.com/d3/d3-format#api-reference) 
    — `d3.format`
    — Uitdrukking getallen
*   [`d3-tip`](https://github.com/caged/d3-tip) 
    — `d3.tip`
    — Tooltip











