import { useEffect } from "react";
import wonderwall from "../wonderwall.mp3"; // path relatif ke src/components

export function BackgroundMusic() {
  useEffect(() => {
    const audio = new Audio(wonderwall);
    audio.loop = true;
    audio.volume = 0.5;

    const playMusic = () => {
      audio.play().catch(() => {});
      document.removeEventListener("click", playMusic);
    };

    document.addEventListener("click", playMusic);

    return () => {
      audio.pause();
      document.removeEventListener("click", playMusic);
    };
  }, []);

  return null;
}
