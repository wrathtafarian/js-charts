// 1. chart id for init chart
// 2. import of chart and directives
// 3. capture data set title with input data
// 4. add close window button
// 5. add random button next to categotical values

const BUILDER_DEFAULTS = {
    //"chart_type": IDEFAULT_CHART_ATTRIBUTES["type"].default,
    "chart_type": "candlestick",
    "template_name": IDEFAULT_CHART_ATTRIBUTES["template"].default,
    "data": {
        "categorical": {
            "chart_title": "Sales Revenue",
            "data": [
                {
                    "title": "2022",
                    "data": [64, 142, 152, 156, 229]
                },
                {
                    "title": "2023",
                    "data": [152, 70, 121, 171, 238]
                },
                {
                    "title": "2024",
                    "data": [252, 124, 260, 137, 264]
                }
            ]
        },
        "frequency": {
            "chart_title": "Operations",
            "title": "2022",
            "data": [20.666, 13.043, 4.023, 22.731, 13.363, 2.411, 22.297, 21.749, 7.863, 0.589, 13.866, 14.115, 13.411, 13.855, 20.292, 13.026, 6.272, 3.725, 20.941, 11.479, 16.574, 15.589, 6.68, 3.677, 17.003, 24.452, 18.574, 2.93, 5.849, 3.487, 8.24, 0.539, 7.196, 9.187, 22.354, 21.686, 5.142, 12.475, 16.999, 13.881, 5.73, 3.142, 20.586, 19.18, 6.828, 18.609, 24.567, 7.441, 17.291, 0.302, 23.549, 2.337, 11.06, 10.133, 12.146, 24.074, 16.622, 16.416, 8.216, 22.049, 2.458, 18.669, 17.486, 5.047, 23.028, 20.541, 0.176, 18.535, 2.899, 4.532, 3.994, 13.642, 1.52, 16.3, 8.896, 8.849, 7.181, 20.344, 22.29, 10.865, 1.467, 13.167, 0.256, 4.25, 9.293, 24.847, 1.785, 6.232, 19.634, 8.008, 13.109, 9.115, 21.981, 14.072, 16.37, 16.332, 23.126, 17.948, 10.999, 15.355],
            "labels": ["AA", "AA", "BB", "BB", "BB", "BB", "BB", "CC", "BB", "CC", "BB", "CC", "BB", "BB", "BB", "BB", "AA", "CC", "CC", "CC", "BB", "AA", "BB", "AA", "CC", "AA", "AA", "BB", "BB", "BB", "CC", "BB", "CC", "CC", "BB", "CC", "BB", "BB", "AA", "CC", "CC", "AA", "AA", "BB", "AA", "AA", "BB", "AA", "AA", "AA", "BB", "BB", "CC", "BB", "BB", "CC", "AA", "AA", "AA", "CC", "CC", "CC", "BB", "AA", "CC", "CC", "AA", "AA", "CC", "BB", "CC", "CC", "AA", "CC", "BB", "BB", "BB", "CC", "AA", "CC", "CC", "BB", "BB", "CC", "CC", "CC", "AA", "CC", "BB", "BB", "CC", "CC", "AA", "BB", "AA", "CC", "BB", "AA", "BB", "AA"],
            "frequencies": [7, 0, 3, 6, 0, 8, 3, 3, 4, 8, 1, 7, 0, 0, 4, 2, 4, 1, 1, 1, 7, 8, 4, 3, 4, 5, 2, 4, 3, 4, 5, 6, 0, 5, 7, 3, 6, 0, 3, 3, 6, 1, 4, 1, 4, 5, 3, 1, 7, 1, 1, 0, 4, 0, 5, 4, 3, 2, 6, 4, 5, 0, 4, 1, 8, 3, 2, 8, 4, 4, 0, 0, 8, 8, 8, 1, 5, 5, 5, 7, 6, 0, 0, 8, 8, 6, 5, 4, 0, 0, 8, 2, 8, 6, 5, 6, 2, 2, 3, 1],
            "bin_edge_start": 0,
            "bin_edge_end": 9,
            "bin_size": 0.5
        },
        "range": {
            "chart_title": "Daily Price Movement: High and Low Price",
            "labels": ["02/03", "02/04", "02/05", "02/06", "02/07", "02/08", "02/09"],
            "data": [
                {
                    "title": "2022",
                    "labels": ["02/03", "02/04", "02/05", "02/06", "02/07", "02/08", "02/09"],
                    "low_values": [1258, 1262, 1264, 1269, 1264, 1231, 1244],
                    "high_values": [1381, 1396, 1381, 1298, 1284, 1284, 1295]
                },
                {
                    "title": "2023",
                    "low_values": [1258, 1262, 1264, 1269, 1264, 1231, 1244],
                    "high_values": [1381, 1396, 1381, 1298, 1284, 1284, 1295]
                },
                {
                    "title": "2024",
                    "low_values": [1258, 1262, 1264, 1269, 1264, 1231, 1244],
                    "high_values": [1381, 1396, 1381, 1298, 1284, 1284, 1295]
                }
            ]
        },
        "cumulative": {
            "chart_title": "Cumulative Financial Flow",
            "labels": ["Starting Balance", "Revenue", "Expenses", "Taxes", "Net Profit"],
            "data": {
                "title": "2022",
                "data": [50000, 20000, -15000, -5000, 50000]
            }
        },
        "points": {
            "chart_title": "Relationship between temperature (°C) and ice cream sales ($)",
            "data": [
                {
                    "title": "2022",
                    "x_points": [32.79, 32.76, 16.69, 25.75, 27.57, 19.39, 16.06, 16.08, 31.68, 34.22, 34.71, 29.52, 34.29, 19.11, 25.85, 31.87, 31.41, 34.76, 27.92, 17.25, 27.42, 38.01, 32.40, 27.57, 26.68, 29.72, 19.82, 33.73, 19.59, 24.92, 18.60, 34.12, 17.96, 33.12, 39.16, 28.27, 26.70, 33.67, 26.10, 30.05, 18.54, 16.56, 15.40, 25.55, 25.60, 26.90, 21.07, 33.39, 39.11, 25.50],
                    "y_points": [598.68, 693.07, 324.17, 401.70, 504.20, 384.64, 186.38, 135.98, 699.11, 639.61, 676.70, 421.00, 706.15, 221.80, 503.34, 523.83, 462.34, 616.03, 467.00, 108.19, 360.53, 778.34, 531.11, 548.24, 349.96, 577.08, 257.45, 522.33, 305.75, 305.89, 238.08, 565.88, 372.98, 549.90, 880.07, 421.78, 385.52, 665.72, 415.49, 476.22, 305.46, 123.97, 95.88, 539.76, 315.07, 412.48, 229.82, 734.63, 859.75, 517.55],
                    "s_points": [22.361, 49.171, 35.697, 24.583, 47.216, 25.408, 28.369, 40.005, 36.296, 35.27, 30.432, 39.272, 20.38, 35.926, 34.523, 42.714, 41.886, 32.616, 36.268, 21.647, 20.561, 49.416, 22.437, 20.457, 42.651, 34.667, 31.987, 42.451, 20.49, 48.988, 49.953, 39.807, 38.9, 38.795, 39.612, 20.407, 36.363, 31.623, 26.49, 40.919, 40.451, 46.868, 37.34, 47.904, 31.22, 20.612, 37.897, 29.699, 48.357, 27.399]
                }
            ]
        },
        "ohlc": {
            "chart_title": "Asset trading",
            "data": {
                "labels": ["01/02", "01/03", "01/06", "01/07", "01/08", "01/10", "01/13"],
                "open": [122.29, 121.65, 129.07, 130.51, 124.51, 118.18, 115.28],
                "high": [123.14, 125.56, 130.73, 131.71, 125.30, 118.71, 117.48],
                "low": [119.44, 121.42, 127.36, 126.8537, 120.1201, 114.4501, 114.41],
                "close": [120.63, 125.37, 129.55, 127.33, 121.84, 116.04, 117.32]
            }
        }
    }
}


