# 🧩 IDEFAULT_CHART_TYPE_OPTIONS

The *IDEFAULT_CHART_TYPE_OPTIONS* constant defines the available chart types, and the default configuration used to render each chart type.

The constant is an array, containing a separate element for each unique chart type.

Each element in the constant contains the following children by default.

| Name | Type | Description |
|------|------|-------------|
| **alternative_names**                 | array   | Other names that this chart type is known by. |
| **chart_group**                       | string  | Used to group different chart types into groups. |
| **data_type**                         | string  | Defines the data type supported by this chart. |
| **chart_description**                 | string  | Defines a HTML description of this chart type that is used in help documentation. Remember to escape special characters in the string. |
| **data_description**                  | string  | Defines a HTML description of type of data used by this chart type. Remember to escape special characters in the string. |
| **draw_functionname**                 | string  | Defines the name of the JavaScript function that is used to render this chart. The function specified here may itself call other functions in the *common* or *modular* files. |
| **supported_options**                 | array   | Defines an array of chart attribute names that are supported by this chart. |
| **default_template**                  | string  | Defines the style template name that will be used by default to customize the look of this chart. |
| **ignore_negative_values**            | boolean | When this value is set to `true`, instructs the chart to ignore values smaller than `0`. |
| **ignore_zero_values**                | voolean | When this value is set to `true`, instructs the chart to ignore `0`-values. |
| **requires_zero_baseline**            | boolean | When this value is set to `true`, instructs the chart to always render the chart showing the `0`-axis line. |
| **allow_multiseries**                 | boolean | When this value is set to `true`, instructs the chart to allow and parse multiple data sets.
| **allowed_palettes**                  | array   | Defines an array containing the names of the color palette types that are supported by this chart type.<br>Refer to the [[Color Palettes]] page for detailed information about the different color palette types supported by **js-charts**. |
| **allowed_style_directive_groups**    | array   | Defines an array containg the short names of the style directives that are supported by this chart type.<br>Refer to the [[Style Directives]] page for a detailed list of all style directives that are supported by this chart type. |
| **type_options**                      | array   | Defines n array of *sub-options* for this chart type. Sub-options differ between different chart types.<br>The following chart type sub-options are supported:<br><br>- **enable_debug**: Toggle if the debugging link should be rendered on a chart.<br>- **startangle**: Specify the default start angle for pie, doughnut and stacked doughnut charts.<br>- **sum_groups**: Switch indicating whether totals should be calculated for each data set individually, or for each data set individually ***and*** as a group of data sets.<br>- **enable_debug**: Indicates if the BETA label should be rendered on this chart type. This label is rendred on charts that are new and have not been proven to work reliably. This may be because the code is new and unproven, or the technique or mechanism used to draw this chart type is unproven. |

----

## 🔍 Additional Reading

Refer to the following resources for additional reading material.

- See the [🗂️ Chart Types](Chart-Types) page for a list of chart types that are supported by **js-charts**.
- Read more about [🧰 Chart Attributes](Chart-Attributes) and how they change the behaviour of a chart.
- Refer to the [🛠️ Style Templates](Style-Templates) page for a detailed list of style templates that are supported out-of-the-box.
- Learn how to customize the look of a chart by using [🗨️ Style Directives](Style-Directives).