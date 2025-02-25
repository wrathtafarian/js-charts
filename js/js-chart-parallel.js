// draw the parallel coordinates
function jsChartParallelCoordinatesDrawCoordinates(level1_inner_panel, i_chart, cat_min_max) {

    for (var v = 0; v < (i_chart.i_labels.length - 1); v++) {

        var cell_width = level1_inner_panel.children[v].children[2].clientWidth + 39; // 40px being the width of the y-axis legend containers (scale label + scale)
        var cell_height = level1_inner_panel.children[v].children[2].clientHeight;

        var color_index = 0;
        for (var s = 0; s < i_chart.i_data.length; s++) {

            //  0 min_scale_value
            //  1 max_scale_value
            //  2 step_value
            //  3 total_steps
            //  4 num_of_decimals_to_use

            var y2 = ((cat_min_max[v+1]["scale"][1] - i_chart.i_data[s][v+1]) / (cat_min_max[v+1]["scale"][1] - (cat_min_max[v+1]["scale"][0]))) * cell_height;
            var y1 = ((cat_min_max[v]["scale"][1] - i_chart.i_data[s][v]) / (cat_min_max[v]["scale"][1] - (cat_min_max[v]["scale"][0]))) * cell_height;
            var y = Math.abs(y2 - y1);

            var x = cell_width;
            var z = Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) );
            var asine = Math.asin(x / z);
            var ang = asine * (180/Math.PI);
            //if ((i_chart.i_data[s][v] - i_chart.i_data[s][v+1]) < 0) {
            if ((y2 - y1) < 0) {
                ang = 360 - (90 - ang);
            } else {
                ang = 90 - ang;
            }

            var eleft = v * cell_width;
            var etop = (((cat_min_max[v]["scale"][1] - i_chart.i_data[s][v]) / (cat_min_max[v]["scale"][1] - (cat_min_max[v]["scale"][0]))) * cell_height);

            var this_line_color = i_chart.i_design.color_palette[color_index];
            if (i_chart.i_options.showlines) {
                var this_line_thickness = i_chart.i_design.value_line_thickness;
            } else {    
                var this_line_thickness = "0px";
            }

            var box_css = `.js-chart-parallel-coordinates-series-column-container-` + i_chart.chart_counter + `-` + (s+1) + `-` + (v+1) + `-` + (dynamic_stylesheet_rule_index+1) + `::after {
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
            box_elem_class.value = "js-chart-parallel-coordinates-series-column-container-" + i_chart.chart_counter + "-" + (s+1) + "-" + (v+1) + "-" + (dynamic_stylesheet_rule_index+1);
            box_elem.setAttributeNode( box_elem_class );
            level1_inner_panel.children[v].children[2].appendChild( box_elem );

            color_index++;
            if (color_index >= i_chart.i_design.color_palette.length) {
                color_index = 0;
            }

            dynamic_stylesheet_rule_index++;
        }
    }

    return true;
}
// draw the level0 containers, calculating the scale dynamically for each item that is being compared
function jsChartDrawParallelCoordinatesDrawLevel0Containers(base_level2_inner_panel, i_chart, cat_min_max) {

    // draw level0 inner panel
    var level0_inner_panel = document.createElement("div");
    var level0_inner_panel_class = document.createAttribute("class");
    level0_inner_panel_class.value = "js-chart-parallel-coordinates-level0-inner-panel";
    level0_inner_panel.setAttributeNode( level0_inner_panel_class );
    base_level2_inner_panel.appendChild( level0_inner_panel );

    // draw level1 inner panel
    var level1_inner_panel = document.createElement("div");
    var level1_inner_panel_class = document.createAttribute("class");
    level1_inner_panel_class.value = "js-chart-parallel-coordinates-level1-inner-panel";
    level1_inner_panel.setAttributeNode( level1_inner_panel_class );
    level0_inner_panel.appendChild( level1_inner_panel );

    for (var v = 0; v < i_chart.i_labels.length; v++) {

        // series container
        var series_value_container = document.createElement("div");
        var series_value_container_class = document.createAttribute("class");
        series_value_container_class.value = "js-chart-parallel-coordinates-series-value-container";
        series_value_container.setAttributeNode( series_value_container_class );
        if (v == (i_chart.i_labels.length-1)) {
            var series_value_container_style = document.createAttribute("style");
            series_value_container_style.value = "max-width: 40px;";
            series_value_container.setAttributeNode( series_value_container_style );
        }
        level1_inner_panel.appendChild( series_value_container );

        // y-axis legend scale label container
        var y_axis_legend_scale_label_container = document.createElement("div");
        var y_axis_legend_scale_label_container_class = document.createAttribute("class");
        y_axis_legend_scale_label_container_class.value = "js-chart-parallel-coordinates-y-axis-legend-scale-label-container";
        y_axis_legend_scale_label_container.setAttributeNode( y_axis_legend_scale_label_container_class );
        series_value_container.appendChild( y_axis_legend_scale_label_container );

        //  0 min_scale_value
        //  1 max_scale_value
        //  2 step_value
        //  3 total_steps
        //  4 num_of_decimals_to_use
        var max_loop = 10;
        for (var tt = cat_min_max[v]["scale"][1]; tt > cat_min_max[v]["scale"][0]; tt=(tt-cat_min_max[v]["scale"][2])) {

            var y_axis_legend_scale_block = document.createElement("div");
            var y_axis_legend_scale_block_class = document.createAttribute("class");
            y_axis_legend_scale_block_class.value = "js-chart-parallel-coordinates-y-axis-legend-scale-label-block";
            y_axis_legend_scale_block.setAttributeNode( y_axis_legend_scale_block_class );
            var y_axis_legend_scale_block_title = document.createAttribute("title");
            y_axis_legend_scale_block_title.value = roundNumber(tt, 2);
            y_axis_legend_scale_block.setAttributeNode( y_axis_legend_scale_block_title );
            y_axis_legend_scale_block.innerText = roundNumber(tt, 2);
            y_axis_legend_scale_label_container.appendChild( y_axis_legend_scale_block );

            max_loop--;
            if (max_loop <= 0) {
                break;
            }
        }

        // draw the last y-axis legend scale label
        var last_y_axis_legend_scale_block = document.createElement("div");
        var last_y_axis_legend_scale_block_class = document.createAttribute("class");
        last_y_axis_legend_scale_block_class.value = "js-chart-parallel-coordinates-y-axis-legend-scale-label-block-last";
        last_y_axis_legend_scale_block.setAttributeNode( last_y_axis_legend_scale_block_class );
        var last_y_axis_legend_scale_block_title = document.createAttribute("title");
        last_y_axis_legend_scale_block_title.value = roundNumber(cat_min_max[v]["min_value"], 2);
        last_y_axis_legend_scale_block.setAttributeNode( last_y_axis_legend_scale_block_title );
        last_y_axis_legend_scale_block.innerText = roundNumber(cat_min_max[v]["min_value"], 2);
        y_axis_legend_scale_label_container.appendChild( last_y_axis_legend_scale_block );

        // y-axis legend scale container
        var y_axis_legend_scale_container = document.createElement("div");
        var y_axis_legend_scale_container_class = document.createAttribute("class");
        y_axis_legend_scale_container_class.value = "js-chart-parallel-coordinates-y-axis-legend-scale-container";
        y_axis_legend_scale_container.setAttributeNode( y_axis_legend_scale_container_class );
        series_value_container.appendChild( y_axis_legend_scale_container );

        for (var tt = 0; tt < 10; tt++) {

            var y_axis_legend_scale_block = document.createElement("div");
            var y_axis_legend_scale_block_class = document.createAttribute("class");
            y_axis_legend_scale_block_class.value = "js-chart-parallel-coordinates-y-axis-legend-scale-block";
            y_axis_legend_scale_block.setAttributeNode( y_axis_legend_scale_block_class );
            var y_axis_legend_scale_block_style = document.createAttribute("style");
            y_axis_legend_scale_block_style.value = "border-right: " + i_chart.i_design.scale_border + "; border-top: " + i_chart.i_design.scale_border + ";";
            if (tt == 9) {
                y_axis_legend_scale_block_style.value += "border-bottom: " + i_chart.i_design.scale_border + ";";
            }
            y_axis_legend_scale_block.setAttributeNode( y_axis_legend_scale_block_style );
            y_axis_legend_scale_container.appendChild( y_axis_legend_scale_block );

        }


        // data value container
        if (v != (i_chart.i_labels.length-1)) {

            var data_value_container = document.createElement("div");
            var data_value_container_class = document.createAttribute("class");
            data_value_container_class.value = "js-chart-parallel-coordinates-data-value-container";
            data_value_container.setAttributeNode( data_value_container_class );
            series_value_container.appendChild( data_value_container );

        }

    }

    // draw x-axis legend container
    var x_axis_legend_container = document.createElement("div");
    var x_axis_legend_container_class = document.createAttribute("class");
    x_axis_legend_container_class.value = "js-chart-parallel-coordinates-x-axis-legend-container";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_class );
    level0_inner_panel.appendChild( x_axis_legend_container );

    var x_axis_legend_block_width = (x_axis_legend_container.clientWidth / i_chart.i_labels.length);

    for (var v = 0; v < i_chart.i_labels.length; v++) {

        var x_axis_legend_block = document.createElement("div");
        var x_axis_legend_block_class = document.createAttribute("class");
        x_axis_legend_block_class.value = "js-chart-parallel-coordinates-x-axis-legend-block";
        x_axis_legend_block.setAttributeNode( x_axis_legend_block_class );
        var x_axis_legend_block_title = document.createAttribute("title");
        x_axis_legend_block_title.value = i_chart.i_labels[v];
        x_axis_legend_block.setAttributeNode( x_axis_legend_block_title );
        var x_axis_legend_block_style = document.createAttribute("style");
        x_axis_legend_block_style.value = "width: " + x_axis_legend_block_width + "px;";
        if (v > (i_chart.i_labels.length-3)) {
            x_axis_legend_block_style.value += " text-align: right; margin: 0px 20px 0px 0px;";
        }
        x_axis_legend_block.setAttributeNode( x_axis_legend_block_style );
        x_axis_legend_block.innerText = i_chart.i_labels[v];
        x_axis_legend_container.appendChild( x_axis_legend_block );

    }

    return [ level1_inner_panel ];
}
// draw function for a parallel coordinates bar chart
function jsChartDrawParallelCoordinatesChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // determine the min/max values per category
    var cat_min_max = [];
    for (var v = 0; v < i_chart.i_labels.length; v++) {
        cat_min_max[v] = {
            "min_value": i_chart.i_data[0][v],
            "max_value": i_chart.i_data[0][v],
            "scale": null
        }
        for (var s = 1; s < i_chart.i_data.length; s++) {
            if (i_chart.i_data[s][v] > cat_min_max[v]["max_value"]) {
                cat_min_max[v]["max_value"] = i_chart.i_data[s][v];
            }
            if (i_chart.i_data[s][v] < cat_min_max[v]["min_value"]) {
                cat_min_max[v]["min_value"] = i_chart.i_data[s][v];
            }
        }
    }

    for (var v = 0; v < i_chart.i_labels.length; v++) {
        if (cat_min_max[v]["max_value"] == cat_min_max[v]["min_value"]) {
            cat_min_max[v]["min_value"] = 0;
            var calculate_scale = [ 0, cat_min_max[v]["max_value"], (cat_min_max[v]["max_value"] / 10), 10, 2 ];
        } else {
            var calculate_scale = [ cat_min_max[v]["min_value"], cat_min_max[v]["max_value"], ((Math.abs(cat_min_max[v]["max_value"]) - Math.abs(cat_min_max[v]["min_value"])) / 10), 10, 2 ];
        }
        cat_min_max[v]["scale"] = calculate_scale;
    }

    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["parallel coordinates"].data_type, i_chart.i_titles);
    var base_level2_inner_panel = draw_base_containers[0];
    var legend_container = draw_base_containers[1];

    // draw the level0 containers, calculating the scale dynamically for each item that is being compared
    var draw_level0_containers = jsChartDrawParallelCoordinatesDrawLevel0Containers(base_level2_inner_panel, i_chart, cat_min_max);
    var level1_inner_panel = draw_level0_containers[0];

    // draw the parallel coordinates
    var draw_parallel_coordinates = jsChartParallelCoordinatesDrawCoordinates(level1_inner_panel, i_chart, cat_min_max);

    return true;
}