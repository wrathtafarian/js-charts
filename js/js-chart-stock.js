// draw the candlestick bars
function jsChartOHLCDrawCandlestickBars(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var total_range = Math.abs(max_scale_value - (min_scale_value));
    var tick_multiplier = 2.0;

    // set vars that should not change between columns
    const wick_width = i_chart.i_design.value_line_thickness;
    const wick_left = "calc(50% - (" + wick_width + " / 2))";
    const wick_bg_color = i_chart.i_design.color_palette[2];
    const realbody_width = i_chart.i_design.value_bar_min_width;
    const realbody_left = "calc(50% - (" + realbody_width + " / 2))";
    const open_dl_width = i_chart.i_design.datalabel_width;
    const open_dl_height = i_chart.i_design.datalabel_height;
    const high_dl_width = i_chart.i_design.datalabel_width;
    const high_dl_height = i_chart.i_design.datalabel_height;
    const low_dl_width = i_chart.i_design.datalabel_width;
    const low_dl_height = i_chart.i_design.datalabel_height;
    const close_dl_width = i_chart.i_design.datalabel_width;
    const close_dl_height = i_chart.i_design.datalabel_height;

    for (var v = 0; v < i_chart.i_labels.length; v++) {

        // Candlestick Charts display multiple bits of price information such as the open price, close price, highest price and lowest price through the use of candlestick-like symbols.
        // Each symbol represents the compressed trading activity for a single time period (a minute, hour, day, month, etc).
        // Each Candlestick symbol is plotted along a time scale on the x-axis, to show the trading activity over time.
        // The main rectangle in the symbol is known as the real body, which is used to display the range between the open and close price of that time period.
        // While the lines extending from the bottom and top of the real body is known as the lower and upper shadows (or wick).
        // Each shadow represents the highest or lowest price traded during the time period represented.
        // When the market is Bullish (the closing price is higher than it opened), then the body is coloured typically white or green.

        // "bullish" (the closing price is higher than it opened) or
        if (i_chart.i_data[0].close[v] > i_chart.i_data[0].open[v]) {
            var realbody_bg_color = i_chart.i_design.color_palette[0];
            var realbody_top = ((max_scale_value - i_chart.i_data[0].close[v]) / total_range) * level2_inner_panel.clientHeight + "px";
        // "bearish" (the closing price is lower than it opened)
        } else {
            var realbody_bg_color = i_chart.i_design.color_palette[1];
            var realbody_top = ((max_scale_value - i_chart.i_data[0].open[v]) / total_range) * level2_inner_panel.clientHeight + "px";
        }

        var elem_title = i_chart.i_labels[v] + "\nO: " + roundNumber(i_chart.i_data[0].open[v], 2) + "\nH: " + roundNumber(i_chart.i_data[0].high[v], 2) + "\nL: " + roundNumber(i_chart.i_data[0].low[v], 2) + "\nC: " + roundNumber(i_chart.i_data[0].close[v], 2) + "\nMove: " + roundNumber((i_chart.i_data[0].close[v] - i_chart.i_data[0].open[v]), 2);

        // draw the shadow or wick
        var wick_height = ((i_chart.i_data[0].high[v] - i_chart.i_data[0].low[v]) / total_range) * level2_inner_panel.clientHeight + "px";
        var wick_top = ((max_scale_value - i_chart.i_data[0].high[v]) / total_range) * level2_inner_panel.clientHeight + "px";

        var wick = document.createElement("div");
        var wick_style = document.createAttribute("style");
        wick_style.value = "position: absolute; left: " + wick_left + "; width: " + wick_width + "; top: " + wick_top + "; height: " + wick_height + "; background-color: " + wick_bg_color + "; border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
        wick.setAttributeNode( wick_style );
        var wick_title = document.createAttribute("title");
        wick_title.value = elem_title;
        wick.setAttributeNode( wick_title );
        level2_inner_panel.children[v].appendChild( wick );

        // draw real body
        var realbody_height = (Math.abs(i_chart.i_data[0].close[v] - (i_chart.i_data[0].open[v])) / total_range) * level2_inner_panel.clientHeight + "px";

        var realbody = document.createElement("div");
        var realbody_style = document.createAttribute("style");
        realbody_style.value = "position: absolute; left: " + realbody_left + "; width: " + realbody_width + "; top: " + realbody_top + "; height: " + realbody_height + "; min-height: " + i_chart.i_design.value_bar_min_height + "; background-color: " + realbody_bg_color + "; border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
        realbody.setAttributeNode( realbody_style );
        var realbody_title = document.createAttribute("title");
        realbody_title.value = elem_title;
        realbody.setAttributeNode( realbody_title );
        level2_inner_panel.children[v].appendChild( realbody );

        // draw data labels
        if (i_chart.i_options.showlabels) {

            // open
            var open_dl_left = "calc(50% + (" + i_chart.i_design.value_bar_min_width + " * 0.6))";
            var open_dl_top = "calc(" + ((max_scale_value - i_chart.i_data[0].open[v]) / total_range) * level2_inner_panel.clientHeight + "px - (" + open_dl_height + " / 2))";

            var open_dl = document.createElement("div");
            var open_dl_style = document.createAttribute("style");
            open_dl_style.value = "position: absolute; width: " + open_dl_width + "; height: " + open_dl_height + "; left: " + open_dl_left + "; top: " + open_dl_top + "; text-align: center; line-height: " + open_dl_height + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; font-size: " + i_chart.i_design.datalabel_font_size + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
            open_dl.setAttributeNode( open_dl_style );
            var open_dl_title = document.createAttribute("title");
            open_dl_title.value = "Open: " + jsChartCommonFormatChartAmount(i_chart.i_data[0].open[v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            open_dl.setAttributeNode( open_dl_title );
            open_dl.innerText = jsChartCommonFormatChartAmount(i_chart.i_data[0].open[v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            level2_inner_panel.children[v].appendChild( open_dl );

            // high
            var high_dl_left = "calc(50% + (" + i_chart.i_design.value_bar_min_width + " * 0.6))";
            var high_dl_top = "calc(" + ((max_scale_value - i_chart.i_data[0].high[v]) / total_range) * level2_inner_panel.clientHeight + "px - (" + high_dl_height + " / 2))";

            var high_dl = document.createElement("div");
            var high_dl_style = document.createAttribute("style");
            high_dl_style.value = "position: absolute; width: " + high_dl_width + "; height: " + high_dl_height + "; left: " + high_dl_left + "; top: " + high_dl_top + "; text-align: center; line-height: " + high_dl_height + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; font-size: " + i_chart.i_design.datalabel_font_size + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
            high_dl.setAttributeNode( high_dl_style );
            var high_dl_title = document.createAttribute("title");
            high_dl_title.value = "high: " + jsChartCommonFormatChartAmount(i_chart.i_data[0].high[v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            high_dl.setAttributeNode( high_dl_title );
            high_dl.innerText = jsChartCommonFormatChartAmount(i_chart.i_data[0].high[v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            level2_inner_panel.children[v].appendChild( high_dl );

            // low
            var low_dl_left = "calc(50% + (" + i_chart.i_design.value_bar_min_width + " * 0.6))";
            var low_dl_top = "calc(" + ((max_scale_value - i_chart.i_data[0].low[v]) / total_range) * level2_inner_panel.clientHeight + "px - (" + low_dl_height + " / 2))";

            var low_dl = document.createElement("div");
            var low_dl_style = document.createAttribute("style");
            low_dl_style.value = "position: absolute; width: " + low_dl_width + "; height: " + low_dl_height + "; left: " + low_dl_left + "; top: " + low_dl_top + "; text-align: center; line-height: " + low_dl_height + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; font-size: " + i_chart.i_design.datalabel_font_size + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
            low_dl.setAttributeNode( low_dl_style );
            var low_dl_title = document.createAttribute("title");
            low_dl_title.value = "low: " + jsChartCommonFormatChartAmount(i_chart.i_data[0].low[v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            low_dl.setAttributeNode( low_dl_title );
            low_dl.innerText = jsChartCommonFormatChartAmount(i_chart.i_data[0].low[v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            level2_inner_panel.children[v].appendChild( low_dl );

            // close
            var close_dl_left = "calc(50% + (" + i_chart.i_design.value_bar_min_width + " * 0.6))";
            var close_dl_top = "calc(" + ((max_scale_value - i_chart.i_data[0].close[v]) / total_range) * level2_inner_panel.clientHeight + "px - (" + close_dl_height + " / 2))";

            var close_dl = document.createElement("div");
            var close_dl_style = document.createAttribute("style");
            close_dl_style.value = "position: absolute; width: " + close_dl_width + "; height: " + close_dl_height + "; left: " + close_dl_left + "; top: " + close_dl_top + "; text-align: center; line-height: " + close_dl_height + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; font-size: " + i_chart.i_design.datalabel_font_size + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
            close_dl.setAttributeNode( close_dl_style );
            var close_dl_title = document.createAttribute("title");
            close_dl_title.value = "close: " + jsChartCommonFormatChartAmount(i_chart.i_data[0].close[v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            close_dl.setAttributeNode( close_dl_title );
            close_dl.innerText = jsChartCommonFormatChartAmount(i_chart.i_data[0].close[v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            level2_inner_panel.children[v].appendChild( close_dl );
        }
    }

    return true;
}
// draw the ohlc bars
function jsChartOHLCDrawOHLCBars(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    var total_range = Math.abs(max_scale_value - (min_scale_value));
    var tick_multiplier = 2.0;
    for (var v = 0; v < i_chart.i_labels.length; v++) {

        // The y-axis on an OHLC Chart is used for the price scale
        // The x-axis is the timescale.
        // On each single time period, an OHLC Chart plots a symbol that represents two ranges:
        //   - the highest and lowest prices traded, and
        //   - also the opening and closing price on that single time period (for example in a day).
        // On the range symbol, the high and low price ranges are represented by the length of the main vertical line.
        // The open and close prices are represented by the vertical positioning of tick-marks that appear:
        //   - on the left (representing the open price) and
        //   - on right (representing the close price) sides of the high-low vertical line.
        // Colour can be assigned to each OHLC Chart symbol, to distinguish whether the market is:
        //   - "bullish" (the closing price is higher than it opened) or
        //   - "bearish" (the closing price is lower than it opened)

        // draw vertical line
        var line_width = i_chart.i_design.value_line_thickness;
        var line_height = (Math.abs(i_chart.i_data[0].high[v] - (i_chart.i_data[0].low[v])) / total_range) * level2_inner_panel.clientHeight + "px";
        var line_left = "calc(50% - (" + line_width + " / 2))";
        var line_top = ((max_scale_value - i_chart.i_data[0].high[v]) / total_range) * level2_inner_panel.clientHeight + "px";

        // "bullish" (the closing price is higher than it opened) or
        if (i_chart.i_data[0].close[v] > i_chart.i_data[0].open[v]) {
            var line_bg_color = i_chart.i_design.color_palette[0];
        // "bearish" (the closing price is lower than it opened)
        } else {
            var line_bg_color = i_chart.i_design.color_palette[1];
        }

        var elem_title = i_chart.i_labels[v] + "\nO: " + roundNumber(i_chart.i_data[0].open[v], 2) + "\nH: " + roundNumber(i_chart.i_data[0].high[v], 2) + "\nL: " + roundNumber(i_chart.i_data[0].low[v], 2) + "\nC: " + roundNumber(i_chart.i_data[0].close[v], 2) + "\nMove: " + roundNumber((i_chart.i_data[0].close[v] - i_chart.i_data[0].open[v]), 2);

        var line = document.createElement("div");
        var line_style = document.createAttribute("style");
        line_style.value = "position: absolute; left: " + line_left + "; width: " + line_width + "; top: " + line_top + "; height: " + line_height + "; background-color: " + line_bg_color + ";";
        line.setAttributeNode( line_style );
        var line_title = document.createAttribute("title");
        line_title.value = elem_title;
        line.setAttributeNode( line_title );
        level2_inner_panel.children[v].appendChild( line );

        // draw opening price tick
        var open_tick_width = "calc(" + i_chart.i_design.value_line_thickness + " * " + tick_multiplier + ")";
        var open_tick_height = i_chart.i_design.value_line_thickness;
        var open_tick_left = "calc(50% - (" + open_tick_width + " - (" + i_chart.i_design.value_line_thickness + " / 2)))";
        var open_tick_top = "calc(" + ((max_scale_value - i_chart.i_data[0].open[v]) / total_range) * level2_inner_panel.clientHeight + "px - (" + open_tick_height + " / 2))";

        var open_tick = document.createElement("div");
        var open_tick_style = document.createAttribute("style");
        open_tick_style.value = "position: absolute; left: " + open_tick_left + "; width: " + open_tick_width + "; top: " + open_tick_top + "; height: " + open_tick_height + "; background-color: " + line_bg_color + ";";
        open_tick.setAttributeNode( open_tick_style );
        var open_tick_title = document.createAttribute("title");
        open_tick_title.value = elem_title;
        open_tick.setAttributeNode( open_tick_title );
        level2_inner_panel.children[v].appendChild( open_tick );

        // draw closing price tick
        var close_tick_width = "calc(" + i_chart.i_design.value_line_thickness + " * " + tick_multiplier + ")";
        var close_tick_height = i_chart.i_design.value_line_thickness;
        var close_tick_left = "calc(50% - (" + i_chart.i_design.value_line_thickness + " / 2))";
        var close_tick_top = "calc(" + ((max_scale_value - i_chart.i_data[0].close[v]) / total_range) * level2_inner_panel.clientHeight + "px - (" + close_tick_height + " / 2))";

        var close_tick = document.createElement("div");
        var close_tick_style = document.createAttribute("style");
        close_tick_style.value = "position: absolute; left: " + close_tick_left + "; width: " + close_tick_width + "; top: " + close_tick_top + "; height: " + close_tick_height + "; background-color: " + line_bg_color + ";";
        close_tick.setAttributeNode( close_tick_style );
        var close_tick_title = document.createAttribute("title");
        close_tick_title.value = elem_title;
        close_tick.setAttributeNode( close_tick_title );
        level2_inner_panel.children[v].appendChild( close_tick );

        // draw data labels
        if (i_chart.i_options.showlabels) {

            // open
            var open_dl_width = i_chart.i_design.datalabel_width;
            var open_dl_height = i_chart.i_design.datalabel_height;
            var open_dl_left = "calc(50% + " + (level2_inner_panel.children[v].clientWidth * 0.2) + "px)";
            var open_dl_top = "calc(" + ((max_scale_value - i_chart.i_data[0].open[v]) / total_range) * level2_inner_panel.clientHeight + "px - (" + open_dl_height + " / 2))";

            var open_dl = document.createElement("div");
            var open_dl_style = document.createAttribute("style");
            open_dl_style.value = "position: absolute; width: " + open_dl_width + "; height: " + open_dl_height + "; left: " + open_dl_left + "; top: " + open_dl_top + "; text-align: center; line-height: " + open_dl_height + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; font-size: " + i_chart.i_design.datalabel_font_size + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
            open_dl.setAttributeNode( open_dl_style );
            var open_dl_title = document.createAttribute("title");
            open_dl_title.value = "Open: " + jsChartCommonFormatChartAmount(i_chart.i_data[0].open[v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            open_dl.setAttributeNode( open_dl_title );
            open_dl.innerText = jsChartCommonFormatChartAmount(i_chart.i_data[0].open[v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            level2_inner_panel.children[v].appendChild( open_dl );

            // high
            var high_dl_width = i_chart.i_design.datalabel_width;
            var high_dl_height = i_chart.i_design.datalabel_height;
            var high_dl_left = "calc(50% + " + (level2_inner_panel.children[v].clientWidth * 0.2) + "px)";
            var high_dl_top = "calc(" + ((max_scale_value - i_chart.i_data[0].high[v]) / total_range) * level2_inner_panel.clientHeight + "px - (" + high_dl_height + " / 2))";

            var high_dl = document.createElement("div");
            var high_dl_style = document.createAttribute("style");
            high_dl_style.value = "position: absolute; width: " + high_dl_width + "; height: " + high_dl_height + "; left: " + high_dl_left + "; top: " + high_dl_top + "; text-align: center; line-height: " + high_dl_height + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; font-size: " + i_chart.i_design.datalabel_font_size + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
            high_dl.setAttributeNode( high_dl_style );
            var high_dl_title = document.createAttribute("title");
            high_dl_title.value = "high: " + jsChartCommonFormatChartAmount(i_chart.i_data[0].high[v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            high_dl.setAttributeNode( high_dl_title );
            high_dl.innerText = jsChartCommonFormatChartAmount(i_chart.i_data[0].high[v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            level2_inner_panel.children[v].appendChild( high_dl );

            // low
            var low_dl_width = i_chart.i_design.datalabel_width;
            var low_dl_height = i_chart.i_design.datalabel_height;
            var low_dl_left = "calc(50% + " + (level2_inner_panel.children[v].clientWidth * 0.2) + "px)";
            var low_dl_top = "calc(" + ((max_scale_value - i_chart.i_data[0].low[v]) / total_range) * level2_inner_panel.clientHeight + "px - (" + low_dl_height + " / 2))";

            var low_dl = document.createElement("div");
            var low_dl_style = document.createAttribute("style");
            low_dl_style.value = "position: absolute; width: " + low_dl_width + "; height: " + low_dl_height + "; left: " + low_dl_left + "; top: " + low_dl_top + "; text-align: center; line-height: " + low_dl_height + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; font-size: " + i_chart.i_design.datalabel_font_size + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
            low_dl.setAttributeNode( low_dl_style );
            var low_dl_title = document.createAttribute("title");
            low_dl_title.value = "low: " + jsChartCommonFormatChartAmount(i_chart.i_data[0].low[v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            low_dl.setAttributeNode( low_dl_title );
            low_dl.innerText = jsChartCommonFormatChartAmount(i_chart.i_data[0].low[v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            level2_inner_panel.children[v].appendChild( low_dl );

            // close
            var close_dl_width = i_chart.i_design.datalabel_width;
            var close_dl_height = i_chart.i_design.datalabel_height;
            var close_dl_left = "calc(50% + " + (level2_inner_panel.children[v].clientWidth * 0.2) + "px)";
            var close_dl_top = "calc(" + ((max_scale_value - i_chart.i_data[0].close[v]) / total_range) * level2_inner_panel.clientHeight + "px - (" + close_dl_height + " / 2))";

            var close_dl = document.createElement("div");
            var close_dl_style = document.createAttribute("style");
            close_dl_style.value = "position: absolute; width: " + close_dl_width + "; height: " + close_dl_height + "; left: " + close_dl_left + "; top: " + close_dl_top + "; text-align: center; line-height: " + close_dl_height + "; font-family: " + i_chart.i_design.datalabel_font_family + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; font-size: " + i_chart.i_design.datalabel_font_size + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + ";";
            close_dl.setAttributeNode( close_dl_style );
            var close_dl_title = document.createAttribute("title");
            close_dl_title.value = "close: " + jsChartCommonFormatChartAmount(i_chart.i_data[0].close[v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            close_dl.setAttributeNode( close_dl_title );
            close_dl.innerText = jsChartCommonFormatChartAmount(i_chart.i_data[0].close[v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
            level2_inner_panel.children[v].appendChild( close_dl );
        }

    }

    return true;
}
// draw stock series containers
function jsChartStockDrawSeriesContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    for (var v = 0; v < i_chart.i_labels.length; v++) {

        if (i_chart.data_type !== "categorical") {
            var elem_title = i_chart.i_labels[v] + "\nO: " + roundNumber(i_chart.i_data[0].open[v], 2) + "\nH: " + roundNumber(i_chart.i_data[0].high[v], 2) + "\nL: " + roundNumber(i_chart.i_data[0].low[v], 2) + "\nC: " + roundNumber(i_chart.i_data[0].close[v], 2) + "\nMove: " + roundNumber((i_chart.i_data[0].close[v] - i_chart.i_data[0].open[v]), 2);
        } else {
            var elem_title = i_chart.i_labels[v] + "\nClose: " + roundNumber(i_chart.i_data[0][v], 2);
        }

        var series_value_container = document.createElement("div");
        var series_value_container_class = document.createAttribute("class");
        series_value_container_class.value = "js-chart-stock-series-value-container";
        series_value_container.setAttributeNode( series_value_container_class );
        var series_value_container_title = document.createAttribute("title");
        series_value_container_title.value = elem_title;
        series_value_container.setAttributeNode( series_value_container_title );
        var series_value_container_style = document.createAttribute("style");
        series_value_container_style.value = "min-width: " + i_chart.i_design.value_bar_min_width + "; margin: 0px calc(" + i_chart.i_design.value_bar_series_margin + " / 2) 0pc calc(" + i_chart.i_design.value_bar_series_margin + " / 2);";
        series_value_container.setAttributeNode( series_value_container_style );
        series_value_container.addEventListener("mouseover", function () {
            this.style.backgroundColor = i_chart.i_design.value_bar_hover_bg_color;
        }, false);
        series_value_container.addEventListener("mouseout", function () {
            this.style.backgroundColor = "";
        }, false);
        level2_inner_panel.appendChild( series_value_container );

    }

    return true;
}
// draw level0 containers
function jsChartStockDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use) {

    // draw level0 inner panel
    var level0_inner_panel = document.createElement("div");
    var level0_inner_panel_class = document.createAttribute("class");
    level0_inner_panel_class.value = "js-chart-stock-level0-inner-panel";
    level0_inner_panel.setAttributeNode( level0_inner_panel_class );
    base_level2_inner_panel.appendChild( level0_inner_panel );

    // draw y-axis container
    var y_axis_container = document.createElement("div");
    var y_axis_container_class = document.createAttribute("class");
    y_axis_container_class.value = "js-chart-stock-y-axis-container";
    y_axis_container.setAttributeNode( y_axis_container_class );
    level0_inner_panel.appendChild( y_axis_container );

    // draw y-axis title container
    var y_axis_title_container = document.createElement("div");
    var y_axis_title_container_class = document.createAttribute("class");
    y_axis_title_container_class.value = "js-chart-stock-y-axis-title-container";
    y_axis_title_container.setAttributeNode( y_axis_title_container_class );
    var y_axis_title_container_title = document.createAttribute("title");
    y_axis_title_container_title.value = i_chart.i_options.ytitle;
    y_axis_title_container.setAttributeNode( y_axis_title_container_title );
    y_axis_title_container.innerText = i_chart.i_options.ytitle;
    y_axis_container.appendChild( y_axis_title_container );

    // draw y-axis scale label container
    var y_axis_scale_label_container = document.createElement("div");
    var y_axis_scale_label_container_class = document.createAttribute("class");
    y_axis_scale_label_container_class.value = "js-chart-stock-y-axis-scale-label-container";
    y_axis_scale_label_container.setAttributeNode( y_axis_scale_label_container_class );
    y_axis_container.appendChild( y_axis_scale_label_container );

    var max_loop = 10;
    for (var tt = max_scale_value; tt > min_scale_value; tt=(tt + step_value)) {

        var y_axis_scale_label_block = document.createElement("div");
        var y_axis_scale_label_block_class = document.createAttribute("class");
        y_axis_scale_label_block_class.value = "js-chart-stock-y-axis-scale-label-block";
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

    // draw the last y-axis scale label block
    var last_y_axis_scale_label_block = document.createElement("div");
    var last_y_axis_scale_label_block_class = document.createAttribute("class");
    last_y_axis_scale_label_block_class.value = "js-chart-stock-y-axis-scale-label-block-last";
    last_y_axis_scale_label_block.setAttributeNode( last_y_axis_scale_label_block_class );
    last_y_axis_scale_label_block.innerText = roundNumber(min_scale_value, 2);
    y_axis_scale_label_container.appendChild( last_y_axis_scale_label_block );

    // draw y-axis scale container
    var y_axis_scale_container = document.createElement("div");
    var y_axis_scale_container_class = document.createAttribute("class");
    y_axis_scale_container_class.value = "js-chart-stock-y-axis-scale-container";
    y_axis_scale_container.setAttributeNode( y_axis_scale_container_class );
    y_axis_container.appendChild( y_axis_scale_container );

    for (var tt = 0; tt < 10; tt++) {

        var y_axis_scale_block = document.createElement("div");
        var y_axis_scale_block_class = document.createAttribute("class");
        y_axis_scale_block_class.value = "js-chart-stock-y-axis-scale-block";
        y_axis_scale_block.setAttributeNode( y_axis_scale_block_class );
        var y_axis_scale_block_style = document.createAttribute("style");
        y_axis_scale_block_style.value = "border-right: " + i_chart.i_design.scale_border + "; border-top: " + i_chart.i_design.scale_border + ";";
        if (tt == 9) {
            y_axis_scale_block_style.value += "border-bottom: " + i_chart.i_design.scale_border + ";";
        }
        y_axis_scale_block.setAttributeNode( y_axis_scale_block_style );
        y_axis_scale_container.appendChild( y_axis_scale_block );

    }

    // draw level1 container
    var level1_inner_panel = document.createElement("div");
    var level1_inner_panel_class = document.createAttribute("class");
    level1_inner_panel_class.value = "js-chart-stock-level1-inner-panel";
    level1_inner_panel.setAttributeNode( level1_inner_panel_class );
    var level1_inner_panel_style = document.createAttribute("style");
    level1_inner_panel_style.value = "scrollbar-color: " + i_chart.i_design.canvas_scrollbar_color + ";";
    level1_inner_panel.setAttributeNode( level1_inner_panel_style );
    level0_inner_panel.appendChild( level1_inner_panel );

    // draw level2 inner panel
    var level2_inner_panel = document.createElement("div");
    var level2_inner_panel_class = document.createAttribute("class");
    level2_inner_panel_class.value = "js-chart-stock-level2-inner-panel";
    level2_inner_panel.setAttributeNode( level2_inner_panel_class );
    level1_inner_panel.appendChild( level2_inner_panel );

    var level2_inner_panel_style_list = [];
    var zero_line = (Math.abs(max_scale_value) / (Math.abs(min_scale_value) + Math.abs(max_scale_value)));
    if (i_chart.i_options.showgridlines) {
        level2_inner_panel_style_list.push( "repeating-linear-gradient(to top, " + i_chart.i_design.grid_line_color + ", " + i_chart.i_design.grid_line_color + " calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(" + i_chart.i_design.grid_line_thickness + " / 2), transparent calc(10% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " calc(10% - calc(" + i_chart.i_design.grid_line_thickness + " / 2)), " + i_chart.i_design.grid_line_color + " 10%)" );
    }
    if ((i_chart.i_options.showzeroline) && ((max_scale_value > 0) && (min_scale_value < 0))) {
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
    x_axis_legend_container_class.value = "js-chart-stock-x-axis-legend-container";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_class );
    level1_inner_panel.appendChild( x_axis_legend_container );

    for (var tt = 0; tt < i_chart.i_labels.length; tt++) {

        if (i_chart.data_type != "categorical") {
            var elem_title = i_chart.i_labels[tt] + "\nO: " + roundNumber(i_chart.i_data[0].open[tt], 2) + "\nH: " + roundNumber(i_chart.i_data[0].high[tt], 2) + "\nL: " + roundNumber(i_chart.i_data[0].low[tt], 2) + "\nC: " + roundNumber(i_chart.i_data[0].close[tt], 2) + "\nMove: " + roundNumber((i_chart.i_data[0].close[tt] - i_chart.i_data[0].open[tt]), 2);
        } else {
            var elem_title = i_chart.i_labels[tt] + "\nClose: " + roundNumber(i_chart.i_data[0][tt], 2);
        }

        var render_label = true;
        if (i_chart.i_labels.length > 40) {
            if ((tt % 5) != 0) {
                render_label = false;
            }
        }

        var x_axis_legend_block = document.createElement("div");
        var x_axis_legend_block_class = document.createAttribute("class");
        x_axis_legend_block_class.value = "js-chart-stock-x-axis-legend-block";
        x_axis_legend_block.setAttributeNode( x_axis_legend_block_class );
        var x_axis_legend_block_title = document.createAttribute("title");
        x_axis_legend_block_title.value = elem_title;
        x_axis_legend_block.setAttributeNode( x_axis_legend_block_title );
        var x_axis_legend_block_style = document.createAttribute("style");
        x_axis_legend_block_style.value = "min-width: " + i_chart.i_design.value_bar_min_width + "; margin: 0px calc(" + i_chart.i_design.value_bar_series_margin + " / 2) 0px calc(" + i_chart.i_design.value_bar_series_margin + " / 2);";
        x_axis_legend_block.setAttributeNode( x_axis_legend_block_style );
        if (render_label) {
            x_axis_legend_block.innerText = i_chart.i_labels[tt];
        }
        x_axis_legend_container.appendChild( x_axis_legend_block );
    }

    // draw infobox container
    var infobox_container = document.createElement("div");
    var infobox_container_class = document.createAttribute("class");
    infobox_container_class.value = "js-chart-stock-infobox-container";
    infobox_container.setAttributeNode( infobox_container_class );
    level0_inner_panel.appendChild( infobox_container );

    // draw x-axis container
    var x_axis_container = document.createElement("div");
    var x_axis_container_class = document.createAttribute("class");
    x_axis_container_class.value = "js-chart-stock-x-axis-container";
    x_axis_container.setAttributeNode( x_axis_container_class );
    var x_axis_container_title = document.createAttribute("title");
    x_axis_container_title.value = i_chart.i_options.xtitle;
    x_axis_container.setAttributeNode( x_axis_container_title );
    x_axis_container.innerText = i_chart.i_options.xtitle;
    level0_inner_panel.appendChild( x_axis_container );

    return [ level2_inner_panel, y_axis_container, x_axis_legend_container ];
}
// draw function for a kagi chart
function jsChartDrawKagiChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["kagi"].data_type, ["Yang line", "Yin line"]);
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
        var calculate_scale = [ this_scalemin, this_scalemax, ((Math.abs(this_scalemax) - Math.abs(this_scalemin)) / 10), 10, 2 ];
    } else {
        // var calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, null, null, 10);
        var this_scalemin = Math.floor(i_chart.i_totals[0].min_value);
        var this_scalemax = Math.ceil(i_chart.i_totals[0].max_value);
        var calculate_scale = [ this_scalemin, this_scalemax, ((Math.abs(this_scalemax) - Math.abs(this_scalemin)) / 10), 10, 2 ];
    }

    var min_scale_value = calculate_scale[0];
    var max_scale_value = calculate_scale[1];
    var step_value = calculate_scale[2];
    var total_steps = calculate_scale[3];
    var num_of_decimals_to_use = calculate_scale[4];

    // draw level0 containers
    var draw_level0_containers = jsChartStockDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use);
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_container = draw_level0_containers[1];
    var x_axis_legend_container = draw_level0_containers[2];

    // draw stock series containers
    var draw_series_containers = jsChartStockDrawSeriesContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use);

    // resize y-axis container
    var y_axis_container_style = document.createAttribute("style");
    y_axis_container_style.value = "height: " + level2_inner_panel.clientHeight + "px";
    y_axis_container.setAttributeNode( y_axis_container_style );

    // resize x-axis legend container
    var x_axis_legend_container_style = document.createAttribute("style");
    x_axis_legend_container.value = "width: " + level2_inner_panel.scrollWidth + "px";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_style );

    return true;
}
// draw function for a candlestick chart
function jsChartDrawCandlestickChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["candlestick"].data_type, i_chart.i_labels);
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
        var calculate_scale = [ this_scalemin, this_scalemax, ((Math.abs(this_scalemax) - Math.abs(this_scalemin)) / 10), 10, 2 ];
    } else {
        // var calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, null, null, 10);
        var this_scalemin = Math.floor(i_chart.i_totals[0].min_value);
        var this_scalemax = Math.ceil(i_chart.i_totals[0].max_value);
        var calculate_scale = [ this_scalemin, this_scalemax, ((Math.abs(this_scalemax) - Math.abs(this_scalemin)) / 10), 10, 2 ];
    }

    var min_scale_value = calculate_scale[0];
    var max_scale_value = calculate_scale[1];
    var step_value = calculate_scale[2];
    var total_steps = calculate_scale[3];
    var num_of_decimals_to_use = calculate_scale[4];

    // draw level0 containers
    var draw_level0_containers = jsChartStockDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use);
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_container = draw_level0_containers[1];
    var x_axis_legend_container = draw_level0_containers[2];

    // draw stock series containers
    var draw_series_containers = jsChartStockDrawSeriesContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use);

    // draw the ohlc bars
    var draw_ohlc_bars = jsChartOHLCDrawCandlestickBars(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use);

    // resize y-axis container
    var y_axis_container_style = document.createAttribute("style");
    y_axis_container_style.value = "height: " + level2_inner_panel.clientHeight + "px";
    y_axis_container.setAttributeNode( y_axis_container_style );

    // resize x-axis legend container
    var x_axis_legend_container_style = document.createAttribute("style");
    x_axis_legend_container.value = "width: " + level2_inner_panel.scrollWidth + "px";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_style );

    return true;
}
// draw function for a open-high-low-close (OHLC) chart
function jsChartDrawOHLCChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["ohlc"].data_type, i_chart.i_labels);
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
        var calculate_scale = [ this_scalemin, this_scalemax, ((Math.abs(this_scalemax) - Math.abs(this_scalemin)) / 10), 10, 2 ];
    } else {
        // var calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, i_chart.i_totals, null, null, 10);
        var this_scalemin = Math.floor(i_chart.i_totals[0].min_value);
        var this_scalemax = Math.ceil(i_chart.i_totals[0].max_value);
        var calculate_scale = [ this_scalemin, this_scalemax, ((Math.abs(this_scalemax) - Math.abs(this_scalemin)) / 10), 10, 2 ];
    }

    var min_scale_value = calculate_scale[0];
    var max_scale_value = calculate_scale[1];
    var step_value = calculate_scale[2];
    var total_steps = calculate_scale[3];
    var num_of_decimals_to_use = calculate_scale[4];

    // draw level0 containers
    var draw_level0_containers = jsChartStockDrawLevel0Containers(base_level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use);
    var level2_inner_panel = draw_level0_containers[0];
    var y_axis_container = draw_level0_containers[1];
    var x_axis_legend_container = draw_level0_containers[2];

    // draw stock series containers
    var draw_series_containers = jsChartStockDrawSeriesContainers(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use);

    // draw the ohlc bars
    var draw_ohlc_bars = jsChartOHLCDrawOHLCBars(level2_inner_panel, i_chart, min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use);

    // resize y-axis container
    var y_axis_container_style = document.createAttribute("style");
    y_axis_container_style.value = "height: " + level2_inner_panel.clientHeight + "px";
    y_axis_container.setAttributeNode( y_axis_container_style );

    // resize x-axis legend container
    var x_axis_legend_container_style = document.createAttribute("style");
    x_axis_legend_container.value = "width: " + level2_inner_panel.scrollWidth + "px";
    x_axis_legend_container.setAttributeNode( x_axis_legend_container_style );

    return true;
}