# 💲 Candlestick Charts

A **candlestick chart** (or **Japanese candlestick chart**) is a financial visualization tool used to represent price movements of an asset over a specific period. Each candlestick displays four key values: the opening price, closing price, highest price, and lowest price during that time frame. The body of the candlestick shows the difference between the opening and closing prices, while the thin lines (wicks or shadows) extend to the high and low prices. If the closing price is higher than the opening price, the candlestick is typically colored green or white, indicating a price increase; if the closing price is lower, it is usually red or black, signifying a decline.

 - **Usage**: ⏱️ Date-Over-Time 🧵 Pattern 🌡️ Range

Candlestick charts are widely used in technical analysis to identify market trends, price patterns, and potential reversals. Traders analyze formations such as **doji**, **hammer**, **engulfing**, and **shooting star** patterns to predict future price movements. These charts provide more detailed insights compared to traditional line or bar charts, making them a preferred tool for stock, forex, and cryptocurrency markets.

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/candlestick%20charts.md) repo for many detailed examples of how to use and customize (style) different types of **candlestick charts**.

## ⚙️ Chart Attributes

Candlestick charts accept the following chart attributes.

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
[🔄 swapaxis](../Chart%20Attributes.md#-swapaxis)
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

The data required for creating a candlestick chart consists of:

 - Time-Based Data (Date or Time Interval)
 - Each candlestick represents price action within a specific time frame (e.g., 1 minute, 1 hour, 1 day, 1 week).

### Category: 🏷️ js-labels

The `js-labels` input container sets the labels that anchors each cluster on the axis (e.g., different months, regions, or items).

The container accepts a **comma-separated list of text values**.

```
<div class="js-labels">label-0, label-1, label-2, ..., label-n</div>
```

The example below sets the category labels on a candlestick chart.

```
<div class="js-labels">01/04, 02/04, 03/04, 04/04, 05/04, 06/04, 07/04, 08/04, 09/04, 10/04</div>
```

### Data Series: 💲 js-open, 💲 js-high, 💲 js-low & 💲 js-close

A candlestick chart is used to represent price movements of a financial asset over a specific time period. This type of data is commonly used in stock markets, forex trading, and cryptocurrency analysis to visualize price fluctuations and identify market trends.

Four **Key Price Values** per **Time Interval**:

 - **js-open** - The price at which the asset *started trading* at the beginning of the time period.
 - **js-high** - The *highest price reached* during the time period.
 - **js-low** - The *lowest price reached* during the time period.
 - **js-close** - The price at which the asset *finished trading* at the end of the time period.

Each of the input containers above accept a **comma-separated list of numeric values**. Each container list must contain the same number of elements, i.e. *all lists must be of equal length*.

### 🖌️ Style Directives

Every chart is customized (or styled) using one of the supported **style templates**.

**Style directives** are used to override the customization applied by the style template to each chart.

Candlestick charts support the following style directives.

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
[🧱 js-value-bar-*](../directives/Style%20Directive%20Value%20Bar.md)
[📈 js-value-line-*](../directives/Style%20Directive%20Value%20Line.md)
[➖ js-zero-line-*](../directives/Style%20Directive%20Zero%20Line.md)

> 💡 See the [👀 js-chart-examples](https://github.com/wrathtafarian/js-chart-examples) repo for many detailed examples of how to use the **style directives** to customize a chart.

## 👀 Examples

> 💡 See the [js-chart-examples](https://github.com/wrathtafarian/js-chart-examples/charts/candlestick%20charts.md) repo for many detailed examples of how to use different types of **candlestick charts**.

### Example: Candlestick Chart: Marker trading

The example below renders a **candlestick chart**, showing the **Bitcoin price movement** over  of a fictional asset on the stock market.

```
<div class="js-chart" type="candlestick" title="BTC Price Movement" xtitle="Day" ytitle="Price ($)" showcontrols="off" showlegend="off" width="auto">
    <div class="js-labels">02/02, 03/02, 04/02, 05/02, 06/02, 07/02, 08/02, 09/02, 10/02, 11/02, 12/02, 13/02, 14/02, 15/02, 16/02, 17/02, 18/02, 19/02, 20/02, 21/02, 22/02, 23/02, 24/02, 25/02, 26/02, 27/02</div>

    <div class="js-open">86459.00, 87663.80, 92283.40, 86887.70, 83380.90, 92846.70, 85747.20, 84290.50, 84290.50, 84737.30, 88142.00, 91843.00, 96251.60, 96654.90, 96178.60, 98242.30, 96856.10, 96644.80, 95638.00, 96035.10, 97532.80, 97665.40, 96753.80, 96932.80, 95543.20, 98070.90, 96938.90, 96218.70</div>
    <div class="js-high">86498.60, 86886.80, 90978.90, 92245.10, 87870.10, 86756.40, 94266.10, 86546.30, 86546.30, 84876.30, 85401.80, 89375.30, 92523.10, 96497.90, 96655.20, 96463.80, 98509.90, 97347.70, 95930.00, 96319.90, 96612.60, 97706.50, 97973.20, 97222.40, 98079.60, 96259.80, 98115.40, 97297.80</div>
    <div class="js-low">85959.80, 85264.60, 84864.30, 89994.60, 86429.40, 82558.20, 92454.30, 83837.30, 83837.30, 79535.10, 84085.50, 88136.20, 91014.60, 95118.70, 96383.10, 95801.10, 98096.60, 96441.90, 95057.50, 95559.70, 96041.20, 97431.60, 97252.50, 96399.00, 97003.80, 95128.90, 97434.00, 96369.00</div>
    <div class="js-close">86027.70, 86485.80, 87609.30, 92242.80, 87008.00, 83745.70, 92940.10, 85827.00, 86074.40, 80505.00, 85147.00, 88825.90, 92095.20, 95343.70, 96437.70, 96376.20, 98206.60, 97194.10, 95439.10, 95985.70, 96115.50, 97526.40, 97556.30, 96789.00, 97003.80, 95525.60, 98069.60, 96852.70</div>

    <div class="js-value-bar-min-width">15px</div>
    <div class="js-value-bar-data-margin">0px</div>
    <div class="js-value-bar-series-margin">0px</div>
    <div class="js-color-palette">DarkOrange; ForestGreen; Black</div>
</div>
```

#### Explained

##### Category: 🏷️ js-labels

The `js-labels` input container sets the labels that anchor each cluster on the axis.

In this example, each cluster represents one day of trading.

##### Data Series: 💲 js-open, 💲 js-high, 💲 js-low & 💲 js-close

 - **js-open** - The price at which the asset *started trading* at the beginning of the time period.
 - **js-high** - The *highest price reached* during the time period.
 - **js-low** - The *lowest price reached* during the time period.
 - **js-close** - The price at which the asset *finished trading* at the end of the time period.

Each of the input containers above accept a **comma-separated list of numeric values**. Each container list must contain the same number of elements, i.e. *all lists must be of equal length*.

##### Customization: 🖌️ Style Directives

 - The `showcontrols` chart attribute hides the control buttons.
 - The `showlegend` chart attribute hides the chart legend.
 - The `width` chart attribute uses the **auto** keyword - the chart will attempt to fill the parent container.

##### Customization: 🖌️ Style Directives

 - The `js-value-bar-min-width` style directive ensures that the candesticks are not rendered below **15px** in width.
 - The `js-value-bar-series-margin` style directive is set to **0px**. This ensures that no additional space is left open between candles on the chart.
 - The `js-value-bar-data-margin` style directive is set to **0px**. This ensures that no additional space is left open between candles on the chart.
 - The `js-color-palette` sets three colors that will be used by the chart:
   1. The first color in the list (`DarkOrange`) is used for **negative price movement**.
   1. The second color in the list (`ForestGreen`) is used for **positive price movement**.
   1. The third and last color in the list (`Black`) is used when drawing the candle **wicks**.