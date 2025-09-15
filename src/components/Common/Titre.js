import React, { useEffect, useRef } from "react";

function Titre({ children, ...props }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      },
      { threshold: 0.5 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className="titre" {...props}>
      {children}
    </span>
  );
}

export default Titre;