// 1. chart id for init chart
// 2. import of chart and directives
// 3. capture data set title with input data
// 4. add close window button
// 5. add random button next to categotical values

const BUILDER_DEFAULTS = {
    //"chart_type": IDEFAULT_CHART_ATTRIBUTES["type"].default,
    "chart_type": "bar",
    "template_name": IDEFAULT_CHART_ATTRIBUTES["template"].default,
    "git_repo_url": "https://js-charts.com/repo/builder",
    "chart_attributes": {
        "100% stacked bar": {
            "title": "Sales Revenue (2022 - 2024)",
            "sortdata": "on row avg desc"
        },
        "100% stacked column": {
            "title": "Sales Revenue (2022 - 2024)",
            "sortdata": "on column avg asc"
        },
        "100% stacked line": {
            "title": "Sales Revenue (2022 - 2023)",
            "xtitle": "Departments",
            "ytitle": "Revenue in US Dollar ($)"
        },
        "100% stacked lollipop bar": {
            "title": "Sales Revenue (2022 - 2024)",
            "sortdata": "on row avg desc"
        },
        "100% stacked lollipop column": {
            "title": "Sales Revenue (2022 - 2024)"
        },
        "bar": {
            "title": "Sales Revenue (2022 - 2023)",
            "sortdata": "on row avg desc"
        },
        "box plot": {
            "title": "Service delivery data (Courier company)",
            "showlegend": false
        },
        "bubble": {
            "title": "Relationship between temperature (Celsius) and ice cream sales ($)",
            "showlabels": false
        },
        "candlestick": {
            "title": "Asset price movement (01/02 to 01/08)",
            "xtitle": "Date",
            "ytitle": "Euro (EUR)"
        },
        "column": {
            "title": "Sales Revenue (2022 - 2024)",
            "sortdata": "on column avg asc"
        },
        "doughnut": {
            "title": "Sales Revenue (2022)",
            "holetitle": "2022",
            "sortdata": "on column avg asc"
        },
        "funnel bar": {
            "title": "Job Application Process",
            "showlegend": "off",
            "sortdata": "on column desc"
        },
        "funnel column": {
            "title": "Job Application Process",
            "showlegend": "off",
            "sortdata": "on column desc"
        },
        "heatmap": {
            "title": "Water consumption across region (A - F)",
            "showlegend": "bottom"
        },
        "histogram": {
            "title": "Histogram - Example Data Set"
        },
        "horizontal box plot": {
            "title": "Service delivery data (Courier company)",
            "showlegend": false
        },
        "line": {
            "title": "Sales Revenue (2022 - 2023)",
            "xtitle": "Departments",
            "ytitle": "Revenue in US Dollar ($)"
        },
        "lollipop bar": {
            "title": "Sales Revenue (2022 - 2023)",
            "sortdata": "on row avg desc"
        },
        "lollipop column": {
            "title": "Sales Revenue (2022 - 2024)"
        },
        "marimekko": {
            "title": "Sales Revenue (2022 - 2024)"
        },
        "marimekko column": {
            "title": "Sales Revenue (2022 - 2024)"
        },
        "ohlc": {
            "title": "Asset price movement (01/02 to 01/08)",
            "xtitle": "Date",
            "ytitle": "Euro (EUR)"
        },
        "parallel coordinates": {
            "title": "Electric Vehicle (EV) Model Comparison",
            "sortdata": "on",
        },
        "pie": {
            "title": "Sales Revenue (2024)",
            "sortdata": "on column avg asc"
        },
        "population pyramid": {
            "title": "Zombie University Main Campus Population",
            "xtitle": "Student population x1000",
            "ytitle": "Age group",
            "showlegend": "bottom"
        },
        "scatter": {
            "title": "Relationship between temperature (Celsius) and ice cream sales ($)"
        },
        "span bar": {
            "title": "Estimated worth of famous paintings"
        },
        "span column": {
            "title": "Estimated worth of famous paintings"
        },
        "stacked bar": {
            "title": "Sales Revenue (2022 - 2024)",
            "sortdata": "on row avg desc"
        },
        "stacked column": {
            "title": "Sales Revenue (2022 - 2024)",
            "sortdata": "on column avg asc"
        },
        "stacked doughnut": {
            "title": "Sales Revenue (2022 - 2024)",
            "holetitle": "2022 - 2024",
            "sortdata": "on column avg asc"
        },
        "stacked line": {
            "title": "Sales Revenue (2022 - 2023)",
            "xtitle": "Departments",
            "ytitle": "Revenue in US Dollar ($)"
        },
        "stacked lollipop bar": {
            "title": "Sales Revenue (2022 - 2024)",
            "sortdata": "on row avg desc"
        },
        "stacked lollipop column": {
            "title": "Sales Revenue (2022 - 2024)"
        },
        "treemap": {
            "title": "Jimmy's Motor Spares (Stock Levels - Jan 2024)",
            "sortdata": "on",
            "drawalg": "portrait quad",
            "showlegend": "bottom",
            "jsondata": "default-json-data",
        },
        "waterfall bar": {
            "title": "Financial Movement"
        },
        "waterfall column": {
            "title": "Financial Movement"
        }
    },
    "style_template_directives": {
        "bar": {
            "value_bar_data_margin": "2px",
            "value_bar_series_margin": "5px",
            "value_bar_border_radius": "0px 2px 2px 0px",
            "value_bar_min_width": "3px"
        },
        "bubble": {
            "marker_width": "auto",
            "marker_height": "auto",
            "color_palette": "yellow"
        },
        "candlestick": {
            "color_palette": "ForestGreen; IndianRed; Black"
        },
        "column": {
            "value_bar_data_margin": "2px",
            "value_bar_series_margin": "5px",
            "value_bar_border_radius": "2px 2px 0px 0px",
            "value_bar_min_height": "3px"
        },
        "funnel bar": {
            "value_bar_data_margin": "1px",
            "value-bar-border-radius": "2px",
            "value_bar_min_width": "1px",
            "color_palette": "plum",
            "datalabel_border_radius": "50%",
            "datalabel_bg_color": "steelblue",
            "datalabel_text_color": "white",
            "datalabel_font_weight": "600",
            "datalabel_width": "35px",
            "legend_font_weight": "600"
        },
        "funnel column": {
            "value_bar_data_margin": "1px",
            "value-bar-border-radius": "2px",
            "value_bar_min_height": "1px",
            "color_palette": "plum",
            "datalabel_border_radius": "50%",
            "datalabel_bg_color": "steelblue",
            "datalabel_text_color": "white",
            "datalabel_font_weight": "600",
            "datalabel_width": "35px",
            "legend_font_weight": "600"
        },
        "histogram": {
            "value_bar_min_width": "10px"
        },
        "line": {
            "value_line_thickness": "1px",
            "marker_width": "7px",
            "marker_height": "7px",
            "datalabel_text_color": "black"
        },
        "ohlc": {
            "value_line_thickness": "5px",
            "datalabel_text_color": "black",
            "color_palette": "indianred; forestgreen; black;"
        },
        "population pyramid": {
            "value_bar_data_margin": "1px",
            "datalabel_text_color": "black",
            "value_bar_min_width": "3px"
        },
        "stacked line": {
            "value_line_thickness": "1px",
            "marker_width": "7px",
            "marker_height": "7px",
            "datalabel_text_color": "black"
        },
        "100% stacked line": {
            "value_line_thickness": "1px",
            "marker_width": "7px",
            "marker_height": "7px",
            "datalabel_text_color": "black"
        },
        "parallel coordinates": {
            "value_line_thickness": "1px",
            "color_palette": "YellowGreen"
        },
        "span bar": {
            "value_bar_data_margin": "1px",
            "value_bar_border_radius": "2px",
            "datalabel_prepend": "$",
            "datalabel_append": "mil",
            "datalabel_width": "70px"
        },
        "span column": {
            "value_bar_data_margin": "1px",
            "value_bar_border_radius": "2px",
            "datalabel_prepend": "$",
            "datalabel_append": "mil",
            "datalabel_width": "70px"
        },
        "treemap": {
            "control_button_bg_color": "olive"
        }
    },
    "data": {
        "categorical": {
            "chart_title": "Sales Revenue",
            "labels": ["Furniture", "Groceries", "Electronics", "Toys", "Clothing"],
            "data": [
                {
                    "title": "2022",
                    "data": [64, 142, 152, 156, 229]
                },
                {
                    "title": "2023",
                    "data": [152, 70, 121, 171, 238]
                },
                {
                    "title": "2024",
                    "data": [252, 124, 260, 137, 264]
                }
            ]
        },
        "categorical copy": {
            "chart_title": "Sales Revenue",
            "labels": ["Furniture", "Groceries", "Electronics", "Toys", "Clothing"],
            "data": [
                {
                    "title": "2022",
                    "data": [64, 142, 152, 156, 229]
                },
                {
                    "title": "2023",
                    "data": [152, 70, 121, 171, 238]
                },
                {
                    "title": "2024",
                    "data": [252, 124, 260, 137, 264]
                }
            ]
        },
        "funnel bar": {
            "labels": ["Applications Received", "Resume Shortlisted", "First Round Interview", "Technical Assessment", "Final Interview", "Job Offers Extended", "Job Offers Accepted"],
            "data": [
                {
                    "title": "Job Application Process",
                    "data": [5000, 2500, 1200, 600, 300, 150, 100]
                }
            ]
        },
        "funnel column": {
            "labels": ["Applications Received", "Resume Shortlisted", "First Round Interview", "Technical Assessment", "Final Interview", "Job Offers Extended", "Job Offers Accepted"],
            "data": [
                {
                    "title": "Job Application Process",
                    "data": [5000, 2500, 1200, 600, 300, 150, 100]
                }
            ]
        },
        "population pyramid": {
            "chart_title": "Orange Campus Student Population 2023",
            "labels": ["Male students", "Female students"],
            "data": [
                {
                    "title": "Over 70",
                    "data": [0.1, 0.1]
                },
                {
                    "title": "65 to 69",
                    "data": [0.5, 0.2]
                },
                {
                    "title": "60 to 64",
                    "data": [1.0, 0.7]
                },
                {
                    "title": "55 to 59",
                    "data": [1.2, 0.9]
                },
                {
                    "title": "50 to 54",
                    "data": [2.0, 1.6]
                },
                {
                    "title": "45 to 49",
                    "data": [2.5, 2.0]
                },
                {
                    "title": "40 to 44",
                    "data": [2.7, 2.3]
                },
                {
                    "title": "35 to 39",
                    "data": [2.8, 2.6]
                },
                {
                    "title": "30 to 34",
                    "data": [3.0, 2.7]
                },
                {
                    "title": "25 to 29",
                    "data": [3.2, 3.0]
                },
                {
                    "title": "20 to 24",
                    "data": [2.9, 2.4]
                },
                {
                    "title": "Under 20",
                    "data": [2.4, 1.7]
                }
            ]
        },
        "frequency": {
            "chart_title": "Operations",
            "title": "2022",
            "data": [20.666, 13.043, 4.023, 22.731, 13.363, 2.411, 22.297, 21.749, 7.863, 0.589, 13.866, 14.115, 13.411, 13.855, 20.292, 13.026, 6.272, 3.725, 20.941, 11.479, 16.574, 15.589, 6.68, 3.677, 17.003, 24.452, 18.574, 2.93, 5.849, 3.487, 8.24, 0.539, 7.196, 9.187, 22.354, 21.686, 5.142, 12.475, 16.999, 13.881, 5.73, 3.142, 20.586, 19.18, 6.828, 18.609, 24.567, 7.441, 17.291, 0.302, 23.549, 2.337, 11.06, 10.133, 12.146, 24.074, 16.622, 16.416, 8.216, 22.049, 2.458, 18.669, 17.486, 5.047, 23.028, 20.541, 0.176, 18.535, 2.899, 4.532, 3.994, 13.642, 1.52, 16.3, 8.896, 8.849, 7.181, 20.344, 22.29, 10.865, 1.467, 13.167, 0.256, 4.25, 9.293, 24.847, 1.785, 6.232, 19.634, 8.008, 13.109, 9.115, 21.981, 14.072, 16.37, 16.332, 23.126, 17.948, 10.999, 15.355],
            "labels": ["AA", "AA", "BB", "BB", "BB", "BB", "BB", "CC", "BB", "CC", "BB", "CC", "BB", "BB", "BB", "BB", "AA", "CC", "CC", "CC", "BB", "AA", "BB", "AA", "CC", "AA", "AA", "BB", "BB", "BB", "CC", "BB", "CC", "CC", "BB", "CC", "BB", "BB", "AA", "CC", "CC", "AA", "AA", "BB", "AA", "AA", "BB", "AA", "AA", "AA", "BB", "BB", "CC", "BB", "BB", "CC", "AA", "AA", "AA", "CC", "CC", "CC", "BB", "AA", "CC", "CC", "AA", "AA", "CC", "BB", "CC", "CC", "AA", "CC", "BB", "BB", "BB", "CC", "AA", "CC", "CC", "BB", "BB", "CC", "CC", "CC", "AA", "CC", "BB", "BB", "CC", "CC", "AA", "BB", "AA", "CC", "BB", "AA", "BB", "AA"],
            "frequencies": [7, 0, 3, 6, 0, 8, 3, 3, 4, 8, 1, 7, 0, 0, 4, 2, 4, 1, 1, 1, 7, 8, 4, 3, 4, 5, 2, 4, 3, 4, 5, 6, 0, 5, 7, 3, 6, 0, 3, 3, 6, 1, 4, 1, 4, 5, 3, 1, 7, 1, 1, 0, 4, 0, 5, 4, 3, 2, 6, 4, 5, 0, 4, 1, 8, 3, 2, 8, 4, 4, 0, 0, 8, 8, 8, 1, 5, 5, 5, 7, 6, 0, 0, 8, 8, 6, 5, 4, 0, 0, 8, 2, 8, 6, 5, 6, 2, 2, 3, 1],
            "bin_edge_start": 0,
            "bin_edge_end": 9,
            "bin_size": 0.5
        },
        "range": {
            "chart_title": "Well-known paintings and their approximate selling prices",
            "labels": ["Salvator Mundi by Leonardo da Vinci", "Interchange by Willem de Kooning", "The Card Players by Paul Cézanne", "Nafea Faa Ipoipo (When Will You Marry?) by Paul Gauguin", "No. 17A by Jackson Pollock", "Les Femmes d'Alger (\"Version O\") by Pablo Picasso"],
            "data": [
                {
                    "title": "2022",
                    "low_values": [100, 60, 10, 5, 2, 1],
                    "high_values": [450.3, 300, 250, 210, 200, 179.4]
                }
            ]
        },
        "cumulative": {
            "chart_title": "Cumulative Financial Flow",
            "labels": ["Starting Balance", "Revenue", "Expenses", "Taxes", "Net Profit"],
            "data": {
                "title": "2022",
                "data": [50000, 20000, -15000, -5000, 50000]
            }
        },
        "points": {
            "chart_title": "Relationship between temperature (°C) and ice cream sales ($)",
            "data": [
                {
                    "title": "2022",
                    "x_points": [32.79, 32.76, 16.69, 25.75, 27.57, 19.39, 16.06, 16.08, 31.68, 34.22, 34.71, 29.52, 34.29, 19.11, 25.85, 31.87, 31.41, 34.76, 27.92, 17.25, 27.42, 38.01, 32.40, 27.57, 26.68, 29.72, 19.82, 33.73, 19.59, 24.92, 18.60, 34.12, 17.96, 33.12, 39.16, 28.27, 26.70, 33.67, 26.10, 30.05, 18.54, 16.56, 15.40, 25.55, 25.60, 26.90, 21.07, 33.39, 39.11, 25.50],
                    "y_points": [598.68, 693.07, 324.17, 401.70, 504.20, 384.64, 186.38, 135.98, 699.11, 639.61, 676.70, 421.00, 706.15, 221.80, 503.34, 523.83, 462.34, 616.03, 467.00, 108.19, 360.53, 778.34, 531.11, 548.24, 349.96, 577.08, 257.45, 522.33, 305.75, 305.89, 238.08, 565.88, 372.98, 549.90, 880.07, 421.78, 385.52, 665.72, 415.49, 476.22, 305.46, 123.97, 95.88, 539.76, 315.07, 412.48, 229.82, 734.63, 859.75, 517.55],
                    "s_points": [22.361, 49.171, 35.697, 24.583, 47.216, 25.408, 28.369, 40.005, 36.296, 35.27, 30.432, 39.272, 20.38, 35.926, 34.523, 42.714, 41.886, 32.616, 36.268, 21.647, 20.561, 49.416, 22.437, 20.457, 42.651, 34.667, 31.987, 42.451, 20.49, 48.988, 49.953, 39.807, 38.9, 38.795, 39.612, 20.407, 36.363, 31.623, 26.49, 40.919, 40.451, 46.868, 37.34, 47.904, 31.22, 20.612, 37.897, 29.699, 48.357, 27.399]
                }
            ]
        },
        "ohlc": {
            "chart_title": "Asset trading",
            "data": {
                "labels": ["01/02", "01/03", "01/06", "01/07", "01/08", "01/10", "01/13"],
                "open": [122.29, 121.65, 129.07, 130.51, 124.51, 118.18, 115.28],
                "high": [123.14, 125.56, 130.73, 131.71, 125.30, 118.71, 117.48],
                "low": [119.44, 121.42, 127.36, 126.8537, 120.1201, 114.4501, 114.41],
                "close": [120.63, 125.37, 129.55, 127.33, 121.84, 116.04, 117.32]
            }
        },
        "hierarchical": {
            "chart_title": "Stock levels",
            "data": {
                "title": "Stock level",
                "nodes": [
                    {"title": "Engine", "value": 12},
                    {"title": "Transmission", "value": 48},
                    {"title": "Battery", "value": 21},
                    {"title": "Alternator", "value": 67},
                    {"title": "Radiator", "value": 52},
                    {"title": "Brake Pads", "value": 41},
                    {"title": "Tires", "value": 97},
                    {"title": "Steering Wheel", "value": 34},
                    {"title": "Air Filter", "value": 81},
                    {"title": "Exhaust System", "value": 41},
                    {"title": "Fuel Pump", "value": 57},
                    {"title": "Timing Belt", "value": 68},
                    {"title": "Clutch", "value": 13},
                    {"title": "Shock Absorbers", "value": 75},
                    {"title": "Wipers", "value": 73},
                    {"title": "Headlights", "value": 94},
                    {"title": "Taillights", "value": 18},
                    {"title": "Side Mirrors", "value": 45},
                    {"title": "Spark Plugs", "value": 62},
                    {"title": "Differential", "value": 84},
                    {"title": "Drive Shaft", "value": 24},
                    {"title": "Fender", "value": 55},
                    {"title": "Bumper", "value": 29},
                    {"title": "Grille", "value": 75},
                    {"title": "Windshield", "value": 41}
                ]
            }
        },
        "series": {
            "chart_title": "Courier Service Delivery Time Performance",
            "data": [
                {
                    "title": "New York",
                    "data": [5, 6, 7, 6, 5, 8, 9, 6, 5, 7]
                },
                {
                    "title": "Los Angeles",
                    "data": [1, 5, 6, 7, 4, 5, 6, 7, 8, 5]
                },
                {
                    "title": "Chicago",
                    "data": [6, 7, 8, 9, 6, 7, 6, 5, 8, 9]
                },
                {
                    "title": "Houston",
                    "data": [3, 4, 5, 6, 3, 4, 5, 5, 6, 4]
                },
                {
                    "title": "Miami",
                    "data": [2, 3, 4, 3, 2, 3, 4, 3, 5, 9]
                }
            ]
        },
        // parallel coordinates
        "parallel coordinates": {
            "chart_title": "Electric Vehicle (EV) Performance Metrics",
            "labels": ["Price ($)", "Battery Capacity (kWh)", "Range (miles)", "Charging Time (hours)", "Efficiency (miles/kWh)"],
            "data": [
                [ 45795, 47, 333, 8.0, 2.56 ],
                [ 30860, 74, 272, 3.1, 4.91 ],
                [ 106820, 74, 294, 8.7, 4.59 ],
                [ 84886, 72, 187, 3.2, 4.24 ],
                [ 36265, 44, 173, 4.2, 3.52 ],
                [ 112386, 80, 218, 9.1, 2.93 ],
                [ 67194, 67, 265, 8.0, 2.89 ],
                [ 117498, 46, 247, 10.3, 3.13 ],
                [ 74131, 112, 347, 8.1, 3.87 ],
                [ 90263, 111, 363, 7.0, 4.29 ],
                [ 46023, 51, 288, 1.6, 4.15 ],
                [ 71090, 73, 389, 4.7, 3.2 ],
                [ 97221, 72, 293, 3.5, 4.89 ],
                [ 94820, 87, 246, 3.3, 4.34 ],
                [ 30769, 62, 350, 11.7, 3.89 ],
                [ 89735, 101, 273, 5.0, 4.03 ],
                [ 92955, 76, 336, 10.8, 3.55 ],
                [ 94925, 83, 219, 7.8, 3.12 ],
                [ 97969, 74, 357, 9.6, 3.39 ],
                [ 35311, 104, 242, 6.3, 4.39 ],
                [ 113104, 86, 152, 7.1, 2.54 ],
                [ 83707, 117, 297, 6.2, 2.79 ],
                [ 115305, 42, 336, 2.7, 2.62 ],
                [ 58693, 40, 313, 8.8, 2.6 ],
                [ 101932, 44, 296, 3.7, 4.64 ],
                [ 55658, 53, 239, 0.8, 4.26 ],
                [ 114478, 66, 344, 7.9, 3.69 ],
                [ 48431, 48, 296, 2.5, 2.74 ],
                [ 32747, 118, 297, 11.3, 3.73 ],
                [ 89150, 54, 245, 11.5, 3.68 ],
                [ 95725, 81, 348, 11.0, 2.93 ],
                [ 114654, 116, 201, 4.8, 3.58 ],
                [ 65773, 90, 382, 0.7, 3.5 ],
                [ 97435, 102, 310, 11.2, 4.04 ],
                [ 86886, 91, 317, 5.4, 4.09 ],
                [ 96803, 43, 277, 11.6, 2.61 ],
                [ 61551, 62, 188, 11.6, 3.44 ],
                [ 41394, 54, 231, 10.3, 4.06 ],
                [ 99092, 82, 253, 3.9, 3.76 ],
                [ 33890, 68, 278, 4.9, 4.64 ],
                [ 71606, 75, 160, 10.3, 4.15 ],
                [ 110038, 52, 369, 4.1, 2.91 ],
                [ 117313, 71, 334, 2.4, 2.68 ],
                [ 40627, 110, 366, 6.9, 4.11 ],
                [ 38792, 98, 327, 11.3, 2.57 ],
                [ 103969, 67, 300, 8.5, 3.96 ],
                [ 73001, 105, 308, 7.1, 4.85 ],
                [ 106552, 81, 371, 1.6, 3.94 ],
                [ 53897, 84, 191, 7.6, 3.47 ],
                [ 98148, 101, 248, 11.9, 4.11 ],
                [ 53483, 96, 156, 2.1, 3.65 ],
                [ 78555, 45, 293, 6.5, 3.86 ],
                [ 47159, 67, 239, 10.6, 4.85 ],
                [ 110077, 67, 261, 9.0, 3.47 ],
                [ 65920, 83, 398, 8.5, 4.9 ],
                [ 97121, 69, 393, 8.6, 4.76 ],
                [ 99479, 101, 209, 4.6, 2.99 ],
                [ 119475, 114, 262, 3.9, 2.67 ],
                [ 49457, 101, 151, 9.8, 2.75 ],
                [ 96557, 40, 278, 9.8, 2.55 ],
                [ 107189, 66, 197, 10.5, 2.74 ],
                [ 108953, 101, 289, 11.0, 4.21 ],
                [ 82995, 116, 346, 6.4, 2.68 ],
                [ 70757, 42, 186, 6.3, 3.3 ],
                [ 39692, 109, 309, 9.7, 4.61 ],
                [ 75758, 111, 396, 8.0, 2.56 ],
                [ 102409, 66, 158, 8.6, 4.54 ],
                [ 101211, 48, 382, 9.7, 3.2 ],
                [ 95697, 101, 248, 10.7, 2.8 ],
                [ 67065, 76, 296, 4.4, 4.24 ],
                [ 62606, 90, 197, 4.8, 4.07 ],
                [ 41534, 83, 357, 1.6, 4.69 ],
                [ 70397, 63, 280, 7.2, 4.34 ],
                [ 31016, 118, 297, 0.9, 4.51 ],
                [ 119789, 98, 301, 5.9, 3.21 ],
                [ 85591, 71, 203, 6.7, 2.94 ],
                [ 119812, 91, 269, 3.8, 4.38 ],
                [ 53247, 101, 310, 7.3, 4.52 ],
                [ 54300, 97, 301, 0.9, 4.98 ],
                [ 104065, 91, 265, 0.9, 3.53 ],
                [ 112798, 51, 224, 10.0, 3.43 ],
                [ 39268, 78, 262, 4.6, 4.44 ],
                [ 116807, 41, 349, 2.0, 3.35 ],
                [ 42185, 42, 313, 6.5, 4.83 ],
                [ 93704, 95, 315, 9.4, 4.65 ],
                [ 116779, 98, 253, 3.0, 3.57 ],
                [ 69099, 41, 233, 7.7, 4.38 ],
                [ 38571, 41, 376, 1.5, 4.39 ],
                [ 68044, 93, 261, 1.1, 2.76 ],
                [ 81214, 40, 366, 6.6, 4.76 ],
                [ 91228, 58, 248, 6.7, 3.76 ],
                [ 78984, 41, 302, 7.8, 4.57 ],
                [ 70774, 92, 242, 8.9, 3.3 ],
                [ 32568, 83, 295, 11.7, 4.74 ],
                [ 92592, 71, 277, 6.4, 3.47 ],
                [ 97563, 109, 259, 4.2, 2.53 ],
                [ 32695, 71, 231, 9.6, 4.76 ],
                [ 78190, 107, 343, 3.6, 2.73 ],
                [ 35258, 94, 203, 5.5, 3.3 ],
                [ 117538, 114, 312, 1.4, 4.88 ]
            ]
        },
        // heatmap uses categorical data, but the color plattes are special (qualitative, sequential continuous, sequential discrete, diverging continuous, diverging discrete)
        "heatmap": {
            "chart_title": "Water consumption per region",
            "qualitative": {
                "labels": ["Region A", "Region B", "Region C", "Region D", "Region E", "Region F"],
                "keys": ["N/D", "Very Low", "Low", "Medium", "High", "Extreme"],
                "color_palette": ["#bbbbbb", "YellowGreen", "gold", "orange", "crimson", "brown"],
                "data": [
                    {
                        "title": "0:00 to 3:59",
                        "data": ["Low", "Very Low", "Low", "Very Low", "Very Low", "Very Low"]
                    },
                    {
                        "title": "4:00 to 7:59",
                        "data": ["Low", "Low", "Medium", "Medium", "Medium", "Low"]
                    },
                    {
                        "title": "8:00 to 11:59",
                        "data": ["Medium", "High", "High", "High", "High", "High"]
                    },
                    {
                        "title": "12:00 to 15:59",
                        "data": ["High", "Extreme", "Extreme", "Extreme", "Extreme", "High"]
                    },
                    {
                        "title": "16:00 to 19:59",
                        "data": ["Extreme", "Extreme", "High", "Extreme", "N/D", "High"]
                    },
                    {
                        "title": "20:00 to 23:59",
                        "data": ["Medium", "Low", "Medium", "Medium", "Medium", "Low"]
                    }
                ]
            },
            "continuous": {
                "labels": ["Region A", "Region B", "Region C", "Region D", "Region E", "Region F"],
                "color_palette": ["#bbbbbb", "YellowGreen", "gold", "orange", "crimson", "brown"],
                "color_position": [30, 40, 50, 60, 70, 80],
                "data": [
                    {
                        "title": "0:00 to 3:59",
                        "data": [14, 8, 12, 11, 7, 4]
                    },
                    {
                        "title": "4:00 to 7:59",
                        "data": [18, 17, 22, 27, 23, 16]
                    },
                    {
                        "title": "8:00 to 11:59",
                        "data": [27, 35, 36, 31, 38, 37]
                    },
                    {
                        "title": "12:00 to 15:59",
                        "data": [35, 42, 48, 45, 46, 39]
                    },
                    {
                        "title": "16:00 to 19:59",
                        "data": [48, 42, 36, 42, "N/D", 36]
                    },
                    {
                        "title": "20:00 to 23:59",
                        "data": [24, 18, 22, 24, 29, 16]
                    }
                ]
            }
        }
    }
}


