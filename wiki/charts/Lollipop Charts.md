# 🍭 Lollipop Charts

A **lollipop chart** is a variation of a bar chart that uses a thin line with a circular marker at the end to represent data points. It is particularly useful for comparing discrete categories while maintaining a clean and visually appealing design. Lollipop charts work well when you want to emphasize the actual values while reducing visual clutter, making them a good alternative to traditional bar charts when space or aesthetics are a concern.

 - **Usage**: 🧵 Patterns 🔍 Comparison
 - **Types**:
   - **Clustered Lollipop Bar Chart** compares individual values across categories (horizontal lollipops).
   - **Stacked Lollipop Bar Chart** compares both the total value and the breakdown of categories (horizontal lollipops).
   - **100% Stacked Lollipop Bar Chart** focuses on the percentage contribution of each sub-category, normalizing each bar to 100% (horizontal lollipops).
   - **Clustered Lollipop Column Chart** compares individual values across categories (vertical lollipops).
   - **Stacked Lollipop Column Chart** compares both the total value and the breakdown of categories (vertical lollipops).
   - **100% Stacked Lollipop Column Chart** focuses on the percentage contribution of each sub-category, normalizing each bar to 100% (vertical lollipops).

These charts are best used for ranking or highlighting differences between values, especially when dealing with moderate-sized datasets. They are most effective when paired with sorted data, as the clear separation between markers helps viewers quickly interpret patterns and trends. However, for very large datasets, a bar chart might be preferable due to better readability.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/lollipop%20charts.md) repo for many detailed examples of how to use and customize (style) different types of **lollipop charts**.

## ⚙️ Chart Attributes

Lollipop charts accept the following chart attributes.

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

Lollipop charts support the following style directives.

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
[📈 js-value-line-*](../directives/Style%20Directive%20Value%20Line.md)
[➖ js-zero-line-*](../directives/Style%20Directive%20Zero%20Line.md)

> 💡 See the [👀 js-chart-examples](https://github.com/wrathtafarian/js-chart-examples) repo for many detailed examples of how to use the **style directives** to customize a chart.

## 👀 Examples

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/lollipop%20charts.md) repo for many detailed examples of how to use different types of **lollipop charts**.

### Example: Lollipop Column Chart: Monthly Revenue Comparison

The example below renders a **clustered bar chart**, showing **Player Hit Points** for a fictional player tournament.

```
<div class="js-chart" type="stacked lollipop bar" title="Player Hit points" ytitle="y-axis title" xtitle="x-axis title">
    <div class="js-labels">Player 1, Player 2, Player 4, Player 9, Player 14, Player 18, Player 21, Player 22, Player 24, Player 26</div>
    <div class="js-values" title="1P">7, 4, 7, 12, 4, 16, 20, 19, 3, 12</div>
    <div class="js-values" title="2P">24, 19, 10, 2, 4, 0, 18, 5, 17, 1</div>
    <div class="js-values" title="3P">0, 3, 8, 1, 13, 0, 3, 9, 4, 12</div>
    <div class="js-values" title="4P">8, 1, 4, 11, 21, 7, 2, 18, 10, 21</div>
    <div class="js-values" title="5P">10, 13, 4, 15, 18, 14, 18, 0, 1, 21</div>
    <div class="js-values" title="6P">19, 5, 12, 8, 10, 14, 2, 3, 1, 24</div>
    <div class="js-values" title="7P">0, 21, 15, 22, 16, 7, 0, 3, 4, 3</div>

    <div class="js-datalabel-width">25px</div>
    <div class="js-datalabel-font-size">9px</div>
</div>
```

#### Explained

##### Category: 🏷️ js-labels

The `js-labels` input container sets the labels that anchor each cluster on the axis. In this example, each cluster represents one quarter in the year.

##### Data Series: 📋 js-values

There are three `js-values` input containers. Each container represents one data series (or data set) on the chart. In the example, each container represents one product line.

##### Customization: 🖌️ Style Directives

 - The `js-datalabel-width` style directive sets the width of data labels on the chart. Each label will be rendered **25px** wide.
 - The `js-datalabel-font-size` sets a font-size of `9px` for all data labels on the chart.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/lollipop%20charts.md) repo for many detailed examples of how to use different types of **lollipop charts**.