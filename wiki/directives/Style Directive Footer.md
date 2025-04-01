# 🦶 js-footer-* Style Directives

The `js-footer-*` style template directives are used to customize a chart's footer area.

The footer can be used to display any static text to the end user. This is useful if you want to include a copyright notice, or if you want to include instructions or special notes to the end user regarding the chart.

The chart footer is rendered on the very bottom of the chart container.

By default, a chart's footer area is rendered **15px** tall. To change this, edit the `--js-chart-common-base-footer-height` CSS variable defined in the `:root` section of `css/js-chart-common.css` file.

The footer text will be truncated if the text cannot fit into the available space. If the footer text is truncated, an ellipsis (…) will be added to the end of the truncated footer text.

## 🔤 js-footer-font-family

The `js-footer-font-family` style directive specifies a prioritized list of one or more font family names and/or generic family names to be used in a chart's footer.

The example below sets a list of font family names to be used in a chart's footer.

```
<div class="js-footer-font-family">Arial, sans-serif</div>
```

The default font family for the chart style directive is `"Open Sans", sans-serif`.

## 🅰️ js-footer-font-size

The `js-footer-font-size` style directive sets the size of the `js-footer-font-family` directive. A positive length value or positive percentage value can be specified for this style directive.

**Length value**: For most font-relative units (such as em and ex), the font size is relative to the parent element's font size. For font-relative units that are root-based (such as rem), the font size is relative to the size of the font used by the <html> (root) element.

```
<div class="js-footer-font-size">12px</div>
```

**Percentage value**: A positive percentage value, relative to the parent element's font size.

```
<div class="js-footer-font-size">80%</div>
```

The default value of the `js-footer-font-size` directive is **9px**.

## 🅱️ js-footer-font-weight

The `js-footer-font-weight` style directive sets the weight (or boldness) of the `js-footer-font-family` directive. The weights available depend on the font-family that is currently set. Typically, the font weight is specified as a number value between 1 and 1000, both values included. Higher numbers represent weights that are bolder than (or as bold as) lower numbers.

```
<div class="js-footer-font-weight">600</div>
```

The default value of the `js-footer-font-weight` directive is **200**.

## 🎨 js-footer-bg-color

The `js-footer-bg-color` style directive sets the background color of the chart's footer area.

By default, a chart's footer area is created **transparent**.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

The example below will render a chart's footer area with a background color of `Cyan`.

```
<div class="js-footer-bg-color">Cyan</div>
```

The following example will render a chart's footr area with a crimson background that is only 70% opaque.

```
<div class="js-footer-bg-color">rgba(220, 20, 60, 0.7)</div>
```

## 🎨 js-footer-text-color

The `js-footer-text-color` style directive sets the foreground color value of text and text decorations on a chart's footer area.

By default, a chart's style template sets the value of the `js-footer-text-color` directive. For example:

 - The `default` style template assigns a foreground color of `#000000` to the chart's footer area.
 - The `darkweb` style template assigns a foreground color of `#eeeeee` to the chart's footer area.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.

The example below will render a chart with the footer area's foreground color set to `Lime`.

```
<div class="js-footer-text-color">Lime</div>
```
