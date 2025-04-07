# 🍩 Pie & Doughnut Charts

Pie and doughnut charts are circular charts used to represent proportions within a dataset.

A **pie chart** is a full circle divided into slices, where each slice represents a category’s share of the total. The size of each slice is proportional to the corresponding value, making it useful for visualizing percentage distributions. However, pie charts can become difficult to interpret when there are too many categories or when values are similar in size.

**Doughnut charts** are a variation of pie charts with a hollow center, which can improve readability by reducing visual clutter. The central space can also be used for additional information, such as total values or labels. Doughnut charts allow for easier comparisons when multiple datasets are presented side by side as concentric rings. Both pie and doughnut charts are best used when highlighting key proportions rather than making precise comparisons between data points.

 - **Usage**: 🔍 Comparison 🥧 Part-To-A-Whole ⚖️ Proportions
 - **Types**:
   - **Pie Chart**: A circular chart divided into slices, where each slice represents a portion of the whole. The size of each slice corresponds to its percentage of the total. Useful for showing relative proportions of categories but can become hard to read with too many segments.
   - **Doughnut Chart**: A variation of a pie chart but with a hole in the middle (making it look like a doughnut). The hole makes it easier to add labels or additional information in the center. Visually lighter than a pie chart while still showing proportions.
   - **Stacked Doughnut Chart**: This chart consists of multiple concentric doughnut charts stacked inside each other. Each ring represents a different dataset, allowing for a layered comparison. Useful for showing changes over time or across multiple groups while maintaining a clear proportion visualization.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/pie%20and%20doughnut%20charts.md) repo for many detailed examples of how to use and customize (style) different types of **pie & doughnut charts**.

## ⚙️ Chart Attributes

Pie & doughnut charts accept the following chart attributes.

[🧱 class](../Chart%20Attributes.md#-class)
 | [🗂️ type](../Chart%20Attributes.md#-type)
 | [🕒 version](../Chart%20Attributes.md#-version)
 | [📋 template](../Chart%20Attributes.md#-template)
 | [↔️ width](../Chart%20Attributes.md#-width)
 | [↕️ height](../Chart%20Attributes.md#-height)
 | [📄 title](../Chart%20Attributes.md#-title)
 | [🍩 holetitle](../Chart%20Attributes.md#-holetitle)
 | [📐 startangle](../Chart%20Attributes.md#-startangle)
 | [🔄 swapaxis](../Chart%20Attributes.md#-swapaxis)
 | [🔽 sortdata](../Chart%20Attributes.md#-sortdata)
 | [🚫 limitdata](../Chart%20Attributes.md#-limitdata)
 | [🔲 showborder](../Chart%20Attributes.md#-showborder)
 | [🏷️ showlabels](../Chart%20Attributes.md#-showlabels)
 | [📘 showlegend](../Chart%20Attributes.md#-showlegend)
 | [🎮 showcontrols](../Chart%20Attributes.md#-showcontrols)
 | [🗂️ showdatatable](../Chart%20Attributes.md#-showdatatable)
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

Pie & doughnut charts support the following style directives.

[🖼️ js-canvas-*](../directives/Style%20Directive%20Canvas.md)
 | [📊 js-chart-*](../directives/Style%20Directive%20Chart.md)
 | [🎨 js-color-*](../directives/Style%20Directive%20Color.md)
 | [🖱️ js-control-button-*](../directives/Style%20Directive%20Control%20Buttons.md)
 | [🏷️ js-datalabel-*](../directives/Style%20Directive%20Data%20Label.md)
 | [🗂️ js-datatable-*](../directives/Style%20Directive%20Data%20Table.md)
 | [🦶 js-footer-*](../directives/Style%20Directive%20Footer.md)
 | [📘 js-legend-*](../directives/Style%20Directive%20Legend.md)
 | [🎮 js-options-menu-*](../directives/Style%20Directive%20Options%20Menu.md)
 | [📄 js-title-*](../directives/Style%20Directive%20Title.md)

> 💡 See the [👀 js-chart-examples](https://github.com/wrathtafarian/js-chart-examples) repo for many detailed examples of how to use the **style directives** to customize a chart.

## 👀 Examples

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/pie%20nd%20doughnut%20charts.md) repo for many detailed examples of how to use different types of **pie & doughnut charts**.

### Example: Stacked Doughnut Chart: Sales Revenue (2022 to 2024)

The example below renders a **stacked doughnut chart**, showing **Sales Revenue (2022 to 2024)**.

```
<div id="js-chart-builder-preview" class="js-chart" type="stacked doughnut" title="Sales Revenue" template="default" showcontrols="off" holetitle="2022 - 2024">
    <div class="js-labels">Furniture, Groceries, Electronics, Toys, Clothing</div>
    <div class="js-values" title="2022">64, 142, 152, 156, 229</div>
    <div class="js-values" title="2023">152, 70, 121, 171, 238</div>
    <div class="js-values" title="2024">252, 124, 260, 137, 264</div>
</div>
```

#### Explained

##### Category: 🏷️ js-labels

The `js-labels` input container sets the labels that anchor each cluster on the axis. In this example, each cluster represents one quarter in the year.

##### Data Series: 📋 js-values

There are three `js-values` input containers. Each container represents one data series (or data set) on the chart. In the example, each container represents one product line.