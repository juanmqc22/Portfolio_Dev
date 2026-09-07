import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../constants/assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  context,
}) => {
  // Projetos internos de trabalho não têm repositório público: o card vira
  // conteúdo estático com um selo de contexto no lugar do botão do GitHub.
  const Media = source_code_link ? "a" : "div";
  const linkProps = source_code_link
    ? { href: source_code_link, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <motion.div
      variants={fadeIn("up", "spring", (index % 3) * 0.3, 0.75)}
      className="w-full sm:w-[360px]"
    >
      <Tilt
        options={{ max: 25, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl h-full"
      >
        <Media
          {...linkProps}
          className="block relative w-full h-[190px] sm:h-[230px] group"
        >
          <img
            src={image}
            alt={`Prévia do projeto ${name}`}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />

          {source_code_link ? (
            /* No toque não existe hover, então o botão fica sempre visível no
               celular e só aparece no hover a partir de sm. */
            <span className="absolute inset-0 flex justify-end m-3 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
              <span className="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
                <img src={github} alt="" className="w-1/2 h-1/2 object-contain" />
              </span>
            </span>
          ) : (
            <span className="absolute bottom-3 right-3 bg-primary/85 text-secondary text-[11px] font-semibold uppercase tracking-wider rounded-full px-3 py-1">
              {context}
            </span>
          )}
        </Media>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[13px] sm:text-[14px] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[13px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Meu trabalho</p>
      <h2 className={styles.sectionHeadText}>Projetos.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]"
    >
      Sistemas internos que tiram trabalho manual da frente de equipes
      inteiras, e projetos de IA que vão do dado bruto ao modelo em produção.
      Os que têm repositório público abrem no GitHub ao toque.
    </motion.p>

    <div className="mt-12 sm:mt-20 flex flex-wrap gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, "projects");
