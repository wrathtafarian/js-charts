# 📘 js-legend-* Style Directives

The `js-legend-*` style directives are used to customize the look of a chart's legend.

You can control the **visibility** and **position** of a chart's legend using the `showlegend` chart attribute.

Refer to the [[Chart Attributes]] page for detailed information about the `showlegend` chart attribute.

The legend on a chart serves as a key that helps users interpret the data by explaining what different colors, patterns, or symbols represent. It is essential in multi-series charts or any visualization that uses multiple categories. A legend on a chart is important because:

 - **Clarifies Data Representation** – It ensures that viewers understand what each color, shape, or line style corresponds to in the dataset.
 - **Enhances Readability** – Without a legend, users might struggle to differentiate between multiple data series or categories.
 - **Saves Space** – Instead of labeling every data point, a legend allows for a cleaner chart by consolidating explanations in one place.
 - **Improves Comparisons** – A well-placed legend makes it easier to compare different data sets within the same visualization.

You should consider including a legend on a chart when the chart includes multiple categories, series, or data groups, or when colors, patterns, or markers are not self-explanatory. Legends can also help clarify the chart when direct labelling on the chart would clutter the visualization.

## 🔤 js-legend-font-family

The `js-legend-font-family` style directive specifies a prioritized list of one or more font family names and/or generic family names to be used on a chart's legend.

The example below sets a list of font family names to be on a chart's legend.

```
<div class="js-legend-font-family">Arial, sans-serif</div>
```

The default font family for the chart style directive is `"Open Sans", sans-serif`.

## 🅰️ js-legend-font-size

The `js-legend-font-size` style directive sets the size of the `js-legend-font-family` directive. A positive length value or positive percentage value can be specified for this style directive.

**Length value**: For most font-relative units (such as em and ex), the font size is relative to the parent element's font size. For font-relative units that are root-based (such as rem), the font size is relative to the size of the font used by the <html> (root) element.

```
<div class="js-legend-font-size">12px</div>
```

**Percentage value**: A positive percentage value, relative to the parent element's font size.

```
<div class="js-legend-font-size">80%</div>
```

The default value of the `js-legend-font-size` directive is **11px**.

## 🅱️ js-legend-font-weight

The `js-legend-font-weight` style directive sets the weight (or boldness) of the `js-legend-font-family` directive. The weights available depend on the font-family that is currently set. Typically, the font weight is specified as a number value between 1 and 1000, both values included. Higher numbers represent weights that are bolder than (or as bold as) lower numbers.

```
<div class="js-legend-font-weight">600</div>
```

The default value of the `js-legend-font-weight` directive is **200**.

## 🎨 js-legend-bg-color

The `js-legend-bg-color` style directive sets the background color of the chart's legend.

By default, a chart's legend is rendered with a `transparent` background.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

## 🎨 js-legend-text-color

The `js-legend-text-color` style directive sets the foreground color value of text and text decorations on a chart's legend.

By default, a chart's style template sets the value of the `js-legend-text-color` directive. For example:

 - The `default` style template assigns a foreground color of `#000000` to the legend.
 - The `darkweb` style template assigns a foreground color of `#eeeeee` to the legend.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

## 🔲 js-legend-border

The `js-legend-border` style directive sets the border around a chart's legend.

The style directive is specified as border width, style, and color values, for example:

```
<div class="js-legend-border">0.5px solid #333333</div>
```

You can also hide the border completely.

```
<div class="js-legend-border">none</div>
```

By default, no border is rendered around a chart's legend.

## ⤵️ js-legend-border-radius

The `js-legend-border-radius` style directive rounds the corners of the legend's border on a chart.

You can set a **single radius** to make *circular* corners, or **two radii** to make *elliptical* corners.

The border-radius style directive is specified as **one**, **two**, **three**, or **four** length or percentage values (this is used to set a single radius for the corners), *optionally* followed by `/` and **one**, **two**, **three**, or **four** length or percentage values (this is used to set an additional radius, so you can have elliptical corners).

By default, the border around the legend is rendered with rounded corners that have a radius of `3px`.

The example below creates a legend area with:

 - ↖️ Square top left corner (i.e. a radius of **0px**).
 - ↗️ Rounded top right corner with a radius of **10px**.
 - ↘️ Square bottom right corner (i.e. a radius of **0px**).
 - ↙️ Rounded bottom left corner with a radius of **20px**.

```
<div class="js-legend-border-radius">0px 10px 0px 20px</div>
```

The `js-legend-border-radius` style directive accepts any CSS **border-radius** property as defined by the **World Wide Web Consortium** (**W3C**): [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds/#border-radius).

> 💡 The [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) page on the **Mozilla Developer Network** provides futher reading and great examples.

## ⬛ js-legend-box-shadow

The `js-legend-box-shadow` style directive adds shadow effects around the outer area frame of a chart's legend area.

You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

```
<div class="js-legend-box-shadow">12px 12px 2px 1px rgba(0, 0, 255, .2)</div>
```

By default, no box-shadow effect is applied to the chart’s legend outer area frame.

To force *no shadow effects* around the legend outer area frame, use the ***none*** keyword as demonstrated below.

```
<div class="js-legend-box-shadow">none</div>
```

## ⬜ js-legend-opacity

The `js-legend-opacity` style directive is used to set the opacity of a chart's legend area.

Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

By default, a chart's legend area is rendered fully opaque.

Opacity is specified as a number in the range 0.0 to 1.0, inclusive, or a <percentage> in the range 0% to 100%, inclusive, representing the opacity of the channel (that is, the value of its alpha channel). Any value outside the interval, though valid, is clamped to the nearest limit in the range.

In the example below, two methods are presented to render a chart's legend area fully opaque.

```
<div class="js-legend-opacity">1.0</div>
<div class="js-legend-opacity">100%</div>
```

The following example demonstrates two methods of of rendering a chart's legend area 50% transparent.

```
<div class="js-legend-opacity">0.5</div>
<div class="js-legend-opacity">50%</div>
```