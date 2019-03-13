import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/indexReducer";
import indexMiddleware from "./middleware/indexMiddleware";

const store = createStore(rootReducer, indexMiddleware);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