// display a popup messae at the top of window
function jsChartBuilderPopMessage(pop_msg) {

    var this_popup = document.getElementsByClassName("js-chart-builder-popup-msg-container");
    if (this_popup.length == 1) {
        this_popup[0].remove();
    }

    var pop_container = document.createElement("div");
    var pop_container_class = document.createAttribute("class");
    pop_container_class.value = "js-chart-builder-popup-msg-container";
    pop_container.setAttributeNode( pop_container_class );
    pop_container.innerText = pop_msg;
    document.getElementsByClassName("js-chart-builder")[0].appendChild( pop_container );

    setTimeout(function () {
        pop_container.remove();
    }, 2000);

    return true;
}
// add an input data container for categorical data (js-values)
/*
function jsChartBuilderAddInputData_Categorical(data_panel, index) {

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    data_input_value_labels.innerHTML = "Data series " + (index + 1);
    data_panel.appendChild( data_input_value_labels );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    data_input_value_labels.innerHTML = "Data values <span style=\"font-size: 11px;\">( comma-separated list of numeric values )</span>";
    data_panel.appendChild( data_input_value_labels );

    // data labels input
    var data_input_value_input = document.createElement("input");
    data_input_value_input.id = "js-chart-builder-values";
    var data_input_value_input_type = document.createAttribute("type");
    data_input_value_input_type.value = "TEXT";
    data_input_value_input.setAttributeNode( data_input_value_input_type );
    data_input_value_input.value = BUILDER_DEFAULTS.data.categorical[index];
    data_panel.appendChild( data_input_value_input );

    return true;
}
*/
// add an input data container for range values;
function jsChartBuilderAddInputData_Range(data_panel, index, series_index = 0, insert_element = false) {

    if (index >= BUILDER_DEFAULTS.data.range.data.length) {
        index = 0;
    }

    // outer container
    var outer_container = document.createElement("div");
    var outer_container_style = document.createAttribute("style");
    outer_container_style.value = "display: flex; flex-direction: row; border: 0.5px solid #eeeeee; border-radius: 5px; margin: 10px 0px 0px 0px;";
    outer_container.setAttributeNode( outer_container_style );
    var outer_container_class = document.createAttribute("class");
    outer_container_class.value = "js-chart-builder-input-data-range-container";
    outer_container.setAttributeNode( outer_container_class );
    if (!insert_element) {
        data_panel.appendChild( outer_container );
    } else {
        data_panel.insertBefore(outer_container, data_panel.children[ (data_panel.children.length-1) ]);
    }

    // series label
    var series_label = document.createElement("div");
    var series_label_style = document.createAttribute("style");
    series_label_style.value = "flex: 1 1 auto; width: 40px; background-color: CadetBlue; border-radius: 5px 0px 0px 5px; writing-mode: vertical-lr; line-height: 40px; font-weight: 500; text-align: center; color: white;";
    series_label.setAttributeNode( series_label_style );
    series_label.innerText = "Series " + (series_index + 1);
    outer_container.appendChild( series_label );

    // inner panel
    var inner_panel = document.createElement("div");
    var inner_panel_style = document.createAttribute("style");
    inner_panel_style.value = "flex: 1 1 auto; width: calc(100% - (40px + 20px)); display: flex; flex-direction: column; margin: 0px 10px 0px 10px;";
    inner_panel.setAttributeNode( inner_panel_style );
    outer_container.appendChild( inner_panel );

    // remove button
    var remove_container = document.createElement("div");
    var remove_container_style = document.createAttribute("style");
    remove_container_style.value = "flex: 1 1 auto; width: 20px; border: 0.5px solid #333333; border-radius: 0px 3px 3px 0px; background-color: Crimson; color: White; font-size: 11px; font-weight: 400; writing-mode: vertical-lr; text-align: center; line-height: 20px; cursor: pointer;";
    remove_container.setAttributeNode( remove_container_style );
    remove_container.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    remove_container.addEventListener("mouseout", function () {
        this.style.backgroundColor = "Crimson";
    }, false);
    remove_container.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    remove_container.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    remove_container.addEventListener("click", function () {
        var preview_chart = document.getElementById("js-chart-builder-preview");

        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-input-data-range-container").length; tt++) {
            if (this.parentElement == document.getElementsByClassName("js-chart-builder-input-data-range-container")[tt]) {
                preview_chart.getElementsByClassName("js-low-values")[tt].remove();
                preview_chart.getElementsByClassName("js-high-values")[tt].remove();

                this.parentElement.remove();

                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
            }
        }

        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-input-data-range-container").length; tt++) {
            document.getElementsByClassName("js-chart-builder-input-data-range-container")[tt].children[0].innerText = "Series " + (tt+1);
        }

    }, false);
    remove_container.innerText = "Remove";
    outer_container.appendChild( remove_container );

    // title value label
    var title_label = document.createElement("div");
    var title_label_style = document.createAttribute("style");
    title_label_style.value = "flex: 1 1 auto; font-size: 13px; font-weight: 500; margin: 5px 0px 0px 0px;";
    title_label.setAttributeNode( title_label_style );
    title_label.innerHTML = "Name or short description:";
    inner_panel.appendChild( title_label );

    // title input
    var title_input = document.createElement("input");
    var title_input_type = document.createAttribute("type");
    title_input_type.value = "TEXT";
    title_input.setAttributeNode( title_input_type );
    title_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var data_title = preview_chart.getElementsByClassName("js-low-values")[index];

        if (this.value != data_title.getAttribute("title")) {
            data_title.setAttribute("title", this.value);

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    title_input.value = BUILDER_DEFAULTS.data.range.data[index].title;
    inner_panel.appendChild( title_input );

    // min value label
    var min_label = document.createElement("div");
    var min_label_style = document.createAttribute("style");
    min_label_style.value = "flex: 1 1 auto; font-size: 13px; font-weight: 500; margin: 5px 0px 0px 0px;";
    min_label.setAttributeNode( min_label_style );
    min_label.innerHTML = "Minimum values <span style=\"font-size: 10px;\">(comma-separated list of numeric values</span>";
    inner_panel.appendChild( min_label );

    // min input
    var min_input = document.createElement("input");
    var min_input_type = document.createAttribute("type");
    min_input_type.value = "TEXT";
    min_input.setAttributeNode( min_input_type );
    min_input.value = BUILDER_DEFAULTS.data.range.data[index].low_values.join(", ");
    min_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var data_value = preview_chart.getElementsByClassName("js-low-values")[index];

        if (this.value != data_value.innerText) {
            data_value.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    inner_panel.appendChild( min_input );

    // max value label
    var max_label = document.createElement("div");
    var max_label_style = document.createAttribute("style");
    max_label_style.value = "flex: 1 1 auto; font-size: 13px; font-weight: 500; margin: 5px 0px 0px 0px;";
    max_label.setAttributeNode( max_label_style );
    max_label.innerHTML = "Maximum values <span style=\"font-size: 10px;\">(comma-separated list of numeric values</span>";
    inner_panel.appendChild( max_label );

    // max input
    var max_input = document.createElement("input");
    var max_input_type = document.createAttribute("type");
    max_input_type.value = "TEXT";
    max_input.setAttributeNode( max_input_type );
    max_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var data_value = preview_chart.getElementsByClassName("js-high-values")[index];

        if (this.value != data_value.innerText) {
            data_value.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    max_input.value = BUILDER_DEFAULTS.data.range.data[index].high_values.join(", ");
    inner_panel.appendChild( max_input );

    // add the preview chart input value containers
    var preview_chart = document.getElementById("js-chart-builder-preview");

    // labels
    var labels_container = document.createElement("div");
    var labels_container_class = document.createAttribute("class");
    labels_container_class.value = "js-labels";
    labels_container.setAttributeNode( labels_container_class );
    labels_container.innerText = BUILDER_DEFAULTS.data.range.labels.join(", ");
    preview_chart.appendChild( labels_container );

    // input low
    var low_values = document.createElement("div");
    var low_values_class = document.createAttribute("class");
    low_values_class.value = "js-low-values";
    low_values.setAttributeNode( low_values_class );
    var low_values_title = document.createAttribute("title");
    low_values_title.value = BUILDER_DEFAULTS.data.range.data[index].title;
    low_values.setAttributeNode( low_values_title );
    low_values.innerText = BUILDER_DEFAULTS.data.range.data[index].low_values.join(", ");
    preview_chart.appendChild( low_values );

    // input high
    var high_values = document.createElement("div");
    var high_values_class = document.createAttribute("class");
    high_values_class.value = "js-high-values";
    high_values.setAttributeNode( high_values_class );
    high_values.innerText = BUILDER_DEFAULTS.data.range.data[index].high_values.join(", ");
    preview_chart.appendChild( high_values );

    var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    return true;
}
// add input data container for points data
function jsChartBuilderAddInputData_Points(data_panel, index, chart_type, insert_element = false) {

    // outer container
    var outer_container = document.createElement("div");
    var outer_container_class = document.createAttribute("class");
    outer_container_class.value = "js-chart-builder-input-data-points-container";
    outer_container.setAttributeNode( outer_container_class );
    var outer_container_style = document.createAttribute("style");
    outer_container_style.value = "display: flex; flex-direction: row; border: 0.5px solid #eeeeee; margin: 10px 0px 10px 0px;";
    outer_container.setAttributeNode( outer_container_style );
    if (!insert_element) {
        data_panel.appendChild( outer_container );
    } else {
        data_panel.insertBefore(outer_container, data_panel.children[ (data_panel.children.length-1) ]);
    }

    // left label
    var left_label_container = document.createElement("div");
    var left_label_container_style = document.createAttribute("style");
    left_label_container_style.value = "flex: 1 1 auto; color: White; background-color: CadetBlue; text-align: center; width: 40px; line-height: 40px; writing-mode: vertical-lr; border-radius: 5px 0px 0px 5px;";
    left_label_container.setAttributeNode( left_label_container_style );
    left_label_container.innerText = "Series " + (index + 1);
    outer_container.appendChild( left_label_container );

    // middle container
    var middle_container = document.createElement("div");
    var middle_container_style = document.createAttribute("style");
    middle_container_style.value = "flex: 1 1 auto; width: calc(100% - (40px + 30px)); display: flex; flex-direction: column; margin: 0px 10px 10px 10px;";
    middle_container.setAttributeNode( middle_container_style );
    outer_container.appendChild( middle_container );

    // x-point label
    var x_point_label = document.createElement("div");
    var x_point_label_style = document.createAttribute("style");
    x_point_label_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 500; margin: 10px 0px 5px 10px;";
    x_point_label.setAttributeNode( x_point_label_style );
    x_point_label.innerHTML = "x-points <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    middle_container.appendChild( x_point_label );

    // x-point input data
    var x_point_values = document.createElement("input");
    var x_point_values_type = document.createAttribute("type");
    x_point_values_type.value = "TEXT";
    x_point_values.setAttributeNode( x_point_values_type );
    x_point_values.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var x_point = preview_chart.getElementsByClassName("js-x-points")[index];

        if (this.value != x_point.innerText) {
            x_point.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    x_point_values.value = BUILDER_DEFAULTS.data.points.data[0].x_points.join(", ");
    middle_container.appendChild( x_point_values );

    // y-point label
    var y_point_label = document.createElement("div");
    var y_point_label_style = document.createAttribute("style");
    y_point_label_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 500; margin: 10px 0px 5px 10px;";
    y_point_label.setAttributeNode( y_point_label_style );
    y_point_label.innerHTML = "y-points <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    middle_container.appendChild( y_point_label );

    // y-point input data
    var y_point_values = document.createElement("input");
    var y_point_values_type = document.createAttribute("type");
    y_point_values_type.value = "TEXT";
    y_point_values.setAttributeNode( y_point_values_type );
    y_point_values.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var y_point = preview_chart.getElementsByClassName("js-y-points")[index];

        if (this.value != y_point.innerText) {
            y_point.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    y_point_values.value = BUILDER_DEFAULTS.data.points.data[0].y_points.join(", ");
    middle_container.appendChild( y_point_values );

    if (chart_type == "bubble") {

        // s-point label
        var s_point_label = document.createElement("div");
        var s_point_label_style = document.createAttribute("style");
        s_point_label_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 500; margin: 10px 0px 5px 10px;";
        s_point_label.setAttributeNode( s_point_label_style );
        s_point_label.innerHTML = "s-points <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
        middle_container.appendChild( s_point_label );

        // s-point input data
        var s_point_values = document.createElement("input");
        var s_point_values_type = document.createAttribute("type");
        s_point_values_type.value = "TEXT";
        s_point_values.setAttributeNode( s_point_values_type );
        s_point_values.addEventListener("change", function () {

            var preview_chart = document.getElementById("js-chart-builder-preview");
            var s_point = preview_chart.getElementsByClassName("js-s-points")[index];

            if (this.value != s_point.innerText) {
                s_point.innerText = this.value;

                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
            }

        }, false);
        s_point_values.value = BUILDER_DEFAULTS.data.points.data[0].s_points.join(", ");
        middle_container.appendChild( s_point_values );

    }

    // remove label
    var remove_container = document.createElement("div");
    var remove_container_style = document.createAttribute("style");
    remove_container_style.value = "flex: 1 1 auto; width: 30px; color: White; background-color: crimson; line-height: 30px; text-align: center; writing-mode: vertical-lr; cursor: pointer; border-radius: 0px 5px 5px 0px; border: 0.5px solid #333333;";
    remove_container.setAttributeNode( remove_container_style );
    remove_container.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    remove_container.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(348, 83%, 47%)";
    }, false);
    remove_container.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    remove_container.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    remove_container.addEventListener("click", function () {

        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-input-data-points-container").length; tt++) {
            if (document.getElementsByClassName("js-chart-builder-input-data-points-container")[tt] == this.parentElement) {

                this.parentElement.remove();

                document.getElementById("js-chart-builder-preview").getElementsByClassName("js-x-points")[tt].remove();
                document.getElementById("js-chart-builder-preview").getElementsByClassName("js-y-points")[tt].remove();
                document.getElementById("js-chart-builder-preview").getElementsByClassName("js-s-points")[tt].remove();

                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

            }
        }

        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-input-data-points-container").length; tt++) {
            document.getElementsByClassName("js-chart-builder-input-data-points-container")[tt].children[0].innerText = "Series " + (tt+1);
        }
    }, false);
    remove_container.innerText = "Remove";
    outer_container.appendChild( remove_container );

    // add to preview chart
    var x_points_container = document.createElement("div");
    var x_points_container_class = document.createAttribute("class");
    x_points_container_class.value = "js-x-points";
    x_points_container.setAttributeNode( x_points_container_class );
    x_points_container.innerText = BUILDER_DEFAULTS.data.points.data[0].x_points.join(", ");
    document.getElementById("js-chart-builder-preview").appendChild( x_points_container );

    // add to preview chart
    var y_points_container = document.createElement("div");
    var y_points_container_class = document.createAttribute("class");
    y_points_container_class.value = "js-y-points";
    y_points_container.setAttributeNode( y_points_container_class );
    y_points_container.innerText = BUILDER_DEFAULTS.data.points.data[0].y_points.join(", ");
    document.getElementById("js-chart-builder-preview").appendChild( y_points_container );

    if (chart_type == "bubble") {

        // add to preview chart
        var s_points_container = document.createElement("div");
        var s_points_container_class = document.createAttribute("class");
        s_points_container_class.value = "js-s-points";
        s_points_container.setAttributeNode( s_points_container_class );
        s_points_container.innerText = BUILDER_DEFAULTS.data.points.data[0].s_points.join(", ");
        document.getElementById("js-chart-builder-preview").appendChild( s_points_container );

}

    var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    return true;
}
// add an input data container for categorical data (js-values)
function jsChartBuilderAddInputData_Categorical(data_panel, index, enable_button, p_input_title, p_input_values, insert_element = false) {

    // outer container
    var outer_container = document.createElement("div");
    var outer_container_class = document.createAttribute("class");
    outer_container_class.value = "js-chart-builder-categorical-container";
    outer_container.setAttributeNode( outer_container_class );
    outer_container.setAttributeNode( outer_container_class );
    var outer_container_style = document.createAttribute("style");
    outer_container_style.value = "display: flex; flex-direction: row; margin: 10px 0px 0px 0px; border: 0.5px solid #bbbbbb; border-radius: 5px;";
    outer_container.setAttributeNode( outer_container_style );
    //data_panel.appendChild( outer_container );
    //data_panel.insertBefore(outer_container, data_panel.children[ (data_panel.children.length-1) ]);
    if (insert_element) {
        data_panel.insertBefore(outer_container, data_panel.children[ (data_panel.children.length-1) ]);
    } else {
        data_panel.appendChild( outer_container );
    }

    // left container
    var left_container = document.createElement("div");
    var left_container_style = document.createAttribute("style");
    left_container_style.value = "flex: 1 1 auto; width: 40px; background-color: CadetBlue; color: white; font-size: 14px; line-height: 40px; font-weight; 400; writing-mode: vertical-lr; border-radius: 3px 0px 0px 3px; text-align: center; margin: 0px 5px 0px 0px;";
    left_container.setAttributeNode( left_container_style );
    left_container.innerText = "Series " + (index + 1);
    outer_container.appendChild( left_container );

    // right container
    var right_container = document.createElement("div");
    var right_container_style = document.createAttribute("style");
    right_container_style.value = "flex: 1 1 auto; width: calc(100% - (40px + 20px)); min-height: 40px; display: flex; flex-direction: column;";
    right_container.setAttributeNode( right_container_style );
    outer_container.appendChild( right_container );

    // remove container
    var remove_container = document.createElement("div");
    var remove_container_style = document.createAttribute("style");
    remove_container_style.value = "flex: 1 1 auto; width: 20px; border: 0.5px solid #333333; border-radius: 0px 3px 3px 0px; background-color: Crimson; color: White; font-size: 11px; font-weight: 400; writing-mode: vertical-lr; text-align: center; line-height: 20px; cursor: pointer;";
    if (!enable_button) {
        remove_container_style.value += "opacity: 0.5; cursor: not-allowed;";
    } else {
        remove_container.addEventListener("mousedown", function () {
            this.style.fontWeight = 200;
        }, false);
        remove_container.addEventListener("mouseup", function () {
            this.style.fontWeight = 400;
        }, false);
    }
    remove_container.setAttributeNode( remove_container_style );
    remove_container.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    remove_container.addEventListener("mouseout", function () {
        this.style.backgroundColor = "Crimson";
    }, false);
    remove_container.addEventListener("click", function () {

        for (const [ikey, ivalue] of Object.entries(document.getElementsByClassName("js-chart-builder-categorical-container"))) {

            if (this.parentElement == ivalue) {
                this.parentElement.remove();
                var preview_chart = document.getElementsByClassName("js-chart")[0];
                preview_chart.getElementsByClassName("js-values")[ikey].remove();
                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
            }
        }

        for (const [ikey, ivalue] of Object.entries(document.getElementsByClassName("js-chart-builder-categorical-container"))) {
            ivalue.children[0].innerText = "Series " + (parseInt(ikey) + 1);
        }

        var pop_msg = jsChartBuilderPopMessage("Data series removed.");
        /*
        this.parentElement.remove();
        var preview_chart = document.getElementsByClassName("js-chart")[0];
        preview_chart.getElementsByClassName("js-values")[index].remove();
        var init_chart = setTimeout(initChart, 100);
        */
    }, false);
    remove_container.innerText = "Remove";
    outer_container.appendChild( remove_container );

    // data title
    var name_label = document.createElement("div");
    var name_label_style = document.createAttribute("style");
    name_label_style.value = "flex: 1 1 auto; font-size: 13px; font-weight: 600; margin: 0px 0px 0px 5px;";
    name_label.setAttributeNode( name_label_style );
    name_label.innerText = "Name or short description:";
    right_container.appendChild( name_label );

    // title
    var data_input_title = document.createElement("input");
    data_input_title.id = "js-chart-data-title-" + index;
    var data_input_title_style = document.createAttribute("style");
    data_input_title_style.value = "flex: 1 1 auto; width: calc(100% - 30px);";
    data_input_title.setAttributeNode( data_input_title_style );
    var data_input_title_type = document.createAttribute("type");
    data_input_title_type.value = "TEXT";
    data_input_title.setAttributeNode( data_input_title_type );
    //data_input_title.value = BUILDER_DEFAULTS.data.categorical[index].title;
    data_input_title.value = p_input_title;
    data_input_title.addEventListener("focus", function () {
        this.select();
    }, false);
    data_input_title.addEventListener("change", function () {

        for (const [ikey, ivalue] of Object.entries(document.getElementsByClassName("js-chart-builder-categorical-container"))) {

            if (this.parentElement.parentElement == ivalue) {
                var preview_chart = document.getElementsByClassName("js-chart")[0]
                var preview_title = preview_chart.getElementsByClassName("js-values")[ikey];
        
                if (this.value != preview_title.getAttribute("title")) {
                    preview_title.setAttribute("title", this.value);
                }
                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
                var pop_msg = jsChartBuilderPopMessage("Data series title updated.");
            }
        }

        /*
        var preview_chart = document.getElementsByClassName("js-chart")[0]
        var preview_title = preview_chart.getElementsByClassName("js-values")[index];

        if (this.value != preview_title.getAttribute("title")) {
            preview_title.setAttribute("title", this.value);
        }
        var init_chart = setTimeout(initChart, 100);
        var pop_msg = jsChartBuilderPopMessage("Data series title updated.");
        */

    }, false);
    right_container.appendChild( data_input_title );

    // values title
    var name_label = document.createElement("div");
    var name_label_style = document.createAttribute("style");
    name_label_style.value = "flex: 1 1 auto; font-size: 13px; font-weight: 600; margin: 0px 0px 0px 5px;";
    name_label.setAttributeNode( name_label_style );
    name_label.innerHTML = "Values <span style=\"font-size: 11px;\">(comma-separates list of numeric values)</span>:";
    right_container.appendChild( name_label );

    // values
    var data_input_title = document.createElement("input");
    data_input_title.id = "js-chart-data-values-" + index;
    var data_input_title_style = document.createAttribute("style");
    data_input_title_style.value = "flex: 1 1 auto; width: calc(100% - 30px);";
    data_input_title.setAttributeNode( data_input_title_style );
    var data_input_title_type = document.createAttribute("type");
    data_input_title_type.value = "TEXT";
    data_input_title.setAttributeNode( data_input_title_type );
    //data_input_title.value = BUILDER_DEFAULTS.data.categorical[index].data;
    data_input_title.value = p_input_values;
    data_input_title.addEventListener("focus", function () {
        this.select();
    }, false);
    data_input_title.addEventListener("change", function () {

        for (const [ikey, ivalue] of Object.entries(document.getElementsByClassName("js-chart-builder-categorical-container"))) {

            if (this.parentElement.parentElement == ivalue) {
                var preview_chart = document.getElementsByClassName("js-chart")[0]
                var preview_values = preview_chart.getElementsByClassName("js-values")[ikey];
        
                if (this.value.trim() != preview_values.innerText.trim()) {
                    preview_values.innerText = this.value.trim();
                }
                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
                var pop_msg = jsChartBuilderPopMessage("Data values updated.");
            }
        }

    }, false);
    right_container.appendChild( data_input_title );

    return true;
}
// toggle the frequency data input containers
function jsChartBuilderPopulateInputData_FrequencyToggleInputs(input_type) {

    // js-chart-builder-auto-container
    // js-chart-builder-boundary-container
    // js-chart-builder-summary-container
    // js-chart-builder-category-container

    var auto_container = document.getElementById("js-chart-builder-auto-container");
    var boundary_container = document.getElementById("js-chart-builder-boundary-container");
    var summary_container = document.getElementById("js-chart-builder-summary-container");
    var category_container = document.getElementById("js-chart-builder-category-container");

    switch (input_type) {
        // auto
        case "auto":
            auto_container.style.display = "flex";
            boundary_container.style.display = "none";
            summary_container.style.display = "none";
            category_container.style.display = "none";

            break;
        // boundary
        case "boundary":
            auto_container.style.display = "none";
            boundary_container.style.display = "flex";
            summary_container.style.display = "none";
            category_container.style.display = "none";

            break;
        // summary
        case "summary":
            auto_container.style.display = "none";
            boundary_container.style.display = "none";
            summary_container.style.display = "flex";
            category_container.style.display = "none";

            break;
        // category
        case "category":
            auto_container.style.display = "none";
            boundary_container.style.display = "none";
            summary_container.style.display = "none";
            category_container.style.display = "flex";

            break;
    }

    return true;
}
// remove any input data containers from a histogram preview
function jsChartBuilderCleanupHistogramPreviewData() {

    var preview_chart = document.getElementById("js-chart-builder-preview");
    var search_for_classes = ["js-values", "js-bin-labels", "js-bin-first-edge", "js-bin-last-edge", "js-bin-size", "js-bin-frequencies"];

    for (const [ikey, ivalue] of Object.entries(search_for_classes)) {
        if (preview_chart.getElementsByClassName( ivalue ).length > 0) {
            for (var tt = (preview_chart.getElementsByClassName( ivalue ).length-1); tt >= 0; tt--) {
                preview_chart.getElementsByClassName( ivalue )[tt].remove();
            }
        }
    }

    return true;
}
// populate the histogram preview chart
function jsChartBuilderPopulateHistogramPreviewData_Category(bin_labels, bin_values) {

    // bin labels
    var bin_labels_container = document.createElement("div");
    var bin_labels_container_class = document.createAttribute("class");
    bin_labels_container_class.value = "js-bin-labels";
    bin_labels_container.setAttributeNode( bin_labels_container_class );
    bin_labels_container.innerText = bin_labels;
    document.getElementById("js-chart-builder-preview").appendChild( bin_labels_container );

    // bin values
    var bin_labels_container = document.createElement("div");
    var bin_labels_container_class = document.createAttribute("class");
    bin_labels_container_class.value = "js-values";
    bin_labels_container.setAttributeNode( bin_labels_container_class );
    bin_labels_container.innerText = bin_values;
    document.getElementById("js-chart-builder-preview").appendChild( bin_labels_container );

    return true;
}
// populate the histogram preview chart
function jsChartBuilderPopulateHistogramPreviewData_Summary(bin_first_edge, bin_last_edge, bin_values) {

    // bin first edge
    var bin_first_edge_container = document.createElement("div");
    var bin_first_edge_container_class = document.createAttribute("class");
    bin_first_edge_container_class.value = "js-bin-first-edge";
    bin_first_edge_container.setAttributeNode( bin_first_edge_container_class );
    bin_first_edge_container.innerText = bin_first_edge;
    document.getElementById("js-chart-builder-preview").appendChild( bin_first_edge_container );

    // bin last edge
    var bin_last_edge_container = document.createElement("div");
    var bin_last_edge_container_class = document.createAttribute("class");
    bin_last_edge_container_class.value = "js-bin-last-edge";
    bin_last_edge_container.setAttributeNode( bin_last_edge_container_class );
    bin_last_edge_container.innerText = bin_last_edge;
    document.getElementById("js-chart-builder-preview").appendChild( bin_last_edge_container );

    // input values
    var values_container = document.createElement("div");
    var values_container_class = document.createAttribute("class");
    values_container_class.value = "js-values";
    values_container.setAttributeNode( values_container_class );
    values_container.innerText = bin_values;
    document.getElementById("js-chart-builder-preview").appendChild( values_container );

    return true;
}
// populate the histogram preview chart
function jsChartBuilderPopulateHistogramPreviewData_Boundary(bin_first_edge, bin_last_edge, bin_size, input_values) {

    // bin first edge
    var bin_first_edge_container = document.createElement("div");
    var bin_first_edge_container_class = document.createAttribute("class");
    bin_first_edge_container_class.value = "js-bin-first-edge";
    bin_first_edge_container.setAttributeNode( bin_first_edge_container_class );
    bin_first_edge_container.innerText = bin_first_edge;
    document.getElementById("js-chart-builder-preview").appendChild( bin_first_edge_container );

    // bin last edge
    var bin_last_edge_container = document.createElement("div");
    var bin_last_edge_container_class = document.createAttribute("class");
    bin_last_edge_container_class.value = "js-bin-last-edge";
    bin_last_edge_container.setAttributeNode( bin_last_edge_container_class );
    bin_last_edge_container.innerText = bin_last_edge;
    document.getElementById("js-chart-builder-preview").appendChild( bin_last_edge_container );

    // bin size
    var bin_size_container = document.createElement("div");
    var bin_size_container_class = document.createAttribute("class");
    bin_size_container_class.value = "js-bin-size";
    bin_size_container.setAttributeNode( bin_size_container_class );
    bin_size_container.innerText = bin_size;
    document.getElementById("js-chart-builder-preview").appendChild( bin_size_container );

    // input values
    var values_container = document.createElement("div");
    var values_container_class = document.createAttribute("class");
    values_container_class.value = "js-values";
    values_container.setAttributeNode( values_container_class );
    values_container.innerText = input_values;
    document.getElementById("js-chart-builder-preview").appendChild( values_container );

    return true;
}

/*
// define series value containers + inputs
function jsChartBuilderPopulateInputData_Series_Values_Values(series_values_container, chart_series_container, insert_element = false) {

var series_data_index = (document.getElementsByClassName("js-chart-builder-series-outer-container").length % BUILDER_DEFAULTS.data.series.data.length);
    if (series_data_index > 0) {
        series_data_index--;
    }

    // value inner container
    var value_inner_container = document.createElement("div");
    var value_inner_container_style = document.createAttribute("style");
    value_inner_container_style.value = "flex: 1 1 auto; display: flex; flex-direction: row; border: 0.5px solid #666666; border-radius: 3px; margin: 0px 0px 10px 0px;";
    value_inner_container.setAttributeNode( value_inner_container_style );
    var value_inner_container_class = document.createAttribute("class");
    value_inner_container_class.value = "js-chart-builder-series-value-inner-container";
    value_inner_container.setAttributeNode( value_inner_container_class );
    if (insert_element) {
        series_values_container.insertBefore( value_inner_container, series_values_container.children[ (series_values_container.children.length-1) ] );
    } else {
        series_values_container.appendChild( value_inner_container );
    }

    // value inner left container
    var value_left_inner_container = document.createElement("div");
    var value_left_inner_container_style = document.createAttribute("style");
    value_left_inner_container_style.value = "flex: 1 1 auto; width: 20px; background-color: CadetBlue; color: White; line-height: 20px; writing-mode: vertical-lr; text-align: center; font-size: 13px; font-weight: 600;";
    value_left_inner_container.setAttributeNode( value_left_inner_container_style );
    value_left_inner_container.innerText = "Data set " + series_values_container.getElementsByClassName("js-chart-builder-series-value-inner-container").length;
    value_inner_container.appendChild( value_left_inner_container );

    // value inner main container
    var value_left_main_container = document.createElement("div");
    var value_left_main_container_style = document.createAttribute("style");
    value_left_main_container_style.value = "flex: 1 1 auto; width: calc(100% - (20px + 20px)); padding: 0px 0px 0px 10px;";
    value_left_main_container.setAttributeNode( value_left_main_container_style );
    value_inner_container.appendChild( value_left_main_container );

    // value inner right container
    var value_right_inner_container = document.createElement("div");
    var value_right_inner_container_style = document.createAttribute("style");
    value_right_inner_container_style.value = "flex: 1 1 auto; width: 20px; background-color: Crimson; color: White; line-height: 20px; writing-mode: vertical-lr; text-align: center; font-size: 12px; font-weight: 400; border-radius: 0px 3px 3px 0px; cursor: pointer;";
    value_right_inner_container.setAttributeNode( value_right_inner_container_style );
    value_right_inner_container.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    value_right_inner_container.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(348, 83%, 47%)";
    }, false);
    value_right_inner_container.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    value_right_inner_container.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    value_right_inner_container.innerText = "Remove";
    value_inner_container.appendChild( value_right_inner_container );

    // value title label
    var series_title_label = document.createElement("div");
    var series_title_label_style = document.createAttribute("style");
    series_title_label_style.value = "flex: 1 1 auto; font-size: 13px; font-weight: 600;";
    series_title_label.setAttributeNode( series_title_label_style );
    series_title_label.innerText = "Data value set name or short description";
    value_left_main_container.appendChild( series_title_label );

    // values input
    var values_label_input = document.createElement("input");
    var values_label_input_type = document.createAttribute("type");
    values_label_input_type.value = "TEXT";
    values_label_input.setAttributeNode( values_label_input_type );
    var values_label_input_style = document.createAttribute("style");
    values_label_input_style.value = "flex: 1 1 auto;";
    values_label_input.setAttributeNode( values_label_input_style );
    values_label_input.value = BUILDER_DEFAULTS.data.series.data[ series_data_index ].title;
    value_left_main_container.appendChild( values_label_input );

    // value values label
    var values_title_label = document.createElement("div");
    var values_title_label_style = document.createAttribute("style");
    values_title_label_style.value = "flex: 1 1 auto; font-size: 13px; font-weight: 600;";
    values_title_label.setAttributeNode( values_title_label_style );
    values_title_label.innerHTML = "Data values <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    value_left_main_container.appendChild( values_title_label );

    // values input
    var values_values_input = document.createElement("input");
    var values_values_input_type = document.createAttribute("type");
    values_values_input_type.value = "TEXT";
    values_values_input.setAttributeNode( values_values_input_type );
    var values_values_input_style = document.createAttribute("style");
    values_values_input_style.value = "flex: 1 1 auto; margin: 0px 0px 10px 0px;";
    values_values_input.setAttributeNode( values_values_input_style );
    values_values_input.value = BUILDER_DEFAULTS.data.series.data[ series_data_index ].data.join(", ");
    value_left_main_container.appendChild( values_values_input );

    // set the preview chart container
    var value_container = document.createElement("div");
    var value_container_class = document.createAttribute("class");
    value_container_class.value = "js-values";
    value_container.setAttributeNode( value_container_class );
    var value_container_title = document.createAttribute("title");
    value_container_title.value = BUILDER_DEFAULTS.data.series.data[ series_data_index ].title;
    value_container.setAttributeNode( value_container_title );
    value_container.innerText = BUILDER_DEFAULTS.data.series.data[ series_data_index ].data.join(", ");
    chart_series_container.appendChild( value_container );

    return true;
}
// define the input controls for series values
function jsChartBuilderPopulateInputData_Series_Values(data_panel) {

    // series outer container
    var series_outer_container = document.createElement("div");
    var series_outer_container_class = document.createAttribute("class");
    series_outer_container_class.value = "js-chart-builder-series-outer-container";
    series_outer_container.setAttributeNode( series_outer_container_class );
    var series_outer_container_style = document.createAttribute("style");
    series_outer_container_style.value = "display: flex; flex-direction: row; border: 0.5px solid #dcdcdc; border-radius: 5px; min-height: 30px; margin: 10px 0px 0px 0px;";
    series_outer_container.setAttributeNode( series_outer_container_style );
    data_panel.insertBefore(series_outer_container, data_panel.children[ (data_panel.children.length-1) ]);

    // series inner container
    var series_inner_container = document.createElement("div");
    var series_inner_container_style = document.createAttribute("style");
    series_inner_container_style.value = "flex: 1 1 auto; width: calc(100% - 20px); background-color: hsl(198, 73%, 90%); display: flex; flex-direction: column; padding: 5px 10px 5px 10px;";
    series_inner_container.setAttributeNode( series_inner_container_style );
    series_outer_container.appendChild( series_inner_container );

    // series title label
    var series_title_label = document.createElement("div");
    var series_title_label_style = document.createAttribute("style");
    series_title_label_style.value = "flex: 1 1 auto; font-size: 13px; font-weight: 600;";
    series_title_label.setAttributeNode( series_title_label_style );
    series_title_label.innerText = "Series name or short description";
    series_inner_container.appendChild( series_title_label );

    var series_data_index = (document.getElementsByClassName("js-chart-builder-series-outer-container").length % BUILDER_DEFAULTS.data.series.data.length);
    if (series_data_index > 0) {
        series_data_index--;
    }

    // series title input
    var series_title_input = document.createElement("input");
    var series_title_input_type = document.createAttribute("type");
    series_title_input_type.value = "TEXT";
    series_title_input.setAttributeNode( series_title_input_type );
    var series_title_input_style = document.createAttribute("style");
    series_title_input_style.value = "flex: 1 1 auto;";
    series_title_input.setAttributeNode( series_title_input_style );
    series_title_input.value = BUILDER_DEFAULTS.data.series.data[ series_data_index ].title;
    series_inner_container.appendChild( series_title_input );

    // series value containers
    var series_values_container = document.createElement("div");
    var series_values_container_style = document.createAttribute("style");
    series_values_container_style.value = "flex: 1 1 auto; display: flex; flex-direction: column; margin: 0px 0px 0px 10px; border: 0.5px solid #dcdcdc; border-radius: 5px; min-height: 30px; background-color: hsl(79, 61%, 80%); padding: 5px 10px 5px 10px;";
    series_values_container.setAttributeNode( series_values_container_style );
    //series_inner_container.appendChild( series_values_container );
    //series_inner_container.insertBefore(series_values_container,series_inner_container.children[ (series_inner_container.children.length-1) ]);
    series_inner_container.appendChild( series_values_container );

    // draw the chart series container
    var chart_series_container = document.createElement("div");
    var chart_series_container_class = document.createAttribute("class");
    chart_series_container_class.value = "js-series";
    chart_series_container.setAttributeNode( chart_series_container_class );
    document.getElementById("js-chart-builder-preview").appendChild( chart_series_container );

    var draw_values = jsChartBuilderPopulateInputData_Series_Values_Values(series_values_container, chart_series_container, false);


    // add more data values button
    var more_values_button = document.createElement("div");
    var more_values_button_style = document.createAttribute("style");
    more_values_button_style.value = "flex: 1 1 auto; width: 120px; background-color: rgb(34, 140, 34); margin: 10px 0px; font-size: 14px; font-weight: 400; text-align: center; height: 30px; line-height: 30px; border: 0.5px solid black; border-radius: 3px; color: white; cursor: pointer;";
    more_values_button.setAttributeNode( more_values_button_style );
    more_values_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(120, 61%, 24%)";
    }, false);
    more_values_button.addEventListener("mousedown", function () {
        this.style.backgroundColor = "hsl(120, 61%, 34%)";
    }, false);
    more_values_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    more_values_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    more_values_button.addEventListener("click", function () {

        var draw_series_values_container = jsChartBuilderPopulateInputData_Series_Values_Values(series_values_container, chart_series_container, true);

    }, false);
    more_values_button.innerText = "+More Values";
    series_values_container.appendChild( more_values_button );

    // remove button
    var remove_button_container = document.createElement("div");
    var remove_button_container_style = document.createAttribute("style");
    remove_button_container_style.value = "flex: 1 1 auto; width: 20px; line-height: 20px; text-align: center; color: White; background-color: Crimson; border: 0.5px solid black; border-radius: 0px 5px 5px 0px; writing-mode: vertical-lr; cursor: pointer;";
    remove_button_container.setAttributeNode( remove_button_container_style );
    remove_button_container.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    remove_button_container.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(348, 83%, 47%)";
    }, false);
    remove_button_container.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    remove_button_container.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    remove_button_container.innerText = "Remove";
    series_outer_container.appendChild( remove_button_container );

    return true;
}
// add data set for a series container
function jsChartBuilderPopulateInputData_SeriesContainer_DataSet(data_set_grid, preview_series_container) {

    var num_of_rows = data_set_grid.getElementsByClassName("js-chart-builder-series-data-set-row").length;
    var data_index = ((num_of_rows + 1) % BUILDER_DEFAULTS.data.series.data.length) - 1;
    if (data_index < 0) {
        data_index = (BUILDER_DEFAULTS.data.series.data.length - 1);
    }

    // row number
    var row_number = document.createElement("div");
    var row_number_style = document.createAttribute("style");
    row_number_style.value = "line-height: 30px; text-align: center;";
    row_number.setAttributeNode( row_number_style );
    var row_number_class = document.createAttribute("class");
    row_number_class.value = "js-chart-builder-series-data-set-row";
    row_number.setAttributeNode( row_number_class );
    row_number.innerText = (num_of_rows + 1);
    data_set_grid.appendChild( row_number );

    // row name
    var row_name = document.createElement("input");
    var row_name_type = document.createAttribute("type");
    row_name_type.value = "TEXT";
    row_name.setAttributeNode( row_name_type );
    var row_name_style = document.createAttribute("style");
    row_name_style.value = "margin: 0px 5px 0px 0px;";
    row_name.setAttributeNode( row_name_style );
    row_name.addEventListener("change", function () {

        preview_series_container.children[ (parseInt(this.previousElementSibling.innerText)-1) ].setAttribute("title", this.value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    row_name.value = BUILDER_DEFAULTS.data.series.data[ data_index ].title;
    data_set_grid.appendChild( row_name );

    // row values
    var row_values = document.createElement("input");
    var row_values_type = document.createAttribute("type");
    row_values_type.value = "TEXT";
    row_values.setAttributeNode( row_values_type );
    var row_values_style = document.createAttribute("style");
    row_values_style.value = "margin: 0px 5px 0px 0px;";
    row_values.setAttributeNode( row_values_style );
    row_values.addEventListener("change", function () {

        preview_series_container.children[ (parseInt(this.previousElementSibling.previousElementSibling.innerText)-1) ].innerText = this.value;

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    row_values.value = BUILDER_DEFAULTS.data.series.data[ data_index].data.join(", ");
    data_set_grid.appendChild( row_values );

    // row remove
    var row_remove = document.createElement("div");
    var row_remove_style = document.createAttribute("style");
    row_remove_style.value = "text-align: center; font-weight: 400; background-color: crimson; color: white; border: 0.5px solid #bbbbbb; border-radius: 3px; line-height: 30px; cursor: pointer;";
    row_remove.setAttributeNode( row_remove_style );
    var row_remove_title = document.createAttribute("title");
    row_remove_title.value = "Remove one data row";
    row_remove.setAttributeNode( row_remove_title );
    row_remove.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    row_remove.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(348, 83%, 47%)";
    }, false);
    row_remove.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    row_remove.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    row_remove.addEventListener("click", function () {

    preview_series_container.children[ (parseInt(this.previousElementSibling.previousElementSibling.previousElementSibling.innerText)-1) ].remove();

        this.previousElementSibling.previousElementSibling.previousElementSibling.remove();
        this.previousElementSibling.previousElementSibling.remove();
        this.previousElementSibling.remove();
        this.remove();

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-series-data-set-row").length; tt++) {
            document.getElementsByClassName("js-chart-builder-series-data-set-row")[tt].innerText = (tt + 1);
        }

    }, false);
    row_remove.innerText = "X";
    data_set_grid.appendChild( row_remove );

    // update the preview chart
    var new_values = document.createElement("div");
    var new_values_class = document.createAttribute("class");
    new_values_class.value = "js-values";
    new_values.setAttributeNode( new_values_class );
    var new_values_title = document.createAttribute("title");
    new_values_title.value = BUILDER_DEFAULTS.data.series.data[ data_index ].title;
    new_values.setAttributeNode( new_values_title );
    new_values.innerText = BUILDER_DEFAULTS.data.series.data[ data_index ].data.join(", ");
    preview_series_container.appendChild( new_values );

    var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");


    return true;
}
// add series container
function jsChartBuilderPopulateInputData_SeriesContainer(data_panel) {

    var get_series_container = document.getElementsByClassName("js-chart-builder-series-outer-container");

    // series outer container
    var series_outer_container = document.createElement("div");
    var series_outer_container_style = document.createAttribute("style");
    series_outer_container_style.value = "border: 0.5px solid #bbbbbb; border-radius: 5px; margin: 10px 0px 0px 0px; display: flex; flex-direction: row;";
    series_outer_container.setAttributeNode( series_outer_container_style );
    var series_outer_container_class = document.createAttribute("class");
    series_outer_container_class.value = "js-chart-builder-series-outer-container";
    series_outer_container.setAttributeNode( series_outer_container_class );
    data_panel.insertBefore(series_outer_container, data_panel.children[ (data_panel.children.length-1) ]);

    // left series container - series label
    var series_outer_container_label = document.createElement("div");
    var series_outer_container_label_style = document.createAttribute("style");
    series_outer_container_label_style.value = "flex: 1 1 auto; width: 30px; line-height: 30px; writing-mode: vertical-lr; background-color: hsl(182, 25%, 50%); color: white; font-weight: 400; text-align: center;";
    series_outer_container_label.setAttributeNode( series_outer_container_label_style );
    series_outer_container_label.innerText = "Series " + (get_series_container.length);
    series_outer_container.appendChild( series_outer_container_label );

    // middle series container
    var middle_series_container = document.createElement("div");
    var middle_series_container_style = document.createAttribute("style");
    middle_series_container_style.value = "flex: 1 1 auto; width: calc(100% - (30px + 20px)); background-color: white; display: flex; flex-direction: column; padding: 5px 10px 5px 10px;";
    middle_series_container.setAttributeNode( middle_series_container_style );
    series_outer_container.appendChild( middle_series_container );

    // middle series container - series title label
    var series_label_container = document.createElement("div");
    var series_label_container_style = document.createAttribute("style");
    series_label_container_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 500;";
    series_label_container.setAttributeNode( series_label_container_style );
    series_label_container.innerText = "Series name or short description:";
    middle_series_container.appendChild( series_label_container );

    // middle series container - series title input
    var series_index = (get_series_container.length % BUILDER_DEFAULTS.data.series.data.length) -1;
    if (series_index < 0) {
        series_index = (BUILDER_DEFAULTS.data.series.data.length - 1);
    }

    // update preview chart
    var preview_series_container = document.createElement("div");
    var preview_series_container_class = document.createAttribute("class");
    preview_series_container_class.value = "js-series";
    preview_series_container.setAttributeNode( preview_series_container_class );
    var preview_series_container_title = document.createAttribute("title");
    preview_series_container_title.value = BUILDER_DEFAULTS.data.series.data[ series_index ].title;
    preview_series_container.setAttributeNode( preview_series_container_title );
    document.getElementById("js-chart-builder-preview").appendChild( preview_series_container );

    var series_label_input = document.createElement("input");
    var series_label_input_type = document.createAttribute("type");
    series_label_input_type.value = "TEXT";
    series_label_input.setAttributeNode( series_label_input_type );
    series_label_input.addEventListener("change", function () {

        preview_series_container.setAttribute("title", this.value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    series_label_input.value = BUILDER_DEFAULTS.data.series.data[ series_index ].title;
    middle_series_container.appendChild( series_label_input );

    // data sets table/grid
    var data_set_grid = document.createElement("div");
    var data_set_grid_style = document.createAttribute("style");
    data_set_grid_style.value = "display: grid; grid-template-columns: 30px 200px calc(100% - (30px + 200px + 30px)) 30px; grid-template-rows: 30px; grid-auto-rows: 30px; row-gap: 5px; margin: 5px 0px 0px 0px;";
    data_set_grid.setAttributeNode( data_set_grid_style );
    var data_set_grid_class = document.createAttribute("class");
    data_set_grid_class.value = "js-chart-builder-series-data-set-grid";
    data_set_grid.setAttributeNode( data_set_grid_class );
    middle_series_container.append( data_set_grid );

    // grid header (#)
    var data_set_grid_header = document.createElement("div");
    var data_set_grid_header_style = document.createAttribute("style");
    data_set_grid_header_style.value = "font-size: 13px; font-weight: 400; text-align: center; background-color: cadetblue; color: white; line-height: 30px; border-radius: 5px 0px 0px 0px;";
    data_set_grid_header.setAttributeNode( data_set_grid_header_style );
    data_set_grid_header.innerText = "#";
    data_set_grid.append( data_set_grid_header );

    // grid header (Name)
    var data_set_grid_header = document.createElement("div");
    var data_set_grid_header_style = document.createAttribute("style");
    data_set_grid_header_style.value = "font-size: 13px; font-weight: 400; text-align: center; background-color: cadetblue; color: white; line-height: 30px;";
    data_set_grid_header.setAttributeNode( data_set_grid_header_style );
    data_set_grid_header.innerText = "Name or short desc.";
    data_set_grid.append( data_set_grid_header );

    // grid header (Values)
    var data_set_grid_header = document.createElement("div");
    var data_set_grid_header_style = document.createAttribute("style");
    data_set_grid_header_style.value = "font-size: 13px; font-weight: 400; text-align: center; background-color: cadetblue; color: white; line-height: 30px;";
    data_set_grid_header.setAttributeNode( data_set_grid_header_style );
    data_set_grid_header.innerHTML = "Values <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    data_set_grid.append( data_set_grid_header );

    // grid header (remove)
    var data_set_grid_header = document.createElement("div");
    var data_set_grid_header_style = document.createAttribute("style");
    data_set_grid_header_style.value = "font-size: 13px; font-weight: 400; text-align: center; background-color: cadetblue; color: white; line-height: 30px; border-radius: 0px 5px 0px 0px;";
    data_set_grid_header.setAttributeNode( data_set_grid_header_style );
    //data_set_grid_header.innerText = "X";
    data_set_grid.append( data_set_grid_header );


    // add data set button
    var more_data_set_button = document.createElement("div");
    var more_data_set_button_style = document.createAttribute("style");
    more_data_set_button_style.value = "width: 150px; background-color: forestgreen; margin: 10px 0px; font-weight: 400; font-size: 13px; font-weight: 400; text-align: center; line-height: 20px; border: 0.5px solid #333333; border-radius: 3px; color: white; cursor: pointer;";
    more_data_set_button.setAttributeNode( more_data_set_button_style );
    more_data_set_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(120, 61%, 24%)";
    }, false);
    more_data_set_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(120, 61%, 34%)";
    }, false);
    more_data_set_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    more_data_set_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    more_data_set_button.addEventListener("click", function () {

        var add_series_data_set = jsChartBuilderPopulateInputData_SeriesContainer_DataSet(data_set_grid, preview_series_container);

    }, false);
    more_data_set_button.innerText = "+More Data Set";
    middle_series_container.appendChild( more_data_set_button );

    // add one dta row by default
    var add_series_data_set = jsChartBuilderPopulateInputData_SeriesContainer_DataSet(data_set_grid, preview_series_container);

    // right series container - remove button
    var right_series_container = document.createElement("div");
    var right_series_container_style = document.createAttribute("style");
    right_series_container_style.value = "flex: 1 1 auto; width: 20px; line-height: 20px; writing-mode: vertical-lr; background-color: crimson; color: white; font-weight: 400; text-align: center; cursor: pointer;";
    right_series_container.setAttributeNode( right_series_container_style );
    right_series_container.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    right_series_container.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(348, 83%, 47%)";
    }, false);
    right_series_container.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    right_series_container.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    right_series_container.addEventListener("click", function () {

        preview_series_container.remove()
        this.parentElement.remove();

        for (var tt = 0; tt <= document.getElementsByClassName("js-chart-builder-series-outer-container").length; tt++) {
            document.getElementsByClassName("js-chart-builder-series-outer-container")[tt].children[0].innerText = "Series " + (tt+1);
        }

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    right_series_container.innerText = "Remove Series";
    series_outer_container.appendChild( right_series_container );

    return true;
}
*/

