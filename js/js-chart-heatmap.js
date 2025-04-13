
    /* Things we need to consider when returning the block bg color:
        1. palette type
            1.1. qualitative
            1.2. sequential
                1.2.1. discrete
                1.2.2. continuous
            1.3. diverging
                1.3.1. discrete
                1.3.2. continuous
        2. format of data
            2.1. absolute values
            2.2. relative values (%)
        3. format of palette position values
            3.1. absolute values
            3.2. relative values (%)

        Possible combinations
        1. Absolute data + Absolute palette
        2. Absolute data + Relative palette
        3. Relative data + Relative palette

        i_chart.i_data_type
        i_chart.i_design.palette_position_type
        i_chart.i_design.palette_type
        i_chart.i_design.color_palette
        i_chart.i_design.color_position
    */



// determine the call attributes
function jsChartHeatmapCalculateCellAttributes(i_data_value, i_chart, series_index, value_index, biggest_series_value) {

    var cell_attributes = {
        "background-color": "transparent",
        "text-color": i_chart.i_design.datalabel_text_color,
        "border": i_chart.i_design.value_bar_border,
        "border-radius": i_chart.i_design.value_bar_border_radius,
        "box-shadow": i_chart.i_design.value_bar_box_shadow,
        "opacity": i_chart.i_design.value_bar_opacity,
        "margin": i_chart.i_design.value_bar_data_margin,
        "title": i_chart.i_titles[series_index] + "\n" + i_chart.i_labels[value_index] + "\n" + i_chart.i_data[series_index][value_index],
        "label": i_chart.i_data[series_index][value_index]
    }

    // background-color
    switch (i_chart.i_design.palette_type) {

        // qualitative
        case "qualitative":
            var key_index = i_chart.i_keys.indexOf( i_data_value );
            if (key_index > -1) {
                cell_attributes["background-color"] = i_chart.i_design.color_palette[ key_index ];
            }
            break;

        // sequential discrete
        // diverging discrete
        case "sequential discrete":
        case "discrete secuential":
        case "diverging discrete":
        case "discrete diverging":

            // numeric data value
            if (!isNaN(parseFloat(i_data_value))) {

                // absolute data / absolute positions
                if ((i_chart.i_data_type == "absolute") && (i_chart.i_design.palette_position_type == "absolute")) {

                    for (var tt = 0; tt < i_chart.i_design.color_position.length; tt++) {
                        if (i_data_value < i_chart.i_design.color_position[tt]) {
                            cell_attributes["background-color"] = i_chart.i_design.color_palette[tt];
                            break;
                        }
                        cell_attributes["background-color"] = i_chart.i_design.color_palette[ (i_chart.i_design.color_palette.length-1) ];
                    }

                // absolute data / relative positions
                } else if ((i_chart.i_data_type == "absolute") && (i_chart.i_design.palette_position_type == "relative")) {

                    var cell_perc = (i_data_value / biggest_series_value) * 100;
                    cell_attributes["title"] += "\n(" + roundNumber(cell_perc, 2) + "%)";

                    for (var tt = 0; tt < i_chart.i_design.color_position.length; tt++) {
                        if (cell_perc < parseFloat(i_chart.i_design.color_position[tt])) {
                            cell_attributes["background-color"] = i_chart.i_design.color_palette[tt];
                            break;
                        }
                        cell_attributes["background-color"] = i_chart.i_design.color_palette[ (i_chart.i_design.color_palette.length-1) ];
                    }
                // relative data / relative positions
                } else if ((i_chart.i_data_type == "relative") && (i_chart.i_design.palette_position_type == "relative")) {

                    cell_attributes["label"] += "%";
                    cell_attributes["title"] += "%";

                    for (var tt = 0; tt < i_chart.i_design.color_position.length; tt++) {
                        if (i_data_value < parseFloat(i_chart.i_design.color_position[tt])) {
                            cell_attributes["background-color"] = i_chart.i_design.color_palette[tt];
                            break;
                        }
                        cell_attributes["background-color"] = i_chart.i_design.color_palette[ (i_chart.i_design.color_palette.length-1) ];
                    }
                }

            // text data value
            } else {
                cell_attributes["label"] = "N/D";
                cell_attributes["background-color"] = i_chart.i_design.not_defined_bg_color;
                cell_attributes["text-color"] = i_chart.i_design.not_defined_text_color;
                cell_attributes["title"] = i_chart.i_titles[series_index] + "\n" + i_chart.i_labels[value_index] + "\nN/D";
            }


            break;

        // sequential continuous
        // diverging continuous
        case "sequential continuous":
        case "diverging continuous":
        case "continuous sequential":
        case "continuous diverging":

            // numeric data value
            if (!isNaN(parseFloat(i_data_value))) {

                // absolute data / absolute positions
                if ((i_chart.i_data_type == "absolute") && (i_chart.i_design.palette_position_type == "absolute")) {

                    var position_filter = i_chart.i_design.color_position.filter((position) => position <= i_data_value);
                    var position = i_chart.i_design.color_position.indexOf( position_filter[ (position_filter.length-1) ] );
                    if (position == -1) {
                        position = 0;
                    }

                    var bg_start = jsChartCommonStandardizeColor(i_chart.i_design.color_palette[ (position) ]);
                    if ((i_chart.i_design.color_position.length - 1) == position) {
                        var cell_perc = i_data_value / biggest_series_value;
                        var bg_end = jsChartCommonStandardizeColor(i_chart.i_design.color_palette[ (position) ]);
                    } else {
                        var cell_perc = (i_data_value - i_chart.i_design.color_position[ (position) ]) / (i_chart.i_design.color_position[ (position+1) ] - i_chart.i_design.color_position[ (position) ]);
                        var bg_end = jsChartCommonStandardizeColor(i_chart.i_design.color_palette[ (position+1) ]);
                    }

                    var r_start = Number("0x" + bg_start.substr(1, 2));
                    var g_start = Number("0x" + bg_start.substr(3, 2));
                    var b_start = Number("0x" + bg_start.substr(5, 2));

                    var r_end = Number("0x" + bg_end.substr(1, 2));
                    var g_end = Number("0x" + bg_end.substr(3, 2));
                    var b_end = Number("0x" + bg_end.substr(5, 2));

                    var cell_rgb = "rgb(" + (((r_end - r_start) * cell_perc) + r_start) + ", " + (((g_end - g_start) * cell_perc) + g_start) + ", " + (((b_end - b_start) * cell_perc) + b_start) + ")";

                    cell_attributes["background-color"] = jsChartCommonStandardizeColor(cell_rgb);

            // absolute data / relative positions
            } else if ((i_chart.i_data_type == "absolute") && (i_chart.i_design.palette_position_type == "relative")) {

                var value_perc = (i_data_value / biggest_series_value) * 100;

                var position_filter = i_chart.i_design.color_position.filter((position) => parseFloat(position) <= parseFloat(value_perc));
                var position = i_chart.i_design.color_position.indexOf( position_filter[ (position_filter.length-1) ] );
                if (position == -1) {
                    position = 0;
                }

                var bg_start = jsChartCommonStandardizeColor(i_chart.i_design.color_palette[ (position) ]);
                if ((i_chart.i_design.color_position.length - 1) == position) {
                    var cell_perc = i_data_value / biggest_series_value;
                    var bg_end = jsChartCommonStandardizeColor(i_chart.i_design.color_palette[ (position) ]);
                } else {
                    //var cell_perc = (i_data_value - i_chart.i_design.color_position[ (position) ]) / (i_chart.i_design.color_position[ (position+1) ] - i_chart.i_design.color_position[ (position) ]);
                    var cell_perc = (parseFloat(value_perc) - parseFloat(i_chart.i_design.color_position[ (position) ])) / (parseFloat(i_chart.i_design.color_position[ (position+1) ]) - parseFloat(i_chart.i_design.color_position[ (position) ]));
                    //var cell_perc = (i_data_value - i_chart.i_design.color_position[ (position) ]) / (i_chart.i_design.color_position[ (position+1) ] - i_chart.i_design.color_position[ (position) ]);
                    var bg_end = jsChartCommonStandardizeColor(i_chart.i_design.color_palette[ (position+1) ]);
                }

                var r_start = Number("0x" + bg_start.substr(1, 2));
                var g_start = Number("0x" + bg_start.substr(3, 2));
                var b_start = Number("0x" + bg_start.substr(5, 2));

                var r_end = Number("0x" + bg_end.substr(1, 2));
                var g_end = Number("0x" + bg_end.substr(3, 2));
                var b_end = Number("0x" + bg_end.substr(5, 2));

                var cell_rgb = "rgb(" + (((r_end - r_start) * cell_perc) + r_start) + ", " + (((g_end - g_start) * cell_perc) + g_start) + ", " + (((b_end - b_start) * cell_perc) + b_start) + ")";

                cell_attributes["background-color"] = jsChartCommonStandardizeColor(cell_rgb);

            // relative data / relative positions
            } else if ((i_chart.i_data_type == "relative") && (i_chart.i_design.palette_position_type == "relative")) {

                var position_filter = i_chart.i_design.color_position.filter((position) => parseFloat(position) <= parseFloat(i_data_value));
                var position = i_chart.i_design.color_position.indexOf( position_filter[ (position_filter.length-1) ] );
                if (position == -1) {
                    position = 0;
                }

                var bg_start = jsChartCommonStandardizeColor(i_chart.i_design.color_palette[ (position) ]);
                if ((i_chart.i_design.color_position.length - 1) == position) {
                    var cell_perc = parseFloat(i_data_value);
                    var bg_end = jsChartCommonStandardizeColor(i_chart.i_design.color_palette[ (position) ]);
                } else {
                    var cell_perc = (parseFloat(i_data_value) - parseFloat(i_chart.i_design.color_position[ (position) ])) / (parseFloat(i_chart.i_design.color_position[ (position+1) ]) - parseFloat(i_chart.i_design.color_position[ (position) ]));
                    var bg_end = jsChartCommonStandardizeColor(i_chart.i_design.color_palette[ (position+1) ]);
                }

                var r_start = Number("0x" + bg_start.substr(1, 2));
                var g_start = Number("0x" + bg_start.substr(3, 2));
                var b_start = Number("0x" + bg_start.substr(5, 2));

                var r_end = Number("0x" + bg_end.substr(1, 2));
                var g_end = Number("0x" + bg_end.substr(3, 2));
                var b_end = Number("0x" + bg_end.substr(5, 2));

                var cell_rgb = "rgb(" + (((r_end - r_start) * cell_perc) + r_start) + ", " + (((g_end - g_start) * cell_perc) + g_start) + ", " + (((b_end - b_start) * cell_perc) + b_start) + ")";

                cell_attributes["background-color"] = jsChartCommonStandardizeColor(cell_rgb);
                cell_attributes["label"] = i_data_value + "%";

        }

            // text data value
            } else {
                cell_attributes["label"] = "N/D";
                cell_attributes["background-color"] = i_chart.i_design.not_defined_bg_color;
                cell_attributes["text-color"] = i_chart.i_design.not_defined_text_color;
                cell_attributes["title"] = i_chart.i_titles[series_index] + "\n" + i_chart.i_labels[value_index] + "\nN/D";
            }
        break;
    }

    if (typeof i_data_value === "undefined") {
        cell_attributes["label"] = "N/D";
        cell_attributes["background-color"] = i_chart.i_design.not_defined_bg_color;
        cell_attributes["text-color"] = i_chart.i_design.not_defined_text_color;
        cell_attributes["title"] = i_chart.i_titles[series_index] + "\n" + i_chart.i_labels[value_index] + "\nN/D";
    }

    return cell_attributes;
}
// draw level2 value grid
function jsChartHeatmapDrawValueGrid(level2_inner_panel, i_chart) {

    // calculate the biggest value across all series for this chart
    var biggest_series_value = jsChartCommonCalculateBiggestSeriesValue(i_chart.i_data);

    // loop over all series (rows) and values (columns)
    for (var s = 0; s < i_chart.i_titles.length; s++) {
        for (var v = 0; v < i_chart.i_labels.length; v++) {

            // determine the individual heatmap cell attributes
            var cell_attributes = jsChartHeatmapCalculateCellAttributes(i_chart.i_data[s][v], i_chart, s, v, biggest_series_value);

            // draw the calue cell
            var heatmap_cell = document.createElement("div");
            var heatmap_cell_style = document.createAttribute("style");
            heatmap_cell_style.value = "position: relative; color: " + cell_attributes["text-color"] + "; background-color: " + cell_attributes["background-color"] + "; border: " + cell_attributes["border"] + "; border-radius: " + cell_attributes["border-radius"] + "; box-shadow: " + cell_attributes["box-shadow"] + "; opacity: " + cell_attributes["opacity"] + "; margin: calc(" + cell_attributes["margin"] + " / 2);";
            heatmap_cell.setAttributeNode( heatmap_cell_style );
            var heatmap_cell_title = document.createAttribute("title");
            heatmap_cell_title.value = cell_attributes["title"];
            heatmap_cell.setAttributeNode( heatmap_cell_title );
            level2_inner_panel.appendChild( heatmap_cell );

            // draw the data label
            if (i_chart.i_options.showlabels) {

                var data_label = document.createElement("div");
                var data_label_style = document.createAttribute("style");
                data_label_style.value = "position: absolute; \
left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); \
top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); \
width: " + i_chart.i_design.datalabel_width + "; \
height: " + i_chart.i_design.datalabel_height + "; \
text-align: center; \
text-wrap-mode: nowrap; \
overflow: hidden; \
text-overflow: ellipsis; \
line-height: " + i_chart.i_design.datalabel_height + "; \
font-family: " + i_chart.i_design.datalabel_font_family + "; \
font-size: " + i_chart.i_design.datalabel_font_size + "; \
font-weight: " + i_chart.i_design.datalabel_font_weight + "; \
background-color: " + i_chart.i_design.datalabel_bg_color + "; \
color: " + i_chart.i_design.datalabel_text_color + "; \
border: " + i_chart.i_design.datalabel_border + "; \
border-radius: " + i_chart.i_design.datalabel_border_radius + "; \
box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; \
opacity: " + i_chart.i_design.datalabel_opacity + ";";
                data_label.setAttributeNode( data_label_style );
                var data_label_title = document.createAttribute("title");
                data_label_title.value = cell_attributes["title"];
                data_label.setAttributeNode( data_label_title );
                data_label.innerText = jsChartCommonFormatChartAmount(cell_attributes["label"], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);

                // prepend
                // append

                heatmap_cell.appendChild( data_label );
            }
        }
    }

    return true;
}
// draw the level0 and level1 inner panels
function jsChartHeatmapDrawLevel0Containers(base_level2_inner_panel, i_chart) {

    // draw level0 inner panel
    var level0_inner_panel = document.createElement("div");
    var level0_inner_panel_class = document.createAttribute("class");
    level0_inner_panel_class.value = "js-chart-heatmap-level0-inner-panel";
    level0_inner_panel.setAttributeNode( level0_inner_panel_class );
    base_level2_inner_panel.appendChild( level0_inner_panel );

    // draw the y-axis title container
    var y_axis_title_container = document.createElement("div");
    var y_axis_title_container_class = document.createAttribute("class");
    y_axis_title_container_class.value = "js-chart-heatmap-y-axis-title-container";
    y_axis_title_container.setAttributeNode( y_axis_title_container_class );
    var y_axis_title_container_title = document.createAttribute("title");
    y_axis_title_container_title.value = i_chart.i_options.ytitle;
    y_axis_title_container.setAttributeNode( y_axis_title_container_title );
    y_axis_title_container.innerText = i_chart.i_options.ytitle;
    level0_inner_panel.appendChild( y_axis_title_container );

    // draw the level1 inner panel
    var level1_inner_panel = document.createElement("div");
    var level1_inner_panel_class = document.createAttribute("class");
    level1_inner_panel_class.value = "js-chart-heatmap-level1-inner-panel";
    level1_inner_panel.setAttributeNode( level1_inner_panel_class );
    level0_inner_panel.appendChild( level1_inner_panel );

    // draw y-axis legend container
    var y_axis_legend_container = document.createElement("div");
    var y_axis_legend_container_class = document.createAttribute("class");
    y_axis_legend_container_class.value = "js-chart-heatmap-y-axis-legend-container";
    y_axis_legend_container.setAttributeNode( y_axis_legend_container_class );
    level1_inner_panel.appendChild( y_axis_legend_container );

    for (var s = 0; s < i_chart.i_titles.length; s++) {

        var y_axis_legend_block = document.createElement("div");
        var y_axis_legend_block_class = document.createAttribute("class");
        y_axis_legend_block_class.value = "js-chart-heatmap-y-axis-legend-block";
        y_axis_legend_block.setAttributeNode( y_axis_legend_block_class );
        var y_axis_legend_block_title = document.createAttribute("title");
        y_axis_legend_block_title.value = i_chart.i_titles[s];
        y_axis_legend_block.setAttributeNode( y_axis_legend_block_title );
        y_axis_legend_block.innerText = i_chart.i_titles[s];
        y_axis_legend_container.appendChild( y_axis_legend_block );

    }

    // draw level2 inner panel
    var level2_inner_panel = document.createElement("div");
    var level2_inner_panel_class = document.createAttribute("class");
    level2_inner_panel_class.value = "js-chart-heatmap-level2-inner-panel";
    level2_inner_panel.setAttributeNode( level2_inner_panel_class );
    var level2_inner_panel_style = document.createAttribute("style");
    level2_inner_panel_style.value = "grid-template-columns: repeat(" + i_chart.i_labels.length + ", 1fr); grid-template-rows: auto; background-color: " + i_chart.i_design.canvas_bg_color + ";";
    level2_inner_panel.setAttributeNode( level2_inner_panel_style );
    level1_inner_panel.appendChild( level2_inner_panel );

    // draw inner infobox container
    var inner_infobox_container = document.createElement("div");
    var inner_infobox_container_class = document.createAttribute("class");
    inner_infobox_container_class.value = "js-chart-heatmap-inner-infobox-container";
    inner_infobox_container.setAttributeNode( inner_infobox_container_class );
    level1_inner_panel.appendChild( inner_infobox_container );

    // draw x-axis legend container
    var x_axis_legend_container = document.createElement("div");
    var x_axis_legend_container_class = document.createAttribute("class");
    x_axis_legend_container_class.value = "js-chart-heatmap-x-axis-legend-container";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_class );
    level1_inner_panel.appendChild( x_axis_legend_container );

    for (var v = 0; v < i_chart.i_labels.length; v++) {

        var x_axis_legend_block = document.createElement("div");
        var x_axis_legend_block_class = document.createAttribute("class");
        x_axis_legend_block_class.value = "js-chart-heatmap-x-axis-legend-block";
        x_axis_legend_block.setAttributeNode( x_axis_legend_block_class );
        var x_axis_legend_block_title = document.createAttribute("title");
        x_axis_legend_block_title.value = i_chart.i_labels[v];
        x_axis_legend_block.setAttributeNode( x_axis_legend_block_title );
        x_axis_legend_block.innerText = i_chart.i_labels[v];
        x_axis_legend_container.appendChild( x_axis_legend_block );

    }

    // draw the infobox container
    var infobox_container = document.createElement("div");
    var infobox_container_class = document.createAttribute("class");
    infobox_container_class.value = "js-chart-heatmap-infobox-container";
    infobox_container.setAttributeNode( infobox_container_class );
    level0_inner_panel.appendChild( infobox_container );

    // draw the x-axis title container
    var x_axis_title_container = document.createElement("div");
    var x_axis_title_container_class = document.createAttribute("class");
    x_axis_title_container_class.value = "js-chart-heatmap-x-axis-title-container";
    x_axis_title_container.setAttributeNode( x_axis_title_container_class );
    var x_axis_title_container_title = document.createAttribute("title");
    x_axis_title_container_title.value = i_chart.i_options.xtitle;
    x_axis_title_container.setAttributeNode( x_axis_title_container_title );
    x_axis_title_container.innerText = i_chart.i_options.xtitle;
    level0_inner_panel.appendChild( x_axis_title_container );

    return [ level2_inner_panel, y_axis_legend_container, x_axis_legend_container ];
}
// draw function for a heatmap chart
function jsChartDrawHeatmapChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    /*
    console.log( i_chart.i_data_type );
    console.log( i_chart.i_design.palette_position_type );
    console.log( i_chart.i_design.palette_type );
    console.log( i_chart.i_design.color_palette );
    console.log( i_chart.i_design.color_position );
    */

    // draw the common base containrs
    switch (i_chart.i_design.palette_type) {
        // qualitative
        case "qualitative":
            var legend_labels = i_chart.i_keys;
            break;
        // sequential discrete
        case "sequential discrete":
            var legend_labels = i_chart.i_design.color_position;
            break;
        // sequential continuous
        case "sequential continuous":
            var legend_labels = i_chart.i_design.color_position;
            break;
        // diverging discrete
        case "diverging discrete":
            var legend_labels = i_chart.i_design.color_position;
            break;
        // diverging continuous
        case "diverging continuous":
            var legend_labels = i_chart.i_design.color_position;
            break;
        default:
            if (i_chart.i_data.length == 1) {
                var legend_labels = i_chart.i_labels;
            } else {
                var legend_labels = i_chart.i_titles;
            }
            break;
    }
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["bar"].data_type, legend_labels, i_chart.i_design.palette_type);
    var base_level2_inner_panel = draw_base_containers[0];
    var legend_container = draw_base_containers[1];

    // draw the level0 inner panel
    var draw_level0_panels = jsChartHeatmapDrawLevel0Containers(base_level2_inner_panel, i_chart);
    var level2_inner_panel = draw_level0_panels[0];
    var y_axis_legend_container = draw_level0_panels[1];
    var x_axis_legend_container = draw_level0_panels[2];

    // data_type: categorical
    // i_data-type: absolute | relative
    // color_palette
    // color_position
    // palette_type
    // palette_position_type

    // draw level2 value grid
    var draw_value_grid = jsChartHeatmapDrawValueGrid(level2_inner_panel, i_chart);

    // set the line height for the y-axis legend blocks
    for (var s = 0; s < y_axis_legend_container.children.length; s++) {
        var y_axis_legend_block_style = document.createAttribute("style");
        y_axis_legend_block_style.value = "line-height: " + y_axis_legend_container.children[s].clientHeight + "px;";
        y_axis_legend_container.children[s].setAttributeNode( y_axis_legend_block_style );
    }

    // set the width for the x-axis legend blocks (so that text-overflow has an effect)
    for (var v = 0; v < x_axis_legend_container.children.length; v++) {
        var x_axis_legend_block_style = document.createAttribute("style");
        x_axis_legend_block_style.value = "width: " + x_axis_legend_container.children[v].clientWidth + "px;";
        x_axis_legend_container.children[v].setAttributeNode( x_axis_legend_block_style );
    }

    return true;
}