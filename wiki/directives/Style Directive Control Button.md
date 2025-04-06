# 🖱️ js-control-button-* Style Directives

The `js-control-button-*` style directives are used to customize the control buttons on a chart.

The control buttons allows the end-user to:

 - 🖨️ Send the chart to the printer.
 - 🎮 Open the options menu.

> 💡 The visibility of the control buttons on a chart can be controlled using the `showcontrols` chart attribute. Refer to the [[Chart Attributes]] page for detailed information about the `showcontrols` chart attribute.

## 📚 Table of Contents
 - [🔤 js-control-button-font-family](#-js-control-button-font-family)
 - [🅰️ js-control-button-font-size](#🅰️-js-control-button-font-size)
 - [🅱️ js-control-button-font-weight](#🅱️-js-control-button-font-weight)
 - [🎨 js-control-button-bg-color](#-js-control-button-bg-color)
 - [🎨 js-control-button-text-color](#-js-control-button-text-color)
 - [🔲 js-control-button-border](#-js-control-button-border)
 - [⤵️ js-control-button-border-radius](#️-js-control-button-border-radius)
 - [⬛ js-control-button-box-shadow](#-js-control-button-box-shadow)
 - [⬜ js-control-button-opacity](#-js-control-button-opacity)

## 🔤 js-control-button-font-family

The `js-control-button-font-family` style directive specifies a prioritized list of one or more font family names and/or generic family names to be used on a chart's control buttons.

The example below sets a list of font family names to be on a chart's control buttons.

```
<div class="js-control-button-font-family">Arial, sans-serif</div>
```

The default font family for the chart style directive is `"Open Sans", sans-serif`.

## 🅰️ js-control-button-font-size

The `js-control-button-font-size` style directive sets the size of the `js-control-button-font-family` directive. A positive length value or positive percentage value can be specified for this style directive.

**Length value**: For most font-relative units (such as em and ex), the font size is relative to the parent element's font size. For font-relative units that are root-based (such as rem), the font size is relative to the size of the font used by the <html> (root) element.

```
<div class="js-control-button-font-size">12px</div>
```

**Percentage value**: A positive percentage value, relative to the parent element's font size.

```
<div class="js-control-button-font-size">80%</div>
```

The default value of the `js-control-button-font-size` directive is **10px**.

## 🅱️ js-control-button-font-weight

The `js-control-button-font-weight` style directive sets the weight (or boldness) of the `js-control-button-font-family` directive. The weights available depend on the font-family that is currently set. Typically, the font weight is specified as a number value between 1 and 1000, both values included. Higher numbers represent weights that are bolder than (or as bold as) lower numbers.

```
<div class="js-control-button-font-weight">600</div>
```

The default value of the `js-control-button-font-weight` directive is **300**.

## 🎨 js-control-button-bg-color

The `js-control-button-bg-color` style directive sets the background color of the chart's control buttons.

By default, a chart's style template sets the value of the `js-control-button-bg-color` directive. For example:

 - The `default` style template assigns a background color of `#3E5879` to the control buttons.
 - The `darkweb` style template assigns a background color of `#606060` to the control buttons.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

## 🎨 js-control-button-text-color

The `js-control-button-text-color` style directive sets the foreground color value of text and text decorations on a chart's control buttons.

By default, a chart's style template sets the value of the `js-control-button-text-color` directive. For example:

 - The `default` style template assigns a foreground color of `White` to the control buttons.
 - The `darkweb` style template assigns a foreground color of `#eeeeee` to the control buttons.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

## 🔲 js-control-button-border

The `js-control-button-border` style directive sets the border around a chart's control buttons.

The style directive is specified as border width, style, and color values, for example:

```
<div class="js-control-button-border">0.5px solid #333333</div>
```

You can also hide the border completely.

```
<div class="js-control-button-border">none</div>
```

By default, a chart's style template sets the value of the `js-control-button-border` directive. For example:

 - The `default` style template assigns a border value of `0.5px solid #dddddd` to the control buttons.
 - The `darkweb` style template assigns a foreground color of `0.5px solid #555555` to the control buttons.

## ⤵️ js-control-button-border-radius

The `js-control-button-border-radius` style directive rounds the corners of the control buttons on a chart.

You can set a **single radius** to make *circular* corners, or **two radii** to make *elliptical* corners.

The border-radius style directive is specified as **one**, **two**, **three**, or **four** length or percentage values (this is used to set a single radius for the corners), *optionally* followed by `/` and **one**, **two**, **three**, or **four** length or percentage values (this is used to set an additional radius, so you can have elliptical corners).

By default, a chart's style template sets the value of the `js-control-button-border` directive. For example:

 - The `default` style template assigns a border radius value of `0px 5px 5px 0px` to a chart's control buttons.
 - The `darkweb` style template assigns a border radius value of `0px 5px 5px 0px` to a chart's control buttons.

The example below creates control buttons with:

 - ↖️ Square top left corner (i.e. a radius of **0px**).
 - ↗️ Rounded top right corner with a radius of **10px**.
 - ↘️ Square bottom right corner (i.e. a radius of **0px**).
 - ↙️ Rounded bottom left corner with a radius of **20px**.

```
<div class="js-control-button-border-radius">0px 10px 0px 20px</div>
```

The `js-control-button-border-radius` style directive accepts any CSS **border-radius** property as defined by the **World Wide Web Consortium** (**W3C**): [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds/#border-radius).

> 💡 The [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) page on the **Mozilla Developer Network** provides futher reading and great examples.

## ⬛ js-control-button-box-shadow

The `js-control-button-box-shadow` style directive adds shadow effects around the outer area frame of a chart's control buttons.

You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

```
<div class="js-control-button-box-shadow">12px 12px 2px 1px rgba(0, 0, 255, .2)</div>
```

By default, no box-shadow effect is applied to the chart’s control buttons.

To force *no shadow effects* around a chart's control buttons, use the ***none*** keyword as demonstrated below.

```
<div class="js-control-button-box-shadow">none</div>
```

## ⬜ js-control-button-opacity

The `js-control-button-opacity` style directive is used to set the opacity of a chart's control buttons.

Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

By default, control buttons are rendered fully opaque on a chart.

Opacity is specified as a number in the range 0.0 to 1.0, inclusive, or a <percentage> in the range 0% to 100%, inclusive, representing the opacity of the channel (that is, the value of its alpha channel). Any value outside the interval, though valid, is clamped to the nearest limit in the range.

In the example below, two methods are presented to set a chart's controls buttons fully opaque.

```
<div class="js-control-button-opacity">1.0</div>
<div class="js-control-button-opacity">100%</div>
```

The following example demonstrates two methods of of rendering a chart's control buttons 50% transparent.

```
<div class="js-control-button-opacity">0.5</div>
<div class="js-control-button-opacity">50%</div>
```