import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    options={{ max: 25, scale: 1, speed: 450 }}
    className="w-full last:col-span-2 lg:last:col-span-1"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.25, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-6 px-3 sm:px-6 h-full min-h-[160px] sm:min-h-[210px] flex justify-center items-center flex-col gap-3 sm:gap-4">
        <img src={icon} alt="" className="w-14 h-14 sm:w-20 sm:h-20 object-contain" />
        <h3 className="text-white text-[14px] sm:text-[18px] font-bold text-center leading-tight">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introdução</p>
      <h2 className={styles.sectionHeadText}>Visão geral.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]"
    >
      Sou desenvolvedor de sistemas com foco em IA, automação e integração de
      processos. Hoje construo aplicações internas na Power Platform que tiram
      o trabalho manual do caminho das equipes. Sou formado em Análise e
      Desenvolvimento de Sistemas pela FIAP (2023) e concluí a pós-tech em IA
      para Devs na mesma instituição (2026), onde levei projetos do dado bruto
      ao modelo em produção.
    </motion.p>

    <div className="mt-10 sm:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");
