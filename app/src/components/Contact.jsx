import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Chaves do EmailJS. A public key é feita para rodar no navegador e não é
// segredo; ainda assim dá para sobrescrever via .env sem tocar no código.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_3b4vrzs";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_cog9yxb";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "nOGvuIMsjGcby9Gpt";

const EMPTY_FORM = { name: "", email: "", message: "", numero: "" };

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Juan Quezada",
          from_email: form.email,
          to_email: "juanmqc22@gmail.com",
          message: form.message,
          numero: form.numero,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Obrigado!! Entrarei em contato assim que puder!");
          setForm(EMPTY_FORM);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, Algo deu errado. Tenta novamente por favor.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-8 xl:gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-6 sm:p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Entre em contato</p>
        <h3 className={styles.sectionHeadText}>Contato.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3 sm:mb-4 text-[15px] sm:text-[16px]">Seu Nome</span>
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder=""
              className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[16px]"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-3 sm:mb-4 text-[15px] sm:text-[16px]">Seu email</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder=""
              className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[16px]"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-3 sm:mb-4 text-[15px] sm:text-[16px]">Seu número (opcional)</span>
            <input
              type="tel"
              name="numero"
              inputMode="tel"
              autoComplete="tel"
              value={form.numero}
              onChange={handleChange}
              placeholder=""
              className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[16px]"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-3 sm:mb-4 text-[15px] sm:text-[16px]">Sua Mensagem</span>
            <textarea
              rows={6}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Como posso te ajudar?"
              className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[16px]"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-60"
          >
            {loading ? "Mandando..." : "Mandar"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[280px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
