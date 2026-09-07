import { useEffect, useRef, useState } from "react";

// Revela um elemento uma única vez, e nunca deixa o conteúdo depender só do
// scroll: uma seção que já está na tela — ou que ficou para trás, como quando
// se abre a página direto num #ancora — aparece na hora.
const useReveal = () => {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (revealed) return undefined;

    const element = ref.current;
    if (!element) return undefined;

    // Verdadeiro quando a seção começa antes do fim da tela, o que cobre tanto
    // "está visível agora" quanto "já passou".
    const maybeReveal = () => {
      if (!ref.current) return;
      if (ref.current.getBoundingClientRect().top < window.innerHeight) {
        setRevealed(true);
      }
    };

    maybeReveal();

    const observer = new IntersectionObserver(maybeReveal, { threshold: 0 });
    observer.observe(element);
    // Rede contra deslocamento de layout: imagens e cenas 3D que carregam
    // depois mudam a posição das seções.
    window.addEventListener("scroll", maybeReveal, { passive: true });
    window.addEventListener("load", maybeReveal);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", maybeReveal);
      window.removeEventListener("load", maybeReveal);
    };
  }, [revealed]);

  return [ref, revealed];
};

export default useReveal;
