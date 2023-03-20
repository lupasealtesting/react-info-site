//ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

const newHeader = document.createElement("h1")

newHeader.textContent = "Hello, world!"

newHeader.className = "header"

const rootDiv = document.querySelector("#root")

rootDiv.appendChild(newHeader);