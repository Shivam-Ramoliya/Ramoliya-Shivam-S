import { useEffect } from "react";

const BASE_TITLE = "Shivam S. Ramoliya";

export function useDocumentTitle(suffix) {
  useEffect(() => {
    const nextTitle = suffix ? `${BASE_TITLE} | ${suffix}` : BASE_TITLE;
    document.title = nextTitle;
  }, [suffix]);
}
