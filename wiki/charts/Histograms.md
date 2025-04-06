# ⏳ Histograms

A **histogram** is a type of bar chart that displays the distribution of a continuous numerical variable by dividing the data into intervals, called bins. Each bin represents a range of values, and the height of the corresponding bar indicates how many data points fall within that range. Histograms are useful for showing the frequency distribution of data, allowing for an understanding of the spread, central tendency, and skewness of the dataset. They are commonly used in statistics to analyze the shape of a dataset, detect outliers, and assess the distribution type (e.g., normal, skewed, bimodal).

 - **Usage**: ↔️ Distribution 🧵 Pattern

Histograms are particularly effective for visualizing large datasets, as they provide a clear picture of data patterns and variability without losing granularity. The choice of bin size can significantly impact the chart's interpretation: too few bins may oversimplify the data, while too many bins can create noise and obscure meaningful patterns. By adjusting bin widths, histograms allow analysts to focus on different aspects of the data, making them an essential tool for exploratory data analysis.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/histograms.md) repo for many detailed examples of how to use and customize (style) different types of **histograms**.

## ⚙️ Chart Attributes

Histograms accept the following chart attributes.

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
[📲 showwidget](../Chart%20Attributes.md#-showwidget)

## 🧱 Input Data

Data for [⏳ Histograms](charts/Histograms.md) can be set in 4 different ways.

💡 The end-user will be able to adjust the **interval** (or **bin size**) on the chart no matter the input method chosen.

#### auto

Data points can be provided as a **comma-separated list** of **raw values**.
 - The chart engine will attempt to determine the best way to visualize the data by automatically calculating the best **interval** (or **bin size**) to use for the histogram.
 - An example of this method is demonstrated below.

```
<div class="js-values" title="Consumption data for 03/04/24">12.596, 38.22, 43.244, ..., 47.92</div>
```

#### boundary

The **interval** (or **bin size**) can be provided to the chart together with the interval (or bin) **boundaries**. The raw data points are provided as a **comma-separated list of numeric values**.
 - Using this method, a chart is supplied with the following input containers.
   - `js-bin-first-edge` sets the lower boundary of a chart's data intervals (or bins).
   - `js-bin-last-edge` sets the higher boundary of a chart's data intervals (or bins).
   - `js-bin-size` sets the size of the data intervals (or bins).
   - `js-values` sets a **comma-separated list of numeric values** representing the individual data points in the data series (or data set).

```
<div class="js-bin-first-edge">0</div>
<div class="js-bin-last-edge">60</div>
<div class="js-bin-size">1.5</div>
<div class="js-values" title="Consumption data for 03/04/24">12.596, 38.22, 43.244, ..., 47.92</div>
```

#### summary

A summarized version of the data can be defined by setting the **first** and **last** intervals (or bins) together with a list of interval (or bin size) **frequencies**.
 - Using this method, a chart is supplied with the following input containers.
   - `js-bin-first-edge` sets the lower boundary of a chart's data intervals (or bins).
   - `js-bin-last-edge` sets the higher boundary of a chart's data intervals (or bins).
   - `js-bin-frequencies` sets the summarized list of data frequencies provided as a **comma-separated list of numeric values**.

```
<div class="js-bin-first-edge">0</div>
<div class="js-bin-last-edge">24</div>
<div class="js-bin-frequencies">8, 12, 24, ..., 24</div>
```
#### category

The data for a  chart can be set as already "binned" data, each defined as category **label** and the interval (or bin) **count**.
 - Using this method, a chart is supplied with the following input containers.
   - `js-bin-labels` set a **comma-separated list of text values** that define the category names (or labels) for each bin.
    - `js-values` sets a **comma-separated list of numeric values** that are already **binned** (or divided into **intervals**).

```
<div class="js-bin-labels">Category A, Category B, Category A, ..., Category F</div>
<div class="js-values">1.281, 9.137, 2.412, ..., 4.664</div>
```

💡 The end-user will be able to adjust the **interval** (or **bin size**) on the chart no matter the input method chosen.

### 🖌️ Style Directives

Every chart is customized (or styled) using one of the supported **style templates**.

**Style directives** are used to override the customization applied by the style template to each chart.

Histograms support the following style directives.

[🗑️ js-bin-*](../directives/Style%20Directive%20Bin.md)
[🖼️ js-canvas-*](../directives/Style%20Directive%20Canvas.md)
[📊 js-chart-*](../directives/Style%20Directive%20Chart.md)
[🎨 js-color-*](../directives/Style%20Directive%20Color.md)
[🖱️ js-control-button-*](../directives/Style%20Directive%20Control%20Buttons.md)
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

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/histograms.md) repo for many detailed examples of how to use different types of **histograms**.

### Example: Histogram: Operational Response Times

The example below renders a **histogram**, showing **Operational Response Times** for a fictional company.

```
<div class="js-chart" type="histogram" title="Operations" xtitle="Response Time (hours)" ytitle="Number of tickets" width="700px">
    <div class="js-values">0.429, 11.081, 6.426, 13.947, 7.239, 6.544, 1.032, 5.639, 2.255, 11.415, 1.366, 13.65, 1.275, 8.748, 0.301, 14.918, 16.287, 8.762, 16.992, 15.423, 3.77, 4.201, 18.846, 17.368, 19.514, 17.19, 17.51, 10.535, 6.805, 7.517, 4.522, 13.46, 19.559, 9.78, 10.882, 19.924, 16.681, 7.477, 16.977, 11.078, 8.927, 13.186, 3.549, 15.446, 14.191, 18.179, 6.335, 7.836, 12.529, 13.586, 7.414, 3.756, 0.361, 10.825, 3.051, 10.799, 11.756, 11.606, 15.223, 5.863, 17.645, 11.151, 15.725, 13.358, 18.915, 2.914, 14.261, 9.793, 16.131, 15.625, 7.787, 1.018, 16.555, 1.035, 3.13, 8.693, 4.871, 15.562, 17.169, 3.616, 2.437, 19.429, 4.461, 9.914, 3.7, 10.722, 9.045, 14.58, 16.419, 18.385, 19.525, 5.353, 9.242, 0.513, 9.792, 1.767, 14.719, 4.142, 7.055, 13.222</div>
</div>
```