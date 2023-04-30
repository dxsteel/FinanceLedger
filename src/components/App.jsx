import Header from "./Header";
import AboutUs from "./AboutUs";
import Cases from "./Cases"

import './App.scss';

export const App = () => {
  return (
    <div className="container">
      <Header/>
      <AboutUs/>
      <Cases/>
    </div>
  );
};
