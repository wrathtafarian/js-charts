# 🎨 🌈 🔀 Color Palette Type

Color palettes used on visualizations like charts can be divided into three main categories.

 - Qualitative palettes
 - Sequential palettes
 - Diverging palettes

## 🎨 Qualitative Color Palette

> 💡 Different, not more or less.

A **qualitative color palette** is used to represent **categorical data** - where each color represents a distinct category or group without implying any order or magnitude.

 - Colors are visually distinct from each other.
 - No natural progression (unlike sequential or diverging palettes).
 - Ideal for labels, names, or groupings like countries, types, or departments.

**Example Usage**: A bar chart showing sales by product type, where each product type has its own color.

To define a **qualitative color palette**, include the `js-color-palette` style directive inside your chart container.

```
<div class="js-color-palette">#ffa500; rgb(62, 88, 121); rgb(33, 53, 85, 0.5); hsl(199, 31%, 55%); hsla(182, 25%, 40%, 0.6); Brown</div>
```

This is the **default palette type**, so there is no need to set the **type** attribute on the style directive container. You can force the chart to parse the container as a **qualitative color palette** though if necessary.

```
<div class="js-color-palette" type="qualitative">#ffa500; rgb(62, 88, 121); rgb(33, 53, 85, 0.5); hsl(199, 31%, 55%); hsla(182, 25%, 40%, 0.6); Brown</div>

```

## 🌈 Sequential Color Palette

> 💡 More means darker (or lighter) — follow the flow.

A **sequential color palette** is used to represent **ordered or numerical data**, where colors show a progression, e.g. from low to high values.

 - Typically goes from **light to dark** or **one hue to another**.
 - Helps visualize **magnitude**, **intensity**, or **quantity**.
 - Great for **heatmaps**.

**Example Usage**: A heatmap map showing population density by region, where darker shades indicate higher density.

Sequential palettes can be defined as either **continuous** or **discrete** palettes.

## 🔀 Diverging Color Palette

> 💡 Two directions from a center — contrast matters.

A **diverging color palette** is used to show data that has a **meaningful midpoint**, with two contrasting color ramps extending in opposite directions.

 - Highlights **deviation from a central value** (e.g., zero, average, neutral).
 - Uses **two distinct hues** that meet at a **shared midpoint** (often light or neutral).
 - Ideal for **positive vs. negative values**, **above vs. below average**, etc.

**Example Usage**: A temperature anomaly map showing areas hotter (red) or colder (blue) than the historical average.

## 🟦 Discrete vs. 🌈 Continuous

### 🟦 Discrete Color Palette

A **discrete palette** (also called categorical) uses a fixed set of distinct colors, with each color representing a separate category or range. Colors don’t blend in a discrete palette, each value belongs to a specific color.

**Examples**:

 - A bar chart visualising the stock levels of 💻 Laptops, 📱 Smartphones, 📺 Television sets, 🖥️ Desktop PCs, 🎧 Headphones and 📷 Cameras in a shop.
 - A pie chart visualizing the number of 🍎 red apples, 🍌 bananas, 🍇 grapes, 🍋 lemons and 🍊 tangerines that were sold over the last 30 days.

Because each color in a **sequential discrete** palette represents a separate category or range, it is required to define two components for a **sequential discrete** palette.

 - **Color** - List of colors.
 - **Position** - List of values or ranges that match separate categories or values.

The **color positions** can be defined as **absolute** (e.g. 100 or 12.45) or **relative** (e.g. 12% or 0.1%) values that will be matched to the values or categories in the chart's data sets.

> 💡 Each **position** and **color** in the list is separated using an **exclamation mark** (`!`) character.<br>💡 Each **position-color** group in the list is separated using a **semi-color** (`;`) character.

The example below demonstrates how to define a **sequential discrete** palette. The **positions** are defined as **relative** values.

```
<div class="js-color-palette" type="sequential discrete">30%!hsl(207, 44%, 70%); 40%!hsl(207, 44%, 60%); 50%!hsl(207, 44%, 50%); 60%!hsl(207, 44%, 40%); 70%!hsl(207, 44%, 30%)</div>
```

The following example demonstrates how to define a **sequential discrete** palette, with **positions** defined as **absolute** values.

```
<div class="js-color-palette" type="sequential discrete">hsl(60, 100%, 25%); 0.2!hsl(60, 100%, 25%); 0.4!hsl(60, 100%, 25%); 0.6!hsl(60, 100%, 25%); 0.8!hsl(60, 100%, 25%)</div>
```

In the above example, you will notice that the first element in the **position-color** list does not contain the **position** element. This means that any value that is **smaller** than the **second** element in the list will be assigned the **first** color in the list.

Another example demonstrates a **sequential discrete** palette that only uses two colors.

```
<div class="js-color-palette" type="sequential discrete">DarkRed; 50!Orange</div>
```

 1. Any value **smaller than 50** will be visualized as **DarkRed**.
 2. Any value **greater or *equal* than 50** will be visualized as **Orange**.

This demonstrates the fact that the first value is **exclusive** of the position value, while the second is **inclusive** of the position value.

### 🌈 Continuous Color Palette

A **continuous palette** uses a **smooth gradient** of colors to represent a **full range of numeric values**. A sequential continues platte is used for **continuous, numerical data** and colors blend **gradually with no hard edges**.

**Examples**:

 - A heatmap where the background color fades from light blue to dark blue as values increase.

Because each color in a **sequential continuous** palette represents a continuous range, it is required to define two components for a **sequential continuous** palette.

 - **Color** - List of colors.
 - **Position** - List of ranges that match each separate value.

The **color positions** can be defined as **absolute** (e.g. 100 or 12.45) or **relative** (e.g. 12% or 0.1%) values that will be matched to the values in the chart's data sets.

> 💡 Each **position** and **color** in the list is separated using an **exclamation mark** (`!`) character.<br>💡 Each **position-color** group in the list is separated using a **semi-color** (`;`) character.