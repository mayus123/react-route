import React from "react";
import "./styles.css";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Navbar from "./Page/Navbar";
import DetailUser from "./Page/DetailUser";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/DetailUser/:id" component={DetailUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
