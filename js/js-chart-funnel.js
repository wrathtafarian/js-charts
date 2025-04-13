// draw the center container
function jsChartFunnelColumnDrawSeriesColumns(top_legend_container, level2_inner_panel, bottom_legend_container, i_chart) {

    // determine the max value ignoring the sign
    var max_value = Math.abs(i_chart.i_data[0][0]);
    for (var v = 0; v < i_chart.i_data[0].length; v++) {
        if (Math.abs(i_chart.i_data[0][v]) > max_value) {
            max_value = Math.abs(i_chart.i_data[0][v]);
        }
    }

    // draw the top legend
    for (var v = 0; v < i_chart.i_labels.length; v++) {

        var legend_block = document.createElement("div");
        var legend_block_class = document.createAttribute("class");
        legend_block_class.value = "js-chart-funnel-bar-top-legend-block";
        legend_block.setAttributeNode( legend_block_class );
        var legend_block_title = document.createAttribute("title");
        legend_block_title.value = i_chart.i_titles[0] + "\n" + i_chart.i_labels[v] + "\n" + Math.abs(i_chart.i_data[0][v]);
        legend_block.setAttributeNode( legend_block_title );
        var legend_block_style = document.createAttribute("style");
        legend_block_style.value = "font-family: " + i_chart.i_design.legend_font_family + "; font-size: " + i_chart.i_design.legend_font_size + "; font-weight: " + i_chart.i_design.legend_font_weight + "; margin: 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2);";
        legend_block.setAttributeNode( legend_block_style );
        legend_block.innerText = i_chart.i_labels[v];
        top_legend_container.appendChild( legend_block );

    }

    // draw the funnel bars
    var color_index = 0;
    for (var v = 0; v < i_chart.i_data[0].length; v++) {

        var funnel_bar = document.createElement("div");
        var funnel_bar_style = document.createAttribute("style");
        funnel_bar_style.value = "position: relative; flex: 1 1 auto; height: " + ((Math.abs(i_chart.i_data[0][v]) / max_value) * 100) + "%; background-color: " + i_chart.i_design.color_palette[color_index] + "; min-height: " + i_chart.i_design.value_bar_min_height + "; min-width: " + i_chart.i_design.value_bar_min_width + "; border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2);";
        funnel_bar.setAttributeNode( funnel_bar_style );
        var funnel_bar_title = document.createAttribute("title");
        funnel_bar_title.value = i_chart.i_titles[0] + "\n" + i_chart.i_labels[v] + "\n" + Math.abs(i_chart.i_data[0][v]);
        funnel_bar.setAttributeNode( funnel_bar_title );
        level2_inner_panel.appendChild( funnel_bar );

        // draw the data label
        if (i_chart.i_options.showlabels) {

            var data_label = document.createElement("div");
            var data_label_style = document.createAttribute("style");
            data_label_style.value = "position: absolute; text-align: center; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis; left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
            data_label.setAttributeNode( data_label_style );
            data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(Math.abs(i_chart.i_data[0][v]), 2), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            funnel_bar.appendChild( data_label );

        }

        color_index++;
        if (color_index >= i_chart.i_design.color_palette.length) {
            color_index = 0;
        }
    }

    // insert the bottom legend values
    for (var v = 0; v < i_chart.i_data[0].length; v++) {

        var falloff_perc = (Math.abs(i_chart.i_data[0][v]) / max_value) * 100;

        var legend_block = document.createElement("div");
        var legend_block_class = document.createAttribute("class");
        legend_block_class.value = "js-chart-funnel-bar-bottom-legend-block";
        legend_block.setAttributeNode( legend_block_class );
        var legend_block_title = document.createAttribute("title");
        legend_block_title.value = i_chart.i_titles[0] + "\n" + i_chart.i_labels[v] + "\n" + roundNumber(falloff_perc, 2) + "%";
        legend_block.setAttributeNode( legend_block_title );
        var legend_block_style = document.createAttribute("style");
        legend_block_style.value = "font-family: " + i_chart.i_design.legend_font_family + "; font-size: " + i_chart.i_design.legend_font_size + "; font-weight: " + i_chart.i_design.legend_font_weight + "; margin: 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2);";
        legend_block.setAttributeNode( legend_block_style );
        legend_block.innerText = roundNumber(falloff_perc, 2) + "%";
        bottom_legend_container.appendChild( legend_block );

    }

    var top_legend_container_style = top_legend_container.getAttribute("style");
    top_legend_container_style += " width: " + level2_inner_panel.scrollWidth + "px;";
    top_legend_container.setAttribute("style", top_legend_container_style);

    var bottom_legend_container_style = bottom_legend_container.getAttribute("style");
    bottom_legend_container_style += " width: " + level2_inner_panel.scrollWidth + "px;";
    bottom_legend_container.setAttribute("style", bottom_legend_container_style);

    // after the top legend blocks have been drawn, add the line height to the dunamically sized block
    for (var v = 0; v < i_chart.i_data[0].length; v++) {

        var legend_block_style = top_legend_container.children[v].getAttribute("style");
        legend_block_style += "line-height: " + top_legend_container.children[v].clientHeight + "px;";
        top_legend_container.children[v].setAttribute("style", legend_block_style);
    }

    // after the bottom legend blocks have been drawn, add the line height to the dunamically sized block
    for (var v = 0; v < i_chart.i_data[0].length; v++) {

        var legend_block_style = bottom_legend_container.children[v].getAttribute("style");
        legend_block_style += "line-height: " + bottom_legend_container.children[v].clientHeight + "px;";
        bottom_legend_container.children[v].setAttribute("style", legend_block_style);

    }

    return true;
}
// draw the center container
function jsChartFunnelBarDrawSeriesBars(left_legend_container, level2_inner_panel, right_legend_container, i_chart) {

    // determine the max value ignoring the sign
    var max_value = Math.abs(i_chart.i_data[0][0]);
    for (var v = 0; v < i_chart.i_data[0].length; v++) {
        if (Math.abs(i_chart.i_data[0][v]) > max_value) {
            max_value = Math.abs(i_chart.i_data[0][v]);
        }
    }

    // draw the left legend
    for (var v = 0; v < i_chart.i_labels.length; v++) {

        var legend_block = document.createElement("div");
        var legend_block_class = document.createAttribute("class");
        legend_block_class.value = "js-chart-funnel-bar-left-legend-block";
        legend_block.setAttributeNode( legend_block_class );
        var legend_block_title = document.createAttribute("title");
        legend_block_title.value = i_chart.i_titles[0] + "\n" + i_chart.i_labels[v] + "\n" + Math.abs(i_chart.i_data[0][v]);
        legend_block.setAttributeNode( legend_block_title );
        var legend_block_style = document.createAttribute("style");
        legend_block_style.value = "font-family: " + i_chart.i_design.legend_font_family + "; font-size: " + i_chart.i_design.legend_font_size + "; font-weight: " + i_chart.i_design.legend_font_weight + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px;";
        legend_block.setAttributeNode( legend_block_style );
        legend_block.innerText = i_chart.i_labels[v];
        left_legend_container.appendChild( legend_block );

    }

    // draw the funnel bars
    var color_index = 0;
    for (var v = 0; v < i_chart.i_data[0].length; v++) {

        var funnel_bar = document.createElement("div");
        var funnel_bar_style = document.createAttribute("style");
        funnel_bar_style.value = "position: relative; flex: 1 1 auto; width: " + ((Math.abs(i_chart.i_data[0][v]) / max_value) * 100) + "%; background-color: " + i_chart.i_design.color_palette[color_index] + "; min-width: " + i_chart.i_design.value_bar_min_width + "; min-height: " + i_chart.i_design.value_bar_min_height + "; border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px;";
        funnel_bar.setAttributeNode( funnel_bar_style );
        var funnel_bar_title = document.createAttribute("title");
        funnel_bar_title.value = i_chart.i_titles[0] + "\n" + i_chart.i_labels[v] + "\n" + Math.abs(i_chart.i_data[0][v]);
        funnel_bar.setAttributeNode( funnel_bar_title );
        level2_inner_panel.appendChild( funnel_bar );

        // draw the data label
        if (i_chart.i_options.showlabels) {

            var data_label = document.createElement("div");
            var data_label_style = document.createAttribute("style");
            data_label_style.value = "position: absolute; text-align: center; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis; left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
            data_label.setAttributeNode( data_label_style );
            data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(Math.abs(i_chart.i_data[0][v]), 2), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            funnel_bar.appendChild( data_label );

        }

        color_index++;
        if (color_index >= i_chart.i_design.color_palette.length) {
            color_index = 0;
        }
    }

    // insert the right legend values
    for (var v = 0; v < i_chart.i_data[0].length; v++) {

        var falloff_perc = (Math.abs(i_chart.i_data[0][v]) / max_value) * 100;

        var legend_block = document.createElement("div");
        var legend_block_class = document.createAttribute("class");
        legend_block_class.value = "js-chart-funnel-bar-right-legend-block";
        legend_block.setAttributeNode( legend_block_class );
        var legend_block_title = document.createAttribute("title");
        legend_block_title.value = i_chart.i_titles[0] + "\n" + i_chart.i_labels[v] + "\n" + roundNumber(falloff_perc, 2) + "%";
        legend_block.setAttributeNode( legend_block_title );
        var legend_block_style = document.createAttribute("style");
        legend_block_style.value = "font-family: " + i_chart.i_design.legend_font_family + "; font-size: " + i_chart.i_design.legend_font_size + "; font-weight: " + i_chart.i_design.legend_font_weight + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px;";
        legend_block.setAttributeNode( legend_block_style );
        legend_block.innerText = roundNumber(falloff_perc, 2) + "%";
        right_legend_container.appendChild( legend_block );

    }

    var left_legend_container_style = left_legend_container.getAttribute("style");
    left_legend_container_style += " height: " + level2_inner_panel.scrollHeight + "px;";
    left_legend_container.setAttribute("style", left_legend_container_style);

    var right_legend_container_style = right_legend_container.getAttribute("style");
    right_legend_container_style += " height: " + level2_inner_panel.scrollHeight + "px;";
    right_legend_container.setAttribute("style", right_legend_container_style);

    // after the left legend blocks have been drawn, add the line height to the dunamically sized block
    for (var v = 0; v < i_chart.i_data[0].length; v++) {

        var legend_block_style = left_legend_container.children[v].getAttribute("style");
        legend_block_style += "line-height: " + left_legend_container.children[v].clientHeight + "px;";
        left_legend_container.children[v].setAttribute("style", legend_block_style);
    }

    // after the right legend blocks have been drawn, add the line height to the dunamically sized block
    for (var v = 0; v < i_chart.i_data[0].length; v++) {

        var legend_block_style = right_legend_container.children[v].getAttribute("style");
        legend_block_style += "line-height: " + right_legend_container.children[v].clientHeight + "px;";
        right_legend_container.children[v].setAttribute("style", legend_block_style);

    }

    return true;
}
// draw level2 containers and panels
function jsChartFunnelBarDrawLevel2Containers(level1_inner_panel, i_chart) {

    // draw the left legend
    var left_legend_container = document.createElement("div");
    var left_legend_container_class = document.createAttribute("class");
    left_legend_container_class.value = "js-chart-funnel-bar-left-legend-container";
    left_legend_container.setAttributeNode( left_legend_container_class );
    level1_inner_panel.appendChild( left_legend_container );

    // draw the level2 inner panel
    var level2_inner_panel = document.createElement("div");
    var level2_inner_panel_class = document.createAttribute("class");
    level2_inner_panel_class.value = "js-chart-funnel-bar-level2-inner-panel";
    level2_inner_panel.setAttributeNode( level2_inner_panel_class );
    level1_inner_panel.appendChild( level2_inner_panel );

    // draw the right legend
    var right_legend_container = document.createElement("div");
    var right_legend_container_class = document.createAttribute("class");
    right_legend_container_class.value = "js-chart-funnel-bar-right-legend-container";
    right_legend_container.setAttributeNode( right_legend_container_class );
    level1_inner_panel.appendChild( right_legend_container );

    // after drawing the containers - set an absolute width to each
    var left_legend_container_style = document.createAttribute("style");
    left_legend_container_style.value = "width: " + left_legend_container.clientWidth + "px;";
    left_legend_container.setAttributeNode( left_legend_container_style );

    var level2_inner_panel_style = document.createAttribute("style");
    level2_inner_panel_style.value = "width: " + level2_inner_panel.clientWidth + "px;";
    level2_inner_panel.setAttributeNode( level2_inner_panel_style );

    var right_legend_container_style = document.createAttribute("style");
    right_legend_container_style.value = "width: " + right_legend_container.clientWidth + "px;";
    right_legend_container.setAttributeNode( right_legend_container_style );

    return [ left_legend_container, level2_inner_panel, right_legend_container ];
}
// draw level2 containers and panels
function jsChartFunnelColumnDrawLevel2Containers(level1_inner_panel, i_chart) {

    // draw the top legend
    var top_legend_container = document.createElement("div");
    var top_legend_container_class = document.createAttribute("class");
    top_legend_container_class.value = "js-chart-funnel-column-top-legend-container";
    top_legend_container.setAttributeNode( top_legend_container_class );
    level1_inner_panel.appendChild( top_legend_container );

    // draw the level2 inner panel
    var level2_inner_panel = document.createElement("div");
    var level2_inner_panel_class = document.createAttribute("class");
    level2_inner_panel_class.value = "js-chart-funnel-column-level2-inner-panel";
    level2_inner_panel.setAttributeNode( level2_inner_panel_class );
    level1_inner_panel.appendChild( level2_inner_panel );

    // draw the bottom legend
    var bottom_legend_container = document.createElement("div");
    var bottom_legend_container_class = document.createAttribute("class");
    bottom_legend_container_class.value = "js-chart-funnel-column-bottom-legend-container";
    bottom_legend_container.setAttributeNode( bottom_legend_container_class );
    level1_inner_panel.appendChild( bottom_legend_container );

    // after drawing the containers - set an absolute width to each
    var top_legend_container_style = document.createAttribute("style");
    top_legend_container_style.value = "height: " + top_legend_container.clientHeight + "px;";
    top_legend_container.setAttributeNode( top_legend_container_style );

    var level2_inner_panel_style = document.createAttribute("style");
    level2_inner_panel_style.value = "height: " + level2_inner_panel.clientHeight + "px;";
    level2_inner_panel.setAttributeNode( level2_inner_panel_style );

    var bottom_legend_container_style = document.createAttribute("style");
    bottom_legend_container_style.value = "height: " + bottom_legend_container.clientHeight + "px;";
    bottom_legend_container.setAttributeNode( bottom_legend_container_style );

    return [ top_legend_container, level2_inner_panel, bottom_legend_container ];
}
// draw the level0 container
function jsChartFunnelColumnDrawLevel0Container(base_level2_inner_panel, i_chart) {

    // draw level0 inner panel
    var level0_inner_panel = document.createElement("div");
    var level0_inner_panel_class = document.createAttribute("class");
    level0_inner_panel_class.value = "js-chart-funnel-column-level0-inner-panel";
    level0_inner_panel.setAttributeNode( level0_inner_panel_class );
    base_level2_inner_panel.appendChild( level0_inner_panel );

    // draw the level1 inner panel
    var level1_inner_panel = document.createElement("div");
    var level1_inner_panel_class = document.createAttribute("class");
    level1_inner_panel_class.value = "js-chart-funnel-column-level1-inner-panel";
    level1_inner_panel.setAttributeNode( level1_inner_panel_class );
    level0_inner_panel.appendChild( level1_inner_panel );

    // draw the y-title
    var y_title_container = document.createElement("div");
    var y_title_container_class = document.createAttribute("class");
    y_title_container_class.value = "js-chart-funnel-column-y-title-container";
    y_title_container.setAttributeNode( y_title_container_class );
    y_title_container.innerText = i_chart.i_options.ytitle;
    level0_inner_panel.appendChild( y_title_container );

    // draw the x-title container
    var x_title_container = document.createElement("div");
    var x_title_container_class = document.createAttribute("class");
    x_title_container_class.value = "js-chart-funnel-column-x-title-container";
    x_title_container.setAttributeNode( x_title_container_class );
    x_title_container.innerText = i_chart.i_options.xtitle;
    level0_inner_panel.appendChild( x_title_container );

    // draw the infobox container
    var infobox_container = document.createElement("div");
    var infobox_container_class = document.createAttribute("class");
    infobox_container_class.value = "js-chart-funnel-column-infobox-container";
    infobox_container.setAttributeNode( infobox_container_class );
    level0_inner_panel.appendChild( infobox_container );

    return level1_inner_panel;
}
// draw the level0 container
function jsChartFunnelBarDrawLevel0Container(base_level2_inner_panel, i_chart) {

    // draw level0 container
    var level0_inner_panel = document.createElement("div");
    var level0_inner_panel_class = document.createAttribute("class");
    level0_inner_panel_class.value = "js-chart-funnel-bar-level0-inner-panel";
    level0_inner_panel.setAttributeNode( level0_inner_panel_class );
    base_level2_inner_panel.appendChild( level0_inner_panel );

    // draw y-axis title container
    var y_axis_title_container = document.createElement("div");
    var y_axis_title_container_class = document.createAttribute("class");
    y_axis_title_container_class.value = "js-chart-funnel-bar-y-axis-title-container";
    y_axis_title_container.setAttributeNode( y_axis_title_container_class );
    y_axis_title_container.innerText = i_chart.i_options.ytitle;
    level0_inner_panel.appendChild( y_axis_title_container );

    // draw level1 inner panel
    var level1_inner_panel = document.createElement("div");
    var level1_inner_panel_class = document.createAttribute("class");
    level1_inner_panel_class.value = "js-chart-funnel-bar-level1-inner-panel";
    level1_inner_panel.setAttributeNode( level1_inner_panel_class );
    var level1_inner_panel_style = document.createAttribute("style");
    level1_inner_panel_style.value = "scrollbar-color: " + i_chart.i_design.canvas_scrollbar_color + ";";
    level1_inner_panel.setAttributeNode( level1_inner_panel_style );
    level0_inner_panel.appendChild( level1_inner_panel );

    // draw infobox container
    var infobox_container = document.createElement("div");
    var infobox_container_class = document.createAttribute("class");
    infobox_container_class.value = "js-chart-funnel-bar-infobox-containr";
    infobox_container.setAttributeNode( infobox_container_class );
    level0_inner_panel.appendChild( infobox_container );

    // draw x-axis titl container
    var x_axis_title_container = document.createElement("div");
    var x_axis_title_container_class = document.createAttribute("class");
    x_axis_title_container_class.value = "js-chart-funnel-bar-x-axis-title-container";
    x_axis_title_container.setAttributeNode( x_axis_title_container_class );
    x_axis_title_container.innerText = i_chart.i_options.xtitle;
    level0_inner_panel.appendChild( x_axis_title_container );

    return level1_inner_panel;
}
// draw function for a funnel column chart
function jsChartDrawFunnelColumnChart(chart_index, series_index, this_chart, i_chart) {

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
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["funnel column"].data_type, legend_labels);
    var base_level2_inner_panel = draw_base_containers[0];
    var legend_container = draw_base_containers[1];

    // draw the level0 container
    var level1_inner_panel = jsChartFunnelColumnDrawLevel0Container(base_level2_inner_panel, i_chart);

    // draw level2 containers and panels
    var draw_level2_containers = jsChartFunnelColumnDrawLevel2Containers(level1_inner_panel, i_chart);
    var top_legend_container = draw_level2_containers[0];
    var level2_inner_panel = draw_level2_containers[1];
    var bottom_legend_container = draw_level2_containers[2];

    // draw the center container
    var draw_center_content = jsChartFunnelColumnDrawSeriesColumns(top_legend_container, level2_inner_panel, bottom_legend_container, i_chart);

    return true;
}
// draw function for a funnel bar chart
function jsChartDrawFunnelBarChart(chart_index, series_index, this_chart, i_chart) {

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
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["funnel bar"].data_type, legend_labels);
    var base_level2_inner_panel = draw_base_containers[0];
    var legend_container = draw_base_containers[1];

    // draw the level0 container
    var level1_inner_panel = jsChartFunnelBarDrawLevel0Container(base_level2_inner_panel, i_chart);

    // draw level2 containers and panels
    var draw_level2_containers = jsChartFunnelBarDrawLevel2Containers(level1_inner_panel, i_chart);
    var left_legend_container = draw_level2_containers[0];
    var level2_inner_panel = draw_level2_containers[1];
    var right_legend_container = draw_level2_containers[2];

    // draw the center container
    var draw_center_content = jsChartFunnelBarDrawSeriesBars(left_legend_container, level2_inner_panel, right_legend_container, i_chart);
 
    return true;
}