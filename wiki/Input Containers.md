# 🗂️ Input Containers

Input containers are used to pass **labels**, **data** and **style directives** to a chart.

An input container is defined as a HTML container.

 - The input container **type** is defined using the **class** attribute.
 - The **inner text** of the container is parsed as the input **values** of the container.

```
<div class=" TYPE "> VALUES </div>
```

## Table of Contents

 - [Category](#category)
   - [🏷️ js-labels](#️-js-labels)
 - [Data](#data)
   - [Categorical: 📋 js-values](#categorical--js-values)
   - [Cumulative: 📋 js-values](#cumulative--js-values)
   - [Frequency: 📋 js-values (Continuous Numerical Data / Bins)](#frequency--js-values-continuous-numerical-data--bins)
     - [auto](#auto)
     - [boundary](#boundary)
     - [summary](#summary)
     - [category](#category)
   - [Hierarchical: 🌲 Class Attribute **jsondata**](#hierarchical--class-attribute-jsondata)
   - [Points (Quantitative Data): 🎯 js-x-points, 🎯 js-y-points & 🎈 js-s-points](#points-quantitative-data--js-x-points-js-y-points--js-s-points)
   - [Series (Continuous Numerical Data): 📁 js-series](#series-continuous-numerical-data--js-series)
   - [Span (or Range): ⬇️ js-low-values & ⬆️ js-high-values](#span-or-range-️-js-low-values--️-js-high-values)
   - [Stock (Open-High-Low-Close): 💲 js-open, 💲 js-high, 💲 js-low & 💲 js-close](#stock-open-high-low-close--js-open--js-high--js-low---js-close)


## Category

### 🏷️ js-labels

The `js-labels` input container sets the labels that anchor each cluster on the axis.

This input container is identified by the **js-labels** *class attribute* and accepts a **comma-separated list of text values**. The example below sets the abbreviated months of the year as chart categories.

```
<div class="js-labels">Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec</div>
```

Each item in the list is treated as a distinct **category** that is visualized on a chart.

 - The categories will be displayed as individual labels on the axis of a chart.
 - The categories may also be visible in the chart tooltips.

> ℹ️ **Labels** will automatically be generated if no labels are set for a chart. The labels are created in the format `p1`, `p2`, `p3`, ... `pn`.

## Data

### Categorical: 📋 js-values

The `js-values` input container can be used to set the individual data points for one data series (or data set).

Many charts support multiple `js-values` input containers, meaning the chart supports multiple data series (or data sets).

You can set a name or short description for each `js-values` input container using the `title` attribute.

> ℹ️ A **title** will automatically be generated for each `js-values` input container defined without a `title` attribute. Titles are generated in the format `Series 1`, `Series 2`, `Series 3`, ..., `Series n`.

The exmple below demonstrates how to create three `js-values` input containers. A `title` attribute is set for each container.

```
<div class="js-values" title="Clothing">450, 536, 587, ..., 678</div>
<div class="js-values" title="Bedding">712, 689, 794, ..., 787</div>
<div class="js-values" title="Home Decor">247, 297, 345, ..., 341</div>
```

> 💡 The following charts support the `js-values` input container.
[📊 Bar Charts](charts/Bar%20Charts.md)
[📊 Column Charts](charts/Column%20Charts.md)
[🔻 Funnel Charts](charts/Funnel%20Charts.md)
[🌡️ Heatmaps](charts/Heatmaps.md)
[📈 Line Charts](charts/Line%20Charts.md)
[🍭 Lollipop Charts](charts/Lollipop%20Charts.md)
[📊 Marimekko Charts](charts/Marimekko%20Charts.md)
[📉 Parallel Coordinates Plots](charts/Parallel%20Coordinates%20Plots.md)
[🍩 Pie & Doughnut Charts](charts/Pie%20and%20Doughnut%20Charts.md)
[🧑‍🤝‍🧑 Population Pyramids](charts/Population%20Pyramids.md)

---

### Cumulative: 📋 js-values

The `js-values` input container can be used to show how an initial value is affected by a series of positive and negative changes, eventually leading to a final value.

Each `js-values` input container sets the individual data points for one data series (or data set) using a **comma-separated list of numeric values**.

You can set a name or short description for the `js-values` input container using the `title` attribute.

> ℹ️ A **title** will automatically be generated for the `js-values` input container if none is set using the `title` attribute. The title will be set a `Series 1`.

```
<div class="js-values" title="Company Profit Breakdown 2024 (USD)">100000, -60000, 20000, -5000, -30000, -25000, 3000, -10000</div>
```

> 💡 `js-values` are used by [🌊 Waterfall Charts](charts/Waterfall%20Charts.md) to visualize **cumulative values**.

---

### Frequency: 📋 js-values (Continuous Numerical Data / Bins)

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

---

### Hierarchical: 🌲 Class Attribute **jsondata**

> ⚠️ Hierarchical data must be provided to a chart as **JSON data**. This is accomplished by using the **jsondata** *chart attribute*.

Treemaps are best suited for visualizing hierarchical (tree-like) data, categorical, and quantitative data, where the goal is to compare proportions and relationships within a structured dataset. Treemaps help make sense of large and complex data by visually organizing it into a compact, easily interpretable format.

Since treemaps visualize hierarchical data, the input data must be provided in a **JSON** (JavaScript Object Notation) format.

The treemap’s hierarchical data must take on the format of multiple nested objects.

```
{
    "title": "node parent title",
    "nodes": [
        {"title": "node child title", "value": 100}
    ]
}
```

The hierarchical data used in the example below defines the stock levels of a fictional motor parts shop.

```
{
	"title": "Eddie's Motor Spares",
	"nodes": [
		{
			"title": "Engine",
			"nodes": [
				{
					"title": "Filters",
					"nodes": [
						{ "title": "Oil Filter - Toyota Corolla", "value": 45 },
						{ "title": "Air Filter - Honda Civic", "value": 30 }
					]
				},
				{
					"title": "Belts",
					"nodes": [
						{ "title": "Timing Belt - Ford Focus", "value": 20 },
						{ "title": "Serpentine Belt - VW Golf", "value": 25 }
					]
				}
			]
		},
		{
			"title": "Brakes",
			"nodes": [
				{
					"title": "Pads",
					"nodes": [
						{ "title": "Brake Pads - Toyota Hilux", "value": 60 },
						{ "title": "Brake Pads - Nissan Qashqai", "value": 50 }
					]
				},
				{
					"title": "Discs",
					"nodes": [
						{ "title": "Brake Disc - BMW 3 Series", "value": 15 },
						{ "title": "Brake Disc - Audi A4", "value": 10 }
					]
				}
			]
		},
		{
			"title": "Suspension",
			"nodes": [
				{
					"title": "Shocks",
					"nodes": [
						{ "title": "Shock Absorber - Subaru Forester", "value": 18 },
						{ "title": "Shock Absorber - Mazda CX-5", "value": 20 }
					]
				},
				{
					"title": "Springs",
					"nodes": [
						{ "title": "Coil Spring - Toyota Camry", "value": 12 },
						{ "title": "Leaf Spring - Isuzu D-Max", "value": 10 }
					]
				}
			]
		},
		{
			"title": "Electrical",
			"nodes": [
				{
					"title": "Batteries",
					"nodes": [
						{ "title": "Car Battery - 12V 60Ah", "value": 40 },
						{ "title": "Car Battery - 12V 70Ah", "value": 35 }
					]
				},
				{
					"title": "Spark Plugs",
					"nodes": [
						{ "title": "Spark Plug - NGK BKR6E", "value": 100 },
						{ "title": "Spark Plug - Bosch FR78X", "value": 85 }
					]
				}
			]
		}
	]
}
```

---

### Points (Quantitative Data): 🎯 js-x-points, 🎯 js-y-points & 🎈 js-s-points

Scatter charts (or scatter plots) are used to display relationships between two numerical variables. Each point on the chart represents an individual data value, with its position determined by the values of the two variables—one plotted along the x-axis and the other along the y-axis. Scatter plots use the following input containers:

 - `js-x-points' sets a **comma-separated list of numeric values** that define the *x-points* to visualize on a chart.
 - `js-y-points' sets a **comma-separated list of numeric values** that define the *y-points* to visualize on a chart.

Bubble charts (or bubble plots) are used to visualize relationships between three numerical variables: two determining the bubble’s position on the x and y axes, and the third controlling the bubble’s size.

 - `js-x-points' sets a **comma-separated list of numeric values** that define the *x-points* to visualize on a chart.
 - `js-y-points' sets a **comma-separated list of numeric values** that define the *y-points* to visualize on a chart.
 - `js-s-points' sets a **comma-separated list of numeric values** that define the *point's value* to visualize on a chart.


```
<div class="js-x-points">1, 1, 5, 6, 0, 2, 3, 8, 6, 0</div>
<div class="js-y-points">3, 4, 5, 1, 1, 0, 9, 5, 6, 3</div>
<div class="js-s-points">6, 20, 6, 0, 22, 2, 16, 3, 24, 6</div>
```

---

### Series (Continuous Numerical Data): 📁 js-series

The `js-series` input container is used to create groups of data series (or data sets). Every data series (or data set) is defined using a `js-values` input container.

 - A chart supports one or more `js-series` input containers.
 - Every `js-series` input container supports one or more `js-values` input containers.

Every `js-series` and `js-values` input container supports a `title` attribute that can be used to provide a *name* or *short description* for each container.

The example below defines one `js-series` input container that contains one `js-values` input container.

```
<div class="js-series" title="Zone A">
    <div class="js-values" title="Zone A1">41.392, 50.748, 47.609, 40.824, 44.105, 38.859, 41.762, 53.671, 50.883, 53.474, 50.925, 49.696, 41.903, 48.686, 40.732, 50.263, 52.501, 47.081, 52.577, 38.045</div>
</div>
```

Multiple `js-series` and `js-values` input containers can be nested to create multiple groups of data series (or data sets). The example below defines 4 groups of data, each representing a different zone that a fintional package delivery company services. Each group is made up of 2 data series (or data sets).

```
<div class="js-series" title="Zone A">
    <div class="js-values" title="Zone A1">41.392, 50.748, 47.609, 40.824, 44.105, 38.859, 41.762, 53.671, 50.883, 53.474, 50.925, 49.696, 41.903, 48.686, 40.732, 50.263, 52.501, 47.081, 52.577, 38.045</div>
    <div class="js-values" title="Zone A2">40.981, 45.457, 50.058, 46.35, 44.146, 39.769, 51.243, 52.659, 41.735, 45.513, 47.048, 45.606, 44.841, 47.807, 44.764, 49.707, 42.683, 43.593, 48.622, 43.586</div>
</div>
<div class="js-series" title="Zone B">
    <div class="js-values" title="Zone B1">50.104, 57.486, 60.776, 65.72, 55.399, 57.835, 61.965, 51.642, 64.537, 65.407, 51.952, 61.239, 65.827, 51.489, 66.006, 64.188, 66.619, 58.66, 59.2, 61.218</div>
    <div class="js-values" title="Zone B2">51.419, 56.8, 64.477, 59.1, 60.645, 64.101, 62.65, 61.868, 63.118, 61.652, 49.07, 49.126, 48.866, 58.077, 62.298, 62.764, 61.119, 60.062, 53.334, 66.603</div>
</div>
<div class="js-series" title="Zone C">
    <div class="js-values" title="Zone C1">36.277, 42.08, 41.609, 12.786, 47.892, 45.11, 41.78, 34.316, 31.996, 45.2, 48.192, 32.597, 38.71, 28.621, 41.269, 45.015, 47.45, 48.248, 48.258, 45.823</div>
    <div class="js-values" title="Zone C2">43.317, 34.182, 30.088, 43.543, 43.06, 31.971, 47.911, 35.293, 34.732, 29.353, 42.376, 45.755, 34.793, 39.008, 47.12, 46.37, 31.594, 38.089, 36.354, 46.281</div>
</div>
<div class="js-series" title="Zone D">
    <div class="js-values" title="Zone D1">69.277, 67.161, 52.515, 43.6, 71.569, 71.955, 49.809, 62.107, 42.782, 71.936, 44.474, 61.475, 46.267, 72.337, 61.024, 44.61, 66.238, 44.466, 55.894, 74.443</div>
    <div class="js-values" title="Zone D2">61.675, 76.407, 44.052, 58.023, 57.39, 63.603, 75.584, 69.012, 72.182, 67.556, 66.307, 57.22, 53.579, 50.303, 45.311, 67.302, 51.832, 52.897, 72.718, 73.814</div>
</div>
```

> 💡 The `js-series` input container is supported by 📦 Box Plots (or Box-and-Whisker Plots).

---

### Span (or Range): ⬇️ js-low-values & ⬆️ js-high-values

The `js-low-values` and `js-high-values` input containers set the low (or minimum) and high (or maximum) values used to visualize the **span** (or **range**) between data points.

Each container accepts a **comma-separated list of numeric values**.

You can set a name or short description for each `js-low-values` input container using the `title` attribute.

> ℹ️ A **title** will automatically be generated for each `js-low-values` input container defined without a `title` attribute. Titles are generated in the format `Series 1`, `Series 2`, `Series 3`, ..., `Series n`.

The example below defines a **span** (or **range**) of data points that represent the price movement of a list of financial assets.

```
<div class="js-low-values" title="Financial movement">14, 22, 36, 17, 18</div>
<div class="js-high-values">24, 36, 42, 23, 31</div>
```

> 💡 The `js-low-values` and `js-high-values` input containers are supported by [📏 Span Charts](charts/Span%20Charts.md).


### Stock (Open-High-Low-Close): 💲 js-open, 💲 js-high, 💲 js-low & 💲 js-close

The `js-open`, `js-high`, `js-low` and `js-close` input containers are used by **candlestick** and **open-high-low-close (OHLC)** charts to visualize asset price and market movements.

 - `js-open` - The price at which the asset started trading at the beginning of the time period.
 - `js-high` - The highest price reached during the time period.
 - `js-low` - Low Price – The lowest price reached during the time period.
 - `js-close` - The price at which the asset finished trading at the end of the time period.

The input containers above all accept a **comma-separated list of numeric values**.

```
<div class="js-open">100, 102, 105, 103, 108, 110, 107, 109, 112, 115</div>
<div class="js-high">105, 107, 108, 106, 112, 113, 110, 114, 117, 120</div>
<div class="js-low">98, 100, 103, 101, 106, 108, 104, 106, 109, 113</div>
<div class="js-close">102, 105, 104, 106, 110, 109, 108, 112, 116, 118</div>
```