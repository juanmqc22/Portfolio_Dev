import { useEffect } from "react";

// A página é montada pelo React depois que o HTML carrega, então quando alguém
// abre uma URL com #ancora o elemento alvo ainda não existe e o navegador não
// rola para lugar nenhum. Isso refaz o pulo assim que o conteúdo está no ar.
const useHashScroll = () => {
  useEffect(() => {
    if (!window.location.hash) return undefined;

    const scrollToHash = () => {
      const target = document.querySelector(window.location.hash);
      if (target) target.scrollIntoView();
    };

    // Duas passadas: a primeira posiciona logo, a segunda corrige o desvio
    // causado por imagens e cenas 3D que terminam de carregar depois.
    const frame = requestAnimationFrame(scrollToHash);
    const timer = setTimeout(scrollToHash, 400);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, []);
};

export default useHashScroll;
