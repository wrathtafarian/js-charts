# 🏷️ js-datalabel-* Style Directives

The `js-datalabel-*` style directives are used to customize the look of data labels on a chart.

When enabled, data labels are rendered in close proximity to the corresponding data point on a chart.

The visibility of data labels on a chart is controlled by the `showlabels` chart attribute.

```
<div class="js-chart" ... showlabels="on">
```

Refer to the [[Chart Attributes]] page for a detailed description of the `showlabels` chart attribute.

## ➡️ js-datalabel-append

The `js-datalabel-append` style directive allows you automatically append pre-defined text to each data label on a chart.

The `js-datalabel-append` directive is useful for appending symbols to the data label, e.g. a currency symbol.

The example below will automatically append the Dollar symbol (`$`) to each data label on a chart.

```
<div class="js-datalabel-append">$</div>
```

If the `js-datalabel-append` style directive is omitted, no value will automatically be appended to each data label on the chart.

## ⬅️ js-datalabel-prepend

The `js-datalabel-prepend` style directive allows you automatically prepend pre-defined text to each data label on a chart.

The `js-datalabel-prepend` directive is useful for prepending symbols to the data label, e.g. an unit of measure such as `km/h`.

The example below will automatically prepend the centimeter (`cm`) to each data label on a chart.

```
<div class="js-datalabel-prepend">cm</div>
```

If the `js-datalabel-prepend` style directive is omitted, no value will automatically be prepended to each data label on the chart.

## ↔️ js-datalabel-width

The `js-datalabel-width` style directives sets the width of the data labels on a chart.

Include an **unit of measure** when specifying the `width` attribute, e.g. **800px** or **400pt**. Alternatively, you can also specify a **relative length unit**, e.g. **100%** or **20em**.

The default value for the `js-datalabel-width` style directive is **30px**.

The example below will render data labels with a width of **100px**.

```
<div class="js-datalabel-width">100px</div>
```

## ↕️ js-datalabel-height

The `js-datalabel-height` style directives sets the height of the data labels on a chart.

Include an **unit of measure** when specifying the `height` attribute, e.g. **500px** or **370pt**. Alternatively, you can also specify a **relative length unit**, e.g. **100%** or **20em**.

The default value for the `js-datalabel-height` style directive is **15px**.

The example below will render data labels with a height of **60px**.

```
<div class="js-datalabel-height">60px</div>
```

## 🔤 js-datalabel-font-family

The `js-datalabel-font-family` style directive specifies a prioritized list of one or more font family names and/or generic family names to be used on a chart's data labels.

The example below sets a list of font family names to be used on a chart's data labels.

```
<div class="js-datalabel-font-family">Arial, sans-serif</div>
```

The default font family for the chart style directive is `"Open Sans", sans-serif`.

## 🅰️ js-datalabel-font-size

The `js-datalabel-font-size` style directive sets the size of the `js-datalabel-font-family` directive. A positive length value or positive percentage value can be specified for this style directive.

**Length value**: For most font-relative units (such as em and ex), the font size is relative to the parent element's font size. For font-relative units that are root-based (such as rem), the font size is relative to the size of the font used by the <html> (root) element.

```
<div class="js-datalabel-font-size">12px</div>
```

**Percentage value**: A positive percentage value, relative to the parent element's font size.

```
<div class="js-datalabel-font-size">80%</div>
```

The default value of the `js-datalabel-font-size` directive is **10px**.

## 🅱️ js-datalabel-font-weight

The `js-datalabel-font-weight` style directive sets the weight (or boldness) of the `js-datalabel-font-family` directive. The weights available depend on the font-family that is currently set. Typically, the font weight is specified as a number value between 1 and 1000, both values included. Higher numbers represent weights that are bolder than (or as bold as) lower numbers.

```
<div class="js-datalabel-font-weight">600</div>
```

The default value of the `js-datalabel-font-weight` directive is **200**.

## 🎨 js-datalabel-bg-color

The `js-datalabel-bg-color` style directive sets the background color of the chart's data labels.

By default, a chart's data labels are created **transparent**.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

The example below will render data labels with the background color set to `White`.

