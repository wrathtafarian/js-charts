// get all top outliers
function jsChartBoxPlotCalculateTopOutliers(top_iqr, ivalue) {

    var return_values = [];
    var last_value = null;
    for (var tt = 0; tt < ivalue.length; tt++) {
        if (ivalue[tt] > top_iqr) {
            return_values.push( ivalue[tt] );
        } else {
            last_value = ivalue[tt];
        }
    }
    return [ return_values, last_value ];
}
// get all bottom outliers
function jsChartBoxPlotCalculateBottomOutliers(bottom_iqr, ivalue) {

    var return_values = [];
    var last_value = null;
    for (var tt = (ivalue.length-1); tt >= 0; tt--) {
        if (ivalue[tt] < bottom_iqr) {
            return_values.push( ivalue[tt] );
        } else {
            last_value = ivalue[tt];
        }
    }
    return [ return_values, last_value ];
}
//get any percentile from an array
function jsChartBoxPlotCalculatePercentile(data, percentile) {

    //var index = (percentile/100) * data.length;
    var index = percentile * data.length;
    var result;
    if (Math.floor(index) == index) {
        result = (data[(index-1)] + data[index])/2;
    }
    else {
        result = data[Math.floor(index)];
    }
    return result;
}
// draw the series value containers
function jsChartBoxPlotDrawHorizontalValueContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var total_range = max_scale_value - (min_scale_value);

    for (var s = 0; s < i_chart.i_data.length; s++) {
        var v_counter = 0;
        var color_index = 0;
        for (const [ikey, ivalue] of Object.entries(i_chart.i_data[s])) {

            ivalue.sort( (a, b) => (a - b) );

            var five_num_summary = {
                "min": ivalue[0],
                "q1": jsChartBoxPlotCalculatePercentile(ivalue, 0.25),
                "q2": jsChartBoxPlotCalculatePercentile(ivalue, 0.50),
                "q3": jsChartBoxPlotCalculatePercentile(ivalue, 0.75),
                "max": ivalue[(ivalue.length-1)],
            }

            var irq_diff = (five_num_summary["q3"] - five_num_summary["q1"]) * 1.5;
            var top_irq = five_num_summary["q3"] + irq_diff;
            var bottom_irq = five_num_summary["q1"] - irq_diff;

            var get_top_irq = jsChartBoxPlotCalculateTopOutliers(top_irq, ivalue);
            var top_outliers = get_top_irq[0];
            var last_top_value = get_top_irq[1];
            var get_bottom_irq = jsChartBoxPlotCalculateBottomOutliers(bottom_irq, ivalue);
            var bottom_outliers = get_bottom_irq[0];
            var last_bottom_value = get_bottom_irq[1];

            //var elem_title = i_chart.i_labels[s] + "\n" + ikey + "\nMin IRQ: " + roundNumber(bottom_irq, 2) + "\nMin: " + roundNumber(five_num_summary["min"], 2) + "\nQ1: " + roundNumber(five_num_summary["q1"], 2) + "\nQ2: " + roundNumber(five_num_summary["q2"], 2) + "\nQ3: " + roundNumber(five_num_summary["q3"], 2) + "\nMax: " + roundNumber(five_num_summary["max"], 2) + "\nMax IRQ: " + roundNumber(top_irq, 2);
            var elem_title = i_chart.i_labels[s] + "\n" + ikey + "\nMin IRQ: " + roundNumber(last_bottom_value, 2) + "\nMin: " + roundNumber(five_num_summary["min"], 2) + "\nQ1: " + roundNumber(five_num_summary["q1"], 2) + "\nQ2: " + roundNumber(five_num_summary["q2"], 2) + "\nQ3: " + roundNumber(five_num_summary["q3"], 2) + "\nMax: " + roundNumber(five_num_summary["max"], 2) + "\nMax IRQ: " + roundNumber(last_top_value, 2) + ";";

            // draw whiskers
            if (i_chart.i_options.showwhiskers) {

                var whisker_height = i_chart.i_design.value_line_thickness;
                var whisker_width = ((last_top_value - last_bottom_value) / total_range) * level2_inner_panel.clientWidth + "px";
                var whisker_top = "calc(50% - (" + whisker_height + " / 2))";
                var whisker_right = ((max_scale_value - last_top_value) / total_range) * level2_inner_panel.clientWidth + "px";

                var whisker = document.createElement("div");
                var whisker_style = document.createAttribute("style");
                whisker_style.value = "position: absolute; width: "+ whisker_width + "; height: "+ whisker_height + "; right: "+ whisker_right + "; top: " + whisker_top + "; background-color: " + i_chart.i_design.value_line_color + ";";
                whisker.setAttributeNode( whisker_style );
                var whisker_title = document.createAttribute("title");
                whisker_title.value = elem_title;
                whisker.setAttributeNode( whisker_title );
                level2_inner_panel.children[s].children[v_counter].appendChild( whisker );

                // draw whisker top T
                var top_t = document.createElement("div");
                var top_t_style = document.createAttribute("style");
                top_t_style.value = "position: absolute; right: calc(" + whisker_right + " - (" + i_chart.i_design.value_line_thickness +" / 2)); width: " + i_chart.i_design.value_line_thickness + "; height: 40%; top: calc(50% - (40% / 2)); background-color: " + i_chart.i_design.value_line_color + ";";
                top_t.setAttributeNode( top_t_style );
                var top_t_title = document.createAttribute("title");
                top_t_title.value = elem_title;
                top_t.setAttributeNode( top_t_title );
                level2_inner_panel.children[s].children[v_counter].appendChild( top_t );

                // draw whisker bottom T
                var bottom_t = document.createElement("div");
                var bottom_t_style = document.createAttribute("style");
                bottom_t_style.value = "position: absolute; right: calc(" + whisker_right + " + " + whisker_width + " - (" + i_chart.i_design.value_line_thickness + " / 2)); width: " + i_chart.i_design.value_line_thickness + "; height: 40%; top: calc(50% - (40% / 2)); background-color: " + i_chart.i_design.value_line_color + ";";
                bottom_t.setAttributeNode( bottom_t_style );
                var bottom_t_title = document.createAttribute("title");
                bottom_t_title.value = elem_title;
                bottom_t.setAttributeNode( bottom_t_title );
                level2_inner_panel.children[s].children[v_counter].appendChild( bottom_t );

            }

            // draw the main box
            var box_height = "100%";
            var box_width = ((five_num_summary["q3"] - five_num_summary["q1"]) / total_range) * level2_inner_panel.clientWidth + "px";
            var box_top = "0%";
            var box_right = ((max_scale_value - five_num_summary["q3"]) / total_range) * level2_inner_panel.clientWidth + "px";

            var box = document.createElement("div");
            var box_style = document.createAttribute("style");
            box_style.value = "position: absolute; width: "+ box_width + "; height: "+ box_height + "; right: "+ box_right + "; top: " + box_top + "; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
            box.setAttributeNode( box_style );
            var box_title = document.createAttribute("title");
            box_title.value = elem_title;
            box.setAttributeNode( box_title );
            level2_inner_panel.children[s].children[v_counter].appendChild( box );

            // draw median line
            if (i_chart.i_options.showmedians) {

                var median_height = "100%";
                var median_width = i_chart.i_design.value_line_thickness;
                var median_top = "0%";
                var median_right = "calc(" + ((max_scale_value - five_num_summary["q2"]) / total_range) * level2_inner_panel.clientWidth + "px - (" + median_width + " / 2))";

                var median = document.createElement("div");
                var median_style = document.createAttribute("style");
                median_style.value = "position: absolute; width: "+ median_width + "; height: "+ median_height + "; right: "+ median_right + "; top: " + median_top + "; background-color: " + i_chart.i_design.value_line_color + ";";
                median.setAttributeNode( median_style );
                var median_title = document.createAttribute("title");
                median_title.value = elem_title;
                median.setAttributeNode( median_title );
                level2_inner_panel.children[s].children[v_counter].appendChild( median );

            }

            // draw top (right) outliers
            if (top_outliers.length > 0) {
                for (var tt = 0; tt < top_outliers.length; tt++) {

                    var marker_width = i_chart.i_design.marker_width;
                    var marker_height = i_chart.i_design.marker_height;
                    var marker_top = "calc(50% - (" + marker_height + " / 2))";
                    var marker_right = "calc(" + ((max_scale_value - top_outliers[tt]) / total_range) * level2_inner_panel.clientWidth + "px - (" + marker_width + " / 2))";

                    var marker = document.createElement("div");
                    var marker_style = document.createAttribute("style");
                    marker_style.value = "position: absolute; width: "+ marker_width + "; height: "+ marker_height + "; right: "+ marker_right + "; top: " + marker_top + "; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.marker_border+ "; border-radius: 50%; box-shadow: " + i_chart.i_design.marker_box_shadow + "; opacity: " + i_chart.i_design.marker_opacity + ";";
                    marker.setAttributeNode( marker_style );
                    var marker_title = document.createAttribute("title");
                    marker_title.value = i_chart.i_labels[s] + "\n" + ikey + "\n" + roundNumber(top_outliers[tt], 2);
                    marker.setAttributeNode( marker_title );
                    level2_inner_panel.children[s].children[v_counter].appendChild( marker );

                    if (i_chart.i_options.showlabels) {

                        var label_width = i_chart.i_design.datalabel_width;
                        var label_height = i_chart.i_design.datalabel_height;
                        var label_top = "calc(50% + " + marker_height + ")";
                        var label_right = "calc(" + ((max_scale_value - top_outliers[tt]) / total_range) * level2_inner_panel.clientWidth + "px - " + marker_width + ")";

                        var label = document.createElement("div");
                        var label_style = document.createAttribute("style");
                        label_style.value = "position: absolute; text-align: center; width: "+ label_width + "; height: "+ label_height + "; line-height: "+ label_height + "; right: "+ label_right + "; top: " + label_top + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
                        label.setAttributeNode( label_style );
                        var label_title = document.createAttribute("title");
                        label_title.value = i_chart.i_labels[s] + "\n" + ikey + "\n" + roundNumber(top_outliers[tt], 2);
                        label.setAttributeNode( label_title );
                        label.innerText = roundNumber(top_outliers[tt], 2);
                        level2_inner_panel.children[s].children[v_counter].appendChild( label );
                    }
                }
            }

            // draw bottom (left) outliers
            if (bottom_outliers.length > 0) {
                for (var tt = 0; tt < bottom_outliers.length; tt++) {

                    var marker_width = i_chart.i_design.marker_width;
                    var marker_height = i_chart.i_design.marker_height;
                    var marker_top = "calc(50% - (" + marker_height + " / 2))";
                    var marker_right = "calc(" + ((max_scale_value - bottom_outliers[tt]) / total_range) * level2_inner_panel.clientWidth + "px - (" + marker_width + " / 2))";

                    var marker = document.createElement("div");
                    var marker_style = document.createAttribute("style");
                    marker_style.value = "position: absolute; width: "+ marker_width + "; height: "+ marker_height + "; right: "+ marker_right + "; top: " + marker_top + "; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.marker_border+ "; border-radius: 50%; box-shadow: " + i_chart.i_design.marker_box_shadow + "; opacity: " + i_chart.i_design.marker_opacity + ";";
                    marker.setAttributeNode( marker_style );
                    var marker_title = document.createAttribute("title");
                    marker_title.value = i_chart.i_labels[s] + "\n" + ikey + "\n" + roundNumber(bottom_outliers[tt], 2);
                    marker.setAttributeNode( marker_title );
                    level2_inner_panel.children[s].children[v_counter].appendChild( marker );

                    if (i_chart.i_options.showlabels) {

                        var label_width = i_chart.i_design.datalabel_width;
                        var label_height = i_chart.i_design.datalabel_height;
                        var label_top = "calc(50% + " + marker_height + ")";
                        var label_right = "calc(" + ((max_scale_value - bottom_outliers[tt]) / total_range) * level2_inner_panel.clientWidth + "px - " + marker_width + ")";

                        var label = document.createElement("div");
                        var label_style = document.createAttribute("style");
                        label_style.value = "position: absolute; text-align: center; width: "+ label_width + "; height: "+ label_height + "; line-height: "+ label_height + "; right: "+ label_right + "; top: " + label_top + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
                        label.setAttributeNode( label_style );
                        var label_title = document.createAttribute("title");
                        label_title.value = i_chart.i_labels[s] + "\n" + ikey + "\n" + roundNumber(bottom_outliers[tt], 2);
                        label.setAttributeNode( label_title );
                        label.innerText = roundNumber(bottom_outliers[tt], 2);
                        level2_inner_panel.children[s].children[v_counter].appendChild( label );
                    }
                }
            }

            v_counter++;

            //if (i_chart.i_data.length > 1) {
                color_index++;
                if (color_index >= i_chart.i_design.color_palette.length) {
                    color_index = 0;
                }
            //}
        }
    }

    return true;
}
// draw the series value containers
function jsChartBoxPlotDrawValueContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var total_range = max_scale_value - (min_scale_value);

    for (var s = 0; s < i_chart.i_data.length; s++) {
        var v_counter = 0;
        var color_index = 0;
        for (const [ikey, ivalue] of Object.entries(i_chart.i_data[s])) {

            ivalue.sort( (a, b) => (a - b) );

            var five_num_summary = {
                "min": ivalue[0],
                "q1": jsChartBoxPlotCalculatePercentile(ivalue, 0.25),
                "q2": jsChartBoxPlotCalculatePercentile(ivalue, 0.50),
                "q3": jsChartBoxPlotCalculatePercentile(ivalue, 0.75),
                "max": ivalue[(ivalue.length-1)],
            }

            var irq_diff = (five_num_summary["q3"] - five_num_summary["q1"]) * 1.5;
            var top_irq = five_num_summary["q3"] + irq_diff;
            var bottom_irq = five_num_summary["q1"] - irq_diff;

            var get_top_irq = jsChartBoxPlotCalculateTopOutliers(top_irq, ivalue);
            var top_outliers = get_top_irq[0];
            var last_top_value = get_top_irq[1];
            var get_bottom_irq = jsChartBoxPlotCalculateBottomOutliers(bottom_irq, ivalue);
            var bottom_outliers = get_bottom_irq[0];
            var last_bottom_value = get_bottom_irq[1];

            //var elem_title = i_chart.i_labels[s] + "\n" + ikey + "\nMin IRQ: " + roundNumber(bottom_irq, 2) + "\nMin: " + roundNumber(five_num_summary["min"], 2) + "\nQ1: " + roundNumber(five_num_summary["q1"], 2) + "\nQ2: " + roundNumber(five_num_summary["q2"], 2) + "\nQ3: " + roundNumber(five_num_summary["q3"], 2) + "\nMax: " + roundNumber(five_num_summary["max"], 2) + "\nMax IRQ: " + roundNumber(top_irq, 2);
            var elem_title = i_chart.i_labels[s] + "\n" + ikey + "\nMin IRQ: " + roundNumber(last_bottom_value, 2) + "\nMin: " + roundNumber(five_num_summary["min"], 2) + "\nQ1: " + roundNumber(five_num_summary["q1"], 2) + "\nQ2: " + roundNumber(five_num_summary["q2"], 2) + "\nQ3: " + roundNumber(five_num_summary["q3"], 2) + "\nMax: " + roundNumber(five_num_summary["max"], 2) + "\nMax IRQ: " + roundNumber(last_top_value, 2) + ";";

            // draw whiskers
            if (i_chart.i_options.showwhiskers) {

                var whisker_width = i_chart.i_design.value_line_thickness;
                var whisker_height = ((last_top_value - last_bottom_value) / total_range) * level2_inner_panel.clientHeight + "px";
                var whisker_left = "calc(50% - (" + whisker_width + " / 2))";
                var whisker_top = ((max_scale_value - last_top_value) / total_range) * level2_inner_panel.clientHeight + "px";

                var whisker = document.createElement("div");
                var whisker_style = document.createAttribute("style");
                whisker_style.value = "position: absolute; width: "+ whisker_width + "; height: "+ whisker_height + "; left: "+ whisker_left + "; top: " + whisker_top + "; background-color: " + i_chart.i_design.value_line_color + ";";
                whisker.setAttributeNode( whisker_style );
                var whisker_title = document.createAttribute("title");
                whisker_title.value = elem_title;
                whisker.setAttributeNode( whisker_title );
                level2_inner_panel.children[s].children[v_counter].appendChild( whisker );

                // draw whisker top T
                var top_t = document.createElement("div");
                var top_t_style = document.createAttribute("style");
                top_t_style.value = "position: absolute; top: calc(" + whisker_top + " - (" + i_chart.i_design.value_line_thickness +" / 2)); height: " + i_chart.i_design.value_line_thickness + "; width: 40%; left: calc(50% - (40% / 2)); background-color: " + i_chart.i_design.value_line_color + ";";
                top_t.setAttributeNode( top_t_style );
                var top_t_title = document.createAttribute("title");
                top_t_title.value = elem_title;
                top_t.setAttributeNode( top_t_title );
                level2_inner_panel.children[s].children[v_counter].appendChild( top_t );

                // draw whisker bottom T
                var bottom_t = document.createElement("div");
                var bottom_t_style = document.createAttribute("style");
                bottom_t_style.value = "position: absolute; top: calc(" + whisker_top + " + " + whisker_height + " - (" + i_chart.i_design.value_line_thickness + " / 2)); height: " + i_chart.i_design.value_line_thickness + "; width: 40%; left: calc(50% - (40% / 2)); background-color: " + i_chart.i_design.value_line_color + ";";
                bottom_t.setAttributeNode( bottom_t_style );
                var bottom_t_title = document.createAttribute("title");
                bottom_t_title.value = elem_title;
                bottom_t.setAttributeNode( bottom_t_title );
                level2_inner_panel.children[s].children[v_counter].appendChild( bottom_t );

            }

            // draw the main box
            var box_width = "100%";
            var box_height = ((five_num_summary["q3"] - five_num_summary["q1"]) / total_range) * level2_inner_panel.clientHeight + "px";
            var box_left = "0%";
            var box_top = ((max_scale_value - five_num_summary["q3"]) / total_range) * level2_inner_panel.clientHeight + "px";

            var box = document.createElement("div");
            var box_style = document.createAttribute("style");
            box_style.value = "position: absolute; width: "+ box_width + "; height: "+ box_height + "; left: "+ box_left + "; top: " + box_top + "; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
            box.setAttributeNode( box_style );
            var box_title = document.createAttribute("title");
            box_title.value = elem_title;
            box.setAttributeNode( box_title );
            level2_inner_panel.children[s].children[v_counter].appendChild( box );

            // draw median line
            if (i_chart.i_options.showmedians) {

                var median_width = "100%";
                var median_height = i_chart.i_design.value_line_thickness;
                var median_left = "0%";
                var median_top = "calc(" + ((max_scale_value - five_num_summary["q2"]) / total_range) * level2_inner_panel.clientHeight + "px - (" + median_height + " / 2))";

                var median = document.createElement("div");
                var median_style = document.createAttribute("style");
                median_style.value = "position: absolute; width: "+ median_width + "; height: "+ median_height + "; left: "+ median_left + "; top: " + median_top + "; background-color: " + i_chart.i_design.value_line_color + ";";
                median.setAttributeNode( median_style );
                var median_title = document.createAttribute("title");
                median_title.value = elem_title;
                median.setAttributeNode( median_title );
                level2_inner_panel.children[s].children[v_counter].appendChild( median );

            }

            // draw top outliers
            if (top_outliers.length > 0) {
                for (var tt = 0; tt < top_outliers.length; tt++) {

                    var marker_width = i_chart.i_design.marker_width;
                    var marker_height = i_chart.i_design.marker_height;
                    var marker_left = "calc(50% - (" + marker_width + " / 2))";
                    var marker_top = "calc(" + ((max_scale_value - top_outliers[tt]) / total_range) * level2_inner_panel.clientHeight + "px - (" + marker_height + " / 2))";

                    var marker = document.createElement("div");
                    var marker_style = document.createAttribute("style");
                    marker_style.value = "position: absolute; width: "+ marker_width + "; height: "+ marker_height + "; left: "+ marker_left + "; top: " + marker_top + "; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.marker_border+ "; border-radius: 50%; box-shadow: " + i_chart.i_design.marker_box_shadow + "; opacity: " + i_chart.i_design.marker_opacity + ";";
                    marker.setAttributeNode( marker_style );
                    var marker_title = document.createAttribute("title");
                    marker_title.value = i_chart.i_labels[s] + "\n" + ikey + "\n" + roundNumber(top_outliers[tt], 2);
                    marker.setAttributeNode( marker_title );
                    level2_inner_panel.children[s].children[v_counter].appendChild( marker );

                    if (i_chart.i_options.showlabels) {

                        var label_width = i_chart.i_design.datalabel_width;
                        var label_height = i_chart.i_design.datalabel_height;
                        var label_left = "calc(50% + " + marker_width + ")";
                        var label_top = "calc(" + ((max_scale_value - top_outliers[tt]) / total_range) * level2_inner_panel.clientHeight + "px - " + marker_height + ")";

                        var label = document.createElement("div");
                        var label_style = document.createAttribute("style");
                        label_style.value = "position: absolute; text-align: center; width: "+ label_width + "; height: "+ label_height + "; line-height: "+ label_height + "; left: "+ label_left + "; top: " + label_top + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
                        label.setAttributeNode( label_style );
                        var label_title = document.createAttribute("title");
                        label_title.value = i_chart.i_labels[s] + "\n" + ikey + "\n" + roundNumber(top_outliers[tt], 2);
                        label.setAttributeNode( label_title );
                        label.innerText = roundNumber(top_outliers[tt], 2);
                        level2_inner_panel.children[s].children[v_counter].appendChild( label );
                    }
                }
            }

            // draw bottom outliers
            if (bottom_outliers.length > 0) {
                for (var tt = 0; tt < bottom_outliers.length; tt++) {

                    var marker_width = i_chart.i_design.marker_width;
                    var marker_height = i_chart.i_design.marker_height;
                    var marker_left = "calc(50% - (" + marker_width + " / 2))";
                    var marker_top = "calc(" + ((max_scale_value - bottom_outliers[tt]) / total_range) * level2_inner_panel.clientHeight + "px - (" + marker_height + " / 2))";

                    var marker = document.createElement("div");
                    var marker_style = document.createAttribute("style");
                    marker_style.value = "position: absolute; width: "+ marker_width + "; height: "+ marker_height + "; left: "+ marker_left + "; top: " + marker_top + "; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.marker_border+ "; border-radius: 50%; box-shadow: " + i_chart.i_design.marker_box_shadow + "; opacity: " + i_chart.i_design.marker_opacity + ";";
                    marker.setAttributeNode( marker_style );
                    var marker_title = document.createAttribute("title");
                    marker_title.value = i_chart.i_labels[s] + "\n" + ikey + "\n" + roundNumber(bottom_outliers[tt], 2);
                    marker.setAttributeNode( marker_title );
                    level2_inner_panel.children[s].children[v_counter].appendChild( marker );

                    if (i_chart.i_options.showlabels) {

                        var label_width = i_chart.i_design.datalabel_width;
                        var label_height = i_chart.i_design.datalabel_height;
                        var label_left = "calc(50% + " + marker_width + ")";
                        var label_top = "calc(" + ((max_scale_value - bottom_outliers[tt]) / total_range) * level2_inner_panel.clientHeight + "px - " + marker_height + ")";

                        var label = document.createElement("div");
                        var label_style = document.createAttribute("style");
                        label_style.value = "position: absolute; text-align: center; width: "+ label_width + "; height: "+ label_height + "; line-height: "+ label_height + "; left: "+ label_left + "; top: " + label_top + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
                        label.setAttributeNode( label_style );
                        var label_title = document.createAttribute("title");
                        label_title.value = i_chart.i_labels[s] + "\n" + ikey + "\n" + roundNumber(bottom_outliers[tt], 2);
                        label.setAttributeNode( label_title );
                        label.innerText = roundNumber(bottom_outliers[tt], 2);
                        level2_inner_panel.children[s].children[v_counter].appendChild( label );
                    }
                }
            }

            v_counter++;

            //if (i_chart.i_data.length > 1) {
                color_index++;
                if (color_index >= i_chart.i_design.color_palette.length) {
                    color_index = 0;
                }
            //}
        }
    }

    return true;
}
// draw the series containers
function jsChartBoxPlotDrawHorizontalSeriesContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    for (var s = 0; s < i_chart.i_data.length; s++) {

        var series_container = document.createElement("div");
        var series_container_class = document.createAttribute("class");
        series_container_class.value = "js-chart-boxplot-horizontal-series-container";
        series_container.setAttributeNode( series_container_class );
        var series_container_style = document.createAttribute("style");
        series_container_style.value = "margin: calc(" + i_chart.i_design.value_bar_series_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_series_margin + " / 2) 0px;";
        series_container.setAttributeNode( series_container_style );
        level2_inner_panel.appendChild( series_container );

        for (const [ikey, ivalue] of Object.entries(i_chart.i_data[s])) {

            var value_container = document.createElement("div");
            var value_container_class = document.createAttribute("class");
            value_container_class.value = "js-chart-boxplot-horizontal-value-container";
            value_container.setAttributeNode( value_container_class );
            var value_container_style = document.createAttribute("style");
            value_container_style.value = "min-height: " + i_chart.i_design.value_bar_min_height + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px;";
            value_container.setAttributeNode( value_container_style );
            series_container.appendChild( value_container );

        }
    }

    return true;
}
// draw the series containers
function jsChartBoxPlotDrawSeriesContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    for (var s = 0; s < i_chart.i_data.length; s++) {

        var series_container = document.createElement("div");
        var series_container_class = document.createAttribute("class");
        series_container_class.value = "js-chart-boxplot-series-container";
        series_container.setAttributeNode( series_container_class );
        var series_container_style = document.createAttribute("style");
        series_container_style.value = "margin: 0px calc(" + i_chart.i_design.value_bar_series_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_series_margin + " / 2);";
        series_container.setAttributeNode( series_container_style );
        level2_inner_panel.appendChild( series_container );

        for (const [ikey, ivalue] of Object.entries(i_chart.i_data[s])) {

            var value_container = document.createElement("div");
            var value_container_class = document.createAttribute("class");
            value_container_class.value = "js-chart-boxplot-value-container";
            value_container.setAttributeNode( value_container_class );
            var value_container_style = document.createAttribute("style");
            value_container_style.value = "min-width: " + i_chart.i_design.value_bar_min_width + "; margin: 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2);";
            value_container.setAttributeNode( value_container_style );
            //value_container.innerText = ikey;
            series_container.appendChild( value_container );

        }
    }

    return true;
}
// draw the level 0 panels
function jsChartBoxPlotDrawLevel0HorizontalContainers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    // draw level0 inner panel
    var level0_inner_panel = document.createElement("div");
    var level0_inner_panel_class = document.createAttribute("class");
    level0_inner_panel_class.value = "js-chart-boxplot-horizontal-level0-inner-panel";
    level0_inner_panel.setAttributeNode( level0_inner_panel_class );
    base_level2_inner_panel.appendChild( level0_inner_panel );

    // draw x-axis title container
    var x_axis_title_container = document.createElement("div");
    var x_axis_title_container_class = document.createAttribute("class");
    x_axis_title_container_class.value = "js-chart-boxplot-horizontal-x-axis-title-container";
    x_axis_title_container.setAttributeNode( x_axis_title_container_class );
    var x_axis_title_container_title = document.createAttribute("title");
    x_axis_title_container_title.value = i_chart.i_options.xtitle;
    x_axis_title_container.setAttributeNode( x_axis_title_container_title );
    x_axis_title_container.innerText = i_chart.i_options.xtitle;
    level0_inner_panel.appendChild( x_axis_title_container );

    // draw level1 inner panel
    var level1_inner_panel = document.createElement("div");
    var level1_inner_panel_class = document.createAttribute("class");
    level1_inner_panel_class.value = "js-chart-boxplot-horizontal-level1-inner-panel";
    level1_inner_panel.setAttributeNode( level1_inner_panel_class );
    var level1_inner_panel_style = document.createAttribute("style");
    level1_inner_panel_style.value = "scrollbar-color: " + i_chart.i_design.canvas_scrollbar_color + ";";
    level1_inner_panel.setAttributeNode( level1_inner_panel_style );
    level0_inner_panel.appendChild( level1_inner_panel );

    // draw y-axis legend container
    var x_axis_legend_container = document.createElement("div");
    var x_axis_legend_container_class = document.createAttribute("class");
    x_axis_legend_container_class.value = "js-chart-boxplot-horizontal-x-axis-legend-container";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_class );
    level1_inner_panel.appendChild( x_axis_legend_container );

    for (var tt = 0; tt < i_chart.i_labels.length; tt++) {

        var y_axis_legend_block = document.createElement("div");
        var y_axis_legend_block_class = document.createAttribute("class");
        y_axis_legend_block_class.value = "js-chart-boxplot-horizontal-x-axis-legend-block";
        y_axis_legend_block.setAttributeNode( y_axis_legend_block_class );
        var y_axis_legend_block_title = document.createAttribute("title");
        y_axis_legend_block_title.value = i_chart.i_labels[tt];
        y_axis_legend_block.setAttributeNode( y_axis_legend_block_title );
        y_axis_legend_block.innerText = i_chart.i_labels[tt];
        x_axis_legend_container.appendChild( y_axis_legend_block );

    }

    // draw level2 inner panel
    var level2_inner_panel = document.createElement("div");
    var level2_inner_panel_class = document.createAttribute("class");
    level2_inner_panel_class.value = "js-chart-boxplot-horizontal-level2-inner-panel";
    level2_inner_panel.setAttributeNode( level2_inner_panel_class );
    level1_inner_panel.appendChild( level2_inner_panel );

    var level2_inner_panel_style_list = [];
    var zero_line = (Math.abs(max_scale_value) / (Math.abs(min_scale_value) + Math.abs(max_scale_value)));
    if (i_chart.i_options.showgridlines) {
        level2_inner_panel_style_list.push( "repeating-linear-gradient(to right, " + i_chart.i_design.grid_line_color + ", " + i_chart.i_design.grid_line_color + " calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(10% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " calc(10% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " 10%)" );
    }
    if (((min_scale_value <= 0) || (max_scale_value <= 0)) && (i_chart.i_options.showzeroline)) {
        level2_inner_panel_style_list.push( "linear-gradient(to right, " + i_chart.i_design.canvas_bg_color + ", " + i_chart.i_design.canvas_bg_color + " calc(" + (zero_line * 100) + "% - (" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.zero_line_color + " calc(" + (zero_line * 100) + "% - (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.zero_line_color + " calc(" + (zero_line * 100) + "% + (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.canvas_bg_color + " calc(" + (zero_line * 100) + "% + (" + i_chart.i_design.zero_line_thickness + " / 2)), " + i_chart.i_design.canvas_bg_color + ")" );
    }
    if (level2_inner_panel_style_list.length > 0) {
        var level2_inner_panel_style = document.createAttribute("style");
        level2_inner_panel_style.value = "background: " + level2_inner_panel_style_list.join(", ") + ";";
        level2_inner_panel.setAttributeNode( level2_inner_panel_style );
    }

    // draw infobox container
    var infobox_container = document.createElement("div");
    var infobox_container_class = document.createAttribute("class");
    infobox_container_class.value = "js-chart-boxplot-horizontal-infobox-container";
    infobox_container.setAttributeNode( infobox_container_class );
    level0_inner_panel.appendChild( infobox_container );

    // draw y-axis container
    var y_axis_container = document.createElement("div");
    var y_axis_container_class = document.createAttribute("class");
    y_axis_container_class.value = "js-chart-boxplot-horizontal-y-axis-container";
    y_axis_container.setAttributeNode( y_axis_container_class );
    level0_inner_panel.appendChild( y_axis_container );

    // draw y-axis scale container
    var y_axis_scale_container = document.createElement("div");
    var y_axis_scale_container_class = document.createAttribute("class");
    y_axis_scale_container_class.value = "js-chart-boxplot-horizontal-y-axis-scale-container";
    y_axis_scale_container.setAttributeNode( y_axis_scale_container_class );
    y_axis_container.appendChild( y_axis_scale_container );

    for (var tt = 0; tt < 10; tt++ ) {

        var y_axis_scale_block = document.createElement("div");
        var y_axis_scale_block_class = document.createAttribute("class");
        y_axis_scale_block_class.value = "js-chart-boxplot-horizontal-y-axis-scale-block";
        y_axis_scale_block.setAttributeNode( y_axis_scale_block_class );
        var y_axis_scale_block_style = document.createAttribute("style");
        y_axis_scale_block_style.value = "border-top: " + i_chart.i_design.scale_border + "; border-right: " + i_chart.i_design.scale_border + ";";
        if (tt == 0) {
            y_axis_scale_block_style.value += "border-left: " + i_chart.i_design.scale_border + ";";
        }
        y_axis_scale_block.setAttributeNode( y_axis_scale_block_style );
        y_axis_scale_container.appendChild( y_axis_scale_block );

    }

    // draw y-axis scale label container
    var y_axis_scale_label_container = document.createElement("div");
    var y_axis_scale_label_container_class = document.createAttribute("class");
    y_axis_scale_label_container_class.value = "js-chart-boxplot-horizontal-y-axis-scale-label-container";
    y_axis_scale_label_container.setAttributeNode( y_axis_scale_label_container_class );
    y_axis_container.appendChild( y_axis_scale_label_container );

    var max_loop = 10;
    for (var tt = min_scale_value; tt < max_scale_value; tt=(tt+step_value)) {

        var y_axis_scale_label_block = document.createElement("div");
        var y_axis_scale_label_block_class = document.createAttribute("class");
        y_axis_scale_label_block_class.value = "js-chart-boxplot-horizontal-y-axis-scale-label-block";
        y_axis_scale_label_block.setAttributeNode( y_axis_scale_label_block_class );
        var y_axis_scale_label_block_title = document.createAttribute("title");
        y_axis_scale_label_block_title.value = roundNumber(tt, 2);
        y_axis_scale_label_block.setAttributeNode( y_axis_scale_label_block_title );
        y_axis_scale_label_block.innerText = roundNumber(tt, 2);
        y_axis_scale_label_container.appendChild( y_axis_scale_label_block );

        max_loop--;
        if (max_loop == 0) {
            break;
        }
    
    }

    // draw last y-axis scale label
    var last_y_axis_scale_label_block = document.createElement("div");
    var last_y_axis_scale_label_block_class = document.createAttribute("class");
    last_y_axis_scale_label_block_class.value = "js-chart-boxplot-horizontal-y-axis-scale-label-block-last";
    last_y_axis_scale_label_block.setAttributeNode( last_y_axis_scale_label_block_class );
    var last_y_axis_scale_label_block_title = document.createAttribute("title");
    last_y_axis_scale_label_block_title.value = roundNumber(max_scale_value, 2);
    last_y_axis_scale_label_block.setAttributeNode( last_y_axis_scale_label_block_title );
    last_y_axis_scale_label_block.innerText = roundNumber(max_scale_value, 2);
    y_axis_scale_label_container.appendChild( last_y_axis_scale_label_block );


    // draw y-axis title container
    var y_axis_title_container = document.createElement("div");
    var y_axis_title_container_class = document.createAttribute("class");
    y_axis_title_container_class.value = "js-chart-boxplot-horizontal-y-axis-title-container";
    y_axis_title_container.setAttributeNode( y_axis_title_container_class );
    var y_axis_title_container_title = document.createAttribute("title");
    y_axis_title_container_title.value = i_chart.i_options.ytitle;
    y_axis_title_container.setAttributeNode( y_axis_title_container_title );
    y_axis_title_container.innerText = i_chart.i_options.ytitle;
    y_axis_container.appendChild( y_axis_title_container );

    return [ level2_inner_panel, y_axis_container, x_axis_legend_container ];
}
// draw the level 0 panels
function jsChartBoxPlotDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    // draw level0 inner pabel
    var level0_inner_panel = document.createElement("div");
    var level0_inner_panel_class = document.createAttribute("class");
    level0_inner_panel_class.value = "js-chart-boxplot-level0-inner-panel";
    level0_inner_panel.setAttributeNode( level0_inner_panel_class );
    base_level2_inner_panel.appendChild( level0_inner_panel );

    // draw y-axis container
    var y_axis_container = document.createElement("div");
    var y_axis_container_class = document.createAttribute("class");
    y_axis_container_class.value = "js-chart-boxplot-y-axis-container";
    y_axis_container.setAttributeNode( y_axis_container_class );
    level0_inner_panel.appendChild( y_axis_container );

    // draw y-axis title container
    var y_axis_title_container = document.createElement("div");
    var y_axis_title_container_class = document.createAttribute("class");
    y_axis_title_container_class.value = "js-chart-boxplot-y-axis-title-container";
    y_axis_title_container.setAttributeNode( y_axis_title_container_class );
    var y_axis_title_container_title = document.createAttribute("title");
    y_axis_title_container_title.value = i_chart.i_options.ytitle;
    y_axis_title_container.setAttributeNode( y_axis_title_container_title );
    y_axis_title_container.innerText = i_chart.i_options.ytitle;
    y_axis_container.appendChild( y_axis_title_container );

    // draw y-axis scale label container
    var y_axis_scale_label_container = document.createElement("div");
    var y_axis_scale_label_container_class = document.createAttribute("class");
    y_axis_scale_label_container_class.value = "js-chart-boxplot-y-axis-scale-label-container";
    y_axis_scale_label_container.setAttributeNode( y_axis_scale_label_container_class );
    y_axis_container.appendChild( y_axis_scale_label_container );

    var max_loop = 10;
    for (var tt = max_scale_value; tt > min_scale_value; tt=(tt-step_value)) {

        var y_axis_scale_label_block = document.createElement("div");
        var y_axis_scale_label_block_class = document.createAttribute("class");
        y_axis_scale_label_block_class.value = "js-chart-boxplot-y-axis-scale-label-block";
        y_axis_scale_label_block.setAttributeNode( y_axis_scale_label_block_class );
        var y_axis_scale_label_block_title = document.createAttribute("title");
        y_axis_scale_label_block_title.value = roundNumber(tt, 2);
        y_axis_scale_label_block.setAttributeNode( y_axis_scale_label_block_title );
        y_axis_scale_label_block.innerText = roundNumber(tt, 2);
        y_axis_scale_label_container.appendChild( y_axis_scale_label_block );

        max_loop--;
        if (max_loop == 0) {
            break;
        }

    }

    // draw last y-axis scale label
    var last_y_axis_scale_label_block = document.createElement("div");
    var last_y_axis_scale_label_block_class = document.createAttribute("class");
    last_y_axis_scale_label_block_class.value = "js-chart-boxplot-y-axis-scale-label-block-last";
    last_y_axis_scale_label_block.setAttributeNode( last_y_axis_scale_label_block_class );
    var last_y_axis_scale_label_block_title = document.createAttribute("title");
    last_y_axis_scale_label_block_title.value = roundNumber(min_scale_value, 2);
    last_y_axis_scale_label_block.setAttributeNode( last_y_axis_scale_label_block_title );
    last_y_axis_scale_label_block.innerText = roundNumber(min_scale_value, 2);
    y_axis_scale_label_container.appendChild( last_y_axis_scale_label_block );

    // draw y-axis scale container
    var y_axis_scale_container = document.createElement("div");
    var y_axis_scale_container_class = document.createAttribute("class");
    y_axis_scale_container_class.value = "js-chart-boxplot-y-axis-scale-container";
    y_axis_scale_container.setAttributeNode( y_axis_scale_container_class );
    y_axis_container.appendChild( y_axis_scale_container );

    for (var tt = 0; tt < 10; tt++) {

        var y_axis_scale_block = document.createElement("div");
        var y_axis_scale_block_class = document.createAttribute("class");
        y_axis_scale_block_class.value = "js-chart-boxplot-y-axis-scale-block";
        y_axis_scale_block.setAttributeNode( y_axis_scale_block_class );
        var y_axis_scale_block_style = document.createAttribute("style");
        y_axis_scale_block_style.value = "border-right: " + i_chart.i_design.scale_border+ "; border-top: " + i_chart.i_design.scale_border+ ";";
        if (tt == 9) {
            y_axis_scale_block_style.value += "border-bottom: " + i_chart.i_design.scale_border+ ";";
        }
        y_axis_scale_block.setAttributeNode( y_axis_scale_block_style );
        y_axis_scale_container.appendChild( y_axis_scale_block );
    
    }

    // draw level1 inner panel
    var level1_inner_panel = document.createElement("div");
    var level1_inner_panel_class = document.createAttribute("class");
    level1_inner_panel_class.value = "js-chart-boxplot-level1-inner-panel";
    level1_inner_panel.setAttributeNode( level1_inner_panel_class );
    var level1_inner_panel_style = document.createAttribute("style");
    level1_inner_panel_style.value = "scrollbar-color: " + i_chart.i_design.canvas_scrollbar_color + ";";
    level1_inner_panel.setAttributeNode( level1_inner_panel_style );
    level0_inner_panel.appendChild( level1_inner_panel );

    // draw level2 inner panel
    var level2_inner_panel = document.createElement("div");
    var level2_inner_panel_class = document.createAttribute("class");
    level2_inner_panel_class.value = "js-chart-boxplot-level2-inner-panel";
    level2_inner_panel.setAttributeNode( level2_inner_panel_class );
    level1_inner_panel.appendChild( level2_inner_panel );

    var level2_inner_panel_style_list = [];
    var zero_line = (Math.abs(max_scale_value) / (Math.abs(min_scale_value) + Math.abs(max_scale_value)));
    if (i_chart.i_options.showgridlines) {
        level2_inner_panel_style_list.push( "repeating-linear-gradient(to bottom, " + i_chart.i_design.grid_line_color + ", " + i_chart.i_design.grid_line_color + " calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(10% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " calc(10% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " 10%)" );
    }
    if (((min_scale_value <= 0) || (max_scale_value <= 0)) && (i_chart.i_options.showzeroline)) {
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
    x_axis_legend_container_class.value = "js-chart-boxplot-x-axis-legend-container";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_class );
    level1_inner_panel.appendChild( x_axis_legend_container );

    for (var tt = 0; tt < i_chart.i_labels.length; tt++) {

        var x_axis_legend_block = document.createElement("div");
        var x_axis_legend_block_class = document.createAttribute("class");
        x_axis_legend_block_class.value = "js-chart-boxplot-x-axis-legend-block";
        x_axis_legend_block.setAttributeNode( x_axis_legend_block_class );
        var x_axis_legend_block_title = document.createAttribute("title");
        x_axis_legend_block_title.value = i_chart.i_labels[tt];
        x_axis_legend_block.setAttributeNode( x_axis_legend_block_title );
        x_axis_legend_block.innerText = i_chart.i_labels[tt];
        x_axis_legend_container.appendChild( x_axis_legend_block );

    }

    // draw infobox container
    var infobox_container = document.createElement("div");
    var infobox_container_class = document.createAttribute("class");
    infobox_container_class.value = "js-chart-boxplot-infobox-container";
    infobox_container.setAttributeNode( infobox_container_class );
    level0_inner_panel.appendChild( infobox_container );

    // draw x-axis container
    var x_axis_container = document.createElement("div");
    var x_axis_container_class = document.createAttribute("class");
    x_axis_container_class.value = "js-chart-boxplot-x-axis-title-container";
    x_axis_container.setAttributeNode( x_axis_container_class );
    var x_axis_container_title = document.createAttribute("title");
    x_axis_container_title.value = i_chart.i_options.xtitle;
    x_axis_container.setAttributeNode( x_axis_container_title );
    x_axis_container.innerText = i_chart.i_options.xtitle;
    level0_inner_panel.appendChild( x_axis_container );

    return [ level2_inner_panel, y_axis_container, x_axis_legend_container ];
}
// draw function for horizontal clustered box plots
function jsChartDrawHorizontalBoxPlot(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    if (i_chart.i_data.length == 1) {
        var legend_titles = i_chart.i_titles;
    } else {
        var legend_titles = i_chart.i_titles;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["box plot"].data_type, legend_titles);
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

    // draw the level 0 panels
    var draw_level0_containers = jsChartBoxPlotDrawLevel0HorizontalContainers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use);
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_container = draw_level0_containers[1];
    var x_axis_legend_container = draw_level0_containers[2];

    // draw the series containers
    var draw_series_containers = jsChartBoxPlotDrawHorizontalSeriesContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use);

    // draw the series value containers
    var draw_value_containers = jsChartBoxPlotDrawHorizontalValueContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use);

    // resize the y-axis container
    var y_axis_container_style = document.createAttribute("style");
    y_axis_container_style.value = "width: " + level2_inner_panel.clientWidth + "px";
    y_axis_container.setAttributeNode( y_axis_container_style );

    // resize x-axis legend
    var x_axis_legend_container_style = document.createAttribute("style");
    x_axis_legend_container_style.value = "height: " + level2_inner_panel.scrollHeight + "px";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_style );

    return true;
}
// draw function for clustered box plots
function jsChartDrawBoxPlot(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    if (i_chart.i_data.length == 1) {
        var legend_titles = i_chart.i_titles;
    } else {
        var legend_titles = i_chart.i_titles;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["box plot"].data_type, legend_titles);
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

    // draw the level 0 panels
    var draw_level0_containers = jsChartBoxPlotDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use);
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_container = draw_level0_containers[1];
    var x_axis_legend_container = draw_level0_containers[2];

    // draw the series containers
    var draw_series_containers = jsChartBoxPlotDrawSeriesContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use);

    // draw the series value containers
    var draw_value_containers = jsChartBoxPlotDrawValueContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use);

    // resize the y-axis container
    var y_axis_container_style = document.createAttribute("style");
    y_axis_container_style.value = "height: " + level2_inner_panel.clientHeight + "px;";
    y_axis_container.setAttributeNode( y_axis_container_style );

    // resize the x-axis legend container
    var x_axis_legend_container_style = document.createAttribute("style");
    x_axis_legend_container_style.value = "width: " + level2_inner_panel.scrollWidth + "px;";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_style );

    return true;
}