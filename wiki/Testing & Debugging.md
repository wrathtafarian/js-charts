# 🧪 Testing & Debugging

This page provides guidance on how to test and debug **`your-project-name`** effectively.

> 💡 Whether you're writing new features or troubleshooting issues, these tools and commands will help ensure your project runs smoothly.

---

## ✅ Running Tests

Use the following commands to run the project’s test suite:

### Node.js (Jest, Mocha, etc.)

```bash
npm test
```

### Python (pytest)

```bash
pytest
```

### Other Frameworks

Be sure to refer to the specific test runner or tool used in your stack (e.g., `go test`, `cargo test`, etc.).

---

## 🔁 Watch Mode (Optional)

For test runners that support watch mode:

```bash
npm test -- --watch
# or
pytest --lf --maxfail=1 --disable-warnings
```

This helps speed up the dev/test cycle by rerunning only the most recent or failed tests.

---

## 🔍 Debugging Tips

Here are some tools and techniques to help debug common issues:

### 📜 Enable Verbose Logging

Most apps support a verbose or debug flag:

```bash
node app.js --debug
# or
python app.py --debug
```

Or set a debug environment variable:

```bash
export DEBUG=true
```

---

### 🛠 Tools You Can Use

- 🔧 **VS Code Debugger** — set breakpoints and step through code
- 🔥 **Console Logging** — use `console.log()` or `print()` to trace flow
- 🧪 **Test Coverage** — identify untested code with tools like `jest --coverage` or `coverage.py`

---

## 🧹 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| ❌ Tests failing due to missing env vars | Double-check your `.env` file or use mocks |
| ❌ Module not found | Run `npm install` or `pip install -r requirements.txt` |
| ❌ Port already in use | Change the port in your `.env` or config file |
| 🐢 Tests are slow | Limit to specific files: `pytest tests/unit/` or `npm test -- my-file.test.js` |

---

## 📄 Related Docs

- 📚 [[Installation Guide]]
- 🔍 [[Project Architecture]]
- ✏️ [[Contributing Guide]]

---

## 🙋 Need Help?

If you’re stuck, open an issue on [GitHub](https://github.com/your-username/your-repo/issues) or start a discussion.