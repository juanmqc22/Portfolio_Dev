import { motion } from "framer-motion";

import { styles } from "../styles";
import { curriculo, juan } from "../constants/assets";

const Hero = () => (
  <section className="relative w-full min-h-screen mx-auto flex items-center">
    <div
      className={`w-full max-w-7xl mx-auto ${styles.paddingX} pt-28 pb-24 sm:pt-32 sm:pb-28 flex flex-col-reverse lg:flex-row lg:items-center gap-10 lg:gap-16`}
    >
      <div className="flex flex-row items-start gap-5 flex-1">
        <div className="flex flex-col items-center mt-2 sm:mt-4">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-secondary" />
          <div className="w-1 h-28 sm:h-56 violet-gradient" />
        </div>

        <div className="flex-1">
          <h1 className={styles.heroHeadText}>
            Olá, sou <span className="text-secondary">Juan Quezada</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3 max-w-xl`}>
            Desenvolvedor de sistemas. Backend, IA e automação.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="bg-secondary text-primary font-bold text-[14px] sm:text-[15px] rounded-xl px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Ver projetos
            </a>
            <a
              href="#contact"
              className="border border-secondary text-secondary font-bold text-[14px] sm:text-[15px] rounded-xl px-6 py-3 hover:bg-secondary hover:text-primary transition-colors"
            >
              Falar comigo
            </a>
            <a
              href={curriculo}
              target="_blank"
              rel="noreferrer"
              className="border border-white/25 text-white font-bold text-[14px] sm:text-[15px] rounded-xl px-6 py-3 hover:border-secondary hover:text-secondary transition-colors"
            >
              Currículo
            </a>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex justify-center lg:justify-end shrink-0"
      >
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-full bg-secondary/20 blur-2xl"
          />
          <div className="relative rounded-full p-[3px] green-pink-gradient">
            <img
              src={juan}
              alt="Juan Quezada"
              width="720"
              height="720"
              className="w-52 h-52 xs:w-64 xs:h-64 lg:w-[380px] lg:h-[380px] rounded-full object-cover bg-tertiary"
            />
          </div>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-6 sm:bottom-10 w-full flex justify-center items-center">
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
