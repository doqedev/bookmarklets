const t = setTimeout(timeout, 5000);
let dreader = document.createElement("script");
const settings = {
    brightness: 100,
    contrast: 90,
    sepia: 0,
};

if (typeof DarkReader === "undefined") {
    clearTimeout(t)
    dreader.setAttribute(
        "src",
        "https://cdn.jsdelivr.net/npm/darkreader/darkreader.min.js"
    );
    dreader.onload = () => {
        clearTimeout(t)
        DarkReader.enable(settings);
        // alert("DarkReader enabled")
    }
    dreader.onerror = (err) => {
        clearTimeout(t)
        alert(err)
        console.error(err)
    }
    document.body.appendChild(dreader)
} else {
    clearTimeout(t)
    DarkReader.enable(settings)
    alert("DarkReader is already enabled, re-enabling it")
}

function timeout() {
    dreader.remove()
    alert("Script couldn't load in atleast 5 seconds.")
}