// display a popup messae at the top of window
function jsChartBuilderPopMessage(pop_msg) {

    var this_popup = document.getElementsByClassName("js-chart-builder-popup-msg-container");
    if (this_popup.length == 1) {
        this_popup[0].remove();
    }

    var pop_container = document.createElement("div");
    var pop_container_class = document.createAttribute("class");
    pop_container_class.value = "js-chart-builder-popup-msg-container";
    pop_container.setAttributeNode( pop_container_class );
    pop_container.innerText = pop_msg;
    document.getElementsByClassName("js-chart-builder")[0].appendChild( pop_container );

    setTimeout(function () {
        pop_container.remove();
    }, 2000);

    return true;
}
// add an input data container for categorical data (js-values)
/*
function jsChartBuilderAddInputData_Categorical(data_panel, index) {

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    data_input_value_labels.innerHTML = "Data series " + (index + 1);
    data_panel.appendChild( data_input_value_labels );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    data_input_value_labels.innerHTML = "Data values <span style=\"font-size: 11px;\">( comma-separated list of numeric values )</span>";
    data_panel.appendChild( data_input_value_labels );

    // data labels input
    var data_input_value_input = document.createElement("input");
    data_input_value_input.id = "js-chart-builder-values";
    var data_input_value_input_type = document.createAttribute("type");
    data_input_value_input_type.value = "TEXT";
    data_input_value_input.setAttributeNode( data_input_value_input_type );
    data_input_value_input.value = BUILDER_DEFAULTS.data.categorical[index];
    data_panel.appendChild( data_input_value_input );

    return true;
}
*/
// add an input data container for range values;
function jsChartBuilderAddInputData_Range(data_panel, index, series_index = 0, insert_element = false) {

    if (index >= BUILDER_DEFAULTS.data.range.data.length) {
        index = 0;
    }

    // outer container
    var outer_container = document.createElement("div");
    var outer_container_style = document.createAttribute("style");
    outer_container_style.value = "display: flex; flex-direction: row; border: 0.5px solid #eeeeee; border-radius: 5px; margin: 10px 0px 0px 0px;";
    outer_container.setAttributeNode( outer_container_style );
    var outer_container_class = document.createAttribute("class");
    outer_container_class.value = "js-chart-builder-input-data-range-container";
    outer_container.setAttributeNode( outer_container_class );
    if (!insert_element) {
        data_panel.appendChild( outer_container );
    } else {
        data_panel.insertBefore(outer_container, data_panel.children[ (data_panel.children.length-1) ]);
    }

    // series label
    var series_label = document.createElement("div");
    var series_label_style = document.createAttribute("style");
    series_label_style.value = "flex: 1 1 auto; width: 40px; background-color: CadetBlue; border-radius: 5px 0px 0px 5px; writing-mode: vertical-lr; line-height: 40px; font-weight: 500; text-align: center; color: white;";
    series_label.setAttributeNode( series_label_style );
    series_label.innerText = "Series " + (series_index + 1);
    outer_container.appendChild( series_label );

    // inner panel
    var inner_panel = document.createElement("div");
    var inner_panel_style = document.createAttribute("style");
    inner_panel_style.value = "flex: 1 1 auto; width: calc(100% - (40px + 20px)); display: flex; flex-direction: column; margin: 0px 10px 0px 10px;";
    inner_panel.setAttributeNode( inner_panel_style );
    outer_container.appendChild( inner_panel );

    // remove button
    var remove_container = document.createElement("div");
    var remove_container_style = document.createAttribute("style");
    remove_container_style.value = "flex: 1 1 auto; width: 20px; border: 0.5px solid #333333; border-radius: 0px 3px 3px 0px; background-color: Crimson; color: White; font-size: 11px; font-weight: 400; writing-mode: vertical-lr; text-align: center; line-height: 20px; cursor: pointer;";
    remove_container.setAttributeNode( remove_container_style );
    remove_container.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    remove_container.addEventListener("mouseout", function () {
        this.style.backgroundColor = "Crimson";
    }, false);
    remove_container.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    remove_container.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    remove_container.addEventListener("click", function () {
        var preview_chart = document.getElementById("js-chart-builder-preview");

        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-input-data-range-container").length; tt++) {
            if (this.parentElement == document.getElementsByClassName("js-chart-builder-input-data-range-container")[tt]) {
                preview_chart.getElementsByClassName("js-low-values")[tt].remove();
                preview_chart.getElementsByClassName("js-high-values")[tt].remove();

                this.parentElement.remove();

                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
            }
        }

        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-input-data-range-container").length; tt++) {
            document.getElementsByClassName("js-chart-builder-input-data-range-container")[tt].children[0].innerText = "Series " + (tt+1);
        }

    }, false);
    remove_container.innerText = "Remove";
    outer_container.appendChild( remove_container );

    // title value label
    var title_label = document.createElement("div");
    var title_label_style = document.createAttribute("style");
    title_label_style.value = "flex: 1 1 auto; font-size: 13px; font-weight: 500; margin: 5px 0px 0px 0px;";
    title_label.setAttributeNode( title_label_style );
    title_label.innerHTML = "Name or short description:";
    inner_panel.appendChild( title_label );

    // title input
    var title_input = document.createElement("input");
    var title_input_type = document.createAttribute("type");
    title_input_type.value = "TEXT";
    title_input.setAttributeNode( title_input_type );
    title_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var data_title = preview_chart.getElementsByClassName("js-low-values")[index];

        if (this.value != data_title.getAttribute("title")) {
            data_title.setAttribute("title", this.value);

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    title_input.value = BUILDER_DEFAULTS.data.range.data[index].title;
    inner_panel.appendChild( title_input );

    // min value label
    var min_label = document.createElement("div");
    var min_label_style = document.createAttribute("style");
    min_label_style.value = "flex: 1 1 auto; font-size: 13px; font-weight: 500; margin: 5px 0px 0px 0px;";
    min_label.setAttributeNode( min_label_style );
    min_label.innerHTML = "Minimum values <span style=\"font-size: 10px;\">(comma-separated list of numeric values</span>";
    inner_panel.appendChild( min_label );

    // min input
    var min_input = document.createElement("input");
    var min_input_type = document.createAttribute("type");
    min_input_type.value = "TEXT";
    min_input.setAttributeNode( min_input_type );
    min_input.value = BUILDER_DEFAULTS.data.range.data[index].low_values.join(", ");
    min_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var data_value = preview_chart.getElementsByClassName("js-low-values")[index];

        if (this.value != data_value.innerText) {
            data_value.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    inner_panel.appendChild( min_input );

    // max value label
    var max_label = document.createElement("div");
    var max_label_style = document.createAttribute("style");
    max_label_style.value = "flex: 1 1 auto; font-size: 13px; font-weight: 500; margin: 5px 0px 0px 0px;";
    max_label.setAttributeNode( max_label_style );
    max_label.innerHTML = "Maximum values <span style=\"font-size: 10px;\">(comma-separated list of numeric values</span>";
    inner_panel.appendChild( max_label );

    // max input
    var max_input = document.createElement("input");
    var max_input_type = document.createAttribute("type");
    max_input_type.value = "TEXT";
    max_input.setAttributeNode( max_input_type );
    max_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var data_value = preview_chart.getElementsByClassName("js-high-values")[index];

        if (this.value != data_value.innerText) {
            data_value.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    max_input.value = BUILDER_DEFAULTS.data.range.data[index].high_values.join(", ");
    inner_panel.appendChild( max_input );

    // add the preview chart input value containers
    var preview_chart = document.getElementById("js-chart-builder-preview");

    // labels
    var labels_container = document.createElement("div");
    var labels_container_class = document.createAttribute("class");
    labels_container_class.value = "js-labels";
    labels_container.setAttributeNode( labels_container_class );
    labels_container.innerText = BUILDER_DEFAULTS.data.range.labels.join(", ");
    preview_chart.appendChild( labels_container );

    // input low
    var low_values = document.createElement("div");
    var low_values_class = document.createAttribute("class");
    low_values_class.value = "js-low-values";
    low_values.setAttributeNode( low_values_class );
    var low_values_title = document.createAttribute("title");
    low_values_title.value = BUILDER_DEFAULTS.data.range.data[index].title;
    low_values.setAttributeNode( low_values_title );
    low_values.innerText = BUILDER_DEFAULTS.data.range.data[index].low_values.join(", ");
    preview_chart.appendChild( low_values );

    // input high
    var high_values = document.createElement("div");
    var high_values_class = document.createAttribute("class");
    high_values_class.value = "js-high-values";
    high_values.setAttributeNode( high_values_class );
    high_values.innerText = BUILDER_DEFAULTS.data.range.data[index].high_values.join(", ");
    preview_chart.appendChild( high_values );

    var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    return true;
}
// add input data container for points data
function jsChartBuilderAddInputData_Points(data_panel, index, chart_type, insert_element = false) {

    // outer container
    var outer_container = document.createElement("div");
    var outer_container_class = document.createAttribute("class");
    outer_container_class.value = "js-chart-builder-input-data-points-container";
    outer_container.setAttributeNode( outer_container_class );
    var outer_container_style = document.createAttribute("style");
    outer_container_style.value = "display: flex; flex-direction: row; border: 0.5px solid #eeeeee; margin: 10px 0px 10px 0px;";
    outer_container.setAttributeNode( outer_container_style );
    if (!insert_element) {
        data_panel.appendChild( outer_container );
    } else {
        data_panel.insertBefore(outer_container, data_panel.children[ (data_panel.children.length-1) ]);
    }

    // left label
    var left_label_container = document.createElement("div");
    var left_label_container_style = document.createAttribute("style");
    left_label_container_style.value = "flex: 1 1 auto; color: White; background-color: CadetBlue; text-align: center; width: 40px; line-height: 40px; writing-mode: vertical-lr; border-radius: 5px 0px 0px 5px;";
    left_label_container.setAttributeNode( left_label_container_style );
    left_label_container.innerText = "Series " + (index + 1);
    outer_container.appendChild( left_label_container );

    // middle container
    var middle_container = document.createElement("div");
    var middle_container_style = document.createAttribute("style");
    middle_container_style.value = "flex: 1 1 auto; width: calc(100% - (40px + 30px)); display: flex; flex-direction: column; margin: 0px 10px 10px 10px;";
    middle_container.setAttributeNode( middle_container_style );
    outer_container.appendChild( middle_container );

    // x-point label
    var x_point_label = document.createElement("div");
    var x_point_label_style = document.createAttribute("style");
    x_point_label_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 500; margin: 10px 0px 5px 10px;";
    x_point_label.setAttributeNode( x_point_label_style );
    x_point_label.innerHTML = "x-points <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    middle_container.appendChild( x_point_label );

    // x-point input data
    var x_point_values = document.createElement("input");
    var x_point_values_type = document.createAttribute("type");
    x_point_values_type.value = "TEXT";
    x_point_values.setAttributeNode( x_point_values_type );
    x_point_values.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var x_point = preview_chart.getElementsByClassName("js-x-points")[index];

        if (this.value != x_point.innerText) {
            x_point.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    x_point_values.value = BUILDER_DEFAULTS.data.points.data[0].x_points.join(", ");
    middle_container.appendChild( x_point_values );

    // y-point label
    var y_point_label = document.createElement("div");
    var y_point_label_style = document.createAttribute("style");
    y_point_label_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 500; margin: 10px 0px 5px 10px;";
    y_point_label.setAttributeNode( y_point_label_style );
    y_point_label.innerHTML = "y-points <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    middle_container.appendChild( y_point_label );

    // y-point input data
    var y_point_values = document.createElement("input");
    var y_point_values_type = document.createAttribute("type");
    y_point_values_type.value = "TEXT";
    y_point_values.setAttributeNode( y_point_values_type );
    y_point_values.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var y_point = preview_chart.getElementsByClassName("js-y-points")[index];

        if (this.value != y_point.innerText) {
            y_point.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    y_point_values.value = BUILDER_DEFAULTS.data.points.data[0].y_points.join(", ");
    middle_container.appendChild( y_point_values );

    if (chart_type == "bubble") {

        // s-point label
        var s_point_label = document.createElement("div");
        var s_point_label_style = document.createAttribute("style");
        s_point_label_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 500; margin: 10px 0px 5px 10px;";
        s_point_label.setAttributeNode( s_point_label_style );
        s_point_label.innerHTML = "s-points <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
        middle_container.appendChild( s_point_label );

        // s-point input data
        var s_point_values = document.createElement("input");
        var s_point_values_type = document.createAttribute("type");
        s_point_values_type.value = "TEXT";
        s_point_values.setAttributeNode( s_point_values_type );
        s_point_values.addEventListener("change", function () {

            var preview_chart = document.getElementById("js-chart-builder-preview");
            var s_point = preview_chart.getElementsByClassName("js-s-points")[index];

            if (this.value != s_point.innerText) {
                s_point.innerText = this.value;

                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
            }

        }, false);
        s_point_values.value = BUILDER_DEFAULTS.data.points.data[0].s_points.join(", ");
        middle_container.appendChild( s_point_values );

    }

    // remove label
    var remove_container = document.createElement("div");
    var remove_container_style = document.createAttribute("style");
    remove_container_style.value = "flex: 1 1 auto; width: 30px; color: White; background-color: crimson; line-height: 30px; text-align: center; writing-mode: vertical-lr; cursor: pointer; border-radius: 0px 5px 5px 0px; border: 0.5px solid #333333;";
    remove_container.setAttributeNode( remove_container_style );
    remove_container.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    remove_container.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(348, 83%, 47%)";
    }, false);
    remove_container.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    remove_container.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    remove_container.addEventListener("click", function () {

        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-input-data-points-container").length; tt++) {
            if (document.getElementsByClassName("js-chart-builder-input-data-points-container")[tt] == this.parentElement) {

                this.parentElement.remove();

                document.getElementById("js-chart-builder-preview").getElementsByClassName("js-x-points")[tt].remove();
                document.getElementById("js-chart-builder-preview").getElementsByClassName("js-y-points")[tt].remove();
                document.getElementById("js-chart-builder-preview").getElementsByClassName("js-s-points")[tt].remove();

                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

            }
        }

        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-input-data-points-container").length; tt++) {
            document.getElementsByClassName("js-chart-builder-input-data-points-container")[tt].children[0].innerText = "Series " + (tt+1);
        }
    }, false);
    remove_container.innerText = "Remove";
    outer_container.appendChild( remove_container );

    // add to preview chart
    var x_points_container = document.createElement("div");
    var x_points_container_class = document.createAttribute("class");
    x_points_container_class.value = "js-x-points";
    x_points_container.setAttributeNode( x_points_container_class );
    x_points_container.innerText = BUILDER_DEFAULTS.data.points.data[0].x_points.join(", ");
    document.getElementById("js-chart-builder-preview").appendChild( x_points_container );

    // add to preview chart
    var y_points_container = document.createElement("div");
    var y_points_container_class = document.createAttribute("class");
    y_points_container_class.value = "js-y-points";
    y_points_container.setAttributeNode( y_points_container_class );
    y_points_container.innerText = BUILDER_DEFAULTS.data.points.data[0].y_points.join(", ");
    document.getElementById("js-chart-builder-preview").appendChild( y_points_container );

    if (chart_type == "bubble") {

        // add to preview chart
        var s_points_container = document.createElement("div");
        var s_points_container_class = document.createAttribute("class");
        s_points_container_class.value = "js-s-points";
        s_points_container.setAttributeNode( s_points_container_class );
        s_points_container.innerText = BUILDER_DEFAULTS.data.points.data[0].s_points.join(", ");
        document.getElementById("js-chart-builder-preview").appendChild( s_points_container );

}

    var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    return true;
}
// add an input data container for categorical data (js-values)
function jsChartBuilderAddInputData_Categorical(data_panel, index, enable_button, p_input_title, p_input_values, insert_element = false) {

    // outer container
    var outer_container = document.createElement("div");
    var outer_container_class = document.createAttribute("class");
    outer_container_class.value = "js-chart-builder-categorical-container";
    outer_container.setAttributeNode( outer_container_class );
    outer_container.setAttributeNode( outer_container_class );
    var outer_container_style = document.createAttribute("style");
    outer_container_style.value = "display: flex; flex-direction: row; margin: 10px 0px 0px 0px;";
    outer_container.setAttributeNode( outer_container_style );
    //data_panel.appendChild( outer_container );
    //data_panel.insertBefore(outer_container, data_panel.children[ (data_panel.children.length-1) ]);
    if (insert_element) {
        data_panel.insertBefore(outer_container, data_panel.children[ (data_panel.children.length-1) ]);
    } else {
        data_panel.appendChild( outer_container );
    }

    // left container
    var left_container = document.createElement("div");
    var left_container_style = document.createAttribute("style");
    left_container_style.value = "flex: 1 1 auto; width: 40px; background-color: CadetBlue; color: white; font-size: 14px; line-height: 40px; font-weight; 400; writing-mode: vertical-lr; border-radius: 3px 0px 0px 3px; text-align: center; margin: 0px 5px 0px 0px;";
    left_container.setAttributeNode( left_container_style );
    left_container.innerText = "Series " + (index + 1);
    outer_container.appendChild( left_container );

    // right container
    var right_container = document.createElement("div");
    var right_container_style = document.createAttribute("style");
    right_container_style.value = "flex: 1 1 auto; width: calc(100% - (40px + 20px)); min-height: 40px; display: flex; flex-direction: column;";
    right_container.setAttributeNode( right_container_style );
    outer_container.appendChild( right_container );

    // remove container
    var remove_container = document.createElement("div");
    var remove_container_style = document.createAttribute("style");
    remove_container_style.value = "flex: 1 1 auto; width: 20px; border: 0.5px solid #333333; border-radius: 0px 3px 3px 0px; background-color: Crimson; color: White; font-size: 11px; font-weight: 400; writing-mode: vertical-lr; text-align: center; line-height: 20px; cursor: pointer;";
    if (!enable_button) {
        remove_container_style.value += "opacity: 0.5; cursor: not-allowed;";
    } else {
        remove_container.addEventListener("mousedown", function () {
            this.style.fontWeight = 200;
        }, false);
        remove_container.addEventListener("mouseup", function () {
            this.style.fontWeight = 400;
        }, false);
    }
    remove_container.setAttributeNode( remove_container_style );
    remove_container.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    remove_container.addEventListener("mouseout", function () {
        this.style.backgroundColor = "Crimson";
    }, false);
    remove_container.addEventListener("click", function () {

        for (const [ikey, ivalue] of Object.entries(document.getElementsByClassName("js-chart-builder-categorical-container"))) {

            if (this.parentElement == ivalue) {
                this.parentElement.remove();
                var preview_chart = document.getElementsByClassName("js-chart")[0];
                preview_chart.getElementsByClassName("js-values")[ikey].remove();
                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
            }
        }

        for (const [ikey, ivalue] of Object.entries(document.getElementsByClassName("js-chart-builder-categorical-container"))) {
            ivalue.children[0].innerText = "Series " + (parseInt(ikey) + 1);
        }

        var pop_msg = jsChartBuilderPopMessage("Data series removed.");
        /*
        this.parentElement.remove();
        var preview_chart = document.getElementsByClassName("js-chart")[0];
        preview_chart.getElementsByClassName("js-values")[index].remove();
        var init_chart = setTimeout(initChart, 100);
        */
    }, false);
    remove_container.innerText = "Remove";
    outer_container.appendChild( remove_container );

    // data title
    var name_label = document.createElement("div");
    var name_label_style = document.createAttribute("style");
    name_label_style.value = "flex: 1 1 auto; font-size: 13px; font-weight: 600; margin: 0px 0px 0px 5px;";
    name_label.setAttributeNode( name_label_style );
    name_label.innerText = "Name or short description:";
    right_container.appendChild( name_label );

    // title
    var data_input_title = document.createElement("input");
    data_input_title.id = "js-chart-data-title-" + index;
    var data_input_title_style = document.createAttribute("style");
    data_input_title_style.value = "flex: 1 1 auto; width: calc(100% - 30px);";
    data_input_title.setAttributeNode( data_input_title_style );
    var data_input_title_type = document.createAttribute("type");
    data_input_title_type.value = "TEXT";
    data_input_title.setAttributeNode( data_input_title_type );
    //data_input_title.value = BUILDER_DEFAULTS.data.categorical[index].title;
    data_input_title.value = p_input_title;
    data_input_title.addEventListener("focus", function () {
        this.select();
    }, false);
    data_input_title.addEventListener("change", function () {

        for (const [ikey, ivalue] of Object.entries(document.getElementsByClassName("js-chart-builder-categorical-container"))) {

            if (this.parentElement.parentElement == ivalue) {
                var preview_chart = document.getElementsByClassName("js-chart")[0]
                var preview_title = preview_chart.getElementsByClassName("js-values")[ikey];
        
                if (this.value != preview_title.getAttribute("title")) {
                    preview_title.setAttribute("title", this.value);
                }
                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
                var pop_msg = jsChartBuilderPopMessage("Data series title updated.");
            }
        }

        /*
        var preview_chart = document.getElementsByClassName("js-chart")[0]
        var preview_title = preview_chart.getElementsByClassName("js-values")[index];

        if (this.value != preview_title.getAttribute("title")) {
            preview_title.setAttribute("title", this.value);
        }
        var init_chart = setTimeout(initChart, 100);
        var pop_msg = jsChartBuilderPopMessage("Data series title updated.");
        */

    }, false);
    right_container.appendChild( data_input_title );

    // values title
    var name_label = document.createElement("div");
    var name_label_style = document.createAttribute("style");
    name_label_style.value = "flex: 1 1 auto; font-size: 13px; font-weight: 600; margin: 0px 0px 0px 5px;";
    name_label.setAttributeNode( name_label_style );
    name_label.innerHTML = "Values <span style=\"font-size: 11px;\">(comma-separates list of numeric values)</span>:";
    right_container.appendChild( name_label );

    // values
    var data_input_title = document.createElement("input");
    data_input_title.id = "js-chart-data-values-" + index;
    var data_input_title_style = document.createAttribute("style");
    data_input_title_style.value = "flex: 1 1 auto; width: calc(100% - 30px);";
    data_input_title.setAttributeNode( data_input_title_style );
    var data_input_title_type = document.createAttribute("type");
    data_input_title_type.value = "TEXT";
    data_input_title.setAttributeNode( data_input_title_type );
    //data_input_title.value = BUILDER_DEFAULTS.data.categorical[index].data;
    data_input_title.value = p_input_values;
    data_input_title.addEventListener("focus", function () {
        this.select();
    }, false);
    data_input_title.addEventListener("change", function () {

        for (const [ikey, ivalue] of Object.entries(document.getElementsByClassName("js-chart-builder-categorical-container"))) {

            if (this.parentElement.parentElement == ivalue) {
                var preview_chart = document.getElementsByClassName("js-chart")[0]
                var preview_values = preview_chart.getElementsByClassName("js-values")[ikey];
        
                if (this.value.trim() != preview_values.innerText.trim()) {
                    preview_values.innerText = this.value.trim();
                }
                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
                var pop_msg = jsChartBuilderPopMessage("Data values updated.");
            }
        }

    }, false);
    right_container.appendChild( data_input_title );

    return true;
}
// toggle the frequency data input containers
function jsChartBuilderPopulateInputData_FrequencyToggleInputs(input_type) {

    // js-chart-builder-auto-container
    // js-chart-builder-boundary-container
    // js-chart-builder-summary-container
    // js-chart-builder-category-container

    var auto_container = document.getElementById("js-chart-builder-auto-container");
    var boundary_container = document.getElementById("js-chart-builder-boundary-container");
    var summary_container = document.getElementById("js-chart-builder-summary-container");
    var category_container = document.getElementById("js-chart-builder-category-container");

    switch (input_type) {
        // auto
        case "auto":
            auto_container.style.display = "flex";
            boundary_container.style.display = "none";
            summary_container.style.display = "none";
            category_container.style.display = "none";

            break;
        // boundary
        case "boundary":
            auto_container.style.display = "none";
            boundary_container.style.display = "flex";
            summary_container.style.display = "none";
            category_container.style.display = "none";

            break;
        // summary
        case "summary":
            auto_container.style.display = "none";
            boundary_container.style.display = "none";
            summary_container.style.display = "flex";
            category_container.style.display = "none";

            break;
        // category
        case "category":
            auto_container.style.display = "none";
            boundary_container.style.display = "none";
            summary_container.style.display = "none";
            category_container.style.display = "flex";

            break;
    }

    return true;
}
// remove any input data containers from a histogram preview
function jsChartBuilderCleanupHistogramPreviewData() {

    var preview_chart = document.getElementById("js-chart-builder-preview");
    var search_for_classes = ["js-values", "js-bin-labels", "js-bin-first-edge", "js-bin-last-edge", "js-bin-size", "js-bin-frequencies"];

    for (const [ikey, ivalue] of Object.entries(search_for_classes)) {
        if (preview_chart.getElementsByClassName( ivalue ).length > 0) {
            for (var tt = (preview_chart.getElementsByClassName( ivalue ).length-1); tt >= 0; tt--) {
                preview_chart.getElementsByClassName( ivalue )[tt].remove();
            }
        }
    }

    return true;
}
// populate the histogram preview chart
function jsChartBuilderPopulateHistogramPreviewData_Category(bin_labels, bin_values) {

    // bin labels
    var bin_labels_container = document.createElement("div");
    var bin_labels_container_class = document.createAttribute("class");
    bin_labels_container_class.value = "js-bin-labels";
    bin_labels_container.setAttributeNode( bin_labels_container_class );
    bin_labels_container.innerText = bin_labels;
    document.getElementById("js-chart-builder-preview").appendChild( bin_labels_container );

    // bin values
    var bin_labels_container = document.createElement("div");
    var bin_labels_container_class = document.createAttribute("class");
    bin_labels_container_class.value = "js-values";
    bin_labels_container.setAttributeNode( bin_labels_container_class );
    bin_labels_container.innerText = bin_values;
    document.getElementById("js-chart-builder-preview").appendChild( bin_labels_container );

    return true;
}
// populate the histogram preview chart
function jsChartBuilderPopulateHistogramPreviewData_Summary(bin_first_edge, bin_last_edge, bin_values) {

    // bin first edge
    var bin_first_edge_container = document.createElement("div");
    var bin_first_edge_container_class = document.createAttribute("class");
    bin_first_edge_container_class.value = "js-bin-first-edge";
    bin_first_edge_container.setAttributeNode( bin_first_edge_container_class );
    bin_first_edge_container.innerText = bin_first_edge;
    document.getElementById("js-chart-builder-preview").appendChild( bin_first_edge_container );

    // bin last edge
    var bin_last_edge_container = document.createElement("div");
    var bin_last_edge_container_class = document.createAttribute("class");
    bin_last_edge_container_class.value = "js-bin-last-edge";
    bin_last_edge_container.setAttributeNode( bin_last_edge_container_class );
    bin_last_edge_container.innerText = bin_last_edge;
    document.getElementById("js-chart-builder-preview").appendChild( bin_last_edge_container );

    // input values
    var values_container = document.createElement("div");
    var values_container_class = document.createAttribute("class");
    values_container_class.value = "js-values";
    values_container.setAttributeNode( values_container_class );
    values_container.innerText = bin_values;
    document.getElementById("js-chart-builder-preview").appendChild( values_container );

    return true;
}
// populate the histogram preview chart
function jsChartBuilderPopulateHistogramPreviewData_Boundary(bin_first_edge, bin_last_edge, bin_size, input_values) {

    // bin first edge
    var bin_first_edge_container = document.createElement("div");
    var bin_first_edge_container_class = document.createAttribute("class");
    bin_first_edge_container_class.value = "js-bin-first-edge";
    bin_first_edge_container.setAttributeNode( bin_first_edge_container_class );
    bin_first_edge_container.innerText = bin_first_edge;
    document.getElementById("js-chart-builder-preview").appendChild( bin_first_edge_container );

    // bin last edge
    var bin_last_edge_container = document.createElement("div");
    var bin_last_edge_container_class = document.createAttribute("class");
    bin_last_edge_container_class.value = "js-bin-last-edge";
    bin_last_edge_container.setAttributeNode( bin_last_edge_container_class );
    bin_last_edge_container.innerText = bin_last_edge;
    document.getElementById("js-chart-builder-preview").appendChild( bin_last_edge_container );

    // bin size
    var bin_size_container = document.createElement("div");
    var bin_size_container_class = document.createAttribute("class");
    bin_size_container_class.value = "js-bin-size";
    bin_size_container.setAttributeNode( bin_size_container_class );
    bin_size_container.innerText = bin_size;
    document.getElementById("js-chart-builder-preview").appendChild( bin_size_container );

    // input values
    var values_container = document.createElement("div");
    var values_container_class = document.createAttribute("class");
    values_container_class.value = "js-values";
    values_container.setAttributeNode( values_container_class );
    values_container.innerText = input_values;
    document.getElementById("js-chart-builder-preview").appendChild( values_container );

    return true;
}

