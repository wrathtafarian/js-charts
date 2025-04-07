# 📏 js-value-bar-* Style Directives

The `js-value-bar-*` style directives let you customize the look of a chart's value bars.

Value bar elements refer to block-shaped elements that represent data or data points on a chart.

## 📚 Table of Contents

 - [🔲 js-value-bar-border](#-js-value-bar-border)
 - [⤵️ js-value-bar-border-radius](#️-js-value-bar-border-radius)
 - [⬛ js-value-bar-box-shadow](#-js-value-bar-box-shadow)
 - [⬜ js-value-bar-opacity](#-js-value-bar-opacity)
 - [↕️ js-value-bar-min-height](#️-js-value-bar-min-height)
 - [↔️ js-value-bar-min-width](#️-js-value-bar-min-width)
 - [🟦 js-value-bar-series-margin](#-js-value-bar-series-margin)
 - [⬜ js-value-bar-data-margin](#-js-value-bar-data-margin)
 - [👆 js-value-bar-hover-bg-color](#-js-value-bar-hover-bg-color)

## 🔲 js-value-bar-border

The `js-value-bar-border` style directive sets the border around a chart's value bars.

The style directive is specified as border width, style, and color values, for example:

```
<div class="js-value-bar-border">0.5px solid #333333</div>
```

You can also hide the border completely.

```
<div class="js-value-bar-border">none</div>
```

By default, no border will be rendered around a charts value bars.

## ⤵️ js-value-bar-border-radius

The `js-value-bar-border-radius` style directive rounds the corners of a chart's value bars.

You can set a **single radius** to make *circular* corners, or **two radii** to make *elliptical* corners.

The border-radius style directive is specified as **one**, **two**, **three**, or **four** length or percentage values (this is used to set a single radius for the corners), *optionally* followed by `/` and **one**, **two**, **three**, or **four** length or percentage values (this is used to set an additional radius, so you can have elliptical corners).

By default, the value bars on a chart will be rendered with square corners.

The example below creates a value bars on a chart with:

 - ↖️ Square top left corner (i.e. a radius of **0px**).
 - ↗️ Rounded top right corner with a radius of **10px**.
 - ↘️ Square bottom right corner (i.e. a radius of **0px**).
 - ↙️ Rounded bottom left corner with a radius of **20px**.

```
<div class="js-value-bar-border-radius">0px 10px 0px 20px</div>
```

The `js-value-bar-border-radius` style directive accepts any CSS **border-radius** property as defined by the **World Wide Web Consortium** (**W3C**): [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds/#border-radius).

> 💡 The [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) page on the **Mozilla Developer Network** provides futher reading and great examples.

## ⬛ js-value-bar-box-shadow

The `js-value-bar-box-shadow` style directive adds shadow effects around the outer area frame of a chart's value bars.

You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

```
<div class="js-value-bar-box-shadow">12px 12px 2px 1px rgba(0, 0, 255, .2)</div>
```

By default, no box-shadow effect is applied around the outer area frame of the value bars on a chart.

To force *no shadow effects* around a chart's value bars, use the ***none*** keyword as demonstrated below.

```
<div class="js-value-bar-box-shadow">none</div>
```

## ⬜ js-value-bar-opacity

The `js-value-bar-opacity` style directive is used to set the opacity of a chart's value bars.

Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

By default, a chart's value bars are rendered fully opaque.

Opacity is specified as a number in the range 0.0 to 1.0, inclusive, or a <percentage> in the range 0% to 100%, inclusive, representing the opacity of the channel (that is, the value of its alpha channel). Any value outside the interval, though valid, is clamped to the nearest limit in the range.

In the example below, two methods are presented to render a chart's value bars fully opaque.

```
<div class="js-value-bar-opacity">1.0</div>
<div class="js-value-bar-opacity">100%</div>
```

The following example demonstrates two methods of of rendering a chart's value bars 50% transparent.

```
<div class="js-value-bar-opacity">0.5</div>
<div class="js-value-bar-opacity">50%</div>
```

## ↕️ js-value-bar-min-height

The `js-value-bar-min-height` style directive lets you set the minimum height for value bar elements on a chart.

When specifying the `js-value-bar-min-height` directive, include an **unit of measure**, e.g. **500px** or **370pt**. Alternatively, you can also specify a **relative length unit**, e.g. **100%** or **20em**.

Each value bar on a chart will be rendered to automatically fill the available space on the chart.

If a value bar is shorter than the height specified in this directive, it will automatically be extended to meet the specified minimum height.

By default, the `js-value-bar-min-height` style directive is set to **25px**.

The below example specifies **no minimum height** for the value bars on the chart.

```
<div class="js-value-bar-min-height">0px</div>
```

The below example specifies a minimum height of **10px** for value bars on a chart.

```
<div class="js-value-bar-min-height">10px</div>
```

## ↔️ js-value-bar-min-width

The `js-value-bar-min-width` style directive lets you set the minimum width for value bar elements on a chart.

When specifying the `js-value-bar-min-width` directive, include an **unit of measure**, e.g. **500px** or **370pt**. Alternatively, you can also specify a **relative length unit**, e.g. **100%** or **20em**.

Each value bar on a chart will be rendered to automatically fill the available space on the chart.

If a value bar is more narrow than the width specified in this directive, it will automatically be extended to meet the specified minimum width.

By default, the `js-value-bar-min-width` style directive is set to **25px**.

The below example specifies **no minimum width** for the value bars on the chart.

```
<div class="js-value-bar-min-width">0px</div>
```

The below example specifies a minimum width of **10px** for value bars on a chart.

```
<div class="js-value-bar-min-width">10px</div>
```

## 🟦 js-value-bar-series-margin

The `js-value-bar-series-margin` style directive lets you specify a gap between value bars on a chart from different data series.

This directive accepts a single value that specifies the gap between value bars on a chart from different data series.

The example below will render a chart with a `js-value-bar-series-margin` of **15px**.

```
<div class="js-value-bar-series-margin">15px</div>
```

By default, no gap is left open between value bars on a chart from different data series.

This directive will be **ignored** if there is only one data series specified in the chart's input data.

## ⬜ js-value-bar-data-margin

The `js-value-bar-data-margin` style directive lets you specify a gap between valu bars on a chart of the same data series.

This directive accepts a single value that specifies the gap between value bars on a chart from the same data series.

The example below will render a chart with a `js-value-data-margin-margin` of **5px**.

```
<div class="js-value-bar-data-margin">5px</div>
```

By default, no gap is left open between value bars on a chart from the same data series.

## 👆 js-value-bar-hover-bg-color

The `js-value-bar-hover-bg-color` style directive lets you set the background color of value bar’s parent container when a mouse cursor hovers over the value bar itself.

By default, a chart's style template sets the value of the `js-value-bar-hover-bg-color` directive. For example:

 - The `default` style template assigns a hover background color of `#ffffe6`.
 - The `darkweb` style template assigns a hover background color of `#666666`.

The example below assigns a light red color and **50% opacity** to the `js-value-bar-hover-bg-color` style directive.

```
<div class="js-value-bar-hover-bg-color">hsl(0, 100%, 80%, 50%)</div>
```

The example below assigns a dark purple color to the `js-value-bar-hover-bg-color` style directive.

```
<div class="js-value-bar-hover-bg-color">#660066</div>
```
Refer to the [[Color]] page for detailed instructions on how to define on a chart.