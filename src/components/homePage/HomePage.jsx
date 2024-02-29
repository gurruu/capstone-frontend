import React from "react";
import Navbar from "./navBar.jsx";
import Footer from "./footer.jsx";
// import Cardbox from "../card/cardbox.jsx";
import Cardbox from "../ncard/cardbox.jsx";
import Accordion from "./accordion.jsx";
import Typed from "./typed.jsx";
import Canus from "./canus.jsx";
import "./HomePage.css";

const items = [
  {
    title: "How Do I Unlock Stocks on Investo?",
    content:
      "Stocks is now live on Investo. You will be able to see the stocks tab next to mutual fund tab on the app and web now.",
  },
  {
    title: "How Much Do I Have to Pay for Account Opening?",
    content:
      "There is no charge on opening a trading and demat account on Investo. ",
  },
  {
    title: "Is There An Account Maintenance Charge?",
    content:
      "There are no account maintenance charges on Groww. Investors will be charged Rs. 20 or 0.05% of the order amount, whichever is lower, for every order.",
  },
  {
    title: "What are The Market Timings/Trading Hours?",
    content:
      "Pre-market session: 9 AM – 9:15 AM \n Normal trading hours: 9:15 AM – 3:30 PM \n Post-market session: 3:40 PM – 4:00 PM",
  },
  {
    title: "Why Are There Different Groups/Series on BSE and NSE?",
    content:
      "BSE (Bombay Stock Exchange) and NSE (National Stock Exchange of India) categorizes stocks into groups and series respectively based on what they represent (for example: actively traded stocks, small & medium enterprise stocks, government securities, etc.).",
  },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <Navbar></Navbar>
      <Typed></Typed>
      
      <Cardbox />
      <h1 className="frequently">Frequently Asked Questions</h1>
      <Accordion items={items} />
      <Canus></Canus>
      <Footer></Footer>
    </div>
  );
}
