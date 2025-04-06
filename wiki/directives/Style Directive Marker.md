# 📍 js-marker-* Style Directives

> 💡 Markers are only supported by **line charts**, **scatter plots**, and **bubble charts**.

The `js-marker-*` style directives are used to customize the look of markers on a chart.

Markers are visual symbols (like dots, squares, or triangles) placed on a chart to represent individual data points. Markers are used to:

 - **Highlight specific data points** – each marker on a chart shows the exact value at that position.
 - **Improve readability** – they make it easier to follow trends or patterns.
 - **Allow comparison** – especially when multiple series are shown together.

You can toggle the visibility of markers on a chart using the `showmarkers` chart attribute.

```
<div class="js-class" ... showmarkers="on">
```

The **color** of each marker is assigned from the list of colors provided by the chart's [[Style Templates|style template]]. The style template color can be overridden with the **style directive** `js-color-palette`.

Refer to the [[Chart Attributes]] page for detailed information about the `showmarkers` chart attribute.

## 📚 Table of Contents

 - [↔️ js-marker-width](#️-js-marker-width)
 - [↔️ js-marker-height](#️-js-marker-height)
 - [🔲 js-marker-border](#-js-marker-border)
 - [⤵️ js-marker-border-radius](#️-js-marker-border-radius)
 - [⬛ js-marker-box-shadow](#-js-marker-box-shadow)
 - [⬜ js-marker-opacity](#-js-marker-opacity)
 - [😂 js-marker-emoji](#-js-marker-emoji)

## ↔️ js-marker-width

The `js-marker-width` style directive sets the width of each individual marker on a chart.

Include an **unit of measure** when specifying the `js-marker-width` directive, e.g. **800px** or **400pt**. Alternatively, you can also specify a **relative length unit**, e.g. **100%** or **20em**.

The default width of markers on a chart is `15px`.

The following example will render the markers on a chart `3px` wide.

```
<div class="js-marker-width">3px</div>
```

## ↔️ js-marker-height

The `js-marker-height` style directive sets the height of each individual marker on a chart.

Include an **unit of measure** when specifying the `js-marker-height` directive, e.g. **800px** or **400pt**. Alternatively, you can also specify a **relative length unit**, e.g. **100%** or **20em**.

The default height of markers on a chart is `15px`.

The following example will render the markers on a chart `7px` tall.

```
<div class="js-marker-height">7px</div>
```

## 🔲 js-marker-border

The `js-marker-border` style directive sets a border around each individual marker on a chart.

The style directive is specified as border width, style, and color values, for example:

```
<div class="js-marker-border">0.5px solid #333333</div>
```

You can also hide the border completely.

```
<div class="js-marker-border">none</div>
```

By default, no border is rendered around markers on a chart.

## ⤵️ js-marker-border-radius

The `js-marker-border-radius` style directive rounds the corners of the border around each individual marker on a chart.

You can set a **single radius** to make *circular* corners, or **two radii** to make *elliptical* corners.

The border-radius style directive is specified as **one**, **two**, **three**, or **four** length or percentage values (this is used to set a single radius for the corners), *optionally* followed by `/` and **one**, **two**, **three**, or **four** length or percentage values (this is used to set an additional radius, so you can have elliptical corners).

By default, markers are rendered without the border radius directive set.

The example below will create merkers with:

 - ↖️ Square top left corner (i.e. a radius of **10px**).
 - ↗️ Rounded top right corner with a radius of **20px**.
 - ↘️ Square bottom right corner (i.e. a radius of **10px**).
 - ↙️ Rounded bottom left corner with a radius of **20px**.

```
<div class="js-marker-border-radius">10px 20px 10px 20px</div>
```

The `js-marker-border-radius` style directive accepts any CSS **border-radius** property as defined by the **World Wide Web Consortium** (**W3C**): [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds/#border-radius).

> 💡 The [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) page on the **Mozilla Developer Network** provides futher reading and great examples.

## ⬛ js-marker-box-shadow

The `js-marker-box-shadow` style directive adds shadow effects around the outer area frame of each individual marker on a chart.

You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

```
<div class="js-marker-box-shadow">12px 12px 2px 1px rgba(0, 0, 255, .2)</div>
```

By default, no box-shadow effect is applied to markers on a chart.

To force *no shadow effects* around markers on a chart, use the ***none*** keyword as demonstrated below.

```
<div class="js-marker-box-shadow">none</div>
```

## ⬜ js-marker-opacity

The `js-marker-opacity` style directive is used to set the opacity of each individual marker on a chart.

Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

By default, markers are rendered fully opaque on a chart.

Opacity is specified as a number in the range 0.0 to 1.0, inclusive, or a <percentage> in the range 0% to 100%, inclusive, representing the opacity of the channel (that is, the value of its alpha channel). Any value outside the interval, though valid, is clamped to the nearest limit in the range.

In the example below, two methods are presented to set the markers on a chart fully opaque.

```
<div class="js-marker-opacity">1.0</div>
<div class="js-marker-opacity">100%</div>
```

## 😂 js-marker-emoji

> 💡 Using emojis as markers is currently only supported on **scatter plots**.

The **js-marker-emoji** style directive sets a list of emojis to be used as chart markers. Emojis defined in the list are assigned to represent each data set in a **round robin rotation**.

Separate multiple emojis in the list using the **comma character** (`,`).

Each emoji in the list is specified in **Unicode code point notation**.

**Unicode code point notation** is how Unicode characters are referenced in technical documentation and represents an emoji (or any Unicode character) by specifying its unique code point in the Unicode standard. The code point is defined by the characters **U+** followed by a hexadecimal code. The **U+** characters indicates that you are defining a Unicode character.

> ⚠️ To use **emojis** as markers, set the:<br>- chart attribute `markertype` to `emoji`<br>- style directive `js-marker-emoji` to an emoji unique identifier in **Unicode code point notation**.

The example below defines a single 😂 **Face with tears of joy** emoji to use as marker on a chart.

```
<div class="js-marker-emoji">U+1F602</div>
```

The example below defines three emojis to be used on a chart: 🐛 **bug** , 🎀 **ribbon** and 💪 **strong arm**.

```
<div class="js-marker-emoji">U+1F41B, U+1F380, U+1F4AA</div>
```

> 💡 Refer to the [📚 Emoji on Wikipedia](https://en.wikipedia.org/wiki/Emoji) page for a list of emojis to use as markers on the chart.

The **width** and **height** of the emoji marker is controlled using the `js-marker-width` and `js-marker-height` style directives.

By default, emojis are rendered `15px` by `15px` in size.