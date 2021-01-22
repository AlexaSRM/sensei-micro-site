import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div
      className="navbar flex sticky top-0 text-lg items-center pt-5 px-1 md:px-9 bg-white mx-0 w-full"
      style={{ zIndex: 99 }}
    >
      <p className="inline mr-auto text-3xl">
        <a href="#">
          <img src="/alexa_logo.svg" className="inline h-8 md:h-12" />
        </a>
      </p>

      <p
        className="hidden md:inline ml-auto space-x-9"
        style={{ width: "fit-content" }}
      >
        <a className={styles.menuItem} href="#">
          Home
        </a>
        <a className={styles.menuItem} href="#timeline">
          Timeline
        </a>
        <a className={styles.menuItem} href="#sponsors">
          Sponsors
        </a>
      </p>
      <a href="https://google.co.in" className="hidden md:block">
        <span
          className="md:ml-7 p-3 rounded-lg font-bold text-white text-sm md:text-base"
          style={{ background: "#393E5B" }}
        >
          Register Now!
        </span>
      </a>
    </div>
  );
}
