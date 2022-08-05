/**
 * This function returns a Particles component that has a bunch of parameters that are used to create a
 * particle effect.
 * @returns A function that returns a Particles component.
 */
/**
 * When the pathname changes, scroll to the top of the page.
 * @returns null
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;
