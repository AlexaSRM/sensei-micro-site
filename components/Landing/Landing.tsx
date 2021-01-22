import Triangle from "../Triangle/Triangle";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className="w-full md:grid md:grid-cols-3 align-middle h-full">
      <div className="md:col-span-2 space-y-9 mt-28 md:my-auto" id="landing">
        <img src="/sensei_hat.svg" className="inline-block" />{" "}
        <span
          className={[
            styles.senseiLogo,
            "align-middle text-2xl md:text-6xl",
          ].join(" ")}
        >
          Sensei
        </span>
        <p
          className={[styles.landingText, "text-2xl md:text-6xl pt-5"].join(
            " "
          )}
        >
          Brought to you
          <br />
          By Alexa Developers SRM
          <br />A flagship training program
          <br />
          <br className="block md:hidden" />
          <a href="https://google.co.in">
            <p
              className="inline p-4 mr-4 rounded-lg font-bold text-white text-sm md:text-2xl mt-12 md:mt-0 tracking-wide"
              style={{ width: "fit-content", backgroundColor: "#393E5B" }}
            >
              Register Now
            </p>
          </a>
          <a href="https://google.co.in">
            <p
              className="inline p-4 ml-4 rounded-lg font-bold text-white text-sm md:text-2xl mt-12 md:mt-0 tracking-wide"
              style={{ width: "fit-content", backgroundColor: "#FB905D" }}
            >
              Join Discord!
            </p>
          </a>
        </p>
      </div>
      <div className="block mt-20 md:my-auto md:col-span-1">
        <Triangle />
      </div>
    </div>
  );
}
