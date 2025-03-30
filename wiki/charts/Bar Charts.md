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

## Chart Container

A chart is defined as a HTML element on a web page. Set an attribute on the element called `type` and set the value of the attribute to one of the values below.

 - **bar** - Renders a clustrered bar chart.
 - **stacked bar** - Renders a stacked bar chart.
 - **100% stacked bar** - Renders a 100% stacked bar chart.

```
<div class="js-chart" type="bar"></div>
```

The chart container accepts the attributes below. Refer to the [[Chart Attributes]] page for a full explaination of each chart attribute.

| Attribute Name | Default | Description |
|----------------|---------|-------------|
| template       | `default ` | Set the name of the style template that will be used to customize the look of the chart. |
| width          | `600px`    | Set the width of the chart. **Include an unit of measure to the value**, e.g. 800px. |
| height         | `400px`    | Set the height of the chart. **Include an unit of measure to the value**, e.g. 500px. |
| title          | `<none>`   | Set the title text that will appear at the top of the chart. |
| sortdata       | `false`    | This field provides a way for you to specify a sorting directive for the chart. Only charts that use **categorical** or **hierarchical** data can be sorted.<br><br>To sort the chart data, pass a **sort statement** to the chart in this attribute.<br><br>- **off** - The off keyword stops any sorting to be performed by the chart.<br>- **on title** - The on title keywords are used to direct the chart to draw the chart based on the alphanumeric ordering of the data set titles.<br>- **on label** - The on label keywords are used to direct the chart to draw the chart based on the alphanumeric ordering of the data labels.<br>- **on row** - The on row keywords are used to direct the chart to draw the chart based on the numeric ordering of the data rows.<br>- **on column** - The on column keywords are used to direct the chart to draw the chart based on the numeric ordering of the data columns.<br><br>Both hierarchical and categorical data can be sorted in ascending or descending order by appending one of the keyword below to your sort statement.<br><br>- **asc** - The asc keyword directs the chart to draw the data points in an ascending order based on the keywords above.<br>- **desc** - The desc keyword directs the chart to draw the data points in an ascending order based on the keywords above. |




| title
| sortdata
| xtitle
| ytitle
| scalemin
| scalemax
| swapaxis
| showborder
| showlabels
| showlegend
| showgridlines | `false` | Show or hide the gridlines on the chart. |
| showzeroline
| showcontrols
| showdatatable
| showwidget

## Inputs & Data

Bar charts support the following input containers.

### js-labels

Labels for your data set(s) is defined in the `js-values` input container. Set the inner text of the container to a ***comma-separated list*** of text values.

```
<div class="js-labels">Label 1, Label 2, Label 3, ... , Label n</div>
```