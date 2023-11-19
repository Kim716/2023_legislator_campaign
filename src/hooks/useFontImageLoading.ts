import { useEffect, useState } from "react";

export const useFontsImagesLoading = (
  ref: React.MutableRefObject<HTMLElement | null>
) => {
  const [isImagesLoading, setIsImagesLoading] = useState(true);
  const [isFontsLoading, setIsFontsLoading] = useState(true);

  useEffect(() => {
    if (!ref.current) return;

    // Images
    const updateImagesStatus = (imageEls: HTMLImageElement[]) => {
      setIsImagesLoading(
        !imageEls
          .map((imageEl) => imageEl.complete)
          .every((item) => item === true)
      );
    };

    const imageEls = Array.from<HTMLImageElement>(
      ref.current.querySelectorAll("img")
    );
    if (imageEls.length === 0) {
      setIsImagesLoading(false);
    }

    imageEls.forEach((image) => {
      image.addEventListener("load", () => updateImagesStatus(imageEls), {
        once: true,
      });
      image.addEventListener("error", () => updateImagesStatus(imageEls), {
        once: true,
      });
    });

    // Fonts
    const checkFontLoaded = async () => {
      try {
        await document.fonts.ready;
        setIsFontsLoading(false);
      } catch (error) {
        console.error(error);
        setIsFontsLoading(false);
      }
    };
    checkFontLoaded();
  }, [ref]);

  return isImagesLoading || isFontsLoading;
};
