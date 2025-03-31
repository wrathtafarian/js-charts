# 📊 Bar Charts

A bar chart is a visual representation of categorical data where individual bars represent the frequency, count, or other measures of each category. The categories are displayed along the x-axis, and the height or length of the bars, which are plotted on the y-axis (for vertical bar charts) or x-axis (for horizontal bar charts), corresponds to the value or measure of each category. Bar charts are particularly useful for comparing discrete data across categories, making it easy to observe differences between them.

 - Bar charts can be simple or grouped, depending on the nature of the data.
 - A simple bar chart displays one set of data, with each bar representing a single category.
 - A grouped bar chart shows multiple data series side by side for each category, allowing for comparisons between different groups.

## Usage

`Pattern`    `Comparison`

Bar charts are widely used in various fields, including business, education, and social sciences, to compare frequencies, percentages, or other measures across categories.

## Supported Types

**js-charts** currently supports the following bar charts:

 - **Clustered Bar Chart** – A bar chart is used to compare the values of different categories. Each bar represents a category, and the height (vertical) or length (horizontal) of the bar indicates the value or frequency for that category. Bar charts are best for comparing individual data points across discrete categories.

 - **Stacked Bar Chart** – A stacked bar chart shows the total value for each category, but it also breaks down the total into sub-categories. The bars are divided into segments that represent different components, stacked on top of each other. This allows you to compare both the overall size of each category and the relative contributions of the sub-categories.

 - **100% Stacked Bar Chart** – A 100% stacked bar chart is similar to a stacked bar chart, but the bars are normalized to a total of 100%. Each bar represents the percentage distribution of the sub-categories within each category. It is useful for comparing the proportional makeup of categories across different groups, regardless of the total size.

## 🗂️ Chart Container

The bar chart container accepts the following [[Chart Attributes]].

| | | | | | | | 
|-|-|-|-|-|-|-|
| 🧱 class | 🗂️ type | 🕒 version | 📋 template | ↔️ width | ↕️ height | 📄 title |
| 🔽 sortdata | 📄 ytitle | 📄 xtitle | 📏 scalemin | 📏 scalemax | 🔄 swapaxis | 🔲 showborder |
| 🏷️ showlabels | 📘 showlegend | 🎮 showcontrols | #️⃣ showgridlines | ➖ showzeroline | 🗂️ showdatatable | 📲 showwidget |

Refer to the [[Chart Attributes]] page for detailed information about each attribute.

## 🧮 Input Data

The bar chart container supports the following [[Input Data]] containers.

| | |
|-|-|
| 🏷️ js-labels | 🔢 js-values |

Please refer to the [[Input Data]] page for detailed information about each container.

## 🖌️ Style Directive

The bar chart container supports the following style directives.

| js-canvas | js-chart | js-color | js-control | js-datalabel | js-datatable | js-footer |
| js-grid | js-legend | js-options | js-scale | js-title | js-value | js-zero |