# 🗂️ js-datatable-* Style Directives

The `js-datatable-*` style directives are used to customize the look of a chart's data table (if visible).

The data table on a chart contains the raw data that is visualised in the chart.

The visibility of the data table is controlled with the `showdatatable` chart attribute. Refer to the [[Chart Attributes]] page for a detailed description of the `showdatatable` attribute.

```
<div class="js-chart" ... showdatatble="on">
```

The data table is displayed in the data table area, located at the bottom of the chart container.

If the data table exceeds the data table area, scrollbars will automatically be added to the data table area.

## 📚 Table of Contents

 - [↕️ js-datatable-height](#️-js-datatable-height)
 - [↔️ js-datatable-width](#️-js-datatable-width)
 - [🔤 js-datatable-font-family](#-js-datatable-font-family)
 - [🅰️ js-datatable-font-size](#🅰️-js-datatable-font-size)
 - [🅱️ js-datatable-font-weight](#🅱️-js-datatable-font-weight)
 - [🎨 js-datatable-bg-color](#-js-datatable-bg-color)
 - [🎨 js-datatable-text-color](#-js-datatable-text-color)
 - [🔲 js-datatable-border](#-js-datatable-border)
 - [⤵️ js-datatable-border-radius](#️-js-datatable-border-radius)
 - [⬛ js-datatable-box-shadow](#-js-datatable-box-shadow)
 - [⬜ js-datatable-scrollbar-color](#️-js-datatable-scrollbar-color)

## ↕️ js-datatable-height

The `js-datatable-height` style directive defines the height of the data table within the chart container.

When specifying the `js-datatable-height` directive, include an **unit of measure**, e.g. **500px** or **370pt**. Alternatively, you can also specify a **relative length unit**, e.g. **100%** or **20em**.

The `js-datatable-height` directive cannot exceed to total height of the chart's container.

The default height of the data table area is **60px**.

The following example defines a data table area that is 40px tall.

```
<div class="js-datatable-height">40px</div>
```

## 🔤 js-datatable-font-family

The `js-datatable-font-family` style directive specifies a prioritized list of one or more font family names and/or generic family names to be used on a chart's data table.

The example below sets a list of font family names to be used to render a chart's data table.

```
<div class="js-datatable-font-family">Arial, sans-serif</div>
```

The default font family for the `js-datatable-font-family` style directive is `"Open Sans", sans-serif`.

## 🅰️ js-datatable-font-size

The `js-datatable-font-size` style directive sets the size of the `js-datatable-font-family` directive. A positive length value or positive percentage value can be specified for this style directive.

**Length value**: For most font-relative units (such as em and ex), the font size is relative to the parent element's font size. For font-relative units that are root-based (such as rem), the font size is relative to the size of the font used by the <html> (root) element.

```
<div class="js-datatable-font-size">12px</div>
```

**Percentage value**: A positive percentage value, relative to the parent element's font size.

```
<div class="js-datatable-font-size">80%</div>
```

The default value of the `js-datatable-font-size` directive is **10px**.

## 🅱️ js-datatable-font-weight

The `js-datatable-font-weight` style directive sets the weight (or boldness) of the `js-datatable-font-family` directive. The weights available depend on the font-family that is currently set. Typically, the font weight is specified as a number value between 1 and 1000, both values included. Higher numbers represent weights that are bolder than (or as bold as) lower numbers.

```
<div class="js-datatable-font-weight">600</div>
```

The default value of the `js-datatable-font-weight` directive is **200**.

## 🎨 js-datatable-bg-color

The `js-datatable-bg-color` style directive sets the background color of the chart's data table.

By default, a chart's style template sets the value of the `js-datatable-bg-color` directive. For example:

 - The `default` style template assigns a background color of `transparent` to the data table.
 - The `darkweb` style template assigns a background color of `#777777` to the data table.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

## 🎨 js-datatable-text-color

The `js-datatable-text-color` style directive sets the foreground color value of text and text decorations on a chart's data table.

By default, a chart's style template sets the value of the `js-datatable-text-color` directive. For example:

 - The `default` style template assigns a foreground color of `#000000` to the data table.
 - The `darkweb` style template assigns a foreground color of `#eeeeee` to the data table.


Refer to the [[Color]] page for detailed instructions on how to define on a chart.

## 🔲 js-datatable-border

The `js-datatable-border` style directive sets the border around a chart's data table.

The style directive is specified as border width, style, and color values, for example:

```
<div class="js-datatable-border">0.5px solid #333333</div>
```

You can also hide the border completely.

```
<div class="js-datatable-border">none</div>
```

By default, no border is rendered around a chart's data table.

## ⤵️ js-datatable-border-radius

The `js-datatable-border-radius` style directive rounds the corners of the data table on a chart.

You can set a **single radius** to make *circular* corners, or **two radii** to make *elliptical* corners.

The border-radius style directive is specified as **one**, **two**, **three**, or **four** length or percentage values (this is used to set a single radius for the corners), *optionally* followed by `/` and **one**, **two**, **three**, or **four** length or percentage values (this is used to set an additional radius, so you can have elliptical corners).

By default, a chart's data table is rendered with rounded corder with a radius of **5px**.

The example below creates a data table with:

 - ↖️ Square top left corner (i.e. a radius of **0px**).
 - ↗️ Rounded top right corner with a radius of **10px**.
 - ↘️ Square bottom right corner (i.e. a radius of **0px**).
 - ↙️ Rounded bottom left corner with a radius of **20px**.

```
<div class="js-datatable-border-radius">0px 10px 0px 20px</div>
```

The `js-datatable-border-radius` style directive accepts any CSS **border-radius** property as defined by the **World Wide Web Consortium** (**W3C**): [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds/#border-radius).

> 💡 The [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) page on the **Mozilla Developer Network** provides futher reading and great examples.

## ⬛ js-datatable-box-shadow

The `js-datatable-box-shadow` style directive adds shadow effects around the outer area frame of a chart's data table.

You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

```
<div class="js-datatable-box-shadow">12px 12px 2px 1px rgba(0, 0, 255, .2)</div>
```

By default, no box-shadow effect is applied to the chart’s data table.

To force *no shadow effects* around a chart's data table, use the ***none*** keyword as demonstrated below.

```
<div class="js-datatable-box-shadow">none</div>
```

## 🖱️ js-datatable-scrollbar-color

The `js-datatable-scrollbar-color` style directive sets the color of the data table scrollbar’s track and thumb.

This directive will only be triggered when the chart data table area is bigger than the data table container.

 - The **track** refers to the background of the scrollbar, which is generally fixed regardless of the scrolling position.
 - The **thumb** refers to the moving part of the scrollbar, which usually floats on top of the track.

By default, a chart's style template sets the value of the `js-datatable-scrollbar-color` directive. For example:

 - The `default` style template assigns a scrollbar color of `SteelBlue White` to the data table.
 - The `darkweb` style template assigns a foreground color of `#666666 White` to the data table.

The below example defines a scrollbar with:

- The **track** color of the scrollbar set to `SteelBlue`.
- The **thumb** color of the scrollbar set to `CadetBlue`.

```
<div class="js-datatable-scrollbar-color">SteelBlue CadetBlue</div>
```