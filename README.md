# Project Information Design - individueel

![](https://github.com/maroeska/informationdesign/blob/master/chart2.png)
> 1 van de datavisualisaties uit mijn project


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
    — `d3.scaleBand`, `d3.scaleLinear` en `d3.scale.ordinal` 
    — Positie en kleuren bepalen
*   [`d3-array`](https://github.com/d3/d3-axis#api-reference)
    — `d3.axisBottom` and `d3.axisLeft`
    — Asgenerators voor schalen
*   [`d3-format`](https://github.com/d3/d3-format#api-reference) 
    — `d3.format`
    — Uitdrukking getallen
*   [`d3-tip`](https://github.com/caged/d3-tip) 
    — `d3.tip`
    — Tooltip
*   [`d3-dsv`](https://github.com/d3/d3-dsv) 
    — `d3.dsv`
    — Data laden en ontleden
*   [`d3-axis`](https://github.com/d3/d3-axis) 
    — `d3.axis`
    — Weergave van assen
*   [`d3-shape`](https://github.com/d3/d3-shape) 
    — `d3.shape`
    — Berekende gestapelde posities
*   [`d3-max`](https://github.com/d3/d3-array/blob/master/README.md#max) 
    — `d3.max`
    — Maximale waarde berekenen in een array
*   [`d3-keys`](https://github.com/d3/d3-collection/blob/master/README.md#keys) 
    — `d3.keys`
    — Kolomnamen berekenen
*   [`d3-svg.axis`](https://github.com/d3/d3-axis) 
    — `d3.svg.axis`
    — Weergave assen   
        
### Bronnen    

Informatie bronnen:

* https://github.com/d3/d3-format > d3.format<br>
* http://statline.cbs.nl/statweb/publication/?vw=t&dm=slnl&pa=37422ned&d1=0,4-5,7,9,11,13,17,26,35,40-41&d2=0,10,20,30,40,(l-4)-l&hd=090218-0953&hdr=g1&stb=t > CBS dataset Geboorte;kerncijfers<br>
* https://stackoverflow.com > diverse vragen van mensen gelezen<br>
* https://github.com/d3/d3/wiki/Gallery > gallerij met charts

### License

GPL-3.0 © Maroeska Verkerk
