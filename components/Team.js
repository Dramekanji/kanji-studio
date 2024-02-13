import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import kanji from "../public/images/kanji.JPG";
import balthazard from "../public/images/balthazard.JPG";
import isto from "../public/images/isto.JPG";
import dfive from "../public/images/dfive.JPG";
import djigui from "../public/images/djigui.JPG";

const cards = [
  {
    url: kanji,
    name: "Kanji",
    title: "Creative Director",
    bio: "Meet Kanji, the heart and vision behind Kanji Studio. As an accomplished filmmaker and creative director, Kanji has been the driving force behind numerous successful artistic projects. With a flair for storytelling and an eye for detail, Kanji has collaborated with a diverse range of artists, transforming abstract ideas into tangible masterpieces.",
    id: 1,
  },
  {
    url: balthazard,
    name: "Balthazard DY",
    title: "Artist, Song Writer, Producer",
    bio: "Balthazard DY isn’t just an artist; he’s a creative force to be reckoned with. A true jack of all trades in the realm of music, he seamlessly blends his talents as a singer, songwriter, and producer to craft a sound that’s uniquely his own. His multifaceted approach to music transcends traditional boundaries, making him a standout figure in the industry.",
    id: 2,
  },
  {
    url: isto,
    name: "Isto",
    title: "Artist, Song Writer",
    bio: "Isto stands at the forefront of musical innovation, his voice not just an instrument but a vessel of profound expression. As an amazing vocalist, he’s more than just a singer; he’s a storyteller whose every note resonates with emotion and depth. Isto is in the midst of a creative revolution, meticulously crafting a sound that is uniquely his own, setting new standards in the music industry.",
    id: 3,
  },
  {
    url: dfive,
    name: "D Five",
    title: "Director",
    bio: "D Five stands as a visionary in the world of music video production. With his cinematic approach, he’s not just making music videos; he’s creating visual epics that perfectly complement the music they represent. His style is more than just innovative; it’s pioneering, setting the stage for a new era in how music videos are conceived and perceived.",
    id: 4,
  },
  {
    url: djigui,
    name: "Djigui",
    title: "Artist, Producer",
    bio: "Djigui stands as a beacon in the music industry, a trailblazing producer whose Midas touch has turned numerous projects into chart-topping hits. With years of experience under his belt, Djigui is not just a producer; he is a visionary, shaping the soundscape of modern music with his unique blend of creativity and technical prowess.",
    id: 5,
  },
];

const Team = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const [endValue, setEndValue] = useState("-95%");
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const resizeListener = () => {
      const viewportWidth = window.innerWidth;
      let cardWidth = 450;
      let gap = 6;

      if (viewportWidth < 768) {
        // Small screens
        cardWidth = 200;
        gap = 4;
      } else if (viewportWidth >= 768 && viewportWidth < 998) {
        // Medium screens
        cardWidth = 500; // Adjust cardWidth for medium screens
        gap = 4; // Adjust gap for medium screens
      } // Add more conditions for larger screens if needed

      const totalWidth = (cardWidth + gap) * cards.length - gap;
      const calculatedEndValue = `-${
        ((totalWidth - viewportWidth) / viewportWidth) * 100
      }%`;
      setEndValue(calculatedEndValue);
    };

    resizeListener();
    window.addEventListener("resize", resizeListener);

    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", endValue]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="flex h-16 items-center justify-center">
        <span className="font-semibold text-8xl uppercase text-white mt-32">
          Meet The Team
        </span>
      </div>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
const Card = ({ card }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="group relative h-[450px] w-[450px] overflow-hidden"
      onClick={toggleExpand}
      layout
      transition={{ duration: 0.5 }}
    >
      <Image
        src={card.url}
        alt={card.name}
        fill
        style={{ objectFit: "cover" }}
        className="transition-transform duration-300 group-hover:scale-110"
      />
      {isExpanded && (
        <motion.div
          className="absolute inset-0 z-10 grid place-content-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="text-5xl font-black uppercase text-white">
            {card.name}
          </p>
          <p className="text-gray-300">{card.title}</p>
          <p className="text-white">{card.bio}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Team;
