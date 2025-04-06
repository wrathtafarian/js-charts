# 🔻 Funnel Charts

A **funnel chart** is a specialized visualization used to represent stages in a process, showing how data values decrease progressively from one stage to the next. It is shaped like a funnel, with the widest section at the top representing the initial stage and narrower sections below indicating subsequent stages. Funnel charts are commonly used in sales, marketing, and business analysis to illustrate conversion rates, drop-off points, or process efficiency.

 - **Usage**: 🔍 Comparison
 - **Types**:
   - **Funnel Bar Chart** compares individual values across categories. Renders horizontal bars.
   - **Funnel Column Chart** compares both the total value and the breakdown of categories. Renders vertical bars.

Funnel charts are particularly useful for identifying bottlenecks and areas where significant losses occur between stages. For example, in a sales pipeline, a funnel chart can show how many leads move from initial contact to final purchase. While effective for visualizing sequential processes, funnel charts should be used carefully, as they do not display exact proportions and may not be suitable for comparing unrelated categories.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/funnel%20charts.md) repo for many detailed examples of how to use and customize (style) different types of **funnel charts**.

## ⚙️ Chart Attributes

Funnel charts accept the following chart attributes.

[🧱 class](../Chart%20Attributes.md#-class)
[🗂️ type](../Chart%20Attributes.md#-type)
[🕒 version](../Chart%20Attributes.md#-version)
[📋 template](../Chart%20Attributes.md#-template)
[↔️ width](../Chart%20Attributes.md#-weidth)
[↕️ height](../Chart%20Attributes.md#-height)
[📄 title](../Chart%20Attributes.md#-title)
[📄 ytitle](../Chart%20Attributes.md#-ytitle)
[📄 xtitle](../Chart%20Attributes.md#-xtitle)
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

A funnel chart is created using **sequential categorical data** and **numerical values** that represent progressive stages in a process. The data typically consists of:

 - **Stages** (**Categorical Data**) – These represent the steps in a linear process, such as sales pipeline stages (e.g., "Leads," "Qualified Leads," "Proposals Sent," "Closed Deals") or customer journey steps (e.g., "Website Visit," "Sign-up," "Purchase"). These stages are plotted in descending order from top to bottom.
 - **Values** (**Numerical Data**) – These indicate the quantity of items at each stage. Examples include the number of customers, leads, transactions, or conversions at each step. The values usually decrease as the process progresses, forming the funnel shape.

Funnel charts work best when illustrating processes with a clear flow and measurable drop-offs between stages. They are commonly used in business analytics, sales, marketing, and operational efficiency analysis.

### Category: 🏷️ js-labels

The `js-labels` input container sets the labels that anchors each cluster on the axis (e.g., different months, regions, or items).

The container accepts a **comma-separated list of text values**.

```
<div class="js-labels">label-0, label-1, label-2, ..., label-n</div>
```

The example below sets the category labels for  tupical funnel chart depicting movement of funds

```
<div class="js-labels">Opening Balance, Salary, Rent, Groceries, Medical Aid, Insurance</div>
```

### Data Series: 📋 js-values

The `js-values` input container sets the individual data series (or data sets) on a chart.

The container accept a **comma-separated list of numeric values**.

```
<div class="js-values">1000, -200, -100, 500, -400, -400</div>
```

The `js-values` input container accepts a `title` attribute that is used to set a name or short description for the data series (or data set).

```
<div class="js-values" title="Budget Oct 2024">100, -200, -100, 500, -400, -400</div>
```

> ℹ️ A **title** will automatically be assigned to each data series (or data set) if no `title` attribute is assigned to the `js-values` container.

### 🖌️ Style Directives

Every chart is customized (or styled) using one of the supported **style templates**.

**Style directives** are used to override the customization applied by the style template to each chart.

Funnel charts support the following style directives.

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

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/funnel%20charts.md) repo for many detailed examples of how to use different types of **funnel charts**.

### Example: Funnel Chart: Monthly Income and Expenses

The example below renders a **funnel bar chart**, showing an **E-Commerce Sales Funnel** of fictional **online shop**.

```
<div class="js-chart" type="funnel bar" title="E-Commerce Sales Funnel" showcontrols="off">
    <div class="js-labels">Website Visitors, Product Page Views, Add to Cart, Checkout Initiated, Purchase Completed</div>
    <div class="js-values">50000, 30000, 15000, 10000, 7000</div>

    <div class="js-value-bar-data-margin">7px</div>
    <div class="js-value-bar-box-shadow">3px 3px 3px #555555</div>
    <div class="js-legend-box-shadow">3px 3px 3px #555555</div>
</div>
```

#### Explained

##### Category: 🏷️ js-labels

The `js-labels` input container sets the labels that anchor each cluster on the axis. In this example, each cluster represents one step in the sales funnel for an online store.

##### Data Series: 📋 js-values

There are one `js-values` input containers. This container represents one data series (or data set) on the chart. In the example, the container represents the numerical Data that indicate the quantity of items at each stage.

##### Customization: 🖌️ Style Directives

 - The `js-value-bar-data-margin` sets a gap of `7px` between each bar on the chart.
 - The `js-value-bar-box-shadow` creates a shadow effect around each of the funnel bars on the chart.
 - The `js-legend-box-shadow` creates a shadow effect around the chart's legend that matches the shadow effect around the funnel's bars.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/funnel%20charts.md) repo for many detailed examples of how to use different types of **funnel charts**.