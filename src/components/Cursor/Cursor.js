import React, { useRef, useState, useEffect, useCallback } from "react";
import classNames from "classnames";

import "./Cursor.module.scss";

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  const cursor = useRef(null);

  const onMouseDown = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 500);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.pageX - 10, y: e.pageY - 10 });
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const handleLinkHoverEvents = useCallback(() => {
    document.querySelectorAll("a, button, li").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  }, []);

  const addEventListeners = useCallback(() => {
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
  }, []);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mousedown", onMouseDown);
  }, []);

  useEffect(() => {
    handleLinkHoverEvents();
    addEventListeners();

    return () => removeEventListeners();
  }, [handleLinkHoverEvents, addEventListeners, removeEventListeners]);

  const cursorClasses = classNames("cursor", {
    "cursor--hidden": hidden,
    "cursor--clicked": clicked,
    "cursor--link-hovered": linkHovered,
  });

  return (
    <div
      className={cursorClasses}
      ref={cursor}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};
