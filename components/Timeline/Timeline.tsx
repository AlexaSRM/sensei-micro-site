import { Chrono } from "react-chrono";
import styles from "./Timeline.module.css";

export default function Timeline() {
  let itemsList1 = [
    {
      cardTitle: "1 February 2021",
      cardSubtitle: "Hello JavaScript!",
    },
    {
      cardTitle: "3 February 2021",
      cardSubtitle: "What is Node.js?",
    },
    {
      cardTitle: "5 February 2021",
      cardSubtitle: "Deeper into Node.js",
    },
  ];
  let itemsList2 = [
    {
      cardTitle: "7 February 2021",
      cardSubtitle: "Amazing AWS",
    },
    {
      cardTitle: "9 February 2021",
      cardSubtitle: "Advanced AWS",
    },
    {
      cardTitle: "11 February 2021",
      cardSubtitle: "Discovering Alexa Skills",
    },
  ];
  let itemsList3 = [
    {
      cardTitle: "February 2021 (Second Half)",
      cardSubtitle: "Project I",
    },
    {
      cardTitle: "March 2021 (First Half)",
      cardSubtitle: "Project II",
    },
    {
      cardTitle: "March 2021 (Second Half)",
      cardSubtitle: "Project III",
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
        <div className="grid grid-cols-3 w-full space-x-5 pb-16">
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
          <div className="col-span-3 md:col-span-1" style={{ marginLeft: 0 }}>
            <Chrono
              items={itemsList3}
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
