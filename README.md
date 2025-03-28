# js-charts

![js-charts logo](./images/logo/js-charts-logo-medium-384x384.png)

js-charts is a free, low code charting and graphing solution. Input data is provided as HTML elements that are rendered in the browser using only JavaScript and CSS.

- No coding skill is required to create useful charts. Input data is provided as simple comma-separated strings inside HTML Div elements.
- Cross platform and cross browser compatible.
- Only uses JS and CSS - supported by all modern browsers.
- Easy implementation on static, or complex and dynamic websites.
- All chart elements are fully customizable and provide an array of user interactions.
- No external dependancies.
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

js-charts support many options and customizations. See our __wiki__ page for more information and detailed implementation instructions.

## js-chart-builder

js-chart-builder is a stand-alone JS library that can be used to easily and quickly prototype chart code for websites, or for one-time use in presentations or documentation.

## Security & Privacy
All files can be hosted on your own web server, or locally. Once the file has been downloaded by the browser, no data is exchanged between the server and client.

## Supported Charts
_js_charts_ currently supports **18 chart types** featuring **37 unique charts**.

| Chart Type                      | Chart Type                         |
|--------------------------------:|------------------------------------|
| Bar Chart                       | Column Chart                       |
| Stacked Bar Chart               | Stacjed Column Chart               |
| 100% Stacked Bar Chart          | 100% Stacked Column Chart          |
| OHLC Chart                      | Candlestick Charts                 |
| Scatter Chart                   | Bubble Chart                       |
| Horizontal Boxplot              | Vertical Boxplot                   |
| Lollipop Bar Chart              | Lollipop Column Chart              |
| Stacked Lollipop Bar Chart      | Stacked Lollipop Column Chart      |
| 100% Stacked Lollipop Bar Chart | 100% Stacked Lollipop Column Chart |
| Pie Chart                       | Line Chart                         |
| Doughnut Chart                  | Stacked Line Chart                 |
| Stacked Doughnut Chart          | 100% Stacked Line Chart            |
| Waterfall Bar Chart             | Watarfall Column Chart             |
| Span Bar Chart                  | Span Column Chart                  |
| Marimekko Bar Chart             | Marimekko Column Chart             |
| Treemap                         | Parallel Coordinates Chart         |
| Funnel Bar Chart                | Funnel Column Chart                |
| Heatmap Chart                   | Histogram Chart                    |
| Population Pyramid Chart        |                                    |

## Contributing
I welcome contributions! If you’d like to help improve this project:
1. Open an issue with your idea or bug report.
1. Wait for approval before starting any work.
1. Fork the repository (only after approval).
1. Create a new branch.
1. Submit a pull request with a clear description of your changes.

Note: Forking this project without prior consent is not permitted. __I reserve the right to reject unauthorized forks or clones__. For collaboration, please open an issue or contact me first.

__The project is in need of testers. If you want to contribute to testing, please contact the moderator who can guide you how best to assist__.

##  License
This project is licensed under the Apache License 2.0. See the [LICENSE](./LICENSE) file for details.

## Contact

Created and maintained by wrathtafarian
    Email: wrathtafarian@hotmail.com