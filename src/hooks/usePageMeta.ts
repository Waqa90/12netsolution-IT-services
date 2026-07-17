import { useEffect } from 'react';

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionTag?.getAttribute('content') ?? '';
    descriptionTag?.setAttribute('content', description);

    return () => {
      document.title = previousTitle;
      descriptionTag?.setAttribute('content', previousDescription);
    };
  }, [title, description]);
}
