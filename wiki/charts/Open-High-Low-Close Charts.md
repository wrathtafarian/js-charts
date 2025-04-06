# 💲 Open-High-Low-Close (OHLC) Charts

An **Open-High-Low-Close (OHLC) chart** is a type of financial chart used to visualize price movements of assets, such as stocks or commodities, over a specific period. Each data point consists of four key values:

 - **open price** (where the price started),
 - **high price** (the highest value reached),
 - **low price** (the lowest value), and
 - **close price** (where the price ended).

These values are represented by vertical bars with short horizontal ticks—one on the left indicating the open price and one on the right showing the close price.

 - **Usage**: ⏱️ Date-Over-Time 🧵 Pattern 🆚 Relationship

OHLC charts are widely used in technical analysis to identify market trends, volatility, and potential reversals. Unlike line charts, which show only closing prices, OHLC charts provide more detailed insights into price fluctuations within a given period, making them valuable for traders who rely on candlestick patterns and price action strategies.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/ohlc%20charts.md) repo for many detailed examples of how to use and customize (style) different types of **OHLC charts**.

## ⚙️ Chart Attributes

OHLC charts accept the following chart attributes.

[🧱 class](../Chart%20Attributes.md#-class)
[🗂️ type](../Chart%20Attributes.md#-type)
[🕒 version](../Chart%20Attributes.md#-version)
[📋 template](../Chart%20Attributes.md#-template)
[↔️ width](../Chart%20Attributes.md#-width)
[↕️ height](../Chart%20Attributes.md#-height)
[📄 title](../Chart%20Attributes.md#-title)
[📄 ytitle](../Chart%20Attributes.md#-ytitle)
[📄 xtitle](../Chart%20Attributes.md#-xtitle)
[📏 scalemin](../Chart%20Attributes.md#-scalemin)
[📏 scalemax](../Chart%20Attributes.md#-scalemax)
[🔽 sortdata](../Chart%20Attributes.md#-sortdata)
[🚫 limitdata](../Chart%20Attributes.md#-limitdata)
[🔲 showborder](../Chart%20Attributes.md#-showborder)
[🏷️ showlabels](../Chart%20Attributes.md#-showlabels)
[📘 showlegend](../Chart%20Attributes.md#-showlegend)
[🎮 showcontrols](../Chart%20Attributes.md#-showcontrols)
[🗂️ showdatatable](../Chart%20Attributes.md#-showdatatable)
[#️⃣ showgridlines](../Chart%20Attributes.md#-showgridlines)
[➖ showzeroline](../Chart%20Attributes.md#-showzeroline)
[📈 showlines](../Chart%20Attributes.md#-showlines)
[📲 showwidget](../Chart%20Attributes.md#-showwidget)

## 🧱 Input Data

### Time-Series Financial Data

An Open-High-Low-Close (OHLC) chart requires time-series financial data, specifically capturing four price points per period.

 - **Date/Time** (X-Axis) - Represents the time interval of the data (e.g., daily, hourly, minute-by-minute). Helps track price movements over time.
 - **Open Price** (Start of Period) - The price at which the asset began trading for that period.
 - **High Price** (Highest Point in Period) - The maximum price reached during the trading period. Shows the highest point of market activity.
 - **Low Price** (Lowest Point in Period) - The minimum price recorded within the period. Reflects how low the asset traded before recovering.
 - **Close Price** (End of Period) - The final price at which the asset traded before the period closed. Important for analyzing trend direction and sentiment.

### Date/Time: 🏷️ js-labels

The `js-labels` input container sets the labels that anchors each cluster on the axis.

The container accepts a **comma-separated list of text values**.

```
<div class="js-labels">label-0, label-1, label-2, ..., label-n</div>
```

The example below sets the category labels on a chart to the months of the year.

```
<div class="js-labels">Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec</div>
```
## OHLC: 💲 js-open, 💲 js-high, 💲 js-low & 💲 js-close

The OHLC input containers sets the price points for the chart.

 - **js-open** - The price at which the asset began trading for that period.
 - **js-high** - The maximum price reached during the trading period. Shows the highest point of market activity.
 - **js-low** - The minimum price recorded within the period. Reflects how low the asset traded before recovering.
 - **js-close** - The final price at which the asset traded before the period closed. Important for analyzing trend direction and sentiment.

### 🖌️ Style Directives

Every chart is customized (or styled) using one of the supported **style templates**.

**Style directives** are used to override the customization applied by the style template to each chart.

OHLC charts support the following style directives.

[🖼️ js-canvas-*](../directives/Style%20Directive%20Canvas.md)
[📊 js-chart-*](../directives/Style%20Directive%20Chart.md)
[🎨 js-color-*](../directives/Style%20Directive%20Color.md)
[🖱️ js-control-button-*](../directives/Style%20Directive%20Control%20Buttons.md)
[🏷️ js-datalabel-*](../directives/Style%20Directive%20Data%20Label.md)
[🗂️ js-datatable-*](../directives/Style%20Directive%20Data%20Table.md)
[🦶 js-footer-*](../directives/Style%20Directive%20Footer.md)
#[️⃣ js-grid-line-*](../directives/Style%20Directive%20Grid%20Line.md)
[📘 js-legend-*](../directives/Style%20Directive%20Legend.md)
[🎮 js-options-menu-*](../directives/Style%20Directive%20Options%20Menu.md)
[📏 js-scale-*](../directives/Style%20Directive%20Scale.md)
[📄 js-title-*](../directives/Style%20Directive%20Title.md)
[📈 js-value-line-*](../directives/Style%20Directive%20Value%20Line.md)
[➖ js-zero-line-*](../directives/Style%20Directive%20Zero%20Line.md)

> 💡 See the [👀 js-chart-examples](https://github.com/wrathtafarian/js-chart-examples) repo for many detailed examples of how to use the **style directives** to customize a chart.

## 👀 Examples

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/ohlc%20charts.md) repo for many detailed examples of how to use different types of **OHLC charts**.

### Example: Open-High-Low-Close Chart: Monthly Revenue Comparison

The example below renders a **Open-High-Low-Close (OHLC) chart**, showing **Price Movement** of a fictional asset on the stock market.

```
<div class="js-chart" type="ohlc" title="Market trading" ytitle="Price movement" xtitle="Daily" width="auto" showlabels="off" limitdata="15">

    <div class="js-labels">01/02, 01/03, 01/06, 01/07, 01/08, 01/10, 01/13, 01/14, 01/15, 01/16, 01/17, 01/21, 01/22, 01/23, 01/24, 01/27, 01/28, 01/29, 01/30, 01/31, 02/03, 02/04, 02/05, 02/06, 02/07, 02/10, 08/12, 08/13, 08/14, 08/15, 08/16, 08/19, 08/20, 08/21, 08/22, 08/23, 08/26, 08/27, 08/28, 08/29, 08/30, 09/03, 09/04, 09/05, 09/06, 09/09, 09/10, 09/11, 09/12, 09/13, 09/16, 09/17, 09/18, 09/19, 09/20, 09/23, 09/24, 09/25, 09/26, 09/27</div>

    <div class="js-open">122.29, 121.65, 129.07, 130.51, 124.51, 118.18, 115.28, 118.00, 117.55, 120.24, 120.78, 122.39, 123.08, 121.425, 124.55, 117.80, 115.175, 115.77, 118.53, 119.14, 113.875, 115.45, 107.61, 110.93, 109.13, 108.44, 134.44, 138.12, 143.00, 143.00, 145.70, 148.43, 156.49, 156.12, 158.87, 153.60, 154.70, 150.13, 149.40, 146.59, 147.52, 146.41, 140.505, 138.20, 138.70, 136.10, 139.06, 145.325, 148.43, 152.32, 151.70, 153.55, 150.90, 153.81, 156.00, 156.445, 157.46, 158.50, 167.055, 167.48</div>
    <div class="js-high">123.14, 125.56, 130.73, 131.71, 125.30, 118.71, 117.48, 118.66, 120.42, 121.09, 122.74, 123.75, 125.65, 123.71, 125.25, 118.08, 116.15, 118.52, 120.44, 119.565, 115.16, 119.85, 112.09, 112.56, 109.92, 111.40, 137.99, 141.19, 143.25, 147.96, 149.3693, 155.365, 162.04, 158.65, 159.84, 156.40, 158.28, 151.70, 150.43, 149.49, 148.99, 146.49, 143.37, 141.71, 139.13, 138.445, 143.08, 150.16, 151.54, 153.03, 154.44, 154.045, 152.82, 159.25, 157.45, 157.19, 159.64, 162.95, 168.68, 168.7286</div>
    <div class="js-low">119.44, 121.42, 127.36, 126.8537, 120.1201, 114.4501, 114.41, 114.50, 117.46, 118.25, 120.55, 121.1201, 121.912, 120.63, 122.23, 112.80, 112.95, 114.96, 117.09, 115.33, 112.98, 114.79, 106.50, 109.02, 106.79, 108.15, 133.23, 137.52, 137.64, 141.81, 145.20, 147.72, 154.51, 155.07, 151.01, 151.83, 148.9101, 148.44, 144.72, 144.47, 145.25, 136.10, 138.51, 137.83, 132.1101, 134.86, 137.25, 140.71, 147.65, 150.70, 150.912, 149.225, 148.01, 152.77, 152.47, 154.97, 154.58, 158.18, 164.05, 163.74</div>
    <div class="js-close">120.63, 125.37, 129.55, 127.33, 121.84, 116.04, 117.32, 116.09, 119.96, 118.44, 121.46, 122.28, 123.75, 123.04, 122.84, 115.01, 114.17, 117.35, 118.86, 115.95, 114.27, 119.50, 112.01, 110.16, 107.56, 110.48, 136.77, 141.13, 140.75, 147.36, 148.56, 155.28, 156.40, 157.81, 151.70, 154.98, 149.99, 150.50, 146.36, 145.49, 148.56, 136.94, 140.87, 139.44, 134.35, 138.15, 142.84, 149.86, 150.77, 152.31, 152.08, 150.82, 148.29, 156.74, 155.95, 156.75, 158.32, 162.02, 167.49, 164.35</div>

    <div class="js-datalabel-text-color">black</div>
    <div class="js-value-line-thickness">8px</div>
    <div class="js-color-palette">ForestGreen; Crimson</div>
</div>

```

#### Explained

##### Category: 🏷️ js-labels

The `js-labels` input container sets the labels that anchor each cluster on the axis

#### Time-Series Financial Data: 💲 js-open, 💲 js-high, 💲 js-low & 💲 js-close

The `js-open`, `js-high`, `js-low` and `js-close` input containers set the following data.

 - `js-open` (Start of Period) - The price at which the asset began trading for that period.
 - `js-high` (Highest Point in Period) - The maximum price reached during the trading period. Shows the highest point of market activity.
 - `js-low` (Lowest Point in Period) - The minimum price recorded within the period. Reflects how low the asset traded before recovering.
 - `js-close` (End of Period) - The final price at which the asset traded before the period closed. Important for analyzing trend direction and sentiment.

##### Customization: 🖌️ Style Directives

 - The `js-color-palette` style directive sets two colors to be used on the chart.
   - The first color in the list (`ForestGreen`) is used to visualize **positive** movement.
   - The second color in the list (`Crimson`) is used to visualize **negative** movement.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/ohlc%20charts.md) repo for many detailed examples of how to use different types of **OHLC charts**.