# 📈 Line Charts

A **line chart** is a type of chart that displays data points connected by straight lines, making it ideal for showing trends over time or continuous data. The x-axis typically represents time or another continuous variable, while the y-axis shows the values or measurements associated with those time points. Line charts are especially useful for tracking changes in data over a specific period and for comparing multiple variables or datasets, as each dataset can be represented by a different line.

 - **Usage**: 🔍 Comparison ⏱️ Date-Over-Time 🧵 Pattern
 - **Types**:
   - **Line Chart** - A standard line chart shows trends over time (or another continuous variable) using lines to connect data points. If there are multiple series, each one is plotted independently, meaning the y-values are absolute and not influenced by the other series. <ins>Example</ins>: Tracking sales revenue for three products separately over time.
   - **Stacked Line Chart** - This is an extension of the line chart where multiple series are stacked on top of each other. Instead of plotting each series separately, the second series starts where the first one ends, the third series starts where the second one ends, and so on. The topmost line represents the total value at each point. This chart shows the cumulative effect of different categories but can make it harder to compare individual trends. <ins>Example</ins>: Tracking total revenue over time, broken down into contributions from three products.
   - **100% Stacked Line Chart** - Similar to a stacked line chart, but each point is normalized to 100%. This means that instead of showing absolute values, each point represents the percentage contribution of each series at that time. Useful for showing how proportions change over time, regardless of total values. <ins>Example</ins>: Showing what percentage of total sales each product contributes over time, even if overall sales are increasing or decreasing.

Line charts are commonly used in various fields, such as finance, economics, and science, to visualize trends like stock prices, temperature changes, or sales figures. By connecting data points, line charts provide a clear view of the overall direction of the data, making it easier to identify patterns, fluctuations, or anomalies. The continuous nature of the lines helps emphasize the relationship between data points, making it an effective tool for analyzing temporal or sequential data.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/line%20charts.md) repo for many detailed examples of how to use and customize (style) different types of **line charts**.

## ⚙️ Chart Attributes

Line charts accept the following chart attributes.

[🧱 class](../Chart%20Attributes.md#-class)
[🗂️ type](../Chart%20Attributes.md#-type)
[🕒 version](../Chart%20Attributes.md#-version)
[📋 template](../Chart%20Attributes.md#-template)
[↔️ width](../Chart%20Attributes.md#-width)
[↕️ height](../Chart%20Attributes.md#-height)
[📄 title](../Chart%20Attributes.md#-title)
[📄 ytitle](../Chart%20Attributes.md#-ytitle)
[📄 xtitle](../Chart%20Attributes.md#-xtitle)
[📏 scalemin](../Chart%20Attributes.md#-scalemin)
[📏 scalemax](../Chart%20Attributes.md#-scalemax)
[🔄 swapaxis](../Chart%20Attributes.md#-swapaxis)
[🔽 sortdata](../Chart%20Attributes.md#-sortdata)
[🚫 limitdata](../Chart%20Attributes.md#-limitdata)
[🔲 showborder](../Chart%20Attributes.md#-showborder)
[🏷️ showlabels](../Chart%20Attributes.md#-showlabels)
[📘 showlegend](../Chart%20Attributes.md#-showlegend)
[🎮 showcontrols](../Chart%20Attributes.md#-showcontrols)
[🗂️ showdatatable](../Chart%20Attributes.md#-showdatatable)
[#️⃣ showgridlines](../Chart%20Attributes.md#-showgridlines)
[➖ showzeroline](../Chart%20Attributes.md#-showzeroline)
[📈 showlines](../Chart%20Attributes.md#-showlines)
[📍 showmarkers](../Chart%20Attributes.md#-showmarkers)
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

Line charts support the following style directives.

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
[📈 js-value-line-*](../directives/Style%20Directive%20Value%20Line.md)
[➖ js-zero-line-*](../directives/Style%20Directive%20Zero%20Line.md)

> 💡 See the [👀 js-chart-examples](https://github.com/wrathtafarian/js-chart-examples) repo for many detailed examples of how to use the **style directives** to customize a chart.

## 👀 Examples

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/line%20charts.md) repo for many detailed examples of how to use different types of **line charts**.

### Example: Clustered Line Chart: Water Consumption

The example below renders a **clustered line chart**, showing **Quarterly Water Consumption** for a fictional municipality.

```
<div class="js-chart" type="line" title="Water Consumption: Q1 & Q2" xtitle="Expenses" ytitle="Euro (EUR)">
    <div class="js-labels">Jan, Feb, Mar, Apr, May, Jun</div>
    <div class="js-values" title="Head office">4523.264, 4795.741, 4605.028, 4722.249, 4850.031, 4991.461</div>
    <div class="js-values" title="Branch office">3522.358, 3398.41, 3396.393, 3443.617, 3515.19, 3207.277</div>
</div>
```

#### Explained

##### Category: 🏷️ js-labels

The `js-labels` input container sets the labels that anchor each cluster on the axis. In this example, each cluster represents one quarter in the year.

##### Data Series: 📋 js-values

There are three `js-values` input containers. Each container represents one data series (or data set) on the chart. In the example, each container represents one product line.