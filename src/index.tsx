import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Projects from "./pages/projects";
import About from "./pages/about";
import Shaders from "./pages/shaders";
import Blogs from "./pages/blogs";
import NotFound from "./pages/notFound";
import { createTheme } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

let theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["Courier", "monospace"].join(","),
  },
});

theme.typography.body1 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "95%",
  },
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="shaders" element={<Shaders />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
