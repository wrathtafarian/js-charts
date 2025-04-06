# 🎈 Bubble Charts

A **bubble chart** is a variation of a scatter plot where each data point is represented by a circle (bubble) instead of a simpler marker. It is used to visualize relationships between three numerical variables: two determining the bubble’s position on the x and y axes, and the third controlling the bubble’s size. This allows for an additional dimension of data representation, making bubble charts useful for comparing multiple data points simultaneously.

 - **Usage**: 🔍 Comparison ⏱️ Date-Over-Time ↔️ Distribution 🧵 Pattern ⚖️ Proportions 🆚 Relationship

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/bubble%20charts.md) repo for many detailed examples of how to use and customize (style) different types of **bubble charts**.

## ⚙️ Chart Attributes

Bubble charts accept the following chart attributes.

[🧱 class](../Chart%20Attributes.md#-class)
[🗂️ type](../Chart%20Attributes.md#-type)
[🕒 version](../Chart%20Attributes.md#-version)
[📋 template](../Chart%20Attributes.md#-template)
[↔️ width](../Chart%20Attributes.md#-width)
[↕️ height](../Chart%20Attributes.md#-height)
[📄 title](../Chart%20Attributes.md#-title)
[📄 ytitle](../Chart%20Attributes.md#-ytitle)
[📄 xtitle](../Chart%20Attributes.md#-xtitle)
[📏 xscalemin](../Chart%20Attributes.md#-xscalemin)
[📏 xscalemax](../Chart%20Attributes.md#-xscalemax)
[📏 yscalemin](../Chart%20Attributes.md#-yscalemin)
[📏 yscalemax](../Chart%20Attributes.md#-yscalemax)
[🔄 swapaxis](../Chart%20Attributes.md#-swapaxis)
[🔲 showborder](../Chart%20Attributes.md#-showborder)
[🏷️ showlabels](../Chart%20Attributes.md#-showlabels)
[📘 showlegend](../Chart%20Attributes.md#-showlegend)
[🎮 showcontrols](../Chart%20Attributes.md#-showcontrols)
[🗂️ showdatatable](../Chart%20Attributes.md#-showdatatable)
[#️⃣ showgridlines](../Chart%20Attributes.md#-showgridlines)
[➖ showzeroline](../Chart%20Attributes.md#-showzeroline)
[📍 showmarkers](../Chart%20Attributes.md#-showmarkers)
[📲 showwidget](../Chart%20Attributes.md#-showwidget)

## 🧱 Input Data

### Points (Quantitative Data): 🎯 js-x-points, 🎯 js-y-points & 🎈 js-s-points

Bubble charts (or bubble plots) are used to visualize relationships between three numerical variables: two determining the bubble’s position on the x and y axes, and the third controlling the bubble’s size.

 - `js-x-points' sets a **comma-separated list of numeric values** that define the *x-points* to visualize on a chart's x-axis.
 - `js-y-points' sets a **comma-separated list of numeric values** that define the *y-points* to visualize on a chart's y-axis.
 - `js-s-points' sets a **comma-separated list of numeric values** that define the *point's value* to visualize on a chart.


```
<div class="js-x-points">1, 1, 5, 6, 0, 2, 3, 8, 6, 0</div>
<div class="js-y-points">3, 4, 5, 1, 1, 0, 9, 5, 6, 3</div>
<div class="js-s-points">6, 20, 6, 0, 22, 2, 16, 3, 24, 6</div>
```

### 🖌️ Style Directives

Every chart is customized (or styled) using one of the supported **style templates**.

**Style directives** are used to override the customization applied by the style template to each chart.

Bubble charts support the following style directives.

[🖼️ js-canvas-*](../directives/Style%20Directive%20Canvas.md)
[📊 js-chart-*](../directives/Style%20Directive%20Chart.md)
[🎨 js-color-*](../directives/Style%20Directive%20Color.md)
[🖱️ js-control-button-*](../directives/Style%20Directive%20Control%20Buttons.md)
[🏷️ js-datalabel-*](../directives/Style%20Directive%20Data%20Label.md)
[🗂️ js-datatable-*](../directives/Style%20Directive%20Data%20Table.md)
[🦶 js-footer-*](../directives/Style%20Directive%20Footer.md)
#[️⃣ js-grid-line-*](../directives/Style%20Directive%20Grid%20Line.md)
[📘 js-legend-*](../directives/Style%20Directive%20Legend.md)
[📍 js-marker-*](../directives/Style%20Directive%20Marker.md)
[🎮 js-options-menu-*](../directives/Style%20Directive%20Options%20Menu.md)
[📏 js-scale-*](../directives/Style%20Directive%20Scale.md)
[📄 js-title-*](../directives/Style%20Directive%20Title.md)
[➖ js-zero-line-*](../directives/Style%20Directive%20Zero%20Line.md)

> 💡 See the [👀 js-chart-examples](https://github.com/wrathtafarian/js-chart-examples) repo for many detailed examples of how to use the **style directives** to customize a chart.

## 👀 Examples

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/bubble%20charts.md) repo for many detailed examples of how to use different types of **bubble charts**.

### Example: Bubble Chart

The example below renders a **bubble chart**, showing **two data series**.

```
<div class="js-chart" type="bubble" title="Chart title">
    <div class="js-x-points">46.121, -35.366, -33.821, 15.75, 44.121, 23.173, 42.168, -25.193, -27.046, 24.052, -39.882, 34.963, 14.813, 26.912, 9.053, 21.83, 34.889, 29.981, -46.911, 45.61, -26.67, -25.61, 20.135, -10.081, 7.419</div>
    <div class="js-y-points">5.445, 14.34, 2.653, 19.196, -20.849, -23.449, -19.316, -21.855, 35.41, 5.142, -40.091, 11.093, -18.731, -16.996, 30.107, -19.531, -15.21, -7.736, -27.036, -17.887, 5.202, -35.885, -39.255, 46.258, 32.896</div>
    <div class="js-s-points">-10.87, -29.568, -5.621, -27.036, 0.217, 12.972, 18.516, -20.73, 18.925, -12.378, -13.318, -45.284, 24.342, 29.762, 24.691, 27.51, 41.813, -36.869, 5.143, 30.471, -30.967, 32.016, -33.962, -3.439, -43.729</div>

    <div class="js-x-points">20</div>
    <div class="js-y-points">20</div>
    <div class="js-s-points">50</div>

    <div class="js-marker-width">75px</div>
    <div class="js-marker-height">75px</div>
</div>
```

#### Explained

##### Data Series: 🎯 js-x-point, 🎯 js-y-points & 🎈 js-s-points

 - `js-x-points' sets a **comma-separated list of numeric values** that define the *x-points* to visualize on a chart's x-axis.
 - `js-y-points' sets a **comma-separated list of numeric values** that define the *y-points* to visualize on a chart's y-axis.
 - `js-s-points' sets a **comma-separated list of numeric values** that define the *point's value* to visualize on a chart.

##### Customization: 🖌️ Style Directives

 - The `js-marker-width` and `js-marker-height` sets the **base dimensions** for the bubble. If no base dimensions are set, the bubble chart will utomatically determine the best base dimension size to use.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/bar%20charts.md) repo for many detailed examples of how to use different types of **bubble charts**.