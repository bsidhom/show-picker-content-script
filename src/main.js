import "@webcomponents/custom-elements";

import "./main-app.js";

const main = async () => {
    customElements.forcePolyfill = true;
    document.body.appendChild(document.createElement("main-app"));
};

main().catch((error) => console.error(error));
