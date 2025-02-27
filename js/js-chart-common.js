// TO DO
//
// Add sortdata chart attribute to all chart types in IDEFAULT_CHART_TYPE_OPTIONS


/*
class
type
version
template
jsondata

width
height

title
xtitle
ytitle
holetitle

scalemin
scalemax
xscalemin
xscalemax
yscalemin
yscalemax
vscalemin
vscalemax
startangle

swapaxis
sortdata
limitdata

showborder
showlabels
showlegend
showcontrols
showdatatable
showgridlines
showzeroline
showlines
showmedians
showmarkers
markertype
showdiff
drawalg

showwidget
*/

// define the default number of places to round to
const IDEFAULT_NO_OF_DECIMAL_PLACES = 2;

// define the logging level. a log severity level qual or bigger than the default will be displayed to the browser console
const IDEFAULT_LOG_SEVERITY_LEVEL = 1;

// define default values for the chart attributes (options)
const IDEFAULT_CHART_ATTRIBUTES = {
    "class": {
        "default": "js-chart",
        "control": "none",
        "label": "none",
        "description": "none"
    },
    "type": {
        "default": "pie",
        "control": "dropdown",
        "label": "Chart type",
        "description": "Change the type of chart to render."
    },
    "version": {
        "default": "2.0",
        "control": "dropdown",
        "label": "Version",
        "description": "Change the version of the chart. This may change the look and feel of the chart."
    },
    "template": {
        "default": "default",
        "control": "dropdown",
        "label": "Design template",
        "description": "Set the template that is used to style the chart."
    },
    "jsondata": {
        "default": "default",
        "control": "text",
        "label": "JSON data source",
        "description": "Set the source of the input data in JSON format."
    },
    "width": {
        "default": "600px",
        "control": "text",
        "label": "Chart width",
        "description": "Set the total width of the chart. Remember to include the unit of measure, e.g. 600px."
    },
    "height": {
        "default": "400px",
        "control": "text",
        "label": "Chart height",
        "description": "Set the total height of the chart. Remember to include the unit of measure e.g. 400px."
    },
    "title": {
        "default": "",
        "control": "text",
        "label": "Chart title",
        "description": "Set the title of the chart"
    },
    "xtitle": {
        "default": "",
        "control": "text",
        "label": "X-axis title",
        "description": "Set the title to appear on the x-axis."
    },
    "ytitle": {
        "default": "",
        "control": "text",
        "label": "Y-axis title",
        "description": "Set the title to appear on the y-axis."
    },
    "holetitle": {
        "default": "",
        "control": "text",
        "label": "Doughnut hole title",
        "description": "Set the title to sppear in the doughnut hole."
    },
    "scalemin": {
        "default": "auto",
        "control": "text",
        "label": "Scale min. value",
        "description": "Set the minimum value on the scale."
    },
    "scalemax": {
        "default": "auto",
        "control": "text",
        "label": "Scale max value",
        "description": "Set the maximum value on the scale."
    },
    "xscalemin": {
        "default": "auto",
        "control": "text",
        "label": "X-axis scale min. value",
        "description": "Set the minimum value on the x-axis scale."
    },
    "xscalemax": {
        "default": "auto",
        "control": "text",
        "label": "X-axis scale max value",
        "description": "Set the maximum value on the x-axis scale."
    },
    "yscalemin": {
        "default": "auto",
        "control": "text",
        "label": "Y-axis scale min. value",
        "description": "Set the minimum value on the y-axis scale."
    },
    "yscalemax": {
        "default": "auto",
        "control": "text",
        "label": "Y-axis scale max value",
        "description": "Set the maximum value on the y-axis scale."
    },
    "vscalemin": {
        "default": "auto",
        "control": "text",
        "label": "Value scale min. value",
        "description": "Set the minimum value on the value-axis scale."
    },
    "vscalemax": {
        "default": "auto",
        "control": "text",
        "label": "Value scale max value",
        "description": "Set the maximum value on the value-axis scale."
    },
    "startangle": {
        "default": "0deg",
        "control": "dropdown",
        "label": "Starting angle",
        "description": "Set the starting angle of the pie, doughnut or stacked doughnut chart."
    },
    "swapaxis": {
        "default": false,
        "control": "checkbox",
        "label": "Swap chart axis",
        "description": "Swap the value along the axis."
    },
    "sortdata": {
        "default": false,
        "control": "text",
        "label": "Sort text.",
        "description": "Specify the sort ordering text."
    },
    "limitdata": {
        "default": false,
        "control": "text",
        "label": "Limit data.",
        "description": "Limit the number of data points that will be processed."
    },
    "showborder": {
        "default": true,
        "control": "checkbox",
        "label": "Chart border",
        "description": "Toggle (show or hide) the border around the chart."
    },
    "showlabels": {
        "default": "auto",
        "control": "dropdown",
        "label": "Data labels",
        "description": "Toggle (show or hide) the data lables on the chart canvas."
    },
    "showlegend": {
        "default": true,
        "control": "dropdown",
        "label": "Legend",
        "description": "Toggle (show or hide) or set the position of the chart legend."
    },
    "showgridlines": {
        "default": false,
        "control": "checkbox",
        "label": "Show gridlines",
        "description": "Toggle (show or hide) grid lines on the chart canvas."
    },
    "showzeroline": {
        "default": true,
        "control": "checkbox",
        "label": "Show zero line",
        "description": "Toggle (show or hide) the zero grid line on the chart canvas."
    },
    "showcontrols": {
        "default": true,
        "control": "checkbox",
        "label": "Controls panel",
        "description": "Toggle (show or hide) the controls panel."
    },
    "showdatatable": {
        "default": false,
        "control": "dropdown",
        "label": "Data table",
        "description": "Toggle (show or hide) the data table containing the raw data of the chart."
    },
    "showlines": {
        "default": true,
        "control": "checkbox",
        "label": "Lines",
        "description": "Toggle (show or hide) a line chart imposed on top of the chart canvas."
    },
    "showmedians": {
        "default": true,
        "control": "checkbox",
        "label": "Medians",
        "description": "Toggle (show or hide) a median line imposed on top of the box plot."
    },
    "showwhiskers": {
        "default": true,
        "control": "checkbox",
        "label": "Whiskers",
        "description": "Toggle (show or hide) whiskers imposed on top of the chart canvas."
    },
    "showmarkers": {
        "default": true,
        "control": "checkbox",
        "label": "Markers",
        "description": "Toggle (show or hide) markers imposed on the chart canvas."
    },
    "markertype": {
        "default": "circle",
        "control": "dropdown",
        "label": "Marker type",
        "description": "Change the scatter chart marker / pointer."
    },
    "showdiff": {
        "default": false,
        "control": "checkbox",
        "label": "Difference (up/down) columns",
        "description": "Toggle (show/hide) difference (up/down) columns."
    },
    "drawalg": {
        "default": "auto",
        "control": "dropdown",
        "label": "Algorithm",
        "description": "Specify the draw algorithm."
    },
    "showwidget": {
        "default": false,
        "control": "checkbox",
        "label": "Widget view",
        "description": "Toggle between normal and widget mode. In widget mode, only a simple uncluttered version of the chart is rendered."
    }
}

// define the default design elements
const IDEFAULT_DESIGN_TEMPLATES = [
    {
        "name": "default",
        "description": "default design elements",
        "chart_font_family": "\"Open Sans\", sans-serif",
        "chart_font_size": "var(--js-chart-size-large)",
        "chart_font_weight": 200,
        "chart_bg_color": "transparent",
        "chart_text_color": "#000000",
        "chart_border": "0.5px solid #eeeeee",
        "chart_border_radius": "10px",
        "chart_box_shadow": "none",
        "title_font_family": "\"Open Sans\", sans-serif",
        "title_font_size": "21px",
        "title_font_weight": 200,
        "title_bg_color": "transparent",
        "title_text_color": "#000000",
        "title_border": "none",
        "title_border_radius": "10px 10px 0px 0px",
        "title_box_shadow": "none",
        "control_button_font_family": "\"Open Sans\", sans-serif",
        "control_button_font_size": "10px",
        "control_button_font_weight": 300,
        "control_button_bg_color": "#3E5879",
        "control_button_text_color": "White",
        "control_button_border": "0.5px solid #dddddd",
        "control_button_border_radius": "0px 5px 5px 0px",
        "control_button_box_shadow": "2px 2px 2px #999999",
        "control_button_opacity": "1.0",
        "legend_font_family": "\"Open Sans\", sans-serif",
        "legend_font_size": "11px",
        "legend_font_weight": 200,
        "legend_bg_color": "transparent",
        "legend_text_color": "#000000",
        "legend_border": "none",
        "legend_border_radius": "3px",
        "legend_box_shadow": "none",
        "legend_opacity": "1.0",
        "datatable_font_family": "\"Open Sans\", sans-serif",
        "datatable_font_size": "11px",
        "datatable_font_weight": 200,
        "datatable_bg_color": "transparent",
        "datatable_text_color": "#000000",
        "datatable_border": "none",
        "datatable_border_radius": "5px",
        "datatable_box_shadow": "none",
        "datatable_scrollbar_color": "SteelBlue White",
        "datatable_height": "60px",
        "options_menu_title_font_family": "\"Open Sans\", sans-serif",
        "options_menu_title_font_size": "var(--js-chart-size-large)",
        "options_menu_title_font_weight": 600,
        "options_menu_title_bg_color": "#3E5879",
        "options_menu_title_text_color": "White",
        "options_menu_title_border": "none",
        "options_menu_title_border_radius": "10px 10px 0px 0px",
        "options_menu_title_box_shadow": "none",
        "options_menu_title_opacity": "1.0",
        "options_menu_font_family": "\"Open Sans\", sans-serif",
        "options_menu_font_size": "var(--js-chart-size-normal)",
        "options_menu_font_weight": 200,
        "options_menu_bg_color": "White",
        "options_menu_text_color": "#000000",
        "options_menu_border": "0.5px solid #dddddd",
        "options_menu_border_radius": "10px",
        "options_menu_box_shadow": "3px 3px 3px #666666",
        "options_menu_opacity": "1.0",
        "options_menu_scrollbar_color": "White #3E5879",
        "datalabel_prepend": "",
        "datalabel_append": "",
        "datalabel_width": "30px",
        "datalabel_height": "15px",
        "datalabel_font_family": "\"Open Sans\", sans-serif",
        "datalabel_font_size": "10px",
        "datalabel_font_weight": 200,
        "datalabel_bg_color": "transparent",
        "datalabel_text_color": "white",
        "datalabel_border": "none",
        "datalabel_border_radius": "0px",
        "datalabel_box_shadow": "none",
        "datalabel_opacity": "1.0",
        "canvas_box_shadow": "0px 0px 3px #666666",
        "canvas_scrollbar_color": "#3E5879 White",
        "canvas_bg_color": "transparent",
        "scale_border": "0.5px solid #bbbbbb",
        "scale_text_color": "#000000",
        "value_bar_border": "none",
        "value_bar_border_radius": "0px",
        "value_bar_box_shadow": "none",
        "value_bar_opacity": "1.0",
        "value_bar_min_height": "25px",
        "value_bar_min_width": "25px",
        "value_bar_series_margin": "0px",
        "value_bar_data_margin": "0px",
        "value_bar_hover_bg_color": "#ffffe6",
        "grid_line_color": "#eeeeee",
        "grid_line_thickness": "0.5px",
        "zero_line_color": "#bbbbbb",
        "zero_line_thickness": "0.5px",
        "value_line_opacity": "1.0",
        "value_line_thickness": "3px",
        "value_line_min_height": "1px",
        "value_line_min_width": "1px",
        "value_line_color": "black",
        "footer_font_family": "\"Open Sans\", sans-serif",
        "footer_font_size": "9px",
        "footer_font_weight": 200,
        "footer_bg_color": "transparent",
        "footer_text_color": "#000000",
        "footer_border": "none",
        "footer_border_radius": "0px 0px 10px 10px",
        "footer_box_shadow": "none",
        "footer_inner_text": "2024 \u00A9 Wrathcom Ltd",
        "color_palette": ["Orange", "#3E5879", "#213555", "#6A9AB0", "CadetBlue", "#BCCCDC", "#778899", "#BDB76B", "NavajoWhite", "DarkOliveGreen"],
        "color_position": ["20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%"],
        "bin_size": 1,
        "marker_width": "15px",
        "marker_height": "15px",
        "marker_border": "none",
        "marker_border_radius": "none",
        "marker_box_shadow": "none",
        "marker_opacity": "1.0",
        "marker_emoji": ["0x1F9E1", "0x1F44D", "0x1F44E"],
        "not_defined_bg_color": "silver",
        "not_defined_text_color": "white",
        "diff_column_font_family": "\"Open Sans\", sans-serif",
        "diff_column_font_size": "10px",
        "diff_column_font_weight": 400,
        "diff_column_border": "0.5px dashed #333333",
        "diff_column_border_radius": "3px",
        "diff_column_box_shadow": "none",
        "diff_column_opacity": "1.0",
        "diff_column_negative_bg_color": "#ffdddd",
        "diff_column_negative_text_color": "black",
        "diff_column_positive_bg_color": "#ddffdd",
        "diff_column_positive_text_color": "black",
        /*
        "candle_min_width": "10px",
        "candle_min_height": "3px",
        "candle_data_margin": "16px",
        "candle_border": "none",
        "candle_border_radius": "0px",
        "candle_box_shadow": "none",
        "candle_opacity": "1.0",
        "candle_wick_min_width": "2px",
        "candle_wick_min_height": "2px",
        "candle_wick_bg_color": "black",
        "candle_wick_border": "none",
        "candle_wick_border_radius": "0px",
        "candle_wick_box_shadow": "none",
        "candle_wick_opacity": "1.0",
        */
        "venn_title_font_family": "\"Open Sans\", sans-serif",
        "venn_title_font_size": "14px",
        "venn_title_font_weight": 600,
        "venn_title_text_color": "white",
        "venn_font_family": "\"Open Sans\", sans-serif",
        "venn_font_size": "12px",
        "venn_font_weight": 400,
        "venn_text_color": "white",
        "venn_sub_font_family": "\"Open Sans\", sans-serif",
        "venn_sub_font_size": "10px",
        "venn_sub_font_weight": 400,
        "venn_sub_text_color": "white",
        "venn_opacity": "55%"
    },
    {
        "name": "darkweb",
        "description": "darkweb design elements",
        "chart_font_family": "\"Open Sans\", sans-serif",
        "chart_font_size": "var(--js-chart-size-large)",
        "chart_font_weight": 200,
        "chart_bg_color": "#555555",
        "chart_text_color": "#eeeeee",
        "chart_border": "0.5px solid #555555",
        "chart_border_radius": "10px",
        "chart_box_shadow": "none",
        "title_font_family": "\"Open Sans\", sans-serif",
        "title_font_size": "21px",
        "title_font_weight": 200,
        "title_bg_color": "transparent",
        "title_text_color": "#eeeeee",
        "title_border": "none",
        "title_border_radius": "10px 10px 0px 0px",
        "title_box_shadow": "none",
        "control_button_font_family": "\"Open Sans\", sans-serif",
        "control_button_font_size": "10px",
        "control_button_font_weight": 300,
        "control_button_bg_color": "#606060",
        "control_button_text_color": "#eeeeee",
        "control_button_border": "0.5px solid #555555",
        "control_button_border_radius": "0px 5px 5px 0px",
        "control_button_box_shadow": "2px 2px 2px #444444",
        "control_button_opacity": "1.0",
        "legend_font_family": "\"Open Sans\", sans-serif",
        "legend_font_size": "11px",
        "legend_font_weight": 200,
        "legend_bg_color": "transparent",
        "legend_text_color": "#eeeeee",
        "legend_border": "none",
        "legend_border_radius": "3px",
        "legend_box_shadow": "none",
        "legend_opacity": "1.0",
        "datatable_font_family": "\"Open Sans\", sans-serif",
        "datatable_font_size": "10px",
        "datatable_font_weight": 200,
        "datatable_bg_color": "#777777",
        "datatable_text_color": "#eeeeee",
        "datatable_border": "none",
        "datatable_border_radius": "5px",
        "datatable_box_shadow": "none",
        "datatable_scrollbar_color": "#666666 White",
        "datatable_height": "60px",
        "options_menu_title_font_family": "\"Open Sans\", sans-serif",
        "options_menu_title_font_size": "var(--js-chart-size-xlarge)",
        "options_menu_title_font_weight": 600,
        "options_menu_title_bg_color": "#666666",
        "options_menu_title_text_color": "#eeeeee",
        "options_menu_title_border": "0.5px solid #999999",
        "options_menu_title_border_radius": "10px 10px 0px 0px",
        "options_menu_title_box_shadow": "none",
        "options_menu_title_opacity": "1.0",
        "options_menu_font_family": "\"Open Sans\", sans-serif",
        "options_menu_font_size": "var(--js-chart-size-normal)",
        "options_menu_font_weight": 200,
        "options_menu_bg_color": "#999999",
        "options_menu_text_color": "#eeeeee",
        "options_menu_border": "0.5px solid #999999",
        "options_menu_border_radius": "10px",
        "options_menu_box_shadow": "3px 3px 3px #222222",
        "options_menu_opacity": "1.0",
        "options_menu_scrollbar_color": "#666666 #999999",
        "datalabel_prepend": "",
        "datalabel_append": "",
        "datalabel_width": "30px",
        "datalabel_height": "15px",
        "datalabel_font_family": "\"Open Sans\", sans-serif",
        "datalabel_font_size": "10px",
        "datalabel_font_weight": 200,
        "datalabel_bg_color": "transparent",
        "datalabel_text_color": "black",
        "datalabel_border": "none",
        "datalabel_border_radius": "0px",
        "datalabel_box_shadow": "none",
        "datalabel_opacity": "1.0",
        "canvas_box_shadow": "0px 0px 3px #444444",
        "canvas_scrollbar_color": "#666666 #999999",
        "canvas_bg_color": "transparent",
        "scale_border": "0.5px solid #bbbbbb",
        "scale_text_color": "#eeeeee",
        "value_bar_border": "none",
        "value_bar_border_radius": "0px",
        "value_bar_box_shadow": "none",
        "value_bar_opacity": "1.0",
        "value_bar_min_height": "25px",
        "value_bar_min_width": "25px",
        "value_bar_series_margin": "0px",
        "value_bar_data_margin": "0px",
        "value_bar_hover_bg_color": "#666666",
        "grid_line_color": "#eeeeee",
        "grid_line_thickness": "0.5px",
        "zero_line_color": "#bbbbbb",
        "zero_line_thickness": "0.5px",
        "value_line_opacity": "1.0",
        "value_line_thickness": "3px",
        "value_line_min_height": "1px",
        "value_line_min_width": "1px",
        "value_line_color": "black",
        "footer_font_family": "\"Open Sans\", sans-serif",
        "footer_font_size": "9px",
        "footer_font_weight": 200,
        "footer_bg_color": "transparent",
        "footer_text_color": "#eeeeee",
        "footer_border": "none",
        "footer_border_radius": "0px 0px 10px 10px",
        "footer_box_shadow": "none",
        "footer_inner_text": "2024 \u00A9 Wrathcom Ltd",
        "color_palette": ["CornflowerBlue", "PowderBlue", "LightSteelBlue", "SteelBlue", "RoyalBlue", "DarkOrchid", "SlateBlue", "Orchid", "Plum"],
        "color_position": ["20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%"],
        "bin_size": 1,
        "marker_width": "15px",
        "marker_height": "15px",
        "marker_border": "none",
        "marker_border_radius": "none",
        "marker_box_shadow": "none",
        "marker_opacity": "1.0",
        "marker_emoji": ["0x1F9E1", "0x1F44D", "0x1F44E"],
        "not_defined_bg_color": "silver",
        "not_defined_text_color": "white",
        "diff_column_font_family": "\"Open Sans\", sans-serif",
        "diff_column_font_size": "10px",
        "diff_column_font_weight": 400,
        "diff_column_border": "0.5px solid #333333",
        "diff_column_border_radius": "3px",
        "diff_column_box_shadow": "none",
        "diff_column_opacity": "1.0",
        "diff_column_negative_bg_color": "#ffdddd",
        "diff_column_negative_text_color": "black",
        "diff_column_positive_bg_color": "#ddffdd",
        "diff_column_positive_text_color": "black",
        /*
        "candle_min_width": "4px",
        "candle_min_height": "3px",
        "candle_data_margin": "10px",
        "candle_border": "none",
        "candle_border_radius": "0px",
        "candle_box_shadow": "none",
        "candle_opacity": "1.0",
        "candle_wick_min_width": "1px",
        "candle_wick_min_height": "3px",
        "candle_wick_bg_color": "#ababab",
        "candle_wick_border": "none",
        "candle_wick_border_radius": "0px",
        "candle_wick_box_shadow": "none",
        "candle_wick_opacity": "1.0",
        */
        "venn_title_font_family": "\"Open Sans\", sans-serif",
        "venn_title_font_size": "14px",
        "venn_title_font_weight": 600,
        "venn_title_text_color": "white",
        "venn_font_family": "\"Open Sans\", sans-serif",
        "venn_font_size": "12px",
        "venn_font_weight": 400,
        "venn_text_color": "white",
        "venn_sub_font_family": "\"Open Sans\", sans-serif",
        "venn_sub_font_size": "10px",
        "venn_sub_font_weight": 400,
        "venn_sub_text_color": "white",
        "venn_opacity": "55%"
    }
]

// define the supported chart groups and types
// const IDFAULT_CHART_GROUPS = {
//     "pie": ["pie", "dougnut", "stacked doughnut"],
//     "bar": ["bar", "stacked bar", "relative stacked bar", "radial bar", "bullet", "funnel", "lollipop"]
// }

// define the chart type default options
const IDEFAULT_CHART_TYPE_OPTIONS = {
    "pie": {
        "alternative_names": [],
        "chart_group": "pie",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawPieChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "startangle", "swapaxis", "showborder", "showlabels", "showlegend", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": true,
        "ignore_zero_values": true,
        "requires_zero_baseline": false,
        "allow_multiseries": false,
        "allowed_palettes": ["qualitative"],
        "type_options": {
            "startangle": "0deg",
            "sum_groups": true
        }
    },
    "doughnut": {
        "alternative_names": [],
        "chart_group": "pie",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawDoughnutChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "holetitle", "startangle", "swapaxis", "showborder", "showlabels", "showlegend", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": true,
        "ignore_zero_values": true,
        "requires_zero_baseline": false,
        "allow_multiseries": false,
        "allowed_palettes": ["qualitative"],
        "type_options": {
            "startangle": "0deg",
            "sum_groups": true
        }
    },
    "stacked doughnut": {
        "alternative_names": ["relative stacked doughnut"],
        "chart_group": "pie",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawStackedDoughnutChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "holetitle", "startangle", "swapaxis", "showborder", "showlabels", "showlegend", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": true,
        "ignore_zero_values": true,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
            "startangle": "0deg",
            "sum_groups": true
        }
    },
    "bar": {
        "alternative_names": ["clustered bar"],
        "chart_group": "bar",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawBarChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "scalemin", "scalemax", "swapaxis", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": true,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "stacked bar": {
        "alternative_names": ["absolute stacked bar"],
        "chart_group": "bar",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawStackedBarChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "scalemin", "scalemax", "swapaxis", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": true,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "100% stacked bar": {
        "alternative_names": ["relative stacked bar"],
        "chart_group": "bar",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawRelativeStackedBarChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "swapaxis", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": true,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "lollipop bar": {
        "alternative_names": [],
        "chart_group": "bar",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawLollipopBarChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "scalemin", "scalemax", "swapaxis", "showborder", "showlabels", "showlegend", "showlines", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": true,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "stacked lollipop bar": {
        "alternative_names": [],
        "chart_group": "bar",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawStackedLollipopBarChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "scalemin", "scalemax", "swapaxis", "showborder", "showlabels", "showlegend", "showlines", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": true,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "100% stacked lollipop bar": {
        "alternative_names": [],
        "chart_group": "bar",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawRelativeStackedLollipopBarChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "scalemin", "scalemax", "swapaxis", "showborder", "showlabels", "showlegend", "showlines", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": true,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "column": {
        "alternative_names": ["clustered column"],
        "chart_group": "column",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawColumnChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "scalemin", "scalemax", "swapaxis", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": true,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "stacked column": {
        "alternative_names": ["absolute stacked column"],
        "chart_group": "column",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawStackedColumnChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "scalemin", "scalemax", "swapaxis", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": true,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "100% stacked column": {
        "alternative_names": ["relative stacked column"],
        "chart_group": "column",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawRelativeStackedColumnChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "swapaxis", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": true,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "span bar": {
        "alternative_names": ["range bar", "floating bar", "difference bar", "high low bar"],
        "chart_group": "span",
        "data_type": "range",
        "draw_functionname": "jsChartDrawSpanBarChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "scalemin", "scalemax", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "span column": {
        "alternative_names": ["range column", "floating column", "difference column", "high low column"],
        "chart_group": "span",
        "data_type": "range",
        "draw_functionname": "jsChartDrawSpanColumnChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "scalemin", "scalemax", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "lollipop column": {
        "alternative_names": [],
        "chart_group": "column",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawLollipopColumnChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "scalemin", "scalemax", "swapaxis", "showborder", "showlabels", "showlegend", "showlines", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": true,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "stacked lollipop column": {
        "alternative_names": [],
        "chart_group": "column",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawStackedLollipopColumnChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "scalemin", "scalemax", "swapaxis", "showborder", "showlabels", "showlegend", "showlines", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": true,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "100% stacked lollipop column": {
        "alternative_names": [],
        "chart_group": "column",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawRelativeStackedLollipopColumnChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "scalemin", "scalemax", "swapaxis", "showborder", "showlabels", "showlegend", "showlines", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": true,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "funnel bar": {
        "alternative_names": [],
        "chart_group": "funnel",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawFunnelBarChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "ytitle", "xtitle", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": true,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": false,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "funnel column": {
        "alternative_names": [],
        "chart_group": "funnel",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawFunnelColumnChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "ytitle", "xtitle", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": true,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": false,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "waterfall bar": {
        "alternative_names": ["flying bar", "mario bar"],
        "chart_group": "waterfall",
        "data_type": "cumulative",
        "draw_functionname": "jsChartDrawWaterfallBarChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "ytitle", "xtitle", "scalemin", "scalemax", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": true,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "waterfall column": {
        "alternative_names": ["flying column", "mario column"],
        "chart_group": "waterfall",
        "data_type": "cumulative",
        "draw_functionname": "jsChartDrawWaterfallColumnChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "ytitle", "xtitle", "scalemin", "scalemax", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": true,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "histogram": {
        "alternative_names": [],
        "chart_group": "histogram",
        "data_type": "frequency",
        "draw_functionname": "jsChartDrawHistogramChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "sortdata", "scalemin", "scalemax", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": true,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "scatter": {
        "alternative_names": ["scattergram"],
        "chart_group": "scatter",
        "data_type": "points",
        "draw_functionname": "jsChartDrawScatterChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "xscalemin", "xscalemax", "yscalemin", "yscalemax", "swapaxis", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "markertype", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "bubble": {
        "alternative_names": [],
        "chart_group": "scatter",
        "data_type": "points",
        "draw_functionname": "jsChartDrawBubbleChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "xscalemin", "xscalemax", "yscalemin", "yscalemax", "swapaxis", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "heatmap": {
        "alternative_names": ["heat map"],
        "chart_group": "heatmap",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawHeatmapChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "swapaxis", "sortdata", "showborder", "showlabels", "showlegend", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative", "sequential", "diverging"],
        "type_options": {
        }
    },
    "line": {
        "alternative_names": [""],
        "chart_group": "line",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawLineChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "swapaxis", "sortdata", "showborder", "showlabels", "showlegend", "showlines", "showmarkers", "showdiff", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "stacked line": {
        "alternative_names": [""],
        "chart_group": "line",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawStackedLineChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "swapaxis", "sortdata", "showborder", "showlabels", "showlegend", "showlines", "showmarkers", "showdiff", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "100% stacked line": {
        "alternative_names": [""],
        "chart_group": "line",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawRelativeStackedLineChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "swapaxis", "sortdata", "showborder", "showlabels", "showlegend", "showlines", "showmarkers", "showdiff", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "population pyramid": {
        "alternative_names": [""],
        "chart_group": "pyramid",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawPopulationPyramidChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "sortdata", "scalemin", "scalemax", "showborder", "showlabels", "showlegend", "showgridlines", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": true,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
            "enable_beta": true
        }
    },
    "candlestick": {
        "alternative_names": ["japanese candlestick"],
        "chart_group": "stock",
        "data_type": "ohlc",
        "draw_functionname": "jsChartDrawCandlestickChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "limitdata", "scalemin", "scalemax", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
            "enable_beta": true
        }
    },
    "ohlc": {
        "alternative_names": ["open-high-low-close", "price"],
        "chart_group": "stock",
        "data_type": "ohlc",
        "draw_functionname": "jsChartDrawOHLCChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "limitdata", "scalemin", "scalemax", "showborder", "showlabels", "showlegend", "showgridlines", "showzeroline", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
            "enable_beta": true
        }
    },
    "parallel coordinates": {
        "alternative_names": [""],
        "chart_group": "parallel",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawParallelCoordinatesChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "swapaxis", "sortdata", "showborder", "showlabels", "showcontrols", "showdatatable", "showgridlines", "showzeroline", "showlines", "showmarkers", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
        }
    },
    "venn diagram": {
        "alternative_names": ["sey diagram"],
        "chart_group": "diagram",
        "data_type": "set",
        "draw_functionname": "jsChartDrawVennDiagram",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "showborder", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": true,
        "ignore_zero_values": true,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
            "enable_beta": true
        }
    },
    "box plot": {
        "alternative_names": ["vertical box plot", "boxplot", "box and whisker", "box-and-whisker", "box and whisker plot", "box-and-whisker plot"],
        "chart_group": "boxplot",
        "data_type": "series",
        "draw_functionname": "jsChartDrawBoxPlot",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "scalemin", "scalemax", "sortdata", "showborder", "showlabels", "showlegend", "showcontrols", "showdatatable", "showmedians", "showwhiskers", "showgridlines", "showzeroline", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
            "enable_beta": true
        }
    },
    "horizontal box plot": {
        "alternative_names": ["horizontal boxplot", "horizontal box and whisker", "horizontal box-and-whisker", "horizontal box and whisker plot", "horizontal box-and-whisker plot"],
        "chart_group": "boxplot",
        "data_type": "series",
        "draw_functionname": "jsChartDrawHorizontalBoxPlot",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "scalemin", "scalemax", "sortdata", "showborder", "showlabels", "showlegend", "showcontrols", "showdatatable", "showmedians", "showwhiskers", "showgridlines", "showzeroline", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": false,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
            "enable_beta": true
        }
    },
    "marimekko": {
        "alternative_names": ["100% marimekko", "relative marimekko", "mosaic plot", "mekko chart"],
        "chart_group": "mosaic",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawMarimekkoChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "yscalemin", "yscalemax", "swapaxis", "sortdata", "limitdata", "showborder", "showlabels", "showlegend", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": true,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
            "enable_beta": true
        }
    },
    "marimekko column": {
        "alternative_names": ["100% marimekko column", "relative marimekko column", "mosaic column plot", "mekko column chart"],
        "chart_group": "mosaic",
        "data_type": "categorical",
        "draw_functionname": "jsChartDrawMarimekkoColumnChart",
        "supported_options": ["class", "type", "version", "template", "width", "height", "title", "xtitle", "ytitle", "yscalemin", "yscalemax", "swapaxis", "sortdata", "limitdata", "showborder", "showlabels", "showlegend", "showcontrols", "showdatatable", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": true,
        "ignore_zero_values": false,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative"],
        "type_options": {
            "enable_beta": true
        }
    },
    "treemap": {
        "alternative_names": [],
        "chart_group": "mosaic",
        "data_type": "hierarchical",
        "draw_functionname": "jsChartDrawTreemapChart",
        "supported_options": ["class", "type", "version", "template", "jsondata", "width", "height", "title", "sortdata", "limitdata", "showborder", "showlabels", "showlegend", "showcontrols", "showdatatable", "drawalg", "showwidget"],
        "default_template": "default",
        "ignore_negative_values": true,
        "ignore_zero_values": true,
        "requires_zero_baseline": false,
        "allow_multiseries": true,
        "allowed_palettes": ["qualitative", "sequential", "discrete"],
        "type_options": {
            "enable_debug": true,
            "enable_beta": true
        }
    }
}

