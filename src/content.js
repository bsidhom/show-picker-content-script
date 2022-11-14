const main = async () => {
  const button = document.createElement("button");
  button.innerText = "Pick native (raw)";
  button.addEventListener("click", () => {
    console.log("showing native picker (raw)");
    document.querySelector("#native-input").showPicker();
  });
  document.body.appendChild(button);
  await import(chrome.runtime.getURL("./custom-elements.js"));
  await import(chrome.runtime.getURL("./main-app.js"));
  const element = document.createElement("main-app");
  document.body.appendChild(element);
};

main().catch((error) => console.error(error));
