# ❓ Frequently Asked Questions (FAQ)

Welcome to the FAQ page! Here you'll find answers to the most common questions about **js-charts**.

---

## 💡 General

### 👉 What is js-charts?

**js-charts** is a low-code charting and graphing solution. Charts are defined as HTML elements which are parsed and rendered into charts.

### 👉 Who is this project for?

This project is for anyone wishing to add high-quality charts to their website, presentation or documentation without having to write any code.

---

## ⚙️ Customization

### 🦶 How do I change the *copyright text* displayed in a chart's footer?

The copyright text that appears in a chart's footer can be customized in two ways:

 1. Change the value in the `IDEFAULT_DESIGN_TEMPLATES` constant in the `js/js-chart-common.js` file. The `IDEFAULT_DESIGN_TEMPLATES` constant is an *array* containing multiple style templates. Change the value of the `footer_inner_text` element in every style template in the array.
 2. The copyright text can also be adjusted on a chart-by-chart basis using the `js-footer-inner-text` style directive. Specify the new copyright text by including the `js-footer-inner-text` directive in the chart container. Refer to the [[Style Directives]] page for detailed instuctions on how to customize a chart using style directives.

### 🎨 I cannot specify custom colors using the `js-color-palette` style directive. Why is my chart completely white, black or transparent?

Due to certain color formats that use the comma character, the color palette list must always be separated by a ***semi-color character***. As demonstrated below, different color formats can be mixed inside one `js-color-palette` style directive container, but each color must be separated with a ***semi-colon character***.

```
<div class="js-color-palette">#ffa500; rgb(62, 88, 121); rgb(33, 53, 85, 0.5); hsl(199, 31%, 55%); hsla(182, 25%, 40%, 0.6); Brown</div>
```

Failing the use a ***semi-colon*** character as separator for the `js-color-palette` directive may result in either a complete black, white or transparent chart.


## ⚙️ Installation

### 👉 Are there any system requirements?

Not really. Charts are rendered using CSS and JS, which are supported by all modern browsers on all major platforms.

---

## 🚀 Usage

#### 🧱 Step 1: Clone the Repository

```bash
git clone https://github.com/wrathtafarian/js-charts.git
cd js-charts
```

---

#### 🚀 Step 2: Run the Project

Open one of the example `.htm` files included in the `/examples/` folder in the repository.

Visit in example page your browser:

```
file:///C:/js-charts/poc-pie-light.htm
```

Start playing around with different chart types.

---

#### ✅ You're Ready!

Your project should now be up and running. Start building, exploring, or contributing!

---

## 🧪 Testing & Debugging

### 👉 How do I run tests?

```bash
npm test
# or
pytest
```

See the [[Testing & Debugging]] guide for more info.

### 👉 How do I enable debug mode?

Set the environment variable:

```bash
export DEBUG=true
```

Or pass the `--debug` flag when running the app.

---

## 🙋‍♀️ Contributing

### 👉 How can I contribute?

Check out the [[Contributing Guide]] for steps on how to fork, branch, make changes, and open a pull request.

---

## 🔒 Security & Privacy

### 👉 How do I report a security vulnerability or privacy breach?

- ***Do not open a public issue.***
- Please email us directly at: **jsopencharts@gmail.com**
- 🕵️ We take the security and privacy of all of our users very seriously and will respond as quickly as we can.

---

## 📬 Still have questions?

- Open an issue on [GitHub](https://github.com/wrathtafarian/js-charts/issues).
- Check out the [Discussions](https://github.com/wrathtafarian/js-charts/discussions) tab.
- Reach out via the [[Contact & Support]] page.