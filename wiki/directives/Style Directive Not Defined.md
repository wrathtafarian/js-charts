# ❓ js-not-defined-* Style Directives

The `js-not-defined-*` style directives allow you to control how values are visualized that are *not defined* or *missing* from a chart's data set.

> 💡 The `js-not-defined-*` style directives only change the block or cell background color and foreground color. Any labels that are applied to the cell are still styled using the `js-datalabel-*` style directives.

## 🎨 js-not-defined-bg-color

The `js-not-defined-bg-color` style directive sets the background color of blocks or cells that will visualize any data that is *missing* or *not defined*.

By default, values that are *not defined* or *missing* are visualized with with a background color of `Silver` and a foreground color of `White`.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

The example below sets the background color to `Crimson` for values that are *not defined* or *missing*.

```
<div class="js-not-defined-bg-color">Crimson</div>
```

## 🎨 js-not-defined-text-color

The `js-not-defined-text-color` style directive sets the foreground color value of text and text decorations for blocks or cells that will visualize any data that is *missing* or *not defined*.

By default, values that are *not defined* or *missing* are visualized with with a background color of `Silver` and a foreground color of `White`.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

The example below sets the foreground color to `Orange` for values that are *not defined* or *missing*.

```
<div class="js-not-defined-text-color">Orange</div>
```