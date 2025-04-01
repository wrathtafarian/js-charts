# 🎨 js-color-* Style Directives

The `js-color-*` style directives are used to set the colors that are available to use on a chart.

## 🎨 js-color-palette

The `js-color-palette` style directive sets a list of colors that are available to be used by a chart.

Colors can be expressed in any of supported formats listed below.

 - 🎯 1. HEX (Hexadecimal)
 - 🌈 2. RGB (Red, Green, Blue)
 - 💧 3. RGBA (RGB + Alpha)
 - 🎨 4. HSL (Hue, Saturation, Lightness)
 - 🌫️ 5. HSLA (HSL + Alpha)
 - 🏷️ 6. Named Color

Colors in the list must be **separated using a semi-colon (`;`)** character.

> ⚠️ Due to certain color formats using the comma character (`,`) colors in the `js-color-palette` directive list must be **separated using a semi-colon (`;`)** character.

> 💡 Refer to the [[Color]] page for a list of supported color formats.

Colors from the `js-color-palette` directive list are assigned to a chart's data sets (or data values depending on the chart type) in a ***round-robin rotation***.

The example below defines a list of colors - each color is defined in a different color format.

```
<div class="js-color-palette">#ffa500; rgb(62, 88, 121); rgb(33, 53, 85, 0.5); hsl(199, 31%, 55%); hsla(182, 25%, 40%, 0.6); Brown</div>
```

The following example domonstrates how to **grey out** the third data set (or third data value depending on the chart type) using a light grey (`#dcdcdc`).

```
<div class="js-color-palette">hsl(348, 83%, 30%); hsl(348, 83%, 40%); #dcdcdc; hsl(348, 83%, 60%); hsl(348, 83%, 70%)</div>
```

You can also limit the chart to one color as demonstrated below.

```
<div class="js-color-palette">SteelBlue</div>
```

### Palette Type

Color palettes used on visualizations like charts can be divided into three main categories.

 - Qualitative palettes
 - Sequential palettes
 - Diverging palettes

Refer to the [[Color Palette]] page for detailed information regarding each **palette type**.