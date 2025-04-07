# 🎯 Scatter Plots

A **scatter plot** (or **scatter chart**) is a type of graph used to display relationships between two numerical variables. Each point on the chart represents an individual data value, with its position determined by the values of the two variables—one plotted along the x-axis and the other along the y-axis. Scatter charts are particularly useful for identifying patterns, correlations, and outliers in data, making them widely used in scientific research, economics, and business analytics.

 - **Usage**: 🧵 Pattern 🆚 Relationship

Scatter plots help reveal different types of relationships between variables. A positive correlation means that as one variable increases, the other also increases, while a negative correlation indicates an inverse relationship. If the points are scattered randomly with no clear pattern, it suggests no correlation between the variables. These charts are also useful for spotting clusters, trends, and anomalies, making them essential for exploratory data analysis.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/scatter%20plots.md) repo for many detailed examples of how to use and customize (style) different types of **scatter plots**.

## ⚙️ Chart Attributes

Scatter plots accept the following chart attributes.

[🧱 class](../Chart%20Attributes.md#-class)
 | [🗂️ type](../Chart%20Attributes.md#-type)
 | [🕒 version](../Chart%20Attributes.md#-version)
 | [📋 template](../Chart%20Attributes.md#-template)
 | [↔️ width](../Chart%20Attributes.md#-width)
 | [↕️ height](../Chart%20Attributes.md#-height)
 | [📄 title](../Chart%20Attributes.md#-title)
 | [📄 ytitle](../Chart%20Attributes.md#-ytitle)
 | [📄 xtitle](../Chart%20Attributes.md#-xtitle)
 | [📏 xscalemin](../Chart%20Attributes.md#-xscalemin)
 | [📏 xscalemax](../Chart%20Attributes.md#-xscalemax)
 | [📏 yscalemin](../Chart%20Attributes.md#-yscalemin)
 | [📏 yscalemax](../Chart%20Attributes.md#-yscalemax)
 | [🔄 swapaxis](../Chart%20Attributes.md#-swapaxis)
 | [🚫 limitdata](../Chart%20Attributes.md#-limitdata)
 | [🔲 showborder](../Chart%20Attributes.md#-showborder)
 | [🏷️ showlabels](../Chart%20Attributes.md#-showlabels)
 | [📘 showlegend](../Chart%20Attributes.md#-showlegend)
 | [🎮 showcontrols](../Chart%20Attributes.md#-showcontrols)
 | [🗂️ showdatatable](../Chart%20Attributes.md#-showdatatable)
 | [#️⃣ showgridlines](../Chart%20Attributes.md#-showgridlines)
 | [➖ showzeroline](../Chart%20Attributes.md#-showzeroline)
 | [📍 showmarkers](../Chart%20Attributes.md#-showmarkers)
 | [🔵 markertype](../Chart%20Attributes.md#-markertype)
 | [📲 showwidget](../Chart%20Attributes.md#-showwidget)

## 🧱 Input Data

### Category: 🏷️ js-labels

The `js-labels` input container sets the labels that anchors each cluster on the axis (e.g., different months, regions, or items).

The container accepts a **comma-separated list of text values**.

```
<div class="js-labels">label-0, label-1, label-2, ..., label-n</div>
```

The example below sets the category labels on a chart to the months of the year.

```
<div class="js-labels">Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec</div>
```

### Data Series: 📋 js-values

The `js-values` input container sets the individual data series (or data sets) on a chart.

The container accept a **comma-separated list of numeric values**.

```
<div class="js-values">10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120</div>
```

The `js-values` input container accepts a `title` attribute that is used to set a name or short description for the data series (or data set).

```
<div class="js-values" title="Sales revenue 2024">10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120</div>
```

> ℹ️ A **title** will automatically be assigned to each data series (or data set) if no `title` attribute is assigned to the `js-values` container.

**Clustered data series** (or **multiple data series**) can be set by specifying multiple `js-values` input containers. Each container represents a single data series (or data set).

```
<div class="js-values" title="Sales revenue 2024">20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130</div>
<div class="js-values" title="Sales revenue 2023">15, 25, 35, 45, 55, 65 75, 85, 95, 105, 115, 125</div>
<div class="js-values" title="Sales revenue 2022">10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120</div>
```

### 🖌️ Style Directives

Every chart is customized (or styled) using one of the supported **style templates**.

**Style directives** are used to override the customization applied by the style template to each chart.

Scatter plots support the following style directives.

[🖼️ js-canvas-*](../directives/Style%20Directive%20Canvas.md)
 | [📊 js-chart-*](../directives/Style%20Directive%20Chart.md)
 | [🎨 js-color-*](../directives/Style%20Directive%20Color.md)
 | [🖱️ js-control-button-*](../directives/Style%20Directive%20Control%20Buttons.md)
 | [🏷️ js-datalabel-*](../directives/Style%20Directive%20Data%20Label.md)
 | [🗂️ js-datatable-*](../directives/Style%20Directive%20Data%20Table.md)
 | [🦶 js-footer-*](../directives/Style%20Directive%20Footer.md)
 | #[️⃣ js-grid-line-*](../directives/Style%20Directive%20Grid%20Line.md)
 | [📘 js-legend-*](../directives/Style%20Directive%20Legend.md)
 | [📍 js-marker-*](../directives/Style%20Directive%20Marker.md)
 | [🎮 js-options-menu-*](../directives/Style%20Directive%20Options%20Menu.md)
 | [📏 js-scale-*](../directives/Style%20Directive%20Scale.md)
 | [📄 js-title-*](../directives/Style%20Directive%20Title.md)
 | [➖ js-zero-line-*](../directives/Style%20Directive%20Zero%20Line.md)

> 💡 See the [👀 js-chart-examples](https://github.com/wrathtafarian/js-chart-examples) repo for many detailed examples of how to use the **style directives** to customize a chart.

## 👀 Examples

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/scatter%20plots.md) repo for many detailed examples of how to use different types of **scatter plots**.

### Example: Scatter Plots

```
<div class="js-chart" type="scatter" template="default" title="Chart title" xtitle="x-ais title" ytitle="y-axis title" height="500px" markertype="emoji" showlegend="off" showcontrols="off">
    <div class="js-x-points">-4, 40, -1, -23, 6, -16, -31, -6, -2, 10, 24, -45, 20, 12, -16, -25, 24, -9, -2, -7, -10, -6, -22, 26, 28, 26, -2, 45, -45, -32, -38, -34, 46, -19, 29, 1, -24, 32, -32, -49</div>
    <div class="js-y-points">-46, -2, -40, 11, -28, 27, -48, -29, 1, -28, -47, -1, -27, -2, 3, 10, 33, -23, -2, 26, 33, 38, 0, -4, 23, 24, -35, -38, 21, 0, -5, -32, 47, 20, 27, 9, -29, -48, -19, -47</div>

    <div class="js-x-points">41, -24, 9, -23, 18, 33, 2, -47, -15, 3, -33, 12, 46, -10, -34, 7, 36, 22, 37, 37, -40, 35, 41, 29, -48, -43, 0, 10, -10, -34, 47, 17, -11, 20, 17, 0, 26, -17, -15, -42</div>
    <div class="js-y-points">-37, -33, 40, 1, 26, -38, 5, -35, 33, 38, -22, -14, -28, 41, 16, 39, -1, -2, -1, -23, -48, -21, -15, 22, -22, 37, -28, -35, 13, -17, -42, -17, 14, -37, -23, -23, -46, -29, -4, -41</div>
</div>

```