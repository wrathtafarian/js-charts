# 🎨 Color

Color can be defined in many different ways in HTML and CSS.

**js-charts** supports all of the different methods to define color that are listed below.

> 💡 Any color can be replaced with the keyword ***transparent***.

## Table of Contents
 - [🎯 1. HEX (Hexadecimal)](#-1-hex-hexadecimal)
 - [🌈 2. RGB (Red, Green, Blue)](#-2-rgb-red-green-blue)
 - [💧 3. RGBA (RGB + Alpha)](#-3-rgba-rgb--alpha)
 - [🎨 4. HSL (Hue, Saturation, Lightness)](#-4-hsl-hue-saturation-lightness)
 - [🌫️ 5. HSLA (HSL + Alpha)](#️-5-hsla-hsl--alpha)
 - [🏷️ 6. Named Color](#️-6-named-color)

Here's a quick and clear summary of the different ways to specify color in HTML/CSS, including all the classics like RGB, HEX, and more.

## 🎯 1. HEX (Hexadecimal)

 - Format: `#RRGGBB` or shorthand #`RGB`
 - Example: `#ff0000` (red), `#0f0` (shorthand for #00ff00)
 - Each pair (RR, GG, BB) represents a value from `00` to `FF` (0–255 in decimal)

## 🌈 2. RGB (Red, Green, Blue)

 - Format: `rgb(red, green, blue)`
 - Example: `rgb(255, 0, 0)` (red)
 - Each value ranges from `0` to `255`

## 💧 3. RGBA (RGB + Alpha)

 - Format: `rgba(red, green, blue, alpha)`
 - Example: `rgba(255, 0, 0, 0.5)` (semi-transparent red)
 - The `alpha` controls transparency (`0` = fully transparent, `1` = fully opaque)

## 🎨 4. HSL (Hue, Saturation, Lightness)

 - Format: `hsl(hue, saturation%, lightness%)`
 - Example: `hsl(0, 100%, 50%)` (red)
 - `Hue`: angle on color wheel (0–360), `Saturation` & `Lightness`: percentage values
 - 🎨 Hue: Think of `hue` as the base color, like red, blue, yellow, etc. that is measured in degrees on the color wheel:
    - 0° = red
    - 120° = green
    - 240° = blue
 - 💦 Saturation: Controls how much "colorfulness" is added to the hue (how intense or vivid the color is). Specified as a % value:
    - 100% = full color (vibrant)
    - 0% = gray (no color)
 - 🌕 Lightness: How light or dark the color appears (it’s like adding white or black to your paint). Lightness is specified as a % value:
    - 0% = black
    - 50% = “normal” brightness of the hue
    - 100% = white

## 🌫️ 5. HSLA (HSL + Alpha)

 - Format: `hsla(hue, saturation%, lightness%, alpha)`
 - Example: `hsla(0, 100%, 50%, 0.3)` (light transparent red)
 - 🎨 Hue: Think of `hue` as the base color, like red, blue, yellow, etc. that is measured in degrees on the color wheel:
    - 0° = red
    - 120° = green
    - 240° = blue
 - 💦 Saturation: Controls how much "colorfulness" is added to the hue (how intense or vivid the color is). Specified as a % value:
    - 100% = full color (vibrant)
    - 0% = gray (no color)
 - 🌕 Lightness: How light or dark the color appears (it’s like adding white or black to your paint). Lightness is specified as a % value:
    - 0% = black
    - 50% = “normal” brightness of the hue
    - 100% = white

## 🏷️ 6. Named Color

 - Format: `colorname`
 - Example: `red`, `blue`, `goldenrod`, `rebeccapurple`, etc.
 - Here’s a list of all named colors that are supported by modern browsers. These are standard CSS4 named colors, which you can use directly in HTML or CSS using their names.

| Color Name | Hex Code | Color Name | Hex Code |
|------------|----------|------------|----------|
| aliceblue | #F0F8FF | lightpink | #FFB6C1 |
| antiquewhite | #FAEBD7 | lightsalmon | #FFA07A |
| aqua | #00FFFF | lightseagreen | #20B2AA |
| aquamarine | #7FFFD4 | lightskyblue | #87CEFA |
| azure | #F0FFFF | lightslategray | #778899 |
| beige | #F5F5DC | lightslategrey | #778899 |
| bisque | #FFE4C4 | lightsteelblue | #B0C4DE |
| black | #000000 | lightyellow | #FFFFE0 |
| blanchedalmond | #FFEBCD | lime | #00FF00 |
| blue | #0000FF | limegreen | #32CD32 |
| blueviolet | #8A2BE2 | linen | #FAF0E6 |
| brown | #A52A2A | magenta | #FF00FF |
| burlywood | #DEB887 | maroon | #800000 |
| cadetblue | #5F9EA0 | mediumaquamarine | #66CDAA |
| chartreuse | #7FFF00 | mediumblue | #0000CD |
| chocolate | #D2691E | mediumorchid | #BA55D3 |
| coral | #FF7F50 | mediumpurple | #9370DB |
| cornflowerblue | #6495ED | mediumseagreen | #3CB371 |
| cornsilk | #FFF8DC | mediumslateblue | #7B68EE |
| crimson | #DC143C | mediumspringgreen | #00FA9A |
| cyan | #00FFFF | mediumturquoise | #48D1CC |
| darkblue | #00008B | mediumvioletred | #C71585 |
| darkcyan | #008B8B | midnightblue | #191970 |
| darkgoldenrod | #B8860B | mintcream | #F5FFFA |
| darkgray | #A9A9A9 | mistyrose | #FFE4E1 |
| darkgreen | #006400 | moccasin | #FFE4B5 |
| darkgrey | #A9A9A9 | navajowhite | #FFDEAD |
| darkkhaki | #BDB76B | navy | #000080 |
| darkmagenta | #8B008B | oldlace | #FDF5E6 |
| darkolivegreen | #556B2F | olive | #808000 |
| darkorange | #FF8C00 | olivedrab | #6B8E23 |
| darkorchid | #9932CC | orange | #FFA500 |
| darkred | #8B0000 | orangered | #FF4500 |
| darksalmon | #E9967A | orchid | #DA70D6 |
| darkseagreen | #8FBC8F | palegoldenrod | #EEE8AA |
| darkslateblue | #483D8B | palegreen | #98FB98 |
| darkslategray | #2F4F4F | paleturquoise | #AFEEEE |
| darkslategrey | #2F4F4F | palevioletred | #DB7093 |
| darkturquoise | #00CED1 | papayawhip | #FFEFD5 |
| darkviolet | #9400D3 | peachpuff | #FFDAB9 |
| deeppink | #FF1493 | peru | #CD853F |
| deepskyblue | #00BFFF | pink | #FFC0CB |
| dimgray | #696969 | plum | #DDA0DD |
| dimgrey | #696969 | powderblue | #B0E0E6 |
| dodgerblue | #1E90FF | purple | #800080 |
| firebrick | #B22222 | rebeccapurple | #663399 |
| floralwhite | #FFFAF0 | red | #FF0000 |
| forestgreen | #228B22 | rosybrown | #BC8F8F |
| fuchsia | #FF00FF | royalblue | #4169E1 |
| gainsboro | #DCDCDC | saddlebrown | #8B4513 |
| ghostwhite | #F8F8FF | salmon | #FA8072 |
| gold | #FFD700 | sandybrown | #F4A460 |
| goldenrod | #DAA520 | seagreen | #2E8B57 |
| gray | #808080 | seashell | #FFF5EE |
| green | #008000 | sienna | #A0522D |
| greenyellow | #ADFF2F | silver | #C0C0C0 |
| grey | #808080 | skyblue | #87CEEB |
| honeydew | #F0FFF0 | slateblue | #6A5ACD |
| hotpink | #FF69B4 | slategray | #708090 |
| indianred | #CD5C5C | slategrey | #708090 |
| indigo | #4B0082 | snow | #FFFAFA |
| ivory | #FFFFF0 | springgreen | #00FF7F |
| khaki | #F0E68C | steelblue | #4682B4 |
| lavender | #E6E6FA | tan | #D2B48C |
| lavenderblush | #FFF0F5 | teal | #008080 |
| lawngreen | #7CFC00 | thistle | #D8BFD8 |
| lemonchiffon | #FFFACD | tomato | #FF6347 |
| lightblue | #ADD8E6 | turquoise | #40E0D0 |
| lightcoral | #F08080 | violet | #EE82EE |
| lightcyan | #E0FFFF | wheat | #F5DEB3 |
| lightgoldenrodyellow | #FAFAD2 | white | #FFFFFF |
| lightgray | #D3D3D3 | whitesmoke | #F5F5F5 |
| lightgreen | #90EE90 | yellow | #FFFF00 |
| lightgrey | #D3D3D3 | yellowgreen | #9ACD32 |