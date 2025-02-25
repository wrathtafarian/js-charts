// create a label for the venn text panel
function jsChartVennDiagramCreateVennPanelLabel( label_text, i_design, is_sub_label = false) {

    if (is_sub_label) {
        var label_style = "margin: auto 0; text-align: center; font-family: " + i_design.venn_sub_font_family + "; font-size: " + i_design.venn_sub_font_size + "; font-weight: " + i_design.venn_sub_font_weight + "; color: " +i_design.venn_sub_text_color + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
    } else {
        var label_style = "margin: auto 0; text-align: center; font-family: " + i_design.venn_font_family + "; font-size: " + i_design.venn_font_size + "; font-weight: " + i_design.venn_font_weight + "; color: " +i_design.venn_text_color + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;"
    }

    var new_panel_label = document.createElement("div");
    var new_panel_label_style = document.createAttribute("style");
    new_panel_label_style.value = label_style;
    new_panel_label.setAttributeNode( new_panel_label_style );
    var new_panel_label_title = document.createAttribute("title");
    new_panel_label_title.value = label_text;
    new_panel_label.setAttributeNode( new_panel_label_title );
    new_panel_label.innerText = label_text;

    return new_panel_label;
}
// create a text panel for the venn
function jsChartVennDiagramCreateVennPanel(top_panel_left, top_panel_top, top_panel_width, top_panel_height, num_of_columns = 2) {

    var class_number_of_columns = "js-chart-venn-diagram-" + num_of_columns + "column-panel";

    var new_panel = document.createElement("div");
    var new_panel_style = document.createAttribute("style");
    new_panel_style.value = "position: absolute; width: " + top_panel_width + "; height: " + top_panel_height + "; top: " + top_panel_top + "; left: " + top_panel_left + ";";
    new_panel.setAttributeNode( new_panel_style );
    var new_panel_class = document.createAttribute("class");
    new_panel_class.value = class_number_of_columns
    new_panel.setAttributeNode( new_panel_class );

    return new_panel;
}
// draw a 3 circle venn diagram
function jsChartVennDiagramDraw3VennDiagram(level0_inner_panel, i_chart, common_set) {

    var cell_width = level0_inner_panel.clientWidth;
    var cell_height = level0_inner_panel.clientHeight;
    var multiplier = 0.70;

    if (cell_width < cell_height) {
        var square_width = (cell_width - 10); // 5px top margin, 5px bottom margin
    } else {
        var square_width = (cell_height - 10); // 5px top margin, 5px bottom margin
    }

    var circle_diameter = (square_width * multiplier) + "px";
    square_width += "px";

    // calculate common array elements
    var top_right_common = jsChartCommonReturnCommonArrayElements( [ i_chart.i_sets[0], i_chart.i_sets[1] ] );
    var bottom_right_common = jsChartCommonReturnCommonArrayElements( [ i_chart.i_sets[1], i_chart.i_sets[2] ] );
    var middle_left_common = jsChartCommonReturnCommonArrayElements( [ i_chart.i_sets[2], i_chart.i_sets[0] ] );

    // first draw a square container
    var sq_container = document.createElement("div");
    var sq_container_style = document.createAttribute("style");
    sq_container_style.value = "position: absolute; width: " + square_width + "; height: " + square_width + "; top: calc(50% - (" + square_width + " / 2)); left: calc(50% - (" + square_width + " / 2));";
    sq_container.setAttributeNode( sq_container_style );
    level0_inner_panel.appendChild( sq_container );

    // first venn -- top
    var venn1 = document.createElement("div");
    var venn1_style = document.createAttribute("style");
    venn1_style.value = "position: absolute; width: " + circle_diameter + "; height: " + circle_diameter + "; top: 0px; left: 0px; border-radius: 50%; background-color: " + i_chart.i_design.color_palette[0] + "; opacity: " + i_chart.i_design.venn_opacity + ";";
    venn1.setAttributeNode( venn1_style );
    var venn1_title = document.createAttribute("title");
    venn1_title.value = i_chart.i_titles[0];
    venn1.setAttributeNode( venn1_title );
    sq_container.appendChild( venn1 );

    // top panel
    var top_panel_top = "7.5%";
    var top_panel_left = "15%;";
    var top_panel_width = "calc(" + circle_diameter + " * 0.3)";
    var top_panel_height = "calc(" + circle_diameter + " * 0.3)";
    if (i_chart.i_sets[0].length < 6) {
        var num_of_columns = 1;
    } else {
        var num_of_columns = 2;
    }
    var top_panel = jsChartVennDiagramCreateVennPanel(top_panel_left, top_panel_top, top_panel_width, top_panel_height, num_of_columns);
    sq_container.appendChild( top_panel );

    for (var tt = 0; tt < i_chart.i_sets[0].length; tt++) {
        if ((common_set.indexOf( i_chart.i_sets[0][tt] ) == -1) && (top_right_common.indexOf( i_chart.i_sets[0][tt] ) == -1) && (middle_left_common.indexOf( i_chart.i_sets[0][tt] ) == -1)) {
            var top_panel_label = jsChartVennDiagramCreateVennPanelLabel( i_chart.i_sets[0][tt], i_chart.i_design );
            top_panel.appendChild( top_panel_label );
        }
    }

    // second venn -- right
    var venn2 = document.createElement("div");
    var venn2_style = document.createAttribute("style");
    venn2_style.value = "position: absolute; width: " + circle_diameter + "; height: " + circle_diameter + "; top: calc(50% - (" + circle_diameter + " / 2)); right: 0px; border-radius: 50%; background-color: " + i_chart.i_design.color_palette[1] + "; opacity: " + i_chart.i_design.venn_opacity + ";";
    venn2.setAttributeNode( venn2_style );
    var venn2_title = document.createAttribute("title");
    venn2_title.value = i_chart.i_titles[1];
    venn2.setAttributeNode( venn2_title );  
    sq_container.appendChild( venn2 );

    // right panel
    var right_panel_width = "calc(" + circle_diameter + " * 0.3)";
    var right_panel_height = "calc(" + circle_diameter + " * 0.3)";
    var right_panel_top = "calc(50% - (" + right_panel_height + " / 2))";
    var right_panel_left = "calc(92.5% - " + right_panel_width + ")";
    if (i_chart.i_sets[1].length < 6) {
        var num_of_columns = 1;
    } else {
        var num_of_columns = 2;
    }
    var right_panel = jsChartVennDiagramCreateVennPanel(right_panel_left, right_panel_top, right_panel_width, right_panel_height, num_of_columns);
    sq_container.appendChild( right_panel );

    for (var tt = 0; tt < i_chart.i_sets[1].length; tt++) {
        if ((common_set.indexOf( i_chart.i_sets[1][tt] ) == -1) && (top_right_common.indexOf( i_chart.i_sets[1][tt] ) == -1) && (bottom_right_common.indexOf( i_chart.i_sets[1][tt] ) == -1)) {
            var top_panel_label = jsChartVennDiagramCreateVennPanelLabel( i_chart.i_sets[1][tt], i_chart.i_design );
            right_panel.appendChild( top_panel_label );
        }
    }

    // third venn -- bottom
    var venn3 = document.createElement("div");
    var venn3_style = document.createAttribute("style");
    venn3_style.value = "position: absolute; width: " + circle_diameter + "; height: " + circle_diameter + "; bottom: 0px; left: 0px; border-radius: 50%; background-color: " + i_chart.i_design.color_palette[2] + "; opacity: " + i_chart.i_design.venn_opacity + ";";
    venn3.setAttributeNode( venn3_style );
    var venn3_title = document.createAttribute("title");
    venn3_title.value = i_chart.i_titles[2];
    venn3.setAttributeNode( venn3_title );
    sq_container.appendChild( venn3 );

    // bottom panel
    var bottom_panel_width = "calc(" + circle_diameter + " * 0.3)";
    var bottom_panel_height = "calc(" + circle_diameter + " * 0.3)";
    var bottom_panel_top = "calc(92.5% - " + bottom_panel_height + ");";
    var bottom_panel_left = "15%;";
    if (i_chart.i_sets[2].length < 6) {
        var num_of_columns = 1;
    } else {
        var num_of_columns = 2;
    }
    var bottom_panel = jsChartVennDiagramCreateVennPanel(bottom_panel_left, bottom_panel_top, bottom_panel_width, bottom_panel_height, num_of_columns);
    sq_container.appendChild( bottom_panel );

    for (var tt = 0; tt < i_chart.i_sets[2].length; tt++) {
        if ((common_set.indexOf( i_chart.i_sets[2][tt] ) == -1) && (bottom_right_common.indexOf( i_chart.i_sets[2][tt] ) == -1) && (middle_left_common.indexOf( i_chart.i_sets[2][tt] ) == -1)) {
            var top_panel_label = jsChartVennDiagramCreateVennPanelLabel( i_chart.i_sets[2][tt], i_chart.i_design );
            bottom_panel.appendChild( top_panel_label );
        }
    }

    // center panel
    var center_panel_width = "calc(" + circle_diameter + " * 0.3)";
    var center_panel_height = "calc(" + circle_diameter + " * 0.3)";
    var center_panel_top = "calc(50% - (" + center_panel_height + " / 2));";
    var center_panel_left = "calc(45% - (" + center_panel_width + " / 2))"; 
    if (common_set.length < 6) {
        var num_of_columns = 1;
    } else {
        var num_of_columns = 2;
    }
    var center_panel = jsChartVennDiagramCreateVennPanel(center_panel_left, center_panel_top, center_panel_width, center_panel_height, num_of_columns);
    sq_container.appendChild( center_panel );

    for (var tt = 0; tt < common_set.length; tt++) {
        var center_panel_label = jsChartVennDiagramCreateVennPanelLabel( common_set[tt], i_chart.i_design );
        center_panel.appendChild( center_panel_label );
    }

    // top-right sub panel
    var top_right_width = "calc(" + circle_diameter + " * 0.20)";
    var top_right_height = "calc(" + circle_diameter + " * 0.20)";
    var top_right_top = "19%";
    var top_right_left = "calc(57% - (" + top_right_width + " / 2))"; 
    if (top_right_common.length < 6) {
        var num_of_columns = 1;
    } else {
        var num_of_columns = 2;
    }
    var top_right = jsChartVennDiagramCreateVennPanel(top_right_left, top_right_top, top_right_width, top_right_height, num_of_columns);
    sq_container.appendChild( top_right );

    for (var tt = 0; tt < top_right_common.length; tt++) {
        if (common_set.indexOf( top_right_common[tt] ) == -1) {
            var center_panel_label = jsChartVennDiagramCreateVennPanelLabel( top_right_common[tt], i_chart.i_design, true );
            top_right.appendChild( center_panel_label );
        }
    }

    // bottom-right sub panel
    var bottom_right_width = "calc(" + circle_diameter + " * 0.20)";
    var bottom_right_height = "calc(" + circle_diameter + " * 0.20)";
    var bottom_right_top = "calc(100% - (19% + " + bottom_right_height + "))";
    var bottom_right_left = "calc(57% - (" + bottom_right_width + " / 2))"; 
    if (bottom_right_common.length < 6) {
        var num_of_columns = 1;
    } else {
        var num_of_columns = 2;
    }
    var bottom_right = jsChartVennDiagramCreateVennPanel(bottom_right_left, bottom_right_top, bottom_right_width, bottom_right_height, num_of_columns);
    sq_container.appendChild( bottom_right );

    for (var tt = 0; tt < bottom_right_common.length; tt++) {
        if (common_set.indexOf( bottom_right_common[tt] ) == -1) {
            var center_panel_label = jsChartVennDiagramCreateVennPanelLabel( bottom_right_common[tt], i_chart.i_design, true );
            bottom_right.appendChild( center_panel_label );
        }
    }

    // middle-left sub panel
    var middle_left_width = "calc(" + circle_diameter + " * 0.20)";
    var middle_left_height = "calc(" + circle_diameter + " * 0.20)";
    var middle_left_top = "calc(50% - (" + middle_left_height + " / 2))";
    var middle_left_left = "12.5%";
    if (middle_left_common.length < 6) {
        var num_of_columns = 1;
    } else {
        var num_of_columns = 2;
    }
    var middle_left = jsChartVennDiagramCreateVennPanel(middle_left_left, middle_left_top, middle_left_width, middle_left_height, num_of_columns);
    sq_container.appendChild( middle_left );

    for (var tt = 0; tt < middle_left_common.length; tt++) {
        if (common_set.indexOf( middle_left_common[tt] ) == -1) {
            var center_panel_label = jsChartVennDiagramCreateVennPanelLabel( middle_left_common[tt], i_chart.i_design, true );
            middle_left.appendChild( center_panel_label );
        }
    }

    return true;
}
/*
// draw a 3 circle venn diagram
function jsChartVennDiagramDraw3VennDiagram(level0_inner_panel, i_chart, common_set) {

    var cell_width = level0_inner_panel.clientWidth;
    var cell_height = level0_inner_panel.clientHeight;
    var multiplier = 0.70;

    if (cell_width < cell_height) {
        var square_width = (cell_width - 10); // 5px top margin, 5px bottom margin
    } else {
        var square_width = (cell_height - 10); // 5px top margin, 5px bottom margin
    }

    var circle_diameter = (square_width * multiplier) + "px";
    square_width += "px";

    // first draw a square container
    var sq_container = document.createElement("div");
    var sq_container_style = document.createAttribute("style");
    sq_container_style.value = "position: absolute; width: " + square_width + "; height: " + square_width + "; top: calc(50% - (" + square_width + " / 2)); left: calc(50% - (" + square_width + " / 2));";
    sq_container.setAttributeNode( sq_container_style );
    level0_inner_panel.appendChild( sq_container );

    // first venn -- top
    var venn1 = document.createElement("div");
    var venn1_style = document.createAttribute("style");
    venn1_style.value = "position: absolute; width: " + circle_diameter + "; height: " + circle_diameter + "; top: 0px; left: 0px; border-radius: 50%; background-color: " + i_chart.i_design.color_palette[0] + "; opacity: 70%;";
    venn1.setAttributeNode( venn1_style );
    sq_container.appendChild( venn1 );

    // top panel
    var top_panel = document.createElement("div");
    var top_panel_style = document.createAttribute("style");
    top_panel_style.value = "position: absolute; width: calc(" + circle_diameter + " * 0.3); height: calc(" + circle_diameter + " * 0.3); top: 10%; left: 20%;";
    top_panel.setAttributeNode( top_panel_style );
    var top_panel_class = document.createAttribute("class");
    top_panel_class.value = "js-chart-venn-diagram-2column-panel";
    top_panel.setAttributeNode( top_panel_class );
    venn1.appendChild( top_panel );

    for (var tt = 0; tt < i_chart.i_sets[0].length; tt++) {
        if (common_set.indexOf( i_chart.i_sets[0][tt] ) == -1) {

            var top_panel_block = document.createElement("div");
            var top_panel_block_style = document.createAttribute("style");
            top_panel_block_style.value = "margin: auto 0; text-align: center; font-family: " + i_chart.i_design.venn_font_family + "; font-size: " + i_chart.i_design.venn_font_size + "; font-weight: " + i_chart.i_design.venn_font_weight + "; color: " +i_chart.i_design.venn_text_color + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
            top_panel_block.setAttributeNode( top_panel_block_style );
            top_panel_block.innerText = i_chart.i_sets[0][tt];
            top_panel.appendChild( top_panel_block );

        }
    }

    // second venn -- right
    var venn2 = document.createElement("div");
    var venn2_style = document.createAttribute("style");
    venn2_style.value = "position: absolute; width: " + circle_diameter + "; height: " + circle_diameter + "; top: calc(50% - (" + circle_diameter + " / 2)); right: 0px; border-radius: 50%; background-color: " + i_chart.i_design.color_palette[1] + "; opacity: 70%;";
    venn2.setAttributeNode( venn2_style );
    sq_container.appendChild( venn2 );

    // right panel
    var right_panel = document.createElement("div");
    var right_panel_style = document.createAttribute("style");
    right_panel_style.value = "position: absolute; width: calc(" + circle_diameter + " * 0.3); height: calc(" + circle_diameter + " * 0.3); top: calc(50% - ((" + circle_diameter + " * 0.3) / 2)); right: 10%;";
    right_panel.setAttributeNode( right_panel_style );
    var right_panel_class = document.createAttribute("class");
    right_panel_class.value = "js-chart-venn-diagram-2column-panel";
    right_panel.setAttributeNode( right_panel_class );
    venn2.appendChild( right_panel );

    for (var tt = 0; tt < i_chart.i_sets[1].length; tt++) {

        var right_panel_block = document.createElement("div");
        var right_panel_block_style = document.createAttribute("style");
        right_panel_block_style.value = "margin: auto 0; text-align: center; font-family: " + i_chart.i_design.venn_font_family + "; font-size: " + i_chart.i_design.venn_font_size + "; font-weight: " + i_chart.i_design.venn_font_weight + "; color: " +i_chart.i_design.venn_text_color + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
        right_panel_block.setAttributeNode( right_panel_block_style );
        right_panel_block.innerText = i_chart.i_sets[1][tt];
        right_panel.appendChild( right_panel_block );

    }

    // third venn -- bottom
    var venn3 = document.createElement("div");
    var venn3_style = document.createAttribute("style");
    venn3_style.value = "position: absolute; width: " + circle_diameter + "; height: " + circle_diameter + "; bottom: 0px; left: 0px; border-radius: 50%; background-color: " + i_chart.i_design.color_palette[2] + "; opacity: 70%;";
    venn3.setAttributeNode( venn3_style );
    sq_container.appendChild( venn3 );

    // bottom panel
    var bottom_panel = document.createElement("div");
    var bottom_panel_style = document.createAttribute("style");
    bottom_panel_style.value = "position: absolute; width: calc(" + circle_diameter + " * 0.3); height: calc(" + circle_diameter + " * 0.3); bottom: 10%; left: 20%;";
    bottom_panel.setAttributeNode( bottom_panel_style );
    var bottom_panel_class = document.createAttribute("class");
    bottom_panel_class.value = "js-chart-venn-diagram-2column-panel";
    bottom_panel.setAttributeNode( bottom_panel_class );
    venn3.appendChild( bottom_panel );

    for (var tt = 0; tt < i_chart.i_sets[2].length; tt++) {

        var left_panel_block = document.createElement("div");
        var left_panel_block_style = document.createAttribute("style");
        left_panel_block_style.value = "margin: auto 0; text-align: center; font-family: " + i_chart.i_design.venn_font_family + "; font-size: " + i_chart.i_design.venn_font_size + "; font-weight: " + i_chart.i_design.venn_font_weight + "; color: " +i_chart.i_design.venn_text_color + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
        left_panel_block.setAttributeNode( left_panel_block_style );
        left_panel_block.innerText = i_chart.i_sets[2][tt];
        bottom_panel.appendChild( left_panel_block );

    }

    // center panel
    var center_panel = document.createElement("div");
    var center_panel_style = document.createAttribute("style");
    center_panel_style.value = "position: absolute; width: calc(" + circle_diameter + " * 0.3); height: calc(" + circle_diameter + " * 0.3); top: calc(50% - ((" + circle_diameter + " * 0.3) / 2)); left: calc(55% - ((" + circle_diameter + " * 0.3)));";
    center_panel.setAttributeNode( center_panel_style );
    var center_panel_class = document.createAttribute("class");
    center_panel_class.value = "js-chart-venn-diagram-1column-panel";
    center_panel.setAttributeNode( center_panel_class );
    sq_container.appendChild( center_panel );

    for (var tt = 0; tt < common_set.length; tt++) {

        var left_panel_block = document.createElement("div");
        var left_panel_block_style = document.createAttribute("style");
        left_panel_block_style.value = "margin: auto 0; text-align: center; font-family: " + i_chart.i_design.venn_font_family + "; font-size: " + i_chart.i_design.venn_font_size + "; font-weight: " + i_chart.i_design.venn_font_weight + "; color: " +i_chart.i_design.venn_text_color + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
        left_panel_block.setAttributeNode( left_panel_block_style );
        left_panel_block.innerText = common_set[tt];
        center_panel.appendChild( left_panel_block );

    }

    return true;
}
*/
// draw a 2 circle venn diagram
function jsChartVennDiagramDraw2VennDiagram(level0_inner_panel, i_chart, common_set) {

    var cell_width = level0_inner_panel.clientWidth;
    var cell_height = level0_inner_panel.clientHeight;
    var multiplier = 0.75;

    if (cell_width < cell_height) {
        var venn_diameter = ((cell_width * multiplier) - 25) + "px"; // allow 25px for the left control panel
    } else {
        var venn_diameter = (cell_height - 20) + "px"; // 10px top margin, 10px bottom margin
    }

    // draw left venn
    var left_venn = document.createElement("div");
    var left_venn_style = document.createAttribute("style");
    left_venn_style.value = "position: absolute; width: " + venn_diameter + "; height: " + venn_diameter + "; top: calc(50% - (" + venn_diameter + " / 2)); left: calc(50% - (" + venn_diameter + " * " + multiplier + ")); border-radius: 50%; background-color: " + i_chart.i_design.color_palette[0] + "; opacity: " + i_chart.i_design.venn_opacity + ";";
    left_venn.setAttributeNode( left_venn_style );
    level0_inner_panel.appendChild( left_venn );

    // draw right venn
    var right_venn = document.createElement("div");
    var right_venn_style = document.createAttribute("style");
    right_venn_style.value = "position: absolute; width: " + venn_diameter + "; height: " + venn_diameter + "; top: calc(50% - (" + venn_diameter + " / 2)); right: calc(50% - (" + venn_diameter + " * " + multiplier + ")); border-radius: 50%; background-color: " + i_chart.i_design.color_palette[1] + "; opacity: " + i_chart.i_design.venn_opacity + ";";
    right_venn.setAttributeNode( right_venn_style );
    level0_inner_panel.appendChild( right_venn );

    // draw left panel
    var left_panel = document.createElement("div");
    var left_panel_style = document.createAttribute("style");
    left_panel_style.value = "position: absolute; overflow-y: hidden; overflow-x: visible; width: calc(" + venn_diameter + " * 0.3); height: calc(" + venn_diameter + " * 0.7); top: calc(50% - ((" + venn_diameter + " * 0.7) / 2)); left: calc(50% - ((" + venn_diameter + " * 0.4) / 0.7)); display: grid; grid-template-columns: 1fr; grid-template-rows: auto;";
    left_panel.setAttributeNode( left_panel_style );
    level0_inner_panel.appendChild( left_panel );

    for (var tt = 0; tt < i_chart.i_sets[0].length; tt++) {
        if (common_set.indexOf( i_chart.i_sets[0][tt] ) == -1) {

            var left_label = document.createElement("div");
            var left_label_style = document.createAttribute("style");
            left_label_style.value = "text-align: center; margin: auto 0; font-family: " + i_chart.i_design.venn_font_family + "; font-size: " + i_chart.i_design.venn_font_size + "; font-weight: " + i_chart.i_design.venn_font_weight + "; color: " + i_chart.i_design.venn_text_color + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
            left_label.setAttributeNode( left_label_style );
            var left_label_title = document.createAttribute("title");
            left_label_title.value = i_chart.i_sets[0][tt];
            left_label.setAttributeNode( left_label_title );
            left_label.innerText = i_chart.i_sets[0][tt];
            left_panel.appendChild( left_label );
        }
    }

    // draw center panel
    var center_panel = document.createElement("div");
    var center_panel_style = document.createAttribute("style");
    center_panel_style.value = "position: absolute; width: calc(" + venn_diameter + " * 0.3); height: calc(" + venn_diameter + " * 0.6); top: calc(50% - ((" + venn_diameter + " * 0.6) / 2)); right: calc(50% - ((" + venn_diameter + " * 0.3) / 2)); display: grid; grid-template-columns: 1fr; grid-template-rows: auto;";
    center_panel.setAttributeNode( center_panel_style );
    level0_inner_panel.appendChild( center_panel );

    for (var tt = 0; tt < common_set.length; tt++) {

        var center_label = document.createElement("div");
        var center_label_style = document.createAttribute("style");
        center_label_style.value = "text-align: center; margin: auto 0; font-family: " + i_chart.i_design.venn_font_family + "; font-size: " + i_chart.i_design.venn_font_size + "; font-weight: " + i_chart.i_design.venn_font_weight + "; color: " + i_chart.i_design.venn_text_color + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
        center_label.setAttributeNode( center_label_style );
        var center_label_title = document.createAttribute("title");
        center_label_title.value = common_set[tt];
        center_label.setAttributeNode( center_label_title );
        center_label.innerText = common_set[tt];
        center_panel.appendChild( center_label );

    }

    // draw right panel
    var right_panel = document.createElement("div");
    var right_panel_style = document.createAttribute("style");
    right_panel_style.value = "position: absolute; width: calc(" + venn_diameter + " * 0.3); height: calc(" + venn_diameter + " * 0.7); top: calc(50% - ((" + venn_diameter + " * 0.7) / 2)); right: calc(50% - ((" + venn_diameter + " * 0.4) / 0.7)); display: grid; grid-template-columns: 1fr; grid-template-rows: auto;";
    right_panel.setAttributeNode( right_panel_style );
    level0_inner_panel.appendChild( right_panel );

    for (var tt = 0; tt < i_chart.i_sets[1].length; tt++) {
        if (common_set.indexOf( i_chart.i_sets[1][tt] ) == -1) {

            var right_label = document.createElement("div");
            var right_label_style = document.createAttribute("style");
            right_label_style.value = "text-align: center; margin: auto 0; font-family: " + i_chart.i_design.venn_font_family + "; font-size: " + i_chart.i_design.venn_font_size + "; font-weight: " + i_chart.i_design.venn_font_weight + "; color: " + i_chart.i_design.venn_text_color + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
            right_label.setAttributeNode( right_label_style );
            var right_label_title = document.createAttribute("title");
            right_label_title.value = i_chart.i_sets[1][tt];
            right_label.setAttributeNode( right_label_title );
            right_label.innerText = i_chart.i_sets[1][tt];
            right_panel.appendChild( right_label );

        }
    }

    return true;
}
// draw level 0 containers
function jsChartVennDiagramDrawLevel0Containers(base_level2_inner_panel, i_chart, common_set) {

    // draw levl0 container
    var level0_inner_panel = document.createElement("div");
    var level0_inner_panel_class = document.createAttribute("class");
    level0_inner_panel_class.value = "js-chart-venn-diagram-level0-inner-panel";
    level0_inner_panel.setAttributeNode( level0_inner_panel_class );
    base_level2_inner_panel.appendChild( level0_inner_panel );

    switch ( i_chart.i_sets.length ) {
        // 2-venn
        case 2:
            var draw_2venn_diagram = jsChartVennDiagramDraw2VennDiagram(level0_inner_panel, i_chart, common_set);
            break;
        // 3-venn
        case 3:
            var draw_3venn_diagram = jsChartVennDiagramDraw3VennDiagram(level0_inner_panel, i_chart, common_set);
            break;
        default:
            return false;
            break;
    }

    return false;
}
// draw function for a venn diagram
function jsChartDrawVennDiagram(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["venn diagram"].data_type, null);
    var base_level2_inner_panel = draw_base_containers[0];
    var legend_container = draw_base_containers[1];

    // determine the elements in common across all data serieses
    var common_set = jsChartCommonReturnCommonArrayElements( i_chart.i_sets );

    // draw level 0 containers
    var draw_level0_containers = jsChartVennDiagramDrawLevel0Containers(base_level2_inner_panel, i_chart, common_set);

    return true;
}