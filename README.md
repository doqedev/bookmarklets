# Bookmarklets
This is work in progress, I'm currently working on bookmarklets!

# Bookmarklet Plans
- [x] Dark Mode

## Bookmarklets
### DarkReader
basically makes almost any webpage dark
```js
javascript:fetch("https://cdn.jsdelivr.net/gh/RuralAnemone/bookmarklets/public/darkmode.js").then((data => data.text())).catch((e => alert(e))).then((text => eval(text))).catch((e => alert(e)));
```
