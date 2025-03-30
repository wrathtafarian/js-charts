# 🧩 IDEFAULT_CHART_ATTRIBUTES

The *IDEFAULT_CHART_ATTRIBUTES* constant is defined in the `js/js-chart-common.js` file.

The constant defines the *default values* to be used when parsing and initializing *chart attributes*.

The IDEFAULT_CHART_ATTRIBUTES constant defines one element for each supported chart attribute.

```
const IDEFAULT_CHART_ATTRIBUTES = {

...

    "type": {
        "default": "pie",
        "control": "dropdown",
        "label": "Chart type",
        "description": "The <strong>type</strong> attribute specifies the type of chart to render."
    },

...

}

```

The child elements for each key is explained below.

- **default** - Defines the default value that is assigned to the attribute. Override the default value using **chart attributes**.
- **control** - Describes the type of input element that should be used to control the attribute on the **chart options menu**. Valid options are:
    - **text** - Textbox control for string and numeric inputs.
    - **dropdown** - Dropdown (HTML select) control for multiple coice options.
    - **checknox** - Checknox control for boolean inputs.
- **label** - Define the label that will be used to describe the attribute on the **chart options menu**.
- **description** - Define a general description for the attribute that will be used in tooltips and help documents.


---

## 🔍 Additional Reading

Refer to the following resources for additional reading material.

- See the [🗂️ Chart Types](Chart-Types) page for a list of chart types that are supported by **js-charts**.
- Read more about [🧰 Chart Attributes](Chart-Attributes) and how they change the behaviour of a chart.
- Refer to the [🛠️ Style Templates](Style-Templates) page for a detailed list of style templates that are supported out-of-the-box.
- Learn how to customize the look of a chart by using [🗨️ Style Directives](Style-Directives).