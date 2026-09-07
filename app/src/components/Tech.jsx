import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useMediaQuery } from "../hooks";

const Tech = () => {
  // Cada esfera é um contexto WebGL próprio. Em telas pequenas isso derruba o
  // desempenho (e o navegador começa a descartar contextos), então lá as
  // tecnologias viram uma grade estática.
  const canRender3D = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Com o que eu trabalho</p>
        <h2 className={styles.sectionHeadText}>Tecnologias.</h2>
      </motion.div>

      {canRender3D ? (
        <div className="mt-16 flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-3 xs:grid-cols-4 gap-3 sm:gap-4">
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              variants={fadeIn("up", "spring", index * 0.05, 0.5)}
              className="bg-tertiary rounded-2xl py-4 px-2 flex flex-col items-center justify-center gap-2"
            >
              <img
                src={technology.icon}
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <p className="text-white-100 text-[11px] sm:text-[12px] text-center leading-tight">
                {technology.name}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "");
