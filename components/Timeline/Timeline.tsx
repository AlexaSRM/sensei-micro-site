import { Chrono } from "react-chrono";
import styles from "./Timeline.module.css";

export default function Timeline() {
  let itemsList1 = [
    {
      cardTitle: "1st February 2021",
      cardSubtitle: "JavaScript Session",
    },
    {
      cardTitle: "3rd February 2021",
      cardSubtitle: "Introducing Node.js",
    },
    {
      cardTitle: "5th February 2021",
      cardSubtitle: "Advanced concepts of Node.js",
    },
  ];
  let itemsList2 = [
    {
      cardTitle: "7th February 2021",
      cardSubtitle: "Intro to AWS",
    },
    {
      cardTitle: "9th February 2021",
      cardSubtitle: "Advanced Concepts of AWS",
    },
    {
      cardTitle: "11th February 2021",
      cardSubtitle: "Discovering Alexa Skills",
    },
  ];
  return (
    <div className="w-full" style={{ backgroundColor: "#393E5B" }}>
      <div className="w-full md:w-10/12 mx-auto" id="timeline">
        <h1
          className={[
            styles.titleHeading,
            "text-5xl text-white w-full text-center py-16",
          ].join(" ")}
        >
          Timeline
        </h1>
        <div className="grid grid-cols-2 w-full space-x-5 pb-16">
          <div className="col-span-3 md:col-span-1">
            <Chrono
              items={itemsList1}
              mode="VERTICAL"
              disableNavOnKey
              hideControls
              theme={{
                primary: "#FB905D",
                secondary: "#FB905D",
                cardBgColor: "#393E5B",
                cardForeColor: "white",
              }}
            />
          </div>
          <div
            className="col-span-3 md:col-span-1 ml-0"
            style={{ marginLeft: 0 }}
          >
            <Chrono
              items={itemsList2}
              mode="VERTICAL"
              disableNavOnKey
              hideControls
              theme={{
                primary: "#FB905D",
                secondary: "#FB905D",
                cardBgColor: "#393E5B",
                cardForeColor: "white",
              }}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
