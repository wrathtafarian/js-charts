# 📦 Installation Guide

Welcome! This page will walk you through the steps to get **js-charts** running on your system.

> 🛠️ This guide assumes basic familiarity with **HTML**.

---

## 📥 Step 1: Clone the Repository

```bash
git clone https://github.com/wrathtafarian/js-charts.git
cd js-charts
```

---

## 🚀 Step 2: Run the Project

Open one of the example files included in the root of the repository.

Visit in your browser:

```
file:///C:/js-charts/poc-pie-light.htm
```

Start playing around with different chart types.

Refer to the [[Chart Attributes Reference]] or [[Style Directives Reference]] pages for more information on how to customise your new charts.

---

## 🛠 Troubleshooting

- ❌ **Nothing happens when I open an example page**  
  Try reloading the page. If the problem persists:
  1. Ensure that the CSS and JS files are accessible to the HTML example page. Right-click on the page and select view source.
  2. Within the `<head></head>` section of the document, right-click each linked stylesheet and JS library and open each document in a new window.
  3. Review each new window. Ensure the source of every stylesheet or JS library loads in the new window.
  4. If you receive a HTTP **404 Not Found**, update the source code of the example page.
      - Point each linked stylesheet and JS library to the correct location locally, e.g. `<script type="text/javascript" src="/latest/js/js-chart-common.js"></script>`.
  5. If you receive HTTP **401 Unauthorized**, ensure that you have permission to read from the `/css/` and `/js/` folders.

- ❌ **Nothing happens when I open an example page**  
  1. On web pages with heavy load, or on systems with low memory, the DOM may take a long time to load in the browser before the chart can be rendered.
  2. Try reloading the page.
  3. If the problem persists, delay the call to render the chart with a few miliseconds after the DOM has rendered. To do this:
      - Open `js/js-chart-common.js` in a code editor.
      - At the bottom of `/js/js-chart-common.js`, increase the timeout that initiates the `initChart()` from `200` to a higher value.
      - For example, `setTimeout(initChart, 300);`
      - This will allow the DOM extra time to load before the chart is rendered.

---

## 🙋 Need Help?

If you run into issues, check out the [[FAQ]] or open an issue on [GitHub](https://github.com/wrathtafarian/js-charts/issues).

---

## 🤝 Want to Help?  

Want to help? Please see our [[Contributing Guide]] to learn how you can contribute.
