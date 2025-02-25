// draw the pyramid
function jsChartPopulationPyramidDrawPopulationContainers(level1_inner_panel, i_chart, biggest_value, grand_total, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    // draw left container
    var left_container = document.createElement("div");
    var left_container_class = document.createAttribute("class");
    left_container_class.value = "js-chart-population-pyramid-left-container";
    left_container.setAttributeNode( left_container_class );
    level1_inner_panel.appendChild( left_container );

    if (i_chart.i_options.showgridlines) {
        var left_container_style = document.createAttribute("style");
        left_container_style.value = "background: repeating-linear-gradient(to right, " + i_chart.i_design.grid_line_color + ", " + i_chart.i_design.grid_line_color + " calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(20% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " calc(20% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " 20%);";
        left_container.setAttributeNode( left_container_style );
    }

    // draw center container
    var center_container = document.createElement("div");
    var center_container_class = document.createAttribute("class");
    center_container_class.value = "js-chart-population-pyramid-center-container";
    center_container.setAttributeNode( center_container_class );
    level1_inner_panel.appendChild( center_container );

    // draw right container
    var right_container = document.createElement("div");
    var right_container_class = document.createAttribute("class");
    right_container_class.value = "js-chart-population-pyramid-right-container";
    right_container.setAttributeNode( right_container_class );
    level1_inner_panel.appendChild( right_container );

    if (i_chart.i_options.showgridlines) {
        var right_container_style = document.createAttribute("style");
        right_container_style.value = "background: repeating-linear-gradient(to right, " + i_chart.i_design.grid_line_color + ", " + i_chart.i_design.grid_line_color + " calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(20% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " calc(20% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " 20%);";
        right_container.setAttributeNode( right_container_style );
    }

    for (var s = 0; s < i_chart.i_titles.length; s++) {

        // draw left bar
        var left_bar_width = (i_chart.i_data[s][0] / max_scale_value) * 100;
        var left_relative_label = (i_chart.i_data[s][0] / grand_total) * 100;

        var left_bar = document.createElement("div");
        var left_bar_style = document.createAttribute("style");
        left_bar_style.value = "flex: 1 1 0px; align-self: end; position: relative; width: " + left_bar_width + "%; background-color: " + i_chart.i_design.color_palette[0] + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px; min-width: " + i_chart.i_design.value_bar_min_width + "; border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + " 0px 0px " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
        left_bar.setAttributeNode( left_bar_style );
        var left_bar_title = document.createAttribute("title");
        left_bar_title.value = i_chart.i_labels[0] + "\n" + i_chart.i_titles[s] + "\n" + jsChartCommonFormatChartAmount(roundNumber(i_chart.i_data[s][0], 2), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
        left_bar.setAttributeNode( left_bar_title );
        left_container.appendChild( left_bar );

        if (i_chart.i_options.showlabels) {

            var data_label = document.createElement("div");
            var data_label_style = document.createAttribute("style");
            data_label_style.value = "position: absolute; text-align: center; top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); left: -" + i_chart.i_design.datalabel_width + "; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
            data_label.setAttributeNode( data_label_style );
            var data_label_title = document.createAttribute("title");
            data_label_title.value = i_chart.i_labels[0] + "\n" + i_chart.i_titles[s] + "\n" + jsChartCommonFormatChartAmount(roundNumber(i_chart.i_data[s][0], 2), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            data_label.setAttributeNode( data_label_title );
            if (i_chart.i_options.showlabels == "relative") {
                data_label.innerText = roundNumber(left_relative_label, 2) + "%";
            } else {
                data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(i_chart.i_data[s][0], 2), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            }
            left_bar.appendChild( data_label );

        }

        // draw center bar
        var center_bar = document.createElement("div");
        var center_bar_class = document.createAttribute("class");
        center_bar_class.value = "js-chart-population-pyramid-center-bar";
        center_bar.setAttributeNode( center_bar_class );
        var center_bar_title = document.createAttribute("title");
        center_bar_title.value = i_chart.i_titles[s];
        center_bar.setAttributeNode( center_bar_title );
        center_bar.innerText = i_chart.i_titles[s];
        center_container.appendChild( center_bar );

        // draw right bar
        var right_bar_width = (i_chart.i_data[s][1] / max_scale_value) * 100;
        var right_relative_label = (i_chart.i_data[s][1] / grand_total) * 100;

        var right_bar = document.createElement("div");
        var right_bar_style = document.createAttribute("style");
        right_bar_style.value = "flex: 1 1 0px; align-self: start; position: relative; width: " + right_bar_width + "%; background-color: " + i_chart.i_design.color_palette[1] + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px; min-width: " + i_chart.i_design.value_bar_min_width + "; border: " + i_chart.i_design.value_bar_border + "; border-radius: 0px " + i_chart.i_design.value_bar_border_radius + " " + i_chart.i_design.value_bar_border_radius + " 0px; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
        right_bar.setAttributeNode( right_bar_style );
        var right_bar_title = document.createAttribute("title");
        right_bar_title.value = i_chart.i_labels[1] + "\n" + i_chart.i_titles[s] + "\n" + jsChartCommonFormatChartAmount(roundNumber(i_chart.i_data[s][1], 2), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
        right_bar.setAttributeNode( right_bar_title );
        right_container.appendChild( right_bar );

        if (i_chart.i_options.showlabels) {

            var data_label = document.createElement("div");
            var data_label_style = document.createAttribute("style");
            data_label_style.value = "position: absolute; text-align: center; top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); right: -" + i_chart.i_design.datalabel_width + "; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
            data_label.setAttributeNode( data_label_style );
            var data_label_title = document.createAttribute("title");
            data_label_title.value = i_chart.i_labels[1] + "\n" + i_chart.i_titles[s] + "\n" + jsChartCommonFormatChartAmount(roundNumber(i_chart.i_data[s][1], 2), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            data_label.setAttributeNode( data_label_title );
            if (i_chart.i_options.showlabels == "relative") {
                data_label.innerText = roundNumber(right_relative_label, 2) + "%";
            } else {
                data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(i_chart.i_data[s][1], 2), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            }
            right_bar.appendChild( data_label );

        }
    }

    for (var s = 0; s < i_chart.i_titles.length; s++) {

        var center_bar_style = document.createAttribute("style");
        center_bar_style.value = "line-height: " + center_container.children[s].clientHeight + "px;";
        center_container.children[s].setAttributeNode( center_bar_style );
    }

    return true;
}
// draw level0 containers
function jsChartPopulationPyramidDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    // draw level0 inner panel
    var level0_inner_panel = document.createElement("div");
    var level0_inner_panel_class = document.createAttribute("class");
    level0_inner_panel_class.value = "js-chart-population-pyramid-level0-inner-panel";
    level0_inner_panel.setAttributeNode( level0_inner_panel_class );
    base_level2_inner_panel.appendChild( level0_inner_panel );

    // draw y-axis title container
    var y_axis_title_container = document.createElement("div");
    var y_axis_title_container_class = document.createAttribute("class");
    y_axis_title_container_class.value = "js-chart-population-pyramid-y-axis-title-container";
    y_axis_title_container.setAttributeNode( y_axis_title_container_class );
    var y_axis_title_container_title = document.createAttribute("title");
    y_axis_title_container_title.value = i_chart.i_options.ytitle;
    y_axis_title_container.setAttributeNode( y_axis_title_container_title );
    y_axis_title_container.innerText = i_chart.i_options.ytitle;
    level0_inner_panel.appendChild( y_axis_title_container );

    // draw level1 inner panel
    var level1_inner_panel = document.createElement("div");
    var level1_inner_panel_class = document.createAttribute("class");
    level1_inner_panel_class.value = "js-chart-population-pyramid-level1-inner-panel";
    level1_inner_panel.setAttributeNode( level1_inner_panel_class );
    level0_inner_panel.appendChild( level1_inner_panel );

    // draw infobox container
    var infobox_container = document.createElement("div");
    var infobox_container_class = document.createAttribute("class");
    infobox_container_class.value = "js-chart-population-pyramid-infobox-container";
    infobox_container.setAttributeNode( infobox_container_class );
    level0_inner_panel.appendChild( infobox_container );

    // draw x-axis container
    var x_axis_container = document.createElement("div");
    var x_axis_container_class = document.createAttribute("class");
    x_axis_container_class.value = "js-chart-population-pyramid-x-axis-container";
    x_axis_container.setAttributeNode( x_axis_container_class );
    level0_inner_panel.appendChild( x_axis_container );

    // x-axis legend container
    var x_axis_legend_container = document.createElement("div");
    var x_axis_legend_container_class = document.createAttribute("class");
    x_axis_legend_container_class.value = "js-chart-population-pyramid-x-axis-legend-container";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_class );
    x_axis_container.appendChild( x_axis_legend_container );

    // x-axis left legend container
    var left_x_axis_legend_container = document.createElement("div");
    var left_x_axis_legend_container_class = document.createAttribute("class");
    left_x_axis_legend_container_class.value = "js-chart-population-pyramid-x-axis-left-legend-container";
    left_x_axis_legend_container.setAttributeNode( left_x_axis_legend_container_class );
    x_axis_legend_container.appendChild( left_x_axis_legend_container );

    // x-axis left legend scale container
    var left_x_axis_legend_scale_container = document.createElement("div");
    var left_x_axis_legend_scale_container_class = document.createAttribute("class");
    left_x_axis_legend_scale_container_class.value = "js-chart-population-pyramid-x-axis-left-legend-scale-container";
    left_x_axis_legend_scale_container.setAttributeNode( left_x_axis_legend_scale_container_class );
    left_x_axis_legend_container.appendChild( left_x_axis_legend_scale_container );

    for (var tt = 0; tt < 5; tt++) {

        var left_x_axis_legend_scale_block = document.createElement("div");
        var left_x_axis_legend_scale_block_class = document.createAttribute("class");
        left_x_axis_legend_scale_block_class.value = "js-chart-population-pyramid-x-axis-left-legend-scale-block";
        left_x_axis_legend_scale_block.setAttributeNode( left_x_axis_legend_scale_block_class );
        var left_x_axis_legend_scale_block_style = document.createAttribute("style");
        left_x_axis_legend_scale_block_style.value = "border-top: " + i_chart.i_design.scale_border + "; border-left: " + i_chart.i_design.scale_border + ";";
        if (tt == 4) {
            left_x_axis_legend_scale_block_style.value += "border-right: " + i_chart.i_design.scale_border + ";";
        }
        left_x_axis_legend_scale_block.setAttributeNode( left_x_axis_legend_scale_block_style );
        left_x_axis_legend_scale_container.appendChild( left_x_axis_legend_scale_block );

    }

    // x-axis left legend scale label container
    var left_x_axis_legend_scale_label_container = document.createElement("div");
    var left_x_axis_legend_scale_label_container_class = document.createAttribute("class");
    left_x_axis_legend_scale_label_container_class.value = "js-chart-population-pyramid-x-axis-left-legend-scale-label-container";
    left_x_axis_legend_scale_label_container.setAttributeNode( left_x_axis_legend_scale_label_container_class );
    left_x_axis_legend_container.appendChild( left_x_axis_legend_scale_label_container );

    var max_loop = 5;
    for (var tt = max_scale_value; tt > min_scale_value; tt=(tt-step_value)) {

        var left_x_axis_legend_scale_label_block = document.createElement("div");
        var left_x_axis_legend_scale_label_block_class = document.createAttribute("class");
        left_x_axis_legend_scale_label_block_class.value = "js-chart-population-pyramid-x-axis-left-legend-scale-label-block";
        left_x_axis_legend_scale_label_block.setAttributeNode( left_x_axis_legend_scale_label_block_class );
        var left_x_axis_legend_scale_label_block_title = document.createAttribute("title");
        left_x_axis_legend_scale_label_block_title.value = jsChartCommonFormatChartAmount(roundNumber(tt, 2), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
        left_x_axis_legend_scale_label_block.setAttributeNode( left_x_axis_legend_scale_label_block_title );
        left_x_axis_legend_scale_label_block.innerText = jsChartCommonFormatChartAmount(roundNumber(tt, 2), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
        left_x_axis_legend_scale_label_container.appendChild( left_x_axis_legend_scale_label_block );

        max_loop--;
        if (max_loop == 0) {
            break;
        }

    }

    // x-axis center legend container
    var center_x_axis_legend_container = document.createElement("div");
    var center_x_axis_legend_container_class = document.createAttribute("class");
    center_x_axis_legend_container_class.value = "js-chart-population-pyramid-x-axis-center-legend-container";
    center_x_axis_legend_container.setAttributeNode( center_x_axis_legend_container_class );
    x_axis_legend_container.appendChild( center_x_axis_legend_container );

    // x-axis right legend container
    var right_x_axis_legend_container = document.createElement("div");
    var right_x_axis_legend_container_class = document.createAttribute("class");
    right_x_axis_legend_container_class.value = "js-chart-population-pyramid-x-axis-right-legend-container";
    right_x_axis_legend_container.setAttributeNode( right_x_axis_legend_container_class );
    x_axis_legend_container.appendChild( right_x_axis_legend_container );

    // x-axis right legend scale container
    var right_x_axis_legend_scale_container = document.createElement("div");
    var right_x_axis_legend_scale_container_class = document.createAttribute("class");
    right_x_axis_legend_scale_container_class.value = "js-chart-population-pyramid-x-axis-right-legend-scale-container";
    right_x_axis_legend_scale_container.setAttributeNode( right_x_axis_legend_scale_container_class );
    right_x_axis_legend_container.appendChild( right_x_axis_legend_scale_container );

    for (var tt = 0; tt < 5; tt++) {

        var right_x_axis_legend_scale_block = document.createElement("div");
        var right_x_axis_legend_scale_block_class = document.createAttribute("class");
        right_x_axis_legend_scale_block_class.value = "js-chart-population-pyramid-x-axis-right-legend-scale-block";
        right_x_axis_legend_scale_block.setAttributeNode( right_x_axis_legend_scale_block_class );
        var right_x_axis_legend_scale_block_style = document.createAttribute("style");
        right_x_axis_legend_scale_block_style.value = "border-top: " + i_chart.i_design.scale_border + "; border-right: " + i_chart.i_design.scale_border + ";";
        if (tt == 0) {
            right_x_axis_legend_scale_block_style.value += "border-left: " + i_chart.i_design.scale_border + ";";
        }
        right_x_axis_legend_scale_block.setAttributeNode( right_x_axis_legend_scale_block_style );
        right_x_axis_legend_scale_container.appendChild( right_x_axis_legend_scale_block );

    }

    // x-axis right legend scale label container
    var right_x_axis_legend_scale_label_container = document.createElement("div");
    var right_x_axis_legend_scale_label_container_class = document.createAttribute("class");
    right_x_axis_legend_scale_label_container_class.value = "js-chart-population-pyramid-x-axis-right-legend-scale-label-container";
    right_x_axis_legend_scale_label_container.setAttributeNode( right_x_axis_legend_scale_label_container_class );
    right_x_axis_legend_container.appendChild( right_x_axis_legend_scale_label_container );

    var max_loop = 5;
    for (var tt = (min_scale_value + step_value); tt <= max_scale_value; tt=(tt+step_value)) {

        var right_x_axis_legend_scale_label_block = document.createElement("div");
        var right_x_axis_legend_scale_label_block_class = document.createAttribute("class");
        right_x_axis_legend_scale_label_block_class.value = "js-chart-population-pyramid-x-axis-right-legend-scale-label-block";
        right_x_axis_legend_scale_label_block.setAttributeNode( right_x_axis_legend_scale_label_block_class );
        var right_x_axis_legend_scale_label_block_title = document.createAttribute("title");
        right_x_axis_legend_scale_label_block_title.value = jsChartCommonFormatChartAmount(roundNumber(tt, 2), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
        right_x_axis_legend_scale_label_block.setAttributeNode( right_x_axis_legend_scale_label_block_title );
        right_x_axis_legend_scale_label_block.innerText = jsChartCommonFormatChartAmount(roundNumber(tt, 2), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
        right_x_axis_legend_scale_label_container.appendChild( right_x_axis_legend_scale_label_block );

        max_loop--;
        if (max_loop == 0) {
            break;
        }

    }

    // x-axis title container
    var x_axis_title_container = document.createElement("div");
    var x_axis_title_container_class = document.createAttribute("class");
    x_axis_title_container_class.value = "js-chart-population-pyramid-x-axis-title-container";
    x_axis_title_container.setAttributeNode( x_axis_title_container_class );
    var x_axis_title_container_title = document.createAttribute("title");
    x_axis_title_container_title.value = i_chart.i_options.xtitle;
    x_axis_title_container.setAttributeNode( x_axis_title_container_title );
    x_axis_title_container.innerText = i_chart.i_options.xtitle;
    x_axis_container.appendChild( x_axis_title_container );

    return [ level1_inner_panel, x_axis_container ];
}
// draw function for a popylation pyramid chart
function jsChartDrawPopulationPyramidChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // determine the biggest value across all data series
    var biggest_value = i_chart.i_data[0][0];
    var smallest_value = i_chart.i_data[0][0];
    var grand_total = 0;
    for (var s =0; s < i_chart.i_data.length; s++) {
        grand_total += (Math.abs(i_chart.i_data[s][0]) + Math.abs(i_chart.i_data[s][1]));
        if (i_chart.i_data[s][0] > biggest_value) {
            biggest_value = i_chart.i_data[s][0];
        }
        if (i_chart.i_data[s][1] > biggest_value) {
            biggest_value = i_chart.i_data[s][1];
        }
        if (i_chart.i_data[s][0] < smallest_value) {
            smallest_value = i_chart.i_data[s][0];
        }
        if (i_chart.i_data[s][1] < smallest_value) {
            smallest_value = i_chart.i_data[s][1];
        }
    }

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
        var calculate_scale = [ this_scalemin, this_scalemax, ((Math.abs(this_scalemin) + Math.abs(this_scalemax)) / 5), 5, 2 ];
    } else {
        var calculate_scale = jsChartCommonCalculateScale(null, null, smallest_value, biggest_value, 5);
    }

    var min_scale_value = calculate_scale[0];
    var max_scale_value = calculate_scale[1];
    var step_value = calculate_scale[2];
    var total_steps = calculate_scale[3];
    var num_of_decimals_to_use = calculate_scale[4];

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["population pyramid"].data_type, i_chart.i_labels);
    var base_level2_inner_panel = draw_base_containers[0];
    var legend_container = draw_base_containers[1];

    // draw level0 containers
    var draw_level0_containers = jsChartPopulationPyramidDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use);
    var level1_inner_panel = draw_level0_containers[0];
    var x_axis_container = draw_level0_containers[1];

    // draw the pyramid
    var draw_population_pyramid = jsChartPopulationPyramidDrawPopulationContainers(level1_inner_panel, i_chart, biggest_value, grand_total, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use);
    var level1_inner_panel = draw_level0_containers[0];

    // set a width on the x_axis_container so that long text does not resize the container
    var x_axis_container_style = document.createAttribute("style");
    x_axis_container_style.value = "width: " + level1_inner_panel.clientWidth + "px;";
    x_axis_container.setAttributeNode( x_axis_container_style );

    return true;
}