// 1. chart id for init chart
// 2. import of chart and directives
// 3. capture data set title with input data
// 4. add close window button
// 5. add random button next to categotical values

const BUILDER_DEFAULTS = {
    "chart_type": IDEFAULT_CHART_ATTRIBUTES["type"].default,
    "template_name": IDEFAULT_CHART_ATTRIBUTES["template"].default,
    "data": {
        "categorical": [
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
        ],
        "frequency": [
            {
                "title": "2022",
                "data": [20.666, 13.043, 4.023, 22.731, 13.363, 2.411, 22.297, 21.749, 7.863, 0.589, 13.866, 14.115, 13.411, 13.855, 20.292, 13.026, 6.272, 3.725, 20.941, 11.479, 16.574, 15.589, 6.68, 3.677, 17.003, 24.452, 18.574, 2.93, 5.849, 3.487, 8.24, 0.539, 7.196, 9.187, 22.354, 21.686, 5.142, 12.475, 16.999, 13.881, 5.73, 3.142, 20.586, 19.18, 6.828, 18.609, 24.567, 7.441, 17.291, 0.302, 23.549, 2.337, 11.06, 10.133, 12.146, 24.074, 16.622, 16.416, 8.216, 22.049, 2.458, 18.669, 17.486, 5.047, 23.028, 20.541, 0.176, 18.535, 2.899, 4.532, 3.994, 13.642, 1.52, 16.3, 8.896, 8.849, 7.181, 20.344, 22.29, 10.865, 1.467, 13.167, 0.256, 4.25, 9.293, 24.847, 1.785, 6.232, 19.634, 8.008, 13.109, 9.115, 21.981, 14.072, 16.37, 16.332, 23.126, 17.948, 10.999, 15.355]
            }
        ]
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
        //console.log( document.getElementsByClassName("js-chart-builder-categorical-container").length );
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
            //console.log( this.parentElement );
            //console.log( ivalue );

            if (this.parentElement == ivalue) {
                this.parentElement.remove();
                var preview_chart = document.getElementsByClassName("js-chart")[0];
                preview_chart.getElementsByClassName("js-values")[ikey].remove();
                var init_chart = setTimeout(initChart, 100);
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
            // console.log( ikey );
            // console.log( ivalue );
            // console.log( this.parentElement.parentElement );

            if (this.parentElement.parentElement == ivalue) {
                var preview_chart = document.getElementsByClassName("js-chart")[0]
                var preview_title = preview_chart.getElementsByClassName("js-values")[ikey];
        
                if (this.value != preview_title.getAttribute("title")) {
                    preview_title.setAttribute("title", this.value);
                }
                var init_chart = setTimeout(initChart, 100);
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
            // console.log( this.parentElement.parentElement );
            // console.log( ikey );
            // console.log( ivalue );

            if (this.parentElement.parentElement == ivalue) {
                var preview_chart = document.getElementsByClassName("js-chart")[0]
                var preview_values = preview_chart.getElementsByClassName("js-values")[ikey];
        
                if (this.value.trim() != preview_values.innerText.trim()) {
                    preview_values.innerText = this.value.trim();
                }
                var init_chart = setTimeout(initChart, 100);
                var pop_msg = jsChartBuilderPopMessage("Data values updated.");
            }
        }

        /*
        console.log( this.value );
        var preview_chart = document.getElementsByClassName("js-chart")[0]
        var preview_values = preview_chart.getElementsByClassName("js-values")[index];

        if (this.value.trim() != preview_values.innerText.trim()) {
            preview_values.innerText = this.value.trim();
        }
        var init_chart = setTimeout(initChart, 100);
        var pop_msg = jsChartBuilderPopMessage("Data values updated.");
        */

    }, false);
    right_container.appendChild( data_input_title );

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
        var init_chart = setTimeout(initChart, 100);
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
        var add_input_values = jsChartBuilderAddInputData_Categorical(data_panel, tt, IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries, BUILDER_DEFAULTS.data.categorical[tt].title, BUILDER_DEFAULTS.data.categorical[tt].data.join(", "));
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
            var add_input_values = jsChartBuilderAddInputData_Categorical(data_panel, (cat_outer_count), IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries, BUILDER_DEFAULTS.data.categorical[0].title, BUILDER_DEFAULTS.data.categorical[0].data.join(", "), true);

            // also add the values to the preview chart
            var preview_values = document.createElement("div");
            var preview_values_class = document.createAttribute("class");
            preview_values_class.value = "js-values";
            preview_values.setAttributeNode( preview_values_class );
            var preview_values_title = document.createAttribute("title");
            preview_values_title.value = BUILDER_DEFAULTS.data.categorical[0].title;
            preview_values.setAttributeNode( preview_values_title );
            preview_values.innerText = BUILDER_DEFAULTS.data.categorical[0].data.join(", ");
            document.getElementsByClassName("js-chart")[0].appendChild( preview_values );

            var init_chart = setTimeout(initChart, 100);

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

    var preview_chart = document.createElement("div");
    var preview_chart_class = document.createAttribute("class");
    preview_chart_class.value = "js-chart";
    preview_chart.setAttributeNode( preview_chart_class );
    var preview_chart_type = document.createAttribute("type");
    preview_chart_type.value = chart_type;
    preview_chart.setAttributeNode( preview_chart_type );
    var preview_chart_template = document.createAttribute("template");
    preview_chart_template.value = template_name;
    preview_chart.setAttributeNode( preview_chart_template );
    var preview_chart_showlegend = document.createAttribute("showlegend");
    preview_chart_showlegend.value = IDEFAULT_CHART_ATTRIBUTES["showlegend"].default;
    preview_chart.setAttributeNode( preview_chart_showlegend );
    var preview_chart_showcontrols = document.createAttribute("showcontrols");
    //preview_chart_showcontrols.value = IDEFAULT_CHART_ATTRIBUTES["showcontrols"].default;
    //preview_chart_showcontrols.value = IDEFAULT_CHART_ATTRIBUTES["showcontrols"].default;
    preview_chart_showcontrols.value = "off"
    preview_chart.setAttributeNode( preview_chart_showcontrols );
    preview_panel.appendChild( preview_chart );

    // add the preview labels
    var preview_labels = document.createElement("div");
    var preview_labels_class = document.createAttribute("class");
    preview_labels_class.value = "js-labels";
    preview_labels.setAttributeNode( preview_labels_class );
    preview_labels.innerText = "Furniture, Groceries, Electronics, Toys, Clothing";
    preview_chart.appendChild( preview_labels );

    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        var loop_count = 3;
    } else {
        var loop_count = 1;
    }

    for (var tt = 0; tt < loop_count; tt++) {

        // add the preview values
        var preview_values = document.createElement("div");
        var preview_values_class = document.createAttribute("class");
        preview_values_class.value = "js-values";
        preview_values.setAttributeNode( preview_values_class );
        var preview_values_title = document.createAttribute("title");
        preview_values_title.value = BUILDER_DEFAULTS.data.categorical[tt].title;
        preview_values.setAttributeNode( preview_values_title );
        preview_values.innerText = BUILDER_DEFAULTS.data.categorical[tt].data.join(", ");
        preview_chart.appendChild( preview_values );

    }

    return true;
}
// populate the style directives content panel
function jsChartBuilderPopulateStyleDirectives(style_directives_content_panel, template_name) {

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
                        if (document.getElementById(ikey).getAttribute("disabled") == null) {
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
                    option_control.value = ivalue;
                    option_control.addEventListener("change", function () {
                        var this_preview_chart = document.getElementsByClassName("js-chart")[0];
                        var this_attr = this_preview_chart.getElementsByClassName("js-" + (ikey.replaceAll("_", "-")));

                        this_attr[0].innerText = this.value;

                        setTimeout(initChart, 200);
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
            option_checkbox.addEventListener("change", function () {

                var this_attr = document.getElementById("js-chart-attr-" + (ivalue.replaceAll("_", "-")));
                if (this_attr.getAttribute("disabled") == null) {
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
            option_control.value = IDEFAULT_CHART_ATTRIBUTES[ ivalue ].default;
            option_control.addEventListener("change", function () {
                var preview_chart = document.getElementsByClassName("js-chart")[0];
                preview_chart.setAttribute(ivalue, this.value);
                setTimeout(initChart, 100);
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
                var init_chart = setTimeout(initChart, 100);
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

        var populate_style_directives = jsChartBuilderPopulateStyleDirectives( document.getElementsByClassName("js-chart-builder-style-directives-content-panel")[0], document.getElementById("js-chart-builder-dropdown-template").value);

        var populate_preview_chart = jsChartBuilderPopulatePreviewChart( document.getElementsByClassName("js-chart-builder-preview-panel")[0], chart_type_name, document.getElementById("js-chart-builder-dropdown-template").value);

        var populate_input_data = jsChartBuilderPopulateInputData(document.getElementsByClassName("js-chart-builder-data-panel")[0], IDEFAULT_CHART_TYPE_OPTIONS[ chart_type_name ].data_type, chart_type_name);

        setTimeout(initChart, 100);

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
        
        var populate_style_directives = jsChartBuilderPopulateStyleDirectives(document.getElementsByClassName("js-chart-builder-style-directives-content-panel")[0], this.value);

        document.getElementsByClassName("js-chart")[0].setAttribute("template", this.value);

        setTimeout(initChart, 100);

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

    var populate_style_directives = jsChartBuilderPopulateStyleDirectives(style_directives_content_panel, BUILDER_DEFAULTS.template_name);

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

        setTimeout(initChart, 200);
    }

}

setTimeout(jsChartBuilder, 200);