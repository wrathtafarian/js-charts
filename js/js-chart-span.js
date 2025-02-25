// draw the column value containers
function jsChartColumnDrawRangeContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var total_range = Math.abs(max_scale_value) + Math.abs(min_scale_value);

    var color_index = 0;
    for (var v = 0; v < level2_inner_panel.children.length; v++) {
        for (var s = 0; s < i_chart.i_data.length; s++) {

            var range_diff = i_chart.i_data[s]["high_values"][v] - i_chart.i_data[s]["low_values"][v];

            // draw value column container
            var value_column_container = document.createElement("div");
            var value_column_container_class = document.createAttribute("class");
            value_column_container_class.value = "js-chart-column-value-column-container";
            value_column_container.setAttributeNode( value_column_container_class );
            level2_inner_panel.children[v].appendChild( value_column_container );

            // draw the positive spacer container
            var p_spacer_container_height = ((Math.abs(max_scale_value) - Math.abs(i_chart.i_data[s]["high_values"][v])) / total_range) * 100;
            var p_spacer_container = document.createElement("div");
            var p_spacer_container_class = document.createAttribute("class");
            p_spacer_container_class.value = "js-chart-column-positive-spacer-container";
            p_spacer_container.setAttributeNode( p_spacer_container_class );
            var p_spacer_container_style = document.createAttribute("style");
            p_spacer_container_style.value = "height: " + p_spacer_container_height + "%;";
            p_spacer_container.setAttributeNode( p_spacer_container_style );
            value_column_container.appendChild( p_spacer_container );

            // draw the value column container
            var value_column_height = (Math.abs(range_diff) / total_range) * 100;

            var value_column = document.createElement("div");
            var value_column_class = document.createAttribute("class");
            value_column_class.value = "js-chart-column-value-column";
            value_column.setAttributeNode( value_column_class );
            var value_column_title = document.createAttribute("title");
            value_column_title.value = i_chart.i_titles[s] + "\n" + i_chart.i_labels[v] + "\nRange: " + range_diff + "\nHigh: " + i_chart.i_data[s]["high_values"][v] + "\nLow: " + i_chart.i_data[s]["low_values"][v];
            value_column.setAttributeNode( value_column_title );
            var value_column_style = document.createAttribute("style");
            value_column_style.value = "min-height: " + i_chart.i_design.value_bar_min_height + "; height: " + value_column_height + "%; background-color: " + i_chart.i_design.color_palette[color_index] + "; min-width: " + i_chart.i_design.value_bar_min_width + "; border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2);";
            value_column.setAttributeNode( value_column_style );
            value_column_container.appendChild( value_column );

            // draw the data label
            if (i_chart.i_options.showlabels) {

                var datalabel_container = document.createElement("div");
                var datalabel_container_class = document.createAttribute("class");
                datalabel_container_class.value = "js-chart-column-data-label-container";
                datalabel_container.setAttributeNode( datalabel_container_class );
                var datalabel_container_style = document.createAttribute("style");
                datalabel_container_style.value = "position: absolute; left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; text-align: center; font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
                datalabel_container.setAttributeNode( datalabel_container_style );
                //datalabel_container.innerText = jsChartCommonFormatChartAmount(roundNumber(range_diff, num_of_decimals_to_use), i_chart.i_design.datalabel_append, i_chart.i_design.datalabel_prepend);
                datalabel_container.innerText = range_diff;
                value_column.appendChild( datalabel_container );
            }

            // draw the negative spacer container
            var n_spacer_container_height = Math.abs(((min_scale_value - i_chart.i_data[s]["low_values"][v]) / total_range) * 100);
            var n_spacer_container = document.createElement("div");
            var n_spacer_container_class = document.createAttribute("class");
            n_spacer_container_class.value = "js-chart-column-negative-spacer-container";
            n_spacer_container.setAttributeNode( n_spacer_container_class );
            var n_spacer_container_style = document.createAttribute("style");
            n_spacer_container_style.value = "height: " + n_spacer_container_height + "%;";
            n_spacer_container.setAttributeNode( n_spacer_container_style );
            value_column_container.appendChild( n_spacer_container );

            color_index++;
            if (color_index >= i_chart.i_design.color_palette.length) {
                color_index = 0;
            }
        }

        if (i_chart.i_data.length > 1) {
            color_index = 0;
        }
    }

    return true;
}
// draw the level2 value containers and bars
function jsChartBarDrawLevel2SeriesValueBars(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var total_range = max_scale_value - (min_scale_value);

    var color_index = 0;
    for (var s = 0; s < i_chart.i_data.length; s++) {
        for (var v = 0; v < i_chart.i_data[s]["low_values"].length; v++) {

            // draw the value bar container
            var value_bar_container = document.createElement("div");
            var value_bar_container_class = document.createAttribute("class");
            value_bar_container_class.value = "js-chart-bar-value-bar-container";
            value_bar_container.setAttributeNode( value_bar_container_class );
            level2_inner_panel.children[v].appendChild( value_bar_container );

            // inside the value bar container -- add the negative spacer
            var n_spacer_width = Math.abs(((min_scale_value - i_chart.i_data[s]["low_values"][v]) / total_range) * 100);

            var n_spacer = document.createElement("div");
            var n_spacer_class = document.createAttribute("class");
            n_spacer_class.value = "js-chart-bar-negative-spacer";
            n_spacer.setAttributeNode( n_spacer_class );
            var n_spacer_style = document.createAttribute("style");
            n_spacer_style.value = "width: " + n_spacer_width + "%;";
            n_spacer.setAttributeNode( n_spacer_style );
            value_bar_container.appendChild( n_spacer );

            // inside the value bar container -- add the negative bar (if it exists)
            var range_diff = i_chart.i_data[s]["high_values"][v] - i_chart.i_data[s]["low_values"][v];
            var value_bar_block_width = Math.abs((range_diff / total_range ) * 100);

            var value_bar_block = document.createElement("div");
            var value_bar_block_class = document.createAttribute("class");
            value_bar_block_class.value = "js-chart-bar-value-bar-block";
            value_bar_block.setAttributeNode( value_bar_block_class );
            var value_bar_block_title = document.createAttribute("title");
            value_bar_block_title.value = i_chart.i_titles[s] + "\n" + i_chart.i_labels[v] + "\nRange: " + range_diff + "\nLow: " + i_chart.i_data[s]["low_values"][v] + "\nHigh: " + i_chart.i_data[s]["high_values"][v];
            value_bar_block.setAttributeNode( value_bar_block_title );
            var value_bar_block_style = document.createAttribute("style");
            value_bar_block_style.value = "width: " + value_bar_block_width + "%; min-height: " + i_chart.i_design.value_bar_min_height + "; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px;";
            value_bar_block.setAttributeNode( value_bar_block_style );
            value_bar_container.appendChild( value_bar_block );

            // data labels
            if (i_chart.i_options.showlabels) {

                var data_label = document.createElement("div");
                var data_label_class = document.createAttribute("class");
                data_label_class.value = "js-chart-bar-data-label-container";
                data_label.setAttributeNode( data_label_class );
                var data_label_style = document.createAttribute("style");
                data_label_style.value = "position: absolute; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height+ "; line-height: " + i_chart.i_design.datalabel_height+ "; text-align: center; top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
                data_label.setAttributeNode( data_label_style );
                data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(range_diff, num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                value_bar_block.appendChild( data_label );

            }

            // inside the value bar container -- add the positive spacer
            var p_spacer_width = ((Math.abs(max_scale_value) - Math.abs(i_chart.i_data[s]["high_values"][v])) / total_range) * 100;

            var p_spacer = document.createElement("div");
            var p_spacer_class = document.createAttribute("class");
            p_spacer_class.value = "js-chart-bar-positive-spacer";
            p_spacer.setAttributeNode( p_spacer_class );
            var p_spacer_style = document.createAttribute("style");
            p_spacer_style.value = "width: " + p_spacer_width + "%;";
            p_spacer.setAttributeNode( p_spacer_style );
            value_bar_container.appendChild( p_spacer );

            if (i_chart.i_data.length == 1) {
                color_index++;
                if (color_index >= i_chart.i_design.color_palette.length) {
                    color_index = 0;
                }
            }
    
        }
        if (i_chart.i_data.length > 1) {
            color_index++;
            if (color_index >= i_chart.i_design.color_palette.length) {
                color_index = 0;
            }
        }
    }

    return true;
}
// draw the series containers
function jsChartColumnDrawRangeSeriesColumns(level2_inner_panel, i_chart) {

    // determine the maximum length of all data series
    var max_len = 0;
    for (var tt = 0; tt < i_chart.i_data.length; tt++) {
        if (i_chart.i_data[tt]["low_values"].length > max_len) {
            max_len = i_chart.i_data[tt]["low_values"].length;
        }
    }

    // draw the series column containers
    for (var v = 0; v < max_len; v++) {

        var series_column_container = document.createElement("div");
        var series_column_container_class = document.createAttribute("class");
        series_column_container_class.value = "js-chart-column-series-column-container";
        series_column_container.setAttributeNode( series_column_container_class );
        var series_column_container_style = document.createAttribute("style");
        series_column_container_style.value = "margin: 0px calc(" + i_chart.i_design.value_bar_series_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_series_margin + " / 2);";
        series_column_container.setAttributeNode( series_column_container_style );
        level2_inner_panel.appendChild( series_column_container );

    }

    return true;
}
// draw the level2 series containers
function jsChartBarDrawLevel2SeriesContainers(level2_inner_panel, i_chart) {

    // determine the maximum no. of series containers
    var max_series_len = i_chart.i_data[0]["low_values"].length;
    for (var s = 1; s < i_chart.i_data.length; s++) {
        if (i_chart.i_data[s]["low_values"].length > max_series_len) {
            max_series_len = i_chart.i_data[s]["low_values"].length;
        }
    }

    // draw one containers per value in the series
    for (var v = 0; v < max_series_len; v++) {

        var series_value_container = document.createElement("div");
        var series_value_container_class = document.createAttribute("class");
        series_value_container_class.value = "js-chart-bar-series-value-container";
        series_value_container.setAttributeNode( series_value_container_class );
        var series_value_container_style = document.createAttribute("style");
        series_value_container_style.value = "margin: calc(" + i_chart.i_design.value_bar_series_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_series_margin + " / 2) 0px;";
        series_value_container.setAttributeNode( series_value_container_style );
        level2_inner_panel.appendChild( series_value_container );
    }

    return true;
}
// draw the level0 containers
function jsChartColumnDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use ) {

    // draw level0 container
    var column_level0_container = document.createElement("div");
    var column_level0_container_class = document.createAttribute("class");
    column_level0_container_class.value = "js-chart-column-level0-container";
    column_level0_container.setAttributeNode( column_level0_container_class );
    base_level2_inner_panel.appendChild( column_level0_container );

    // draw the y-axis container
    var y_axis_container = document.createElement("div");
    var y_axis_container_class = document.createAttribute("class");
    y_axis_container_class.value = "js-chart-column-y-axis-container";
    y_axis_container.setAttributeNode( y_axis_container_class );
    column_level0_container.appendChild( y_axis_container );

    // draw the y-axis title container
    var y_axis_title_container = document.createElement("div");
    var y_axis_title_container_class = document.createAttribute("class");
    y_axis_title_container_class.value = "js-chart-column-y-axis-title-container";
    y_axis_title_container.setAttributeNode( y_axis_title_container_class );
    var y_axis_title_container_title = document.createAttribute("title");
    y_axis_title_container_title.value = i_chart.i_options.ytitle;
    y_axis_title_container.setAttributeNode( y_axis_title_container_title );
    y_axis_title_container.innerText = i_chart.i_options.ytitle;
    y_axis_container.appendChild( y_axis_title_container );

    // draw the y-axis scale label container
    var y_axis_scale_label_container = document.createElement("div");
    var y_axis_scale_label_container_class = document.createAttribute("class");
    y_axis_scale_label_container_class.value = "js-chart-column-y-axis-scale-label-container";
    y_axis_scale_label_container.setAttributeNode( y_axis_scale_label_container_class );
    y_axis_container.appendChild( y_axis_scale_label_container );

    var max_loop = total_steps;
    for (var tt = max_scale_value; tt > min_scale_value; tt=(tt-step_value)) {

        var y_axis_scale_label_block = document.createElement("div");
        var y_axis_scale_label_block_class = document.createAttribute("class");
        y_axis_scale_label_block_class.value = "js-chart-column-y-axis-scale-label-block";
        y_axis_scale_label_block.setAttributeNode( y_axis_scale_label_block_class );
        var y_axis_scale_label_block_title = document.createAttribute("title");
        y_axis_scale_label_block_title.value = roundNumber(tt, num_of_decimals_to_use);
        y_axis_scale_label_block.setAttributeNode( y_axis_scale_label_block_title );
        if (i_chart.type.indexOf("100%") > -1) {
            y_axis_scale_label_block.innerText = roundNumber(tt, num_of_decimals_to_use) + "%";
        } else {
            y_axis_scale_label_block.innerText = roundNumber(tt, num_of_decimals_to_use);
        }
        y_axis_scale_label_container.appendChild( y_axis_scale_label_block );

        max_loop--;
        if (max_loop <= 0) {
            break;
        }
    }

    // draw the last y-axis scale label
    var last_y_axis_scale_label_block = document.createElement("div");
    var last_y_axis_scale_label_block_class = document.createAttribute("class");
    last_y_axis_scale_label_block_class.value = "js-chart-column-y-axis-scale-label-block-last";
    last_y_axis_scale_label_block.setAttributeNode( last_y_axis_scale_label_block_class );
    var last_y_axis_scale_label_block_title = document.createAttribute("title");
    last_y_axis_scale_label_block_title.value = roundNumber(min_scale_value, num_of_decimals_to_use);
    last_y_axis_scale_label_block.setAttributeNode( last_y_axis_scale_label_block_title );
    if (i_chart.type.indexOf("100%") > -1) {
        last_y_axis_scale_label_block.innerText = roundNumber(min_scale_value, num_of_decimals_to_use) + "%";
    } else {
        last_y_axis_scale_label_block.innerText = roundNumber(min_scale_value, num_of_decimals_to_use);
    }
    y_axis_scale_label_container.appendChild( last_y_axis_scale_label_block );

    // draw the y-axis scale container
    var y_axis_scale_container = document.createElement("div");
    var y_axis_scale_container_class = document.createAttribute("class");
    y_axis_scale_container_class.value = "js-chart-column-y-axis-scale-container";
    y_axis_scale_container.setAttributeNode( y_axis_scale_container_class );
    y_axis_container.appendChild( y_axis_scale_container );

    for (var tt = 0; tt < total_steps; tt++) {

        var y_axis_scale_block = document.createElement("div");
        var y_axis_scale_block_class = document.createAttribute("class");
        y_axis_scale_block_class.value = "js-chart-column-y-axis-scale-block";
        y_axis_scale_block.setAttributeNode( y_axis_scale_block_class );
        var y_axis_scale_block_style = document.createAttribute("style");
        y_axis_scale_block_style.value = "border-right: " + i_chart.i_design.scale_border + "; border-top: " + i_chart.i_design.scale_border + ";";
        if (tt == (total_steps - 1)) {
            y_axis_scale_block_style.value += "border-bottom: " + i_chart.i_design.scale_border + ";";
        }
        y_axis_scale_block.setAttributeNode( y_axis_scale_block_style );
        y_axis_scale_container.appendChild( y_axis_scale_block );

    }

    // draw the level1 inner panel
    var level1_inner_panel = document.createElement("div");
    var level1_inner_panel_class = document.createAttribute("class");
    level1_inner_panel_class.value = "js-chart-column-level1-inner-panel";
    level1_inner_panel.setAttributeNode( level1_inner_panel_class );
    var level1_inner_panel_style = document.createAttribute("style");
    level1_inner_panel_style.value = "scrollbar-color: " + i_chart.i_design.canvas_scrollbar_color + ";";
    level1_inner_panel.setAttributeNode( level1_inner_panel_style );
    column_level0_container.appendChild( level1_inner_panel );

    // draw level2 inner panel
    var level2_inner_panel = document.createElement("div");
    var level2_inner_panel_class = document.createAttribute("class");
    level2_inner_panel_class.value = "js-chart-column-level2-inner-panel";
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

    // draw x-axis legend container
    var x_axis_legend_container = document.createElement("div");
    var x_axis_legend_container_class = document.createAttribute("class");
    x_axis_legend_container_class.value = "js-chart-column-x-axis-legend-container";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_class );
    level1_inner_panel.appendChild( x_axis_legend_container );

    for (var tt = 0; tt < i_chart.i_labels.length; tt++) {

        var x_axis_legend_block = document.createElement("div");
        var x_axis_legend_block_class = document.createAttribute("class");
        x_axis_legend_block_class.value = "js-chart-column-x-axis-legend-block";
        x_axis_legend_block.setAttributeNode( x_axis_legend_block_class );
        if (tt < (i_chart.i_labels.length - 1)) {
            var x_axis_legend_block_style = document.createAttribute("style");
            x_axis_legend_block_style.value = "border-right: " + i_chart.i_design.scale_border + ";";
            x_axis_legend_block.setAttributeNode( x_axis_legend_block_style );
        }
        x_axis_legend_block.innerText = i_chart.i_labels[tt];
        x_axis_legend_container.appendChild( x_axis_legend_block );

    }

    // draw the infobox container
    var infobox_container = document.createElement("div");
    var infobox_container_class = document.createAttribute("class");
    infobox_container_class.value = "js-chart-column-infobox-container";
    infobox_container.setAttributeNode( infobox_container_class );
    column_level0_container.appendChild( infobox_container );

    // draw the x-axis title container
    var x_axis_title_container = document.createElement("div");
    var x_axis_title_container_class = document.createAttribute("class");
    x_axis_title_container_class.value = "js-chart-column-x-axis-title-container";
    x_axis_title_container.setAttributeNode( x_axis_title_container_class );
    var x_axis_title_container_title = document.createAttribute("title");
    x_axis_title_container_title.value = i_chart.i_options.xtitle;
    x_axis_title_container.setAttributeNode( x_axis_title_container_title );
    x_axis_title_container.innerText = i_chart.i_options.xtitle;
    column_level0_container.appendChild( x_axis_title_container );

    return [ level2_inner_panel, y_axis_scale_label_container, y_axis_scale_container, x_axis_legend_container ];
}
// draw level0 base container
function jsChartBarDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    // draw level 0 base container (grid)
    var bar_level0_container = document.createElement("div");
    var bar_level0_container_class = document.createAttribute("class");
    bar_level0_container_class.value = "js-chart-bar-level0-container";
    bar_level0_container.setAttributeNode( bar_level0_container_class );
    base_level2_inner_panel.appendChild( bar_level0_container );

    // draw y-axis title container
    var y_axis_title_container = document.createElement("div");
    var y_axis_title_container_class = document.createAttribute("class");
    y_axis_title_container_class.value = "js-chart-bar-y-axis-title-container";
    y_axis_title_container.setAttributeNode( y_axis_title_container_class );
    var y_axis_title_container_title = document.createAttribute("title");
    y_axis_title_container_title.value = i_chart.i_options.ytitle;
    y_axis_title_container.setAttributeNode( y_axis_title_container_title );
    y_axis_title_container.innerText = i_chart.i_options.ytitle;
    bar_level0_container.appendChild( y_axis_title_container );

    // draw bar level1 container
    var bar_level1_container = document.createElement("div");
    var bar_level1_container_class = document.createAttribute("class");
    bar_level1_container_class.value = "js-chart-bar-level1-container";
    bar_level1_container.setAttributeNode( bar_level1_container_class );
    bar_level0_container.appendChild( bar_level1_container );

    // draw bar level 1 inner panel
    var bar_level1_inner_panel = document.createElement("div");
    var bar_level1_inner_panel_class = document.createAttribute("class");
    bar_level1_inner_panel_class.value = "js-chart-bar-level1-inner-panel";
    bar_level1_inner_panel.setAttributeNode( bar_level1_inner_panel_class );
    var bar_level1_inner_panel_style = document.createAttribute("style");
    bar_level1_inner_panel_style.value = "scrollbar-color: " + i_chart.i_design.canvas_scrollbar_color + ";";
    bar_level1_inner_panel.setAttributeNode( bar_level1_inner_panel_style );
    bar_level1_container.appendChild( bar_level1_inner_panel );

    // draw level2 container
    var bar_level2_container = document.createElement("div");
    var bar_level2_container_class = document.createAttribute("class");
    bar_level2_container_class.value = "js-chart-bar-level2-container";
    bar_level2_container.setAttributeNode( bar_level2_container_class );
    bar_level1_inner_panel.appendChild( bar_level2_container );

    // draw level2 y-axis legend
    var bar_level2_y_axis_legend_container = document.createElement("div");
    var bar_level2_y_axis_legend_container_class = document.createAttribute("class");
    bar_level2_y_axis_legend_container_class.value = "js-chart-bar-level2-y-axis-legend-container";
    bar_level2_y_axis_legend_container.setAttributeNode( bar_level2_y_axis_legend_container_class );
    bar_level2_container.appendChild( bar_level2_y_axis_legend_container );

    for (var s = 0; s < i_chart.i_labels.length; s++) {

        var bar_level2_y_axis_legend_block = document.createElement("div");
        var bar_level2_y_axis_legend_block_class = document.createAttribute("class");
        bar_level2_y_axis_legend_block_class.value = "js-chart-bar-level2-y-axis-legend-block";
        bar_level2_y_axis_legend_block.setAttributeNode( bar_level2_y_axis_legend_block_class );
        var bar_level2_y_axis_legend_block_title = document.createAttribute("title");
        bar_level2_y_axis_legend_block_title.value = i_chart.i_labels[s];
        bar_level2_y_axis_legend_block.setAttributeNode( bar_level2_y_axis_legend_block_title );
        bar_level2_y_axis_legend_block.innerText = i_chart.i_labels[s];
        bar_level2_y_axis_legend_container.appendChild( bar_level2_y_axis_legend_block );

    }

        // draw level2 inner panel
    var bar_level2_inner_panel = document.createElement("div");
    var bar_level2_inner_panel_class = document.createAttribute("class");
    bar_level2_inner_panel_class.value = "js-chart-bar-level2-inner-panel";
    bar_level2_inner_panel.setAttributeNode( bar_level2_inner_panel_class );
    bar_level2_container.appendChild( bar_level2_inner_panel );

    var level2_inner_panel_style_list = [];
    var zero_line = (Math.abs(max_scale_value) / (Math.abs(min_scale_value) + Math.abs(max_scale_value)));
    if (i_chart.i_options.showgridlines) {
        level2_inner_panel_style_list.push( "repeating-linear-gradient(to right, " + i_chart.i_design.grid_line_color + ", " + i_chart.i_design.grid_line_color + " calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(10% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " calc(10% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " 10%)" );
    }
    if (i_chart.i_options.showzeroline) {
        level2_inner_panel_style_list.push( "linear-gradient(to left, " + i_chart.i_design.canvas_bg_color + ", " + i_chart.i_design.canvas_bg_color + " calc(" + (zero_line * 100) + "% - (" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.zero_line_color + " calc(" + (zero_line * 100) + "% - (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.zero_line_color + " calc(" + (zero_line * 100) + "% + (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.canvas_bg_color + " calc(" + (zero_line * 100) + "% + (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.canvas_bg_color + ")" );
    }

    if (level2_inner_panel_style_list.length > 0) {
        var level2_inner_panel_style = document.createAttribute("style");
        level2_inner_panel_style.value = "background: " + level2_inner_panel_style_list.join(", ") + ";";
        bar_level2_inner_panel.setAttributeNode( level2_inner_panel_style );
    }

    // draw bar x-axis container
    var bar_level1_x_axis_container = document.createElement("div");
    var bar_level1_x_axis_container_class = document.createAttribute("class");
    bar_level1_x_axis_container_class.value = "js-chart-bar-level1-x-axis-container";
    bar_level1_x_axis_container.setAttributeNode( bar_level1_x_axis_container_class );
    bar_level1_container.appendChild( bar_level1_x_axis_container );

    // draw bar x-axis scale container
    var bar_level1_x_axis_scale_container = document.createElement("div");
    var bar_level1_x_axis_scale_container_class = document.createAttribute("class");
    bar_level1_x_axis_scale_container_class.value = "js-chart-bar-level1-x-axis-scale-container";
    bar_level1_x_axis_scale_container.setAttributeNode( bar_level1_x_axis_scale_container_class );
    bar_level1_x_axis_container.appendChild( bar_level1_x_axis_scale_container );

    var max_loop = 0;
    for (var tt = 0; tt < total_steps; tt++) {

        var bar_level1_x_axis_scale_block = document.createElement("div");
        var bar_level1_x_axis_scale_block_class = document.createAttribute("class");
        bar_level1_x_axis_scale_block_class.value = "js-chart-bar-level1-x-axis-scale-block";
        bar_level1_x_axis_scale_block.setAttributeNode( bar_level1_x_axis_scale_block_class );
        var bar_level1_x_axis_scale_block_style = document.createAttribute("style");
        bar_level1_x_axis_scale_block_style.value = "border-top: " + i_chart.i_design.scale_border+ "; border-left: " + i_chart.i_design.scale_border + ";";
        if (max_loop == 9) {
            bar_level1_x_axis_scale_block_style.value += "border-right: " + i_chart.i_design.scale_border+ ";";
        }
        bar_level1_x_axis_scale_block.setAttributeNode( bar_level1_x_axis_scale_block_style );
        bar_level1_x_axis_scale_container.appendChild( bar_level1_x_axis_scale_block );

        max_loop++;
        if (max_loop == 10) {
            break;
        }
    }

    // draw bar x-axis scale label container
    var bar_level1_x_axis_scale_label_container = document.createElement("div");
    var bar_level1_x_axis_scale_label_container_class = document.createAttribute("class");
    bar_level1_x_axis_scale_label_container_class.value = "js-chart-bar-level1-x-axis-scale-label-container";
    bar_level1_x_axis_scale_label_container.setAttributeNode( bar_level1_x_axis_scale_label_container_class );
    bar_level1_x_axis_container.appendChild( bar_level1_x_axis_scale_label_container );

    // draw the x-axis scale labels
    for (var tt = min_scale_value; tt < max_scale_value; tt=(tt+step_value)) {

        // flex block
        var bar_level1_x_axis_scale_label_block = document.createElement("div");
        var bar_level1_x_axis_scale_label_block_class = document.createAttribute("class");
        bar_level1_x_axis_scale_label_block_class.value = "js-chart-bar-level1-x-axis-scale-label-block";
        bar_level1_x_axis_scale_label_block.setAttributeNode( bar_level1_x_axis_scale_label_block_class );
        bar_level1_x_axis_scale_label_container.appendChild( bar_level1_x_axis_scale_label_block );

        // absolute block
        var bar_level1_x_axis_scale_label = document.createElement("div");
        var bar_level1_x_axis_scale_label_class = document.createAttribute("class");
        bar_level1_x_axis_scale_label_class.value = "js-chart-bar-level1-x-axis-scale-label";
        bar_level1_x_axis_scale_label.setAttributeNode( bar_level1_x_axis_scale_label_class );
        var bar_level1_x_axis_scale_label_title = document.createAttribute("title");
        bar_level1_x_axis_scale_label_title.value = roundNumber(tt, num_of_decimals_to_use);
        bar_level1_x_axis_scale_label.setAttributeNode( bar_level1_x_axis_scale_label_title );
        var bar_level1_x_axis_scale_label_style = document.createAttribute("style");
        bar_level1_x_axis_scale_label_style.value = "color: " + i_chart.i_design.scale_text_color + ";";
        bar_level1_x_axis_scale_label.setAttributeNode( bar_level1_x_axis_scale_label_style );
        if (i_chart.type.indexOf("100%") > -1) {
            bar_level1_x_axis_scale_label.innerText = roundNumber(tt, num_of_decimals_to_use) + "%";
        } else {
            bar_level1_x_axis_scale_label.innerText = roundNumber(tt, num_of_decimals_to_use);
        }
        bar_level1_x_axis_scale_label_block.appendChild( bar_level1_x_axis_scale_label );
    }

    // last absolute block
    var last_bar_level1_x_axis_scale_label = document.createElement("div");
    var last_bar_level1_x_axis_scale_label_class = document.createAttribute("class");
    last_bar_level1_x_axis_scale_label_class.value = "js-chart-bar-level1-x-axis-scale-label-last";
    last_bar_level1_x_axis_scale_label.setAttributeNode( last_bar_level1_x_axis_scale_label_class );
    var last_bar_level1_x_axis_scale_label_title = document.createAttribute("title");
    last_bar_level1_x_axis_scale_label_title.value = roundNumber(max_scale_value, num_of_decimals_to_use);
    last_bar_level1_x_axis_scale_label.setAttributeNode( last_bar_level1_x_axis_scale_label_title );
    var last_bar_level1_x_axis_scale_label_style = document.createAttribute("style");
    last_bar_level1_x_axis_scale_label_style.value = "color: " + i_chart.i_design.scale_text_color + ";";
    last_bar_level1_x_axis_scale_label.setAttributeNode( last_bar_level1_x_axis_scale_label_style );
    if (i_chart.type.indexOf("100%") > -1) {
        last_bar_level1_x_axis_scale_label.innerText = roundNumber(max_scale_value, num_of_decimals_to_use) + "%";
    } else {
        last_bar_level1_x_axis_scale_label.innerText = roundNumber(max_scale_value, num_of_decimals_to_use);
    }
    bar_level1_x_axis_scale_label_block.appendChild( last_bar_level1_x_axis_scale_label );

    // draw bar infobox container
    var bar_infobox_container = document.createElement("div");
    var bar_infobox_container_class = document.createAttribute("class");
    bar_infobox_container_class.value = "js-chart-bar-infobox-container";
    bar_infobox_container.setAttributeNode( bar_infobox_container_class );
    bar_level0_container.appendChild( bar_infobox_container );

    // draw bar x-axis title container
    var x_axis_title_container = document.createElement("div");
    var x_axis_title_container_class = document.createAttribute("class");
    x_axis_title_container_class.value = "js-chart-bar-x-axis-title-container";
    x_axis_title_container.setAttributeNode( x_axis_title_container_class );
    var x_axis_title_container_title = document.createAttribute("title");
    x_axis_title_container_title.value = i_chart.i_options.xtitle;
    x_axis_title_container.setAttributeNode( x_axis_title_container_title );
    x_axis_title_container.innerText = i_chart.i_options.xtitle;
    bar_level0_container.appendChild( x_axis_title_container );

    return [ bar_level2_inner_panel, bar_level2_y_axis_legend_container, bar_level1_x_axis_scale_container, bar_level1_x_axis_scale_label_container ];
}
// draw function for a span column chart
function jsChartDrawSpanColumnChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    if (i_chart.i_data.length == 1) {
        var legend_labels = i_chart.i_labels;
    } else {
        var legend_labels = i_chart.i_titles;
    }
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["span column"].data_type, legend_labels);
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

    // draw the level0 containers
    var draw_level0_containers = jsChartColumnDrawLevel0Containers(base_level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_scale_label_container = draw_level0_containers[1];
    var y_axis_scale_container = draw_level0_containers[2];
    var x_axis_legend_container = draw_level0_containers[3];

    // draw the series containers
    var draw_series_containers = jsChartColumnDrawRangeSeriesColumns(level2_inner_panel, i_chart);

    // draw the column value containers
    var draw_value_containers = jsChartColumnDrawRangeContainers(level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );

    // resize the y-axis scale label container
    var y_axis_scale_label_container_style = document.createAttribute("style");
    y_axis_scale_label_container_style.value = "height: " + level2_inner_panel.clientHeight + "px;";
    y_axis_scale_label_container.setAttributeNode( y_axis_scale_label_container_style );

    // resize the y-axis scale container
    var y_axis_scale_container_style = document.createAttribute("style");
    y_axis_scale_container_style.value = "height: " + level2_inner_panel.clientHeight + "px;";
    y_axis_scale_container.setAttributeNode( y_axis_scale_container_style );

    // resize the x-axis legend container
    var x_axis_legend_container_style = document.createAttribute("style");
    x_axis_legend_container_style.value = "width: " + level2_inner_panel.scrollWidth + "px;";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_style );

    return true;
}
// draw function for a span bar chart
function jsChartDrawSpanBarChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    if (i_chart.i_data.length == 1) {
        var legend_labels = i_chart.i_labels;
    } else {
        var legend_labels = i_chart.i_titles;
    }
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["span bar"].data_type, legend_labels);
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
        var calculate_scale = [ this_scalemin, this_scalemax, ((this_scalemax - (this_scalemin)) / 10), 10, 2 ];
    } else {
        var calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, null, null, 10);
    }

    // draw level0 base container
    // - y-axis title
    // - x-axis title
    // - y-axis legend container
    // - level2 inner panel
    // - x-axis scale container
    //   - x-axis scale
    //   - x-axis scale label
    var draw_level1_containers = jsChartBarDrawLevel0Containers(base_level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );
    var level2_inner_panel = draw_level1_containers[0];
    var bar_level2_y_axis_legend_container = draw_level1_containers[1];
    var bar_level1_x_axis_scale_container = draw_level1_containers[2];
    var bar_level1_x_axis_scale_label_container = draw_level1_containers[3];

    // draw the level2 series containers
    var draw_level2_series_containers = jsChartBarDrawLevel2SeriesContainers(level2_inner_panel, i_chart);

    // draw the level2 valuecontainers and bars
    var draw_level2_series_bars = jsChartBarDrawLevel2SeriesValueBars(level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );

    // resize the y-axis legend container
    var bar_level2_y_axis_legend_container_style = document.createAttribute("style");
    bar_level2_y_axis_legend_container_style.value = "height: " + level2_inner_panel.scrollHeight + "px;";
    bar_level2_y_axis_legend_container.setAttributeNode( bar_level2_y_axis_legend_container_style );

    // resize the x-axis scale container
    var bar_level1_x_axis_scale_container_style = document.createAttribute("style");
    bar_level1_x_axis_scale_container_style.value = "width: " + level2_inner_panel.clientWidth + "px; left: " + bar_level2_y_axis_legend_container.clientWidth + "px;";
    bar_level1_x_axis_scale_container.setAttributeNode( bar_level1_x_axis_scale_container_style );

    // resize the x-axis scale label container
    var bar_level1_x_axis_scale_label_container_style = document.createAttribute("style");
    bar_level1_x_axis_scale_label_container_style.value = "width: " + level2_inner_panel.clientWidth + "px; left: " + bar_level2_y_axis_legend_container.clientWidth + "px;";
    bar_level1_x_axis_scale_label_container.setAttributeNode( bar_level1_x_axis_scale_label_container_style );

    return true;
}