import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { socials } from "../constants";
import { fadeIn, slideIn } from "../utils/motion";
import { LinkedInIcon, InstagramIcon, GithubIcon, MailIcon } from "./SocialIcons";

const icons = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  github: GithubIcon,
  mail: MailIcon,
};

const SocialLink = ({ index, label, handle, href, icon }) => {
  const Icon = icons[icon];

  return (
    <motion.a
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noreferrer"
      className="group flex items-center gap-4 bg-tertiary rounded-2xl px-5 py-4 text-white hover:text-secondary transition-colors"
    >
      <span className="shrink-0">
        <Icon />
      </span>

      <span className="flex flex-col min-w-0">
        <span className="font-bold text-[15px] sm:text-[17px]">{label}</span>
        <span className="text-secondary text-[13px] sm:text-[14px] truncate">
          {handle}
        </span>
      </span>

      <span
        aria-hidden="true"
        className="ml-auto text-secondary text-[20px] transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </motion.a>
  );
};

const Contact = () => (
  <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-8 xl:gap-10 overflow-hidden">
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-6 sm:p-8 rounded-2xl"
    >
      <p className={styles.sectionSubText}>Onde me encontrar</p>
      <h3 className={styles.sectionHeadText}>Vamos conversar.</h3>

      <p className="mt-4 text-secondary text-[15px] sm:text-[17px] leading-relaxed max-w-lg">
        Aberto a trocar ideia sobre automação, IA e projetos novos. Me chama por
        onde for mais fácil para você.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        {socials.map((social, index) => (
          <SocialLink key={social.label} index={index} {...social} />
        ))}
      </div>
    </motion.div>

    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[280px]"
    >
      <EarthCanvas />
    </motion.div>
  </div>
);

export default SectionWrapper(Contact, "contact");
