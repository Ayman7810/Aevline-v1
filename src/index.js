import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/reducers/stor";
import "aos/dist/aos.css";
import Aos from "aos";


Aos.init({
  duration: 600, // مدة الحركة بالميلي ثانية
});
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // استخدام createRoot

root.render(
  <Provider store={store}>
    <App />
  </Provider>
 
);
