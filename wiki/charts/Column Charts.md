# 📊 Column Charts

A **column chart** is a type of bar chart that displays data using vertical bars, where the height of each bar represents a value. It is commonly used to compare discrete categories or track changes over time. The x-axis represents categories, while the y-axis represents numerical values. Column charts are useful for visualizing trends, making comparisons, and identifying patterns such as increases, decreases, or outliers within a dataset.

 - **Usage**: 🧵 Pattern 🔍 Comparison

 - **Types**:
   - **Clustered Column Chart** compares individual values across categories.
   - **Stacked Column Chart** compares both the total value and the breakdown of categories.
   - **100% Stacked Column Chart** focuses on the percentage contribution of each sub-category, normalizing each column to 100%.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/column%20charts.md) repo for many detailed examples of how to use and customize (style) different types of **column charts**.

## ⚙️ Chart Attributes

Column charts accept the following chart attributes.

[🧱 class](../Chart%20Attributes.md#-class)
[🗂️ type](../Chart%20Attributes.md#-type)
[🕒 version](../Chart%20Attributes.md#-version)
[📋 template](../Chart%20Attributes.md#-template)
[↔️ width](../Chart%20Attributes.md#-weidth)
[↕️ height](../Chart%20Attributes.md#-height)
[📄 title](../Chart%20Attributes.md#-title)
[🔽 sortdata](../Chart%20Attributes.md#-sortdata)
[📄 ytitle](../Chart%20Attributes.md#-ytitle)
[📄 xtitle](../Chart%20Attributes.md#-xtitle)
[📏 scalemin](../Chart%20Attributes.md#-scalemin)
[📏 scalemax](../Chart%20Attributes.md#-scalemax)
[🔄 swapaxis](../Chart%20Attributes.md#-swapaxis)
[🔲 showborder](../Chart%20Attributes.md#-showborder)
[🏷️ showlabels](../Chart%20Attributes.md#-showlabels)
[📘 showlegend](../Chart%20Attributes.md#-showlegend)
[🎮 showcontrols](../Chart%20Attributes.md#-showcontrols)
[#️⃣ showgridlines](../Chart%20Attributes.md#-showgridlines)
[➖ showzeroline](../Chart%20Attributes.md#-showzeroline)
[🗂️ showdatatable](../Chart%20Attributes.md#-showdatatable)
[📲 showwidget](../Chart%20Attributes.md#-showwidget)

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

Column charts support the following style directives.

[🖼️ js-canvas-*](../directives/Style%20Directive%20Canvas.md)
[📊 js-chart-*](../directives/Style%20Directive%20Canvas.md)
[🎨 js-color-*](../directives/Style%20Directive%20Color.md)
[🖱️ js-control-button-*](../directives/Style%20Directive%20Control%20Button.md)
[🏷️ js-datalabel-*](../directives/Style%20Directive%20Data%20Label.md)
[🗂️ js-datatable-*](../directives/Style%20Directive%20Data%20Table.md)
[🦶 js-footer-*](../directives/Style%20Directive%20Footer.md)
#[️⃣ js-grid-line-*](../directives/Style%20Directive%20Grid%20Line.md)
[📘 js-legend-*](../directives/Style%20Directive%20Legend.md)
[🎮 js-options-menu-*](../directives/Style%20Directive%20Options%20Menu.md)
[📏 js-scale-*](../directives/Style%20Directive%20Scale.md)
[📄 js-title-*](../directives/Style%20Directive%20Title.md)
[🧱 js-value-bar-*](../directives/Style%20Directive%20Value%20Bar.md)
[➖ js-zero-line-*](../directives/Style%20Directive%20Zero%20Line.md)

> 💡 See the [👀 js-chart-examples](https://github.com/wrathtafarian/js-chart-examples) repo for many detailed examples of how to use the **style directives** to customize a chart.

## 👀 Examples

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/column%20charts.md) repo for many detailed examples of how to use different types of **column charts**.

### Example: Clustered Column Chart: Monthly Revenue Comparison

The example below renders a **clustered column chart**, showing **Quarterly Sales** of **three product lines** (e.g., in a retail business).

```
<div class="js-chart" type="100% stacked column" template="darkweb" title="Quarterly Sales by Product Line" ytitle="Product Lines" xtitle="Sales (USD)">
	<div class="js-labels">Q1, Q2, Q3, Q4</div>

	<div class="js-values" title="Clothing (USD)">15000, 17500, 14000, 19000</div>
	<div class="js-values" title="Accessories (USD)">8000, 9200, 10500, 11000</div>
	<div class="js-values" title="Home Decor (USD)">6500, 7000, 6800, 7400</div>

	<div class="js-color-palette">Orange; SteelBlue; CadetBlue</div>
	<div class="js-datalabel-font-size">14px</div>
	<div class="js-datalabel-font-weight">600</div>
	<div class="js-datalabel-text-color">white</div>
	<div class="js-value-bar-series-margin">10px</div>
</div>
```

#### Explained

##### Category: 🏷️ js-labels

The `js-labels` input container sets the labels that anchor each cluster on the axis. In this example, each cluster represents one quarter in the year.

##### Data Series: 📋 js-values

There are three `js-values` input containers. Each container represents one data series (or data set) on the chart. In the example, each container represents one product line.

##### Customization: 🖌️ Style Directives

 - The `js-color-palette` style directive sets a list of three colors to be used on the chart. Each color is assigned to a data series (or data set) in a round robin rotation assignment.
 - The `js-datalabel-font-size` sets a font-size of `14px` for all data labels on the chart.
 - The `js-datalabel-font-weight` sets a font-weight of `600` for all data labels on the chart.
 - The `js-datalabel-text-color` sets a foreground color of `white` for all data labels on the chart.
 - The `js-value-bar-series-margin` sets a gap of `10px` between each column on the chart.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/column%20charts.md) repo for many detailed examples of how to use different types of **column charts**.