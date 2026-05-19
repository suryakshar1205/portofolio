import { useEffect, useState } from "react";

export function useTyping(phrases, speed = 38, pause = 1400) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    const timeout = window.setTimeout(
      () => {
        if (!deleting && characterIndex < phrase.length) {
          setCharacterIndex((value) => value + 1);
          return;
        }

        if (!deleting && characterIndex === phrase.length) {
          setDeleting(true);
          return;
        }

        if (deleting && characterIndex > 0) {
          setCharacterIndex((value) => value - 1);
          return;
        }

        setDeleting(false);
        setPhraseIndex((value) => (value + 1) % phrases.length);
      },
      !deleting && characterIndex === phrase.length ? pause : deleting ? speed / 1.8 : speed
    );

    return () => window.clearTimeout(timeout);
  }, [characterIndex, deleting, pause, phraseIndex, phrases, speed]);

  return phrases[phraseIndex].slice(0, characterIndex);
}