// log an error message to the console
function jsChartLogErrorMessage( log_text , log_severity = 1) {
    // Log severity level:
    // 1. Debug
    // 2. Informationa;
    // 3. Warning
    // 4. Fatal

    switch (parseInt(log_severity)) {
        case 1:
            var log_severity_name = "debug";
            break;
        case 2:
            var log_severity_name = "information";
            break;
        case 3:
            var log_severity_name = "warning";
            break;
        case 4:
            var log_severity_name = "fatal";
            break;
        default:
            var log_severity_name = "debug";
            break;
    }

    if (log_severity >= IDEFAULT_LOG_SEVERITY_LEVEL) {
        console.log(log_severity_name + " >> " + log_text );
    }

    return true;
}

// handle a window resize event listener
window.addEventListener("resize", function () { jsChartLogErrorMessage("Window resize detected.", 1); initChart(); }, false);

// create a space where dynamic stylesheets can be saved globlly to be accessed for printing later
const dynamic_stylesheet = document.createElement('style');
document.head.appendChild( dynamic_stylesheet );
const dynamic_stylesheet_index = ( document.styleSheets.length - 1 );

// create a global counter to be used with the above dynamic_stylesheet_index
var dynamic_stylesheet_rule_index = 0;


// handle the increase z-index event
function increaseZIndex(event) {
    this.style.zIndex = 200;
}
// handle the decrease z-index event
function decreaseZIndex(event) {
    this.style.zIndex = 100;
}
// return a random Int between two values
function jsChartGetRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
// generate a random number (float) - input: min (inclusive) and max(exclisive)
function jsChartGetRandomFloat(min, max) {
    return ( Math.random() * (max - min) + min );
}
// Round to the specified number of decimal places
//return Math.round((a + Number.EPSILON) * 100) / 100
function roundNumber(num, decimal_places) {
    var i = 0, multipler = 1;
    if(isNaN(decimal_places)) {
        decimal_places = IDEFAULT_NO_OF_DECIMAL_PLACES;
    }
    decimal_places = parseInt( decimal_places );
    for (i = 0; i < decimal_places; i++) {
        multipler = multipler * 10;
    }
    if (decimal_places < 1) {
        decimal_places = IDEFAULT_NO_OF_DECIMAL_PLACES;
    }
    return Math.round((num + Number.EPSILON) * multipler) / multipler;
}
// standardize the color name / decimal / hex / hls / hlsa colors
function jsChartCommonStandardizeColor(str){
    var ctx = document.createElement('canvas').getContext('2d');
    ctx.fillStyle = str;
    return ctx.fillStyle;
}
// return a list of random values
function jsChartGenerateRandomList(min_value, max_value, list_len, type = "int", exclude_start = null, exclude_end = null) {
    if ((type.trim() != "int") && (type.trim() != "float")) {
        type = "int";
    }
    if ((typeof list_len !== "number") || (list_len <= 0)) {
        list_len = 10;
    }
    if (typeof min_value !== "number") {
        min_value = 0;
    }
    if (typeof max_value !== "number") {
        max_value = 100;
    }
    if (min_value > max_value) {
        var temp_value = min_value;
        min_value = max_value;
        max_value = temp_value;
    }

    if (((typeof exclude_start === "number") || (typeof exclude_end === "number")) && ((exclude_start >= min_value) && (exclude_end <= max_value))) {
        var return_list = [];
        if (type == "int") {
            var loop_count = 0;
            while (loop_count < list_len) {
                var random_int = jsChartGetRandomInt(min_value, max_value);
                if ((random_int < exclude_start) || (random_int > exclude_end)) {
                    loop_count++;
                    return_list.push( random_int );
                }
            }
        } else {
            for (var tt = 0; tt < list_len; tt++) {
                return_list.push( roundNumber( jsChartGetRandomFloat(min_value, max_value) , 3) );
            }
        }
    } else {
        var return_list = [];
        if (type == "int") {
            for (var tt = 0; tt < list_len; tt++) {
                return_list.push( jsChartGetRandomInt(min_value, max_value) );
            }
        } else {
            for (var tt = 0; tt < list_len; tt++) {
                return_list.push( roundNumber( jsChartGetRandomFloat(min_value, max_value) , 3) );
            }
        }
    }

    return return_list.join(", ");
}
// filter function that only returns uniqe values from an array
function jsChartOnlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}
// return true or false is debugging is enabled/disabled for a chart type
function jsChartCommonIsDebugEnabled(chart_type) {

    var is_debug_enabled = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].type_options.enable_debug;
    if ((!is_debug_enabled)) {
        return false;
    } else {
        return true;
    }
}
// format and return the amount (prepend and append)
function jsChartCommonFormatChartAmount( amount , callout_prepend = "" , callout_append = "" ) {
    if (callout_append.toString().trim().length == 0) {
        var this_callout_append = "";
    } else {
        var this_callout_append = " " + callout_append;
    }
    if (callout_prepend.toString().trim().length == 0) {
        var this_callout_prepend = "";
    } else {
        var this_callout_prepend = callout_prepend + " ";
    }

    return ( this_callout_prepend + amount + this_callout_append);
}
// handle the options menu text value update
function jsChartCommonEventUpdateOptionsMenuValue(source, ikey, ivalue, new_value, i_chart) {

    // ikey -> option_name, e.g. width
    // ivalue -> original option value, e.g. 600px
    // new_value -> new option value, e.g. 500px

    //if (ivalue != new_value) {
        //if (source.getAttribute(ikey) != new_value) {
            source.setAttribute(ikey, new_value );

            var init_chart = initChart(i_chart.chart_counter, null, i_chart.series_index, true);
        //}
    //}

    return true;
}
// draw the menu options control - dropdown
function jsChartCommonDrawOptionsMenuDropdownControl(source, options_menu_content_container, ikey, default_value, input_value, i_chart, dropdown_options, dropdown_values, option_label, option_description ) {

    // create container for the description + control
    var control_container = document.createElement("div");
    var control_container_class = document.createAttribute("class");
    control_container_class.value = "js-chart-common-menu-option-text-container";
    control_container.setAttributeNode( control_container_class );
    var control_container_title = document.createAttribute("title");
    control_container_title.value = option_label;
    control_container.setAttributeNode( control_container_title );
    if (option_description.trim().length > 0) {
        control_container.innerHTML = option_description + "<br>";
    }
    options_menu_content_container.appendChild( control_container );

    // draw options menu text control
    var select_control = document.createElement("select");
    var select_control_style = document.createAttribute("style");
    select_control_style.value = "font-family: " + i_chart.i_design.options_menu_font_family + "; font-size: " + i_chart.i_design.options_menu_font_size + "; font-weight: " + i_chart.i_design.options_menu_font_weight + "; background-color: " + i_chart.i_design.options_menu_bg_color + "; color: " + i_chart.i_design.options_menu_text_color + "; border: " + i_chart.i_design.options_menu_border + "; box-shadow: " + i_chart.i_design.options_menu_box_shadow + "; opacity: " + i_chart.i_design.options_menu_opacity + ";";
    select_control.setAttributeNode( select_control_style );
    var select_control_title = document.createAttribute("title");
    select_control_title.value = option_label;
    select_control.setAttributeNode( select_control_title );

    for (var tt = 0; tt < dropdown_options.length; tt++) {
        var dropdown_option_control = document.createElement("option");
        dropdown_option_control.value = dropdown_options[tt];
        dropdown_option_control.innerHTML = dropdown_options[tt] + " - " + dropdown_values[tt];
        if (dropdown_options[tt] == input_value) {
            var selected_attribute = document.createAttribute("selected");
            selected_attribute.value = "selected";
            dropdown_option_control.setAttributeNode( selected_attribute );
        }
        select_control.appendChild( dropdown_option_control );
    }

    select_control.addEventListener("change", function () {
        var update_options_setting = jsChartCommonEventUpdateOptionsMenuValue(source, ikey, input_value, this.value, i_chart);
    }, false);
    control_container.appendChild( select_control );

    return true;
}
// draw the menu option control - checkbox
function jsChartCommonDrawOptionsMenuCheckboxControl(source, options_menu_content_container, ikey, default_value, input_value, i_chart, option_label, option_description ) {

    // create container for the description + control
    var control_container = document.createElement("div");
    var control_container_class = document.createAttribute("class");
    control_container_class.value = "js-chart-common-menu-option-text-container";
    control_container.setAttributeNode( control_container_class );
    var control_container_title = document.createAttribute("title");
    control_container_title.value = option_label;
    control_container.setAttributeNode( control_container_title );
    if (option_description.trim().length > 0) {
        control_container.innerHTML = option_description + "<br><br>";
    }
    options_menu_content_container.appendChild( control_container );

    // draw the switch label
    var checkbox_label = document.createElement("label");
    var checkbox_label_class = document.createAttribute("class");
    checkbox_label_class.value = "js-chart-common-switch";
    checkbox_label.setAttributeNode( checkbox_label_class );
    var checkbox_label_title = document.createAttribute("title");
    checkbox_label_title.value = option_label;
    checkbox_label.setAttributeNode( checkbox_label_title );
    control_container.appendChild( checkbox_label );

    // draw the input element
    var checkbox_control = document.createElement("input");
    var checkbox_control_type = document.createAttribute("type");
    checkbox_control_type.value = "checkbox";
    checkbox_control.setAttributeNode( checkbox_control_type );
    if (input_value == true) {
        var checked_checked = document.createAttribute("checked");
        checked_checked.value = "checked";
        checkbox_control.setAttributeNode( checked_checked );
    }
    checkbox_control.addEventListener("change", function () {
        var update_menu_option = jsChartCommonEventUpdateOptionsMenuValue(source, ikey, input_value, this.checked, i_chart);
        return true;
    }, false);
    checkbox_label.appendChild( checkbox_control );

    // draw the slider span
    var span_control = document.createElement("span");
    var span_control_class = document.createAttribute("class");
    span_control_class.value = "js-chart-common-slider";
    span_control.setAttributeNode( span_control_class );
    checkbox_label.appendChild( span_control );

    return true;
}
// draw the menu option control - text
function jsChartCommonDrawOptionsMenuTextControl(source, options_menu_content_container, ikey, default_value, input_value, i_chart, option_label, option_description ) {

    /*
    // draw options menu text control
    var text_control = document.createElement("input");
    var text_control_title = document.createAttribute("title");
    text_control_title.value = option_label;
    text_control.setAttributeNode( text_control_title );
    var text_control_type = document.createAttribute("type");
    text_control_type.value = "TEXT";
    text_control.setAttributeNode( text_control_type );
    var text_control_value = document.createAttribute("value");
    if (typeof input_value !== "undefined") {
        text_control_value.value = input_value;
    } else {
        text_control_value.value = default_value;
    }
    text_control.setAttributeNode( text_control_value );
    var text_control_maxlen = document.createAttribute("maxlen");
    text_control_maxlen.value = 255;
    text_control.setAttributeNode( text_control_maxlen );
    text_control.addEventListener("change", function () {
        var update_menu_option_value = jsChartCommonEventUpdateOptionsMenuValue(source, ikey, text_control_value.value, this.value, i_chart);
    }, false);
    options_menu_content_container.appendChild( text_control );
    */

    // create container for the description + control
    var control_container = document.createElement("div");
    var control_container_class = document.createAttribute("class");
    control_container_class.value = "js-chart-common-menu-option-text-container";
    control_container.setAttributeNode( control_container_class );
    var control_container_title = document.createAttribute("title");
    control_container_title.value = option_label;
    control_container.setAttributeNode( control_container_title );
    if (option_description.trim().length > 0) {
        control_container.innerText = option_description;
    }
    options_menu_content_container.appendChild( control_container );

    // draw options menu text control
    var text_control = document.createElement("input");
    var text_control_style = document.createAttribute("style");
    text_control_style.value = "font-family: " + i_chart.i_design.options_menu_font_family + "; font-size: " + i_chart.i_design.options_menu_font_size + "; font-weight: " + i_chart.i_design.options_menu_font_weight + "; background-color: " + i_chart.i_design.options_menu_bg_color + "; color: " + i_chart.i_design.options_menu_text_color + "; border: " + i_chart.i_design.options_menu_border + "; border-radius: " + i_chart.i_design.options_menu_border_radius + "; box-shadow: " + i_chart.i_design.options_menu_box_shadow + "; opacity: " + i_chart.i_design.options_menu_opacity + ";";
    text_control.setAttributeNode( text_control_style );
    var text_control_title = document.createAttribute("title");
    text_control_title.value = option_label;
    text_control.setAttributeNode( text_control_title );
    var text_control_type = document.createAttribute("type");
    text_control_type.value = "TEXT";
    text_control.setAttributeNode( text_control_type );
    var text_control_value = document.createAttribute("value");
    if (typeof input_value !== "undefined") {
        text_control_value.value = input_value;
    } else {
        text_control_value.value = default_value;
    }
    text_control.setAttributeNode( text_control_value );
    var text_control_maxlen = document.createAttribute("maxlen");
    text_control_maxlen.value = 255;
    text_control.setAttributeNode( text_control_maxlen );
    text_control.addEventListener("change", function () {
        var update_menu_option_value = jsChartCommonEventUpdateOptionsMenuValue(source, ikey, text_control_value.value, this.value, i_chart);
    }, false);
    control_container.appendChild( text_control );

    return true;
}
// draw the menu option label
function jsChartCommonDrawOptionsMenuLabel(options_menu_content_container, ilabel, ikey) {

    // draw the options menu label container
    var options_menu_label_container = document.createElement("div");
    var options_menu_label_container_class = document.createAttribute("class");
    options_menu_label_container_class.value = "js-chart-common-options-menu-label-container";
    options_menu_label_container.setAttributeNode( options_menu_label_container_class );
    var options_menu_label_container_title = document.createAttribute("title");
    options_menu_label_container_title.value = ilabel;
    options_menu_label_container.setAttributeNode( options_menu_label_container_title );
    options_menu_label_container.innerText = ilabel;
    options_menu_content_container.appendChild( options_menu_label_container );

    return true;
}
// draw the options menu (the first time the button is clicked or event invoked only)
function jsChartCommonDrawOptionsMenu(source, i_chart) {

    // draw options menu container
    var options_menu_container = document.createElement("div");
    var options_menu_container_class = document.createAttribute("class");
    options_menu_container_class.value = "js-chart-common-options-menu-container";
    options_menu_container.setAttributeNode( options_menu_container_class );
    var options_menu_container_style = document.createAttribute("style");
    options_menu_container_style.value = "font-family: " + i_chart.i_design.options_menu_font_family + "; font-size: " + i_chart.i_design.options_menu_font_size + "; font-weight: " + i_chart.i_design.options_menu_font_weight + "; background-color: " + i_chart.i_design.options_menu_bg_color + "; color: " + i_chart.i_design.options_menu_text_color + "; border: " + i_chart.i_design.options_menu_border + "; border-radius: " + i_chart.i_design.options_menu_border_radius + "; box-shadow: " + i_chart.i_design.options_menu_box_shadow + "; opacity: " + i_chart.i_design.options_menu_opacity + ";";
    options_menu_container.setAttributeNode( options_menu_container_style );
    source.getElementsByClassName("js-chart-common-base-container")[0].appendChild( options_menu_container );

    // draw options menu title container
    var options_menu_title_container = document.createElement("div");
    var options_menu_title_container_class = document.createAttribute("class");
    options_menu_title_container_class.value = "js-chart-common-options-menu-title-container";
    options_menu_title_container.setAttributeNode( options_menu_title_container_class );
    var options_menu_title_container_style = document.createAttribute("style");
    options_menu_title_container_style.value = "font-family: " + i_chart.i_design.options_menu_title_font_family + "; font-size: " + i_chart.i_design.options_menu_title_font_size + "; font-weight: " + i_chart.i_design.options_menu_title_font_weight + "; background-color: " + i_chart.i_design.options_menu_title_bg_color + "; color: " + i_chart.i_design.options_menu_title_text_color + "; border: " + i_chart.i_design.options_menu_title_border + "; border-radius: " + i_chart.i_design.options_menu_title_border_radius + "; box-shadow: " + i_chart.i_design.options_menu_title_box_shadow + "; opacity: " + i_chart.i_design.options_menu_title_opacity + ";";
    options_menu_title_container.setAttributeNode( options_menu_title_container_style );
    //options_menu_title_container.innerText = "Options Menu";
    options_menu_container.appendChild( options_menu_title_container );

    // draw title text container
    var title_text_container = document.createElement("div");
    var title_text_container_class = document.createAttribute("class");
    title_text_container_class.value = "js-chart-common-options-menu-title-label-container";
    title_text_container.setAttributeNode( title_text_container_class );
    title_text_container.innerText = "Options Menu";
    options_menu_title_container.appendChild( title_text_container );

    // draw close button container
    var close_button_container = document.createElement("div");
    var close_button_container_class = document.createAttribute("class");
    close_button_container_class.value = "js-chart-common-options-menu-title-close-button-container";
    close_button_container.setAttributeNode( close_button_container_class );
    options_menu_title_container.appendChild( close_button_container );

    // draw close button
    var close_button = document.createElement("div");
    var close_button_class = document.createAttribute("class");
    close_button_class.value = "js-chart-common-options-menu-title-close-button";
    close_button.setAttributeNode( close_button_class );
    var close_button_title = document.createAttribute("title");
    close_button_title.value = "Close";
    close_button.setAttributeNode( close_button_title );
    close_button.innerText = " X ";
    close_button.addEventListener("click", function () {
        var open_options = jsChartCommonEventToggleOptionsMenu( this.parentElement.parentElement.parentElement.parentElement, i_chart );
    }, false);
    close_button_container.appendChild( close_button );

    // draw options menu content container
    var options_menu_content_container = document.createElement("div");
    var options_menu_content_container_class = document.createAttribute("class");
    options_menu_content_container_class.value = "js-chart-common-options-menu-content-container";
    options_menu_content_container.setAttributeNode( options_menu_content_container_class );
    var options_menu_content_container_style = document.createAttribute("style");
    options_menu_content_container_style.value = "scrollbar-color: " + i_chart.i_design.options_menu_scrollbar_color + ";";
    options_menu_content_container.setAttributeNode( options_menu_content_container_style );
    options_menu_container.appendChild( options_menu_content_container );

    for (var tt = 0; tt < IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options.length; tt++) {
        if ( ["class", "version", "width", "height"].indexOf( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt] ) == -1) {

            var draw_menu_option_label = jsChartCommonDrawOptionsMenuLabel(options_menu_content_container, IDEFAULT_CHART_ATTRIBUTES[  IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt] ].label, IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt]);

            switch( IDEFAULT_CHART_ATTRIBUTES[  IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt] ].control ) {

                // text
                case "text":
                    var draw_options_menu_text_control = jsChartCommonDrawOptionsMenuTextControl(source, options_menu_content_container, IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt], IDEFAULT_CHART_ATTRIBUTES[  IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt] ].default, i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt] ], i_chart, IDEFAULT_CHART_ATTRIBUTES[  IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt] ].label, IDEFAULT_CHART_ATTRIBUTES[  IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt] ].description );
                    break;
                
                // checkbox
                case "checkbox":
                    var draw_options_menu_text_control = jsChartCommonDrawOptionsMenuCheckboxControl(source, options_menu_content_container, IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt], IDEFAULT_CHART_ATTRIBUTES[  IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt] ].default, i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt] ], i_chart, IDEFAULT_CHART_ATTRIBUTES[  IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt] ].label, IDEFAULT_CHART_ATTRIBUTES[  IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt] ].description );
                    break;
                
                // dropdown
                case "dropdown":
                    // get the drop down options together
                    var dropdown_options = [];
                    var dropdown_values = [];

                    // determine what option this is
                    switch( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt] ) {
                        // type
                        case "type":
                            for (const [ikey, ivalue] of Object.entries(IDEFAULT_CHART_TYPE_OPTIONS)) {
                                if (ivalue.chart_group == i_chart.chart_group) {
                                    dropdown_options.push( ikey );
                                    dropdown_values.push( ikey );
                                }
                            }
                            break;
                        // template
                        case "template":
                            for (const [ikey, ivalue] of Object.entries(IDEFAULT_DESIGN_TEMPLATES)) {
                                dropdown_options.push( ivalue.name );
                                dropdown_values.push( ivalue.description );
                            }
                            break;
                        // startangle
                        case "startangle":
                            dropdown_options.push( "0deg" );
                            dropdown_values.push( "Draw starting from the top." );
                            dropdown_options.push( "90deg" );
                            dropdown_values.push( "Draw starting from the left." );
                            break;
                        // legend
                        case "showlegend":
                            dropdown_options.push( "off" );
                            dropdown_values.push( "No not display the legend.");
                            dropdown_options.push( "side" );
                            dropdown_values.push( "Render the legend to the left of the chart.");
                            dropdown_options.push( "bottom" );
                            dropdown_values.push( "Render the legend at the bottom of the chart.");
                            dropdown_options.push( "auto" );
                            dropdown_values.push( "Render the legend in the default position for the chart type.");
                            break;
                        // labels
                        case "showlabels":
                            dropdown_options.push( true );
                            dropdown_values.push( "Display default data labels.");
                            dropdown_options.push( false );
                            dropdown_values.push( "No not display any data labels.");
                            dropdown_options.push( "relative" );
                            dropdown_values.push( "Display the relative (percentage) values for each segment or data point.");
                            dropdown_options.push( "absolute" );
                            dropdown_values.push( "Display the absolute values for each segement or data point.");
                            dropdown_options.push( "auto" );
                            dropdown_values.push( "Display the default type data labels for each segment or data point.");
                            break;
                        // showdatatable
                        case "showdatatable":
                            dropdown_options.push( false );
                            dropdown_values.push( "Hide the data table.");
                            dropdown_options.push( true );
                            dropdown_values.push( "Show the data table in the default format.");
                            dropdown_options.push( "auto" );
                            dropdown_values.push( "Show the data table in the default format.");
                            dropdown_options.push( "table" );
                            dropdown_values.push( "Show  the data table in the default format.");
                            dropdown_options.push( "csv" );
                            dropdown_values.push( "Show the data table in CSV format.");
                            break;
                        // markertype
                        case "markertype":
                            dropdown_options.push( "dot" );
                            dropdown_values.push( "display a dot marker.");
                            dropdown_options.push( "circle" );
                            dropdown_values.push( "display a circle marker.");
                            dropdown_options.push( "square" );
                            dropdown_values.push( "display a square marker.");
                            dropdown_options.push( "triangle" );
                            dropdown_values.push( "display a triangle marker.");
                            dropdown_options.push( "emoji" );
                            dropdown_values.push( "display a emoji marker.");
                            dropdown_options.push( "bubble" );
                            dropdown_values.push( "display a bubble marker.");
                            break;
                        // render algorithm (used by treemaps at this stage)
                        case "drawalg":
                            dropdown_options.push( "auto" );
                            dropdown_values.push( "Automatically select the best algorithm.");
                            dropdown_options.push( "portrait quad" );
                            dropdown_values.push( "portrait quad");
                            dropdown_options.push( "landscape quad" );
                            dropdown_values.push( "landscape quad");
                            dropdown_options.push( "portrait pivot" );
                            dropdown_values.push( "portrait pivot");
                            dropdown_options.push( "landscape pivot" );
                            dropdown_values.push( "landscape pivot");
                            dropdown_options.push( "portrait snake" );
                            dropdown_values.push( "portrait snake");
                            dropdown_options.push( "landscape snake" );
                            dropdown_values.push( "landscape snake");
                            break;
                        default:
                            break;
                    }

                    var draw_options_menu_text_control = jsChartCommonDrawOptionsMenuDropdownControl(source, options_menu_content_container, IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt], IDEFAULT_CHART_ATTRIBUTES[  IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt] ].default, i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt] ], i_chart, dropdown_options, dropdown_values, IDEFAULT_CHART_ATTRIBUTES[  IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt] ].label, IDEFAULT_CHART_ATTRIBUTES[  IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.i_options.type ].supported_options[tt] ].description );
                    break;
                
                default:
                    break;
            }
        }
    }

    return true;
}
// event: open options menu
function jsChartCommonEventToggleOptionsMenu(source, i_chart) {

    // only draw the options menu once
    var option_menu_container = source.getElementsByClassName("js-chart-common-options-menu-container");
    if (option_menu_container.length == 0) {

        var draw_options_menu = jsChartCommonDrawOptionsMenu(source, i_chart);

        // only draw the options menu once
    } else {

        option_menu_container[0].remove();

    }

    return true;
}
// draw the legend inner categorical content
function jsChartCommonDrawLegendInnerCumulative( legend_container, i_data, i_labels, i_titles, i_options, i_design, legend_labels) {

    for (var v = 0; v < legend_labels.length; v++) {

        // legend block
        var legend_block = document.createElement("div");
        var legend_block_class = document.createAttribute("class");
        legend_block_class.value = "js-chart-common-legend-block";
        legend_block.setAttributeNode( legend_block_class );
        var legend_block_title = document.createAttribute("title");
        legend_block_title.value = legend_labels[v];
        legend_block.setAttributeNode( legend_block_title );
        if (legend_container.style["flex-direction"] == "column") {
            var legend_block_style = document.createAttribute("style");
            legend_block_style.value = "display: flex; flex-direction: column;";
            legend_block.setAttributeNode( legend_block_style );
        } else {
            var legend_block_style = document.createAttribute("style");
            legend_block_style.value = "display: flex; flex-direction: row;";
            legend_block.setAttributeNode( legend_block_style );
        }
        legend_container.appendChild( legend_block );

        // legend color block
        if (v == (legend_labels.length - 1)) {
            var color_index = 2;
        } else if (i_data[v] >= 0) {
            color_index = 1;
        } else {
            color_index = 0;
        }
        var legend_color_block = document.createElement("div");
        var legend_color_block_class = document.createAttribute("class");
        legend_color_block_class.value = "js-chart-common-legend-color-block";
        legend_color_block.setAttributeNode( legend_color_block_class );
        var legend_color_block_title = document.createAttribute("title");
        legend_color_block_title.value = legend_labels[v];
        legend_color_block.setAttributeNode( legend_color_block_title );
        var legend_color_block_style = document.createAttribute("style");
        legend_color_block_style.value = "background-color: " + i_design.color_palette[color_index] + "; opacity: " + i_design.legend_opacity + ";";
        legend_color_block.setAttributeNode( legend_color_block_style );
        legend_container.appendChild( legend_color_block );

        // legend label block
        var legend_label_block = document.createElement("div");
        var legend_label_block_class = document.createAttribute("class");
        legend_label_block_class.value = "js-chart-common-legend-label-block";
        legend_label_block.setAttributeNode( legend_label_block_class );
        var legend_label_block_title = document.createAttribute("title");
        legend_label_block_title.value = legend_labels[v];
        legend_label_block.setAttributeNode( legend_label_block_title );
        if (legend_container.style["flex-direction"] == "column") {
            var legend_label_block_style = document.createAttribute("style");
            legend_label_block_style.value = "writing-mode: vertical-lr; margin: 3px 0px 3px 0px;";
            legend_label_block.setAttributeNode( legend_label_block_style );
        } else {
            var legend_label_block_style = document.createAttribute("style");
            legend_label_block_style.value = "margin: 0px 3px 0px 3px;";
            legend_label_block.setAttributeNode( legend_label_block_style );
        }
        legend_label_block.innerText = legend_labels[v];
        legend_container.appendChild( legend_label_block );

        color_index++;
        if (color_index >= i_design.color_palette.length) {
            color_index = 0;
        }
    }

    return true;
}
// draw the legend for a sequential discrete palette
function jsChartCommonDrawLegendSequentialContinuous(legend_container, i_labels, i_titles, i_options, i_design, legend_labels, palette_type) {

    //var legend_bg = [ i_design.color_palette[0] ];
    var legend_bg = [];
    var legend_label_positions = [];
    var total_range = parseFloat(i_design.color_position[ (i_design.color_position.length-1) ]) - parseFloat(i_design.color_position[0]);
    for (var tt = 0; tt < i_design.color_position.length; tt++) {
        var range_perc = 1 - ((parseFloat(i_design.color_position[ (i_design.color_position.length-1) ]) - parseFloat(i_design.color_position[tt])) / total_range);
        legend_bg.push( i_design.color_palette[tt] + " " + (range_perc * 100) + "%" );

        var legend_label_position_block = document.createElement("div");
        var legend_label_position_block_style = document.createAttribute("style");
        legend_label_position_block_style.value = "position: absolute; width: " + i_design.datalabel_width + "; height: " + i_design.datalabel_height + "; font-family: " + i_design.datalabel_font_family + "; font-size: " + i_design.datalabel_font_size + "; font-weight: " + i_design.datalabel_font_weight + "; color: " + i_design.datalabel_text_color + ";";
        if (legend_container.style["flex-direction"] == "column") {
            if (range_perc < 0.49) {
                legend_label_position_block_style.value += " top: " + (range_perc * 100) + "%; left: calc(50% - (" + i_design.datalabel_width + " / 2));";
            } else {
                legend_label_position_block_style.value += " bottom: " + (100 - (range_perc * 100)) + "%; left: calc(50% - (" + i_design.datalabel_width + " / 2));";
            }
        } else {
            if (range_perc < 0.49) {
                legend_label_position_block_style.value += " left: " + (range_perc * 100) + "%; top: calc(50% - (" + i_design.datalabel_height + " / 2)); text-align: left; margin: 0px 0px 0px 3px;";
            } else {
                legend_label_position_block_style.value += " right: " + (100 - (range_perc * 100)) + "%; top: calc(50% - (" + i_design.datalabel_height + " / 2)); text-align: right; margin: 0px 3px 0px 0px;";
            }
        }
        legend_label_position_block.setAttributeNode( legend_label_position_block_style );
        legend_label_position_block.innerText = i_design.color_position[tt];

        legend_label_positions.push( legend_label_position_block );
    }

    if (legend_container.style["flex-direction"] == "column") {
        var legend_gradient = "background: linear-gradient(";
    } else {
        var legend_gradient = "background: linear-gradient(0.25turn, ";
    }

    for (var tt = 0; tt < legend_bg.length; tt++) {
        legend_gradient += legend_bg[tt];
        if (tt < (legend_bg.length-1)) {
            legend_gradient += ", ";
        }

        legend_container.appendChild( legend_label_positions[tt] );
    }

    
    legend_gradient += ");";

    var legend_container_style = legend_container.getAttribute("style");
    legend_container_style += " " + legend_gradient;
    legend_container.setAttribute("style", legend_container_style );

    /*
    var container_bg_color = "";
    for (var tt = 0; tt < i_design.color_palette.length; tt++) {
        if (tt == 0) {
            container_bg_color += i_design.color_palette[tt];
        } else {
            if (i_design.color_position[tt].indexOf("%") == -1) {
                container_bg_color += ", " + i_design.color_palette[tt] + " " + i_design.color_position[tt] + "%";
            } else {
                container_bg_color += ", " + i_design.color_palette[tt] + " " + i_design.color_position[tt];
            }
        }
    }

    container_bg_color += ");";

    // draw continuous container
    var continuous_container = document.createElement("div");
    var continuous_container_style = document.createAttribute("style");
    if (legend_container.style["flex-direction"] == "column") {
        continuous_container_style.value = "position: relative; flex: 1 1 auto; background: linear-gradient(" + container_bg_color;
    } else {
        continuous_container_style.value = "position: relative; flex: 1 1 auto; background: linear-gradient(0.25turn, " + container_bg_color;
    }
    continuous_container.setAttributeNode( continuous_container_style );
    legend_container.appendChild( continuous_container );

    var zero_label = document.createElement("div");
    var zero_label_style = document.createAttribute("style");
    zero_label_style.value = "position: absolute; width: 50px; height: 20px; line-height: 20px; top: calc(50% - 10px); left: 5px; color: " + i_design.datalabel_text_color + ";";
    zero_label.setAttributeNode( zero_label_style );
    zero_label.innerText = legend_labels[0];
    continuous_container.appendChild( zero_label );

    var hundred_label = document.createElement("div");
    var hundred_label_style = document.createAttribute("style");
    hundred_label_style.value = "position: absolute; width: 50px; height: 20px; line-height: 20px; top: calc(50% - 10px); right: 5px; color: " + i_design.datalabel_text_color + ";";
    hundred_label.setAttributeNode( hundred_label_style );
    hundred_label.innerText = legend_labels[1];
    continuous_container.appendChild( hundred_label );
    */

    /*
        label: legend-font-family
        label: legend-font-size
        label: legend-font-weight
        container: legend-bg-color
        label: legend-text-color
        color: legend-border
        color: legend-border-radius
        color: legend-box-shadow
        color: legend-opacity
    */
   /*
    var color_index = 0;
    for (var v = 0; v < i_design.color_palette.length; v++) {

    // draw legend block
    var legend_block = document.createElement("div");
    var legend_block_style = document.createAttribute("style");
    if (legend_container.style["flex-direction"] == "column") {
        legend_block_style.value = "flex: 1 1 0px; display: flex; flex-direction: row;";
    } else {
        legend_block_style.value = "flex: 1 1 0px; display: flex; flex-direction: column;";
    }
    legend_block.setAttributeNode( legend_block_style );
    legend_container.appendChild( legend_block );

    // draw color block
    var legend_color_block = document.createElement("div");
    var legend_color_block_style = document.createAttribute("style");
    legend_color_block_style.value = "flex: 1 1 0px; background-color: " + i_design.color_palette[color_index] + "; border: " + i_design.legend_border + "; box-shadow: " + i_design.legend_box_shadow + "; opacity: " + i_design.legend_opacity + ";";
    legend_color_block.setAttributeNode( legend_color_block_style );
    legend_block.appendChild( legend_color_block );

    // draw label
    var legend_label_block = document.createElement("div");
    var legend_label_block_style = document.createAttribute("style");
    legend_label_block_style.value = "flex: 1 1 0px; text-wrap: nowrap; overflow: hidden; text-overflow: ellipsis; font-family: " + i_design.legend_font_family + "; font-size: " + i_design.legend_font_size + "; font-weight: " + i_design.legend_font_weight + "; color: " + i_design.legend_text_color + ";";
    if (legend_container.style["flex-direction"] == "column") {
        legend_label_block_style.value += " writing-mode: vertical-lr;";
    }
    legend_label_block.setAttributeNode( legend_label_block_style );
    if (v > 0) {
        legend_label_block.innerText = i_design.color_position[v];
    }
    legend_block.appendChild( legend_label_block );

    color_index++;
    if (color_index >= i_design.color_palette.length) {
        color_index = 0;
    }

    return true;
    */
}
// draw the legend for a sequential discrete palette
function jsChartCommonDrawLegendSequentialDiscrete(legend_container, i_labels, i_titles, i_options, i_design, legend_labels, palette_type) {

    /*
        label: legend-font-family
        label: legend-font-size
        label: legend-font-weight
        container: legend-bg-color
        label: legend-text-color
        color: legend-border
        color: legend-border-radius
        color: legend-box-shadow
        color: legend-opacity
    */
    var color_index = 0;
    for (var v = 0; v < i_design.color_palette.length; v++) {

        // draw legend block
        var legend_block = document.createElement("div");
        var legend_block_style = document.createAttribute("style");
        if (legend_container.style["flex-direction"] == "column") {
            legend_block_style.value = "flex: 1 1 0px; display: flex; flex-direction: row;";
        } else {
            legend_block_style.value = "flex: 1 1 0px; display: flex; flex-direction: column;";
        }
        legend_block.setAttributeNode( legend_block_style );
        legend_container.appendChild( legend_block );

        // draw color block
        var legend_color_block = document.createElement("div");
        var legend_color_block_style = document.createAttribute("style");
        legend_color_block_style.value = "flex: 1 1 0px; background-color: " + i_design.color_palette[color_index] + "; border: " + i_design.legend_border + "; box-shadow: " + i_design.legend_box_shadow + "; opacity: " + i_design.legend_opacity + ";";
        legend_color_block.setAttributeNode( legend_color_block_style );
        legend_block.appendChild( legend_color_block );

        // draw label
        var legend_label_block = document.createElement("div");
        var legend_label_block_style = document.createAttribute("style");
        legend_label_block_style.value = "flex: 1 1 0px; text-align: left; text-wrap: nowrap; overflow: hidden; text-overflow: ellipsis; font-family: " + i_design.legend_font_family + "; font-size: " + i_design.legend_font_size + "; font-weight: " + i_design.legend_font_weight + "; color: " + i_design.legend_text_color + ";";
        if (legend_container.style["flex-direction"] == "column") {
            legend_label_block_style.value += " writing-mode: vertical-lr;";
        }
        legend_label_block.setAttributeNode( legend_label_block_style );
        if (v > 0) {
            legend_label_block.innerText = i_design.color_position[v-1];
            var legend_label_block_title = document.createAttribute("title");
            legend_label_block_title.value = i_design.color_position[v-1];
            legend_label_block.setAttributeNode( legend_label_block_title );
        }
        legend_block.appendChild( legend_label_block );

        color_index++;
        if (color_index >= i_design.color_palette.length) {
            color_index = 0;
        }
    }

    return true;
}
// draw the legend inner open-high-low-close (ohlc) content
function jsChartCommonDrawLegendInnerOHLC( legend_container, i_labels, i_titles, i_options, i_design, legend_labels, palette_type) {

    var this_legend_labels = [ "Bullish", "Bearish" ];

    for (var v = 0; v < this_legend_labels.length; v++) {

        // legend block
        var legend_block = document.createElement("div");
        var legend_block_class = document.createAttribute("class");
        legend_block_class.value = "js-chart-common-legend-block";
        legend_block.setAttributeNode( legend_block_class );
        var legend_block_title = document.createAttribute("title");
        legend_block_title.value = this_legend_labels[v];
        legend_block.setAttributeNode( legend_block_title );
        if (legend_container.style["flex-direction"] == "column") {
            var legend_block_style = document.createAttribute("style");
            legend_block_style.value = "display: flex; flex-direction: column;";
            legend_block.setAttributeNode( legend_block_style );
        } else {
            var legend_block_style = document.createAttribute("style");
            legend_block_style.value = "display: flex; flex-direction: row;";
            legend_block.setAttributeNode( legend_block_style );
        }
        legend_container.appendChild( legend_block );

        // legend color block
        var legend_color_block = document.createElement("div");
        var legend_color_block_class = document.createAttribute("class");
        legend_color_block_class.value = "js-chart-common-legend-color-block";
        legend_color_block.setAttributeNode( legend_color_block_class );
        var legend_color_block_title = document.createAttribute("title");
        legend_color_block_title.value = this_legend_labels[v];
        legend_color_block.setAttributeNode( legend_color_block_title );
        var legend_color_block_style = document.createAttribute("style");
        legend_color_block_style.value = "width: calc(var(--js-chart-common-legend-width) / 2); height: calc(var(--js-chart-common-legend-width) / 2); background-color: " + i_design.color_palette[ v ] + "; border: " + i_design.legend_border + "; border-radius: " + i_design.legend_border_radius + "; box-shadow: " + i_design.legend_box_shadow + "; opacity: " + i_design.legend_opacity + ";";
        legend_color_block.setAttributeNode( legend_color_block_style );
        legend_container.appendChild( legend_color_block );

        // legend label block
        var legend_label_block = document.createElement("div");
        var legend_label_block_class = document.createAttribute("class");
        legend_label_block_class.value = "js-chart-common-legend-label-block";
        legend_label_block.setAttributeNode( legend_label_block_class );
        var legend_label_block_title = document.createAttribute("title");
        legend_label_block_title.value = this_legend_labels[v];
        legend_label_block.setAttributeNode( legend_label_block_title );
        if (legend_container.style["flex-direction"] == "column") {
            var legend_label_block_style = document.createAttribute("style");
            legend_label_block_style.value = "writing-mode: vertical-lr; margin: 3px 0px 3px 0px; font-family: " + i_design.legend_font_family + "; font-size: " + i_design.legend_font_size + "; font-weight: " + i_design.legend_font_weight + "; color: " + i_design.legend_text_color + ";";
            legend_label_block.setAttributeNode( legend_label_block_style );
        } else {
            var legend_label_block_style = document.createAttribute("style");
            legend_label_block_style.value = "margin: 0px 3px 0px 3px; font-family: " + i_design.legend_font_family + "; font-size: " + i_design.legend_font_size + "; font-weight: " + i_design.legend_font_weight + "; color: " + i_design.legend_text_color + ";";
            legend_label_block.setAttributeNode( legend_label_block_style );
        }
        legend_label_block.innerText = this_legend_labels[v];
        legend_container.appendChild( legend_label_block );

    }

    return true;
}
// draw the legend inner categorical content
function jsChartCommonDrawLegendInnerCategorical( legend_container, i_labels, i_titles, i_options, i_design, legend_labels, palette_type = "qualitative") {

    /*
            label: legend-font-family
            label: legend-font-size
            label: legend-font-weight
            container: legend-bg-color
            label: legend-text-color
            color: legend-border
            color: legend-border-radius
            color: legend-box-shadow
            color: legend-opacity
        */
    // 1. qualitative
    if (palette_type == "qualitative") {

        var color_index = 0;
        for (var v = 0; v < legend_labels.length; v++) {
    
            // legend block
            var legend_block = document.createElement("div");
            var legend_block_class = document.createAttribute("class");
            legend_block_class.value = "js-chart-common-legend-block";
            legend_block.setAttributeNode( legend_block_class );
            var legend_block_title = document.createAttribute("title");
            legend_block_title.value = legend_labels[v];
            legend_block.setAttributeNode( legend_block_title );
            if (legend_container.style["flex-direction"] == "column") {
                var legend_block_style = document.createAttribute("style");
                legend_block_style.value = "display: flex; flex-direction: column;";
                legend_block.setAttributeNode( legend_block_style );
            } else {
                var legend_block_style = document.createAttribute("style");
                legend_block_style.value = "display: flex; flex-direction: row;";
                legend_block.setAttributeNode( legend_block_style );
            }
            legend_container.appendChild( legend_block );
    
            // legend color block
            var legend_color_block = document.createElement("div");
            var legend_color_block_class = document.createAttribute("class");
            legend_color_block_class.value = "js-chart-common-legend-color-block";
            legend_color_block.setAttributeNode( legend_color_block_class );
            var legend_color_block_title = document.createAttribute("title");
            legend_color_block_title.value = legend_labels[v];
            legend_color_block.setAttributeNode( legend_color_block_title );
            var legend_color_block_style = document.createAttribute("style");
            legend_color_block_style.value = "width: calc(var(--js-chart-common-legend-width) / 2); height: calc(var(--js-chart-common-legend-width) / 2); background-color: " + i_design.color_palette[color_index] + "; border: " + i_design.legend_border + "; border-radius: " + i_design.legend_border_radius + "; box-shadow: " + i_design.legend_box_shadow + "; opacity: " + i_design.legend_opacity + ";";
            legend_color_block.setAttributeNode( legend_color_block_style );
            legend_container.appendChild( legend_color_block );
    
            // legend label block
            var legend_label_block = document.createElement("div");
            var legend_label_block_class = document.createAttribute("class");
            legend_label_block_class.value = "js-chart-common-legend-label-block";
            legend_label_block.setAttributeNode( legend_label_block_class );
            var legend_label_block_title = document.createAttribute("title");
            legend_label_block_title.value = legend_labels[v];
            legend_label_block.setAttributeNode( legend_label_block_title );
            if (legend_container.style["flex-direction"] == "column") {
                var legend_label_block_style = document.createAttribute("style");
                legend_label_block_style.value = "writing-mode: vertical-lr; margin: 3px 0px 3px 0px; font-family: " + i_design.legend_font_family + "; font-size: " + i_design.legend_font_size + "; font-weight: " + i_design.legend_font_weight + "; color: " + i_design.legend_text_color + ";";
                legend_label_block.setAttributeNode( legend_label_block_style );
            } else {
                var legend_label_block_style = document.createAttribute("style");
                legend_label_block_style.value = "margin: 0px 3px 0px 3px; font-family: " + i_design.legend_font_family + "; font-size: " + i_design.legend_font_size + "; font-weight: " + i_design.legend_font_weight + "; color: " + i_design.legend_text_color + ";";
                legend_label_block.setAttributeNode( legend_label_block_style );
            }
            legend_label_block.innerText = legend_labels[v];
            legend_container.appendChild( legend_label_block );
    
            color_index++;
            if (color_index >= i_design.color_palette.length) {
                color_index = 0;
            }
        }

    // 2. categorical
    } else if (palette_type == "categorical") {
        //console.log( "categorical" );
        //console.log( i_design.color_palette );
        //console.log( i_design.color_position );
    // 3. sequential
    //         3.1 discrete
    } else if ((palette_type == "sequential") || (palette_type == "sequential discrete") || (palette_type == "discrete sequential")) {
        //console.log( "sequential discrete" );
        //console.log( i_design.color_palette );
        //console.log( i_design.color_position );

        var draw_sequential_discrete_legend = jsChartCommonDrawLegendSequentialDiscrete(legend_container, i_labels, i_titles, i_options, i_design, legend_labels, palette_type);

    //         3.2 continuous
    } else if ((palette_type == "sequential continuous") || (palette_type == "continuous sequential")) {
        //console.log( "sequential continuous" );
        //console.log( i_design.color_palette );
        //console.log( i_design.color_position );

        var draw_continuous_discrete_legend = jsChartCommonDrawLegendSequentialContinuous(legend_container, i_labels, i_titles, i_options, i_design, legend_labels, palette_type);
    // 4. diverging
    //         4.1 discrete
    } else if ((palette_type == "diverging") || (palette_type == "diverging discrete") || (palette_type == "discrete diverging")) {
        //console.log( "divergingdiscrete" );
        //console.log( i_design.color_palette );
        //console.log( i_design.color_position );
        var draw_continuous_discrete_legend = jsChartCommonDrawLegendSequentialDiscrete(legend_container, i_labels, i_titles, i_options, i_design, legend_labels, palette_type);
    //         4.2 continuous
    } else if ((palette_type == "diverging continuous") || (palette_type == "continues diverging")) {
        //console.log( "divergingdiscrete" );
        //console.log( i_design.color_palette );
        //console.log( i_design.color_position );

        var draw_continuous_discrete_legend = jsChartCommonDrawLegendSequentialContinuous(legend_container, i_labels, i_titles, i_options, i_design, legend_labels, palette_type);
    }


    /*
    var color_index = 0;
    for (var v = 0; v < legend_labels.length; v++) {

        // legend block
        var legend_block = document.createElement("div");
        var legend_block_class = document.createAttribute("class");
        legend_block_class.value = "js-chart-common-legend-block";
        legend_block.setAttributeNode( legend_block_class );
        var legend_block_title = document.createAttribute("title");
        legend_block_title.value = legend_labels[v];
        legend_block.setAttributeNode( legend_block_title );
        if (legend_container.style["flex-direction"] == "column") {
            var legend_block_style = document.createAttribute("style");
            legend_block_style.value = "display: flex; flex-direction: column;";
            legend_block.setAttributeNode( legend_block_style );
        } else {
            var legend_block_style = document.createAttribute("style");
            legend_block_style.value = "display: flex; flex-direction: row;";
            legend_block.setAttributeNode( legend_block_style );
        }
        legend_container.appendChild( legend_block );

        // legend color block
        var legend_color_block = document.createElement("div");
        var legend_color_block_class = document.createAttribute("class");
        legend_color_block_class.value = "js-chart-common-legend-color-block";
        legend_color_block.setAttributeNode( legend_color_block_class );
        var legend_color_block_title = document.createAttribute("title");
        legend_color_block_title.value = legend_labels[v];
        legend_color_block.setAttributeNode( legend_color_block_title );
        var legend_color_block_style = document.createAttribute("style");
        legend_color_block_style.value = "width: calc(var(--js-chart-common-legend-width) / 2); height: calc(var(--js-chart-common-legend-width) / 2); background-color: " + i_design.color_palette[color_index] + "; border: " + i_design.legend_border + "; border-radius: " + i_design.legend_border_radius + "; box-shadow: " + i_design.legend_box_shadow + "; opacity: " + i_design.legend_opacity + ";";
        legend_color_block.setAttributeNode( legend_color_block_style );
        legend_container.appendChild( legend_color_block );

        // legend label block
        var legend_label_block = document.createElement("div");
        var legend_label_block_class = document.createAttribute("class");
        legend_label_block_class.value = "js-chart-common-legend-label-block";
        legend_label_block.setAttributeNode( legend_label_block_class );
        var legend_label_block_title = document.createAttribute("title");
        legend_label_block_title.value = legend_labels[v];
        legend_label_block.setAttributeNode( legend_label_block_title );
        if (legend_container.style["flex-direction"] == "column") {
            var legend_label_block_style = document.createAttribute("style");
            legend_label_block_style.value = "writing-mode: vertical-lr; margin: 3px 0px 3px 0px; font-family: " + i_design.legend_font_family + "; font-size: " + i_design.legend_font_size + "; font-weight: " + i_design.legend_font_weight + "; color: " + i_design.legend_text_color + ";";
            legend_label_block.setAttributeNode( legend_label_block_style );
        } else {
            var legend_label_block_style = document.createAttribute("style");
            legend_label_block_style.value = "margin: 0px 3px 0px 3px; font-family: " + i_design.legend_font_family + "; font-size: " + i_design.legend_font_size + "; font-weight: " + i_design.legend_font_weight + "; color: " + i_design.legend_text_color + ";";
            legend_label_block.setAttributeNode( legend_label_block_style );
        }
        legend_label_block.innerText = legend_labels[v];
        legend_container.appendChild( legend_label_block );

        color_index++;
        if (color_index >= i_design.color_palette.length) {
            color_index = 0;
        }
    }
    */

    return true;
}
// draw the legend (check for showlegend already completed)
function jsChartCommonDrawLegendContainer(level1_inner_panel, i_data, i_labels, i_titles, i_options, i_design, legend_container_style__value, chart_data_type, legend_labels, palette_type) {

    // add the legend container to the level1 container
    var legend_container = document.createElement("div");
    var legend_container_class = document.createAttribute("class");
    legend_container_class.value = "js-chart-common-legend-container";
    legend_container.setAttributeNode( legend_container_class );
    var legend_container_style = document.createAttribute("style");
    legend_container_style.value = "background-color: " + i_design.legend_bg_color + "; border-radius: " + i_design.legend_border_radius + ";";
    legend_container_style.value += " " + legend_container_style__value;
    legend_container.setAttributeNode( legend_container_style );
    level1_inner_panel.appendChild( legend_container );

    // draw the legend inner blocks
    switch(chart_data_type) {

        // categorical / series / hierarchical
        case "categorical":
        case "series":
            var draw_categorical_legend = jsChartCommonDrawLegendInnerCategorical( legend_container, i_labels, i_titles, i_options, i_design, legend_labels, palette_type);
            break;

        // range
        case "range":
            var draw_categorical_legend = jsChartCommonDrawLegendInnerCategorical( legend_container, i_labels, i_titles, i_options, i_design, legend_labels, palette_type);
            break;
        
        // cumulative
        case "cumulative":
            var draw_categorical_legend = jsChartCommonDrawLegendInnerCumulative( legend_container, i_data, i_labels, i_titles, i_options, i_design, legend_labels);
            break;

        // points
        case "points":
            var draw_categorical_legend = jsChartCommonDrawLegendInnerCategorical( legend_container, i_labels, i_titles, i_options, i_design, legend_labels, palette_type);
            break;
        
        // ohlc
        case "ohlc":
            var draw_ohlc_legend = jsChartCommonDrawLegendInnerOHLC( legend_container, i_labels, i_titles, i_options, i_design, legend_labels, palette_type);
            break;

        // hierarchical
        case "hierarchical":
            var draw_hierarchical_legend = jsChartCommonDrawLegendInnerCategorical( legend_container, i_labels, i_titles, i_options, i_design, legend_labels, palette_type);
            break;

        // default
        default:
            break;
    }

    return legend_container;
}
// draw the data table (check of showdatatable already completed)
function jsChartCommonDrawDataTableContainer(common_base_container, i_chart, chart_data_type) {

    // draw the data table container
    var datatable_container = document.createElement("div");
    var datatable_container_class = document.createAttribute("class");
    datatable_container_class.value = "js-chart-common-datatable-container";
    datatable_container.setAttributeNode( datatable_container_class );
    var datatable_container_style = document.createAttribute("style");
    datatable_container_style.value = "font-family: " + i_chart.i_design.datatable_font_family + "; font-size: " + i_chart.i_design.datatable_font_size + "; font-weight: " + i_chart.i_design.datatable_font_weight + "; background-color: " + i_chart.i_design.datatable_bg_color + "; color: " + i_chart.i_design.datatable_text_color + "; border: " + i_chart.i_design.datatable_border + "; border-radius: " + i_chart.i_design.datatable_border_radius + "; box-shadow: " + i_chart.i_design.datatable_box_shadow + "; scrollbar-color: " + i_chart.i_design.datatable_scrollbar_color + "; height: " + i_chart.i_design.datatable_height + "; max-height: 40%;";
    datatable_container.setAttributeNode( datatable_container_style );
    common_base_container.appendChild( datatable_container );

    // switch for the appropriate data type
    switch (chart_data_type) {
        // categorical
        case "categorical":

            // create table
            var data_table = document.createElement("table");
            var data_table_class = document.createAttribute("class");
            data_table_class.value = "js-chart-common-datatable-table";
            data_table.setAttributeNode( data_table_class );
            var data_table_style = document.createAttribute("style");
            data_table_style.value = "font-family: " + i_chart.i_design.datatable_font_family + "; font-size: " + i_chart.i_design.datatable_font_size + "; font-weight: " + i_chart.i_design.datatable_font_weight + "; background-color: " + i_chart.i_design.datatable_bg_color + "; color: " + i_chart.i_design.datatable_text_color + "; border: " + i_chart.i_design.datatable_border + ";";
            data_table.setAttributeNode( data_table_style );
            datatable_container.appendChild( data_table );

            // add tr
            var data_tr = document.createElement("tr");
            var data_tr_style = document.createAttribute("style");
            data_tr_style.value = "border: " + i_chart.i_design.datatable_border + ";";
            data_tr.setAttributeNode( data_tr_style );
            data_table.appendChild( data_tr );

            // add td
            var data_td = document.createElement("td");
            var data_td_style = document.createAttribute("style");
            data_td_style.value = "font-weight: bolder;";
            data_td.setAttributeNode( data_td_style );
            data_td.innerHTML = "RAW VALUES";
            data_tr.appendChild( data_td );

            for (var v = 0; v < i_chart.i_labels.length; v++) {
                // add td
                var data_td = document.createElement("td");
                var data_td_style = document.createAttribute("style");
                data_td_style.value = "font-weight: bolder;";
                data_td.setAttributeNode( data_td_style );
                if (typeof i_chart.i_labels[v] !== "undefined") {
                    var data_td_title = document.createAttribute("title");
                    data_td_title.value = i_chart.i_labels[v];
                    data_td.setAttributeNode( data_td_title );
                    data_td.innerHTML = i_chart.i_labels[v];
                }
                data_tr.appendChild( data_td );
            }

            for (var s = 0; s < i_chart.i_data.length; s++) {

                // add tr
                var data_tr = document.createElement("tr");
                data_table.appendChild( data_tr );

                // add label td
                if (typeof i_chart.i_titles[s] !== "undefined") {
                    var label_td = document.createElement("td");
                    if (typeof i_chart.i_titles[s] !== "undefined") {
                        var label_td_title = document.createAttribute("title");
                        label_td_title.value = i_chart.i_titles[s];
                        label_td.setAttributeNode( label_td_title );
                        label_td.innerHTML = i_chart.i_titles[s];
                    }
                    data_tr.appendChild( label_td );
                }

                for (var v = 0; v < i_chart.i_data[s].length; v++) {

                    // add td
                    var data_td = document.createElement("td");
                    if (typeof i_chart.i_data[s][v] !== "undefined") {
                        var data_td_title = document.createAttribute("title");
                        data_td_title.value = i_chart.i_data[s][v];
                        data_td.setAttributeNode( data_td_title );

                        data_td.innerHTML = jsChartCommonFormatChartAmount( i_chart.i_data[s][v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                    }
                    data_tr.appendChild( data_td );

                }
            }
            break;
        // cumulative
        case "cumulative":

            // create table
            var data_table = document.createElement("table");
            var data_table_class = document.createAttribute("class");
            data_table_class.value = "js-chart-common-datatable-table";
            data_table.setAttributeNode( data_table_class );
            var data_table_style = document.createAttribute("style");
            data_table_style.value = "font-family: " + i_chart.i_design.datatable_font_family + "; font-size: " + i_chart.i_design.datatable_font_size + "; font-weight: " + i_chart.i_design.datatable_font_weight + "; background-color: " + i_chart.i_design.datatable_bg_color + "; color: " + i_chart.i_design.datatable_text_color + "; border: " + i_chart.i_design.datatable_border + ";";
            data_table.setAttributeNode( data_table_style );
            datatable_container.appendChild( data_table );

            // add tr
            var data_tr = document.createElement("tr");
            var data_tr_style = document.createAttribute("style");
            data_tr_style.value = "border: " + i_chart.i_design.datatable_border + ";";
            data_tr.setAttributeNode( data_tr_style );
            data_table.appendChild( data_tr );

            // add td
            var data_td = document.createElement("td");
            var data_td_style = document.createAttribute("style");
            data_td_style.value = "font-weight: bolder;";
            data_td.setAttributeNode( data_td_style );
            data_td.innerHTML = "RAW VALUES";
            data_tr.appendChild( data_td );

            for (var v = 0; v < i_chart.i_labels.length; v++) {
                // add td
                var data_td = document.createElement("td");
                var data_td_style = document.createAttribute("style");
                data_td_style.value = "font-weight: bolder;";
                data_td.setAttributeNode( data_td_style );
                if (typeof i_chart.i_labels[v] !== "undefined") {
                    var data_td_title = document.createAttribute("title");
                    data_td_title.value = i_chart.i_labels[v];
                    data_td.setAttributeNode( data_td_title );
                    data_td.innerHTML = i_chart.i_labels[v];
                }
                data_tr.appendChild( data_td );
            }

            for (var s = 0; s < i_chart.i_data.length; s++) {

                // add tr
                var data_tr = document.createElement("tr");
                data_table.appendChild( data_tr );

                // add label td
                if (typeof i_chart.i_titles[s] !== "undefined") {
                    var label_td = document.createElement("td");
                    if (typeof i_chart.i_titles[s] !== "undefined") {
                        var label_td_title = document.createAttribute("title");
                        label_td_title.value = i_chart.i_titles[s];
                        label_td.setAttributeNode( label_td_title );
                        label_td.innerHTML = i_chart.i_titles[s];
                    }
                    data_tr.appendChild( label_td );
                }

                var row_total = 0;
                for (var v = 0; v < i_chart.i_data[s].length; v++) {

                    row_total += i_chart.i_data[s][v];

                    // add td
                    var data_td = document.createElement("td");
                    if (typeof i_chart.i_data[s][v] !== "undefined") {
                        var data_td_title = document.createAttribute("title");
                        data_td_title.value = i_chart.i_data[s][v];
                        data_td.setAttributeNode( data_td_title );

                        data_td.innerHTML = jsChartCommonFormatChartAmount( i_chart.i_data[s][v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                    }
                    data_tr.appendChild( data_td );

                }

                // add the total td
                var data_td = document.createElement("td");
                var data_td_title = document.createAttribute("title");
                data_td_title.value = i_chart.i_labels[ (i_chart.i_labels.length-1) ];
                data_td.setAttributeNode( data_td_title );
                data_td.innerHTML = jsChartCommonFormatChartAmount( roundNumber(row_total, 2), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                data_tr.appendChild( data_td );

            }
            break;
        // range
        case "range":

            // create table
            var data_table = document.createElement("table");
            var data_table_class = document.createAttribute("class");
            data_table_class.value = "js-chart-common-datatable-table";
            data_table.setAttributeNode( data_table_class );
            var data_table_style = document.createAttribute("style");
            data_table_style.value = "font-family: " + i_chart.i_design.datatable_font_family + "; font-size: " + i_chart.i_design.datatable_font_size + "; font-weight: " + i_chart.i_design.datatable_font_weight + "; background-color: " + i_chart.i_design.datatable_bg_color + "; color: " + i_chart.i_design.datatable_text_color + "; border: " + i_chart.i_design.datatable_border + ";";
            data_table.setAttributeNode( data_table_style );
            datatable_container.appendChild( data_table );

            // add tr
            var data_tr = document.createElement("tr");
            var data_tr_style = document.createAttribute("style");
            data_tr_style.value = "border: " + i_chart.i_design.datatable_border + ";";
            data_tr.setAttributeNode( data_tr_style );
            data_table.appendChild( data_tr );

            // add td
            var data_td = document.createElement("td");
            var data_td_style = document.createAttribute("style");
            data_td_style.value = "font-weight: bolder;";
            data_td.setAttributeNode( data_td_style );
            var data_td_colspan = document.createAttribute("colspan");
            data_td_colspan.value = "2";
            data_td.setAttributeNode( data_td_colspan );
            data_td.innerHTML = "RANGE VALUES";
            data_tr.appendChild( data_td );

            for (var v = 0; v < i_chart.i_labels.length; v++) {

                // add td
                var data_td = document.createElement("td");
                var data_td_style = document.createAttribute("style");
                data_td_style.value = "font-weight: bolder;";
                data_td.setAttributeNode( data_td_style );
                if (typeof i_chart.i_labels[v] !== "undefined") {
                    var data_td_title = document.createAttribute("title");
                    data_td_title.value = i_chart.i_labels[v];
                    data_td.setAttributeNode( data_td_title );
                    data_td.innerHTML = i_chart.i_labels[v];
                }
                data_tr.appendChild( data_td );
            }

            for (var s = 0; s < i_chart.i_data.length; s++) {

                // low values

                // add tr
                var data_tr = document.createElement("tr");
                data_table.appendChild( data_tr );

                // add label td
                if (typeof i_chart.i_titles[s] !== "undefined") {
                    var label_td = document.createElement("td");
                    if (typeof i_chart.i_titles[s] !== "undefined") {
                        var label_td_title = document.createAttribute("title");
                        label_td_title.value = i_chart.i_titles[s];
                        label_td.setAttributeNode( label_td_title );
                        label_td.innerHTML = i_chart.i_titles[s];
                    }
                    data_tr.appendChild( label_td );

                    var data_td = document.createElement("td");
                    data_td.innerHTML = "Low";
                    data_tr.appendChild( data_td );
                }

                for (var v = 0; v < i_chart.i_data[s]["low_values"].length; v++) {

                    // add td
                    var data_td = document.createElement("td");
                    if (typeof i_chart.i_data[s]["low_values"][v] !== "undefined") {
                        var data_td_title = document.createAttribute("title");
                        data_td_title.value = i_chart.i_data[s]["low_values"][v];
                        data_td.setAttributeNode( data_td_title );

                        data_td.innerHTML = jsChartCommonFormatChartAmount( i_chart.i_data[s]["low_values"][v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                    }
                    data_tr.appendChild( data_td );

                }


                // high values

                // add tr
                var data_tr = document.createElement("tr");
                data_table.appendChild( data_tr );

                // add label td
                if (typeof i_chart.i_titles[s] !== "undefined") {
                    var label_td = document.createElement("td");
                    if (typeof i_chart.i_titles[s] !== "undefined") {
                        var label_td_title = document.createAttribute("title");
                        label_td_title.value = i_chart.i_titles[s];
                        label_td.setAttributeNode( label_td_title );
                        label_td.innerHTML = i_chart.i_titles[s];
                    }
                    data_tr.appendChild( label_td );

                    var data_td = document.createElement("td");
                    data_td.innerHTML = "High";
                    data_tr.appendChild( data_td );
                }

                for (var v = 0; v < i_chart.i_data[s]["high_values"].length; v++) {

                    // add td
                    var data_td = document.createElement("td");
                    if (typeof i_chart.i_data[s]["high_values"][v] !== "undefined") {
                        var data_td_title = document.createAttribute("title");
                        data_td_title.value = i_chart.i_data[s]["high_values"][v];
                        data_td.setAttributeNode( data_td_title );

                        data_td.innerHTML = jsChartCommonFormatChartAmount( i_chart.i_data[s]["high_values"][v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                    }
                    data_tr.appendChild( data_td );

                }
            }

            break;

        // points
        case "points":

            // create table label
            var table_heading_label = document.createElement("div");
            var table_heading_label_class = document.createAttribute("class");
            table_heading_label_class.value = "js-chart-common-datatable-header-label";
            table_heading_label.setAttributeNode( table_heading_label_class );
            table_heading_label.innerText = "Showing first 10 data points per series";
            datatable_container.appendChild( table_heading_label );

            // create table
            var data_table = document.createElement("table");
            var data_table_class = document.createAttribute("class");
            data_table_class.value = "js-chart-common-datatable-table";
            data_table.setAttributeNode( data_table_class );
            var data_table_style = document.createAttribute("style");
            data_table_style.value = "font-family: " + i_chart.i_design.datatable_font_family + "; font-size: " + i_chart.i_design.datatable_font_size + "; font-weight: " + i_chart.i_design.datatable_font_weight + "; background-color: " + i_chart.i_design.datatable_bg_color + "; color: " + i_chart.i_design.datatable_text_color + "; border: " + i_chart.i_design.datatable_border + ";";
            data_table.setAttributeNode( data_table_style );
            datatable_container.appendChild( data_table );

            // draw the x, y and optional s point rows
            for (var s = 0; s < i_chart.i_data.length; s++) {

                // add new row -- x points
                var table_row = document.createElement("tr");
                data_table.appendChild( table_row );

                // add a new row series label
                var row_label = document.createElement("td");
                row_label.innerHTML = i_chart.i_titles[s];
                table_row.appendChild( row_label );

                // add a new row point label
                var point_label = document.createElement("td");
                point_label.innerHTML = "x-points:";
                table_row.appendChild( point_label );

                var max_cells = 10;
                if (i_chart.i_data[s].x_points.length < max_cells) {
                    max_cells = i_chart.i_data[s].x_points.length;
                }

                for (var v = 0; v < max_cells; v++) {

                    // add a new cell per value
                    var point_cell = document.createElement("td");
                    point_cell.innerText = i_chart.i_data[s].x_points[v];
                    table_row.appendChild( point_cell );
                }

                // add new row -- y points
                var table_row = document.createElement("tr");
                data_table.appendChild( table_row );

                // add a new row series label
                var row_label = document.createElement("td");
                row_label.innerHTML = "&nbsp;";
                table_row.appendChild( row_label );

                // add a new row point label
                var point_label = document.createElement("td");
                point_label.innerHTML = "y-points:";
                table_row.appendChild( point_label );

                var max_cells = 10;
                if (i_chart.i_data[s].y_points.length < max_cells) {
                    max_cells = i_chart.i_data[s].y_points.length;
                }

                for (var v = 0; v < max_cells; v++) {

                    // add a new cell per value
                    var point_cell = document.createElement("td");
                    point_cell.innerText = i_chart.i_data[s].y_points[v];
                    table_row.appendChild( point_cell );
                }

                // add new row -- s points
                if (i_chart.i_data[s].s_points.length > 1) {

                    // add new row -- s points
                    var table_row = document.createElement("tr");
                    data_table.appendChild( table_row );

                    // add a new row series label
                    var row_label = document.createElement("td");
                    row_label.innerHTML = "&nbsp;";
                    table_row.appendChild( row_label );

                    // add a new row point label
                    var point_label = document.createElement("td");
                    point_label.innerHTML = "s-points:";
                    table_row.appendChild( point_label );

                    var max_cells = 10;
                    if (i_chart.i_data[s].s_points.length < max_cells) {
                        max_cells = i_chart.i_data[s].s_points.length;
                    }

                    for (var v = 0; v < max_cells; v++) {

                        // add a new cell per value
                        var point_cell = document.createElement("td");
                        point_cell.innerText = i_chart.i_data[s].s_points[v];
                        table_row.appendChild( point_cell );
                    }
                }
            }

            break;
        
        // ohlc (open-high-low-close(-volume))
        case "ohlc":

            // create table label
            var table_heading_label = document.createElement("div");
            var table_heading_label_class = document.createAttribute("class");
            table_heading_label_class.value = "js-chart-common-datatable-header-label";
            table_heading_label.setAttributeNode( table_heading_label_class );
            table_heading_label.innerText = "Open-High-Low-Close";
            datatable_container.appendChild( table_heading_label );

            // create table
            var data_table = document.createElement("table");
            var data_table_class = document.createAttribute("class");
            data_table_class.value = "js-chart-common-datatable-table";
            data_table.setAttributeNode( data_table_class );
            var data_table_style = document.createAttribute("style");
            data_table_style.value = "font-family: " + i_chart.i_design.datatable_font_family + "; font-size: " + i_chart.i_design.datatable_font_size + "; font-weight: " + i_chart.i_design.datatable_font_weight + "; background-color: " + i_chart.i_design.datatable_bg_color + "; color: " + i_chart.i_design.datatable_text_color + "; border: " + i_chart.i_design.datatable_border + ";";
            data_table.setAttributeNode( data_table_style );
            datatable_container.appendChild( data_table );


            // new heading row
            var table_row = document.createElement("tr");
            data_table.appendChild( table_row );

            // add table headings
            var table_td = document.createElement("td");
            table_td.innerHTML = "Label"
            table_row.appendChild( table_td);

            // add table heading - open
            var table_td = document.createElement("td");
            table_td.innerText = "Open";
            table_row.appendChild( table_td);

            // add table heading - high
            var table_td = document.createElement("td");
            table_td.innerText = "High";
            table_row.appendChild( table_td);

            // add table heading - low
            var table_td = document.createElement("td");
            table_td.innerText = "Low";
            table_row.appendChild( table_td);

            // add table heading - close
            var table_td = document.createElement("td");
            table_td.innerText = "Close";
            table_row.appendChild( table_td);

            // add table heading - volume
            var table_td = document.createElement("td");
            table_td.innerText = "Volume";
            table_row.appendChild( table_td);

            for (var v = 0; v < i_chart.i_data[0].open.length; v++) {

                // new row
                var table_tr = document.createElement("tr");
                data_table.appendChild( table_tr );

                // label
                var table_td = document.createElement("td");
                table_td.innerText = i_chart.i_labels[v];
                table_tr.appendChild( table_td );

                // open
                var table_td = document.createElement("td");
                table_td.innerText = i_chart.i_data[0].open[v];
                table_tr.appendChild( table_td );

                // high
                var table_td = document.createElement("td");
                table_td.innerText = i_chart.i_data[0].high[v];
                table_tr.appendChild( table_td );

                // low
                var table_td = document.createElement("td");
                table_td.innerText = i_chart.i_data[0].low[v];
                table_tr.appendChild( table_td );

                // close
                var table_td = document.createElement("td");
                table_td.innerText = i_chart.i_data[0].close[v];
                table_tr.appendChild( table_td );

                // volume
                if (typeof i_chart.i_data[0].volume[v] !== "undefined") {
                    var table_td = document.createElement("td");
                    table_td.innerText = i_chart.i_data[0].volume[v];
                    table_tr.appendChild( table_td );
                }

            }

            break;
        
        // hierarchical
        case "hierarchical":
            // create table label
            var table_heading_label = document.createElement("div");
            var table_heading_label_class = document.createAttribute("class");
            table_heading_label_class.value = "js-chart-common-datatable-header-label";
            table_heading_label.setAttributeNode( table_heading_label_class );
            table_heading_label.innerText = "Hierarchical Data";
            datatable_container.appendChild( table_heading_label );

            // add textarea
            var text_container = document.createElement("textarea");
            var text_container_style = document.createAttribute("style");
            text_container_style.value = "width: calc(100% - 20px); margin: 0px 5px 0px 5px; min-height: 30px; font-size: 9px; text-wrap-mode: wrap;";
            text_container.setAttributeNode( text_container_style );
            var text_container_disabled = document.createAttribute("disabled");
            text_container_disabled.value = "disabled";
            text_container.setAttributeNode( text_container_disabled );
            text_container.innerHTML = JSON.stringify(i_chart.i_data, null, "\t");
            datatable_container.appendChild( text_container );

            break;

        default:
            break;
    }

    return true;
}
// draw the debug options
function jsChartCommonDrawControlsBetaOptions(control_panel_container, i_chart) {

    // beta label container
    var beta_label_container = document.createElement("div");
    var beta_label_class = document.createAttribute("class");
    beta_label_class.value = "js-chart-common-option-beta-label-container";
    beta_label_container.setAttributeNode( beta_label_class );
    var beta_label_title = document.createAttribute("title");
    beta_label_title.value = "This chart is in Public beta.";
    beta_label_container.setAttributeNode( beta_label_title );
    beta_label_container.innerText = "beta";
    control_panel_container.appendChild( beta_label_container );

    return true;
}
// draw the debug options
function jsChartCommonDrawControlsDebugOptions(control_panel_container, i_chart) {

    // debug container
    var debug_container = document.createElement("div");
    var debug_container_class = document.createAttribute("class");
    debug_container_class.value = "js-chart-common-option-debug-container";
    debug_container.setAttributeNode( debug_container_class );
    debug_container.innerText = "DEBUG";
    debug_container.addEventListener("click", function () {
        console.log( i_chart );
    }, false);
    control_panel_container.appendChild( debug_container );

    return true;
}
// draw the histogram bin options on the control panel
function jsChartCommonDrawControlsBubbleOptions(control_panel_container, i_chart) {

    var chart_bubble_labels = control_panel_container.parentElement.parentElement.parentElement.getElementsByClassName("js-bubble-size-labels");
    var chart_bubble_frequencies = control_panel_container.parentElement.parentElement.parentElement.getElementsByClassName("js-bubble-size-control");

    if ((chart_bubble_labels.length == 0) && (chart_bubble_frequencies.length == 0)) {

        // option label
        var option_label = document.createElement("div");
        var option_label_class = document.createAttribute("class");
        option_label_class.value = "js-chart-common-option-bubble-size-label";
        option_label.setAttributeNode( option_label_class );
        option_label.innerText = "Bubble size:";
        control_panel_container.appendChild( option_label );

        // bubble size text box
        var bubble_size = document.createElement("input");
        bubble_size.id = "js-chart-common-option-bubble-size";
        var bubble_size_class = document.createAttribute("class");
        bubble_size_class.value = "js-chart-common-option-bubble-size";
        bubble_size.setAttributeNode( bubble_size_class );
        var bubble_size_name = document.createAttribute("name");
        bubble_size_name.value = "js-chart-common-option-bubble-size";
        bubble_size.setAttributeNode( bubble_size_name );
        var bubble_size_maxlen = document.createAttribute("maxlength");
        bubble_size_maxlen.value = "7";
        bubble_size.setAttributeNode( bubble_size_maxlen );
        bubble_size.value = i_chart.i_design.marker_width;
        bubble_size.addEventListener("click", function () {
            this.select();
        }, false);
        bubble_size.addEventListener("change", function () {

            /*
            var parse_bubble_size = parseFloat(this.value.trim());
            if (isNaN(parse_bubble_size)) {
                return false;
            }
            */

            var parent_chart = this.parentElement.parentElement.parentElement.parentElement;
            var chart_bubble_size = parent_chart.getElementsByClassName("js-marker-width");
            if (chart_bubble_size.length == 0) {

                var bubble_size_elem = document.createElement("div");
                var bubble_size_elem_class = document.createAttribute("class");
                bubble_size_elem_class.value = "js-marker-width";
                bubble_size_elem.setAttributeNode( bubble_size_elem_class );
                bubble_size_elem.innerText = this.value.trim();
                parent_chart.appendChild( bubble_size_elem );

            } else {

                chart_bubble_size[0].innerText = this.value.trim();

            }
            var chart_bubble_size_height = parent_chart.getElementsByClassName("js-marker-height");
            if (chart_bubble_size_height.length == 0) {

                var bubble_size_elem = document.createElement("div");
                var bubble_size_elem_class = document.createAttribute("class");
                bubble_size_elem_class.value = "js-marker-height";
                bubble_size_elem.setAttributeNode( bubble_size_elem_class );
                bubble_size_elem.innerText = this.value.trim();
                parent_chart.appendChild( bubble_size_elem );

            } else {

                chart_bubble_size_height[0].innerText = this.value.trim();

            }

            var init_chart = initChart(i_chart.chart_counter, null, null);

            return true;
        }, false);
        control_panel_container.appendChild( bubble_size );
    }

    return true;
}
// draw the histogram bin options on the control panel
function jsChartCommonDrawControlsBinOptions(control_panel_container, i_chart) {

    var chart_bin_labels = control_panel_container.parentElement.parentElement.parentElement.getElementsByClassName("js-bin-labels");
    var chart_bin_frequencies = control_panel_container.parentElement.parentElement.parentElement.getElementsByClassName("js-bin-frequencies");
    if ((chart_bin_labels.length == 0) && (chart_bin_frequencies.length == 0)) {

        // option label
        var option_label = document.createElement("div");
        var option_label_class = document.createAttribute("class");
        option_label_class.value = "js-chart-common-option-bin-size-label";
        option_label.setAttributeNode( option_label_class );
        option_label.innerText = "Bin size:";
        control_panel_container.appendChild( option_label );

        // bin size text box
        var bin_size = document.createElement("input");
        bin_size.id = "js-chart-common-option-bin-size";
        var bin_size_class = document.createAttribute("class");
        bin_size_class.value = "js-chart-common-option-bin-size";
        bin_size.setAttributeNode( bin_size_class );
        var bin_size_name = document.createAttribute("name");
        bin_size_name.value = "js-chart-common-option-bin-size";
        bin_size.setAttributeNode( bin_size_name );
        var bin_size_maxlen = document.createAttribute("maxlength");
        bin_size_maxlen.value = "7";
        bin_size.setAttributeNode( bin_size_maxlen );
        bin_size.value = i_chart.i_design.bin_size;
        bin_size.addEventListener("click", function () {
            this.select();
        }, false);
        bin_size.addEventListener("change", function () {
            
            var parse_bin_size = parseFloat(this.value.trim());
            if (isNaN(parse_bin_size)) {
                return false;
            }

            var parent_chart = this.parentElement.parentElement.parentElement.parentElement;
            var chart_bin_size = parent_chart.getElementsByClassName("js-bin-size");
            if (chart_bin_size.length == 0) {

                var bin_size_elem = document.createElement("div");
                var bin_size_elem_class = document.createAttribute("class");
                bin_size_elem_class.value = "js-bin-size";
                bin_size_elem.setAttributeNode( bin_size_elem_class );
                bin_size_elem.innerText = this.value.trim();
                parent_chart.appendChild( bin_size_elem );

            } else {

                chart_bin_size[0].innerText = this.value.trim();

            }

            var init_chart = initChart(i_chart.chart_counter, null, null);

            return true;
        }, false);
        control_panel_container.appendChild( bin_size );
    }

    return true;
}
// draw or hide (toggle) the polling image
function jsChartCommonTogglePollingContainer(toggle_container, this_chart) {

    var polling_container = this_chart.getElementsByClassName("js-chart-common-polling-container");

    // enable / draw the polling container
    if ((toggle_container) && (polling_container.length == 0)) {

        // container
        var polling_container = document.createElement("div");
        var polling_container_class = document.createAttribute("class");
        polling_container_class.value = "js-chart-common-polling-container";
        polling_container.setAttributeNode( polling_container_class );
        this_chart.appendChild( polling_container );

        // label
        var polling_label = document.createElement("div");
        var polling_label_class = document.createAttribute("class");
        polling_label_class.value = "js-chart-common-polling-label";
        polling_label.setAttributeNode( polling_label_class );
        polling_label.innerText = "Loading...";
        polling_container.appendChild( polling_label );

        // image
        var polling_image = document.createElement("img");
        var polling_image_src = document.createAttribute("src");
        polling_image_src.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAA+klEQVR42u3YMQrCMBTG8T/EQ+QICp7D4n3cRBys0EE8hLi46VDwCC4eSSNkEKVYS6M8Wr7fG0N5H02heUFEpNs8JSUeM3MCgTlm1jHAWgF6HWDMkRWuVQDHiiNjkpxii/2HCHlczT+038fVE0lyQk2EjBs3spr2MV4Kx44Q68CAqhGj70/9NcI/21df55YmtjXblhjhShPXavt0jg0XpjQx5cIGp3+1SId5FhTPWjKhrYzipWZ4GjkT3urOkDaG3AlvdTYP0GYLCrIfbcECr+9bxID5kcz+UGp/LDcfTMxHM/Ph1Hw8N7+g0B2RAvT6qtZTUuqoKSId9wB0B9Gu934NFgAAAABJRU5ErkJggg==";
        polling_image.setAttributeNode( polling_image_src );
        var polling_image_style = document.createAttribute("style");
        polling_image_style.value = "position: absolute; width: 50px; height: 50px; bottom: 5px; left: calc(50% - 25px);";
        polling_image.setAttributeNode( polling_image_style );
        polling_image.innerText = "Loading...";
        polling_container.appendChild( polling_image );

    // disable / remove the polling container
    } else if ((!toggle_container) && (polling_container.length > 0)) {

        polling_container[0].remove();

    }

    return true;
}
// draw the controls  (check of showcontrols already done)
function jsChartCommonDrawControlsContainer(level0_inner_panel, i_chart) {

    // add the control panel container
    var control_panel_container = document.createElement("div");
    var control_panel_container_class = document.createAttribute("class");
    control_panel_container_class.value = "js-chart-common-control-panel-container";
    control_panel_container.setAttributeNode( control_panel_container_class );
    level0_inner_panel.appendChild( control_panel_container );

    // add the print button
    var print_button = document.createElement("div");
    var print_button_class = document.createAttribute("class");
    print_button_class.value = "js-chart-common-button";
    print_button.setAttributeNode( print_button_class );
    var print_button_title = document.createAttribute("title");
    print_button_title.value = "Print this chart";
    print_button.setAttributeNode( print_button_title );
    var print_button_style = document.createAttribute("style");
    print_button_style.value = "font-family: " + i_chart.i_design.control_button_font_family + "; font-size: " + i_chart.i_design.control_button_font_size + "; font-weight: " + i_chart.i_design.control_button_font_weight + "; background-color: " + i_chart.i_design.control_button_bg_color + "; color: " + i_chart.i_design.control_button_text_color + "; border: " + i_chart.i_design.control_button_border + "; border-radius: " + i_chart.i_design.control_button_border_radius + "; box-shadow: " + i_chart.i_design.control_button_box_shadow + "; opacity: " + i_chart.i_design.control_button_opacity + ";";
    print_button.setAttributeNode( print_button_style );
    print_button.innerText = "Print";
    print_button.addEventListener("click", function () {
        var print_chart = jsChartPrintChart( this.parentElement.parentElement.parentElement.parentElement );
    }, false);
    control_panel_container.appendChild( print_button );

    if (i_chart.i_options.showcontrols != "print_only") {

        // add the settings/options menu button
        var options_button = document.createElement("div");
        var options_button_class = document.createAttribute("class");
        options_button_class.value = "js-chart-common-button";
        options_button.setAttributeNode( options_button_class );
        var options_button_title = document.createAttribute("title");
        options_button_title.value = "Open the options menu";
        options_button.setAttributeNode( options_button_title );
        var options_button_style = document.createAttribute("style");
        options_button_style.value = "font-family: " + i_chart.i_design.control_button_font_family + "; font-size: " + i_chart.i_design.control_button_font_size + "; font-weight: " + i_chart.i_design.control_button_font_weight + "; background-color: " + i_chart.i_design.control_button_bg_color + "; color: " + i_chart.i_design.control_button_text_color + "; border: " + i_chart.i_design.control_button_border + "; border-radius: " + i_chart.i_design.control_button_border_radius + "; box-shadow: " + i_chart.i_design.control_button_box_shadow + "; opacity: " + i_chart.i_design.control_button_opacity + ";";
        options_button.setAttributeNode( options_button_style );
        options_button.innerText = "Options";
        options_button.addEventListener("click", function () {
            var open_options = jsChartCommonEventToggleOptionsMenu( this.parentElement.parentElement.parentElement.parentElement, i_chart );
        }, false);
        control_panel_container.appendChild( options_button );

    }

    // draw the bin options for a histogram chart
    switch (i_chart.type) {
        // histogram
        case "histogram":
            var draw_menu_option_bins = jsChartCommonDrawControlsBinOptions(control_panel_container, i_chart);
            break;

        // bubble
        case "bubble":
            var draw_menu_option_bubble_size = jsChartCommonDrawControlsBubbleOptions(control_panel_container, i_chart);
            break;
    }

    // debug container
    if ((typeof IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].type_options.enable_debug !== "undefined") && (IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].type_options.enable_debug)) {
        var draw_menu_option_debug = jsChartCommonDrawControlsDebugOptions(control_panel_container, i_chart);
    }

    // beta label
    if ((typeof IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].type_options.enable_beta !== "undefined") && (IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].type_options.enable_beta)) {
        var draw_menu_option_debug = jsChartCommonDrawControlsBetaOptions(control_panel_container, i_chart);
    }

    return true;
}
// draw the common base containers
function jsChartCommonDrawBaseContainers(this_chart, i_chart, default_showlegend_baheviour, default_showdatatable_baheviour, default_showcontrols_baheviour, chart_data_type, legend_labels, palette_type) {

    // add the common base container
    var common_base_container = document.createElement("div");
    var common_base_container_class = document.createAttribute("class");
    common_base_container_class.value = "js-chart-common-base-container";
    common_base_container.setAttributeNode( common_base_container_class );
    var common_base_container_style = document.createAttribute("style");
    common_base_container_style.value = "font-family: " + i_chart.i_design.chart_font_family + "; font-size: " + i_chart.i_design.chart_font_size + "; font-weight: " + i_chart.i_design.chart_font_weight + "; background-color: " + i_chart.i_design.chart_bg_color + "; color: " + i_chart.i_design.chart_text_color + "; border-radius: " + i_chart.i_design.chart_border_radius + "; box-shadow: " + i_chart.i_design.chart_box_shadow + ";";
    common_base_container_style.value += " width: " + i_chart.i_options.width + "; height: " + i_chart.i_options.height + "; border: " + i_chart.i_design.chart_border + ";";
    /*
    if (i_chart.i_options.showborder) {
        // common_base_container_style.value += " border: " + i_chart.i_design.chart_border + "; width: calc(" + i_chart.i_options.width + " - 1.6px); height: calc(" + i_chart.i_options.height + " - 1.6px);";
        common_base_container_style.value += " width: " + i_chart.i_options.width + "; height: " + i_chart.i_options.height + ";";
    } else {
        common_base_container_style.value += " width: " + i_chart.i_options.width + "; height: " + i_chart.i_options.height + ";";
    }
    */
    common_base_container.setAttributeNode( common_base_container_style );
    this_chart.appendChild( common_base_container );

    // record which containers to subtract from the total
    var minus_containers_height = [];
    var minus_containers_width = [];

    // add the title to the base container
    if (i_chart.i_options.title.trim().length > 0) {

        var title_container = document.createElement("div");
        var title_container_class = document.createAttribute("class");
        title_container_class.value = "js-chart-common-title-container";
        title_container.setAttributeNode( title_container_class );
        var title_container_style = document.createAttribute("style");
        title_container_style.value = "font-family: " + i_chart.i_design.title_font_family + "; font-size: " + i_chart.i_design.title_font_size + "; font-weight: " + i_chart.i_design.title_font_weight + "; background-color: " + i_chart.i_design.title_bg_color + "; color: " + i_chart.i_design.title_text_color + "; border: " + i_chart.i_design.title_border + "; border-radius: " + i_chart.i_design.title_border_radius + "; box-shadow: " + i_chart.i_design.title_box_shadow + ";";
        title_container.setAttributeNode( title_container_style );
        title_container.innerText = i_chart.i_options.title;
        common_base_container.appendChild( title_container );

        minus_containers_height.push("var(--js-chart-common-base-title-height)");

    }

    // add the level0 panel
    var level0_inner_panel = document.createElement("div");
    var level0_inner_panel_class = document.createAttribute("class");
    level0_inner_panel_class.value = "js-chart-common-level0-inner-panel";
    level0_inner_panel.setAttributeNode( level0_inner_panel_class );
    common_base_container.appendChild( level0_inner_panel );

    // showcontrols -> off
    // showcontrols -> print_only
    // showcontrols -> ( auto | on )

    if (((i_chart.i_options.showcontrols == "auto") && (default_showcontrols_baheviour == true)) || (i_chart.i_options.showcontrols == true) || (i_chart.i_options.showcontrols == "print_only")) {

        minus_containers_width.push("var(--js-chart-common-control-panel-width)");

        var draw_controls_container = jsChartCommonDrawControlsContainer(level0_inner_panel, i_chart);

    }

    // showlegend -> off
    // showlegend -> side
    // showlegend -> bottom
    // showlegend -> ( on | auto )

    if ((i_chart.i_options.showlegend == "side") || (((i_chart.i_options.showlegend == "auto") || (i_chart.i_options.showlegend == true)) && (default_showlegend_baheviour == "side"))) {
        var level1_inner_panel_style__value = "display: flex; flex-direction: row;";
        var legend_container_style__value = "width: var(--js-chart-common-legend-width); display: flex; flex-direction: column;"
        var level2_inner_panel_style__value = "";
        minus_containers_width.push("var(--js-chart-common-legend-width)");
    } else if ((i_chart.i_options.showlegend == "bottom") || (((i_chart.i_options.showlegend == "auto") || (i_chart.i_options.showlegend == true)) && (default_showlegend_baheviour == "bottom"))) {
        var level1_inner_panel_style__value = "display: flex; flex-direction: column;";
        var legend_container_style__value = "height: var(--js-chart-common-legend-height); display: flex; flex-direction: row;";
        var level2_inner_panel_style__value = "";
        minus_containers_height.push("var(--js-chart-common-legend-height)");
    } else {
        var level1_inner_panel_style__value = "";
        var legend_container_style__value = "";
        var level2_inner_panel_style__value = "width: 100%; height: 100%;";
    }

    // add the level1 inner panel (and set the appropriate flex direction based on the legend location)
    var level1_inner_panel = document.createElement("div");
    var level1_inner_panel_class = document.createAttribute("class");
    level1_inner_panel_class.value = "js-chart-common-level1-inner-panel";
    level1_inner_panel.setAttributeNode( level1_inner_panel_class );
    var level1_inner_panel_style = document.createAttribute("style");
    level1_inner_panel_style.value = level1_inner_panel_style__value;
    level1_inner_panel.setAttributeNode( level1_inner_panel_style );
    level0_inner_panel.appendChild( level1_inner_panel );

    // draw the level2 inner panel
    var level2_inner_panel = document.createElement("div");
    var level2_inner_panel_class = document.createAttribute("class");
    level2_inner_panel_class.value = "js-chart-common-level2-inner-panel";
    level2_inner_panel.setAttributeNode( level2_inner_panel_class );
    var level2_inner_panel_style = document.createAttribute("style");
    level2_inner_panel_style.value = level2_inner_panel_style__value;
    level2_inner_panel.setAttributeNode( level2_inner_panel_style );
    level1_inner_panel.appendChild( level2_inner_panel );

    // showlegend -> off
    // showlegend -> side
    // showlegend -> bottom
    // showlegend -> ( on | auto )
    if ((i_chart.i_options.showlegend == true) || (i_chart.i_options.showlegend == "auto") || (i_chart.i_options.showlegend == "side") || (i_chart.i_options.showlegend == "bottom")) {

        var legend_container = jsChartCommonDrawLegendContainer(level1_inner_panel, i_chart.i_data[0], i_chart.i_labels, i_chart.i_titles, i_chart.i_options, i_chart.i_design, legend_container_style__value, chart_data_type, legend_labels, palette_type);

    }

    // add the  data table to the base container
    if (i_chart.i_options.showdatatable) {

        minus_containers_height.push("var(--js-chart-common-base-datatable-height)");

        var draw_datatable_container = jsChartCommonDrawDataTableContainer(common_base_container, i_chart, chart_data_type);

    }

    // add the footer to the base container
    minus_containers_height.push("var(--js-chart-common-base-footer-height)");

    var footer_container = document.createElement("div");
    var footer_container_class = document.createAttribute("class");
    footer_container_class.value = "js-chart-common-footer-container";
    footer_container.setAttributeNode( footer_container_class );
    var footer_container_title = document.createAttribute("title");
    footer_container_title.value = i_chart.i_design.footer_inner_text;
    footer_container.setAttributeNode( footer_container_title );
    var footer_container_style = document.createAttribute("style");
    footer_container_style.value = "font-family: " + i_chart.i_design.footer_font_family + "; font-size: " + i_chart.i_design.footer_font_size + "; font-weight: " + i_chart.i_design.footer_font_weight + "; background-color: " + i_chart.i_design.footer_bg_color + "; color: " + i_chart.i_design.footer_text_color + "; border: " + i_chart.i_design.footer_border + "; border-radius: " + i_chart.i_design.footer_border_radius + "; box-shadow: " + i_chart.i_design.footer_box_shadow + ";";
    footer_container.setAttributeNode( footer_container_style );
    footer_container.innerText = i_chart.i_design.footer_inner_text;
    common_base_container.appendChild( footer_container );

    if (minus_containers_height.length > 0) {

        var level0_inner_panel_style = level0_inner_panel.getAttribute("style");
        if (level0_inner_panel_style != null) {
            level0_inner_panel_style += "height: calc(100% - (" + minus_containers_height.join(" + ") + "));";
        } else {
            level0_inner_panel_style = "height: calc(100% - (" + minus_containers_height.join(" + ") + "));";
        }
        level0_inner_panel.setAttribute("style", level0_inner_panel_style);

        if ((i_chart.i_options.showlegend == "bottom") || ((i_chart.i_options.showlegend == "auto") && (default_showlegend_baheviour == "bottom"))) {

            var level2_inner_panel_style = level2_inner_panel.getAttribute("style");
            if (level2_inner_panel_style != null) {
                level2_inner_panel_style += "height: calc(100% - (" + minus_containers_height.join(" + ") + "));";
            } else {
                level2_inner_panel_style = "height: calc(100% - (" + minus_containers_height.join(" + ") + "));";
            }
            level2_inner_panel.setAttribute("style", level2_inner_panel_style);

        }
    }
    if (minus_containers_width.length > 0) {

        var level1_inner_panel_style = level1_inner_panel.getAttribute("style");
        level1_inner_panel_style += "width: calc(100% - (" + minus_containers_width.join(" + ") + "));";
        level1_inner_panel.setAttribute("style", level1_inner_panel_style);

    }

    return [level2_inner_panel, legend_container];
}
// convert all absolute values to relative values
function jsChartCommonConvertAbsoluteToRelativeValues(i_data_type, i_data, maximum_value) {

    if (i_data_type == "absolute") {
        var rel_data = [];
        for (var s = 0; s < i_data.length; s++) {
            rel_data[s] = [];
            for (var v = 0; v < i_data[s].length; v++) {
                if (typeof i_data[s][v] !== "undefined") {
                    rel_data[s].push( ((i_data[s][v] / maximum_value) * 100) );
                }
            }
        }
    } else {
        var rel_data = [];
        for (var s = 0; s < i_data.length; s++) {
            rel_data[s] = [];
            for (var v = 0; v < i_data[s].length; v++) {
                if (typeof i_data[s][v] !== "undefined") {
                    rel_data[s].push( i_data[s][v] );
                }
            }
        }
    }

    return rel_data;
}
// calculate the biggest value across all data serieses:
// assuming all input data is numeric and n values
function jsChartCommonCalculateBiggestSeriesValue( i_data ) {

    if ((!i_data) || (i_data.length == 0)) {
        return false;
    }

    var b_value = i_data[0][0];
    for (var s = 0; s < i_data.length; s++) {
        for (var v = 0; v < i_data[s].length; v++) {
            if (i_data[s][v] > b_value) {
                b_value = i_data[s][v];
            }
        }
    }

    return b_value;
}
// count the number of decimal places
function jsChartCommonCalculateNoOfDecimalPlaces(input_value) {
    if(Math.floor(input_value) === input_value) {
        return 0;
    }
    return input_value.toString().split(".")[1].length || 0; 
}
// calcuate the numeric step value (the space between axis labels) on the axis scale based on:
// - the maximum value in the data set
// - the required number of steps, default - 10
function jsChartCommonCalculateScaleStep( chart_value_range , no_of_steps = 10 ) {

    var minimum = chart_value_range / no_of_steps;
    var magnitude = Math.pow(no_of_steps, Math.floor(Math.log(minimum) / Math.log(no_of_steps)));
    var residual = minimum / magnitude;

    if (residual > 5) {
        ystep = 10 * magnitude;
    } else if  (residual > 2) {
        ystep = 5 * magnitude;
    } else if (residual > 1) {
        ystep = 2 * magnitude;
    } else {
        ystep = magnitude;
    }

    return ( ystep );
}
// calculate the min and maximum values in the series
function jsChartCommonCalculateScaleMinMaxRelativeStackedValues(i_data) {

    // group positive and negative numbers
    var p_group = [];
    var n_group = [];
    var p_total = [];
    var n_total = [];
    var p_series_index = [];
    var n_series_index = [];
    var g_total = [];

    // determine the i_data with the longest value
    var max_loop = 0;
    for (var s = 0; s < i_data.length; s++) {
        if (i_data[s].length > max_loop) {
            max_loop = i_data[s].length;
        }
    }
    for (var v = 0; v < max_loop; v++) {
        p_group[v] = [];
        n_group[v] = [];
        p_total[v] = 0;
        n_total[v] = 0;
        p_series_index[v] = [];
        n_series_index[v] = [];
        g_total[v] = 0;
        for (var s = 0; s < i_data.length; s++) {
            g_total[v] += Math.abs(i_data[s][v]);

            if (i_data[s][v] >= 0) {
                p_group[v].push ( i_data[s][v] );
                p_total[v] += i_data[s][v];
                p_series_index[v].push( s );
            } else {
                n_group[v].push( Math.abs(i_data[s][v]) );
                n_total[v] += Math.abs(i_data[s][v]);
                n_series_index[v].push( s );
            }
        }
    }

    // calculate the perc -- remember this is used to calculate the y axis (the perc still needs to be calculated for each individual sections in the chart columns)
    var p_perc = [];
    var n_perc = [];
    for (var v = 0; v < i_data[0].length; v++) {
        if (g_total[v] > 0) {
            p_perc.push( (p_total[v] / g_total[v]) );
            n_perc.push( (n_total[v] / g_total[v]) );
        } else {
            p_perc.push( 0 );
            n_perc.push( 0 );
        }
    }


    // determine the biggest and smallest perc
    var biggest_perc = p_perc[0];
    var smallest_perc = n_perc[0];
    for (var v = 1; v < i_data[0].length; v++) {
        if (p_perc[v] > biggest_perc) {
            biggest_perc = p_perc[v];
        }
        if (n_perc[v] > smallest_perc) {
            smallest_perc = n_perc[v];
        }
    }
    biggest_perc = roundNumber(biggest_perc, 2) * 100;
    smallest_perc = roundNumber(smallest_perc, 2) * 100;

    return [-smallest_perc, biggest_perc ];
}
// calculate the min and maximum values in the series
function jsChartCommonCalculateScaleMinMaxStackedValues(i_data) {
    var max_len = 0;
    var p_stacked = [];
    var n_stacked = [];

    // determine the series with the longest length
    for (var s = 0; s < i_data.length; s++) {
        if (i_data[s].length > max_len) {
            max_len = i_data[s].length;
        }
    }

    // sum those positive and negative stacks
    for (var v = 0; v < max_len; v++) {
        p_stacked[v] = 0;
        n_stacked[v] = 0;
        for (var s = 0; s < i_data.length; s++) {
            if (i_data[s][v] >= 0) {
                p_stacked[v] += parseFloat(i_data[s][v]);
            } else {
                n_stacked[v] += parseFloat(i_data[s][v]);
            }
        }
    }

    var most_p = p_stacked[0];
    var most_n = n_stacked[0];
    for (var v = 1; v < max_len; v++) {
        if (p_stacked[v] > most_p) {
            most_p = p_stacked[v];
        }
        if (n_stacked[v] < most_n) {
            most_n = n_stacked[v];
        }
    }

    return [ most_n , most_p ]
}
// calculate the min and maximum values in the series
function jsChartCommonCalculateScaleMinMaxValues(i_totals) {

    var series_min_value = i_totals[0].min_value;
    var series_max_value = i_totals[0].max_value;

    for (var s = 1; s < i_totals.length; s++) {
        if (i_totals[s].min_value < series_min_value) {
            series_min_value = i_totals[s].min_value;
        }
        if (i_totals[s].max_value > series_max_value) {
            series_max_value = i_totals[s].max_value;
        }
    }

    return [ series_min_value , series_max_value ];
}
// calculate the max and min scale values
function jsChartCommonCalculateScale( i_data, i_totals, series_min_value, series_max_value, number_of_steps = 10, scale_type = "" ) {

    // return:
    // - max value on the axis scale
    // - min value on the axis scale
    // - step between the min and max values on the axis
    // - the number of decimal places to support, based on the input data, e.g. if the input data does not use decimals, it will return 0.
    //                       e.g. if the input data is 1.1, 1.23, 1.234, the maximum number of decimal places used by the data is 3.

    // determine the smallest and biggest value in the data set
    if ((isNaN(parseFloat(series_min_value))) || (isNaN(parseFloat(series_max_value)))) {
        switch( scale_type ) {
            // stacked
            case "stacked":
                var calculate_series_extremes = jsChartCommonCalculateScaleMinMaxStackedValues(i_data);
                var series_min_value = calculate_series_extremes[0];
                var series_max_value = calculate_series_extremes[1];

                break;
            // 100% stacked
            case "100% stacked":
                var calculate_series_extremes = jsChartCommonCalculateScaleMinMaxRelativeStackedValues(i_data);
                var series_min_value = calculate_series_extremes[0];
                var series_max_value = calculate_series_extremes[1];

                break;
            // all other
            default:
                var calculate_series_extremes = jsChartCommonCalculateScaleMinMaxValues(i_totals);
                var series_min_value = calculate_series_extremes[0];
                var series_max_value = calculate_series_extremes[1];

                break;
        }
    }

    // both min and max are positive (above the zero line);
    if ((series_min_value >= 0) && (series_max_value >= 0)) {
        var calculate_scale_step = jsChartCommonCalculateScaleStep( series_max_value, number_of_steps);
        var return_min_value = 0;
        var return_max_value = (calculate_scale_step * number_of_steps);
    // both min and max are negative (below the zero line);
    } else if ((series_min_value < 0) && (series_max_value < 0)) {
        var calculate_scale_step = jsChartCommonCalculateScaleStep( Math.abs(series_min_value), number_of_steps);
        var return_min_value = -(calculate_scale_step * number_of_steps);
        var return_max_value = 0;
    // one min or max is positive, on min or max is positive
    } else {
        var calculate_scale_step = jsChartCommonCalculateScaleStep( (series_max_value + Math.abs(series_min_value)), number_of_steps);
        var return_max_value = (calculate_scale_step * number_of_steps) * (series_max_value / (series_max_value + Math.abs(series_min_value)));
        var return_min_value = -(calculate_scale_step * number_of_steps) * (Math.abs(series_min_value) / (Math.abs(series_min_value) + series_max_value));

        if (Math.abs(return_min_value) < Math.abs(return_max_value)) {
            return_min_value = Math.floor(return_min_value);
            // return_max_value = (calculate_scale_step * number_of_steps) + return_min_value;
            return_max_value = (calculate_scale_step * number_of_steps) + return_min_value;
        } else {
            return_max_value = Math.ceil( return_max_value);
            return_min_value = 0 - ((calculate_scale_step * number_of_steps) - return_max_value);
        }
    }

    // return [ min_scale_value , max_scale_value , step_value, total_steps, num_of_decimals_to_use ]
    return [ return_min_value, return_max_value, calculate_scale_step, number_of_steps, 2]
}


// print debug info to the console
function jsChartCommonLogDebugToConsole(debug_type = "chart_type_options") {

    switch (debug_type) {

        // chart type options
        case "chart_type_options":
        case "chart type options":

        console.log("DEFAULT CHART TYPE OPTIONS\n==========================\n");
        console.log("chart type           | group      | data type | supported options");
        for (const [ikey, ivalue] of Object.entries(IDEFAULT_CHART_TYPE_OPTIONS)) {
            console.log(ikey.substring(0, 19).padEnd(20) + " | " + ivalue["chart_group"].substring(0, 9).padEnd(10) + " | " + ivalue["data_type"].substring(0, 9).padEnd(10) + " | " + ivalue["supported_options"].join(", ") );
        }

        break;
    }

    return true;
}
// print the chart
function jsChartPrintChart(print_chart) {

    var print_window = window.open("", "PRINT", "height=auto,width=auto");

    print_window.document.write("<html><head><title>Print Chart</title>");
    print_window.document.write("<link href=\"css/js-chart-common.css\" rel=\"stylesheet\" type=\"text/css\">");
    print_window.document.write("<link href=\"css/js-chart-" + IDEFAULT_CHART_TYPE_OPTIONS[ print_chart.getAttribute("type") ]["chart_group"] + ".css\" rel=\"stylesheet\" type=\"text/css\">");
    //print_window.document.write("</style>");
    print_window.document.write("<style type=\"text/css\">");

    var now_rule_len = document.styleSheets[ dynamic_stylesheet_index ].cssRules.length;
    for (var rr = 0; rr < now_rule_len; rr++) {
        print_window.document.write( document.styleSheets[ dynamic_stylesheet_index ].cssRules[rr].cssText );
    }
    print_window.document.write("</style>");

    /*
    print_window.document.write("<link href=\"css/js-chart-pie.css\" rel=\"stylesheet\" type=\"text/css\">");
    print_window.document.write("<link href=\"css/js-chart-bar.css\" rel=\"stylesheet\" type=\"text/css\">");
    print_window.document.write("<link href=\"css/js-chart-column.css\" rel=\"stylesheet\" type=\"text/css\">");
    print_window.document.write("<link href=\"css/js-chart-span.css\" rel=\"stylesheet\" type=\"text/css\">");
    print_window.document.write("<link href=\"css/js-chart-funnel.css\" rel=\"stylesheet\" type=\"text/css\">");
    print_window.document.write("<link href=\"css/js-chart-waterfall.css\" rel=\"stylesheet\" type=\"text/css\">");
    print_window.document.write("<link href=\"css/js-chart-histogram.css\" rel=\"stylesheet\" type=\"text/css\">");
    print_window.document.write("<link href=\"css/js-chart-scatter.css\" rel=\"stylesheet\" type=\"text/css\">");
    */

    print_window.document.write("</head><body>");

    //print_window.document.write("<h1>PRINT WINDOW HEADING</h1>");
    print_window.document.write(print_chart.outerHTML);
    print_window.document.write("</body></html>");

    print_window.document.close(); // necessary for IE >= 10

    print_window.onload=function() {
        print_window.focus();
        print_window.print();
        print_window.close();
    };

    return true;
}
// return a valid markertype value (e.g. circle, dot, square, etc).
function jsChartReturnMarkerTypeValue( input_value, chart_type ) {

    return input_value;
}
// return a valid limitdata value [ off | n-limit ]
function jsChartReturnLimitDataValue( input_value, chart_type ) {
    if (!input_value) {
        return IDEFAULT_CHART_ATTRIBUTES.limitdata.default;
    }
    var parse_input_value = parseInt(input_value);
    if ((!isNaN(parse_input_value)) && (parse_input_value > 0)) {
        return parse_input_value;
    } else {
        return IDEFAULT_CHART_ATTRIBUTES.limitdata.default;
    }
}
// return a valid startangle value [ 0deg | 90 deg | auto ]
function jsChartReturnStartAngleValue( input_value, chart_type ) {
    if (!input_value) {
        return IDEFAULT_CHART_ATTRIBUTES.startangle.default;
    }
    if ((input_value.trim() == "0deg") || (input_value.trim() == "90deg")) {
        return input_value.trim();
    } else {
        return IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].type_options.startangle;
    }
}
// return a valid show datatable value [ off  | ( on | auto ) | table | csv ]
function jsChartReturnShowDataTableValue( input_value ) {
    if (!input_value) {
        return IDEFAULT_CHART_ATTRIBUTES.showdatatable.default;
    }
    if (jsChartReturnBooleanValue(input_value)) {
        return jsChartReturnBooleanValue(input_value);
    } else if (["auto", "table", "csv"].indexOf(input_value) > -1) {
        return input_value;
    } else {
        return false;
    }
}
// return a valid show controls value [ off | print_only | ( on | auto ) ]
function jsChartReturnShowControlsValue( input_value ) {
    if (!input_value) {
        return IDEFAULT_CHART_ATTRIBUTES.showcontrols.default;
    }
    if (jsChartReturnBooleanValue(input_value)) {
        return jsChartReturnBooleanValue(input_value);
    } else if (["print_only", "auto"].indexOf(input_value) > -1) {
        return input_value;
    } else {
        return false;
    }
}
// return a valid showlabels value [ off | absolute | relative | ( on | auto ) ]
function jsChartReturnShowLabelsValue( input_value ) {
    if (!input_value) {
        return IDEFAULT_CHART_ATTRIBUTES.showlabels.default;
    }
    if (jsChartReturnBooleanValue(input_value)) {
        return jsChartReturnBooleanValue(input_value);
    } else if (["absolute", "relative", "auto"].indexOf(input_value) > -1) {
        return input_value;
    } else {
        return false;
    }
}
// return a valid showlegend value [ off | side | bottom | ( on | auto ) ]
function jsChartReturnShowLegendValue( input_value ) {
    if (!input_value) {
        return IDEFAULT_CHART_ATTRIBUTES.showborder.default;
    }
    if (jsChartReturnBooleanValue(input_value)) {
        return jsChartReturnBooleanValue(input_value);
    } else if (["side", "bottom", "auto"].indexOf(input_value) > -1) {
        return input_value;
    } else {
        return false;
    }
}
// return a valid sort order structure
// on label desc
// on title desc
// on row sum asc
// on column average desc
// on row maximum desc
// on row absolute sum
// on maximum
// on row key desc (alphabetic -- to sort as text data)
// [ on ( label | title | row | column ) | ( sum | absolute sum | average | minimum | maximum | key ) | ( ascending | descending ) ]
function jsChartReturnSortDataValue( input_value ) {
    // define the base sort command structure
    var sort_struct = {
        "sort_entity": "row", // specify the entity that will be used to sort on [ row | column | label | title ]
        "term": "average", // the search term used [ sum | absolute sum | average | minimum | maximum | key ]
        "order": "descending" // asc | ascending | desc | descending
    };

    // validation
    var split_sort_cmd = input_value.toString().trim().split(" ");
    if ((!split_sort_cmd) || (split_sort_cmd.length == 0)) {
        return false;
    }

    // proceed if the first keyword is positive (true)
    if (!jsChartReturnBooleanValue( split_sort_cmd[0] )) {
        return false;
    }

    // parse the remaining keyword keeping in mind some may not be defined in the input attribute so we have to assume defaults
    var keyword_index = 1;

    // sort entity
    if (keyword_index <= (split_sort_cmd.length-1)) {
        if (["label", "title", "column", "row"].indexOf( split_sort_cmd[keyword_index].trim() ) > -1) {
            sort_struct.sort_entity = split_sort_cmd[keyword_index].trim();
            keyword_index++;
        } else {
            sort_struct.sort_entity = "row";
        }
    } else {
        sort_struct.sort_entity = "row";
    }

    // term
    if ((sort_struct.sort_entity == "label") || (sort_struct.sort_entity == "title")) {
        if (keyword_index <= (split_sort_cmd.length-1)) {
            if (["key"].indexOf( split_sort_cmd[keyword_index].trim() ) > -1) {
                sort_struct.term = split_sort_cmd[keyword_index].trim();
                keyword_index++;
            } else {
                sort_struct.term = "key";
            }
        } else {
            sort_struct.term = "key";
        }
    } else {
        if (keyword_index <= (split_sort_cmd.length-1)) {
            if (["sum", "abs", "abs sum", "absolute sum", "avg", "average", "min", "minimum", "max", "maximum", "key"].indexOf( split_sort_cmd[keyword_index].trim() ) > -1) {
                sort_struct.term = split_sort_cmd[keyword_index].trim();
                keyword_index++;
            } else {
                sort_struct.term = "average";
            }
        } else {
            sort_struct.term = "average";
        }
    }

    // order
    if ((sort_struct.sort_entity == "label") || (sort_struct.sort_entity == "title")) {
        if (keyword_index <= (split_sort_cmd.length-1)) {
            if (["asc", "ascending", "desc", "descending"].indexOf( split_sort_cmd[keyword_index].trim() ) > -1) {
                sort_struct.order = split_sort_cmd[keyword_index].trim();
                keyword_index++;
            } else {
                sort_struct.order = "ascending";
            }
        } else {
            sort_struct.order = "ascending";
        }
    } else {
        if (keyword_index <= (split_sort_cmd.length-1)) {
            if (["asc", "ascending", "desc", "descending"].indexOf( split_sort_cmd[keyword_index].trim() ) > -1) {
                sort_struct.order = split_sort_cmd[keyword_index].trim();
                keyword_index++;
            } else {
                sort_struct.order = "descending";
            }
        } else {
            sort_struct.order = "descending";
        }
    }

    return sort_struct;
}
// return a valid voolean value
function jsChartReturnBooleanValue( input_value, allow_auto_value = false ) {
    if (!input_value) {
        return false;
    } else if ( ["on", "yes", "y", "enable", "enabled", "1", "true"].indexOf( input_value.toString().toLowerCase() ) > -1) {
        return true;
    } else if ((allow_auto_value) && ("auto" == input_value)) {
        return "auto";
    } else {
        return false;
    }
}
// accept an multi dimensional array and return an array containing all elements that are common across the input arrays
// credit with much thank you: https://stackoverflow.com/questions/11076067/finding-matches-between-multiple-javascript-arrays
function jsChartCommonReturnCommonArrayElements(this_arrays) {

    //this_arrays.sort(function(a, b) {
    //    return a.length - b.length;
    //});

    // create a copy
    var this_sets = [];
    for (var tt = 0; tt < this_arrays.length; tt++) {
        this_sets[tt] = [];
        for (var gg = 0; gg < this_arrays[tt].length; gg++) {
            this_sets[tt].push( this_arrays[tt][gg] );
        }
    }

    return this_sets.shift().reduce(function(res, v) {
        if (res.indexOf(v) === -1 && this_sets.every(function(a) {
        return a.indexOf(v) !== -1;
        })) res.push(v);
        return res;
    }, []);
}
// sort the input data values based on the data labels
function jsChartCommonSortInputDataValues_Label(this_chart, i_chart) {

    // create a copy of labels
    var p_labels = [];
    for (var v = 0; v < i_chart.i_labels.length; v++) {
        p_labels.push( i_chart.i_labels[v] );
    }

    // sort the copy
    // p_labels.sort( (a, b) => (a < b ? -1 : 1) );
    if ((i_chart.i_options.sortdata.order == "asc") || (i_chart.i_options.sortdata.order == "ascending")) {
        p_labels.sort(  (a, b) => (a > b ? 0 : -1) );
    } else {
        p_labels.sort(  (a, b) => (a > b ? -1 : 0) );
    }


    // where to store the new sorted data
    var new_data = [];
    for (var s = 0; s < i_chart.i_data.length; s++) {
        new_data[s] = [];
    }

    for (var v = 0; v < i_chart.i_labels.length; v++) {

        var old_index = i_chart.i_labels.indexOf( p_labels[v] );

        for (var s = 0; s < i_chart.i_data.length; s++) {
            new_data[s].push( i_chart.i_data[s][ old_index ] );
        }

    }

    i_chart.i_labels = p_labels;
    i_chart.i_data = new_data;

    // to allow the sort the be persisted after the chart in reinitialised, write the values back to the DOM
    this_chart.getElementsByClassName("js-labels")[0].remove();
    for (var s = (this_chart.getElementsByClassName("js-values").length - 1); s >= 0; s--) {
        this_chart.getElementsByClassName("js-values")[s].remove();
    }
    for (var s = 0; s < new_data.length; s++) {
        var new_value = document.createElement("div");
        var new_value_class = document.createAttribute("class");
        new_value_class.value = "js-values";
        new_value.setAttributeNode( new_value_class );
        var new_value_title = document.createAttribute("title");
        new_value_title.value = i_chart.i_titles[s];
        new_value.setAttributeNode( new_value_title );
        new_value.innerText = new_data[s].join(", ");
        this_chart.appendChild( new_value );
    }

    var new_labels = document.createElement("div");
    var new_labels_class = document.createAttribute("class");
    new_labels_class.value = "js-labels";
    new_labels.setAttributeNode( new_labels_class );
    new_labels.innerText = p_labels.join(", ");
    this_chart.appendChild( new_labels );

    return true;
}
// sort the input data values based on the data titles
function jsChartCommonSortInputDataValues_Title(this_chart, i_chart) {

    // create a copy of labels
    var p_titles = [];
    for (var v = 0; v < i_chart.i_titles.length; v++) {
        p_titles.push( i_chart.i_titles[v] );
    }

    // sort the copy
    if ((i_chart.i_options.sortdata.order == "asc") || (i_chart.i_options.sortdata.order == "ascending")) {
        p_titles.sort(  (a, b) => (a > b ? 0 : -1) );
    } else {
        p_titles.sort(  (a, b) => (a > b ? -1 : 0) );
    }

    // build a new array for the new ordered data
    var new_data = [];
    for (var s = 0; s < i_chart.i_titles.length; s++) {
        new_data[s] = [];
    }

    for (var s = 0; s < p_titles.length; s++) {
        var old_index = i_chart.i_titles.indexOf( p_titles[s] );
        for (var v = 0; v < i_chart.i_data[old_index].length; v++) {
            new_data[s].push( i_chart.i_data[old_index][v] );
        }
    }

    i_chart.i_data = new_data;
    i_chart.i_titles = p_titles;

    // to allow the sort the be persisted after the chart in reinitialised, write the values back to the DOM
    for (var s = (this_chart.getElementsByClassName("js-values").length - 1); s >= 0; s--) {
        this_chart.getElementsByClassName("js-values")[s].remove();
    }
    for (var s = 0; s < p_titles.length; s++) {

        var new_value = document.createElement("div");
        var new_value_class = document.createAttribute("class");
        new_value_class.value = "js-values";
        new_value.setAttributeNode( new_value_class );
        var new_value_title = document.createAttribute("title");
        new_value_title.value = p_titles[s];
        new_value.setAttributeNode( new_value_title );
        new_value.innerText = new_data[s].join(", ");
        this_chart.appendChild( new_value );
    }

    return true;
}


// save the new sorted values
function jsChartCommonSortInputDataValues_Column_New(value_sum, i_chart) {

    var new_labels = [];
    var new_data = [];
    for (var s = 0; s < i_chart.i_titles.length; s++) {
        new_data[s] = [];
    }

    for (var v = 0; v < value_sum.length; v++) {
        for (var s = 0; s < i_chart.i_titles.length; s++) {
            new_data[s].push( i_chart.i_data[s][ value_sum[v].index ] );
        }
        new_labels.push( i_chart.i_labels[ value_sum[v].index ] );
    }

    return [ new_data, new_labels ];
}
// save the new sorted values
function jsChartCommonSortInputDataValues_Row_New(value_sum, i_chart) {

    // save the new sorted values
    var new_data = [];
    var new_titles = [];
    for (var s = 0; s < value_sum.length; s++) {
        new_data.push( i_chart.i_data[ value_sum[s].index ] );
        new_titles.push( i_chart.i_titles[ value_sum[s].index ] );
    }

    return [ new_data, new_titles ];
}
// sort the values in the passed in array
function jsChartCommonSortInputDataValues_Sort(value_sum, sort_order) {

    var return_values = [];

    // sort the sum data
    if ((sort_order == "asc") || (sort_order == "ascending")) {
        return_values = value_sum.sort( (a, b) => (a.value > b.value) ? 0 : -1 );
    } else {
        return_values = value_sum.sort( (a, b) => (a.value > b.value) ? -1 : 0 );
    }

    return return_values;
}
// determine the minimum value from each row
function jsChartCommonSortInputDataValues_Column_Max(this_chart, i_chart) {

    var value_max = [];
    for (var v = 0; v < i_chart.i_labels.length; v++) {
        var temp_max = [];
        for (var s = 0; s < i_chart.i_titles.length; s++) {
            if (!isNaN(parseFloat(i_chart.i_data[s][v]))) {
                temp_max.push( i_chart.i_data[s][v] );
            }
        }
        value_max.push( {"index": v, "value": Math.max(...temp_max)} );
    }
    return value_max;
}
// determine the maximum value from each row
function jsChartCommonSortInputDataValues_Row_Max(this_chart, i_chart) {

    var value_max = [];
    for (var s = 0; s < i_chart.i_titles.length; s++) {
        value_max.push( {"index": s, "value": Math.max(...i_chart.i_data[s])} );
    }

    return value_max;
}
// determine the minimum value from each row
function jsChartCommonSortInputDataValues_Column_Min(this_chart, i_chart) {

    var value_min = [];
    for (var v = 0; v < i_chart.i_labels.length; v++) {
        var temp_min = [];
        for (var s = 0; s < i_chart.i_titles.length;s ++) {
            temp_min.push( i_chart.i_data[s][v] );
        }
        value_min.push( {"index": v, "value": Math.min(...temp_min)} );
    }
    return value_min;
}
// determine the minimum value from each row
function jsChartCommonSortInputDataValues_Row_Min(this_chart, i_chart) {

    var value_min = [];
    for (var s = 0; s < i_chart.i_titles.length; s++) {
        value_min.push( {"index": s, "value": Math.min(...i_chart.i_data[s])} );
    }

    return value_min;
}
// calculate the average across all columns
function jsChartCommonSortInputDataValues_Column_Avg(this_chart, i_chart) {

    var value_avg = [];
    for (var v = 0; v < i_chart.i_labels.length; v++) {
        var row_sum = 0;
        for (var s = 0; s < i_chart.i_titles.length; s++) {
            row_sum += i_chart.i_data[s][v];
        }
        value_avg.push( {"index": v, "value": parseFloat(row_sum / i_chart.i_titles.length)} );
    }

    return value_avg;
}
// calculate the average across all rows
function jsChartCommonSortInputDataValues_Row_Avg(this_chart, i_chart) {

    var value_avg = [];
    for (var s = 0; s < i_chart.i_titles.length; s++) {
        var row_sum = 0;
        for (var v = 0; v < i_chart.i_data[s].length; v++) {
            row_sum += i_chart.i_data[s][v];
        }
        value_avg.push( {"index": s, "value": parseFloat(row_sum / i_chart.i_data[s].length)} );
    }

    return value_avg;
}
// calculate a numeric score for every value based on its key's position in js-keys
function jsChartCommonSortInputDataValues_Column_Key(this_chart, i_chart) {

    var value_key = [];
    for (var v = 0; v < i_chart.i_labels.length; v++) {
        var column_sum = 0;
        for (var s = 0; s < i_chart.i_titles.length; s++) {
            var key_index = i_chart.i_keys.indexOf( i_chart.i_data[s][v] );
            if (key_index >= 0) {
                column_sum += (key_index + 1);
            }
        }
        value_key.push( {"index": v, "value": parseFloat(column_sum)} );
    }

    return value_key;
}
// calculate a numeric score for every value based on its key's position in js-keys
function jsChartCommonSortInputDataValues_Row_Key(this_chart, i_chart) {

    var value_key = [];
    for (var s = 0; s < i_chart.i_titles.length; s++) {
        var row_sum = 0;
        for (var v = 0; v < i_chart.i_data[s].length; v++) {
            var key_index = i_chart.i_keys.indexOf( i_chart.i_data[s][v] );
            if (key_index >= 0) {
                row_sum += (key_index + 1);
            }
        }
        value_key.push( {"index": s, "value": parseFloat(row_sum)} );
    }

    return value_key;
}
// sum all values as absolute values in the columns
function jsChartCommonSortInputDataValues_Column_AbsSum(this_chart, i_chart) {

    var value_sum = [];
    for (var v = 0; v < i_chart.i_labels.length; v++) {
        var column_sum = 0;
        for (var s = 0; s < i_chart.i_titles.length; s++) {
            column_sum += Math.abs(i_chart.i_data[s][v]);
        }
        value_sum.push( {"index": v, "value": parseFloat(column_sum)} );
    }

    return value_sum;
}
// sum the absolute values in the rows
function jsChartCommonSortInputDataValues_Row_AbsSum(this_chart, i_chart) {

    var value_sum = [];
    for (var s = 0; s < i_chart.i_titles.length; s++) {
        var row_sum = 0;
        for (var v = 0; v < i_chart.i_data[s].length; v++) {
            row_sum += Math.abs( i_chart.i_data[s][v] );
        }
        value_sum.push( {"index": s, "value": parseFloat(row_sum)} );
    }

    return value_sum;
}
// sum all values in the columns
function jsChartCommonSortInputDataValues_Column_Sum(this_chart, i_chart) {

    var value_sum = [];
    for (var v = 0; v < i_chart.i_labels.length; v++) {
        var column_sum = 0;
        for (var s = 0; s < i_chart.i_titles.length; s++) {
            column_sum += i_chart.i_data[s][v];
        }
        value_sum.push( {"index": v, "value": parseFloat(column_sum)} );
    }

    return value_sum;
}
// sum all values in the rows
function jsChartCommonSortInputDataValues_Row_Sum(this_chart, i_chart) {

    var value_sum = [];
    for (var s = 0; s < i_chart.i_titles.length; s++) {
        var row_sum = 0;
        for (var v = 0; v < i_chart.i_data[s].length; v++) {
            row_sum += i_chart.i_data[s][v];
        }
        value_sum.push( {"index": s, "value": parseFloat(row_sum)} );
    }

    return value_sum;
}
// sort the input data values based on the data columns
function jsChartCommonSortInputDataValues_Row(this_chart, i_chart) {

    // switch between the different search terms
    switch (i_chart.i_options.sortdata.term) {

        // 3.1. sum value of all row or column data values.
        case "sum":

            // sum values in the diffrent rows
            var value_sum = jsChartCommonSortInputDataValues_Row_Sum(this_chart, i_chart);

            // sort the new values
            var sort_values = jsChartCommonSortInputDataValues_Sort(value_sum, i_chart.i_options.sortdata.order);

            // save the new sorted values
            var save_values = jsChartCommonSortInputDataValues_Row_New(value_sum, i_chart);
            var new_data = save_values[0];
            var new_titles = save_values[1];

            i_chart.i_titles = new_titles;
            i_chart.i_data = new_data;

            // remove the current js-values elements
            for (var s = (this_chart.getElementsByClassName("js-values").length - 1); s >= 0; s--) {
                this_chart.getElementsByClassName("js-values")[s].remove();
            }
            for (var s = 0; s < new_data.length; s++) {

                var new_value = document.createElement("div");
                var new_value_class = document.createAttribute("class");
                new_value_class.value = "js-values";
                new_value.setAttributeNode( new_value_class );
                var new_value_title = document.createAttribute("title");
                new_value_title.value = new_titles[s];
                new_value.setAttributeNode( new_value_title );
                new_value.innerText = new_data[s].join(",");
                this_chart.appendChild( new_value );

            }

            break;

        // 3.2. sum value of all row or column absolute data values.
        case "abs":
        case "absolute":

            // sum the absolute values in the diffrent rows
            var value_sum = jsChartCommonSortInputDataValues_Row_AbsSum(this_chart, i_chart);

            // sort the new values
            var sort_values = jsChartCommonSortInputDataValues_Sort(value_sum, i_chart.i_options.sortdata.order);

            // save the new sorted values
            var save_values = jsChartCommonSortInputDataValues_Row_New(value_sum, i_chart);
            var new_data = save_values[0];
            var new_titles = save_values[1];

            i_chart.i_titles = new_titles;
            i_chart.i_data = new_data;

            // remove the current js-values elements
            for (var s = (this_chart.getElementsByClassName("js-values").length - 1); s >= 0; s--) {
                this_chart.getElementsByClassName("js-values")[s].remove();
            }
            for (var s = 0; s < new_data.length; s++) {

                var new_value = document.createElement("div");
                var new_value_class = document.createAttribute("class");
                new_value_class.value = "js-values";
                new_value.setAttributeNode( new_value_class );
                var new_value_title = document.createAttribute("title");
                new_value_title.value = new_titles[s];
                new_value.setAttributeNode( new_value_title );
                new_value.innerText = new_data[s].join(",");
                this_chart.appendChild( new_value );

            }

            break;

        // 3.3. average value across all row or column data values (default)
        case "avg":
        case "average":

            // calculate the avg of all values in all rows
            var value_avg = jsChartCommonSortInputDataValues_Row_Avg(this_chart, i_chart);

            // sort the new values
            var sort_values = jsChartCommonSortInputDataValues_Sort(value_avg, i_chart.i_options.sortdata.order);

            // save the new sorted values
            var save_values = jsChartCommonSortInputDataValues_Row_New(value_avg, i_chart);
            var new_data = save_values[0];
            var new_titles = save_values[1];

            i_chart.i_titles = new_titles;
            i_chart.i_data = new_data;

            // remove the current js-values elements
            for (var s = (this_chart.getElementsByClassName("js-values").length - 1); s >= 0; s--) {
                this_chart.getElementsByClassName("js-values")[s].remove();
            }
            for (var s = 0; s < new_data.length; s++) {

                var new_value = document.createElement("div");
                var new_value_class = document.createAttribute("class");
                new_value_class.value = "js-values";
                new_value.setAttributeNode( new_value_class );
                var new_value_title = document.createAttribute("title");
                new_value_title.value = new_titles[s];
                new_value.setAttributeNode( new_value_title );
                new_value.innerText = new_data[s].join(",");
                this_chart.appendChild( new_value );

            }

            break;

        // 3.4. minimum value of all row or column data values.
        case "min":
        case "minimum":

            // determine the minimum value from each row
            var value_min = jsChartCommonSortInputDataValues_Row_Min(this_chart, i_chart);

            // sort the new values
            var sort_values = jsChartCommonSortInputDataValues_Sort(value_min, i_chart.i_options.sortdata.order);

            // save the new sorted values
            var save_values = jsChartCommonSortInputDataValues_Row_New(value_min, i_chart);
            var new_data = save_values[0];
            var new_titles = save_values[1];

            i_chart.i_titles = new_titles;
            i_chart.i_data = new_data;

            // remove the current js-values elements
            for (var s = (this_chart.getElementsByClassName("js-values").length - 1); s >= 0; s--) {
                this_chart.getElementsByClassName("js-values")[s].remove();
            }
            for (var s = 0; s < new_data.length; s++) {

                var new_value = document.createElement("div");
                var new_value_class = document.createAttribute("class");
                new_value_class.value = "js-values";
                new_value.setAttributeNode( new_value_class );
                var new_value_title = document.createAttribute("title");
                new_value_title.value = new_titles[s];
                new_value.setAttributeNode( new_value_title );
                new_value.innerText = new_data[s].join(",");
                this_chart.appendChild( new_value );

            }

            break;

        // 3.5. maximum value of all row or column data values.
        case "max":
        case "maximum":

            // determine the maximum value for each row
            var value_max = jsChartCommonSortInputDataValues_Row_Max(this_chart, i_chart);

            // sort the new values
            var sort_values = jsChartCommonSortInputDataValues_Sort(value_max, i_chart.i_options.sortdata.order);

            // save the new sorted values
            var save_values = jsChartCommonSortInputDataValues_Row_New(value_max, i_chart);
            var new_data = save_values[0];
            var new_titles = save_values[1];

            i_chart.i_titles = new_titles;
            i_chart.i_data = new_data;

            // remove the current js-values elements
            for (var s = (this_chart.getElementsByClassName("js-values").length - 1); s >= 0; s--) {
                this_chart.getElementsByClassName("js-values")[s].remove();
            }
            for (var s = 0; s < new_data.length; s++) {

                var new_value = document.createElement("div");
                var new_value_class = document.createAttribute("class");
                new_value_class.value = "js-values";
                new_value.setAttributeNode( new_value_class );
                var new_value_title = document.createAttribute("title");
                new_value_title.value = new_titles[s];
                new_value.setAttributeNode( new_value_title );
                new_value.innerText = new_data[s].join(",");
                this_chart.appendChild( new_value );

            }

            break;

        // 4.0  string data can be sorted alphabetically.
        case "key":

            // calculate a value for each cell based on the cell's value in the js-key list.
            // sum the values of all cells in a row.
            var value_key = jsChartCommonSortInputDataValues_Row_Key(this_chart, i_chart);

            // sort the new values
            var sort_values = jsChartCommonSortInputDataValues_Sort(value_key, i_chart.i_options.sortdata.order);

            // save the new sorted values
            var save_values = jsChartCommonSortInputDataValues_Row_New(value_key, i_chart);
            var new_data = save_values[0];
            var new_titles = save_values[1];

            i_chart.i_titles = new_titles;
            i_chart.i_data = new_data;

            // remove the current js-values elements
            for (var s = (this_chart.getElementsByClassName("js-values").length - 1); s >= 0; s--) {
                this_chart.getElementsByClassName("js-values")[s].remove();
            }
            for (var s = 0; s < new_data.length; s++) {

                var new_value = document.createElement("div");
                var new_value_class = document.createAttribute("class");
                new_value_class.value = "js-values";
                new_value.setAttributeNode( new_value_class );
                var new_value_title = document.createAttribute("title");
                new_value_title.value = new_titles[s];
                new_value.setAttributeNode( new_value_title );
                new_value.innerText = new_data[s].join(",");
                this_chart.appendChild( new_value );

            }

            break;
        
        default:
            return false;
            break;
    }

    return true;
}
// sort the input data values based on the data rows
function jsChartCommonSortInputDataValues_Column(this_chart, i_chart) {

    // switch between the different search terms
    switch (i_chart.i_options.sortdata.term) {

        // 3.1. sum value of all row or column data values.
        case "sum":

            // sum values in the diffrent columns
            var value_sum = jsChartCommonSortInputDataValues_Column_Sum(this_chart, i_chart);

            // sort the new values
            var sort_values = jsChartCommonSortInputDataValues_Sort(value_sum, i_chart.i_options.sortdata.order);

            // save the new sorted values
            var save_values = jsChartCommonSortInputDataValues_Column_New(value_sum, i_chart);
            var new_data = save_values[0];
            var new_labels = save_values[1];

            i_chart.i_labels = new_labels;
            i_chart.i_data = new_data;

            // remove the current js-values elements
            for (var s = (this_chart.getElementsByClassName("js-values").length - 1); s >= 0; s--) {
                this_chart.getElementsByClassName("js-values")[s].remove();
            }
            this_chart.getElementsByClassName("js-labels")[0].remove();
            for (var s = 0; s < new_data.length; s++) {

                var new_value = document.createElement("div");
                var new_value_class = document.createAttribute("class");
                new_value_class.value = "js-values";
                new_value.setAttributeNode( new_value_class );
                var new_value_title = document.createAttribute("title");
                new_value_title.value = i_chart.i_titles[s];
                new_value.setAttributeNode( new_value_title );
                new_value.innerText = new_data[s].join(",");
                this_chart.appendChild( new_value );

            }

            var save_labels = document.createElement("div");
            var save_labels_class = document.createAttribute("class");
            save_labels_class.value = "js-labels";
            save_labels.setAttributeNode( save_labels_class );
            save_labels.innerText = new_labels.join(", ");
            this_chart.appendChild( save_labels );

            break;

        // 3.2. sum value of all row or column absolute data values.
        case "abs":
        case "absolute":

            // sum values in the diffrent columns
            var value_sum = jsChartCommonSortInputDataValues_Column_AbsSum(this_chart, i_chart);

            // sort the new values
            var sort_values = jsChartCommonSortInputDataValues_Sort(value_sum, i_chart.i_options.sortdata.order);

            // save the new sorted values
            var save_values = jsChartCommonSortInputDataValues_Column_New(value_sum, i_chart);
            var new_data = save_values[0];
            var new_labels = save_values[1];

            i_chart.i_labels = new_labels;
            i_chart.i_data = new_data;

            // remove the current js-values elements
            for (var s = (this_chart.getElementsByClassName("js-values").length - 1); s >= 0; s--) {
                this_chart.getElementsByClassName("js-values")[s].remove();
            }
            this_chart.getElementsByClassName("js-labels")[0].remove();
            for (var s = 0; s < new_data.length; s++) {

                var new_value = document.createElement("div");
                var new_value_class = document.createAttribute("class");
                new_value_class.value = "js-values";
                new_value.setAttributeNode( new_value_class );
                var new_value_title = document.createAttribute("title");
                new_value_title.value = i_chart.i_titles[s];
                new_value.setAttributeNode( new_value_title );
                new_value.innerText = new_data[s].join(",");
                this_chart.appendChild( new_value );

            }

            var save_labels = document.createElement("div");
            var save_labels_class = document.createAttribute("class");
            save_labels_class.value = "js-labels";
            save_labels.setAttributeNode( save_labels_class );
            save_labels.innerText = new_labels.join(", ");
            this_chart.appendChild( save_labels );

            break;

        //    3.3. average value across all row or column data values (default)
        case "avg":
        case "average":

            // sum values in the diffrent columns
            var value_avg = jsChartCommonSortInputDataValues_Column_Avg(this_chart, i_chart);

            // sort the new values
            var sort_values = jsChartCommonSortInputDataValues_Sort(value_avg, i_chart.i_options.sortdata.order);

            // save the new sorted values
            var save_values = jsChartCommonSortInputDataValues_Column_New(value_avg, i_chart);
            var new_data = save_values[0];
            var new_labels = save_values[1];

            i_chart.i_labels = new_labels;
            i_chart.i_data = new_data;

            // remove the current js-values elements
            for (var s = (this_chart.getElementsByClassName("js-values").length - 1); s >= 0; s--) {
                this_chart.getElementsByClassName("js-values")[s].remove();
            }
            this_chart.getElementsByClassName("js-labels")[0].remove();
            for (var s = 0; s < new_data.length; s++) {

                var new_value = document.createElement("div");
                var new_value_class = document.createAttribute("class");
                new_value_class.value = "js-values";
                new_value.setAttributeNode( new_value_class );
                var new_value_title = document.createAttribute("title");
                new_value_title.value = i_chart.i_titles[s];
                new_value.setAttributeNode( new_value_title );
                new_value.innerText = new_data[s].join(",");
                this_chart.appendChild( new_value );

            }

            var save_labels = document.createElement("div");
            var save_labels_class = document.createAttribute("class");
            save_labels_class.value = "js-labels";
            save_labels.setAttributeNode( save_labels_class );
            save_labels.innerText = new_labels.join(", ");
            this_chart.appendChild( save_labels );

            break;

        //    3.4. minimum value of all row or column data values.
        case "min":
        case "minimum":

            // sum values in the diffrent columns
            var value_min = jsChartCommonSortInputDataValues_Column_Min(this_chart, i_chart);

            // sort the new values
            var sort_values = jsChartCommonSortInputDataValues_Sort(value_min, i_chart.i_options.sortdata.order);

            // save the new sorted values
            var save_values = jsChartCommonSortInputDataValues_Column_New(value_min, i_chart);
            var new_data = save_values[0];
            var new_labels = save_values[1];

            i_chart.i_labels = new_labels;
            i_chart.i_data = new_data;

            // remove the current js-values elements
            for (var s = (this_chart.getElementsByClassName("js-values").length - 1); s >= 0; s--) {
                this_chart.getElementsByClassName("js-values")[s].remove();
            }
            this_chart.getElementsByClassName("js-labels")[0].remove();
            for (var s = 0; s < new_data.length; s++) {

                var new_value = document.createElement("div");
                var new_value_class = document.createAttribute("class");
                new_value_class.value = "js-values";
                new_value.setAttributeNode( new_value_class );
                var new_value_title = document.createAttribute("title");
                new_value_title.value = i_chart.i_titles[s];
                new_value.setAttributeNode( new_value_title );
                new_value.innerText = new_data[s].join(",");
                this_chart.appendChild( new_value );

            }

            var save_labels = document.createElement("div");
            var save_labels_class = document.createAttribute("class");
            save_labels_class.value = "js-labels";
            save_labels.setAttributeNode( save_labels_class );
            save_labels.innerText = new_labels.join(", ");
            this_chart.appendChild( save_labels );

            break;
        //    3.5. maximum value of all row or column data values.
        case "max":
        case "maximum":

        // sum values in the diffrent columns
            var value_max = jsChartCommonSortInputDataValues_Column_Max(this_chart, i_chart);

            // sort the new values
            var sort_values = jsChartCommonSortInputDataValues_Sort(value_max, i_chart.i_options.sortdata.order);

            // save the new sorted values
            var save_values = jsChartCommonSortInputDataValues_Column_New(value_max, i_chart);
            var new_data = save_values[0];
            var new_labels = save_values[1];

            i_chart.i_labels = new_labels;
            i_chart.i_data = new_data;

            // remove the current js-values elements
            for (var s = (this_chart.getElementsByClassName("js-values").length - 1); s >= 0; s--) {
                this_chart.getElementsByClassName("js-values")[s].remove();
            }
            this_chart.getElementsByClassName("js-labels")[0].remove();
            for (var s = 0; s < new_data.length; s++) {

                var new_value = document.createElement("div");
                var new_value_class = document.createAttribute("class");
                new_value_class.value = "js-values";
                new_value.setAttributeNode( new_value_class );
                var new_value_title = document.createAttribute("title");
                new_value_title.value = i_chart.i_titles[s];
                new_value.setAttributeNode( new_value_title );
                new_value.innerText = new_data[s].join(",");
                this_chart.appendChild( new_value );

            }

            var save_labels = document.createElement("div");
            var save_labels_class = document.createAttribute("class");
            save_labels_class.value = "js-labels";
            save_labels.setAttributeNode( save_labels_class );
            save_labels.innerText = new_labels.join(", ");
            this_chart.appendChild( save_labels );

            break;
        // 4. qualitative data can be sorted based on the key order.
        case "key":

        // calculate a value for each cell based on the cell's value in the js-key list.
            // sum the values of all cells in a row.
            var value_key = jsChartCommonSortInputDataValues_Column_Key(this_chart, i_chart);

            // sort the new values
            var sort_values = jsChartCommonSortInputDataValues_Sort(value_key, i_chart.i_options.sortdata.order);

            // save the new sorted values
            var save_values = jsChartCommonSortInputDataValues_Column_New(value_key, i_chart);
            var new_data = save_values[0];
            var new_labels = save_values[1];

            i_chart.i_labels = new_labels;
            i_chart.i_data = new_data;

            // remove the current js-values elements
            for (var s = (this_chart.getElementsByClassName("js-values").length - 1); s >= 0; s--) {
                this_chart.getElementsByClassName("js-values")[s].remove();
            }
            for (var s = 0; s < new_data.length; s++) {

                var new_value = document.createElement("div");
                var new_value_class = document.createAttribute("class");
                new_value_class.value = "js-values";
                new_value.setAttributeNode( new_value_class );
                var new_value_title = document.createAttribute("title");
                new_value_title.value = new_titles[s];
                new_value.setAttributeNode( new_value_title );
                new_value.innerText = new_data[s].join(",");
                this_chart.appendChild( new_value );

            }

            break;
    }

    return true;
}
// sort functionality:
// 1. you can sort:
//    1.1. ascending, or 
//    1.2. descending (default)
// 2. you can sort based on:
//    2.1. the data labels
//    2.2. the series titles
//    2.3. the row (default) or column values
// 3. numeric data values can be sorted based on the whole row or column:
//    3.1. sum value of all row or column data values.
//    3.2. sum value of all row or column absolute data values.
//    3.3. average value across all row or column data values (default)
//    3.4. minimum value of all row or column data values.
//    3.5. maximum value of all row or column data values.
// 4. qualitative data can be sorted based on the key order.
function jsChartCommonSortInputDataValues(this_chart, i_chart) {

    // sort_entity [ label | title | column | row ]
    // term [ sum | absolute sum | average | minimum | maximum | key ]
    // order": [ ascending | descending ]

    if (typeof i_chart.i_options.sortdata === "object") {

        switch (i_chart.i_options.sortdata.sort_entity) {

            // label
            case "label":
                var sort_data = jsChartCommonSortInputDataValues_Label(this_chart, i_chart);
                return sort_data;
                break;
            // title
            case "title":
                var sort_data = jsChartCommonSortInputDataValues_Title(this_chart, i_chart);
                return sort_data;
                break;
            // column
            case "column":
                var sort_data = jsChartCommonSortInputDataValues_Column(this_chart, i_chart);
                return sort_data;
                break;
            // default -- row
            default:
                var sort_data = jsChartCommonSortInputDataValues_Row(this_chart, i_chart);
                return sort_data;
                break;
        }
    }

    // on label desc
    // on title desc
    // on row sum asc
    // on column average desc
    // on row maximum desc
    // on row absolute sum
    // on maximum

    return false;
}

/*
// sort functionality - sort the i_data array.
// 1. you can perform a row- or column-based sort, i.e. an x or y sort.
// 2. a value is calculated (see point 3 below) for each row/column, and the sort is executed based on the calcuation result for each row/column.
// 3. a sort can be executed based on the rows or columns DATA values:
//    3.1. if the data is numeric:
//         3.1.1. average of the values in the row/column.
//         3.1.2. total of all values in the row/column.
//         3.1.3. total of all absolute values in the row/column.
//         3.1.4. minimum value in the row/column.
//         3.1.5. maximum value in the row/column.
//    3.2. if the data is qualitative:
//         3.2.1. alphabetically
// 4. a sort can be executed based on the row titles or column labels, again ascending or descending.
// 5. sorting can be execute in an ascending or descending order.
// 5. only onw of the above sort operations is allowed at a time, but many of the above sort operations can be performed one fter the other
function jsChartCommonSortDataSeries(i_data) {

}
*/
// swap the data points around the axis
function jsChartSwapInputPoints(i_chart) {

    for (var s = 0; s < i_chart.i_data.length; s++) {
        var t_points = i_chart.i_data[s].x_points;
        i_chart.i_data[s].x_points = i_chart.i_data[s].y_points;
        i_chart.i_data[s].y_points = t_points;
    }

    var t_scalemin = i_chart.i_options.xscalemin;
    var t_scalemax = i_chart.i_options.xscalemax;

    i_chart.i_options.xscalemin = i_chart.i_options.yscalemin;
    i_chart.i_options.xscalemax = i_chart.i_options.yscalemax;

    i_chart.i_options.yscalemin = t_scalemin;
    i_chart.i_options.yscalemax = t_scalemax;

    return true;
}
// swap the data values around the axis
function jsChartSwapInputValues(i_chart) {

    var s_chart_values = [];
    for (var v1 = 0; v1 < i_chart.i_data[0].length; v1++) {
        s_chart_values[v1] = [];
    }
    for (var s1 = 0; s1 < i_chart.i_data.length; s1++) {
        for (var v1 = 0; v1 < i_chart.i_data[0].length; v1++) {
            s_chart_values[v1][s1] = i_chart.i_data[s1][v1];
        }
    }

    i_chart.i_data = s_chart_values;
    var t_chart_keys_titles = i_chart.i_labels;
    i_chart.i_labels = i_chart.i_titles;
    i_chart.i_titles = t_chart_keys_titles;

    return true;
}
// calculate the ohlc (open-high-low-close(-volume)) totals
function jsChartCalculateInputOHLCTotals( this_chart, i_chart ) {

    var biggest_value = i_chart.i_data[0].high[0];
    var smallest_value = i_chart.i_data[0].high[0];

    var total_open = 0, total_abs_open = 0, total_high = 0, total_abs_high = 0, total_low = 0, total_abs_low = 0, total_close = 0, total_abs_close = 0, total_volume = 0, total_abs_volume = 0;

    if (i_chart.i_data[0].open.length > 0) {
        for (var v = 0; v < i_chart.i_data[0].open.length; v++) {
            if (i_chart.i_data[0].open[v] > biggest_value) {
                biggest_value = i_chart.i_data[0].open[v];
            }
            if (i_chart.i_data[0].open[v] < smallest_value) {
                smallest_value = i_chart.i_data[0].open[v];
            }
            total_open += i_chart.i_data[0].open[v];
            total_abs_open += Math.abs( i_chart.i_data[0].open[v] );
        }
    }
    if (i_chart.i_data[0].high.length > 0) {
        for (var v = 0; v < i_chart.i_data[0].high.length; v++) {
            if (i_chart.i_data[0].high[v] > biggest_value) {
                biggest_value = i_chart.i_data[0].high[v];
            }
            if (i_chart.i_data[0].high[v] < smallest_value) {
                smallest_value = i_chart.i_data[0].high[v];
            }
            total_high += i_chart.i_data[0].high[v];
            total_abs_high += Math.abs( i_chart.i_data[0].high[v] );
        }
    }
    if (i_chart.i_data[0].low.length > 0) {
        for (var v = 0; v < i_chart.i_data[0].low.length; v++) {
            if (i_chart.i_data[0].low[v] > biggest_value) {
                biggest_value = i_chart.i_data[0].low[v];
            }
            if (i_chart.i_data[0].low[v] < smallest_value) {
                smallest_value = i_chart.i_data[0].low[v];
            }
            total_low += i_chart.i_data[0].low[v];
            total_abs_low += Math.abs( i_chart.i_data[0].low[v] );
        }
    }
    if (i_chart.i_data[0].close.length > 0) {
        for (var v = 0; v < i_chart.i_data[0].close.length; v++) {
            if (i_chart.i_data[0].close[v] > biggest_value) {
                biggest_value = i_chart.i_data[0].close[v];
            }
            if (i_chart.i_data[0].close[v] < smallest_value) {
                smallest_value = i_chart.i_data[0].close[v];
            }
            total_close += i_chart.i_data[0].close[v];
            total_abs_close += Math.abs( i_chart.i_data[0].close[v] );
        }
    }
    /*
    if (i_chart.i_data[0].volume.length > 0) {
        for (var v = 0; v < i_chart.i_data[0].volume.length; v++) {
            if (i_chart.i_data[0].volume[v] > biggest_value) {
                biggest_value = i_chart.i_data[0].volume[v];
            }
            if (i_chart.i_data[0].volume[v] < smallest_value) {
                smallest_value = i_chart.i_data[0].volume[v];
            }
            total_volume += i_chart.i_data[0].volume[v];
            total_abs_volume += Math.abs( i_chart.i_data[0].volume[v] );
        }
    }
    */

    i_chart.i_totals[0] = {
        "total_open_value": total_open,
        "total_abs_open_value": total_abs_open,
        "total_high_value": total_high,
        "total_abs_high_value": total_abs_high,
        "total_low_value": total_low,
        "total_abs_low_value": total_abs_low,
        "total_close_value": total_close,
        "total_abs_close_value": total_abs_close,
        "total_volume_value": total_volume,
        "total_abs_volume_value": total_abs_volume,
        "min_value": smallest_value,
        "max_value": biggest_value
    }

    return true;
}
// calculate the categorical value totals
function jsChartCalculateInputRangeTotals( i_chart ) {

    for (var s = 0; s < i_chart.i_data.length; s++) {
        i_chart.i_totals[s] = {
            "min_value": parseFloat(i_chart.i_data[s]["low_values"][0]),
            "max_value": parseFloat(i_chart.i_data[s]["high_values"][0])
        }
        for (var v = 1; v < i_chart.i_data[s]["low_values"].length; v++) {
            if (parseFloat(i_chart.i_data[s]["low_values"][v]) < i_chart.i_totals[s].min_value) {
                i_chart.i_totals[s].min_value = parseFloat(i_chart.i_data[s]["low_values"][v]);
            }
            if (parseFloat(i_chart.i_data[s]["high_values"][v]) > i_chart.i_totals[s].max_value) {
                i_chart.i_totals[s].max_value = parseFloat(i_chart.i_data[s]["high_values"][v]);
            }
        }
    }

    return true;
}
// calculate the categorical value totals
function jsChartCalculateInputValueTotals( i_chart ) {
    var return_totals = [];
    for (var s = 0; s < i_chart.i_data.length; s++) {
        return_totals[s] = {
            "total_value": parseFloat(i_chart.i_data[s][0]),
            "total_abs_value": Math.abs(parseFloat(i_chart.i_data[s][0])),
            "min_value": parseFloat(i_chart.i_data[s][0]),
            "max_value": parseFloat(i_chart.i_data[s][0])
        }
        for (var v = 1; v < i_chart.i_data[s].length; v++) {
            return_totals[s].total_value += parseFloat(i_chart.i_data[s][v]);
            return_totals[s].total_abs_value += Math.abs(parseFloat(i_chart.i_data[s][v]));
            if (parseFloat(i_chart.i_data[s][v]) < return_totals[s].min_value) {
                return_totals[s].min_value = parseFloat(i_chart.i_data[s][v]);
            }
            if (parseFloat(i_chart.i_data[s][v]) > return_totals[s].max_value) {
                return_totals[s].max_value = parseFloat(i_chart.i_data[s][v]);
            }
        }
    }

    if (return_totals.length == 0) {
        return false;
    } else {
        i_chart.i_totals = return_totals;
        return true;
    }
}
// build a new design object
function jsChartCommonBuildDesignObject( design_template ) {

    var new_design_object = {};

    for (const [ikey, ivalue] of Object.entries(design_template)) {
        new_design_object[ ikey ] = ivalue;
    }

    return new_design_object;
}
// categorical -- discrete
function jsChartCommonParseCategoricalPalette( this_design_element, is_discrete_palette ) {

    // split the element inner text
    var split_palette = this_design_element.split(";");
    var return_palette = [];
    var return_categories = [];
    for (var tt = 0; tt < split_palette.length; tt++) {
        if (split_palette[tt].trim().length > 0) {
            var split_color = split_palette[tt].trim().split("!");
            return_palette.push( split_color[1] );
            var split_category = split_color[0];
            if (!isNaN(parseFloat(split_category))) {
                return_categories.push( parseFloat(split_category) );
            } else {
                return_categories.push( split_category );
            }
        }
    }

    return [ return_palette, return_categories];
}
function jsChartCommonParseDivergingPalette( this_design_element, is_discrete_palette ) {

    var split_palette = this_design_element.split(";");
    var return_palette = [];
    var return_positions = [];
    var position_type = "absolute";

    for (tt = 0; tt < split_palette.length; tt++) {
        if (split_palette[tt].trim().length > 0) {

            var split_position = split_palette[tt].trim().split("!");
            if (tt == 0) {
                if (split_position.length == 2) {
                    if (is_discrete_palette) {
                        return_palette.push( split_position[1] );
                    }
                    return_palette.push( split_position[1] );
                    return_positions.push( split_position[0] );
                } else {
                    return_palette.push( split_position[0] );
                }
            } else {
                return_palette.push( split_position[1] );
                return_positions.push( split_position[0] );
            }
    
            if ((split_position[0].trim().indexOf("%") > 0) && (!isNaN(parseFloat(split_position[0].trim().replaceAll("%", ""))))) {
                position_type = "relative";
            }
        }
    }

    return [ return_palette, return_positions, position_type]

    /*
    // split the element inner text
    var split_palette = this_design_element.split(";");
    var return_palette = [];
    var return_positions = [];
    var position_type = "absolute";
    for (var tt = 0; tt < split_palette.length; tt++) {
        if (split_palette[tt].trim().length > 0) {
            var split_color = split_palette[tt].trim().split("!");
            // color only
            if (split_color.length == 1) {
                if (tt == 0) {
                    return_palette.push( split_color[0].trim() );
                    //return_positions.push( 0 );
                } else {
                    return_palette.push( split_color[0].trim() );
                    //return_positions.push( 0 );
                }
            // color and position
            } else if (split_color.length == 2) {
                return_palette.push( split_color[1].trim() );
                var split_position = split_color[0].trim();
                if (!isNaN(parseFloat(split_position))) {
                    return_positions.push( parseFloat(split_position) );
                } else {
                    return_positions.push( split_position );
                }
                if ((split_color[0].trim().indexOf("%") > 0) && (!isNaN(parseFloat(split_color[0].trim().replaceAll("%", ""))))) {
                    position_type = "relative";
                }
            }
        }
    }

    return [ return_palette, return_positions, position_type]
    */
}
// sequential -- discrete / continuous
//    - When the variable assigned to be colored is numeric or has inherently ordered values, then it can be depicted with a sequential palette.
function jsChartCommonParseSequentialPalette( this_design_element, is_discrete_palette ) {

    var split_palette = this_design_element.split(";");
    var return_palette = [];
    var return_positions = [];
    var position_type = "absolute";

    for (tt = 0; tt < split_palette.length; tt++) {
        if (split_palette[tt].trim().length > 0) {

            var split_position = split_palette[tt].trim().split("!");
            if (tt == 0) {
                if (split_position.length == 2) {
                    if (is_discrete_palette) {
                        return_palette.push( split_position[1] );
                    }
                    return_palette.push( split_position[1] );
                    return_positions.push( split_position[0] );
                } else {
                    return_palette.push( split_position[0] );
                }
            } else {
                return_palette.push( split_position[1] );
                return_positions.push( split_position[0] );
            }
    
            if ((split_position[0].trim().indexOf("%") > 0) && (!isNaN(parseFloat(split_position[0].trim().replaceAll("%", ""))))) {
                position_type = "relative";
            }
        }
    }

    return [ return_palette, return_positions, position_type]

    /*
    // split the element inner text
    var split_palette = this_design_element.split(";");
    var return_palette = [];
    var return_positions = [];
    var position_type = "absolute";
    for (var tt = 0; tt < split_palette.length; tt++) {
        if (split_palette[tt].trim().length > 0) {
            var split_color = split_palette[tt].trim().split("!");
            // color only
            if (split_color.length == 1) {
                return_palette.push( split_color[0].trim() );

                //if (tt == 0) {
                //    return_palette.push( split_color[0].trim() );
                //    //return_positions.push( 0 );
                //} else {
                //    return_palette.push( split_color[0].trim() );
                //    //return_positions.push( 0 );
                //}
\
            // color and position
            } else if (split_color.length == 2) {
                return_palette.push( split_color[1].trim() );
                return_positions.push( split_color[0].trim() );

                if ((split_color[0].trim().indexOf("%") > 0) && (!isNaN(parseFloat(split_color[0].trim().replaceAll("%", ""))))) {
                    position_type = "relative";
                }
            }
        }
    }

    return [ return_palette, return_positions, position_type]
    */
}
// parse color palette -- qualitative
//    - A qualitative palette is used when the variable is categorical in nature
//    - In a qualitative palette, the colors assigned to each group need to be distinct.
function jsChartCommonParseQualitativePalette( this_design_element ) {

    // split the element inner text
    var split_palette = this_design_element.split(";");
    var return_palette = [];
    for (var tt = 0; tt < split_palette.length; tt++) {
        if (split_palette[tt].trim().length > 0) {
            return_palette.push( split_palette[tt].trim() );
        }
    }

    return return_palette;
}
// extract and parse the chart design elements and palette
function jsChartParseInputDesign( this_chart , i_chart ) {

    // extract the template name chart attribute
    var this_template_name = this_chart.getAttribute("template");
    if ((!this_template_name) || (this_template_name.length == 0)) {
        var this_template_name = "default";
    }
    // validate the chart design template attribute
    var this_template = null;
    for (var tt = 0; tt < IDEFAULT_DESIGN_TEMPLATES.length; tt++) {
        if (this_template_name.trim() == IDEFAULT_DESIGN_TEMPLATES[tt].name) {
            var this_template = IDEFAULT_DESIGN_TEMPLATES[tt];
        }
    }

    // set a default design template
    if (this_template == null) {
        // i_chart.i_design = IDEFAULT_DESIGN_TEMPLATES[0];
        i_chart.i_design = jsChartCommonBuildDesignObject( IDEFAULT_DESIGN_TEMPLATES[0] );
        i_chart.i_options.template = IDEFAULT_DESIGN_TEMPLATES[0].name;
    } else {
        i_chart.i_design = jsChartCommonBuildDesignObject( this_template );
    }

    // override the design template elements
    for (const [ikey, ivalue] of Object.entries(i_chart.i_design)) {
        if ( ["name", "description"].indexOf( ikey ) == -1) {
            var this_design_element_name = "js-" + ikey.replaceAll("_", "-");
            var this_design_element = this_chart.getElementsByClassName( this_design_element_name );
            if (this_design_element.length > 0) {

                // parse the js-color-palette element
                if (ikey == "color_palette") {

                    // split and parse the palette type
                    var this_palette_type = this_design_element[0].getAttribute("type");
                    if (this_palette_type != null) {
                        this_palette_type = this_palette_type.trim();
                    }

                    // these are assigned just for clarity in the code
                    var is_discrete_palette = true;
                    var is_continuous_palette = true;

                    // qualitative
                    //    - A qualitative palette is used when the variable is categorical in nature
                    //    - In a qualitative palette, the colors assigned to each group need to be distinct.
                    if ((this_palette_type == "qualitative") || (this_palette_type == null)) {
                        var parse_qualitative_palette = jsChartCommonParseQualitativePalette( this_design_element[0].innerText.trim() );
                        if (parse_qualitative_palette.length > 0) {
                            i_chart.i_design["color_palette"] = parse_qualitative_palette;
                            i_chart.i_design.palette_type = "qualitative";
                            i_chart.i_design.palette_position_type = "qualitative";
                        }

                    // categorical
                    } else if ((this_palette_type == "categorical") || (this_palette_type == null)) {
                        var parse_categorical_palette = jsChartCommonParseCategoricalPalette( this_design_element[0].innerText.trim() );
                        if (parse_categorical_palette.length > 0) {
                            i_chart.i_design["color_palette"] = parse_categorical_palette[0];
                            i_chart.i_design["color_category"] = parse_categorical_palette[1];
                            i_chart.i_design.palette_type = "categorical";
                            i_chart.i_design.palette_position_type = "categorical";
                        }

                    // sequential -- discrete
                    //    - When the variable assigned to be colored is numeric or has inherently ordered values, then it can be depicted with a sequential palette.
                    } else if (["sequential", "sequential discrete", "discrete sequential"].indexOf(this_palette_type) > -1) {
                        var parse_sequential_palette = jsChartCommonParseSequentialPalette( this_design_element[0].innerText.trim(), is_discrete_palette );
                        if (parse_sequential_palette.length > 0) {
                            i_chart.i_design["color_palette"] = parse_sequential_palette[0];
                            i_chart.i_design["color_position"] = parse_sequential_palette[1];
                            i_chart.i_design.palette_type = "sequential discrete";
                            i_chart.i_design.palette_position_type = parse_sequential_palette[2];
                        }

                    // sequential -- continuous
                    //    - When the variable assigned to be colored is numeric or has inherently ordered values, then it can be depicted with a sequential palette.
                    } else if (["sequential continuous", "continuous sequential"].indexOf(this_palette_type) > -1) {
                        var parse_sequential_palette = jsChartCommonParseSequentialPalette( this_design_element[0].innerText.trim(), false );
                        if (parse_sequential_palette.length > 0) {
                            i_chart.i_design["color_palette"] = parse_sequential_palette[0];
                            i_chart.i_design["color_position"] = parse_sequential_palette[1];
                            i_chart.i_design.palette_type = "sequential continuous";
                            i_chart.i_design.palette_position_type = parse_sequential_palette[2];
                        }

                        // diverging -- discrete
                    //    - When the variable assigned to be colored is numeric or has inherently ordered values, then it can be depicted with a sequential palette.
                    } else if (["diverging", "diverging discrete", "discrete diverging"].indexOf(this_palette_type) > -1) {
                        var parse_diverging_palette = jsChartCommonParseDivergingPalette( this_design_element[0].innerText.trim(), is_discrete_palette );
                        if (parse_diverging_palette.length > 0) {
                            i_chart.i_design["color_palette"] = parse_diverging_palette[0];
                            i_chart.i_design["color_position"] = parse_diverging_palette[1];
                            i_chart.i_design.palette_type = "diverging discrete";
                            i_chart.i_design.palette_position_type = parse_diverging_palette[2];
                        }

                        // diverging -- continuous
                    //    - When the variable assigned to be colored is numeric or has inherently ordered values, then it can be depicted with a sequential palette.
                    } else if (["diverging continuous", "continuous diverging"].indexOf(this_palette_type) > -1) {
                        var parse_diverging_palette = jsChartCommonParseDivergingPalette( this_design_element[0].innerText.trim(), false );
                        if (parse_diverging_palette.length > 0) {
                            i_chart.i_design["color_palette"] = parse_diverging_palette[0];
                            i_chart.i_design["color_position"] = parse_diverging_palette[1];
                            i_chart.i_design.palette_type = "diverging continuous";
                            i_chart.i_design.palette_position_type = parse_diverging_palette[2];
                        }

                    }

                    /*
                        keywords:
                            1. qualitative
                            2. sequential
                                2.1 discrete
                                2.2 continuous
                            3. diverging
                                3.1 discrete
                                3.2 continuous
                    */

                                /*
                    var split_palette = this_design_element[0].innerText.trim().split(";");
                    i_chart.i_design[ ikey ] = [];
                    for (var tt = 0; tt < split_palette.length; tt++) {
                        if (split_palette[tt].trim().length > 0) {
                            i_chart.i_design[ ikey ].push( split_palette[tt].trim() );
                        }
                    }
                    */
                // parse the js-marker-emoji element
                } else if (ikey == "marker_emoji") {
                    var split_palette = this_design_element[0].innerText.trim().split(";");
                    i_chart.i_design[ ikey ] = [];
                    for (var tt = 0; tt < split_palette.length; tt++) {
                        if (split_palette[tt].trim().length > 0) {
                            i_chart.i_design[ ikey ].push( split_palette[tt].trim() );
                        }
                    }
                } else {

                    i_chart.i_design[ ikey ] = this_design_element[0].innerText.trim();

                }
            }
        }
    }

    return true;
}
// extract and parse the chart data labels (keys)
function jsChartParseInputRangeLabels( this_chart , i_chart ) {

    var return_labels = [];

    var max_loop = i_chart.i_data[0]["low_values"].length;
    for (var tt = 1; tt < i_chart.i_data.length; tt++) {
        if (i_chart.i_data[tt].length > max_loop) {
            max_loop = i_chart.i_data[tt].length;
        }
    }

    var this_labels = this_chart.getElementsByClassName("js-labels");
    if ((!this_labels) || (this_labels.length == 0)) {
        for (var tt = 0; tt < max_loop; tt++) {
            return_labels.push( "Label " + (tt+1) );
        }
        i_chart.i_labels = return_labels;
    } else {
        var split_labels = this_labels[0].innerText.split(",");
        for (var tt = 0; tt < max_loop; tt++) {
            if ((typeof split_labels[tt] === "undefined") || (split_labels[tt].trim().length == 0)) {
                return_labels.push( "Label " + (tt+1) );
            } else {
                return_labels.push( split_labels[tt].trim() );
            }
        }
        i_chart.i_labels = return_labels;
    }
    return true;
}
// extract and parse the chart data labels (keys)
function jsChartParseInputLabels( this_chart , i_chart ) {

    var return_labels = [];

    var max_loop = i_chart.i_data[0].length;
    for (var tt = 1; tt < i_chart.i_data.length; tt++) {
        if (i_chart.i_data[tt].length > max_loop) {
            max_loop = i_chart.i_data[tt].length;
        }
    }

    var this_labels = this_chart.getElementsByClassName("js-labels");
    if ((!this_labels) || (this_labels.length == 0)) {
        for (var tt = 0; tt < max_loop; tt++) {
            return_labels.push( "Label " + (tt+1) );
        }
        i_chart.i_labels = return_labels;
    } else {
        var split_labels = this_labels[0].innerText.split(",");
        for (var tt = 0; tt < max_loop; tt++) {
            if ((typeof split_labels[tt] === "undefined") || (split_labels[tt].trim().length == 0)) {
                return_labels.push( "Label " + (tt+1) );
            } else {
                return_labels.push( split_labels[tt].trim() );
            }
        }
        i_chart.i_labels = return_labels;
    }
    return true;
}
// extract and parse the inner text of either open, high, low, close or volume
function jsChartParseInputOHLCInnerText( inner_text_value, limit_data ) {

    var return_value = [];
    var parse_limit_data = limit_data;

    if ((inner_text_value) && (inner_text_value.length > 0)) {
        var split_value = inner_text_value[0].innerText.trim().split(",");
        for (var t = 0; t < split_value.length; t++) {
            var parse_value = parseFloat(split_value[t].trim());
            if (!isNaN(parse_value)) {
                return_value.push( parse_value );
                parse_limit_data--;
                if (parse_limit_data == 0) {
                    break;
                }
            }
        }
    }

    return return_value;
}
/*
// parse and calcuate the grand total of all values in the hierarchy
function jsChartParseInputHierarchicalChildren(json_data, sub_total = 0, sub_abs_total = 0, min_value, max_value) {

    if (json_data.children.length > 0) {
        for (var t = 0; t < json_data.children.length; t++) {
            var get_children = jsChartParseInputHierarchicalChildren(json_data.children[t], sub_total, sub_abs_total, min_value, max_value);
            sub_total = get_children[0];
            sub_abs_total = get_children[1];
            min_value = get_children[2];
            max_value = get_children[3];
        }
    } else {
        for (var t = 0; t < json_data.data.length; t++) {
            var parse_value = parseFloat(json_data.data[t].value);
            if (!isNaN(parse_value)) {
                sub_total += parse_value;
                sub_abs_total += Math.abs( parse_value );
                if (min_value == null) {
                    min_value = parse_value;
                } else if (parse_value < min_value) {
                    min_value = parse_value;
                }
                if (max_value == null) {
                    max_value = parse_value;
                } else if (parse_value > max_value) {
                    max_value = parse_value;
                }
            }
        }
    }

    return [ sub_total, sub_abs_total, min_value, max_value ];
}
*/
/*
// parse and calcuate the grand total of all values in the hierarchy
function jsChartParseInputHierarchicalNodes(json_data, sub_total = 0, sub_abs_total = 0, min_value, max_value, value_total = 0) {

    if (json_data.nodes.length > 0) {

        var this_group_totals = 0;
        for (var t = 0; t < json_data.nodes.length; t++) {
            var get_nodes = jsChartParseInputHierarchicalNodes(json_data.nodes[t], sub_total, sub_abs_total, min_value, max_value, value_total);

            sub_total = get_nodes[1];
            sub_abs_total = get_nodes[2];
            min_value = get_nodes[3];
            max_value = get_nodes[4];
            value_total = get_nodes[5];

            this_group_totals += value_total;
        }
        json_data.group_total = this_group_totals;
        value_total = this_group_totals;

    } else {
        value_total = 0;
        for (var t = 0; t < json_data.data.length; t++) {
            var parse_value = parseFloat(json_data.data[t].value);
            if (!isNaN(parse_value)) {
                sub_total += parse_value;
                sub_abs_total += Math.abs( parse_value );
                if (min_value == null) {
                    min_value = parse_value;
                } else if (parse_value < min_value) {
                    min_value = parse_value;
                }
                if (max_value == null) {
                    max_value = parse_value;
                } else if (parse_value > max_value) {
                    max_value = parse_value;
                }
                value_total += parse_value;
            }
        }
        json_data.group_total = value_total;
    }

    return [ json_data, sub_total, sub_abs_total, min_value, max_value, value_total ];
}
// extract and parse hierarchical data (used by treemap)
function jsChartParseInputHierarchical(this_chart, i_chart) {

    var this_get_data = document.getElementById("js-data");
    if (!this_get_data) {
        return false;
    }
    try {
        var json_data = JSON.parse( this_get_data.innerHTML );
    }
    catch(err) {
        var log_err = jsChartLogErrorMessage(err, 4);
        return false;
    }

    //var calc_totals = jsChartParseInputHierarchicalChildren(json_data);
    var parse_data = jsChartParseInputHierarchicalNodes(json_data);

    i_chart.i_data = json_data;
    i_chart.i_data_type = "hierarchical";
    i_chart.i_options.ytitle = "";
    i_chart.i_options.xtitle = "";
    i_chart.i_totals[0] = {
        "total_value": parse_data[1],
        "total_abs_value": parse_data[2],
        "min_value": parse_data[3],
        "max_value": parse_data[4]
    }

    return true;
}
*/
// extract and parse hierarchical data (used by treemap)
function jsChartParseInputHierarchicalGroup(i_node, level_index, min_value = 0, max_value = 0) {

    level_index++;

    // this is a group container -- contains children nodes
    if (i_node.nodes) {
        var group_total = 0;
        var group_abs_total = 0;
        min_value = null;
        var total_nodes = 0;
        for (var t = 0; t < i_node.nodes.length; t++) {
            var get_group_total = jsChartParseInputHierarchicalGroup(i_node.nodes[t], level_index, min_value, max_value);
            group_total += get_group_total;
            group_abs_total += Math.abs(get_group_total);
            if ((isNaN(parseFloat(min_value))) || (get_group_total < min_value)) {
                min_value = get_group_total;
            }
            if (get_group_total > max_value) {
                max_value = get_group_total;
            }
            total_nodes++;
        }

        //i_node.group_total = group_total;
        //i_node.group_abs_total = group_abs_total;
        i_node.value = group_total;
        i_node.abs_value = group_abs_total;
        i_node.max_value = max_value;
        i_node.min_value = min_value;
        i_node.level_index = level_index;
        i_node.count = total_nodes;
        i_node.avg_value = roundNumber(group_abs_total / total_nodes, 2);

        return group_total;
    // this is a value container -- no children
    } else {
        var parse_value = Math.abs(parseFloat(i_node.value));
        return parse_value;
    }
}
// extract and parse hierarchical data (used by treemap)
function jsChartParseInputHierarchical(this_chart, i_chart) {

    var this_get_data = document.getElementById( i_chart.i_options.jsondata );
    if (!this_get_data) {
        return false;
    }
    try {
        var json_data = JSON.parse( this_get_data.innerHTML );
    }
    catch(err) {
        var log_err = jsChartLogErrorMessage(err, 4);
        return false;
    }

    var parse_json = jsChartParseInputHierarchicalGroup(json_data, -1);

    // set the chart data and data type
    i_chart.i_data = json_data;
    i_chart.i_data_type = "hierarchical";

    // set the i totals
    i_chart.i_totals[0] = {
        "total_value": json_data.value,
        "total_abs_value": json_data.value,
        "min_value": json_data.min_value,
        "max_value": json_data.max_value
    }

    // override any axis titles (used by other mosaic charts)
    i_chart.i_options.ytitle = "";
    i_chart.i_options.xtitle = "";

    return true;
}
// extract and parse data serieses (used by box plot)
function jsChartParseInputSeries(this_chart, i_chart) {

    var this_series = this_chart.getElementsByClassName("js-series");

    if ((!this_series) || (this_series.length == 0)) {
        return false;
    }

    var return_series = [];
    var return_titles = [];
    var return_labels = [];
    var return_totals = [];
    for (var tt = 0; tt < this_series.length; tt++) {

        var this_values = this_series[tt].getElementsByClassName("js-values");

        if ((this_values) && (this_values.length > 0)) {
            return_series[tt] = {};
            return_totals[tt] = {
                "total_value": 0,
                "total_abs_value": 0,
                "min_value": null,
                "max_value": null
            };
            for (var ss = 0; ss < this_values.length; ss++) {
                //return_series[tt][this_values[ss].title] = this_values[ss].innerText.trim().split(",");
                var split_values = this_values[ss].innerText.trim().split(",");
                var return_values = [];

                for (var ff = 0; ff < split_values.length; ff++) {
                    var parse_value = parseFloat(split_values[ff]);
                    if (!isNaN(parse_value)) {
                        return_values.push( parse_value );
                    }
                }

                //return_series[tt][this_values[ss].title] = split_values;
                return_series[tt][this_values[ss].title] = return_values;
                return_totals[tt]["total_value"] = return_series[tt][this_values[ss].title].reduce(
                    (accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue),
                    0,
                );
                return_totals[tt]["total_abs_value"] = return_series[tt][this_values[ss].title].reduce(
                    (accumulator, currentValue) => parseFloat(Math.abs(accumulator)) + parseFloat(currentValue),
                    0,
                );

                return_min = Math.min(...return_series[tt][this_values[ss].title]);
                return_max = Math.max(...return_series[tt][this_values[ss].title]);
                if (return_min < return_totals[tt]["min_value"]) {
                    return_totals[tt]["min_value"] = return_min;
                }
                if (return_max > return_totals[tt]["max_value"]) {
                    return_totals[tt]["max_value"] = return_max;
                }

                if (return_titles.indexOf( this_values[ss].title ) == -1) {
                    return_titles.push( this_values[ss].title );
                }

                if (return_labels.indexOf( this_series[tt].title ) == -1) {
                    return_labels.push( this_series[tt].title );
                }
            }
        }
    }

    i_chart.i_data = return_series;
    i_chart.i_titles = return_titles;
    i_chart.i_labels = return_labels;
    i_chart.i_totals = return_totals;

    return true;
}
// extract and parse data sets (e.g. used in venn diagrams)
function jsChartParseInputSets(this_chart, i_chart) {

    var this_keys = this_chart.getElementsByClassName("js-keys");
    if ((!this_keys) || (this_keys.length == 0)) {
        return false;
    }

    var return_keys = [], return_titles = [];
    for (var s = 0; s < this_keys.length; s++) {
        var split_keys = this_keys[s].innerText.trim().split(",");
        var this_title = this_keys[s].getAttribute("title");
        if ((!this_title) || (this_title.length == 0)) {
            return_titles.push( "Series " + (s+1) );
        } else {
            return_titles.push( this_title );
        }
        return_keys[s] = [];
        for (var v = 0; v < split_keys.length; v++) {
            if (split_keys[v].trim().length > 0) {
                return_keys[s].push( split_keys[v].trim());
            }
        }
    }

    i_chart.i_sets = return_keys;
    i_chart.i_titles = return_titles;

    return true;
}
// extract and parse the ohlc data points (open-high-low-close(-volume))
function jsChartParseInputOHLC( this_chart, i_chart ) {

    var this_open = this_chart.getElementsByClassName("js-open");
    var this_high = this_chart.getElementsByClassName("js-high"); // required
    var this_low = this_chart.getElementsByClassName("js-low"); // required
    var this_close = this_chart.getElementsByClassName("js-close"); // required
    var this_volume = this_chart.getElementsByClassName("js-volume");

    if ((!this_high) || (this_high.length == 0)) {
        return false;
    } else if ((!this_low) || (this_low.length == 0)) {
        return false;
    } else if ((!this_close) || (this_close.length == 0)) {
        return false;
    }

    var parse_limit_data = jsChartReturnLimitDataValue(i_chart.i_options.limitdata, "ohlc");
    if (!parse_limit_data) {
        parse_limit_data = Number.MAX_SAFE_INTEGER;
    }
    var open_parse_limit_data = parse_limit_data;
    var high_parse_limit_data = parse_limit_data;
    var low_parse_limit_data = parse_limit_data;
    var close_parse_limit_data = parse_limit_data;
    var volume_parse_limit_data = parse_limit_data;

    var return_open = jsChartParseInputOHLCInnerText( this_open, open_parse_limit_data );
    var return_high = jsChartParseInputOHLCInnerText( this_high, high_parse_limit_data );
    var return_low = jsChartParseInputOHLCInnerText( this_low, low_parse_limit_data );
    var return_close = jsChartParseInputOHLCInnerText( this_close, close_parse_limit_data );
    var return_volume = jsChartParseInputOHLCInnerText( this_volume, volume_parse_limit_data );

    var this_labels = this_chart.getElementsByClassName("js-labels");
    var return_labels = [];
    if ((this_labels) && (this_labels.length > 0)) {
        var split_labels = this_labels[0].innerText.trim().split(",");
        for (var gg = 0; gg < split_labels.length; gg++) {
            if (split_labels[gg].trim().length > 0) {
                return_labels.push( split_labels[gg].trim() );
                parse_limit_data--;
                if (parse_limit_data == 0) {
                    break;
                }
            }
        }
    }
    if (return_labels.length == 0) {
        for (var v = 0; v < return_open.length; v++) {
            return_labels.push("p" + (v+1) );
        }
    }

    i_chart.i_data[0] = {
        "open": return_open,
        "high": return_high,
        "low": return_low,
        "close": return_close,
        "volume": return_volume
    }
    i_chart.i_labels = return_labels;

    return true;
}
// extract and parse the chart data points (points values)
function jsChartParseInputPoints( this_chart , i_chart) {

    // points - multi-series
    var this_x_points = this_chart.getElementsByClassName("js-x-points");
    var this_y_points = this_chart.getElementsByClassName("js-y-points");
    var this_s_points = this_chart.getElementsByClassName("js-s-points");
    var return_x_points = [], return_y_points = [], return_s_points = [];
    var return_titles = [], return_labels = [];
    var x_totals = [], y_totals = [], s_totals = [];

    // required - x points
    if ((!this_x_points) || (this_x_points.length == 0)) {
        return false;
    }
    // required - y points
    if ((!this_y_points) || (this_y_points.length == 0)) {
        return false;
    }

    // validation
    if (this_x_points.length != this_y_points.length) {
        return false;
    } else if ((this_s_points.length > 0) && (this_s_points.length != this_x_points.length)) {
        return false;
    }

    for (var s = 0; s < this_x_points.length; s++) {
        return_x_points[s] = [], return_y_points[s] = [], return_s_points[s] = [];
        x_totals[s] = {
            "total_value": 0,
            "total_abs_value": 0,
            "min_value": 0,
            "max_value": 0
        };
        y_totals[s] = {
            "total_value": 0,
            "total_abs_value": 0,
            "min_value": 0,
            "max_value": 0
        };
        s_totals[s] = {
            "total_value": 0,
            "total_abs_value": 0,
            "min_value": 0,
            "max_value": 0
        };

        var x_title = this_x_points[s].getAttribute("title");
        if (x_title != null) {
            return_titles.push( x_title );
        } else {
            return_titles.push( "Series " + (s+1) );
        }

        var split_x_points = this_x_points[s].innerText.trim().split(",");
        var split_y_points = this_y_points[s].innerText.trim().split(",");
        if (typeof this_s_points[s] !== "undefined") {
            var split_s_points = this_s_points[s].innerText.trim().split(",");
        } else {
            var split_s_points = [];
        }

        // parse required x points
        for (var v = 0; v < split_x_points.length; v++) {
            var parsed_x_point = parseFloat(split_x_points[v].trim());
            if (!isNaN(parsed_x_point)) {
                return_x_points[s].push( parsed_x_point );
                x_totals[s].total_value += parsed_x_point;
                x_totals[s].total_abs_value += Math.abs(parsed_x_point);
            }
        }
        if (return_x_points[s].length > 0) {
            x_totals[s].min_value = Math.min(...return_x_points[s]);
            x_totals[s].max_value = Math.max(...return_x_points[s]);
        } else {
            x_totals[s].min_value = null;
            x_totals[s].max_value = null;
        }

        // parse required y points
        for (var v = 0; v < split_y_points.length; v++) {
            var parsed_y_point = parseFloat(split_y_points[v].trim());
            if (!isNaN(parsed_y_point)) {
                return_y_points[s].push( parsed_y_point );
                y_totals[s].total_value += parsed_y_point;
                y_totals[s].total_abs_value += Math.abs(parsed_y_point);
            }
        }
        if (return_y_points[s].length > 0) {
            y_totals[s].min_value = Math.min(...return_y_points[s]);
            y_totals[s].max_value = Math.max(...return_y_points[s]);
        } else {
            y_totals[s].min_value = null;
            y_totals[s].max_value = null;
        }

        // parse required s points
        for (var v = 0; v < split_s_points.length; v++) {
            var parsed_s_point = parseFloat(split_s_points[v].trim());
            if (!isNaN(parsed_s_point)) {
                return_s_points[s].push( parsed_s_point );
                s_totals[s].total_value += parsed_s_point;
                s_totals[s].total_abs_value += Math.abs(parsed_s_point);
            }
        }
        if (return_s_points[s].length > 0) {
            s_totals[s].min_value = Math.min(...return_s_points[s]);
            s_totals[s].max_value = Math.max(...return_s_points[s]);
        } else {
            s_totals[s].min_value = null;
            s_totals[s].max_value = null;
        }

        i_chart.i_data[s] = {
            "x_points": return_x_points[s],
            "y_points": return_y_points[s],
            "s_points": return_s_points[s]
        }
        i_chart.i_totals[s] = {
            "x_points": x_totals[s],
            "y_points": y_totals[s],
            "s_points": s_totals[s]
        }
    }

    i_chart.i_titles = return_titles;
    i_chart.i_labels = [];

    return true;
}
// extract and parse the chart data values (categorical values)
function jsChartParseInputRange( this_chart , i_chart, allow_negative_values = true ) {

    // we are going to do a 2-for-1 here, extract and parse the:
    // 1. data
    //  1.1 min-range (low values)
    //  1.2 max-range (high values)
    // 2. titles

    var return_low_values = [];
    var return_high_values = [];
    var return_titles = [];

    // extract values text csv
    var low_values = this_chart.getElementsByClassName("js-low-values");
    if ((!low_values) || (low_values.length == 0)) {
        return false;
    }
    var high_values = this_chart.getElementsByClassName("js-high-values");
    if ((!high_values) || (high_values.length == 0)) {
        return false;
    }

    if (low_values.length != high_values.length) {
        return false;
    }

    // extrct titles and values
    if (IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].allow_multiseries) {
        var max_loop = low_values.length;
    } else {
        var max_loop = 1;
    }

    for (var s = 0; s < max_loop; s++) {
        var split_low_values = low_values[s].innerText.trim().split(",");
        var split_high_values = high_values[s].innerText.trim().split(",");
        if (low_values[s].hasAttribute("title")) {
            return_titles.push( low_values[s].getAttribute("title").trim() );
        } else {
            return_titles.push( "Series " + (s+1) );
        }

        i_chart.i_data[s] = {
            "low_values": [],
            "high_values": []
        };

        //return_low_values[s] = [];
        for (var v = 0; v < split_low_values.length; v++) {
            var num_split_low_value = parseFloat(split_low_values[v].trim());
            if (!isNaN( num_split_low_value)) {
                //return_low_values[s].push( num_split_low_value );
                i_chart.i_data[s].low_values.push( num_split_low_value );
            }
        }

        // return_high_values[s] = [];
        for (var v = 0; v < split_high_values.length; v++) {
            var num_split_high_value = parseFloat(split_high_values[v].trim());
            if (!isNaN( num_split_high_value)) {
                // return_high_values[s].push( num_split_high_value );
                i_chart.i_data[s].high_values.push( num_split_high_value );
            }
        }
    }

    i_chart.i_titles = return_titles;

    return true;
}
// extract and parse the chart bins values and categories
function jsChartParseInputFrequencyAutoValues(this_chart, i_chart, this_values, this_bin_size) {

    var split_values = this_values[0].innerText.trim().split(",");
    var return_values = [];
    var total_value_count = 0;
    for (var tt = 0; tt < split_values.length; tt++) {
        var this_split_value = parseFloat(split_values[tt]);
        if (!isNaN(this_split_value)) {
            return_values.push( this_split_value );
        }
    }

    // validate inputs
    var bin_first_edge = Math.floor(Math.min(...return_values));
    var bin_last_edge = Math.ceil(Math.max(...return_values));

    if (bin_last_edge < bin_first_edge) {
        return false;
    }

    if (this_bin_size.length == 1) {
        var parse_bin_size = parseFloat(this_bin_size[0].innerText.trim());
        if (!isNaN(parse_bin_size)) {
            bin_size = parse_bin_size;
        } else {
            bin_size = 1;
        }
        } else {
        bin_size = 1;
    }

    // save the freuency values and bins
    var bin_values = [], bin_frequencies = [], return_labels = [ bin_first_edge ];
    var loop_counter = 0;
    max_loop = ((bin_last_edge + bin_size) - bin_first_edge) / bin_size;
    for (var tt = bin_first_edge; tt < bin_last_edge; tt=(tt+bin_size)) {
        bin_frequencies[loop_counter] = [];
        bin_values[loop_counter] = 0;
        return_labels.push( (roundNumber((tt + bin_size), 2)).toString() );

        loop_counter++;
        max_loop--;
        if (max_loop == 0) {
            break;
        }
    }

    // parse js-values
    //var split_values = this_values[0].innerText.trim().split(",");
    //var return_values = [];
    //var total_value_count = 0;
    //for (var tt = 0; tt < split_values.length; tt++) {
    //    var this_split_value = parseFloat(split_values[tt]);
    for (var tt = 0; tt < return_values.length; tt++) {

        var frequency_bin_index = Math.floor((return_values[tt] / bin_size) - (bin_first_edge / bin_size));

        var draw_bin = false;

        if (bin_size >= 1) {
            if ((return_values[tt] >= bin_first_edge) && (return_values[tt] <= bin_last_edge) && (frequency_bin_index <= (bin_last_edge-1)) && (frequency_bin_index <= (bin_frequencies.length - 1))) {
                draw_bin = true;
            }
        } else {
            if ((return_values[tt] >= bin_first_edge) && (return_values[tt] <= bin_last_edge) && (frequency_bin_index <= (bin_last_edge / bin_size)) && (frequency_bin_index <= ((bin_frequencies.length - 1) / bin_size))) {
                draw_bin = true;
            }
        }

        if ((return_values[tt] >= bin_first_edge) && (return_values[tt] <= bin_last_edge) && (frequency_bin_index >= 0) && (frequency_bin_index <= (bin_frequencies.length - 1))) {
            draw_bin = true;
        } else {
            draw_bin = false;
        }

        //if ((this_split_value >= bin_first_edge) && (this_split_value <= bin_last_edge) && (frequency_bin_index <= (bin_last_edge-1)) && (frequency_bin_index <= (bin_frequencies.length - 1))) {
        //if ((this_split_value >= bin_first_edge) && (this_split_value <= bin_last_edge) && (frequency_bin_index <= (bin_last_edge / bin_size)) && (frequency_bin_index <= ((bin_frequencies.length - 1) / bin_size))) {
        if (draw_bin) {
            bin_frequencies[ frequency_bin_index ].push( return_values[tt] );
            bin_values[ frequency_bin_index ]++;
            //total_value_count++;
        }
    }

    i_chart.i_titles[0] = "Series 1";
    i_chart.i_labels = return_labels;
    i_chart.i_data.values = bin_values;
    i_chart.i_data.bins = bin_frequencies;
    i_chart.i_totals[0] = {
        "total_value": total_value_count,
        "total_abs_value": total_value_count,
        "min_value": Math.min(...bin_values),
        "max_value": Math.max(...bin_values)
    }

    return true;
}
// extract and parse the chart bins values and categories
function jsChartParseInputFrequencyCategories(this_chart, i_chart, this_values, this_bin_labels) {

    var return_labels = [], return_frequencies = [];
    var split_values = this_values[0].innerText.trim().split(",");
    var split_labels = this_bin_labels[0].innerText.trim().split(",");

    // validation
    if (split_values.length != split_labels.length) {
        return false;
    }

    for (var v = 0; v < split_labels.length; v++) {
        if (return_labels.indexOf( split_labels[v].trim() ) == -1) {
            return_labels.push( split_labels[v].trim() );
        }
        return_frequencies[ return_labels.indexOf( split_labels[v] ) ] = 0;
    }

    var total_value_count = 0;
    for (var v = 0; v < split_values.length; v++) {
        return_frequencies[ return_labels.indexOf( split_labels[v] ) ] += parseFloat(split_values[v].trim());
        total_value_count += parseFloat(split_values[v].trim());
    }

    i_chart.i_titles[0] = "Series 1";
    i_chart.i_labels = return_labels;
    i_chart.i_data.values = return_frequencies;
    i_chart.i_totals[0] = {
        "total_value": total_value_count,
        "total_abs_value": total_value_count,
        "min_value": Math.min(...return_frequencies),
        "max_value": Math.max(...return_frequencies)
    }

    return true;
}
// extract and parse the chart frequency bins
function jsChartParseInputFrequencyBins(this_chart, i_chart, this_bin_first_edge, this_bin_last_edge, this_bin_frequencies) {

    // validate inputs
    var bin_first_edge = this_bin_first_edge[0].innerText;
    if ((!bin_first_edge) || (isNaN(parseFloat(bin_first_edge)))) {
        return false;
    } else {
        bin_first_edge = parseFloat(bin_first_edge);
    }
    var bin_last_edge = this_bin_last_edge[0].innerText;
    if ((!bin_last_edge) || (isNaN(parseFloat(bin_last_edge)))) {
        return false;
    } else {
        bin_last_edge = parseFloat(bin_last_edge);
    }
    if (bin_last_edge < bin_first_edge) {
        return false;
    }

    // save the freuency values and bins
    var bin_frequencies = [];
    for (var tt = bin_first_edge; tt <= bin_last_edge; tt++) {
        bin_frequencies[tt] = [];
    }

    // parse js-values
    var split_frequencies = this_bin_frequencies[0].innerText.trim().split(",");
    var return_frequencies = [];
    var return_labels = [];
    var total_value_count = 0;

    for (var tt = 0; tt < split_frequencies.length; tt++) {
        var this_split_frequency = parseInt(split_frequencies[tt].trim());
        if (!isNaN(this_split_frequency)) {
            return_frequencies.push( this_split_frequency );
            return_labels.push( (parseInt(bin_first_edge) + tt).toString() );
            //return_labels.push( (roundNumber((tt + bin_size), 2)).toString() );
            total_value_count++;
        }
    }
    return_labels.push( (parseInt(bin_first_edge) + split_frequencies.length).toString() );

    i_chart.i_titles[0] = "Series 1";
    i_chart.i_labels = return_labels;
    i_chart.i_data.values = return_frequencies;
    i_chart.i_totals[0] = {
        "total_value": total_value_count,
        "total_abs_value": total_value_count,
        "min_value": Math.min(...return_frequencies),
        "max_value": Math.max(...return_frequencies)
    }

    return true;
}
// extract and parse the chart bin frequency values
function jsChartParseInputFrequencyValues(this_chart, i_chart, this_values, this_bin_first_edge, this_bin_last_edge, this_bin_size) {

    // validate inputs
    var bin_first_edge = this_bin_first_edge[0].innerText;
    if ((!bin_first_edge) || (isNaN(parseFloat(bin_first_edge)))) {
        return false;
    } else {
        bin_first_edge = parseFloat(bin_first_edge);
    }
    var bin_last_edge = this_bin_last_edge[0].innerText;
    if ((!bin_last_edge) || (isNaN(parseFloat(bin_last_edge)))) {
        return false;
    } else {
        bin_last_edge = parseFloat(bin_last_edge);
    }
    if (bin_last_edge < bin_first_edge) {
        return false;
    }

    var bin_size = this_bin_size[0].innerText;
    if ((!bin_size) || (isNaN(parseFloat(bin_size))) || (parseFloat(bin_size) <= 0)) {
        return false;
    } else {
        bin_size = parseFloat(bin_size);
    }

    // save the freuency values and bins
    var bin_values = [], bin_frequencies = [], return_labels = [ bin_first_edge ];
    var loop_counter = 0;
    max_loop = ((bin_last_edge + bin_size) - bin_first_edge) / bin_size;
    for (var tt = bin_first_edge; tt < bin_last_edge; tt=(tt+bin_size)) {
        bin_frequencies[loop_counter] = [];
        bin_values[loop_counter] = 0;
        return_labels.push( (roundNumber((tt + bin_size), 2)).toString() );

        loop_counter++;
        max_loop--;
        if (max_loop == 0) {
            break;
        }
    }

    // parse js-values
    var split_values = this_values[0].innerText.trim().split(",");
    var return_values = [];
    var total_value_count = 0;
    for (var tt = 0; tt < split_values.length; tt++) {
        var this_split_value = parseFloat(split_values[tt]);
        if (!isNaN(this_split_value)) {
            return_values.push( this_split_value );
        }

        var frequency_bin_index = Math.floor((this_split_value / bin_size) - (bin_first_edge / bin_size));

        var draw_bin = false;

        if (bin_size >= 1) {
            if ((this_split_value >= bin_first_edge) && (this_split_value <= bin_last_edge) && (frequency_bin_index <= (bin_last_edge-1)) && (frequency_bin_index <= (bin_frequencies.length - 1))) {
                draw_bin = true;
            }
        } else {
            if ((this_split_value >= bin_first_edge) && (this_split_value <= bin_last_edge) && (frequency_bin_index <= (bin_last_edge / bin_size)) && (frequency_bin_index <= ((bin_frequencies.length - 1) / bin_size))) {
                draw_bin = true;
            }
        }

        if ((this_split_value >= bin_first_edge) && (this_split_value <= bin_last_edge) && (frequency_bin_index >= 0) && (frequency_bin_index <= (bin_frequencies.length - 1))) {
            draw_bin = true;
        } else {
            draw_bin = false;
        }

        //if ((this_split_value >= bin_first_edge) && (this_split_value <= bin_last_edge) && (frequency_bin_index <= (bin_last_edge-1)) && (frequency_bin_index <= (bin_frequencies.length - 1))) {
        //if ((this_split_value >= bin_first_edge) && (this_split_value <= bin_last_edge) && (frequency_bin_index <= (bin_last_edge / bin_size)) && (frequency_bin_index <= ((bin_frequencies.length - 1) / bin_size))) {
        if (draw_bin) {
            bin_frequencies[ frequency_bin_index ].push( this_split_value );
            bin_values[ frequency_bin_index ]++;
            total_value_count++;
        }
    }

    i_chart.i_titles[0] = "Series 1";
    i_chart.i_labels = return_labels;
    i_chart.i_data.values = bin_values;
    i_chart.i_data.bins = bin_frequencies;
    i_chart.i_totals[0] = {
        "total_value": total_value_count,
        "total_abs_value": total_value_count,
        "min_value": Math.min(...bin_values),
        "max_value": Math.max(...bin_values)
    }

    return true;
}
// extract and parse the chart bin values (frequency values)
function jsChartParseInputFrequency( this_chart , i_chart, allow_negative_values = true ) {

    var this_values = this_chart.getElementsByClassName("js-values");

    var this_bin_first_edge = this_chart.getElementsByClassName("js-bin-first-edge");
    var this_bin_last_edge = this_chart.getElementsByClassName("js-bin-last-edge");
    var this_bin_size = this_chart.getElementsByClassName("js-bin-size");

    var this_bin_first_edge = this_chart.getElementsByClassName("js-bin-first-edge");
    var this_bin_last_edge = this_chart.getElementsByClassName("js-bin-last-edge");
    var this_bin_frequencies = this_chart.getElementsByClassName("js-bin-frequencies");

    var this_bin_labels = this_chart.getElementsByClassName("js-bin-labels");

    // boundaries
    if ((this_values.length == 1) && (this_bin_first_edge.length == 1) && (this_bin_last_edge.length == 1) && (this_bin_size.length == 1)) {
        var parse_bin_values = jsChartParseInputFrequencyValues(this_chart, i_chart, this_values, this_bin_first_edge, this_bin_last_edge, this_bin_size);
        if (!parse_bin_values) {
            return false;
        }
    // summary / bins
    } else if ((this_bin_first_edge.length == 1) && (this_bin_last_edge.length == 1) && (this_bin_frequencies.length == 1)) {
        var parse_bin_frequencies = jsChartParseInputFrequencyBins(this_chart, i_chart, this_bin_first_edge, this_bin_last_edge, this_bin_frequencies);
        if (!parse_bin_frequencies) {
            return false;
        }
    // categories
    } else if ((this_values.length == 1) && (this_bin_labels.length == 1)) {
        var parse_bin_categories = jsChartParseInputFrequencyCategories(this_chart, i_chart, this_values, this_bin_labels);
        if (!parse_bin_categories) {
            console.group("ERROR");
            return false;
        }
    // auto
    } else if (this_values.length == 1) {
        var parse_bin_categories = jsChartParseInputFrequencyAutoValues(this_chart, i_chart, this_values, this_bin_size);
        if (!parse_bin_categories) {
            return false;
        }
    } else {
        return false;
    }

    return true;
}
// extract and parse the chart data values (categorical values)
function jsChartParseInputValues( this_chart , i_chart, allow_negative_values = true ) {

    // we are going to do a 2-for-1 here, extract and parse the:
    // 1. data
    // 2. titles
    var return_values = [];
    var return_titles = [];
    var return_keys = [];
    var i_data_type = "absolute";

    // extract values text csv
    var this_values = this_chart.getElementsByClassName("js-values");
    if ((!this_values) || (this_values.length == 0)) {
        return false;
    }

    // extrct titles and values
    if (IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].allow_multiseries) {
        var max_loop = this_values.length;
    } else {
        var max_loop = 1;
    }
    for (var s = 0; s < max_loop; s++) {
        var split_values = this_values[s].innerText.trim().split(",");
        if (this_values[s].hasAttribute("title")) {
            return_titles.push( this_values[s].getAttribute("title").trim() );
        } else {
            return_titles.push( "Series " + (s+1) );
        }

        return_values[s] = [];
        for (var v = 0; v < split_values.length; v++) {
            var num_split_value = parseFloat(split_values[v].trim());
            if (!isNaN( num_split_value)) {
                return_values[s].push( num_split_value );
            } else {
                return_values[s].push( split_values[v].trim() );
            }
            if ((split_values[v].trim().indexOf("%") > 0) && (!isNaN(parseFloat(split_values[v].trim().replaceAll("%", ""))))) {
                i_data_type = "relative";
            }
        }
    }

    // extract and parse labels
    var this_labels = this_chart.getElementsByClassName("js-labels");
    var return_labels = [];
    if ((!this_labels) || (this_labels.length == 0)) {
        for (var tt = 0; tt < return_values[0].length; tt++) {
            return_labels.push( "p" + (tt+1) );
        }
    } else {
        var split_labels = this_labels[0].innerText.trim().split(",");
        for (var tt = 0; tt < split_labels.length; tt++) {
            if (split_labels[tt].trim().length > 0) {
                return_labels.push( split_labels[tt].trim() );
            }
        }
    }

    // extract and parse keys (optional input)
    var this_keys = this_chart.getElementsByClassName("js-keys");
    if (this_keys.length > 0) {
        var split_keys = this_keys[0].innerText.trim().split(",");
        for (var tt = 0; tt < split_keys.length; tt++) {
            return_keys.push( split_keys[tt].trim() );
        }
    }

    i_chart.i_data = return_values;
    i_chart.i_data_type = i_data_type;
    i_chart.i_titles = return_titles;
    i_chart.i_labels = return_labels;
    i_chart.data_type = "categorical";
    i_chart.i_keys = return_keys;

    return true;
}
// parse the chart attributes (options)
function jsChartParseInputOptions( this_chart , i_chart ) {

    // loop all chart options available to this chart type
    for (var tt = 0; tt < IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options.length; tt++) {
        // check if a value if available from the DOM
        switch( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ) {
            case "showwidget":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim() );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default );
                }
                break;
            case "showborder":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim() );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default );
                }
                break;
            case "showlegend":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnShowLegendValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim() );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnShowLegendValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default );
                }
                break;
            case "showgridlines":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim() );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default );
                }
                break;
            case "showzeroline":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim() );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default );
                }
                break;
            case "showlabels":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] )) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnShowLabelsValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim() );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnShowLabelsValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default );
                }
                break;
            case "showcontrols":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] )) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnShowControlsValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim() );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnShowControlsValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default );
                }
                break;
            case "showdatatable":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnShowDataTableValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim() );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnShowDataTableValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default );
                }
                break;
            case "showlines":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim() );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default );
                }
                break;
            case "showmedians":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim() );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default );
                }
                break;
            case "showwhiskers":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim() );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default );
                }
                break;
            case "showmarkers":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim() );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default );
                }
            break;
            case "swapaxis":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim() );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default );
                }
                break;
            case "sortdata":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnSortDataValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim() );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnSortDataValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default );
                }
                break;
            case "limitdata":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnLimitDataValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim(), i_chart.type );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnLimitDataValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default, i_chart.type );
                }
                break;
            case "startangle":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnStartAngleValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim(), i_chart.type );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnStartAngleValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default, i_chart.type );
                }
                break;
            case "markertype":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnMarkerTypeValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim(), i_chart.type );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnMarkerTypeValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default, i_chart.type );
                }
                break;
            case "showdiff":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim() );
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = jsChartReturnBooleanValue( IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default );
                }
                break;
            case "drawalg":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim();
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default;
                }
                break;
            case "jsondata":
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim();
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default;
                }
                break;
            default:
                if (this_chart.hasAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt])) {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = this_chart.getAttribute( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ).trim();
                } else {
                    i_chart.i_options[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ] = IDEFAULT_CHART_ATTRIBUTES[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].supported_options[tt] ].default;
                }
                break;
        }
    }

    return true;
}
// initialise the specified charts
function initChart(chart_index, chart_id, series_index, open_options_menu = false) {

    // set default for series_index
    if ((!series_index) || (series_index == null)) {
        var series_index = 0;
    }

    // loop over all charts, but only process those specified in chart_id or chart_index
    var js_charts = document.getElementsByClassName("js-chart");
    var chart_processed_count = 0;
    for (var chart_counter = 0; chart_counter < js_charts.length; chart_counter++) {

        var this_chart = js_charts[chart_counter];

        var process_this_chart = false;

        if ((chart_id == null) && (chart_index == null)) {
            process_this_chart = true;
        } else if ((typeof chart_id == "string") && (chart_id == this_chart.id)) {
            process_this_chart = true;
        } else if ((typeof chart_index == "number") && (parseInt(chart_index) == chart_counter)) {
            process_this_chart = true;
        }

        if (process_this_chart) {

            // remove the base container for the chart so that everything can be drawn again
            if (this_chart.getElementsByClassName("js-chart-common-base-container").length > 0) {
                this_chart.getElementsByClassName("js-chart-common-base-container")[0].remove();
            }

            // 1. labels
            // 2. data
            // 3. options
            // 4. design
            // 5. titles
            // 6. totals
            var i_chart = {
                "type": null,
                "chart_group": null,
                "chart_counter": chart_counter,
                "series_index": series_index,
                "data_type": null, // this indicates the data type of the chart values, e.g. categorical, range, points, etc.
                "i_data_type": null, // this indicates whether the input values are absolute (e.g. 10 or 12945) or relative (34% or 100%) values (remember parseFloat("20%") equals 20)
                //"palette_type": null,
                "i_keys": [], // this will be populated with the keys that match to a qualitative color palette
                "i_sets": [],
                "i_labels": [],
                "i_titles": [],
                "i_data": [],
                "i_options": [],
                "i_design": [],
                "i_totals": []
            }

            // validate the chart tupe
            if ((!this_chart.hasAttribute("type")) || (typeof IDEFAULT_CHART_TYPE_OPTIONS[ this_chart.getAttribute("type").trim() ] === "undefined")) {
                // abort with invalid chart type msg
                jsChartLogErrorMessage(chart_counter + ". Invalid chart type.", 4);
                // return false;
            } else {
                i_chart.type = this_chart.getAttribute("type").trim();
                i_chart.chart_group = IDEFAULT_CHART_TYPE_OPTIONS[ this_chart.getAttribute("type").trim() ].chart_group;
                i_chart.data_type = IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].data_type;

                // first extract and parse the chart attributes (options)
                var parse_input_options = jsChartParseInputOptions( this_chart , i_chart );
                if (!parse_input_options) {
                    jsChartLogErrorMessage(chart_counter + ". Unable to parse chart input options.", 4);
                    //return false;
                } else {

                    // now extract the chart labels, data and titles based on the chart type
                    switch ( IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].data_type ) {
                        // categorical values
                        case "categorical":
                            // parse data (values) + titles
                            var parse_values = jsChartParseInputValues( this_chart , i_chart, false );

                            // first process the swapaxis chart attribute
                            if (i_chart.i_options.swapaxis) {
                                var swap_chart_axis = jsChartSwapInputValues(i_chart);
                            }

                            // then we sort the data
                            var sort_data = jsChartCommonSortInputDataValues(this_chart, i_chart);

                            // calculate totals
                            var calc_totals = jsChartCalculateInputValueTotals( i_chart );
                            break;

                        // cumulative  values
                        case "cumulative":

                        // parse data (values) + titles
                            var parse_values = jsChartParseInputValues( this_chart , i_chart, false );

                            // process the swapaxis chart attribute
                            if (i_chart.i_options.swapaxis) {
                                var swap_chart_axis = jsChartSwapInputValues(i_chart);
                            }

                            // calculate totals
                            var calc_totals = jsChartCalculateInputValueTotals( i_chart );
                            break;
                        // range
                        case "range":
                            // parse data (values) + titles
                            var parse_values = jsChartParseInputRange( this_chart , i_chart, false );
                            // parse labels
                            var parse_labels = jsChartParseInputRangeLabels( this_chart , i_chart );
                            // calculate totals
                            var calc_totals = jsChartCalculateInputRangeTotals( i_chart );
                            //}
                            break;
                        // frequency -> this indicates that the data is either categorical, or binned
                        case "frequency":
                            // parse data (values) + titles
                            var parse_values = jsChartParseInputFrequency( this_chart , i_chart, false );
                            if (!parse_values) {
                                jsChartLogErrorMessage(chart_counter + ". Input BINS/frequencies cannot be parsed.");
                            }

                            if (i_chart.i_options.swapaxis) {
                                var swap_chart_axis = jsChartSwapInputValues(i_chart);
                            }

                            // calculate totals
                            //var calc_totals = jsChartCalculateInputFrequencyTotals( i_chart );
                            break;

                        // points (x, y and optional s)
                        case "points":
                            // parse points (values) + titles
                            var parse_values = jsChartParseInputPoints( this_chart , i_chart);
                            if (!parse_values) {
                                jsChartLogErrorMessage(chart_counter + ". Input points cannot be parsed.");
                            }

                            if (i_chart.i_options.swapaxis) {
                                var swap_chart_axis = jsChartSwapInputPoints(i_chart);
                            }

                            break;
                        
                        // ohlc (open high low close / volume)
                        case "ohlc":

                            var parse_ohlc = jsChartParseInputOHLC( this_chart, i_chart );

                            var calc_totals = jsChartCalculateInputOHLCTotals( this_chart, i_chart );

                            break;
                        
                        // set
                        case "set":

                            var parse_sets = jsChartParseInputSets(this_chart, i_chart);
                            break;

                        // series - used by boxplot
                        case "series":

                            var parse_series = jsChartParseInputSeries(this_chart, i_chart);
                            break;
                        
                        // hierarchical - used by treemap
                        case "hierarchical":

                            var parse_hierarchical = jsChartParseInputHierarchical(this_chart, i_chart);
                            break;

                        default:
                            break;
                    }

                    // extract and patse the design elements
                    var parse_design = jsChartParseInputDesign( this_chart , i_chart );
                    if (!parse_design) {
                        jsChartLogErrorMessage("Unable to parse input design.", 4);
                    }

                    // perform the function call to the chart draw function name
                    //try {
                        var draw_chart = window[ IDEFAULT_CHART_TYPE_OPTIONS[ i_chart.type ].draw_functionname ](
                            chart_counter,
                            series_index,
                            this_chart,
                            i_chart
                        )

                        chart_processed_count++;
                    //}
                    //catch(err) {
                    //    jsChartLogErrorMessage(chart_counter + ". An error occurred while drawing the chart. " + err, 4);
                    //    return false;
                    //}

                    // open the options menu
                    if (open_options_menu) {
                        var open_options_menu = jsChartCommonEventToggleOptionsMenu(this_chart, i_chart);
                    }
                }
            }
        }
    }

    return true;
}
// ensure DOM is loaded, initiate charts
function isDOMLoaded() {
    if(document.readyState == "complete") {
        // init all charts
        var init_chart_res = initChart();
        return true;
    } else {
        setTimeout(initChart, 200);
        return false;
    }
}
// ensure that the DOM has loaded
setTimeout(isDOMLoaded, 100);