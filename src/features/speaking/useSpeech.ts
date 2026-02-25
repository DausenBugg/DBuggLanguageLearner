import { useCallback, useMemo, useState } from "react";

interface RecognitionResult {
  transcript: string;
  confidence: number;
}

export const useSpeech = () => {
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const recognitionCtor = useMemo(() => {
    const w = window as Window & {
      SpeechRecognition?: new () => SpeechRecognition;
      webkitSpeechRecognition?: new () => SpeechRecognition;
    };
    return w.SpeechRecognition ?? w.webkitSpeechRecognition;
  }, []);

  const canRecognize = Boolean(recognitionCtor);
  const canSpeak = "speechSynthesis" in window;

  const speak = useCallback((text: string, lang = "ja-JP") => {
    if (!canSpeak) {
      setError("Speech playback is not supported on this browser.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.92;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }, [canSpeak]);

  const recognize = useCallback((): Promise<RecognitionResult | null> => {
    if (!recognitionCtor) {
      setError("Pronunciation scoring is not available in this browser.");
      return Promise.resolve(null);
    }

    return new Promise((resolve) => {
      const recognition = new recognitionCtor();
      recognition.lang = "ja-JP";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      setError(null);
      setIsListening(true);

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const first = event.results[0]?.[0];
        resolve({ transcript: first?.transcript ?? "", confidence: first?.confidence ?? 0 });
      };

      recognition.onerror = () => {
        setError("Could not capture speech. Try again in a quiet environment.");
        resolve(null);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    });
  }, [recognitionCtor]);

  return {
    canRecognize,
    canSpeak,
    isListening,
    error,
    speak,
    recognize
  };
};
