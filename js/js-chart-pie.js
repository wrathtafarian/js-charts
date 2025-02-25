// draw the pie chart data labels
function jsChartPieDrawPieDataLabels(pie_container, i_chart, series_index, reduce_perc = 0.75) {

    if (i_chart.i_options.startangle == "90deg") {
        var rolling_deg = 90, prev_half_slice_deg = 90, start_rolling_deg = 180, min_rolling_deg = 90;
    } else {
        var rolling_deg = 0, prev_half_slice_deg = 0, start_rolling_deg = 90, min_rolling_deg = 0;
    }

    var c = (pie_container.clientHeight / 2);

    for (var n = 0; n < i_chart.i_data[series_index].length; n++) {
        var slice_perc = (Math.abs(i_chart.i_data[series_index][n]) / i_chart.i_totals[series_index].total_abs_value) * 100;
        var slice_deg = slice_perc * (360 / 100);
        var half_slice_deg = (slice_deg / 2);
        rolling_deg += (prev_half_slice_deg + half_slice_deg);

        if (rolling_deg <= start_rolling_deg) {
            var a = Math.abs((c * reduce_perc) * Math.sin( rolling_deg * (Math.PI / 180)));
            var b = Math.abs((c * reduce_perc) * Math.cos( rolling_deg * (Math.PI / 180)));

            var x = (c + a) - (parseFloat(i_chart.i_design.datalabel_width.replace("px", "")) / 2);
            var y = (c - b) - (parseFloat(i_chart.i_design.datalabel_height.replace("px", "")) / 2);
        } else if (rolling_deg <= (start_rolling_deg + 90)) {
            var a = Math.abs( (c * reduce_perc) * Math.cos( (rolling_deg - (min_rolling_deg + 90)) * (Math.PI / 180) ) );
            var b = Math.abs( (c * reduce_perc) * Math.sin( (rolling_deg - (min_rolling_deg + 90)) * (Math.PI / 180) ) );

            var x = (c + a) - (parseFloat(i_chart.i_design.datalabel_width.replace("px", "") / 2));
            var y = (c + b) - (parseFloat(i_chart.i_design.datalabel_height.replace("px", "") / 2));
        } else if (rolling_deg <= (start_rolling_deg + 180)) {
            var a = Math.abs( (c * reduce_perc) * Math.sin( (rolling_deg - (min_rolling_deg + 180)) * (Math.PI / 180) ) );
            var b = Math.abs( (c * reduce_perc) * Math.cos( (rolling_deg - (min_rolling_deg + 180)) * (Math.PI / 180) ) );

            var x = (c - a) - (parseFloat(i_chart.i_design.datalabel_width.replace("px", "") / 2));
            var y = (c + b) - (parseFloat(i_chart.i_design.datalabel_height.replace("px", "") / 2));
        } else if (rolling_deg <= (start_rolling_deg + 270)) {
            var a = Math.abs( (c * reduce_perc) * Math.sin( (90 - (rolling_deg - (min_rolling_deg + 270))) * (Math.PI / 180) ) );
            var b = Math.abs( (c * reduce_perc) * Math.cos( (90 - (rolling_deg - (min_rolling_deg + 270))) * (Math.PI / 180) ) );

            var x = (c - a) - (parseFloat(i_chart.i_design.datalabel_width.replace("px", "") / 2));
            var y = (c - b) - (parseFloat(i_chart.i_design.datalabel_height.replace("px", "") / 2));
        } else if (rolling_deg <= (start_rolling_deg + 360)) {
            var a = Math.abs((c * reduce_perc) * Math.sin( rolling_deg * (Math.PI / 180)));
            var b = Math.abs((c * reduce_perc) * Math.cos( rolling_deg * (Math.PI / 180)));

            var x = (c + a) - (parseFloat(i_chart.i_design.datalabel_width.replace("px", "")) / 2);
            var y = (c - b) - (parseFloat(i_chart.i_design.datalabel_height.replace("px", "")) / 2);
        }

        var data_label = document.createElement("div");
        var data_label_class = document.createAttribute("class");
        data_label_class.value = "js-chart-common-datalabel-container";
        data_label.setAttributeNode( data_label_class );
        var data_label_style = document.createAttribute("style");
        data_label_style.value = "position: absolute; text-align: center; top: " + y + "px; left: " + x + "px; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; font-family: " + i_chart.i_design.datalabel_font_family + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; z-index: 300; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
        data_label.setAttributeNode( data_label_style );
        var data_label_title = document.createAttribute("title");
        // data_label_title.value = i_chart.i_labels[n] + ":\n" + formatChartAmount( Math.abs(i_chart.i_data[series_index][n]), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append) + "\n" + roundNumber(slice_perc, IDEFAULT_NO_OF_DECIMAL_PLACES) + "%";
        if (typeof i_chart.i_titles[series_index] !== "undefined") {
            var series_label = i_chart.i_titles[series_index];
        } else {
            var series_label = "Series " + (series_index + 1);
        }
        data_label_title.value = series_label + "\n" + i_chart.i_labels[n] + ":\n" + jsChartCommonFormatChartAmount( Math.abs(i_chart.i_data[series_index][n]), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append) + "\n" + roundNumber(slice_perc, IDEFAULT_NO_OF_DECIMAL_PLACES) + "%";
        data_label.setAttributeNode( data_label_title );
        // data_label.addEventListener("mouseover", increaseZIndex, false);
        // data_label.addEventListener("mouseout", decreaseZIndex, false);

        if ((i_chart.i_options.showlabels == "relative") || (i_chart.i_options.showlabels == "auto")) {
            //data_label.innerText = jsChartCommonFormatChartAmount( roundNumber(slice_perc, 2) + "%", i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            data_label.innerText = roundNumber(slice_perc, 2) + "%";
        } else {
            data_label.innerText = jsChartCommonFormatChartAmount( Math.abs(i_chart.i_data[series_index][n]), i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
        }

        pie_container.appendChild( data_label );

        prev_half_slice_deg = half_slice_deg;
    }

    return true;
}
// draw the pie gradient slices
function jsChartPieDrawPieSlices(pie_container, i_chart, series_index) {

    var pie_chart_container_style = pie_container.getAttribute("style");
    pie_chart_container_style += "background: conic-gradient(from " + i_chart.i_options.startangle + ", " + i_chart.i_design.color_palette[0] + " 0%";

    var color_index1 = 0, color_index2 = 1;
    var perc_total = 0, perc_slice = 0;
    for (var i = 0; i < i_chart.i_data[ series_index ].length; i++) {
        perc_slice = (parseFloat(Math.abs(i_chart.i_data[ series_index ][i])) / i_chart.i_totals[series_index].total_abs_value) * 100;
        perc_total += perc_slice;

        // Ensure that the last and first colors are not the same (else you cannot distinguish the slices/wedges from each other)
        if ((i_chart.i_data[ series_index ].length > 1) && (i == (i_chart.i_data[ series_index ].length - 1)) && (color_index1 == 0)) {
            color_index1 = roundNumber( i_chart.i_design.color_palette.length / 2, 0 );
        }
        if ((i_chart.i_data[ series_index ].length > 1) && (i == (i_chart.i_data[ series_index ].length - 2)) && (color_index2 == 0)) {
            color_index2 = roundNumber( i_chart.i_design.color_palette.length / 2, 0 );
        }

        if (parseInt(perc_slice) < 100) {
            pie_chart_container_style += ", " + i_chart.i_design.color_palette[color_index1] + " " + perc_total + "%, " + i_chart.i_design.color_palette[color_index2] + " " + perc_total + "%";
        } else {
            pie_chart_container_style += ", " + i_chart.i_design.color_palette[color_index1] + " " + perc_total + "%";
        }

        color_index1++;
        if (color_index1 >= i_chart.i_design.color_palette.length) {
            color_index1 = 0;
        }
        color_index2++;
        if (color_index2 >= i_chart.i_design.color_palette.length) {
            color_index2 = 0;
        }
    }

    // remember to close off the pie chart slices
    pie_chart_container_style += ")";

    pie_container.setAttribute("style", pie_chart_container_style );

    return true;
}
// draw the base pie chart
function jsChartPieDrawBasePie(level2_inner_panel, i_chart, pie_width, series_index = 0) {

    // draw the base pie container
    var pie_container = document.createElement("div");
    var pie_container_class = document.createAttribute("class");
    pie_container_class.value = "js-chart-pie-base-container";
    pie_container.setAttributeNode( pie_container_class );
    var pie_container_style = document.createAttribute("style");
    pie_container_style.value = "position: absolute; z-index: " + (series_index * 10) + "; width: " + pie_width + "px; height: " + pie_width + "px; top: calc(50% - (" + pie_width + "px / 2)); left: calc(50% - (" + pie_width + "px / 2)); box-shadow: " + i_chart.i_design.canvas_box_shadow + ";";
    pie_container.setAttributeNode( pie_container_style );
    level2_inner_panel.appendChild( pie_container );

    return pie_container;
}
// draw function for a stacked doughnut chart
function jsChartDrawStackedDoughnutChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["pie"].data_type, i_chart.i_labels);
    var level2_inner_panel = draw_base_containers[0];
    var legend_container = draw_base_containers[1];

    var stack_multiplier = 1;
    var multipler_step = roundNumber(0.6 / i_chart.i_data.length, 2);
    for (var s = 0; s < i_chart.i_data.length; s++) {

        // draw the base pie chart
        if (level2_inner_panel.clientHeight <= level2_inner_panel.clientWidth) {
            var pie_width = (level2_inner_panel.clientHeight * stack_multiplier);
        } else {
            var pie_width = (level2_inner_panel.clientWidth * stack_multiplier);
        }

        var pie_container = jsChartPieDrawBasePie(level2_inner_panel, i_chart, pie_width);

        // var doughnut_chart_panel = drawPieChartPanel(inner_panel, i_config, i_input, chart_totals, s, (inner_panel.clientWidth * stack_multiplier), (inner_panel.clientHeight * stack_multiplier));
        var draw_pie_slices = jsChartPieDrawPieSlices(pie_container, i_chart, s);

        stack_multiplier -= multipler_step;

        // draw the pie chart data labels
        if ((i_chart.i_options.showlabels == "absolute") || (i_chart.i_options.showlabels == "relative") || (i_chart.i_options.showlabels == true) || (i_chart.i_options.showlabels == "auto")) {
            var draw_pie_data_labels = jsChartPieDrawPieDataLabels(pie_container, i_chart, s, 0.875);
        }
    }

    // draw the doughnut hole
    var base_bg_color = window.getComputedStyle( this_chart.getElementsByClassName("js-chart-common-base-container")[0], null).getPropertyValue("background-color");
    var body_bg_color = window.getComputedStyle( document.body, null).getPropertyValue("background-color");
    var chart_bg_color = i_chart.i_design.chart_bg_color;

    if ((base_bg_color == "rgba(0, 0, 0, 0)") || (base_bg_color == "transparent")) {
        if ((body_bg_color == "rgba(0, 0, 0, 0)") || (body_bg_color == "transparent")) {
            if ((chart_bg_color == "rgba(0, 0, 0, 0)") || (chart_bg_color == "transparent")) {
                var hole_bg_color = "#ffffff";
            } else {
                var hole_bg_color = chart_bg_color;
            }
        } else {
            var hole_bg_color = body_bg_color;
        }
    } else {
        var hole_bg_color = base_bg_color;
    }

    // draw the doughnut hole
    // var hole_diameter = pie_container.clientWidth * 0.5;
    if (level2_inner_panel.clientWidth <= level2_inner_panel.clientHeight) {
        var hole_diameter = level2_inner_panel.clientWidth * (stack_multiplier);
    } else {
        var hole_diameter = level2_inner_panel.clientHeight * (stack_multiplier);
    }
    var doughnut_hole = document.createElement("div");
    var doughnut_hole_style = document.createAttribute("style");
    doughnut_hole_style.value = "position: absolute; width: " + hole_diameter + "px; height: " + hole_diameter + "px; top: " + ((pie_container.clientWidth - hole_diameter) / 2) + "px; left: " + ((pie_container.clientHeight - hole_diameter) / 2) + "px; background: " + hole_bg_color + "; border-radius: 50%;";
    doughnut_hole.setAttributeNode( doughnut_hole_style );
    pie_container.appendChild( doughnut_hole );

    // add the doughnut hole text
    if (i_chart.i_options.holetitle.trim().length > 0) {

        var hole_text = document.createElement("div");
        var hole_text_style = document.createAttribute("style");
        hole_text_style.value = "position: absolute; text-align: center; width: " + hole_diameter + "px; line-height: 40px; height: 40px; top: calc(50% - 20px); left: calc(50% - (" + hole_diameter + " / 2)); font-family: " + i_chart.i_design.chart_font_family + "; font-size: " + i_chart.i_design.chart_font_size + "; font-weight: " + i_chart.i_design.chart_font_weight + ";";
        hole_text.setAttributeNode( hole_text_style );
        hole_text.innerText = i_chart.i_options.holetitle.trim();
        doughnut_hole.appendChild( hole_text );

    }

    return true;
}
// draw function for a doughnut chart
function jsChartDrawDoughnutChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["pie"].data_type, i_chart.i_labels);
    var level2_inner_panel = draw_base_containers[0];
    var legend_container = draw_base_containers[1];

    // draw the base pie chart
    if (level2_inner_panel.clientHeight <= level2_inner_panel.clientWidth) {
        var pie_width = level2_inner_panel.clientHeight;
    } else {
        var pie_width = level2_inner_panel.clientWidth;
    }
    var pie_container = jsChartPieDrawBasePie(level2_inner_panel, i_chart, pie_width);

    // draw the pie chart slices
    var draw_pie_slices = jsChartPieDrawPieSlices(pie_container, i_chart, series_index);

    // draw the doughnut hole
    var base_bg_color = window.getComputedStyle( this_chart.getElementsByClassName("js-chart-common-base-container")[0], null).getPropertyValue("background-color");
    var body_bg_color = window.getComputedStyle( document.body, null).getPropertyValue("background-color");
    var chart_bg_color = i_chart.i_design.chart_bg_color;

    if ((base_bg_color == "rgba(0, 0, 0, 0)") || (base_bg_color == "transparent")) {
        if ((body_bg_color == "rgba(0, 0, 0, 0)") || (body_bg_color == "transparent")) {
            if ((chart_bg_color == "rgba(0, 0, 0, 0)") || (chart_bg_color == "transparent")) {
                var hole_bg_color = "#ffffff";
            } else {
                var hole_bg_color = chart_bg_color;
            }
        } else {
            var hole_bg_color = body_bg_color;
        }
    } else {
        var hole_bg_color = base_bg_color;
    }

    // draw the doughnut hole
    var hole_diameter = pie_container.clientWidth * 0.5;
    var doughnut_hole = document.createElement("div");
    var doughnut_hole_style = document.createAttribute("style");
    doughnut_hole_style.value = "position: absolute; width: " + hole_diameter + "px; height: " + hole_diameter + "px; top: " + ((pie_container.clientWidth - hole_diameter) / 2) + "px; left: " + ((pie_container.clientHeight - hole_diameter) / 2) + "px; background: " + hole_bg_color + "; border-radius: 50%;";
    doughnut_hole.setAttributeNode( doughnut_hole_style );
    pie_container.appendChild( doughnut_hole );

    // add the doughnut hole text
    if (i_chart.i_options.holetitle.trim().length > 0) {

        var hole_text = document.createElement("div");
        var hole_text_style = document.createAttribute("style");
        hole_text_style.value = "position: absolute; text-align: center; width: " + hole_diameter + "px; line-height: 40px; height: 40px; top: calc(50% - 20px); left: calc(50% - (" + hole_diameter + " / 2)); font-family: " + i_chart.i_design.chart_font_family + "; font-size: " + i_chart.i_design.chart_font_size + "; font-weight: " + i_chart.i_design.chart_font_weight + ";";
        hole_text.setAttributeNode( hole_text_style );
        hole_text.innerText = i_chart.i_options.holetitle.trim();
        doughnut_hole.appendChild( hole_text );

    }

    // draw the pie chart data labels
    if ((i_chart.i_options.showlabels == "absolute") || (i_chart.i_options.showlabels == "relative") || (i_chart.i_options.showlabels == true) || (i_chart.i_options.showlabels == "auto")) {
        var draw_pie_data_labels = jsChartPieDrawPieDataLabels(pie_container, i_chart, series_index);
    }

    return true;
}
// draw function for a pie chart
function jsChartDrawPieChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    // draw the common base containrs
    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["pie"].data_type, i_chart.i_labels);
    var level2_inner_panel = draw_base_containers[0];
    var legend_container = draw_base_containers[1];

    // draw the base pie chart
    if (level2_inner_panel.clientHeight <= level2_inner_panel.clientWidth) {
        var pie_width = level2_inner_panel.clientHeight;
    } else {
        var pie_width = level2_inner_panel.clientWidth;
    }
    var pie_container = jsChartPieDrawBasePie(level2_inner_panel, i_chart, pie_width);

    // draw the pie chart slices
    var draw_pie_slices = jsChartPieDrawPieSlices(pie_container, i_chart, series_index);

    // draw the pie chart data labels
    if ((i_chart.i_options.showlabels == "absolute") || (i_chart.i_options.showlabels == "relative") || (i_chart.i_options.showlabels == true) || (i_chart.i_options.showlabels == "auto")) {
        var draw_pie_data_labels = jsChartPieDrawPieDataLabels(pie_container, i_chart, series_index);
    }

    return true;
}