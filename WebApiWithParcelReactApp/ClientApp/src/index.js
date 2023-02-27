import React from 'react'
import { createRoot } from "react-dom/client";
import { App } from './app';

const container = document.getElementById("app")
if (container) {
    const root = createRoot(container)
    root.render(<App />)
}
else {
    const error = document.createElement("div")
    error.innerText = "ERROR: No element found with id 'app'"
    error.style.zIndex = "99999"
    error.style.position = "fixed"
    error.style.top = "0"
    error.style.left = "0"
    error.style.right = "0"
    error.style.color = "red"
    error.style.fontSize = "40px"
    error.style.fontWeight = "bold"
    error.style.textAlign = "center"
    document.body.prepend(error);
}