import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-28 h-28 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
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
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      Sou desenvolvedor de sistemas com foco em Inteligência Artificial,
      automação e integração de processos. Hoje construo aplicações internas
      na Power Platform — PowerApps, Power BI e integrações — que tiram o
      trabalho manual do caminho das equipes. Antes disso passei por suporte
      de TI e por dois anos de projetos web como freelance, o que me deixou
      confortável tanto perto da infraestrutura quanto do usuário final.
      Sou formado em Análise e Desenvolvimento de Sistemas pela FIAP (2023) e
      concluí a pós-tech em IA para Devs na mesma instituição (2026), onde
      levei projetos do dado bruto ao modelo em produção: visão
      computacional, análise de sentimento e modelos de classificação.
      Trabalho com Python, Java e C#, gosto de metas claras e de soluções que
      aguentam o mundo real. Vamos construir algo juntos?
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");
