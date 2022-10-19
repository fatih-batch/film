import React, { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Main from "../pages/Main";
import Layout from "../components/Layout";
import Favorite from "../pages/Favorite";
import Detail from "../pages/Detail";

import { ThemeContext, TextColor } from "../utils/context";
import { store } from "../utils/redux/store/store";
import { Provider } from "react-redux";

function App() {
  const [theme, setTheme] = useState("bg-dark");
  const [color, setColor] = useState("white");

  const background = useMemo(() => ({ theme, setTheme }), [theme]);
  const textColor = useMemo(() => ({ color, setColor }), [color]);

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={background}>
        <TextColor.Provider value={textColor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Main />} />
                <Route path="favorite" element={<Favorite />} />
                <Route path="detail/:id" element={<Detail />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TextColor.Provider>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
