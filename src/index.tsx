import React from "react";
import {Provider} from "react-redux";
import {AppContainer} from "./components/AppContainer";
import {store} from "./store";
import {createRoot} from "react-dom/client";

createRoot(document.getElementById("root") as HTMLDivElement).render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
)