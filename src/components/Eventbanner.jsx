// src/components/EventBanner.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Topbar.css"; // Reuse your topbar styles
import indianFlag from "../assets/flag.jpeg";

const EVENT_DATES = [
  { name: "New Year", month: 0, date: 1, emoji: "🎉", message: "Wishing you a prosperous and green year ahead!" },
  { name: "Republic Day", month: 0, date: 26, emoji: <img src={indianFlag} alt="Indian Flag" style={{ height: "1.6rem", verticalAlign: "middle" }} />, message: "Celebrating the spirit of our constitution!" },
  { name: "Makar Sankranti", month: 0, date: 14, emoji: "🪁", message: "Fly high with joy and gratitude for the harvest!" },

  { name: "World Wildlife Day", month: 2, date: 3, emoji: "🐘", message: "Let's protect our planet's amazing wildlife!" },
  { name: "World Water Day", month: 2, date: 22, emoji: "💧", message: "Every drop counts. Save water, save life!" },
  { name: "Holi", month: 2, date: 25, emoji: "🌈", message: "Splash joy, color, and sustainability!" },

  { name: "Earth Day", month: 3, date: 22, emoji: "🌍", message: "Small acts, big impact. Love your Earth!" },
  { name: "Labour Day", month: 4, date: 1, emoji: "👷‍♂️", message: "Celebrating the backbone of our nation!" },
  { name: "Biodiversity Day", month: 4, date: 22, emoji: "🧬", message: "Celebrate the rich life forms of our Earth!" },

  { name: "World Environment Day", month: 5, date: 5, emoji: "🌱", message: "One Earth. One future. Act now!" },
  { name: "World Oceans Day", month: 5, date: 8, emoji: "🌊", message: "Protect our blue planet!" },
  { name: "Yoga Day", month: 5, date: 21, emoji: "🧘‍♂️", message: "Healthy mind, healthy planet!" },
  { name: "Independence Day", month: 7, date: 15, emoji: <img src={indianFlag} alt="Indian Flag" style={{ height: "1.6rem", verticalAlign: "middle" }} />, message: "Proud to be Indian. Jai Hind!" },
  
  { name: "Gandhi Jayanti", month: 9, date: 2, emoji: "🕊️", message: "Be the change you wish to see in the world!" },
  { name: "Dussehra", month: 9, date: 12, emoji: "🏹", message: "Victory of good over evil!" },
  { name: "Diwali", month: 10, date: 1, emoji: "🪔", message: "Light up lives, not pollution!" },
  { name: "Children's Day", month: 10, date: 14, emoji: "👶", message: "Celebrate the joy of childhood!" },

  { name: "Christmas", month: 11, date: 25, emoji: "🎄", message: "Spread love, joy, and peace!" }
];

const EventBanner = () => {
  const [event, setEvent] = useState(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const today = new Date();
    const foundEvent = EVENT_DATES.find(
      (ev) =>
        (ev.date === today.getDate() && ev.month === today.getMonth()) ||
        (ev.date === today.getDate() - 1 && ev.month === today.getMonth())
    );
    if (foundEvent) {
      setEvent(foundEvent);
    }
  }, []);

  useEffect(() => {
    if (!event) return;
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // hide when scrolling down
      } else if (window.scrollY < lastScrollY) {
        setVisible(true); // show when scrolling up
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [event]);

  if (!event) return null;

  return (
    <motion.div
      className={`topbar d-flex align-items-center justify-content-center px-4 py-1${visible ? "" : " topbar--hidden"}`}
      style={{
        backgroundColor: "rgb(118, 177, 69)",
        color: "#064420",
        fontWeight: 600,
        minHeight: 36,
        zIndex: 1100,
      }}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ fontSize: "1.6rem", marginRight: "0.5rem", lineHeight: 1 }}
        aria-label={`${event.name} emoji`}
        role="img"
      >
        {event.emoji}
      </motion.span>
      <span
        style={{
          fontSize: "1.05rem",
          maxWidth: "90%",
          wordBreak: "break-word",
          textAlign: "center",
        }}
      >
        Celebrating <strong>{event.name}</strong> — {event.message}
      </span>
    </motion.div>
  );
};

export default EventBanner;
