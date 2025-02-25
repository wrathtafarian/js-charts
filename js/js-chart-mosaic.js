/*
1. Limit data and group remainder into one container
DONE 2. Sort data switch
DONE 3. Color palettes:
DONE 3.1 Experiment with differne palette types
DONE 3.2 Allow custom colors for each node
DONE 4. Implement/experiment with different algorithms
DONE 4.1 portrait quad
DONE 4.2 portrait pivot
DONE 4.3 portrait snake
DONE 4.4 landscape quad
DONE 4.5 landscape pivot
DONE 4.6 landscape snake
*/

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
// only absolute input values are supported
function jsChartTreemapReturnBlockBGColor(i_data_type, i_value, group_value, group_total_value, custom_bg_color, color_index, palette_position_type, palette_type, color_palette, color_position) {

    if ((typeof custom_bg_color == "string") && (custom_bg_color.length > 0)) {
        return jsChartCommonStandardizeColor(custom_bg_color);
    }

    // switch by palette type
    switch (palette_type) {
        // diverging discrete
        case "diverging discrete":
        case "discrete diverging":
        // sequential discrete
        case "sequential discrete":
        case "discrete sequential":

            // absolute
            if (palette_position_type == "absolute") {

                for (var tt = 0; tt < color_position.length; tt++) {
                    if (i_value < color_position[tt]) {
                        return color_palette[tt];
                    }
                }
                return color_palette[ (color_palette.length-1) ];
            // relative
            } else {
                var perc_value = (i_value / group_total_value) * 100;
                for (var tt = 0; tt < color_position.length; tt++) {
                    if (perc_value < parseFloat(color_position[tt].replaceAll("%", ""))) {
                        return color_palette[tt];
                    }
                }
                return color_palette[ (color_palette.length-1) ];
            }

            break;
        // diverging continuous
        case "diverging continuous":
        case "continuous diverging":
        // sequential continuous
        case "sequential continuous":
        case "continuous sequential":

            // absolute data and absolute legend values
            if (palette_position_type == "absolute") {

                var position_filter = color_position.filter((position) => position <= i_value);
                var position = color_position.indexOf( position_filter[ (position_filter.length-1) ] );
                if (position == -1) {
                    position = 0;
                }

                var bg_start = jsChartCommonStandardizeColor(color_palette[ (position) ]);
                if ((color_position.length - 1) == position) {
                    var cell_perc = i_value / group_total_value;
                    var bg_end = jsChartCommonStandardizeColor(color_palette[ (position) ]);
                } else {
                    var cell_perc = (i_value - color_position[ (position) ]) / (color_position[ (position+1) ] - color_position[ (position) ]);
                    var bg_end = jsChartCommonStandardizeColor(color_palette[ (position+1) ]);
                }

                var r_start = Number("0x" + bg_start.substr(1, 2));
                var g_start = Number("0x" + bg_start.substr(3, 2));
                var b_start = Number("0x" + bg_start.substr(5, 2));

                var r_end = Number("0x" + bg_end.substr(1, 2));
                var g_end = Number("0x" + bg_end.substr(3, 2));
                var b_end = Number("0x" + bg_end.substr(5, 2));

                var cell_rgb = "rgb(" + (((r_end - r_start) * cell_perc) + r_start) + ", " + (((g_end - g_start) * cell_perc) + g_start) + ", " + (((b_end - b_start) * cell_perc) + b_start) + ")";

                //cell_attributes["background-color"] = jsChartCommonStandardizeColor(cell_rgb);
                return jsChartCommonStandardizeColor(cell_rgb);

            // absolute data and relative legend values
            } else {

                var value_perc = (i_value / group_total_value) * 100;

                var position_filter = color_position.filter((position) => parseFloat(position) <= parseFloat(value_perc));
                var position = color_position.indexOf( position_filter[ (position_filter.length-1) ] );
                if (position == -1) {
                    position = 0;
                }

                var bg_start = jsChartCommonStandardizeColor(color_palette[ (position) ]);
                if ((color_position.length - 1) == position) {
                    var cell_perc = i_value / group_total_value;
                    var bg_end = jsChartCommonStandardizeColor(color_palette[ (position) ]);
                } else {
                    //var cell_perc = (i_value - color_position[ (position) ]) / (color_position[ (position+1) ] - color_position[ (position) ]);
                    var cell_perc = (parseFloat(value_perc) - parseFloat(color_position[ (position) ])) / (parseFloat(color_position[ (position+1) ]) - parseFloat(color_position[ (position) ]));
                    //var cell_perc = (i_value - color_position[ (position) ]) / (color_position[ (position+1) ] - color_position[ (position) ]);
                    var bg_end = jsChartCommonStandardizeColor(color_palette[ (position+1) ]);
                }

                var r_start = Number("0x" + bg_start.substr(1, 2));
                var g_start = Number("0x" + bg_start.substr(3, 2));
                var b_start = Number("0x" + bg_start.substr(5, 2));

                var r_end = Number("0x" + bg_end.substr(1, 2));
                var g_end = Number("0x" + bg_end.substr(3, 2));
                var b_end = Number("0x" + bg_end.substr(5, 2));

                var cell_rgb = "rgb(" + (((r_end - r_start) * cell_perc) + r_start) + ", " + (((g_end - g_start) * cell_perc) + g_start) + ", " + (((b_end - b_start) * cell_perc) + b_start) + ")";

                return jsChartCommonStandardizeColor(cell_rgb);

            }

            break;
        // default - qualitative
        default:
            return color_palette[ (color_index % color_palette.length) ];
            break;
    }
}
// calculate the number of containers required to hous the children in groups of 4
function jsChartTreemapCalculateContainerCount(num_of_children, default_children_per_container = 4) {

    var required_containers = Math.floor(num_of_children / default_children_per_container);
    if ((num_of_children % default_children_per_container) != 0) {
        required_containers++;
    }

    while (required_containers > 4) {
        required_containers = Math.floor(required_containers / default_children_per_container);
        if ((required_containers % default_children_per_container) != 0) {
            required_containers++;
        }
    }

    return required_containers;
}
// prepare the parent -- mode = landscape and algorithm = snake
function jsChartTreemapPrepareTreemapContainers_Landscape_Snake(parent_container, i_chart, i_nodes, parent_title, color_index) {

    // less than 4 children -- draw ... those ... children
    if (i_nodes.length < 5) {

        // switch based on the number of childrens
        switch (i_nodes.length) {
            // 1 child
            case 1:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: row;";
                parent_container.setAttribute("style", parent_style);

                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, i_nodes[0], 0, 1, i_nodes[0].value, i_nodes[0].title, color_index, true);

                break;
            // 2 children
            case 2:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: row;";
                parent_container.setAttribute("style", parent_style);

                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, i_nodes[0], 0, 2, (i_nodes[0].value + i_nodes[1].value), i_nodes[0].title, color_index, true);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, i_nodes[1], 1, 2, (i_nodes[0].value + i_nodes[1].value), i_nodes[1].title, color_index, true);

                break;
            // 3 children
            case 3:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: row;";
                parent_container.setAttribute("style", parent_style);

                var nodes_total = i_nodes[0].value + i_nodes[1].value + i_nodes[2].value;

                var draw_treemap_panels0 = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, i_nodes[0], 0, 3, nodes_total, i_nodes[0].title, color_index, true);
                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, i_nodes[1], 1, 3, nodes_total, i_nodes[1].title, color_index, true);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, i_nodes[2], 2, 3, nodes_total, i_nodes[2].title, color_index, true);

                break;
            // 4 children
            case 4:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: row;";
                parent_container.setAttribute("style", parent_style);

                var nodes_total = (i_nodes[0].value + i_nodes[1].value + i_nodes[2].value + i_nodes[3].value);

                var draw_treemap_panels0 = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, i_nodes[0], 0, 4, nodes_total, i_nodes[0].title, color_index, true);
                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, i_nodes[1], 1, 4, nodes_total, i_nodes[1].title, color_index, true);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, i_nodes[2], 2, 4, nodes_total, i_nodes[2].title, color_index, true);
                var draw_treemap_panels3 = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, i_nodes[3], 3, 4, nodes_total, i_nodes[3].title, color_index, true);

                break;
        }

    } else {

        var required_containers = jsChartTreemapCalculateContainerCount(i_nodes.length);
        var maximum_children = Math.ceil(i_nodes.length / required_containers);

        var related_children = [];
        var related_value = [];
        var all_related_value = 0;
        var related_total = 0;
        for (var a = 0; a < required_containers; a++) {
            related_children[a] = [];
            related_value[a] = 0;
            for (var b = 0; b < maximum_children; b++) {
                related_total++;
                if (related_total <= i_nodes.length) {
                    var this_node = i_nodes[ (related_total-1) ];
                    var parse_value = parseFloat( this_node.value );
                    if (!isNaN(parse_value)) {
                        related_children[a].push( this_node );
                        related_value[a] += parse_value;
                        all_related_value += parse_value;
                    }
                }
            }
        }

        var default_attributes = "";

        // switch based on the number of childrens
        switch (required_containers) {
            // 1 child
            case 1:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " flex: 1 1 auto; display: flex; flex-direction: row; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var new_node = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, new_node, 0, 1, all_related_value, new_node.title, color_index);

                break;
            // 2 children
            case 2:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " flex: 1 1 auto; display: flex; flex-direction: row; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, new_node1, 0, 2, all_related_value, new_node1.title, color_index);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, new_node2, 1, 2, all_related_value, new_node2.title, color_index);

                break;
            // 3 children
            case 3:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: row; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var nodes_total = related_value[0] + related_value[1] + related_value[2];

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var new_node3 = {
                    "title": parent_title,
                    "nodes": related_children[2],
                    "value": related_value[2]
                }

                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, new_node1, 0, 3, nodes_total, new_node1.title, color_index);
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, new_node2, 1, 3, nodes_total, new_node2.title, color_index);
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, new_node3, 2, 3, nodes_total, new_node3.title, color_index);

                break;
            // 4 children
            case 4:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: row; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var nodes_total = (related_value[0] + related_value[1] + related_value[2] + related_value[3]);

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var new_node3 = {
                    "title": parent_title,
                    "nodes": related_children[2],
                    "value": related_value[2]
                }
                var new_node4 = {
                    "title": parent_title,
                    "nodes": related_children[3],
                    "value": related_value[3]
                }

                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, new_node1, 0, 4, nodes_total, new_node1.title, color_index);
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, new_node2, 1, 4, nodes_total, new_node2.title, color_index);
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, new_node3, 2, 4, nodes_total, new_node3.title, color_index);
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, new_node4, 3, 4, nodes_total, new_node4.title, color_index);

                break;
        }
    }

    return true;
}
// prepare the parent -- mode = landscape and algorithm = pivot
function jsChartTreemapPrepareTreemapContainers_Landscape_Pivot(parent_container, i_chart, i_nodes, parent_title, color_index) {

    // less than 4 children -- draw ... those ... children
    if (i_nodes.length < 5) {

        // switch based on the number of childrens
        switch (i_nodes.length) {
            // 1 child
            case 1:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: row;";
                parent_container.setAttribute("style", parent_style);

                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(parent_container, i_chart, i_nodes[0], 0, 1, i_nodes[0].value, i_nodes[0].title, color_index, true);

                break;
            // 2 children
            case 2:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: row;";
                parent_container.setAttribute("style", parent_style);

                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(parent_container, i_chart, i_nodes[0], 0, 2, (i_nodes[0].value + i_nodes[1].value), i_nodes[0].title, color_index, true);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(parent_container, i_chart, i_nodes[1], 1, 2, (i_nodes[0].value + i_nodes[1].value), i_nodes[1].title, color_index, true);

                break;
            // 3 children
            case 3:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: row;";
                parent_container.setAttribute("style", parent_style);

                var nodes_total = i_nodes[0].value + i_nodes[1].value + i_nodes[2].value;

                // draw the left container
                var left_container_width = ((i_nodes[0].value / nodes_total) * 100) + "%";
                var left_container = document.createElement("div");
                left_container.id = "left_container3a";
                var left_container_style = document.createAttribute("style");
                left_container_style.value = "flex: 1 1 auto; width: " + left_container_width + "; display: flex; flex-direction: row;";
                left_container.setAttributeNode( left_container_style );
                parent_container.appendChild( left_container );

                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(left_container, i_chart, i_nodes[0], 0, 3, i_nodes[0].value, i_nodes[0].title, color_index, true);

                var i_node_right_total = i_nodes[1].value + i_nodes[2].value;

                // draw the right container
                var right_container_width = ((i_node_right_total / nodes_total) * 100) + "%";
                var right_container = document.createElement("div");
                right_container.id = "right_container";
                var right_container_style = document.createAttribute("style");
                right_container_style.value = "flex: 1 1 auto; width: " + right_container_width + "; display: flex; flex-direction: column;";
                right_container.setAttributeNode( right_container_style );
                parent_container.appendChild( right_container );

                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(right_container, i_chart, i_nodes[1], 1, 3, i_node_right_total, i_nodes[1].title, color_index, true);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(right_container, i_chart, i_nodes[2], 2, 3, i_node_right_total, i_nodes[2].title, color_index, true);

                break;
            // 4 children
            case 4:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: row;";
                parent_container.setAttribute("style", parent_style);

                var nodes_total = (i_nodes[0].value + i_nodes[1].value + i_nodes[2].value + i_nodes[3].value);

                // draw the left container
                var left_container_width = ((i_nodes[0].value / nodes_total) * 100) + "%";
                var left_container = document.createElement("div");
                left_container.id = "left_container4a";
                var left_container_style = document.createAttribute("style");
                left_container_style.value = "flex: 1 1 auto; width: " + left_container_width + "; display: flex; flex-direction: row;";
                left_container.setAttributeNode( left_container_style );
                parent_container.appendChild( left_container );

                var draw_treemap_panels0 = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(left_container, i_chart, i_nodes[0], 0, 4, i_nodes[0].value, i_nodes[0].title, color_index, true);

                // draw the right container
                var right_container_width = (((i_nodes[1].value + i_nodes[2].value + i_nodes[3].value) / nodes_total) * 100) + "%";
                var right_container = document.createElement("div");
                right_container.id = "right_container";
                var right_container_style = document.createAttribute("style");
                right_container_style.value = "flex: 1 1 auto; width: " + right_container_width + "; display: flex; flex-direction: column;";
                right_container.setAttributeNode( right_container_style );
                parent_container.appendChild( right_container );

                // draw the top container
                var top_container_height = ((i_nodes[1].value / (i_nodes[1].value + i_nodes[2].value + i_nodes[3].value)) * 100) + "%";
                var top_container = document.createElement("div");
                top_container.id = "top_container";
                var top_container_style = document.createAttribute("style");
                top_container_style.value = "flex: 1 1 auto; height: " + top_container_height + "; display: flex; flex-direction: column;";
                top_container.setAttributeNode( top_container_style );
                right_container.appendChild( top_container );

                // draw the bottom container
                var bottom_container_height = (((i_nodes[2].value + i_nodes[3].value) / (i_nodes[1].value + i_nodes[2].value + i_nodes[3].value)) * 100) + "%";
                var bottom_container = document.createElement("div");
                bottom_container.id = "bottom_container";
                var bottom_container_style = document.createAttribute("style");
                bottom_container_style.value = "flex: 1 1 auto; height: " + bottom_container_height + "; display: flex; flex-direction: row;";
                bottom_container.setAttributeNode( bottom_container_style );
                right_container.appendChild( bottom_container );

                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(top_container, i_chart, i_nodes[1], 1, 4, i_nodes[1].value, i_nodes[1].title, color_index, true);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(bottom_container, i_chart, i_nodes[2], 2, 4, (i_nodes[2].value + i_nodes[3].value), i_nodes[2].title, color_index, true);
                var draw_treemap_panels3 = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(bottom_container, i_chart, i_nodes[3], 3, 4, (i_nodes[2].value + i_nodes[3].value), i_nodes[3].title, color_index, true);

                break;
        }

        //for (var tt = 0; tt <i_nodes.length; tt++) {
        //    jsChartTreemapDrawTreemapContainers_Landscape_Pivot(parent_container, i_chart, i_nodes[tt], tt, i_nodes.length, i_nodes[tt].value, i_nodes[tt].titl, color_index);
        //}
    } else {

        var required_containers = jsChartTreemapCalculateContainerCount(i_nodes.length);
        var maximum_children = Math.ceil(i_nodes.length / required_containers);

        var related_children = [];
        var related_value = [];
        var all_related_value = 0;
        var related_total = 0;
        for (var a = 0; a < required_containers; a++) {
            related_children[a] = [];
            related_value[a] = 0;
            for (var b = 0; b < maximum_children; b++) {
                related_total++;
                if (related_total <= i_nodes.length) {
                    var this_node = i_nodes[ (related_total-1) ];
                    var parse_value = parseFloat( this_node.value );
                    if (!isNaN(parse_value)) {
                        related_children[a].push( this_node );
                        related_value[a] += parse_value;
                        all_related_value += parse_value;
                    }
                }
            }
        }

        var default_attributes = "";

        // switch based on the number of childrens
        switch (required_containers) {
            // 1 child
            case 1:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " flex: 1 1 auto; display: flex; flex-direction: row; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var new_node = {
                    "title": parent_title,
                    "nodes": related_children[tt],
                    "value": related_value[tt]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(parent_container, i_chart, new_node, tt, required_containers, all_related_value, new_node.title, color_index);

                break;
            // 2 children
            case 2:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " flex: 1 1 auto; display: flex; flex-direction: row; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(parent_container, i_chart, new_node1, 0, 2, all_related_value, new_node1.title, color_index);
                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(parent_container, i_chart, new_node2, 1, 2, all_related_value, new_node2.title, color_index);

                break;
            // 3 children
            case 3:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                //parent_style += " width: 100%; display: flex; flex-direction: row; " + default_attributes;
                parent_style += " display: flex; flex-direction: row; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var nodes_total = related_value[0] + related_value[1] + related_value[2];

                // draw the left container
                var left_container_width = ((related_value[0] / nodes_total) * 100) + "%";
                var left_container = document.createElement("div");
                left_container.id = "left_container3b";
                var left_container_style = document.createAttribute("style");
                left_container_style.value = "flex: 1 1 auto; width: " + left_container_width + "; display: flex; flex-direction: row; " + default_attributes;
                left_container.setAttributeNode( left_container_style );
                parent_container.appendChild( left_container );

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(left_container, i_chart, new_node1, 0, 3, nodes_total, new_node1.title, color_index);

                var i_node_right_total = related_value[1] + related_value[2];

                // draw the right container
                var right_container_width = ((i_node_right_total / nodes_total) * 100) + "%";
                var right_container = document.createElement("div");
                right_container.id = "right_container";
                var right_container_style = document.createAttribute("style");
                right_container_style.value = "flex: 1 1 auto; width: " + right_container_width + "; display: flex; flex-direction: column; " + default_attributes;
                right_container.setAttributeNode( right_container_style );
                parent_container.appendChild( right_container );

                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(right_container, i_chart, new_node2, 1, 3, i_node_right_total, new_node2.title, color_index);
                var new_node3 = {
                    "title": parent_title,
                    "nodes": related_children[2],
                    "value": related_value[2]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(right_container, i_chart, new_node3, 2, 3, i_node_right_total, new_node3.title, color_index);

                break;
            // 4 children
            case 4:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                //parent_style += " width: 100%; display: flex; flex-direction: row; " + default_attributes;
                parent_style += " display: flex; flex-direction: row; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var nodes_total = (related_value[0] + related_value[1] + related_value[2] + related_value[3]);

                // draw the left container
                var left_container_width = ((related_value[0] / nodes_total) * 100) + "%";
                var left_container = document.createElement("div");
                left_container.id = "left_container4b";
                var left_container_style = document.createAttribute("style");
                left_container_style.value = "flex: 1 1 auto; width: " + left_container_width + "; display: flex; flex-direction: row; " + default_attributes;
                left_container.setAttributeNode( left_container_style );
                parent_container.appendChild( left_container );

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(left_container, i_chart, new_node1, 0, 4, (related_value[0] + related_value[2]), new_node1.title, color_index);

                // draw the right container
                var right_container_width = (((related_value[1] + related_value[2] + related_value[3]) / nodes_total) * 100) + "%";
                var right_container = document.createElement("div");
                right_container.id = "right_container";
                var right_container_style = document.createAttribute("style");
                right_container_style.value = "flex: 1 1 auto; width: " + right_container_width + "; display: flex; flex-direction: column; " + default_attributes;
                right_container.setAttributeNode( right_container_style );
                parent_container.appendChild( right_container );

                // draw the top container
                var top_container_height = ((related_value[1] / (related_value[1] + related_value[2] + related_value[3])) * 100) + "%";
                var top_container = document.createElement("div");
                top_container.id = "top_container";
                var top_container_style = document.createAttribute("style");
                top_container_style.value = "flex: 1 1 auto; height: " + top_container_height + "; display: flex; flex-direction: column; " + default_attributes;
                top_container.setAttributeNode( top_container_style );
                right_container.appendChild( top_container );

                // draw the bottom container
                var bottom_container_height = (((related_value[2] + related_value[3]) / (related_value[1] + related_value[2] + related_value[3])) * 100) + "%";
                var bottom_container = document.createElement("div");
                bottom_container.id = "bottom_container";   
                var bottom_container_style = document.createAttribute("style");
                bottom_container_style.value = "flex: 1 1 auto; height: " + bottom_container_height + "; display: flex; flex-direction: row; " + default_attributes;
                bottom_container.setAttributeNode( bottom_container_style );
                right_container.appendChild( bottom_container );

                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(top_container, i_chart, new_node2, 1, 4, new_node2.value, new_node2.title, color_index);
                var new_node3 = {
                    "title": parent_title,
                    "nodes": related_children[2],
                    "value": related_value[2]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(bottom_container, i_chart, new_node3, 2, 4, (related_value[2] + related_value[3]), new_node3.title, color_index);
                var new_node4 = {
                    "title": parent_title,
                    "nodes": related_children[3],
                    "value": related_value[3]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Pivot(bottom_container, i_chart, new_node4, 3, 4, (related_value[2] + related_value[3]), new_node4.title, color_index);

                break;
        }
    }

    return true;
}
// prepare the parent -- mode = landscape and algorithm = quad
function jsChartTreemapPrepareTreemapContainers_Landscape_Quad(parent_container, i_chart, i_nodes, parent_title, color_index) {

    // less than 4 children -- draw ... those ... children
    if (i_nodes.length < 5) {

        // switch based on the number of childrens
        switch (i_nodes.length) {
            // 1 child
            case 1:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: row;";
                parent_container.setAttribute("style", parent_style);

                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Quad(parent_container, i_chart, i_nodes[0], 0, 1, i_nodes[0].value, i_nodes[0].title, color_index, true);

                break;
            // 2 children
            case 2:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: column;";
                parent_container.setAttribute("style", parent_style);

                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Landscape_Quad(parent_container, i_chart, i_nodes[0], 0, 2, (i_nodes[0].value + i_nodes[1].value), i_nodes[0].title, color_index, true);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Landscape_Quad(parent_container, i_chart, i_nodes[1], 1, 2, (i_nodes[0].value + i_nodes[1].value), i_nodes[1].title, color_index, true);

                break;
            // 3 children
            case 3:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: column;";
                parent_container.setAttribute("style", parent_style);

                var nodes_total = i_nodes[0].value + i_nodes[1].value + i_nodes[2].value;

                // draw the top container
                var top_container_height = ((i_nodes[0].value / nodes_total) * 100) + "%";
                var top_container = document.createElement("div");
                top_container.id = "top_container3a";
                var top_container_style = document.createAttribute("style");
                top_container_style.value = "flex: 1 1 auto; height: " + top_container_height + "; display: flex; flex-direction: row;";
                top_container.setAttributeNode( top_container_style );
                parent_container.appendChild( top_container );

                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Quad(top_container, i_chart, i_nodes[0], 0, 3, i_nodes[0].value, i_nodes[0].title, color_index, true);

                var i_node_bottom_total = i_nodes[1].value + i_nodes[2].value;

                // draw the bottom container
                var bottom_container_height = ((i_node_bottom_total / nodes_total) * 100) + "%";
                var bottom_container = document.createElement("div");
                bottom_container.id = "bottom_container";
                var bottom_container_style = document.createAttribute("style");
                bottom_container_style.value = "flex: 1 1 auto; height: " + bottom_container_height + "; display: flex; flex-direction: row;";
                bottom_container.setAttributeNode( bottom_container_style );
                parent_container.appendChild( bottom_container );

                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Landscape_Quad(bottom_container, i_chart, i_nodes[1], 1, 3, i_node_bottom_total, i_nodes[1].title, color_index, true);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Landscape_Quad(bottom_container, i_chart, i_nodes[2], 2, 3, i_node_bottom_total, i_nodes[2].title, color_index, true);

                break;
            // 4 children
            case 4:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: column;";
                parent_container.setAttribute("style", parent_style);

                var nodes_total = (i_nodes[0].value + i_nodes[1].value + i_nodes[2].value + i_nodes[3].value);

                // draw the top container
                var top_container_height = (((i_nodes[0].value + i_nodes[3].value) / nodes_total) * 100) + "%";
                var top_container = document.createElement("div");
                top_container.id = "top_container4a";
                var top_container_style = document.createAttribute("style");
                top_container_style.value = "flex: 1 1 auto; height: " + top_container_height + "; display: flex; flex-direction: row;";
                top_container.setAttributeNode( top_container_style );
                parent_container.appendChild( top_container );

                var draw_treemap_panels0 = jsChartTreemapDrawTreemapContainers_Landscape_Quad(top_container, i_chart, i_nodes[0], 0, 4, (i_nodes[0].value + i_nodes[3].value), i_nodes[0].title, color_index, true);
                var draw_treemap_panels3 = jsChartTreemapDrawTreemapContainers_Landscape_Quad(top_container, i_chart, i_nodes[3], 3, 4, (i_nodes[0].value + i_nodes[3].value), i_nodes[2].title, color_index, true);

                // draw the bottom container
                var bottom_container_height = (((i_nodes[1].value + i_nodes[2].value) / nodes_total) * 100) + "%";
                var bottom_container = document.createElement("div");
                bottom_container.id = "bottom_container";
                var bottom_container_style = document.createAttribute("style");
                bottom_container_style.value = "flex: 1 1 auto; height: " + bottom_container_height + "; display: flex; flex-direction: row;";
                bottom_container.setAttributeNode( bottom_container_style );
                parent_container.appendChild( bottom_container );

                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Landscape_Quad(bottom_container, i_chart, i_nodes[2], 2, 4, (i_nodes[1].value + i_nodes[2].value), i_nodes[2].title, color_index, true);
                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Landscape_Quad(bottom_container, i_chart, i_nodes[1], 1, 4, (i_nodes[1].value + i_nodes[2].value), i_nodes[1].title, color_index, true);

                break;
        }

        //for (var tt = 0; tt <i_nodes.length; tt++) {
        //    jsChartTreemapDrawTreemapContainers_Landscape_Quad(parent_container, i_chart, i_nodes[tt], tt, i_nodes.length, i_nodes[tt].value, i_nodes[tt].titl, color_index);
        //}
    } else {

        var required_containers = jsChartTreemapCalculateContainerCount(i_nodes.length);
        var maximum_children = Math.ceil(i_nodes.length / required_containers);

        var related_children = [];
        var related_value = [];
        var all_related_value = 0;
        var related_total = 0;
        for (var a = 0; a < required_containers; a++) {
            related_children[a] = [];
            related_value[a] = 0;
            for (var b = 0; b < maximum_children; b++) {
                related_total++;
                if (related_total <= i_nodes.length) {
                    var this_node = i_nodes[ (related_total-1) ];
                    var parse_value = parseFloat( this_node.value );
                    if (!isNaN(parse_value)) {
                        related_children[a].push( this_node );
                        related_value[a] += parse_value;
                        all_related_value += parse_value;
                    }
                }
            }
        }

        var default_attributes = "";

        // switch based on the number of childrens
        switch (required_containers) {
            // 1 child
            case 1:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " flex: 1 1 auto; display: flex; flex-direction: row; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var new_node = {
                    "title": parent_title,
                    "nodes": related_children[tt],
                    "value": related_value[tt]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Quad(parent_container, i_chart, new_node, tt, required_containers, all_related_value, new_node.title, color_index);

                break;
            // 2 children
            case 2:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " flex: 1 1 auto; display: flex; flex-direction: column; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Landscape_Quad(parent_container, i_chart, new_node1, 0, 2, all_related_value, new_node1.title, color_index);
                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Landscape_Quad(parent_container, i_chart, new_node2, 1, 2, all_related_value, new_node2.title, color_index);

                break;
            // 3 children
            case 3:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                //parent_style += " width: 100%; display: flex; flex-direction: column; " + default_attributes;
                parent_style += " display: flex; flex-direction: column; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var nodes_total = related_value[0] + related_value[1] + related_value[2];

                // draw the top container
                var top_container_height = ((related_value[0] / nodes_total) * 100) + "%";
                var top_container = document.createElement("div");
                top_container.id = "top_container3b";
                var top_container_style = document.createAttribute("style");
                top_container_style.value = "flex: 1 1 auto; height: " + top_container_height + "; display: flex; flex-direction: row; " + default_attributes;
                top_container.setAttributeNode( top_container_style );
                parent_container.appendChild( top_container );

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Quad(top_container, i_chart, new_node1, 0, 3, nodes_total, new_node1.title, color_index);

                var i_node_bottom_total = related_value[1] + related_value[2];

                // draw the bottom container
                var bottom_container_height = ((i_node_bottom_total / nodes_total) * 100) + "%";
                var bottom_container = document.createElement("div");
                bottom_container.id = "bottom_container";
                var bottom_container_style = document.createAttribute("style");
                bottom_container_style.value = "flex: 1 1 auto; height: " + bottom_container_height + "; display: flex; flex-direction: row; " + default_attributes;
                bottom_container.setAttributeNode( bottom_container_style );
                parent_container.appendChild( bottom_container );

                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Quad(bottom_container, i_chart, new_node2, 1, 3, i_node_bottom_total, new_node2.title, color_index);
                var new_node3 = {
                    "title": parent_title,
                    "nodes": related_children[2],
                    "value": related_value[2]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Quad(bottom_container, i_chart, new_node3, 2, 3, i_node_bottom_total, new_node3.title, color_index);

                break;
            // 4 children
            case 4:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                //parent_style += " width: 100%; display: flex; flex-direction: column; " + default_attributes;
                parent_style += " display: flex; flex-direction: column; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var nodes_total = (related_value[0] + related_value[1] + related_value[2] + related_value[3]);

                // draw the top container
                var top_container_height = (((related_value[0] + related_value[3]) / nodes_total) * 100) + "%";
                var top_container = document.createElement("div");
                top_container.id = "top_container4b";
                var top_container_style = document.createAttribute("style");
                top_container_style.value = "flex: 1 1 auto; height: " + top_container_height + "; display: flex; flex-direction: row; " + default_attributes;
                top_container.setAttributeNode( top_container_style );
                parent_container.appendChild( top_container );

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Quad(top_container, i_chart, new_node1, 0, 4, (related_value[0] + related_value[3]), new_node1.title, color_index);
                var new_node4 = {
                    "title": parent_title,
                    "nodes": related_children[3],
                    "value": related_value[3]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Quad(top_container, i_chart, new_node4, 3, 4, (related_value[0] + related_value[3]), new_node4.title, color_index);

                // draw the bottom container
                var bottom_container_height = (((related_value[1] + related_value[2]) / nodes_total) * 100) + "%";
                var bottom_container = document.createElement("div");
                bottom_container.id = "bottom_container";
                var bottom_container_style = document.createAttribute("style");
                bottom_container_style.value = "flex: 1 1 auto; height: " + bottom_container_height + "; display: flex; flex-direction: row; " + default_attributes;
                bottom_container.setAttributeNode( bottom_container_style );
                parent_container.appendChild( bottom_container );

                var new_node3 = {
                    "title": parent_title,
                    "nodes": related_children[2],
                    "value": related_value[2]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Quad(bottom_container, i_chart, new_node3, 2, 4, (related_value[1] + related_value[1]), new_node3.title, color_index);
                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Landscape_Quad(bottom_container, i_chart, new_node2, 1, 4, (related_value[1] + related_value[2]), new_node2.title, color_index);

                break;
        }
    }

    return true;
}
// prepare the parent -- mode = portrait and algorithm = snake
function jsChartTreemapPrepareTreemapContainers_Portrait_Snake(parent_container, i_chart, i_nodes, parent_title, color_index) {

    // less than 4 children -- draw ... those ... children
    if (i_nodes.length < 5) {

        // switch based on the number of childrens
        switch (i_nodes.length) {
            // 1 child
            case 1:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: column;";
                parent_container.setAttribute("style", parent_style);

                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, i_nodes[0], 0, 1, i_nodes[0].value, i_nodes[0].title, color_index, true);

                break;
            // 2 children
            case 2:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: column;";
                parent_container.setAttribute("style", parent_style);

                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, i_nodes[0], 0, 2, (i_nodes[0].value + i_nodes[1].value), i_nodes[0].title, color_index, true);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, i_nodes[1], 1, 2, (i_nodes[0].value + i_nodes[1].value), i_nodes[1].title, color_index, true);

                break;
            // 3 children
            case 3:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: column;";
                parent_container.setAttribute("style", parent_style);

                var nodes_total = i_nodes[0].value + i_nodes[1].value + i_nodes[2].value;

                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, i_nodes[0], 0, 3, nodes_total, i_nodes[0].title, color_index, true);
                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, i_nodes[1], 1, 3, nodes_total, i_nodes[1].title, color_index, true);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, i_nodes[2], 2, 3, nodes_total, i_nodes[2].title, color_index, true);

                break;
            // 4 children
            case 4:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: column;";
                parent_container.setAttribute("style", parent_style);

                var nodes_total = (i_nodes[0].value + i_nodes[1].value + i_nodes[2].value + i_nodes[3].value);

                var draw_treemap_panels0 = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, i_nodes[0], 0, 4, nodes_total, i_nodes[0].title, color_index, true);
                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, i_nodes[1], 1, 4, nodes_total, i_nodes[1].title, color_index, true);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, i_nodes[2], 2, 4, nodes_total, i_nodes[2].title, color_index, true);
                var draw_treemap_panels3 = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, i_nodes[3], 3, 4, nodes_total, i_nodes[3].title, color_index, true);

                break;
        }
    } else {

        var required_containers = jsChartTreemapCalculateContainerCount(i_nodes.length);
        var maximum_children = Math.ceil(i_nodes.length / required_containers);

        var related_children = [];
        var related_value = [];
        var all_related_value = 0;
        var related_total = 0;
        for (var a = 0; a < required_containers; a++) {
            related_children[a] = [];
            related_value[a] = 0;
            for (var b = 0; b < maximum_children; b++) {
                related_total++;
                if (related_total <= i_nodes.length) {
                    var this_node = i_nodes[ (related_total-1) ];
                    var parse_value = parseFloat( this_node.value );
                    if (!isNaN(parse_value)) {
                        related_children[a].push( this_node );
                        related_value[a] += parse_value;
                        all_related_value += parse_value;
                    }
                }
            }
        }

        var default_attributes = "";

        // switch based on the number of childrens
        switch (required_containers) {
            // 1 child
            case 1:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " flex: 1 1 auto; display: flex; flex-direction: column; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var new_node = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, new_node, 0, 1, all_related_value, new_node.title, color_index);

                break;
            // 2 children
            case 2:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " flex: 1 1 auto; display: flex; flex-direction: column; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, new_node1, 0, 2, all_related_value, new_node1.title, color_index);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, new_node2, 1, 2, all_related_value, new_node2.title, color_index);

                break;
            // 3 children
            case 3:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: column; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var nodes_total = related_value[0] + related_value[1] + related_value[2];

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var new_node3 = {
                    "title": parent_title,
                    "nodes": related_children[2],
                    "value": related_value[2]
                }

                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, new_node1, 0, 3, nodes_total, new_node1.title, color_index);
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, new_node2, 1, 3, nodes_total, new_node2.title, color_index);
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, new_node3, 2, 3, nodes_total, new_node3.title, color_index);

                break;
            // 4 children
            case 4:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: column; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var nodes_total = (related_value[0] + related_value[1] + related_value[2] + related_value[3]);

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var new_node3 = {
                    "title": parent_title,
                    "nodes": related_children[2],
                    "value": related_value[2]
                }
                var new_node4 = {
                    "title": parent_title,
                    "nodes": related_children[3],
                    "value": related_value[3]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, new_node1, 0, 4, nodes_total, new_node1.title, color_index);
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, new_node2, 1, 4, nodes_total, new_node2.title, color_index);
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, new_node3, 2, 4, nodes_total, new_node3.title, color_index);
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, new_node4, 3, 4, nodes_total, new_node4.title, color_index);

                break;
        }
    }

    return true;
}
// prepare the parent -- mode = portrait and algorithm = pivot
function jsChartTreemapPrepareTreemapContainers_Portrait_Pivot(parent_container, i_chart, i_nodes, parent_title, color_index) {

    // less than 4 children -- draw ... those ... children
    if (i_nodes.length < 5) {

        // switch based on the number of childrens
        switch (i_nodes.length) {
            // 1 child
            case 1:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: column;";
                parent_container.setAttribute("style", parent_style);

                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(parent_container, i_chart, i_nodes[0], 0, 1, i_nodes[0].value, i_nodes[0].title, color_index, true);

                break;
            // 2 children
            case 2:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: column;";
                parent_container.setAttribute("style", parent_style);

                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(parent_container, i_chart, i_nodes[0], 0, 2, (i_nodes[0].value + i_nodes[1].value), i_nodes[0].title, color_index, true);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(parent_container, i_chart, i_nodes[1], 1, 2, (i_nodes[0].value + i_nodes[1].value), i_nodes[1].title, color_index, true);

                break;
            // 3 children
            case 3:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: column;";
                parent_container.setAttribute("style", parent_style);

                var nodes_total = i_nodes[0].value + i_nodes[1].value + i_nodes[2].value;

                // draw the top container
                var top_container_height = ((i_nodes[0].value / nodes_total) * 100) + "%";
                var top_container = document.createElement("div");
                top_container.id = "top_container3a";
                var top_container_style = document.createAttribute("style");
                top_container_style.value = "flex: 1 1 auto; height: " + top_container_height + "; display: flex; flex-direction: column;";
                top_container.setAttributeNode( top_container_style );
                parent_container.appendChild( top_container );

                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(top_container, i_chart, i_nodes[0], 0, 3, i_nodes[0].value, i_nodes[0].title, color_index, true);

                var i_node_bottom_total = i_nodes[1].value + i_nodes[2].value;

                // draw the bottom container
                var bottom_container_height = ((i_node_bottom_total / nodes_total) * 100) + "%";
                var bottom_container = document.createElement("div");
                bottom_container.id = "bottom_container";
                var bottom_container_style = document.createAttribute("style");
                bottom_container_style.value = "flex: 1 1 auto; height: " + bottom_container_height + "; display: flex; flex-direction: row;";
                bottom_container.setAttributeNode( bottom_container_style );
                parent_container.appendChild( bottom_container );

                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(bottom_container, i_chart, i_nodes[1], 1, 3, i_node_bottom_total, i_nodes[1].title, color_index, true);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(bottom_container, i_chart, i_nodes[2], 2, 3, i_node_bottom_total, i_nodes[2].title, color_index, true);

                break;
            // 4 children
            case 4:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: column;";
                parent_container.setAttribute("style", parent_style);

                var nodes_total = (i_nodes[0].value + i_nodes[1].value + i_nodes[2].value + i_nodes[3].value);

                // draw the top container
                var top_container_height = ((i_nodes[0].value / nodes_total) * 100) + "%";
                var top_container = document.createElement("div");
                top_container.id = "top_container4a";
                var top_container_style = document.createAttribute("style");
                top_container_style.value = "flex: 1 1 auto; height: " + top_container_height + "; display: flex; flex-direction: column;";
                top_container.setAttributeNode( top_container_style );
                parent_container.appendChild( top_container );

                var draw_treemap_panels0 = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(top_container, i_chart, i_nodes[0], 0, 4, i_nodes[0].value, i_nodes[0].title, color_index, true);

                // draw the bottom container
                var bottom_container_height = (((i_nodes[1].value + i_nodes[2].value + i_nodes[3].value) / nodes_total) * 100) + "%";
                var bottom_container = document.createElement("div");
                bottom_container.id = "bottom_container";
                var bottom_container_style = document.createAttribute("style");
                bottom_container_style.value = "flex: 1 1 auto; height: " + bottom_container_height + "; display: flex; flex-direction: row;";
                bottom_container.setAttributeNode( bottom_container_style );
                parent_container.appendChild( bottom_container );

                // draw the bottom left container
                var bottom_left_container_width = (((i_nodes[2].value + i_nodes[3].value) / (i_nodes[1].value + i_nodes[2].value + i_nodes[3].value)) * 100) + "%";
                var bottom_left_container = document.createElement("div");
                bottom_left_container.id = "bottom_left_container";
                var bottom_left_container_style = document.createAttribute("style");
                bottom_left_container_style.value = "flex: 1 1 auto; width: " + bottom_left_container_width + "; display: flex; flex-direction: column;";
                bottom_left_container.setAttributeNode( bottom_left_container_style );
                bottom_container.appendChild( bottom_left_container );

                // draw the bottom right container
                var bottom_right_container_width = ((i_nodes[1].value / (i_nodes[1].value + i_nodes[2].value + i_nodes[3].value)) * 100) + "%";
                var bottom_right_container = document.createElement("div");
                bottom_right_container.id = "bottom_right_container";
                var bottom_right_container_style = document.createAttribute("style");
                bottom_right_container_style.value = "flex: 1 1 auto; width: " + bottom_right_container_width + "; display: flex; flex-direction: row;";
                bottom_right_container.setAttributeNode( bottom_right_container_style );
                bottom_container.appendChild( bottom_right_container );




                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(bottom_right_container, i_chart, i_nodes[1], 1, 4, i_nodes[1].value, i_nodes[1].title, color_index, true);

                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(bottom_left_container, i_chart, i_nodes[2], 2, 4, (i_nodes[2].value + i_nodes[3].value), i_nodes[2].title, color_index, true);
                var draw_treemap_panels3 = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(bottom_left_container, i_chart, i_nodes[3], 3, 4, (i_nodes[2].value + i_nodes[3].value), i_nodes[3].title, color_index, true);

                break;
        }
    } else {

        var required_containers = jsChartTreemapCalculateContainerCount(i_nodes.length);
        var maximum_children = Math.ceil(i_nodes.length / required_containers);

        var related_children = [];
        var related_value = [];
        var all_related_value = 0;
        var related_total = 0;
        for (var a = 0; a < required_containers; a++) {
            related_children[a] = [];
            related_value[a] = 0;
            for (var b = 0; b < maximum_children; b++) {
                related_total++;
                if (related_total <= i_nodes.length) {
                    var this_node = i_nodes[ (related_total-1) ];
                    var parse_value = parseFloat( this_node.value );
                    if (!isNaN(parse_value)) {
                        related_children[a].push( this_node );
                        related_value[a] += parse_value;
                        all_related_value += parse_value;
                    }
                }
            }
        }

        var default_attributes = "";

        // switch based on the number of childrens
        switch (required_containers) {
            // 1 child
            case 1:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " flex: 1 1 auto; display: flex; flex-direction: column; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var new_node = {
                    "title": parent_title,
                    "nodes": related_children[tt],
                    "value": related_value[tt]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(parent_container, i_chart, new_node, tt, required_containers, all_related_value, new_node.title, color_index);

                break;
            // 2 children
            case 2:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " flex: 1 1 auto; display: flex; flex-direction: column; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(parent_container, i_chart, new_node1, 0, 2, all_related_value, new_node1.title, color_index);
                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(parent_container, i_chart, new_node2, 1, 2, all_related_value, new_node2.title, color_index);

                break;
            // 3 children
            case 3:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                //parent_style += " width: 100%; display: flex; flex-direction: column; " + default_attributes;
                parent_style += " display: flex; flex-direction: column; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var nodes_total = related_value[0] + related_value[1] + related_value[2];

                // draw the top container
                var top_container_height = ((related_value[0] / nodes_total) * 100) + "%";
                var top_container = document.createElement("div");
                top_container.id = "top_container3b";
                var top_container_style = document.createAttribute("style");
                top_container_style.value = "flex: 1 1 auto; height: " + top_container_height + "; display: flex; flex-direction: column; " + default_attributes;
                top_container.setAttributeNode( top_container_style );
                parent_container.appendChild( top_container );

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(top_container, i_chart, new_node1, 0, 3, nodes_total, new_node1.title, color_index);

                var i_node_bottom_total = related_value[1] + related_value[2];

                // draw the bottom container
                var bottom_container_height = ((i_node_bottom_total / nodes_total) * 100) + "%";
                var bottom_container = document.createElement("div");
                bottom_container.id = "bottom_container";
                var bottom_container_style = document.createAttribute("style");
                bottom_container_style.value = "flex: 1 1 auto; height: " + bottom_container_height + "; display: flex; flex-direction: row; " + default_attributes;
                bottom_container.setAttributeNode( bottom_container_style );
                parent_container.appendChild( bottom_container );

                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(bottom_container, i_chart, new_node2, 1, 3, i_node_bottom_total, new_node2.title, color_index);
                var new_node3 = {
                    "title": parent_title,
                    "nodes": related_children[2],
                    "value": related_value[2]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(bottom_container, i_chart, new_node3, 2, 3, i_node_bottom_total, new_node3.title, color_index);

                break;
            // 4 children
            case 4:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                //parent_style += " width: 100%; display: flex; flex-direction: column; " + default_attributes;
                parent_style += " display: flex; flex-direction: column; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var nodes_total = (related_value[0] + related_value[1] + related_value[2] + related_value[3]);

                // draw the top container
                var top_container_height = ((related_value[0] / nodes_total) * 100) + "%";
                var top_container = document.createElement("div");
                top_container.id = "top_container4b";
                var top_container_style = document.createAttribute("style");
                top_container_style.value = "flex: 1 1 auto; height: " + top_container_height + "; display: flex; flex-direction: column; " + default_attributes;
                top_container.setAttributeNode( top_container_style );
                parent_container.appendChild( top_container );

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(top_container, i_chart, new_node1, 0, 4, (related_value[0] + related_value[2]), new_node1.title, color_index);

                // draw the bottom container
                var bottom_container_height = (((related_value[1] + related_value[2] + related_value[3]) / nodes_total) * 100) + "%";
                var bottom_container = document.createElement("div");
                bottom_container.id = "bottom_container";
                var bottom_container_style = document.createAttribute("style");
                bottom_container_style.value = "flex: 1 1 auto; height: " + bottom_container_height + "; display: flex; flex-direction: row; " + default_attributes;
                bottom_container.setAttributeNode( bottom_container_style );
                parent_container.appendChild( bottom_container );

                // draw the bottom_left container
                var bottom_left_container_width = (((related_value[2] + related_value[3]) / (related_value[1] + related_value[2] + related_value[3])) * 100) + "%";
                var bottom_left_container = document.createElement("div");
                bottom_left_container.id = "bottom_left_container";
                var bottom_left_container_style = document.createAttribute("style");
                bottom_left_container_style.value = "flex: 1 1 auto; width: " + bottom_left_container_width + "; display: flex; flex-direction: column; " + default_attributes;
                bottom_left_container.setAttributeNode( bottom_left_container_style );
                bottom_container.appendChild( bottom_left_container );

                // draw the bottom_right container
                var bottom_right_container_width = ((related_value[1] / (related_value[1] + related_value[2] + related_value[3])) * 100) + "%";
                var bottom_right_container = document.createElement("div");
                bottom_right_container.id = "bottom_right_container";
                var bottom_right_container_style = document.createAttribute("style");
                bottom_right_container_style.value = "flex: 1 1 auto; width: " + bottom_right_container_width + "; display: flex; flex-direction: row; " + default_attributes;
                bottom_right_container.setAttributeNode( bottom_right_container_style );
                bottom_container.appendChild( bottom_right_container );

                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(bottom_right_container, i_chart, new_node2, 1, 4, (related_value[1] + related_value[3]), new_node2.title, color_index);
                var new_node3 = {
                    "title": parent_title,
                    "nodes": related_children[2],
                    "value": related_value[2]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(bottom_left_container, i_chart, new_node3, 2, 4, (related_value[0] + related_value[2]), new_node3.title, color_index);
                var new_node4 = {
                    "title": parent_title,
                    "nodes": related_children[3],
                    "value": related_value[3]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Pivot(bottom_left_container, i_chart, new_node4, 3, 4, (related_value[1] + related_value[3]), new_node4.title, color_index);

                break;
        }
    }

    return true;
}
// prepare the parent -- mode = portrait and algorithm = quad
function jsChartTreemapPrepareTreemapContainers_Portrait_Quad(parent_container, i_chart, i_nodes, parent_title, color_index) {
    // less than 4 children -- draw ... those ... children
    if (i_nodes.length < 5) {

        // switch based on the number of childrens
        switch (i_nodes.length) {
            // 1 child
            case 1:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: column;";
                parent_container.setAttribute("style", parent_style);

                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Quad(parent_container, i_chart, i_nodes[0], 0, 1, i_nodes[0].value, i_nodes[0].title, color_index, true);

                break;
            // 2 children
            case 2:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: row;";
                parent_container.setAttribute("style", parent_style);

                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Portrait_Quad(parent_container, i_chart, i_nodes[0], 0, 2, (i_nodes[0].value + i_nodes[1].value), i_nodes[0].title, color_index, true);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Portrait_Quad(parent_container, i_chart, i_nodes[1], 1, 2, (i_nodes[0].value + i_nodes[1].value), i_nodes[1].title, color_index, true);

                break;
            // 3 children
            case 3:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: row;";
                parent_container.setAttribute("style", parent_style);

                var nodes_total = i_nodes[0].value + i_nodes[1].value + i_nodes[2].value;

                // draw the left container
                var left_container_width = ((i_nodes[0].value / nodes_total) * 100) + "%";
                var left_container = document.createElement("div");
                left_container.id = "left_container3a";
                var left_container_style = document.createAttribute("style");
                left_container_style.value = "flex: 1 1 auto; width: " + left_container_width + "; display: flex; flex-direction: column;";
                left_container.setAttributeNode( left_container_style );
                parent_container.appendChild( left_container );

                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Quad(left_container, i_chart, i_nodes[0], 0, 3, i_nodes[0].value, i_nodes[0].title, color_index, true);

                var i_node_right_total = i_nodes[1].value + i_nodes[2].value;

                // draw the right container
                var right_container_width = ((i_node_right_total / nodes_total) * 100) + "%";
                var right_container = document.createElement("div");
                right_container.id = "right_container";
                var right_container_style = document.createAttribute("style");
                right_container_style.value = "flex: 1 1 auto; width: " + right_container_width + "; display: flex; flex-direction: column;";
                right_container.setAttributeNode( right_container_style );
                parent_container.appendChild( right_container );

                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Portrait_Quad(right_container, i_chart, i_nodes[1], 1, 3, i_node_right_total, i_nodes[1].title, color_index, true);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Portrait_Quad(right_container, i_chart, i_nodes[2], 2, 3, i_node_right_total, i_nodes[2].title, color_index, true);

                break;
            // 4 children
            case 4:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " display: flex; flex-direction: row;";
                parent_container.setAttribute("style", parent_style);

                var nodes_total = (i_nodes[0].value + i_nodes[1].value + i_nodes[2].value + i_nodes[3].value);

                // draw the left container
                var left_container_width = (((i_nodes[0].value + i_nodes[3].value) / nodes_total) * 100) + "%";
                var left_container = document.createElement("div");
                left_container.id = "left_container4a";
                var left_container_style = document.createAttribute("style");
                left_container_style.value = "flex: 1 1 auto; width: " + left_container_width + "; display: flex; flex-direction: column;";
                left_container.setAttributeNode( left_container_style );
                parent_container.appendChild( left_container );

                var draw_treemap_panels3 = jsChartTreemapDrawTreemapContainers_Portrait_Quad(left_container, i_chart, i_nodes[3], 3, 4, (i_nodes[0].value + i_nodes[3].value), i_nodes[3].title, color_index, true);
                var draw_treemap_panels0 = jsChartTreemapDrawTreemapContainers_Portrait_Quad(left_container, i_chart, i_nodes[0], 0, 4, (i_nodes[0].value + i_nodes[3].value), i_nodes[0].title, color_index, true);

                // draw the right container
                var right_container_width = (((i_nodes[1].value + i_nodes[2].value) / nodes_total) * 100) + "%";
                var right_container = document.createElement("div");
                right_container.id = "right_container";
                var right_container_style = document.createAttribute("style");
                right_container_style.value = "flex: 1 1 auto; width: " + right_container_width + "; display: flex; flex-direction: column;";
                right_container.setAttributeNode( right_container_style );
                parent_container.appendChild( right_container );

                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Portrait_Quad(right_container, i_chart, i_nodes[1], 1, 4, (i_nodes[1].value + i_nodes[2].value), i_nodes[1].title, color_index, true);
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Portrait_Quad(right_container, i_chart, i_nodes[2], 2, 4, (i_nodes[1].value + i_nodes[2].value), i_nodes[2].title, color_index, true);

                break;
        }
    } else {

        var required_containers = jsChartTreemapCalculateContainerCount(i_nodes.length);
        var maximum_children = Math.ceil(i_nodes.length / required_containers);

        var related_children = [];
        var related_value = [];
        var all_related_value = 0;
        var related_total = 0;
        for (var a = 0; a < required_containers; a++) {
            related_children[a] = [];
            related_value[a] = 0;
            for (var b = 0; b < maximum_children; b++) {
                related_total++;
                if (related_total <= i_nodes.length) {
                    var this_node = i_nodes[ (related_total-1) ];
                    var parse_value = parseFloat( this_node.value );
                    if (!isNaN(parse_value)) {
                        related_children[a].push( this_node );
                        related_value[a] += parse_value;
                        all_related_value += parse_value;
                    }
                }
            }
        }

        var default_attributes = "";

        // switch based on the number of childrens
        switch (required_containers) {
            // 1 child
            case 1:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " flex: 1 1 auto; display: flex; flex-direction: column; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var new_node = {
                    "title": parent_title,
                    "nodes": related_children[tt],
                    "value": related_value[tt]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Quad(parent_container, i_chart, new_node, tt, required_containers, all_related_value, new_node.title, color_index);

                break;
            // 2 children
            case 2:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                parent_style += " flex: 1 1 auto; display: flex; flex-direction: row; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var draw_treemap_panels1 = jsChartTreemapDrawTreemapContainers_Portrait_Quad(parent_container, i_chart, new_node1, 0, 2, all_related_value, new_node1.title, color_index);
                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var draw_treemap_panels2 = jsChartTreemapDrawTreemapContainers_Portrait_Quad(parent_container, i_chart, new_node2, 1, 2, all_related_value, new_node2.title, color_index);

                break;
            // 3 children
            case 3:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                //parent_style += " width: 100%; display: flex; flex-direction: row; " + default_attributes;
                parent_style += " display: flex; flex-direction: row; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var nodes_total = related_value[0] + related_value[1] + related_value[2];

                // draw the left container
                var left_container_width = ((related_value[0] / nodes_total) * 100) + "%";
                var left_container = document.createElement("div");
                left_container.id = "left_container3b";
                var left_container_style = document.createAttribute("style");
                left_container_style.value = "flex: 1 1 auto; width: " + left_container_width + "; display: flex; flex-direction: column; " + default_attributes;
                left_container.setAttributeNode( left_container_style );
                parent_container.appendChild( left_container );

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Quad(left_container, i_chart, new_node1, 0, 3, nodes_total, new_node1.title, color_index);

                var i_node_right_total = related_value[1] + related_value[2];

                // draw the right container
                var right_container_width = ((i_node_right_total / nodes_total) * 100) + "%";
                var right_container = document.createElement("div");
                right_container.id = "right_container";
                var right_container_style = document.createAttribute("style");
                right_container_style.value = "flex: 1 1 auto; width: " + right_container_width + "; display: flex; flex-direction: column; " + default_attributes;
                right_container.setAttributeNode( right_container_style );
                parent_container.appendChild( right_container );

                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Quad(right_container, i_chart, new_node2, 1, 3, i_node_right_total, new_node2.title, color_index);
                var new_node3 = {
                    "title": parent_title,
                    "nodes": related_children[2],
                    "value": related_value[2]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Quad(right_container, i_chart, new_node3, 2, 3, i_node_right_total, new_node3.title, color_index);

                break;
            // 4 children
            case 4:
                var parent_style = parent_container.getAttribute("style");
                if (parent_style == null) {
                    parent_style = "";
                }
                //parent_style += " width: 100%; display: flex; flex-direction: row; " + default_attributes;
                parent_style += " display: flex; flex-direction: row; " + default_attributes;
                parent_container.setAttribute("style", parent_style);

                var nodes_total = (related_value[0] + related_value[1] + related_value[2] + related_value[3]);

                // draw the left container
                var left_container_width = (((related_value[0] + related_value[3]) / nodes_total) * 100) + "%";
                var left_container = document.createElement("div");
                left_container.id = "left_container4b";
                var left_container_style = document.createAttribute("style");
                left_container_style.value = "flex: 1 1 auto; width: " + left_container_width + "; display: flex; flex-direction: column; " + default_attributes;
                left_container.setAttributeNode( left_container_style );
                parent_container.appendChild( left_container );

                var new_node1 = {
                    "title": parent_title,
                    "nodes": related_children[0],
                    "value": related_value[0]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Quad(left_container, i_chart, new_node1, 0, 4, (related_value[0] + related_value[3]), new_node1.title, color_index);
                var new_node4 = {
                    "title": parent_title,
                    "nodes": related_children[3],
                    "value": related_value[3]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Quad(left_container, i_chart, new_node4, 3, 4, (related_value[0] + related_value[3]), new_node4.title, color_index);

                // draw the right container
                var right_container_width = (((related_value[1] + related_value[2]) / nodes_total) * 100) + "%";
                var right_container = document.createElement("div");
                right_container.id = "right_container";
                var right_container_style = document.createAttribute("style");
                right_container_style.value = "flex: 1 1 auto; width: " + right_container_width + "; display: flex; flex-direction: column; " + default_attributes;
                right_container.setAttributeNode( right_container_style );
                parent_container.appendChild( right_container );

                var new_node2 = {
                    "title": parent_title,
                    "nodes": related_children[1],
                    "value": related_value[1]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Quad(right_container, i_chart, new_node2, 1, 4, (related_value[1] + related_value[2]), new_node2.title, color_index);
                var new_node3 = {
                    "title": parent_title,
                    "nodes": related_children[2],
                    "value": related_value[2]
                }
                var draw_treemap_panels = jsChartTreemapDrawTreemapContainers_Portrait_Quad(right_container, i_chart, new_node3, 2, 4, (related_value[1] + related_value[2]), new_node3.title, color_index);

                break;
        }
    }

    return true;
}
/* draw a treemap in landscape mode using the snake algorithm. A 4 container layout will look similar to this:
+---------+------+----+----+
|         |      |    |    |
|    1    |  2   |  3 |  4 |
|         |      |    |    |
+---------+------+----+----+
*/
function jsChartTreemapDrawTreemapContainers_Landscape_Snake(parent_container, i_chart, i_node, sibling_index, sibling_count, parent_value, parent_title, color_index, render_container_margins = false) {

    // increment the color index
    if (render_container_margins) {
        color_index++;
        if (color_index >= i_chart.i_design.color_palette.length) {
            color_index = 0;
        }
    }

    // sort the children node
    if ((i_node.nodes) && (i_chart.i_options.sortdata)) {
        i_node.nodes.sort(  (a, b) => (a.value > b.value ? -1 : 0) );
    }

    // create the node container
    var node_container = document.createElement("div");
    node_container.id = "node_container_" + color_index;

    var node_container_title = document.createAttribute("title");
    node_container_title.value = i_node.title + ": " + jsChartCommonFormatChartAmount(i_node.value, i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
    node_container.setAttributeNode( node_container_title );
    parent_container.appendChild( node_container );

    // set some default attributes
    var default_attributes = "position: relative; text-align: center; background-color: " + jsChartTreemapReturnBlockBGColor(i_chart.i_data_type, i_node.value, parent_value, i_chart.i_totals[0].total_abs_value, i_node.bg_color, color_index, i_chart.i_design.palette_position_type, i_chart.i_design.palette_type, i_chart.i_design.color_palette, i_chart.i_design.color_position) + "; color: " + i_chart.i_design.datalabel_text_color + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: var(--js-chart-size-xsmall);";

    // switch on the total number of siblings
    switch( sibling_count ) {
        // 1 x total siblings
        case 1:
            var node_container_style = document.createAttribute("style");
            node_container_style.value = "flex: 1 1 auto; width: 100%; " + default_attributes;
            node_container.setAttributeNode( node_container_style );

            break;
        // 2 x total siblings
        case 2:
            var node_container_width = ((i_node.value / parent_value) * 100) + "%";
            var node_container_style = document.createAttribute("style");
            node_container_style.value = "flex: 1 1 auto; width: " + node_container_width + "; " + default_attributes;
            node_container.setAttributeNode( node_container_style );

            break;
        // 3 x total siblings
        case 3:
            var node_container_width = ((i_node.value / parent_value) * 100) + "%";
            var node_container_style = document.createAttribute("style");
            node_container_style.value = "flex: 1 1 auto; width: " + node_container_width + "; " + default_attributes;
            node_container.setAttributeNode( node_container_style );

            break;
        // 4 x total siblings
        case 4:
            var node_container_width = ((i_node.value / parent_value) * 100) + "%";
            var node_container_style = document.createAttribute("style");
            node_container_style.value = "flex: 1 1 auto; width: " + node_container_width + "; " + default_attributes;
            node_container.setAttributeNode( node_container_style );

            break;
    }

    // prepare the parent if it has children
    if (i_node.nodes) {

        var prepare_parent = jsChartTreemapPrepareTreemapContainers_Landscape_Snake(node_container, i_chart, i_node.nodes, i_node.title, color_index);

    // this element is a value element (no chidren)
    } else {

        var this_aspect_ratio = (node_container.clientWidth / node_container.clientHeight);
        i_chart.aspect_ratios.total += this_aspect_ratio;
        i_chart.aspect_ratios.count++;
        if (this_aspect_ratio < i_chart.aspect_ratios.min) {
            i_chart.aspect_ratios.min = this_aspect_ratio;
        }
        if (this_aspect_ratio > i_chart.aspect_ratios.max) {
            i_chart.aspect_ratios.max = this_aspect_ratio;
        }

        // draw the data label
        if (i_chart.i_options.showlabels) {

            var datalabel = document.createElement("div");
            var datalabel_style = document.createAttribute("style");
            datalabel_style.value = "position: absolute; text-align: center; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
            datalabel.setAttributeNode( datalabel_style );
            var datalabel_title = document.createAttribute("title");
            datalabel_title.value = i_node.title + ": " + i_node.value;
            datalabel.setAttributeNode( datalabel_title );
            datalabel.innerText = i_node.title + ": " + i_node.value;
            node_container.appendChild( datalabel );
        }

        // set the value specific attributes
        var node_container_style = node_container.getAttribute("style");
        node_container_style += " border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + "/ 2); box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
        node_container.setAttribute("style", node_container_style);

    }

    return true;
}
/* draw a treemap in landscape mode using the pivot algorithm. A 4 container layout will look similar to this:
+-------------+-------+
|             |   2   |
|             |       |
+     1       +---+---+
|             | 3 | 4 |
|             |   |   |
+-------------+---+---+
*/
function jsChartTreemapDrawTreemapContainers_Landscape_Pivot(parent_container, i_chart, i_node, sibling_index, sibling_count, parent_value, parent_title, color_index, render_container_margins = false) {

    // increment the color index
    if (render_container_margins) {
        color_index++;
        if (color_index >= i_chart.i_design.color_palette.length) {
            color_index = 0;
        }
    }

    // sort the children node
    if ((i_node.nodes) && (i_chart.i_options.sortdata)) {
        i_node.nodes.sort(  (a, b) => (a.value > b.value ? -1 : 0) );
    }

    // create the node container
    var node_container = document.createElement("div");
    node_container.id = "node_container_" + color_index;

    var node_container_title = document.createAttribute("title");
    node_container_title.value = i_node.title + ": " + jsChartCommonFormatChartAmount(i_node.value, i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
    node_container.setAttributeNode( node_container_title );
    parent_container.appendChild( node_container );

    // set some default attributes
    var default_attributes = "position: relative; text-align: center; background-color: " + jsChartTreemapReturnBlockBGColor(i_chart.i_data_type, i_node.value, parent_value, i_chart.i_totals[0].total_abs_value, i_node.bg_color, color_index, i_chart.i_design.palette_position_type, i_chart.i_design.palette_type, i_chart.i_design.color_palette, i_chart.i_design.color_position) + "; color: " + i_chart.i_design.datalabel_text_color + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: var(--js-chart-size-xsmall);";

    // switch on the total number of siblings
    switch( sibling_count ) {
        // 1 x total siblings
        case 1:
            var node_container_style = document.createAttribute("style");
            node_container_style.value = "flex: 1 1 auto; width: 100%; " + default_attributes;
            node_container.setAttributeNode( node_container_style );

            break;
        // 2 x total siblings
        case 2:
            var node_container_width = ((i_node.value / parent_value) * 100) + "%";
            var node_container_style = document.createAttribute("style");
            node_container_style.value = "flex: 1 1 auto; width: " + node_container_width + "; " + default_attributes;
            node_container.setAttributeNode( node_container_style );

            break;
        // 3 x total siblings
        case 3:
            // switch based on the sibling position/index
            switch (sibling_index) {
                // first sibling
                case 0:
                    var node_container_width = ((i_node.value / parent_value) * 100) + "%";
                    var node_container_style = document.createAttribute("style");
                    node_container_style.value = "flex: 1 1 auto; width: " + node_container_width + "; " + default_attributes;
                    node_container.setAttributeNode( node_container_style );

                    break;
                // secind/third sibling
                case 1:
                case 2:
                    var node_container_height = ((i_node.value / parent_value) * 100) + "%";
                    var node_container_style = document.createAttribute("style");
                    node_container_style.value = "flex: 1 1 auto; height: " + node_container_height + "; " + default_attributes;
                    node_container.setAttributeNode( node_container_style );

                    break;
            }

            break;
        // 4 x total siblings
        case 4:
            // switch on the sibling index/position
            switch( sibling_index ){
                // first sibling
                case 0:
                    var node_container_width = ((i_node.value / parent_value) * 100) + "%";
                    var node_container_style = document.createAttribute("style");
                    node_container_style.value = "flex: 1 1 auto; width: " + node_container_width + "; " + default_attributes;
                    node_container.setAttributeNode( node_container_style );

                    break;
                // second sibling
                case 1:
                    var node_container_height = ((i_node.value / parent_value) * 100) + "%";
                    var node_container_style = document.createAttribute("style");
                    node_container_style.value = "flex: 1 1 auto; height: " + node_container_height + "; " + default_attributes;
                    node_container.setAttributeNode( node_container_style );

                    break;
                // third/fourth  sibling
                case 2:
                case 3:
                    var node_container_width = ((i_node.value / parent_value) * 100) + "%";
                    var node_container_style = document.createAttribute("style");
                    node_container_style.value = "flex: 1 1 auto; width: " + node_container_width + "; " + default_attributes;
                    node_container.setAttributeNode( node_container_style );

                    break;
            }
    }

    // prepare the parent if it has children
    if (i_node.nodes) {

        var prepare_parent = jsChartTreemapPrepareTreemapContainers_Landscape_Pivot(node_container, i_chart, i_node.nodes, i_node.title, color_index);

    // this element is a value element (no chidren)
    } else {

        var this_aspect_ratio = (node_container.clientWidth / node_container.clientHeight);
        i_chart.aspect_ratios.total += this_aspect_ratio;
        i_chart.aspect_ratios.count++;
        if (this_aspect_ratio < i_chart.aspect_ratios.min) {
            i_chart.aspect_ratios.min = this_aspect_ratio;
        }
        if (this_aspect_ratio > i_chart.aspect_ratios.max) {
            i_chart.aspect_ratios.max = this_aspect_ratio;
        }

        // draw the data label
        if (i_chart.i_options.showlabels) {

            var datalabel = document.createElement("div");
            var datalabel_style = document.createAttribute("style");
            datalabel_style.value = "position: absolute; text-align: center; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
            datalabel.setAttributeNode( datalabel_style );
            var datalabel_title = document.createAttribute("title");
            datalabel_title.value = i_node.title + ": " + i_node.value;
            datalabel.setAttributeNode( datalabel_title );
            datalabel.innerText = i_node.title + ": " + i_node.value;
            node_container.appendChild( datalabel );
        }

        // set the value specific attributes
        var node_container_style = node_container.getAttribute("style");
        node_container_style += " border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + "/ 2); box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
        node_container.setAttribute("style", node_container_style);

    }

    return true;
}
/* draw a treemap in landscape mode using the quad algorithm. A 4 container layout will look similar to this:
+----------+-----+
|    4     |  2  |
+----------+     |
|          |     |
+    1     +-----+
|          |  3  |
+----------+-----+
*/
function jsChartTreemapDrawTreemapContainers_Landscape_Quad(parent_container, i_chart, i_node, sibling_index, sibling_count, parent_value, parent_title, color_index, render_container_margins = false) {

    // increment the color index
    if (render_container_margins) {
        color_index++;
        if (color_index >= i_chart.i_design.color_palette.length) {
            color_index = 0;
        }
    }

    // sort the children node
    if ((i_node.nodes) && (i_chart.i_options.sortdata)) {
        i_node.nodes.sort(  (a, b) => (a.value > b.value ? -1 : 0) );
    }

    // create the node container
    var node_container = document.createElement("div");
    node_container.id = "node_container_" + color_index;

    var node_container_title = document.createAttribute("title");
    node_container_title.value = i_node.title + ": " + jsChartCommonFormatChartAmount(i_node.value, i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
    node_container.setAttributeNode( node_container_title );
    parent_container.appendChild( node_container );

    // set some default attributes
    var default_attributes = "position: relative; text-align: center; background-color: " + jsChartTreemapReturnBlockBGColor(i_chart.i_data_type, i_node.value, parent_value, i_chart.i_totals[0].total_abs_value, i_node.bg_color, color_index, i_chart.i_design.palette_position_type, i_chart.i_design.palette_type, i_chart.i_design.color_palette, i_chart.i_design.color_position) + "; color: " + i_chart.i_design.datalabel_text_color + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: var(--js-chart-size-xsmall);";

    // switch on the total number of siblings
    switch( sibling_count ) {
        // 1 x total siblings
        case 1:
            var node_container_style = document.createAttribute("style");
            node_container_style.value = "flex: 1 1 auto; width: 100%; " + default_attributes;
            node_container.setAttributeNode( node_container_style );

            break;
        // 2 x total siblings
        case 2:
            var node_container_height = ((i_node.value / parent_value) * 100) + "%";
            var node_container_style = document.createAttribute("style");
            node_container_style.value = "flex: 1 1 auto; height: " + node_container_height + "; " + default_attributes;
            node_container.setAttributeNode( node_container_style );

            break;
        // 3 x total siblings
        case 3:
            // switch based on the sibling position/index
            switch (sibling_index) {
                // first sibling
                case 0:
                    var node_container_width = ((i_node.value / parent_value) * 100) + "%";
                    var node_container_style = document.createAttribute("style");
                    node_container_style.value = "flex: 1 1 auto; width: " + node_container_width + "; " + default_attributes;
                    node_container.setAttributeNode( node_container_style );

                    break;
                // secind/third sibling
                case 1:
                case 2:
                    var node_container_width = ((i_node.value / parent_value) * 100) + "%";
                    var node_container_style = document.createAttribute("style");
                    node_container_style.value = "flex: 1 1 auto; width: " + node_container_width + "; " + default_attributes;
                    node_container.setAttributeNode( node_container_style );

                    break;
            }

            break;
        // 4 x total siblings
        case 4:
            var node_container_width = ((i_node.value / parent_value) * 100) + "%";
            var node_container_style = document.createAttribute("style");
            node_container_style.value = "flex: 1 1 auto; width: " + node_container_width + "; " + default_attributes;
            node_container.setAttributeNode( node_container_style );

            break;
    }

    // prepare the parent if it has children
    if (i_node.nodes) {

        var prepare_parent = jsChartTreemapPrepareTreemapContainers_Landscape_Quad(node_container, i_chart, i_node.nodes, i_node.title, color_index);

    // this element is a value element (no chidren)
    } else {

        var this_aspect_ratio = (node_container.clientWidth / node_container.clientHeight);
        i_chart.aspect_ratios.total += this_aspect_ratio;
        i_chart.aspect_ratios.count++;
        if (this_aspect_ratio < i_chart.aspect_ratios.min) {
            i_chart.aspect_ratios.min = this_aspect_ratio;
        }
        if (this_aspect_ratio > i_chart.aspect_ratios.max) {
            i_chart.aspect_ratios.max = this_aspect_ratio;
        }

        // draw the data label
        if (i_chart.i_options.showlabels) {

            var datalabel = document.createElement("div");
            var datalabel_style = document.createAttribute("style");
            datalabel_style.value = "position: absolute; text-align: center; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
            datalabel.setAttributeNode( datalabel_style );
            var datalabel_title = document.createAttribute("title");
            datalabel_title.value = i_node.title + ": " + i_node.value;
            datalabel.setAttributeNode( datalabel_title );
            datalabel.innerText = i_node.title + ": " + i_node.value;
            node_container.appendChild( datalabel );
        }

        // set the value specific attributes
        var node_container_style = node_container.getAttribute("style");
        node_container_style += " border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + "/ 2); box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
        node_container.setAttribute("style", node_container_style);

    }

    return true;
}
/* draw a treemap in portrait mode using the snake algorithm. A 4 container layout will look similar to this:
+---------+
|         |
|   1     |
|         |
+---------+
|   2     |
+---------+
|   3     |
+---------+
|   4     |
+---------+
*/
function jsChartTreemapDrawTreemapContainers_Portrait_Snake(parent_container, i_chart, i_node, sibling_index, sibling_count, parent_value, parent_title, color_index, render_container_margins = false) {

    // increment the color index
    if (render_container_margins) {
        color_index++;
        if (color_index >= i_chart.i_design.color_palette.length) {
            color_index = 0;
        }
    }

    // sort the children node
    if ((i_node.nodes) && (i_chart.i_options.sortdata)) {
        i_node.nodes.sort(  (a, b) => (a.value > b.value ? -1 : 0) );
    }

    // create the node container
    var node_container = document.createElement("div");
    node_container.id = "node_container_" + color_index;

    var node_container_title = document.createAttribute("title");
    node_container_title.value = i_node.title + ": " + jsChartCommonFormatChartAmount(i_node.value, i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
    node_container.setAttributeNode( node_container_title );
    parent_container.appendChild( node_container );

    // set some default attributes
    var default_attributes = "position: relative; text-align: center; background-color: " + jsChartTreemapReturnBlockBGColor(i_chart.i_data_type, i_node.value, parent_value, i_chart.i_totals[0].total_abs_value, i_node.bg_color, color_index, i_chart.i_design.palette_position_type, i_chart.i_design.palette_type, i_chart.i_design.color_palette, i_chart.i_design.color_position) + "; color: " + i_chart.i_design.datalabel_text_color + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: var(--js-chart-size-xsmall);";

    // switch on the total number of siblings
    switch( sibling_count ) {
        // 1 x total siblings
        case 1:
            var node_container_style = document.createAttribute("style");
            node_container_style.value = "flex: 1 1 auto; height: 100%; " + default_attributes;
            node_container.setAttributeNode( node_container_style );

            break;
        // 2 x total siblings
        case 2:
            var node_container_height = ((i_node.value / parent_value) * 100) + "%";
            var node_container_style = document.createAttribute("style");
            node_container_style.value = "flex: 1 1 auto; height: " + node_container_height + "; " + default_attributes;
            node_container.setAttributeNode( node_container_style );

            break;
        // 3 x total siblings
        case 3:
            // switch based on the sibling position/index
            switch (sibling_index) {
                // first /second / third sibling
                case 0:
                case 1:
                case 2:
                    var node_container_height = ((i_node.value / parent_value) * 100) + "%";
                    var node_container_style = document.createAttribute("style");
                    node_container_style.value = "flex: 1 1 auto; height: " + node_container_height + "; " + default_attributes;
                    node_container.setAttributeNode( node_container_style );

                    break;
            }

            break;
        // 4 x total siblings
        case 4:
            // switch based on the sibling index/position
            switch(sibling_index) {
                // first /second / third / fourth index
                case 0:
                case 1:
                case 2:
                case 3:
                    var node_container_height = ((i_node.value / parent_value) * 100) + "%";
                    var node_container_style = document.createAttribute("style");
                    node_container_style.value = "flex: 1 1 auto; height: " + node_container_height + "; " + default_attributes;
                    node_container.setAttributeNode( node_container_style );

                    break;
            }

            break;


    }

    // prepare the parent if it has children
    if (i_node.nodes) {

        var prepare_parent = jsChartTreemapPrepareTreemapContainers_Portrait_Snake(node_container, i_chart, i_node.nodes, i_node.title, color_index);

    // this element is a value element (no chidren)
    } else {

        var this_aspect_ratio = (node_container.clientWidth / node_container.clientHeight);
        i_chart.aspect_ratios.total += this_aspect_ratio;
        i_chart.aspect_ratios.count++;
        if (this_aspect_ratio < i_chart.aspect_ratios.min) {
            i_chart.aspect_ratios.min = this_aspect_ratio;
        }
        if (this_aspect_ratio > i_chart.aspect_ratios.max) {
            i_chart.aspect_ratios.max = this_aspect_ratio;
        }

        // draw the data label
        if (i_chart.i_options.showlabels) {

            var datalabel = document.createElement("div");
            var datalabel_style = document.createAttribute("style");
            datalabel_style.value = "position: absolute; text-align: center; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
            datalabel.setAttributeNode( datalabel_style );
            var datalabel_title = document.createAttribute("title");
            datalabel_title.value = i_node.title + ": " + i_node.value;
            datalabel.setAttributeNode( datalabel_title );
            datalabel.innerText = i_node.title + ": " + i_node.value;
            node_container.appendChild( datalabel );
        }

        // set the value specific attributes
        var node_container_style = node_container.getAttribute("style");
        node_container_style += " border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + "/ 2); box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
        node_container.setAttribute("style", node_container_style);

    }

    return true;
}
/* draw a treemap in portrait mode using the pivot algorithm. A 4 container layout will look similar to this:
+---------+
|         |
|    1    |
+----+----+
|  3 |    |
+----+  2 |
| 4  |    |
+---------+
*/
function jsChartTreemapDrawTreemapContainers_Portrait_Pivot(parent_container, i_chart, i_node, sibling_index, sibling_count, parent_value, parent_title, color_index, render_container_margins = false) {

    // increment the color index
    if (render_container_margins) {
        color_index++;
        if (color_index >= i_chart.i_design.color_palette.length) {
            color_index = 0;
        }
    }

    // sort the children node
    if ((i_node.nodes) && (i_chart.i_options.sortdata)) {
        i_node.nodes.sort(  (a, b) => (a.value > b.value ? -1 : 0) );
    }

    // create the node container
    var node_container = document.createElement("div");
    node_container.id = "node_container_" + color_index;

    var node_container_title = document.createAttribute("title");
    node_container_title.value = i_node.title + ": " + jsChartCommonFormatChartAmount(i_node.value, i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
    node_container.setAttributeNode( node_container_title );
    parent_container.appendChild( node_container );

    // set some default attributes
    var default_attributes = "position: relative; text-align: center; background-color: " + jsChartTreemapReturnBlockBGColor(i_chart.i_data_type, i_node.value, parent_value, i_chart.i_totals[0].total_abs_value, i_node.bg_color, color_index, i_chart.i_design.palette_position_type, i_chart.i_design.palette_type, i_chart.i_design.color_palette, i_chart.i_design.color_position) + "; color: " + i_chart.i_design.datalabel_text_color + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: var(--js-chart-size-xsmall);";

    // switch on the total number of siblings
    switch( sibling_count ) {
        // 1 x total siblings
        case 1:
            var node_container_style = document.createAttribute("style");
            node_container_style.value = "flex: 1 1 auto; height: 100%; " + default_attributes;
            node_container.setAttributeNode( node_container_style );

            break;
        // 2 x total siblings
        case 2:
            var node_container_height = ((i_node.value / parent_value) * 100) + "%";
            var node_container_style = document.createAttribute("style");
            node_container_style.value = "flex: 1 1 auto; height: " + node_container_height + "; " + default_attributes;
            node_container.setAttributeNode( node_container_style );

            break;
        // 3 x total siblings
        case 3:
            // switch based on the sibling position/index
            switch (sibling_index) {
                // first sibling
                case 0:
                    var node_container_height = ((i_node.value / parent_value) * 100) + "%";
                    var node_container_style = document.createAttribute("style");
                    node_container_style.value = "flex: 1 1 auto; height: " + node_container_height + "; " + default_attributes;
                    node_container.setAttributeNode( node_container_style );

                    break;
                // secind/third sibling
                case 1:
                case 2:
                    var node_container_width = ((i_node.value / parent_value) * 100) + "%";
                    var node_container_style = document.createAttribute("style");
                    node_container_style.value = "flex: 1 1 auto; width: " + node_container_width + "; " + default_attributes;
                    node_container.setAttributeNode( node_container_style );

                    break;
            }

            break;
        // 4 x total siblings
        case 4:
            // switch based on the sibling index/position
            switch(sibling_index) {
                // first index
                case 0:
                    var node_container_height = ((i_node.value / parent_value) * 100) + "%";
                    var node_container_style = document.createAttribute("style");
                    node_container_style.value = "flex: 1 1 auto; height: " + node_container_height + "; " + default_attributes;
                    node_container.setAttributeNode( node_container_style );

                    break;
                // second index
                case 1:
                    var node_container_width = ((i_node.value / parent_value) * 100) + "%";
                    var node_container_style = document.createAttribute("style");
                    node_container_style.value = "flex: 1 1 auto; width: " + node_container_width + "; " + default_attributes;
                    node_container.setAttributeNode( node_container_style );

                    break;
                // third/fourth index
                case 2:
                case 3:
                    var node_container_height = ((i_node.value / parent_value) * 100) + "%";
                    var node_container_style = document.createAttribute("style");
                    node_container_style.value = "flex: 1 1 auto; height: " + node_container_height + "; " + default_attributes;
                    node_container.setAttributeNode( node_container_style );

                    break;
                    }

            break;


    }

    // prepare the parent if it has children
    if (i_node.nodes) {

        var prepare_parent = jsChartTreemapPrepareTreemapContainers_Portrait_Pivot(node_container, i_chart, i_node.nodes, i_node.title, color_index);

    // this element is a value element (no chidren)
    } else {

        var this_aspect_ratio = (node_container.clientWidth / node_container.clientHeight);
        i_chart.aspect_ratios.total += this_aspect_ratio;
        i_chart.aspect_ratios.count++;
        if (this_aspect_ratio < i_chart.aspect_ratios.min) {
            i_chart.aspect_ratios.min = this_aspect_ratio;
        }
        if (this_aspect_ratio > i_chart.aspect_ratios.max) {
            i_chart.aspect_ratios.max = this_aspect_ratio;
        }

        // draw the data label
        if (i_chart.i_options.showlabels) {

            var datalabel = document.createElement("div");
            var datalabel_style = document.createAttribute("style");
            datalabel_style.value = "position: absolute; text-align: center; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
            datalabel.setAttributeNode( datalabel_style );
            var datalabel_title = document.createAttribute("title");
            datalabel_title.value = i_node.title + ": " + i_node.value;
            datalabel.setAttributeNode( datalabel_title );
            datalabel.innerText = i_node.title + ": " + i_node.value;
            node_container.appendChild( datalabel );
        }

        // set the value specific attributes
        var node_container_style = node_container.getAttribute("style");
        node_container_style += " border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + "/ 2); box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
        node_container.setAttribute("style", node_container_style);

    }

    return true;
}
/* draw a treemap in portrait mode using the quad algorithm. A 4 container layout will look similar to this:
+---------+-----+
|  1      |  4  |
|         |     |
+-----+---+-----+
|  3  |      2  |
+-----+---------+
*/
function jsChartTreemapDrawTreemapContainers_Portrait_Quad(parent_container, i_chart, i_node, sibling_index, sibling_count, parent_value, parent_title, color_index, render_container_margins = false) {

    // increment the color index
    if (render_container_margins) {
        color_index++;
        if (color_index >= i_chart.i_design.color_palette.length) {
            color_index = 0;
        }
    }

    // sort the children node
    if ((i_node.nodes) && (i_chart.i_options.sortdata)) {
        i_node.nodes.sort(  (a, b) => (a.value > b.value ? -1 : 0) );
    }

    // create the node container
    var node_container = document.createElement("div");
    node_container.id = "node_container_" + color_index;

    var node_container_title = document.createAttribute("title");
    node_container_title.value = i_node.title + ": " + jsChartCommonFormatChartAmount(i_node.value, i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
    node_container.setAttributeNode( node_container_title );
    parent_container.appendChild( node_container );

    // set some default attributes
    var default_attributes = "position: relative; text-align: center; background-color: " + jsChartTreemapReturnBlockBGColor(i_chart.i_data_type, i_node.value, parent_value, i_chart.i_totals[0].total_abs_value, i_node.bg_color, color_index, i_chart.i_design.palette_position_type, i_chart.i_design.palette_type, i_chart.i_design.color_palette, i_chart.i_design.color_position) + "; color: " + i_chart.i_design.datalabel_text_color + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: var(--js-chart-size-xsmall);";

    // switch on the total number of siblings
    switch( sibling_count ) {
        // 1 x total siblings
        case 1:
            var node_container_style = document.createAttribute("style");
            node_container_style.value = "flex: 1 1 auto; height: 100%; " + default_attributes;
            node_container.setAttributeNode( node_container_style );

            break;
        // 2 x total siblings
        case 2:
            var node_container_width = ((i_node.value / parent_value) * 100) + "%";
            var node_container_style = document.createAttribute("style");
            node_container_style.value = "flex: 1 1 auto; width: " + node_container_width + "; " + default_attributes;
            node_container.setAttributeNode( node_container_style );

            break;
        // 3 x total siblings
        case 3:
            // switch based on the sibling position/index
            switch (sibling_index) {
                // first sibling
                case 0:
                    var node_container_height = ((i_node.value / parent_value) * 100) + "%";
                    var node_container_style = document.createAttribute("style");
                    node_container_style.value = "flex: 1 1 auto; height: " + node_container_height + "; " + default_attributes;
                    node_container.setAttributeNode( node_container_style );

                    break;
                // secind/third sibling
                case 1:
                case 2:
                    var node_container_height = ((i_node.value / parent_value) * 100) + "%";
                    var node_container_style = document.createAttribute("style");
                    node_container_style.value = "flex: 1 1 auto; height: " + node_container_height + "; " + default_attributes;
                    node_container.setAttributeNode( node_container_style );

                    break;
            }

            break;
        // 4 x total siblings
        case 4:
            var node_container_height = ((i_node.value / parent_value) * 100) + "%";
            var node_container_style = document.createAttribute("style");
            node_container_style.value = "flex: 1 1 auto; height: " + node_container_height + "; " + default_attributes;
            node_container.setAttributeNode( node_container_style );

            break;


    }

    // prepare the parent if it has children
    if (i_node.nodes) {

        var prepare_parent = jsChartTreemapPrepareTreemapContainers_Portrait_Quad(node_container, i_chart, i_node.nodes, i_node.title, color_index);

    // this element is a value element (no chidren)
    } else {

        var this_aspect_ratio = (node_container.clientWidth / node_container.clientHeight);
        i_chart.aspect_ratios.total += this_aspect_ratio;
        i_chart.aspect_ratios.count++;
        if (this_aspect_ratio < i_chart.aspect_ratios.min) {
            i_chart.aspect_ratios.min = this_aspect_ratio;
        }
        if (this_aspect_ratio > i_chart.aspect_ratios.max) {
            i_chart.aspect_ratios.max = this_aspect_ratio;
        }

        // draw the data label
        if (i_chart.i_options.showlabels) {

            var datalabel = document.createElement("div");
            var datalabel_style = document.createAttribute("style");
            datalabel_style.value = "position: absolute; text-align: center; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
            datalabel.setAttributeNode( datalabel_style );
            var datalabel_title = document.createAttribute("title");
            datalabel_title.value = i_node.title + ": " + i_node.value;
            datalabel.setAttributeNode( datalabel_title );
            datalabel.innerText = i_node.title + ": " + i_node.value;
            node_container.appendChild( datalabel );
        }

        // set the value specific attributes
        var node_container_style = node_container.getAttribute("style");
        node_container_style += " border: " + i_chart.i_design.value_bar_border + "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + "/ 2); box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + ";";
        node_container.setAttribute("style", node_container_style);

    }

    return true;
}
// draw value containers (rows)
function jsChartMosaicDrawMarimekkoAbsoluteContainers(level1_inner_panel, i_chart, x_scale, y_scale, column_totals, col_grand_total) {

    for (var v = 0; v < i_chart.i_labels.length; v++) {

        var color_index = 0;

        var spacer_height = ((y_scale.max_scale_value - column_totals[v].total_abs_value) / y_scale.max_scale_value) * 100;
        var spacer = document.createElement("div");
        var spacer_style = document.createAttribute("style");
        spacer_style.value = "flex: 1 1 auto; height: " + spacer_height + "%; background-color: transparent; border: none; border-radius: 0px; box-shadow: none; opacity: 1.0; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2);";
        spacer.setAttributeNode( spacer_style );
        level1_inner_panel.children[v].appendChild( spacer );

        for (var s = 0; s < i_chart.i_data.length; s++) {

            var block_height = (i_chart.i_data[s][v] / y_scale.max_scale_value) * 100;
            var block_title = i_chart.i_labels[v] + "\n" + i_chart.i_titles[s] + "\n" + i_chart.i_data[s][v] + "\n" + roundNumber((i_chart.i_data[s][v] / column_totals[v].total_abs_value) * 100, 2) + "%";

            var value_block = document.createElement("div");
            var value_block_style = document.createAttribute("style");
            value_block_style.value = "flex: 1 1 auto; position: relative; height: " + block_height + "%; min-height: " + i_chart.i_design.value_bar_min_height + "; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2);";
            value_block.setAttributeNode( value_block_style );
            var value_block_title = document.createAttribute("title");
            value_block_title.value = block_title;
            value_block.setAttributeNode( value_block_title );
            level1_inner_panel.children[v].appendChild( value_block );

            // draw data labels
            if (i_chart.i_options.showlabels) {

                var datalabel = document.createElement("div");
                var datalabel_style = document.createAttribute("style");
                datalabel_style.value = "position: absolute; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
                datalabel.setAttributeNode( datalabel_style );
                datalabel.innerText = jsChartCommonFormatChartAmount(i_chart.i_data[s][v], i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                value_block.appendChild( datalabel );
            }

            color_index++;
            if (color_index >= i_chart.i_design.color_palette.length) {
                color_index = 0;
            }

        }
    }

    return true;
}
// draw value containers (rows)
function jsChartMosaicDrawMarimekkoRelativeContainers(level1_inner_panel, i_chart, x_scale, y_scale, column_totals, col_grand_total) {

    for (var v = 0; v < i_chart.i_labels.length; v++) {
        var color_index = 0;
        for (var s = 0; s < i_chart.i_data.length; s++) {

            var block_height = (i_chart.i_data[s][v] / column_totals[v].total_abs_value) * 100;
            var block_title = i_chart.i_labels[v] + "\n" + i_chart.i_titles[s] + "\n" + i_chart.i_data[s][v] + "\n" + roundNumber(block_height, 2) + "%";

            var value_block = document.createElement("div");
            var value_block_style = document.createAttribute("style");
            value_block_style.value = "flex: 1 1 auto; position: relative; height: " + block_height + "%; min-height: " + i_chart.i_design.value_bar_min_height + "; background-color: " + i_chart.i_design.color_palette[color_index] + "; border: " + i_chart.i_design.value_bar_border+ "; border-radius: " + i_chart.i_design.value_bar_border_radius + "; box-shadow: " + i_chart.i_design.value_bar_box_shadow + "; opacity: " + i_chart.i_design.value_bar_opacity + "; margin: calc(" + i_chart.i_design.value_bar_data_margin + " / 2);";
            value_block.setAttributeNode( value_block_style );
            var value_block_title = document.createAttribute("title");
            value_block_title.value = block_title;
            value_block.setAttributeNode( value_block_title );
            level1_inner_panel.children[v].appendChild( value_block );

            // draw data labels
            if (i_chart.i_options.showlabels) {

                var datalabel = document.createElement("div");
                var datalabel_style = document.createAttribute("style");
                datalabel_style.value = "position: absolute; width: " + i_chart.i_design.datalabel_width + "; height: " + i_chart.i_design.datalabel_height + "; line-height: " + i_chart.i_design.datalabel_height + "; left: calc(50% - (" + i_chart.i_design.datalabel_width + " / 2)); top: calc(50% - (" + i_chart.i_design.datalabel_height + " / 2)); font-family: " + i_chart.i_design.datalabel_font_family + "; font-size: " + i_chart.i_design.datalabel_font_size + "; font-weight: " + i_chart.i_design.datalabel_font_weight + "; background-color: " + i_chart.i_design.datalabel_bg_color + "; color: " + i_chart.i_design.datalabel_text_color + "; border: " + i_chart.i_design.datalabel_border + "; border-radius: " + i_chart.i_design.datalabel_border_radius + "; box-shadow: " + i_chart.i_design.datalabel_box_shadow + "; opacity: " + i_chart.i_design.datalabel_opacity + "; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis;";
                datalabel.setAttributeNode( datalabel_style );
                datalabel.innerText = jsChartCommonFormatChartAmount(roundNumber(block_height, 2) + "%", i_chart.i_design.datalabel_prepend, i_chart.i_design.datalabel_append);
                value_block.appendChild( datalabel );
            }

            color_index++;
            if (color_index >= i_chart.i_design.color_palette.length) {
                color_index = 0;
            }

        }
    }

    return true;
}
// draw series containers (columns)
function jsChartMosaicDrawMarimekkoSeriesContainers(level1_inner_panel, i_chart, x_scale, y_scale, column_totals, col_grand_total) {

    for (var v = 0; v < i_chart.i_labels.length; v++) {

        var series_width = (column_totals[v].total_value / col_grand_total) * 100;

        var series_container = document.createElement("div");
        var series_container_style = document.createAttribute("style");
        series_container_style.value = "flex: 1 1 auto; width: " + series_width + "%; min-width: " + i_chart.i_design.value_bar_min_width + "; display: flex; flex-direction: column;";
        series_container.setAttributeNode( series_container_style );
        level1_inner_panel.appendChild( series_container );
    }

    return true;
}
// draw level0 containers
function jsChartMosaicDrawLevel0Containers(base_level2_inner_panel, i_chart, x_scale, y_scale, column_totals, col_grand_total) {

    // draw level 0 inner panel
    var level0_inner_panel = document.createElement("div");
    var level0_inner_panel_class = document.createAttribute("class");
    level0_inner_panel_class.value = "js-chart-mosaic-level0-inner-panel";
    level0_inner_panel.setAttributeNode( level0_inner_panel_class );
    base_level2_inner_panel.appendChild( level0_inner_panel );

    // draw y-axis container
    var y_axis_container = document.createElement("div");
    var y_axis_container_class = document.createAttribute("class");
    y_axis_container_class.value = "js-chart-mosaic-y-axis-container";
    y_axis_container.setAttributeNode( y_axis_container_class );
    level0_inner_panel.appendChild( y_axis_container );

    // draw y-axis title container
    var y_axis_title_container = document.createElement("div");
    var y_axis_title_container_class = document.createAttribute("class");
    y_axis_title_container_class.value = "js-chart-mosaic-y-axis-title-container";
    y_axis_title_container.setAttributeNode( y_axis_title_container_class );
    y_axis_title_container.innerText = i_chart.i_options.ytitle;
    y_axis_container.appendChild( y_axis_title_container );

    // draw y-axis scale label container
    var y_axis_scale_label_container = document.createElement("div");
    var y_axis_scale_label_container_class = document.createAttribute("class");
    y_axis_scale_label_container_class.value = "js-chart-mosaic-y-axis-scale-label-container";
    y_axis_scale_label_container.setAttributeNode( y_axis_scale_label_container_class );
    y_axis_container.appendChild( y_axis_scale_label_container );

    var max_loop = 10;
    for (var tt = y_scale.max_scale_value; tt > y_scale.min_scale_value; tt=(tt-y_scale.step_value)) {

        var y_axis_scale_label_block = document.createElement("div");
        var y_axis_scale_label_block_class = document.createAttribute("class");
        y_axis_scale_label_block_class.value = "js-chart-mosaic-y-axis-scale-label-block";
        y_axis_scale_label_block.setAttributeNode( y_axis_scale_label_block_class );
        y_axis_scale_label_block.innerText = roundNumber(tt, 2) + y_scale.append_text;
        y_axis_scale_label_container.appendChild( y_axis_scale_label_block );

        max_loop--;
        if (max_loop == 0) {
            break;
        }
    }

    // draw last y-axis scale label block
    var last_y_axis_scale_label_block = document.createElement("div");
    var last_y_axis_scale_label_block_class = document.createAttribute("class");
    last_y_axis_scale_label_block_class.value = "js-chart-mosaic-y-axis-scale-label-block-last";
    last_y_axis_scale_label_block.setAttributeNode( last_y_axis_scale_label_block_class );
    last_y_axis_scale_label_block.innerText = roundNumber(y_scale.min_scale_value, 2) + y_scale.append_text;
    y_axis_scale_label_container.appendChild( last_y_axis_scale_label_block );

    // draw y-axis scale container
    var y_axis_scale_container = document.createElement("div");
    var y_axis_scale_container_class = document.createAttribute("class");
    y_axis_scale_container_class.value = "js-chart-mosaic-y-axis-scale-container";
    y_axis_scale_container.setAttributeNode( y_axis_scale_container_class );
    y_axis_container.appendChild( y_axis_scale_container );

    for (var tt = 0; tt < 10; tt++) {

        var y_axis_scale_block = document.createElement("div");
        var y_axis_scale_block_class = document.createAttribute("class");
        y_axis_scale_block_class.value = "js-chart-mosaic-y-axis-scale-block";
        y_axis_scale_block.setAttributeNode( y_axis_scale_block_class );
        var y_axis_scale_block_style = document.createAttribute("style");
        y_axis_scale_block_style.value = "border-right: " + i_chart.i_design.scale_border + "; border-top: " + i_chart.i_design.scale_border + ";";
        if (tt == 9) {
            y_axis_scale_block_style.value += "border-bottom: " + i_chart.i_design.scale_border + ";";
        }
        y_axis_scale_block.setAttributeNode( y_axis_scale_block_style );
        y_axis_scale_container.appendChild( y_axis_scale_block );

    }

    // draw level1 inner panel
    var level1_inner_panel = document.createElement("div");
    var level1_inner_panel_class = document.createAttribute("class");
    level1_inner_panel_class.value = "js-chart-mosaic-level1-inner-panel";
    level1_inner_panel.setAttributeNode( level1_inner_panel_class );
    level0_inner_panel.appendChild( level1_inner_panel );

    // draw infobox container
    var infobox_container = document.createElement("div");
    var infobox_container_class = document.createAttribute("class");
    infobox_container_class.value = "js-chart-mosaic-infobox-container";
    infobox_container.setAttributeNode( infobox_container_class );
    level0_inner_panel.appendChild( infobox_container );

    // draw x-axis container
    var x_axis_container = document.createElement("div");
    var x_axis_container_class = document.createAttribute("class");
    x_axis_container_class.value = "js-chart-mosaic-x-axis-container";
    x_axis_container.setAttributeNode( x_axis_container_class );
    level0_inner_panel.appendChild( x_axis_container );

    // draw x-axis scale container
    var x_axis_scale_container = document.createElement("div");
    var x_axis_scale_container_class = document.createAttribute("class");
    x_axis_scale_container_class.value = "js-chart-mosaic-x-axis-scale-container";
    x_axis_scale_container.setAttributeNode( x_axis_scale_container_class );
    x_axis_container.appendChild( x_axis_scale_container );

    for (var tt = 0; tt < i_chart.i_labels.length; tt++) {

        var series_width = (column_totals[tt].total_value / col_grand_total) * 100;

        var x_axis_scale_block = document.createElement("div");
        var x_axis_scale_block_class = document.createAttribute("class");
        x_axis_scale_block_class.value = "js-chart-mosaic-x-axis-scale-block";
        x_axis_scale_block.setAttributeNode( x_axis_scale_block_class );
        var x_axis_scale_block_style = document.createAttribute("style");
        x_axis_scale_block_style.value = "width: " + series_width + "%; border-right: " + i_chart.i_design.scale_border + "; border-top: " + i_chart.i_design.scale_border + ";";
        if (tt == 0) {
            x_axis_scale_block_style.value += "border-left: " + i_chart.i_design.scale_border + ";";
        }
        x_axis_scale_block.setAttributeNode( x_axis_scale_block_style );
        x_axis_scale_container.appendChild( x_axis_scale_block );

    }

    // draw x-axis scale label container
    var x_axis_scale_label_container = document.createElement("div");
    var x_axis_scale_label_container_class = document.createAttribute("class");
    x_axis_scale_label_container_class.value = "js-chart-mosaic-x-axis-scale-label-container";
    x_axis_scale_label_container.setAttributeNode( x_axis_scale_label_container_class );
    x_axis_container.appendChild( x_axis_scale_label_container );

    for (var tt = 0; tt < i_chart.i_labels.length; tt++) {

        var series_width = (column_totals[tt].total_value / col_grand_total) * 100;
        
        var x_axis_scale_label_block = document.createElement("div");
        var x_axis_scale_label_block_class = document.createAttribute("class");
        x_axis_scale_label_block_class.value = "js-chart-mosaic-x-axis-scale-label-block";
        x_axis_scale_label_block.setAttributeNode( x_axis_scale_label_block_class );
        var x_axis_scale_label_block_style = document.createAttribute("style");
        x_axis_scale_label_block_style.value = "width: " + series_width + "%;";
        x_axis_scale_label_block.setAttributeNode( x_axis_scale_label_block_style );
        x_axis_scale_label_block.innerText = i_chart.i_labels[tt];
        x_axis_scale_label_container.appendChild( x_axis_scale_label_block );

    }

    // draw x-axis title container
    var x_axis_title_container = document.createElement("div");
    var x_axis_title_container_class = document.createAttribute("class");
    x_axis_title_container_class.value = "js-chart-mosaic-x-axis-title-container";
    x_axis_title_container.setAttributeNode( x_axis_title_container_class );
    x_axis_title_container.innerText = i_chart.i_options.xtitle;
    x_axis_container.appendChild( x_axis_title_container );

    return [ level1_inner_panel ];
}
// draw function for a treemap  chart
function jsChartDrawTreemapChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["treemap"].data_type, i_chart.i_titles, i_chart.i_design.palette_type);
    var base_level2_inner_panel = draw_base_containers[0];
    var legend_container = draw_base_containers[1];

    var x_scale = {
        "min_scale_value": 0,
        "max_scale_value": 0,
        "step_value": 0.0,
        "total_steps": 0,
        "num_of_decimals_to_use": 2,
        "append_text": ""
    };

    var y_scale = {
        "min_scale_value": 0,
        "max_scale_value": 0,
        "step_value": 0.0,
        "total_steps": 0,
        "num_of_decimals_to_use": 2,
        "append_text": ""
    };

    // debug - record the aspect ratio
    i_chart.aspect_ratios = {};
    i_chart.aspect_ratios = {
        "total": 0,
        "count": 0,
        "max": 0,
        "min": i_chart.i_data.value
    };

    // support the following algorithms:
    // - quad:
    //      - portrait mode
    //      - landscape mode
    // - pivot:
    //      - portrait mode
    //      - landscape mode
    // - snake:
    //      - portrait mode
    //      - landscape mode
    i_chart.i_options.drawalg_options = {};
    switch (i_chart.i_options.drawalg) {
        // portrait snake
        case "portrait snake":
            i_chart.i_options.drawalg_options.mode = "portrait";
            i_chart.i_options.drawalg_options.algorithm = "snake";
            i_chart.i_options.drawalg_options.draw_function_name = "jsChartTreemapDrawTreemapContainers_Portrait_Snake";

            break;
        // portrait pivot
        case "portrait pivot":
            i_chart.i_options.drawalg_options.mode = "portrait";
            i_chart.i_options.drawalg_options.algorithm = "pivot";
            i_chart.i_options.drawalg_options.draw_function_name = "jsChartTreemapDrawTreemapContainers_Portrait_Pivot";

            break;
        // portrait quad (default depending on parent container dimensions)
        case "portrait quad":
            i_chart.i_options.drawalg_options.mode = "portrait";
            i_chart.i_options.drawalg_options.algorithm = "quad";
            i_chart.i_options.drawalg_options.draw_function_name = "jsChartTreemapDrawTreemapContainers_Portrait_Quad";

            break;
        // landscape snake
        case "landscape snake":
            i_chart.i_options.drawalg_options.mode = "landscape";
            i_chart.i_options.drawalg_options.algorithm = "snake";
            i_chart.i_options.drawalg_options.draw_function_name = "jsChartTreemapDrawTreemapContainers_Landscape_Snake";

            break;
        // landscape pivot
        case "landscape pivot":
            i_chart.i_options.drawalg_options.mode = "landscape";
            i_chart.i_options.drawalg_options.algorithm = "pivot";
            i_chart.i_options.drawalg_options.draw_function_name = "jsChartTreemapDrawTreemapContainers_Landscape_Pivot";

            break;
        // landscape quad (default depending on parent container dimensions)
        case "landscape quad":
            i_chart.i_options.drawalg_options.mode = "landscape";
            i_chart.i_options.drawalg_options.algorithm = "quad";
            i_chart.i_options.drawalg_options.draw_function_name = "jsChartTreemapDrawTreemapContainers_Landscape_Quad";

            break;
        
        default:
            if (base_level2_inner_panel.clientWidth >= base_level2_inner_panel.clientHeight) {
                i_chart.i_options.drawalg_options.mode = "landscape";
                i_chart.i_options.drawalg_options.algorithm = "quad";
                i_chart.i_options.drawalg_options.draw_function_name = "jsChartTreemapDrawTreemapContainers_Landscape_Quad";
            } else {
                i_chart.i_options.drawalg_options.mode = "portrait";
                i_chart.i_options.drawalg_options.algorithm = "quad";
                i_chart.i_options.drawalg_options.draw_function_name = "jsChartTreemapDrawTreemapContainers_Portrait_Quad";
            }
            break;
    }

    // draw the chart base "canvas"
    if (i_chart.i_options.drawalg_options.mode == "portrait") {

        // draw the inner panel that we can control better
        var level0_inner_panel = document.createElement("div");
        level0_inner_panel.id = "level0_inner_panel";
        var level0_inner_panel_style = document.createAttribute("style");
        level0_inner_panel_style.value = "height: 100%; margin: 0px 5px 0px 5px; display: flex; flex-direction: column; background-color: " + i_chart.i_design.canvas_bg_color + ";";
        level0_inner_panel.setAttributeNode( level0_inner_panel_style );
        base_level2_inner_panel.appendChild( level0_inner_panel );

    } else {

        // draw the inner panel that we can control better
        var level0_inner_panel = document.createElement("div");
        level0_inner_panel.id = "level0_inner_panel";
        var level0_inner_panel_style = document.createAttribute("style");
        level0_inner_panel_style.value = "height: 100%; margin: 0px 5px 0px 5px; display: flex; flex-direction: row; background-color: " + i_chart.i_design.canvas_bg_color + ";";
        level0_inner_panel.setAttributeNode( level0_inner_panel_style );
        base_level2_inner_panel.appendChild( level0_inner_panel );

    }

    // start looping and drawing containers
    var draw_treemap_panels = window[ i_chart.i_options.drawalg_options.draw_function_name ](
            level0_inner_panel,
            i_chart,
            i_chart.i_data,
            0,
            1,
            i_chart.i_data.value,
            i_chart.i_data.title,
            -1,
            true
    );

    // output aspect ratio if debugging is enabled
    if ((jsChartCommonIsDebugEnabled("treemap")) && (i_chart.aspect_ratios.count != 0)) {
        var avg_aspect_ratio = roundNumber(i_chart.aspect_ratios.total / i_chart.aspect_ratios.count, 2);
        console.log("avg. aspect ratio of value nodes          : " + avg_aspect_ratio + ":1");
        console.log("min. aspect                               : " + roundNumber(i_chart.aspect_ratios.min, 2) + ":1");
        console.log("max. aspect                               : " + roundNumber(i_chart.aspect_ratios.max, 2) + ":1");
        //console.log("distance from 1 (closer to zero is better): " + Math.abs(roundNumber(1-avg_aspect_ratio, 2)));
    } else {
        console.log("0 children to calculate aspect ratio avg.")
    }

    return true;
}
// draw function for a marimekko column chart
function jsChartDrawMarimekkoColumnChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["marimekko column"].data_type, i_chart.i_titles);
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


    var x_scale = {
        "min_scale_value": 0,
        "max_scale_value": 100,
        "step_value": 10,
        "total_steps": 10,
        "num_of_decimals_to_use": 2,
        "append_text": "%"
    };

    var y_scale = {
        "min_scale_value": 0,
        "max_scale_value": 100,
        "step_value": 10,
        "total_steps": 10,
        "num_of_decimals_to_use": 2,
        "append_text": "%"
    };

    var column_totals = [];

    for (var v = 0; v < i_chart.i_labels.length; v++) {
        column_totals[v] = {
            "total_value": 0,
            "total_abs_value": 0,
            "max_value": i_chart.i_data[0][0],
            "min_value": i_chart.i_data[0][0]
        }
        for (var s = 0; s < i_chart.i_data.length; s++) {
            column_totals[v].total_value += i_chart.i_data[s][v];
            column_totals[v].total_abs_value += Math.abs( i_chart.i_data[s][v] );
            if (i_chart.i_data[s][v] < column_totals[v].min_value) {
                column_totals[v].min_value = i_chart.i_data[s][v];
            }
            if (i_chart.i_data[s][v] > column_totals[v].max_value) {
                column_totals[v].max_value = i_chart.i_data[s][v];
            }
        }
    }

    var col_grand_total = 0;
    var biggest_col_grand_total = column_totals[0].total_abs_value;
    for (var v = 0; v < i_chart.i_labels.length; v++) {
        col_grand_total += column_totals[v].total_abs_value;
        if (column_totals[v].total_abs_value > biggest_col_grand_total) {
            biggest_col_grand_total = column_totals[v].total_abs_value;
        }
    }

    // calculate the max and min scale values (y-axis values on a bar chart)
    //  - min_scale_value
    //  - max_scale_value
    //  - step_value
    //  - total_steps
    //  - num_of_decimals_to_use
    if ((!isNaN(parseFloat(i_chart.i_options.yscalemin))) && (!isNaN(parseFloat(i_chart.i_options.yscalemax)))) {
        // min_scale_value, max_scale_value, step_value, total_steps, num_of_decimals_to_use
        var this_yscalemin = parseFloat(i_chart.i_options.yscalemin);
        var this_yscalemax = parseFloat(i_chart.i_options.yscalemax);
        var calculate_scale = [ this_yscalemin, this_yscalemax, ((Math.abs(this_yscalemin) + Math.abs(this_yscalemax)) / 10), 10, 2 ];
    } else {
        var calculate_scale = jsChartCommonCalculateScale(i_chart.i_data, column_totals, 0, biggest_col_grand_total, 10);
    }

    var x_scale = {
        "min_scale_value": 0,
        "max_scale_value": 100,
        "step_value": 10,
        "total_steps": 10,
        "num_of_decimals_to_use": 2,
        "append_text": "%"
    };

    var y_scale = {
        "min_scale_value": calculate_scale[0],
        "max_scale_value": calculate_scale[1],
        "step_value": calculate_scale[2],
        "total_steps": calculate_scale[3],
        "num_of_decimals_to_use": calculate_scale[4],
        "append_text": ""
    };

    // draw level0 containers
    var draw_level0_containers = jsChartMosaicDrawLevel0Containers(base_level2_inner_panel, i_chart, x_scale, y_scale, column_totals, col_grand_total);
    var level1_inner_panel = draw_level0_containers[0];

    // draw series containers (columns)
    var draw_series_containers = jsChartMosaicDrawMarimekkoSeriesContainers(level1_inner_panel, i_chart, x_scale, y_scale, column_totals, col_grand_total);

    // draw value containers (rows)
    var draw_value_containers = jsChartMosaicDrawMarimekkoAbsoluteContainers(level1_inner_panel, i_chart, x_scale, y_scale, column_totals, col_grand_total);

    return true;
}
// draw function for a marimekko chart
function jsChartDrawMarimekkoChart(chart_index, series_index, this_chart, i_chart) {

    // overwrite high levels vars in case of a widget
    if (i_chart.i_options.showwidget) {
        i_chart.i_options.title = "";
        i_chart.i_options.showlegend = false;
        i_chart.i_options.showcontrols = false;
        i_chart.i_options.showdatatable = false;
    }

    var draw_base_containers = jsChartCommonDrawBaseContainers(this_chart, i_chart, "side", false, true, IDEFAULT_CHART_TYPE_OPTIONS["marimekko"].data_type, i_chart.i_titles);
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


    var x_scale = {
        "min_scale_value": 0,
        "max_scale_value": 100,
        "step_value": 10,
        "total_steps": 10,
        "num_of_decimals_to_use": 2,
        "append_text": "%"
    };

    var y_scale = {
        "min_scale_value": 0,
        "max_scale_value": 100,
        "step_value": 10,
        "total_steps": 10,
        "num_of_decimals_to_use": 2,
        "append_text": "%"
    };

    var column_totals = [];

    for (var v = 0; v < i_chart.i_labels.length; v++) {
        column_totals[v] = {
            "total_value": 0,
            "total_abs_value": 0,
            "max_value": i_chart.i_data[0][0],
            "min_value": i_chart.i_data[0][0]
        }
        for (var s = 0; s < i_chart.i_data.length; s++) {
            column_totals[v].total_value += i_chart.i_data[s][v];
            column_totals[v].total_abs_value += Math.abs( i_chart.i_data[s][v] );
            if (i_chart.i_data[s][v] < column_totals[v].min_value) {
                column_totals[v].min_value = i_chart.i_data[s][v];
            }
            if (i_chart.i_data[s][v] > column_totals[v].max_value) {
                column_totals[v].max_value = i_chart.i_data[s][v];
            }
        }
    }

    var col_grand_total = 0;
    for (var v = 0; v < i_chart.i_labels.length; v++) {
        col_grand_total += column_totals[v].total_abs_value;
    }

    // draw level0 containers
    var draw_level0_containers = jsChartMosaicDrawLevel0Containers(base_level2_inner_panel, i_chart, x_scale, y_scale, column_totals, col_grand_total);
    var level1_inner_panel = draw_level0_containers[0];

    // draw series containers (columns)
    var draw_series_containers = jsChartMosaicDrawMarimekkoSeriesContainers(level1_inner_panel, i_chart, x_scale, y_scale, column_totals, col_grand_total);

    // draw value containers (rows)
    var draw_value_containers = jsChartMosaicDrawMarimekkoRelativeContainers(level1_inner_panel, i_chart, x_scale, y_scale, column_totals, col_grand_total);

    return true;
}