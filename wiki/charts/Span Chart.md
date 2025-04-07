# 📏 Span Charts

A **span chart** is a type of visualization used to display the duration or range of events over time. It typically consists of horizontal bars that represent the start and end points of different activities, making it useful for tracking schedules, comparisons, and overlapping time intervals. Span charts are often used in project management (e.g., Gantt charts), product life cycles, and financial analysis to illustrate changes over a period.

 - **Usage**: 🔍 Comparison 🌡️ Range
 - **Types**:
   - **Span Bar Chart** renders a span chart with horizontal bars.
   - **Span Column Chart** renders a span chart with vertical columns.

Unlike traditional bar charts, span charts emphasize ranges rather than individual values, helping to identify patterns such as overlaps, gaps, or trends in event durations. They are particularly useful when comparing multiple entities or categories over time, such as tracking employee shifts, equipment usage, or historical events.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/span%20charts.md) repo for many detailed examples of how to use and customize (style) different types of **span charts**.

## ⚙️ Chart Attributes

Span charts accept the following chart attributes.

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
 | [🔽 sortdata](../Chart%20Attributes.md#-sortdata)
 | [ 🚫 limitdata](../Chart%20Attributes.md#-limitdata)
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

Span charts support the following style directives.

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

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/span%20charts.md) repo for many detailed examples of how to use different types of **span charts**.

### Example: Span Bar Chart: Daily price movement

The example below renders a **span bar chart**, showing **Daily price movement** of a fictional asset on the stock market.

```
<div class="js-chart" type="span bar" title="Daily price movement" ytitle="Day" xtitle="Value ($)" scalemin="230" scalemax="432">
    <div class="js-labels">Day 01,Day 02,Day 03,Day 04,Day 05,Day 06,Day 07</div>
    <div class="js-low-values" title="Prod #445">254,285,263,258,263,247,230</div>
    <div class="js-high-values">381,401,421,432,379,395,405</div>
</div>

```
