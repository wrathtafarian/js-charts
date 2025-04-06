# 📏 js-value-line-* Style Directives

The `js-value-line-*` style directives let you customize the look of a chart's value lines.

Value line elements usually refer to line-shaped elements that represent data or data points on a chart.

You can hide line elements on a chart using the `showlines` chart attribute.

```
<div class="js-chart" ... showlines="off">
</div>
```

## 📚 Table of Contents
 - [↕️ js-value-line-thickness](#️-js-value-line-thickness)
 - [⬜ js-value-line-opacity](#-js-value-line-opacity)
 - [🎨 js-value-line-color](#-js-value-line-color)

## ↕️ js-value-line-thickness

The `js-value-line-thickness` style directive lets you specify the thickness of the value lines on a chart.

When specifying the `js-value-line-thickness` directive, include an **unit of measure**, e.g. **500px** or **370pt**. Alternatively, you can also specify a **relative length unit**, e.g. **100%** or **20em**.

By default, the `js-value-line-thickness` style directive is set to **0.5px**.

You can hide the lines on a chart by setting the style directive to **0px**.

```
<div class="js-value-line-thickness">0px</div>
```

The example below rendered lines on a chart with a thickness of **1px**.

```
<div class="js-value-line-thickness">1px</div>
```

## ⬜ js-value-line-opacity

The `js-value-line-opacity` style directive is used to set the opacity of the lines on a chart.

Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

By default, lines on a chart are rendered fully opaque.

Opacity is specified as a number in the range 0.0 to 1.0, inclusive, or a <percentage> in the range 0% to 100%, inclusive, representing the opacity of the channel (that is, the value of its alpha channel). Any value outside the interval, though valid, is clamped to the nearest limit in the range.

In the example below, two methods are presented to render the lines on a chart fully opaque.

```
<div class="js-value-line-opacity">1.0</div>
<div class="js-value-line-opacity">100%</div>
```

The following example demonstrates two methods of of rendering the lines on a chart 50% transparent.

```
<div class="js-value-line-opacity">0.5</div>
<div class="js-value-line-opacity">50%</div>
```

## 🎨 js-value-line-color

The `js-value-line-color` style directive allows you to specify the color of lines on a ***box plot*** (**box-and-whisker plot**).

By default, the `js-value-bar-color` directive is set to `Black`.

The example below hides the lines on a chart.

```
<div class="js-value-line-color">transparent</div>
```

The example below will render lines on a chart a light red, but it will also make the lines 50% opaque.

```
<div class="js-value-line-color">hsl(0, 100%, 93%, 50%)</div>
```

Refer to the [[Color]] page for detailed instructions on how to define on a chart.