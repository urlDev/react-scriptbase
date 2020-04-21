import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Add this to index.js so everytime a link is clinked, it will take you to top of the opened page.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