// add ohlc input data
function jsChartBuilderPopulateInputData_OHLC(data_panel, chart_type) {

    for (var tt = (data_panel.children.length-1); tt >= 0; tt--) {
        data_panel.children[tt].remove();
    }

    // label
    var data_input_label = document.createElement("div");
    var data_input_label_class = document.createAttribute("class");
    data_input_label_class.value = "js-chart-builder-data-input-label";
    data_input_label.setAttributeNode( data_input_label_class );
    data_input_label.innerText = "Time-Series Financial Data (Open-High-Low-Close)";
    data_panel.appendChild( data_input_label );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    data_panel.appendChild( data_input_sublabel );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_description;
    data_panel.appendChild( data_input_sublabel );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 5px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: ForestGreen; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">YES</span>";
    } else {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: Crimson; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">NO</span>";
    }
    data_panel.appendChild( data_input_value_labels );

    // label
    var label_label = document.createElement("div");
    var label_label_style = document.createAttribute("style");
    label_label_style.value = "font-size: 14px; font-weight: 500; margin: 10px 0px 0px 0px;";
    label_label.setAttributeNode( label_label_style );
    label_label.innerHTML = "Labels <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    data_panel.appendChild( label_label );

    var label_input = document.createElement("input");
    var label_input_type = document.createAttribute("type");
    label_input_type.value = "TEXT";
    label_input.setAttributeNode( label_input_type );
    var label_input_style = document.createAttribute("style");
    label_input_style.value = "width: calc(100% - 30px);";
    label_input.setAttributeNode( label_input_style );
    label_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var label_preview = preview_chart.getElementsByClassName("js-labels")[0];

        if (this.value != label_preview.innerText) {
            label_preview.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    label_input.value = BUILDER_DEFAULTS.data.ohlc.data.labels.join(", ");
    data_panel.appendChild( label_input );

    // open
    var open_label = document.createElement("div");
    var open_label_style = document.createAttribute("style");
    open_label_style.value = "font-size: 14px; font-weight: 500; margin: 10px 0px 0px 0px;";
    open_label.setAttributeNode( open_label_style );
    open_label.innerHTML = "Open Values <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    data_panel.appendChild( open_label );

    var open_input = document.createElement("input");
    var open_input_type = document.createAttribute("type");
    open_input_type.value = "TEXT";
    open_input.setAttributeNode( open_input_type );
    var open_input_style = document.createAttribute("style");
    open_input_style.value = "width: calc(100% - 30px);";
    open_input.setAttributeNode( open_input_style );
    open_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var open_preview = preview_chart.getElementsByClassName("js-open")[0];

        if (this.value != open_preview.innerText) {
            open_preview.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    open_input.value = BUILDER_DEFAULTS.data.ohlc.data.open.join(", ");
    data_panel.appendChild( open_input );

    // high
    var high_label = document.createElement("div");
    var high_label_style = document.createAttribute("style");
    high_label_style.value = "font-size: 14px; font-weight: 500; margin: 10px 0px 0px 0px;";
    high_label.setAttributeNode( high_label_style );
    high_label.innerHTML = "High Values <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    data_panel.appendChild( high_label );

    var high_input = document.createElement("input");
    var high_input_type = document.createAttribute("type");
    high_input_type.value = "TEXT";
    high_input.setAttributeNode( high_input_type );
    var high_input_style = document.createAttribute("style");
    high_input_style.value = "width: calc(100% - 30px);";
    high_input.setAttributeNode( high_input_style );
    high_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var high_preview = preview_chart.getElementsByClassName("js-high")[0];

        if (this.value != high_preview.innerText) {
            high_preview.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    high_input.value = BUILDER_DEFAULTS.data.ohlc.data.high.join(", ");
    data_panel.appendChild( high_input );

    // low
    var low_label = document.createElement("div");
    var low_label_style = document.createAttribute("style");
    low_label_style.value = "font-size: 14px; font-weight: 500; margin: 10px 0px 0px 0px;";
    low_label.setAttributeNode( low_label_style );
    low_label.innerHTML = "Low Values <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    data_panel.appendChild( low_label );

    var low_input = document.createElement("input");
    var low_input_type = document.createAttribute("type");
    low_input_type.value = "TEXT";
    low_input.setAttributeNode( low_input_type );
    var low_input_style = document.createAttribute("style");
    low_input_style.value = "width: calc(100% - 30px);";
    low_input.setAttributeNode( low_input_style );
    low_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var low_preview = preview_chart.getElementsByClassName("js-low")[0];

        if (this.value != low_preview.innerText) {
            low_preview.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    low_input.value = BUILDER_DEFAULTS.data.ohlc.data.low.join(", ");
    data_panel.appendChild( low_input );

    // close
    var close_label = document.createElement("div");
    var close_label_style = document.createAttribute("style");
    close_label_style.value = "font-size: 14px; font-weight: 500; margin: 10px 0px 0px 0px;";
    close_label.setAttributeNode( close_label_style );
    close_label.innerHTML = "Close Values <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    data_panel.appendChild( close_label );

    var close_input = document.createElement("input");
    var close_input_type = document.createAttribute("type");
    close_input_type.value = "TEXT";
    close_input.setAttributeNode( close_input_type );
    var close_input_style = document.createAttribute("style");
    close_input_style.value = "width: calc(100% - 30px); margin-bottom: 30px;";
    close_input.setAttributeNode( close_input_style );
    close_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var close_preview = preview_chart.getElementsByClassName("js-close")[0];

        if (this.value != close_preview.innerText) {
            close_preview.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    close_input.value = BUILDER_DEFAULTS.data.ohlc.data.close.join(", ");
    data_panel.appendChild( close_input );

    return true;
}
// add points input data
function jsChartBuilderPopulateInputData_Points(data_panel, chart_type) {

    for (var tt = (data_panel.children.length-1); tt >= 0; tt--) {
        data_panel.children[tt].remove();
    }

    // label
    var data_input_label = document.createElement("div");
    var data_input_label_class = document.createAttribute("class");
    data_input_label_class.value = "js-chart-builder-data-input-label";
    data_input_label.setAttributeNode( data_input_label_class );
    data_input_label.innerText = "Paired Numerical Data (Points)";
    data_panel.appendChild( data_input_label );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    data_panel.appendChild( data_input_sublabel );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_description;
    data_panel.appendChild( data_input_sublabel );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 5px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: ForestGreen; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">YES</span>";
    } else {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: Crimson; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">NO</span>";
    }
    data_panel.appendChild( data_input_value_labels );

    var add_input_values = jsChartBuilderAddInputData_Points(data_panel, 0, chart_type);

    // add more rows
    var add_more = document.createElement("div");
    var add_more_class = document.createAttribute("class");
    add_more_class.value = "js-chart-builder-button-elem";
    add_more.setAttributeNode( add_more_class );
    var add_more_style = document.createAttribute("style");
    add_more_style.value = "width: 150px; background-color: ForestGreen; margin: 10px 0px 10px 0px;";
    add_more.setAttributeNode( add_more_style );
    add_more.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(120, 61%, 24%)"; // forestgreen - 10%
    }, false);
    add_more.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(120, 61%, 34%)"; // firestgreen
    }, false);
    add_more.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    add_more.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    add_more.addEventListener("click", function () {
        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-input-data-points-container").length; tt++) {
            document.getElementsByClassName("js-chart-builder-input-data-points-container")[tt].children[0].innerText = "Series " + (tt+1);
        }
        var add_rows = jsChartBuilderAddInputData_Points(data_panel, tt, chart_type, true);
    }, false);
    add_more.innerText = "+More Rows";
    data_panel.appendChild( add_more );

    return true;
}
// add cumulative input data
function jsChartBuilderPopulateInputData_Cumulative(data_panel, chart_type) {

    for (var tt = (data_panel.children.length-1); tt >= 0; tt--) {
        data_panel.children[tt].remove();
    }

    // label
    var data_input_label = document.createElement("div");
    var data_input_label_class = document.createAttribute("class");
    data_input_label_class.value = "js-chart-builder-data-input-label";
    data_input_label.setAttributeNode( data_input_label_class );
    data_input_label.innerText = "Sequential Numerical Data (Cumulative)";
    data_panel.appendChild( data_input_label );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    data_panel.appendChild( data_input_sublabel );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_description;
    data_panel.appendChild( data_input_sublabel );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 5px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: ForestGreen; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">YES</span>";
    } else {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: Crimson; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">NO</span>";
    }
    data_panel.appendChild( data_input_value_labels );

    // labels value label
    var labels_label = document.createElement("div");
    var labels_label_style = document.createAttribute("style");
    labels_label_style.value = "font-size: 13px; font-weight: 500; margin: 5px 0px 0px 0px;";
    labels_label.setAttributeNode( labels_label_style );
    labels_label.innerHTML = "Labels <span style=\"font-size: 10px;\">(comma-separated list of text values)</span>:";
    data_panel.appendChild( labels_label );

    // labels input
    var labels_input = document.createElement("input");
    var labels_input_type = document.createAttribute("type");
    labels_input_type.value = "TEXT";
    labels_input.setAttributeNode( labels_input_type );
    var labels_input_style = document.createAttribute("style");
    labels_input_style.value = "width: calc(100% - 30px)";
    labels_input.setAttributeNode( labels_input_style );
    labels_input.value = BUILDER_DEFAULTS.data.cumulative.labels.join(", ");
    labels_input.addEventListener("change", function () {
        var preview_chart = document.getElementById("js-chart-builder-preview");
        var input_labels = preview_chart.getElementsByClassName("js-labels")[0];

        if (this.value != input_labels.innerText) {
            input_labels.innerText = this.value;
        }

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    data_panel.appendChild( labels_input );

    // labels values
    var input_values = document.createElement("div");
    var input_values_style = document.createAttribute("style");
    input_values_style.value = "font-size: 13px; font-weight: 500; margin: 5px 0px 0px 0px;";
    input_values.setAttributeNode( input_values_style );
    input_values.innerHTML = "Values <span style=\"font-size: 10px;\">(comma-separated list of text values)</span>:";
    data_panel.appendChild( input_values );

    // labels input
    var labels_input = document.createElement("input");
    var labels_input_type = document.createAttribute("type");
    labels_input_type.value = "TEXT";
    labels_input.setAttributeNode( labels_input_type );
    var labels_input_style = document.createAttribute("style");
    labels_input_style.value = "width: calc(100% - 30px)";
    labels_input.setAttributeNode( labels_input_style );
    labels_input.value = BUILDER_DEFAULTS.data.cumulative.data.data.join(", ");
    labels_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var data_values = preview_chart.getElementsByClassName("js-values")[0];

        if (this.value != data_values.innerText) {
            data_values.innerText = this.value;
        }

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    data_panel.appendChild( labels_input );

    return true;
}
// add range input data
function jsChartBuilderPopulateInputData_Range(data_panel, chart_type) {

    for (var tt = (data_panel.children.length-1); tt >= 0; tt--) {
        data_panel.children[tt].remove();
    }

    // label
    var data_input_label = document.createElement("div");
    var data_input_label_class = document.createAttribute("class");
    data_input_label_class.value = "js-chart-builder-data-input-label";
    data_input_label.setAttributeNode( data_input_label_class );
    data_input_label.innerText = "Numerical Range Data";
    data_panel.appendChild( data_input_label );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    data_panel.appendChild( data_input_sublabel );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_description;
    data_panel.appendChild( data_input_sublabel );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 5px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: ForestGreen; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">YES</span>";
    } else {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: Crimson; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">NO</span>";
    }
    data_panel.appendChild( data_input_value_labels );

    // labels value label
    var labels_label = document.createElement("div");
    var labels_label_style = document.createAttribute("style");
    labels_label_style.value = "font-size: 13px; font-weight: 500; margin: 5px 0px 0px 0px;";
    labels_label.setAttributeNode( labels_label_style );
    labels_label.innerHTML = "Labels <span style=\"font-size: 10px;\">(comma-separated list of text values)</span>:";
    data_panel.appendChild( labels_label );

    // labels input
    var labels_input = document.createElement("input");
    var labels_input_type = document.createAttribute("type");
    labels_input_type.value = "TEXT";
    labels_input.setAttributeNode( labels_input_type );
    var labels_input_style = document.createAttribute("style");
    labels_input_style.value = "width: calc(100% - 30px)";
    labels_input.setAttributeNode( labels_input_style );
    labels_input.value = BUILDER_DEFAULTS.data.range.labels.join(", ");
    labels_input.addEventListener("change", function () {
        var preview_chart = document.getElementById("js-chart-builder-preview");
        var input_labels = preview_chart.getElementsByClassName("js-labels")[0];

        if (this.value != input_labels.innerText) {
            input_labels.innerText = this.value;
        }

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    data_panel.appendChild( labels_input );

    var draw_span_values = jsChartBuilderAddInputData_Range(data_panel, 0);

    // add more rows
    var add_more = document.createElement("div");
    var add_more_class = document.createAttribute("class");
    add_more_class.value = "js-chart-builder-button-elem";
    add_more.setAttributeNode( add_more_class );
    var add_more_style = document.createAttribute("style");
    add_more_style.value = "width: 150px; background-color: ForestGreen; margin: 10px 0px 10px 0px;";
    add_more.setAttributeNode( add_more_style );
    add_more.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(120, 61%, 24%)"; // forestgreen - 10%
    }, false);
    add_more.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(120, 61%, 34%)"; // firestgreen
    }, false);
    add_more.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    add_more.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    add_more.addEventListener("click", function () {
        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-input-data-range-container").length; tt++) {
            document.getElementsByClassName("js-chart-builder-input-data-range-container")[tt].children[0].innerText = "Series " + (tt+1);
        }
        var add_rows = jsChartBuilderAddInputData_Range(data_panel, document.getElementsByClassName("js-chart-builder-input-data-range-container").length, document.getElementsByClassName("js-chart-builder-input-data-range-container").length, true);
    }, false);
    add_more.innerText = "+More Rows";
    data_panel.appendChild( add_more );

    return true;
}
// add frequency input data
function jsChartBuilderPopulateInputData_Frequency(data_panel, chart_type) {

    // define color codes for the data type buttons
    const button_colors = [
        ["hsl(225, 73%, 47%)", "hsl(225, 73%, 57%)", "hsl(225, 73%, 90%)"],
        ["hsl(36, 100%, 40%)", "hsl(36, 100%, 50%)", "hsl(36, 100%, 90%)"],
        ["hsl(120, 60%, 40%)", "hsl(120, 60%, 50%)", "hsl(120, 60%, 90%)"],
        ["hsl(0, 100%, 40%)", "hsl(0, 100%, 50%)", "hsl(0, 100%, 90%)"]
    ]

    for (var tt = (data_panel.children.length-1); tt >=0; tt--) {
        data_panel.children[tt].remove();
    }

    // label
    var data_input_label = document.createElement("div");
    var data_input_label_class = document.createAttribute("class");
    data_input_label_class.value = "js-chart-builder-data-input-label";
    data_input_label.setAttributeNode( data_input_label_class );
    data_input_label.innerText = "Continuous Numerical Data (Frequency Distributions)";
    data_panel.appendChild( data_input_label );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    data_panel.appendChild( data_input_sublabel );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_description;
    data_panel.appendChild( data_input_sublabel );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 5px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: ForestGreen; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">YES</span>";
    } else {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: Crimson; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">NO</span>";
    }
    data_panel.appendChild( data_input_value_labels );

    // "select one" label
    var select_label = document.createElement("div");
    var select_label_style = document.createAttribute("style");
    select_label_style.value = "font-size: 12px;";
    select_label.setAttributeNode( select_label_style );
    select_label.innerText = "Select an input method below:";
    data_panel.appendChild( select_label );

    // input data outer container
    var outer_container = document.createElement("div");
    var outer_container_style = document.createAttribute("style");
    outer_container_style.value = "display: flex; flex-direction: column;";
    outer_container.setAttributeNode( outer_container_style );
    data_panel.appendChild( outer_container );

    // tab container
    var tab_container = document.createElement("div");
    var tab_container_style = document.createAttribute("style");
    tab_container_style.value = "flex: 1 1 auto; height: 25px; line-height: 25px; display: flex; flex-direction: row; margin: 5px 0px 5px 0px;";
    tab_container.setAttributeNode( tab_container_style );
    outer_container.appendChild( tab_container );

    // auto button
    var data_input_select_button = document.createElement("div");
    var data_input_select_button_style = document.createAttribute("style");
    data_input_select_button_style.value = "margin: 0px 2px 0px 0px; flex: 1 1 0px; border: 1px solid " + button_colors[0][0] + "; border-radius: 3px; text-align: center; background-color: " + button_colors[0][0] + "; color: white; cursor: pointer;";
    data_input_select_button.setAttributeNode( data_input_select_button_style );
    data_input_select_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = button_colors[0][0];
    }, false);
    data_input_select_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = button_colors[0][1];
    }, false);
    data_input_select_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    data_input_select_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    data_input_select_button.addEventListener("click", function () {
        var click_button = jsChartBuilderPopulateInputData_FrequencyToggleInputs("auto");
    }, false);
    data_input_select_button.innerText = "auto";
    tab_container.appendChild( data_input_select_button );

    // boundary button
    var data_input_select_button = document.createElement("div");
    var data_input_select_button_style = document.createAttribute("style");
    data_input_select_button_style.value = "margin: 0px 2px 0px 0px; flex: 1 1 0px; border: 1px solid " + button_colors[1][0] + "; border-radius: 3px; text-align: center; background-color: " + button_colors[1][1] + "; color: white; cursor: pointer;";
    data_input_select_button.setAttributeNode( data_input_select_button_style );
    data_input_select_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = button_colors[1][0];
    }, false);
    data_input_select_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = button_colors[1][1];
    }, false);
    data_input_select_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    data_input_select_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    data_input_select_button.addEventListener("click", function () {
        var click_button = jsChartBuilderPopulateInputData_FrequencyToggleInputs("boundary");
    }, false);
    data_input_select_button.innerText = "boundary";
    tab_container.appendChild( data_input_select_button );

    // summary button
    var data_input_select_button = document.createElement("div");
    var data_input_select_button_style = document.createAttribute("style");
    data_input_select_button_style.value = "margin: 0px 2px 0px 0px; flex: 1 1 0px; border: 1px solid " + button_colors[2][0] + "; border-radius: 3px; text-align: center; background-color: " + button_colors[2][1] + "; color: white; cursor: pointer;";
    data_input_select_button.setAttributeNode( data_input_select_button_style );
    data_input_select_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = button_colors[2][0];
    }, false);
    data_input_select_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = button_colors[2][1];
    }, false);
    data_input_select_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    data_input_select_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    data_input_select_button.addEventListener("click", function () {
        var click_button = jsChartBuilderPopulateInputData_FrequencyToggleInputs("summary");
    }, false);
    data_input_select_button.innerText = "summary";
    tab_container.appendChild( data_input_select_button );

    // category button
    var data_input_select_button = document.createElement("div");
    var data_input_select_button_style = document.createAttribute("style");
    data_input_select_button_style.value = "flex: 1 1 0px; border: 1px solid " + button_colors[3][0] + "; border-radius: 3px; text-align: center; background-color: " + button_colors[3][1] + "; color: white; cursor: pointer;";
    data_input_select_button.setAttributeNode( data_input_select_button_style );
    data_input_select_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = button_colors[3][0];
    }, false);
    data_input_select_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = button_colors[3][1];
    }, false);
    data_input_select_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    data_input_select_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    data_input_select_button.addEventListener("click", function () {
        var click_button = jsChartBuilderPopulateInputData_FrequencyToggleInputs("category");
    }, false);
    data_input_select_button.innerText = "category";
    tab_container.appendChild( data_input_select_button );

    // auto value container
    var auto_value_container = document.createElement("div");
    auto_value_container.id = "js-chart-builder-auto-container";
    var auto_value_container_style = document.createAttribute("style");
    auto_value_container_style.value = "flex: 1 1 auto; display: flex; flex-direction: column; border: 1px solid " + button_colors[0][0] + "; background-color: " + button_colors[0][2] + "; border-radius: 3px;";
    auto_value_container.setAttributeNode( auto_value_container_style );
    outer_container.appendChild( auto_value_container );

    // auto label
    var auto_value_label = document.createElement("div");
    var auto_value_label_style = document.createAttribute("style");
    auto_value_label_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 600; margin-left: 10px;";
    auto_value_label.setAttributeNode( auto_value_label_style );
    auto_value_label.innerHTML = "Values <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    auto_value_container.appendChild( auto_value_label );

    // auto values
    var auto_value_data = document.createElement("input");
    var auto_value_data_type = document.createAttribute("type");
    auto_value_data_type.value = "TEXT";
    auto_value_data.setAttributeNode( auto_value_data_type );
    var auto_value_data_style = document.createAttribute("style");
    auto_value_data_style.value = "margin: 5px 5px 10px 5px;";
    auto_value_data.setAttributeNode( auto_value_data_style );
    auto_value_data.addEventListener("change", function () {
        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        
        var value_container = document.createElement("div");
        var value_container_class = document.createAttribute("class");
        value_container_class.value = "js-values";
        value_container.setAttributeNode( value_container_class );
        value_container.innerText = this.value;
        document.getElementById("js-chart-builder-preview").appendChild( value_container );

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    auto_value_data.value = BUILDER_DEFAULTS.data.frequency.data.join(", ");
    auto_value_container.appendChild( auto_value_data );

    // boundary value container
    var boundary_value_container = document.createElement("div");
    boundary_value_container.id = "js-chart-builder-boundary-container";
    var boundary_value_container_style = document.createAttribute("style");
    boundary_value_container_style.value = "flex: 1 1 auto; display: none; flex-direction: column; border: 1px solid " + button_colors[1][0] + "; background-color: " + button_colors[1][2] + "; border-radius: 3px;";
    boundary_value_container.setAttributeNode( boundary_value_container_style );
    outer_container.appendChild( boundary_value_container );

    // boundary value container - top
    var top_boundary_value_container = document.createElement("div");
    var top_boundary_value_container_style = document.createAttribute("style");
    top_boundary_value_container_style.value = "flex: 1 1 auto; display: flex; flex-direction: row; margin-left: 5px;";
    top_boundary_value_container.setAttributeNode( top_boundary_value_container_style );
    boundary_value_container.appendChild( top_boundary_value_container );

    // boundary value container - top - left
    var left_top_boundary_value_container = document.createElement("div");
    var left_top_boundary_value_container_style = document.createAttribute("style");
    left_top_boundary_value_container_style.value = "flex: 1 1 0px; font-weight: 600; text-align: left;";
    left_top_boundary_value_container.setAttributeNode( left_top_boundary_value_container_style );
    //left_top_boundary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin First Edge</span> <span style=\"font-weight: 400;\">(numeric)</span><input type=\"TEXT\" id=\"js-chart-builder-bin-first-edge\" value=\"" + BUILDER_DEFAULTS.data.frequency.bin_edge_start + "\" onchange=\"alert('hi')\">";
    left_top_boundary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin First Edge</span> <span style=\"font-weight: 400;\">(numeric)</span>";
    top_boundary_value_container.appendChild( left_top_boundary_value_container );

    // boundary value container - top - left - bin first edge
    var bin_first_edge = document.createElement("INPUT");
    bin_first_edge.id = "js-chart-builder-bin-first-edge";
    var bin_first_edge_type = document.createAttribute("type");
    bin_first_edge_type.value = "TEXT";
    bin_first_edge.value = BUILDER_DEFAULTS.data.frequency.bin_edge_start;
    bin_first_edge.setAttributeNode( bin_first_edge_type );
    bin_first_edge.addEventListener("change", function () {
        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Boundary(this.value, document.getElementById("js-chart-builder-bin-last-edge").value, document.getElementById("js-chart-builder-bin-size").value, document.getElementById("js-chart-builder-boundary-values").value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    left_top_boundary_value_container.appendChild( bin_first_edge );

    // boundary value container - top - middle
    var middle_top_boundary_value_container = document.createElement("div");
    var middle_top_boundary_value_container_style = document.createAttribute("style");
    middle_top_boundary_value_container_style.value = "flex: 1 1 0px; font-weight: 600; text-align: left;";
    middle_top_boundary_value_container.setAttributeNode( middle_top_boundary_value_container_style );
    //middle_top_boundary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin Last Edge</span> <span style=\"font-weight: 400;\">(numeric)</span><input type=\"TEXT\" id=\"js-chart-builder-bin-last-edge\" value=\"" + BUILDER_DEFAULTS.data.frequency.bin_edge_end + "\">";
    middle_top_boundary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin Last Edge</span> <span style=\"font-weight: 400;\">(numeric)</span>";
    top_boundary_value_container.appendChild( middle_top_boundary_value_container );

    // boundary value container - top - middle - bin last edge
    var bin_last_edge = document.createElement("INPUT");
    bin_last_edge.id = "js-chart-builder-bin-last-edge";
    var bin_last_edge_type = document.createAttribute("type");
    bin_last_edge_type.value = "TEXT";
    bin_last_edge.value = BUILDER_DEFAULTS.data.frequency.bin_edge_end;
    bin_last_edge.setAttributeNode( bin_last_edge_type );
    bin_last_edge.addEventListener("change", function () {

        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Boundary(document.getElementById("js-chart-builder-bin-first-edge").value, this.value, document.getElementById("js-chart-builder-bin-size").value, document.getElementById("js-chart-builder-boundary-values").value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    middle_top_boundary_value_container.appendChild( bin_last_edge );

    // boundary value container - top - right
    var right_top_boundary_value_container = document.createElement("div");
    var right_top_boundary_value_container_style = document.createAttribute("style");
    right_top_boundary_value_container_style.value = "flex: 1 1 0px; font-weight: 600; text-align: left;";
    right_top_boundary_value_container.setAttributeNode( right_top_boundary_value_container_style );
    //right_top_boundary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin Size</span> <span style=\"font-weight: 400;\">(positive numeric)</span><input type=\"TEXT\" id=\"js-chart-builder-bin-size\" value=\"" + BUILDER_DEFAULTS.data.frequency.bin_size + "\">";
    right_top_boundary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin Size</span> <span style=\"font-weight: 400;\">(positive numeric)</span>";
    top_boundary_value_container.appendChild( right_top_boundary_value_container );

    // boundary value container - top - right - bin size
    var bin_size = document.createElement("INPUT");
    bin_size.id = "js-chart-builder-bin-size";
    var bin_size_type = document.createAttribute("type");
    bin_size_type.value = "TEXT";
    bin_size.value = BUILDER_DEFAULTS.data.frequency.bin_size;
    bin_size.setAttributeNode( bin_size_type );
    bin_size.addEventListener("change", function () {

        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Boundary(document.getElementById("js-chart-builder-bin-first-edge").value, document.getElementById("js-chart-builder-bin-last-edge").value, this.value, document.getElementById("js-chart-builder-boundary-values").value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    right_top_boundary_value_container.appendChild( bin_size );

    // boundary value container - bottom
    var bottom_boundary_value_container = document.createElement("div");
    var bottom_boundary_value_container_style = document.createAttribute("style");
    bottom_boundary_value_container_style.value = "flex: 1 1 auto; display: flex; flex-direction: column;";
    bottom_boundary_value_container.setAttributeNode( bottom_boundary_value_container_style );
    boundary_value_container.appendChild( bottom_boundary_value_container );

    // boundary value container - bottom - label
    var bottom_boundary_value_container_label = document.createElement("div");
    var bottom_boundary_value_container_label_style = document.createAttribute("style");
    bottom_boundary_value_container_label_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 600; margin: 0px 0px 0px 10px;";
    bottom_boundary_value_container_label.setAttributeNode( bottom_boundary_value_container_label_style );
    bottom_boundary_value_container_label.innerHTML = "Values <span style=\"font-size: 10px\">(comma-separated list of numeric values)</span>"
    bottom_boundary_value_container.appendChild( bottom_boundary_value_container_label );

    // boundary value container - bottom - values
    var bottom_boundary_value_container_input = document.createElement("input");
    bottom_boundary_value_container_input.id = "js-chart-builder-boundary-values";
    var bottom_boundary_value_container_input_type = document.createAttribute("type");
    bottom_boundary_value_container_input_type.value = "TEXT";
    bottom_boundary_value_container_input.setAttributeNode( bottom_boundary_value_container_input_type );
    var bottom_boundary_value_container_input_style = document.createAttribute("style");
    bottom_boundary_value_container_input_style.value = "margin: 5px 5px 10px 5px;";
    bottom_boundary_value_container_input.setAttributeNode( bottom_boundary_value_container_input_style );
    bottom_boundary_value_container_input.value = BUILDER_DEFAULTS.data.frequency.data.join(", ");
    bottom_boundary_value_container_input.addEventListener("change", function () {

        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Boundary(document.getElementById("js-chart-builder-bin-first-edge").value, document.getElementById("js-chart-builder-bin-last-edge").value, this.value, this.value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    bottom_boundary_value_container.appendChild( bottom_boundary_value_container_input );

    // summary value container
    var summary_value_container = document.createElement("div");
    summary_value_container.id = "js-chart-builder-summary-container";
    var summary_value_container_style = document.createAttribute("style");
    summary_value_container_style.value = "flex: 1 1 auto; display: none; flex-direction: column; border: 1px solid " + button_colors[2][0] + "; background-color: " + button_colors[2][2] + "; border-radius: 3px;";
    summary_value_container.setAttributeNode( summary_value_container_style );
    outer_container.appendChild( summary_value_container );

    // summary value container - top
    var top_summary_value_container = document.createElement("div");
    var top_summary_value_container_style = document.createAttribute("style");
    top_summary_value_container_style.value = "flex: 1 1 auto; display: flex; flex-direction: row; margin-left: 5px;";
    top_summary_value_container.setAttributeNode( top_summary_value_container_style );
    summary_value_container.appendChild( top_summary_value_container );

    // summary value container - top - left
    var left_top_summary_value_container = document.createElement("div");
    var left_top_summary_value_container_style = document.createAttribute("style");
    left_top_summary_value_container_style.value = "flex: 1 1 0px; font-weight: 600; text-align: left;";
    left_top_summary_value_container.setAttributeNode( left_top_summary_value_container_style );
    //left_top_summary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin First Edge</span> <span style=\"font-weight: 400;\">(numeric)</span><input type=\"TEXT\" id=\"js-chart-builder-bin-first-edge\" value=\"" + BUILDER_DEFAULTS.data.frequency.bin_edge_start + "\">";
    left_top_summary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin First Edge</span> <span style=\"font-weight: 400;\">(numeric)</span>";
    top_summary_value_container.appendChild( left_top_summary_value_container );

    // summary value container - top - left
    var left_top_summary_value_labels = document.createElement("INPUT");
    var left_top_summary_value_labels_type = document.createAttribute("type");
    left_top_summary_value_labels_type.value = "TEXT";
    left_top_summary_value_labels.setAttributeNode( left_top_summary_value_labels_type );
    left_top_summary_value_labels.addEventListener("change", function () {

        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Summary(this.value, document.getElementById("js-chart-builder-bin-last-edge").value, document.getElementById("js-chart-builder-bin-frequencies").value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    left_top_summary_value_labels.value = BUILDER_DEFAULTS.data.frequency.bin_edge_start;
    left_top_summary_value_container.appendChild( left_top_summary_value_labels );


    // summary value container - top - middle
    var middle_top_summary_value_container = document.createElement("div");
    var middle_top_summary_value_container_style = document.createAttribute("style");
    middle_top_summary_value_container_style.value = "flex: 1 1 0px; font-weight: 600; text-align: left;";
    middle_top_summary_value_container.setAttributeNode( middle_top_summary_value_container_style );
    //middle_top_summary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin Last Edge</span> <span style=\"font-weight: 400;\">(numeric)</span><input type=\"TEXT\" id=\"js-chart-builder-bin-last-edge\" value=\"" + BUILDER_DEFAULTS.data.frequency.bin_edge_end + "\">";
    middle_top_summary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin Last Edge</span> <span style=\"font-weight: 400;\">(numeric)</span>";
    top_summary_value_container.appendChild( middle_top_summary_value_container );

    // summary value container - top - middle - text
    var middle_top_summary_value_bin_last = document.createElement("input");
    var middle_top_summary_value_bin_last_type = document.createAttribute("type");
    middle_top_summary_value_bin_last_type.value = "TEXT";
    middle_top_summary_value_bin_last.setAttributeNode( middle_top_summary_value_bin_last_type );
    middle_top_summary_value_bin_last.addEventListener("change", function () {

        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Summary(document.getElementById("js-chart-builder-bin-first-edge").value, this.value, document.getElementById("js-chart-builder-bin-frequencies").value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    middle_top_summary_value_bin_last.value = BUILDER_DEFAULTS.data.frequency.bin_edge_end;
    middle_top_summary_value_container.appendChild( middle_top_summary_value_bin_last );

    // summary value container - bottom
    var bottom_summary_value_container = document.createElement("div");
    var bottom_summary_value_container_style = document.createAttribute("style");
    bottom_summary_value_container_style.value = "flex: 1 1 auto; display: flex; flex-direction: column;";
    bottom_summary_value_container.setAttributeNode( bottom_summary_value_container_style );
    summary_value_container.appendChild( bottom_summary_value_container );

    // summary value container - bottom - label
    var bottom_summary_value_container_label = document.createElement("div");
    var bottom_summary_value_container_label_style = document.createAttribute("style");
    bottom_summary_value_container_label_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 600; margin: 0px 0px 0px 10px;";
    bottom_summary_value_container_label.setAttributeNode( bottom_summary_value_container_label_style );
    bottom_summary_value_container_label.innerHTML = "Values <span style=\"font-size: 10px\">(comma-separated list of numeric values)</span>"
    bottom_summary_value_container.appendChild( bottom_summary_value_container_label );

    // summary value container - bottom - values
    var bottom_summary_value_container_input = document.createElement("input");
    bottom_summary_value_container_input.id = "js-chart-builder-bin-frequencies";
    var bottom_summary_value_container_input_type = document.createAttribute("type");
    bottom_summary_value_container_input_type.value = "TEXT";
    bottom_summary_value_container_input.setAttributeNode( bottom_summary_value_container_input_type );
    var bottom_summary_value_container_input_style = document.createAttribute("style");
    bottom_summary_value_container_input_style.value = "margin: 5px 5px 10px 5px;";
    bottom_summary_value_container_input.setAttributeNode( bottom_summary_value_container_input_style );
    bottom_summary_value_container_input.addEventListener("change", function () {

        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Summary(document.getElementById("js-chart-builder-bin-first-edge").value, document.getElementById("js-chart-builder-bin-last-edge").value, this.value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    bottom_summary_value_container_input.value = BUILDER_DEFAULTS.data.frequency.frequencies.join(", ");
    bottom_summary_value_container.appendChild( bottom_summary_value_container_input );

    // category value container
    var category_value_container = document.createElement("div");
    category_value_container.id = "js-chart-builder-category-container";
    var category_value_container_style = document.createAttribute("style");
    category_value_container_style.value = "flex: 1 1 auto; display: none; flex-direction: column; border: 1px solid " + button_colors[3][0] + "; background-color: " + button_colors[3][2] + "; border-radius: 3px;";
    category_value_container.setAttributeNode( category_value_container_style );
    outer_container.appendChild( category_value_container );

    // category labels label
    var category_value_label = document.createElement("div");
    var category_value_label_style = document.createAttribute("style");
    category_value_label_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 600; margin-left: 10px;";
    category_value_label.setAttributeNode( category_value_label_style );
    category_value_label.innerHTML = "Labels <span style=\"font-size: 10px;\">(comma-separated list of text values)</span>";
    category_value_container.appendChild( category_value_label );

    // category labels values
    var category_value_data = document.createElement("input");
    category_value_data.id = "js-chart-builder-bin-category-labels";
    var category_value_data_type = document.createAttribute("type");
    category_value_data_type.value = "TEXT";
    category_value_data.setAttributeNode( category_value_data_type );
    var category_value_data_style = document.createAttribute("style");
    category_value_data_style.value = "margin: 5px 5px 10px 5px;";
    category_value_data.setAttributeNode( category_value_data_style );
    category_value_data.addEventListener("change", function () {

        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Category(this.value, document.getElementById("js-chart-builder-bin-category-values").value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    category_value_data.value = BUILDER_DEFAULTS.data.frequency.labels.join(", ");
    category_value_container.appendChild( category_value_data );

    // category labels label
    var category_value_label = document.createElement("div");
    var category_value_label_style = document.createAttribute("style");
    category_value_label_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 600; margin-left: 10px;";
    category_value_label.setAttributeNode( category_value_label_style );
    category_value_label.innerHTML = "Values <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    category_value_container.appendChild( category_value_label );

    // category labels values
    var category_value_data = document.createElement("input");
    category_value_data.id = "js-chart-builder-bin-category-values";
    var category_value_data_type = document.createAttribute("type");
    category_value_data_type.value = "TEXT";
    category_value_data.setAttributeNode( category_value_data_type );
    var category_value_data_style = document.createAttribute("style");
    category_value_data_style.value = "margin: 5px 5px 10px 5px;";
    category_value_data.setAttributeNode( category_value_data_style );
    category_value_data.addEventListener("change", function () {

        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Category(document.getElementById("js-chart-builder-bin-category-labels").value, this.value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    category_value_data.value = BUILDER_DEFAULTS.data.frequency.data.join(", ");
    category_value_container.appendChild( category_value_data );


    var spacer = document.createElement("div");
    var spacer_style = document.createAttribute("style");
    spacer_style.value = "height: 50px;";
    spacer.setAttributeNode( spacer_style );
    data_panel.appendChild( spacer );

    return true;
}
// add categorical input data
function jsChartBuilderPopulateInputData_Categorical(data_panel, chart_type) {

    for (var tt = (data_panel.children.length-1); tt >=0; tt--) {
        data_panel.children[tt].remove();
    }

    // label
    var data_input_label = document.createElement("div");
    var data_input_label_class = document.createAttribute("class");
    data_input_label_class.value = "js-chart-builder-data-input-label";
    data_input_label.setAttributeNode( data_input_label_class );
    data_input_label.innerText = "Categorical Data";
    data_panel.appendChild( data_input_label );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    data_panel.appendChild( data_input_sublabel );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_description;
    data_panel.appendChild( data_input_sublabel );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 5px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: ForestGreen; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">YES</span>";
    } else {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: Crimson; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">NO</span>";
    }
    data_panel.appendChild( data_input_value_labels );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 10px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    data_input_value_labels.innerHTML = "Data labels <span style=\"font-size: 11px;\">( comma-separated list of text labels )</span>";
    data_panel.appendChild( data_input_value_labels );

    // data labels input
    var data_input_value_input = document.createElement("input");
    data_input_value_input.id = "js-chart-builder-labels";
    var data_input_value_input_type = document.createAttribute("type");
    data_input_value_input_type.value = "TEXT";
    data_input_value_input.setAttributeNode( data_input_value_input_type );
    data_input_value_input.value = "Furniture, Groceries, Electronics, Toys, Clothing";
    //data_input_value_input.addEventListener("focus", function () {
    //    this.select();
    //}, false);
    data_input_value_input.addEventListener("change", function () {
        var preview_chart = document.getElementsByClassName("js-chart")[0];
        var preview_labels = preview_chart.getElementsByClassName("js-labels")[0];

        if (this.value.trim() != preview_labels.innerText.trim()) {
            preview_labels.innerText = this.value.trim();
        }
        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        var pop_msg = jsChartBuilderPopMessage("Data labels updated.");
    }, false);
    data_panel.appendChild( data_input_value_input );

    // allow multi series or not
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        var loop_count = 3;
    } else {
        var loop_count = 1;
    }

    for (var tt = 0; tt < loop_count; tt++) {

        // add an input data container for categorical data (js-values)
        var add_input_values = jsChartBuilderAddInputData_Categorical(data_panel, tt, IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries, BUILDER_DEFAULTS.data.categorical.data[tt].title, BUILDER_DEFAULTS.data.categorical.data[tt].data.join(", "));
    }

    // buttons container
    /*
    var button_container = document.createElement("div");
    var button_container_style = document.createAttribute("style");
    button_container_style.value = "display: flex; flex-direction: row; margin: 10px 20px 20px 0px;";
    button_container.setAttributeNode( button_container_style );
    data_panel.appendChild( button_container );
    */

    // add row button
    var add_row_button = document.createElement("div");
    var add_row_button_class = document.createAttribute("class");
    add_row_button_class.value = "js-chart-builder-button-elem";
    add_row_button.setAttributeNode( add_row_button_class );
    //add_row_button_style.value = "flex: 1 1 auto; width: 100px; background-color: ForestGreen;";
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        var add_row_button_title = document.createAttribute("title");
        add_row_button_title.value = "Add more data rows";
        add_row_button.setAttributeNode( add_row_button_title );
            var add_row_button_style = document.createAttribute("style");
        add_row_button_style.value = "width: 150px; background-color: ForestGreen; margin: 10px 0px 10px 0px;";
        add_row_button.setAttributeNode( add_row_button_style );
        add_row_button.addEventListener("click", function () {

            // determine how many outer containers there are
            var cat_outer_count = document.getElementsByClassName("js-chart-builder-categorical-container").length;

            // add an input data container for categorical data (js-values)
            var add_input_values = jsChartBuilderAddInputData_Categorical(data_panel, (cat_outer_count), IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries, BUILDER_DEFAULTS.data.categorical.data[0].title, BUILDER_DEFAULTS.data.categorical.data[0].data.join(", "), true);

            // also add the values to the preview chart
            var preview_values = document.createElement("div");
            var preview_values_class = document.createAttribute("class");
            preview_values_class.value = "js-values";
            preview_values.setAttributeNode( preview_values_class );
            var preview_values_title = document.createAttribute("title");
            preview_values_title.value = BUILDER_DEFAULTS.data.categorical.data[0].title;
            preview_values.setAttributeNode( preview_values_title );
            preview_values.innerText = BUILDER_DEFAULTS.data.categorical.data[0].data.join(", ");
            document.getElementsByClassName("js-chart")[0].appendChild( preview_values );

            var pop_msg = jsChartBuilderPopMessage("Data series added.")

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        }, false);
        add_row_button.addEventListener("mousedown", function () {
            this.style.fontWeight = 200;
        }, false);
        add_row_button.addEventListener("mouseup", function () {
            this.style.fontWeight = 400;
        }, false);
    } else {
        var add_row_button_title = document.createAttribute("title");
        add_row_button_title.value = "Available for charts that support multi-series data sets only.";
        add_row_button.setAttributeNode( add_row_button_title );
            var add_row_button_style = document.createAttribute("style");
        add_row_button_style.value = "width: 150px; background-color: ForestGreen; margin: 10px 0px 10px 0px; opacity: 0.5; cursor: not-allowed;";
        add_row_button.setAttributeNode( add_row_button_style );
    }
    add_row_button.innerText = "+More Rows";
    data_panel.appendChild( add_row_button );

    // update values button
    /*
    var update_button = document.createElement("div");
    var update_button_class = document.createAttribute("class");
    update_button_class.value = "js-chart-builder-button-elem";
    update_button.setAttributeNode( update_button_class );
    var update_button_title = document.createAttribute("title");
    update_button_title.value = "Update the data values of the preview chart";
    update_button.setAttributeNode( update_button_title );
    var update_button_style = document.createAttribute("style");
    update_button_style.value = "flex: 1 1 auto; width: calc(100% - 100px);";
    update_button.setAttributeNode( update_button_style );
    update_button.innerText = "Update Chart Data";
    update_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    update_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    button_container.appendChild( update_button );
    */

    return true;
}
// add the input data value container
function jsChartBuilderPopulateInputData(data_panel, data_type, chart_type) {

    switch (data_type) {

        // frequency
        case "frequency":
            var populate_input_data = jsChartBuilderPopulateInputData_Frequency(data_panel, chart_type);
            break;

        // range
        case "range":
            var populate_input_data = jsChartBuilderPopulateInputData_Range(data_panel, chart_type);
            break;

        // cumulative
        case "cumulative":
            var populate_input_data = jsChartBuilderPopulateInputData_Cumulative(data_panel, chart_type);
            break;

        // points
        case "points":
            var populate_input_data = jsChartBuilderPopulateInputData_Points(data_panel, chart_type);
            break;
        
        // ohlc
        case "ohlc":
            var populate_input_data = jsChartBuilderPopulateInputData_OHLC(data_panel, chart_type);
            break;

        // default -- categorical
        default:
            var populate_input_data = jsChartBuilderPopulateInputData_Categorical(data_panel, chart_type);
            break;
    }

    return true;
}
// add the preview chart
function jsChartBuilderPopulatePreviewChart(preview_panel, chart_type, template_name) {

    for (var tt = (preview_panel.children.length-1); tt >= 0; tt--) {
        preview_panel.children[tt].remove();
    }

    var css_found = false;
    for (const [ikey, ivalue] of Object.entries(document.styleSheets)) {
        if (ivalue.href != null) {
            if (ivalue.href.indexOf( IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_group ) > -1) {
                css_found = true;
            }
        }
    }

    if (!css_found) {

        // css link
        var link_elem = document.createElement("link");
        var link_elem_href = document.createAttribute("href");
        link_elem_href.value = ("css/js-chart-" + IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_group + ".css");
        link_elem.setAttributeNode( link_elem_href );
        var link_elem_rel = document.createAttribute("rel");
        link_elem_rel.value = "stylesheet";
        link_elem.setAttributeNode( link_elem_rel );
        document.head.appendChild( link_elem );

        // js script
        var script_elem = document.createElement("script");
        var script_elem__type = document.createAttribute("type");
        script_elem__type.value = "text/javascript";
        script_elem.setAttributeNode( script_elem__type );
        var script_elem_src = document.createAttribute("src");
        script_elem_src.value = ("js/js-chart-" + IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_group + ".js");
        script_elem.setAttributeNode( script_elem_src );
        document.head.appendChild( script_elem );

    }

    var preview_chart = document.createElement("div");
    preview_chart.id = "js-chart-builder-preview";
    var preview_chart_class = document.createAttribute("class");
    preview_chart_class.value = "js-chart";
    preview_chart.setAttributeNode( preview_chart_class );
    var preview_chart_type = document.createAttribute("type");
    preview_chart_type.value = chart_type;
    preview_chart.setAttributeNode( preview_chart_type );
    var preview_chart_title = document.createAttribute("title");
    preview_chart_title.value = BUILDER_DEFAULTS.data[ IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_type ].chart_title;
    preview_chart.setAttributeNode( preview_chart_title );
    var preview_chart_template = document.createAttribute("template");
    preview_chart_template.value = template_name;
    preview_chart.setAttributeNode( preview_chart_template );
    var preview_chart_showlegend = document.createAttribute("showlegend");
    preview_chart_showlegend.value = IDEFAULT_CHART_ATTRIBUTES["showlegend"].default;
    preview_chart.setAttributeNode( preview_chart_showlegend );
    var preview_chart_showcontrols = document.createAttribute("showcontrols");
    preview_chart_showcontrols.value = "off"
    preview_chart.setAttributeNode( preview_chart_showcontrols );

    if (chart_type == "bubble") {
        var preview_chart_showlabels = document.createAttribute("showlabels");
        preview_chart_showlabels.value = "off"
        preview_chart.setAttributeNode( preview_chart_showlabels );
    }

    preview_panel.appendChild( preview_chart );

    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        var loop_count = 3;
    } else {
        var loop_count = 1;
    }

    // add input data containers
    switch(IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_type) {
        // categorical
        case "categorical":
            // add the preview labels
            var preview_labels = document.createElement("div");
            var preview_labels_class = document.createAttribute("class");
            preview_labels_class.value = "js-labels";
            preview_labels.setAttributeNode( preview_labels_class );
            preview_labels.innerText = "Furniture, Groceries, Electronics, Toys, Clothing";
            preview_chart.appendChild( preview_labels );

            for (var tt = 0; tt < loop_count; tt++) {

                // add the preview values
                var preview_values = document.createElement("div");
                var preview_values_class = document.createAttribute("class");
                preview_values_class.value = "js-values";
                preview_values.setAttributeNode( preview_values_class );
                var preview_values_title = document.createAttribute("title");
                preview_values_title.value = BUILDER_DEFAULTS.data.categorical.data[tt].title;
                preview_values.setAttributeNode( preview_values_title );
                preview_values.innerText = BUILDER_DEFAULTS.data.categorical.data[tt].data.join(", ");
                preview_chart.appendChild( preview_values );

            }

            break;
        
        // frequency
        case "frequency":

            // input values container
            var preview_values = document.createElement("div");
            var preview_values_class = document.createAttribute("class");
            preview_values_class.value = "js-values";
            preview_values.setAttributeNode( preview_values_class );
            preview_values.innerText = BUILDER_DEFAULTS.data.frequency.data.join(", ");
            preview_chart.appendChild( preview_values );

            break;
        
        // cumulative
        case "cumulative":

            // labels
            var preview_labels = document.createElement("div");
            var preview_labels_class = document.createAttribute("class");
            preview_labels_class.value = "js-labels";
            preview_labels.setAttributeNode( preview_labels_class );
            preview_labels.innerText = BUILDER_DEFAULTS.data.cumulative.labels;
            preview_chart.appendChild( preview_labels );

            // values
            var preview_values = document.createElement("div");
            var preview_values_class = document.createAttribute("class");
            preview_values_class.value = "js-values";
            preview_values.setAttributeNode( preview_values_class );
            var preview_values_title = document.createAttribute("title");
            preview_values_title.value = BUILDER_DEFAULTS.data.cumulative.data.title;
            preview_values.setAttributeNode( preview_values_title );
            preview_values.innerText = BUILDER_DEFAULTS.data.cumulative.data.data;
            preview_chart.appendChild( preview_values );

            break;
        
        // ohlc
        case "ohlc":

            var preview_labels = document.createElement("div");
            var preview_labels_class = document.createAttribute("class");
            preview_labels_class.value = "js-labels";
            preview_labels.setAttributeNode( preview_labels_class );
            preview_labels.innerText = BUILDER_DEFAULTS.data.ohlc.data.labels.join(", ");
            preview_chart.appendChild( preview_labels );

            var preview_open = document.createElement("div");
            var preview_open_class = document.createAttribute("class");
            preview_open_class.value = "js-open";
            preview_open.setAttributeNode( preview_open_class );
            preview_open.innerText = BUILDER_DEFAULTS.data.ohlc.data.open.join(", ");
            preview_chart.appendChild( preview_open );

            var preview_high = document.createElement("div");
            var preview_high_class = document.createAttribute("class");
            preview_high_class.value = "js-high";
            preview_high.setAttributeNode( preview_high_class );
            preview_high.innerText = BUILDER_DEFAULTS.data.ohlc.data.high.join(", ");
            preview_chart.appendChild( preview_high );

            var preview_low = document.createElement("div");
            var preview_low_class = document.createAttribute("class");
            preview_low_class.value = "js-low";
            preview_low.setAttributeNode( preview_low_class );
            preview_low.innerText = BUILDER_DEFAULTS.data.ohlc.data.low.join(", ");
            preview_chart.appendChild( preview_low );

            var preview_close = document.createElement("div");
            var preview_close_class = document.createAttribute("class");
            preview_close_class.value = "js-close";
            preview_close.setAttributeNode( preview_close_class );
            preview_close.innerText = BUILDER_DEFAULTS.data.ohlc.data.close.join(", ");
            preview_chart.appendChild( preview_close );

            break;
    }

    if (chart_type == "bubble") {

        var preview_values = document.createElement("div");
        var preview_values_class = document.createAttribute("class");
        preview_values_class.value = "js-marker-width";
        preview_values.setAttributeNode( preview_values_class );
        preview_values.innerText = "auto";
        preview_chart.appendChild( preview_values );

        var preview_values = document.createElement("div");
        var preview_values_class = document.createAttribute("class");
        preview_values_class.value = "js-marker-height";
        preview_values.setAttributeNode( preview_values_class );
        preview_values.innerText = "auto";
        preview_chart.appendChild( preview_values );

    }

    return true;
}
// populate the style directives content panel
function jsChartBuilderPopulateStyleDirectives(style_directives_content_panel, template_name, chart_type) {

    for (var tt = (style_directives_content_panel.children.length-1); tt >= 0; tt--) {
        style_directives_content_panel.children[tt].remove();
    }

    // headers
    var heading_label = document.createElement("div");
    var heading_label_class = document.createAttribute("class");
    heading_label_class.value = "js-chart-builder-directives-heading";
    heading_label.setAttributeNode( heading_label_class );
    heading_label.innerText = "Directive";
    style_directives_content_panel.appendChild( heading_label );

    // headers
    var heading_label = document.createElement("div");
    var heading_label_class = document.createAttribute("class");
    heading_label_class.value = "js-chart-builder-directives-heading";
    heading_label.setAttributeNode( heading_label_class );
    style_directives_content_panel.appendChild( heading_label );

    // headers
    var heading_label = document.createElement("div");
    var heading_label_class = document.createAttribute("class");
    heading_label_class.value = "js-chart-builder-directives-heading";
    heading_label.setAttributeNode( heading_label_class );
    heading_label.innerText = "Customize Value";
    style_directives_content_panel.appendChild( heading_label );

    for (var tt = 0; tt < IDEFAULT_DESIGN_TEMPLATES.length; tt++) {
        if(IDEFAULT_DESIGN_TEMPLATES[tt]["name"] == template_name) {
            for (const [ikey, ivalue] of Object.entries(IDEFAULT_DESIGN_TEMPLATES[tt])) {
                if ( ["name", "description"].indexOf( ikey ) == -1) {

                    // add label
                    var option_label = document.createElement("div");
                    var option_label_class = document.createAttribute("class");
                    option_label_class.value = "js-chart-builder-option-label";
                    option_label.setAttributeNode( option_label_class );
                    var option_label_title = document.createAttribute("title");
                    option_label_title.value = ikey;
                    option_label.setAttributeNode( option_label_title );
                    option_label.innerText = ikey + ":";
                    style_directives_content_panel.appendChild( option_label );

                    // add input control
                    var option_checkbox = document.createElement("input");
                    option_checkbox.id = "checkbox_" + ikey;
                    var option_checkbox_type = document.createAttribute("type");
                    option_checkbox_type.value = "CHECKBOX";
                    option_checkbox.setAttributeNode( option_checkbox_type );
                    option_checkbox.addEventListener("change", function () {
                        // check if the input control is disabled or not
                        //if (document.getElementById(ikey).getAttribute("disabled") == null) {
                        //if (!document.getElementById("checkbox_" + ivalue).checked) {

                        if (!document.getElementById("checkbox_" + ikey).checked) {
                            var disabled_attr = document.createAttribute("disabled");
                            disabled_attr.value = "disabled";
                            document.getElementById(ikey).setAttributeNode( disabled_attr );
                        } else {
                            document.getElementById(ikey).removeAttribute("disabled");
                            document.getElementById(ikey).focus();
                        }

                        var this_preview_chart = document.getElementsByClassName("js-chart")[0];
                        var get_attr = this_preview_chart.getElementsByClassName("js-" + (ikey.replaceAll("_", "-")));
                        // add directive
                        if (get_attr.length == 0) {

                            var directive = document.createElement("div");
                            var directive_class = document.createAttribute("class");
                            directive_class.value = "js-" + (ikey.replaceAll("_", "-"));
                            directive.setAttributeNode( directive_class );
                            directive.innerText = ivalue;
                            this_preview_chart.appendChild( directive );

                        }
                    }, false);
                    style_directives_content_panel.appendChild( option_checkbox );

                    // add input control
                    var option_control = document.createElement("input");
                    option_control.id = ikey;
                    var option_control_type = document.createAttribute("type");
                    option_control_type.value = "TEXT";
                    option_control.setAttributeNode( option_control_type );
                    var option_control_disabled = document.createAttribute("disabled");
                    option_control_disabled.value = "disabled";
                    option_control.setAttributeNode( option_control_disabled );
                    if ((chart_type == "bubble") && (ikey == "marker_width")) {
                        option_control.value = "auto";
                    } else if ((chart_type == "bubble") && (ikey == "marker_height")) {
                        option_control.value = "auto";
                    } else if ((chart_type == "bubble") && (ikey == "marker_height")) {
                        option_control.value = "auto";
                    } else {
                        option_control.value = ivalue;
                    }
                    option_control.addEventListener("change", function () {
                        var this_preview_chart = document.getElementsByClassName("js-chart")[0];
                        var this_attr = this_preview_chart.getElementsByClassName("js-" + (ikey.replaceAll("_", "-")));

                        this_attr[0].innerText = this.value;

                        setTimeout(initChart, 100, null, "js-chart-builder-preview");
                    }, false);
                    option_control.addEventListener("focus", function () {
                        this.select();
                    }, false);
                    style_directives_content_panel.appendChild( option_control );

                }
            }
        }
    }

    return true;
}
// populate the chart attributes content panel
function jsChartBuilderPopulateChartAttributes(chart_attributes_content_panel, chart_type) {

    for (var tt = (chart_attributes_content_panel.children.length-1); tt >= 0; tt--) {
        chart_attributes_content_panel.children[tt].remove();
    }

    // headers
    var heading_label = document.createElement("div");
    var heading_label_class = document.createAttribute("class");
    heading_label_class.value = "js-chart-builder-directives-heading";
    heading_label.setAttributeNode( heading_label_class );
    heading_label.innerText = "Attribute";
    chart_attributes_content_panel.appendChild( heading_label );

    // headers
    var heading_label = document.createElement("div");
    var heading_label_class = document.createAttribute("class");
    heading_label_class.value = "js-chart-builder-directives-heading";
    heading_label.setAttributeNode( heading_label_class );
    chart_attributes_content_panel.appendChild( heading_label );

    // headers
    var heading_label = document.createElement("div");
    var heading_label_class = document.createAttribute("class");
    heading_label_class.value = "js-chart-builder-directives-heading";
    heading_label.setAttributeNode( heading_label_class );
    heading_label.innerText = "Customize Value";
    chart_attributes_content_panel.appendChild( heading_label );

    for (const [ikey, ivalue] of Object.entries(IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ]["supported_options"])) {
        if ( ["class", "type", "version", "template"].indexOf(ivalue) == -1) {

            // add label
            var option_label = document.createElement("div");
            var option_label_class = document.createAttribute("class");
            option_label_class.value = "js-chart-builder-option-label";
            option_label.setAttributeNode( option_label_class );
            var option_label_title = document.createAttribute("title");
            option_label_title.value = ivalue;
            option_label.setAttributeNode( option_label_title );
            option_label.innerText = ivalue + ":";
            chart_attributes_content_panel.appendChild( option_label );

            // add checkbox
            var option_checkbox = document.createElement("input");
            option_checkbox.id = "checkbox_" + ivalue;
            var option_checkbox_type = document.createAttribute("type");
            option_checkbox_type.value = "CHECKBOX";
            option_checkbox.setAttributeNode( option_checkbox_type );
            //if (["title"].indexOf( ivalue ) > -1) {
            //    var option_checkbox_checked = document.createAttribute("checked");
            //    option_checkbox_checked.value = "checked";
            //    option_checkbox.setAttributeNode( option_checkbox_checked );
            //}
            option_checkbox.addEventListener("change", function () {

                var this_attr = document.getElementById("js-chart-attr-" + (ivalue.replaceAll("_", "-")));
                //if (this_attr.getAttribute("disabled") == null) {
                if (!document.getElementById("checkbox_" + ivalue).checked) {
                    var attr_disabled = document.createAttribute("disabled");
                    attr_disabled.value = "disabled";
                    this_attr.setAttributeNode( attr_disabled );
                } else {
                    this_attr.removeAttribute("disabled");
                    this_attr.focus();
                    //document.getElementById("js-chart-attr-" + (ivalue.replaceAll("_", "-"))).focus();
                    //document.getElementById("js-chart-attr-" + (ivalue.replaceAll("_", "-"))).select();
                }

                var preview_chart = document.getElementsByClassName("js-chart")[0];
                preview_chart.setAttribute(ivalue, this_attr.value);

            }, false);
            chart_attributes_content_panel.appendChild( option_checkbox );

            // add input control
            var option_control = document.createElement("input");
            option_control.id = "js-chart-attr-" + (ivalue.replaceAll("_", "-"));
            var option_control_type = document.createAttribute("type");
            option_control_type.value = "TEXT";
            option_control.setAttributeNode( option_control_type );
            var option_control_disabled = document.createAttribute("disabled");
            option_control_disabled.value = "disabled";
            option_control.setAttributeNode( option_control_disabled );
            //option_control.value = IDEFAULT_CHART_ATTRIBUTES[ ivalue ].default;
            if (ivalue == "title") {
                option_control.value = BUILDER_DEFAULTS.data[ IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_type ].chart_title;
            } else if ((chart_type == "bubble") && (ivalue == "showlabels")) {
                option_control.value = "off";
            } else {
                option_control.value = IDEFAULT_CHART_ATTRIBUTES[ ivalue ].default;
            }
            option_control.addEventListener("change", function () {
                var preview_chart = document.getElementsByClassName("js-chart")[0];
                preview_chart.setAttribute(ivalue, this.value);
                setTimeout(initChart, 100, null, "js-chart-builder-preview");
            }, false);
            option_control.addEventListener("focus", function () {
                this.select();
            }, false);
            chart_attributes_content_panel.appendChild( option_control );

        }
    }

    return true;
}
// toggle between the chart attr and style directives content panels
function jsChartBuilderToggleContentPanels(label) {
    if (label == "chart attributes") {
        document.getElementsByClassName("js-chart-builder-style-directives-content-panel")[0].style.height = "0px";
        document.getElementsByClassName("js-chart-builder-chart-attr-content-panel")[0].style.height = "100%";
    } else {
        document.getElementsByClassName("js-chart-builder-chart-attr-content-panel")[0].style.height = "0px";
        document.getElementsByClassName("js-chart-builder-style-directives-content-panel")[0].style.height = "100%";
    }

    return true;
}
// close the builder main window
function jsChartBuilderClose() {
    
    var this_builder = document.getElementsByClassName("js-chart-builder");
    if (this_builder.length == 1) {
        if (confirm("Are you sure you want to close builder?\n\nAll changes will be lost.")) {
            this_builder[0].remove();
        }

        return true;
    } else {
        return false;
    }
}
// open the builder main window
function jsChartBuilderOpen() {

    // build the main builder window
    var builder_panel = document.createElement("div");
    var builder_panel_class = document.createAttribute("class");
    builder_panel_class.value = "js-chart-builder";
    builder_panel.setAttributeNode( builder_panel_class );
    document.body.appendChild( builder_panel );

    // main left column
    var left_column_panel = document.createElement("div");
    var left_column_panel_class = document.createAttribute("class");
    left_column_panel_class.value = "js-chart-builder-left-column-panel";
    left_column_panel.setAttributeNode( left_column_panel_class );
    builder_panel.appendChild( left_column_panel );

    // heading panel
    var heading_panel = document.createElement("div");
    var heading_panel_class = document.createAttribute("class");
    heading_panel_class.value = "js-chart-builder-heading-panel";
    heading_panel.setAttributeNode( heading_panel_class );
    //heading_panel.innerText = "js-chart Builder";
    left_column_panel.appendChild( heading_panel );

    // close button
    var close_button = document.createElement("div");
    var close_button_class = document.createAttribute("class");
    close_button_class.value = "js-chart-builder-close-button";
    close_button.setAttributeNode( close_button_class );
    var close_button_title = document.createAttribute("title");
    close_button_title.value = "Close window";
    close_button.setAttributeNode( close_button_title );
    close_button.innerText = "X";
    close_button.addEventListener("click", function () {
        var toggle_window = jsChartBuilderClose();
    }, false);
    close_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#ffffe6";
    }, false);
    close_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = "White";
    }, false);
    close_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    close_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 600;
    }, false);
    heading_panel.appendChild( close_button );

    // page title
    var page_title = document.createElement("div");
    var page_title_class = document.createAttribute("class");
    page_title_class.value = "js-chart-builder-page-title";
    page_title.setAttributeNode( page_title_class );
    page_title.innerText = "js-chart builder";
    heading_panel.appendChild( page_title );
    

    // heading panel
    /*
    var heading_panel = document.createElement("div");
    var heading_panel_class = document.createAttribute("class");
    heading_panel_class.value = "js-chart-builder-heading-panel";
    heading_panel.setAttributeNode( heading_panel_class );
    heading_panel.innerText = "js-chart Builder";
    left_column_panel.appendChild( heading_panel );
    */

    // button panel
    var button_panel = document.createElement("div");
    var button_panel_class = document.createAttribute("class");
    button_panel_class.value = "js-chart-builder-button-panel";
    button_panel.setAttributeNode( button_panel_class );
    left_column_panel.appendChild( button_panel );

    // button label panel
    var button_label_panel = document.createElement("div");
    var button_label_panel_class = document.createAttribute("class");
    button_label_panel_class.value = "js-chart-builder-button-label-panel";
    button_label_panel.setAttributeNode( button_label_panel_class );
    button_label_panel.innerText = "Export:";
    button_panel.appendChild( button_label_panel );

    // add export all button
    var button_elem = document.createElement("div");
    var button_elem_class = document.createAttribute("class");
    button_elem_class.value = "js-chart-builder-button-elem";
    button_elem.setAttributeNode( button_elem_class );
    var button_elem_title = document.createAttribute("title");
    button_elem_title.value = "Export all HTML code for this chart.";
    button_elem.setAttributeNode( button_elem_title );
    button_elem.innerText = "All";
    button_elem.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    button_elem.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    button_panel.appendChild( button_elem );

    // add export style directives button
    var button_elem = document.createElement("div");
    var button_elem_class = document.createAttribute("class");
    button_elem_class.value = "js-chart-builder-button-elem";
    button_elem.setAttributeNode( button_elem_class );
    var button_elem_title = document.createAttribute("title");
    button_elem_title.value = "Export the style directives.";
    button_elem.setAttributeNode( button_elem_title );
    button_elem.innerText = "Style Directives";
    button_elem.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    button_elem.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    button_panel.appendChild( button_elem );

    // add export data only button
    var button_elem = document.createElement("div");
    var button_elem_class = document.createAttribute("class");
    button_elem_class.value = "js-chart-builder-button-elem";
    button_elem.setAttributeNode( button_elem_class );
    var button_elem_title = document.createAttribute("title");
    button_elem_title.value = "Export the input data elements.";
    button_elem.setAttributeNode( button_elem_title );
    button_elem.innerText = "Input Data";
    button_elem.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    button_elem.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    button_panel.appendChild( button_elem );

    // add reset button
    var button_elem = document.createElement("div");
    var button_elem_class = document.createAttribute("class");
    button_elem_class.value = "js-chart-builder-button-elem";
    button_elem.setAttributeNode( button_elem_class );
    var button_elem_style = document.createAttribute("style");
    button_elem_style.value = "background-color: SteelBlue;";
    button_elem.setAttributeNode( button_elem_style );
    var button_elem_title = document.createAttribute("title");
    button_elem_title.value = "Reset Builder and start over.";
    button_elem.setAttributeNode( button_elem_title );
    button_elem.innerText = "Reset";
    button_elem.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    button_elem.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    button_elem.addEventListener("click", function () {
        if (confirm("Reset window -- all changes will be lost.\nAre you sure?")) {
            document.getElementsByClassName("js-chart-builder")[0].remove();
            setTimeout(function () {
                jsChartBuilderOpen();
                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
            }, 100);
        }
    }, false);
    button_elem.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(207, 44%, 39%)";
    }, false);
    button_elem.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(207, 44%, 49%)";
    }, false);
    button_panel.appendChild( button_elem );

    // add help button
    var button_elem = document.createElement("div");
    var button_elem_class = document.createAttribute("class");
    button_elem_class.value = "js-chart-builder-button-elem";
    button_elem.setAttributeNode( button_elem_class );
    var button_elem_style = document.createAttribute("style");
    button_elem_style.value = "background-color: SteelBlue;";
    button_elem.setAttributeNode( button_elem_style );
    var button_elem_title = document.createAttribute("title");
    button_elem_title.value = "Show the help screen.";
    button_elem.setAttributeNode( button_elem_title );
    button_elem.innerText = "Help";
    button_elem.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    button_elem.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    button_elem.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(207, 44%, 39%)";
    }, false);
    button_elem.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(207, 44%, 49%)";
    }, false);
    button_panel.appendChild( button_elem );

    // dropdown panel
    var dropdown_panel = document.createElement("div");
    var dropdown_panel_class = document.createAttribute("class");
    dropdown_panel_class.value = "js-chart-builder-dropdown-panel";
    dropdown_panel.setAttributeNode( dropdown_panel_class );
    left_column_panel.appendChild( dropdown_panel );

    // chart type drop down
    var chart_dropdown = document.createElement("select");
    chart_dropdown.id = "js-chart-builder-dropdown-chart-type";
    var chart_dropdown_class = document.createAttribute("class");
    chart_dropdown_class.value = "js-chart-builder-dropdown-select";
    chart_dropdown.setAttributeNode( chart_dropdown_class );
    chart_dropdown.addEventListener("change", function () {
        var chart_value_split = this.value.split("--");
        var chart_type_name = chart_value_split[0].trim();
        var chart_type_desc = chart_value_split[1].trim();

        // var preview_chart = document.getElementsByClassName("js-chart")[0];
        // preview_chart.setAttribute("type", chart_type_name);

        var css_found = false;
        for (var tt = 0; tt < document.styleSheets.length; tt++) {
            if (document.styleSheets[tt].href != null) {
                if (document.styleSheets[tt].href.indexOf( IDEFAULT_CHART_TYPE_OPTIONS[ chart_type_name ].chart_group ) > -1) {
                    css_found = true;
                }
            }
        }

        if (!css_found) {

            // css link
            var link_elem = document.createElement("link");
            var link_elem_href = document.createAttribute("href");
            link_elem_href.value = ("css/js-chart-" + IDEFAULT_CHART_TYPE_OPTIONS[ chart_type_name ].chart_group + ".css");
            link_elem.setAttributeNode( link_elem_href );
            var link_elem_rel = document.createAttribute("rel");
            link_elem_rel.value = "stylesheet";
            link_elem.setAttributeNode( link_elem_rel );
            document.head.appendChild( link_elem );

            // js script
            var script_elem = document.createElement("script");
            var script_elem__type = document.createAttribute("type");
            script_elem__type.value = "text/javascript";
            script_elem.setAttributeNode( script_elem__type );
            var script_elem_src = document.createAttribute("src");
            script_elem_src.value = ("js/js-chart-" + IDEFAULT_CHART_TYPE_OPTIONS[ chart_type_name ].chart_group + ".js");
            script_elem.setAttributeNode( script_elem_src );
            document.head.appendChild( script_elem );
        }

        var populate_chart_attributes = jsChartBuilderPopulateChartAttributes( document.getElementsByClassName("js-chart-builder-chart-attr-content-panel")[0], chart_type_name);

        var populate_style_directives = jsChartBuilderPopulateStyleDirectives( document.getElementsByClassName("js-chart-builder-style-directives-content-panel")[0], document.getElementById("js-chart-builder-dropdown-template").value, chart_type_name);

        var populate_preview_chart = jsChartBuilderPopulatePreviewChart( document.getElementsByClassName("js-chart-builder-preview-panel")[0], chart_type_name, document.getElementById("js-chart-builder-dropdown-template").value);

        var populate_input_data = jsChartBuilderPopulateInputData(document.getElementsByClassName("js-chart-builder-data-panel")[0], IDEFAULT_CHART_TYPE_OPTIONS[ chart_type_name ].data_type, chart_type_name);

        setTimeout(initChart, 100, null, "js-chart-builder-preview");

        /*
        if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type_name ].chart_group != IDEFAULT_CHART_TYPE_OPTIONS[ document.getElementsByClassName("js-chart")[0].getAttribute("type") ].chart_group) {
            if (confirm("This will reset the chart attributes to their default values.\n\nAre you sure?")) {
                var populate_chart_attributes = jsChartBuilderPopulateChartAttributes( document.getElementsByClassName("js-chart-builder-chart-attr-content-panel")[0], chart_type_name);

                var populate_style_directives = jsChartBuilderPopulateStyleDirectives( document.getElementsByClassName("js-chart-builder-style-directives-content-panel")[0], document.getElementById("js-chart-builder-dropdown-template").value);

                var populate_preview_chart = jsChartBuilderPopulatePreviewChart( document.getElementsByClassName("js-chart-builder-preview-panel")[0], chart_type_name, document.getElementById("js-chart-builder-dropdown-template").value);

                var populate_input_data = jsChartBuilderPopulateInputData(document.getElementsByClassName("js-chart-builder-data-panel")[0], IDEFAULT_CHART_TYPE_OPTIONS[ chart_type_name ].data_type, chart_type_name);

                setTimeout(initChart, 100);
            } else {
                document.getElementById("js-chart-builder-dropdown-chart-type").options[0].selected = true;
                return false;
            }
        }
        */
    }, false);
    dropdown_panel.appendChild( chart_dropdown );

    // chart type options
    for (const [ikey, ivalue] of Object.entries(IDEFAULT_CHART_TYPE_OPTIONS)) {

        var dropdown_option = document.createElement("option");
        dropdown_option.value = ikey + "  --  " + ivalue.data_type;
        dropdown_option.innerText = ikey + "  --  " + ivalue.data_type;

        if (ikey == BUILDER_DEFAULTS["chart_type"]) {
            var dropdown_option_selected = document.createAttribute("selected");
            dropdown_option_selected.value = "selected";
            dropdown_option.setAttributeNode( dropdown_option_selected );
        }

        chart_dropdown.appendChild( dropdown_option );

    }

    // style template drop down
    var template_dropdown = document.createElement("select");
    template_dropdown.id = "js-chart-builder-dropdown-template";
    var template_dropdown_class = document.createAttribute("class");
    template_dropdown_class.value = "js-chart-builder-dropdown-select";
    template_dropdown.setAttributeNode( template_dropdown_class );
    template_dropdown.addEventListener("change", function () {
        
        var populate_style_directives = jsChartBuilderPopulateStyleDirectives(document.getElementsByClassName("js-chart-builder-style-directives-content-panel")[0], this.value, chart_type);

        document.getElementsByClassName("js-chart")[0].setAttribute("template", this.value);

        setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    dropdown_panel.appendChild( template_dropdown );

    // style template options
    for (const [ikey, ivalue] of Object.entries(IDEFAULT_DESIGN_TEMPLATES)) {

        var dropdown_option = document.createElement("option");
        dropdown_option.value = ivalue.name;
        dropdown_option.innerText = ivalue.name + "  --  " + ivalue.description;
        template_dropdown.appendChild( dropdown_option );

    }

    // tabs panel
    var tabs_panel = document.createElement("div");
    var tabs_panel_class = document.createAttribute("class");
    tabs_panel_class.value = "js-chart-builder-tabs-panel";
    tabs_panel.setAttributeNode( tabs_panel_class );
    left_column_panel.appendChild( tabs_panel );

    // chart attributes tab
    var chart_attribute_tab = document.createElement("div");
    var chart_attribute_tab_class = document.createAttribute("class");
    chart_attribute_tab_class.value = "js-chart-builder-chart-attribute-tab";
    chart_attribute_tab.setAttributeNode( chart_attribute_tab_class );
    var chart_attribute_tab_style = document.createAttribute("style");
    chart_attribute_tab_style.value = "background-color: hsl(207, 44%, 39%);";
    chart_attribute_tab.setAttributeNode( chart_attribute_tab_style );
    chart_attribute_tab.innerText = "Chart Attributes";
    chart_attribute_tab.addEventListener("click", function () {
        this.style.backgroundColor = "hsl(207, 44%, 39%)";
        var toggle_tabs = jsChartBuilderToggleContentPanels("chart attributes");
        document.getElementsByClassName("js-chart-builder-style-directives-tab")[0].style.backgroundColor = "hsl(207, 44%, 49%)";
    }, false);
    chart_attribute_tab.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    chart_attribute_tab.addEventListener("mouseup", function () {
        this.style.fontWeight = 500;
    }, false);
    tabs_panel.appendChild( chart_attribute_tab );

    // style directives tab
    var style_directives_tab = document.createElement("div");
    var style_directives_tab_class = document.createAttribute("class");
    style_directives_tab_class.value = "js-chart-builder-style-directives-tab";
    style_directives_tab.setAttributeNode( style_directives_tab_class );
    style_directives_tab.innerText = "Style Directives";
    style_directives_tab.addEventListener("click", function () {
        var toggle_tabs = jsChartBuilderToggleContentPanels("style directives");
        this.style.backgroundColor = "hsl(207, 44%, 39%)";
        document.getElementsByClassName("js-chart-builder-chart-attribute-tab")[0].style.backgroundColor = "hsl(207, 44%, 49%)";
    }, false);
    style_directives_tab.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    style_directives_tab.addEventListener("mouseup", function () {
        this.style.fontWeight = 500;
    }, false);
    tabs_panel.appendChild( style_directives_tab );

    // content panel
    var content_panel = document.createElement("div");
    var content_panel_class = document.createAttribute("class");
    content_panel_class.value = "js-chart-builder-content-panel";
    content_panel.setAttributeNode( content_panel_class );
    left_column_panel.appendChild( content_panel );

    // chart attributes content panel
    var chart_attributes_content_panel = document.createElement("div");
    var chart_attributes_content_panel_class = document.createAttribute("class");
    chart_attributes_content_panel_class.value = "js-chart-builder-chart-attr-content-panel";
    chart_attributes_content_panel.setAttributeNode( chart_attributes_content_panel_class );
    content_panel.appendChild( chart_attributes_content_panel );

    var populate_chart_attributes = jsChartBuilderPopulateChartAttributes(chart_attributes_content_panel, BUILDER_DEFAULTS["chart_type"]);

    // style directives content panel
    var style_directives_content_panel = document.createElement("div");
    var style_directives_content_panel_class = document.createAttribute("class");
    style_directives_content_panel_class.value = "js-chart-builder-style-directives-content-panel";
    style_directives_content_panel.setAttributeNode( style_directives_content_panel_class );
    content_panel.appendChild( style_directives_content_panel );

    var populate_style_directives = jsChartBuilderPopulateStyleDirectives(style_directives_content_panel, BUILDER_DEFAULTS.template_name, BUILDER_DEFAULTS["chart_type"]);

    // main right column
    var right_column_panel = document.createElement("div");
    var right_column_panel_class = document.createAttribute("class");
    right_column_panel_class.value = "js-chart-builder-right-column-panel";
    right_column_panel.setAttributeNode( right_column_panel_class );
    builder_panel.appendChild( right_column_panel );

    // preview panel
    var preview_panel = document.createElement("div");
    var preview_panel_class = document.createAttribute("class");
    preview_panel_class.value = "js-chart-builder-preview-panel";
    preview_panel.setAttributeNode( preview_panel_class );
    right_column_panel.appendChild( preview_panel );

    // add the preview chart
    var draw_preview_chart = jsChartBuilderPopulatePreviewChart(preview_panel, BUILDER_DEFAULTS.chart_type, IDEFAULT_CHART_ATTRIBUTES["template"].default);

    // data panel
    var data_panel = document.createElement("div");
    var data_panel_class = document.createAttribute("class");
    data_panel_class.value = "js-chart-builder-data-panel";
    data_panel.setAttributeNode( data_panel_class );
    right_column_panel.appendChild( data_panel );

    // add the data value container
    var populate_data = jsChartBuilderPopulateInputData(data_panel, IDEFAULT_CHART_TYPE_OPTIONS[ BUILDER_DEFAULTS.chart_type ].data_type, BUILDER_DEFAULTS.chart_type);

    return true;
}
// main chart builder function
function jsChartBuilder() {

    var this_builder = document.getElementsByClassName("js-chart-builder");
    if (this_builder.length == 0) {
        var start_builder = jsChartBuilderOpen();

        setTimeout(initChart, 100, null, "js-chart-builder-preview");
    }

}

setTimeout(jsChartBuilder, 200);