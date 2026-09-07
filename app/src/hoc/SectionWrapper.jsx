import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { useReveal } from "../hooks";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    const [ref, revealed] = useReveal();

    return (
      <motion.section
        ref={ref}
        variants={staggerContainer()}
        initial="hidden"
        // Estado explícito em vez de whileInView: com whileInView, uma seção
        // que nunca chegava a intersectar — ao abrir a página direto num
        // #ancora, por exemplo — ficava invisível para sempre.
        animate={revealed ? "show" : "hidden"}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
