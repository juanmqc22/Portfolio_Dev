import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => (
  <section className="relative w-full h-screen mx-auto overflow-hidden">
    {/* No celular a cena 3D ocupa só a metade de baixo, para nunca cobrir o
        texto. A partir de sm ela volta a preencher a seção inteira. */}
    <div className="absolute bottom-0 left-0 w-full h-[55%] sm:h-full">
      <ComputersCanvas />
    </div>

    <div
      className={`absolute inset-0 top-[100px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    >
      <div className="flex flex-col justify-center items-center mt-3 sm:mt-5">
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-secondary" />
        <div className="w-1 h-32 sm:h-80 violet-gradient" />
      </div>

      <div className="flex-1">
        <h1 className={styles.heroHeadText}>
          Olá, sou <span className="text-secondary">Juan Quezada</span>
        </h1>
        <p className={`${styles.heroSubText} mt-3 max-w-xl`}>
          Desenvolvedor de sistemas. Backend, IA e automação.
        </p>
      </div>
    </div>

    <div className="absolute bottom-8 sm:bottom-10 w-full flex justify-center items-center">
      <a href="#about" aria-label="Ir para a seção sobre mim">
        <div className="w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{ y: [0, 22, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </a>
    </div>
  </section>
);

export default Hero;
