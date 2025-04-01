# 🖼️ js-canvas-* Style Directives

The `js-canvas-*` style directives are used to style the chart canvas. The canvas encompasses the chart container, excluding the following elements.

 - Chart title container
 - Control buttons container
 - Legend container
 - Chart footer container

## 📦 js-canvas-box-shadow

The `js-canvas-box-shadow` style directive adds shadow effects around a chart canvas' area frames. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

```
<div class="js-canvas-box-shadow">12px 12px 2px 1px rgba(0, 0, 255, .2)</div>
```

By default, no box shadow is rendered for the chart canvas.

## 🎨 js-canvas-scrollbar-color

The `js-canvas-scrollbar-color` style directive sets the color of the canvas scrollbar’s track and thumb.

 - The **track** refers to the background of the scrollbar, which is generally fixed regardless of the scrolling position.
 - The **thumb** refers to the moving part of the scrollbar, which usually floats on top of the track.

This directive will only be triggered when the chart canvas area is bigger than the chart container.

```
<div class="js-canvas-scrollbar-color">SteelBlue CadetBlue</div>
```

By default, the scrollbar-color is defined by the chart’s style template.

## 🎨 js-canvas-bg-color

The js-canvas-bg-color style directive sets the background color of the chart's canvas area.

By default, a chart's style template sets the value of the `js-canvas-bg-color` directive.

Refer to the [[Color]] page for detailed instructions on how to define on a chart.