```
<div class="js-datalabel-bg-color">White</div>
```

The following example will render data labels with a crimson background that are only 70% opaque.

```
<div class="js-datalabel-bg-color">rgba(220, 20, 60, 0.7)</div>
```

## 🎨 js-datalabel-text-color

The `js-datalabel-text-color` style directive sets the foreground color value of text and text decorations on a chart's data lanels.

By default, a chart's style template sets the value of the `js-datalabel-text-color` directive. For example:

 - The `default` style template assigns a foreground color of `White` to the control buttons.
 - The `darkweb` style template assigns a foreground color of `Black` to the control buttons.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

The example below will render data labels with the foreground color set to `Lime`.

```
<div class="js-datalabel-text-color">Lime</div>
```

## 🔲 js-datalabel-border

The `js-datalabel-border` style directive sets the border around a chart's data labels.

The style directive is specified as border width, style, and color values, for example:

```
<div class="js-datalabel-border">0.5px solid #333333</div>
```

You can also hide the border completely.

```
<div class="js-datalabel-border">none</div>
```

By default, no border will be rendered around a chart's data labels.

The following example will render data labels with a dashed border that is 5px wide and SkyBlue in color.

```
<div class="js-datalabel-border">5px dashed SkyBlue</div>
```

## ⤵️ js-datalabel-border-radius

The `js-datalabel-border-radius` style directive rounds the corners of the data labels on a chart.

You can set a **single radius** to make *circular* corners, or **two radii** to make *elliptical* corners.

The border-radius style directive is specified as **one**, **two**, **three**, or **four** length or percentage values (this is used to set a single radius for the corners), *optionally* followed by `/` and **one**, **two**, **three**, or **four** length or percentage values (this is used to set an additional radius, so you can have elliptical corners).

By default, data labels are rendered with square (`0px 0px 0px 0px`) corners.

The example below creates control buttons with:

 - ↖️ Square top left corner (i.e. a radius of **0px**).
 - ↗️ Rounded top right corner with a radius of **10px**.
 - ↘️ Square bottom right corner (i.e. a radius of **0px**).
 - ↙️ Rounded bottom left corner with a radius of **20px**.

```
<div class="js-datalabel-border-radius">0px 10px 0px 20px</div>
```

You can create **oval** shaped data labels by:

 1. Set the data label width to a value larger than the height value.
 2. Set the border radius directive to **50%**.

```
<div class="js-datalabel-border-radius">50%</div>
```

This will attempt to create a circular data label, but because the width and height do not match, an *oval-shaped data label* is rendered.

The `js-datalabel-border-radius` style directive accepts any CSS **border-radius** property as defined by the **World Wide Web Consortium** (**W3C**): [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds/#border-radius).

> 💡 The [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) page on the **Mozilla Developer Network** provides futher reading and great examples.

## ⬛ js-datalabel-box-shadow

The `js-datalabel-box-shadow` style directive adds shadow effects around the outer area frame of a chart's data labels.

You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

```
<div class="js-datalabel-box-shadow">12px 12px 2px 1px rgba(0, 0, 255, .2)</div>
```

By default, no box-shadow effect is applied to the chart’s data labels.

To force *no shadow effects* around a chart's control buttons, use the ***none*** keyword as demonstrated below.

```
<div class="js-datalabel-box-shadow">none</div>
```

## ⬜ js-datalabel-opacity

The `js-datalabel-opacity` style directive is used to set the opacity of a chart's data labels.

Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

By default, data labels are rendered fully opaque on a chart.

Opacity is specified as a number in the range 0.0 to 1.0, inclusive, or a <percentage> in the range 0% to 100%, inclusive, representing the opacity of the channel (that is, the value of its alpha channel). Any value outside the interval, though valid, is clamped to the nearest limit in the range.

In the example below, two methods are presented to set a chart's controls buttons fully opaque.

```
<div class="js-datalabel-opacity">1.0</div>
<div class="js-datalabel-opacity">100%</div>
```

The following example demonstrates two methods of of rendering a chart's control buttons 50% transparent.

```
<div class="js-datalabel-opacity">0.5</div>
<div class="js-datalabel-opacity">50%</div>
```