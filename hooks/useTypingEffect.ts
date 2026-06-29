"use client";
import { useState, useEffect, useRef } from "react";

interface UseTypingEffectOptions {
  strings: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

interface UseTypingEffectReturn {
  displayText: string;
  cursorVisible: boolean;
}

export function useTypingEffect({
  strings,
  typeSpeed = 60,
  deleteSpeed = 30,
  pauseDuration = 2000,
}: UseTypingEffectOptions): UseTypingEffectReturn {
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Typing logic
  useEffect(() => {
    const currentString = strings[currentIndex];

    const tick = () => {
      if (!isDeleting) {
        if (displayText.length < currentString.length) {
          setDisplayText(currentString.slice(0, displayText.length + 1));
          timeoutRef.current = setTimeout(tick, typeSpeed);
        } else {
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentString.slice(0, displayText.length - 1));
          timeoutRef.current = setTimeout(tick, deleteSpeed);
        } else {
          setIsDeleting(false);
          setCurrentIndex((i) => (i + 1) % strings.length);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, currentIndex]);

  return { displayText, cursorVisible };
}
