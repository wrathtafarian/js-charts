# ➖ js-zero-line-* Style Directives

The `js-zero-line-*` style directives let you customize the look of a chart's zero axis lines.

## 📚 Table of Contents
 - [🎨 js-zero-line-color](#-js-zero-line-color)
 - [➖ js-zero-line-thickness](#-js-zero-line-thickness)

## 🎨 js-zero-line-color

The `js-zero-line-color` style directive allows you to specify the color of zero axis lines.

By default, the `js-zero-line-color` directive is set to the color `#bbbbbb`.

The example below hides the zero axis lines on a chart.

```
<div class="js-zero-line-color">transparent</div>
```

The example below will render the zero axis lines on a chart a `blue`.

```
<div class="js-zero-line-color">Blue</div>
```

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

## ➖ js-zero-line-thickness

The `js-zero-line-thickness` style directive lets you set the thickness of the zero axis lines on a chart.

You can hid the zero axis lines on a chart using the `showzerolines` chart attribute.

```
<div class="js-chart" ... showzerolines="off">
</div>
```

By default, zero axis lines are rendered **0.5px** wide.

When specifying the `js-zero-line-thickness` directive, include an **unit of measure**, e.g. **500px** or **370pt**. Alternatively, you can also specify a **relative length unit**, e.g. **100%** or **20em**.

The example below hides the zero axis lines on a chart.

```
<div class="js-zero-line-thickness">0px</div>
```

The example below rendered the zero axis lines **2px** wide.

```
<div class="js-zero-line-thickness">2px</div>
```