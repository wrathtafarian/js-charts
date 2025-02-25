// draw 100% stacked line chart
function jsChartLineDrawRelativeStackedLineChart(level2_inner_panel, i_chart, x_axis_legend_container, max_scale_value, min_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var color_index = 0;
    var total_scale = max_scale_value - (min_scale_value);

    for (var s = 0; s < i_chart.i_titles.length; s++) {
        for (var v = 0; v < (i_chart.i_labels.length-1); v++) {

            var cell_height = level2_inner_panel.children[v].clientHeight;
            var cell_width = level2_inner_panel.children[v].clientWidth;

            // var y2 = (i_chart.stacked_data[s][v+1] / i_chart.stacked_totals[v+1]["total_abs_value"]) * cell_height;
            // var y1 = (i_chart.stacked_data[s][v] / i_chart.stacked_totals[v]["total_abs_value"]) * cell_height;
            // var y = Math.abs(y2 - y1);

            p2 = (i_chart.stacked_data[s][v+1] / i_chart.stacked_totals[v+1]["total_abs_value"]);
            p1 = (i_chart.stacked_data[s][v] / i_chart.stacked_totals[v]["total_abs_value"]);

            var y2 = (1-p2) * ((max_scale_value / (max_scale_value - (min_scale_value))) * cell_height);
            var y1 = (1-p1) * ((max_scale_value / (max_scale_value - (min_scale_value))) * cell_height);

            var y = Math.abs(y2 - y1);


            var x = cell_width;
            var z = Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) );
            var asine = Math.asin(x / z);
            var ang = asine * (180/Math.PI);
            if ((y2 - y1) < 0) {
                ang = 360 - (90 - ang);
            } else {
                ang = 90 - ang;
            }

            var eleft = v * cell_width;
            var etop = (1 - p1) * ((max_scale_value / (max_scale_value - (min_scale_value))) * cell_height);

            var this_line_color = i_chart.i_design.color_palette[color_index];
            if (i_chart.i_options.showlines) {
                var this_line_thickness = i_chart.i_design.value_line_thickness;
            } else {    
                var this_line_thickness = "0px";
            }

            var box_css = `.js-chart-line-series-column-container-` + i_chart.chart_counter + `-` + (s+1) + `-` + (v+1) + `-` + (dynamic_stylesheet_rule_index+1) + `::after {
content: ''; 
position: absolute;
height: ` + this_line_thickness + `;
width: `+ z + `px;
background-color: ` + this_line_color + `;
left: 0px;
top: ` + etop + `px; 
transform: rotate(` + ang + `deg);
transform-origin: 0px 0px;
z-index: 200;
}`;

            document.styleSheets[ dynamic_stylesheet_index ].insertRule( box_css );

            var elem_title = i_chart.i_titles[s] + "\n" + i_chart.i_labels[v] + "\nStacked: " + roundNumber(i_chart.stacked_data[s][v], 2) + "\nRaw: " + i_chart.i_data[s][v];

            // draw the line box
            var box_elem = document.createElement("div");
            var box_elem_attr = document.createAttribute("style");
            box_elem_attr.value = "flex: 1 1 0px; position: relative;";
            box_elem.setAttributeNode( box_elem_attr );
            var box_elem_class = document.createAttribute("class");
            box_elem_class.value = "js-chart-line-series-column-container-" + i_chart.chart_counter + "-" + (s+1) + "-" + (v+1) + "-" + (dynamic_stylesheet_rule_index+1);
            box_elem.setAttributeNode( box_elem_class );
            level2_inner_panel.children[v].appendChild( box_elem );

            // draw markers
            if (i_chart.i_options.showmarkers) {

                var marker = document.createElement("div");
                var marker_style = document.createAttribute("style");
                marker_style.value = "position: absolute; left: calc(0px - ((" + i_chart.i_design.marker_width + " - " + this_line_thickness + ") / 2)); top: calc(" + etop + "px - ((" + i_chart.i_design.marker_width + " - " + this_line_thickness + ") / 2)); width: " + i_chart.i_design.marker_width + "; height: " + i_chart.i_design.marker_width + "; border-radius: 50%; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.marker_border + "; box-shadow: " + i_chart.i_design.marker_box_shadow + "; opacity: " + i_chart.i_design.marker_opacity + ";";
                marker.setAttributeNode( marker_style );
                var marker_title = document.createAttribute("title");
                marker_title.value = elem_title;
                marker.setAttributeNode( marker_title );
                level2_inner_panel.children[v].appendChild( marker );

            }
            // draw data labels
            if (i_chart.i_options.showlabels) {

                var datalabel = document.createElement("div");
                var datalabel_style = document.createAttribute("style");
                datalabel_style.value = "position: absolute; text-align: center; z-index: 200; left: 0px; top: " + etop + "px; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
                datalabel.setAttributeNode( datalabel_style );
                var datalabel_title = document.createAttribute("title");
                datalabel_title.value = elem_title;
                datalabel.setAttributeNode( datalabel_title );
                datalabel.innerText = roundNumber(i_chart.i_data[s][v], 2);
                level2_inner_panel.children[v].appendChild( datalabel );
            }

            // draw the x-axis legend label
            if (s == 0) {
                var x_axis_legend_label = document.createElement("div");
                var x_axis_legend_label_class = document.createAttribute("class");
                x_axis_legend_label_class.value = "js-chart-line-x-axis-legend-label";
                x_axis_legend_label.setAttributeNode( x_axis_legend_label_class );
                var x_axis_legend_label_title = document.createAttribute("title");
                x_axis_legend_label_title.value = i_chart.i_labels[v];
                x_axis_legend_label.setAttributeNode( x_axis_legend_label_title );
                var x_axis_legend_label_style = document.createAttribute("style");
                x_axis_legend_label_style.value = "width: " + cell_width + "px; left: calc(0px - (" + cell_width + "px / 2));";
                x_axis_legend_label.setAttributeNode( x_axis_legend_label_style );
                x_axis_legend_label.innerText = i_chart.i_labels[v];
                x_axis_legend_container.children[v].appendChild( x_axis_legend_label );
            }

            dynamic_stylesheet_rule_index++;

        }
        color_index++;
        if (color_index >= i_chart.i_design.color_palette.length) {
            color_index = 0;
        }
    }
    // draw markers
    if (i_chart.i_options.showmarkers) {

        var color_index = 0;
        for (var s = 0; s < i_chart.i_titles.length; s++) {

            //var etop = ((max_scale_value / total_scale) * cell_height) - ((i_chart.stacked_data[s][ (i_chart.stacked_data[s].length-1) ] / total_scale) * cell_height);
            var etop = (1 - ((i_chart.stacked_data[s][v] / i_chart.stacked_totals[v]["total_abs_value"]))) * ((max_scale_value / (max_scale_value - (min_scale_value))) * cell_height);

            var marker = document.createElement("div");
            var marker_style = document.createAttribute("style");
            marker_style.value = "position: absolute; right: calc(0px - ((" + i_chart.i_design.marker_width + " - " + this_line_thickness + ") / 2)); top: calc(" + etop + "px - ((" + i_chart.i_design.marker_width + " - " + this_line_thickness + ") / 2)); width: " + i_chart.i_design.marker_width + "; height: " + i_chart.i_design.marker_width + "; border-radius: 50%; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.marker_border + "; box-shadow: " + i_chart.i_design.marker_box_shadow + "; opacity: " + i_chart.i_design.marker_opacity + ";";
            marker.setAttributeNode( marker_style );
            var marker_title = document.createAttribute("title");
            marker_title.value = i_chart.i_titles[s] + "\n" + i_chart.i_labels[ (i_chart.i_labels.length-1) ] + "\nStacked: " + roundNumber(i_chart.stacked_data[s][ (i_chart.stacked_data[s].length-1) ]) + "\nRaw: " + roundNumber(i_chart.i_data[s][ (i_chart.i_data[s].length-1) ]);
            marker.setAttributeNode( marker_title );
            level2_inner_panel.children[ (level2_inner_panel.children.length-1) ].appendChild( marker );

            color_index++;
            if (color_index >= i_chart.i_design.color_palette.length) {
                color_index = 0;
            }
        }
    }
    // draw data labels
    if (i_chart.i_options.showlabels) {

        for (var s = 0; s < i_chart.i_titles.length; s++) {

            var etop = (1 - ((i_chart.stacked_data[s][v] / i_chart.stacked_totals[v]["total_abs_value"]))) * ((max_scale_value / (max_scale_value - (min_scale_value))) * cell_height);

            var datalabel = document.createElement("div");
            var datalabel_style = document.createAttribute("style");
            datalabel_style.value = "position: absolute; text-align: center; z-index: 200; right: calc(0px - (" + i_chart.i_design.datalabel_width + ")); top: " + etop + "px; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
            datalabel.setAttributeNode( datalabel_style );
            var datalabel_title = document.createAttribute("title");
            datalabel_title.value = i_chart.i_titles[s] + "\n" + i_chart.i_labels[ (i_chart.i_labels.length-1) ] + "\nStacked: " + roundNumber(i_chart.stacked_data[s][ (i_chart.stacked_data[s].length-1) ]) + "\nRaw: " + roundNumber(i_chart.i_data[s][ (i_chart.i_data[s].length-1) ]);
            datalabel.setAttributeNode( datalabel_title );
            datalabel.innerText = roundNumber(i_chart.i_data[s][ (i_chart.i_data[s].length-1) ], 2);
            level2_inner_panel.children[ (level2_inner_panel.children.length-1) ].appendChild( datalabel );

        }
    }

    if (level2_inner_panel.children[ (level2_inner_panel.children.length-1) ].clientWidth < 40) {
        var last_x_axis_legend_label_right = level2_inner_panel.children[ (level2_inner_panel.children.length-1) ].clientWidth;
    } else {
        var last_x_axis_legend_label_right = 60;
    }
    var x_axis_legend_label = document.createElement("div");
    var x_axis_legend_label_class = document.createAttribute("class");
    x_axis_legend_label_class.value = "js-chart-line-x-axis-legend-label";
    x_axis_legend_label.setAttributeNode( x_axis_legend_label_class );
    var x_axis_legend_label_title = document.createAttribute("title");
    x_axis_legend_label_title.value = i_chart.i_labels[ (i_chart.i_labels.length-1) ];
    x_axis_legend_label.setAttributeNode( x_axis_legend_label_title );
    var x_axis_legend_label_style = document.createAttribute("style");
    //x_axis_legend_label_style.value = "width: " + cell_width + "px; right: calc(0px - (" + cell_width + "px / 2));"; // max width = 80px cause that double the margin on the parent container
    x_axis_legend_label_style.value = "width: " + cell_width + "px; max-width: 80px; right: calc(0px - (" + last_x_axis_legend_label_right + "px / 2));"; // max width = 80px cause that double the margin on the parent container
    x_axis_legend_label.setAttributeNode( x_axis_legend_label_style );
    x_axis_legend_label.innerText = i_chart.i_labels[ (i_chart.i_labels.length-1) ];
    x_axis_legend_container.children[ (x_axis_legend_container.children.length-1) ].appendChild( x_axis_legend_label );

    return true;
}
// draw stacked line chart
function jsChartLineDrawStackedLineChart(level2_inner_panel, i_chart, x_axis_legend_container, max_scale_value, min_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var color_index = 0;
    var total_scale = max_scale_value - (min_scale_value);

    for (var s = 0; s < i_chart.i_titles.length; s++) {
        for (var v = 0; v < (i_chart.i_labels.length-1); v++) {

            var cell_height = level2_inner_panel.children[v].clientHeight;
            var cell_width = level2_inner_panel.children[v].clientWidth;

            var y2 = (i_chart.stacked_data[s][v+1] / total_scale) * cell_height;
            var y1 = (i_chart.stacked_data[s][v] / total_scale) * cell_height;
            var y = Math.abs(y2 - y1);

            var x = cell_width;
            var z = Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) );
            var asine = Math.asin(x / z);
            var ang = asine * (180/Math.PI);
            if ((i_chart.stacked_data[s][v] - i_chart.stacked_data[s][v+1]) < 0) {
                ang = 360 - (90 - ang);
            } else {
                ang = 90 - ang;
            }

            var eleft = v * cell_width;
            var etop = ((max_scale_value / total_scale) * cell_height) - y1;

            var this_line_color = i_chart.i_design.color_palette[color_index];
            if (i_chart.i_options.showlines) {
                var this_line_thickness = i_chart.i_design.value_line_thickness;
            } else {    
                var this_line_thickness = "0px";
            }

            var box_css = `.js-chart-line-series-column-container-` + i_chart.chart_counter + `-` + (s+1) + `-` + (v+1) + `-` + (dynamic_stylesheet_rule_index+1) + `::after {
content: ''; 
position: absolute;
height: ` + this_line_thickness + `;
width: `+ z + `px;
background-color: ` + this_line_color + `;
left: 0px;
top: ` + etop + `px; 
transform: rotate(` + ang + `deg);
transform-origin: 0px 0px;
z-index: 200;
}`;

            document.styleSheets[ dynamic_stylesheet_index ].insertRule( box_css );

            var elem_title = i_chart.i_titles[s] + "\n" + i_chart.i_labels[v] + "\nStacked: " + roundNumber(i_chart.stacked_data[s][v], 2) + "\nRaw: " + i_chart.i_data[s][v];

            // draw the line box
            var box_elem = document.createElement("div");
            var box_elem_attr = document.createAttribute("style");
            box_elem_attr.value = "flex: 1 1 0px; position: relative;";
            box_elem.setAttributeNode( box_elem_attr );
            var box_elem_class = document.createAttribute("class");
            box_elem_class.value = "js-chart-line-series-column-container-" + i_chart.chart_counter + "-" + (s+1) + "-" + (v+1) + "-" + (dynamic_stylesheet_rule_index+1);
            box_elem.setAttributeNode( box_elem_class );
            level2_inner_panel.children[v].appendChild( box_elem );

            // draw markers
            if (i_chart.i_options.showmarkers) {

                var marker = document.createElement("div");
                var marker_style = document.createAttribute("style");
                marker_style.value = "position: absolute; left: calc(0px - (" + i_chart.i_design.marker_width + " / 2)); top: calc(" + etop + "px - (" + i_chart.i_design.marker_width + " / 2)); width: " + i_chart.i_design.marker_width + "; height: " + i_chart.i_design.marker_width + "; border-radius: 50%; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.marker_border + "; box-shadow: " + i_chart.i_design.marker_box_shadow + "; opacity: " + i_chart.i_design.marker_opacity + ";";
                marker.setAttributeNode( marker_style );
                var marker_title = document.createAttribute("title");
                marker_title.value = elem_title;
                marker.setAttributeNode( marker_title );
                level2_inner_panel.children[v].appendChild( marker );

            }

            // draw data labels
            if (i_chart.i_options.showlabels) {

                var datalabel = document.createElement("div");
                var datalabel_style = document.createAttribute("style");
                datalabel_style.value = "position: absolute; text-align: center; z-index: 200; left: 0px; top: " + etop + "px; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
                datalabel.setAttributeNode( datalabel_style );
                var datalabel_title = document.createAttribute("title");
                datalabel_title.value = elem_title;
                datalabel.setAttributeNode( datalabel_title );
                datalabel.innerText = roundNumber(i_chart.stacked_data[s][v], 2);
                level2_inner_panel.children[v].appendChild( datalabel );
            }

            // draw the x-axis legend label
            if (s == 0) {
                var x_axis_legend_label = document.createElement("div");
                var x_axis_legend_label_class = document.createAttribute("class");
                x_axis_legend_label_class.value = "js-chart-line-x-axis-legend-label";
                x_axis_legend_label.setAttributeNode( x_axis_legend_label_class );
                var x_axis_legend_label_title = document.createAttribute("title");
                x_axis_legend_label_title.value = i_chart.i_labels[v];
                x_axis_legend_label.setAttributeNode( x_axis_legend_label_title );
                var x_axis_legend_label_style = document.createAttribute("style");
                x_axis_legend_label_style.value = "width: " + cell_width + "px; left: calc(0px - (" + cell_width + "px / 2));";
                x_axis_legend_label.setAttributeNode( x_axis_legend_label_style );
                x_axis_legend_label.innerText = i_chart.i_labels[v];
                x_axis_legend_container.children[v].appendChild( x_axis_legend_label );
            }
    
            dynamic_stylesheet_rule_index++;

        }
        color_index++;
        if (color_index >= i_chart.i_design.color_palette.length) {
            color_index = 0;
        }
    }
    // draw markers
    if (i_chart.i_options.showmarkers) {

        var color_index = 0;
        for (var s = 0; s < i_chart.i_titles.length; s++) {

            var etop = ((max_scale_value / total_scale) * cell_height) - ((i_chart.stacked_data[s][ (i_chart.stacked_data[s].length-1) ] / total_scale) * cell_height);

            var marker = document.createElement("div");
            var marker_style = document.createAttribute("style");
            marker_style.value = "position: absolute; right: calc(0px - (" + i_chart.i_design.marker_width + " / 2)); top: calc(" + etop + "px - (" + i_chart.i_design.marker_width + " / 2)); width: " + i_chart.i_design.marker_width + "; height: " + i_chart.i_design.marker_width + "; border-radius: 50%; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.marker_border + "; box-shadow: " + i_chart.i_design.marker_box_shadow + "; opacity: " + i_chart.i_design.marker_opacity + ";";
            marker.setAttributeNode( marker_style );
            var marker_title = document.createAttribute("title");
            marker_title.value = i_chart.i_titles[s] + "\n" + i_chart.i_labels[ (i_chart.i_labels.length-1) ] + "\nStacked: " + roundNumber(i_chart.stacked_data[s][ (i_chart.stacked_data[s].length-1) ]) + "\nRaw: " + roundNumber(i_chart.i_data[s][ (i_chart.i_data[s].length-1) ]);
            marker.setAttributeNode( marker_title );
            level2_inner_panel.children[ (level2_inner_panel.children.length-1) ].appendChild( marker );

            color_index++;
            if (color_index >= i_chart.i_design.color_palette.length) {
                color_index = 0;
            }
        }
    }
    // draw data labels
    if (i_chart.i_options.showlabels) {

        for (var s = 0; s < i_chart.i_titles.length; s++) {

            var etop = ((max_scale_value / total_scale) * cell_height) - ((i_chart.stacked_data[s][ (i_chart.stacked_data[s].length-1) ] / total_scale) * cell_height);

            var datalabel = document.createElement("div");
            var datalabel_style = document.createAttribute("style");
            datalabel_style.value = "position: absolute; text-align: center; z-index: 200; right: calc(0px - (" + i_chart.i_design.datalabel_width + ")); top: " + etop + "px; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
            datalabel.setAttributeNode( datalabel_style );
            var datalabel_title = document.createAttribute("title");
            datalabel_title.value = i_chart.i_titles[s] + "\n" + i_chart.i_labels[ (i_chart.i_labels.length-1) ] + "\nStacked: " + roundNumber(i_chart.stacked_data[s][ (i_chart.stacked_data[s].length-1) ]) + "\nRaw: " + roundNumber(i_chart.i_data[s][ (i_chart.i_data[s].length-1) ]);
            datalabel.setAttributeNode( datalabel_title );
            datalabel.innerText = roundNumber(i_chart.stacked_data[s][ (i_chart.stacked_data[s].length-1) ], 2);
            level2_inner_panel.children[ (level2_inner_panel.children.length-1) ].appendChild( datalabel );

        }

    }

    // draw the x-axis legend label
    // 1. cell width
    // 2. hard code to margin (40px)
    if (level2_inner_panel.children[ (level2_inner_panel.children.length-1) ].clientWidth < 40) {
        var last_x_axis_legend_label_right = level2_inner_panel.children[ (level2_inner_panel.children.length-1) ].clientWidth;
    } else {
        var last_x_axis_legend_label_right = 60;
    }
    var x_axis_legend_label = document.createElement("div");
    var x_axis_legend_label_class = document.createAttribute("class");
    x_axis_legend_label_class.value = "js-chart-line-x-axis-legend-label";
    x_axis_legend_label.setAttributeNode( x_axis_legend_label_class );
    var x_axis_legend_label_title = document.createAttribute("title");
    x_axis_legend_label_title.value = i_chart.i_labels[ (i_chart.i_labels.length-1) ];
    x_axis_legend_label.setAttributeNode( x_axis_legend_label_title );
    var x_axis_legend_label_style = document.createAttribute("style");
    //x_axis_legend_label_style.value = "width: " + cell_width + "px; right: calc(0px - (" + cell_width + "px / 2));"; // max width = 80px cause that double the margin on the parent container
    x_axis_legend_label_style.value = "width: " + cell_width + "px; max-width: 80px; right: calc(0px - (" + last_x_axis_legend_label_right + "px / 2));"; // max width = 80px cause that double the margin on the parent container
    x_axis_legend_label.setAttributeNode( x_axis_legend_label_style );
    x_axis_legend_label.innerText = i_chart.i_labels[ (i_chart.i_labels.length-1) ];
    x_axis_legend_container.children[ (x_axis_legend_container.children.length-1) ].appendChild( x_axis_legend_label );

    return true;
}
// draw clustered lines
function jsChartLineDrawClusteredLineChart(level2_inner_panel, i_chart, x_axis_legend_container, max_scale_value, min_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var color_index = 0;
    var total_scale = max_scale_value - (min_scale_value);

    for (var s = 0; s < i_chart.i_titles.length; s++) {
        for (var v = 0; v < (i_chart.i_labels.length-1); v++) {

            var cell_height = level2_inner_panel.children[v].clientHeight;
            var cell_width = level2_inner_panel.children[v].clientWidth;

            var y2 = (i_chart.i_data[s][v+1] / total_scale) * cell_height;
            var y1 = (i_chart.i_data[s][v] / total_scale) * cell_height;
            var y = Math.abs(y2 - y1);

            var x = cell_width;
            var z = Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) );
            var asine = Math.asin(x / z);
            var ang = asine * (180/Math.PI);
            if ((i_chart.i_data[s][v] - i_chart.i_data[s][v+1]) < 0) {
                ang = 360 - (90 - ang);
            } else {
                ang = 90 - ang;
            }

            var eleft = v * cell_width;
            var etop = ((max_scale_value / total_scale) * cell_height) - y1;

            var this_line_color = i_chart.i_design.color_palette[color_index];
            if (i_chart.i_options.showlines) {
                var this_line_thickness = i_chart.i_design.value_line_thickness;
            } else {    
                var this_line_thickness = "0px";
            }

            var box_css = `.js-chart-line-series-column-container-` + i_chart.chart_counter + `-` + (s+1) + `-` + (v+1) + `-` + (dynamic_stylesheet_rule_index+1) + `::after {
content: ''; 
position: absolute;
height: ` + this_line_thickness + `;
width: `+ z + `px;
background-color: ` + this_line_color + `;
left: 0px;
top: ` + etop + `px; 
transform: rotate(` + ang + `deg);
transform-origin: 0px 0px;
z-index: 200;
}`;

            document.styleSheets[ dynamic_stylesheet_index ].insertRule( box_css );

            var elem_title = i_chart.i_titles[s] + "\n" + i_chart.i_labels[v] + "\n" + roundNumber(i_chart.i_data[s][v], 2);

            // draw the line box
            var box_elem = document.createElement("div");
            var box_elem_attr = document.createAttribute("style");
            box_elem_attr.value = "flex: 1 1 0px; position: relative;";
            box_elem.setAttributeNode( box_elem_attr );
            var box_elem_class = document.createAttribute("class");
            box_elem_class.value = "js-chart-line-series-column-container-" + i_chart.chart_counter + "-" + (s+1) + "-" + (v+1) + "-" + (dynamic_stylesheet_rule_index+1);
            box_elem.setAttributeNode( box_elem_class );
            level2_inner_panel.children[v].appendChild( box_elem );

            // draw markers
            if (i_chart.i_options.showmarkers) {

                var marker = document.createElement("div");
                var marker_style = document.createAttribute("style");
                marker_style.value = "position: absolute; left: calc(0px - (" + i_chart.i_design.marker_width + " / 2)); top: calc(" + etop + "px - (" + i_chart.i_design.marker_width + " / 2)); width: " + i_chart.i_design.marker_width + "; height: " + i_chart.i_design.marker_width + "; border-radius: 50%; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.marker_border + "; box-shadow: " + i_chart.i_design.marker_box_shadow + "; opacity: " + i_chart.i_design.marker_opacity + ";";
                marker.setAttributeNode( marker_style );
                var marker_title = document.createAttribute("title");
                marker_title.value = elem_title;
                marker.setAttributeNode( marker_title );
                level2_inner_panel.children[v].appendChild( marker );

            }

            // draw data labels
            if (i_chart.i_options.showlabels) {

                var datalabel = document.createElement("div");
                var datalabel_style = document.createAttribute("style");
                datalabel_style.value = "position: absolute; text-align: center; z-index: 200; left: 0px; top: " + etop + "px; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
                datalabel.setAttributeNode( datalabel_style );
                var datalabel_title = document.createAttribute("title");
                datalabel_title.value = elem_title;
                datalabel.setAttributeNode( datalabel_title );
                datalabel.innerText = roundNumber(i_chart.i_data[s][v], 2);
                level2_inner_panel.children[v].appendChild( datalabel );
            }

            // draw the x-axis legend label
            if (s == 0) {
                var x_axis_legend_label = document.createElement("div");
                var x_axis_legend_label_class = document.createAttribute("class");
                x_axis_legend_label_class.value = "js-chart-line-x-axis-legend-label";
                x_axis_legend_label.setAttributeNode( x_axis_legend_label_class );
                var x_axis_legend_label_title = document.createAttribute("title");
                x_axis_legend_label_title.value = i_chart.i_labels[v];
                x_axis_legend_label.setAttributeNode( x_axis_legend_label_title );
                var x_axis_legend_label_style = document.createAttribute("style");
                x_axis_legend_label_style.value = "width: " + cell_width + "px; left: calc(0px - (" + cell_width + "px / 2));";
                x_axis_legend_label.setAttributeNode( x_axis_legend_label_style );
                x_axis_legend_label.innerText = i_chart.i_labels[v];
                x_axis_legend_container.children[v].appendChild( x_axis_legend_label );
            }
    
            dynamic_stylesheet_rule_index++;

        }
        color_index++;
        if (color_index >= i_chart.i_design.color_palette.length) {
            color_index = 0;
        }
    }
    // draw markers
    if (i_chart.i_options.showmarkers) {

        var color_index = 0;
        for (var s = 0; s < i_chart.i_titles.length; s++) {

            var etop = ((max_scale_value / total_scale) * cell_height) - ((i_chart.i_data[s][ (i_chart.i_data[s].length-1) ] / total_scale) * cell_height);

            var marker = document.createElement("div");
            var marker_style = document.createAttribute("style");
            marker_style.value = "position: absolute; right: calc(0px - (" + i_chart.i_design.marker_width + " / 2)); top: calc(" + etop + "px - (" + i_chart.i_design.marker_width + " / 2)); width: " + i_chart.i_design.marker_width + "; height: " + i_chart.i_design.marker_width + "; border-radius: 50%; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.marker_border + "; box-shadow: " + i_chart.i_design.marker_box_shadow + "; opacity: " + i_chart.i_design.marker_opacity + ";";
            marker.setAttributeNode( marker_style );
            var marker_title = document.createAttribute("title");
            marker_title.value = i_chart.i_titles[s] + "\n" + i_chart.i_labels[ (i_chart.i_labels.length-1) ] + "\n" + roundNumber(i_chart.i_data[s][ (i_chart.i_data[s].length-1) ]);
            marker.setAttributeNode( marker_title );
            level2_inner_panel.children[ (level2_inner_panel.children.length-1) ].appendChild( marker );

            color_index++;
            if (color_index >= i_chart.i_design.color_palette.length) {
                color_index = 0;
            }
        }
    }
    // draw data labels
    if (i_chart.i_options.showlabels) {

        for (var s = 0; s < i_chart.i_titles.length; s++) {

            var etop = ((max_scale_value / total_scale) * cell_height) - ((i_chart.i_data[s][ (i_chart.i_data[s].length-1) ] / total_scale) * cell_height);

            var datalabel = document.createElement("div");
            var datalabel_style = document.createAttribute("style");
            datalabel_style.value = "position: absolute; text-align: center; z-index: 200; right: calc(0px - (" + i_chart.i_design.datalabel_width + ")); top: " + etop + "px; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
            datalabel.setAttributeNode( datalabel_style );
            var datalabel_title = document.createAttribute("title");
            datalabel_title.value = i_chart.i_titles[s] + "\n" + i_chart.i_labels[ (i_chart.i_labels.length-1) ] + "\n" + roundNumber(i_chart.i_data[s][ (i_chart.i_data[s].length-1) ]);
            datalabel.setAttributeNode( datalabel_title );
            datalabel.innerText = roundNumber(i_chart.i_data[s][ (i_chart.i_data[s].length-1) ], 2);
            level2_inner_panel.children[ (level2_inner_panel.children.length-1) ].appendChild( datalabel );

        }

    }

    // draw the x-axis legend label
    // 1. cell width
    // 2. hard code to margin (40px)
    if (level2_inner_panel.children[ (level2_inner_panel.children.length-1) ].clientWidth < 40) {
        var last_x_axis_legend_label_right = level2_inner_panel.children[ (level2_inner_panel.children.length-1) ].clientWidth;
    } else {
        var last_x_axis_legend_label_right = 60;
    }
    var x_axis_legend_label = document.createElement("div");
    var x_axis_legend_label_class = document.createAttribute("class");
    x_axis_legend_label_class.value = "js-chart-line-x-axis-legend-label";
    x_axis_legend_label.setAttributeNode( x_axis_legend_label_class );
    var x_axis_legend_label_title = document.createAttribute("title");
    x_axis_legend_label_title.value = i_chart.i_labels[ (i_chart.i_labels.length-1) ];
    x_axis_legend_label.setAttributeNode( x_axis_legend_label_title );
    var x_axis_legend_label_style = document.createAttribute("style");
    //x_axis_legend_label_style.value = "width: " + cell_width + "px; right: calc(0px - (" + cell_width + "px / 2));"; // max width = 80px cause that double the margin on the parent container
    x_axis_legend_label_style.value = "width: " + cell_width + "px; max-width: 80px; right: calc(0px - (" + last_x_axis_legend_label_right + "px / 2));"; // max width = 80px cause that double the margin on the parent container
    x_axis_legend_label.setAttributeNode( x_axis_legend_label_style );
    x_axis_legend_label.innerText = i_chart.i_labels[ (i_chart.i_labels.length-1) ];
    x_axis_legend_container.children[ (x_axis_legend_container.children.length-1) ].appendChild( x_axis_legend_label );

    return true;
}
// draw clustered containers
function jsChartLineDrawSeriesContainers(level2_inner_panel, i_chart) {

    for (var v = 0; v < (i_chart.i_labels.length-1); v++) {

        var series_container = document.createElement("div");
        var series_container_class = document.createAttribute("class");
        series_container_class.value = "js-chart-line-series-container";
        series_container.setAttributeNode( series_container_class );
        level2_inner_panel.appendChild( series_container );
    }

    return true;
}
// draw level0 containers
function jsChartLineDrawLevel0Containers(base_level2_inner_panel, i_chart, max_scale_value, min_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    // draw level0 inner panel
    var level0_inner_panel = document.createElement("div");
    var level0_inner_panel_class = document.createAttribute("class");
    level0_inner_panel_class.value = "js-chart-line-level0-inner-panel";
    level0_inner_panel.setAttributeNode( level0_inner_panel_class );
    base_level2_inner_panel.appendChild( level0_inner_panel );

    // draw y-axis container
    var y_axis_container = document.createElement("div");
    var y_axis_container_class = document.createAttribute("class");
    y_axis_container_class.value = "js-chart-line-y-axis-container";
    y_axis_container.setAttributeNode( y_axis_container_class );
    var y_axis_container_title = document.createAttribute("title");
    y_axis_container_title.value = i_chart.i_options.ytitle;
    y_axis_container.setAttributeNode( y_axis_container_title );
    level0_inner_panel.appendChild( y_axis_container );

    // draw y-axis title container
    var y_axis_title_container = document.createElement("div");
    var y_axis_title_container_class = document.createAttribute("class");
    y_axis_title_container_class.value = "js-chart-line-y-axis-title-container";
    y_axis_title_container.setAttributeNode( y_axis_title_container_class );
    y_axis_title_container.innerText = i_chart.i_options.ytitle;
    y_axis_container.appendChild( y_axis_title_container );

    // draw y-axis scale label container
    var y_axis_scale_label_container = document.createElement("div");
    var y_axis_scale_label_container_class = document.createAttribute("class");
    y_axis_scale_label_container_class.value = "js-chart-line-y-axis-scale-label-container";
    y_axis_scale_label_container.setAttributeNode( y_axis_scale_label_container_class );
    y_axis_container.appendChild( y_axis_scale_label_container );

    var max_loop = 10;
    if (i_chart.type == "100% stacked line") {
        var label_append = "%";
    } else {
        var label_append = "";
    }
    for (var tt = max_scale_value; tt > min_scale_value; tt=(tt-step_value)) {

        var y_axis_scale_label_block = document.createElement("div");
        var y_axis_scale_label_block_class = document.createAttribute("class");
        y_axis_scale_label_block_class.value = "js-chart-line-y-axis-scale-label-block";
        y_axis_scale_label_block.setAttributeNode( y_axis_scale_label_block_class );
        y_axis_scale_label_block.innerText = roundNumber(tt, 2) + label_append;
        y_axis_scale_label_container.appendChild( y_axis_scale_label_block );

    }

    // draw last y-axis scale label block
    var last_y_axis_scale_label_block = document.createElement("div");
    var last_y_axis_scale_label_block_class = document.createAttribute("class");
    last_y_axis_scale_label_block_class.value = "js-chart-line-y-axis-scale-label-block-last";
    last_y_axis_scale_label_block.setAttributeNode( last_y_axis_scale_label_block_class );
    last_y_axis_scale_label_block.innerText = roundNumber(min_scale_value, 2);
    y_axis_scale_label_container.appendChild( last_y_axis_scale_label_block );

    // draw y-axis scale container
    var y_axis_scale_container = document.createElement("div");
    var y_axis_scale_container_class = document.createAttribute("class");
    y_axis_scale_container_class.value = "js-chart-line-y-axis-scale-container";
    y_axis_scale_container.setAttributeNode( y_axis_scale_container_class );
    y_axis_container.appendChild( y_axis_scale_container );

    for (var tt = 0; tt < 10; tt++) {

        var y_axis_scale_block = document.createElement("div");
        var y_axis_scale_block_class = document.createAttribute("class");
        y_axis_scale_block_class.value = "js-chart-line-y-axis-scale-block";
        y_axis_scale_block.setAttributeNode( y_axis_scale_block_class );
        var y_axis_scale_block_style = document.createAttribute("style");
        y_axis_scale_block_style.value = "border-right: "+ i_chart.i_design.scale_border + "; border-top: " + i_chart.i_design.scale_border + ";";
        if (tt == 9) {
            y_axis_scale_block_style.value += "border-bottom: "+ i_chart.i_design.scale_border + ";";
        }
        y_axis_scale_block.setAttributeNode( y_axis_scale_block_style );
        y_axis_scale_container.appendChild( y_axis_scale_block );

    }

    // draw level1 inner panel
    var level1_inner_panel = document.createElement("div");
    var level1_inner_panel_class = document.createAttribute("class");
    level1_inner_panel_class.value = "js-chart-line-level1-inner-panel";
    level1_inner_panel.setAttributeNode( level1_inner_panel_class );
    var level1_inner_panel_style = document.createAttribute("style");
    level1_inner_panel_style.value = "scrollbar-color: " + i_chart.i_design.canvas_scrollbar_color + ";";
    level1_inner_panel.setAttributeNode( level1_inner_panel_style );
    level0_inner_panel.appendChild( level1_inner_panel );

    // draw level2 inner panel
    var level2_inner_panel = document.createElement("div");
    var level2_inner_panel_class = document.createAttribute("class");
    level2_inner_panel_class.value = "js-chart-line-level2-inner-panel";
    level2_inner_panel.setAttributeNode( level2_inner_panel_class );
    level1_inner_panel.appendChild( level2_inner_panel );

    // draw x-axis legend container
    var x_axis_legend_container = document.createElement("div");
    var x_axis_legend_container_class = document.createAttribute("class");
    x_axis_legend_container_class.value = "js-chart-line-x-axis-legend-container";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_class );
    level1_inner_panel.appendChild( x_axis_legend_container );

    for (var tt = 0; tt < (i_chart.i_labels.length-1); tt++) {

        var x_axis_legend_block = document.createElement("div");
        var x_axis_legend_block_class = document.createAttribute("class");
        x_axis_legend_block_class.value = "js-chart-line-x-axis-legend-block";
        x_axis_legend_block.setAttributeNode( x_axis_legend_block_class );
        x_axis_legend_container.appendChild( x_axis_legend_block );

    }

    // draw infobox container
    var infobox_container = document.createElement("div");
    var infobox_container_class = document.createAttribute("class");
    infobox_container_class.value = "js-chart-line-infobox-container";
    infobox_container.setAttributeNode( infobox_container_class );
    level0_inner_panel.appendChild( infobox_container );

    // draw x-axis container
    var x_axis_container = document.createElement("div");
    var x_axis_container_class = document.createAttribute("class");
    x_axis_container_class.value = "js-chart-line-x-axis-container";
    x_axis_container.setAttributeNode( x_axis_container_class );
    var x_axis_container_title = document.createAttribute("title");
    x_axis_container_title.value = i_chart.i_options.xtitle;
    x_axis_container.setAttributeNode( x_axis_container_title );
    x_axis_container.innerText = i_chart.i_options.xtitle;
    level0_inner_panel.appendChild( x_axis_container );

    return [ level2_inner_panel, y_axis_scale_label_container, y_axis_scale_container, x_axis_legend_container ];
}
// draw function for a stacked line chart
function jsChartDrawRelativeStackedLineChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    if (i_chart.i_data.length == 1) {
        var legend_labels = i_chart.i_labels;
    } else {
        var legend_labels = i_chart.i_titles;
    }

    // stack the data values - prepare the array
    var stacked_data = [];
    for (var s = 0; s < i_chart.i_titles.length; s++) {
        stacked_data[s] = [];
        for (var v = 0; v < i_chart.i_labels.length; v++) {
            stacked_data[s][v] = 0;
        }
    }

    // stack the data values - populate the array
    for (var s = 0; s < i_chart.i_titles.length; s++) {
        for (var v = 0; v < i_chart.i_labels.length; v++) {
            for (var t = s; t >= 0; t--) {
                stacked_data[s][v] += i_chart.i_data[t][v];
            }
        }
    }

    // determine biggest and smallest and calc totals
    var stack_total = [];
    for (var v = 0; v < i_chart.i_labels.length; v++) {
        stack_total[v] = {
            "total_value": 0,
            "total_abs_value": 0,
            "min_value": i_chart.i_data[0][0],
            "max_value": i_chart.i_data[0][0]
        }
    }
    var smallest_value = stacked_data[0][0];
    var biggest_value = stacked_data[0][0];
    for (var s = 0; s < i_chart.i_titles.length; s++) {
        for (var v = 0; v < i_chart.i_labels.length; v++) {
            stack_total[v]["total_value"] += i_chart.i_data[s][v];
            stack_total[v]["total_abs_value"] += Math.abs( i_chart.i_data[s][v] );
            if (stacked_data[s][v] < stack_total[v]["min_value"]) {
                stack_total[v]["min_value"] = stacked_data[s][v];
            }
            if (stacked_data[s][v] > stack_total[v]["max_value"]) {
                stack_total[v]["max_value"] = stacked_data[s][v];
            }
            if (stacked_data[s][v] > biggest_value) {
                biggest_value = stacked_data[s][v];
            }
            if (stacked_data[s][v] < smallest_value) {
                smallest_value = stacked_data[s][v];
            }
        }
    }

    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["stacked line"].data_type, legend_labels, i_chart.i_design.palette_type);
    var base_level2_inner_panel = draw_base_containers[0];
    var legend_container = draw_base_containers[1];



    // calculate the max and min scale values (x-axis values on a bar chart)
    //  - min_scale_value
    //  - max_scale_value
    //  - step_value
    //  - total_steps
    //  - num_of_decimals_to_use
    if ((!isNaN(parseFloat(i_chart.i_options.scalemin))) && (!isNaN(parseFloat(i_chart.i_options.scalemax)))) {
        // min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use
        var this_scalemin = parseFloat(i_chart.i_options.scalemin);
        var this_scalemax = parseFloat(i_chart.i_options.scalemax);
        var calculate_scale = [ this_scalemin, this_scalemax, ((Math.abs(this_scalemin) + Math.abs(this_scalemax)) / 10), 10, 2 ];
    } else {
        if (smallest_value < 0) {
            var calculate_scale = [ -100, 100, 20, 10, 2 ];
        } else {
            var calculate_scale = [ 0, 100, 10, 10, 2 ];
        }
    }

    var min_scale_value = calculate_scale[0];
    var max_scale_value = calculate_scale[1];
    var step_value = calculate_scale[2];
    var total_steps = calculate_scale[3];
    var num_of_decimals_to_use = calculate_scale[4];

    // draw level0 containers
    var draw_level0_containers = jsChartLineDrawLevel0Containers(base_level2_inner_panel, i_chart, max_scale_value, min_scale_value, step_value, total_steps, num_of_decimals_to_use);
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_scale_label_container = draw_level0_containers[1];
    var y_axis_scale_container = draw_level0_containers[2];
    var x_axis_legend_container = draw_level0_containers[3];

    // draw series containers
    var draw_series_containers = jsChartLineDrawSeriesContainers(level2_inner_panel, i_chart);

    // draw clustered lines
    i_chart.stacked_data = stacked_data;
    i_chart.stacked_totals = stack_total;
    var draw_clustered_lines = jsChartLineDrawRelativeStackedLineChart(level2_inner_panel, i_chart, x_axis_legend_container, max_scale_value, min_scale_value, step_value, total_steps, num_of_decimals_to_use);

    // resize the y-axis scale label container
    var y_axis_scale_label_container_style = document.createAttribute("style");
    y_axis_scale_label_container_style.value = "height: " + level2_inner_panel.clientHeight + "px;";
    y_axis_scale_label_container.setAttributeNode( y_axis_scale_label_container_style );

    // resize the y-axis scale container
    var y_axis_scale_container_style = document.createAttribute("style");
    y_axis_scale_container_style.value = "height: " + level2_inner_panel.clientHeight + "px;";
    y_axis_scale_container.setAttributeNode( y_axis_scale_container_style );

    return true;
}
// draw function for a stacked line chart
function jsChartDrawStackedLineChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    if (i_chart.i_data.length == 1) {
        var legend_labels = i_chart.i_labels;
    } else {
        var legend_labels = i_chart.i_titles;
    }

    // stack the data values - prepare the array
    var stacked_data = [];
    for (var s = 0; s < i_chart.i_titles.length; s++) {
        stacked_data[s] = [];
        for (var v = 0; v < i_chart.i_labels.length; v++) {
            stacked_data[s][v] = 0;
        }
    }

    // stack the data values - populate the array
    for (var s = 0; s < i_chart.i_titles.length; s++) {
        for (var v = 0; v < i_chart.i_labels.length; v++) {
            for (var t = s; t >= 0; t--) {
                stacked_data[s][v] += i_chart.i_data[t][v];
            }
        }
    }

    // determine biggest and smallest and calc totals
    var stack_total = [];
    for (var s = 0; s < i_chart.i_titles.length; s++) {
        stack_total[s] = {
            "total_value": stacked_data[s][0],
            "total_abs_value": Math.abs( stacked_data[s][0] ),
            "min_value": stacked_data[s][0],
            "max_value": stacked_data[s][0]
        }
        for (var v = 1; v < i_chart.i_labels.length; v++) {
            stack_total[s]["total_value"] += stacked_data[s][v];
            stack_total[s]["total_abs_value"] += Math.abs( stacked_data[s][v] );
            if (stacked_data[s][v] < stack_total[s]["min_value"]) {
                stack_total[s]["min_value"] = stacked_data[s][v];
            }
            if (stacked_data[s][v] > stack_total[s]["max_value"]) {
                stack_total[s]["max_value"] = stacked_data[s][v];
            }
        }
    }

    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["stacked line"].data_type, legend_labels, i_chart.i_design.palette_type);
    var base_level2_inner_panel = draw_base_containers[0];
    var legend_container = draw_base_containers[1];

    // calculate the max and min scale values (x-axis values on a bar chart)
    //  - min_scale_value
    //  - max_scale_value
    //  - step_value
    //  - total_steps
    //  - num_of_decimals_to_use
    if ((!isNaN(parseFloat(i_chart.i_options.scalemin))) && (!isNaN(parseFloat(i_chart.i_options.scalemax)))) {
        // min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use
        var this_scalemin = parseFloat(i_chart.i_options.scalemin);
        var this_scalemax = parseFloat(i_chart.i_options.scalemax);
        var calculate_scale = [ this_scalemin, this_scalemax, ((Math.abs(this_scalemin) + Math.abs(this_scalemax)) / 10), 10, 2 ];
    } else {
        var calculate_scale = jsChartCommonCalculateScale(stacked_data, stack_total, null, null, 10);
    }

    var min_scale_value = calculate_scale[0];
    var max_scale_value = calculate_scale[1];
    var step_value = calculate_scale[2];
    var total_steps = calculate_scale[3];
    var num_of_decimals_to_use = calculate_scale[4];

    // draw level0 containers
    var draw_level0_containers = jsChartLineDrawLevel0Containers(base_level2_inner_panel, i_chart, max_scale_value, min_scale_value, step_value, total_steps, num_of_decimals_to_use);
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_scale_label_container = draw_level0_containers[1];
    var y_axis_scale_container = draw_level0_containers[2];
    var x_axis_legend_container = draw_level0_containers[3];

    // draw series containers
    var draw_series_containers = jsChartLineDrawSeriesContainers(level2_inner_panel, i_chart);

    // draw clustered lines
    i_chart.stacked_data = stacked_data;
    i_chart.stacked_totals = stack_total;
    var draw_clustered_lines = jsChartLineDrawStackedLineChart(level2_inner_panel, i_chart, x_axis_legend_container, max_scale_value, min_scale_value, step_value, total_steps, num_of_decimals_to_use);

    // resize the y-axis scale label container
    var y_axis_scale_label_container_style = document.createAttribute("style");
    y_axis_scale_label_container_style.value = "height: " + level2_inner_panel.clientHeight + "px;";
    y_axis_scale_label_container.setAttributeNode( y_axis_scale_label_container_style );

    // resize the y-axis scale container
    var y_axis_scale_container_style = document.createAttribute("style");
    y_axis_scale_container_style.value = "height: " + level2_inner_panel.clientHeight + "px;";
    y_axis_scale_container.setAttributeNode( y_axis_scale_container_style );

    return true;
}
// draw function for a clustered line chart
function jsChartDrawLineChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    if (i_chart.i_data.length == 1) {
        var legend_labels = i_chart.i_labels;
    } else {
        var legend_labels = i_chart.i_titles;
    }

    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["line"].data_type, legend_labels, i_chart.i_design.palette_type);
    var base_level2_inner_panel = draw_base_containers[0];
    var legend_container = draw_base_containers[1];

    // calculate the max and min scale values (x-axis values on a bar chart)
    //  - min_scale_value
    //  - max_scale_value
    //  - step_value
    //  - total_steps
    //  - num_of_decimals_to_use
    if ((!isNaN(parseFloat(i_chart.i_options.scalemin))) && (!isNaN(parseFloat(i_chart.i_options.scalemax)))) {
        // min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use
        var this_scalemin = parseFloat(i_chart.i_options.scalemin);
        var this_scalemax = parseFloat(i_chart.i_options.scalemax);
        var calculate_scale = [ this_scalemin, this_scalemax, ((Math.abs(this_scalemin) + Math.abs(this_scalemax)) / 10), 10, 2 ];
    } else {
        var calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, null, null, 10);
    }

    var min_scale_value = calculate_scale[0];
    var max_scale_value = calculate_scale[1];
    var step_value = calculate_scale[2];
    var total_steps = calculate_scale[3];
    var num_of_decimals_to_use = calculate_scale[4];

    // draw level0 containers
    var draw_level0_containers = jsChartLineDrawLevel0Containers(base_level2_inner_panel, i_chart, max_scale_value, min_scale_value, step_value, total_steps, num_of_decimals_to_use);
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_scale_label_container = draw_level0_containers[1];
    var y_axis_scale_container = draw_level0_containers[2];
    var x_axis_legend_container = draw_level0_containers[3];

    // draw series containers
    var draw_series_containers = jsChartLineDrawSeriesContainers(level2_inner_panel, i_chart);

    // draw clustered lines
    var draw_clustered_lines = jsChartLineDrawClusteredLineChart(level2_inner_panel, i_chart, x_axis_legend_container, max_scale_value, min_scale_value, step_value, total_steps, num_of_decimals_to_use);

    // resize the y-axis scale label container
    var y_axis_scale_label_container_style = document.createAttribute("style");
    y_axis_scale_label_container_style.value = "height: " + level2_inner_panel.clientHeight + "px;";
    y_axis_scale_label_container.setAttributeNode( y_axis_scale_label_container_style );

    // resize the y-axis scale container
    var y_axis_scale_container_style = document.createAttribute("style");
    y_axis_scale_container_style.value = "height: " + level2_inner_panel.clientHeight + "px;";
    y_axis_scale_container.setAttributeNode( y_axis_scale_container_style );

    return true;
}