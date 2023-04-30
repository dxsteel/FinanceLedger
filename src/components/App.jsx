import Header from "./Header";
import AboutUs from "./AboutUs";
import Cases from "./Cases";
import Blog from "./Blog";
import Team from "./Team";
import RequestForm from "./RequestForm";
import Footer from "./Footer";

import './App.scss';

export const App = () => {
  return (
    <div className="container">
      <Header/>
      <AboutUs/>
      <Cases/>
      <Blog/>
      <Team/>
      <RequestForm/>
      <Footer/>
    </div>
  );
};
