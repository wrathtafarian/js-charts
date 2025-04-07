# 🌊 Waterfall Charts

A **waterfall chart** is a data visualization that helps illustrate how an initial value changes through a series of additions and subtractions to reach a final value. Each column represents a step in the process, with increases shown in one color and decreases in another. The chart is commonly used in financial analysis, budgeting, and performance tracking to break down changes in revenue, profit, or costs over time.

 - **Usage**: 🧵 Pattern 🌡️ Range
 - **Types**:
   - **Waterfall bar chart** renders a waterfall chart using horizontal bars.
   - **Waterfall column chart** renders a waterfall chart using vertical columns.

Unlike traditional bar charts, waterfall charts highlight incremental changes rather than absolute values, making it easier to analyze contributions to a total. They are particularly useful for understanding profit and loss statements, cash flow analysis, and operational performance by visually showing where gains and losses occur within a process.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/waterfall%20charts.md) repo for many detailed examples of how to use and customize (style) different types of **waterfall charts**.

## ⚙️ Chart Attributes

Waterfall charts accept the following chart attributes.

[🧱 class](../Chart%20Attributes.md#-class)
 | [🗂️ type](../Chart%20Attributes.md#-type)
 | [🕒 version](../Chart%20Attributes.md#-version)
 | [📋 template](../Chart%20Attributes.md#-template)
 | [↔️ width](../Chart%20Attributes.md#-width)
 | [↕️ height](../Chart%20Attributes.md#-height)
 | [📄 title](../Chart%20Attributes.md#-title)
 | [📄 ytitle](../Chart%20Attributes.md#-ytitle)
 | [📄 xtitle](../Chart%20Attributes.md#-xtitle)
 | [📏 scalemin](../Chart%20Attributes.md#-scalemin)
 | [📏 scalemax](../Chart%20Attributes.md#-scalemax)
 | [🔄 swapaxis](../Chart%20Attributes.md#-swapaxis)
 | [🔽 sortdata](../Chart%20Attributes.md#-sortdata)
 | [🚫 limitdata](../Chart%20Attributes.md#-limitdata)
 | [🔲 showborder](../Chart%20Attributes.md#-showborder)
 | [🏷️ showlabels](../Chart%20Attributes.md#-showlabels)
 | [📘 showlegend](../Chart%20Attributes.md#-showlegend)
 | [🎮 showcontrols](../Chart%20Attributes.md#-showcontrols)
 | [🗂️ showdatatable](../Chart%20Attributes.md#-showdatatable)
 | [#️⃣ showgridlines](../Chart%20Attributes.md#-showgridlines)
 | [➖ showzeroline](../Chart%20Attributes.md#-showzeroline)
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

Waterfall charts support the following style directives.

[🖼️ js-canvas-*](../directives/Style%20Directive%20Canvas.md)
 | [📊 js-chart-*](../directives/Style%20Directive%20Chart.md)
 | [🎨 js-color-*](../directives/Style%20Directive%20Color.md)
 | [🖱️ js-control-button-*](../directives/Style%20Directive%20Control%20Buttons.md)
 | [🏷️ js-datalabel-*](../directives/Style%20Directive%20Data%20Label.md)
 | [🗂️ js-datatable-*](../directives/Style%20Directive%20Data%20Table.md)
 | [🦶 js-footer-*](../directives/Style%20Directive%20Footer.md)
 | #[️⃣ js-grid-line-*](../directives/Style%20Directive%20Grid%20Line.md)
 | [📘 js-legend-*](../directives/Style%20Directive%20Legend.md)
 | [🎮 js-options-menu-*](../directives/Style%20Directive%20Options%20Menu.md)
 | [📏 js-scale-*](../directives/Style%20Directive%20Scale.md)
 | [📄 js-title-*](../directives/Style%20Directive%20Title.md)
 | [🧱 js-value-bar-*](../directives/Style%20Directive%20Value%20Bar.md)
 | [➖ js-zero-line-*](../directives/Style%20Directive%20Zero%20Line.md)

> 💡 See the [👀 js-chart-examples](https://github.com/wrathtafarian/js-chart-examples) repo for many detailed examples of how to use the **style directives** to customize a chart.

## 👀 Examples

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/waterfall%20charts.md) repo for many detailed examples of how to use different types of **waterfall charts**.

### Example: Waterfall Chart: Income and expenses - Q3

The example below renders a **waterfall chart**, showing **Income and expenses - Q3** of a fictional company.

```
<div class="js-chart" type="waterfall bar" width="700px" title="Income and expenses - Q3" xtitle="Movement" ytitle="Euro" showlegend="off" showgridlines="yes" showzeroline="yes" showdatatable="no">
    <div class="js-labels">Opening balance, Rent, Repairs, Insurance, Payment invoice #455, Stationary</div>
    <div class="js-values" title="Q3 Income and Expenses">15766, -9321, -5214, -4520, 2345, -1756</div>

    <div class="js-value-bar-min-width">2px</div>
    <div class="js-value-bar-series-margin">5px</div>
</div>
```

#### Explained

##### Category: 🏷️ js-labels

The `js-labels` input container sets the labels that anchor each cluster on the axis. In this example, each cluster represents one quarter in the year.

##### Data Series: 📋 js-values

There are three `js-values` input containers. Each container represents one data series (or data set) on the chart. In the example, each container represents one product line.

##### Customization: 🖌️ Style Directives

 - The `js-value-bar-min-width` style directive ensures that all cells on the chart are not rendered below **2px** in height.
 - The `js-value-bar-series-margin` style directive creates a **5px** gap between the bars on the chart.