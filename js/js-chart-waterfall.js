// draw the value bar containers
function jsChartWaterfallBarDrawValueBars(level2_inner_panel, i_chart, h_totals, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var total_range = max_scale_value - (min_scale_value);
    for (var v = 0; v < i_chart.i_data[0].length; v++) {

        var value_bar_width = (Math.abs(i_chart.i_data[0][v]) / total_range) * 100;
        var value_bar_temp_left = (h_totals.stack[v] - i_chart.i_data[0][v]);

        if (value_bar_temp_left >= h_totals.stack[v]) {
            var value_bar_left_absolute_value = value_bar_temp_left;
        } else {
            var value_bar_left_absolute_value = h_totals.stack[v];
        }

        var value_bar_left_relative = ((max_scale_value - value_bar_left_absolute_value) / total_range) * 100;

        if (v == 0) {
            if (i_chart.i_data[0][v] >= 0) {
                var color_index = 3;
            } else {
                var color_index = 2;
            }
        } else {
            if (i_chart.i_data[0][v] >= 0) {
                var color_index = 1;
            } else {
                var color_index = 0;
            }
        }

        // console.log(v + ". " + (h_totals.stack[v] - i_chart.i_data[0][v]) + " >>>> " + i_chart.i_data[0][v] + " >> " + h_totals.stack[v] + " >> height >> " + value_bar_width + "% >> absolute >> " + value_bar_left_absolute_value + " >> relative >> " + value_bar_left_relative + "%");

        var value_bar_container = document.createElement("div");
        var value_bar_container_style = document.createAttribute("style");
        value_bar_container_style.value = "position: absolute; width: " + value_bar_width + "%; right: " + value_bar_left_relative + "%; min-height: " + i_chart.i_design.value_bar_min_height + "; height: 100%; min-width: " + i_chart.i_design.value_bar_min_width + "; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow +"; opacity: " + i_chart.i_design.value_bar_opacity + ";";
        value_bar_container.setAttributeNode( value_bar_container_style );
        var value_bar_container_title = document.createAttribute("title");
        value_bar_container_title.value = i_chart.i_titles[0] + "\n" + i_chart.i_labels[v] + "\nValue: " + roundNumber(i_chart.i_data[0][v], num_of_decimals_to_use) + "\nNett: " + roundNumber(h_totals.stack[v], num_of_decimals_to_use);
        value_bar_container.setAttributeNode( value_bar_container_title );
        level2_inner_panel.children[v].appendChild( value_bar_container );

        // draw the data labels
        if (i_chart.i_options.showlabels) {

            var data_label = document.createElement("div");
            var data_label_style = document.createAttribute("style");
            data_label_style.value = "position: absolute; text-wrap: nowrap; text-align: center; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
            data_label.setAttributeNode( data_label_style );
            data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(i_chart.i_data[0][v], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            value_bar_container.appendChild( data_label );

        }
    }

    // draw another column for the total column
    if (h_totals.stack[ (h_totals.stack.length-1) ] >= 0) {
        color_index = 3;
    } else {
        color_index = 2;
    }
    var value_bar_width = (Math.abs(h_totals.stack[ (h_totals.stack.length-1) ]) / total_range) * 100;
    if (h_totals.stack[ (h_totals.stack.length-1) ] >= 0) {
        var value_bar_left_relative = ((max_scale_value - h_totals.stack[ (h_totals.stack.length-1) ]) / total_range) * 100;
    } else {
        var value_bar_left_relative = (max_scale_value / (max_scale_value - min_scale_value)) * 100;
    }
    var value_bar_container = document.createElement("div");
    var value_bar_container_style = document.createAttribute("style");
    value_bar_container_style.value = "position: absolute; width: " + value_bar_width + "%; right: " + value_bar_left_relative + "%; min-height: " + i_chart.i_design.value_bar_min_height + "; height: 100%; min-width: " + i_chart.i_design.value_bar_min_width + "; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow +"; opacity: " + i_chart.i_design.value_bar_opacity + ";";
    value_bar_container.setAttributeNode( value_bar_container_style );
    var value_bar_container_title = document.createAttribute("title");
    value_bar_container_title.value = i_chart.i_titles[0] + "\n" + i_chart.i_labels[ (i_chart.i_labels.length-1) ] + "\nTotal: " + roundNumber(h_totals.stack[ (h_totals.stack.length-1) ], num_of_decimals_to_use);
    value_bar_container.setAttributeNode( value_bar_container_title );
    level2_inner_panel.children[ (level2_inner_panel.children.length-1) ].appendChild( value_bar_container );

    // draw the data labels
    if (i_chart.i_options.showlabels) {

        var data_label = document.createElement("div");
        var data_label_style = document.createAttribute("style");
        data_label_style.value = "position: absolute; text-align: center; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
        data_label.setAttributeNode( data_label_style );
        data_label.innerText = roundNumber(h_totals.stack[ (h_totals.stack.length-1) ], num_of_decimals_to_use);
        value_bar_container.appendChild( data_label );

    }

    return true;
}
// draw the value column containers
function jsChartWaterfallColumnDrawValueBars(level2_inner_panel, i_chart, h_totals, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var total_range = max_scale_value - (min_scale_value);
    for (var v = 0; v < i_chart.i_data[0].length; v++) {

        var value_bar_height = (Math.abs(i_chart.i_data[0][v]) / total_range) * 100;
        var value_bar_temp_top = (h_totals.stack[v] - i_chart.i_data[0][v]);

        if (value_bar_temp_top >= h_totals.stack[v]) {
            var value_bar_top_absolute_value = value_bar_temp_top;
        } else {
            var value_bar_top_absolute_value = h_totals.stack[v];
        }

        var value_bar_top_relative = ((max_scale_value - value_bar_top_absolute_value) / total_range) * 100;

        if (v == 0) {
            if (i_chart.i_data[0][v] >= 0) {
                var color_index = 3;
            } else {
                var color_index = 2;
            }
        } else {
            if (i_chart.i_data[0][v] >= 0) {
                var color_index = 1;
            } else {
                var color_index = 0;
            }
        }

        // console.log(v + ". " + (h_totals.stack[v] - i_chart.i_data[0][v]) + " >>>> " + i_chart.i_data[0][v] + " >> " + h_totals.stack[v] + " >> height >> " + value_bar_height + "% >> absolute >> " + value_bar_top_absolute_value + " >> relative >> " + value_bar_top_relative + "%");

        var value_bar_container = document.createElement("div");
        var value_bar_container_style = document.createAttribute("style");
        value_bar_container_style.value = "position: absolute; height: " + value_bar_height + "%; top: " + value_bar_top_relative + "%; min-width: " + i_chart.i_design.value_bar_min_width + "; width: 100%; min-height: " + i_chart.i_design.value_bar_min_height + "; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow +"; opacity: " + i_chart.i_design.value_bar_opacity + ";";
        value_bar_container.setAttributeNode( value_bar_container_style );
        var value_bar_container_title = document.createAttribute("title");
        value_bar_container_title.value = i_chart.i_titles[0] + "\n" + i_chart.i_labels[v] + "\nValue: " + roundNumber(i_chart.i_data[0][v], num_of_decimals_to_use) + "\nNett: " + roundNumber(h_totals.stack[v], num_of_decimals_to_use);
        value_bar_container.setAttributeNode( value_bar_container_title );
        level2_inner_panel.children[v].appendChild( value_bar_container );

        // draw the data labels
        if (i_chart.i_options.showlabels) {

            var data_label = document.createElement("div");
            var data_label_style = document.createAttribute("style");
            data_label_style.value = "position: absolute; text-wrap: nowrap; text-align: center; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
            data_label.setAttributeNode( data_label_style );
            data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(i_chart.i_data[0][v], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            value_bar_container.appendChild( data_label );

        }
    }

    // draw another column for the total column
    if (h_totals.stack[ (h_totals.stack.length-1) ] >= 0) {
        color_index = 3;
    } else {
        color_index = 2;
    }
    var value_bar_height = (Math.abs(h_totals.stack[ (h_totals.stack.length-1) ]) / total_range) * 100;
    if (h_totals.stack[ (h_totals.stack.length-1) ] >= 0) {
        var value_bar_top_relative = ((max_scale_value - h_totals.stack[ (h_totals.stack.length-1) ]) / total_range) * 100;
    } else {
        var value_bar_top_relative = (max_scale_value / (max_scale_value - min_scale_value)) * 100;
    }
    var value_bar_container = document.createElement("div");
    var value_bar_container_style = document.createAttribute("style");
    value_bar_container_style.value = "position: absolute; height: " + value_bar_height + "%; top: " + value_bar_top_relative + "%; min-width: " + i_chart.i_design.value_bar_min_width + "; width: 100%; min-height: " + i_chart.i_design.value_bar_min_height + "; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow +"; opacity: " + i_chart.i_design.value_bar_opacity + ";";
    value_bar_container.setAttributeNode( value_bar_container_style );
    var value_bar_container_title = document.createAttribute("title");
    value_bar_container_title.value = i_chart.i_titles[0] + "\n" + i_chart.i_labels[ (i_chart.i_labels.length-1) ] + "\nTotal: " + roundNumber(h_totals.stack[ (h_totals.stack.length-1) ], num_of_decimals_to_use);
    value_bar_container.setAttributeNode( value_bar_container_title );
    level2_inner_panel.children[ (level2_inner_panel.children.length-1) ].appendChild( value_bar_container );

    // draw the data labels
    if (i_chart.i_options.showlabels) {

        var data_label = document.createElement("div");
        var data_label_style = document.createAttribute("style");
        data_label_style.value = "position: absolute; text-align: center; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
        data_label.setAttributeNode( data_label_style );
        data_label.innerText = roundNumber(h_totals.stack[ (h_totals.stack.length-1) ], num_of_decimals_to_use);
        value_bar_container.appendChild( data_label );

    }

    return true;
}
// draw the series bar containers
function jsChartWaterfallBarDrawSeriesContainers(level3_inner_panel, i_chart) {

    // draw series column containers
    for (var v = 0; v < (i_chart.i_data[0].length + 1); v++) {

        var series_column_container = document.createElement("div");
        var series_column_container_class = document.createAttribute("class");
        series_column_container_class.value = "js-chart-waterfall-bar-series-bar-container";
        series_column_container.setAttributeNode( series_column_container_class );
        var series_column_container_style = document.createAttribute("style");
        series_column_container_style.value = "min-height: " + i_chart.i_design.value_bar_min_height + "; margin: calc((" + i_chart.i_design.value_bar_series_margin + " + " + i_chart.i_design.value_bar_data_margin + ") / 2) 0px calc((" + i_chart.i_design.value_bar_series_margin + " + " + i_chart.i_design.value_bar_data_margin + ") / 2) 0px;";
        series_column_container.setAttributeNode( series_column_container_style );
        level3_inner_panel.appendChild( series_column_container );

    }

    return true;
}
// draw the series column containers
function jsChartWaterfallColumnDrawSeriesContainers(level2_inner_panel, i_chart) {

    // draw series column containers
    for (var v = 0; v < (i_chart.i_data[0].length + 1); v++) {

        var series_column_container = document.createElement("div");
        var series_column_container_class = document.createAttribute("class");
        series_column_container_class.value = "js-chart-waterfall-column-series-column-container";
        series_column_container.setAttributeNode( series_column_container_class );
        var series_column_container_style = document.createAttribute("style");
        series_column_container_style.value = "min-width: " + i_chart.i_design.value_bar_min_width + "; margin: 0px calc((" + i_chart.i_design.value_bar_series_margin + " + " + i_chart.i_design.value_bar_data_margin + ") / 2) 0px calc((" + i_chart.i_design.value_bar_series_margin + " + " + i_chart.i_design.value_bar_data_margin + ") / 2);";
        series_column_container.setAttributeNode( series_column_container_style );
        level2_inner_panel.appendChild( series_column_container );

    }

    return true;
}
// draw the level0 containers
function jsChartWaterfallBarDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    // draw level0 inner panel
    var level0_inner_panel = document.createElement("div");
    var level0_inner_panel_class = document.createAttribute("class");
    level0_inner_panel_class.value = "js-chart-waterfall-bar-level0-inner-panel";
    level0_inner_panel.setAttributeNode( level0_inner_panel_class );
    base_level2_inner_panel.appendChild( level0_inner_panel );

    // draw x-axis title container
    var y_axis_title_container = document.createElement("div");
    var y_axis_title_container_class = document.createAttribute("class");
    y_axis_title_container_class.value = "js-chart-waterfall-bar-y-axis-title-container";
    y_axis_title_container.setAttributeNode( y_axis_title_container_class );
    y_axis_title_container.innerText = i_chart.i_options.ytitle;
    level0_inner_panel.appendChild( y_axis_title_container );

    // draw level1 inner panel
    var level1_inner_panel = document.createElement("div");
    var level1_inner_panel_class = document.createAttribute("class");
    level1_inner_panel_class.value = "js-chart-waterfall-bar-level1-inner-panel";
    level1_inner_panel.setAttributeNode( level1_inner_panel_class );
    level0_inner_panel.appendChild( level1_inner_panel );

    // draw level2 inner panel
    var level2_inner_panel = document.createElement("div");
    var level2_inner_panel_class = document.createAttribute("class");
    level2_inner_panel_class.value = "js-chart-waterfall-bar-level2-inner-panel";
    level2_inner_panel.setAttributeNode( level2_inner_panel_class );
    var level2_inner_panel_style = document.createAttribute("style");
    level2_inner_panel_style.value = "scrollbar-color: " + i_chart.i_design.canvas_scrollbar_color + ";";
    level2_inner_panel.setAttributeNode( level2_inner_panel_style );
    level1_inner_panel.appendChild( level2_inner_panel );

    // draw y-axis legend container
    var y_axis_legend_container = document.createElement("div");
    var y_axis_legend_container_class = document.createAttribute("class");
    y_axis_legend_container_class.value = "js-chart-waterfall-bar-y-axis-legend-container";
    y_axis_legend_container.setAttributeNode( y_axis_legend_container_class );
    level2_inner_panel.appendChild( y_axis_legend_container );

    // draw y-axis legend blocks
    for (var tt = 0; tt < i_chart.i_labels.length; tt++) {

        var y_axis_legend_block = document.createElement("div");
        var y_axis_legend_block_class = document.createAttribute("class");
        y_axis_legend_block_class.value = "js-chart-waterfall-bar-y-axis-legend-block";
        y_axis_legend_block.setAttributeNode( y_axis_legend_block_class );
        y_axis_legend_block.innerText = i_chart.i_labels[tt];
        y_axis_legend_container.appendChild( y_axis_legend_block );

    }

    // draw level3 inner panel
    var level3_inner_panel = document.createElement("div");
    var level3_inner_panel_class = document.createAttribute("class");
    level3_inner_panel_class.value = "js-chart-waterfall-bar-level3-inner-panel";
    level3_inner_panel.setAttributeNode( level3_inner_panel_class );
    level2_inner_panel.appendChild( level3_inner_panel );

    var level3_inner_panel_style_list = [];
    var zero_line = (Math.abs(max_scale_value) / (Math.abs(min_scale_value) + Math.abs(max_scale_value)));
    if (i_chart.i_options.showgridlines) {
        level3_inner_panel_style_list.push( "repeating-linear-gradient(to right, " + i_chart.i_design.grid_line_color + ", " + i_chart.i_design.grid_line_color + " calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(10% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " calc(10% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " 10%)" );
    }
    if (i_chart.i_options.showzeroline) {
        level3_inner_panel_style_list.push( "linear-gradient(to left, " + i_chart.i_design.canvas_bg_color + ", " + i_chart.i_design.canvas_bg_color + " calc(" + (zero_line * 100) + "% - (" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.zero_line_color + " calc(" + (zero_line * 100) + "% - (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.zero_line_color + " calc(" + (zero_line * 100) + "% + (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.canvas_bg_color + " calc(" + (zero_line * 100) + "% + (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.canvas_bg_color + ")" );
    }

    if (level3_inner_panel_style_list.length > 0) {
        var level3_inner_panel_style = document.createAttribute("style");
        level3_inner_panel_style.value = "background: " + level3_inner_panel_style_list.join(", ") + ";";
        level3_inner_panel.setAttributeNode( level3_inner_panel_style );
    }

    // draw x-axis legend container
    var x_axis_legend_container = document.createElement("div");
    var x_axis_legend_container_class = document.createAttribute("class");
    x_axis_legend_container_class.value = "js-chart-waterfall-bar-x-axis-legend-container";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_class );
    level1_inner_panel.appendChild( x_axis_legend_container );

    // draw x-axis scale container
    var x_axis_scale_container = document.createElement("div");
    var x_axis_scale_container_class = document.createAttribute("class");
    x_axis_scale_container_class.value = "js-chart-waterfall-bar-x-axis-scale-container";
    x_axis_scale_container.setAttributeNode( x_axis_scale_container_class );
    x_axis_legend_container.appendChild( x_axis_scale_container );

    for (var tt = 0; tt < 10; tt++) {

        var x_axis_scale_block = document.createElement("div");
        var x_axis_scale_block_class = document.createAttribute("class");
        x_axis_scale_block_class.value = "js-chart-waterfall-bar-x-axis-scale-block";
        x_axis_scale_block.setAttributeNode( x_axis_scale_block_class );
        var x_axis_scale_block_style = document.createAttribute("style");
        x_axis_scale_block_style.value = "border-top: " + i_chart.i_design.scale_border + "; border-right: " + i_chart.i_design.scale_border + ";";
        if (tt == 0) {
            x_axis_scale_block_style.value += "border-left: " + i_chart.i_design.scale_border + ";";
        }
        x_axis_scale_block.setAttributeNode( x_axis_scale_block_style );
        x_axis_scale_container.appendChild( x_axis_scale_block );

    }

    // draw x-axis scale label container
    var x_axis_scale_label_container = document.createElement("div");
    var x_axis_scale_label_container_class = document.createAttribute("class");
    x_axis_scale_label_container_class.value = "js-chart-waterfall-bar-x-axis-scale-label-container";
    x_axis_scale_label_container.setAttributeNode( x_axis_scale_label_container_class );
    x_axis_legend_container.appendChild( x_axis_scale_label_container );

    var max_loop = 10;
    for (var tt = min_scale_value; tt < max_scale_value; tt=(tt+step_value)) {

        var x_axis_scale_label_block = document.createElement("div");
        var x_axis_scale_label_block_class = document.createAttribute("class");
        x_axis_scale_label_block_class.value = "js-chart-waterfall-bar-x-axis-scale-label-block";
        x_axis_scale_label_block.setAttributeNode( x_axis_scale_label_block_class );
        //x_axis_scale_label_block.innerText = roundNumber(tt, num_of_decimals_to_use);
        x_axis_scale_label_container.appendChild( x_axis_scale_label_block );

        var x_axis_scale_label_text_block = document.createElement("div");
        var x_axis_scale_label_text_block_class = document.createAttribute("class");
        x_axis_scale_label_text_block_class.value = "js-chart-waterfall-bar-x-axis-scale-label-text-block";
        x_axis_scale_label_text_block.setAttributeNode( x_axis_scale_label_text_block_class );
        x_axis_scale_label_text_block.innerText = roundNumber(tt, num_of_decimals_to_use);
        x_axis_scale_label_block.appendChild( x_axis_scale_label_text_block );

        max_loop--;
        if (max_loop <= 0) {
            break;
        }
    }

    // draw last x-axis scale label text block
    var last_x_axis_scale_label_text_block = document.createElement("div");
    var last_x_axis_scale_label_text_block_class = document.createAttribute("class");
    last_x_axis_scale_label_text_block_class.value = "js-chart-waterfall-bar-x-axis-scale-label-text-block-last";
    last_x_axis_scale_label_text_block.setAttributeNode( last_x_axis_scale_label_text_block_class );
    last_x_axis_scale_label_text_block.innerText = roundNumber(max_scale_value, num_of_decimals_to_use);
    x_axis_scale_label_block.appendChild( last_x_axis_scale_label_text_block );

    // draw infobox container
    var infobox_container = document.createElement("div");
    var infobox_container_class = document.createAttribute("class");
    infobox_container_class.value = "js-chart-waterfall-bar-infobox-container";
    infobox_container.setAttributeNode( infobox_container_class );
    level0_inner_panel.appendChild( infobox_container );

    // draw y-axis title container
    var x_axis_title_container = document.createElement("div");
    var x_axis_title_container_class = document.createAttribute("class");
    x_axis_title_container_class.value = "js-chart-waterfall-bar-x-axis-title-container";
    x_axis_title_container.setAttributeNode( x_axis_title_container_class );
    x_axis_title_container.innerText = i_chart.i_options.xtitle;
    level0_inner_panel.appendChild( x_axis_title_container );

    return [level3_inner_panel, y_axis_legend_container, x_axis_legend_container ];
}
// draw the level0 containers
function jsChartWaterfallColumnDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    // draw level0 base container
    var level0_container = document.createElement("div");
    var level0_container_class = document.createAttribute("class");
    level0_container_class.value = "js-chart-waterfall-column-level0-container";
    level0_container.setAttributeNode( level0_container_class );
    base_level2_inner_panel.appendChild( level0_container );

    // draw the y-axis container
    var y_axis_container = document.createElement("div");
    var y_axis_container_class = document.createAttribute("class");
    y_axis_container_class.value = "js-chart-waterfall-column-y-axis-container";
    y_axis_container.setAttributeNode( y_axis_container_class );
    level0_container.appendChild( y_axis_container );

    // draw the y-axis title container
    var y_axis_title_container = document.createElement("div");
    var y_axis_title_container_class = document.createAttribute("class");
    y_axis_title_container_class.value = "js-chart-waterfall-column-y-axis-title-container";
    y_axis_title_container.setAttributeNode( y_axis_title_container_class );
    y_axis_title_container.innerText = i_chart.i_options.ytitle;
    y_axis_container.appendChild( y_axis_title_container );

    // draw the y-axis scale label container
    var y_axis_scale_label_container = document.createElement("div");
    var y_axis_scale_label_container_class = document.createAttribute("class");
    y_axis_scale_label_container_class.value = "js-chart-waterfall-column-y-axis-scale-label-container";
    y_axis_scale_label_container.setAttributeNode( y_axis_scale_label_container_class );
    y_axis_container.appendChild( y_axis_scale_label_container );

    var max_loop = 10;
    for (var tt = max_scale_value; tt > min_scale_value; tt=(tt-step_value)) {

        // draw the y-axis scale label block
        var y_axis_scale_label_block = document.createElement("div");
        var y_axis_scale_label_block_class = document.createAttribute("class");
        y_axis_scale_label_block_class.value = "js-chart-waterfall-column-y-axis-scale-label-block";
        y_axis_scale_label_block.setAttributeNode( y_axis_scale_label_block_class );
        y_axis_scale_label_block.innerText = roundNumber(tt, num_of_decimals_to_use);
        y_axis_scale_label_container.appendChild( y_axis_scale_label_block );

        max_loop--;
        if (max_loop == 0) {
            break;
        }
    }

    // draw the last y-axis scale label block
    var last_y_axis_scale_label_block = document.createElement("div");
    var last_y_axis_scale_label_block_class = document.createAttribute("class");
    last_y_axis_scale_label_block_class.value = "js-chart-waterfall-column-y-axis-scale-label-block-last";
    last_y_axis_scale_label_block.setAttributeNode( last_y_axis_scale_label_block_class );
    last_y_axis_scale_label_block.innerText = roundNumber(min_scale_value, num_of_decimals_to_use);
    y_axis_scale_label_container.appendChild( last_y_axis_scale_label_block );

    // draw the y-axis scale container
    var y_axis_scale_container = document.createElement("div");
    var y_axis_scale_container_class = document.createAttribute("class");
    y_axis_scale_container_class.value = "js-chart-waterfall-column-y-axis-scale-container";
    y_axis_scale_container.setAttributeNode( y_axis_scale_container_class );
    y_axis_container.appendChild( y_axis_scale_container );

    for (var tt = 0; tt < 10; tt++) {

        var y_axis_scale_block = document.createElement("div");
        var y_axis_scale_block_class = document.createAttribute("class");
        y_axis_scale_block_class.value = "js-chart-waterfall-column-y-axis-scale-block";
        y_axis_scale_block.setAttributeNode( y_axis_scale_block_class );
        var y_axis_scale_block_style = document.createAttribute("style");
        y_axis_scale_block_style.value = "border-right: " + i_chart.i_design.scale_border + "; border-top: " + i_chart.i_design.scale_border + ";";
        if (tt == 9) {
            y_axis_scale_block_style.value += "border-bottom: " + i_chart.i_design.scale_border + ";";
        }
        y_axis_scale_block.setAttributeNode( y_axis_scale_block_style );
        y_axis_scale_container.appendChild( y_axis_scale_block );

    }

    // draw level1 inner panel
    var level1_inner_panel = document.createElement("div");
    var level1_inner_panel_class = document.createAttribute("class");
    level1_inner_panel_class.value = "js-chart-waterfall-column-level1-inner-panel";
    level1_inner_panel.setAttributeNode( level1_inner_panel_class );
    var level1_inner_panel_style = document.createAttribute("style");
    level1_inner_panel_style.value = "scrollbar-color: " + i_chart.i_design.canvas_scrollbar_color + ";";
    level1_inner_panel.setAttributeNode( level1_inner_panel_style );
    level0_container.appendChild( level1_inner_panel );

    // draw the level2 inner panel
    var level2_inner_panel = document.createElement("div");
    var level2_inner_panel_class = document.createAttribute("class");
    level2_inner_panel_class.value = "js-chart-waterfall-column-level2-inner-panel";
    level2_inner_panel.setAttributeNode( level2_inner_panel_class );
    level1_inner_panel.appendChild( level2_inner_panel );

    var level2_inner_panel_style_list = [];
    var zero_line = (Math.abs(max_scale_value) / (Math.abs(min_scale_value) + Math.abs(max_scale_value)));
    if (i_chart.i_options.showgridlines) {
        level2_inner_panel_style_list.push( "repeating-linear-gradient(to bottom, " + i_chart.i_design.grid_line_color + ", " + i_chart.i_design.grid_line_color + " calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(10% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " calc(10% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " 10%)" );
    }
    if (i_chart.i_options.showzeroline) {
        level2_inner_panel_style_list.push( "linear-gradient(to bottom, " + i_chart.i_design.canvas_bg_color + ", " + i_chart.i_design.canvas_bg_color + " calc(" + (zero_line * 100) + "% - (" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.zero_line_color + " calc(" + (zero_line * 100) + "% - (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.zero_line_color + " calc(" + (zero_line * 100) + "% + (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.canvas_bg_color + " calc(" + (zero_line * 100) + "% + (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.canvas_bg_color + ")" );
    }

    if (level2_inner_panel_style_list.length > 0) {
        var level2_inner_panel_style = document.createAttribute("style");
        level2_inner_panel_style.value = "background: " + level2_inner_panel_style_list.join(", ") + ";";
        level2_inner_panel.setAttributeNode( level2_inner_panel_style );
    }

    // draw the x-axis legend container
    var x_axis_legend_container = document.createElement("div");
    var x_axis_legend_container_class = document.createAttribute("class");
    x_axis_legend_container_class.value = "js-chart-waterfall-column-x-axis-legend-container";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_class );
    level1_inner_panel.appendChild( x_axis_legend_container );

    // draw the x-axis legend blocks
    for (var v = 0; v < i_chart.i_labels.length; v++) {

        var x_axis_legend_block = document.createElement("div");
        var x_axis_legend_block_class = document.createAttribute("class");
        x_axis_legend_block_class.value = "js-chart-waterfall-column-x-axis-legend-block";
        x_axis_legend_block.setAttributeNode( x_axis_legend_block_class );
        var x_axis_legend_block_style = document.createAttribute("style");
        x_axis_legend_block_style.value = "margin: 0px calc(" + i_chart.i_design.value_bar_series_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_series_margin + " / 2);";
        x_axis_legend_block.setAttributeNode( x_axis_legend_block_style );
        x_axis_legend_block.innerText = i_chart.i_labels[v];
        x_axis_legend_container.appendChild( x_axis_legend_block );

    }

    // draw infobox container
    var infobox_container = document.createElement("div");
    var infobox_container_class = document.createAttribute("class");
    infobox_container_class.value = "js-chart-waterfall-column-infobox-container";
    infobox_container.setAttributeNode( infobox_container_class );
    level0_container.appendChild( infobox_container );

    // draw x-axis container
    var x_axis_title_container = document.createElement("div");
    var x_axis_title_container_class = document.createAttribute("class");
    x_axis_title_container_class.value = "js-chart-waterfall-column-x-axis-title-container";
    x_axis_title_container.setAttributeNode( x_axis_title_container_class );
    x_axis_title_container.innerText = i_chart.i_options.xtitle;
    level0_container.appendChild( x_axis_title_container );

    
    return [ level2_inner_panel, y_axis_scale_label_container, y_axis_scale_container, x_axis_legend_container ];
}
// draw function for a waterfall bar chart
function jsChartDrawWaterfallBarChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // calculate the horizontally stacked totals
    var h_totals = {
        "total_value": i_chart.i_data[0][0],
        "total_abs_value": Math.abs(i_chart.i_data[0][0]),
        "min_value": i_chart.i_data[0][0],
        "max_value": i_chart.i_data[0][0],
        "stack": [ i_chart.i_data[0][0] ]
    }

    for (var v = 1; v < i_chart.i_data[0].length; v++) {
        h_totals.total_value += i_chart.i_data[0][v];
        h_totals.total_abs_value += Math.abs(i_chart.i_data[0][v]);
        var temp_h = h_totals.stack[v-1] + i_chart.i_data[0][v];
        h_totals.stack.push( temp_h );
        if (temp_h < h_totals.min_value) {
            h_totals.min_value = temp_h;
        }
        if (temp_h > h_totals.max_value) {
            h_totals.max_value = temp_h;
        }
    }

    // draw the common base containrs
    var legend_labels = i_chart.i_labels;
    // add an extra lbel for the total bar
    legend_labels.push("Total");

    // before we draw the legend, ensure that any custom color palette is long enough -> we require a length of 3 elements
    for (var tt = 0; tt < 3; tt++) {
        if (typeof i_chart.i_design.color_palette[tt] === "undefined") {
            i_chart.i_design.color_palette[tt] = IDEFAULT_DESIGN_TEMPLATES[0].color_palette[tt];
        }
    }

    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["waterfall bar"].data_type, legend_labels);
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
        var calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, h_totals.min_value, h_totals.max_value, 10);
    }

    // draw the level0 containers
    var draw_level0_containers = jsChartWaterfallBarDrawLevel0Containers(base_level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );
    var level3_inner_panel = draw_level0_containers[0];
    var y_axis_legend_container = draw_level0_containers[1];
    var x_axis_legend_container = draw_level0_containers[2];

    // draw the series column containers
    var draw_series_containers = jsChartWaterfallBarDrawSeriesContainers(level3_inner_panel, i_chart);

    // draw the value column containers
    var draw_value_containers = jsChartWaterfallBarDrawValueBars(level3_inner_panel, i_chart, h_totals, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );

    // resize the x-axis legend container
    var x_axis_legend_container_style = document.createAttribute("style");
    x_axis_legend_container_style.value = "width: " + level3_inner_panel.clientWidth + "px;";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_style );

    // resize the y-axis legend container
    var y_axis_legend_container_style = document.createAttribute("style");
    y_axis_legend_container_style.value = "height: " + level3_inner_panel.scrollHeight + "px;";
    y_axis_legend_container.setAttributeNode( y_axis_legend_container_style );

    // set the x-axis legend block line heights
    for (var tt = 0; tt < y_axis_legend_container.children.length; tt++) {
        var y_axis_legend_block_style = document.createAttribute("style");
        y_axis_legend_block_style.value = "line-height: " + y_axis_legend_container.children[tt].scrollHeight + "px;";
        y_axis_legend_container.children[tt].setAttributeNode( y_axis_legend_block_style );
    }

    return true;
}
// draw function for a waterfall column chart
function jsChartDrawWaterfallColumnChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // calculate the horizontally stacked totals
    var h_totals = {
        "total_value": i_chart.i_data[0][0],
        "total_abs_value": Math.abs(i_chart.i_data[0][0]),
        "min_value": i_chart.i_data[0][0],
        "max_value": i_chart.i_data[0][0],
        "stack": [ i_chart.i_data[0][0] ]
    }

    for (var v = 1; v < i_chart.i_data[0].length; v++) {
        h_totals.total_value += i_chart.i_data[0][v];
        h_totals.total_abs_value += Math.abs(i_chart.i_data[0][v]);
        var temp_h = h_totals.stack[v-1] + i_chart.i_data[0][v];
        h_totals.stack.push( temp_h );
        if (temp_h < h_totals.min_value) {
            h_totals.min_value = temp_h;
        }
        if (temp_h > h_totals.max_value) {
            h_totals.max_value = temp_h;
        }
    }

    // draw the common base containrs
    var legend_labels = i_chart.i_labels;
    // add an extra lbel for the total column
    legend_labels.push("Total");

    // before we draw the legend, ensure that any custom color palette is long enough -> we require a length of 3 elements
    for (var tt = 0; tt < 3; tt++) {
        if (typeof i_chart.i_design.color_palette[tt] === "undefined") {
            i_chart.i_design.color_palette[tt] = IDEFAULT_DESIGN_TEMPLATES[0].color_palette[tt];
        }
    }

    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["waterfall column"].data_type, legend_labels);
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
        var calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, h_totals.min_value, h_totals.max_value, 10);
    }

    // draw the level0 containers
    var draw_level0_containers = jsChartWaterfallColumnDrawLevel0Containers(base_level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_scale_label_container = draw_level0_containers[1];
    var y_axis_scale_container = draw_level0_containers[2];
    var x_axis_legend_container = draw_level0_containers[3];

    // draw the series column containers
    var draw_series_containers = jsChartWaterfallColumnDrawSeriesContainers(level2_inner_panel, i_chart);

    // draw the value column containers
    var draw_value_containers = jsChartWaterfallColumnDrawValueBars(level2_inner_panel, i_chart, h_totals, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );

    // resize the y-axis scale label container
    var y_axis_scale_label_container_style = document.createAttribute("style");
    y_axis_scale_label_container_style.value = "height: " + level2_inner_panel.scrollHeight + "px;";
    y_axis_scale_label_container.setAttributeNode( y_axis_scale_label_container_style );

    // resize the y-axis scale container
    var y_axis_scale_container_style = document.createAttribute("style");
    y_axis_scale_container_style.value = "height: " + level2_inner_panel.scrollHeight + "px;";
    y_axis_scale_container.setAttributeNode( y_axis_scale_container_style );

    // resize the x-axis legend container
    var x_axis_legend_container_style = document.createAttribute("style");
    x_axis_legend_container_style.value = "width: " + level2_inner_panel.scrollWidth + "px;";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_style );

    return true;
}
