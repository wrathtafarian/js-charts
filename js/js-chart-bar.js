// draw the level2 valuecontainers and bars
function jsChartBarDrawLevel2RelativeStackedLollipopValueBars(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

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
        value_bar_container_class.value = "js-chart-bar-value-bar-container";
        value_bar_container.setAttributeNode( value_bar_container_class );
        var value_bar_container_style = document.createAttribute("style");
        value_bar_container_style.value = "min-height: " + i_chart.i_design.value_bar_min_height + ";";
        value_bar_container.setAttributeNode( value_bar_container_style );
        level2_inner_panel.children[v].appendChild( value_bar_container );

        // inside the value bar container -- add the negative spacer
        var n_spacer_width = (((Math.abs(min_scale_value) / 100) - n_perc[v]) / ((max_scale_value - (min_scale_value)) / 100)) * 100;

        var n_spacer = document.createElement("div");
        var n_spacer_class = document.createAttribute("class");
        n_spacer_class.value = "js-chart-bar-negative-spacer";
        n_spacer.setAttributeNode( n_spacer_class );
        var n_spacer_style = document.createAttribute("style");
        n_spacer_style.value = "width: " + Math.abs( n_spacer_width ) + "%;";
        n_spacer.setAttributeNode( n_spacer_style );
        value_bar_container.appendChild( n_spacer );

        // negative side
        for (var tt = 0; tt < n_group[v].length; tt++) {
            var color_index = n_series_index[v][tt] % i_chart.i_design.color_palette.length;

            if ((p_total[v] + n_total[v]) == 0) {
                var series_width = 0;
                var series_perc = 0;
            } else {
                var series_width = ((n_group[v][tt] / (n_total[v] + p_total[v])) / ((max_scale_value - (min_scale_value)) / 100) * 100);
                var series_perc = roundNumber((n_group[v][tt] / (p_total[v] + n_total[v])) * 100, 2);
            }

            if (i_chart.i_options.showlines) {
                var line_bg_color = i_chart.i_design.color_palette[ n_series_index[v][tt] ];
            } else {
                var line_bg_color = "transparent";
            }

            var value_bar_block = document.createElement("div");
            var value_bar_block_class = document.createAttribute("class");
            value_bar_block_class.value = "js-chart-bar-value-bar-block";
            value_bar_block.setAttributeNode( value_bar_block_class );
            var value_bar_block_title = document.createAttribute("title");
            value_bar_block_title.value = i_chart.i_titles[ n_series_index[v][tt] ] + "\n" + i_chart.i_labels[v] + "\n" + (0 - n_group[v][tt]);
            value_bar_block.setAttributeNode( value_bar_block_title );
            var value_bar_block_style = document.createAttribute("style");
            value_bar_block_style.value = "top: calc(50% - (" + i_chart.i_design.value_line_thickness + " / 2)); width: " + series_width + "%; height: " + i_chart.i_design.value_line_thickness + "; background-color: " + line_bg_color + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px;";
            value_bar_block.setAttributeNode( value_bar_block_style );
            value_bar_container.appendChild( value_bar_block );

            // data labels
            if (i_chart.i_options.showlabels) {

                if (i_chart.i_design.datalabel_width == "auto") {
                    if (Math.abs(n_group[v][s]) != 0) {
                        var temp_perc = 2 * (Math.abs(n_group[v][tt]) / (Math.abs(n_total[v]) + Math.abs(p_total[v])));
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
                data_label_style.value = "z-index: 100; position: absolute; width: " + temp_diameter + "; height: " + temp_diameter+ "; line-height: " + temp_diameter+ "; text-align: center; top: calc(50% - (" + temp_diameter + " / 2)); left: calc(0px - (" + temp_diameter + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.color_palette[ n_series_index[v][tt] ] + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: 50%; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
                    data_label.setAttributeNode( data_label_style );
                if ((i_chart.i_options.showlabels == "relative") || (i_chart.i_options.showlabels == "auto")) {
                    data_label.innerText = roundNumber(series_perc, num_of_decimals_to_use) + "%";
                } else if (i_chart.i_options.showlabels == "absolute") {
                    data_label.innerText = jsChartCommonFormatChartAmount(roundNumber((0 - n_group[v][tt]), num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                }
                value_bar_block.appendChild( data_label );

            }
        }
        // positive side
        var callout_index = 0;
        for (var tt = (p_group[v].length - 1); tt >= 0; tt--) {
            var color_index = p_series_index[v][tt] % i_chart.i_design.color_palette.length;

            if ((p_total[v] + n_total[v]) == 0) {
                var series_width = 0;
                var series_perc = 0;
            } else {
                var series_width = ((p_group[v][tt] / (p_total[v] + n_total[v])) / ((max_scale_value - (min_scale_value)) / 100) * 100);
                var series_perc = roundNumber((p_group[v][tt] / (p_total[v] + n_total[v])) * 100, 2);
            }

            if (i_chart.i_options.showlines) {
                var line_bg_color = i_chart.i_design.color_palette[ p_series_index[v][tt] ];
            } else {
                var line_bg_color = "transparent";
            }

            var value_bar_block = document.createElement("div");
            var value_bar_block_class = document.createAttribute("class");
            value_bar_block_class.value = "js-chart-bar-value-bar-block";
            value_bar_block.setAttributeNode( value_bar_block_class );
            var value_bar_block_title = document.createAttribute("title");
            value_bar_block_title.value = i_chart.i_titles[ p_series_index[v][tt] ] + "\n" + i_chart.i_labels[v] + "\n" + p_group[v][tt];
            value_bar_block.setAttributeNode( value_bar_block_title );
            var value_bar_block_style = document.createAttribute("style");
            value_bar_block_style.value = "top: calc(50% - (" + i_chart.i_design.value_line_thickness + " / 2)); width: " + series_width + "%; height: " + i_chart.i_design.value_line_thickness + "; background-color: " + line_bg_color + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px;";
            value_bar_block.setAttributeNode( value_bar_block_style );
            value_bar_container.appendChild( value_bar_block );

            // data labels
            if (i_chart.i_options.showlabels) {

                if (i_chart.i_design.datalabel_width == "auto") {
                    if (Math.abs(p_group[v][s]) != 0) {
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
                data_label_style.value = "z-index: 100; position: absolute; width: " + temp_diameter + "; height: " + temp_diameter+ "; line-height: " + temp_diameter+ "; text-align: center; top: calc(50% - (" + temp_diameter + " / 2)); right: calc(0px - (" + temp_diameter + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.color_palette[ p_series_index[v][tt] ] + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: 50%; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
                data_label.setAttributeNode( data_label_style );
                if ((i_chart.i_options.showlabels == "relative") || (i_chart.i_options.showlabels == "auto")) {
                    data_label.innerText = roundNumber(series_perc, num_of_decimals_to_use) + "%";
                } else if (i_chart.i_options.showlabels == "absolute") {
                    data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(p_group[v][tt], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                }
                value_bar_block.appendChild( data_label );

            }
        }

        // inside the value bar container -- add the positive spacer
        var p_spacer_width = (((max_scale_value / 100) - p_perc[v]) / ((max_scale_value - (min_scale_value)) / 100)) * 100;

        var p_spacer = document.createElement("div");
        var p_spacer_class = document.createAttribute("class");
        p_spacer_class.value = "js-chart-bar-positive-spacer";
        p_spacer.setAttributeNode( p_spacer_class );
        var p_spacer_style = document.createAttribute("style");
        p_spacer_style.value = "width: " + p_spacer_width + "%;";
        p_spacer.setAttributeNode( p_spacer_style );
        value_bar_container.appendChild( p_spacer );
    }

    return true;
}
// draw the level2 valuecontainers and bars
function jsChartBarDrawLevel2StackedLollipopValueBars(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

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
        value_bar_container_class.value = "js-chart-bar-value-bar-container";
        value_bar_container.setAttributeNode( value_bar_container_class );
        var value_bar_container_style = document.createAttribute("style");
        value_bar_container_style.value = "min-height: " + i_chart.i_design.value_bar_min_height + ";";
        value_bar_container.setAttributeNode( value_bar_container_style );
        level2_inner_panel.children[v].appendChild( value_bar_container );

        // inside the value bar container -- add the negative spacer
        var n_spacer_width = ( (Math.abs(min_scale_value) - Math.abs(n_totals[v])) / total_range ) * 100;

        var n_spacer = document.createElement("div");
        var n_spacer_class = document.createAttribute("class");
        n_spacer_class.value = "js-chart-bar-negative-spacer";
        n_spacer.setAttributeNode( n_spacer_class );
        var n_spacer_style = document.createAttribute("style");
        n_spacer_style.value = "width: " + n_spacer_width + "%;";
        n_spacer.setAttributeNode( n_spacer_style );
        value_bar_container.appendChild( n_spacer );

        var color_index = 0;
        for (var s = 0; s < n_group[v].length; s++) {

            // inside the value bar container -- add the negative bars first (if they exist)
            var value_bar_block_width = ( Math.abs(n_group[v][s]) / total_range ) * 100;

            if (i_chart.i_options.showlines) {
                var line_bg_color = i_chart.i_design.color_palette[ n_series[v][s] ];
            } else {
                var line_bg_color = "transparent";
            }

            var value_bar_block = document.createElement("div");
            var value_bar_block_class = document.createAttribute("class");
            value_bar_block_class.value = "js-chart-bar-value-bar-block";
            value_bar_block.setAttributeNode( value_bar_block_class );
            var value_bar_block_title = document.createAttribute("title");
            value_bar_block_title.value = i_chart.i_titles[ n_series[v][s] ] + "\n" + i_chart.i_labels[v] + "\n" + n_group[v][s];
            value_bar_block.setAttributeNode( value_bar_block_title );
            var value_bar_block_style = document.createAttribute("style");
            value_bar_block_style.value = "top: calc(50% - (" + i_chart.i_design.value_line_thickness + " / 2)); width: " + value_bar_block_width + "%; height: " + i_chart.i_design.value_line_thickness + "; background-color: " + line_bg_color + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px;";
            value_bar_block.setAttributeNode( value_bar_block_style );
            value_bar_container.appendChild( value_bar_block );

            // data labels
            if (i_chart.i_options.showlabels) {

                if (i_chart.i_design.datalabel_width == "auto") {
                    if (Math.abs(n_group[v][s]) != 0) {
                        var temp_perc = 2 * (Math.abs(n_group[v][s]) / (Math.abs(n_totals[v]) + Math.abs(p_totals[v])));
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
                var data_label_class = document.createAttribute("class");
                data_label_class.value = "js-chart-bar-data-label-container";
                data_label.setAttributeNode( data_label_class );
                var data_label_style = document.createAttribute("style");
                data_label_style.value = "z-index: 100; position: absolute; width: " + temp_diameter + "; height: " + temp_diameter+ "; line-height: " + temp_diameter+ "; text-align: center; top: calc(50% - (" + temp_diameter + " / 2)); left: calc(0px - (" + temp_diameter + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.color_palette[ n_series[v][s] ] + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: 50%; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
                data_label.setAttributeNode( data_label_style );
                if ((i_chart.i_options.showlabels == "absolute") || (i_chart.i_options.showlabels == "auto")) {
                    data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(n_group[v][s], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                } else {
                    data_label.innerText = roundNumber((p_group[v][s] / p_totals[v]) * 100, num_of_decimals_to_use) + "%";
                }
                value_bar_block.appendChild( data_label );

            }

            color_index++;
            if (color_index >= i_chart.i_design.color_palette.length) {
                color_index = 0;
            }

        }
        for (var s = (p_group[v].length - 1); s >= 0; s--) {

            // inside the value bar container -- add the negative bars first (if they exist)
            var value_bar_block_width = ( Math.abs(p_group[v][s]) / total_range ) * 100;

            if (i_chart.i_options.showlines) {
                var line_bg_color = i_chart.i_design.color_palette[ p_series[v][s] ];
            } else {
                var line_bg_color = "transparent";
            }

            var value_bar_block = document.createElement("div");
            var value_bar_block_class = document.createAttribute("class");
            value_bar_block_class.value = "js-chart-bar-value-bar-block";
            value_bar_block.setAttributeNode( value_bar_block_class );
            var value_bar_block_title = document.createAttribute("title");
            value_bar_block_title.value = i_chart.i_titles[ p_series[v][s] ] + "\n" + i_chart.i_labels[v] + "\n" + p_group[v][s];
            value_bar_block.setAttributeNode( value_bar_block_title );
            var value_bar_block_style = document.createAttribute("style");
            value_bar_block_style.value = "top: calc(50% - (" + i_chart.i_design.value_line_thickness + " / 2)); width: " + value_bar_block_width + "%; height: " + i_chart.i_design.value_line_thickness + "; background-color: " + line_bg_color + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px;";
            value_bar_block.setAttributeNode( value_bar_block_style );
            value_bar_container.appendChild( value_bar_block );

            // data labels
            if (i_chart.i_options.showlabels) {

                if (i_chart.i_design.datalabel_width == "auto") {
                    if (Math.abs(p_group[v][s]) != 0) {
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
                var data_label_class = document.createAttribute("class");
                data_label_class.value = "js-chart-bar-data-label-container";
                data_label.setAttributeNode( data_label_class );
                var data_label_style = document.createAttribute("style");
                data_label_style.value = "z-index: 100; position: absolute; width: " + temp_diameter + "; height: " + temp_diameter+ "; line-height: " + temp_diameter+ "; text-align: center; top: calc(50% - (" + temp_diameter + " / 2)); right: calc(0px - (" + temp_diameter + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.color_palette[ p_series[v][s] ] + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: 50%; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
                data_label.setAttributeNode( data_label_style );
                if ((i_chart.i_options.showlabels == "absolute") || (i_chart.i_options.showlabels == "auto")) {
                    data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(p_group[v][s], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                } else {
                    data_label.innerText = roundNumber((p_group[v][s] / p_totals[v]) * 100, num_of_decimals_to_use) + "%";
                }
                value_bar_block.appendChild( data_label );

            }

            color_index++;
            if (color_index >= i_chart.i_design.color_palette.length) {
                color_index = 0;
            }

        }

        // inside the value bar container -- add the positive spacer
        var p_spacer_width = ((Math.abs(max_scale_value) - Math.abs(p_totals[v])) / total_range) * 100;

        var p_spacer = document.createElement("div");
        var p_spacer_class = document.createAttribute("class");
        p_spacer_class.value = "js-chart-bar-negative-spacer";
        p_spacer.setAttributeNode( p_spacer_class );
        var p_spacer_style = document.createAttribute("style");
        p_spacer_style.value = "width: " + p_spacer_width + "%;";
        p_spacer.setAttributeNode( p_spacer_style );
        value_bar_container.appendChild( p_spacer );

    }

    return true;
}
// draw the level2 valuecontainers and bars
function jsChartBarDrawLevel2LollipopValueBars(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var series_abs_total = [];
    for (var v = 0; v < i_chart.i_data[0].length; v++) {
        series_abs_total[v] = 0;
        for (var s = 0; s < i_chart.i_data.length; s++) {
            series_abs_total[v] += Math.abs( i_chart.i_data[s][v] );
        }
    }

    var color_index = 0;
    for (var s = 0; s < i_chart.i_data.length; s++) {
        for (var v = 0; v < i_chart.i_data[s].length; v++) {

            var total_range = max_scale_value + Math.abs(min_scale_value);

            // draw the value bar container
            var value_bar_container = document.createElement("div");
            var value_bar_container_class = document.createAttribute("class");
            value_bar_container_class.value = "js-chart-bar-value-bar-container";
            value_bar_container.setAttributeNode( value_bar_container_class );
            var value_bar_container_style = document.createAttribute("style");
            value_bar_container_style.value = "min-height: " + i_chart.i_design.value_bar_min_height + ";";
            value_bar_container.setAttributeNode( value_bar_container_style );
            level2_inner_panel.children[v].appendChild( value_bar_container );

            // inside the value bar container -- add the negative spacer
            if (i_chart.i_data[s][v] >= 0) {
                var n_spacer_width = (Math.abs(min_scale_value) / total_range) * 100;
            } else {
                var n_spacer_width = ((Math.abs(min_scale_value) - Math.abs(i_chart.i_data[s][v])) / total_range) * 100;
            }

            var n_spacer = document.createElement("div");
            var n_spacer_class = document.createAttribute("class");
            n_spacer_class.value = "js-chart-bar-negative-spacer";
            n_spacer.setAttributeNode( n_spacer_class );
            var n_spacer_style = document.createAttribute("style");
            n_spacer_style.value = "width: " + n_spacer_width + "%;";
            n_spacer.setAttributeNode( n_spacer_style );
            value_bar_container.appendChild( n_spacer );

            // inside the value bar container -- add the negative bar (if it exists)
            var value_bar_block_width = ( Math.abs(i_chart.i_data[s][v]) / total_range ) * 100;

            if (i_chart.i_options.showlines) {
                var line_bg_color = i_chart.i_design.color_palette[color_index];
            } else {
                var line_bg_color = "transparent";
            }

            var value_bar_block = document.createElement("div");
            var value_bar_block_class = document.createAttribute("class");
            value_bar_block_class.value = "js-chart-bar-value-bar-block";
            value_bar_block.setAttributeNode( value_bar_block_class );
            var value_bar_block_title = document.createAttribute("title");
            value_bar_block_title.value = i_chart.i_titles[s] + "\n" + i_chart.i_labels[v] + "\n" + i_chart.i_data[s][v];
            value_bar_block.setAttributeNode( value_bar_block_title );
            var value_bar_block_style = document.createAttribute("style");
            value_bar_block_style.value = "top: calc(50% - (" + i_chart.i_design.value_line_thickness + " / 2)); width: " + value_bar_block_width + "%; height: " + i_chart.i_design.value_line_thickness + "; background-color: " + line_bg_color + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px;";
            value_bar_block.setAttributeNode( value_bar_block_style );
            value_bar_container.appendChild( value_bar_block );

            // data labels
            if (i_chart.i_options.showlabels) {

                if (i_chart.i_design.datalabel_width == "auto") {
                    if (Math.abs(i_chart.i_data[s][v]) != 0) {
                        var temp_perc = 2 * (Math.abs(i_chart.i_data[s][v]) / series_abs_total[v]);
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

                if (i_chart.i_data[s][v] >= 0) {
                    var x_data_label = "right: calc(0px - (" + temp_diameter + " / 2));";
                } else {
                    var x_data_label = "left: calc(0px - (" + temp_diameter + " / 2));";
                }

                var data_label = document.createElement("div");
                var data_label_class = document.createAttribute("class");
                data_label_class.value = "js-chart-bar-data-label-container";
                data_label.setAttributeNode( data_label_class );
                var data_label_style = document.createAttribute("style");
                data_label_style.value = "position: absolute; width: " + temp_diameter + "; height: " + temp_diameter+ "; line-height: " + temp_diameter + "; text-align: center; top: calc(50% - (" + temp_diameter + " / 2)); " + x_data_label + " font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.color_palette[color_index] + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: 50%; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
                data_label.setAttributeNode( data_label_style );
                data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(i_chart.i_data[s][v], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                value_bar_block.appendChild( data_label );

            }

            // inside the value bar container -- add the positive spacer
            if (i_chart.i_data[s][v] >= 0) {
                var p_spacer_width = ((max_scale_value - i_chart.i_data[s][v]) / total_range) * 100;
            } else {
                var p_spacer_width = (Math.abs(max_scale_value) / total_range) * 100;
            }

            var p_spacer = document.createElement("div");
            var p_spacer_class = document.createAttribute("class");
            p_spacer_class.value = "js-chart-bar-negative-spacer";
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
// draw the level2 value containers and bars
function jsChartBarDrawLevel2RelativeStackedValueBars(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

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
        value_bar_container_class.value = "js-chart-bar-value-bar-container";
        value_bar_container.setAttributeNode( value_bar_container_class );
        level2_inner_panel.children[v].appendChild( value_bar_container );

        // inside the value bar container -- add the negative spacer
        var n_spacer_width = (((Math.abs(min_scale_value) / 100) - n_perc[v]) / ((max_scale_value - (min_scale_value)) / 100)) * 100;

        var n_spacer = document.createElement("div");
        var n_spacer_class = document.createAttribute("class");
        n_spacer_class.value = "js-chart-bar-negative-spacer";
        n_spacer.setAttributeNode( n_spacer_class );
        var n_spacer_style = document.createAttribute("style");
        n_spacer_style.value = "width: " + Math.abs( n_spacer_width ) + "%;";
        n_spacer.setAttributeNode( n_spacer_style );
        value_bar_container.appendChild( n_spacer );

        // negative side
        for (var tt = 0; tt < n_group[v].length; tt++) {
            var color_index = n_series_index[v][tt] % i_chart.i_design.color_palette.length;

            if ((p_total[v] + n_total[v]) == 0) {
                var series_width = 0;
                var series_perc = 0;
            } else {
                var series_width = ((n_group[v][tt] / (n_total[v] + p_total[v])) / ((max_scale_value - (min_scale_value)) / 100) * 100);
                var series_perc = roundNumber((n_group[v][tt] / (p_total[v] + n_total[v])) * 100, 2);
            }

            var value_bar_block = document.createElement("div");
            var value_bar_block_class = document.createAttribute("class");
            value_bar_block_class.value = "js-chart-bar-value-bar-block";
            value_bar_block.setAttributeNode( value_bar_block_class );
            var value_bar_block_title = document.createAttribute("title");
            value_bar_block_title.value = i_chart.i_titles[ n_series_index[v][tt] ] + "\n" + i_chart.i_labels[v] + "\n" + n_group[v][tt];
            value_bar_block.setAttributeNode( value_bar_block_title );
            var value_bar_block_style = document.createAttribute("style");
            value_bar_block_style.value = "width: " + series_width + "%; min-height: " + i_chart.i_design.value_bar_min_height + "; background-color: " + i_chart.i_design.color_palette[ color_index ] + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px;";
            value_bar_block.setAttributeNode( value_bar_block_style );
            value_bar_container.appendChild( value_bar_block );

            // data labels
            if (i_chart.i_options.showlabels) {

                var data_label = document.createElement("div");
                var data_label_style = document.createAttribute("style");
                data_label_style.value = "z-index: 100; position: absolute; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height+ "; line-height: " + i_chart.i_design.datalabel_height+ "; text-align: center; top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
                data_label.setAttributeNode( data_label_style );
                if ((i_chart.i_options.showlabels == "relative") || (i_chart.i_options.showlabels == "auto")) {
                    data_label.innerText = roundNumber(series_perc, num_of_decimals_to_use) + "%";
                } else if (i_chart.i_options.showlabels == "absolute") {
                    data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(n_group[v][tt], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                }
                value_bar_block.appendChild( data_label );

            }
        }
        // positive side
        var callout_index = 0;
        for (var tt = (p_group[v].length - 1); tt >= 0; tt--) {
            var color_index = p_series_index[v][tt] % i_chart.i_design.color_palette.length;

            if ((p_total[v] + n_total[v]) == 0) {
                var series_width = 0;
                var series_perc = 0;
            } else {
                var series_width = ((p_group[v][tt] / (p_total[v] + n_total[v])) / ((max_scale_value - (min_scale_value)) / 100) * 100);
                var series_perc = roundNumber((p_group[v][tt] / (p_total[v] + n_total[v])) * 100, 2);
            }

            var value_bar_block = document.createElement("div");
            var value_bar_block_class = document.createAttribute("class");
            value_bar_block_class.value = "js-chart-bar-value-bar-block";
            value_bar_block.setAttributeNode( value_bar_block_class );
            var value_bar_block_title = document.createAttribute("title");
            value_bar_block_title.value = i_chart.i_titles[ p_series_index[v][tt] ] + "\n" + i_chart.i_labels[v] + "\n" + p_group[v][tt];
            value_bar_block.setAttributeNode( value_bar_block_title );
            var value_bar_block_style = document.createAttribute("style");
            value_bar_block_style.value = "width: " + series_width + "%; min-height: " + i_chart.i_design.value_bar_min_height + "; background-color: " + i_chart.i_design.color_palette[ color_index ] + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px;";
            value_bar_block.setAttributeNode( value_bar_block_style );
            value_bar_container.appendChild( value_bar_block );

            // data labels
            if (i_chart.i_options.showlabels) {

                var data_label = document.createElement("div");
                var data_label_style = document.createAttribute("style");
                data_label_style.value = "z-index: 100; position: absolute; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height+ "; line-height: " + i_chart.i_design.datalabel_height+ "; text-align: center; top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
                data_label.setAttributeNode( data_label_style );
                if ((i_chart.i_options.showlabels == "relative") || (i_chart.i_options.showlabels == "auto")) {
                    data_label.innerText = roundNumber(series_perc, num_of_decimals_to_use) + "%";
                } else if (i_chart.i_options.showlabels == "absolute") {
                    data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(p_group[v][tt], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                }
                value_bar_block.appendChild( data_label );

            }
        }

        // inside the value bar container -- add the positive spacer
        var p_spacer_width = (((max_scale_value / 100) - p_perc[v]) / ((max_scale_value - (min_scale_value)) / 100)) * 100;

        var p_spacer = document.createElement("div");
        var p_spacer_class = document.createAttribute("class");
        p_spacer_class.value = "js-chart-bar-positive-spacer";
        p_spacer.setAttributeNode( p_spacer_class );
        var p_spacer_style = document.createAttribute("style");
        p_spacer_style.value = "width: " + p_spacer_width + "%;";
        p_spacer.setAttributeNode( p_spacer_style );
        value_bar_container.appendChild( p_spacer );
    }

    return true;
}
// draw the level2 value containers and bars
function jsChartBarDrawLevel2StackedValueBars(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

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
        value_bar_container_class.value = "js-chart-bar-value-bar-container";
        value_bar_container.setAttributeNode( value_bar_container_class );
        level2_inner_panel.children[v].appendChild( value_bar_container );

        // inside the value bar container -- add the negative spacer
        var n_spacer_width = ( (Math.abs(min_scale_value) - Math.abs(n_totals[v])) / total_range ) * 100;

        var n_spacer = document.createElement("div");
        var n_spacer_class = document.createAttribute("class");
        n_spacer_class.value = "js-chart-bar-negative-spacer";
        n_spacer.setAttributeNode( n_spacer_class );
        var n_spacer_style = document.createAttribute("style");
        n_spacer_style.value = "width: " + n_spacer_width + "%;";
        n_spacer.setAttributeNode( n_spacer_style );
        value_bar_container.appendChild( n_spacer );

        var color_index = 0;
        for (var s = 0; s < n_group[v].length; s++) {

            // inside the value bar container -- add the negative bars first (if they exist)
            var value_bar_block_width = ( Math.abs(n_group[v][s]) / total_range ) * 100;

            var value_bar_block = document.createElement("div");
            var value_bar_block_class = document.createAttribute("class");
            value_bar_block_class.value = "js-chart-bar-value-bar-block";
            value_bar_block.setAttributeNode( value_bar_block_class );
            var value_bar_block_title = document.createAttribute("title");
            value_bar_block_title.value = i_chart.i_titles[ n_series[v][s] ] + "\n" + i_chart.i_labels[v] + "\n" + n_group[v][s];
            value_bar_block.setAttributeNode( value_bar_block_title );
            var value_bar_block_style = document.createAttribute("style");
            value_bar_block_style.value = "width: " + value_bar_block_width + "%; min-height: " + i_chart.i_design.value_bar_min_height + "; background-color: " + i_chart.i_design.color_palette[ n_series[v][s] ] + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px;";
            value_bar_block.setAttributeNode( value_bar_block_style );
            value_bar_container.appendChild( value_bar_block );

            // data labels
            if (i_chart.i_options.showlabels) {

                var data_label = document.createElement("div");
                var data_label_class = document.createAttribute("class");
                data_label_class.value = "js-chart-bar-data-label-container";
                data_label.setAttributeNode( data_label_class );
                var data_label_style = document.createAttribute("style");
                data_label_style.value = "z-index: 100; position: absolute; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height+ "; line-height: " + i_chart.i_design.datalabel_height+ "; text-align: center; top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
                data_label.setAttributeNode( data_label_style );
                if ((i_chart.i_options.showlabels == "absolute") || (i_chart.i_options.showlabels == "auto")) {
                    data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(n_group[v][s], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                } else {
                    data_label.innerText = roundNumber((p_group[v][s] / p_totals[v]) * 100, num_of_decimals_to_use) + "%";
                }
                value_bar_block.appendChild( data_label );

            }

            color_index++;
            if (color_index >= i_chart.i_design.color_palette.length) {
                color_index = 0;
            }

        }
        for (var s = (p_group[v].length - 1); s >= 0; s--) {

            // inside the value bar container -- add the negative bars first (if they exist)
            var value_bar_block_width = ( Math.abs(p_group[v][s]) / total_range ) * 100;

            var value_bar_block = document.createElement("div");
            var value_bar_block_class = document.createAttribute("class");
            value_bar_block_class.value = "js-chart-bar-value-bar-block";
            value_bar_block.setAttributeNode( value_bar_block_class );
            var value_bar_block_title = document.createAttribute("title");
            value_bar_block_title.value = i_chart.i_titles[ p_series[v][s] ] + "\n" + i_chart.i_labels[v] + "\n" + p_group[v][s];
            value_bar_block.setAttributeNode( value_bar_block_title );
            var value_bar_block_style = document.createAttribute("style");
            value_bar_block_style.value = "width: " + value_bar_block_width + "%; min-height: " + i_chart.i_design.value_bar_min_height + "; background-color: " + i_chart.i_design.color_palette[ p_series[v][s] ] + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_data_margin + " / 2) 0px;";
            value_bar_block.setAttributeNode( value_bar_block_style );
            value_bar_container.appendChild( value_bar_block );

            // data labels
            if (i_chart.i_options.showlabels) {

                var data_label = document.createElement("div");
                var data_label_class = document.createAttribute("class");
                data_label_class.value = "js-chart-bar-data-label-container";
                data_label.setAttributeNode( data_label_class );
                var data_label_style = document.createAttribute("style");
                data_label_style.value = "z-index: 100; position: absolute; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height+ "; line-height: " + i_chart.i_design.datalabel_height+ "; text-align: center; top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
                data_label.setAttributeNode( data_label_style );
                if ((i_chart.i_options.showlabels == "absolute") || (i_chart.i_options.showlabels == "auto")) {
                    data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(p_group[v][s], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                } else {
                    data_label.innerText = roundNumber((p_group[v][s] / p_totals[v]) * 100, num_of_decimals_to_use) + "%";
                }
                value_bar_block.appendChild( data_label );

            }

            color_index++;
            if (color_index >= i_chart.i_design.color_palette.length) {
                color_index = 0;
            }

        }

        // inside the value bar container -- add the positive spacer
        var p_spacer_width = ((Math.abs(max_scale_value) - Math.abs(p_totals[v])) / total_range) * 100;

        var p_spacer = document.createElement("div");
        var p_spacer_class = document.createAttribute("class");
        p_spacer_class.value = "js-chart-bar-negative-spacer";
        p_spacer.setAttributeNode( p_spacer_class );
        var p_spacer_style = document.createAttribute("style");
        p_spacer_style.value = "width: " + p_spacer_width + "%;";
        p_spacer.setAttributeNode( p_spacer_style );
        value_bar_container.appendChild( p_spacer );

    }

    return true;
}
// draw the level2 value containers and bars
function jsChartBarDrawLevel2SeriesValueBars(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var color_index = 0;
    for (var s = 0; s < i_chart.i_data.length; s++) {
        for (var v = 0; v < i_chart.i_data[s].length; v++) {

            var total_range = max_scale_value + Math.abs(min_scale_value);

            // draw the value bar container
            var value_bar_container = document.createElement("div");
            var value_bar_container_class = document.createAttribute("class");
            value_bar_container_class.value = "js-chart-bar-value-bar-container";
            value_bar_container.setAttributeNode( value_bar_container_class );
            level2_inner_panel.children[v].appendChild( value_bar_container );

            // inside the value bar container -- add the negative spacer
            if (i_chart.i_data[s][v] >= 0) {
                var n_spacer_width = (Math.abs(min_scale_value) / total_range) * 100;
            } else {
                var n_spacer_width = ((Math.abs(min_scale_value) - Math.abs(i_chart.i_data[s][v])) / total_range) * 100;
            }

            var n_spacer = document.createElement("div");
            var n_spacer_class = document.createAttribute("class");
            n_spacer_class.value = "js-chart-bar-negative-spacer";
            n_spacer.setAttributeNode( n_spacer_class );
            var n_spacer_style = document.createAttribute("style");
            n_spacer_style.value = "width: " + n_spacer_width + "%;";
            n_spacer.setAttributeNode( n_spacer_style );
            value_bar_container.appendChild( n_spacer );

            // inside the value bar container -- add the negative bar (if it exists)
            var value_bar_block_width = ( Math.abs(i_chart.i_data[s][v]) / total_range ) * 100;

            var value_bar_block = document.createElement("div");
            var value_bar_block_class = document.createAttribute("class");
            value_bar_block_class.value = "js-chart-bar-value-bar-block";
            value_bar_block.setAttributeNode( value_bar_block_class );
            var value_bar_block_title = document.createAttribute("title");
            value_bar_block_title.value = i_chart.i_titles[s] + "\n" + i_chart.i_labels[v] + "\n" + i_chart.i_data[s][v];
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
                data_label.innerText = jsChartCommonFormatChartAmount(roundNumber(i_chart.i_data[s][v], num_of_decimals_to_use), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                value_bar_block.appendChild( data_label );

            }

            // inside the value bar container -- add the positive spacer
            if (i_chart.i_data[s][v] >= 0) {
                var p_spacer_width = ((max_scale_value - i_chart.i_data[s][v]) / total_range) * 100;
            } else {
                var p_spacer_width = (Math.abs(max_scale_value) / total_range) * 100;
            }

            var p_spacer = document.createElement("div");
            var p_spacer_class = document.createAttribute("class");
            p_spacer_class.value = "js-chart-bar-negative-spacer";
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
// draw the level2 series containers
function jsChartBarDrawLevel2SeriesContainers(level2_inner_panel, i_chart) {

    // determine the maximum no. of series containers
    var max_series_len = i_chart.i_data[0].length;
    for (var s = 1; s < i_chart.i_data.length; s++) {
        if (i_chart.i_data[s].length > max_series_len) {
            max_series_len = i_chart.i_data[s].length;
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

    // draw level2 y-axis legend scale label container
    var bar_level2_y_axis_legend_scale_label_container = document.createElement("div");
    var bar_level2_y_axis_legend_scale_label_container_class = document.createAttribute("class");
    bar_level2_y_axis_legend_scale_label_container_class.value = "js-chart-bar-level2-y-axis-legend-scale-label-container";
    bar_level2_y_axis_legend_scale_label_container.setAttributeNode( bar_level2_y_axis_legend_scale_label_container_class );
    bar_level2_y_axis_legend_container.appendChild( bar_level2_y_axis_legend_scale_label_container );

    for (var s = 0; s < i_chart.i_labels.length; s++) {

        var bar_level2_y_axis_legend_block = document.createElement("div");
        var bar_level2_y_axis_legend_block_class = document.createAttribute("class");
        bar_level2_y_axis_legend_block_class.value = "js-chart-bar-level2-y-axis-legend-block";
        bar_level2_y_axis_legend_block.setAttributeNode( bar_level2_y_axis_legend_block_class );
        var bar_level2_y_axis_legend_block_style = document.createAttribute("style");
        bar_level2_y_axis_legend_block_style.value = "color: " + i_chart.i_design.scale_text_color + ";";
        bar_level2_y_axis_legend_block.setAttributeNode( bar_level2_y_axis_legend_block_style );
        var bar_level2_y_axis_legend_block_title = document.createAttribute("title");
        bar_level2_y_axis_legend_block_title.value = i_chart.i_labels[s];
        bar_level2_y_axis_legend_block.setAttributeNode( bar_level2_y_axis_legend_block_title );
        bar_level2_y_axis_legend_block.innerText = i_chart.i_labels[s];
        bar_level2_y_axis_legend_scale_label_container.appendChild( bar_level2_y_axis_legend_block );

    }

    // draw level2 y-axis legend scale container
    var bar_level2_y_axis_legend_scale_container = document.createElement("div");
    var bar_level2_y_axis_legend_scale_container_class = document.createAttribute("class");
    bar_level2_y_axis_legend_scale_container_class.value = "js-chart-bar-level2-y-axis-legend-scale-container";
    bar_level2_y_axis_legend_scale_container.setAttributeNode( bar_level2_y_axis_legend_scale_container_class );
    bar_level2_y_axis_legend_container.appendChild( bar_level2_y_axis_legend_scale_container );

    for (var s = 0; s < i_chart.i_labels.length; s++) {

        var bar_level2_y_axis_legend_scale_block = document.createElement("div");
        var bar_level2_y_axis_legend_scale_block_class = document.createAttribute("class");
        bar_level2_y_axis_legend_scale_block_class.value = "js-chart-bar-level2-y-axis-legend-scale-block";
        bar_level2_y_axis_legend_scale_block.setAttributeNode( bar_level2_y_axis_legend_scale_block_class );
        var bar_level2_y_axis_legend_scale_block_style = document.createAttribute("style");
        bar_level2_y_axis_legend_scale_block_style.value = "border-top: " + i_chart.i_design.scale_border + "; border-right: " + i_chart.i_design.scale_border + ";";
        bar_level2_y_axis_legend_scale_block.setAttributeNode( bar_level2_y_axis_legend_scale_block_style );
        var bar_level2_y_axis_legend_scale_block_title = document.createAttribute("title");
        bar_level2_y_axis_legend_scale_block_title.value = i_chart.i_labels[s];
        bar_level2_y_axis_legend_scale_block.setAttributeNode( bar_level2_y_axis_legend_scale_block_title );
        bar_level2_y_axis_legend_scale_container.appendChild( bar_level2_y_axis_legend_scale_block );

    }

    /*
    for (var s = 0; s < i_chart.i_labels.length; s++) {

        var bar_level2_y_axis_legend_block = document.createElement("div");
        var bar_level2_y_axis_legend_block_class = document.createAttribute("class");
        bar_level2_y_axis_legend_block_class.value = "js-chart-bar-level2-y-axis-legend-block";
        bar_level2_y_axis_legend_block.setAttributeNode( bar_level2_y_axis_legend_block_class );
        var bar_level2_y_axis_legend_block_style = document.createAttribute("style");
        bar_level2_y_axis_legend_block_style.value = "color: " + i_chart.i_design.scale_text_color + ";";
        if (s < (i_chart.i_labels.length-1)) {
            bar_level2_y_axis_legend_block_style.value += " border-bottom: " + i_chart.i_design.scale_border + ";";
        }
        bar_level2_y_axis_legend_block.setAttributeNode( bar_level2_y_axis_legend_block_style );
        var bar_level2_y_axis_legend_block_title = document.createAttribute("title");
        bar_level2_y_axis_legend_block_title.value = i_chart.i_labels[s];
        bar_level2_y_axis_legend_block.setAttributeNode( bar_level2_y_axis_legend_block_title );
        bar_level2_y_axis_legend_block.innerText = i_chart.i_labels[s];
        bar_level2_y_axis_legend_container.appendChild( bar_level2_y_axis_legend_block );

    }
    */

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
// draw function for a 100% stacked lollipop bar chart
function jsChartDrawRelativeStackedLollipopBarChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["100% stacked lollipop bar"].data_type, i_chart.i_titles);
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

    // draw level0 base container
    // - y-axis title
    // - x-axis title
    // - y-axis legend container
    // - level2 inner panel
    // - x-axis scale container
    //   - x-axis scale
    //   - x-axis scale label
    var draw_level1_containers = jsChartBarDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use );
    var level2_inner_panel = draw_level1_containers[0];
    var bar_level2_y_axis_legend_container = draw_level1_containers[1];
    var bar_level1_x_axis_scale_container = draw_level1_containers[2];
    var bar_level1_x_axis_scale_label_container = draw_level1_containers[3];

    // draw the level2 series containers
    var draw_level2_series_containers = jsChartBarDrawLevel2SeriesContainers(level2_inner_panel, i_chart);

    // draw the level2 valuecontainers and bars
    var draw_level2_stacked_bars = jsChartBarDrawLevel2RelativeStackedLollipopValueBars(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use );

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
// draw function for a stacked lollipop bar chart
function jsChartDrawStackedLollipopBarChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["stacked lollipop bar"].data_type, i_chart.i_titles);
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
        var calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, null, null, 10, "stacked");
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
    var draw_level2_stacked_bars = jsChartBarDrawLevel2StackedLollipopValueBars(level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );

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
// draw function for a lollipop bar chart
function jsChartDrawLollipopBarChart(chart_index, series_index, this_chart, i_chart) {

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
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["lollipop bar"].data_type, legend_labels);
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
    var draw_level2_series_bars = jsChartBarDrawLevel2LollipopValueBars(level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );

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
// draw function for a 100% stacked bar chart
function jsChartDrawRelativeStackedBarChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["100% stacked bar"].data_type, i_chart.i_titles);
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

    // draw level0 base container
    // - y-axis title
    // - x-axis title
    // - y-axis legend container
    // - level2 inner panel
    // - x-axis scale container
    //   - x-axis scale
    //   - x-axis scale label
    var draw_level1_containers = jsChartBarDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use );
    var level2_inner_panel = draw_level1_containers[0];
    var bar_level2_y_axis_legend_container = draw_level1_containers[1];
    var bar_level1_x_axis_scale_container = draw_level1_containers[2];
    var bar_level1_x_axis_scale_label_container = draw_level1_containers[3];

    // draw the level2 series containers
    var draw_level2_series_containers = jsChartBarDrawLevel2SeriesContainers(level2_inner_panel, i_chart);

    // draw the level2 valuecontainers and bars
    var draw_level2_stacked_bars = jsChartBarDrawLevel2RelativeStackedValueBars(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use );

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
// draw function for a stacked bar chart
function jsChartDrawStackedBarChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["stacked bar"].data_type, i_chart.i_titles);
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
        var calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, null, null, 10, "stacked");
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
    var draw_level2_stacked_bars = jsChartBarDrawLevel2StackedValueBars(level2_inner_panel, i_chart, calculate_scale[0], calculate_scale[1], calculate_scale[2], calculate_scale[3], calculate_scale[4] );

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
// draw function for a clustered bar chart
function jsChartDrawBarChart(chart_index, series_index, this_chart, i_chart) {

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
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["bar"].data_type, legend_labels);
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