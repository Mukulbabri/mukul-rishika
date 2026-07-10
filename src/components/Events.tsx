import { EventCard } from "./EventCard";
import bgSangeet from "../assets/bg-sangeet.jpg";
import coupleSangeet from "../assets/couple-sangeet.png";
import bgGavdev from "../assets/bg-gavdev.jpg";
import coupleGavdev from "../assets/couple.gavdev.png";
import bgHaldi from "../assets/bg-haldi.jpg";
import coupleHaldi from "../assets/couple-haldi.png";
import bgSapt from "../assets/bg-sapthapadi.jpg";
import coupleSapt from "../assets/couple-sapthapadi.png";
import bgVarmala from "../assets/bg-varmala.jpg";
import coupleVarmala from "../assets/couple-varmala.png";

const EVENTS = [
  {
    title: "Sangeet",
    subtitle: "A spirited night of song, dance and laughter",
    date: "FRI · July 17, 2026",
    time: "08:00 PM onwards",
    venue: "Vikhale, Khatav Taluka, Satara",
    bg: bgSangeet,
    couple: coupleSangeet,
  },
  {
    title: "Gavdev",
    subtitle: "Seeking blessings from the village deity",
    date: "SAT · July 18, 2026",
    time: "07:00 PM onwards",
    venue: "Vikhale, Khatav Taluka, Satara",
    bg: bgGavdev,
    couple: coupleGavdev,
    imageSize: "65%",
  },
  {
    title: "Haldi",
    subtitle: "A joyful morning of haldi, blessings and laughter",
    date: "SUN · July 19, 2026",
    time: "11:00 AM onwards",
    venue: "Fulai Garden, Zirapwadi, Phaltan, Satara",
    bg: bgHaldi,
    couple: coupleHaldi,
  },
  {
    title: "Sapthapadi",
    subtitle: "The sacred seven vows under the floral mandap",
    date: "SUN · July 19, 2026",
    time: "03:48 PM",
    venue: "Fulai Garden, Zirapwadi, Phaltan, Satara",
    bg: bgSapt,
    couple: coupleSapt,
  },
  {
    title: "Varmala",
    subtitle: "The exchange of garlands and a joyous celebration",
    date: "SUN · July 19, 2026",
    time: "06:15 PM",
    venue: "Fulai Garden, Zirapwadi, Phaltan, Satara",
    bg: bgVarmala,
    couple: coupleVarmala,
  },
];

export function Events() {
  return (
    <section className="relative py-14 sm:py-20 px-4 bg-sage-soft/60">
      <div className="text-center">
        <h2 className="font-script text-rose text-4xl sm:text-6xl">Events Schedule</h2>
        <span className="block mt-2 text-gold-deep">❀</span>
      </div>
      
      <div className="mt-10 sm:mt-12 grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {EVENTS.map((e) => (
          <EventCard key={e.title} {...e} />
        ))}
      </div>
    </section>
  );
}
