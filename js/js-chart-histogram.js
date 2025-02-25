// draw the column value containers
function jsChartHistogramDrawValueContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var total_range = max_scale_value + Math.abs(min_scale_value);

    var color_index = 0;
    for (var v = 0; v < i_chart.i_data.values.length; v++) {
        for (var s = 0; s < 1; s++) {

            // draw value column container
            var value_column_container = document.createElement("div");
            var value_column_container_class = document.createAttribute("class");
            value_column_container_class.value = "js-chart-histogram-value-column-container";
            value_column_container.setAttributeNode( value_column_container_class );
            level2_inner_panel.children[v].appendChild( value_column_container );

            // draw the positive spacer container
            if (i_chart.i_data.values[v] >= 0) {
                var p_spacer_container_height = ((max_scale_value - i_chart.i_data.values[v]) / total_range) * 100;
            } else {
                var p_spacer_container_height = (max_scale_value / total_range) * 100;
            }
            var p_spacer_container = document.createElement("div");
            var p_spacer_container_class = document.createAttribute("class");
            p_spacer_container_class.value = "js-chart-histogram-positive-spacer-container";
            p_spacer_container.setAttributeNode( p_spacer_container_class );
            var p_spacer_container_style = document.createAttribute("style");
            p_spacer_container_style.value = "height: " + p_spacer_container_height + "%;";
            p_spacer_container.setAttributeNode( p_spacer_container_style );
            value_column_container.appendChild( p_spacer_container );

            if (typeof i_chart.i_data.values[v] !== "undefined") {

                // draw the value column container
                var value_column_height = (Math.abs(i_chart.i_data.values[v]) / total_range) * 100;

                // set min height
                if (i_chart.i_data.values[v] == 0) {
                    var min_column_height = "0px";
                } else {
                    var min_column_height = i_chart.i_design.value_bar_min_height;
                }

                var value_column = document.createElement("div");
                var value_column_class = document.createAttribute("class");
                value_column_class.value = "js-chart-histogram-value-column";
                value_column.setAttributeNode( value_column_class );
                var value_column_title = document.createAttribute("title");
                value_column_title.value = i_chart.i_titles[s] + "\n" + i_chart.i_labels[v] + "\n" + i_chart.i_data.values[v];
                value_column.setAttributeNode( value_column_title );
                var value_column_style = document.createAttribute("style");
                value_column_style.value = "min-height: " + min_column_height + "; height: " + value_column_height + "%; background-color: " + i_chart.i_design.color_palette[color_index] + "; min-width: " + i_chart.i_design.value_bar_min_width + "; border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2);";
                value_column.setAttributeNode( value_column_style );
                value_column_container.appendChild( value_column );

                // draw the data label
                if (i_chart.i_options.showlabels) {

                    if (i_chart.i_data.values[v] > 0) {
                        var datalabel_vertical = "top: 5px;";
                    } else if (i_chart.i_data.values[v] < 0) {
                        var datalabel_vertical = "bottom: 5px;";
                    } else {
                        var datalabel_vertical = "top: -15px;";
                    }

                    var datalabel_container = document.createElement("div");
                    var datalabel_container_class = document.createAttribute("class");
                    datalabel_container_class.value = "js-chart-histogram-data-label-container";
                    datalabel_container.setAttributeNode( datalabel_container_class );
                    var datalabel_container_style = document.createAttribute("style");
                    datalabel_container_style.value = "position: absolute; left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); " + datalabel_vertical + "; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; text-align: center; font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
                    datalabel_container.setAttributeNode( datalabel_container_style );
                    datalabel_container.innerText = jsChartCommonFormatChartAmount(roundNumber(i_chart.i_data.values[v], num_of_decimals_to_use), i_chart.i_design.datalabel_append, i_chart.i_design.datalabel_prepend);
                    value_column.appendChild( datalabel_container );
                }
            }

            // draw the negative spacer container
            if (i_chart.i_data.values[v] >= 0) {
                var n_spacer_container_height = (Math.abs(min_scale_value) / total_range) * 100;
            } else {
                var n_spacer_container_height = ((Math.abs(min_scale_value) - Math.abs(i_chart.i_data.values[v])) / total_range) * 100;
            }
            var n_spacer_container = document.createElement("div");
            var n_spacer_container_class = document.createAttribute("class");
            n_spacer_container_class.value = "js-chart-histogram-negative-spacer-container";
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

        color_index = 0;
    }

    return true;
}
// draw the series containers
function jsChartHistogramDrawSeriesColumns(level2_inner_panel, i_chart) {

    // draw the series column containers
    for (var v = 0; v < i_chart.i_data.values.length; v++) {

        var series_column_container = document.createElement("div");
        var series_column_container_class = document.createAttribute("class");
        series_column_container_class.value = "js-chart-histogram-series-column-container";
        series_column_container.setAttributeNode( series_column_container_class );
        var series_column_container_style = document.createAttribute("style");
        series_column_container_style.value = "margin: 0px calc(" + i_chart.i_design.value_bar_series_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_series_margin + " / 2);";
        series_column_container.setAttributeNode( series_column_container_style );
        level2_inner_panel.appendChild( series_column_container );

    }

    return true;
}
// draw the level0 containers
function jsChartHistogramDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use ) {

    // draw level0 container
    var column_level0_container = document.createElement("div");
    var column_level0_container_class = document.createAttribute("class");
    column_level0_container_class.value = "js-chart-histogram-level0-container";
    column_level0_container.setAttributeNode( column_level0_container_class );
    base_level2_inner_panel.appendChild( column_level0_container );

    // draw the y-axis container
    var y_axis_container = document.createElement("div");
    var y_axis_container_class = document.createAttribute("class");
    y_axis_container_class.value = "js-chart-histogram-y-axis-container";
    y_axis_container.setAttributeNode( y_axis_container_class );
    column_level0_container.appendChild( y_axis_container );

    // draw the y-axis title container
    var y_axis_title_container = document.createElement("div");
    var y_axis_title_container_class = document.createAttribute("class");
    y_axis_title_container_class.value = "js-chart-histogram-y-axis-title-container";
    y_axis_title_container.setAttributeNode( y_axis_title_container_class );
    var y_axis_title_container_title = document.createAttribute("title");
    y_axis_title_container_title.value = i_chart.i_options.ytitle;
    y_axis_title_container.setAttributeNode( y_axis_title_container_title );
    y_axis_title_container.innerText = i_chart.i_options.ytitle;
    y_axis_container.appendChild( y_axis_title_container );

    // draw the y-axis scale label container
    var y_axis_scale_label_container = document.createElement("div");
    var y_axis_scale_label_container_class = document.createAttribute("class");
    y_axis_scale_label_container_class.value = "js-chart-histogram-y-axis-scale-label-container";
    y_axis_scale_label_container.setAttributeNode( y_axis_scale_label_container_class );
    y_axis_container.appendChild( y_axis_scale_label_container );

    var max_loop = total_steps;
    for (var tt = max_scale_value; tt > min_scale_value; tt=(tt-step_value)) {

        var y_axis_scale_label_block = document.createElement("div");
        var y_axis_scale_label_block_class = document.createAttribute("class");
        y_axis_scale_label_block_class.value = "js-chart-histogram-y-axis-scale-label-block";
        y_axis_scale_label_block.setAttributeNode( y_axis_scale_label_block_class );
        var y_axis_scale_label_block_style = document.createAttribute("style");
        y_axis_scale_label_block_style.value = "color: " + i_chart.i_design.scale_text_color + ";";
        y_axis_scale_label_block.setAttributeNode( y_axis_scale_label_block_style );
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
    last_y_axis_scale_label_block_class.value = "js-chart-histogram-y-axis-scale-label-block-last";
    last_y_axis_scale_label_block.setAttributeNode( last_y_axis_scale_label_block_class );
    var last_y_axis_scale_label_block_style = document.createAttribute("style");
    last_y_axis_scale_label_block_style.value = "color: " + i_chart.i_design.scale_text_color + ";";
    last_y_axis_scale_label_block.setAttributeNode( last_y_axis_scale_label_block_style );
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
    y_axis_scale_container_class.value = "js-chart-histogram-y-axis-scale-container";
    y_axis_scale_container.setAttributeNode( y_axis_scale_container_class );
    y_axis_container.appendChild( y_axis_scale_container );

    for (var tt = 0; tt < total_steps; tt++) {

        var y_axis_scale_block = document.createElement("div");
        var y_axis_scale_block_class = document.createAttribute("class");
        y_axis_scale_block_class.value = "js-chart-histogram-y-axis-scale-block";
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
    level1_inner_panel_class.value = "js-chart-histogram-level1-inner-panel";
    level1_inner_panel.setAttributeNode( level1_inner_panel_class );
    var level1_inner_panel_style = document.createAttribute("style");
    level1_inner_panel_style.value = "scrollbar-color: " + i_chart.i_design.canvas_scrollbar_color + ";";
    level1_inner_panel.setAttributeNode( level1_inner_panel_style );
    column_level0_container.appendChild( level1_inner_panel );

    // draw level2 inner panel
    var level2_inner_panel = document.createElement("div");
    var level2_inner_panel_class = document.createAttribute("class");
    level2_inner_panel_class.value = "js-chart-histogram-level2-inner-panel";
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
    x_axis_legend_container_class.value = "js-chart-histogram-x-axis-legend-container";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_class );
    level1_inner_panel.appendChild( x_axis_legend_container );

    console.log("C >> " + i_chart.chart_counter + " > " + parseFloat(i_chart.i_labels[0]) );

    if (!isNaN(parseFloat(i_chart.i_labels[0]))) {
        for (var tt = 1; tt < i_chart.i_labels.length; tt++) {

            var x_axis_legend_block = document.createElement("div");
            var x_axis_legend_block_class = document.createAttribute("class");
            x_axis_legend_block_class.value = "js-chart-histogram-x-axis-legend-block";
            x_axis_legend_block.setAttributeNode( x_axis_legend_block_class );
            x_axis_legend_container.appendChild( x_axis_legend_block );

            if ((i_chart.i_labels.length < 5) || ((tt % 5) == 0) || (tt == i_chart.i_labels.length - 1)) {

                var x_axis_legend_label = document.createElement("div");
                var x_axis_legend_label_style = document.createAttribute("style");
                x_axis_legend_label_style.value = "position: absolute; z-index: 200; width: 55px; height: 20px; right: 0px; top: 0px; font-size: var(--js-chart-size-xsmall); text-align: right; vertical-align: top;     text-wrap: nowrap; overflow: hidden; text-overflow: ellipsis;";
                x_axis_legend_label.setAttributeNode( x_axis_legend_label_style );
                x_axis_legend_label.innerText = i_chart.i_labels[tt];
                x_axis_legend_block.appendChild( x_axis_legend_label );

            }
        }

        // draw the first label
        var first_x_axis_legend_label = document.createElement("div");
        var first_x_axis_legend_label_style = document.createAttribute("style");
        first_x_axis_legend_label_style.value = "position: absolute; z-index: 200; width: 55px; height: 20px; left: 0px; top: 0px; font-size: var(--js-chart-size-xsmall); text-align: left; vertical-align: top; text-wrap: nowrap; overflow: hidden; text-overflow: ellipsis;";
        first_x_axis_legend_label.setAttributeNode( first_x_axis_legend_label_style );
        first_x_axis_legend_label.innerText = i_chart.i_labels[0];
        x_axis_legend_container.children[0].appendChild( first_x_axis_legend_label );

    } else {
        for (var tt = 0; tt < i_chart.i_labels.length; tt++) {

            var x_axis_legend_block = document.createElement("div");
            var x_axis_legend_block_class = document.createAttribute("class");
            x_axis_legend_block_class.value = "js-chart-histogram-x-axis-legend-block";
            x_axis_legend_block.setAttributeNode( x_axis_legend_block_class );
            x_axis_legend_container.appendChild( x_axis_legend_block );

            var x_axis_legend_label = document.createElement("div");
            var x_axis_legend_label_style = document.createAttribute("style");
            x_axis_legend_label_style.value = "position: absolute; z-index: 200; width: 55px; height: 20px; left: calc(50% - (55px / 2)); top: 0px; font-size: var(--js-chart-size-xsmall); text-align: center; vertical-align: top;     text-wrap: nowrap; overflow: hidden; text-overflow: ellipsis;";
            x_axis_legend_label.setAttributeNode( x_axis_legend_label_style );
            x_axis_legend_label.innerText = i_chart.i_labels[tt];
            x_axis_legend_block.appendChild( x_axis_legend_label );

        }
    }

    // draw the infobox container
    var infobox_container = document.createElement("div");
    var infobox_container_class = document.createAttribute("class");
    infobox_container_class.value = "js-chart-histogram-infobox-container";
    infobox_container.setAttributeNode( infobox_container_class );
    column_level0_container.appendChild( infobox_container );

    // draw the x-axis title container
    var x_axis_title_container = document.createElement("div");
    var x_axis_title_container_class = document.createAttribute("class");
    x_axis_title_container_class.value = "js-chart-histogram-x-axis-title-container";
    x_axis_title_container.setAttributeNode( x_axis_title_container_class );
    var x_axis_title_container_title = document.createAttribute("title");
    x_axis_title_container_title.value = i_chart.i_options.xtitle;
    x_axis_title_container.setAttributeNode( x_axis_title_container_title );
    x_axis_title_container.innerText = i_chart.i_options.xtitle;
    column_level0_container.appendChild( x_axis_title_container );

    return [ level2_inner_panel, y_axis_scale_label_container, y_axis_scale_container, x_axis_legend_container ];
}
// draw function for a histogram chart
function jsChartDrawHistogramChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["column"].data_type, i_chart.i_titles);
    var base_level2_inner_panel = draw_base_containers[0];
    var legend_container = draw_base_containers[1];

    // calculate the max and min scale values (x-axis values on a column chart)
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
    var draw_level0_containers = jsChartHistogramDrawLevel0Containers(base_level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_scale_label_container = draw_level0_containers[1];
    var y_axis_scale_container = draw_level0_containers[2];
    var x_axis_legend_container = draw_level0_containers[3];

    // draw the series containers
    var draw_series_containers = jsChartHistogramDrawSeriesColumns(level2_inner_panel, i_chart);

    // draw the column value containers
    var draw_value_containers = jsChartHistogramDrawValueContainers(level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );

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
