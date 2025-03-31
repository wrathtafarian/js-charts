# 📊 js-chart-* Style Directives

The `js-chart-*` style directives are used to apply the default style elements across the chart. Default style directives can be set for the following elements.

 - [🔤 js-chart-font-family](#-js-chart-font-family)
 - [🅰️ js-chart-font-size](#🅰️-js-chart-font-size)
 - [🅱️ js-chart-font-weight](#🅱️-js-chart-font-weight)
 - [🎨 js-chart-bg-color](#-js-chart-bg-color)
 - [🎨 js-chart-text-color](#-js-chart-text-color)
 - [🔲 js-chart-border](#-js-chart-border)
 - [⤵️ js-chart-border-radius](#️-js-chart-border-radius)
 - [⬛ js-chart-box-shadow](#-js-chart-box-shadow)

> 💡 Properties set by the **js-chart-*** style directives are inherited by all child elements.

## 🔤 js-chart-font-family

The `js-chart-font-family` property specifies a prioritized list of one or more font family names and/or generic family names to be used on a chart.

The example below sets a list of font family names to be used across a chart:

```
<div class="js-chart-font-family">Arial, sans-serif</div>
```

The default font family for the chart style directive is `"Open Sans", sans-serif`.

## 🅰️ js-chart-font-size

The `js-chart-font-size` property sets the size of the `js-chart-font-family` directive. A positive length value or positive percentage value can be specified for this property.

**Length value**: For most font-relative units (such as em and ex), the font size is relative to the parent element's font size. For font-relative units that are root-based (such as rem), the font size is relative to the size of the font used by the <html> (root) element.

```
<div class="js-chart-font-size">12px</div>
```

**Percentage value**: A positive percentage value, relative to the parent element's font size.

```
<div class="js-chart-font-size">80%</div>
```

The default value of the `js-chart-font-size` directive is **14px**.

## 🅱️ js-chart-font-weight

The `js-chart-font-weight` property sets the weight (or boldness) of the `js-chart-font-family` directive. The weights available depend on the font-family that is currently set. Typically, the font weight is specified as a number value between 1 and 1000, both values included. Higher numbers represent weights that are bolder than (or as bold as) lower numbers.

```
<div class="js-chart-font-weight">600</div>
```

The default value of the `js-chart-font-weight` directive is **200**.

## 🎨 js-chart-bg-color

The `js-chart-bg-color` property sets the background color of the chart's container.

By default, a chart's style template sets the value of the `js-chart-bg-color` directive.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

## 🎨 js-chart-text-color

The `js-chart-text-color` property sets the foreground color value of a chart’s text and text decorations.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

## 🔲 js-chart-border

The `js-chart-border` property sets a chart’s border.

The property is specified as border width, style, and color values, for example:

```
<div class="js-chart-border">0.5px solid #333333</div>
```

You can also hide the border completely.

```
<div class="js-chart-border">none</div>
```

> 💡 If you hide the border using this property, the **showborder** chart attribute will have no effect.

By default, a chart will be rendered with a very light grey (`#eeeeee`) solid border that is 0.5px wide.

## ⤵️ js-chart-border-radius

The `js-chart-border-radius` property rounds the corners of an chart's outer border edge.

You can set a **single radius** to make *circular* corners, or **two radii** to make *elliptical* corners.

The border-radius property is specified as **one**, **two**, **three**, or **four** length or percentage values (this is used to set a single radius for the corners), *optionally* followed by `/` and **one**, **two**, **three**, or **four** length or percentage values (this is used to set an additional radius, so you can have elliptical corners).

By default, a chart will be rendered with rounded corners with a radius of **10px**.

The example below creates a chart with rounder corners that have a radius of 30px.

```
<div class="js-chart-border-radius">30px</div>
```

The following example creates a chart with a:

 - ↖️ top left corner of **20px**,
 - ↗️ top right corner of **30px**,
 - ↘️ bottom right corner of **40px** and
 - ↙️ bottom left corner of **50px**.

```
<div clss="js-chart-border-radius">20px 30px 40px 50px</div>
```

The `js-chart-border-radius` style directive accepts any CSS **border-radius** property as defined by the **World Wide Web Consortium** (**W3C**): [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds/#border-radius).

> 💡 The [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) page on the **Mozilla Developer Network** provides futher reading and great examples.

## ⬛ js-chart-box-shadow

The `js-chart-box-shadow` style directive adds shadow effects around a chart’s outer area frames.

You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

```
<div class="js-chart-box-shadow">12px 12px 2px 1px rgba(0, 0, 255, .2)</div>
```

By default, no box-shadow effect is applied to the chart’s outer container.

To force *no shadow effects* around a chart's outer area frame, use the ***none*** keyword as demonstrated below.

```
<div class="js-chart-box-shadow">none</div>
```