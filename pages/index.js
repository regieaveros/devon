import { Fragment } from "react";
import Home from "./home/index";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <Fragment>
      <Header />
        <Home />
      <Footer />
    </Fragment>
  )
}
