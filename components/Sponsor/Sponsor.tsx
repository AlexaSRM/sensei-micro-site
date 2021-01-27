import styles from "./Sponsor.module.css";
export default function Sponsor() {
  const seaport = {
    image: "/eduNDI.png",
    name: "Seaport AI",
    title: "Title Sponsor",
  };
  const sponsors = [
    {
      image: "/grabon.png",
      name: "GrabOn",
      title: "Official Savings Partner",
    },
    {
      image: "/sashido.png",
      name: "Sashido",
      title: "Ideation Partner",
    },
    {
      image: "/tech_crawl.png",
      name: "Tech Crawl",
      title: "Publicity Partner",
    },
    {
      image: "/replit.svg",
      name: "Repl.it",
      title: "Sponsor",
    },
  ];
  return (
    <div className="w-full">
      <div className="w-full md:w-10/12 mx-auto" id="sponsors">
        <h1
          className={[
            styles.titleHeading,
            "text-5xl text-black w-full text-center py-16",
          ].join(" ")}
        >
          Sponsors
        </h1>
        <div>
          <div className={[styles.sponsorImage, ""].join(" ")}>
            <div className="relative h-72 w-48 mx-auto">
              <img
                className="absolute w-auto my-auto mx-auto top-0 bottom-0 right-0 left-0"
                src={seaport.image}
                alt={seaport.name}
              />
            </div>

            <div className={styles.sponsorText}>
              <p className="mx-auto font-semibold text-4xl text-center">
                {seaport.name}
              </p>
              <p className="mx-auto text-2xl text-center">{seaport.title}</p>
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-4 gap-4 mb-20"
          style={{ marginLeft: 0 }}
        >
          {sponsors.map((listItem) => (
            <div
              className="group block mx-auto flex flex-col"
              key={listItem.name}
            >
              <div className={[styles.sponsorImage, ""].join(" ")}>
                <div className="relative h-72 w-48 mx-auto">
                  <img
                    className="absolute w-auto my-auto mx-auto top-0 bottom-0 right-0 left-0"
                    src={listItem.image}
                    alt={listItem.name}
                  />
                </div>

                <div className={styles.sponsorText}>
                  <p className="mx-auto font-semibold text-3xl text-center">
                    {listItem.name}
                  </p>
                  <p className="mx-auto text-xl text-center">
                    {listItem.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
