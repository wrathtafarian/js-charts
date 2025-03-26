# js-charts
js-charts is a free, low code charting and graphing solution. Input data is provided as HTML elements that are rendered in the browser using only JavaScript and CSS.

- No coding skill is required to create useful charts. Input data is provided as simple comma-separated strings inside HTML Div elements.
- Cross platform and cross browser compatible.
- Only uses JS and CSS - supported by all modern browsers.
- Easy implementation on static, or complex and dynamic websites.
- All chart elements are fully customizable and provide an array of user interactions.
- Using js-chart-builder, charts can quickly and easily be prototyped for use on static websites, or for one-time use in presentations or documentation.

## Usage
Copy the following two files onto your web server or local harddrive – these files contain the functions and style elements that are common across all charts.
```
js/js-chart-common.js
css/js-chart-common.css
```

Copy the chart specific files to your web server or local harddrive – these files contain the functions and style elements that are specific to chart types. The example below is used by pie, doughnut and stacked doughnut charts.
```
js/js-chart-pie.js
css/js-chart-pie.css
```

To create your first chart, copy the example code below and alter to fit your purpose. Paste the code onto your web page where you want the chart to be rendered.
```
<div class="js-chart" type="pie" title="Sales Revenue">
    <div class="js-labels">Furniture, Groceries, Electronics, Toys, Clothing</div>
    <div class="js-values" title="2022">464, 142, 152, 156, 229</div>
</div>
```

js-charts support many options and customizations.
