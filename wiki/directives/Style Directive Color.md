# 🎨 js-color-* Style Directives

The `js-color-*` style directives are used to set the colors that are available to use on a chart.

## 🎨 js-color-palette

The `js-color-palette` style attribute defines a ***semi-colon separated list*** of color values that are available to use on the chart.

> ⚠️ Due to certain formats that use the comma character to define a color, the color palette list must always be separated by a ***semi-color character***. ⚠️

The `js-color-palette` directive accepts a list of colors. The colors will be assigned to the chart data sets or data values in a **round robin rotation**.

Refer to the [[Colors]] page for list of all supported color formats.

As demonstrated below, different color formats can be mixed inside one `js-color-palette` style directive container.

```
<div class="js-color-palette">#ffa500; rgb(62, 88, 121); rgb(33, 53, 85, 0.5); hsl(199, 31%, 55%); hsla(182, 25%, 40%, 0.6); Brown</div>
```

> ⚠️ Remember to always separate different colors with the ***semi-colon character***. ⚠️

The `js-color-palette` style directive can also be limited to **one** color as demonstrated below.

```
<div class="js-color-palette">Orange</div>
```

You can also **grey out** a data set or data value (depending on the chart type). In the example below, the **3rd** data set or data value will be *greyed out* by setting the **3rd** color in the list to light grey (`#dcdcdc`).

```
<div class="js-color-palette">hsl(348, 83%, 30%); hsl(348, 83%, 40%); #dcdcdc; hsl(348, 83%, 60%); hsl(348, 83%, 70%)
```

