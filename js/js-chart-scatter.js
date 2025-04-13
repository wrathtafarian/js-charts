// create a bubble marker
function jsChartScatterCreateScatterDynamicBubble(level1_inner_panel, i_design, i_options, i_totals, color_index, emoji_index, x_left, y_top, marker_title, x_point_value, y_point_value, s_point_value, x_min, x_max, y_min, y_max, s_max) {

    // the i_design.marker_width and i_design.marker_height will be used as the base diameter of the bubble.
    // this means a value of 100% will have  diameter of i_design.marker_width and i_design.marker_height.
    // smaller values will have smaller diameters, up a min after which everything will have the smallest diameter.

    // determine maximum diameter of bubble with the biggest value
    if ((i_design.marker_width == "auto") || (i_design.marker_height == "auto")) {
        var marker_width = (level1_inner_panel.clientWidth * 0.17) + "px";
        var marker_height = marker_width;
    } else {
        var marker_width = i_design.marker_width;
        var marker_height = i_design.marker_height;
    }

    // var d_multiplier = Math.abs(s_point_value / i_totals.s_points.max_value);
    var d_multiplier = Math.abs(s_point_value / s_max);
    if (d_multiplier <= 0.5) {
        d_multiplier = 0.5;
    }

    // create a bubble marker
    var marker = document.createElement("div");
    var marker_style = document.createAttribute("style");
    marker_style.value = "position: absolute; \
z-index: 100; \
width: calc(" + marker_width + " * " + d_multiplier + "); \
height: calc(" + marker_height + " * " + d_multiplier + "); \
left: calc(" + x_left + "% - ((" + marker_width + " * " + d_multiplier + ") / 2)); \
top: calc(" + y_top + "% - ((" + marker_height + " * " + d_multiplier + ") / 2)); \
background: radial-gradient(circle at 33% 33%, " + i_design.color_palette[color_index] + ", #333333); \
border: " + i_design.marker_border + "; \
border-radius: 50%; \
box-shadow: " + i_design.marker_box_shadow + "; \
opacity: " + i_design.marker_opacity + ";";
    marker.setAttributeNode( marker_style );
    var marker_style_title = document.createAttribute("title");
    marker_style_title.value = marker_title;
    marker.addEventListener("mouseover", increaseZIndex, false);
    marker.addEventListener("mouseout", decreaseZIndex, false);
    marker.setAttributeNode( marker_style_title );

    // draw data label for marker
    if (i_options.showlabels) {

        var data_label = document.createElement("div");
        var data_label_style = document.createAttribute("style");
        data_label_style.value = "position: absolute; \
text-align: center; \
width: " + i_design.datalabel_width + "; \
height: " + i_design.datalabel_height + "; \
line-height: " + i_design.datalabel_height + "; \
left: calc(50% - (" + i_design.datalabel_width + " / 2)); \
top: calc(50% - (" + i_design.datalabel_height + " / 2)); \
font-family: " + i_design.datalabel_font_family + "; \
font-size: " + i_design.datalabel_font_size + "; \
font-weight: " + i_design.datalabel_font_weight + "; \
background-color: " + i_design.datalabel_bg_color + "; \
color: " + i_design.datalabel_text_color + "; \
border: " + i_design.datalabel_border + "; \
border-radius: " + i_design.datalabel_border_radius + "; \
box-shadow: " + i_design.datalabel_box_shadow + "; \
opacity: " + i_design.datalabel_opacity + "; \
text-wrap-mode: nowrap; \
overflow: hidden; \
text-overflow: ellipsis;";
        data_label.setAttributeNode( data_label_style );
        //data_label.innerText = roundNumber(x_point_value, 2) + ";" + roundNumber(y_point_value, 2);
        data_label.innerText = roundNumber(s_point_value, 2);
        marker.appendChild( data_label );
    }

    return marker;
}
// create a bubble marker
function jsChartScatterCreateScatterBubble(i_design, i_options, color_index, emoji_index, x_left, y_top, marker_title, x_point_value, y_point_value) {

    // create a bubble marker
    var marker = document.createElement("div");
    var marker_style = document.createAttribute("style");
    marker_style.value = "position: absolute; \
z-index: 100; \
width: " + i_design.marker_width + "; \
height: " + i_design.marker_height + "; \
left: calc(" + x_left + "% - (" + i_design.marker_width + " / 2)); \
top: calc(" + y_top + "% - (" + i_design.marker_height + " / 2)); \
background: radial-gradient(circle at 33% 33%, " + i_design.color_palette[color_index] + ", #333333); \
border: " + i_design.marker_border + "; \
border-radius: 50%; \
box-shadow: " + i_design.marker_box_shadow + "; \
opacity: " + i_design.marker_opacity + ";";
    marker.setAttributeNode( marker_style );
    var marker_style_title = document.createAttribute("title");
    marker_style_title.value = marker_title;
    marker.addEventListener("mouseover", increaseZIndex, false);
    marker.addEventListener("mouseout", decreaseZIndex, false);
    marker.setAttributeNode( marker_style_title );

    // draw data label for marker
    if (i_options.showlabels) {

        var data_label = document.createElement("div");
        var data_label_style = document.createAttribute("style");
        data_label_style.value = "position: absolute; \
width: " + i_design.datalabel_width + "; \
height: " + i_design.datalabel_height + "; \
line-height: " + i_design.datalabel_height + "; \
left: calc(50% - (" + i_design.datalabel_width + " / 2)); \
top: calc(50% - (" + i_design.datalabel_height + " / 2)); \
font-family: " + i_design.datalabel_font_family + "; \
font-size: " + i_design.datalabel_font_size + "; \
font-weight: " + i_design.datalabel_font_weight + "; \
background-color: " + i_design.datalabel_bg_color + "; \
color: " + i_design.datalabel_text_color + "; \
border: " + i_design.datalabel_border + "; \
border-radius: " + i_design.datalabel_border_radius + "; \
box-shadow: " + i_design.datalabel_box_shadow + "; \
opacity: " + i_design.datalabel_opacity + "; \
text-wrap-mode: nowrap; \
overflow: hidden; \
text-overflow: ellipsis; \
text-align: center;";
        data_label.setAttributeNode( data_label_style );
        data_label.innerText = roundNumber(x_point_value, 2) + ";" + roundNumber(y_point_value, 2);
        marker.appendChild( data_label );
    }

    return marker;
}
// create an marker made up of an emoji
function jsChartScatterCreateScatterEmoji(i_design, i_options, color_index, emoji_index, x_left, y_top, marker_title) {

    // create scatter emoji marker
    var marker = document.createElement("div");
    var marker_style = document.createAttribute("style");
    marker_style.value = "position: absolute; width: " + i_design.marker_width + "; height: " + i_design.marker_height + "; left: calc(" + x_left + "% - (" + i_design.marker_width + " / 2)); top: calc(" + y_top + "% - (" + i_design.marker_height + " / 2));";
    marker.setAttributeNode( marker_style );
    var marker_style_title = document.createAttribute("title");
    marker_style_title.value = marker_title;
    marker.innerText = String.fromCodePoint( i_design.marker_emoji[emoji_index] );
    marker.setAttributeNode( marker_style_title );

    return marker;
}
// create scatter marker -- basic icon -- dot
function jsChartScatterCreateScatterDot(i_design, i_options, color_index, x_left, y_top, marker_title) {

    // create scatter marker
    var marker = document.createElement("div");
    var marker_style = document.createAttribute("style");
    marker_style.value = "position: absolute; width: " + i_design.marker_width + "; height: " + i_design.marker_height + "; left: calc(" + x_left + "% - (" + i_design.marker_width + " / 2)); top: calc(" + y_top + "% - (" + i_design.marker_height + " / 2)); border-radius: 50%; border: " + i_design.marker_border + "; background-color: " + i_design.color_palette[color_index] + "; opacity: " + i_design.marker_opacity + ";";
    marker.setAttributeNode( marker_style );
    var marker_style_title = document.createAttribute("title");
    marker_style_title.value = marker_title;
    marker.setAttributeNode( marker_style_title );

    return marker;
}
// create scatter marker -- basic shape -- circle
function jsChartScatterCreateScatterCircle(i_design, i_options, color_index, x_left, y_top, marker_title) {

    // create scatter marker
    var marker = document.createElement("div");
    var marker_style = document.createAttribute("style");
    marker_style.value = "position: absolute; width: 7px; height: 7px; left: calc(" + x_left + "% - 6.7px); top: calc(" + y_top + "% - 6.7px); border-radius: 50%; background-color: transparent; border: 3.5px solid " + i_design.color_palette[color_index] + "; opacity: " + i_design.marker_opacity + ";";
    marker.setAttributeNode( marker_style );
    var marker_style_title = document.createAttribute("title");
    marker_style_title.value = marker_title;
    marker.setAttributeNode( marker_style_title );

    return marker;
}
// create scatter marker -- basic shape -- square
function jsChartScatterCreateScatterSquare(i_design, i_options, color_index, x_left, y_top, marker_title) {

    // create scatter marker
    var marker = document.createElement("div");
    var marker_style = document.createAttribute("style");
    marker_style.value = "position: absolute; width: " + i_design.marker_width + "; height: " + i_design.marker_height + "; left: calc(" + x_left + "% - (" + i_design.marker_width + " / 2)); top: calc(" + y_top + "% - (" + i_design.marker_height + " / 2)); background-color: " + i_design.color_palette[color_index] + "; border: " + i_design.marker_border + "; border-radius: " + i_design.marker_border_radius + "; box-shadow: " + i_design.marker_box_shadow + "; opacity: " + i_design.marker_opacity + ";";
    marker.setAttributeNode( marker_style );
    var marker_style_title = document.createAttribute("title");
    marker_style_title.value = marker_title;
    marker.setAttributeNode( marker_style_title );

    return marker;
}
// create scatter marker -- basic shape -- triangle
function jsChartScatterCreateScatterTriangle(i_design, i_options, color_index, x_left, y_top, marker_title) {

    // create scatter marker
    var marker = document.createElement("div");
    var marker_style = document.createAttribute("style");
    marker_style.value = "position: absolute; width: 0px; height: 0px; left: calc(" + x_left + "% - (" + i_design.marker_width + " / 2)); top: calc(" + y_top + "% - (" + i_design.marker_height + " / 2)); border-right: calc(" + i_design.marker_width + " * 0.6) solid transparent; border-bottom: " + i_design.marker_width + " solid " + i_design.color_palette[color_index] + "; border-left: calc(" + i_design.marker_width + " * 0.6) solid transparent; opacity: " + i_design.marker_opacity + ";";
    marker.setAttributeNode( marker_style );
    var marker_style_title = document.createAttribute("title");
    marker_style_title.value = marker_title;
    marker.setAttributeNode( marker_style_title );

    return marker;
    }
