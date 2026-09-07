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

    {/* Faixa fina em vez de card: com um item só, um card grande deixaria a
        seção com cara de inacabada. */}
    <motion.div
      variants={fadeIn("up", "spring", 0.2, 0.6)}
      className="mt-8 flex items-start sm:items-center gap-4 sm:gap-6 bg-tertiary rounded-2xl border-l-4 border-secondary py-5 px-5 sm:px-7"
    >
      <img
        src={exploring.icon}
        alt=""
        className="w-11 h-11 sm:w-14 sm:h-14 object-contain shrink-0"
      />

      <div className="min-w-0">
        <h3 className="text-white font-bold text-[16px] sm:text-[19px]">
          {exploring.title}
        </h3>
        <p className="mt-1 text-secondary text-[13px] sm:text-[15px] leading-relaxed">
          {exploring.text}
        </p>
      </div>
    </motion.div>
  </>
);

export default SectionWrapper(Exploring, "");