// add a data set to a series container
function jsChartBuilderPopulateInputData_SeriesContainer_DataSet(data_set_grid_container, preview_series_container) {

    var rownum = data_set_grid_container.getElementsByClassName("js-chart-builder-series-data-series-row-index").length;
    var data_index = ((rownum + 1) % BUILDER_DEFAULTS.data.series.data.length) - 1;
    if (data_index < 0) {
        data_index = (BUILDER_DEFAULTS.data.series.data.length - 1);
    }

    // row count
    var row_counter = document.createElement("div");
    var row_counter_class = document.createAttribute("class");
    row_counter_class.value = "js-chart-builder-series-data-series-row-index";
    row_counter.setAttributeNode( row_counter_class );
    row_counter.innerText = (rownum + 1);
    data_set_grid_container.appendChild( row_counter );

    // data set name
    var data_set_name = document.createElement("input");
    var data_set_name_type = document.createAttribute("type");
    data_set_name_type.value = "TEXT";
    data_set_name.setAttributeNode( data_set_name_type );
    var data_set_name_style = document.createAttribute("style");
    data_set_name_style.value = "margin: 0px 5px 0px 0px;";
    data_set_name.setAttributeNode( data_set_name_style );
    data_set_name.addEventListener("change", function () {

        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-series-outer-container").length; tt++) {
            if (this.parentElement.parentElement.parentElement == document.getElementsByClassName("js-chart-builder-series-outer-container")[tt]) {

                var preview_chart = document.getElementById("js-chart-builder-preview");
                preview_chart.getElementsByClassName("js-series")[tt].getElementsByClassName("js-values")[ rownum ].setAttribute("title", this.value);

                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

            }
        }

    }, false);
    data_set_name.value = BUILDER_DEFAULTS.data.series.data[ data_index ].title + " " + rownum;
    data_set_grid_container.appendChild( data_set_name );

    // data set values
    var data_set_values = document.createElement("input");
    var data_set_values_type = document.createAttribute("type");
    data_set_values_type.value = "TEXT";
    data_set_values.setAttributeNode( data_set_values_type );
    var data_set_values_style = document.createAttribute("style");
    data_set_values_style.value = "margin: 0px 5px 0px 0px;";
    data_set_values.setAttributeNode( data_set_values_style );
    data_set_values.addEventListener("change", function () {

        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-series-outer-container").length; tt++) {
            if (this.parentElement.parentElement.parentElement == document.getElementsByClassName("js-chart-builder-series-outer-container")[tt]) {

                var preview_chart = document.getElementById("js-chart-builder-preview");
                preview_chart.getElementsByClassName("js-series")[tt].getElementsByClassName("js-values")[ rownum ].innerText = this.value;

                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

            }
        }

    }, false);
    data_set_values.value = BUILDER_DEFAULTS.data.series.data[ data_index ].data.join(", ");
    data_set_grid_container.appendChild( data_set_values );

    // data set remove
    var data_set_remove_button = document.createElement("div");
    var data_set_remove_button_class = document.createAttribute("class");
    data_set_remove_button_class.value = "js-chart-builder-series-data-set-remove-button";
    data_set_remove_button.setAttributeNode( data_set_remove_button_class );
    var data_set_remove_button_title = document.createAttribute("title");
    data_set_remove_button_title.value = "Remove data set";
    data_set_remove_button.setAttributeNode( data_set_remove_button_title );
    data_set_remove_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    data_set_remove_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(348, 83%, 47%)";
    }, false);
    data_set_remove_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    data_set_remove_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    data_set_remove_button.addEventListener("click", function () {

        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-series-outer-container").length; tt++) {
            if (this.parentElement.parentElement.parentElement == document.getElementsByClassName("js-chart-builder-series-outer-container")[tt]) {

                var preview_chart = document.getElementById("js-chart-builder-preview");
                preview_chart.getElementsByClassName("js-series")[tt].getElementsByClassName("js-values")[ (parseInt(this.previousElementSibling.previousElementSibling.previousElementSibling.innerText)-1) ].remove();

            }
        }

        this.previousElementSibling.previousElementSibling.previousElementSibling.remove();
        this.previousElementSibling.previousElementSibling.remove();
        this.previousElementSibling.remove();
        this.remove();

        for (var tt = 0; tt < data_set_grid_container.getElementsByClassName("js-chart-builder-series-data-series-row-index").length; tt++) {
            data_set_grid_container.getElementsByClassName("js-chart-builder-series-data-series-row-index")[tt].innerText = (tt+1);
        }

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    data_set_remove_button.innerText = "X";
    data_set_grid_container.appendChild( data_set_remove_button );

    // update preview chart
    var new_values = document.createElement("div");
    var new_values_class = document.createAttribute("class");
    new_values_class.value = "js-values";
    new_values.setAttributeNode( new_values_class );
    var new_values_title = document.createAttribute("title");
    new_values_title.value = BUILDER_DEFAULTS.data.series.data[ data_index ].title + " " + rownum;
    new_values.setAttributeNode( new_values_title );
    new_values.innerText = BUILDER_DEFAULTS.data.series.data[ data_index ].data.join(", ");
    preview_series_container.appendChild( new_values );

    var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    return true;
}
// add series container
function jsChartBuilderPopulateInputData_SeriesContainer(data_panel) {

    var series_outer_container_element = document.getElementsByClassName("js-chart-builder-series-outer-container");
    var connum = series_outer_container_element.length;
    var con_index = ((connum + 1) % BUILDER_DEFAULTS.data.series.data.length) - 1;
    if (con_index < 0) {
        con_index = (BUILDER_DEFAULTS.data.series.data.length - 1);
    }

    // series outer container
    var series_outer_container = document.createElement("div");
    var series_outer_container_class = document.createAttribute("class");
    series_outer_container_class.value = "js-chart-builder-series-outer-container";
    series_outer_container.setAttributeNode( series_outer_container_class );
    var series_outer_container_connum = document.createAttribute("connum");
    series_outer_container_connum.value = connum;
    series_outer_container.setAttributeNode( series_outer_container_connum );
    data_panel.insertBefore(series_outer_container, data_panel.children[ (data_panel.children.length-1) ] );

    // series outer container - left label
    var series_label_container = document.createElement("div");
    var series_label_container_class = document.createAttribute("class");
    series_label_container_class.value = "js-chart-builder-series-label-container";
    series_label_container.setAttributeNode( series_label_container_class );
    series_label_container.innerText = "Series " + (series_outer_container_element.length);
    series_outer_container.appendChild( series_label_container );

    // series outer container - middle container
    var middle_series_container = document.createElement("div");
    var middle_series_container_class = document.createAttribute("class");
    middle_series_container_class.value = "js-chart-builder-series-middle-container";
    middle_series_container.setAttributeNode( middle_series_container_class );
    series_outer_container.appendChild( middle_series_container );

    // series outer container - middle container - series title label
    var series_title_label = document.createElement("div");
    var series_title_label_class = document.createAttribute("class");
    series_title_label_class.value = "js-chart-builder-series-title-label";
    series_title_label.setAttributeNode( series_title_label_class );
    series_title_label.innerHTML = "Series name or short description:";
    middle_series_container.appendChild( series_title_label );

    // series outer container - middle container - series title input
    var series_title_input = document.createElement("input");
    var series_title_input_type = document.createAttribute("type");
    series_title_input_type.value = "TEXT";
    series_title_input.setAttributeNode( series_title_input_type );
    series_title_input.value = BUILDER_DEFAULTS.data.series.data[ con_index ].title;
    series_title_input.addEventListener("change", function () {

        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-series-outer-container").length; tt++) {
            if (this.parentElement.parentElement == document.getElementsByClassName("js-chart-builder-series-outer-container")[tt]) {

                var preview_chart = document.getElementById("js-chart-builder-preview");
                preview_chart.getElementsByClassName("js-series")[tt].setAttribute("title", this.value);

                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
            }
        }

    }, false);
    middle_series_container.appendChild( series_title_input );

    // update the preview chart
    var preview_chart = document.getElementById("js-chart-builder-preview");

    var preview_series_container = document.createElement("div");
    var preview_series_container_class = document.createAttribute("class");
    preview_series_container_class.value = "js-series";
    preview_series_container.setAttributeNode( preview_series_container_class );
    var preview_series_container_title = document.createAttribute("title");
    preview_series_container_title.value = BUILDER_DEFAULTS.data.series.data[ con_index ].title;
    preview_series_container.setAttributeNode( preview_series_container_title );
    preview_chart.appendChild( preview_series_container );

    // series outer container - middle container - data set label
    var data_set_label_heading = document.createElement("div");
    var data_set_label_heading_class = document.createAttribute("class");
    data_set_label_heading_class.value = "js-chart-builder-series-title-label";
    data_set_label_heading.setAttributeNode( data_set_label_heading_class );
    data_set_label_heading.innerHTML = "Data sets:";
    middle_series_container.appendChild( data_set_label_heading );

    // series outer container - middle container - data set grid container
    var data_set_grid_container = document.createElement("div");
    var data_set_grid_container_class = document.createAttribute("class");
    data_set_grid_container_class.value = "js-chart-builder-series-data-grid-container";
    data_set_grid_container.setAttributeNode( data_set_grid_container_class );
    middle_series_container.appendChild( data_set_grid_container );

    // data set grid header - row index
    var data_set_grid_header = document.createElement("div");
    var data_set_grid_header_class = document.createAttribute("class");
    data_set_grid_header_class.value = "js-chart-builder-series-data-grid-header";
    data_set_grid_header.setAttributeNode( data_set_grid_header_class );
    var data_set_grid_header_style = document.createAttribute("style");
    data_set_grid_header_style.value = "border-radius: 5px 0px 0px 0px;";
    data_set_grid_header.setAttributeNode( data_set_grid_header_style );
    data_set_grid_header.innerText = "#";
    data_set_grid_container.appendChild( data_set_grid_header );

    // data set grid header - data set title
    var data_set_grid_header = document.createElement("div");
    var data_set_grid_header_class = document.createAttribute("class");
    data_set_grid_header_class.value = "js-chart-builder-series-data-grid-header";
    data_set_grid_header.setAttributeNode( data_set_grid_header_class );
    data_set_grid_header.innerText = "Name";
    data_set_grid_container.appendChild( data_set_grid_header );

    // data set grid header - data set values
    var data_set_grid_header = document.createElement("div");
    var data_set_grid_header_class = document.createAttribute("class");
    data_set_grid_header_class.value = "js-chart-builder-series-data-grid-header";
    data_set_grid_header.setAttributeNode( data_set_grid_header_class );
    data_set_grid_header.innerHTML = "Values <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    data_set_grid_container.appendChild( data_set_grid_header );

    // data set grid header - remove column
    var data_set_grid_header = document.createElement("div");
    var data_set_grid_header_class = document.createAttribute("class");
    data_set_grid_header_class.value = "js-chart-builder-series-data-grid-header";
    data_set_grid_header.setAttributeNode( data_set_grid_header_class );
    data_set_grid_container.appendChild( data_set_grid_header );

    for (var tt = 0; tt < 5; tt++) {
        var add_series_data_set = jsChartBuilderPopulateInputData_SeriesContainer_DataSet(data_set_grid_container, preview_series_container);
    }

    // add more data set button
    var more_data_set_button = document.createElement("div");
    var more_data_set_button_class = document.createAttribute("class");
    more_data_set_button_class.value = "js-chart-builder-series-data-set-button";
    more_data_set_button.setAttributeNode( more_data_set_button_class );
    more_data_set_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(120, 61%, 24%)";
    }, false);
    more_data_set_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(120, 61%, 34%)";
    }, false);
    more_data_set_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    more_data_set_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    more_data_set_button.addEventListener("click", function () {

        var add_series_data_set = jsChartBuilderPopulateInputData_SeriesContainer_DataSet(data_set_grid_container, preview_series_container);

    }, false);
    more_data_set_button.innerText = "+More Data Set";
    middle_series_container.appendChild( more_data_set_button );


    // series outer container - right remove button
    var right_series_remove_button = document.createElement("div");
    var right_series_remove_button_class = document.createAttribute("class");
    right_series_remove_button_class.value = "js-chart-builder-series-remove-button";
    right_series_remove_button.setAttributeNode( right_series_remove_button_class );
    right_series_remove_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    right_series_remove_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(348, 83%, 47%)";
    }, false);
    right_series_remove_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    right_series_remove_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    right_series_remove_button.addEventListener("mouseup", function () {

        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-series-outer-container").length; tt++) {
            if (document.getElementsByClassName("js-chart-builder-series-outer-container")[tt] == this.parentElement) {

                var preview_chart = document.getElementById("js-chart-builder-preview");
                preview_chart.getElementsByClassName("js-series")[tt].remove();
                break;
            }
        }

        this.parentElement.remove();

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    right_series_remove_button.innerText = "Remove Series";
    series_outer_container.appendChild( right_series_remove_button );




    return true;
}
// add series input data
function jsChartBuilderPopulateInputData_Series(data_panel, chart_type) {

    for (var tt = (data_panel.children.length-1); tt >= 0; tt--) {
        data_panel.children[tt].remove();
    }

    // label
    var data_input_label = document.createElement("div");
    var data_input_label_class = document.createAttribute("class");
    data_input_label_class.value = "js-chart-builder-data-input-label";
    data_input_label.setAttributeNode( data_input_label_class );
    data_input_label.innerText = "Numeric Data (Distribution & Spread)";
    data_panel.appendChild( data_input_label );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    data_panel.appendChild( data_input_sublabel );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_description;
    data_panel.appendChild( data_input_sublabel );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 5px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: ForestGreen; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">YES</span>";
    } else {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: Crimson; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">NO</span>";
    }
    data_panel.appendChild( data_input_value_labels );

    // add series button
    var more_series_button = document.createElement("div");
    var more_series_button_style = document.createAttribute("style");
    more_series_button_style.value = "width: 150px; background-color: forestgreen; margin: 10px 0px; font-weight: 400; font-size: 14px; font-weight: 400; text-align: center; line-height: 30px; border: 0.5px solid #333333; border-radius: 3px; color: white; cursor: pointer;";
    more_series_button.setAttributeNode( more_series_button_style );
    more_series_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(120, 61%, 24%)";
    }, false);
    more_series_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(120, 61%, 34%)";
    }, false);
    more_series_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    more_series_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    more_series_button.addEventListener("click", function () {

        var add_series = jsChartBuilderPopulateInputData_SeriesContainer(data_panel);

    }, false);
    more_series_button.innerText = "+More Series";
    data_panel.appendChild( more_series_button );

    more_series_button.setAttributeNode( more_series_button_style );
    data_panel.appendChild( more_series_button );

    // add one series row
    var add_series = jsChartBuilderPopulateInputData_SeriesContainer(data_panel);

    return this;
}
// add hierarchical input data
function jsChartBuilderPopulateInputData_Hierarchical(data_panel, chart_type) {

    for (var tt = (data_panel.children.length-1); tt >= 0; tt--) {
        data_panel.children[tt].remove();
    }

    // label
    var data_input_label = document.createElement("div");
    var data_input_label_class = document.createAttribute("class");
    data_input_label_class.value = "js-chart-builder-data-input-label";
    data_input_label.setAttributeNode( data_input_label_class );
    data_input_label.innerText = "Hierarchical Categorical Data";
    data_panel.appendChild( data_input_label );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    data_panel.appendChild( data_input_sublabel );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_description;
    data_panel.appendChild( data_input_sublabel );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 5px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: ForestGreen; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">YES</span>";
    } else {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: Crimson; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">NO</span>";
    }
    data_panel.appendChild( data_input_value_labels );

    // label
    var top_container = document.createElement("div");
    var top_container_style = document.createAttribute("style");
    top_container_style.value = "display: flex; flex-direction: row;";
    top_container.setAttributeNode( top_container_style );
    data_panel.appendChild( top_container );

    // label
    var label_label = document.createElement("div");
    var label_label_style = document.createAttribute("style");
    label_label_style.value = "flex: 1 1 auto; width: calc(100% - 80px); font-size: 14px; font-weight: 500; margin: 10px 0px 0px 0px;";
    label_label.setAttributeNode( label_label_style );
    label_label.innerHTML = "Hierarchical Data <span style=\"font-size: 10px;\">(JSON)</span>";
    top_container.appendChild( label_label );

    // button
    var label_button = document.createElement("div");
    var label_button_style = document.createAttribute("style");
    label_button_style.value = "flex: 1 1 auto; width: 80px; border: 0.5px solid black; background-color: crimson; color: white; font-weight: 500; text-align: center; padding: 2px 5px 2px 5px; height: 20px; line-height: 20px; border-radius: 5px; margin: 0px 20px 0px 0px; cursor: pointer;";
    label_button.setAttributeNode( label_button_style );
    label_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    label_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(348, 83%, 47%)";
    }, false);
    label_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    label_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 500;
    }, false);
    label_button.addEventListener("click", function () {
        
        document.getElementById("default-json-data").innerText = document.getElementById("js-chart-builder-hierarchical-data").value;

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    label_button.innerText = "Update";
    top_container.appendChild( label_button );

    /*
    var label_label = document.createElement("div");
    var label_label_style = document.createAttribute("style");
    label_label_style.value = "font-size: 14px; font-weight: 500; margin: 10px 0px 0px 0px;";
    label_label.setAttributeNode( label_label_style );
    label_label.innerHTML = "Hierarchical Data <span style=\"font-size: 10px;\">(JSON)</span>";
    data_panel.appendChild( label_label );
    */

    // json inout data
    var hierarchical_data = document.createElement("TEXTAREA");
    hierarchical_data.id = "js-chart-builder-hierarchical-data";
    var hierarchical_data_style = document.createAttribute("style");
    hierarchical_data_style.value = "font-size: 11px; width: calc(100% - 20px); max-width: calc(100% - 20px); height: 300px; border-radius: 5px; border: 0.5px solid #eeeeee; margin-bottom: 30px;";
    hierarchical_data.setAttributeNode( hierarchical_data_style );
    hierarchical_data.addEventListener("change", function () {

        if (JSON.stringify(this.value) != JSON.stringify(document.getElementById("default-json-data").innerText)) {

            document.getElementById("default-json-data").innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        }

    }, false);
    hierarchical_data.innerText = JSON.stringify(BUILDER_DEFAULTS.data.hierarchical.data);
    data_panel.appendChild( hierarchical_data );

    return true;
}
// add ohlc input data
function jsChartBuilderPopulateInputData_OHLC(data_panel, chart_type) {

    for (var tt = (data_panel.children.length-1); tt >= 0; tt--) {
        data_panel.children[tt].remove();
    }

    // label
    var data_input_label = document.createElement("div");
    var data_input_label_class = document.createAttribute("class");
    data_input_label_class.value = "js-chart-builder-data-input-label";
    data_input_label.setAttributeNode( data_input_label_class );
    data_input_label.innerText = "Time-Series Financial Data (Open-High-Low-Close)";
    data_panel.appendChild( data_input_label );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    data_panel.appendChild( data_input_sublabel );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_description;
    data_panel.appendChild( data_input_sublabel );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 5px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: ForestGreen; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">YES</span>";
    } else {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: Crimson; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">NO</span>";
    }
    data_panel.appendChild( data_input_value_labels );

    // label
    var label_label = document.createElement("div");
    var label_label_style = document.createAttribute("style");
    label_label_style.value = "font-size: 14px; font-weight: 500; margin: 10px 0px 0px 0px;";
    label_label.setAttributeNode( label_label_style );
    label_label.innerHTML = "Labels <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    data_panel.appendChild( label_label );

    var label_input = document.createElement("input");
    var label_input_type = document.createAttribute("type");
    label_input_type.value = "TEXT";
    label_input.setAttributeNode( label_input_type );
    var label_input_style = document.createAttribute("style");
    label_input_style.value = "width: calc(100% - 30px);";
    label_input.setAttributeNode( label_input_style );
    label_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var label_preview = preview_chart.getElementsByClassName("js-labels")[0];

        if (this.value != label_preview.innerText) {
            label_preview.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    label_input.value = BUILDER_DEFAULTS.data.ohlc.data.labels.join(", ");
    data_panel.appendChild( label_input );

    // open
    var open_label = document.createElement("div");
    var open_label_style = document.createAttribute("style");
    open_label_style.value = "font-size: 14px; font-weight: 500; margin: 10px 0px 0px 0px;";
    open_label.setAttributeNode( open_label_style );
    open_label.innerHTML = "Open Values <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    data_panel.appendChild( open_label );

    var open_input = document.createElement("input");
    var open_input_type = document.createAttribute("type");
    open_input_type.value = "TEXT";
    open_input.setAttributeNode( open_input_type );
    var open_input_style = document.createAttribute("style");
    open_input_style.value = "width: calc(100% - 30px);";
    open_input.setAttributeNode( open_input_style );
    open_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var open_preview = preview_chart.getElementsByClassName("js-open")[0];

        if (this.value != open_preview.innerText) {
            open_preview.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    open_input.value = BUILDER_DEFAULTS.data.ohlc.data.open.join(", ");
    data_panel.appendChild( open_input );

    // high
    var high_label = document.createElement("div");
    var high_label_style = document.createAttribute("style");
    high_label_style.value = "font-size: 14px; font-weight: 500; margin: 10px 0px 0px 0px;";
    high_label.setAttributeNode( high_label_style );
    high_label.innerHTML = "High Values <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    data_panel.appendChild( high_label );

    var high_input = document.createElement("input");
    var high_input_type = document.createAttribute("type");
    high_input_type.value = "TEXT";
    high_input.setAttributeNode( high_input_type );
    var high_input_style = document.createAttribute("style");
    high_input_style.value = "width: calc(100% - 30px);";
    high_input.setAttributeNode( high_input_style );
    high_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var high_preview = preview_chart.getElementsByClassName("js-high")[0];

        if (this.value != high_preview.innerText) {
            high_preview.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    high_input.value = BUILDER_DEFAULTS.data.ohlc.data.high.join(", ");
    data_panel.appendChild( high_input );

    // low
    var low_label = document.createElement("div");
    var low_label_style = document.createAttribute("style");
    low_label_style.value = "font-size: 14px; font-weight: 500; margin: 10px 0px 0px 0px;";
    low_label.setAttributeNode( low_label_style );
    low_label.innerHTML = "Low Values <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    data_panel.appendChild( low_label );

    var low_input = document.createElement("input");
    var low_input_type = document.createAttribute("type");
    low_input_type.value = "TEXT";
    low_input.setAttributeNode( low_input_type );
    var low_input_style = document.createAttribute("style");
    low_input_style.value = "width: calc(100% - 30px);";
    low_input.setAttributeNode( low_input_style );
    low_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var low_preview = preview_chart.getElementsByClassName("js-low")[0];

        if (this.value != low_preview.innerText) {
            low_preview.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    low_input.value = BUILDER_DEFAULTS.data.ohlc.data.low.join(", ");
    data_panel.appendChild( low_input );

    // close
    var close_label = document.createElement("div");
    var close_label_style = document.createAttribute("style");
    close_label_style.value = "font-size: 14px; font-weight: 500; margin: 10px 0px 0px 0px;";
    close_label.setAttributeNode( close_label_style );
    close_label.innerHTML = "Close Values <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    data_panel.appendChild( close_label );

    var close_input = document.createElement("input");
    var close_input_type = document.createAttribute("type");
    close_input_type.value = "TEXT";
    close_input.setAttributeNode( close_input_type );
    var close_input_style = document.createAttribute("style");
    close_input_style.value = "width: calc(100% - 30px); margin-bottom: 30px;";
    close_input.setAttributeNode( close_input_style );
    close_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var close_preview = preview_chart.getElementsByClassName("js-close")[0];

        if (this.value != close_preview.innerText) {
            close_preview.innerText = this.value;

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        }

    }, false);
    close_input.value = BUILDER_DEFAULTS.data.ohlc.data.close.join(", ");
    data_panel.appendChild( close_input );

    return true;
}
// add points input data
function jsChartBuilderPopulateInputData_Points(data_panel, chart_type) {

    for (var tt = (data_panel.children.length-1); tt >= 0; tt--) {
        data_panel.children[tt].remove();
    }

    // label
    var data_input_label = document.createElement("div");
    var data_input_label_class = document.createAttribute("class");
    data_input_label_class.value = "js-chart-builder-data-input-label";
    data_input_label.setAttributeNode( data_input_label_class );
    data_input_label.innerText = "Paired Numerical Data (Points)";
    data_panel.appendChild( data_input_label );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    data_panel.appendChild( data_input_sublabel );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_description;
    data_panel.appendChild( data_input_sublabel );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 5px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: ForestGreen; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">YES</span>";
    } else {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: Crimson; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">NO</span>";
    }
    data_panel.appendChild( data_input_value_labels );

    var add_input_values = jsChartBuilderAddInputData_Points(data_panel, 0, chart_type);

    // add more rows
    var add_more = document.createElement("div");
    var add_more_class = document.createAttribute("class");
    add_more_class.value = "js-chart-builder-button-elem";
    add_more.setAttributeNode( add_more_class );
    var add_more_style = document.createAttribute("style");
    add_more_style.value = "width: 150px; background-color: ForestGreen; margin: 10px 0px 10px 0px;";
    add_more.setAttributeNode( add_more_style );
    add_more.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(120, 61%, 24%)"; // forestgreen - 10%
    }, false);
    add_more.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(120, 61%, 34%)"; // firestgreen
    }, false);
    add_more.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    add_more.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    add_more.addEventListener("click", function () {
        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-input-data-points-container").length; tt++) {
            document.getElementsByClassName("js-chart-builder-input-data-points-container")[tt].children[0].innerText = "Series " + (tt+1);
        }
        var add_rows = jsChartBuilderAddInputData_Points(data_panel, tt, chart_type, true);
    }, false);
    add_more.innerText = "+More Rows";
    data_panel.appendChild( add_more );

    return true;
}
// add cumulative input data
function jsChartBuilderPopulateInputData_Cumulative(data_panel, chart_type) {

    for (var tt = (data_panel.children.length-1); tt >= 0; tt--) {
        data_panel.children[tt].remove();
    }

    // label
    var data_input_label = document.createElement("div");
    var data_input_label_class = document.createAttribute("class");
    data_input_label_class.value = "js-chart-builder-data-input-label";
    data_input_label.setAttributeNode( data_input_label_class );
    data_input_label.innerText = "Sequential Numerical Data (Cumulative)";
    data_panel.appendChild( data_input_label );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    data_panel.appendChild( data_input_sublabel );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_description;
    data_panel.appendChild( data_input_sublabel );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 5px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: ForestGreen; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">YES</span>";
    } else {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: Crimson; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">NO</span>";
    }
    data_panel.appendChild( data_input_value_labels );

    // labels value label
    var labels_label = document.createElement("div");
    var labels_label_style = document.createAttribute("style");
    labels_label_style.value = "font-size: 13px; font-weight: 500; margin: 5px 0px 0px 0px;";
    labels_label.setAttributeNode( labels_label_style );
    labels_label.innerHTML = "Labels <span style=\"font-size: 10px;\">(comma-separated list of text values)</span>:";
    data_panel.appendChild( labels_label );

    // labels input
    var labels_input = document.createElement("input");
    var labels_input_type = document.createAttribute("type");
    labels_input_type.value = "TEXT";
    labels_input.setAttributeNode( labels_input_type );
    var labels_input_style = document.createAttribute("style");
    labels_input_style.value = "width: calc(100% - 30px)";
    labels_input.setAttributeNode( labels_input_style );
    labels_input.value = BUILDER_DEFAULTS.data.cumulative.labels.join(", ");
    labels_input.addEventListener("change", function () {
        var preview_chart = document.getElementById("js-chart-builder-preview");
        var input_labels = preview_chart.getElementsByClassName("js-labels")[0];

        if (this.value != input_labels.innerText) {
            input_labels.innerText = this.value;
        }

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    data_panel.appendChild( labels_input );

    // labels values
    var input_values = document.createElement("div");
    var input_values_style = document.createAttribute("style");
    input_values_style.value = "font-size: 13px; font-weight: 500; margin: 5px 0px 0px 0px;";
    input_values.setAttributeNode( input_values_style );
    input_values.innerHTML = "Values <span style=\"font-size: 10px;\">(comma-separated list of text values)</span>:";
    data_panel.appendChild( input_values );

    // labels input
    var labels_input = document.createElement("input");
    var labels_input_type = document.createAttribute("type");
    labels_input_type.value = "TEXT";
    labels_input.setAttributeNode( labels_input_type );
    var labels_input_style = document.createAttribute("style");
    labels_input_style.value = "width: calc(100% - 30px)";
    labels_input.setAttributeNode( labels_input_style );
    labels_input.value = BUILDER_DEFAULTS.data.cumulative.data.data.join(", ");
    labels_input.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var data_values = preview_chart.getElementsByClassName("js-values")[0];

        if (this.value != data_values.innerText) {
            data_values.innerText = this.value;
        }

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    data_panel.appendChild( labels_input );

    return true;
}
// add range input data
function jsChartBuilderPopulateInputData_Range(data_panel, chart_type) {

    for (var tt = (data_panel.children.length-1); tt >= 0; tt--) {
        data_panel.children[tt].remove();
    }

    // label
    var data_input_label = document.createElement("div");
    var data_input_label_class = document.createAttribute("class");
    data_input_label_class.value = "js-chart-builder-data-input-label";
    data_input_label.setAttributeNode( data_input_label_class );
    data_input_label.innerText = "Numerical Range Data";
    data_panel.appendChild( data_input_label );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    data_panel.appendChild( data_input_sublabel );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_description;
    data_panel.appendChild( data_input_sublabel );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 5px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: ForestGreen; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">YES</span>";
    } else {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: Crimson; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">NO</span>";
    }
    data_panel.appendChild( data_input_value_labels );

    // labels value label
    var labels_label = document.createElement("div");
    var labels_label_style = document.createAttribute("style");
    labels_label_style.value = "font-size: 13px; font-weight: 500; margin: 5px 0px 0px 0px;";
    labels_label.setAttributeNode( labels_label_style );
    labels_label.innerHTML = "Labels <span style=\"font-size: 10px;\">(comma-separated list of text values)</span>:";
    data_panel.appendChild( labels_label );

    // labels input
    var labels_input = document.createElement("input");
    var labels_input_type = document.createAttribute("type");
    labels_input_type.value = "TEXT";
    labels_input.setAttributeNode( labels_input_type );
    var labels_input_style = document.createAttribute("style");
    labels_input_style.value = "width: calc(100% - 30px)";
    labels_input.setAttributeNode( labels_input_style );
    labels_input.value = BUILDER_DEFAULTS.data.range.labels.join(", ");
    labels_input.addEventListener("change", function () {
        var preview_chart = document.getElementById("js-chart-builder-preview");
        var input_labels = preview_chart.getElementsByClassName("js-labels")[0];

        if (this.value != input_labels.innerText) {
            input_labels.innerText = this.value;
        }

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    data_panel.appendChild( labels_input );

    var draw_span_values = jsChartBuilderAddInputData_Range(data_panel, 0);

    // add more rows
    var add_more = document.createElement("div");
    var add_more_class = document.createAttribute("class");
    add_more_class.value = "js-chart-builder-button-elem";
    add_more.setAttributeNode( add_more_class );
    var add_more_style = document.createAttribute("style");
    add_more_style.value = "width: 150px; background-color: ForestGreen; margin: 10px 0px 10px 0px;";
    add_more.setAttributeNode( add_more_style );
    add_more.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(120, 61%, 24%)"; // forestgreen - 10%
    }, false);
    add_more.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(120, 61%, 34%)"; // firestgreen
    }, false);
    add_more.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    add_more.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    add_more.addEventListener("click", function () {
        for (var tt = 0; tt < document.getElementsByClassName("js-chart-builder-input-data-range-container").length; tt++) {
            document.getElementsByClassName("js-chart-builder-input-data-range-container")[tt].children[0].innerText = "Series " + (tt+1);
        }
        var add_rows = jsChartBuilderAddInputData_Range(data_panel, document.getElementsByClassName("js-chart-builder-input-data-range-container").length, document.getElementsByClassName("js-chart-builder-input-data-range-container").length, true);
    }, false);
    add_more.innerText = "+More Rows";
    data_panel.appendChild( add_more );

    return true;
}
// add frequency input data
function jsChartBuilderPopulateInputData_Frequency(data_panel, chart_type) {

    // define color codes for the data type buttons
    const button_colors = [
        ["hsl(225, 73%, 47%)", "hsl(225, 73%, 57%)", "hsl(225, 73%, 90%)"],
        ["hsl(36, 100%, 40%)", "hsl(36, 100%, 50%)", "hsl(36, 100%, 90%)"],
        ["hsl(120, 60%, 40%)", "hsl(120, 60%, 50%)", "hsl(120, 60%, 90%)"],
        ["hsl(0, 100%, 40%)", "hsl(0, 100%, 50%)", "hsl(0, 100%, 90%)"]
    ]

    for (var tt = (data_panel.children.length-1); tt >=0; tt--) {
        data_panel.children[tt].remove();
    }

    // label
    var data_input_label = document.createElement("div");
    var data_input_label_class = document.createAttribute("class");
    data_input_label_class.value = "js-chart-builder-data-input-label";
    data_input_label.setAttributeNode( data_input_label_class );
    data_input_label.innerText = "Continuous Numerical Data (Frequency Distributions)";
    data_panel.appendChild( data_input_label );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    data_panel.appendChild( data_input_sublabel );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_description;
    data_panel.appendChild( data_input_sublabel );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 5px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: ForestGreen; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">YES</span>";
    } else {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: Crimson; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">NO</span>";
    }
    data_panel.appendChild( data_input_value_labels );

    // "select one" label
    var select_label = document.createElement("div");
    var select_label_style = document.createAttribute("style");
    select_label_style.value = "font-size: 12px;";
    select_label.setAttributeNode( select_label_style );
    select_label.innerText = "Select an input method below:";
    data_panel.appendChild( select_label );

    // input data outer container
    var outer_container = document.createElement("div");
    var outer_container_style = document.createAttribute("style");
    outer_container_style.value = "display: flex; flex-direction: column;";
    outer_container.setAttributeNode( outer_container_style );
    data_panel.appendChild( outer_container );

    // tab container
    var tab_container = document.createElement("div");
    var tab_container_style = document.createAttribute("style");
    tab_container_style.value = "flex: 1 1 auto; height: 25px; line-height: 25px; display: flex; flex-direction: row; margin: 5px 0px 5px 0px;";
    tab_container.setAttributeNode( tab_container_style );
    outer_container.appendChild( tab_container );

    // auto button
    var data_input_select_button = document.createElement("div");
    var data_input_select_button_style = document.createAttribute("style");
    data_input_select_button_style.value = "margin: 0px 2px 0px 0px; flex: 1 1 0px; border: 1px solid " + button_colors[0][0] + "; border-radius: 3px; text-align: center; background-color: " + button_colors[0][0] + "; color: white; cursor: pointer;";
    data_input_select_button.setAttributeNode( data_input_select_button_style );
    data_input_select_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = button_colors[0][0];
    }, false);
    data_input_select_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = button_colors[0][1];
    }, false);
    data_input_select_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    data_input_select_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    data_input_select_button.addEventListener("click", function () {
        var click_button = jsChartBuilderPopulateInputData_FrequencyToggleInputs("auto");
    }, false);
    data_input_select_button.innerText = "auto";
    tab_container.appendChild( data_input_select_button );

    // boundary button
    var data_input_select_button = document.createElement("div");
    var data_input_select_button_style = document.createAttribute("style");
    data_input_select_button_style.value = "margin: 0px 2px 0px 0px; flex: 1 1 0px; border: 1px solid " + button_colors[1][0] + "; border-radius: 3px; text-align: center; background-color: " + button_colors[1][1] + "; color: white; cursor: pointer;";
    data_input_select_button.setAttributeNode( data_input_select_button_style );
    data_input_select_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = button_colors[1][0];
    }, false);
    data_input_select_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = button_colors[1][1];
    }, false);
    data_input_select_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    data_input_select_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    data_input_select_button.addEventListener("click", function () {
        var click_button = jsChartBuilderPopulateInputData_FrequencyToggleInputs("boundary");
    }, false);
    data_input_select_button.innerText = "boundary";
    tab_container.appendChild( data_input_select_button );

    // summary button
    var data_input_select_button = document.createElement("div");
    var data_input_select_button_style = document.createAttribute("style");
    data_input_select_button_style.value = "margin: 0px 2px 0px 0px; flex: 1 1 0px; border: 1px solid " + button_colors[2][0] + "; border-radius: 3px; text-align: center; background-color: " + button_colors[2][1] + "; color: white; cursor: pointer;";
    data_input_select_button.setAttributeNode( data_input_select_button_style );
    data_input_select_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = button_colors[2][0];
    }, false);
    data_input_select_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = button_colors[2][1];
    }, false);
    data_input_select_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    data_input_select_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    data_input_select_button.addEventListener("click", function () {
        var click_button = jsChartBuilderPopulateInputData_FrequencyToggleInputs("summary");
    }, false);
    data_input_select_button.innerText = "summary";
    tab_container.appendChild( data_input_select_button );

    // category button
    var data_input_select_button = document.createElement("div");
    var data_input_select_button_style = document.createAttribute("style");
    data_input_select_button_style.value = "flex: 1 1 0px; border: 1px solid " + button_colors[3][0] + "; border-radius: 3px; text-align: center; background-color: " + button_colors[3][1] + "; color: white; cursor: pointer;";
    data_input_select_button.setAttributeNode( data_input_select_button_style );
    data_input_select_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = button_colors[3][0];
    }, false);
    data_input_select_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = button_colors[3][1];
    }, false);
    data_input_select_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    data_input_select_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    data_input_select_button.addEventListener("click", function () {
        var click_button = jsChartBuilderPopulateInputData_FrequencyToggleInputs("category");
    }, false);
    data_input_select_button.innerText = "category";
    tab_container.appendChild( data_input_select_button );

    // auto value container
    var auto_value_container = document.createElement("div");
    auto_value_container.id = "js-chart-builder-auto-container";
    var auto_value_container_style = document.createAttribute("style");
    auto_value_container_style.value = "flex: 1 1 auto; display: flex; flex-direction: column; border: 1px solid " + button_colors[0][0] + "; background-color: " + button_colors[0][2] + "; border-radius: 3px;";
    auto_value_container.setAttributeNode( auto_value_container_style );
    outer_container.appendChild( auto_value_container );

    // auto label
    var auto_value_label = document.createElement("div");
    var auto_value_label_style = document.createAttribute("style");
    auto_value_label_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 600; margin-left: 10px;";
    auto_value_label.setAttributeNode( auto_value_label_style );
    auto_value_label.innerHTML = "Values <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    auto_value_container.appendChild( auto_value_label );

    // auto values
    var auto_value_data = document.createElement("input");
    var auto_value_data_type = document.createAttribute("type");
    auto_value_data_type.value = "TEXT";
    auto_value_data.setAttributeNode( auto_value_data_type );
    var auto_value_data_style = document.createAttribute("style");
    auto_value_data_style.value = "margin: 5px 5px 10px 5px;";
    auto_value_data.setAttributeNode( auto_value_data_style );
    auto_value_data.addEventListener("change", function () {
        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        
        var value_container = document.createElement("div");
        var value_container_class = document.createAttribute("class");
        value_container_class.value = "js-values";
        value_container.setAttributeNode( value_container_class );
        value_container.innerText = this.value;
        document.getElementById("js-chart-builder-preview").appendChild( value_container );

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    auto_value_data.value = BUILDER_DEFAULTS.data.frequency.data.join(", ");
    auto_value_container.appendChild( auto_value_data );

    // boundary value container
    var boundary_value_container = document.createElement("div");
    boundary_value_container.id = "js-chart-builder-boundary-container";
    var boundary_value_container_style = document.createAttribute("style");
    boundary_value_container_style.value = "flex: 1 1 auto; display: none; flex-direction: column; border: 1px solid " + button_colors[1][0] + "; background-color: " + button_colors[1][2] + "; border-radius: 3px;";
    boundary_value_container.setAttributeNode( boundary_value_container_style );
    outer_container.appendChild( boundary_value_container );

    // boundary value container - top
    var top_boundary_value_container = document.createElement("div");
    var top_boundary_value_container_style = document.createAttribute("style");
    top_boundary_value_container_style.value = "flex: 1 1 auto; display: flex; flex-direction: row; margin-left: 5px;";
    top_boundary_value_container.setAttributeNode( top_boundary_value_container_style );
    boundary_value_container.appendChild( top_boundary_value_container );

    // boundary value container - top - left
    var left_top_boundary_value_container = document.createElement("div");
    var left_top_boundary_value_container_style = document.createAttribute("style");
    left_top_boundary_value_container_style.value = "flex: 1 1 0px; font-weight: 600; text-align: left;";
    left_top_boundary_value_container.setAttributeNode( left_top_boundary_value_container_style );
    //left_top_boundary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin First Edge</span> <span style=\"font-weight: 400;\">(numeric)</span><input type=\"TEXT\" id=\"js-chart-builder-bin-first-edge\" value=\"" + BUILDER_DEFAULTS.data.frequency.bin_edge_start + "\" onchange=\"alert('hi')\">";
    left_top_boundary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin First Edge</span> <span style=\"font-weight: 400;\">(numeric)</span>";
    top_boundary_value_container.appendChild( left_top_boundary_value_container );

    // boundary value container - top - left - bin first edge
    var bin_first_edge = document.createElement("INPUT");
    bin_first_edge.id = "js-chart-builder-bin-first-edge";
    var bin_first_edge_type = document.createAttribute("type");
    bin_first_edge_type.value = "TEXT";
    bin_first_edge.value = BUILDER_DEFAULTS.data.frequency.bin_edge_start;
    bin_first_edge.setAttributeNode( bin_first_edge_type );
    bin_first_edge.addEventListener("change", function () {
        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Boundary(this.value, document.getElementById("js-chart-builder-bin-last-edge").value, document.getElementById("js-chart-builder-bin-size").value, document.getElementById("js-chart-builder-boundary-values").value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    left_top_boundary_value_container.appendChild( bin_first_edge );

    // boundary value container - top - middle
    var middle_top_boundary_value_container = document.createElement("div");
    var middle_top_boundary_value_container_style = document.createAttribute("style");
    middle_top_boundary_value_container_style.value = "flex: 1 1 0px; font-weight: 600; text-align: left;";
    middle_top_boundary_value_container.setAttributeNode( middle_top_boundary_value_container_style );
    //middle_top_boundary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin Last Edge</span> <span style=\"font-weight: 400;\">(numeric)</span><input type=\"TEXT\" id=\"js-chart-builder-bin-last-edge\" value=\"" + BUILDER_DEFAULTS.data.frequency.bin_edge_end + "\">";
    middle_top_boundary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin Last Edge</span> <span style=\"font-weight: 400;\">(numeric)</span>";
    top_boundary_value_container.appendChild( middle_top_boundary_value_container );

    // boundary value container - top - middle - bin last edge
    var bin_last_edge = document.createElement("INPUT");
    bin_last_edge.id = "js-chart-builder-bin-last-edge";
    var bin_last_edge_type = document.createAttribute("type");
    bin_last_edge_type.value = "TEXT";
    bin_last_edge.value = BUILDER_DEFAULTS.data.frequency.bin_edge_end;
    bin_last_edge.setAttributeNode( bin_last_edge_type );
    bin_last_edge.addEventListener("change", function () {

        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Boundary(document.getElementById("js-chart-builder-bin-first-edge").value, this.value, document.getElementById("js-chart-builder-bin-size").value, document.getElementById("js-chart-builder-boundary-values").value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    middle_top_boundary_value_container.appendChild( bin_last_edge );

    // boundary value container - top - right
    var right_top_boundary_value_container = document.createElement("div");
    var right_top_boundary_value_container_style = document.createAttribute("style");
    right_top_boundary_value_container_style.value = "flex: 1 1 0px; font-weight: 600; text-align: left;";
    right_top_boundary_value_container.setAttributeNode( right_top_boundary_value_container_style );
    //right_top_boundary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin Size</span> <span style=\"font-weight: 400;\">(positive numeric)</span><input type=\"TEXT\" id=\"js-chart-builder-bin-size\" value=\"" + BUILDER_DEFAULTS.data.frequency.bin_size + "\">";
    right_top_boundary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin Size</span> <span style=\"font-weight: 400;\">(positive numeric)</span>";
    top_boundary_value_container.appendChild( right_top_boundary_value_container );

    // boundary value container - top - right - bin size
    var bin_size = document.createElement("INPUT");
    bin_size.id = "js-chart-builder-bin-size";
    var bin_size_type = document.createAttribute("type");
    bin_size_type.value = "TEXT";
    bin_size.value = BUILDER_DEFAULTS.data.frequency.bin_size;
    bin_size.setAttributeNode( bin_size_type );
    bin_size.addEventListener("change", function () {

        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Boundary(document.getElementById("js-chart-builder-bin-first-edge").value, document.getElementById("js-chart-builder-bin-last-edge").value, this.value, document.getElementById("js-chart-builder-boundary-values").value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    right_top_boundary_value_container.appendChild( bin_size );

    // boundary value container - bottom
    var bottom_boundary_value_container = document.createElement("div");
    var bottom_boundary_value_container_style = document.createAttribute("style");
    bottom_boundary_value_container_style.value = "flex: 1 1 auto; display: flex; flex-direction: column;";
    bottom_boundary_value_container.setAttributeNode( bottom_boundary_value_container_style );
    boundary_value_container.appendChild( bottom_boundary_value_container );

    // boundary value container - bottom - label
    var bottom_boundary_value_container_label = document.createElement("div");
    var bottom_boundary_value_container_label_style = document.createAttribute("style");
    bottom_boundary_value_container_label_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 600; margin: 0px 0px 0px 10px;";
    bottom_boundary_value_container_label.setAttributeNode( bottom_boundary_value_container_label_style );
    bottom_boundary_value_container_label.innerHTML = "Values <span style=\"font-size: 10px\">(comma-separated list of numeric values)</span>"
    bottom_boundary_value_container.appendChild( bottom_boundary_value_container_label );

    // boundary value container - bottom - values
    var bottom_boundary_value_container_input = document.createElement("input");
    bottom_boundary_value_container_input.id = "js-chart-builder-boundary-values";
    var bottom_boundary_value_container_input_type = document.createAttribute("type");
    bottom_boundary_value_container_input_type.value = "TEXT";
    bottom_boundary_value_container_input.setAttributeNode( bottom_boundary_value_container_input_type );
    var bottom_boundary_value_container_input_style = document.createAttribute("style");
    bottom_boundary_value_container_input_style.value = "margin: 5px 5px 10px 5px;";
    bottom_boundary_value_container_input.setAttributeNode( bottom_boundary_value_container_input_style );
    bottom_boundary_value_container_input.value = BUILDER_DEFAULTS.data.frequency.data.join(", ");
    bottom_boundary_value_container_input.addEventListener("change", function () {

        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Boundary(document.getElementById("js-chart-builder-bin-first-edge").value, document.getElementById("js-chart-builder-bin-last-edge").value, this.value, this.value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    bottom_boundary_value_container.appendChild( bottom_boundary_value_container_input );

    // summary value container
    var summary_value_container = document.createElement("div");
    summary_value_container.id = "js-chart-builder-summary-container";
    var summary_value_container_style = document.createAttribute("style");
    summary_value_container_style.value = "flex: 1 1 auto; display: none; flex-direction: column; border: 1px solid " + button_colors[2][0] + "; background-color: " + button_colors[2][2] + "; border-radius: 3px;";
    summary_value_container.setAttributeNode( summary_value_container_style );
    outer_container.appendChild( summary_value_container );

    // summary value container - top
    var top_summary_value_container = document.createElement("div");
    var top_summary_value_container_style = document.createAttribute("style");
    top_summary_value_container_style.value = "flex: 1 1 auto; display: flex; flex-direction: row; margin-left: 5px;";
    top_summary_value_container.setAttributeNode( top_summary_value_container_style );
    summary_value_container.appendChild( top_summary_value_container );

    // summary value container - top - left
    var left_top_summary_value_container = document.createElement("div");
    var left_top_summary_value_container_style = document.createAttribute("style");
    left_top_summary_value_container_style.value = "flex: 1 1 0px; font-weight: 600; text-align: left;";
    left_top_summary_value_container.setAttributeNode( left_top_summary_value_container_style );
    //left_top_summary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin First Edge</span> <span style=\"font-weight: 400;\">(numeric)</span><input type=\"TEXT\" id=\"js-chart-builder-bin-first-edge\" value=\"" + BUILDER_DEFAULTS.data.frequency.bin_edge_start + "\">";
    left_top_summary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin First Edge</span> <span style=\"font-weight: 400;\">(numeric)</span>";
    top_summary_value_container.appendChild( left_top_summary_value_container );

    // summary value container - top - left
    var left_top_summary_value_labels = document.createElement("INPUT");
    var left_top_summary_value_labels_type = document.createAttribute("type");
    left_top_summary_value_labels_type.value = "TEXT";
    left_top_summary_value_labels.setAttributeNode( left_top_summary_value_labels_type );
    left_top_summary_value_labels.addEventListener("change", function () {

        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Summary(this.value, document.getElementById("js-chart-builder-bin-last-edge").value, document.getElementById("js-chart-builder-bin-frequencies").value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    left_top_summary_value_labels.value = BUILDER_DEFAULTS.data.frequency.bin_edge_start;
    left_top_summary_value_container.appendChild( left_top_summary_value_labels );


    // summary value container - top - middle
    var middle_top_summary_value_container = document.createElement("div");
    var middle_top_summary_value_container_style = document.createAttribute("style");
    middle_top_summary_value_container_style.value = "flex: 1 1 0px; font-weight: 600; text-align: left;";
    middle_top_summary_value_container.setAttributeNode( middle_top_summary_value_container_style );
    //middle_top_summary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin Last Edge</span> <span style=\"font-weight: 400;\">(numeric)</span><input type=\"TEXT\" id=\"js-chart-builder-bin-last-edge\" value=\"" + BUILDER_DEFAULTS.data.frequency.bin_edge_end + "\">";
    middle_top_summary_value_container.innerHTML = "<span style=\"margin-left: 10px;\">Bin Last Edge</span> <span style=\"font-weight: 400;\">(numeric)</span>";
    top_summary_value_container.appendChild( middle_top_summary_value_container );

    // summary value container - top - middle - text
    var middle_top_summary_value_bin_last = document.createElement("input");
    var middle_top_summary_value_bin_last_type = document.createAttribute("type");
    middle_top_summary_value_bin_last_type.value = "TEXT";
    middle_top_summary_value_bin_last.setAttributeNode( middle_top_summary_value_bin_last_type );
    middle_top_summary_value_bin_last.addEventListener("change", function () {

        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Summary(document.getElementById("js-chart-builder-bin-first-edge").value, this.value, document.getElementById("js-chart-builder-bin-frequencies").value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    middle_top_summary_value_bin_last.value = BUILDER_DEFAULTS.data.frequency.bin_edge_end;
    middle_top_summary_value_container.appendChild( middle_top_summary_value_bin_last );

    // summary value container - bottom
    var bottom_summary_value_container = document.createElement("div");
    var bottom_summary_value_container_style = document.createAttribute("style");
    bottom_summary_value_container_style.value = "flex: 1 1 auto; display: flex; flex-direction: column;";
    bottom_summary_value_container.setAttributeNode( bottom_summary_value_container_style );
    summary_value_container.appendChild( bottom_summary_value_container );

    // summary value container - bottom - label
    var bottom_summary_value_container_label = document.createElement("div");
    var bottom_summary_value_container_label_style = document.createAttribute("style");
    bottom_summary_value_container_label_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 600; margin: 0px 0px 0px 10px;";
    bottom_summary_value_container_label.setAttributeNode( bottom_summary_value_container_label_style );
    bottom_summary_value_container_label.innerHTML = "Values <span style=\"font-size: 10px\">(comma-separated list of numeric values)</span>"
    bottom_summary_value_container.appendChild( bottom_summary_value_container_label );

    // summary value container - bottom - values
    var bottom_summary_value_container_input = document.createElement("input");
    bottom_summary_value_container_input.id = "js-chart-builder-bin-frequencies";
    var bottom_summary_value_container_input_type = document.createAttribute("type");
    bottom_summary_value_container_input_type.value = "TEXT";
    bottom_summary_value_container_input.setAttributeNode( bottom_summary_value_container_input_type );
    var bottom_summary_value_container_input_style = document.createAttribute("style");
    bottom_summary_value_container_input_style.value = "margin: 5px 5px 10px 5px;";
    bottom_summary_value_container_input.setAttributeNode( bottom_summary_value_container_input_style );
    bottom_summary_value_container_input.addEventListener("change", function () {

        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Summary(document.getElementById("js-chart-builder-bin-first-edge").value, document.getElementById("js-chart-builder-bin-last-edge").value, this.value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    bottom_summary_value_container_input.value = BUILDER_DEFAULTS.data.frequency.frequencies.join(", ");
    bottom_summary_value_container.appendChild( bottom_summary_value_container_input );

    // category value container
    var category_value_container = document.createElement("div");
    category_value_container.id = "js-chart-builder-category-container";
    var category_value_container_style = document.createAttribute("style");
    category_value_container_style.value = "flex: 1 1 auto; display: none; flex-direction: column; border: 1px solid " + button_colors[3][0] + "; background-color: " + button_colors[3][2] + "; border-radius: 3px;";
    category_value_container.setAttributeNode( category_value_container_style );
    outer_container.appendChild( category_value_container );

    // category labels label
    var category_value_label = document.createElement("div");
    var category_value_label_style = document.createAttribute("style");
    category_value_label_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 600; margin-left: 10px;";
    category_value_label.setAttributeNode( category_value_label_style );
    category_value_label.innerHTML = "Labels <span style=\"font-size: 10px;\">(comma-separated list of text values)</span>";
    category_value_container.appendChild( category_value_label );

    // category labels values
    var category_value_data = document.createElement("input");
    category_value_data.id = "js-chart-builder-bin-category-labels";
    var category_value_data_type = document.createAttribute("type");
    category_value_data_type.value = "TEXT";
    category_value_data.setAttributeNode( category_value_data_type );
    var category_value_data_style = document.createAttribute("style");
    category_value_data_style.value = "margin: 5px 5px 10px 5px;";
    category_value_data.setAttributeNode( category_value_data_style );
    category_value_data.addEventListener("change", function () {

        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Category(this.value, document.getElementById("js-chart-builder-bin-category-values").value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    category_value_data.value = BUILDER_DEFAULTS.data.frequency.labels.join(", ");
    category_value_container.appendChild( category_value_data );

    // category labels label
    var category_value_label = document.createElement("div");
    var category_value_label_style = document.createAttribute("style");
    category_value_label_style.value = "flex: 1 1 auto; font-size: 14px; font-weight: 600; margin-left: 10px;";
    category_value_label.setAttributeNode( category_value_label_style );
    category_value_label.innerHTML = "Values <span style=\"font-size: 10px;\">(comma-separated list of numeric values)</span>";
    category_value_container.appendChild( category_value_label );

    // category labels values
    var category_value_data = document.createElement("input");
    category_value_data.id = "js-chart-builder-bin-category-values";
    var category_value_data_type = document.createAttribute("type");
    category_value_data_type.value = "TEXT";
    category_value_data.setAttributeNode( category_value_data_type );
    var category_value_data_style = document.createAttribute("style");
    category_value_data_style.value = "margin: 5px 5px 10px 5px;";
    category_value_data.setAttributeNode( category_value_data_style );
    category_value_data.addEventListener("change", function () {

        var cleanup_histogram = jsChartBuilderCleanupHistogramPreviewData();
        var populate_data = jsChartBuilderPopulateHistogramPreviewData_Category(document.getElementById("js-chart-builder-bin-category-labels").value, this.value);

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        var pop_msg = jsChartBuilderPopMessage("Histogram boundary data update.")

    }, false);
    category_value_data.value = BUILDER_DEFAULTS.data.frequency.data.join(", ");
    category_value_container.appendChild( category_value_data );


    var spacer = document.createElement("div");
    var spacer_style = document.createAttribute("style");
    spacer_style.value = "height: 50px;";
    spacer.setAttributeNode( spacer_style );
    data_panel.appendChild( spacer );

    return true;
}
// add rows to the color palette grid
function jsChartBuilderRenderQualitativePalette_AddRows(grid_container) {

    var grid_position = grid_container.getElementsByClassName("js-chart-builder-palette-grid-elem").length;

    // number
    var index_elem = document.createElement("div");
    var index_elem_class = document.createAttribute("class");
    index_elem_class.value = "js-chart-builder-palette-grid-elem";
    index_elem.setAttributeNode( index_elem_class );
    index_elem.innerText = (grid_position + 1);
    grid_container.appendChild( index_elem );

    // text key
    var text_key = document.createElement("input");
    var text_key_type = document.createAttribute("type");
    text_key_type.value = "TEXT";
    text_key.setAttributeNode( text_key_type );
    var text_key_style = document.createAttribute("style");
    text_key_style.value = "margin: 0px 2px 2px 0px;";
    text_key.setAttributeNode( text_key_style );
    if (grid_position < BUILDER_DEFAULTS.data.heatmap.qualitative.keys.length) {
        text_key.value = BUILDER_DEFAULTS.data.heatmap.qualitative.keys[ grid_position ];
    }
    text_key.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var new_keys = [];

        for (var tt = 0; tt < grid_container.getElementsByClassName("js-chart-builder-palette-grid-elem").length; tt++) {
            if (grid_container.getElementsByClassName("js-chart-builder-palette-grid-elem")[tt].nextElementSibling.value.length > 0) {
                new_keys.push( grid_container.getElementsByClassName("js-chart-builder-palette-grid-elem")[tt].nextElementSibling.value );
            }
        }

        preview_chart.getElementsByClassName("js-keys")[0].innerText = new_keys.join(", ");

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    grid_container.appendChild( text_key );

    // color key
    var color_key = document.createElement("input");
    var color_key_type = document.createAttribute("type");
    color_key_type.value = "TEXT";
    color_key.setAttributeNode( color_key_type );
    var color_key_style = document.createAttribute("style");
    color_key_style.value = "margin: 0px 2px 2px 0px;";
    color_key.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var new_colors = [];

        for (var tt = 0; tt < grid_container.getElementsByClassName("js-chart-builder-palette-grid-elem").length; tt++) {
            if (grid_container.getElementsByClassName("js-chart-builder-palette-grid-elem")[tt].nextElementSibling.nextElementSibling.value.length > 0) {
                new_colors.push( grid_container.getElementsByClassName("js-chart-builder-palette-grid-elem")[tt].nextElementSibling.nextElementSibling.value );
            }
        }

        preview_chart.getElementsByClassName("js-color-palette")[0].innerText = new_colors.join("; ");

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    color_key.setAttributeNode( color_key_style );
    color_key.addEventListener("change", function () {

        this.nextElementSibling.style.backgroundColor = this.value;

    }, false);
    if (grid_position < BUILDER_DEFAULTS.data.heatmap.qualitative.keys.length) {
        color_key.value = BUILDER_DEFAULTS.data.heatmap.qualitative.color_palette[ grid_position ];
    }
    grid_container.appendChild( color_key );

    // color preview
    var color_preview = document.createElement("div");
    var color_preview_style = document.createAttribute("style");
    if (grid_position < BUILDER_DEFAULTS.data.heatmap.qualitative.keys.length) {
        color_preview_style.value = "border: 0.5px solid #bbbbbb; border-radius: 3px; background-color: " + BUILDER_DEFAULTS.data.heatmap.qualitative.color_palette[ grid_position ] + ";";
    } else {
        color_preview_style.value = "border: 0.5px solid #bbbbbb; border-radius: 3px;";
    }
    color_preview.setAttributeNode( color_preview_style );
    grid_container.appendChild( color_preview );

    return true;
}
// render the qualitative color palette input screen
function jsChartBuilderRenderContinuousPalette(data_panel) {

    if (document.getElementsByClassName("js-chart-builder-palette-container").length > 0) {
        for (var tt = (document.getElementsByClassName("js-chart-builder-palette-container").length - 1); tt >= 0; tt--) {
            document.getElementsByClassName("js-chart-builder-palette-container")[tt].remove();
        }
    }

    // palette container
    var palette_container = document.createElement("div");
    var palette_container_class = document.createAttribute("class");
    palette_container_class.value = "js-chart-builder-palette-container";
    palette_container.setAttributeNode( palette_container_class );
    var palette_container_style = document.createAttribute("style");
    palette_container_style.value = "background-color: hsl(40, 100%, 90%);";
    palette_container.setAttributeNode( palette_container_style );
    data_panel.insertBefore( palette_container, data_panel.children[ 6 ]);

    // palette heading
    var header_container = document.createElement("div");
    var header_container_class = document.createAttribute("class");
    header_container_class.value = "js-chart-builder-palette-header-container";
    header_container.setAttributeNode( header_container_class );
    header_container.innerText = "Continuous Color Palette";
    palette_container.appendChild( header_container );

    // palette grid
    var grid_container = document.createElement("div");
    var grid_container_class = document.createAttribute("class");
    grid_container_class.value = "js-chart-builder-palette-grid-container";
    grid_container.setAttributeNode( grid_container_class );
    palette_container.appendChild( grid_container );

    // update preview chart
    var preview_chart = document.getElementById("js-chart-builder-preview");

    for (var tt = (preview_chart.getElementsByClassName("js-color-palette").length - 1); tt >= 0; tt--) {
        preview_chart.getElementsByClassName("js-color-palette")[tt].remove();
    }

    for (var tt = (preview_chart.getElementsByClassName("js-keys").length - 1); tt >= 0; tt--) {
        preview_chart.getElementsByClassName("js-keys")[tt].remove();
    }

    for (var tt = (preview_chart.getElementsByClassName("js-labels").length - 1); tt >= 0; tt--) {
        preview_chart.getElementsByClassName("js-labels")[tt].remove();
    }

    var labels_input = document.createElement("div");
    var labels_input_class = document.createAttribute("class");
    labels_input_class.value = "js-labels";
    labels_input.setAttributeNode( labels_input_class );
    labels_input.innerText = BUILDER_DEFAULTS.data.heatmap.continuous.labels.join(", ");
    preview_chart.appendChild( labels_input );

    var color_palette = document.createElement("div");
    var color_palette_class = document.createAttribute("class");
    color_palette_class.value = "js-color-palette";
    color_palette.setAttributeNode( color_palette_class );
    var color_palette_type = document.createAttribute("type");
    color_palette_type.value = "sequential continuous";
    color_palette.setAttributeNode( color_palette_type );
    color_palette.innerText = BUILDER_DEFAULTS.data.heatmap.continuous.color_palette.join("; ");
    preview_chart.appendChild( color_palette );

    return true;
}
// render the qualitative color palette input screen
function jsChartBuilderRenderQualitativePalette(data_panel) {

    if (document.getElementsByClassName("js-chart-builder-palette-container").length > 0) {
        for (var tt = (document.getElementsByClassName("js-chart-builder-palette-container").length - 1); tt >= 0; tt--) {
            document.getElementsByClassName("js-chart-builder-palette-container")[tt].remove();
        }
    }

    // palette container
    var palette_container = document.createElement("div");
    var palette_container_class = document.createAttribute("class");
    palette_container_class.value = "js-chart-builder-palette-container";
    palette_container.setAttributeNode( palette_container_class );
    var palette_container_style = document.createAttribute("style");
    palette_container_style.value = "background-color: hsl(40, 100%, 90%);";
    palette_container.setAttributeNode( palette_container_style );
    data_panel.insertBefore( palette_container, data_panel.children[ 6 ]);

    // palette heading
    var header_container = document.createElement("div");
    var header_container_class = document.createAttribute("class");
    header_container_class.value = "js-chart-builder-palette-header-container";
    header_container.setAttributeNode( header_container_class );
    header_container.innerText = "Qualitative Color Palette";
    palette_container.appendChild( header_container );

    // palette grid
    var grid_container = document.createElement("div");
    var grid_container_class = document.createAttribute("class");
    grid_container_class.value = "js-chart-builder-palette-grid-container";
    grid_container.setAttributeNode( grid_container_class );
    palette_container.appendChild( grid_container );

    for (var tt = 0; tt < 10; tt++) {

        var add_rows = jsChartBuilderRenderQualitativePalette_AddRows(grid_container);

    }

    // updte the preview chart
    var preview_chart = document.getElementById("js-chart-builder-preview");

    var keys_input = document.createElement("div");
    var keys_input_class = document.createAttribute("class");
    keys_input_class.value = "js-keys";
    keys_input.setAttributeNode( keys_input_class );
    keys_input.innerText = BUILDER_DEFAULTS.data.heatmap.qualitative.keys.join(", ");
    preview_chart.appendChild( keys_input );

    var labels_input = document.createElement("div");
    var labels_input_class = document.createAttribute("class");
    labels_input_class.value = "js-labels";
    labels_input.setAttributeNode( labels_input_class );
    labels_input.innerText = BUILDER_DEFAULTS.data.heatmap.qualitative.labels.join(", ");
    preview_chart.appendChild( labels_input );

    var color_palette = document.createElement("div");
    var color_palette_class = document.createAttribute("class");
    color_palette_class.value = "js-color-palette";
    color_palette.setAttributeNode( color_palette_class );
    color_palette.innerText = BUILDER_DEFAULTS.data.heatmap.qualitative.color_palette.join("; ");
    preview_chart.appendChild( color_palette );

    /*
    for (var tt = 0; tt < BUILDER_DEFAULTS.data.heatmap.qualitative.data.length; tt++) {

        var data_values = document.createElement("div");
        var data_values_class = document.createAttribute("class");
        data_values_class.value = "js-values";
        data_values.setAttributeNode( data_values_class );
        var data_values_title = document.createAttribute("title");
        data_values_title.value = BUILDER_DEFAULTS.data.heatmap.qualitative.data[tt].title;
        data_values.setAttributeNode( data_values_title );
        data_values.innerText = BUILDER_DEFAULTS.data.heatmap.qualitative.data[tt].data.join(", ");
        preview_chart.appendChild( data_values );

    }
    */

    // more rows button
    var more_rows_button = document.createElement("div");
    var more_rows_button_class = document.createAttribute("class");
    more_rows_button_class.value = "js-chart-builder-palette-more-rows-button";
    more_rows_button.setAttributeNode( more_rows_button_class );
    more_rows_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(120, 61%, 24%)";
    }, false);
    more_rows_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(120, 61%, 34%)";
    }, false);
    more_rows_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    more_rows_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    more_rows_button.addEventListener("click", function () {

        var add_rows = jsChartBuilderRenderQualitativePalette_AddRows(grid_container);

    }, false);
    more_rows_button.innerText = "+More Rows";
    palette_container.appendChild( more_rows_button );


    return true;
}
// add a valuw row to the qualitative color palette
function jsChartBuilderRenderQualitativePalette_ValueRow(value_container) {

    var rowlen = document.getElementsByClassName("js-chart-builder-qualitative-value-cell").length;
    var data_index = ((rowlen + 1) % BUILDER_DEFAULTS.data.heatmap.qualitative.data.length) - 1;
    if (data_index < 0) {
        data_index = (BUILDER_DEFAULTS.data.heatmap.qualitative.data.length - 1);
    }

    // row number
    var row_number = document.createElement("div");
    var row_number_class = document.createAttribute("class");
    row_number_class.value = "js-chart-builder-qualitative-value-cell";
    row_number.setAttributeNode( row_number_class );
    row_number.innerText = (rowlen + 1);
    value_container.appendChild( row_number );

    // row title
    var row_title = document.createElement("input");
    var row_title_type = document.createAttribute("type");
    row_title_type.value = "TEXT";
    row_title.setAttributeNode( row_title_type );
    var row_title_style = document.createAttribute("style");
    row_title_style.value = "margin: 0px 2px 0px 0px;";
    row_title.setAttributeNode( row_title_style );
    row_title.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");

        for (var tt = (preview_chart.getElementsByClassName("js-values").length - 1); tt >= 0; tt--) {

            preview_chart.getElementsByClassName("js-values")[tt].remove();

        }

        for (var tt = 0; tt < value_container.getElementsByClassName("js-chart-builder-qualitative-value-cell").length; tt++) {

            var new_values = document.createElement("div");
            var new_values_class = document.createAttribute("class");
            new_values_class.value = "js-values";
            new_values.setAttributeNode( new_values_class );
            var new_values_title = document.createAttribute("title");
            new_values_title.value = value_container.getElementsByClassName("js-chart-builder-qualitative-value-cell")[tt].nextElementSibling.value;
            new_values.setAttributeNode( new_values_title );
            new_values.innerText = value_container.getElementsByClassName("js-chart-builder-qualitative-value-cell")[tt].nextElementSibling.nextElementSibling.value;
            preview_chart.appendChild( new_values );

        }

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    row_title.value = BUILDER_DEFAULTS.data.heatmap.qualitative.data[ data_index ].title;
    value_container.appendChild( row_title );

    // row values
    var row_values = document.createElement("input");
    var row_values_type = document.createAttribute("type");
    row_values_type.value = "TEXT";
    row_values.setAttributeNode( row_values_type );
    var row_values_style = document.createAttribute("style");
    row_values_style.value = "margin: 0px 2px 0px 0px;";
    row_values.setAttributeNode( row_values_style );
    row_values.addEventListener("change", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");

        for (var tt = (preview_chart.getElementsByClassName("js-values").length - 1); tt >= 0; tt--) {

            preview_chart.getElementsByClassName("js-values")[tt].remove();

        }

        for (var tt = 0; tt < value_container.getElementsByClassName("js-chart-builder-qualitative-value-cell").length; tt++) {

            var new_values = document.createElement("div");
            var new_values_class = document.createAttribute("class");
            new_values_class.value = "js-values";
            new_values.setAttributeNode( new_values_class );
            var new_values_title = document.createAttribute("title");
            new_values_title.value = value_container.getElementsByClassName("js-chart-builder-qualitative-value-cell")[tt].nextElementSibling.value;
            new_values.setAttributeNode( new_values_title );
            new_values.innerText = value_container.getElementsByClassName("js-chart-builder-qualitative-value-cell")[tt].nextElementSibling.nextElementSibling.value;
            preview_chart.appendChild( new_values );

        }

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    row_values.value = BUILDER_DEFAULTS.data.heatmap.qualitative.data[ data_index ].data.join(", ");
    value_container.appendChild( row_values );

    // row remove
    var row_remove_button = document.createElement("div");
    var row_remove_button_style = document.createAttribute("style");
    row_remove_button_style.value = "text-align: center; background-color: crimson; color: white; font-size: 14px; font-weight: 400; line-height: 30px; cursor: pointer; border-radius: 3px;";
    row_remove_button.setAttributeNode( row_remove_button_style );
    var row_remove_button_title = document.createAttribute("title");
    row_remove_button_title.value = "Remove this data set";
    row_remove_button.setAttributeNode( row_remove_button_title );
    row_remove_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    row_remove_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(348, 83%, 47%)";
    }, false);
    row_remove_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    row_remove_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    row_remove_button.addEventListener("click", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview")
        
        for (var tt = 0; tt < value_container.getElementsByClassName("js-chart-builder-qualitative-value-cell").length; tt++) {

            if (this == value_container.getElementsByClassName("js-chart-builder-qualitative-value-cell")[tt].nextElementSibling.nextElementSibling.nextElementSibling) {
                preview_chart.getElementsByClassName("js-values")[tt].remove();

                value_container.getElementsByClassName("js-chart-builder-qualitative-value-cell")[tt].nextElementSibling.nextElementSibling.nextElementSibling.remove();
                value_container.getElementsByClassName("js-chart-builder-qualitative-value-cell")[tt].nextElementSibling.nextElementSibling.remove();
                value_container.getElementsByClassName("js-chart-builder-qualitative-value-cell")[tt].nextElementSibling.remove();
                value_container.getElementsByClassName("js-chart-builder-qualitative-value-cell")[tt].remove();

                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

            }
        }

    }, false);
    row_remove_button.innerText = "X";
    value_container.appendChild( row_remove_button );

    // update the preview chart
    var preview_chart = document.getElementById("js-chart-builder-preview");
    
    var values_input = document.createElement("div");
    var values_input_class = document.createAttribute("class");
    values_input_class.value = "js-values";
    values_input.setAttributeNode( values_input_class );
    var values_input_title = document.createAttribute("title");
    values_input_title.value = BUILDER_DEFAULTS.data.heatmap.qualitative.data[ data_index ].title;
    values_input.setAttributeNode( values_input_title );
    values_input.innerText = BUILDER_DEFAULTS.data.heatmap.qualitative.data[ data_index ].data.join(", ");
    preview_chart.appendChild( values_input );

    var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    return true;
}
// add a row to the input data grid for the parallel coordinates
function jsChartBuilderPopulateInputData_CategoricalParallelCoordinates_AddRow(values_grid_container, ivalue) {

    // row number
    var row_number = document.createElement("div");
    var row_number_class = document.createAttribute("class");
    row_number_class.value = "js-chart-builder-qualitative-value-cell";
    row_number.setAttributeNode( row_number_class );
    row_number.innerText = (values_grid_container.getElementsByClassName("js-chart-builder-qualitative-value-cell").length + 1);
    values_grid_container.appendChild( row_number );

    // row values
    var row_values = document.createElement("input");
    var row_values_type = document.createAttribute("type");
    row_values_type.value = "TEXT";
    row_values.setAttributeNode( row_values_type );
    var row_values_style = document.createAttribute("style");
    row_values_style.value = "margin: 0px 3px 0px 0px;";
    row_values.setAttributeNode( row_values_style );
    row_values.addEventListener("change", function () {

        for (var tt = 0; tt < values_grid_container.getElementsByClassName("js-chart-builder-qualitative-value-cell").length; tt++) {
            if (this == values_grid_container.getElementsByClassName("js-chart-builder-qualitative-value-cell")[tt].nextElementSibling) {

                var preview_chart = document.getElementById("js-chart-builder-preview");
                preview_chart.getElementsByClassName("js-values")[tt].innerText = values_grid_container.getElementsByClassName("js-chart-builder-qualitative-value-cell")[tt].nextElementSibling.value;
            }
        }

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    row_values.value = ivalue.join(", ");
    values_grid_container.appendChild( row_values );

    // remove button
    var row_remove_button = document.createElement("div");
    var row_remove_button_style = document.createAttribute("style");
    row_remove_button_style.value = "background-color: crimson; color: white; text-align: center; line-height: 30px; font-weight: 400; border-radius: 5px; cursor: pointer;";
    row_remove_button.setAttributeNode( row_remove_button_style );
    var row_remove_button_title = document.createAttribute("title");
    row_remove_button_title.value = "Remove values from chart";
    row_remove_button.setAttributeNode( row_remove_button_title );
    row_remove_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    row_remove_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(348, 83%, 47%)";
    }, false);
    row_remove_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    row_remove_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    row_remove_button.addEventListener("click", function () {

        for (var tt = 0; tt < values_grid_container.getElementsByClassName("js-chart-builder-qualitative-value-cell").length; tt++) {
            if (this == values_grid_container.getElementsByClassName("js-chart-builder-qualitative-value-cell")[tt].nextElementSibling.nextElementSibling) {
                this.previousElementSibling.previousElementSibling.remove();
                this.previousElementSibling.remove();
                this.remove();
                document.getElementById("js-chart-builder-preview").getElementsByClassName("js-values")[tt].remove();
            }
            //values_grid_container.getElementsByClassName("js-chart-builder-qualitative-value-cell")[tt].innerText = (tt + 1);
        }
        for (var tt = 0; tt < values_grid_container.getElementsByClassName("js-chart-builder-qualitative-value-cell").length; tt++) {
            values_grid_container.getElementsByClassName("js-chart-builder-qualitative-value-cell")[tt].innerText = (tt + 1);
        }
        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    row_remove_button.innerText = "X";
    values_grid_container.appendChild( row_remove_button );

    // update preview chart
    var preview_chart = document.getElementById("js-chart-builder-preview");

    var input_values = document.createElement("div");
    var input_values_class = document.createAttribute("class");
    input_values_class.value = "js-values";
    input_values.setAttributeNode( input_values_class );
    input_values.innerText = ivalue.join(", ");
    preview_chart.appendChild( input_values );

    return true;
}
// add categorical input data for a parallel coordinates chart
function jsChartBuilderPopulateInputData_CategoricalParallelCoordinates(data_panel, chart_type) {

    for (var tt = (data_panel.children.length-1); tt >=0; tt--) {
        data_panel.children[tt].remove();
    }

    // label
    var data_input_label = document.createElement("div");
    var data_input_label_class = document.createAttribute("class");
    data_input_label_class.value = "js-chart-builder-data-input-label";
    data_input_label.setAttributeNode( data_input_label_class );
    data_input_label.innerText = "Parallel Coordinates (Multivariate Numerical Data)";
    data_panel.appendChild( data_input_label );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    data_panel.appendChild( data_input_sublabel );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_description;
    data_panel.appendChild( data_input_sublabel );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 5px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: ForestGreen; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">YES</span>";
    } else {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: Crimson; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">NO</span>";
    }
    data_panel.appendChild( data_input_value_labels );

    // labels label
    var labels_label = document.createElement("div");
    var labels_label_class = document.createAttribute("class");
    labels_label_class.value = "js-chart-builder-categorical-value-label";
    labels_label.setAttributeNode( labels_label_class );
    labels_label.innerHTML = "Category Names <span style=\"font-size: 10px;\">(comma-separated list of text values)</span>";
    data_panel.appendChild( labels_label );

    // labels input
    var labels_input = document.createElement("input");
    var labels_input_type = document.createAttribute("type");
    labels_input_type.value = "TEXT";
    labels_input.setAttributeNode( labels_input_type );
    var labels_input_style = document.createAttribute("style");
    labels_input_style.value = "width: calc(100% - 30px)";
    labels_input.setAttributeNode( labels_input_style );
    labels_input.addEventListener("change", function () {

        document.getElementById("js-chart-builder-preview").getElementsByClassName("js-labels")[0].innerText = this.value;

        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    labels_input.value = BUILDER_DEFAULTS.data["parallel coordinates"].labels.join(", ");
    data_panel.appendChild( labels_input );

    // values grid container
    var values_grid_container = document.createElement("div");
    var values_grid_container_class = document.createAttribute("class");
    values_grid_container_class.value = "js-chart-builder-parallel-coordinates-values-container";
    values_grid_container.setAttributeNode( values_grid_container_class );
    data_panel.appendChild( values_grid_container );

    // grid header - row number
    var values_grid_header = document.createElement("div");
    var values_grid_header_class = document.createAttribute("class");
    values_grid_header_class.value = "js-chart-builder-parallel-coordinates-values-header";
    values_grid_header.setAttributeNode( values_grid_header_class );
    var values_grid_header_style = document.createAttribute("style");
    values_grid_header_style.value = "border-radius: 5px 0px 0px 0px;";
    values_grid_header.setAttributeNode( values_grid_header_style );
    values_grid_header.innerText = "#";
    values_grid_container.appendChild( values_grid_header );

    // grid header - values
    var values_grid_values = document.createElement("div");
    var values_grid_values_class = document.createAttribute("class");
    values_grid_values_class.value = "js-chart-builder-parallel-coordinates-values-header";
    values_grid_values.setAttributeNode( values_grid_values_class );
    values_grid_container.appendChild( values_grid_values );

    // grid header - remove
    var values_grid_values = document.createElement("div");
    var values_grid_values_class = document.createAttribute("class");
    values_grid_values_class.value = "js-chart-builder-parallel-coordinates-values-header";
    values_grid_values.setAttributeNode( values_grid_values_class );
    var values_grid_values_style = document.createAttribute("style");
    values_grid_values_style.value = "border-radius: 0px 5px 0px 0px;";
    values_grid_values.setAttributeNode( values_grid_values_style );
    values_grid_container.appendChild( values_grid_values );

    for (const [ikey, ivalue] of Object.entries(BUILDER_DEFAULTS.data["parallel coordinates"].data)) {
        var add_parallel_coordinates_row = jsChartBuilderPopulateInputData_CategoricalParallelCoordinates_AddRow(values_grid_container, ivalue);
    }

    // add more rows button
    var add_more = document.createElement("div");
    var add_more_style = document.createAttribute("style");
    add_more_style.value = "width: 150px; background-color: ForestGreen; color: White; margin: 10px 0px 0px 0px; font-weight: 400; font-size: 14px; text-align: center; line-height: 30px; border: 0.5px solid #333333; border-radius: 3px; cursor: pointer;";
    add_more.setAttributeNode( add_more_style );
    add_more.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(120, 61%, 24%)";
    }, false);
    add_more.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(120, 61%, 34%)";
    }, false);
    add_more.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    add_more.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    add_more.addEventListener("click", function () {
        var add_parallel_coordinates_row = jsChartBuilderPopulateInputData_CategoricalParallelCoordinates_AddRow(values_grid_container, []);
    }, false);
    add_more.innerText = "+More Rows";
    data_panel.appendChild( add_more );

    // update preview chart
    var preview_chart = document.getElementById("js-chart-builder-preview");

    var input_values = document.createElement("div");
    var input_values_class = document.createAttribute("class");
    input_values_class.value = "js-labels";
    input_values.setAttributeNode( input_values_class );
    input_values.innerText = BUILDER_DEFAULTS.data["parallel coordinates"].labels.join(", ");
    preview_chart.appendChild( input_values );

    var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

    return true;
}
// add categorical input data for a heatmap (using three different color palettes)
function jsChartBuilderPopulateInputData_CategoricalHeatmap(data_panel, chart_type) {

    for (var tt = (data_panel.children.length-1); tt >=0; tt--) {
        data_panel.children[tt].remove();
    }

    // label
    var data_input_label = document.createElement("div");
    var data_input_label_class = document.createAttribute("class");
    data_input_label_class.value = "js-chart-builder-data-input-label";
    data_input_label.setAttributeNode( data_input_label_class );
    data_input_label.innerText = "Heatmap";
    data_panel.appendChild( data_input_label );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    data_panel.appendChild( data_input_sublabel );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_description;
    data_panel.appendChild( data_input_sublabel );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 5px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: ForestGreen; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">YES</span>";
    } else {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: Crimson; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">NO</span>";
    }
    data_panel.appendChild( data_input_value_labels );

    // add color palette choice - label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    data_input_value_labels.innerHTML = "Select color palette type:";
    data_panel.appendChild( data_input_value_labels );

    // color palette type container
    var color_palette_choice_container = document.createElement("div");
    var color_palette_choice_container_style = document.createAttribute("style");
    color_palette_choice_container_style.value = "border: 0.5px solid #bbbbbb; border-radius: 5px; height: 30px; display: flex; flex-direction: row;";
    color_palette_choice_container.setAttributeNode( color_palette_choice_container_style );
    data_panel.appendChild( color_palette_choice_container );

    // color palette type container - qualitative choice
    var palette_choice = document.createElement("div");
    var palette_choice_style = document.createAttribute("style");
    palette_choice_style.value = "flex: 1 1 0px; margin: 2.5px 5px 2.5px 5px; border: 1px solid hsl(40, 100%, 50%); border-radius: 3px; background-color: hsl(40, 100%, 70%); font-weight: 600; line-height: 25px; text-align: center; cursor: pointer;";
    palette_choice.setAttributeNode( palette_choice_style );
    palette_choice.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(40, 100%, 50%)";
    }, false);
    palette_choice.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(40, 100%, 70%)";
    }, false);
    palette_choice.addEventListener("mousedown", function () {
        this.style.fontWeight = 400;
    }, false);
    palette_choice.addEventListener("mouseup", function () {
        this.style.fontWeight = 600;
    }, false);
    palette_choice.addEventListener("click", function () {

        var render_qualitative_palette = jsChartBuilderRenderQualitativePalette(data_panel);

    }, false);
    palette_choice.innerText = "Qualitative";
    color_palette_choice_container.appendChild( palette_choice );

    // color palette type container - continuous choice
    var palette_choice = document.createElement("div");
    var palette_choice_style = document.createAttribute("style");
    palette_choice_style.value = "flex: 1 1 0px; margin: 2.5px 5px 2.5px 5px; border: 1px solid hsl(270, 100%, 60%); border-radius: 3px; background-color: hsl(270, 100%, 80%); font-weight: 600; line-height: 25px; text-align: center; cursor: pointer;";
    palette_choice.setAttributeNode( palette_choice_style );
    palette_choice.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(270, 100%, 60%)";
    }, false);
    palette_choice.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(270, 100%, 80%)";
    }, false);
    palette_choice.addEventListener("mousedown", function () {
        this.style.fontWeight = 400;
    }, false);
    palette_choice.addEventListener("mouseup", function () {
        this.style.fontWeight = 600;
    }, false);
    palette_choice.addEventListener("click", function () {

        var render_qualitative_palette = jsChartBuilderRenderContinuousPalette(data_panel);

    }, false);
    palette_choice.innerText = "Continuous";
    color_palette_choice_container.appendChild( palette_choice );

    // color palette type container - discrete choice
    var palette_choice = document.createElement("div");
    var palette_choice_style = document.createAttribute("style");
    palette_choice_style.value = "flex: 1 1 0px; margin: 2.5px 5px 2.5px 5px; border: 1px solid hsl(120, 100%, 50%); border-radius: 3px; background-color: hsl(120, 100%, 70%); font-weight: 600; line-height: 25px; text-align: center; cursor: pointer;";
    palette_choice.setAttributeNode( palette_choice_style );
    palette_choice.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(120, 100%, 50%)";
    }, false);
    palette_choice.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(120, 100%, 70%)";
    }, false);
    palette_choice.addEventListener("mousedown", function () {
        this.style.fontWeight = 400;
    }, false);
    palette_choice.addEventListener("mouseup", function () {
        this.style.fontWeight = 600;
    }, false);
    palette_choice.innerText = "Discrete";
    color_palette_choice_container.appendChild( palette_choice );

    // show the qualitative palette
    var render_qualitative_palette = jsChartBuilderRenderQualitativePalette(data_panel);

    // value container label
    var value_container_label = document.createElement("div");
    var value_container_label_class = document.createAttribute("class");
    value_container_label_class.value = "js-chart-builder-color-palette-value-label-container";
    value_container_label.setAttributeNode( value_container_label_class );
    value_container_label.innerText = "Input data values"
    data_panel.appendChild(value_container_label);

    // value container
    var value_container = document.createElement("div");
    var value_container_class = document.createAttribute("class");
    value_container_class.value = "js-chart-builder-color-palette-value-container";
    value_container.setAttributeNode( value_container_class );
    data_panel.appendChild(value_container);

    for (var tt = 0; tt < BUILDER_DEFAULTS.data.heatmap.qualitative.data.length; tt++) {

        var add_value_row = jsChartBuilderRenderQualitativePalette_ValueRow(value_container);

    }

    // add more values button
    var more_values_button = document.createElement("div");
    var more_values_button_style = document.createAttribute("style");
    more_values_button_style.value = "width: 150px; text-align: center; height: 30px; line-height: 30px; font-size: 14px; font-weight: 400; background-color: ForestGreen; color: white; border: 0.5px solid black; border-radius: 3px; cursor: pointer;";
    more_values_button.setAttributeNode( more_values_button_style );
    more_values_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(120, 61%, 24%)";
    }, false);
    more_values_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(120, 61%, 34%)";
    }, false);
    more_values_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    more_values_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    more_values_button.addEventListener("click", function () {

        var add_value_row = jsChartBuilderRenderQualitativePalette_ValueRow(value_container);

    }, false);
    more_values_button.innerText = "+More Values";
    data_panel.appendChild( more_values_button );


    return true;
}
// add categorical input data
function jsChartBuilderPopulateInputData_Categorical(data_panel, chart_type) {

    for (var tt = (data_panel.children.length-1); tt >=0; tt--) {
        data_panel.children[tt].remove();
    }

    // label
    var data_input_label = document.createElement("div");
    var data_input_label_class = document.createAttribute("class");
    data_input_label_class.value = "js-chart-builder-data-input-label";
    data_input_label.setAttributeNode( data_input_label_class );
    data_input_label.innerText = "Categorical Data";
    data_panel.appendChild( data_input_label );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_description;
    data_panel.appendChild( data_input_sublabel );

    // short desc
    var data_input_sublabel = document.createElement("div");
    var data_input_sublabel_class = document.createAttribute("class");
    data_input_sublabel_class.value = "js-chart-builder-data-input-sub-label";
    data_input_sublabel.setAttributeNode( data_input_sublabel_class );
    data_input_sublabel.innerHTML = IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_description;
    data_panel.appendChild( data_input_sublabel );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 5px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: ForestGreen; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">YES</span>";
    } else {
        data_input_value_labels.innerHTML = "Allow multi-series data sets: <span style=\"font-weight: 500; background-color: Crimson; color: white; padding: 2px 4px 2px 4px; border-radius: 3px;\">NO</span>";
    }
    data_panel.appendChild( data_input_value_labels );

    // data labels label
    var data_input_value_labels = document.createElement("div");
    var data_input_value_labels_class = document.createAttribute("class");
    data_input_value_labels_class.value = "js-chart-builder-categorical-value-label";
    data_input_value_labels.setAttributeNode( data_input_value_labels_class );
    var data_input_value_labels_style = document.createAttribute("style");
    data_input_value_labels_style.value = "margin-top: 10px;";
    data_input_value_labels.setAttributeNode( data_input_value_labels_style );
    data_input_value_labels.innerHTML = "Data labels <span style=\"font-size: 11px;\">( comma-separated list of text labels )</span>";
    data_panel.appendChild( data_input_value_labels );

    // data labels input
    var data_input_value_input = document.createElement("input");
    data_input_value_input.id = "js-chart-builder-labels";
    var data_input_value_input_type = document.createAttribute("type");
    data_input_value_input_type.value = "TEXT";
    data_input_value_input.setAttributeNode( data_input_value_input_type );
    //data_input_value_input.value = "Furniture, Groceries, Electronics, Toys, Clothing";
    data_input_value_input.value = BUILDER_DEFAULTS.data.categorical.labels.join(", ");
    //data_input_value_input.addEventListener("focus", function () {
    //    this.select();
    //}, false);
    data_input_value_input.addEventListener("change", function () {
        var preview_chart = document.getElementsByClassName("js-chart")[0];
        var preview_labels = preview_chart.getElementsByClassName("js-labels")[0];

        if (this.value.trim() != preview_labels.innerText.trim()) {
            preview_labels.innerText = this.value.trim();
        }
        var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
        var pop_msg = jsChartBuilderPopMessage("Data labels updated.");
    }, false);
    data_panel.appendChild( data_input_value_input );

    // allow multi series or not
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        if (["bar", "lollipop bar"].indexOf( chart_type ) > -1) {
            var loop_count = 2;
        } else if (chart_type == "population pyramid") {
            var loop_count = 12;
        } else {
            var loop_count = 3;
        }
    } else {
        var loop_count = 1;
    }

    for (var tt = 0; tt < loop_count; tt++) {

        // add an input data container for categorical data (js-values)
        var add_input_values = jsChartBuilderAddInputData_Categorical(data_panel, tt, IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries, BUILDER_DEFAULTS.data.categorical.data[tt].title, BUILDER_DEFAULTS.data.categorical.data[tt].data.join(", "));
    }

    // buttons container
    /*
    var button_container = document.createElement("div");
    var button_container_style = document.createAttribute("style");
    button_container_style.value = "display: flex; flex-direction: row; margin: 10px 20px 20px 0px;";
    button_container.setAttributeNode( button_container_style );
    data_panel.appendChild( button_container );
    */

    // add row button
    var add_row_button = document.createElement("div");
    var add_row_button_class = document.createAttribute("class");
    add_row_button_class.value = "js-chart-builder-button-elem";
    add_row_button.setAttributeNode( add_row_button_class );
    //add_row_button_style.value = "flex: 1 1 auto; width: 100px; background-color: ForestGreen;";
    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        var add_row_button_title = document.createAttribute("title");
        add_row_button_title.value = "Add more data rows";
        add_row_button.setAttributeNode( add_row_button_title );
            var add_row_button_style = document.createAttribute("style");
        add_row_button_style.value = "width: 150px; background-color: ForestGreen; margin: 10px 0px 10px 0px;";
        add_row_button.setAttributeNode( add_row_button_style );
        add_row_button.addEventListener("click", function () {

            // determine how many outer containers there are
            var cat_outer_count = document.getElementsByClassName("js-chart-builder-categorical-container").length;

            // add an input data container for categorical data (js-values)
            var add_input_values = jsChartBuilderAddInputData_Categorical(data_panel, (cat_outer_count), IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries, BUILDER_DEFAULTS.data.categorical.data[0].title, BUILDER_DEFAULTS.data.categorical.data[0].data.join(", "), true);

            // also add the values to the preview chart
            var preview_values = document.createElement("div");
            var preview_values_class = document.createAttribute("class");
            preview_values_class.value = "js-values";
            preview_values.setAttributeNode( preview_values_class );
            var preview_values_title = document.createAttribute("title");
            preview_values_title.value = BUILDER_DEFAULTS.data.categorical.data[0].title;
            preview_values.setAttributeNode( preview_values_title );
            preview_values.innerText = BUILDER_DEFAULTS.data.categorical.data[0].data.join(", ");
            document.getElementsByClassName("js-chart")[0].appendChild( preview_values );

            var pop_msg = jsChartBuilderPopMessage("Data series added.")

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

        }, false);
        add_row_button.addEventListener("mousedown", function () {
            this.style.fontWeight = 200;
        }, false);
        add_row_button.addEventListener("mouseup", function () {
            this.style.fontWeight = 400;
        }, false);
    } else {
        var add_row_button_title = document.createAttribute("title");
        add_row_button_title.value = "Available for charts that support multi-series data sets only.";
        add_row_button.setAttributeNode( add_row_button_title );
            var add_row_button_style = document.createAttribute("style");
        add_row_button_style.value = "width: 150px; background-color: ForestGreen; margin: 10px 0px 10px 0px; opacity: 0.5; cursor: not-allowed;";
        add_row_button.setAttributeNode( add_row_button_style );
    }
    add_row_button.innerText = "+More Rows";
    data_panel.appendChild( add_row_button );

    // update values button
    /*
    var update_button = document.createElement("div");
    var update_button_class = document.createAttribute("class");
    update_button_class.value = "js-chart-builder-button-elem";
    update_button.setAttributeNode( update_button_class );
    var update_button_title = document.createAttribute("title");
    update_button_title.value = "Update the data values of the preview chart";
    update_button.setAttributeNode( update_button_title );
    var update_button_style = document.createAttribute("style");
    update_button_style.value = "flex: 1 1 auto; width: calc(100% - 100px);";
    update_button.setAttributeNode( update_button_style );
    update_button.innerText = "Update Chart Data";
    update_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    update_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    button_container.appendChild( update_button );
    */

    return true;
}
// add the input data value container
function jsChartBuilderPopulateInputData(data_panel, data_type, chart_type) {

    switch (data_type) {

        // frequency
        case "frequency":
            var populate_input_data = jsChartBuilderPopulateInputData_Frequency(data_panel, chart_type);
            break;

        // range
        case "range":
            var populate_input_data = jsChartBuilderPopulateInputData_Range(data_panel, chart_type);
            break;

        // cumulative
        case "cumulative":
            var populate_input_data = jsChartBuilderPopulateInputData_Cumulative(data_panel, chart_type);
            break;

        // points
        case "points":
            var populate_input_data = jsChartBuilderPopulateInputData_Points(data_panel, chart_type);
            break;
        
        // ohlc
        case "ohlc":
            var populate_input_data = jsChartBuilderPopulateInputData_OHLC(data_panel, chart_type);
            break;
        
        // hierarchical
        case "hierarchical":
            var populate_input_data = jsChartBuilderPopulateInputData_Hierarchical(data_panel, chart_type);
            break;
        
        // series
        case "series":
            var populate_input_data = jsChartBuilderPopulateInputData_Series(data_panel, chart_type);
            break;

        // default -- categorical
        default:
            if (chart_type == "heatmap") {
                var populate_input_data = jsChartBuilderPopulateInputData_CategoricalHeatmap(data_panel, chart_type);
            } else if (chart_type == "parallel coordinates") {
                var populate_input_data = jsChartBuilderPopulateInputData_CategoricalParallelCoordinates(data_panel, chart_type);
            } else {
                var populate_input_data = jsChartBuilderPopulateInputData_Categorical(data_panel, chart_type);
            }
            break;
    }

    return true;
}
// append or amend a style template directive
function jsChartBuilderAppendStyleDirective(preview_chart, directive_name, directive_value) {

    var this_directive = preview_chart.getElementsByClassName( directive_name );
    if (this_directive.length == 0) {

        var new_directive = document.createElement("div");
        var new_directive_class = document.createAttribute("class");
        new_directive_class.value = directive_name;
        new_directive.setAttributeNode( new_directive_class );
        new_directive.innerText = directive_value;
        preview_chart.appendChild( new_directive );

    }

    return true;
}
// add the preview chart
function jsChartBuilderPopulatePreviewChart(preview_panel, chart_type, template_name) {

    // overwrite the categorical data for population pyramids
    if (chart_type == "population pyramid") {
        BUILDER_DEFAULTS.data.categorical = BUILDER_DEFAULTS.data["population pyramid"];
    } else if (chart_type == "funnel bar") {
        BUILDER_DEFAULTS.data.categorical = BUILDER_DEFAULTS.data["funnel bar"];
    } else if (chart_type == "funnel column") {
        BUILDER_DEFAULTS.data.categorical = BUILDER_DEFAULTS.data["funnel column"];
    } else {
        BUILDER_DEFAULTS.data.categorical = BUILDER_DEFAULTS.data["categorical copy"];
    }

    for (var tt = (preview_panel.children.length-1); tt >= 0; tt--) {
        preview_panel.children[tt].remove();
    }

    var css_found = false;
    for (const [ikey, ivalue] of Object.entries(document.styleSheets)) {
        if (ivalue.href != null) {
            if (ivalue.href.indexOf( IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_group ) > -1) {
                css_found = true;
            }
        }
    }

    if (!css_found) {

        // css link
        var link_elem = document.createElement("link");
        var link_elem_href = document.createAttribute("href");
        link_elem_href.value = ("css/js-chart-" + IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_group + ".css");
        link_elem.setAttributeNode( link_elem_href );
        var link_elem_rel = document.createAttribute("rel");
        link_elem_rel.value = "stylesheet";
        link_elem.setAttributeNode( link_elem_rel );
        document.head.appendChild( link_elem );

        // js script
        var script_elem = document.createElement("script");
        var script_elem__type = document.createAttribute("type");
        script_elem__type.value = "text/javascript";
        script_elem.setAttributeNode( script_elem__type );
        var script_elem_src = document.createAttribute("src");
        script_elem_src.value = ("js/js-chart-" + IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].chart_group + ".js");
        script_elem.setAttributeNode( script_elem_src );
        document.head.appendChild( script_elem );

    }

    var preview_chart = document.createElement("div");
    preview_chart.id = "js-chart-builder-preview";
    var preview_chart_class = document.createAttribute("class");
    preview_chart_class.value = "js-chart";
    preview_chart.setAttributeNode( preview_chart_class );
    var preview_chart_type = document.createAttribute("type");
    preview_chart_type.value = chart_type;
    preview_chart.setAttributeNode( preview_chart_type );
    /*
    var preview_chart_title = document.createAttribute("title");
    if (chart_type == "heatmap") {
        preview_chart_title.value = BUILDER_DEFAULTS.data.heatmap.chart_title;
    } else if (chart_type == "parallel coordinates") {
        preview_chart_title.value = BUILDER_DEFAULTS.data["parallel coordinates"].chart_title;
    } else {
        preview_chart_title.value = BUILDER_DEFAULTS.data[ IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_type ].chart_title;
    }
    preview_chart.setAttributeNode( preview_chart_title );
    */
    var preview_chart_template = document.createAttribute("template");
    preview_chart_template.value = template_name;
    preview_chart.setAttributeNode( preview_chart_template );
    // var preview_chart_showlegend = document.createAttribute("showlegend");
    // preview_chart_showlegend.value = IDEFAULT_CHART_ATTRIBUTES["showlegend"].default;
    // preview_chart.setAttributeNode( preview_chart_showlegend );
    // var preview_chart_showcontrols = document.createAttribute("showcontrols");
    // preview_chart_showcontrols.value = "print_only"
    // preview_chart.setAttributeNode( preview_chart_showcontrols );

    if (typeof BUILDER_DEFAULTS.chart_attributes[ chart_type ] != "undefined") {
        for (const [ikey, ivalue] of Object.entries(BUILDER_DEFAULTS.chart_attributes[ chart_type ])) {
            preview_chart.setAttribute(ikey, ivalue);
        }
    }

    /*
    // bubble
    switch(chart_type) {
        case "bubble":
            var preview_chart_showlabels = document.createAttribute("showlabels");
            preview_chart_showlabels.value = "off"
            preview_chart.setAttributeNode( preview_chart_showlabels );

            break;
        // treemap
        case "treemap":
            var preview_chart_sortdata = document.createAttribute("sortdata");
            preview_chart_sortdata.value = "on";
            preview_chart.setAttributeNode( preview_chart_sortdata );

            var preview_chart_drawalg = document.createAttribute("drawalg");
            preview_chart_drawalg.value = "portrait quad";
            preview_chart.setAttributeNode( preview_chart_drawalg );

            var preview_chart_showlegend = document.createAttribute("showlegend");
            preview_chart_showlegend.value = "bottom";
            preview_chart.setAttributeNode( preview_chart_showlegend );

            var preview_chart_jsondata = document.createAttribute("jsondata");
            preview_chart_jsondata.value = "default-json-data";
            preview_chart.setAttributeNode( preview_chart_jsondata );

            break;
        // box plot
        // horizontal box plot
        case "box plot":
        case "horizontal box plot":
            var preview_chart_sortdata = document.createAttribute("showlegend");
            preview_chart_sortdata.value = "off";
            preview_chart.setAttributeNode( preview_chart_sortdata );

            break;
        // span bar
        case "span bar":
            var preview_chart_xtitle = document.createAttribute("xtitle");
            preview_chart_xtitle.value = "Selling Price in US Dollar ($)";
            preview_chart.setAttributeNode( preview_chart_xtitle );

            var preview_chart_ytitle = document.createAttribute("ytitle");
            preview_chart_ytitle.value = "Artist & Painting name";
            preview_chart.setAttributeNode( preview_chart_ytitle );

            break;
        // funnel bar
        case "funnel bar":
        case "funnel column":
            var preview_chart_sortdata = document.createAttribute("sortdata");
            preview_chart_sortdata.value = "on column desc";
            preview_chart.setAttributeNode( preview_chart_sortdata );

            break;
        // population pyramid
        case "population pyramid":
            var preview_chart_xtitle = document.createAttribute("xtitle");
            preview_chart_xtitle.value = "Students x 1000";
            preview_chart.setAttributeNode( preview_chart_xtitle );

            break;

    }
    */

    preview_panel.appendChild( preview_chart );

    if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].allow_multiseries) {
        if (["bar", "lollipop bar"].indexOf( chart_type ) > -1) {
            var loop_count = 2;
        } else if (chart_type == "population pyramid") {
            var loop_count = 12;
        } else {
            var loop_count = 3;
        }
    } else {
        var loop_count = 1;
    }

    // add input data containers
    switch(IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_type) {
        // categorical
        case "categorical":

            if ((chart_type != "heatmap") && (chart_type != "parallel coordinates")) {
                // add the preview labels
                var preview_labels = document.createElement("div");
                var preview_labels_class = document.createAttribute("class");
                preview_labels_class.value = "js-labels";
                preview_labels.setAttributeNode( preview_labels_class );
                //preview_labels.innerText = "Furniture, Groceries, Electronics, Toys, Clothing";
                preview_labels.innerText = BUILDER_DEFAULTS.data.categorical.labels.join(", ");
                preview_chart.appendChild( preview_labels );

                for (var tt = 0; tt < loop_count; tt++) {

                    // add the preview values
                    var preview_values = document.createElement("div");
                    var preview_values_class = document.createAttribute("class");
                    preview_values_class.value = "js-values";
                    preview_values.setAttributeNode( preview_values_class );
                    var preview_values_title = document.createAttribute("title");
                    preview_values_title.value = BUILDER_DEFAULTS.data.categorical.data[tt].title;
                    preview_values.setAttributeNode( preview_values_title );
                    preview_values.innerText = BUILDER_DEFAULTS.data.categorical.data[tt].data.join(", ");
                    preview_chart.appendChild( preview_values );

                }
            }

            break;
        
        // frequency
        case "frequency":

            // input values container
            var preview_values = document.createElement("div");
            var preview_values_class = document.createAttribute("class");
            preview_values_class.value = "js-values";
            preview_values.setAttributeNode( preview_values_class );
            preview_values.innerText = BUILDER_DEFAULTS.data.frequency.data.join(", ");
            preview_chart.appendChild( preview_values );

            // define a color palette
            var color_palette = document.createElement("div");
            var color_palette_class = document.createAttribute("class");
            color_palette_class.value = "js-color-palette";
            color_palette.setAttributeNode( color_palette_class );
            color_palette.innerText = "hsl(214, 32%, 50%)";
            preview_chart.appendChild( color_palette );

            break;
        
        // cumulative
        case "cumulative":

            // labels
            var preview_labels = document.createElement("div");
            var preview_labels_class = document.createAttribute("class");
            preview_labels_class.value = "js-labels";
            preview_labels.setAttributeNode( preview_labels_class );
            preview_labels.innerText = BUILDER_DEFAULTS.data.cumulative.labels;
            preview_chart.appendChild( preview_labels );

            // values
            var preview_values = document.createElement("div");
            var preview_values_class = document.createAttribute("class");
            preview_values_class.value = "js-values";
            preview_values.setAttributeNode( preview_values_class );
            var preview_values_title = document.createAttribute("title");
            preview_values_title.value = BUILDER_DEFAULTS.data.cumulative.data.title;
            preview_values.setAttributeNode( preview_values_title );
            preview_values.innerText = BUILDER_DEFAULTS.data.cumulative.data.data;
            preview_chart.appendChild( preview_values );

            break;
        
        // ohlc
        case "ohlc":

            var preview_labels = document.createElement("div");
            var preview_labels_class = document.createAttribute("class");
            preview_labels_class.value = "js-labels";
            preview_labels.setAttributeNode( preview_labels_class );
            preview_labels.innerText = BUILDER_DEFAULTS.data.ohlc.data.labels.join(", ");
            preview_chart.appendChild( preview_labels );

            var preview_open = document.createElement("div");
            var preview_open_class = document.createAttribute("class");
            preview_open_class.value = "js-open";
            preview_open.setAttributeNode( preview_open_class );
            preview_open.innerText = BUILDER_DEFAULTS.data.ohlc.data.open.join(", ");
            preview_chart.appendChild( preview_open );

            var preview_high = document.createElement("div");
            var preview_high_class = document.createAttribute("class");
            preview_high_class.value = "js-high";
            preview_high.setAttributeNode( preview_high_class );
            preview_high.innerText = BUILDER_DEFAULTS.data.ohlc.data.high.join(", ");
            preview_chart.appendChild( preview_high );

            var preview_low = document.createElement("div");
            var preview_low_class = document.createAttribute("class");
            preview_low_class.value = "js-low";
            preview_low.setAttributeNode( preview_low_class );
            preview_low.innerText = BUILDER_DEFAULTS.data.ohlc.data.low.join(", ");
            preview_chart.appendChild( preview_low );

            var preview_close = document.createElement("div");
            var preview_close_class = document.createAttribute("class");
            preview_close_class.value = "js-close";
            preview_close.setAttributeNode( preview_close_class );
            preview_close.innerText = BUILDER_DEFAULTS.data.ohlc.data.close.join(", ");
            preview_chart.appendChild( preview_close );

            break;
        
        // hierarchical
        case "hierarchical":

            // <script type="application/json" id="json-data2">
            var script_tags = document.createElement("script");
            script_tags.id = "default-json-data";
            var script_tags_type = document.createAttribute("type");
            script_tags_type.value = "application/json";
            script_tags.setAttributeNode( script_tags_type );
            script_tags.innerText = JSON.stringify( BUILDER_DEFAULTS.data.hierarchical.data );
            preview_chart.appendChild( script_tags );

            // color palette
            var color_palette = document.createElement("div");
            var color_palette_class = document.createAttribute("class");
            color_palette_class.value = "js-color-palette";
            color_palette.setAttributeNode( color_palette_class );
            var color_palette_type = document.createAttribute("type");
            color_palette_type.value = "sequential continuous";
            color_palette.setAttributeNode( color_palette_type );
            color_palette.innerText = "10!hsl(0, 68%, 20%); 30!hsl(0, 68%, 40%); 50!Orange; 70!SkyBlue; 90!YellowGreen;";
            preview_chart.appendChild( color_palette );

            // value bar data margin
            var data_margin = document.createElement("div");
            var data_margin_class = document.createAttribute("class");
            data_margin_class.value = "js-value-bar-data-margin";
            data_margin.setAttributeNode( data_margin_class );
            data_margin.innerText = "0.5px";
            preview_chart.appendChild( data_margin );

            // data label width
            var data_label_width = document.createElement("div");
            var data_label_width_class = document.createAttribute("class");
            data_label_width_class.value = "js-datalabel-width";
            data_label_width.setAttributeNode( data_label_width_class );
            data_label_width.innerText = "80px";
            preview_chart.appendChild( data_label_width );

            break;
        
        // series
        case "series":

            /*
            var color_palette = document.createElement("div");
            var color_palette_class = document.createAttribute("class");
            color_palette_class.value = "js-color-palette";
            color_palette.setAttributeNode( color_palette_class );
            //color_palette.innerText = "hsl(207, 44%, 60%)";
            color_palette.innerText = "YellowGreen";
            preview_chart.appendChild( color_palette );
            */

            var label_color = document.createElement("div");
            var label_color_class = document.createAttribute("class");
            label_color_class.value = "js-datalabel-text-color";
            label_color.setAttributeNode( label_color_class );
            label_color.innerText = "black";
            preview_chart.appendChild( label_color );

            var margin_container = document.createElement("div");
            var margin_container_class = document.createAttribute("class");
            margin_container_class.value = "js-value-bar-data-margin";
            margin_container.setAttributeNode( margin_container_class );
            margin_container.innerText = "10px";
            preview_chart.appendChild( margin_container );

            var line_thickness = document.createElement("div");
            var line_thickness_class = document.createAttribute("class");
            line_thickness_class.value = "js-value-line-thickness";
            line_thickness.setAttributeNode( line_thickness_class );
            line_thickness.innerText = "2px";
            preview_chart.appendChild( line_thickness );

            var marker_width = document.createElement("div");
            var marker_width_class = document.createAttribute("class");
            marker_width_class.value = "js-marker-width";
            marker_width.setAttributeNode( marker_width_class );
            marker_width.innerText = "10px";
            preview_chart.appendChild( marker_width );

            var marker_height = document.createElement("div");
            var marker_height_class = document.createAttribute("class");
            marker_height_class.value = "js-marker-height";
            marker_height.setAttributeNode( marker_height_class );
            marker_height.innerText = "10px";
            preview_chart.appendChild( marker_height );

            var marker_border = document.createElement("div");
            var marker_border_class = document.createAttribute("class");
            marker_border_class.value = "js-marker-border";
            marker_border.setAttributeNode( marker_border_class );
            marker_border.innerText = "0.5px solid black";
            preview_chart.appendChild( marker_border );

            var font_size = document.createElement("div");
            var font_size_class = document.createAttribute("class");
            font_size_class.value = "js-datalabel-font-size";
            font_size.setAttributeNode( font_size_class );
            font_size.innerText = "14px";
            preview_chart.appendChild( font_size );

            var font_weight = document.createElement("div");
            var font_weight_class = document.createAttribute("class");
            font_weight_class.value = "js-datalabel-font-weight";
            font_weight.setAttributeNode( font_weight_class );
            font_weight.innerText = "500";
            preview_chart.appendChild( font_weight );

            break;

    }

    if (typeof BUILDER_DEFAULTS.style_template_directives[ chart_type ] != "undefined") {
        for (const [ikey, ivalue] of Object.entries(BUILDER_DEFAULTS.style_template_directives[ chart_type ])) {
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-" + (ikey.replaceAll("_", "-")), ivalue);
        }
    }

    /*
    switch(chart_type) {

        // bubble
        case "bubble":
            var preview_values = document.createElement("div");
            var preview_values_class = document.createAttribute("class");
            preview_values_class.value = "js-marker-width";
            preview_values.setAttributeNode( preview_values_class );
            preview_values.innerText = "auto";
            preview_chart.appendChild( preview_values );

            var preview_values = document.createElement("div");
            var preview_values_class = document.createAttribute("class");
            preview_values_class.value = "js-marker-height";
            preview_values.setAttributeNode( preview_values_class );
            preview_values.innerText = "auto";
            preview_chart.appendChild( preview_values );

            break;

        // bar
        case "bar":
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-bar-min-height", "5px");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-bar-min-width", "3px");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-bar-series-margin", "5px");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-bar-data-margin", "1px");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-bar-border-radius", "0px 2px 2px 0px");

            break;

        // column
        case "column":
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-bar-min-height", "3px");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-bar-series-margin", "5px");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-bar-data-margin", "1px");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-bar-border-radius", "2px 2px 0px 0px");

            break;

        // span bar
        // span column
        case "span bar":
        case "span column":
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-bar-data-margin", "1px");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-bar-border-radius", "2px");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-datalabel-prepend", "$");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-datalabel-append", "mil");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-datalabel-width", "100px");

            break;

        // funnel bar
        // funnel column
        case "funnel bar":
        case "funnel column":
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-bar-data-margin", "1px");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-bar-border-radius", "2px");

            break;

        // histogram
        case "histogram":
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-bar-min-width", "10px");

            break;

        // parallel coordinates
        case "parallel coordinates":
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-line-thickness", "1.5px");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-color-palette", "SteelBlue");

            break;

        // line
        // stacked line
        // 100% stacked line
        case "line":
        case "stacked line":
        case "100% stacked line":
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-line-thickness", "2px");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-marker-width", "10px");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-datalabel-text-color", "black");

            break;
        // population pyramid
        case "population pyramid":
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-bar-data-margin", "1px");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-datalabel-text-color", "black");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-bar-min-width", "3px");

            break;
        // ohlc
        case "ohlc":
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-line-thickness", "5px");
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-datalabel-text-color", "black");

            break;
        // parallel coordinates
        case "parallel coordinates":
            var add_style_directive = jsChartBuilderAppendStyleDirective(preview_chart, "js-value-line-thickness", "2px");

            break;
    }
    */

    return true;
}

