# 📉 Parallel Coordinates Charts

A **Parallel Coordinates chart** is a visualization technique used to explore and analyze high-dimensional data. It represents each variable as a vertical axis, with data points displayed as lines that connect values across these axes. This format makes it easy to identify patterns, correlations, and trends across multiple variables simultaneously. By adjusting axis scales, colors, and transparency, users can highlight relationships and clusters within complex datasets.

 - **Usage**: 🔍 Comparison 🧵 Pattern 🆚 Relationship

These charts are particularly useful in fields like finance, machine learning, and scientific research, where multidimensional data analysis is essential. Interactive features, such as filtering and highlighting, enhance usability by allowing users to focus on specific data points or relationships. However, in datasets with too many overlapping lines, careful design choices—such as opacity adjustments and categorical coloring—are needed to maintain readability.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/parallel%20coordinates%20charts.md) repo for many detailed examples of how to use and customize (style) different types of **parallel coordinates charts**.

## ⚙️ Chart Attributes

Parallel Coordinates charts accept the following chart attributes.

[🧱 class](../Chart%20Attributes.md#-class)
 | [🗂️ type](../Chart%20Attributes.md#-type)
 | [🕒 version](../Chart%20Attributes.md#-version)
 | [📋 template](../Chart%20Attributes.md#-template)
 | [↔️ width](../Chart%20Attributes.md#-width)
 | [↕️ height](../Chart%20Attributes.md#-height)
 | [📄 title](../Chart%20Attributes.md#-title)
 | [📄 ytitle](../Chart%20Attributes.md#-ytitle)
 | [📄 xtitle](../Chart%20Attributes.md#-xtitle)
 | [🍩 holetitle](../Chart%20Attributes.md#-holetitle)
 | [🔲 showborder](../Chart%20Attributes.md#-showborder)
 | [🏷️ showlabels](../Chart%20Attributes.md#-showlabels)
 | [📘 showlegend](../Chart%20Attributes.md#-showlegend)
 | [🎮 showcontrols](../Chart%20Attributes.md#-showcontrols)
 | [🗂️ showdatatable](../Chart%20Attributes.md#-showdatatable)
 | [#️⃣ showgridlines](../Chart%20Attributes.md#-showgridlines)
 | [📈 showlines](../Chart%20Attributes.md#-showlines)
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
<div class="js-labels">Cylinders, Displacement (cc), Power (hp), Weight (lb), Acceleration 0-60mph (s), Milage (mpg), Year</div>
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
<div class="js-values" title="Model 44">20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130</div>
<div class="js-values" title="Model 54">15, 25, 35, 45, 55, 65 75, 85, 95, 105, 115, 125</div>
<div class="js-values" title="Model 65">10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120</div>
```

### 🖌️ Style Directives

Every chart is customized (or styled) using one of the supported **style templates**.

**Style directives** are used to override the customization applied by the style template to each chart.

Parallel coordinates charts support the following style directives.

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
 | [📈 js-value-line-*](../directives/Style%20Directive%20Value%20Line.md)

> 💡 See the [👀 js-chart-examples](https://github.com/wrathtafarian/js-chart-examples) repo for many detailed examples of how to use the **style directives** to customize a chart.

## 👀 Examples

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/parallel%20coordinates%20charts.md) repo for many detailed examples of how to use different types of **parallel coordinates charts**.

### Example: Parallel Coordinates Chart: Model Specification Comparison

The example below renders a **parallel coordinates chart**, showing **Model Specification Comparison** of **20 motor car models**.

```
<div class="js-chart" type="parallel coordinates" template="default" title="Model specification comparison" ytitle="y-axis title" xtitle="x-axis title" showlegend="off">
    <div class="js-labels">Cylinders, Displacement (cc), Power (hp), Weight (lb), Acceleration 0-60mph (s), Milage (mpg), Year</div>

    <div class="js-values">0.976, 358.526, 186.554, 3818.616, 16.381, 27.919, 89.871</div>
    <div class="js-values">0.752, 357.54, 151.083, 3536.849, 15.63, 29.444, 87.541</div>
    <div class="js-values">0.503, 350.223, 155.07, 3862.217, 16.426, 29.021, 87.004</div>
    <div class="js-values">0.102, 350.089, 164.257, 3574.006, 16.686, 21.162, 89.348</div>
    <div class="js-values">1.098, 353.398, 158.056, 3873.633, 15.225, 22.97, 88.922</div>
    <div class="js-values">1.213, 355.136, 167.578, 3590.064, 16.816, 23.752, 87.118</div>
    <div class="js-values">1.897, 357.625, 179.834, 3632.711, 16.437, 20.248, 88.889</div>
    <div class="js-values">1.047, 357.122, 168.232, 3605.754, 17.108, 22.638, 89.187</div>
    <div class="js-values">1.343, 356.673, 166.414, 3563.59, 16.982, 24.646, 88.676</div>
    <div class="js-values">2.637, 368.594, 117.85, 3212.654, 11.665, 46.262, 88.316</div>
    <div class="js-values">2.97, 326.763, 124.279, 3249.133, 12.921, 43.715, 87.809</div>
    <div class="js-values">3.484, 331.754, 146.617, 3130.105, 14.356, 55.34, 89.49</div>
    <div class="js-values">3.652, 362.997, 131.843, 3263.171, 13.473, 54.559, 89.31</div>
    <div class="js-values">3.967, 383.803, 140.798, 3262.584, 14.863, 40.85, 88.533</div>
    <div class="js-values">4.665, 381.411, 148.069, 3284.942, 14.008, 44.247, 88.657</div>
    <div class="js-values">4.65, 331.501, 136.811, 3237.218, 13.994, 45.013, 87.152</div>
    <div class="js-values">4.31, 399.276, 145.652, 3201.854, 13.475, 41.937, 87.224</div>
    <div class="js-values">4.812, 394.168, 131.375, 3287.659, 13.99, 46.227, 89.82</div>
    <div class="js-values">4.048, 353.641, 148.595, 3227.631, 12.562, 43.185, 89.622</div>
    <div class="js-values">5.308, 382.738, 149.525, 3220.809, 14.38, 52.932, 87.807</div>

    <div class="js-value-line-thickness">2px</div>
    <div class="js-scale-border">0.5px solid #999999</div>

    <div class="js-color-palette">darkorange</div>
</div>
```

#### Explained

##### Category: 🏷️ js-labels

The `js-labels` input container sets the labels that anchor each cluster on the axis. In this example, each cluster represents one quarter in the year.

##### Data Series: 📋 js-values

There are three `js-values` input containers. Each container represents one data series (or data set) on the chart. In the example, each container represents one product line.

##### Customization: 🖌️ Style Directives

 - The `js-value-line-thickness` sets a line thickness of **2px**.
 - The `js-scale-border` renders a solid bordr that is **0.5px** and the color `#999999`.
 - The `js-color-palette` makes one color for use to the chart: `DarkOrange`.