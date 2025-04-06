# 📄 js-title-* Style Directives

The `js-title-*` style directives let you customize the look of a chart's title area.

## 📚 Table of Contents
 - [🔤 js-title-font-family](#-js-title-font-family)
 - [🅰️ js-title-font-size](#🅰️-js-title-font-size)
 - [🅱️ js-title-font-weight](#🅱️-js-title-font-weight)
 - [🎨 js-title-bg-color](#-js-title-bg-color)
 - [🎨 js-title-text-color](#-js-title-text-color)
 - [🔲 js-title-border](#-js-title-border)
 - [⤵️ js-title-border-radius](#️-js-title-border-radius)
 - [⬛ js-title-box-shadow](#-js-title-box-shadow)

## 🔤 js-title-font-family

The `js-title-font-family` style directive specifies a prioritized list of one or more font family names and/or generic family names to be used on a chart's title area.

The example below sets a list of font family names to be on a chart's control buttons.

```
<div class="js-title-font-family">Arial, sans-serif</div>
```

The default font family for the chart style directive is `"Open Sans", sans-serif`.

## 🅰️ js-title-font-size

The `js-title-font-size` style directive sets the size of the `js-title-font-family` directive. A positive length value or positive percentage value can be specified for this style directive.

**Length value**: For most font-relative units (such as em and ex), the font size is relative to the parent element's font size. For font-relative units that are root-based (such as rem), the font size is relative to the size of the font used by the <html> (root) element.

```
<div class="js-title-font-size">12px</div>
```

**Percentage value**: A positive percentage value, relative to the parent element's font size.

```
<div class="js-title-font-size">80%</div>
```

The default value of the `js-title-font-size` directive is **21px**.

## 🅱️ js-title-font-weight

The `js-title-font-weight` style directive sets the weight (or boldness) of the `js-title-font-family` directive. The weights available depend on the font-family that is currently set. Typically, the font weight is specified as a number value between 1 and 1000, both values included. Higher numbers represent weights that are bolder than (or as bold as) lower numbers.

```
<div class="js-title-font-weight">600</div>
```

The default value of the `js-title-font-weight` directive is **200**.

## 🎨 js-title-bg-color

The `js-title-bg-color` style directive sets the background color of the chart's title area.

By default, the `js-title-bg-color` style directive is `transparent`.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

## 🎨 js-title-text-color

The `js-title-text-color` style directive sets the foreground color value of text and text decorations on a chart's title area.

By default, a chart's style template sets the value of the `js-title-text-color` directive. For example:

 - The `default` style template assigns a foreground color of `#000000` to the control buttons.
 - The `darkweb` style template assigns a foreground color of `#eeeeee` to the control buttons.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

## 🔲 js-title-border

The `js-title-border` style directive sets the border around a chart's title area.

The style directive is specified as border width, style, and color values, for example:

```
<div class="js-title-border">0.5px solid #333333</div>
```

You can also hide the border completely.

```
<div class="js-title-border">none</div>
```

By default, no border is rendered around a chart's title area.

## ⤵️ js-title-border-radius

The `js-title-border-radius` style directive rounds the corners of a chart's title area.

You can set a **single radius** to make *circular* corners, or **two radii** to make *elliptical* corners.

The border-radius style directive is specified as **one**, **two**, **three**, or **four** length or percentage values (this is used to set a single radius for the corners), *optionally* followed by `/` and **one**, **two**, **three**, or **four** length or percentage values (this is used to set an additional radius, so you can have elliptical corners).

By default, a chart's style template sets the value of the `js-title-border` directive. For example:

 - The `default` style template assigns a border radius value of `10px 10px 0px 0px` to a chart's control buttons.
 - The `darkweb` style template assigns a border radius value of `10px 10px 0px 0px` to a chart's control buttons.

The example below creates a chart title area with:

 - ↖️ Square top left corner (i.e. a radius of **0px**).
 - ↗️ Rounded top right corner with a radius of **10px**.
 - ↘️ Square bottom right corner (i.e. a radius of **0px**).
 - ↙️ Rounded bottom left corner with a radius of **20px**.

```
<div class="js-title-border-radius">0px 10px 0px 20px</div>
```

The `js-title-border-radius` style directive accepts any CSS **border-radius** property as defined by the **World Wide Web Consortium** (**W3C**): [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds/#border-radius).

> 💡 The [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) page on the **Mozilla Developer Network** provides futher reading and great examples.

## ⬛ js-title-box-shadow

The `js-title-box-shadow` style directive adds shadow effects around the outer area frame of a chart's title area.

You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

```
<div class="js-title-box-shadow">12px 12px 2px 1px rgba(0, 0, 255, .2)</div>
```

By default, no box-shadow effect is applied to the chart’s title area.

To force *no shadow effects* around a chart's title area, use the ***none*** keyword as demonstrated below.

```
<div class="js-title-box-shadow">none</div>
```