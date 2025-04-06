# 🖌️ Style Directives

Style directives are instructions that overide the customization applied to elements on a chart.

Style directives are applied to the chart last, and thus override the customization applied by the style template.

A chart is constructed in the following order:

 1. Create the chart.
 2. Style the chart using a [[Style Templates|style template]].
 3. Customize the look of the chart further using **style directives**.

## Table of Contents
 - [🗑️ js-bin-*](#️-js-bin-)
 - [🖼️ js-canvas-*](#️-js-canvas-)
 - [📊 js-chart-*](#-js-chart-)
 - [🎨 js-color-*](#-js-color-)
 - [🖱️ js-control-button-*](#️-js-control-button-)
 - [🏷️ js-datalabel-*](#️-js-datalabel-)
 - [🗂️ js-datatable-*](#️-js-datatable-)
 - [🦶 js-footer-*](#-js-footer-)
 - #[️⃣ js-grid-line-*](#️⃣-js-grid-line-)
 - [📘 js-legend-*](#-js-legend-)
 - [📍 js-marker-*](#-js-marker-)
 - [❓ js-not-defined-*](#-js-not-defined-)
 - [🎮 js-options-menu-*](#-js-options-menu-)
 - [📏 js-scale-*](#-js-scale-)
 - [📄 js-title-*](#-js-title-)
 - [🧱 js-value-bar-*](#-js-value-bar-)
 - [📈 js-value-line-*](#-js-value-line-)
 - [➖ js-zero-line-*](#-js-zero-line-)

## 🗑️ js-bin-*

The `js-bin-*` style directives are used to customize the bins on a ***histogram***.

💡 Refer to the [🗑️ js-bin-* Style Directives](../wiki/directives/Style%20Directive%20Bin.md) page for detailed information about the `js-bin-*` style directives.

## 🖼️ js-canvas-*

The `js-canvas-*` style directives are used to style the chart canvas. The canvas encompasses the chart container, excluding the following elements.

 - Chart title container
 - Control buttons container
 - Legend container
 - Chart footer container

💡 Refer to the [🖼️ js-canvas-* Style Directives](../wiki/directives/Style%20Directive%20Canvas.md) page for detailed information about the `js-canvas-*` style directives.

## 📊 js-chart-*

The `js-chart-*` style directives are used to apply the default style elements across the chart. Default style directives can be set for the following elements.

 - Font family
 - Font size
 - Font weight
 - Background color
 - Foreground color (font color)
 - Border
 - Border radius
 - Box shadow

💡 Refer to the [📊 js-chart-* Style Directives](../wiki/directives/Style%20Directive%20Chart.md) page for detailed information about the `js-chart-*` style directives.

## 🎨 js-color-*

The `js-color-*` style directives are used to set the colors that are available to use on a chart.

The `js-color-*` style directives also controls the **color positions** required for the following color palette types.

 - Discrete sequential
 - Discrete continuous
 - Diverging sequential
 - Diverging continuous

💡 Refer to the [🎨 js-color-* Style Directives](../wiki/directives/Style%20Directive%20Color.md) page for detailed information about the `js-color-*` style directives.

## 🖱️ js-control-button-*

The `js-control-button-*` style directives are used to customize the control buttons on a chart.

The control buttons allows the end-user to:

 - 🖨️ Send the chart to the printer.
 - 🎮 Open the options menu.

💡 Refer to the [🖱️ js-control-button-* Style Directives](../wiki/directives/Style%20Directive%20Control%20Button.md) page for detailed information about the `js-control-button-*` style directives.

## 🏷️ js-datalabel-*

The `js-datalabel-*` style directives are used to customize the look of data labels on a chart.

When enabled, data labels are rendered in close proximity to the corresponding data point on a chart.

💡 Refer to the [🏷️ js-datalabel-* Style Directives](../wiki/directives/Style%20Directive%20Data%20Label.md) page for detailed information about the `js-datalabel-*` style directives.

## 🗂️ js-datatable-*

The `js-datatable-*` style directives are used to customize the look of a chart's data table (if visible).

The data table on a chart contains the raw data that is visualised in the chart.

💡 Refer to the [🗂️ js-datatable-* Style Directives](../wiki/directives/Style%20Directive%20Data%20Table.md) page for detailed information about the `js-datatable-*` style directives.

## 🦶 js-footer-*

The `js-footer-*` style template directives are used to customize a chart's footer area.

The footer can be used to display any static text to the end user. This is useful if you want to include a copyright notice, or if you want to include instructions or special notes to the end user regarding the chart.

The chart footer is rendered on the very bottom of the chart container.

By default, a chart's footer area is rendered **15px** tall. To change this, edit the `--js-chart-common-base-footer-height` CSS variable defined in the `:root` section of `css/js-chart-common.css` file.

The footer text will be truncated if the text cannot fit into the available space. If the footer text is truncated, an ellipsis (…) will be added to the end of the truncated footer text.

💡 Refer to the [🦶 js-footer-* Style Directives](../wiki/directives/Style%20Directive%20Footer.md) page for detailed information about the `js-footer-*` style directives.

## #️⃣ js-grid-line-*

The `js-grid-line-*` style directives are used to customize the look of the grid lines on a chart.

> ⚠️ Warning: Depending on the **available space** and the **proximity** of the different gridlines on the chart, the browser may not render all gridlines. There is currently an open ticket to resolve this issue.

Gridlines are included in certain charts to make it easier for viewers to interpret the data accurately. Grid lines are useful for the following reasons.

 - **Reference Points** – Gridlines help users align data points with the axes, making it easier to estimate values.
 - **Improved Readability** – They provide a structured background that prevents data points from floating in empty space, making patterns and trends clearer.
 - **Comparability** – When comparing multiple points, gridlines make it easier to gauge relative differences between them.
 - **Scale Awareness** – They reinforce the scale of the chart, helping viewers understand the increments and proportions being represented.

**Lighter gridlines** are often preferred to avoid overwhelming the visualization.

💡 Refer to the [#️⃣ js-grid-line-* Style Directives](../wiki/directives/Style%20Directive%20Grid%20Line.md) page for detailed information about the `js-grid-line-*` style directives.

## 📘 js-legend-*

The `js-legend-*` style directives are used to customize the look of a chart's legend.

You can control the **visibility** and **position** of a chart's legend using the `showlegend` chart attribute.

Refer to the [[Chart Attributes]] page for detailed information about the `showlegend` chart attribute.

The legend on a chart serves as a key that helps users interpret the data by explaining what different colors, patterns, or symbols represent. It is essential in multi-series charts or any visualization that uses multiple categories. A legend on a chart is important because:

 - **Clarifies Data Representation** – It ensures that viewers understand what each color, shape, or line style corresponds to in the dataset.
 - **Enhances Readability** – Without a legend, users might struggle to differentiate between multiple data series or categories.
 - **Saves Space** – Instead of labeling every data point, a legend allows for a cleaner chart by consolidating explanations in one place.
 - **Improves Comparisons** – A well-placed legend makes it easier to compare different data sets within the same visualization.

You should consider including a legend on a chart when the chart includes multiple categories, series, or data groups, or when colors, patterns, or markers are not self-explanatory. Legends can also help clarify the chart when direct labelling on the chart would clutter the visualization.

💡 Refer to the [📘 js-legend-* Style Directives](../wiki/directives/Style%20Directive%20Legend.md) page for detailed information about the `js-legend-*` style directives.

## 📍 js-marker-*

> 💡 Markers are only supported by **line charts**, **scatter plots**, and **bubble charts**.

The `js-marker-*` style directives are used to customize the look of markers on a chart.

Markers are visual symbols (like dots, squares, or triangles) placed on a chart to represent individual data points. Markers are used to:

 - **Highlight specific data points** – each marker on a chart shows the exact value at that position.
 - **Improve readability** – they make it easier to follow trends or patterns.
 - **Allow comparison** – especially when multiple series are shown together.

Scatter charts can use different ***emojis*** as markers to visualize data points on a chart.

💡 Refer to the [📍 js-marker-* Style Directives](../wiki/directives/Style%20Directive%20Marker.md) page for detailed information about the `js-marker-*` style directives.

## ❓ js-not-defined-*

The `js-not-defined-*` style directives allow you to control how values are visualized that are *not defined* or *missing* from a chart's data set.

> 💡 The `js-not-defined-*` style directives only change the block or cell background color and foreground color. Any labels that are applied to the cell are still styled using the `js-datalabel-*` style directives.

💡 Refer to the [❓ js-not-defined-* Style Directives](../wiki/directives/Style%20Directive%20Not%20Defined.md) page for detailed information about the `js-not-defined-*` style directives.

## 🎮 js-options-menu-*

The `js-options-menu-*` style directives let you customize the look of a chart's options menu.

The chart options menu lets the end user make adjustments to the chart to **improve readability**, or **help with pattern recognition**.

The options menu is divided into the following area:
 - Options menu title area
 - Options menu general area

💡 Refer to the [🎮 js-options-menu-* Style Directives](../wiki/directives/Style%20Directive%20Options%20Menu.md) page for detailed information about the `js-options-menu-*` style directives.

## 📏 js-scale-*

The `js-scale-*` style directives are used to customize a chart's scale and scale labels.

💡 Refer to the [📏 js-scale-* Style Directives](../wiki/directives/Style%20Directive%20Scale.md) page for detailed information about the `js-scale-*` style directives.

## 📄 js-title-*

The `js-title-*` style directives let you customize the look of a chart's title area.

💡 Refer to the [📄 js-title-* Style Directives](../wiki/directives/Style%20Directive%20Title.md) page for detailed information about the `js-title-*` style directives.

## 🧱 js-value-bar-*

The `js-value-bar-*` style directives let you customize the look of a chart's value bars.

Value bar elements refer to block-shaped elements that represent data or data points on a chart.

💡 Refer to the [🧱 js-value-bar-* Style Directives](../wiki/directives/Style%20Directive%20Value%20Bar.md) page for detailed information about the `js-value-bar-*` style directives.

## 📈 js-value-line-*

The `js-value-line-*` style directives let you customize the look of a chart's value lines.

Value line elements usually refer to line-shaped elements that represent data or data points on a chart.

💡 Refer to the [📈 js-value-line-* Style Directives](../wiki/directives/Style%20Directive%20Value%20Line.md) page for detailed information about the `js-value-line-*` style directives.

## ➖ js-zero-line-*

The `js-zero-line-*` style directives let you customize the look of a chart's zero axis lines.

💡 Refer to the [➖ js-zero-line-* Style Directives](../wiki/directives/Style%20Directive%20Zero%20Line.md) page for detailed information about the `js-zero-line-*` style directives.