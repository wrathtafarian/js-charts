// draw the column value containers
function jsChartColumnDrawRelativeStackedLollipopValueContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var max_len = 0;
    for (var s = 0; s < i_chart.i_data.length; s++) {
        if (i_chart.i_data[s].length > max_len) {
            max_len = i_chart.i_data[s].length;
        }
    }

    // group positive and negative numbers
    var p_group = [];
    var n_group = [];
    var p_total = [];
    var n_total = [];
    var p_series_index = [];
    var n_series_index = [];
    var g_total = [];
    for (var v = 0; v < max_len; v++) {
        p_group[v] = [];
        n_group[v] = [];
        p_total[v] = 0;
        n_total[v] = 0;
        p_series_index[v] = [];
        n_series_index[v] = [];
        g_total[v] = 0;
        for (var s = 0; s < i_chart.i_data.length; s++) {
            g_total[v] += Math.abs(i_chart.i_data[s][v]);

            if (i_chart.i_data[s][v] >= 0) {
                p_group[v].push ( i_chart.i_data[s][v] );
                p_total[v] += i_chart.i_data[s][v];
                p_series_index[v].push( s );
            } else {
                n_group[v].push( Math.abs(i_chart.i_data[s][v]) );
                n_total[v] += Math.abs(i_chart.i_data[s][v]);
                n_series_index[v].push( s );
            }
        }
    }

    // calculate the perc -- remember this is used to calculate the y axis (the perc still needs to be calculated for each individual sections in the chart columns)
    var p_perc = [];
    var n_perc = [];
    for (var v = 0; v < max_len; v++) {
        if (g_total[v] > 0) {
            p_perc.push( (p_total[v] / g_total[v]) );
            n_perc.push( (n_total[v] / g_total[v]) );
        } else {
            p_perc.push( 0 );
            n_perc.push( 0 );
        }
    }

    var total_range = max_scale_value + Math.abs(min_scale_value);

    // build those value bars
    for (var v = 0; v < level2_inner_panel.children.length; v++) {

        // draw the value bar container
        var value_bar_container = document.createElement("div");
        var value_bar_container_class = document.createAttribute("class");
        value_bar_container_class.value = "js-chart-column-value-column-container";
        value_bar_container.setAttributeNode( value_bar_container_class );
        var value_bar_container_style = document.createAttribute("style");
        value_bar_container_style.value = "min-width: " + i_chart.i_design.value_bar_min_width + ";"
        value_bar_container.setAttributeNode( value_bar_container_style );
        level2_inner_panel.children[v].appendChild( value_bar_container );

        // inside the value bar container -- add the positive spacer
        var p_spacer_height = (((max_scale_value / 100) - p_perc[v]) / ((max_scale_value - (min_scale_value)) / 100)) * 100;

        var p_spacer = document.createElement("div");
        var p_spacer_class = document.createAttribute("class");
        p_spacer_class.value = "js-chart-column-negative-spacer-container";
        p_spacer.setAttributeNode( p_spacer_class );
        var p_spacer_style = document.createAttribute("style");
        p_spacer_style.value = "height: " + p_spacer_height + "%;";
        p_spacer.setAttributeNode( p_spacer_style );
        value_bar_container.appendChild( p_spacer );

        // positive side
        var callout_index = 0;
        for (var tt = (p_group[v].length - 1); tt >= 0; tt--) {
            var color_index = p_series_index[v][tt] % i_chart.i_design.color_palette.length;

            if ((p_total[v] + n_total[v]) == 0) {
                var series_height = 0;
                var series_perc = 0;
            } else {
                var series_height = ((p_group[v][tt] / (p_total[v] + n_total[v])) / ((max_scale_value - (min_scale_value)) / 100) * 100);
                var series_perc = roundNumber((p_group[v][tt] / (p_total[v] + n_total[v])) * 100, 2);
            }

            var value_bar_block = document.createElement("div");
            var value_bar_block_class = document.createAttribute("class");
            value_bar_block_class.value = "js-chart-column-value-bar-block";
            value_bar_block.setAttributeNode( value_bar_block_class );
            var value_bar_block_title = document.createAttribute("title");
            value_bar_block_title.value = i_chart.i_titles[ p_series_index[v][tt] ] + "\n" + i_chart.i_labels[v] + "\n" + p_group[v][tt];
            value_bar_block.setAttributeNode( value_bar_block_title );
            var value_bar_block_style = document.createAttribute("style");
            value_bar_block_style.value = "left: calc(50% - (" + i_chart.i_design.value_line_thickness + " / 2)); height: " + series_height + "%; width: " + i_chart.i_design.value_line_thickness + "; background-color: " + i_chart.i_design.color_palette[ color_index ] + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
            value_bar_block.setAttributeNode( value_bar_block_style );
            value_bar_container.appendChild( value_bar_block );

            // data labels
            if (i_chart.i_options.showlabels) {

                if (i_chart.i_design.datalabel_width == "auto") {
                    if (Math.abs(p_total[v]) != 0) {
                        var temp_perc = 2 * (Math.abs(p_group[v][tt]) / (Math.abs(p_total[v]) + Math.abs(n_total[v])));
                    } else {
                        var temp_perc = 0;
                    }
                    if (temp_perc <= 1.0) {
                        temp_perc = 1.2;
                    }
                    var temp_diameter = "calc(" + i_chart.i_design.value_bar_min_width + " * " + temp_perc + ")";
                } else {
                    var temp_diameter = i_chart.i_design.datalabel_width;
                }

                var data_label = document.createElement("div");
                var data_label_style = document.createAttribute("style");
                data_label_style.value = "z-index: 100; \
position: absolute; \
width: " + temp_diameter + "; \
height: " + temp_diameter+ "; \
line-height: " + temp_diameter+ "; \
text-align: center; \
text-wrap-mode: nowrap; \
overflow: hidden; \
text-overflow: ellipsis; \
top: calc(0px - (" + temp_diameter + " / 2)); \
left: calc(50% - (" + temp_diameter + " / 2)); \
font-family: " + i_chart.i_design.datalabel_font_family + "; \
font-size: " + i_chart.i_design.datalabel_font_size + "; \
font-weight: " + i_chart.i_design.datalabel_font_weight + "; \
background-color: " + i_chart.i_design.color_palette[ p_series_index[v][tt] ] + "; \
color: " + i_chart.i_design.datalabel_text_color + "; \
border: " + i_chart.i_design.datalabel_border + "; \
border-radius: 50%; \
box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; \
opacity: " + i_chart.i_design.datalabel_opacity + ";";
                data_label.setAttributeNode( data_label_style );
                if ((i_chart.i_options.showlabels == "relative") || (i_chart.i_options.showlabels == "auto")) {
                    data_label.innerText = roundNumber(series_perc, num_of_decimals_to_use) + "%";
                } else if (i_chart.i_options.showlabels == "absolute") {
                    data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(p_group[v][tt], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                }
                value_bar_block.appendChild( data_label );

            }
        }
        // negative side
        for (var tt = 0; tt < n_group[v].length; tt++) {
            var color_index = n_series_index[v][tt] % i_chart.i_design.color_palette.length;

            if ((p_total[v] + n_total[v]) == 0) {
                var series_height = 0;
                var series_perc = 0;
            } else {
                var series_height = ((n_group[v][tt] / (n_total[v] + p_total[v])) / ((max_scale_value - (min_scale_value)) / 100) * 100);
                var series_perc = roundNumber((n_group[v][tt] / (p_total[v] + n_total[v])) * 100, 2);
            }

            var value_bar_block = document.createElement("div");
            var value_bar_block_class = document.createAttribute("class");
            value_bar_block_class.value = "js-chart-column-value-bar-block";
            value_bar_block.setAttributeNode( value_bar_block_class );
            var value_bar_block_title = document.createAttribute("title");
            value_bar_block_title.value = i_chart.i_titles[ n_series_index[v][tt] ] + "\n" + i_chart.i_labels[v] + "\n" + (0 - n_group[v][tt]);
            value_bar_block.setAttributeNode( value_bar_block_title );
            var value_bar_block_style = document.createAttribute("style");
            value_bar_block_style.value = "left: calc(50% - (" + i_chart.i_design.value_line_thickness + " / 2)); height: " + series_height + "%; width: " + i_chart.i_design.value_line_thickness + "; background-color: " + i_chart.i_design.color_palette[ color_index ] + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
            value_bar_block.setAttributeNode( value_bar_block_style );
            value_bar_container.appendChild( value_bar_block );

            // data labels
            if (i_chart.i_options.showlabels) {

                if (i_chart.i_design.datalabel_width == "auto") {
                    if (Math.abs(n_total[v]) != 0) {
                        var temn_perc = 2 * (Math.abs(n_group[v][tt]) / (Math.abs(n_total[v]) + Math.abs(p_total[v])));
                    } else {
                        var temp_perc = 0;
                    }
                    if (temp_perc <= 1.0) {
                        temp_perc = 1.2;
                    }
                    var temp_diameter = "calc(" + i_chart.i_design.value_bar_min_width + " * " + temp_perc + ")";
                } else {
                    var temp_diameter = i_chart.i_design.datalabel_width;
                }

                var data_label = document.createElement("div");
                var data_label_style = document.createAttribute("style");
                data_label_style.value = "z-index: 100; \
position: absolute; \
width: " + temp_diameter + "; \
height: " + temp_diameter+ "; \
line-height: " + temp_diameter+ "; \
text-align: center; \
text-wrap-mode: nowrap; \
overflow: hidden; \
text-overflow: ellipsis; \
bottom: calc(0px - (" + temp_diameter + " / 2)); \
left: calc(50% - (" + temp_diameter + " / 2)); \
font-family: " + i_chart.i_design.datalabel_font_family + "; \
font-size: " + i_chart.i_design.datalabel_font_size + "; \
font-weight: " + i_chart.i_design.datalabel_font_weight + "; \
background-color: " + i_chart.i_design.color_palette[ n_series_index[v][tt] ] + "; \
color: " + i_chart.i_design.datalabel_text_color + "; \
border: " + i_chart.i_design.datalabel_border + "; \
border-radius: 50%; \
box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; \
opacity: " + i_chart.i_design.datalabel_opacity + ";";
                data_label.setAttributeNode( data_label_style );
                if ((i_chart.i_options.showlabels == "relative") || (i_chart.i_options.showlabels == "auto")) {
                    data_label.innerText = roundNumber(series_perc, num_of_decimals_to_use) + "%";
                } else if (i_chart.i_options.showlabels == "absolute") {
                    data_label.innerText = jsChartCommonFormatChartAmount(roundNumber((0 - n_group[v][tt]), num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                }
                value_bar_block.appendChild( data_label );

            }
        }

        // inside the value bar container -- add the negative spacer
        var n_spacer_height = (((Math.abs(min_scale_value) / 100) - n_perc[v]) / ((max_scale_value - (min_scale_value)) / 100)) * 100;

        var n_spacer = document.createElement("div");
        var n_spacer_class = document.createAttribute("class");
        n_spacer_class.value = "js-chart-column-negative-spacer-container";
        n_spacer.setAttributeNode( n_spacer_class );
        var n_spacer_style = document.createAttribute("style");
        n_spacer_style.value = "height: " + n_spacer_height + "%;";
        n_spacer.setAttributeNode( n_spacer_style );
        value_bar_container.appendChild( n_spacer );
    }

    return true;
}
// draw the column value containers
function jsChartColumnDrawStackedLollipopValueContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var p_group = [];
    var p_totals = [];
    var p_series = [];
    var n_group = [];
    var n_totals = [];
    var n_series = [];

    // group tohether positive and negative values across each series
    for (var v = 0; v < level2_inner_panel.children.length; v++) {

        p_group[v] = [];
        p_totals[v] = 0;
        p_series[v] = [];
        n_group[v] = [];
        n_totals[v] = 0;
        n_series[v] = [];

        for (var s = 0; s < i_chart.i_data.length; s++) {

            if (i_chart.i_data[s][v] >= 0) {
                p_group[v].push( i_chart.i_data[s][v] );
                p_totals[v] += i_chart.i_data[s][v];
                p_series[v].push( s );
            } else {
                n_group[v].push( i_chart.i_data[s][v] );
                n_totals[v] += i_chart.i_data[s][v];
                n_series[v].push( s );
            }
        }
    }

    var total_range = max_scale_value + Math.abs(min_scale_value);

    // build those value bars
    for (var v = 0; v < level2_inner_panel.children.length; v++) {

        // draw the value bar container
        var value_bar_container = document.createElement("div");
        var value_bar_container_class = document.createAttribute("class");
        value_bar_container_class.value = "js-chart-column-value-column-container";
        value_bar_container.setAttributeNode( value_bar_container_class );
        var value_bar_container_style = document.createAttribute("style");
        value_bar_container_style.value = "min-width: " + i_chart.i_design.value_bar_min_width + ";";
        value_bar_container.setAttributeNode( value_bar_container_style );
        level2_inner_panel.children[v].appendChild( value_bar_container );

        // inside the value bar container -- add the positive spacer
        var p_spacer_height = ((Math.abs(max_scale_value) - Math.abs(p_totals[v])) / total_range) * 100;

        var p_spacer = document.createElement("div");
        var p_spacer_class = document.createAttribute("class");
        p_spacer_class.value = "js-chart-column-negative-spacer-container";
        p_spacer.setAttributeNode( p_spacer_class );
        var p_spacer_style = document.createAttribute("style");
        p_spacer_style.value = "height: " + p_spacer_height + "%;";
        p_spacer.setAttributeNode( p_spacer_style );
        value_bar_container.appendChild( p_spacer );

        for (var s = (p_group[v].length - 1); s >= 0; s--) {

            if (typeof p_group[v][s] !== "undefined") {

                // inside the value bar container -- add the negative bars first (if they exist)
                var value_bar_block_height = ( Math.abs(p_group[v][s]) / total_range ) * 100;

                if (i_chart.i_options.showlines) {
                    var bar_bg_color = i_chart.i_design.color_palette[ p_series[v][s] ];
                } else {
                    var bar_bg_color = "transparent";
                }

                var value_bar_block = document.createElement("div");
                var value_bar_block_class = document.createAttribute("class");
                value_bar_block_class.value = "js-chart-column-value-bar-block";
                value_bar_block.setAttributeNode( value_bar_block_class );
                var value_bar_block_title = document.createAttribute("title");
                value_bar_block_title.value = i_chart.i_titles[ p_series[v][s] ] + "\n" + i_chart.i_labels[v] + "\n" + p_group[v][s];
                value_bar_block.setAttributeNode( value_bar_block_title );
                var value_bar_block_style = document.createAttribute("style");
                value_bar_block_style.value = "left: calc(50% - (" + i_chart.i_design.value_line_thickness + " / 2)); \
height: " + value_bar_block_height + "%; \
width: " + i_chart.i_design.value_line_thickness + "; \
min-height: " + i_chart.i_design.value_bar_min_height + "; \
background-color: " + bar_bg_color + "; \
border: " + i_chart.i_design.value_bar_border+ "; \
border-radius: " + i_chart.i_design.value_bar_border_radius + "; \
box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; \
opacity: " + i_chart.i_design.value_bar_opacity + ";";
                value_bar_block.setAttributeNode( value_bar_block_style );
                value_bar_container.appendChild( value_bar_block );

                // data labels
                if (i_chart.i_options.showlabels) {

                    if (i_chart.i_design.datalabel_width == "auto") {
                        if (Math.abs(p_totals[v]) != 0) {
                            var temp_perc = 2 * (Math.abs(p_group[v][s]) / (Math.abs(p_totals[v]) + Math.abs(n_totals[v])));
                        } else {
                            var temp_perc = 0;
                        }
                        if (temp_perc <= 1.0) {
                            temp_perc = 1.2;
                        }
                        var temp_diameter = "calc(" + i_chart.i_design.value_bar_min_width + " * " + temp_perc + ")";
                    } else {
                        var temp_diameter = i_chart.i_design.datalabel_width;
                    }

                    var data_label = document.createElement("div");
                    var data_label_style = document.createAttribute("style");
                    data_label_style.value = "z-index: 100; \
position: absolute; \
width: " + temp_diameter + "; \
height: " + temp_diameter + "; \
line-height: " + temp_diameter + "; \
text-align: center; \
text-wrap-mode: nowrap; \
overflow: hidden; \
text-overflow: ellipsis; \
top: calc(0px - (" + temp_diameter + " / 2)); \
left: calc(50% - (" + temp_diameter + " / 2)); \
font-family: " + i_chart.i_design.datalabel_font_family + "; \
font-size: " + i_chart.i_design.datalabel_font_size + "; \
font-weight: " + i_chart.i_design.datalabel_font_weight + "; \
background-color: " + i_chart.i_design.color_palette[ p_series[v][s] ] + "; \
color: " + i_chart.i_design.datalabel_text_color + "; \
border: " + i_chart.i_design.datalabel_border + "; \
border-radius: 50%; \
box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; \
opacity: " + i_chart.i_design.datalabel_opacity + ";";
                    data_label.setAttributeNode( data_label_style );
                    if ((i_chart.i_options.showlabels == "absolute") || (i_chart.i_options.showlabels == "auto")) {
                        data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(p_group[v][s], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                    } else {
                        data_label.innerText = roundNumber((p_group[v][s] / p_totals[v]) * 100, num_of_decimals_to_use) + "%";
                    }
                    value_bar_block.appendChild( data_label );

                }
            }
        }

        for (var s = 0; s < n_group[v].length; s++) {

            if (typeof n_group[v][s] !== "undefined") {

                // inside the value bar container -- add the negative bars first (if they exist)
                var value_bar_block_height = ( Math.abs(n_group[v][s]) / total_range ) * 100;

                if (i_chart.i_options.showlines) {
                    var bar_bg_color = i_chart.i_design.color_palette[ n_series[v][s] ];
                } else {
                    var bar_bg_color = "transparent";
                }

                var value_bar_block = document.createElement("div");
                var value_bar_block_class = document.createAttribute("class");
                value_bar_block_class.value = "js-chart-column-value-bar-block";
                value_bar_block.setAttributeNode( value_bar_block_class );
                var value_bar_block_title = document.createAttribute("title");
                value_bar_block_title.value = i_chart.i_titles[ n_series[v][s] ] + "\n" + i_chart.i_labels[v] + "\n" + n_group[v][s];
                value_bar_block.setAttributeNode( value_bar_block_title );
                var value_bar_block_style = document.createAttribute("style");
                value_bar_block_style.value = "left: calc(50% - (" + i_chart.i_design.value_line_thickness + " / 2)); \
height: " + value_bar_block_height + "%; \
width: " + i_chart.i_design.value_line_thickness + "; \
min-height: " + i_chart.i_design.value_bar_min_height + "; \
background-color: " + bar_bg_color + "; \
border: " + i_chart.i_design.value_bar_border+ "; \
border-radius: " + i_chart.i_design.value_bar_border_radius + "; \
box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; \
opacity: " + i_chart.i_design.value_bar_opacity + ";";
                value_bar_block.setAttributeNode( value_bar_block_style );
                value_bar_container.appendChild( value_bar_block );

                // data labels
                if (i_chart.i_options.showlabels) {

                    if (i_chart.i_design.datalabel_width == "auto") {
                        var temp_perc = 2 * (Math.abs(n_group[v][s]) / Math.abs(n_totals[v]));
                        if (temp_perc <= 1.0) {
                            temp_perc = 1.2;
                        }
                        var temp_diameter = "calc(" + i_chart.i_design.value_bar_min_width + " * " + temp_perc + ")";
                    } else {
                        var temp_diameter = i_chart.i_design.datalabel_width;
                    }

                    var data_label = document.createElement("div");
                    var data_label_style = document.createAttribute("style");
                    data_label_style.value = "z-index: 100; \
position: absolute; \
width: " + temp_diameter + "; \
height: " + temp_diameter + "; \
line-height: " + temp_diameter + "; \
text-align: center; \
text-wrap-mode: nowrap; \
overflow: hidden; \
text-overflow: ellipsis; \
bottom: calc(0px - (" + temp_diameter + " / 2)); \
left: calc(50% - (" + temp_diameter + " / 2)); \
font-family: " + i_chart.i_design.datalabel_font_family + "; \
font-size: " + i_chart.i_design.datalabel_font_size + "; \
font-weight: " + i_chart.i_design.datalabel_font_weight + "; \
background-color: " + i_chart.i_design.color_palette[ n_series[v][s] ] + "; \
color: " + i_chart.i_design.datalabel_text_color + "; \
border: " + i_chart.i_design.datalabel_border + "; \
border-radius: 50%; \
box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; \
opacity: " + i_chart.i_design.datalabel_opacity + ";";
                    data_label.setAttributeNode( data_label_style );
                    if ((i_chart.i_options.showlabels == "absolute") || (i_chart.i_options.showlabels == "auto")) {
                        data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(n_group[v][s], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                    } else {
                        data_label.innerText = roundNumber((n_group[v][s] / n_totals[v][s]) * 100, num_of_decimals_to_use) + "%";
                    }
                    value_bar_block.appendChild( data_label );

                }
            }
        }

        // inside the value bar container -- add the negative spacer
        var n_spacer_height = ( (Math.abs(min_scale_value) - Math.abs(n_totals[v])) / total_range ) * 100;

        var n_spacer = document.createElement("div");
        var n_spacer_class = document.createAttribute("class");
        n_spacer_class.value = "js-chart-column-negative-spacer-container";
        n_spacer.setAttributeNode( n_spacer_class );
        var n_spacer_style = document.createAttribute("style");
        n_spacer_style.value = "height: " + n_spacer_height + "%;";
        n_spacer.setAttributeNode( n_spacer_style );
        value_bar_container.appendChild( n_spacer );

    }

    return true;
}
// draw the column value containers
function jsChartColumnDrawLollipopContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    // calculate the total value scale range
    var total_range = max_scale_value - (min_scale_value);

    // determine the max number of elements across all data seriess
    var max_loop = i_chart.i_data[0].length;
    for (var s = 1; s < i_chart.i_data.length; s++) {
        if (i_chart.i_data[s].length > max_loop) {
            max_loop = i_chart.i_data[s].length;
        }
    }

    var series_abs_total = [];
    for (var v = 0; v < i_chart.i_data[0].length; v++) {
        series_abs_total[v] = i_chart.i_data[0][v];
        for (var s = 1; s < i_chart.i_data.length; s++) {
            series_abs_total[v] += Math.abs( i_chart.i_data[s][v] );
        }
    }

    // draw those lollipops! :)
    var color_index = 0;
    for (var v = 0; v < max_loop; v++) {
        for (var s = 0; s < i_chart.i_data.length; s++) {

            var lollipop_title = i_chart.i_titles[s] + "\n" + i_chart.i_labels[v] + "\n" + i_chart.i_data[s][v];

            // draw the value container
            var value_line_container = document.createElement("div");
            var value_line_container_style = document.createAttribute("style");
            value_line_container_style.value = "flex: 1 1 auto; position: relative; margin: 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2); min-width: " + i_chart.i_design.value_bar_min_width + ";";
            value_line_container.setAttributeNode( value_line_container_style );
            level2_inner_panel.children[v].appendChild( value_line_container );

            // calculate the lollipop stick
            var lollipop_stick_height = (Math.abs(i_chart.i_data[s][v]) / total_range) * 100;

            // if positive (or zero), place left on th zero line
            if (i_chart.i_data[s][v] >= 0) {
                var lollipop_stick_bottom = (Math.abs(min_scale_value) / total_range) * 100;
            // else calculate left
            } else {
                var lollipop_stick_bottom = ((Math.abs(min_scale_value) - Math.abs(i_chart.i_data[s][v])) / total_range) * 100;
            }

            // draw the lollipop stick
            var lollipop_stick_container = document.createElement("div");
            var lollipop_stick_container_title = document.createAttribute("title");
            lollipop_stick_container_title.value = lollipop_title;
            lollipop_stick_container.setAttributeNode( lollipop_stick_container_title );
            var lollipop_stick_container_style = document.createAttribute("style");
            lollipop_stick_container_style.value = "position: absolute; height: " + lollipop_stick_height + "%; min-height: " + i_chart.i_design.value_line_min_height + "; width: " + i_chart.i_design.value_line_thickness + "; bottom: " + lollipop_stick_bottom + "%; left: calc(50% - (" + i_chart.i_design.value_line_thickness + " / 2)); opacity: " + i_chart.i_design.value_line_opacity + ";";
            if (i_chart.i_options.showlines) {
                lollipop_stick_container_style.value += " background-color: " + i_chart.i_design.color_palette[color_index] + ";";
            } else {
                lollipop_stick_container_style.value += " background-color: transparent;";
            }
            lollipop_stick_container.setAttributeNode( lollipop_stick_container_style );
            value_line_container.appendChild( lollipop_stick_container );

            // calculate the pop
            if (i_chart.i_design.datalabel_width == "auto") {
                var temp_perc = 2 * (Math.abs(i_chart.i_data[s][v]) / series_abs_total[v]);
                if (temp_perc <= 1.0) {
                    temp_perc = 1.2;
                }
                var temp_diameter = "calc(" + i_chart.i_design.value_bar_min_width + " * " + temp_perc + ")";
                //var temp_perc = 10 * (M   ath.abs(i_chart.i_data[s][v]) / Math.abs(i_chart.i_totals[s].max_value));
                //if (temp_perc < 4.5) {
                //    temp_perc = 4.5;
                //}
                //var temp_diameter = "calc(" + i_chart.i_design.value_line_thickness + " * " + temp_perc + ")";
            } else {
                var temp_diameter = i_chart.i_design.datalabel_width;
            }

            if (i_chart.i_data[s][v] >= 0) {
                var lollipop_pop_y = "top: calc(0px - (" + temp_diameter + " / 2))";
            } else {
                var lollipop_pop_y = "bottom: calc(0px - (" + temp_diameter + " / 2))";
            }

            var lollipop_pop_container = document.createElement("div");
            var lollipop_pop_container_title = document.createAttribute("title");
            lollipop_pop_container_title.value = lollipop_title;
            lollipop_pop_container.setAttributeNode( lollipop_pop_container_title );
            var lollipop_pop_container_style = document.createAttribute("style");
            lollipop_pop_container_style.value = "position: absolute; \
text-align: center; \
text-wrap-mode: nowrap; \
overflow: hidden; \
text-overflow: ellipsis; \
width: " + temp_diameter + "; \
height: " + temp_diameter + "; \
line-height: " + temp_diameter + "; \
left: calc(50% - (" + temp_diameter + " / 2)); \
" + lollipop_pop_y + "; \
font-family: " + i_chart.i_design.datalabel_font_family + "; \
font-size: " + i_chart.i_design.datalabel_font_size + "; \
font-weight: " + i_chart.i_design.datalabel_font_weight + "; \
border: " + i_chart.i_design.datalabel_border + "; \
border-radius: 50%; \
background-color: " + i_chart.i_design.color_palette[color_index] + "; \
color: " + i_chart.i_design.datalabel_text_color + "; \
box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; \
opacity: " + i_chart.i_design.datalabel_opacity + ";";
            lollipop_pop_container.setAttributeNode( lollipop_pop_container_style );
            if (i_chart.i_options.showlabels) {
                lollipop_pop_container.innerText = jsChartCommonFormatChartAmount(roundNumber(i_chart.i_data[s][v], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            }
            lollipop_stick_container.appendChild( lollipop_pop_container );

            color_index++;
            if (color_index >= i_chart.i_design.color_palette.length) {
                color_index = 0;
            }
        }
        color_index = 0;
    }

    return true;
}
// draw the span column value containers
function jsChartColumnDrawRangeContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var total_range = max_scale_value + Math.abs(min_scale_value);

    for (var v = 0; v < i_chart.i_data[0]["low_values"].length; v++) {
        var color_index = 0;
        for (var s = 0; s < i_chart.i_data.length; s++) {

            var range_diff = i_chart.i_data[s]["high_values"][v] - i_chart.i_data[s]["low_values"][v];

            // draw the value bar container
            var value_bar_container = document.createElement("div");
            var value_bar_container_class = document.createAttribute("class");
            value_bar_container_class.value = "js-chart-column-value-column-container";
            value_bar_container.setAttributeNode( value_bar_container_class );
            var value_bar_container_style = document.createAttribute("style");
            value_bar_container_style.value = "position: relative;";
            value_bar_container.setAttributeNode( value_bar_container_style );
            level2_inner_panel.children[v].appendChild( value_bar_container );

            // inside the value bar container -- add the positive spacer
            var p_spacer_height = Math.abs(((max_scale_value - i_chart.i_data[s]["high_values"][v]) / total_range) * 100);

            var p_spacer = document.createElement("div");
            var p_spacer_class = document.createAttribute("class");
            p_spacer_class.value = "js-chart-column-negative-spacer-container";
            p_spacer.setAttributeNode( p_spacer_class );
            var p_spacer_style = document.createAttribute("style");
            p_spacer_style.value = "height: " + p_spacer_height + "%;";
            p_spacer.setAttributeNode( p_spacer_style );
            value_bar_container.appendChild( p_spacer );

            // inside the value bar container -- add the negative bars first (if they exist)
            var value_bar_block_height = ( range_diff / total_range ) * 100;

            var value_bar_block = document.createElement("div");
            var value_bar_block_class = document.createAttribute("class");
            value_bar_block_class.value = "js-chart-bar-value-bar-block";
            value_bar_block.setAttributeNode( value_bar_block_class );
            var value_bar_block_title = document.createAttribute("title");
            value_bar_block_title.value = i_chart.i_titles[ s ] + "\n" + i_chart.i_labels[v] + "\nRange:" + range_diff + "\nLow: " + i_chart.i_data[s]["low_values"][v] + "\nHigh: " + i_chart.i_data[s]["high_values"][v]
            value_bar_block.setAttributeNode( value_bar_block_title );
            var value_bar_block_style = document.createAttribute("style");
            value_bar_block_style.value = "height: " + value_bar_block_height + "%; min-width: " + i_chart.i_design.value_bar_min_width + "; background-color: " + i_chart.i_design.color_palette[ color_index ] + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2);";
            value_bar_block.setAttributeNode( value_bar_block_style );
            value_bar_container.appendChild( value_bar_block );

            // draw the data label
            if (i_chart.i_options.showlabels) {

                var data_label = document.createElement("div");
                var data_label_style = document.createAttribute("style");
                data_label_style.value = "z-index: 100 \
position: absolute; \
width: " + i_chart.i_design.datalabel_width + "; \
height: " + i_chart.i_design.datalabel_height+ "; \
line-height: " + i_chart.i_design.datalabel_height+ "; \
text-align: center; \
text-wrap-mode: nowrap; \
overflow: hidden; \
text-overflow: ellipsis; \
top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); \
left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); \
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
                data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(range_diff, num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                value_bar_block.appendChild( data_label );

            }

            // draw the negative spacer
            var n_spacer_height = Math.abs(((min_scale_value - i_chart.i_data[s]["low_values"][v]) / total_range ) * 100);

            var n_spacer = document.createElement("div");
            var n_spacer_class = document.createAttribute("class");
            n_spacer_class.value = "js-chart-column-negative-spacer-container";
            n_spacer.setAttributeNode( n_spacer_class );
            var n_spacer_style = document.createAttribute("style");
            n_spacer_style.value = "height: " + n_spacer_height + "%;";
            n_spacer.setAttributeNode( n_spacer_style );
            value_bar_container.appendChild( n_spacer );

            color_index++;
            if (color_index >= i_chart.i_design.color_palette.length) {
                color_index = 0;
            }
        }
    }

    return true;
}
// draw the column value containers
function jsChartColumnDrawRelativeStackedValueContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use ) {

    var max_len = 0;
    for (var s = 0; s < i_chart.i_data.length; s++) {
        if (i_chart.i_data[s].length > max_len) {
            max_len = i_chart.i_data[s].length;
        }
    }

    // group positive and negative numbers
    var p_group = [];
    var n_group = [];
    var p_total = [];
    var n_total = [];
    var p_series_index = [];
    var n_series_index = [];
    var g_total = [];
    for (var v = 0; v < max_len; v++) {
        p_group[v] = [];
        n_group[v] = [];
        p_total[v] = 0;
        n_total[v] = 0;
        p_series_index[v] = [];
        n_series_index[v] = [];
        g_total[v] = 0;
        for (var s = 0; s < i_chart.i_data.length; s++) {
            g_total[v] += Math.abs(i_chart.i_data[s][v]);

            if (i_chart.i_data[s][v] >= 0) {
                p_group[v].push ( i_chart.i_data[s][v] );
                p_total[v] += i_chart.i_data[s][v];
                p_series_index[v].push( s );
            } else {
                n_group[v].push( Math.abs(i_chart.i_data[s][v]) );
                n_total[v] += Math.abs(i_chart.i_data[s][v]);
                n_series_index[v].push( s );
            }
        }
    }

    // calculate the perc -- remember this is used to calculate the y axis (the perc still needs to be calculated for each individual sections in the chart columns)
    var p_perc = [];
    var n_perc = [];
    for (var v = 0; v < max_len; v++) {
        if (g_total[v] > 0) {
            p_perc.push( (p_total[v] / g_total[v]) );
            n_perc.push( (n_total[v] / g_total[v]) );
        } else {
            p_perc.push( 0 );
            n_perc.push( 0 );
        }
    }

    var total_range = max_scale_value + Math.abs(min_scale_value);

    // build those value bars
    for (var v = 0; v < level2_inner_panel.children.length; v++) {

        // draw the value bar container
        var value_bar_container = document.createElement("div");
        var value_bar_container_class = document.createAttribute("class");
        value_bar_container_class.value = "js-chart-column-value-column-container";
        value_bar_container.setAttributeNode( value_bar_container_class );
        level2_inner_panel.children[v].appendChild( value_bar_container );

        // inside the value bar container -- add the positive spacer
        var p_spacer_height = (((max_scale_value / 100) - p_perc[v]) / ((max_scale_value - (min_scale_value)) / 100)) * 100;

        var p_spacer = document.createElement("div");
        var p_spacer_class = document.createAttribute("class");
        p_spacer_class.value = "js-chart-column-negative-spacer-container";
        p_spacer.setAttributeNode( p_spacer_class );
        var p_spacer_style = document.createAttribute("style");
        p_spacer_style.value = "height: " + p_spacer_height + "%;";
        p_spacer.setAttributeNode( p_spacer_style );
        value_bar_container.appendChild( p_spacer );

        // positive side
        var callout_index = 0;
        for (var tt = (p_group[v].length - 1); tt >= 0; tt--) {
            var color_index = p_series_index[v][tt] % i_chart.i_design.color_palette.length;

            if ((p_total[v] + n_total[v]) == 0) {
                var series_height = 0;
                var series_perc = 0;
            } else {
                var series_height = ((p_group[v][tt] / (p_total[v] + n_total[v])) / ((max_scale_value - (min_scale_value)) / 100) * 100);
                var series_perc = roundNumber((p_group[v][tt] / (p_total[v] + n_total[v])) * 100, 2);
            }

            var value_bar_block = document.createElement("div");
            var value_bar_block_class = document.createAttribute("class");
            value_bar_block_class.value = "js-chart-column-value-bar-block";
            value_bar_block.setAttributeNode( value_bar_block_class );
            var value_bar_block_title = document.createAttribute("title");
            value_bar_block_title.value = i_chart.i_titles[ p_series_index[v][tt] ] + "\n" + i_chart.i_labels[v] + "\n" + p_group[v][tt];
            value_bar_block.setAttributeNode( value_bar_block_title );
            var value_bar_block_style = document.createAttribute("style");
            value_bar_block_style.value = "height: " + series_height + "%; min-width: " + i_chart.i_design.value_bar_min_width + "; background-color: " + i_chart.i_design.color_palette[ color_index ] + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
            value_bar_block.setAttributeNode( value_bar_block_style );
            value_bar_container.appendChild( value_bar_block );

            // data labels
            if (i_chart.i_options.showlabels) {

                var data_label = document.createElement("div");
                var data_label_style = document.createAttribute("style");
                data_label_style.value = "z-index: 100; \
position: absolute; \
width: " + i_chart.i_design.datalabel_width + "; \
height: " + i_chart.i_design.datalabel_height+ "; \
line-height: " + i_chart.i_design.datalabel_height+ "; \
text-align: center; \
text-wrap-mode: nowrap; \
overflow: hidden; \
text-overflow: ellipsis; \
top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); \
left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); \
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
                if ((i_chart.i_options.showlabels == "relative") || (i_chart.i_options.showlabels == "auto")) {
                    data_label.innerText = roundNumber(series_perc, num_of_decimals_to_use) + "%";
                } else if (i_chart.i_options.showlabels == "absolute") {
                    data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(p_group[v][tt], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                }
                value_bar_block.appendChild( data_label );

            }
        }
        // negative side
        for (var tt = 0; tt < n_group[v].length; tt++) {
            var color_index = n_series_index[v][tt] % i_chart.i_design.color_palette.length;

            if ((p_total[v] + n_total[v]) == 0) {
                var series_height = 0;
                var series_perc = 0;
            } else {
                var series_height = ((n_group[v][tt] / (n_total[v] + p_total[v])) / ((max_scale_value - (min_scale_value)) / 100) * 100);
                var series_perc = roundNumber((n_group[v][tt] / (p_total[v] + n_total[v])) * 100, 2);
            }

            var value_bar_block = document.createElement("div");
            var value_bar_block_class = document.createAttribute("class");
            value_bar_block_class.value = "js-chart-column-value-bar-block";
            value_bar_block.setAttributeNode( value_bar_block_class );
            var value_bar_block_title = document.createAttribute("title");
            value_bar_block_title.value = i_chart.i_titles[ n_series_index[v][tt] ] + "\n" + i_chart.i_labels[v] + "\n" + n_group[v][tt];
            value_bar_block.setAttributeNode( value_bar_block_title );
            var value_bar_block_style = document.createAttribute("style");
            value_bar_block_style.value = "height: " + series_height + "%; min-width: " + i_chart.i_design.value_bar_min_width + "; background-color: " + i_chart.i_design.color_palette[ color_index ] + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
            value_bar_block.setAttributeNode( value_bar_block_style );
            value_bar_container.appendChild( value_bar_block );

            // data labels
            if (i_chart.i_options.showlabels) {

                var data_label = document.createElement("div");
                var data_label_style = document.createAttribute("style");
                data_label_style.value = "z-index: 100; \
position: absolute; \
width: " + i_chart.i_design.datalabel_width + "; \
height: " + i_chart.i_design.datalabel_height+ "; \
line-height: " + i_chart.i_design.datalabel_height+ "; \
text-align: center; \
text-wrap-mode: nowrap; \
overflow: hidden; \
text-overflow: ellipsis; \
top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); \
left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); \
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
                if ((i_chart.i_options.showlabels == "relative") || (i_chart.i_options.showlabels == "auto")) {
                    data_label.innerText = roundNumber(series_perc, num_of_decimals_to_use) + "%";
                } else if (i_chart.i_options.showlabels == "absolute") {
                    data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(n_group[v][tt], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                }
                value_bar_block.appendChild( data_label );

            }
        }

        // inside the value bar container -- add the negative spacer
        var n_spacer_height = (((Math.abs(min_scale_value) / 100) - n_perc[v]) / ((max_scale_value - (min_scale_value)) / 100)) * 100;

        var n_spacer = document.createElement("div");
        var n_spacer_class = document.createAttribute("class");
        n_spacer_class.value = "js-chart-column-negative-spacer-container";
        n_spacer.setAttributeNode( n_spacer_class );
        var n_spacer_style = document.createAttribute("style");
        n_spacer_style.value = "height: " + n_spacer_height + "%;";
        n_spacer.setAttributeNode( n_spacer_style );
        value_bar_container.appendChild( n_spacer );
    }

    return true;
}
// draw the column value containers
function jsChartColumnDrawStackedValueContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use ) {

    var p_group = [];
    var p_totals = [];
    var p_series = [];
    var n_group = [];
    var n_totals = [];
    var n_series = [];

    // group tohether positive and negative values across each series
    for (var v = 0; v < level2_inner_panel.children.length; v++) {

        p_group[v] = [];
        p_totals[v] = 0;
        p_series[v] = [];
        n_group[v] = [];
        n_totals[v] = 0;
        n_series[v] = [];

        for (var s = 0; s < i_chart.i_data.length; s++) {

            if (i_chart.i_data[s][v] >= 0) {
                p_group[v].push( i_chart.i_data[s][v] );
                p_totals[v] += i_chart.i_data[s][v];
                p_series[v].push( s );
            } else {
                n_group[v].push( i_chart.i_data[s][v] );
                n_totals[v] += i_chart.i_data[s][v];
                n_series[v].push( s );
            }
        }
    }

    var total_range = max_scale_value + Math.abs(min_scale_value);

    // build those value bars
    for (var v = 0; v < level2_inner_panel.children.length; v++) {

        // draw the value bar container
        var value_bar_container = document.createElement("div");
        var value_bar_container_class = document.createAttribute("class");
        value_bar_container_class.value = "js-chart-column-value-column-container";
        value_bar_container.setAttributeNode( value_bar_container_class );
        level2_inner_panel.children[v].appendChild( value_bar_container );

        // inside the value bar container -- add the positive spacer
        var p_spacer_height = ((Math.abs(max_scale_value) - Math.abs(p_totals[v])) / total_range) * 100;

        var p_spacer = document.createElement("div");
        var p_spacer_class = document.createAttribute("class");
        p_spacer_class.value = "js-chart-column-negative-spacer-container";
        p_spacer.setAttributeNode( p_spacer_class );
        var p_spacer_style = document.createAttribute("style");
        p_spacer_style.value = "height: " + p_spacer_height + "%;";
        p_spacer.setAttributeNode( p_spacer_style );
        value_bar_container.appendChild( p_spacer );

        for (var s = (p_group[v].length - 1); s >= 0; s--) {

            if (typeof p_group[v][s] !== "undefined") {

                // inside the value bar container -- add the negative bars first (if they exist)
                var value_bar_block_height = ( Math.abs(p_group[v][s]) / total_range ) * 100;

                var value_bar_block = document.createElement("div");
                var value_bar_block_class = document.createAttribute("class");
                value_bar_block_class.value = "js-chart-column-value-bar-block";
                value_bar_block.setAttributeNode( value_bar_block_class );
                var value_bar_block_title = document.createAttribute("title");
                value_bar_block_title.value = i_chart.i_titles[ p_series[v][s] ] + "\n" + i_chart.i_labels[v] + "\n" + p_group[v][s];
                value_bar_block.setAttributeNode( value_bar_block_title );
                var value_bar_block_style = document.createAttribute("style");
                value_bar_block_style.value = "height: " + value_bar_block_height + "%; min-width: " + i_chart.i_design.value_bar_min_width + "; background-color: " + i_chart.i_design.color_palette[ p_series[v][s] ] + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
                value_bar_block.setAttributeNode( value_bar_block_style );
                value_bar_container.appendChild( value_bar_block );

                // data labels
                if (i_chart.i_options.showlabels) {

                    var data_label = document.createElement("div");
                    var data_label_style = document.createAttribute("style");
                    data_label_style.value = "z-index: 100; \
position: absolute; \
width: " + i_chart.i_design.datalabel_width + "; \
height: " + i_chart.i_design.datalabel_height+ "; \
line-height: " + i_chart.i_design.datalabel_height+ "; \
text-align: center; \
text-wrap-mode: nowrap; \
overflow: hidden; \
text-overflow: ellipsis; \
top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); \
left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); \
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
                    if ((i_chart.i_options.showlabels == "absolute") || (i_chart.i_options.showlabels == "auto")) {
                        data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(p_group[v][s], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                    } else {
                        data_label.innerText = roundNumber((p_group[v][s] / p_totals[v]) * 100, num_of_decimals_to_use) + "%";
                    }
                    value_bar_block.appendChild( data_label );

                }
            }
        }
        for (var s = 0; s < n_group[v].length; s++) {

            if (typeof n_group[v][s] !== "undefined") {

                // inside the value bar container -- add the negative bars first (if they exist)
                var value_bar_block_height = ( Math.abs(n_group[v][s]) / total_range ) * 100;

                var value_bar_block = document.createElement("div");
                var value_bar_block_class = document.createAttribute("class");
                value_bar_block_class.value = "js-chart-column-value-bar-block";
                value_bar_block.setAttributeNode( value_bar_block_class );
                var value_bar_block_title = document.createAttribute("title");
                value_bar_block_title.value = i_chart.i_titles[ n_series[v][s] ] + "\n" + i_chart.i_labels[v] + "\n" + n_group[v][s];
                value_bar_block.setAttributeNode( value_bar_block_title );
                var value_bar_block_style = document.createAttribute("style");
                value_bar_block_style.value = "height: " + value_bar_block_height + "%; min-width: " + i_chart.i_design.value_bar_min_width + "; background-color: " + i_chart.i_design.color_palette[ n_series[v][s] ] + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
                value_bar_block.setAttributeNode( value_bar_block_style );
                value_bar_container.appendChild( value_bar_block );

                // data labels
                if (i_chart.i_options.showlabels) {

                    var data_label = document.createElement("div");
                    var data_label_style = document.createAttribute("style");
                    data_label_style.value = "z-index: 100; \
position: absolute; \
width: " + i_chart.i_design.datalabel_width + "; \
height: " + i_chart.i_design.datalabel_height+ "; \
line-height: " + i_chart.i_design.datalabel_height+ "; \
text-align: center; \
text-wrap-mode: nowrap; \
overflow: hidden; \
text-overflow: ellipsis; \
top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); \
left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); \
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
                    if ((i_chart.i_options.showlabels == "absolute") || (i_chart.i_options.showlabels == "auto")) {
                        data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(n_group[v][s], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                    } else {
                        data_label.innerText = roundNumber((n_group[v][s] / n_totals[v][s]) * 100, num_of_decimals_to_use) + "%";
                    }
                    value_bar_block.appendChild( data_label );

                }
            }
        }

        // inside the value bar container -- add the negative spacer
        var n_spacer_height = ( (Math.abs(min_scale_value) - Math.abs(n_totals[v])) / total_range ) * 100;

        var n_spacer = document.createElement("div");
        var n_spacer_class = document.createAttribute("class");
        n_spacer_class.value = "js-chart-column-negative-spacer-container";
        n_spacer.setAttributeNode( n_spacer_class );
        var n_spacer_style = document.createAttribute("style");
        n_spacer_style.value = "height: " + n_spacer_height + "%;";
        n_spacer.setAttributeNode( n_spacer_style );
        value_bar_container.appendChild( n_spacer );

    }

    return true;
}
// draw the column value containers
function jsChartColumnDrawValueContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var total_range = max_scale_value + Math.abs(min_scale_value);

    var color_index = 0;
    for (var v = 0; v < level2_inner_panel.children.length; v++) {
        for (var s = 0; s < i_chart.i_data.length; s++) {

            // draw value column container
            var value_column_container = document.createElement("div");
            var value_column_container_class = document.createAttribute("class");
            value_column_container_class.value = "js-chart-column-value-column-container";
            value_column_container.setAttributeNode( value_column_container_class );
            level2_inner_panel.children[v].appendChild( value_column_container );

            // draw the positive spacer container
            if (i_chart.i_data[s][v] >= 0) {
                var p_spacer_container_height = ((max_scale_value - i_chart.i_data[s][v]) / total_range) * 100;
            } else {
                var p_spacer_container_height = (max_scale_value / total_range) * 100;
            }
            var p_spacer_container = document.createElement("div");
            var p_spacer_container_class = document.createAttribute("class");
            p_spacer_container_class.value = "js-chart-column-positive-spacer-container";
            p_spacer_container.setAttributeNode( p_spacer_container_class );
            var p_spacer_container_style = document.createAttribute("style");
            p_spacer_container_style.value = "height: " + p_spacer_container_height + "%;";
            p_spacer_container.setAttributeNode( p_spacer_container_style );
            value_column_container.appendChild( p_spacer_container );

            if (typeof i_chart.i_data[s][v] !== "undefined") {

                // draw the value column container
                var value_column_height = (Math.abs(i_chart.i_data[s][v]) / total_range) * 100;

                // set min height
                if (i_chart.i_data[s][v] == 0) {
                    var min_column_height = "0px";
                } else {
                    var min_column_height = i_chart.i_design.value_bar_min_height;
                }

                var value_column = document.createElement("div");
                var value_column_class = document.createAttribute("class");
                value_column_class.value = "js-chart-column-value-column";
                value_column.setAttributeNode( value_column_class );
                var value_column_title = document.createAttribute("title");
                value_column_title.value = i_chart.i_titles[s] + "\n" + i_chart.i_labels[v] + "\n" + i_chart.i_data[s][v];
                value_column.setAttributeNode( value_column_title );
                var value_column_style = document.createAttribute("style");
                value_column_style.value = "min-height: " + min_column_height + "; height: " + value_column_height + "%; background-color: " + i_chart.i_design.color_palette[color_index] + "; min-width: " + i_chart.i_design.value_bar_min_width + "; border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2);";
                value_column.setAttributeNode( value_column_style );
                value_column_container.appendChild( value_column );

                // draw the data label
                if (i_chart.i_options.showlabels) {

                    if (i_chart.i_data[s][v] > 0) {
                        var datalabel_vertical = "top: 5px;";
                    } else if (i_chart.i_data[s][v] < 0) {
                        var datalabel_vertical = "bottom: 5px;";
                    } else {
                        var datalabel_vertical = "top: -15px;";
                    }

                    var datalabel_container = document.createElement("div");
                    var datalabel_container_class = document.createAttribute("class");
                    datalabel_container_class.value = "js-chart-column-data-label-container";
                    datalabel_container.setAttributeNode( datalabel_container_class );
                    var datalabel_container_style = document.createAttribute("style");
                    datalabel_container_style.value = "position: absolute; \
left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); " + datalabel_vertical + "; \
width: " + i_chart.i_design.datalabel_width + "; \
height: " + i_chart.i_design.datalabel_height + "; \
line-height: " + i_chart.i_design.datalabel_height + "; \
text-align: center; \
text-wrap-mode: nowrap; \
overflow: hidden; \
text-overflow: ellipsis; \
font-family: " + i_chart.i_design.datalabel_font_family + "; \
font-size: " + i_chart.i_design.datalabel_font_size + "; \
font-weight: " + i_chart.i_design.datalabel_font_weight + "; \
background-color: " + i_chart.i_design.datalabel_bg_color + "; \
color: " + i_chart.i_design.datalabel_text_color + "; \
border: " + i_chart.i_design.datalabel_border + "; \
border-radius: " + i_chart.i_design.datalabel_border_radius + "; \
box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; \
opacity: " + i_chart.i_design.datalabel_opacity + ";";
                    datalabel_container.setAttributeNode( datalabel_container_style );
                    datalabel_container.innerText = jsChartCommonFormatChartAmount(roundNumber(i_chart.i_data[s][v], num_of_decimals_to_use), i_chart.i_design.datalabel_append, i_chart.i_design.datalabel_prepend);
                    value_column.appendChild( datalabel_container );
                }
            }

            // draw the negative spacer container
            if (i_chart.i_data[s][v] >= 0) {
                var n_spacer_container_height = (Math.abs(min_scale_value) / total_range) * 100;
            } else {
                var n_spacer_container_height = ((Math.abs(min_scale_value) - Math.abs(i_chart.i_data[s][v])) / total_range) * 100;
            }
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

        color_index = 0;
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
// draw the series containers
function jsChartColumnDrawSeriesColumns(level2_inner_panel, i_chart) {

    // determine the maximum length of all data series
    var max_len = 0;
    for (var tt = 0; tt < i_chart.i_data.length; tt++) {
        if (i_chart.i_data[tt].length > max_len) {
            max_len = i_chart.i_data[tt].length;
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
    last_y_axis_scale_label_block_class.value = "js-chart-column-y-axis-scale-label-block-last";
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
            x_axis_legend_block_style.value = "border-right: " + i_chart.i_design.scale_border + "; color: " + i_chart.i_design.scale_text_color + ";";
            x_axis_legend_block.setAttributeNode( x_axis_legend_block_style );
        } else {
            var x_axis_legend_block_style = document.createAttribute("style");
            x_axis_legend_block_style.value = "color: " + i_chart.i_design.scale_text_color + ";";
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
// draw function for a relative (100%) stacked lollipop column chart
function jsChartDrawRelativeStackedLollipopColumnChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["100% stacked lollipop column"].data_type, i_chart.i_titles);
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
        var calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, null, null, 10, "100% stacked");
    }

    var min_scale_value = calculate_scale[0];
    var max_scale_value = calculate_scale[1];
    var step_value = calculate_scale[2];
    var total_steps = calculate_scale[3];
    var num_of_decimals_to_use = calculate_scale[4];

    // round the min and max values
    if (max_scale_value > 100) {
        max_scale_value = 100;
    } else {
        max_scale_value = roundNumber(max_scale_value/100, 1) * 100;
    }
    if (min_scale_value < -100) {
        min_scale_value = -100;
    } else {
        min_scale_value = roundNumber(min_scale_value/100, 1) * 100;
    }

    // calculate the axis step and reset the use_no_of_decimals
    var step_value = (max_scale_value - (min_scale_value)) / 10;
    var total_steps = 10;

    // draw the level0 containers
    var draw_level0_containers = jsChartColumnDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use );
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_scale_label_container = draw_level0_containers[1];
    var y_axis_scale_container = draw_level0_containers[2];
    var x_axis_legend_container = draw_level0_containers[3];

    // draw the series containers
    var draw_series_containers = jsChartColumnDrawSeriesColumns(level2_inner_panel, i_chart);

    // draw the column value containers
    var draw_value_containers = jsChartColumnDrawRelativeStackedLollipopValueContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use );

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
// draw function for a stacked lollipop column chart
function jsChartDrawStackedLollipopColumnChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["stacked lollipop column"].data_type, i_chart.i_titles);
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
        var calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, null, null, 10, "stacked");
    }

    // draw the level0 containers
    var draw_level0_containers = jsChartColumnDrawLevel0Containers(base_level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_scale_label_container = draw_level0_containers[1];
    var y_axis_scale_container = draw_level0_containers[2];
    var x_axis_legend_container = draw_level0_containers[3];

    // draw the series containers
    var draw_series_containers = jsChartColumnDrawSeriesColumns(level2_inner_panel, i_chart);

    // draw the column value containers
    var draw_value_containers = jsChartColumnDrawStackedLollipopValueContainers(level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );

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
// draw function for a lollipop column chart
function jsChartDrawLollipopColumnChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["lollipop column"].data_type, i_chart.i_titles);
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
    var draw_level0_containers = jsChartColumnDrawLevel0Containers(base_level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_scale_label_container = draw_level0_containers[1];
    var y_axis_scale_container = draw_level0_containers[2];
    var x_axis_legend_container = draw_level0_containers[3];

    // draw the series containers
    var draw_series_containers = jsChartColumnDrawSeriesColumns(level2_inner_panel, i_chart);

    // draw the column value containers
    var draw_value_containers = jsChartColumnDrawLollipopContainers(level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );

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
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["span column"].data_type, i_chart.i_titles);
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
// draw function for a clustered column chart
function jsChartDrawRelativeStackedColumnChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["100% stacked column"].data_type, i_chart.i_titles);
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
        var calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, null, null, 10, "100% stacked");
    }

    var min_scale_value = calculate_scale[0];
    var max_scale_value = calculate_scale[1];
    var step_value = calculate_scale[2];
    var total_steps = calculate_scale[3];
    var num_of_decimals_to_use = calculate_scale[4];

    // round the min and max values
    if (max_scale_value > 100) {
        max_scale_value = 100;
    } else {
        max_scale_value = roundNumber(max_scale_value/100, 1) * 100;
    }
    if (min_scale_value < -100) {
        min_scale_value = -100;
    } else {
        min_scale_value = roundNumber(min_scale_value/100, 1) * 100;
    }

    // calculate the axis step and reset the use_no_of_decimals
    var step_value = (max_scale_value - (min_scale_value)) / 10;
    var total_steps = 10;

    // draw the level0 containers
    var draw_level0_containers = jsChartColumnDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use );
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_scale_label_container = draw_level0_containers[1];
    var y_axis_scale_container = draw_level0_containers[2];
    var x_axis_legend_container = draw_level0_containers[3];

    // draw the series containers
    var draw_series_containers = jsChartColumnDrawSeriesColumns(level2_inner_panel, i_chart);

    // draw the column value containers
    var draw_value_containers = jsChartColumnDrawRelativeStackedValueContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use );

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
// draw function for a clustered column chart
function jsChartDrawStackedColumnChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["stacked column"].data_type, i_chart.i_titles);
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
        var calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, null, null, 10, "stacked");
    }

    // draw the level0 containers
    var draw_level0_containers = jsChartColumnDrawLevel0Containers(base_level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_scale_label_container = draw_level0_containers[1];
    var y_axis_scale_container = draw_level0_containers[2];
    var x_axis_legend_container = draw_level0_containers[3];

    // draw the series containers
    var draw_series_containers = jsChartColumnDrawSeriesColumns(level2_inner_panel, i_chart);

    // draw the column value containers
    var draw_value_containers = jsChartColumnDrawStackedValueContainers(level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );

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
// draw function for a clustered column chart
function jsChartDrawColumnChart(chart_index, series_index, this_chart, i_chart) {

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
    var draw_level0_containers = jsChartColumnDrawLevel0Containers(base_level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_scale_label_container = draw_level0_containers[1];
    var y_axis_scale_container = draw_level0_containers[2];
    var x_axis_legend_container = draw_level0_containers[3];

    // draw the series containers
    var draw_series_containers = jsChartColumnDrawSeriesColumns(level2_inner_panel, i_chart);

    // draw the column value containers
    var draw_value_containers = jsChartColumnDrawValueContainers(level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );

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