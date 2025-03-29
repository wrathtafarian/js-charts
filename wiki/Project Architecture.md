# 🏗️ Project Architecture

Welcome to the **Project Architecture** page for **js-charts**. This document provides an overview of how the project is structured, how different components interact, and the design decisions that guide the architecture.

---

## 📚 Table of Contents

- [🗺️ Introduction](#️-introduction)
- [📝 Design Principals](#-design-principals)
- [📌 High-Level Overview](#-high-level-overview)
- [🧱 Technology Stack](#-technology-stack)
- [🧭 Directory Structure](#-directory-structure)
- [🛠️ Required Files](#️-required-files)
- [🏗️ Modular Files](#️-modular-files)
- [🔧 Constructing a Chart](#-constructing-a-chart)
    - [📦 Chart Container](#-chart-container)
    - [🛠️ Customization](#️-customization)
    - [🗂️ Input Data](#️-input-data)
- [🔄 Chart Initialization](#-chart-initialization)
- [🧰 Manually Initalize a Chart](#-manually-initalize-a-chart)
- [🧮 Chart Variables](#-chart-variables)
- [🧩 Configuration Constants](#-configuration-constants)
- [🔍 Additional Resources](#-additional-resources)

---

## 🗺️ Introduction

**js-charts** is a low-code charting and graphing solution. Charts are defined as HTML elements which are parsed and rendered into charts.

---

## 📝 Design Principals

**js-charts** is designed based on the following principals:

- The absolute minimum coding should be required by the client to implement a chart.
- The project does not have any external dependencies.
- The project is cross platform and cross browser compatible.
- The privacy and security of the end-user is never compromised.

---

## 📌 High-Level Overview

This project uses the following concepts.

- **Common** files – Common files are required by all charts.
- **Modular** files – Modular files are specific to the chart group (e.g. pie, doughnut and stacked doughnut charts are grouped together under the label **pie** and share modular files.)
- **Chart Attributes** – Chart attributes define the type of chart, and how the chart behaves.
- **Style Template** – A set of rules that define what a chart looks like.
- **Style Directives** – Style template directives are used to override the look defined by the style template on a chart-by-chart basis.
- **Input Data** – Data sets, points, values, series etc. are all passed to the chart using **data input** HTML containers.

All components are **front-end components**, meaning everything is calculated and run in the client browser. There are no back-end (or server) components.

---

## 🧱 Technology Stack

**js-charts** is created using only ***`css`*** and ***`js`***. All components are run in the browser, there are no back-end or server components.

---

## 🧭 Directory Structure

A snapshot of the key folders and files in the codebase:

```text
/js-charts
│
├── css/                # Common and modular cascading stylesheet files used to provide the default look of charts.
├── examples/           # Examples demonstrating different charts, and the usage of **chart attributes** and **style directives** to customize charts.
├── images/
├──── icons/            # Icons that can be used to represent different chart types.
├──── icons/            # The **js-charts** logo in different sizes and formats.
├── js/                 # Common and modular JavaScript source code files used to render charts in the browser.
├── docs/               # Documentation files.
├── tests/              # Common and chart-specific test scenarios.
└── README.md           # Project overview
```

---

## 🛠️ Required Files

Every chart requires access to the **common** Cascading Style Sheet and JavaScript source code file.

These two files are included in the `<head></head>` section on your web page.

```
<link href="https://js-charts.com/latest/css/js-chart-common.css" rel="stylesheet">
<script type="text/javascript" src="https://js-charts.com/latest/js/js-chart-common.js"></script>
```

---

## 🏗️ Modular Files

Charts are categorized into groups based on their function. To render a chart, the correct **modular** `.css` and `.js` files are required to be included in the `<head></head>` section of your web page.

For example: pie, doughnut and stacked dougnut charts are grouped together into the **pie** modular files.

```
<link href="https://js-charts.com/latest/css/js-chart-pie.css" rel="stylesheet">
<script type="text/javascript" src="https://js-charts.com/latest/js/js-chart-pie.js"></script>
```

Refer to the [[Chart Types]] page for a list of supported chart types and groups. **js-charts** currently supports 37 unique charts categorized into 18 chart groups.

---

## 🔧 Constructing a Chart

### 📦 Chart Container

A chart is defined as a HTML element on a web page. **Chart attributes** are defined as attributes of the HTML element.

Every chart container must container the `type` attribute which is set to a value of **js-charts**. This identifies the continer as a ***chart container***.

```
<div class="js-chart" type="pie" template="default" title="Sales Revenue (2022)" showlegend="bottom">
</div>
```

### 🛠️ Customization

Each chart is customized using a style template that is specified in the `template` **chart attribute**.

You can override every aspect of how a chart looks by specifying **style directive** containers inside the chart's HTML container. A style directive itself is also specified as a HTML container.

```
<div class="js-chart" type="pie" template="default" title="Sales Revenue (2022)" showlegend="bottom">
    <div class="js-title-font-size">18px</div>
    <div class="js-title-font-weight">700</div>
</div>
```

### 🗂️ Input Data

Each data set is passed to the chart as an HTML container. The values of the data set are passed as comma-separated numeric values set as the inner text of the data set container.

In this example, pie charts use the `js-labels` and `js-values` containers to pass the data set and accompanying labels to the chart.

```
<div class="js-chart" type="pie" template="default" title="Sales Revenue (2022)" showlegend="bottom">
    <div class="js-title-font-size">18px</div>
    <div class="js-title-font-weight">700</div>

    <div class="js-labels">Furniture, Groceries, Electronics, Toys, Clothing</div>
    <div class="js-values">64, 142, 152, 156, 229</div>
</div>
```

💡 Refer to the [[Chart Types]] page for more information on different input data elements supported by **js-charts**.

---

## 🔄 Chart Initialization

Pages that include the **common files** `css/js-chart-common.css` and `js/js-chart-common.js` will look for HTML containers in the page DOM with the `class` attribute set to ***js-charts***.

If one or more containers are found in the DOM with the `class` attribute set to ***js-charts***, the container is parsed as a chart container to extract the:

1. **Chart attributes**: Defines the chart type, and how the chart should behave.
2. **Style directives**: Used to customize the default look of the chart.
3. **Input data**: Defines the input data sets that are visualized on the chart.

Each chart container that is initialized will be used as the parent container for the chart that is being rendered. This means that any styling that is applied to the parent container will be inherited by the child containers.


## 🧰 Manually Initalize a Chart

The default behaviour is to initialize all chart containers found in the page DOM. One or more charts can be manually initalized on a page by calling the `initChart()` function. If no parameters are passed to the function, all chart containers on the page will be initalized.

The `initChart` function accepts the following ***optional*** parameters to limit which chart containers will be initialized.

- **chart_index** - When defined, only the chart matching this index on the page will be initialized. 💡 Note: Indexing of charts start at 0. This means the first chart is assigned index 0, the second is assigned index 1, and so on.
- **chart_id** - When defined, only chart containers with the CSS ***id*** attribute that matches this parameter will be initalized.
- **series_index** - When defined, and only when the chart type supports **multi-series data sets**, will this limit the data set that will be visualised on the chart.
- **open_options_menu** - When defined, the options menu will automatically be opened after the chart in initialized.

---

## 🧮 Chart Variables

A standard set of variables are made availble to each chart that is initialized. The standard set of variables are created in a structure called **`i_chart`**. The high-level structure keys are:

| Key | Description |
|----------|-------------|
| type          | Defines the type of chart to render. The [[Chart Types]] page contains a list of all supported chart types. |
| chart_type    | Define the category group of the chart to render. |
| chart_counter | Every chart container in the DOM is assigned an index. ⚠️ Note: Indexing of charts start at 0. This means the first chart is assigned index 0, the second is assigned index 1, and so on. |
| series_index  | Every data set inside the chart container is assigned an index. ⚠️ Note: Indexing of data series start at 0. This means the first data set is assigned index 0, the second is assigned index 1, and so on. |
| data_type     | Indicates the data type used by the chart, e.g. categorical, range, points, series, etc. |
| i_data_type   | Indicates whether the input values were specified as *absolute* (e.g. 10 or 12945) or *relative* (34% or 100%) values. |
| i_keys        | When supported by the chart type, populated with the keys that match to a qualitative color palette. |
| i_sets        | When the chart type requires *js-series* input date (i.e. the chart uses multi-series data sets), contains an *array* with each element in the array containing one data series. Each data series can contain one or more data sets. |
| i_labels      | An array containing the data labels for the chart that is being rendered. |
| i_titles      | An array containing the data set titles, i.e. a name or short description for each data set. |
| i_data        | A multi-dimensional array containing the data sets for the chart being rendered, e.g.<br>i_data = ***[***<br>*[* 10, 20, 30, 40, 50 *]* , <br> *[* 20, 30, 40, 50, 60 *]* , <br> *[* -20, 40, 50, 60, 70 *]* <br> ***]***. |
| i_options     | All chart attributes that are supported by the chart that is being rendered. |
| i_design      | All style directives that are supported by the chart that is being rendered. |
| i_totals      | Array containing a structure for each data set. Each structure summarizes the data set. E.g. <br>i_totals = ***[*** <br> {"total_value": 150, "total_abs_value": 150, "min_value": 10, "max_value": 50}, <br> {"total_value": 200, "total_abs_value": 200, "min_value": 20, "max_value": 60}, <br> {"total_value": 200, "total_abs_value": 180, "min_value": -20, "max_value": 70} <br> ***]***.<br><br>The following values are calculated for every data set:<br> - *total_value*: Contains the sum of all values in the data set.<br>- *total_abs_value* - Contains the total of all absolute values in the data set.<br>- *min_value* - Contains the smallest value in the data set.<br>- *max_value* - Contains the largest value in the data set. |

---

## 🧩 Configuration Constants

The following constants are pre-configured as part of the **common files** and are available to any chart being rendered.

- **[[IDEFAULT_CHART_ATTRIBUTES]]** - Define the *default values* to be used when parsing and initializing *chart attributes*.
- **[[IDEFAULT_DESIGN_TEMPLATES]]** - Define the *default style templates* that is used to style and *customize charts*.
- **[[IDEFAULT_CHART_TYPE_OPTIONS]]** - Define the *available chart types*, and the *default options* used to render each chart.
- **[[IDEFAULT_LOG_SEVERITY_LEVEL]]** - Defines the *log severity level* that determines *what will be logged* to the browser console.

---

## 🔍 Additional Resources

- [[Contributing Guide]
- [[FAQ]]

---

Have a question about the architecture? [Open an issue](https://github.com/wrathtafarian/js-charts/issues) or reach out in Discussions!