/*
// search the styl directives panel
function jsChartBuilderSearchStyleDirective(style_directives_content_panel, search_value) {

    for (const [ikey, ivalue] of Object.entries(style_directives_content_panel.getElementsByClassName("js-chart-builder-style-directive-name"))) {
        if (ivalue.innerText.indexOf( search_value ) > -1) {
            ivalue.style.backgroundColor = "#ffffe6";
            ivalue.style.backgroundColor = "#ffffe6";
        } else {
            ivalue.style.backgroundColor = "white";
        }
    }

    return true;
}
*/
// populate the style directives content panel
function jsChartBuilderPopulateStyleDirectives(style_directives_content_panel, template_name, chart_type, search_term = "") {

    for (var tt = (style_directives_content_panel.children.length-1); tt >= 0; tt--) {
        style_directives_content_panel.children[tt].remove();
    }

    var directive_list = [];
    for (const [ikey, ivalue] of Object.entries(IDEFAULT_DESIGN_TEMPLATES[0])) {
        if ((["name", "description"].indexOf(ikey) == -1) && (ikey.indexOf(search_term.replaceAll("-", "_")) > -1)) {
            if (directive_list.indexOf( ikey ) == -1) {
                directive_list.push( ikey );
            }
        }
    }

    directive_list.sort();

    // search container
    var search_container = document.createElement("div");
    var search_container_class = document.createAttribute("class");
    search_container_class.value = "js-chart-builder-search-container";
    search_container.setAttributeNode( search_container_class );
    style_directives_content_panel.appendChild( search_container );

    // search label
    var search_label = document.createElement("div");
    var search_label_class = document.createAttribute("class");
    search_label_class.value = "js-chart-builder-search-label";
    search_label.setAttributeNode( search_label_class );
    search_label.innerText = "Search";
    search_container.appendChild( search_label );

    // search input
    var search_input = document.createElement("input");
    search_input.id = "js-chart-builder-search-input";
    var search_input_type = document.createAttribute("type");
    search_input_type.value = "TEXT";
    search_input.setAttributeNode( search_input_type );
    var search_input_style = document.createAttribute("style");
    search_input_style.value = "width: 100%; margin: 2px 20px 2px 0px;";
    search_input.setAttributeNode( search_input_style );
    search_input.addEventListener("change", function () {
        var search_for_directive = jsChartBuilderPopulateStyleDirectives(style_directives_content_panel, template_name, chart_type, this.value);
    }, false);
    search_container.appendChild( search_input );

    // clear button
    var clear_button = document.createElement("div");
    var clear_button_class = document.createAttribute("class");
    clear_button_class.value = "js-chart-buillder-search-button";
    clear_button.setAttributeNode( clear_button_class );
    var clear_button_title = document.createAttribute("title");
    clear_button_title.value = "Clear the search box";
    clear_button.setAttributeNode( clear_button_title );
    var clear_button_style = document.createAttribute("style");
    clear_button_style.value = "width: 30px;";
    clear_button.setAttributeNode( clear_button_style );
    clear_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(120, 61%, 24%)";
    }, false);
    clear_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(120, 61%, 34%)";
    }, false);
    clear_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    clear_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    clear_button.addEventListener("click", function () {

        var search_for_directive = jsChartBuilderPopulateStyleDirectives(style_directives_content_panel, template_name, chart_type, "");


    }, false);
    clear_button.innerText = "X";
    search_container.appendChild( clear_button );

    var this_template;
    for (const [hkey, hvalue] of Object.entries(IDEFAULT_DESIGN_TEMPLATES)) {
        if (hvalue.name == template_name) {
            this_template = hvalue;
            break;
        }
    }

    var directive_groups = {};
    var prev_group = "";
    for (const [ikey, ivalue] of Object.entries(directive_list)) {
        var sub_cat = ivalue.substring(0, ivalue.indexOf("_"));
        if (prev_group != sub_cat) {
            directive_groups[ sub_cat] = 1;
        } else {
            directive_groups[ sub_cat]++;
        }
        prev_group = sub_cat;
    }

    var prev_cat = "";
    for (const [ikey, ivalue] of Object.entries(directive_list)) {
        var sub_cat = ivalue.substring(0, ivalue.indexOf("_"));

        if (prev_cat != sub_cat) {

            var group_label = document.createElement("div");
            var group_label_style = document.createAttribute("style");
            group_label_style.value = "grid-row: span " + directive_groups[ sub_cat ] + "; writing-mode: vertical-lr; line-height: 30px; text-align: left; font-size: 16px; font-weight: 600; background-color: CadetBlue; color: White; padding: 5px 0px 0px 0px; text-wrap-mode: nowrap; overflow: hidden; text-overflow: ellipsis; border: 0.5px solid white;";
            group_label.setAttributeNode( group_label_style );
            group_label.innerText = sub_cat;
            style_directives_content_panel.appendChild( group_label );

        }

        // directive label
        var directive_label = document.createElement("div");
        var directive_label_class = document.createAttribute("class");
        directive_label_class.value = "js-chart-builder-style-directive-name";
        directive_label.setAttributeNode( directive_label_class );
        directive_label.innerText = ivalue;
        style_directives_content_panel.appendChild( directive_label );

        // directive checkbox
        var directive_checkbox = document.createElement("input");
        var directive_checkbox_type = document.createAttribute("type");
        directive_checkbox_type.value = "CHECKBOX";
        directive_checkbox.setAttributeNode( directive_checkbox_type );
        directive_checkbox.addEventListener("change", function () {

            if (this.nextElementSibling.disabled) {
                this.nextElementSibling.disabled = false;
            } else {
                this.nextElementSibling.disabled = true;
            }

            this.nextElementSibling.select();

        }, false);
        style_directives_content_panel.appendChild( directive_checkbox );

        // directive textbox
        var directive_textbox = document.createElement("input");
        var directive_textbox_type = document.createAttribute("type");
        directive_textbox_type.value = "TEXT";
        directive_textbox.setAttributeNode( directive_textbox_type );
        var directive_textbox_disabled = document.createAttribute("disabled");
        directive_textbox_disabled.value = "disabled";
        directive_textbox.setAttributeNode( directive_textbox_disabled );
        directive_textbox.addEventListener("change", function () {

            var preview_chart = document.getElementById("js-chart-builder-preview");

            var directive_lookup_name = "js-" + this.previousElementSibling.previousElementSibling.innerText.replaceAll("_", "-");
            var directive_elems = preview_chart.getElementsByClassName( directive_lookup_name );

            if (directive_elems.length == 0) {

                var new_directive = document.createElement("div");
                var new_directive_class = document.createAttribute("class");
                new_directive_class.value = directive_lookup_name;
                new_directive.setAttributeNode( new_directive_class );
                new_directive.innerText = this.value;
                preview_chart.appendChild( new_directive );

            } else {
                directive_elems[0].innerText = this.value;
            }

            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");

            var pop_msg = jsChartBuilderPopMessage("Style directive updated.");
        }, false);

        if (typeof BUILDER_DEFAULTS.style_template_directives[ chart_type ] != "undefined") {
            if (typeof BUILDER_DEFAULTS.style_template_directives[ chart_type ][ ivalue ] != "undefined") {
                var t_directive_value = BUILDER_DEFAULTS.style_template_directives[ chart_type ][ ivalue];
            } else {
                var t_directive_value = directive_textbox.value = this_template[ ivalue ];
            }
        } else {
            var t_directive_value = directive_textbox.value = this_template[ ivalue ];
        }

        var directive_value;
        var preview_chart = document.getElementById("js-chart-builder-preview");
        if ((typeof preview_chart != "undefined") && (preview_chart != null)) {
            var preview_chart_directive_name = "js-" + ivalue.replaceAll("_", "-");
            if (preview_chart.getElementsByClassName( preview_chart_directive_name ).length > 0) {
                directive_value = preview_chart.getElementsByClassName( preview_chart_directive_name )[0].innerText;
            } else {
                directive_value = t_directive_value;
            }
        } else {
            directive_value = t_directive_value;
        }
        if (ivalue != "color_palette") {
            directive_textbox.value = directive_value.toString();
        } else {
            directive_textbox.value = directive_value.toString().replaceAll(",", ";");
        }
        style_directives_content_panel.appendChild( directive_textbox );

        prev_cat = sub_cat;
    }

    // document.getElementById("js-chart-builder-search-input").select();

    /*
    var start_total = 2;
    for (const [ikey, ivalue] of Object.entries(directive_groups)) {

        start_total += ivalue;
        
        // group label
        var group_label = document.createElement("div");
        var group_label_style = document.createAttribute("style");
        group_label_style.value = "grid-row: " + start_total + " / span " + ivalue + "; writing-mode: vertical-lr;"
        group_label.setAttributeNode( group_label_style );
        group_label.innerText = ikey;
        style_directives_content_panel.appendChild( group_label );

        // style directive name
        var style_directive_name = document.createElement("div");
        var style_directive_name_class = document.createAttribute("class");
        style_directive_name_class.value = "js-chart-builder-style-directive-name";
        style_directive_name.setAttributeNode( style_directive_name_class );
        style_directive_name.innerText = "XXX";
        style_directives_content_panel.appendChild( style_directive_name );

        // style directive checkbox
        var style_directive_checkbox = document.createElement("div");
        var style_directive_checkbox_class = document.createAttribute("class");
        style_directive_checkbox_class.value = "js-chart-builder-style-directive-checkbox";
        style_directive_checkbox.setAttributeNode( style_directive_checkbox_class );
        style_directives_content_panel.appendChild( style_directive_checkbox );

        // style directive value
        var style_directive_value = document.createElement("div");
        var style_directive_value_class = document.createAttribute("class");
        style_directive_value_class.value = "js-chart-builder-style-directive-value";
        style_directive_value.setAttributeNode( style_directive_value_class );
        style_directives_content_panel.appendChild( style_directive_value );

    }

    var prev_directive = "";
    for (const [ikey, ivalue] of Object.entries(directive_list)) {

        var sub_cat = ivalue.substring(0, ivalue.indexOf("_"));

        // style directive name
        var style_directive_name = document.createElement("div");
        var style_directive_name_class = document.createAttribute("class");
        style_directive_name_class.value = "js-chart-builder-style-directive-name";
        style_directive_name.setAttributeNode( style_directive_name_class );
        style_directive_name.innerText = sub_cat;
        style_directives_content_panel.appendChild( style_directive_name );

        // style directive checkbox
        var style_directive_checkbox = document.createElement("div");
        var style_directive_checkbox_class = document.createAttribute("class");
        style_directive_checkbox_class.value = "js-chart-builder-style-directive-checkbox";
        style_directive_checkbox.setAttributeNode( style_directive_checkbox_class );
        style_directives_content_panel.appendChild( style_directive_checkbox );

        // style directive value
        var style_directive_value = document.createElement("div");
        var style_directive_value_class = document.createAttribute("class");
        style_directive_value_class.value = "js-chart-builder-style-directive-value";
        style_directive_value.setAttributeNode( style_directive_value_class );
        style_directives_content_panel.appendChild( style_directive_value );

    }
    */


    /*
    // headers
    var heading_label = document.createElement("div");
    var heading_label_class = document.createAttribute("class");
    heading_label_class.value = "js-chart-builder-directives-heading";
    heading_label.setAttributeNode( heading_label_class );
    heading_label.innerText = "Directive";
    style_directives_content_panel.appendChild( heading_label );

    // headers
    var heading_label = document.createElement("div");
    var heading_label_class = document.createAttribute("class");
    heading_label_class.value = "js-chart-builder-directives-heading";
    heading_label.setAttributeNode( heading_label_class );
    style_directives_content_panel.appendChild( heading_label );

    // headers
    var heading_label = document.createElement("div");
    var heading_label_class = document.createAttribute("class");
    heading_label_class.value = "js-chart-builder-directives-heading";
    heading_label.setAttributeNode( heading_label_class );
    heading_label.innerText = "Customize Value";
    style_directives_content_panel.appendChild( heading_label );

    for (var tt = 0; tt < IDEFAULT_DESIGN_TEMPLATES.length; tt++) {
        if(IDEFAULT_DESIGN_TEMPLATES[tt]["name"] == template_name) {
            for (const [ikey, ivalue] of Object.entries(IDEFAULT_DESIGN_TEMPLATES[tt])) {
                if ( ["name", "description"].indexOf( ikey ) == -1) {

                    // add label
                    var option_label = document.createElement("div");
                    var option_label_class = document.createAttribute("class");
                    option_label_class.value = "js-chart-builder-option-label";
                    option_label.setAttributeNode( option_label_class );
                    var option_label_title = document.createAttribute("title");
                    option_label_title.value = ikey;
                    option_label.setAttributeNode( option_label_title );
                    option_label.innerText = ikey + ":";
                    style_directives_content_panel.appendChild( option_label );

                    // add input control
                    var option_checkbox = document.createElement("input");
                    option_checkbox.id = "checkbox_" + ikey;
                    var option_checkbox_type = document.createAttribute("type");
                    option_checkbox_type.value = "CHECKBOX";
                    option_checkbox.setAttributeNode( option_checkbox_type );
                    option_checkbox.addEventListener("change", function () {
                        // check if the input control is disabled or not
                        //if (document.getElementById(ikey).getAttribute("disabled") == null) {
                        //if (!document.getElementById("checkbox_" + ivalue).checked) {

                        if (!document.getElementById("checkbox_" + ikey).checked) {
                            var disabled_attr = document.createAttribute("disabled");
                            disabled_attr.value = "disabled";
                            document.getElementById(ikey).setAttributeNode( disabled_attr );
                        } else {
                            document.getElementById(ikey).removeAttribute("disabled");
                            document.getElementById(ikey).focus();
                        }

                        var this_preview_chart = document.getElementsByClassName("js-chart")[0];
                        var get_attr = this_preview_chart.getElementsByClassName("js-" + (ikey.replaceAll("_", "-")));
                        // add directive
                        if (get_attr.length == 0) {

                            var directive = document.createElement("div");
                            var directive_class = document.createAttribute("class");
                            directive_class.value = "js-" + (ikey.replaceAll("_", "-"));
                            directive.setAttributeNode( directive_class );
                            directive.innerText = ivalue;
                            this_preview_chart.appendChild( directive );

                        }
                    }, false);
                    style_directives_content_panel.appendChild( option_checkbox );

                    // add input control
                    var option_control = document.createElement("input");
                    option_control.id = ikey;
                    var option_control_type = document.createAttribute("type");
                    option_control_type.value = "TEXT";
                    option_control.setAttributeNode( option_control_type );
                    var option_control_disabled = document.createAttribute("disabled");
                    option_control_disabled.value = "disabled";
                    option_control.setAttributeNode( option_control_disabled );
                    if ((chart_type == "bubble") && (ikey == "marker_width")) {
                        option_control.value = "auto";
                    } else if ((chart_type == "bubble") && (ikey == "marker_height")) {
                        option_control.value = "auto";
                    } else if ((chart_type == "bubble") && (ikey == "marker_height")) {
                        option_control.value = "auto";
                    } else if ((chart_type == "treemap") && (ikey == "value_bar_data_margin")) {
                        option_control.value = "0.5px";
                    } else if ((chart_type == "treemap") && (ikey == "datalabel_width")) {
                        option_control.value = "80px";
                    } else if ((chart_type == "treemap") && (ikey == "color_palette")) {
                        option_control.value = "10!hsl(0, 68%, 20%); 30!hsl(0, 68%, 40%); 50!Orange; 70!SkyBlue; 90!YellowGreen";
                    } else if (((chart_type == "box plot") || (chart_type == "horizontal box plot")) && (ikey == "value_bar_data_series")) {
                        option_control.value = "25px";
                    } else if (((chart_type == "box plot") || (chart_type == "horizontal box plot")) && (ikey == "value_line_thickness")) {
                        option_control.value = "2px";
                    } else if (((chart_type == "box plot") || (chart_type == "horizontal box plot")) && (ikey == "value_bar_data_margin")) {
                        option_control.value = "25px";
                    } else if (((chart_type == "box plot") || (chart_type == "horizontal box plot")) && (ikey == "value_bar_border_radius")) {
                        option_control.value = "2px";
                    } else if (((chart_type == "box plot") || (chart_type == "horizontal box plot")) && (ikey == "marker_width")) {
                        option_control.value = "10px";
                    } else if (((chart_type == "box plot") || (chart_type == "horizontal box plot")) && (ikey == "marker_height")) {
                        option_control.value = "10px";
                    } else if (((chart_type == "box plot") || (chart_type == "horizontal box plot")) && (ikey == "marker_border")) {
                        option_control.value = "0.5px solid black";
                    } else if ((chart_type == "parallel coordinates") && (ikey == "value_line_thickness")) {
                        option_control.value = "1.5px";
                    } else if ((chart_type == "parallel coordinates") && (ikey == "color_palette")) {
                        option_control.value = "SteelBlue";
                    } else {
                        option_control.value = ivalue;
                    }
                    option_control.addEventListener("change", function () {
                        var this_preview_chart = document.getElementsByClassName("js-chart")[0];
                        var this_attr = this_preview_chart.getElementsByClassName("js-" + (ikey.replaceAll("_", "-")));

                        this_attr[0].innerText = this.value;

                        setTimeout(initChart, 100, null, "js-chart-builder-preview");
                    }, false);
                    option_control.addEventListener("focus", function () {
                        this.select();
                    }, false);
                    style_directives_content_panel.appendChild( option_control );

                }
            }
        }
    }
    */

    if (search_term.length > 0) {
        document.getElementById("js-chart-builder-search-input").focus();
    }

    return true;
}
// toggle the small help panel
function jsChartBuilderToggleSmallHelpPanel(parent_elem) {

    if (parent_elem.children.length == 0) {

        var help_panel = document.createElement("div");
        var help_panel_class = document.createAttribute("class");
        help_panel_class.value = "js-chart-builder-help-panel";
        help_panel.setAttributeNode( help_panel_class );
        parent_elem.appendChild( help_panel );

        // header label
        var help_panel_label = document.createElement("div");
        var help_panel_label_class = document.createAttribute("class");
        help_panel_label_class.value = "js-chart-builder-help-header-label";
        help_panel_label.setAttributeNode( help_panel_label_class );
        help_panel_label.innerText = parent_elem.nextElementSibling.innerText.substring(0, (parent_elem.nextElementSibling.innerText.length - 1));
        help_panel.appendChild( help_panel_label );

        // help content container
        var help_panel_content_container = document.createElement("div");
        var help_panel_content_container_class = document.createAttribute("class");
        help_panel_content_container_class.value = "js-chart-builder-help-header-content-container";
        help_panel_content_container.setAttributeNode( help_panel_content_container_class );
        help_panel.appendChild( help_panel_content_container );

        // help content
        var help_panel_content = document.createElement("div");
        var help_panel_content_class = document.createAttribute("class");
        help_panel_content_class.value = "js-chart-builder-help-header-content";
        help_panel_content.setAttributeNode( help_panel_content_class );
        help_panel_content.innerHTML = IDEFAULT_CHART_ATTRIBUTES[ parent_elem.nextElementSibling.innerText.substring(0, (parent_elem.nextElementSibling.innerText.length-1)) ].description;
        help_panel_content_container.appendChild( help_panel_content );

    } else {
        for (var tt = (parent_elem.children.length-1); tt >= 0; tt--) {
            parent_elem.children[tt].remove();
        }
    }

    return true;
}
// populate the chart attributes content panel
function jsChartBuilderPopulateChartAttributes(chart_attributes_content_panel, chart_type) {

    for (var tt = (chart_attributes_content_panel.children.length-1); tt >= 0; tt--) {
        chart_attributes_content_panel.children[tt].remove();
    }

    // headers
    var heading_label = document.createElement("div");
    var heading_label_class = document.createAttribute("class");
    heading_label_class.value = "js-chart-builder-directives-heading";
    heading_label.setAttributeNode( heading_label_class );
    chart_attributes_content_panel.appendChild( heading_label );

    // headers
    var heading_label = document.createElement("div");
    var heading_label_class = document.createAttribute("class");
    heading_label_class.value = "js-chart-builder-directives-heading";
    heading_label.setAttributeNode( heading_label_class );
    heading_label.innerText = "Attribute";
    chart_attributes_content_panel.appendChild( heading_label );

    // headers
    var heading_label = document.createElement("div");
    var heading_label_class = document.createAttribute("class");
    heading_label_class.value = "js-chart-builder-directives-heading";
    heading_label.setAttributeNode( heading_label_class );
    chart_attributes_content_panel.appendChild( heading_label );

    // headers
    var heading_label = document.createElement("div");
    var heading_label_class = document.createAttribute("class");
    heading_label_class.value = "js-chart-builder-directives-heading";
    heading_label.setAttributeNode( heading_label_class );
    heading_label.innerText = "Customize Value";
    chart_attributes_content_panel.appendChild( heading_label );

    for (const [ikey, ivalue] of Object.entries(IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ]["supported_options"])) {
        if ( ["class", "type", "version", "template"].indexOf(ivalue) == -1) {

            // default
            // control
            // label
            // description
            // options

            // add help icon
            var help_icon = document.createElement("div");
            help_icon.setAttribute("title", "Explain this chart attribute");
            help_icon.setAttribute("style", "width: 15px; height: 15px; line-height: 15px; margin: 12.5px 0px 0px 0px; border: 0.5px solid black; border-radius: 50%; text-align: center; cursor: pointer;");
            help_icon.addEventListener("click", function () {

                if (this.children.length == 0) {

                    var help_panel = document.createElement("div");
                    var help_panel_class = document.createAttribute("class");
                    help_panel_class.value = "js-chart-builder-help-panel";
                    help_panel.setAttributeNode( help_panel_class );
                    this.appendChild( help_panel );
            
                    // header label
                    var help_panel_label = document.createElement("div");
                    var help_panel_label_class = document.createAttribute("class");
                    help_panel_label_class.value = "js-chart-builder-help-header-label";
                    help_panel_label.setAttributeNode( help_panel_label_class );
                    help_panel_label.innerText = this.nextElementSibling.innerText.substring(0, (this.nextElementSibling.innerText.length - 1));
                    help_panel.appendChild( help_panel_label );
            
                    // help content container
                    var help_panel_content_container = document.createElement("div");
                    var help_panel_content_container_class = document.createAttribute("class");
                    help_panel_content_container_class.value = "js-chart-builder-help-header-content-container";
                    help_panel_content_container.setAttributeNode( help_panel_content_container_class );
                    help_panel.appendChild( help_panel_content_container );
            
                    // help content
                    var help_panel_content = document.createElement("div");
                    var help_panel_content_class = document.createAttribute("class");
                    help_panel_content_class.value = "js-chart-builder-help-header-content";
                    help_panel_content.setAttributeNode( help_panel_content_class );
                    help_panel_content.innerHTML = IDEFAULT_CHART_ATTRIBUTES[ this.nextElementSibling.innerText.substring(0, (this.nextElementSibling.innerText.length-1)) ].description;
                    help_panel_content_container.appendChild( help_panel_content );
            
                } else {
                    for (var tt = (this.children.length-1); tt >= 0; tt--) {
                        this.children[tt].remove();
                    }
                }

                if (chart_attributes_content_panel.children.length > 0) {
                    for (var tt = (chart_attributes_content_panel.getElementsByClassName("js-chart-builder-help-panel").length - 1); tt >= 0; tt--) {
                        chart_attributes_content_panel.getElementsByClassName("js-chart-builder-help-panel")[tt].remove();
                    }

                    var pop_help = jsChartBuilderToggleSmallHelpPanel(this);
                }

            }, false);
            help_icon.innerText = "?";
            chart_attributes_content_panel.appendChild( help_icon );

            // add label
            var option_label = document.createElement("div");
            var option_label_class = document.createAttribute("class");
            option_label_class.value = "js-chart-builder-option-label";
            option_label.setAttributeNode( option_label_class );
            var option_label_title = document.createAttribute("title");
            option_label_title.value = ivalue;
            option_label.setAttributeNode( option_label_title );
            option_label.innerText = ivalue + ":";
            chart_attributes_content_panel.appendChild( option_label );

            // add checkbox
            var option_checkbox = document.createElement("input");
            var option_checkbox_type = document.createAttribute("type");
            option_checkbox_type.value = "CHECKBOX";
            option_checkbox.setAttributeNode( option_checkbox_type );
            option_checkbox.addEventListener("change", function () {

                if (this.checked) {
                    this.nextElementSibling.disabled = false;
                } else {
                    this.nextElementSibling.disabled = true;
                }
                this.nextElementSibling.focus();

            }, false);
            chart_attributes_content_panel.appendChild( option_checkbox );

            if (typeof BUILDER_DEFAULTS.chart_attributes[ chart_type ] != "undefined") {
                if (typeof BUILDER_DEFAULTS.chart_attributes[ chart_type ][ ivalue ] != "undefined") {
                    var cell_value = BUILDER_DEFAULTS.chart_attributes[ chart_type ][ ivalue ];
                } else {
                    var cell_value = IDEFAULT_CHART_ATTRIBUTES[ ivalue ].default;
                }
            } else {
                var cell_value = IDEFAULT_CHART_ATTRIBUTES[ ivalue ].default;
            }

            // add input control
            switch ( IDEFAULT_CHART_ATTRIBUTES[ ivalue ].control) {

                // text
                case "text":
                    var option_textbox = document.createElement("input");
                    var option_textbox_type = document.createAttribute("type");
                    option_textbox_type.value = "TEXT";
                    option_textbox.setAttributeNode( option_textbox_type );
                    var option_textbox_disabled = document.createAttribute("disabled");
                    option_textbox_disabled.value = "disabled";
                    option_textbox.setAttributeNode( option_textbox_disabled );
                    option_textbox.addEventListener("change", function () {
                        var preview_chart = document.getElementById("js-chart-builder-preview");
                        if (preview_chart.getAttribute(ivalue) != this.value) {
                            preview_chart.setAttribute(ivalue, this.value);
                            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
                        }
                    }, false);
                    option_textbox.addEventListener("focus", function () {
                        this.select();
                    }, false);
                    option_textbox.value = cell_value;
                    chart_attributes_content_panel.appendChild( option_textbox );

                    break;
                // dropdown
                case "dropdown":
                    var option_dropdown = document.createElement("select");
                    var option_dropdown_disabled = document.createAttribute("disabled");
                    option_dropdown_disabled.value = "disabled";
                    option_dropdown.setAttributeNode( option_dropdown_disabled );
                    var option_dropdown_style = document.createAttribute("style");
                    option_dropdown_style.value = "width: 100%;";
                    option_dropdown.setAttributeNode( option_dropdown_style );
                    option_dropdown.addEventListener("change", function () {
                        var preview_chart = document.getElementById("js-chart-builder-preview");
                        if (preview_chart.getAttribute(ivalue) != this.value) {
                            preview_chart.setAttribute(ivalue, this.value);
                            var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
                        }
                    }, false);
                    chart_attributes_content_panel.appendChild( option_dropdown );

                    for (var tt = 0; tt < IDEFAULT_CHART_ATTRIBUTES[ ivalue ].options.length; tt++) {

                        var option_option = document.createElement("option");
                        option_option.value = IDEFAULT_CHART_ATTRIBUTES[ ivalue ].options[tt];
                        option_option.innerHTML = IDEFAULT_CHART_ATTRIBUTES[ ivalue ].options[tt];

                        if (typeof BUILDER_DEFAULTS.chart_attributes[ chart_type ] != "undefined") {
                            if (typeof BUILDER_DEFAULTS.chart_attributes[ chart_type ][ ivalue ] != "undefined") {
                                var compare_option = BUILDER_DEFAULTS.chart_attributes[ chart_type ][ ivalue ];
                            } else {
                                var compare_option = IDEFAULT_CHART_ATTRIBUTES[ ivalue ].default;
                            }
                        } else {
                            var compare_option = IDEFAULT_CHART_ATTRIBUTES[ ivalue ].default;
                        }

                        if (compare_option == IDEFAULT_CHART_ATTRIBUTES[ ivalue ].options[tt]) {
                            var option_selected = document.createAttribute("selected");
                            option_selected.value = "selected";
                            option_option.setAttributeNode( option_selected );
                        }

                        /*
                        if (typeof BUILDER_DEFAULTS.chart_attributes[ chart_type ] != "undefined") {
                            if (typeof BUILDER_DEFAULTS.chart_attributes[ chart_type ][ ivalue ] != "undefined") {
                                if (BUILDER_DEFAULTS.chart_attributes[ chart_type ][ ivalue ] == IDEFAULT_CHART_ATTRIBUTES[ ivalue ].options[tt]) {
                                    var option_selected = document.createAttribute("selected");
                                    option_selected.value = "selected";
                                    option_option.setAttributeNode( option_selected );
                                }
                            }
                        } else if (IDEFAULT_CHART_ATTRIBUTES[ ivalue ].default == IDEFAULT_CHART_ATTRIBUTES[ ivalue ].options[tt]) {
                            var option_selected = document.createAttribute("selected");
                            option_selected.value = "selected";
                            option_option.setAttributeNode( option_selected );
                        }
                        */

                        option_dropdown.appendChild( option_option );

                    }

                    break;
            }

            /*
            // add label
            var option_label = document.createElement("div");
            var option_label_class = document.createAttribute("class");
            option_label_class.value = "js-chart-builder-option-label";
            option_label.setAttributeNode( option_label_class );
            var option_label_title = document.createAttribute("title");
            option_label_title.value = ivalue;
            option_label.setAttributeNode( option_label_title );
            option_label.innerText = ivalue + ":";
            chart_attributes_content_panel.appendChild( option_label );

            // add checkbox
            var option_checkbox = document.createElement("input");
            option_checkbox.id = "checkbox_" + ivalue;
            var option_checkbox_type = document.createAttribute("type");
            option_checkbox_type.value = "CHECKBOX";
            option_checkbox.setAttributeNode( option_checkbox_type );
            //if (["title"].indexOf( ivalue ) > -1) {
            //    var option_checkbox_checked = document.createAttribute("checked");
            //    option_checkbox_checked.value = "checked";
            //    option_checkbox.setAttributeNode( option_checkbox_checked );
            //}
            option_checkbox.addEventListener("change", function () {

                var this_attr = document.getElementById("js-chart-attr-" + (ivalue.replaceAll("_", "-")));
                //if (this_attr.getAttribute("disabled") == null) {
                if (!document.getElementById("checkbox_" + ivalue).checked) {
                    var attr_disabled = document.createAttribute("disabled");
                    attr_disabled.value = "disabled";
                    this_attr.setAttributeNode( attr_disabled );
                } else {
                    this_attr.removeAttribute("disabled");
                    this_attr.focus();
                    //document.getElementById("js-chart-attr-" + (ivalue.replaceAll("_", "-"))).focus();
                    //document.getElementById("js-chart-attr-" + (ivalue.replaceAll("_", "-"))).select();
                }

                var preview_chart = document.getElementsByClassName("js-chart")[0];
                preview_chart.setAttribute(ivalue, this_attr.value);

            }, false);
            chart_attributes_content_panel.appendChild( option_checkbox );

            var option_control = document.createElement("input");
            option_control.id = "js-chart-attr-" + (ivalue.replaceAll("_", "-"));
            var option_control_type = document.createAttribute("type");
            option_control_type.value = "TEXT";
            option_control.setAttributeNode( option_control_type );
            var option_control_disabled = document.createAttribute("disabled");
            option_control_disabled.value = "disabled";
            option_control.setAttributeNode( option_control_disabled );
            if (typeof BUILDER_DEFAULTS.chart_attributes[ chart_type ] != "undefined") {
                if (typeof BUILDER_DEFAULTS.chart_attributes[ chart_type ][ ivalue ] != "undefined") {
                    option_control.value = BUILDER_DEFAULTS.chart_attributes[ chart_type ][ ivalue ];
                } else {
                    option_control.value = IDEFAULT_CHART_ATTRIBUTES[ ivalue ].default;
                }
            } else {
                option_control.value = IDEFAULT_CHART_ATTRIBUTES[ ivalue ].default;
            }
            chart_attributes_content_panel.appendChild( option_control );
            */

            /*
            // add input control
            switch(IDEFAULT_CHART_ATTRIBUTES[ivalue].control) {

                // text
                case "text":
                    var option_control = document.createElement("input");
                    option_control.id = "js-chart-attr-" + (ivalue.replaceAll("_", "-"));
                    var option_control_type = document.createAttribute("type");
                    option_control_type.value = "TEXT";
                    option_control.setAttributeNode( option_control_type );
                    var option_control_disabled = document.createAttribute("disabled");
                    option_control_disabled.value = "disabled";
                    option_control.setAttributeNode( option_control_disabled );

                    break;
                // dropdown
                case "dropdown":
                    var option_control = document.createElement("select");
                    option_control.id = "js-chart-attr-" + (ivalue.replaceAll("_", "-"));
                    var option_control_style = document.createAttribute("style");
                    option_control_style.value = "width: 100%; font-size: 11px;";
                    option_control.setAttributeNode( option_control_style );
                    var option_control_disabled = document.createAttribute("disabled");
                    option_control_disabled.value = "disabled";
                    option_control.setAttributeNode( option_control_disabled );

                    if (IDEFAULT_CHART_ATTRIBUTES[ ivalue ].options) {

                        for (const [hkey, hvalue] of Object.entries(IDEFAULT_CHART_ATTRIBUTES[ ivalue ].options)) {

                            var dropdown_option = document.createElement("option");
                            dropdown_option.value = hvalue;
                            dropdown_option.innerText = hvalue;
                            if (hvalue == IDEFAULT_CHART_ATTRIBUTES[ ivalue ].default) {
                                var dropdown_option_selected = document.createAttribute("selected");
                                dropdown_option_selected.value = "selected";
                                dropdown_option.setAttributeNode( dropdown_option_selected );
                            }
                            option_control.appendChild( dropdown_option );

                        }

                    }

                    break;
                // checkbox
                case "checkbox":
                    var option_control = document.createElement("input");
                    option_control.id = "js-chart-attr-" + (ivalue.replaceAll("_", "-"));
                    var option_control_type = document.createAttribute("type");
                    option_control_type.value = "TEXT";
                    option_control.setAttributeNode( option_control_type );
                    var option_control_disabled = document.createAttribute("disabled");
                    option_control_disabled.value = "disabled";
                    option_control.setAttributeNode( option_control_disabled );

                    break;
            }

            //option_control.value = IDEFAULT_CHART_ATTRIBUTES[ ivalue ].default;
            if (ivalue == "title") {
                if (chart_type == "heatmap") {
                    option_control.value = BUILDER_DEFAULTS.data.heatmap.chart_title;
                } else if (chart_type == "parallel coordinates") {
                    option_control.value = BUILDER_DEFAULTS.data["parallel coordinates"].chart_title;
                } else {
                    option_control.value = BUILDER_DEFAULTS.data[ IDEFAULT_CHART_TYPE_OPTIONS[ chart_type ].data_type ].chart_title;
                }
            } else if ((chart_type == "bubble") && (ivalue == "showlabels")) {
                option_control.value = "off";
            } else if ((chart_type == "treemap") && (ivalue == "sortdata")) {
                option_control.value = "on";
            } else if ((chart_type == "treemap") && (ivalue == "drawalg")) {
                option_control.value = "portrait quad";
            } else if (((chart_type == "box plot") || (chart_type == "horizontal box plot")) && (ivalue == "showlegend")) {
                option_control.value = "off";
            } else {
                option_control.value = IDEFAULT_CHART_ATTRIBUTES[ ivalue ].default;
            }

            option_control.addEventListener("change", function () {
                var preview_chart = document.getElementsByClassName("js-chart")[0];
                preview_chart.setAttribute(ivalue, this.value);
                setTimeout(initChart, 100, null, "js-chart-builder-preview");
            }, false);
            option_control.addEventListener("focus", function () {
                this.select();
            }, false);
            chart_attributes_content_panel.appendChild( option_control );
            */

        }
    }

    return true;
}
// toggle between the chart attr and style directives content panels
function jsChartBuilderToggleContentPanels(label) {
    if (label == "chart attributes") {
        document.getElementsByClassName("js-chart-builder-style-directives-content-panel")[0].style.height = "0px";
        document.getElementsByClassName("js-chart-builder-chart-attr-content-panel")[0].style.height = "100%";
    } else {
        document.getElementsByClassName("js-chart-builder-chart-attr-content-panel")[0].style.height = "0px";
        document.getElementsByClassName("js-chart-builder-style-directives-content-panel")[0].style.height = "100%";
    }

    return true;
}
// close the builder main window
function jsChartBuilderClose() {
    
    var this_builder = document.getElementsByClassName("js-chart-builder");
    if (this_builder.length == 1) {
        if (confirm("Are you sure you want to close builder?\n\nAll changes will be lost.")) {
            this_builder[0].remove();
        }

        return true;
    } else {
        return false;
    }
}
// generate and return the main help content - overview
function jsChartBuilderOpenMainHelpOverview(menu_conf) {

    document.getElementsByClassName("js-chart-builder-main-help-header-title")[0].innerText = "Help - Overview";

    return "<h1 style=\"margin: 0px 0px 10px 0px;\">Overview</h1>\
<p>Welcome to <span style=\"font-style: italic;\">js-chart-builder</span>! Let's take a quick tour.</p>\
<p><span style=\"font-style: italic;\">js-chart-builder</span> lets you quickly build prototype charts using <span style=\"font-style: italic;\">js-charts</span>. You can <strong>export</strong> the chart using the <strong>export button</strong>, and then easily copy the chart onto your HTML website.</p>\
<p><span style=\"font-style: italic;\">js-charts</span> uses JavaScript (js) and Cascading Style Sheets (css) - that is present in all modern  browsers - to build simple but highly customisable charts.</p>\
<p><span style=\"font-style: italic;\">js-chart-builder</span> consists of <strong>four</strong> components:\
<h2>Chart Attributes</h2>\
<p><strong>Chart attributes</strong> specify what type of chart it is, and how a chart behaves.</p>\
<h2>Style Directives</h2>\
<p>The way that a chart looks is determined by pre-defined <strong>style templates</strong>. Every aspect of the style template can be customised using <strong>style directives</strong>. The <strong>style directives</strong> section allows you to customise every component of your chart.</p>\
<h2>Input Data</h2>\
<p>The <strong>input data</strong> section allows you to specify one or more data sets for your chart.</p>\
<h2>Preview Chart</h2>\
<p>Every change that you make is reflected on the <strong>preview chart</strong>.\
</p>\
";
}
// generate and return the main help content - chart attributes
function jsChartBuilderOpenMainHelpChartAttributes(menu_conf) {

    document.getElementsByClassName("js-chart-builder-main-help-header-title")[0].innerText = "Help - Chart Attributes";

    var return_chart_attributes = "<h1 style=\"margin: 0px 0px 10px 0px;\">Chart Attributes</h1>\
<p>You can specify the type of chart to render, and how a chart behaves using <strong>chart attributes</strong>.\
<p>Visit <a href=\"" + menu_conf.docs.link + "\" title=\"Open in a new window\" target=\"_blank\">" + menu_conf.docs.text + "</a> for detailed information on every <strong>chart attribute</strong>.</p>\
";

    var grid_container = document.createElement("div");
    var grid_container_class = document.createAttribute("class");
    grid_container_class.value = "js-chart-builder-chart-attr-grid-container";
    grid_container.setAttributeNode( grid_container_class );

    for (const [ikey, ivalue] of Object.entries( IDEFAULT_CHART_ATTRIBUTES )) {
        if (ikey != "class") {

            var grid_cell = document.createElement("div");
            var grid_cell_class = document.createAttribute("class");
            grid_cell_class.value = "js-chart-builder-chart-attr-grid-cell";
            grid_cell.setAttributeNode( grid_cell_class );
            grid_cell.innerHTML = "<div style=\"text-align: center;\"><a href=\"https://js-charts.com/docs/chart-attributes/" + ikey + "\" target=\"_blank\">" + ikey + "</a></div><div style=\"margin: 5px 0px 0px 0px; font-size: 12px;\">" + ivalue.description + "</div>";
            grid_container.appendChild( grid_cell );

        }
    }

    return_chart_attributes += grid_container.outerHTML;

return return_chart_attributes;
}
// generate and return the main help content - style templates
function jsChartBuilderOpenMainHelpStyleTemplates(menu_conf) {

    document.getElementsByClassName("js-chart-builder-main-help-header-title")[0].innerText = "Help - Style Templates";

    var return_style_templates = "<h1 style=\"margin: 0px 0px 10px 0px;\">Style Templates</h1>\
";

    return return_style_templates;
}
// generate and return the main help content - chart attributes
function jsChartBuilderOpenMainHelpStyleDirectives(menu_conf) {

    document.getElementsByClassName("js-chart-builder-main-help-header-title")[0].innerText = "Help - Style Directives";

    var return_style_directives = "<h1 style=\"margin: 0px 0px 10px 0px;\">Style Directives</h1>\
<p>The way that a chart looks is determined by pre-defined <strong>style templates</strong>. Every aspect of the style template can be customised using <strong>style directives</strong>. The style directives section allows you to customise every component of your chart.</p>\
<p>Visit <a href=\"" + menu_conf.docs.link + "\" title=\"Open in a new window\" target=\"_blank\">" + menu_conf.docs.text + "</a> for detailed information on every <strong>style directive</strong>.</p>\
<div style=\"display: grid; grid-template-columns: 20% 30% 50%; grid-auto-rows: auto;\">\
    <div style=\"text-align: center; border-radius: 5px 0px 0px 0px; padding: 10px; font-size: 14px; font-weight: 400; background-color: cadetblue; color: white;\">Category</div>\
    <div style=\"text-align: center; padding: 10px; font-size: 14px; font-weight: 400; background-color: cadetblue; color: white;\">Example</div>\
    <div style=\"text-align: center; border-radius: 0px 5px 0px 0px; padding: 10px; font-size: 14px; font-weight: 400; background-color: cadetblue; color: white;\">Description</div>\
\
    <!-- js-canvas-* -->\
    <div style=\"font-size: 16px; margin: 10px 0px 0px 0px;\"><a href=\"https://js-charts.com/docs/style-directives/js-canvas\" target=\"_blank\" title=\"Open in a new window\">js-canvas-*</a></div>\
    <div style=\"margin: 10px 0px 0px 0px;\"><img src=\"/js-canvas-example.jpg\" width=\"250\" height=\"150\" /></div>\
    <div style=\"margin: 0px 0px 0px 10px;\">\
        <p>The <strong>js-canvas-*</strong> style template elements are used to style the chart canvas area. The chart canvas area is the area of the cart excluding the following elements:</p>\
        <li>Chart title</li>\
        <li>Control buttons</li>\
        <li>Legend</li>\
        <li>Footer</li>\
    </div>\
    <div style=\"grid-column: 1 / 4; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- js-chart-* -->\
    <div style=\"font-size: 16px;\"><a href=\"https://js-charts.com/docs/style-directives/js-chart\" target=\"_blank\" title=\"Open in a new window\">js-chart-*</a></div>\
    <div><img src=\"/js-chart-example.jpg\" width=\"250\" height=\"150\" /></div>\
    <div style=\"margin: 0px 0px 0px 10px;\">\
        <p>You can use the <strong>js-chart-*</strong> style template directives to set default style directives for your chart.Style directives set with the chart style directives are inherited by all other style directives.</p>\
        <p>Default style directives can be set for the <strong>font-family</strong>, <strong>font-size</strong>, <strong>font-weight</strong>, <strong>bg-color</strong>, <strong>text-color</strong>, <strong>border</strong>, <strong>border-radius</strong>, <strong>box-shadow</strong> and <strong>opacity</strong>.</p>\
    </div>\
    <div style=\"grid-column: 1 / 4; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- js-color-* -->\
    <div style=\"font-size: 16px;\"><a href=\"https://js-charts.com/docs/style-directives/js-color\" target=\"_blank\" title=\"Open in a new window\">js-color-*</a></div>\
    <div><img src=\"/js-color-example.jpg\" width=\"250\" height=\"150\" /></div>\
    <div style=\"margin: 0px 0px 0px 10px;\">\
        <p>The <strong>js-color-*</strong> style template directives are used to control the colors that are available to be used on a chart.</p>\
    </div>\
    <div style=\"grid-column: 1 / 4; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- js-control-button-* -->\
    <div style=\"font-size: 16px;\"><a href=\"https://js-charts.com/docs/style-directives/js-control-button\" target=\"_blank\" title=\"Open in a new window\">js-control-button-*</a></div>\
    <div><img src=\"/js-control-button-example.jpg\" width=\"250\" height=\"150\" /></div>\
    <div style=\"margin: 0px 0px 0px 10px;\">\
        <p>The <strong>js-control-button-*</strong> style template directives are used to style the control buttons on a chart. The control buttons are rendered on the left of the chart container.</p>\
    </div>\
    <div style=\"grid-column: 1 / 4; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- js-datalabel-* -->\
    <div style=\"font-size: 16px;\"><a href=\"https://js-charts.com/docs/style-directives/js-datalabel\" target=\"_blank\" title=\"Open in a new window\">js-datalabel-*</a></div>\
    <div><img src=\"/js-datalabel-example.jpg\" width=\"250\" height=\"150\" /></div>\
    <div style=\"margin: 0px 0px 0px 10px;\">\
        <p>The <strong>js-datalabel-*</strong> style template elements are used to style the data labels on a chart. Data labels are rendered in proximity of the data points on the chart, or in the section of the chart that represents the data.</p>\
    </div>\
    <div style=\"grid-column: 1 / 4; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- js-footer-* -->\
    <div style=\"font-size: 16px;\"><a href=\"https://js-charts.com/docs/style-directives/js-footer\" target=\"_blank\" title=\"Open in a new window\">js-footer-*</a></div>\
    <div><img src=\"/js-footer-example.jpg\" width=\"250\" height=\"150\" /></div>\
    <div style=\"margin: 0px 0px 0px 10px;\">\
        <p>The <strong>js-footer-*</strong> style template directives are used to style a chart's footer area. The chart footer is rendered on the bottom of the chart container.</p>\
        <p>The footer can be used to display any static text to the end user. This is useful if you want to include a copyright notice, or if you want to include instructions or special notes to the end user regarding the chart.</p>\
        <p>The footer text will be truncated if the text cannot fit into the available space. If the footer text is truncated, an ellipsis (…) will be added to the end of the truncated footer text.</p>\
    </div>\
    <div style=\"grid-column: 1 / 4; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- js-grid-line-* -->\
    <div style=\"font-size: 16px;\"><a href=\"https://js-charts.com/docs/style-directives/js-grid-line\" target=\"_blank\" title=\"Open in a new window\">js-grid-line-*</a></div>\
    <div><img src=\"/js-grid-line-example.jpg\" width=\"250\" height=\"150\" /></div>\
    <div style=\"margin: 0px 0px 0px 10px;\">\
        <p>The <strong>js-grid-line-*</strong> style directives are used to style a chart’s grid lines.</p>\
    </div>\
    <div style=\"grid-column: 1 / 4; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- js-legend-* -->\
    <div style=\"font-size: 16px;\"><a href=\"https://js-charts.com/docs/style-directives/js-legend\" target=\"_blank\" title=\"Open in a new window\">js-legend-*</a></div>\
    <div><img src=\"/js-legend-example.jpg\" width=\"250\" height=\"150\" /></div>\
    <div style=\"margin: 0px 0px 0px 10px;\">\
        <p>The <strong>js-legend-*</strong> style directives are used to style a chart’s legend. The legend can be rendered to the right or bottom of the chart.</p>\
    </div>\
    <div style=\"grid-column: 1 / 4; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- js-marker-* -->\
    <div style=\"font-size: 16px;\"><a href=\"https://js-charts.com/docs/style-directives/js-marker\" target=\"_blank\" title=\"Open in a new window\">js-marker-*</a></div>\
    <div><img src=\"/js-marker-example.jpg\" width=\"250\" height=\"150\" /></div>\
    <div style=\"margin: 0px 0px 0px 10px;\">\
        <p>The <strong>js-marker-*</strong> style template elements are used to style markers on the following charts:\
            <li>Scatter chart</li>\
            <li>Line chart</li>\
            <li>Stacked line chart</li>\
            <li>100% Stacked line chart</li>\
        </p>\
    </div>\
    <div style=\"grid-column: 1 / 4; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- js-not-defined-* -->\
    <div style=\"font-size: 16px;\"><a href=\"https://js-charts.com/docs/style-directives/js-not-defined\" target=\"_blank\" title=\"Open in a new window\">js-not-defined-*</a></div>\
    <div><img src=\"/js-not-defined-example.jpg\" width=\"250\" height=\"150\" /></div>\
    <div style=\"margin: 0px 0px 0px 10px;\">\
        <p>The <strong>js-not-defined-*</strong> style template directive controls how “missing” or “not defined” values are displayed on certain charts.</p>\
    </div>\
    <div style=\"grid-column: 1 / 4; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- js-options-menu-* -->\
    <div style=\"font-size: 16px;\"><a href=\"https://js-charts.com/docs/style-directives/js-options-menu\" target=\"_blank\" title=\"Open in a new window\">js-options-menu-*</a></div>\
    <div><img src=\"/js-options-menu-example.jpg\" width=\"250\" height=\"150\" /></div>\
    <div style=\"margin: 0px 0px 0px 10px;\">\
        <p>The <strong>js-options-menu-*</strong> style template directives are used to style the chart options menu.</p>\
        <p>The chart options menu allows the end-user to make adjustments to the chart, e.g. swapping the axis to display the data differently.</p>\
        <p>The options menu title area can be styled separately from the options menu elements.</p>\
    </div>\
    <div style=\"grid-column: 1 / 4; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- js-scale-* -->\
    <div style=\"font-size: 16px;\"><a href=\"https://js-charts.com/docs/style-directives/js-scale\" target=\"_blank\" title=\"Open in a new window\">js-scale-*</a></div>\
    <div><img src=\"/js-scale-example.jpg\" width=\"250\" height=\"150\" /></div>\
    <div style=\"margin: 0px 0px 0px 10px;\">\
        <p>The <strong>js-scale-*</strong> style template directives are used to style the chart scales and scale labels.</p>\
    </div>\
    <div style=\"grid-column: 1 / 4; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- js-title-* -->\
    <div style=\"font-size: 16px;\"><a href=\"https://js-charts.com/docs/style-directives/js-title\" target=\"_blank\" title=\"Open in a new window\">js-title-*</a></div>\
    <div><img src=\"/js-title-example.jpg\" width=\"250\" height=\"150\" /></div>\
    <div style=\"margin: 0px 0px 0px 10px;\">\
        <p>The <strong>js-title-*</strong> style template directives are used customise the look of the chart title.</p>\
    </div>\
    <div style=\"grid-column: 1 / 4; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- js-value-bar-* -->\
    <div style=\"font-size: 16px;\"><a href=\"https://js-charts.com/docs/style-directives/js-value-bar\" target=\"_blank\" value-bar=\"Open in a new window\">js-value-bar-*</a></div>\
    <div><img src=\"/js-value-bar-example.jpg\" width=\"250\" height=\"150\" /></div>\
    <div style=\"margin: 0px 0px 0px 10px;\">\
        <p>The <strong>js-value-bar-*</strong> style template directives are used to style the value bar elements on a chart. Value bar elements usually refer to block-shaped elements that represent data or data points on a chart.</p>\
    </div>\
    <div style=\"grid-column: 1 / 4; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- js-value-line-* -->\
    <div style=\"font-size: 16px;\"><a href=\"https://js-charts.com/docs/style-directives/js-value-line\" target=\"_blank\" value-line=\"Open in a new window\">js-value-line-*</a></div>\
    <div><img src=\"/js-value-line-example.jpg\" width=\"250\" height=\"150\" /></div>\
    <div style=\"margin: 0px 0px 0px 10px;\">\
        <p>The <strong>js-value-line-*</strong> style template directives are used to style the value line elements on a chart. Value line elements refer to line-shaped elements that represent data or data points on a chart.</p>\
    </div>\
    <div style=\"grid-column: 1 / 4; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- js-zero-line-* -->\
    <div style=\"font-size: 16px;\"><a href=\"https://js-charts.com/docs/style-directives/js-zero-line\" target=\"_blank\" zero-line=\"Open in a new window\">js-zero-line-*</a></div>\
    <div><img src=\"/js-zero-line-example.jpg\" width=\"250\" height=\"150\" /></div>\
    <div style=\"margin: 0px 0px 0px 10px;\">\
        <p>The <strong>js-zero-line-*</strong> style template directives are used to style a chart's zero lines (also called axis lines).</p>\
    </div>\
    <div style=\"grid-column: 1 / 4; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
";

return return_style_directives;
}
// generate and return the main help content - chart attributes
function jsChartBuilderOpenMainHelpStyleDirectiveVariables(menu_conf) {

    document.getElementsByClassName("js-chart-builder-main-help-header-title")[0].innerText = "Help - Style Variables";

    var return_style_variables = "<h1 style=\"margin: 0px 0px 10px 0px;\">Style Variables</h1>\
<p>The following pre-defined <strong>style template</strong> & <strong>style directive variables</strong>. These pre-defined variables can be used on your own custom <strong>style directives</strong>.</p>\
<p style=\"padding: 10px 15px 10px 15px; background-color: #ffffe6; color: black; border: 0.5px solid black; border-radius: 3px;\">Style variables must be enclosed in the CSS function <span style=\"background-color: #dcdcdc; font-family: Arial; font-size: 16px; padding: 3px;\">var()</span>.</p>\
<div style=\"display: grid; grid-template-columns: 60% 40%; grid-auto-rows: auto; margin: 0px 100px 0px 100px;\">\
    <div style=\"text-align: center; border-radius: 5px 0px 0px 0px; padding: 10px; font-size: 14px; font-weight: 400; background-color: cadetblue; color: white;\">Variable</div>\
    <div style=\"text-align: center; border-radius: 0px 5px 0px 0px; padding: 10px; font-size: 14px; font-weight: 400; background-color: cadetblue; color: white;\">Value</div>\
\
    <div style=\"padding: 10px;\">var(--js-chart-size-xxsmall)</div>\
    <div style=\"padding: 10px; text-align: center; font-size: 9px;\">9px</div>\
\
    <div style=\"padding: 10px;\">var(--js-chart-size-xsmall)</div>\
    <div style=\"padding: 10px; text-align: center; font-size: 10px;\">10px</div>\
\
    <div style=\"padding: 10px;\">var(--js-chart-size-small)</div>\
    <div style=\"padding: 10px; text-align: center; font-size: 11px;\">11px</div>\
\
    <div style=\"padding: 10px;\">var(--js-chart-size-normal)</div>\
    <div style=\"padding: 10px; text-align: center; font-size: 12px;\">12px</div>\
\
    <div style=\"padding: 10px;\">var(--js-chart-size-large)</div>\
    <div style=\"padding: 10px; text-align: center; font-size: 14px;\">14px</div>\
\
    <div style=\"padding: 10px;\">var(--js-chart-size-xlarge)</div>\
    <div style=\"padding: 10px; text-align: center; font-size: 16px;\">16px</div>\
\
    <div style=\"padding: 10px;\">var(--js-chart-size-xxlarge)</div>\
    <div style=\"padding: 10px; text-align: center; font-size: 20px;\">20px</div>\
\
</div>\
<p>Additionally, the following variables can be used.</p>\
<div style=\"display: grid; grid-template-columns: 40% 20% 40%; grid-auto-rows: auto; margin: 0px 0px 20px 0px;\">\
    <div style=\"text-align: center; border-radius: 5px 0px 0px 0px; padding: 10px; font-size: 14px; font-weight: 400; background-color: cadetblue; color: white;\">Variable</div>\
    <div style=\"text-align: center; padding: 10px; font-size: 14px; font-weight: 400; background-color: cadetblue; color: white;\">Value</div>\
    <div style=\"text-align: center; border-radius: 0px 5px 0px 0px; padding: 10px; font-size: 14px; font-weight: 400; background-color: cadetblue; color: white;\">Description</div>\
\
    <div style=\"padding: 10px; text-wrap-mode: nowrap;\">var(--js-chart-common-base-title-height)</div>\
    <div style=\"padding: 10px; text-align: center;\">30px</div>\
    <div style=\"padding: 10px;\">When a chart title is defined, this variable is set to the height of the <strong>chart title area</strong>.</div>\
\
    <div style=\"padding: 10px; text-wrap-mode: nowrap;\">var(--js-chart-common-base-datatable-height)</div>\
    <div style=\"padding: 10px; text-align: center;\">60px</div>\
    <div style=\"padding: 10px;\">When a chart's data table is rendered, this variable is set to the height of the <strong>chart data table area</strong>.</div>\
\
    <div style=\"padding: 10px; text-wrap-mode: nowrap;\">var(--js-chart-common-base-footer-height)</div>\
    <div style=\"padding: 10px; text-align: center;\">15px</div>\
    <div style=\"padding: 10px;\">When a chart's footer is rendered, this variable is set to the height of the <strong>chart footer area</strong>.</div>\
\
    <div style=\"padding: 10px; text-wrap-mode: nowrap;\">var(--js-chart-common-control-panel-width)</div>\
    <div style=\"padding: 10px; text-align: center;\">30px</div>\
    <div style=\"padding: 10px;\">When a chart's control buttons are rendered, this variable is set to the width of the <strong>chart control button area</strong>.</div>\
\
    <div style=\"padding: 10px; text-wrap-mode: nowrap;\">var(--js-chart-common-legend-width)</div>\
    <div style=\"padding: 10px; text-align: center;\">30px</div>\
    <div style=\"padding: 10px;\">When a chart's legend is rendered on the side, this variable is set to the width of the <strong>chart legend area</strong>.</div>\
\
    <div style=\"padding: 10px; text-wrap-mode: nowrap;\">var(--js-chart-common-legend-height)</div>\
    <div style=\"padding: 10px; text-align: center;\">30px</div>\
    <div style=\"padding: 10px;\">When a chart's legend is rendered on the bottom, this variable is set to the height of the <strong>chart legend area</strong>.</div>\
\
</div>\
";

return return_style_variables;
}
// generate and return the main help content - chart attributes
function jsChartBuilderOpenMainHelpInputData(menu_conf) {

    document.getElementsByClassName("js-chart-builder-main-help-header-title")[0].innerText = "Help - Input Data";

    var return_input_data = "<h1 style=\"margin: 0px 0px 10px 0px;\">Input Data</h1>\
<p><span style=\"font-style: italic;\">js-charts</span> supports the following input data types.</p>\
<div style=\"display: grid; grid-template-columns: auto auto auto auto; grid-auto-rows: auto; margin: 0px 0px 20px 0px;\">\
    <div style=\"text-align: center; border-radius: 5px 0px 0px 0px; padding: 10px; font-size: 14px; font-weight: 400; background-color: cadetblue; color: white;\">Data Type</div>\
    <div style=\"text-align: center; padding: 10px; font-size: 14px; font-weight: 400; background-color: cadetblue; color: white;\">Input Container(s)</div>\
    <div style=\"text-align: center; padding: 10px; font-size: 14px; font-weight: 400; background-color: cadetblue; color: white;\">Used By</div>\
    <div style=\"text-align: center; border-radius: 0px 5px 0px 0px; padding: 10px; font-size: 14px; font-weight: 400; background-color: cadetblue; color: white;\">Description</div>\
\
    <!-- categorical -->\
    <div style=\"font-weight: 600;\"><p>Categorical</p></div>\
    <div style=\" text-align: center;\">\
        <p><div class=\"js-code-block\">js-values</div></p>\
    </div>\
    <div>\
        <p>\
            <li><a href=\"/docs/charts/bar/\" title=\"Open in a new window\" target=\"_blank\">Bar Chart</a></li>\
            <li><a href=\"/docs/charts/column/\" title=\"Open in a new window\" target=\"_blank\">Column Chart</a></li>\
            <li><a href=\"/docs/charts/doughnut/\" title=\"Open in a new window\" target=\"_blank\">Doughnut Chart</a></li>\
            <li><a href=\"/docs/charts/funnel/\" title=\"Open in a new window\" target=\"_blank\">Funnel Chart</a></li>\
            <li><a href=\"/docs/charts/heatmap/\" title=\"Open in a new window\" target=\"_blank\">Heatmap</a></li>\
            <li><a href=\"/docs/charts/line/\" title=\"Open in a new window\" target=\"_blank\">Line Chart</a></li>\
            <li><a href=\"/docs/charts/lollipop/\" title=\"Open in a new window\" target=\"_blank\">Lollipop Chart</a></li>\
            <li><a href=\"/docs/charts/mekko/\" title=\"Open in a new window\" target=\"_blank\">Mekko Chart</a></li>\
            <li><a href=\"/docs/charts/parallel-coordinates/\" title=\"Open in a new window\" target=\"_blank\">Parallel Coordinates Chart</a></li>\
            <li><a href=\"/docs/charts/pie/\" title=\"Open in a new window\" target=\"_blank\">Pie Chart</a></li>\
            <li><a href=\"/docs/charts/population-pyramid/\" title=\"Open in a new window\" target=\"_blank\">Population Pyramid</a></li>\
        </p>\
    </div>\
    <div>\
        <p>Categorical data consists of discrete values that represent different categories or groups. When visualizing categorical data, charts should emphasize comparisons between these groups rather than trends over time.</p>\
        <p><span style=\"font-weight: 600;\">Example</span></p>\
        <p><span class=\"js-code-block\">&lt;div class=\"js-values\" title=\"Name for data set\"&gt;1, 2, 3, 4, 5&lt;/div&gt;</span></p>\
    </div>\
    <div style=\"grid-column: 1 / 5; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- series (continuous numerical data) -->\
    <div style=\"font-weight: 600;\"><p>Series<div style=\"font-size: 12px; margin: 0px 0px 0px 10px;\">(Continuous Numerical Data)</div></p></div>\
    <div style=\" text-align: center;\">\
        <p>\
            <div class=\"js-code-block\" style=\"margin-bottom: 5px;\">js-series</div>\
            <div class=\"js-code-block\"><span style=\"margin: 0px 0px 0px 40px;\">js-values</span></div>\
        </p>\
    </div>\
    <div>\
        <p>\
            <li><a href=\"/docs/charts/box-plot/\" title=\"Open in a new window\" target=\"_blank\">Box-and-Whisker Chart</a></li>\
        </p>\
    </div>\
    <div>\
        <p>A box-and-whisker chart (also known as a box plot) is used to visualize continuous numerical data, particularly when analyzing distributions and identifying outliers. The type of data used in a box plot has the following characteristics:\
            <li><strong>Quantitative (Numerical) Data</strong> - The data must be numerical (e.g., test scores, temperatures, sales figures).</li>\
            <li><strong>Univariate Data</strong> - A box plot typically represents a single variable at a time.</li>\
            <li><strong>Continuous or Discrete Data</strong> - The values can be continuous (e.g., height, weight) or discrete (e.g., counts of defects in a manufacturing process).</li>\
        </p>\
        <p><span style=\"font-weight: 600;\">Example</span></p>\
        <div class=\"js-code-block\">\
            &lt;div class=\"js-series\" title=\"Name for data series\"&gt;\
                <div style=\"margin: 0px 0px 0px 35px;\">&lt;div class=\"js-values\" title=\"Name for data set 1\"&gt;1, 2, 3, 4, 5&lt;/div&gt;</div>\
                <div style=\"margin: 0px 0px 0px 35px;\">&lt;div class=\"js-values\" title=\"Name for data set 2\"&gt;2, 3, 4, 5, 6&lt;/div&gt;</div>\
            &lt;/div&gt;\
        </div>\
    </div>\
    <div style=\"grid-column: 1 / 5; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- range -->\
    <div style=\"font-weight: 600;\"><p>Range</p></div>\
    <div style=\" text-align: center;\">\
        <p>\
            <div class=\"js-code-block\" style=\"margin: 0px 0px 5px 0px;\">js-low-values</div>\
            <div class=\"js-code-block\">js-high-values</div>\
        </p>\
    </div>\
    <div>\
        <p>\
            <li><a href=\"/docs/charts/span/\" title=\"Open in a new window\" target=\"_blank\">Span Chart</a></li>\
        </p>\
    </div>\
    <div>\
        <p>Span charts are used to visualize the range between two values, typically representing numerical ranges.</p>\
        <p>Numerical range data is used to represent data ranges instead of time periods and requires a lower bound and upper bound for each category. Range data is useful for visualizing salary brackets, temperature variations, price fluctuations, and confidence intervals.</p>\
    </div>\
    <div style=\"grid-column: 1 / 5; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- cumulative -->\
    <div style=\"font-weight: 600;\"><p>Cumulative</p></div>\
    <div style=\" text-align: center;\">\
        <p>\
            <div class=\"js-code-block\">js-values</div>\
        </p>\
    </div>\
    <div>\
        <p>\
            <li><a href=\"/docs/charts/waterfall/\" title=\"Open in a new window\" target=\"_blank\">Waterfall Chart</a></li>\
        </p>\
    </div>\
    <div>\
        <p>Cumulative data represents values that accumulate over time or across categories, meaning each data point is the sum of the previous values plus the new value. It is useful for showing trends in total growth or progression.</p>\
    </div>\
    <div style=\"grid-column: 1 / 5; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- frequency -->\
    <div style=\"font-weight: 600;\"><p>Frequency</p></div>\
    <div style=\" text-align: center;\">\
        <p>\
            <div class=\"js-code-block\">js-values</div>\
        </p>\
    </div>\
    <div>\
        <p>\
            <li><a href=\"/docs/charts/histogram/\" title=\"Open in a new window\" target=\"_blank\">Histogram</a></li>\
        </p>\
    </div>\
    <div>\
        <p>A histogram is used to visualize continuous numerical data that can be divided into intervals or bins. The type of data that is used by a histogram is typically continuous, interval, ratio or quantitative data.</p>\
    </div>\
    <div style=\"grid-column: 1 / 5; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- points -->\
    <div style=\"font-weight: 600;\"><p>Points</p></div>\
    <div style=\" text-align: center;\">\
        <p>\
            <div class=\"js-code-block\" style=\"margin: 0px 0px 5px 0px;\">js-x-values</div>\
            <div class=\"js-code-block\" style=\"margin: 0px 0px 5px 0px;\">js-y-values</div>\
            <div class=\"js-code-block\">js-s-values</div>\
        </p>\
    </div>\
    <div>\
        <p>\
            <li><a href=\"/docs/charts/bubble/\" title=\"Open in a new window\" target=\"_blank\">Bubble Chart</a></li>\
            <li><a href=\"/docs/charts/scatter/\" title=\"Open in a new window\" target=\"_blank\">Scatter Chart</a></li>\
        </p>\
    </div>\
    <div>\
        <p>Scatter charts are used to visualize the relationship between two numerical variables.</p>\
        <p>The data used typically includes continuous numerical data (quantitative data), paired data (bivariate data), independent & dependent variables or optional categorical data (color, shape, or size).</p>\
    </div>\
    <div style=\"grid-column: 1 / 5; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- ohlc -->\
    <div style=\"font-weight: 600;\"><p>OHLC<div style=\"font-size: 12px; margin: 0px 0px 0px 10px;\">(Open-High-Low-Close)</div></p></div>\
    <div style=\" text-align: center;\">\
        <p>\
            <div class=\"js-code-block\" style=\"margin: 0px 0px 5px 0px;\">js-open</div>\
            <div class=\"js-code-block\" style=\"margin: 0px 0px 5px 0px;\">js-high</div>\
            <div class=\"js-code-block\" style=\"margin: 0px 0px 5px 0px;\">js-low</div>\
            <div class=\"js-code-block\">js-close</div>\
        </p>\
    </div>\
    <div>\
        <p>\
            <li><a href=\"/docs/charts/candlestick/\" title=\"Open in a new window\" target=\"_blank\">Candlestick Chart</a></li>\
            <li><a href=\"/docs/charts/ohlc/\" title=\"Open in a new window\" target=\"_blank\">OHLC Chart</a></li>\
        </p>\
    </div>\
    <div>\
        <p>A candlestick chart is used to represent price movements of a financial asset over a specific time period. This type of data is commonly used in stock markets, forex trading, and cryptocurrency analysis to visualize price fluctuations and identify market trends.</p>\
    </div>\
    <div style=\"grid-column: 1 / 5; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- hierarchy -->\
    <div style=\"font-weight: 600;\"><p>Hierarchical</p></div>\
    <div style=\" text-align: center;\">\
        <p>\
            <div class=\"js-code-block\"><span style=\"font-style: italic;\">chartattribute</span>=\"json_css_is\"</div>\
        </p>\
    </div>\
    <div>\
        <p>\
            <li><a href=\"/docs/charts/treemap/\" title=\"Open in a new window\" target=\"_blank\">Treemap Chart</a></li>\
        </p>\
    </div>\
    <div>\
        <p>A treemap is best suited for visualizing hierarchical (tree-like) data, categorical, and quantitative data, where the goal is to compare proportions and relationships within a structured dataset. Treemaps help make sense of large and complex data by visually organizing it into a compact, easily interpretable format.</p>\
        <p>The type of data best suited for a treemap typically includes hierarchical data, quantitative data, categorical data, financial data, market data and data with multiple dimensions.</p>\
    </div>\
</div>\
";

return return_input_data;
}
// generate and return the main help content - preview chart
function jsChartBuilderOpenMainHelpPreviewChart(menu_conf) {

    document.getElementsByClassName("js-chart-builder-main-help-header-title")[0].innerText = "Help - Preview Chart";

    var return_preview_chart = "<h1 style=\"margin: 0px 0px 10px 0px;\">Preview Chart</h1>\
        <p><span style=\"font-style: italic;\">js-chart-builder</span> will render a <strong>preview chart</strong> that is continually updated as you adjust the <strong>style template</strong>, <strong>chart attributes</strong> and <strong>style directives</strong>.</p>\
            <p class=\"js-warning-panel\">The <strong>height</strong> and <strong>width</strong> chart attributes are currently limited to dimensions that are smaller than the <strong>preview chart container</strong>. A fix is planned to address this issue in the future.</p>\
        </div>\
        <p>The preview chart functions as a real chart would on your web site - accurately reflecting how a chart would render on your web site. The preview chart can be exported to be easity added to your website.</p>\
        <p>A new preview chart is rendered when you select a new chart type from the <strong>chart type</strong> dropdown.</p>\
        <p>You can use the customise the preview chart by changing the following chart elements:\
            <li>Chart type</li>\
            <li>Chart attributes</li>\
            <li>Style template</li>\
            <li>Style directives</li>\
            <li>Input data</li>\
        </p>\
";

    return return_preview_chart;
}
// generate and return the main help content - documentation
function jsChartBuilderOpenMainHelpDocumentation(menu_conf) {

    document.getElementsByClassName("js-chart-builder-main-help-header-title")[0].innerText = "Help - Documentation";

    var return_docs = "<h1 style=\"margin: 0px 0px 10px 0px;\">Documentation</h1>\
    <p><span style=\"font-style: italic;\">js-charts</span> has an extensive documentation library containing many examples and expert tips.</p>\
    <div style=\"display: grid; grid-template-columns: 40% 60%; grid-auto-rows: auto;\">\
        <div style=\"text-align: center; border-radius: 5px 0px 0px 0px; padding: 10px; font-size: 14px; font-weight: 400; background-color: cadetblue; color: white;\">Link</div>\
        <div style=\"text-align: center; border-radius: 0px 5px 0px 0px; padding: 10px; font-size: 14px; font-weight: 400; background-color: cadetblue; color: white;\">Description</div>\
\
    <!-- root / index / toc -->\
        <div style=\"padding: 10px;\"><a href=\"/docs/\" target=\"_blank\" title=\"Open in a new window\">/docs/</a></div>\
        <div style=\"padding: 10px;\">Documentation root with <strong>table of contents</strong>.</div>\
        <div style=\"grid-column: 1 / 3; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- chart types -->\
        <div style=\"padding: 10px;\"><a href=\"/docs/charts/\" target=\"_blank\" title=\"Open in a new window\">/docs/charts/</a></div>\
        <div style=\"padding: 10px;\">List of supported chart types.</div>\
        <div style=\"grid-column: 1 / 3; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- chart attributes -->\
        <div style=\"padding: 10px;\"><a href=\"/docs/chart-attributes/\" target=\"_blank\" title=\"Open in a new window\">/docs/chart-attributes/</a></div>\
        <div style=\"padding: 10px;\">Chart attributes reference.</div>\
        <div style=\"grid-column: 1 / 3; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- style templates -->\
        <div style=\"padding: 10px;\"><a href=\"/docs/style-templates/\" target=\"_blank\" title=\"Open in a new window\">/docs/style-templates/</a></div>\
        <div style=\"padding: 10px;\">Style template reference.</div>\
        <div style=\"grid-column: 1 / 3; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- style directives -->\
        <div style=\"padding: 10px;\"><a href=\"/docs/style-directives/\" target=\"_blank\" title=\"Open in a new window\">/docs/style-directives/</a></div>\
        <div style=\"padding: 10px;\">Style directives reference.</div>\
        <div style=\"grid-column: 1 / 3; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- color palettes -->\
        <div style=\"padding: 10px;\"><a href=\"/docs/color-palettes/\" target=\"_blank\" title=\"Open in a new window\">/docs/color-palettes/</a></div>\
        <div style=\"padding: 10px;\">Color palette reference.</div>\
        <div style=\"grid-column: 1 / 3; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- user guide -->\
        <div style=\"padding: 10px;\"><a href=\"/docs/user-guide/\" target=\"_blank\" title=\"Open in a new window\">/docs/user-guide/</a></div>\
        <div style=\"padding: 10px;\">User Guide.</div>\
        <div style=\"grid-column: 1 / 3; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- implementtion guide -->\
        <div style=\"padding: 10px;\"><a href=\"/docs/implmentation-guide/\" target=\"_blank\" title=\"Open in a new window\">/docs/implmentation-guide/</a></div>\
        <div style=\"padding: 10px;\">Implementation Guide.</div>\
        <div style=\"grid-column: 1 / 3; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- examples -->\
        <div style=\"padding: 10px;\"><a href=\"/docs/examples/\" target=\"_blank\" title=\"Open in a new window\">/docs/examples/</a></div>\
        <div style=\"padding: 10px;\">Extensive <strong>examples</strong> page featuring tutorials and <strong>industry-specific</strong> examples.</div>\
        <div style=\"grid-column: 1 / 3; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- source -->\
        <div style=\"padding: 10px;\"><a href=\"https://github.com/wrathtafarian/js-charts\" target=\"_blank\" title=\"Open in a new window\">https://github.com/wrathtafarian/js-charts</a></div>\
        <div style=\"padding: 10px;\">Github repository.</div>\
        <div style=\"grid-column: 1 / 3; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- security -->\
        <div style=\"padding: 10px;\"><a href=\"/security/\" target=\"_blank\" title=\"Open in a new window\">/security/</a></div>\
        <div style=\"padding: 10px;\"><strong>Security & Privacy</strong>.</div>\
        <div style=\"grid-column: 1 / 3; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- terms of service -->\
        <div style=\"padding: 10px;\"><a href=\"/terms-of-service/\" target=\"_blank\" title=\"Open in a new window\">/terms-of-service/</a></div>\
        <div style=\"padding: 10px;\">Terms of service.</div>\
        <div style=\"grid-column: 1 / 3; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
\
    <!-- change log -->\
        <div style=\"padding: 10px;\"><a href=\"/change-log/\" target=\"_blank\" title=\"Open in a new window\">/change-log/</a></div>\
        <div style=\"padding: 10px;\">Change log.</div>\
        <div style=\"grid-column: 1 / 3; height: 0.5px; background-color: #bbbbbb; margin: 10px 0px 10px 0px;\"></div>\
    </div>\
";

    return return_docs;
}
// generate and return the main help content - about
function jsChartBuilderOpenMainHelpAbout(menu_conf) {

    document.getElementsByClassName("js-chart-builder-main-help-header-title")[0].innerText = "Help - About";

    var return_about = "<h1 style=\"margin: 0px 0px 10px 0px;\">About <span style=\"font-style: italic;\">js-charts</span></h1>\
    <p><span style=\"font-style: italic;\">js-chart</span> and <span style=\"font-style: italic;\">js-chart-builder</span> are released under the <strong>GNU General Public License (GPL)</strong> open source license.</p>\
    <p><span style=\"font-style: italic;\">js-chart-builder</span> lets you quickly build prototype charts using <span style=\"font-style: italic;\">js-charts</span>. You can export the chart using the export button, and then easily copy the chart onto your HTML website.</p>\
    <p><span style=\"font-style: italic;\">js-chart</span> and <span style=\"font-style: italic;\">js-chart-builder</span> uses JavaScript (js) and Cascading Style Sheets (css) - that is present in all modern browsers - to build simple but highly customisable charts.</p>\
    <p>\
        <div class=\"js-warning-panel\">Latest stable version: <strong>" + IDEFAULT_CHART_ATTRIBUTES.version.default + "</strong></div>\
    </p>\
    <p>Copyright " + new Date().getFullYear() + " Wrathcom Ltd. All rights reserved.</p>\
\
";

return return_about;
}
// navigate the main help menu
function jsChartBuilderNavigateMainHelp(menu_container, menu_conf) {

    if (menu_container.className != "js-chart-builder-main-menu-link-active") {
        // inactivate all
        var active_links = document.getElementsByClassName("js-chart-builder-main-menu-link-active");
        for (var tt = 0; tt < active_links.length; tt++) {
            active_links[tt].className = "js-chart-builder-main-menu-link";
        }

        // activte this
        menu_container.className = "js-chart-builder-main-menu-link-active";

        // switch main help content
        document.getElementById("js-chart-builder-main-help-right-inner-panel").innerHTML = window[ menu_conf.renderContent ]( menu_conf );
    }

    return true;
}
// close the main help panel
function jsChartBuilderCloseMainHelp(builder_panel) {

    var main_help_panel = document.getElementById("js-chart-builder-main-help-panel");
    if (main_help_panel) {
        document.getElementById("js-chart-builder-main-help-panel").remove();
    }

    return true;
}
// open the main help panel
function jsChartBuilderOpenMainHelp(builder_panel) {

    if (document.getElementsByClassName("js-chart-builder-help-panel").length > 0) {
        for (var tt = (document.getElementsByClassName("js-chart-builder-help-panel").length - 1); tt >= 0; tt--) {
            document.getElementsByClassName("js-chart-builder-help-panel")[tt].remove();
        }
    }

    // main help panel
    var help_panel = document.createElement("div");
    help_panel.id = "js-chart-builder-main-help-panel";
    var help_panel_class = document.createAttribute("class");
    help_panel_class.value = "js-chart-builder-main-help-panel";
    help_panel.setAttributeNode( help_panel_class );
    builder_panel.appendChild( help_panel );

    // header
    var help_header_container = document.createElement("div");
    var help_header_container_class = document.createAttribute("class");
    help_header_container_class.value = "js-chart-builder-main-help-header-container";
    help_header_container.setAttributeNode( help_header_container_class );
    help_panel.appendChild( help_header_container );

    // header close
    var help_header_close = document.createElement("div");
    var help_header_close_class = document.createAttribute("class");
    help_header_close_class.value = "js-chart-builder-main-help-header-close";
    help_header_close.setAttributeNode( help_header_close_class );
    var help_header_close_title = document.createAttribute("title");
    help_header_close_title.value = "Close the help panel";
    help_header_close.setAttributeNode( help_header_close_title );
    help_header_close.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    help_header_close.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(348, 83%, 47%)";
    }, false);
    help_header_close.addEventListener("mousedown", function () {
        this.style.fontWeight = 400;
    }, false);
    help_header_close.addEventListener("mouseup", function () {
        this.style.fontWeight = 600;
    }, false);
    help_header_close.addEventListener("click", function () {
        
        var close_main_help = jsChartBuilderCloseMainHelp();

    }, false);
    help_header_close.innerText = "X";
    help_header_container.appendChild( help_header_close );

    // header title
    var help_header_title = document.createElement("div");
    var help_header_title_class = document.createAttribute("class");
    help_header_title_class.value = "js-chart-builder-main-help-header-title";
    help_header_title.setAttributeNode( help_header_title_class );
    help_header_title.innerText = "Help";
    help_header_container.appendChild( help_header_title );

    // main content container
    var main_conent_container = document.createElement("div");
    var main_conent_container_class = document.createAttribute("class");
    main_conent_container_class.value = "js-chart-builder-main-content-container";
    main_conent_container.setAttributeNode( main_conent_container_class );
    help_panel.appendChild( main_conent_container );

    // main content container - left panel
    var main_left_panel = document.createElement("div");
    main_left_panel.id = "js-chart-builder-main-help-left-panel";
    var main_left_panel_class = document.createAttribute("class");
    main_left_panel_class.value = "js-chart-builder-main-left-panel";
    main_left_panel.setAttributeNode( main_left_panel_class );
    main_conent_container.appendChild( main_left_panel );

    // main content container - right panel
    var main_right_panel = document.createElement("div");
    main_right_panel.id = "js-chart-builder-main-help-right-panel";
    var main_right_panel_class = document.createAttribute("class");
    main_right_panel_class.value = "js-chart-builder-main-right-panel";
    main_right_panel.setAttributeNode( main_right_panel_class );
    main_conent_container.appendChild( main_right_panel );

    // main content container - right panel inner
    var main_right_inner_panel = document.createElement("div");
    main_right_inner_panel.id = "js-chart-builder-main-help-right-inner-panel";
    var main_right_inner_panel_class = document.createAttribute("class");
    main_right_inner_panel_class.value = "js-chart-builder-main-right-inner-panel";
    main_right_inner_panel.setAttributeNode( main_right_inner_panel_class );
    main_right_panel.appendChild( main_right_inner_panel );

    // define the manu items
    var help_menu_items = [
        {
            "key": "overview",
            "innerHTML": "Overview",
            "title": "Overview",
            "id": "js-chart-builder-menu-link-overview",
            "renderContent": "jsChartBuilderOpenMainHelpOverview",
            "docs": {
                "text": "Documentation",
                "link": "https://js-charts.com/docs"
            },
            "active": true
        },
        {
            "key": "chart-attributes",
            "innerHTML": "Chart Attributes",
            "title": "Chart Attributes",
            "id": "js-chart-builder-menu-link-chart-attributes",
            "renderContent": "jsChartBuilderOpenMainHelpChartAttributes",
            "docs": {
                "text": "Documentation - Chart Attributes",
                "link": "https://js-charts.com/docs/chart-attributes"
            },
            "active": false,
        },
        {
            "key": "style-templates",
            "innerHTML": "Style Templates",
            "title": "Style Templates",
            "id": "js-chart-builder-menu-link-style-templates",
            "renderContent": "jsChartBuilderOpenMainHelpStyleTemplates",
            "docs": {
                "text": "Documentation - Style Templates",
                "link": "https://js-charts.com/docs/style-templates"
            },
            "active": false
        },
        {
            "key": "style-directives",
            "innerHTML": "<span style=\"padding-left: 40px;\">Directives</span>",
            "title": "Style Directives",
            "id": "js-chart-builder-menu-link-style-directives",
            "renderContent": "jsChartBuilderOpenMainHelpStyleDirectives",
            "docs": {
                "text": "Documentation - Style Directives",
                "link": "https://js-charts.com/docs/style-directives"
            },
            "active": false
        },
        {
            "key": "style-directives-variables",
            "innerHTML": "<span style=\"padding-left: 40px;\">Variables</span>",
            "title": "Style Variables",
            "id": "js-chart-builder-menu-link-style-directive-variables",
            "renderContent": "jsChartBuilderOpenMainHelpStyleDirectiveVariables",
            "docs": {
                "text": "Documentation - Style Directives",
                "link": "https://js-charts.com/docs/style-directive-variables"
            },
            "active": false
        },
        {
            "key": "input-data",
            "innerHTML": "Input Data",
            "title": "Input Data",
            "id": "js-chart-builder-menu-link-input-data",
            "renderContent": "jsChartBuilderOpenMainHelpInputData",
            "docs": {
                "text": "Documentation - Input Data",
                "link": "https://js-charts.com/docs/input-data"
            },
            "active": false
        },
        {
            "key": "preview-chart",
            "innerHTML": "Preview Chart",
            "title": "Preview Chart",
            "id": "js-chart-builder-menu-link-preview-chart",
            "renderContent": "jsChartBuilderOpenMainHelpPreviewChart",
            "active": false
        },
        {
            "key": "documentation",
            "innerHTML": "Documentation",
            "title": "Documentation",
            "id": "js-chart-builder-menu-link-documentation",
            "renderContent": "jsChartBuilderOpenMainHelpDocumentation",
            "active": false
        },
        {
            "key": "about",
            "innerHTML": "About",
            "title": "About",
            "id": "js-chart-builder-menu-link-about",
            "renderContent": "jsChartBuilderOpenMainHelpAbout",
            "active": false
        }
    ]

    for (const [ikey, ivalue] of Object.entries(help_menu_items)) {

        // main content container - left panel - menu item
        var menu_panel_link = document.createElement("div");
        menu_panel_link.id = ivalue.id;
        var menu_panel_link_class = document.createAttribute("class");
        if (ivalue.active) {
            menu_panel_link_class.value = "js-chart-builder-main-menu-link-active";
            menu_panel_link.setAttributeNode( menu_panel_link_class );
        } else {
            menu_panel_link_class.value = "js-chart-builder-main-menu-link";
            menu_panel_link.setAttributeNode( menu_panel_link_class );
        }
        var menu_panel_link_title = document.createAttribute("title");
        menu_panel_link_title.value = ivalue.title;
        menu_panel_link.setAttributeNode( menu_panel_link_title );
        menu_panel_link.addEventListener("click", function () {

            var navigate_help = jsChartBuilderNavigateMainHelp(this, ivalue);

        }, false);
        menu_panel_link.innerHTML = ivalue.innerHTML;
        main_left_panel.appendChild( menu_panel_link );

    }

    // populate the overview content
    document.getElementById("js-chart-builder-main-help-right-inner-panel").innerHTML = window[ help_menu_items[0].renderContent ]( help_menu_items[0] );

    return true;
}
// open the builder main window
function jsChartBuilderOpen() {

    // build the main builder window
    var builder_panel = document.createElement("div");
    var builder_panel_class = document.createAttribute("class");
    builder_panel_class.value = "js-chart-builder";
    builder_panel.setAttributeNode( builder_panel_class );
    document.body.appendChild( builder_panel );

    // main top container
    var main_top_panel = document.createElement("div");
    var main_top_panel_class = document.createAttribute("class");
    main_top_panel_class.value = "js-chart-builder-main-top-panel";
    main_top_panel.setAttributeNode( main_top_panel_class );
    builder_panel.appendChild( main_top_panel );

    // footer container
    var footer_panel = document.createElement("div");
    var footer_panel_class = document.createAttribute("class");
    footer_panel_class.value = "js-chart-builder-footer-panel";
    footer_panel.setAttributeNode( footer_panel_class );
    footer_panel.innerHTML = (new Date().getFullYear()) + " &copy; Wrathcom Ltd";
    builder_panel.appendChild( footer_panel );

    // main left column
    var left_column_panel = document.createElement("div");
    var left_column_panel_class = document.createAttribute("class");
    left_column_panel_class.value = "js-chart-builder-left-column-panel";
    left_column_panel.setAttributeNode( left_column_panel_class );
    main_top_panel.appendChild( left_column_panel );

    // heading panel
    var heading_panel = document.createElement("div");
    var heading_panel_class = document.createAttribute("class");
    heading_panel_class.value = "js-chart-builder-heading-panel";
    heading_panel.setAttributeNode( heading_panel_class );
    //heading_panel.innerText = "js-chart Builder";
    left_column_panel.appendChild( heading_panel );

    // close button
    var close_button = document.createElement("div");
    var close_button_class = document.createAttribute("class");
    close_button_class.value = "js-chart-builder-close-button";
    close_button.setAttributeNode( close_button_class );
    var close_button_title = document.createAttribute("title");
    close_button_title.value = "Close window";
    close_button.setAttributeNode( close_button_title );
    //close_button.innerText = "X";
    close_button.innerText = "Close";
    close_button.addEventListener("click", function () {
        var toggle_window = jsChartBuilderClose();
    }, false);
    close_button.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(348, 83%, 37%)";
    }, false);
    close_button.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(348, 83%, 47%)";
    }, false);
    close_button.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    close_button.addEventListener("mouseup", function () {
        this.style.fontWeight = 600;
    }, false);
    heading_panel.appendChild( close_button );

    // page title
    var page_title = document.createElement("div");
    var page_title_class = document.createAttribute("class");
    page_title_class.value = "js-chart-builder-page-title";
    page_title.setAttributeNode( page_title_class );
    page_title.innerText = "js-chart builder";
    heading_panel.appendChild( page_title );
    

    // heading panel
    /*
    var heading_panel = document.createElement("div");
    var heading_panel_class = document.createAttribute("class");
    heading_panel_class.value = "js-chart-builder-heading-panel";
    heading_panel.setAttributeNode( heading_panel_class );
    heading_panel.innerText = "js-chart Builder";
    left_column_panel.appendChild( heading_panel );
    */

    // button panel
    var button_panel = document.createElement("div");
    var button_panel_class = document.createAttribute("class");
    button_panel_class.value = "js-chart-builder-button-panel";
    button_panel.setAttributeNode( button_panel_class );
    left_column_panel.appendChild( button_panel );

    // button label panel
    var button_label_panel = document.createElement("div");
    var button_label_panel_class = document.createAttribute("class");
    button_label_panel_class.value = "js-chart-builder-button-label-panel";
    button_label_panel.setAttributeNode( button_label_panel_class );
    button_label_panel.innerText = "Export:";
    button_panel.appendChild( button_label_panel );

    // add export all button
    var button_elem = document.createElement("div");
    var button_elem_class = document.createAttribute("class");
    button_elem_class.value = "js-chart-builder-button-elem";
    button_elem.setAttributeNode( button_elem_class );
    var button_elem_title = document.createAttribute("title");
    button_elem_title.value = "Export all HTML code for this chart.";
    button_elem.setAttributeNode( button_elem_title );
    button_elem.innerText = "All";
    button_elem.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(120, 61%, 24%)";
    }, false);
    button_elem.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(120, 61%, 34%)";
    }, false);
    button_elem.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    button_elem.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    button_elem.addEventListener("click", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var export_save = document.importNode(preview_chart, false);

        for (const [ikey, ivalue] of Object.entries(preview_chart.children)) {
            if (ivalue.className != "js-chart-common-base-container") {
                export_save.appendChild( ivalue.cloneNode(true) );
            }
        }

        navigator.clipboard.writeText(export_save.outerHTML );

        var pop_msg = jsChartBuilderPopMessage("Export copied to clipboard.")

    }, false);
    button_panel.appendChild( button_elem );

    // add export style directives button
    var button_elem = document.createElement("div");
    var button_elem_class = document.createAttribute("class");
    button_elem_class.value = "js-chart-builder-button-elem";
    button_elem.setAttributeNode( button_elem_class );
    var button_elem_title = document.createAttribute("title");
    button_elem_title.value = "Export the style directives.";
    button_elem.setAttributeNode( button_elem_title );
    button_elem.innerText = "Style Directives";
    button_elem.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    button_elem.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    button_elem.addEventListener("click", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var export_save = "";

        for (const [ikey, ivalue] of Object.entries(preview_chart.children)) {
            var child_name = ivalue.getAttribute("class").substring(3).replaceAll("-", "_");
            if (["name", "description"].indexOf( child_name ) == -1) {
                if (typeof IDEFAULT_DESIGN_TEMPLATES[0][ child_name ] != "undefined") {
                    export_save += ivalue.outerHTML;
                }
            }
        }

        navigator.clipboard.writeText(export_save );

        var pop_msg = jsChartBuilderPopMessage("Export copied to clipboard.")

    }, false);
    button_panel.appendChild( button_elem );

    // add export data only button
    var button_elem = document.createElement("div");
    var button_elem_class = document.createAttribute("class");
    button_elem_class.value = "js-chart-builder-button-elem";
    button_elem.setAttributeNode( button_elem_class );
    var button_elem_title = document.createAttribute("title");
    button_elem_title.value = "Export the input data elements.";
    button_elem.setAttributeNode( button_elem_title );
    button_elem.innerText = "Input Data";
    button_elem.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    button_elem.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    button_elem.addEventListener("click", function () {

        var preview_chart = document.getElementById("js-chart-builder-preview");
        var export_save = "";

        for (const [ikey, ivalue] of Object.entries(preview_chart.children)) {
            var child_name = ivalue.getAttribute("class").substring(3).replaceAll("-", "_");
            if ((typeof IDEFAULT_DESIGN_TEMPLATES[0][ child_name ] == "undefined") && (child_name != "chart_common_base_container")) {
                export_save += ivalue.outerHTML;
            }
        }

        navigator.clipboard.writeText(export_save );

        var pop_msg = jsChartBuilderPopMessage("Export copied to clipboard.")

    }, false);
    button_panel.appendChild( button_elem );

    // add reset button
    var button_elem = document.createElement("div");
    var button_elem_class = document.createAttribute("class");
    button_elem_class.value = "js-chart-builder-button-elem";
    button_elem.setAttributeNode( button_elem_class );
    var button_elem_style = document.createAttribute("style");
    button_elem_style.value = "background-color: SteelBlue;";
    button_elem.setAttributeNode( button_elem_style );
    var button_elem_title = document.createAttribute("title");
    button_elem_title.value = "Reset Builder and start over.";
    button_elem.setAttributeNode( button_elem_title );
    button_elem.innerText = "Reset";
    button_elem.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    button_elem.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    button_elem.addEventListener("click", function () {
        if (confirm("Reset window -- all changes will be lost.\nAre you sure?")) {
            document.getElementsByClassName("js-chart-builder")[0].remove();
            setTimeout(function () {
                jsChartBuilderOpen();
                var init_chart = setTimeout(initChart, 100, null, "js-chart-builder-preview");
            }, 100);
        }
    }, false);
    button_elem.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(207, 44%, 39%)";
    }, false);
    button_elem.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(207, 44%, 49%)";
    }, false);
    button_panel.appendChild( button_elem );

    // add help button
    var button_elem = document.createElement("div");
    var button_elem_class = document.createAttribute("class");
    button_elem_class.value = "js-chart-builder-button-elem";
    button_elem.setAttributeNode( button_elem_class );
    var button_elem_style = document.createAttribute("style");
    button_elem_style.value = "background-color: SteelBlue;";
    button_elem.setAttributeNode( button_elem_style );
    var button_elem_title = document.createAttribute("title");
    button_elem_title.value = "Show the help screen.";
    button_elem.setAttributeNode( button_elem_title );
    button_elem.innerText = "Help";
    button_elem.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    button_elem.addEventListener("mouseup", function () {
        this.style.fontWeight = 400;
    }, false);
    button_elem.addEventListener("mouseover", function () {
        this.style.backgroundColor = "hsl(207, 44%, 39%)";
    }, false);
    button_elem.addEventListener("mouseout", function () {
        this.style.backgroundColor = "hsl(207, 44%, 49%)";
    }, false);
    button_elem.addEventListener("click", function () {

        var open_main_help = jsChartBuilderOpenMainHelp(builder_panel);

    }, false);
    button_panel.appendChild( button_elem );

    // dropdown panel
    var dropdown_panel = document.createElement("div");
    var dropdown_panel_class = document.createAttribute("class");
    dropdown_panel_class.value = "js-chart-builder-dropdown-panel";
    dropdown_panel.setAttributeNode( dropdown_panel_class );
    left_column_panel.appendChild( dropdown_panel );

    // chart type drop down
    var chart_dropdown = document.createElement("select");
    chart_dropdown.id = "js-chart-builder-dropdown-chart-type";
    var chart_dropdown_class = document.createAttribute("class");
    chart_dropdown_class.value = "js-chart-builder-dropdown-select";
    chart_dropdown.setAttributeNode( chart_dropdown_class );
    chart_dropdown.addEventListener("change", function () {
        var chart_value_split = this.value.split("--");
        var chart_type_name = chart_value_split[0].trim();
        var chart_type_desc = chart_value_split[1].trim();

        // var preview_chart = document.getElementsByClassName("js-chart")[0];
        // preview_chart.setAttribute("type", chart_type_name);

        var css_found = false;
        for (var tt = 0; tt < document.styleSheets.length; tt++) {
            if (document.styleSheets[tt].href != null) {
                if (document.styleSheets[tt].href.indexOf( IDEFAULT_CHART_TYPE_OPTIONS[ chart_type_name ].chart_group ) > -1) {
                    css_found = true;
                }
            }
        }

        if (!css_found) {

            // css link
            var link_elem = document.createElement("link");
            var link_elem_href = document.createAttribute("href");
            link_elem_href.value = ("css/js-chart-" + IDEFAULT_CHART_TYPE_OPTIONS[ chart_type_name ].chart_group + ".css");
            link_elem.setAttributeNode( link_elem_href );
            var link_elem_rel = document.createAttribute("rel");
            link_elem_rel.value = "stylesheet";
            link_elem.setAttributeNode( link_elem_rel );
            document.head.appendChild( link_elem );

            // js script
            var script_elem = document.createElement("script");
            var script_elem__type = document.createAttribute("type");
            script_elem__type.value = "text/javascript";
            script_elem.setAttributeNode( script_elem__type );
            var script_elem_src = document.createAttribute("src");
            script_elem_src.value = ("js/js-chart-" + IDEFAULT_CHART_TYPE_OPTIONS[ chart_type_name ].chart_group + ".js");
            script_elem.setAttributeNode( script_elem_src );
            document.head.appendChild( script_elem );
        }

        var populate_chart_attributes = jsChartBuilderPopulateChartAttributes( document.getElementsByClassName("js-chart-builder-chart-attr-content-panel")[0], chart_type_name);

        var populate_style_directives = jsChartBuilderPopulateStyleDirectives( document.getElementsByClassName("js-chart-builder-style-directives-content-panel")[0], document.getElementById("js-chart-builder-dropdown-template").value, chart_type_name);

        var populate_preview_chart = jsChartBuilderPopulatePreviewChart( document.getElementsByClassName("js-chart-builder-preview-panel")[0], chart_type_name, document.getElementById("js-chart-builder-dropdown-template").value);

        var populate_input_data = jsChartBuilderPopulateInputData(document.getElementsByClassName("js-chart-builder-data-panel")[0], IDEFAULT_CHART_TYPE_OPTIONS[ chart_type_name ].data_type, chart_type_name);

        setTimeout(initChart, 100, null, "js-chart-builder-preview");

        /*
        if (IDEFAULT_CHART_TYPE_OPTIONS[ chart_type_name ].chart_group != IDEFAULT_CHART_TYPE_OPTIONS[ document.getElementsByClassName("js-chart")[0].getAttribute("type") ].chart_group) {
            if (confirm("This will reset the chart attributes to their default values.\n\nAre you sure?")) {
                var populate_chart_attributes = jsChartBuilderPopulateChartAttributes( document.getElementsByClassName("js-chart-builder-chart-attr-content-panel")[0], chart_type_name);

                var populate_style_directives = jsChartBuilderPopulateStyleDirectives( document.getElementsByClassName("js-chart-builder-style-directives-content-panel")[0], document.getElementById("js-chart-builder-dropdown-template").value);

                var populate_preview_chart = jsChartBuilderPopulatePreviewChart( document.getElementsByClassName("js-chart-builder-preview-panel")[0], chart_type_name, document.getElementById("js-chart-builder-dropdown-template").value);

                var populate_input_data = jsChartBuilderPopulateInputData(document.getElementsByClassName("js-chart-builder-data-panel")[0], IDEFAULT_CHART_TYPE_OPTIONS[ chart_type_name ].data_type, chart_type_name);

                setTimeout(initChart, 100);
            } else {
                document.getElementById("js-chart-builder-dropdown-chart-type").options[0].selected = true;
                return false;
            }
        }
        */
    }, false);
    dropdown_panel.appendChild( chart_dropdown );

    // chart type options
    for (const [ikey, ivalue] of Object.entries(IDEFAULT_CHART_TYPE_OPTIONS)) {

        var dropdown_option = document.createElement("option");
        dropdown_option.value = ikey + "  --  " + ivalue.data_type;
        dropdown_option.innerText = ikey + "  --  " + ivalue.data_type;

        if (ikey == BUILDER_DEFAULTS["chart_type"]) {
            var dropdown_option_selected = document.createAttribute("selected");
            dropdown_option_selected.value = "selected";
            dropdown_option.setAttributeNode( dropdown_option_selected );
        }

        chart_dropdown.appendChild( dropdown_option );

    }

    // style template drop down
    var template_dropdown = document.createElement("select");
    template_dropdown.id = "js-chart-builder-dropdown-template";
    var template_dropdown_class = document.createAttribute("class");
    template_dropdown_class.value = "js-chart-builder-dropdown-select";
    template_dropdown.setAttributeNode( template_dropdown_class );
    template_dropdown.addEventListener("change", function () {
        
        var populate_style_directives = jsChartBuilderPopulateStyleDirectives(document.getElementsByClassName("js-chart-builder-style-directives-content-panel")[0], this.value, document.getElementsByClassName("js-chart-builder-dropdown-chart-type").value);

        document.getElementsByClassName("js-chart")[0].setAttribute("template", this.value);

        setTimeout(initChart, 100, null, "js-chart-builder-preview");

    }, false);
    dropdown_panel.appendChild( template_dropdown );

    // style template options
    for (const [ikey, ivalue] of Object.entries(IDEFAULT_DESIGN_TEMPLATES)) {

        var dropdown_option = document.createElement("option");
        dropdown_option.value = ivalue.name;
        dropdown_option.innerText = ivalue.name + "  --  " + ivalue.description;
        template_dropdown.appendChild( dropdown_option );

    }

    // tabs panel
    var tabs_panel = document.createElement("div");
    var tabs_panel_class = document.createAttribute("class");
    tabs_panel_class.value = "js-chart-builder-tabs-panel";
    tabs_panel.setAttributeNode( tabs_panel_class );
    left_column_panel.appendChild( tabs_panel );

    // chart attributes tab
    var chart_attribute_tab = document.createElement("div");
    var chart_attribute_tab_class = document.createAttribute("class");
    chart_attribute_tab_class.value = "js-chart-builder-chart-attribute-tab";
    chart_attribute_tab.setAttributeNode( chart_attribute_tab_class );
    var chart_attribute_tab_style = document.createAttribute("style");
    chart_attribute_tab_style.value = "background-color: hsl(207, 44%, 39%);";
    chart_attribute_tab.setAttributeNode( chart_attribute_tab_style );
    chart_attribute_tab.innerText = "Chart Attributes";
    chart_attribute_tab.addEventListener("click", function () {
        this.style.backgroundColor = "hsl(207, 44%, 39%)";
        var toggle_tabs = jsChartBuilderToggleContentPanels("chart attributes");
        document.getElementsByClassName("js-chart-builder-style-directives-tab")[0].style.backgroundColor = "hsl(207, 44%, 49%)";
    }, false);
    chart_attribute_tab.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    chart_attribute_tab.addEventListener("mouseup", function () {
        this.style.fontWeight = 500;
    }, false);
    tabs_panel.appendChild( chart_attribute_tab );

    // style directives tab
    var style_directives_tab = document.createElement("div");
    var style_directives_tab_class = document.createAttribute("class");
    style_directives_tab_class.value = "js-chart-builder-style-directives-tab";
    style_directives_tab.setAttributeNode( style_directives_tab_class );
    style_directives_tab.innerText = "Style Directives";
    style_directives_tab.addEventListener("click", function () {
        var toggle_tabs = jsChartBuilderToggleContentPanels("style directives");
        this.style.backgroundColor = "hsl(207, 44%, 39%)";
        document.getElementsByClassName("js-chart-builder-chart-attribute-tab")[0].style.backgroundColor = "hsl(207, 44%, 49%)";
    }, false);
    style_directives_tab.addEventListener("mousedown", function () {
        this.style.fontWeight = 200;
    }, false);
    style_directives_tab.addEventListener("mouseup", function () {
        this.style.fontWeight = 500;
    }, false);
    tabs_panel.appendChild( style_directives_tab );

    // content panel
    var content_panel = document.createElement("div");
    var content_panel_class = document.createAttribute("class");
    content_panel_class.value = "js-chart-builder-content-panel";
    content_panel.setAttributeNode( content_panel_class );
    left_column_panel.appendChild( content_panel );

    // chart attributes content panel
    var chart_attributes_content_panel = document.createElement("div");
    var chart_attributes_content_panel_class = document.createAttribute("class");
    chart_attributes_content_panel_class.value = "js-chart-builder-chart-attr-content-panel";
    chart_attributes_content_panel.setAttributeNode( chart_attributes_content_panel_class );
    content_panel.appendChild( chart_attributes_content_panel );

    var populate_chart_attributes = jsChartBuilderPopulateChartAttributes(chart_attributes_content_panel, BUILDER_DEFAULTS["chart_type"]);

    // style directives content panel
    var style_directives_content_panel = document.createElement("div");
    var style_directives_content_panel_class = document.createAttribute("class");
    style_directives_content_panel_class.value = "js-chart-builder-style-directives-content-panel";
    style_directives_content_panel.setAttributeNode( style_directives_content_panel_class );
    content_panel.appendChild( style_directives_content_panel );

    var populate_style_directives = jsChartBuilderPopulateStyleDirectives(style_directives_content_panel, BUILDER_DEFAULTS.template_name, BUILDER_DEFAULTS["chart_type"]);

    // main right column
    var right_column_panel = document.createElement("div");
    var right_column_panel_class = document.createAttribute("class");
    right_column_panel_class.value = "js-chart-builder-right-column-panel";
    right_column_panel.setAttributeNode( right_column_panel_class );
    main_top_panel.appendChild( right_column_panel );

    // preview panel
    var preview_panel = document.createElement("div");
    var preview_panel_class = document.createAttribute("class");
    preview_panel_class.value = "js-chart-builder-preview-panel";
    preview_panel.setAttributeNode( preview_panel_class );
    right_column_panel.appendChild( preview_panel );

    // add the preview chart
    var draw_preview_chart = jsChartBuilderPopulatePreviewChart(preview_panel, BUILDER_DEFAULTS.chart_type, IDEFAULT_CHART_ATTRIBUTES["template"].default);

    // data panel
    var data_panel = document.createElement("div");
    var data_panel_class = document.createAttribute("class");
    data_panel_class.value = "js-chart-builder-data-panel";
    data_panel.setAttributeNode( data_panel_class );
    right_column_panel.appendChild( data_panel );

    // add the data value container
    var populate_data = jsChartBuilderPopulateInputData(data_panel, IDEFAULT_CHART_TYPE_OPTIONS[ BUILDER_DEFAULTS.chart_type ].data_type, BUILDER_DEFAULTS.chart_type);

    return true;
}
// main chart builder function
function jsChartBuilder() {

    var this_builder = document.getElementsByClassName("js-chart-builder");
    if (this_builder.length == 0) {
        var start_builder = jsChartBuilderOpen();

        setTimeout(initChart, 200, null, "js-chart-builder-preview");
    }

}

setTimeout(jsChartBuilder, 200);