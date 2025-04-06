# #️⃣ js-grid-line-* Style Directives

The `js-grid-line-*` style directives are used to customize the look of the grid lines on a chart.

> ⚠️ Warning: Depending on the **available space** and the **proximity** of the different gridlines on the chart, the browser may not render all gridlines. There is currently an open ticket to resolve this issue.

Gridlines are included in certain charts to make it easier for viewers to interpret the data accurately. Grid lines are useful for the following reasons.

 - **Reference Points** – Gridlines help users align data points with the axes, making it easier to estimate values.
 - **Improved Readability** – They provide a structured background that prevents data points from floating in empty space, making patterns and trends clearer.
 - **Comparability** – When comparing multiple points, gridlines make it easier to gauge relative differences between them.
 - **Scale Awareness** – They reinforce the scale of the chart, helping viewers understand the increments and proportions being represented.

**Lighter gridlines** are often preferred to avoid overwhelming the visualization.

Grid lines can be completely hidden on a chart using the `showgridlines` chart attribute.

```
<div class="js-chart" ... showgridlines="on">
```

Refer to the [[Chart Attributes]] page for detailed information about the `showgridlines` chart attribute.

## 📚 Table of Contents

 - [🎨 js-grid-line-color](#-js-grid-line-color)
 - [➖ js-grid-line-thickness](#-js-grid-line-thickness)

## 🎨 js-grid-line-color

The `js-grid-line-color` style directive sets the color of the grid lines on a chart.

The default grid line color is light grey (`#eeeeee`).

The below example will render a chart with grid lines that are the color `DarkOrchid`.

```
<div class="js-grid-line-color">hsl(280, 61%, 50%)</div>
```

The following example completely hides the grid lines by rendering them `transparent`.

```
<div class="js-grid-line-color">transparent</div>
```

> 💡 **Lighter gridlines** are often preferred to avoid overwhelming the visualization.

## ➖ js-grid-line-thickness

The `js-grid-line-thickness` style directive sets the thickness of the grid lines on a chart.

The default grid line thickness on a chart is `0.5px`.

The below example will render a chart with thick grid lines that are 10px wide.

```
<div class="js-grid-line-thickness">10px</div>
```

You can completely hide grid lines on a chart by setting the tickness of the grid line to `0px`.

```
<div class="js-grid-line-thickness">0px</div>
```