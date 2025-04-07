# 🧑‍🤝‍🧑 Population Pyramids

A **population pyramid** is a specialized bar chart that visually represents the age and gender distribution of a population. It consists of two back-to-back horizontal bars, with one side displaying the male population and the other the female population. The y-axis represents age groups (usually in five-year intervals), while the x-axis shows population counts or percentages. The shape of the pyramid reveals key demographic trends, such as birth rates, life expectancy, and population aging.

 - **Usage**: 🔍 Comparison ↔️ Distribution 🧵 Pattern

Population pyramids are useful for understanding population structure and predicting future demographic shifts. A triangular shape suggests a young population with high birth rates, common in developing countries. A rectangular shape indicates a stable or aging population with low birth and death rates, typical of developed nations. These charts help policymakers plan for education, healthcare, and workforce needs based on demographic trends.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/population%20pyramids.md) repo for many detailed examples of how to use and customize (style) different types of **population pyramids**.

## ⚙️ Chart Attributes

Population pyramids accept the following chart attributes.

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
 | [🚫 limitdata](../Chart%20Attributes.md#-limitdata)
 | [🔲 showborder](../Chart%20Attributes.md#-showborder)
 | [🏷️ showlabels](../Chart%20Attributes.md#-showlabels)
 | [📘 showlegend](../Chart%20Attributes.md#-showlegend)
 | [🎮 showcontrols](../Chart%20Attributes.md#-showcontrols)
 | [🗂️ showdatatable](../Chart%20Attributes.md#-showdatatable)
 | [#️⃣ showgridlines](../Chart%20Attributes.md#-showgridlines)
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
<div class="js-labels">Make Students, Female Students</div>
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

Population pyramids support the following style directives.

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

> 💡 See the [👀 js-chart-examples](https://github.com/wrathtafarian/js-chart-examples) repo for many detailed examples of how to use the **style directives** to customize a chart.

## 👀 Examples

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/population%20pyramid.md) repo for many detailed examples of how to use different types of **population pyramid**.

### Example: Population Pyramid: June 2023 Grass Campus Student Population

The example below renders a **population pyramid**, showing **Grass campus - Student population: June 2023** of a fictional student campus.

```
<div class="js-chart" type="population pyramid" template="darkweb" title="Grass campus - Student population: June 2023" ytitle="y-axis title" xtitle="Students on campus (per Million)" width="auto" height="600px" scalemin="0" scalemax="3">
    <div class="js-labels">Male students, Female students</div>

    <div class="js-values" title="Under 5">0.2, 0.1</div>
    <div class="js-values" title="5 to 9">1.9, 1.8</div>
    <div class="js-values" title="10 to 14">2.2, 2.0</div>
    <div class="js-values" title="15 to 19">2.25, 1.8</div>
    <div class="js-values" title="20 to 24">2.24, 1.9</div>
    <div class="js-values" title="25 to 29">2.26, 2.2</div>
    <div class="js-values" title="30 to 34">2.27, 2.18</div>
    <div class="js-values" title="40 to 44">2.25, 2.19</div>
    <div class="js-values" title="45 to 49">2.3, 2.4</div>
    <div class="js-values" title="50 to 54">2.38, 2.6</div>
    <div class="js-values" title="55 to 59">2.47, 2.7</div>
    <div class="js-values" title="60 to 64">2.2, 2.2</div>
    <div class="js-values" title="65 to 69">2.18, 2.16</div>
    <div class="js-values" title="70 to 74">2.1, 2.14</div>
    <div class="js-values" title="75 to 79">1.2, 1.14</div>
    <div class="js-values" title="80 to 84">1.15, 1.05</div>
    <div class="js-values" title="85 to 89">1, 0.8</div>
    <div class="js-values" title="90 to 94">0.8, 0.5</div>
    <div class="js-values" title="95 to 99">0.7, 0.4</div>
    <div class="js-values" title="Over 100">0.2, 0.1</div>

    <div class="js-datalabel-append">M</div>
    <div class="js-datalabel-width">50px</div>
    <div class="js-datalabel-text-color">yellow</div>

    <div class="js-value-bar-data-margin">10px</div>
    <div class="js-value-bar-min-width">3px</div>
    <div class="js-value-bar-box-shadow">3px 3px 3px #666666</div>
    <div class="js-value-bar-border">0.5px solid #333333</div>
    <div class="js-value-bar-border-radius">3px</div>

    <div class="js-chart-text-color">lime</div>
    <div class="js-title-text-color">lime</div>
    <div class="js-legend-text-color">lime</div>
    <div class="js-legend-border">0.5px solid lime</div>
    <div class="js-footer-text-color">lime</div>
    <div class="js-control-button-text-color">lime</div>

    <div class="js-color-palette">SteelBlue; Orange</div>
</div>
```