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

---

## 🗑️ js-bin-*

The `js-bin-*` style directives are used to customize the bins on a **histogram**.

Refer to the [[Style Directive Bin]] page for detailed information about the `js-bin-*` style directives.

## 🖼️ js-canvas-*

The `js-canvas-*` style directives are used to style the chart canvas. The canvas encompasses the chart container, excluding the following elements.

 - Chart title container
 - Control buttons container
 - Legend container
 - Chart footer container

Refer to the [[Style Directive Canvas]] page for detailed information about the `js-chart-*` style directives.

## 📊 js-chart-*

The `js-chart-*` style directives are used to apply the default style elements across the chart. Default style directives can be set for the following elements.

 - Font family
 - Font size
 - Font weight
 - Background color
 - Foreground color (font color)
 - Border & border radius
 - Box shadow

Refer to the [[Style Directive Chart]] page for detailed information about the `js-chart-*` style directives.

## 🎨 js-color-*

The `js-color-*` style directives are used to control the colors that are available to the chart. The `js-color-*` style directives also controls the **color positions** required for the following color palette types.

 - Discrete sequential
 - Discrete continuous
 - Diverging sequential
 - Diverging continuous

## 🖱️ js-control-button-*

The `js-control-button-*` style directives are used to customize the control buttons on a chart. The control buttons are used to execute the functions below.

 - Send the chart to the printer.
 - Open the chart options menu.

## 🏷️ js-datalabel-*

The `js-datalabel-*` style directives are used to customize the data labels on a chart.

## 🗂️ js-datatable-*

The `js-datatable-*` style directives are used to customize the data table on a chart.

When visible, the data table will be rendered at the bottom of the chart container.

## 🦶 js-footer-*

The `js-footer-*` style directives are used to customize the footer area on a chart.

The footer area is used to display the copyright notice at the bottom of a chart's container.

## #️⃣ js-grid-line-*

The `js-grid-line-*` style directive is used to customize the grid lines on a chart.

Gridlines are included in certain charts to make it easier for viewers to interpret the data accurately.

> ⚠️ Warning: Depending on the available space and the proximity of the different gridlines on the chart, the browser may not render all gridlines. There is currently an open ticket to resolve this issue.

## 📘 js-legend-*

The `js-legend-*` style templates are used to customize a chart's legend.

A chart's legend can be rendered on the left side, or to the bottom of a chart's main body.

## 📍 js-marker-*

The `js-marker-*` style directives are used to customize the markers on a chart.

A marker on a chart is a symbol - often a dot or shape - that represents an individual data point at a specific position on the graph.

Scatter charts can use different ***emojis*** as markers to visualize data points on a chart.

## ❓ js-not-defined-*

The `js-not-defined-*` style templates are used to customize areas on a chart that is missing data to fill those areas.

## 🎮 js-options-menu-*

The `js-options-menu-*` style directives are used to customze the options menu of a chart.

The options menu allows the end-user to make adjustments to the chart, e.g. hiding the chart's legend or opening the data table.

## 📏 js-scale-*

The `js-scale-*` style directives are used to customze a chart's scale and scale labels.

## 📄 js-title-*

The `js-title-*` style directives are used to customize a chart's title area.

## 🧱 js-value-bar-*

The `js-value-bar-*` style directives are used to customize a chart's value bars or value blocks.

Value bar or value block elements refer to block-shaped elements that are used by a chart to represent data or data points on a chart.

## 📈 js-value-line-*

The `js-value-line-*` style directives are used to customize a chart's value lines.

Value line elements refer to line-shaped elements that represent data or data points on a chart.

## ➖ js-zero-line-*

The `js-zero-line-*` style directives are used to customize the zero axis lines on a chart.