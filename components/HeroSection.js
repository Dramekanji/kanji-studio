import { motion } from "framer-motion";
import { slideUp } from "../utils/motion";
import { growIn } from "../utils/motion";

const HeroSection = () => (
  <div className="flex min-h-screen">
    <div className="flex flex-col justify-between p-8">
      <motion.div
        className="flex flex-col items-start justify-center h-full"
        initial="hidden"
        animate="visible"
        variants={slideUp}
      >
        <h1 className="font-bold text-5xl sm:text-7xl leading-none">
          Your artistic <br />
          vision <br />
          our creative <br />
          mission.
        </h1>
        <p className="mt-6 text-base sm:text-lg max-w-sm">
          At Kanji Studio, we aim to provide <br />
          a creative and supportive environment <br />
          to bring your artistic vision to life.
        </p>
      </motion.div>
    </div>
    <div className="flex-1 flex">
      <motion.div
        className="w-full h-full relative "
        initial="hidden"
        animate="visible"
        variants={growIn}
      >
        <video
          src="/images/independence.mp4" // Assuming you've converted it to .mp4
          autoPlay
          loop
          muted
          playsInline
          className=" w-full h-full rounded-lg "
        >
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  </div>
);

export default HeroSection;
