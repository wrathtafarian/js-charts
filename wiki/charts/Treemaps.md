# 🌲 Treemaps

A **treemap** is a type of chart that visually represents hierarchical data using nested rectangles. Each branch of the hierarchy is given a colored rectangle, and its size corresponds to a specific data value, such as revenue, population, or quantity. The chart’s layout is based on the structure of the hierarchy, with higher-level categories represented by larger rectangles that contain smaller rectangles for subcategories. This visual structure allows you to compare both the size of each category and the proportions between them at a glance.

 - **Usage**: 🔍 Comparison 🌲 Hierarchy 🥧 Part-To-A-Whole ⚖️ Proportions

Treemaps are particularly useful for showing proportions and relative sizes within a hierarchy. They allow for efficient visualization of large datasets, as many items can be displayed within the same space. By using color and size together, treemaps can also highlight trends and patterns within the data, such as high-performing categories or areas of concern. They are commonly used in business for financial analysis, website analytics, or any domain where hierarchical data needs to be visualized in a compact, easy-to-read format.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/treemaps.md) repo for many detailed examples of how to use and customize (style) different types of **treemaps**.

## ⚙️ Chart Attributes

Treemaps accept the following chart attributes.

[🧱 class](../Chart%20Attributes.md#-class)
 | [🗂️ type](../Chart%20Attributes.md#-type)
 | [🕒 version](../Chart%20Attributes.md#-version)
 | [📋 template](../Chart%20Attributes.md#-template)
 | [🧾 jsondata](../Chart%20Attributes.md#-jsondata)
 | [↔️ width](../Chart%20Attributes.md#-width)
 | [↕️ height](../Chart%20Attributes.md#-height)
 | [📄 title](../Chart%20Attributes.md#-title)
 | [🔽 sortdata](../Chart%20Attributes.md#-sortdata)
 | [🚫 limitdata](../Chart%20Attributes.md#-limitdata)
 | [🔲 showborder](../Chart%20Attributes.md#-showborder)
 | [🏷️ showlabels](../Chart%20Attributes.md#-showlabels)
 | [📘 showlegend](../Chart%20Attributes.md#-showlegend)
 | [🎮 showcontrols](../Chart%20Attributes.md#-showcontrols)
 | [🗂️ showdatatable](../Chart%20Attributes.md#-showdatatable)
 | [🧩 showalg](../Chart%20Attributes.md#-showalg)
 | [📲 showwidget](../Chart%20Attributes.md#-showwidget)

## 🧱 Input Data

### 🌲 Chart attribute "jsondata"

Since treemaps visualize hierarchical data, the input data must be provided in a JSON (JavaScript Object Notation) format.

The treemap’s hierarchical data must take on the format of multiple nested objects.

```
{
    "title": "node parent title",
    "nodes": [
        {"title": "node child title", "value": 100}
    ]
}
```

Multiple JSON nodes combined will look like the example below. You can nest an unlimited number of nodes and children nodes.

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

Place the JSON data in the **<head></head>** section of your HTML page. Be sure to give the container element a CSS ***id***. You will reference this CSS ***id*** in your chart container using the **jsondata** *chart attribute*.

```
<script type="application/json" id="my-json-data-id">
{
	"title": "Parent 1",
	"nodes": [ ... ]
		}
	]
}
</script>
```

When creating the chart, specify the CSS ***id*** as the **jsondata** *chart attribute*.

```
<div class="js-chart" ... jsondata="my-json-data-id">
    ...
</div>
```

### 🖌️ Style Directives

Every chart is customized (or styled) using one of the supported **style templates**.

**Style directives** are used to override the customization applied by the style template to each chart.

Treemaps support the following style directives.

[🖼️ js-canvas-*](../directives/Style%20Directive%20Canvas.md)
[📊 js-chart-*](../directives/Style%20Directive%20Chart.md)
[🎨 js-color-*](../directives/Style%20Directive%20Color.md)
[🖱️ js-control-button-*](../directives/Style%20Directive%20Control%20Buttons.md)
[🏷️ js-datalabel-*](../directives/Style%20Directive%20Data%20Label.md)
[🗂️ js-datatable-*](../directives/Style%20Directive%20Data%20Table.md)
[🦶 js-footer-*](../directives/Style%20Directive%20Footer.md)
[📘 js-legend-*](../directives/Style%20Directive%20Legend.md)
[🎮 js-options-menu-*](../directives/Style%20Directive%20Options%20Menu.md)
[📏 js-scale-*](../directives/Style%20Directive%20Scale.md)
[📄 js-title-*](../directives/Style%20Directive%20Title.md)
[🧱 js-value-bar-*](../directives/Style%20Directive%20Value%20Bar.md)

> 💡 See the [👀 js-chart-examples](https://github.com/wrathtafarian/js-chart-examples) repo for many detailed examples of how to use the **style directives** to customize a chart.

## 👀 Examples

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/treemaps.md) repo for many detailed examples of how to use different types of **treemaps**.

### Example: Treemap: Top importers and exporters by country - 2022

The example below renders a **treemap**, showing **Top importers and exporters by country - 2022** of a fictional import/export company.

```
<div class="js-chart" type="treemap" title="Top importers and exporters by country - 2022" ytitle="Millions of $" xtitle="Country" jsondata="json-data1" sortdata="no" drawalg="portrait pivot">
    <div class="js-color-palette" type="sequential discrete">0!hsl(207, 44%, 90%); 10!hsl(207, 44%, 80%); 20!hsl(207, 44%, 70%); 30!hsl(207, 44%, 60%); 40!hsl(207, 44%, 40%); 50!hsl(207, 44%, 40%); 60!hsl(207, 44%, 60%); 70!hsl(207, 44%, 70%); 80!hsl(207, 44%, 80%); 90!hsl(207, 44%, 90%);</div>

    <div class="js-value-bar-border">0.5px solid #cccccc</div>
    <div class="js-value-bar-data-margin">0px</div>
    <div class="js-datalabel-width">150px</div>
    <div class="js-datalabel-height">100px</div>
</div>
```

#### Explained

#### ⚙️ Chart Attributes

 - The jsondata` chart attribute is used to specify the CSS ***id*** of the HTML element that contains the JSON source data.

##### Customization: 🖌️ Style Directives

 - The `js-color-palette` is of type `sequential discrete`. This means that the background color of each cell on the chart is determined dynamically based on the value of the cell.
 - The `js-value-bar-border` style directive renders a solid border of **0.5px** that is the color `#cccccc`.
 - The `js-value-bar-data-margin` style directive renders no gap between differnt cells on the chart.
 - The `js-datalabel-width` style directive sets the width of data labels on the chart to **150px**.
 - The `js-datalabel-height` style directive sets the height of data labels on the chart to **100px**.