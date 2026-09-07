import { motion } from "framer-motion";

import { styles } from "../styles";
import { exploring } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Exploring = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Fora do expediente</p>
      <h2 className={styles.sectionHeadText}>Explorando agora.</h2>
    </motion.div>

    <motion.div
      variants={fadeIn("up", "spring", 0.2, 0.75)}
      className="mt-8 sm:mt-12 green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={exploring.icon}
          alt=""
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain shrink-0"
        />

        <div className="text-center sm:text-left">
          <h3 className="text-white font-bold text-[20px] sm:text-[24px]">
            {exploring.title}
          </h3>
          <p className="mt-3 text-secondary text-[14px] sm:text-[16px] leading-relaxed max-w-2xl">
            {exploring.text}
          </p>
        </div>
      </div>
    </motion.div>
  </>
);

export default SectionWrapper(Exploring, "");
