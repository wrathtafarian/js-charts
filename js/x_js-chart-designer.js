// handle a window resize event listener
window.addEventListener("resize", function () {
    jsChartLogErrorMessage("Window resize detected.", 1);
    jsChartDesigner();
}, false);


// populate the value input containr
function jsChartDesignerPopulateInputValues_Categorical(input_container, chart_type) {

    for (var tt = (input_container.children.length-1); tt >= 0; tt--) {
        input_container.children[tt].remove();
    }

    // data type label
    var cat_title = document.createElement("div");
    var cat_title_class = document.createAttribute("class");
    cat_title_class.value = "js-chart-designer-input-container-title";
    cat_title.setAttributeNode( cat_title_class );
    cat_title.innerText = "Categorical Data";
    input_container.appendChild( cat_title );

    // data type description
    var cat_desc = document.createElement("div");
    var cat_desc_class = document.createAttribute("class");
    cat_desc_class.value = "js-chart-designer-input-container-desc";
    cat_desc.setAttributeNode( cat_desc_class );
    cat_desc.innerHTML = "<strong>Categorical data</strong> consists of discrete values that represent different categories or groups. When visualizing categorical data, charts should emphasize comparisons between these groups rather than trends over time.";
    input_container.appendChild( cat_desc );

    /*
    // hr
    var cat_hr = document.createElement("hr");
    var cat_hr_width = document.createAttribute("width");
    cat_hr_width.value = "100%";
    cat_hr.setAttributeNode( cat_hr_width );
    var cat_hr_color = document.createAttribute("color");
    cat_hr_color.value = "#ededed";
    cat_hr.setAttributeNode( cat_hr_color );
    input_container.appendChild( cat_hr );
    */

    // chart type description
    var chart_type_desc = document.createElement("div");
    var chart_type_desc_class = document.createAttribute("class");
    chart_type_desc_class.value = "js-chart-designer-input-container-desc";
    chart_type_desc.setAttributeNode( chart_type_desc_class );
    chart_type_desc.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    input_container.appendChild( chart_type_desc );

    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        var loop_max = 5;
    } else {
        var loop_max = 1;
    }

    var label = document.createElement("div");
    var label_class = document.createAttribute("class");
    label_class.value = "js-chart-designer-input-values-label";
    label.setAttributeNode( label_class );
    label.innerHTML = "<span style=\"font-size: 12px; font-weight: bolder;\">Labels</span> (comma-separated list of text labels)";
    input_container.appendChild( label );

    var value_container = document.createElement("input");
    var value_container_type = document.createAttribute("type");
    value_container_type.value = "TEXT";
    value_container.setAttributeNode( value_container_type );
    var value_container_class = document.createAttribute("class");
    value_container_class.value = "js-chart-designer-input-values-js-values-container";
    value_container.setAttributeNode( value_container_class );
    var value_container_style = document.createAttribute("style");
    value_container_style.value = "margin: 0px 0px 0px 10px";
    value_container.setAttributeNode( value_container_style );
    value_container.value = "Product A, Product B, Product C, Product D, Product E";
    input_container.appendChild( value_container );

    for (var tt = 0; tt < loop_max; tt++) {

        var series_label = document.createElement("div");
        var series_label_class = document.createAttribute("class");
        series_label_class.value = "js-chart-designer-input-values-series-label";
        series_label.setAttributeNode( series_label_class );
        series_label.innerHTML = "Data series " + (tt + 1);
        input_container.appendChild( series_label );

        var label = document.createElement("div");
        var label_class = document.createAttribute("class");
        label_class.value = "js-chart-designer-input-values-label";
        label.setAttributeNode( label_class );
        label.innerHTML = "<span style=\"font-size: 12px; font-weight: bolder;\">Values</span> (comma-separated list of numberic values)";
        input_container.appendChild( label );

        var value_container = document.createElement("input");
        var value_container_type = document.createAttribute("type");
        value_container_type.value = "TEXT";
        value_container.setAttributeNode( value_container_type );
        var value_container_class = document.createAttribute("class");
        value_container_class.value = "js-chart-designer-input-values-js-values-container";
        value_container.setAttributeNode( value_container_class );
        var value_container_style = document.createAttribute("style");
        value_container_style.value = "margin: 0px 0px 0px 10px";
        value_container.setAttributeNode( value_container_style );
        value_container.value = "100 200, 300, 400, 500";
        input_container.appendChild( value_container );

    }

    // update preview button
    var update_preview_button = document.createElement("div");
    var update_preview_button_class = document.createAttribute("class");
    update_preview_button_class.value = "js-chart-designer-update-preview-button";
    update_preview_button.setAttributeNode( update_preview_button_class );
    update_preview_button.innerText = "Update Preview";
    update_preview_button.addEventListener("click", function () {
    }, false);
    input_container.appendChild( update_preview_button );

    return true;
}
// populate the value input containr
function jsChartDesignerPopulateInputValues(input_container, chart_type, data_type) {

    switch (data_type) {

        // categorical - default
        default:
            var populate_categorical_input_container = jsChartDesignerPopulateInputValues_Categorical(input_container, chart_type);
            break;

    }
}
// populate the chart style directives
function jsChartDesignerPopulateStyleDirectives(style_template_container, style_template) {
}
// populate the chart attributes container
function jsChartDesignerPopulateStyleTemplate(style_template_container, style_template) {

    for (const [ikey, ivalue] of Object.entries(IDEFAULT_DESIGN_TEMPLATES[0])) {

        if ( ["name", "description"].indexOf( ikey ) == -1) {

            var option_label = document.createElement("div");
            var option_label_class = document.createAttribute("class");
            option_label_class.value = "js-chart-designer-style-template-block-label";
            option_label.setAttributeNode( option_label_class );
            option_label.innerText = ikey;
            style_template_container.appendChild( option_label );

            var option_control = document.createElement("input");
            var option_control_type = document.createAttribute("type");
            option_control_type.value = "TEXT";
            option_control.setAttributeNode( option_control_type );
            var option_control_value = document.createAttribute("value");
            option_control_value.value = ivalue;
            option_control.setAttributeNode( option_control_value );
            option_control.addEventListener("change", function () { console.log( this.value + " > " + ikey ) }, false);
            style_template_container.appendChild( option_control );

        }
    }
}
// populate the chart attributes container
function jsChartDesignerPopulateChartAttributes(chart_attributes_container, chart_type) {

    for (var tt = (chart_attributes_container.children.length - 1); tt >= 0; tt--) {
        chart_attributes_container.children[tt].remove();
    }

    var get_type_attributes = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].supported_options;

    for (const [ikey, ivalue] of Object.entries(get_type_attributes)) {

        if ( ["class", "type", "jsondata", "version", "showcontrols"].indexOf( ivalue ) == -1) {

            var option_label = document.createElement("div");
            var option_label_class = document.createAttribute("class");
            option_label_class.value = "js-chart-designer-chart-attribute-block-label";
            option_label.setAttributeNode( option_label_class );
            option_label.innerText = ivalue;
            chart_attributes_container.appendChild( option_label );

            var option_control = document.createElement("input");
            var option_control_type = document.createAttribute("type");
            option_control_type.value = "TEXT";
            option_control.setAttributeNode( option_control_type );
            var option_control_value = document.createAttribute("value");
            option_control_value.value = IDEFAULT_CHART_ATTRIBUTES[ ivalue ].default;
            option_control.setAttributeNode( option_control_value );
            option_control.addEventListener("change", function () {
                var preview_chart = document.getElementsByClassName("js-chart")[0];
                var this_attr = preview_chart.getAttribute( ivalue );
                if (this_attr == null) {
                    var new_attr = document.createAttribute( ivalue );
                    new_attr.value = this.value;
                    preview_chart.setAttributeNode( new_attr )
                } else {
                    preview_chart.setAttribute( ivalue, this.value );
                }
                var init_chrt = initChart();
            }, false);
            chart_attributes_container.appendChild( option_control );

        }
    }
}