// create the scatter point html
function jsChartScatterCreateScatterPoint(marker_type, level1_inner_panel, i_design, i_options, i_totals, color_index, emoji_index, x_left, y_top, marker_title, x_point_value, y_point_value, s_point_value, x_min, x_max, y_min, y_max, s_max) {

    switch( marker_type ) {
        // dot
        case "dot":
            return jsChartScatterCreateScatterDot(i_design, i_options, color_index, x_left, y_top, marker_title);
            break;

        // circle
        case "circle":
            return jsChartScatterCreateScatterCircle(i_design, i_options, color_index, x_left, y_top, marker_title);
            break;

        // square
        case "square":
            return jsChartScatterCreateScatterSquare(i_design, i_options, color_index, x_left, y_top, marker_title);
            break;

        // triangle
        case "triangle":
            return jsChartScatterCreateScatterTriangle(i_design, i_options, color_index, x_left, y_top, marker_title);
            break;

        // emoji
        case "emoji":
            return jsChartScatterCreateScatterEmoji(i_design, i_options, color_index, emoji_index, x_left, y_top, marker_title);
            break;

        // bubble
        case "bubble":
            return jsChartScatterCreateScatterBubble(i_design, i_options, color_index, emoji_index, x_left, y_top, marker_title, x_point_value, y_point_value);
            break;

        // dynamic bubble
        case "dynamicbubble":
            return jsChartScatterCreateScatterDynamicBubble(level1_inner_panel, i_design, i_options, i_totals, color_index, emoji_index, x_left, y_top, marker_title, x_point_value, y_point_value, s_point_value, x_min, x_max, y_min, y_max, s_max);
            break;

        // default
        default:
            return jsChartScatterCreateScatterCircle(i_design, i_options, color_index, x_left, y_top, marker_title);
            break;
    }

    return false;
}
// draw the series values
function jsChartScatterDrawBubbleValues(level1_inner_panel, i_chart, x_calculate_scale, y_calculate_scale, x_min, x_max, y_min, y_max, s_max) {
    var x_zero_line = 100 - (( x_calculate_scale[1] / (x_calculate_scale[1] - x_calculate_scale[0])) * 100);
    var y_zero_line = ( y_calculate_scale[1] / (y_calculate_scale[1] - y_calculate_scale[0])) * 100;

    var x_total_range = x_calculate_scale[1] - (x_calculate_scale[0]);
    var y_total_range = y_calculate_scale[1] - (y_calculate_scale[0]);

    var color_index = 0, emoji_index = 0;
    for (var s = 0; s < i_chart.i_data.length; s++) {
        for (var v = 0; v < i_chart.i_data[s].x_points.length; v++) {

            // calculate the x position
            if (i_chart.i_data[s].x_points[v] >= 0) {
                var x_left = x_zero_line + ((Math.abs(i_chart.i_data[s].x_points[v]) / x_total_range) * 100);
            } else {
                var x_left = ((Math.abs(x_calculate_scale[0]) - Math.abs(i_chart.i_data[s].x_points[v])) / x_total_range) * 100;
            }

            // calculate the y position
            if (i_chart.i_data[s].y_points[v] >= 0) {
                var y_top = ((Math.abs(y_calculate_scale[1]) - Math.abs(i_chart.i_data[s].y_points[v])) / y_total_range) * 100;
            } else {
                var y_top = 100 - (((Math.abs(y_calculate_scale[0]) - Math.abs(i_chart.i_data[s].y_points[v])) / y_total_range) * 100);
            }

            var marker_title = i_chart.i_titles[s] + "\n( " + i_chart.i_data[s].x_points[v] + " ; " + i_chart.i_data[s].y_points[v] + " )";

            // create the scatter marker
            var scatter_point = jsChartScatterCreateScatterPoint("dynamicbubble", level1_inner_panel, i_chart.i_design, i_chart.i_options, i_chart.i_totals[s], color_index, emoji_index, x_left, y_top, marker_title, i_chart.i_data[s].x_points[v], i_chart.i_data[s].y_points[v], i_chart.i_data[s].s_points[v], x_min, x_max, y_min, y_max, s_max);
            var scatter_point_width = scatter_point[0];
            var scatter_point_height = scatter_point[1];
            var scatter_point_elem = scatter_point[2];

            // append the marker
            level1_inner_panel.appendChild( scatter_point );
        }
        color_index++;
        if (color_index >= i_chart.i_design.color_palette.length) {
            color_index = 0;
        }
        emoji_index++;
        if (emoji_index >= i_chart.i_design.marker_emoji.length) {
            emoji_index = 0;
        }
    }

    return true;
}
// draw the series values
function jsChartScatterDrawScatterValues(level1_inner_panel, i_chart, x_calculate_scale, y_calculate_scale) {

    var x_zero_line = 100 - (( x_calculate_scale[1] / (x_calculate_scale[1] - x_calculate_scale[0])) * 100);
    var y_zero_line = ( y_calculate_scale[1] / (y_calculate_scale[1] - y_calculate_scale[0])) * 100;

    var x_total_range = x_calculate_scale[1] - (x_calculate_scale[0]);
    var y_total_range = y_calculate_scale[1] - (y_calculate_scale[0]);

    var color_index = 0, emoji_index = 0;
    for (var s = 0; s < i_chart.i_data.length; s++) {
        for (var v = 0; v < i_chart.i_data[s].x_points.length; v++) {

            // calculate the x position
            if (i_chart.i_data[s].x_points[v] >= 0) {
                var x_left = x_zero_line + ((Math.abs(i_chart.i_data[s].x_points[v]) / x_total_range) * 100);
            } else {
                var x_left = ((Math.abs(x_calculate_scale[0]) - Math.abs(i_chart.i_data[s].x_points[v])) / x_total_range) * 100;
            }

            // calculate the y position
            if (i_chart.i_data[s].y_points[v] >= 0) {
                var y_top = ((Math.abs(y_calculate_scale[1]) - Math.abs(i_chart.i_data[s].y_points[v])) / y_total_range) * 100;
            } else {
                var y_top = 100 - (((Math.abs(y_calculate_scale[0]) - Math.abs(i_chart.i_data[s].y_points[v])) / y_total_range) * 100);
            }

            var marker_title = i_chart.i_titles[s] + "\n( " + i_chart.i_data[s].x_points[v] + " ; " + i_chart.i_data[s].y_points[v] + " )";

            // create the scatter marker
            var scatter_point = jsChartScatterCreateScatterPoint(i_chart.i_options.markertype, level1_inner_panel, i_chart.i_design, i_chart.i_options, i_chart.i_totals[s], color_index, emoji_index, x_left, y_top, marker_title, i_chart.i_data[s].x_points[v], i_chart.i_data[s].y_points[v], null);
            var scatter_point_width = scatter_point[0];
            var scatter_point_height = scatter_point[1];
            var scatter_point_elem = scatter_point[2];

            // append the marker
            level1_inner_panel.appendChild( scatter_point );
        }
        color_index++;
        if (color_index >= i_chart.i_design.color_palette.length) {
            color_index = 0;
        }
        emoji_index++;
        if (emoji_index >= i_chart.i_design.marker_emoji.length) {
            emoji_index = 0;
        }
    }

    return true;
}
// draw the level0 containers
function jsChartScatterDrawLevel0Containers(base_level2_inner_panel, i_chart, x_calculate_scale, y_calculate_scale) {

    var x_zero_line = (( x_calculate_scale[1] / (x_calculate_scale[1] - x_calculate_scale[0])) * 100);
    var y_zero_line = ( y_calculate_scale[1] / (y_calculate_scale[1] - y_calculate_scale[0])) * 100;

    // draw level0 container
    var level0_inner_panel = document.createElement("div");
    var level0_inner_panel_class = document.createAttribute("class");
    level0_inner_panel_class.value = "js-chart-scatter-level0-inner-panel";
    level0_inner_panel.setAttributeNode( level0_inner_panel_class );
    base_level2_inner_panel.appendChild( level0_inner_panel );

    // draw y-axis title container
    var y_axis_title_container = document.createElement("div");
    var y_axis_title_container_class = document.createAttribute("class");
    y_axis_title_container_class.value = "js-chart-scatter-y-axis-title-container";
    y_axis_title_container.setAttributeNode( y_axis_title_container_class );
    var y_axis_title_container_title = document.createAttribute("title");
    y_axis_title_container_title.value = i_chart.i_options.ytitle;
    y_axis_title_container.setAttributeNode( y_axis_title_container_title );
    y_axis_title_container.innerText = i_chart.i_options.ytitle;
    level0_inner_panel.appendChild( y_axis_title_container );

    // draw level1 container
    var level1_inner_panel = document.createElement("div");
    var level1_inner_panel_class = document.createAttribute("class");
    level1_inner_panel_class.value = "js-chart-scatter-level1-inner-panel";
    level1_inner_panel.setAttributeNode( level1_inner_panel_class );
    var level1_inner_panel_style = document.createAttribute("style");
    level1_inner_panel_style.value = "background-color: " + i_chart.i_design.canvas_bg_color + ";";
    level1_inner_panel.setAttributeNode( level1_inner_panel_style );
    level0_inner_panel.appendChild( level1_inner_panel );

    var level1_inner_panel_style_list = [];
    if (i_chart.i_options.showgridlines) {
        level1_inner_panel_style_list.push( "repeating-linear-gradient(to bottom, " + i_chart.i_design.grid_line_color + ", " + i_chart.i_design.grid_line_color + " calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(10% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " calc(10% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " 10%)" );
        level1_inner_panel_style_list.push( "repeating-linear-gradient(to right, " + i_chart.i_design.grid_line_color + ", " + i_chart.i_design.grid_line_color + " calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(10% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " calc(10% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " 10%)" );
    }
    if (i_chart.i_options.showzeroline) {
        level1_inner_panel_style_list.push( "linear-gradient(to bottom, " + i_chart.i_design.canvas_bg_color + ", " + i_chart.i_design.canvas_bg_color + " calc(" + (x_zero_line * 100) + "% - (" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.zero_line_color + " calc(" + (x_zero_line * 100) + "% - (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.zero_line_color + " calc(" + (x_zero_line * 100) + "% + (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.canvas_bg_color + " calc(" + (x_zero_line * 100) + "% + (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.canvas_bg_color + ")" );
        level1_inner_panel_style_list.push( "linear-gradient(to right, " + i_chart.i_design.canvas_bg_color + ", " + i_chart.i_design.canvas_bg_color + " calc(" + (y_zero_line * 100) + "% - (" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.zero_line_color + " calc(" + (y_zero_line * 100) + "% - (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.zero_line_color + " calc(" + (y_zero_line * 100) + "% + (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.canvas_bg_color + " calc(" + (y_zero_line * 100) + "% + (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.canvas_bg_color + ")" );
    }

    if (level1_inner_panel_style_list.length > 0) {
        var level1_inner_panel_style = document.createAttribute("style");
        level1_inner_panel_style.value = "background: " + level1_inner_panel_style_list.join(", ") + ";";
        level1_inner_panel.setAttributeNode( level1_inner_panel_style );
    }

    // draw the axis (zero lines)
    if (i_chart.i_options.showzeroline) {

        // draw y-axis container
        var y_axis_container = document.createElement("div");
        var y_axis_container_class = document.createAttribute("class");
        y_axis_container_class.value = "js-chart-scatter-y-axis-container";
        y_axis_container.setAttributeNode( y_axis_container_class );
        var y_axis_container_style = document.createAttribute("style");
        y_axis_container_style.value = "right: calc(" + x_zero_line + "% - 5px);";
        y_axis_container.setAttributeNode( y_axis_container_style );
        level1_inner_panel.appendChild( y_axis_container );

        // draw y-axis scale label container
        var y_axis_scale_label_container = document.createElement("div");
        var y_axis_scale_label_container_class = document.createAttribute("class");
        y_axis_scale_label_container_class.value = "js-chart-scatter-y-axis-scale-label-container";
        y_axis_scale_label_container.setAttributeNode( y_axis_scale_label_container_class );
        y_axis_container.appendChild( y_axis_scale_label_container );

        //  [0] min_scale_value
        //  [1] max_scale_value
        //  [2] step_value
        //  [3] total_steps
        //  [4] num_of_decimals_to_use
        var max_loop = 0;
        for (var tt = y_calculate_scale[1]; tt > y_calculate_scale[0]; tt=(tt - y_calculate_scale[2])) {

            var y_axis_scale_label_block = document.createElement("div");
            var y_axis_scale_label_block_class = document.createAttribute("class");
            y_axis_scale_label_block_class.value = "js-chart-scatter-y-axis-scale-label-block";
            y_axis_scale_label_block.setAttributeNode( y_axis_scale_label_block_class );
            y_axis_scale_label_container.appendChild( y_axis_scale_label_block );

            var y_axis_scale_label = document.createElement("div");
            var y_axis_scale_label_class = document.createAttribute("class");
            y_axis_scale_label_class.value = "js-chart-scatter-y-axis-scale-label";
            y_axis_scale_label.setAttributeNode( y_axis_scale_label_class );
            var y_axis_scale_label_title = document.createAttribute("title");
            y_axis_scale_label_title.value = roundNumber(tt, 2);
            y_axis_scale_label.setAttributeNode( y_axis_scale_label_title );
            y_axis_scale_label.innerText = roundNumber(tt, 2);
            y_axis_scale_label_block.appendChild( y_axis_scale_label );

            max_loop++;
            if (max_loop >= 10) {
                break;
            }

        }

        // draw the last y-axis scale label
        var last_y_axis_scale_label = document.createElement("div");
        var last_y_axis_scale_label_class = document.createAttribute("class");
        last_y_axis_scale_label_class.value = "js-chart-scatter-y-axis-scale-label-last";
        last_y_axis_scale_label.setAttributeNode( last_y_axis_scale_label_class );
        last_y_axis_scale_label.innerText = roundNumber(y_calculate_scale[0], 2);
        y_axis_scale_label_container.children[ (y_axis_scale_label_container.children.length - 1) ].appendChild( last_y_axis_scale_label );

        // draw y-axis scale container
        var y_axis_scale_container = document.createElement("div");
        var y_axis_scale_container_class = document.createAttribute("class");
        y_axis_scale_container_class.value = "js-chart-scatter-y-axis-scale-container";
        y_axis_scale_container.setAttributeNode( y_axis_scale_container_class );
        y_axis_container.appendChild( y_axis_scale_container );

        for (var tt = 0; tt < 10; tt++) {

            var y_axis_scale_block = document.createElement("div");
            var y_axis_scale_block_class = document.createAttribute("class");
            y_axis_scale_block_class.value = "js-chart-scatter-x-axis-scale-block";
            y_axis_scale_block.setAttributeNode( y_axis_scale_block_class );
            var y_axis_scale_block_style = document.createAttribute("style");
            y_axis_scale_block_style.value = "border-top: " + i_chart.i_design.scale_border + "; border-left: " + i_chart.i_design.scale_border + ";";
            if (tt == 9) {
                y_axis_scale_block_style.value += "border-bottom: " + i_chart.i_design.scale_border + ";";
            }
            y_axis_scale_block.setAttributeNode( y_axis_scale_block_style );
            y_axis_scale_container.appendChild( y_axis_scale_block );

        }

        // draw x-axis container
        var x_axis_container = document.createElement("div");
        var x_axis_container_class = document.createAttribute("class");
        x_axis_container_class.value = "js-chart-scatter-x-axis-container";
        x_axis_container.setAttributeNode( x_axis_container_class );
        var x_axis_container_style = document.createAttribute("style");
        x_axis_container_style.value = "top: calc(" + y_zero_line + "% - 5px);";
        x_axis_container.setAttributeNode( x_axis_container_style );
        level1_inner_panel.appendChild( x_axis_container );

        // draw x-axis scale container
        var x_axis_scale_container = document.createElement("div");
        var x_axis_scale_container_class = document.createAttribute("class");
        x_axis_scale_container_class.value = "js-chart-scatter-x-axis-scale-container";
        x_axis_scale_container.setAttributeNode( x_axis_scale_container_class );
        x_axis_container.appendChild( x_axis_scale_container );

        for (var tt = 0; tt < 10; tt++) {

            var x_axis_scale_block = document.createElement("div");
            var x_axis_scale_block_class = document.createAttribute("class");
            x_axis_scale_block_class.value = "js-chart-scatter-x-axis-scale-block";
            x_axis_scale_block.setAttributeNode( x_axis_scale_block_class );
            var x_axis_scale_block_style = document.createAttribute("style");
            x_axis_scale_block_style.value = "border-left: " + i_chart.i_design.scale_border + "; border-bottom: " + i_chart.i_design.scale_border + ";";
            if (tt == 9) {
                x_axis_scale_block_style.value += "border-right: " + i_chart.i_design.scale_border + ";";
            }
            x_axis_scale_block.setAttributeNode( x_axis_scale_block_style );
            x_axis_scale_container.appendChild( x_axis_scale_block );

        }

        // draw x-axis scale label container
        var x_axis_scale_label_container = document.createElement("div");
        var x_axis_scale_label_container_class = document.createAttribute("class");
        x_axis_scale_label_container_class.value = "js-chart-scatter-x-axis-scale-label-container";
        x_axis_scale_label_container.setAttributeNode( x_axis_scale_label_container_class );
        x_axis_container.appendChild( x_axis_scale_label_container );

        //  [0] min_scale_value
        //  [1] max_scale_value
        //  [2] step_value
        //  [3] total_steps
        //  [4] num_of_decimals_to_use
        var max_loop = 0;
        for (var tt = x_calculate_scale[0]; tt < x_calculate_scale[1]; tt=(tt + x_calculate_scale[2])) {

            var x_axis_scale_label_block = document.createElement("div");
            var x_axis_scale_label_block_class = document.createAttribute("class");
            x_axis_scale_label_block_class.value = "js-chart-scatter-x-axis-scale-label-block";
            x_axis_scale_label_block.setAttributeNode( x_axis_scale_label_block_class );
            x_axis_scale_label_container.appendChild( x_axis_scale_label_block );

            var x_axis_scale_label = document.createElement("div");
            var x_axis_scale_label_class = document.createAttribute("class");
            x_axis_scale_label_class.value = "js-chart-scatter-x-axis-scale-label";
            x_axis_scale_label.setAttributeNode( x_axis_scale_label_class );
            var x_axis_scale_label_title = document.createAttribute("title");
            x_axis_scale_label_title.value = roundNumber(tt, 2);
            x_axis_scale_label.setAttributeNode( x_axis_scale_label_title );
            x_axis_scale_label.innerText = roundNumber(tt, 2);
            x_axis_scale_label_block.appendChild( x_axis_scale_label );

            max_loop++;
            if (max_loop >= 10) {
                break;
            }

        }

        // draw the last x-axis scale label
        var last_x_axis_scale_label = document.createElement("div");
        var last_x_axis_scale_label_class = document.createAttribute("class");
        last_x_axis_scale_label_class.value = "js-chart-scatter-x-axis-scale-label-last";
        last_x_axis_scale_label.setAttributeNode( last_x_axis_scale_label_class );
        last_x_axis_scale_label.innerText = roundNumber(x_calculate_scale[1], 2);
        x_axis_scale_label_container.children[ (x_axis_scale_label_container.children.length - 1) ].appendChild( last_x_axis_scale_label );

    }

    // draw infobox container
    var infobox_container = document.createElement("div");
    var infobox_container_class = document.createAttribute("class");
    infobox_container_class.value = "js-chart-scatter-infobox-container";
    infobox_container.setAttributeNode( infobox_container_class );
    level0_inner_panel.appendChild( infobox_container );

    // draw x-axis title container
    var x_axis_title_container = document.createElement("div");
    var x_axis_title_container_class = document.createAttribute("class");
    x_axis_title_container_class.value = "js-chart-scatter-x-axis-title-container";
    x_axis_title_container.setAttributeNode( x_axis_title_container_class );
    var x_axis_title_container_title = document.createAttribute("title");
    x_axis_title_container_title.value = i_chart.i_options.xtitle;
    x_axis_title_container.setAttributeNode( x_axis_title_container_title );
    x_axis_title_container.innerText = i_chart.i_options.xtitle;
    level0_inner_panel.appendChild( x_axis_title_container );

    return level1_inner_panel;
}
// draw function for a bubble chart
function jsChartDrawBubbleChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["bubble"].data_type, i_chart.i_titles);
    var base_level2_inner_panel = draw_base_containers[0];
    var legend_container = draw_base_containers[1];

    // determine the min and max values across all x and y series
    var x_min = i_chart.i_totals[0].x_points.min_value;
    var x_max = i_chart.i_totals[0].x_points.max_value;
    var y_min = i_chart.i_totals[0].y_points.min_value;
    var y_max = i_chart.i_totals[0].y_points.max_value;

    // determine the biggest value across all data series
    var s_max = i_chart.i_totals[0].s_points.max_value;

    for (var s = 1; s < i_chart.i_totals.length; s++) {
        if (i_chart.i_totals[s].x_points.min_value < x_min) {
            x_min = i_chart.i_totals[s].x_points.min_value;
        }
        if (i_chart.i_totals[s].x_points.max_value > x_max) {
            x_max = i_chart.i_totals[s].x_points.max_value;
        }
        if (i_chart.i_totals[s].y_points.min_value < y_min) {
            y_min = i_chart.i_totals[s].y_points.min_value;
        }
        if (i_chart.i_totals[s].y_points.max_value > y_max) {
            y_max = i_chart.i_totals[s].y_points.max_value;
        }
        if (i_chart.i_totals[s].s_points.max_value > s_max) {
            s_max = i_chart.i_totals[s].s_points.max_value;
        }
    }

    // x-axis: calculate the max and min scale values
    //  - min_scale_value
    //  - max_scale_value
    //  - step_value
    //  - total_steps
    //  - num_of_decimals_to_use
    if ((!isNaN(parseFloat(i_chart.i_options.xscalemin))) && (!isNaN(parseFloat(i_chart.i_options.xscalemax)))) {
        // min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use
        var this_xscalemin = parseFloat(i_chart.i_options.xscalemin);
        var this_xscalemax = parseFloat(i_chart.i_options.xscalemax);
        var x_calculate_scale = [ this_xscalemin, this_xscalemax, ((Math.abs(this_xscalemin) + Math.abs(this_xscalemax)) / 10), 10, 2 ];
    } else {
        var x_calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, x_min, x_max, 10);
    }

    // y-axis: calculate the max and min scale values
    //  - min_scale_value
    //  - max_scale_value
    //  - step_value
    //  - total_steps
    //  - num_of_decimals_to_use
    if ((!isNaN(parseFloat(i_chart.i_options.yscalemin))) && (!isNaN(parseFloat(i_chart.i_options.yscalemax)))) {
        // min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use
        var this_yscalemin = parseFloat(i_chart.i_options.yscalemin);
        var this_yscalemax = parseFloat(i_chart.i_options.yscalemax);
        var y_calculate_scale = [ this_yscalemin, this_yscalemax, ((Math.abs(this_yscalemin) + Math.abs(this_yscalemax)) / 10), 10, 2 ];
    } else {
        var y_calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, y_min, y_max, 10);
    }

    // draw the level0 containers
    var level1_inner_panel = jsChartScatterDrawLevel0Containers(base_level2_inner_panel, i_chart, x_calculate_scale, y_calculate_scale);

    // draw the series values
    var draw_series_values = jsChartScatterDrawBubbleValues(level1_inner_panel, i_chart, x_calculate_scale, y_calculate_scale, x_min, x_max, y_min, y_max, s_max);

    return true;
}
// draw function for a scatter chart
function jsChartDrawScatterChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["scatter"].data_type, i_chart.i_titles);
    var base_level2_inner_panel = draw_base_containers[0];
    var legend_container = draw_base_containers[1];

    // determine the min and max values across all x and y series
    var x_min = i_chart.i_totals[0].x_points.min_value;
    var x_max = i_chart.i_totals[0].x_points.max_value;
    var y_min = i_chart.i_totals[0].y_points.min_value;
    var y_max = i_chart.i_totals[0].y_points.max_value;
    for (var s = 1; s < i_chart.i_totals.length; s++) {
        if (i_chart.i_totals[s].x_points.min_value < x_min) {
            x_min = i_chart.i_totals[s].x_points.min_value;
        }
        if (i_chart.i_totals[s].x_points.max_value > x_max) {
            x_max = i_chart.i_totals[s].x_points.max_value;
        }
        if (i_chart.i_totals[s].y_points.min_value < y_min) {
            y_min = i_chart.i_totals[s].y_points.min_value;
        }
        if (i_chart.i_totals[s].y_points.max_value > y_max) {
            y_max = i_chart.i_totals[s].y_points.max_value;
        }
    }

    // x-axis: calculate the max and min scale values
    //  - min_scale_value
    //  - max_scale_value
    //  - step_value
    //  - total_steps
    //  - num_of_decimals_to_use
    if ((!isNaN(parseFloat(i_chart.i_options.xscalemin))) && (!isNaN(parseFloat(i_chart.i_options.xscalemax)))) {
        // min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use
        var this_xscalemin = parseFloat(i_chart.i_options.xscalemin);
        var this_xscalemax = parseFloat(i_chart.i_options.xscalemax);
        var x_calculate_scale = [ this_xscalemin, this_xscalemax, ((Math.abs(this_xscalemin) + Math.abs(this_xscalemax)) / 10), 10, 2 ];
    } else {
        var x_calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, x_min, x_max, 10);
    }

    // y-axis: calculate the max and min scale values
    //  - min_scale_value
    //  - max_scale_value
    //  - step_value
    //  - total_steps
    //  - num_of_decimals_to_use
    if ((!isNaN(parseFloat(i_chart.i_options.yscalemin))) && (!isNaN(parseFloat(i_chart.i_options.yscalemax)))) {
        // min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use
        var this_yscalemin = parseFloat(i_chart.i_options.yscalemin);
        var this_yscalemax = parseFloat(i_chart.i_options.yscalemax);
        var y_calculate_scale = [ this_yscalemin, this_yscalemax, ((Math.abs(this_yscalemin) + Math.abs(this_yscalemax)) / 10), 10, 2 ];
    } else {
        var y_calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, y_min, y_max, 10);
    }

    // draw the level0 containers
    var level1_inner_panel = jsChartScatterDrawLevel0Containers(base_level2_inner_panel, i_chart, x_calculate_scale, y_calculate_scale);

    // draw the series values
    var draw_series_values = jsChartScatterDrawScatterValues(level1_inner_panel, i_chart, x_calculate_scale, y_calculate_scale);

    return true;
}