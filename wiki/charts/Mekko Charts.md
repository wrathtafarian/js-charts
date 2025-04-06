# 📊 Marimekko (Mekko) Charts

A **Marimekko chart**, (or **Mekko chart**), is a type of data visualization that displays categorical data along two dimensions. It combines elements of both a bar chart and a stacked bar chart, where the width of each column represents the relative proportion of a category within the data set, and the height of each section within the column represents a subcategory’s contribution. This creates a "mosaic" of blocks, making it easier to compare both the total size of categories and the distribution of subcategories within them.

 - **Usage**: 🔍 Comparison 🥧 Part-To-A-Whole ⚖️ Proportions 🆚 Relationship
 - **Types**:
   - **Marimekko Chart** (or **Mekko Chart**) - A Marimekko chart is a combination of a 100% stacked bar chart and a variable-width column chart.
     - It is used to visualize both **relative proportions** and **absolute values across categories**.
     - The **height** of each segment represents a **percentage within a category** (similar to a 100% stacked bar chart).
     - The **width** of each column represents the **size (weight) of that category** in the dataset.
     - The **total width** of all columns represents the **total dataset**.
   - **100% Stacked Marimekko Chart** (or **100% Stacked Mekko Chart**) - This is a variation on the normal Mekko chart.
     - A 100% stacked Mekko chart is similar to a Mekko chart, but the **bars** and **columns** are **both normalized to a total of 100%**.
     - This charts makes it easier to **compare proportions across categories** but removes the representation of total category size.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/mekko%20charts.md) repo for many detailed examples of how to use and customize (style) different types of **mekko charts**.

## ⚙️ Chart Attributes

Mekko charts accept the following chart attributes.

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

Mekko charts support the following style directives.

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

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/mekko%20charts.md) repo for many detailed examples of how to use different types of **mekko charts**.

### Example: Mekko Chart: Export Volume for Country

The example below renders a **marimekko chart**, showing **Export Volume per Country** for a fuctional imports/export company.

```
<div class="js-chart" type="marimekko" title="Export volume per country" ytitle="Volume in Million Litres" xtitle="Country name" showcontrols="off">
    <div class="js-labels">Australia, India, Germany, South Africa</div>

    <div class="js-values" title="Group 1">170, 280, 220, 95</div>
    <div class="js-values" title="Group 2">85, 95, 102, 50</div>
    <div class="js-values" title="Group 3">80, 20, 30, 280</div>

    <div class="js-value-bar-data-margin">2px</div>
</div>
```

#### Explained

##### Category: 🏷️ js-labels

The `js-labels` input container sets the labels that anchor each cluster on the axis. In this example, each cluster represents one quarter in the year.

##### Data Series: 📋 js-values

There are three `js-values` input containers. Each container represents one data series (or data set) on the chart. In the example, each container represents one product line.

##### Customization: 🖌️ Style Directives

 - The `js-value-bar-data-margin` sets a gap of `2px` between each bar on the chart.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/mekko%20charts.md) repo for many detailed examples of how to use different types of **mekko charts**.