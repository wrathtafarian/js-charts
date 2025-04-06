# 🎮 js-options-menu-* Style Directives

The `js-options-menu-*` style directives let you customize the look of a chart's options menu.

The chart options menu lets the end user make adjustments to the chart to **improve readability**, or **help with pattern recognition**.

The options menu is divided into the following area:
 - [Options menu title area](#options-menu-title-area)
 - [Options menu general area](#options-menu-general-area)

## 📚 Table of Contents
 - [Options Menu Title Area](#options-menu-title-area)
   - [🔤 js-options-menu-title-font-family](#-js-options-menu-title-font-family)
   - [🅰️ js-options-menu-title-font-size](#🅰️-js-options-menu-title-font-size)
   - [🅱️ js-options-menu-title-font-weight](#🅱️-js-options-menu-title-font-weight)
   - [🎨 js-options-menu-title-bg-color](#-js-options-menu-title-bg-color)
   - [🎨 js-options-menu-title-text-color](#-js-options-menu-title-text-color)
   - [🔲 js-options-menu-title-border](#-js-options-menu-title-border)
   - [⤵️ js-options-menu-title-border-radius](#️-js-options-menu-title-border-radius)
   - [⬛ js-options-menu-title-box-shadow](#-js-options-menu-title-box-shadow)
   - [⬜ js-options-menu-title-opacity](#-js-options-menu-title-opacity)
 - [Options Menu General Area](#options-menu-general-area)
   - [🔤 js-options-menu-font-family](#-js-options-menu-font-family)
   - [🅰️ js-options-menu-font-size](#🅰️-js-options-menu-font-size)
   - [🅱️ js-options-menu-font-weight](#🅱️-js-options-menu-font-weight)
   - [🎨 js-options-menu-bg-color](#-js-options-menu-bg-color)
   - [🎨 js-options-menu-text-color](#-js-options-menu-text-color)
   - [🔲 js-options-menu-border](#-js-options-menu-border)
   - [⤵️ js-options-menu-border-radius](#️-js-options-menu-border-radius)
   - [⬛ js-options-menu-box-shadow](#-js-options-menu-box-shadow)
   - [⬜ js-options-menu-opacity](#-js-options-menu-opacity)

## Options Menu Title Area

### 🔤 js-options-menu-title-font-family

The `js-options-menu-title-font-family` style directive specifies a prioritized list of one or more font family names and/or generic family names to be used in the title area of a chart's options menu.

The example below sets a list of font family names to be used in the title area of a chart's options menu.

```
<div class="js-options-menu-title-font-family">Arial, sans-serif</div>
```

The default font family for the title area of a chart's options menu is `"Open Sans", sans-serif`.

### 🅰️ js-options-menu-title-font-size

The `js-options-menu-title-font-size` style directive sets the size of the `js-options-menu-title-font-family` directive. A positive length value or positive percentage value can be specified for this style directive.

**Length value**: For most font-relative units (such as em and ex), the font size is relative to the parent element's font size. For font-relative units that are root-based (such as rem), the font size is relative to the size of the font used by the <html> (root) element.

```
<div class="js-options-menu-title-font-size">12px</div>
```

**Percentage value**: A positive percentage value, relative to the parent element's font size.

```
<div class="js-options-menu-title-font-size">80%</div>
```

The default value of the `js-options-menu-title-font-size` directive is **14px**.

### 🅱️ js-options-menu-title-font-weight

The `js-options-menu-title-font-weight` style directive sets the weight (or boldness) of the `js-options-menu-title-font-family` directive. The weights available depend on the font-family that is currently set. Typically, the font weight is specified as a number value between 1 and 1000, both values included. Higher numbers represent weights that are bolder than (or as bold as) lower numbers.

```
<div class="js-options-menu-title-font-weight">600</div>
```

The default value of the `js-options-menu-title-font-weight` directive is **600**.

### 🎨 js-options-menu-title-bg-color

The `js-options-menu-title-bg-color` style directive sets the background color of the options menu's title area.

By default, a chart's style template sets the value of the `js-options-menu-title-bg-color` directive. For example:

 - The `default` style template assigns a background color of `#3E5879` to the control buttons.
 - The `darkweb` style template assigns a background color of `#666666` to the control buttons.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

### 🎨 js-options-menu-title-text-color

The `js-options-menu-title-text-color` style directive sets the foreground color value of text and text decorations on the options menu's title.

By default, a chart's style template sets the value of the `js-options-menu-title-text-color` directive. For example:

 - The `default` style template assigns a foreground color of `White` to the control buttons.
 - The `darkweb` style template assigns a foreground color of `#eeeeee` to the control buttons.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

### 🔲 js-options-menu-title-border

The `js-options-menu-title-border` style directive sets the border around the options menu's title.

The style directive is specified as border width, style, and color values, for example:

```
<div class="js-options-menu-title-border">0.5px solid #333333</div>
```

You can also hide the border completely.

```
<div class="js-options-menu-title-border">none</div>
```

By default, a chart's style template sets the value of the `js-options-menu-title-border` directive. For example:

 - The `default` style template assigns a border value of `none` to the control buttons.
 - The `darkweb` style template assigns a foreground color of `0.5px solid #999999` to the control buttons.

### ⤵️ js-options-menu-title-border-radius

The `js-options-menu-title-border-radius` style directive rounds the corners of the options menu's title.

You can set a **single radius** to make *circular* corners, or **two radii** to make *elliptical* corners.

The border-radius style directive is specified as **one**, **two**, **three**, or **four** length or percentage values (this is used to set a single radius for the corners), *optionally* followed by `/` and **one**, **two**, **three**, or **four** length or percentage values (this is used to set an additional radius, so you can have elliptical corners).

By default, a chart's style template sets the value of the `js-options-menu-title-border` directive. For example:

 - The `default` style template assigns a border radius value of `10px 10px 0px 0px` to a chart's control buttons.
 - The `darkweb` style template assigns a border radius value of `10px 10px 0px 0px` to a chart's control buttons.

The example below creates a chart options menu title area with:

 - ↖️ Square top left corner (i.e. a radius of **0px**).
 - ↗️ Rounded top right corner with a radius of **10px**.
 - ↘️ Square bottom right corner (i.e. a radius of **0px**).
 - ↙️ Rounded bottom left corner with a radius of **20px**.

```
<div class="js-options-menu-title-border-radius">0px 10px 0px 20px</div>
```

The `js-options-menu-title-border-radius` style directive accepts any CSS **border-radius** property as defined by the **World Wide Web Consortium** (**W3C**): [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds/#border-radius).

> 💡 The [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) page on the **Mozilla Developer Network** provides futher reading and great examples.

### ⬛ js-options-menu-title-box-shadow

The `js-options-menu-title-box-shadow` style directive adds shadow effects around the outer area frame of th options menu's title.

You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

```
<div class="js-options-menu-title-box-shadow">12px 12px 2px 1px rgba(0, 0, 255, .2)</div>
```

By default, no box-shadow effect is applied to the chart’s control buttons.

To force *no shadow effects* around a chart's control buttons, use the ***none*** keyword as demonstrated below.

```
<div class="js-options-menu-title-box-shadow">none</div>
```

### ⬜ js-options-menu-title-opacity

The `js-options-menu-title-opacity` style directive is used to set the opacity of the options menu's title.

Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

By default, the options menu's title area is rendered fully opaque on a chart.

Opacity is specified as a number in the range 0.0 to 1.0, inclusive, or a <percentage> in the range 0% to 100%, inclusive, representing the opacity of the channel (that is, the value of its alpha channel). Any value outside the interval, though valid, is clamped to the nearest limit in the range.

In the example below, two methods are presented to set a chart's controls buttons fully opaque.

```
<div class="js-options-menu-title-opacity">1.0</div>
<div class="js-options-menu-title-opacity">100%</div>
```

The following example demonstrates two methods of of rendering a chart's control buttons 50% transparent.

```
<div class="js-options-menu-title-opacity">0.5</div>
<div class="js-options-menu-title-opacity">50%</div>
```

By default, the options menu's title area is rendered 100% opaque.

## Options Menu General Area

### 🔤 js-options-menu-font-family

The `js-options-menu-font-family` style directive specifies a prioritized list of one or more font family names and/or generic family names to be used in the general area of a chart's options menu.

The example below sets a list of font family names to be used in the general area of a chart's options menu.

```
<div class="js-options-menu-font-family">Arial, sans-serif</div>
```

The default font family for the general area of a chart's options menu is `"Open Sans", sans-serif`.

### 🅰️ js-options-menu-font-size

The `js-options-menu-font-size` style directive sets the size of the `js-options-menu-font-family` directive. A positive length value or positive percentage value can be specified for this style directive.

**Length value**: For most font-relative units (such as em and ex), the font size is relative to the parent element's font size. For font-relative units that are root-based (such as rem), the font size is relative to the size of the font used by the <html> (root) element.

```
<div class="js-options-menu-font-size">12px</div>
```

**Percentage value**: A positive percentage value, relative to the parent element's font size.

```
<div class="js-options-menu-font-size">80%</div>
```

The default value of the `js-options-menu-font-size` directive is **14px**.

### 🅱️ js-options-menu-font-weight

The `js-options-menu-font-weight` style directive sets the weight (or boldness) of the `js-options-menu-font-family` directive. The weights available depend on the font-family that is currently set. Typically, the font weight is specified as a number value between 1 and 1000, both values included. Higher numbers represent weights that are bolder than (or as bold as) lower numbers.

```
<div class="js-options-menu-font-weight">600</div>
```

The default value of the `js-options-menu-font-weight` directive is **600**.

### 🎨 js-options-menu-bg-color

The `js-options-menu-bg-color` style directive sets the background color of the options menu's general area.

By default, a chart's style template sets the value of the `js-options-menu-bg-color` directive. For example:

 - The `default` style template assigns a background color of `#3E5879` to the control buttons.
 - The `darkweb` style template assigns a background color of `#666666` to the control buttons.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

### 🎨 js-options-menu-text-color

The `js-options-menu-text-color` style directive sets the foreground color value of text and text decorations on the options menu general area.

By default, a chart's style template sets the value of the `js-options-menu-text-color` directive. For example:

 - The `default` style template assigns a foreground color of `White` to the control buttons.
 - The `darkweb` style template assigns a foreground color of `#eeeeee` to the control buttons.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

### 🔲 js-options-menu-border

The `js-options-menu-border` style directive sets the border around the options menu's general area.

The style directive is specified as border width, style, and color values, for example:

```
<div class="js-options-menu-border">0.5px solid #333333</div>
```

You can also hide the border completely.

```
<div class="js-options-menu-border">none</div>
```

By default, a chart's style template sets the value of the `js-options-menu-border` directive. For example:

 - The `default` style template assigns a border value of `none` to the control buttons.
 - The `darkweb` style template assigns a foreground color of `0.5px solid #999999` to the control buttons.

### ⤵️ js-options-menu-border-radius

The `js-options-menu-border-radius` style directive rounds the corners of the options menu's general area.

You can set a **single radius** to make *circular* corners, or **two radii** to make *elliptical* corners.

The border-radius style directive is specified as **one**, **two**, **three**, or **four** length or percentage values (this is used to set a single radius for the corners), *optionally* followed by `/` and **one**, **two**, **three**, or **four** length or percentage values (this is used to set an additional radius, so you can have elliptical corners).

By default, a chart's style template sets the value of the `js-options-menu-border` directive. For example:

 - The `default` style template assigns a border radius value of `10px 10px 0px 0px` to a chart's control buttons.
 - The `darkweb` style template assigns a border radius value of `10px 10px 0px 0px` to a chart's control buttons.

The example below creates a general area for a chart's options meny with:

 - ↖️ Square top left corner (i.e. a radius of **0px**).
 - ↗️ Rounded top right corner with a radius of **10px**.
 - ↘️ Square bottom right corner (i.e. a radius of **0px**).
 - ↙️ Rounded bottom left corner with a radius of **20px**.

```
<div class="js-options-menu-border-radius">0px 10px 0px 20px</div>
```

The `js-options-menu-border-radius` style directive accepts any CSS **border-radius** property as defined by the **World Wide Web Consortium** (**W3C**): [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds/#border-radius).

> 💡 The [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) page on the **Mozilla Developer Network** provides futher reading and great examples.

### ⬛ js-options-menu-box-shadow

The `js-options-menu-box-shadow` style directive adds shadow effects around the outer area frame of the options menu's general area.

You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

```
<div class="js-options-menu-box-shadow">12px 12px 2px 1px rgba(0, 0, 255, .2)</div>
```

By default, no box-shadow effect is applied to the chart’s control buttons.

To force *no shadow effects* around a chart's control buttons, use the ***none*** keyword as demonstrated below.

```
<div class="js-options-menu-box-shadow">none</div>
```

### ⬜ js-options-menu-opacity

The `js-options-menu-opacity` style directive is used to set the opacity of the options menu's general area.

Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

By default, the options menu's general area area is rendered fully opaque on a chart.

Opacity is specified as a number in the range 0.0 to 1.0, inclusive, or a <percentage> in the range 0% to 100%, inclusive, representing the opacity of the channel (that is, the value of its alpha channel). Any value outside the interval, though valid, is clamped to the nearest limit in the range.

In the example below, two methods are presented to set a chart's controls buttons fully opaque.

```
<div class="js-options-menu-opacity">1.0</div>
<div class="js-options-menu-opacity">100%</div>
```

The following example demonstrates two methods of of rendering a chart's control buttons 50% transparent.

```
<div class="js-options-menu-opacity">0.5</div>
<div class="js-options-menu-opacity">50%</div>
```

By default, the options menu's general area area is rendered 100% opaque.
