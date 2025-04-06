# 📦 Box Plots (Box-and-Whisker Plots)

**Box plots** (or **box-and-whisker plots**) provide a quick visual summary of data spread, skewness, and potential outliers. They are especially useful for comparing multiple data sets side by side. Unlike histograms, they do not show the exact shape of the distribution but offer a concise summary of its key characteristics, making them valuable in statistical analysis and exploratory data visualization.

 - **Usage**: 🧵 Pattern 🔍 Comparison ↔️ Distribution 🌡️ Range

## ⚙️ Chart Attributes

Box plots accept the following chart attributes.

[🧱 class](../Chart%20Attributes.md#-class)
[🗂️ type](../Chart%20Attributes.md#-type)
[🕒 version](../Chart%20Attributes.md#-version)
[📋 template](../Chart%20Attributes.md#-template)
[↔️ width](../Chart%20Attributes.md#-weidth)
[↕️ height](../Chart%20Attributes.md#-height)
[📄 title](../Chart%20Attributes.md#-title)
[📄 ytitle](../Chart%20Attributes.md#-ytitle)
[📄 xtitle](../Chart%20Attributes.md#-xtitle)
[📏 scalemin](../Chart%20Attributes.md#-scalemin)
[📏 scalemax](../Chart%20Attributes.md#-scalemax)
[🔽 sortdata](../Chart%20Attributes.md#-sortdata)
[🔲 showborder](../Chart%20Attributes.md#-showborder)
[🏷️ showlabels](../Chart%20Attributes.md#-showlabels)
[📘 showlegend](../Chart%20Attributes.md#-showlegend)
[🎮 showcontrols](../Chart%20Attributes.md#-showcontrols)
[🗂️ showdatatable](../Chart%20Attributes.md#-showdatatable)
[🐱 showwhiskers](../Chart%20Attributes.md#-showdatatable)
[➖ showmedians](../Chart%20Attributes.md#-showmedians)
[#️⃣ showgridlines](../Chart%20Attributes.md#-showgridlines)
[➖ showzeroline](../Chart%20Attributes.md#-showzeroline)
[📲 showwidget](../Chart%20Attributes.md#-showwidget)

## 🧱 Input Data

### Data Series: 📁 js-series & 📋 js-values

Box plots use the `js-series` and `js-values` input containers to set the input data for a chart.

 - Each box plot supports one or more `js-series` input containers.
 - Every `js-series` container supports one or more `js-values` input containers.

Each `js-series` and `js-values` container supports a `title` attribute that can be used to provide a *name* or *short description* for each container.

```
<div class="js-series" title="Zone A">
    <div class="js-values" title="Zone A">28, 30, 29, 35, 40, 32, 31, 29, 36, 34</div>
</div>
<div class="js-series" title="Zone B">
    <div class="js-values" title="Zone B">45, 47, 50, 52, 55, 48, 49, 51, 46, 44</div>
</div>
<div class="js-series" title="Zone C">
    <div class="js-values" title="Zone C">22, 25, 24, 26, 23, 21, 28, 27, 25, 26</div>
</div>
<div class="js-series" title="Zone D">
    <div class="js-values" title="Zone D">60, 63, 67, 70, 62, 68, 65, 66, 64, 69</div>
</div>
```

> ℹ️ A **title** will automatically be assigned to each data series (or data set) if no `title` attribute is assigned to the `js-values` container.

### 🖌️ Style Directives

Every chart is customized (or styled) using one of the supported **style templates**.

**Style directives** are used to override the customization applied by the style template to each chart.

Box plots (or box-and-whisker plots) support the following style directives.

[🖼️ js-canvas-*](../directives/Style%20Directive%20Canvas.md)
[📊 js-chart-*](../directives/Style%20Directive%20Canvas.md)
[🎨 js-color-*](../directives/Style%20Directive%20Color.md)
[🖱️ js-control-button-*](../directives/Style%20Directive%20Control%20Button.md)
[🏷️ js-datalabel-*](../directives/Style%20Directive%20Data%20Label.md)
[🗂️ js- datatable-*](../directives/Style%20Directive%20Data%20Table.md)
[🦶 js-footer-*](../directives/Style%20Directive%20Footer.md)
#[️⃣ js-grid-line-*](../directives/Style%20Directive%20Grid%20Line.md)
[📘 js-legend-*](../directives/Style%20Directive%20Legend.md)
[🎮 js-options-menu-*](../directives/Style%20Directive%20Options%20Menu.md)
[📏 js-scale-*](../directives/Style%20Directive%20Scale.md)
[📄 js-title-*](../directives/Style%20Directive%20Title.md)
[🧱 js-value-bar-*](../directives/Style%20Directive%20Value%20Bar.md)
[🧱 js-value-line-*](../directives/Style%20Directive%20Value%20Line.md)
[📈 js-zero-line-*](../directives/Style%20Directive%20Zero%20Line.md)

> 💡 See the [👀js-chart-examples](https://github.com/wrathtafarian/js-chart-examples) repo for many detailed examples of how to use the **style directives** to customize a chart.

## 👀 Examples

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/box%20plots.md) repo for many detailed examples of how to use **box plots** (or **box-and-whisker plots**).

### Example: Delivery Times by Zone (in minutes)

The example below renders a **box plot** (or **box-and-whisker plot**), showing *Delivery Times by Zone* of **4 different zones** (e.g., for a food delivery service). **Two data sets** were captured for each zone.

```
<div class="js-chart" type="box plot" title="Delivery Times by Zone (in minutes)" showlabls="absolute" showlegend="off">
	<div class="js-series" title="Zone A">
		<div class="js-values" title="Zone A1">41.392, 50.748, 47.609, 40.824, 44.105, 38.859, 41.762, 53.671, 50.883, 53.474, 50.925, 49.696, 41.903, 48.686, 40.732, 50.263, 52.501, 47.081, 52.577, 38.045</div>
		<div class="js-values" title="Zone A2">40.981, 45.457, 50.058, 46.35, 44.146, 39.769, 51.243, 52.659, 41.735, 45.513, 47.048, 45.606, 44.841, 47.807, 44.764, 49.707, 42.683, 43.593, 48.622, 43.586</div>
	</div>
	<div class="js-series" title="Zone B">
		<div class="js-values" title="Zone B1">50.104, 57.486, 60.776, 65.72, 55.399, 57.835, 61.965, 51.642, 64.537, 65.407, 51.952, 61.239, 65.827, 51.489, 66.006, 64.188, 66.619, 58.66, 59.2, 61.218</div>
		<div class="js-values" title="Zone B2">51.419, 56.8, 64.477, 59.1, 60.645, 64.101, 62.65, 61.868, 63.118, 61.652, 49.07, 49.126, 48.866, 58.077, 62.298, 62.764, 61.119, 60.062, 53.334, 66.603</div>
	</div>
	<div class="js-series" title="Zone C">
		<div class="js-values" title="Zone C1">36.277, 42.08, 41.609, 12.786, 47.892, 45.11, 41.78, 34.316, 31.996, 45.2, 48.192, 32.597, 38.71, 28.621, 41.269, 45.015, 47.45, 48.248, 48.258, 45.823</div>
		<div class="js-values" title="Zone C2">43.317, 34.182, 30.088, 43.543, 43.06, 31.971, 47.911, 35.293, 34.732, 29.353, 42.376, 45.755, 34.793, 39.008, 47.12, 46.37, 31.594, 38.089, 36.354, 46.281</div>
	</div>
	<div class="js-series" title="Zone D">
		<div class="js-values" title="Zone D1">69.277, 67.161, 52.515, 43.6, 71.569, 71.955, 49.809, 62.107, 42.782, 71.936, 44.474, 61.475, 46.267, 72.337, 61.024, 44.61, 66.238, 44.466, 55.894, 74.443</div>
		<div class="js-values" title="Zone D2">61.675, 76.407, 44.052, 58.023, 57.39, 63.603, 75.584, 69.012, 72.182, 67.556, 66.307, 57.22, 53.579, 50.303, 45.311, 67.302, 51.832, 52.897, 72.718, 73.814</div>
	</div>

	<div class="js-datalabel-text-color">Black</div>
	<div class="js-value-bar-data-margin">10px</div>
	<div class="js-value-line-thickness">2px</div>
	<div class="js-marker-width">8px</div>
	<div class="js-marker-height">8px</div>
</div>
```

#### Explained

##### Data Series: 📋 js-series

 - Each `js-series` input container defines a distinct **data series**.

##### Data Series: 📋 js-values

 - Each data series container contains one or more `js-values` input containers. Each container specifies a **comma-separated list of numeric values** for each data set.

##### Customization: 🖌️ Style Directives

 - The `js-datalabel-text-color` style directive set a foreground color of `Black` for all data labels on the chart.
 - The `js-value-bar-data-margin` style directive adds a `10px` gap between each box on the chart.
 - The `js-value-line-thickness` style directive sets a line thickness of `2px` for the **whisker lines** and **median lines** on the chart.
 - The `js-marker-width` and `js-marker-height` style directives set the width and height properties of the markers used to visualize **outliers** on the chart.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/box%20plots.md) repo for many detailed examples of how to use **box plots** (or **box-and-whisker plots**).