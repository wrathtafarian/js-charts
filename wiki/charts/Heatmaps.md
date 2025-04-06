# 🌡️ Heatmaps

A **heatmap** is a data visualization that represents values using a color-coded grid, making it easy to identify patterns, trends, and variations within a dataset. Each cell in the grid corresponds to a category or data point, with its color intensity reflecting the magnitude of the associated value. Darker or more intense colors typically indicate higher values, while lighter or cooler colors represent lower values. Heatmaps are commonly used in fields like finance, marketing, and scientific research to display correlations, densities, or performance metrics.

 - **Usage**: 🔍 Comparison ⏱️ Date-Over-Time 🧵 Pattern 🆚 Relationship

Heatmaps are particularly useful for spotting outliers, trends, and clusters in large datasets. For example, in website analytics, a heatmap can show where users click most frequently, highlighting areas of high engagement. In correlation matrices, they help visualize relationships between variables. However, careful color selection is essential to ensure accurate interpretation, as poor contrast or misleading scales can distort the insights drawn from the data.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/heatmaps.md) repo for many detailed examples of how to use and customize (style) different types of **heatmaps**.

## ⚙️ Chart Attributes

Heatmaps accept the following chart attributes.

[🧱 class](../Chart%20Attributes.md#-class)
[🗂️ type](../Chart%20Attributes.md#-type)
[🕒 version](../Chart%20Attributes.md#-version)
[📋 template](../Chart%20Attributes.md#-template)
[🧾 jsondata](../Chart%20Attributes.md#-jsondata)
[↔️ width](../Chart%20Attributes.md#-width)
[↕️ height](../Chart%20Attributes.md#-height)
[📄 title](../Chart%20Attributes.md#-title)
[🔄 swapaxis](../Chart%20Attributes.md#-swapaxis)
[🔽 sortdata](../Chart%20Attributes.md#-sortdata)
[🚫 limitdata](../Chart%20Attributes.md#-limitdata)
[🔲 showborder](../Chart%20Attributes.md#-showborder)
[🏷️ showlabels](../Chart%20Attributes.md#-showlabels)
[📘 showlegend](../Chart%20Attributes.md#-showlegend)
[🎮 showcontrols](../Chart%20Attributes.md#-showcontrols)
[🗂️ showdatatable](../Chart%20Attributes.md#-showdatatable)
[🧩 showalg](../Chart%20Attributes.md#-showalg)
[📲 showwidget](../Chart%20Attributes.md#-showwidget)

## 🧱 Input Data

A heatmap is typically used with numerical data, but categorical heatmaps are also possible. Data on a heatmap can be represented in a matrix or grid format, where each value is mapped to a specific position based on its relationship with other values. The type of data suitable for heatmaps generally includes:

 - **Categorical Data** – Heatmaps can represent the relationship between two or more categorical variables, such as in a correlation matrix where the rows and columns represent categories (e.g., variables or time periods), and the color intensity shows the strength of the relationship between them.
 - **Time Series Data** – In some cases, heatmaps can be used to visualize time series data across multiple periods. For example, a heatmap might show website traffic across different hours of the day and days of the week, where colors represent the level of traffic at each time.
 - **Geographical Data** – Heatmaps are often used in geographical contexts to display the density or intensity of occurrences in different regions, such as population density, customer activity, or heat spots of interest on a map.
 - **Frequency Data** – Heatmaps can show how often certain values occur across a grid. For example, in customer behavior analysis, a heatmap might represent how frequently customers visit certain pages or sections of a website, with darker colors indicating more frequent visits.
 - **Performance Metrics** – Heatmaps are useful for visualizing performance data, like sales figures, customer satisfaction scores, or revenue, across different time periods or departments. The color gradient reflects how well each segment is performing, helping identify strong and weak areas.
 - **Correlation** or **Similarity Data** – Heatmaps are often used to represent correlation coefficients between variables or the similarity between different entities (e.g., genes in bioinformatics, products in a recommendation system). Higher values are often shown in more intense colors, helping identify relationships and clusters.

### Grid Labels: 🏷️ js-labels

The `js-labels` input container sets the labels that anchors each cluster on the axis.

The container accepts a **comma-separated list of text values**.

```
<div class="js-labels">label-0, label-1, label-2, ..., label-n</div>
```

The example below sets the category labels on a chart to the months of the year.

```
<div class="js-labels">Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec</div>
```

### Grid Values: 📋 js-values

The `js-values` input container sets the individual data series (or data sets) on a chart.

The container accept a **comma-separated list of numeric values**.

```
<div class="js-values">10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120</div>
```

The `js-values` input container accepts a `title` attribute that is used to set a name or short description for the data series (or data set).

```
<div class="js-values" title="Region A23">10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120</div>
```

> ℹ️ A **title** will automatically be assigned to each data series (or data set) if no `title` attribute is assigned to the `js-values` container.

**Multiple data series** can be set by specifying multiple `js-values` input containers. Each container represents a single data series (or data set).

```
<div class="js-values" title="Region A23">20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130</div>
<div class="js-values" title="Region B01">15, 25, 35, 45, 55, 65 75, 85, 95, 105, 115, 125</div>
<div class="js-values" title="Region B11">10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120</div>
```

### 🖌️ Style Directives

Every chart is customized (or styled) using one of the supported **style templates**.

**Style directives** are used to override the customization applied by the style template to each chart.

Heatmaps support the following style directives.

[🖼️ js-canvas-*](../directives/Style%20Directive%20Canvas.md)
[📊 js-chart-*](../directives/Style%20Directive%20Chart.md)
[🎨 js-color-*](../directives/Style%20Directive%20Color.md)
[🖱️ js-control-button-*](../directives/Style%20Directive%20Control%20Buttons.md)
[🏷️ js-datalabel-*](../directives/Style%20Directive%20Data%20Label.md)
[🗂️ js-datatable-*](../directives/Style%20Directive%20Data%20Table.md)
[🦶 js-footer-*](../directives/Style%20Directive%20Footer.md)
[📘 js-legend-*](../directives/Style%20Directive%20Legend.md)
[❓ js-not-defined-*](../directives/Style%20Directive%20Not%20Defined.md)
[🎮 js-options-menu-*](../directives/Style%20Directive%20Options%20Menu.md)
[📏 js-scale-*](../directives/Style%20Directive%20Scale.md)
[📄 js-title-*](../directives/Style%20Directive%20Title.md)
[🧱 js-value-bar-*](../directives/Style%20Directive%20Value%20Bar.md)