// switch to the chart attributes tab
function jsChartDesignerClickTabChartAttributes() {
    document.getElementsByClassName("js-chart-design-style-template-container")[0].style.height = "0px";
    document.getElementsByClassName("js-chart-design-style-directives-container")[0].style.height = "0px";
    document.getElementsByClassName("js-chart-design-chart-attributes-container")[0].style.height = "100%";
}
// switch to the style template tab
function jsChartDesignerClickTabStyleAttribute() {
    document.getElementsByClassName("js-chart-design-chart-attributes-container")[0].style.height = "0px";
    document.getElementsByClassName("js-chart-design-style-directives-container")[0].style.height = "0px";
    document.getElementsByClassName("js-chart-design-style-template-container")[0].style.height = "100%";
}
// switch to the style directives tab
function jsChartDesignerClickTabStyleDirectives() {
    document.getElementsByClassName("js-chart-design-chart-attributes-container")[0].style.height = "0px";
    document.getElementsByClassName("js-chart-design-style-template-container")[0].style.height = "0px";
    document.getElementsByClassName("js-chart-design-style-directives-container")[0].style.height = "100%";
}
// close the main design window
function jsChartDesignerClose() {
    document.getElementsByClassName("js-chart-designer")[0].remove();
}
// open the main design window
function jsChartDesignerOpen() {

    // doc root
    var this_designer = document.createElement("div");
    var this_designer_class = document.createAttribute("class");
    this_designer_class.value = "js-chart-designer";
    this_designer.setAttributeNode( this_designer_class );
    document.body.appendChild( this_designer );

    // left column
    var left_column = document.createElement("div");
    var left_column_class = document.createAttribute("class");
    left_column_class.value = "js-chart-design-left-column";
    left_column.setAttributeNode( left_column_class );
    this_designer.appendChild( left_column );

    // page header
    var page_title = document.createElement("div");
    var page_title_class = document.createAttribute("class");
    page_title_class.value = "js-chart-design-page-header";
    page_title.setAttributeNode( page_title_class );
    //page_title.innerText = "JS-CHART BUILDER & DESIGNER";
    left_column.appendChild( page_title );

    // close button
    var close_button = document.createElement("div");
    var close_button_class = document.createAttribute("class");
    close_button_class.value = "js-chart-design-close-button";
    close_button.setAttributeNode( close_button_class );
    var close_button_title = document.createAttribute("title");
    close_button_title.value = "Close window";
    close_button.setAttributeNode( close_button_title );
    close_button.innerText = "X";
    close_button.addEventListener("click", jsChartDesignerClose, false);
    page_title.appendChild( close_button );

    // page title
    var page_title_container = document.createElement("div");
    var page_title_container_class = document.createAttribute("class");
    page_title_container_class.value = "js-chart-design-page_title";
    page_title_container.setAttributeNode( page_title_container_class );
    page_title_container.innerText = "Chart Builder and Style Designer";
    page_title.appendChild( page_title_container );

    // button container
    var button_container = document.createElement("div");
    var button_container_class = document.createAttribute("class");
    button_container_class.value = "js-chart-design-page-button-container";
    button_container.setAttributeNode( button_container_class );
    left_column.appendChild( button_container );

    // export chart
    var export_chart_attr_button = document.createElement("div");
    var export_chart_attr_button_class = document.createAttribute("class");
    export_chart_attr_button_class.value = "js-chart-design-export-button";
    export_chart_attr_button.setAttributeNode( export_chart_attr_button_class );
    var export_chart_attr_button_title = document.createAttribute("title");
    export_chart_attr_button_title.value = "Export the code for a new chart.";
    export_chart_attr_button.setAttributeNode( export_chart_attr_button_title );
    export_chart_attr_button.innerText = "Export Chart Attr.";
    button_container.appendChild( export_chart_attr_button );

    // export style template
    var export_style_temp_button = document.createElement("div");
    var export_style_temp_button_class = document.createAttribute("class");
    export_style_temp_button_class.value = "js-chart-design-export-button";
    export_style_temp_button.setAttributeNode( export_style_temp_button_class );
    var export_style_temp_button_title = document.createAttribute("title");
    export_style_temp_button_title.value = "Export the current values as a new Style Template in JSON.";
    export_style_temp_button.setAttributeNode( export_style_temp_button_title );
    export_style_temp_button.innerText = "Export Style Template";
    button_container.appendChild( export_style_temp_button );

    // reset button
    var reset_button = document.createElement("div");
    var reset_button_class = document.createAttribute("class");
    reset_button_class.value = "js-chart-design-export-button";
    reset_button.setAttributeNode( reset_button_class );
    var reset_button_title = document.createAttribute("title");
    reset_button_title.value = "Reset all to the default values.";
    reset_button.setAttributeNode( reset_button_title );
    reset_button.innerText = "Reset";
    button_container.appendChild( reset_button );

    // dropdown container
    var dropdown_container = document.createElement("div");
    var dropdown_container_class = document.createAttribute("class");
    dropdown_container_class.value = "js-chart-design-page-dropdown-container";
    dropdown_container.setAttributeNode( dropdown_container_class );
    left_column.appendChild( dropdown_container );

    // chart type dropdown
    var chart_type_dropdown = document.createElement("select");
    var chart_type_dropdown_class = document.createAttribute("class");
    chart_type_dropdown_class.value = "js-chart-design-page-chart-type-dropdown";
    chart_type_dropdown.setAttributeNode( chart_type_dropdown_class );
    var chart_type_dropdown_title = document.createAttribute("title");
    chart_type_dropdown_title.value = "Select or change the chart type";
    chart_type_dropdown.setAttributeNode( chart_type_dropdown_title );
    chart_type_dropdown.addEventListener("change", function () {
        var preview_chart = document.getElementsByClassName("js-chart")[0];
        var chart_type_attr = preview_chart.getAttribute("type");
        var value_split = this.value.split("--");
        value_split[0] = value_split[0].trim();
        value_split[1] = value_split[1].trim();
        if (chart_type_attr == null) {
            var chart_type_attr = document.createAttribute("type");
            chart_type_attr.value = value_split[0];
            preview_chart.setAttributeNode( chart_type_attr );
        } else {
            preview_chart.setAttribute("type", value_split[0]);
        }

        // populate the chart attributes container
        var populate_chart_attributes = jsChartDesignerPopulateChartAttributes(document.getElementsByClassName("js-chart-design-chart-attributes-container")[0], value_split[0]);

        // populate the value input container
        var populate_input_container = jsChartDesignerPopulateInputValues(input_container, value_split[0], IDEFAULT_CHART_TYPE_OPTIONS[ value_split[0] ]["data_type"]);


        var css_found = false;
        for (var tt = 0; tt < document.styleSheets.length; tt++) {
            if (typeof document.styleSheets[tt].href === "string") {
                if ((document.styleSheets[tt].href != null) && (document.styleSheets[tt].href.indexOf( value_split[1] ) > -1)) {
                    css_found = value_split[1];
                }
            }
        }

        if (!css_found) {
            var link_elem = document.createElement("link");
            link_elem.href = "css/js-chart-" + IDEFAULT_CHART_TYPE_OPTIONS[ value_split[0] ]["chart_group"] + ".css";
            link_elem.rel = "stylesheet";
            link_elem.type = "text/css";
            document.head.appendChild( link_elem );
            //document.head.appendChild("<link href=\"css/js-chart-" + IDEFAULT_CHART_TYPE_OPTIONS[ value_split[1] ]["chart_group"] + ".css\" rel=\"stylesheet\" type=\"text/css\">");

            var script_elem = document.createElement("script");
            script_elem.src = "js/js-chart-" + IDEFAULT_CHART_TYPE_OPTIONS[ value_split[0] ]["chart_group"] + ".js";
            script_elem.type = "text/javascript";
            document.head.appendChild( script_elem );
            //<script type="text/javascript" src="js/js-chart-designer.js"></script>
        }

        setTimeout(initChart, 200);

    }, false);
    dropdown_container.appendChild( chart_type_dropdown );

    // chart type options
    for (const [ikey, ivalue] of Object.entries(IDEFAULT_CHART_TYPE_OPTIONS)) {
        var st_option = document.createElement("option");
        st_option.innerText = ikey + "  --  " + ivalue.data_type;
        st_option.value = ikey + "  --  " + ivalue.chart_group;
        chart_type_dropdown.appendChild( st_option );
    }

    // style template dropdown
    var style_template_dropdown = document.createElement("select");
    var style_template_dropdown_class = document.createAttribute("class");
    style_template_dropdown_class.value = "js-chart-design-page-style-template-dropdown";
    style_template_dropdown.setAttributeNode( style_template_dropdown_class );
    var style_template_dropdown_title = document.createAttribute("title");
    style_template_dropdown_title.value = "Select or change the style template";
    style_template_dropdown.setAttributeNode( style_template_dropdown_title );
    style_template_dropdown.addEventListener("change", function () {}, false);
    dropdown_container.appendChild( style_template_dropdown );

    // style template options
    for (const [ikey, ivalue] of Object.entries(IDEFAULT_DESIGN_TEMPLATES)) {
        var st_option = document.createElement("option");
        st_option.innerText = ivalue.name + " - " + ivalue.description;
        st_option.value = ivalue.name;
        style_template_dropdown.appendChild( st_option );
    }

    // tab outer container
    var tab_outer_container = document.createElement("div");
    var tab_outer_container_class = document.createAttribute("class");
    tab_outer_container_class.value = "js-chart-design-page-tab-outer-container";
    tab_outer_container.setAttributeNode( tab_outer_container_class );
    left_column.appendChild( tab_outer_container );

    // tab heading container
    var tab_header_container = document.createElement("div");
    var tab_header_container_class = document.createAttribute("class");
    tab_header_container_class.value = "js-chart-design-page-tab-header-container";
    tab_header_container.setAttributeNode( tab_header_container_class );
    tab_outer_container.appendChild( tab_header_container );

    // tab heading - chart attributes tab
    var tab_chart_attributes = document.createElement("div");
    var tab_chart_attributes_class = document.createAttribute("class");
    tab_chart_attributes_class.value = "js-chart-design-page-tab-chart-attributes";
    tab_chart_attributes.setAttributeNode( tab_chart_attributes_class );
    tab_chart_attributes.innerText = "Chart Attributes";
    tab_chart_attributes.addEventListener("click", jsChartDesignerClickTabChartAttributes, false);
    tab_header_container.appendChild( tab_chart_attributes );

    // tab heading - style template tab
    var tab_style_template = document.createElement("div");
    var tab_style_template_class = document.createAttribute("class");
    tab_style_template_class.value = "js-chart-design-page-tab-style-template";
    tab_style_template.setAttributeNode( tab_style_template_class );
    tab_style_template.innerText = "Style Template";
    tab_style_template.addEventListener("click", jsChartDesignerClickTabStyleAttribute, false);
    tab_header_container.appendChild( tab_style_template );

    // tab heading - style directives
    var tab_style_directives = document.createElement("div");
    var tab_style_directives_class = document.createAttribute("class");
    tab_style_directives_class.value = "js-chart-design-page-tab-style-directives";
    tab_style_directives.setAttributeNode( tab_style_directives_class );
    tab_style_directives.innerText = "Style Directives";
    tab_style_directives.addEventListener("click", jsChartDesignerClickTabStyleDirectives, false);
    tab_header_container.appendChild( tab_style_directives );

    // tab content container
    var tab_content_container = document.createElement("div");
    var tab_content_container_class = document.createAttribute("class");
    tab_content_container_class.value = "js-chart-design-page-tab-content-container";
    tab_content_container.setAttributeNode( tab_content_container_class );
    tab_outer_container.appendChild( tab_content_container );

    // add a dedicated tab for the chart attributes
    var chart_attributes_container = document.createElement("div");
    var chart_attributes_container_class = document.createAttribute("class");
    chart_attributes_container_class.value = "js-chart-design-chart-attributes-container";
    chart_attributes_container.setAttributeNode( chart_attributes_container_class );
    tab_content_container.appendChild( chart_attributes_container );

    // populate the chart attributes container
    var populate_chart_attributes = jsChartDesignerPopulateChartAttributes(chart_attributes_container, "pie");

    // add a dedicated tab for the style template
    var style_template_container = document.createElement("div");
    var style_template_container_class = document.createAttribute("class");
    style_template_container_class.value = "js-chart-design-style-template-container";
    style_template_container.setAttributeNode( style_template_container_class );
    tab_content_container.appendChild( style_template_container );

    // populate the chart attributes container
    var populate_chart_attributes = jsChartDesignerPopulateStyleTemplate(style_template_container, "default");

    // add a dedicated tab for the style directives
    var style_directives_container = document.createElement("div");
    var style_directives_container_class = document.createAttribute("class");
    style_directives_container_class.value = "js-chart-design-style-directives-container";
    style_directives_container.setAttributeNode( style_directives_container_class );
    tab_content_container.appendChild( style_directives_container );

    // populate the chart attributes container
    var populate_chart_attributes = jsChartDesignerPopulateStyleDirectives(style_template_container, "default");

    // right column
    var right_column = document.createElement("div");
    var right_column_class = document.createAttribute("class");
    right_column_class.value = "js-chart-design-right-column";
    right_column.setAttributeNode( right_column_class );
    this_designer.appendChild( right_column );

    // preview container
    var preview_container = document.createElement("div");
    var preview_container_class = document.createAttribute("class");
    preview_container_class.value = "js-chart-design-page-preview-container";
    preview_container.setAttributeNode( preview_container_class );
    right_column.appendChild( preview_container );

    // draw the firs preview chart
    var chart_container = document.createElement("div");
    var chart_container_class = document.createAttribute("class");
    chart_container_class.value = "js-chart";
    chart_container.setAttributeNode( chart_container_class );
    var chart_container_template = document.createAttribute("template");
    chart_container_template.value = "default"
    chart_container.setAttributeNode( chart_container_template );
    var chart_container_type = document.createAttribute("type");
    chart_container_type.value = "pie"
    chart_container.setAttributeNode( chart_container_type );
    var chart_container_showcontrols = document.createAttribute("showcontrols");
    chart_container_showcontrols.value = "off"
    chart_container.setAttributeNode( chart_container_showcontrols );
    var chart_container_showlegend = document.createAttribute("showlegend");
    chart_container_showlegend.value = "side"
    chart_container.setAttributeNode( chart_container_showlegend );
    var chart_container_showlabels = document.createAttribute("showlabels");
    chart_container_showlabels.value = "absolute";
    chart_container.setAttributeNode( chart_container_showlabels );
    var chart_container_title = document.createAttribute("title");
    chart_container_title.value = "Preview chart";
    chart_container.setAttributeNode( chart_container_title );
    preview_container.appendChild( chart_container );

    // preview value container
    var preview_value_container = document.createElement("div");
    var preview_value_container_class = document.createAttribute("class");
    preview_value_container_class.value = "js-values";
    preview_value_container.setAttributeNode( preview_value_container_class );
    preview_value_container.innerText = "100, 200, 300, 400, 500";
    chart_container.appendChild( preview_value_container );

    // preview label container
    var preview_label_container = document.createElement("div");
    var preview_label_container_class = document.createAttribute("class");
    preview_label_container_class.value = "js-labels";
    preview_label_container.setAttributeNode( preview_label_container_class );
    preview_label_container.innerText = "Product A, Product B, Product C, Product D, Product E";
    chart_container.appendChild( preview_label_container );

    // input container
    var input_container = document.createElement("div");
    var input_container_class = document.createAttribute("class");
    input_container_class.value = "js-chart-design-page-input-container";
    input_container.setAttributeNode( input_container_class );
    right_column.appendChild( input_container );

    // populate the value input containr
    var populate_input_container = jsChartDesignerPopulateInputValues(input_container, "pie", "categorical");

    return true;
}
// main function that toggles the main design window
function jsChartDesigner() {
    var this_designer = document.getElementById("js-chart-designer");
    if (!this_designer) {
        var render_designer = jsChartDesignerOpen();
    }
    setTimeout(initChart, 200);
}


setTimeout(jsChartDesigner, 500);