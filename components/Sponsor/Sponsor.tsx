import { Chrono } from 'react-chrono';
import styles from './Sponsor.module.css';
export default function Sponsor() {
  let sponsors = [
    {
      image: '/seaport.jpeg',
      name: 'Seaport AI',
      title: 'Title Sponsor'
    },
    {
      image: '/grabon.png',
      name: 'GrabOn',
      title: 'Official Savings Partner'
    },
    {
      image: '/sashido.png',
      name: 'Sashido',
      title: 'Ideation Partner'
    },
    {
      image: '/tech_crawl.png',
      name: 'Tech Crawl',
      title: 'Media Partner'
    },
    {
      image: '/replit.svg',
      name: 'Repl.it',
      title: 'Sponsor'
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
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-5 gap-4"
          style={{ marginLeft: 0 }}
        >{
           sponsors.map(listItem => (
                  <div className="group block mx-auto flex flex-col" key={listItem.name}>
                    <div className={styles.sponsorImage}>
                    <img className="w-20" src={listItem.image} alt={listItem.name}/>
                    </div>
                    <div className={styles.sponsorText}><p className="mx-auto font-semibold text-4x1 text-center">{listItem.name}</p>
                    <p className="mx-auto text-center">{listItem.title}</p></div>
                  </div>
            ))
            }
            <br/><br/>
        </div>
      </div>
    </div>
  );
}
