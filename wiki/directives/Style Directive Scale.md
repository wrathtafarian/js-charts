# 📏 js-scale-* Style Directives

The `js-scale-*` style directives are used to customize a chart's scale and scale labels.

## 📚 Table of Contents
 - [🔲 js-scale-border](#-js-scale-border)
 - [🎨 js-scale-text-color](#-js-scale-text-color)

## 🔲 js-scale-border

The `js-scale-border` style directive defines the thickness, style and color of the ***scale lines*** on a chart.

The style directive is specified as border width (which is interpreted as **thickness**), style, and color values, for example:

```
<div class="js-scale-border">0.5px solid #333333</div>
```

You can also hide the border completely.

```
<div class="js-scale-border">none</div>
```

By default, a chart's style template sets the value of the `js-scale-border` directive. For example:

 - The `default` style template assigns a border value of `0.5px solid #bbbbbb` to the control buttons.
 - The `darkweb` style template assigns a foreground color of `0.5px solid #bbbbbb` to the control buttons.

## 🎨 js-scale-text-color

The `js-scale-text-color` style directive sets the foreground color value of text and text decorations on the scale labels on a chart.

By default, a chart's style template sets the value of the `js-scale-text-color` directive. For example:

 - The `default` style template assigns a foreground color of `#000000` to the control buttons.
 - The `darkweb` style template assigns a foreground color of `#eeeeee` to the control buttons.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.
