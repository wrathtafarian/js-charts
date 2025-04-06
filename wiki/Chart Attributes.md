# ⚙️ Chart Attributes

**Chart attributes** define the chart type, as well as how a chart will behave.

### 📚 Table of Contents
[🧱 class](#-class)
 | [🗂️ type](#-type)
 | [🕒 version](#-version)
 | [📋 template](#-template)
 | [🧾 jsondata](#-jsondata)
 | [↔️ width](#️-width)
 | [↕️ height](#️-height)
 | [📄 title](#-title)
 | [📄 ytitle](#-ytitle)
 | [📄 xtitle](#-xtitle)
 | [🍩 holetitle](#-holetitle)
 | [📏 scalemin](#-scalemin)
 | [📏 scalemax](#-scalemax)
 | [📏 xscalemin](#-xscalemin)
 | [📏 xscalemax](#-xscalemax)
 | [📏 yscalemin](#-yscalemin)
 | [📏 yscalemax](#-yscalemax)
 | [📐 startangle](#-startangle)
 | [🔄 swapaxis](#-swapaxis)
 | [🔽 sortdata](#-sortdata)
 | [🚫 limitdata](#-limitdata)
 | [🔲 showborder](#-showborder)
 | [🏷️ showlabels](#️-showlabels)
 | [📘 showlegend](#-showlegend)
 | [🎮 showcontrols](#-showcontrols)
 | [🗂️ showdatatable](#️-showdatatable)
 | [#️⃣ showgridlines](#️⃣-showgridlines)
 | [➖ showzeroline](#-showzeroline)
 | [📈 showlines](#-showlines)
 | [🐱 showwhiskers](#-showwhiskers)
 | [➖ showmedians](#-showmedians)
 | [📍 showmarkers](#-showmarkers)
 | [🔵 markertype](#-markertype)
 | [🧩 showalg](#-showalg)
 | [📲 showwidget](#-showwidget)

---

## 🧱 class

The `class` attribute must be set to the value ***js-chart***. This defines the HTML element as a *chart container*. This attribute is always **required**.

## 🗂️ type

The `type` attribute sets the name of the chart that you want to display. This attribute is always **required**.

> 💡 Refer to the [[Chart Types]] page for a list of all supported chart types.

## 🕒 version

`Reserved for future use.`


## 📋 template

The `template` attribute changes the style template that will be used to customize the look of a chart.

The default value for the `template` attribute is **default** -- which will use the **default** style template. Refer to the [[Style Templates]] page for a list of style templates.

Every element of a style sheet can be overwritten on a chart-by-chart basis using [[Style Directives]].

## 🧾 jsondata

JSON input data is currently only supported on charts that use **hierarchical data**. The `jsondata` attribute specifies the CSS ***id*** of the HTML element that contains the JSON input data.

In the example below, JSON data is defined in a *script* element with an ***id*** set to *inventory-data*.

```
<script type="application/json" id="inventory-data">
{
    "title": "Inventory (January 2024)",
    "nodes": [
        {"title": "Black boots", "value": 34},
        {"title": "Red boots", "value": 45},
        {"title": "Green boots", "value": 21},
        ...
        {"title": "Blue boots", "value": 37}
    ]
}
</script>
```

## ↔️ width

You can control the total width of the chart area by setting the `width` attribute.

Include an **unit of measure** when specifying the `width` attribute, e.g. **800px** or **400pt**. Alternatively, you can also specify a **relative length unit**, e.g. **100%** or **20em**.

The `width` attribute supports the **auto** keyword. When you set the `width` attribute to **auto**, the chart area will automatically try to fill the width of the parent container.

The default value for the `width` attribute is **600px**.

## ↕️ height

You can control the total height of the chart area by setting the `height` attribute.

Include an **unit of measure** when specifying the `height` attribute, e.g. **500px** or **370pt**. Alternatively, you can also specify a **relative length unit**, e.g. **100%** or **20em**.

The `height` attribute supports the **auto** keyword. When you set the `height` attribute to **auto**, the chart area will automatically:

 - Attempt to render itself in the **smallest** vertical space possible.
 - The **min-height** style directive will still be honored.
 - If possible, no vertical scrollbars will be incorporated.

> 💡 ***Caution***: Using the **auto** keyword on the `height` attribute may vertically squash the chart.

The default value for the `width` attribute is **400px**.

## 📄 title

The `title` attribute sets the title text that will be rendered at the top of the chart container (inside the container).

If the title is too long to fit into the chart container, the title will automatically be truncated, and an ellipsis (...) added to the back of the truncated title text.

If no value is set for the `title` attribute, no title will be rendered on the chart, and the space reserved on the chart for the title is released to be used by other elements on the chart.

## 📄 ytitle

You can set an optional title that will appear on the **y-axis** of the chart using the `ytitle` attribute.

If the title is too long to fit into the chart container, the title will automatically be truncated, and an ellipsis (...) added to the back of the truncated title text.

## 📄 xtitle

You can set an optional title that will appear on the **x-axis** of the chart using the `xtitle` attribute.

If the title is too long to fit into the chart container, the title will automatically be truncated, and an ellipsis (...) added to the back of the truncated title text.


## 🍩 holetitle

> 💡 The `holetitle` attribute is only supported by **doughnut** and **stacked doughnut** charts.

You can set an optional title that will appear in the **doughnut hole** of doughnut and stacked doughnut charts using the `holetitle` attribute.

If the title is too long to fit into the doughnut hole, the title will automatically be truncated, and an ellipsis (...) added to the back of the truncated title text.

## 📏 scalemin

The `scalemin` attribute overrides the minimum value on a chart's scale. The `scalemin` and the `scalemax` attributes must be used together to have any effect.

> 💡 Only applies to the following charts:<br>- bar charts<br>- box plots<br>- column charts<br>- histograms<br>- lollipop charts<br>- line charts<br>- population pyramids<br>- stock charts.

Ensure that the `scalemin` attribute is smaller than the `scalemax` attribute.

Data points outside of the `scalemin` and `scalemax` range will not be rendered by the chart.

The chart will automatically determine the minimum and maximum scale values if no `scalemin` or `scalemax` attribute is specified.

## 📏 scalemax

The `scalemax` attribute overrides the maximum value on a chart's scale. The `scalemax` and the `scalemin` attributes must be used together to have any effect.

> 💡 Only applies to the following charts:<br>- bar charts<br>- box plots<br>- column charts<br>- histograms<br>- lollipop charts<br>- line charts<br>- population pyramids<br>- stock charts.

Ensure that the `scalemax` attribute is larger than the `scalemin` attribute.

Data points outside of the `scalemin` and `scalemax` range will not be rendered by the chart.

The chart will automatically determine the minimum and maximum scale values if no `scalemin` or `scalemax` attribute is specified.

## 📏 xscalemin

The `xscalemin` attribute overrides the minimum value on a chart's x-axis scale. The `xscalemin` and the `xscalemax` attributes must be used together to have any effect.

> 💡 Only applies to the following charts:<br>- scatter charts<br>- bubble charts<br>- marimekko charts.

Ensure that the `xscalemin` attribute is smaller than the `xscalemax` attribute.

Data points outside of the `xscalemin` and `xscalemax` range will not be rendered by the chart.

The chart will automatically determine the minimum and maximum scale values on the x-axis if no `xscalemin` or `xscalemax` attribute is specified.

## 📏 xscalemax

The `xscalemax` attribute overrides the maximum value on a chart's x-axis scale. The `xscalemax` and the `xscalemin` attributes must be used together to have any effect.

> 💡 Only applies to the following charts:<br>- scatter charts<br>- bubble charts<br>- marimekko charts.

Ensure that the `xscalemax` attribute is larger than the `xscalemin` attribute.

Data points outside of the `xscalemin` and `xscalemax` range will not be rendered by the chart.

The chart will automatically determine the minimum and maximum scale values on the x-axis if no `xscalemin` or `xscalemax` attribute is specified.

## 📏 yscalemin

The `yscalemin` attribute overrides the minimum value on a chart's y-axis scale. The `yscalemin` and the `yscalemax` attributes must be used together to have any effect.

> 💡 Only applies to the following charts:<br>- scatter charts<br>- bubble charts<br>- marimekko charts.

Ensure that the `yscalemin` attribute is smaller than the `yscalemax` attribute.

Data points outside of the `yscalemin` and `yscalemax` range will not be rendered by the chart.

The chart will automatically determine the minimum and maximum scale values on the y-axis if no `yscalemin` or `yscalemax` attribute is specified.

## 📏 yscalemax

The `yscalemax` attribute overrides the maximum value on a chart's y-axis scale. The `yscalemax` and the `yscalemin` attributes must be used together to have any effect.

> 💡 Only applies to the following charts:<br>- scatter charts<br>- bubble charts<br>- marimekko charts.

Ensure that the `yscalemax` attribute is larger than the `yscalemin` attribute.

Data points outside of the `yscalemin` and `yscalemax` range will not be rendered by the chart.

The chart will automatically determine the minimum and maximum scale values on the y-axis if no `yscalemin` or `yscalemax` attribute is specified.

## 📐 startangle

**Pie**, **doughnut** and **stacked doughnut** charts can be rotated using the `startangle` attribute. Supported values are:

 - **0deg** - The chart is rotated with the starting point facing upwards. This is the default starting position.
 - **90deg** - The chart is rotated with the starting point facing to the right.

The default starting angle is **0deg**.

You can not rotate a chart past 90deg. Rather rearrange the input data.

## 🔄 swapaxis

The `swapaxis` attribute allows you to change the way that the data is visualized on the chart.

> 💡 Only applies to the following charts:<br>- pie & doughnut charts<br>- bar charts<br>- lollipop charts<br>- column charts<br>- histograms

Setting the `swapaxis` attribute to **true** will cause the data to be swapped around on the chart axis.

The default value for the `swapaxis` attribute is **false**.

## 🔽 sortdata

The `sortdata` attribute allows you to sort **categorical** or **hierarchical** data before being visualized on the chart.

Sorting is a powerful tool to **discover patterns** and **compare** data points or values.

The attribute accepts a **sort statement** that defines how the input data must be sorted.

Only one **sort statement** can be executed at a time, but many sort operations can be issued one after the other on the data set, e.g. using the chart options menu or browser console.

By default, **no sorting** is applied to the input data before being rendered on the chart.

A **sort statement** is composed of the following four elements:

 1. The opening keyword of the sort statement turns sorting **on** or **off**.
 2. The second part specifies on what metric you want to sort on, e.g. **title**, **label**, **row** or **column**.
 3. The **optional** third part of the statement provides meta data to the sort statement:
    - **min** - The data will be sorted based on the smallest (or minimum) value in each data set.
    - **max** - The data will be sorted based on the largest (or maximum) value in each data set.
    - **avg** - The data will be sorted based on the average value of all data points within each data set.
    - **sum** - The data will be sorted based on the total value of all data points combined within each data set.
    - **abs** - The data will be sorted based on the absolute total value of all data points combined within each data set.
    - **key** - The data will be sorted while treating all data points as `string` values within each data set.
 4. The last part of the sort statement specifies the sorting order, **asc** or **desc**.

```
[ off | on {
        [
          title |
          label |
          column < min | max | avg | sum | abs | key > |
          row < min | max | avg | sum | abs | key >
        ]
        [ asc | desc ]
    }
]
```

#### Examples

The **sort statement** below disables sorting of the chart input data.

```
<div class="js-chart" ... sortdata="off">
```

This **sort statement** sorts the data based on each data set's **title** in an ascending order.

```
<div class="js-chart" ... sortdata="on title asc">
```

The following **sort statement** sorts the data based on the **column average** (horizontally) of all values in each data set in a descending order.

```
<div class="js-chart" ... sortdata="on column avg desc">
 - OR -
<div class="js-chart" ... sortdata="on column average descending">
```

The next **sort statement** sorts the data based on the **row key** (vertically) - meaning the data value is treated as a `string` value.

```
<div class="js-chart" ... sortdata="on row key desc">
 - OR -
<div class="js-chart" ... sortdata="on row key descending">
```

## 🚫 limitdata

The `limitdata` attribute allows you to limit the number of data points that will be rendered on a chart.

By default, no hard limit is set on the number of data points that can be rendered on a chart.

> 💡 The `limitdata` attribute is currently only supported by **candlestick** and **open-high-low-close** charts.

The `limitdata` attribute only accepts **positive whole numbers**.

## 🔲 showborder

You can show or hide the chart's outside border using the `showborder` attribute.

> 💡 The `showborder` attribute is only affective when the **js-chart-border** *style directive* specifies a ***visible*** border.

The `showborder` attribute accepts the following values.

 - **off** - Hide the outside border of the chart.
 - **on** - Show the outside border of the chart.
 - **auto** - The **auto** keyword leaves it up to the chart to decide whether to display, or hide, the outside border of the chart.

The default behaviour is to show the outside border of the chart.

## 🏷️ showlabels

The `showlabels` attribute controls whether data labels should be rendered on the chart. Data labels are rendered in close proximity to the data points on the chart. Whether the data point name and/or value is displayed on the data label is determined by the chart type.

The default behaviour whether to show or hide data labels depends on the chart type.

The `showlabels` attribute supports the following options:

 - **off** - Do not show data labels on the chart.
 - **on** - Show data labels on the chart.
 - **auto** - The chart will decide whether to show or hide data labels.
 - **absolute** - Force the chart to display data labels containing absolute values, e.g. **14.95** or **100**.
 - **relative** - Force the chart to display data labels containing relative values, e.g. **45%** or **12.93%**. If it is not possible to display relative values, absolute values will be displayed instead.

## 📘 showlegend

The `showlegend` attribute specifies whether the chart's legend should be rendered, and where the legend should be rendered.

The default behaviour is to show the chart's legend. The default placement of the legend is determined by the chart type.

The `showlegend` attribute accepts the following options:

 - **off** - Hide the legend.
 - **on** - Show the legend. The chart type determines the placement of the legend.
 - **auto** - Same as **on**. Show the legend. The chart type determines the placement of the legend.
 - **side** - Show the legend. The legend will be rendered to the side of the chart.
 - **bottom** - Show the legend. The legend will be rendered at the bottom the chart.

## 🎮 showcontrols

The `showcontrols` attribute allows you to hide the chart's control buttons. Control buttons are used to:

 - Print the chart.
 - Open the chart's options menu.

The default behaviour is to show both control buttons on the chart's container.

The `showcontrols` attribute accepts the following options:

 - **off** - Hide all control buttons on the chart.
 - **on** - Show both control buttons on the chart's container.
 - **auto** - The chart type determines whether to display the control buttons, and which buttons to display.
 - **print_only** - Show the print control button, but hide the options menu control button.

## 🗂️ showdatatable

The `showdatatable` attribute controls whether the chart's data table is rendered or not. The data table contains the raw data that is visualized in the chart.

The data table will automatically be rendered with scrollbars if the data table is too tall for the data table container.

The default behaviour is to hide the data table.

The `showdatatable` attribute accepts the following options:

 - **off** - Do not render the data table.
 - **on** - Render the data table. The format of the data is determined by the chart type.
 - **auto** - Same as **on**. Render the data table. The format of the data is determined by the chart type.
 - **table** - Force the chart to render the data table.
 - **csv** - Instead of a data table, force the chart to render the raw data in CSV (comma-separated-values) format.

## #️⃣ showgridlines

The `showgridlines` attribute allows you to hide or show horizontal and vertical gridlines on the chart display area. Gridlines are automatically matched up to the horizontal and vertical chart scales (or other markers in case of non-categorical data).

> 💡 Only applies to the following charts:<br>- bar charts<br>- box plots<br>- column charts<br>- lollipop charts<br>- histograms<br>- span charts<br>- funnel charts<br>- waterfall charts<br>- scatter and bubble charts<br>- line charts<br>- population pyramids<br>- stock charts

> ⚠️ Warning: Depending on the **available space** and the **proximity** of the different gridlines on the chart, the browser may not render all gridlines. There is currently an open ticket to resolve this issue.

By default, gridlines are currently not being rendered on charts because of the above issue.

The `showgridlines` attribute accepts the following options:

 - **of** - Do not render gridlines.
 - **on** - Render gridlines on the chart.
 - **auto** - The chart type determines whether gridlines are render on the chart.

## ➖ showzeroline

The `showzeroline` attribute allows you to show or hide the zero axis lines on a chart.

Zero axis lines are shown on the chart by default.

The `showzeroline` attribute accepts the following options:

 - **off** - Hide the zero axis lines on the chart.
 - **on** - Show the zero axis lines on the chart.
 - **auto** - The chart type determines whether to show or hide the zero axis lines on the chart.

## 📈 showlines

The `showlines` attribute allowss you to show or hide the lines on the chart.

> 💡 Only applies to the following charts:<br>- lollipop charts<br>- parallel coordinates plots<br>- line charts

By default, lines are rendered on the chart.

The `showlines` attribute accepts the following options:

 - **off** - Hide lines on the chart.
 - **on** - Render lines on the chart.
 - **auto** - The chart type determines whether lines are rendered or not.

## 🐱 showwhiskers

The `showwhiskers` attribute allows you to show or hide the whiskers on a box plot (box-and-whiskers plot).

> 💡 Only applies to the following charts:<br>- box-and-whisker plot (box plot)

By default, whiskers are rendered on the chart.

The `showwhiskers` attribute accepts the following options:

 - **off** - Hide whiskers on the chart.
 - **on** - Render whiskers on the chart.
 - **auto** - The chart type determines whether whiskers are rendered or not.

## ➖ showmedians

The `showmedians` attribute allows you to show or hide the median lines on a box plot (box-and-whiskers plot).

The median on a box plot is represented by a line inside the box and shows the middle value of the data when it’s ordered from lowest to highest.

> 💡 Only applies to the following charts:<br>- box-and-whisker plot (box plot)

By default, median lines are rendered on the chart.

The `showmedians` attribute accepts the following options:

 - **off** - Hide median lines on the chart.
 - **on** - Render median lines on the chart.
 - **auto** - The chart type determines whether median lines are rendered or not.

## 📍 showmarkers

The `showmarkers` attribute allows you to show or hide markers on the chart.

A marker on a chart is a symbol—often a dot or shape—that represents an individual data point at a specific position on the graph.

> 💡 Only applies to the following charts:<br>- line charts<br>- parallel coordinates plots

The `showmedians` attribute accepts the following options:

 - **off** - Hide median lines on the chart.
 - **on** - Render median lines on the chart.
 - **auto** - The chart type determines whether median lines are rendered or not.

You can change the chart markers using the **markertype** attribute.

## 🔵 markertype

The `markertype` attribute allows you to change the markers that are rendered on the chart.

> 💡 Only applies to the following charts:<br>- scatter charts<br>- bubble charts<br>- line charts

The default marker type is a **small circle**. The color of the marker is determined by the chart's color palette.

The `markertype` attribute accepts the following options:

 - **circle** - Renders the chart marker as a circle
 - **dot** - Renders the chart marker as a dot
 - **square** - Renders the chart marker as a circle
 - **triangle** - Renders the chart marker as a triangle
 - **bubble** - Renders the chart marker as a bubble
 - **emoji** - Renders the charts marker as an emoji (see below).

Markers can further be customized by using the **js-marker-*** style directives.

 - **js-marker-width** - Set the width of the marker, e.g. **8px**.
 - **js-marker-height** - Set the height of the marker, e.g. **8px**.
 - **js-marker-border** - Set the border of the marker, e.g. **1px solid black** renders a solid black border around the marker, or **none** to render no border around the marker.
 - **js-marker-border-radius** - Set a border radius for the marker. This is most effective for **square** mrker types.
 - **js-marker-box-shadow** - Set the box-shadow effect around the marker, e.g. **3px 3px 5px #333333**.
 - **js-marker-opacity** - Set the opcity of the marker, e.g. **1.0** renderd the marker fully opaque, or **0.5** renders the marker 50% opaque.

 ### Emojis

***Supported by scatter charts only***: You can set emojis to use as markers on the chart.

> 💡 To use **emojis** as markers, set the:<br>- chart attribute **markertype** to **emoji**<br>- style directive **js-marker-emoji** to an emoji unique identifier in **Unicode code point notation** (*see below*).

The **js-marker-emoji** style directive sets a list of emojis to be used as chart markers. Emojis defined in the list are assigned to represent each data set in a round robin rotation. Use a **comma character as separator** for multiple data sets.

Each emoji in the list is specified in **Unicode code point notation**.

**Unicode code point notation** is how Unicode characters are referenced in technical documentation and represents an emoji (or any Unicode character) by specifying its unique code point in the Unicode standard. The code point is defined by the characters **U+** followed by a hexadecimal code. The **U+** characters indicates that you are defining a Unicode character.

The example below defines a single 😂 **Face with tears of joy** emoji.

```
<div class="js-marker-emoji">U+1F602</div>
```

The example below defines three emojis to be used on a chart: 🐛 **bug** , 🎀 **ribbon** and 💪 **strong arm**.

```
<div class="js-marker-emoji">U+1F41B, U+1F380, U+1F4AA</div>
```

> 💡 Refer to the [📚 Emoji on Wikipedia](https://en.wikipedia.org/wiki/Emoji) page for a list of emojis to use as markers on the chart.

## 🧩 showalg

The `showalg` attribute allows you to change the tiling algorithm used by a **treemap** chart.

A treemap is a chart that displays hierarchical data as a set of nested rectangles, where the size and color of each block represent different attributes of the data.

By default, a chart will decide what is the best tiling algorithm to use.

You can override the default tiling algorithm with one of the below options.

 - **auto** - Let the chart decide how best to render the data.
 - **landscape quad** - Favours chart containers that are more wide than tall. Renders input data as blocks with a low aspect ratio on the chart.
 - **landscape pivot** - Favours chart containers that are more wide than tall. Renders input data as blocks with a low aspect ratio on the chart.
 - **landscape snake** - Favours containers that are more wide than tall. Renders input data as tall blocks on the chart.
 - **portrait quad** - Favours containers that are more tall than wide. Renders input data as blocks with a low aspect ratio on the chart.
 - **portrait pivot** - Favours containers that are more tall than wide. Renders input data as blocks with a low aspect ratio on the chart.
 - **portrait snke** - Favours containers that are more tall than wide. Renders input data as wide blocks on the chart.

Refer to the [[🧩 Tiling Algorithm]] page for more details on the different tiling options.

## 📲 showwidget

The `showwidget` attribute allows you to render a minimalist version of the chart.

The default behaviour is to render a full non-widget version of the chart.

The following elements are removed if the chart is being rendered as a widget:

 - No **chart title** is rendered. Make sure to label the widget yourself.
 - No **chart legend** is rendered.
 - No **control buttons** are rendered.
 - No **data table** is rendered.

> 💡 You can use the following style directives to reduce the size and weight of the font used on the **widget**.<br>- js-chart-font-size<br>- js-chart-font-weight<br><br>You can use the following style directives to reduce the size and weight of the font used on the **data labels**:<br>- js-datalabel-font-size<br>- js-datalabel-font-weight

It may also be a good idea to set the **showlabels** attribute to **off** when rendering a **widget**.

> 💡 You can use the following style directives to reduce the size and weight of the font used on the **data labels**.<br>- js-datalabel-font-size<br>- js-datalabel-font-weight