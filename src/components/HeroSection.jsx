import React from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";

const trendingTags = [
  { label: "Trending Position", plain: true },
  { label: "Product Designer", plain: false },
  { label: "AI Engineering", plain: false },
  { label: "Dev-ops Engineer", plain: false },
];

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 pt-20 pb-16 text-center">

      {/* Badge — with lines on both sides */}
      <div className="flex items-center  mb-8">
        <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.2)" }} />
        <div
          className="flex items-center gap-2 px-4 py-[6px] rounded-full"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <span className="text-sm">💼</span>
          <span className="text-xs font-bold tracking-widest" style={{ color: "rgba(255,255,255,0.9)" }}>
            50,000+
          </span>
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
            New Jobs This Month
          </span>
        </div>
        <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.2)" }} />
      </div>

      {/* Heading */}
      <h1
        className="font-bold leading-tight mb-5 text-white"
        style={{
          fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
          maxWidth: "680px",
        }}
      >
        Find Your Dream Job Today
      </h1>

      {/* Subheadline */}
      <p
        className="mb-10"
        style={{
          fontSize: "clamp(0.875rem, 2vw, 0.95rem)",
          color: "rgba(255,255,255,0.45)",
          maxWidth: "460px",
          lineHeight: "1.7",
        }}
      >
        HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
      </p>

     {/* Search Bar */}
      <div
        className="flex items-center w-full mb-6 overflow-hidden"
        style={{
          maxWidth: "580px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "12px",
        }}
      >
        {/* Job Input */}
        <div className="flex items-center gap-2 flex-1 px-4 py-3">
          <FiSearch size={16} color="rgba(255,255,255,0.35)" />
          <input
            type="text"
            placeholder="Job title, skill or company"
            className="bg-transparent outline-none w-full text-sm"
            style={{ color: "rgba(255,255,255,0.8)" }}
          />
        </div>

        {/* Divider */}
        <div
          style={{
            width: "1px",
            height: "20px",
            background: "rgba(255,255,255,0.12)",
            flexShrink: 0,
          }}
        />

        {/* Location Input */}
        <div className="flex items-center gap-2 flex-1 px-4 py-3">
          <FiMapPin size={16} color="rgba(255,255,255,0.35)" />
          <input
            type="text"
            placeholder="Location or Remote"
            className="bg-transparent outline-none w-full text-sm"
            style={{ color: "rgba(255,255,255,0.8)" }}
          />
        </div>

        {/* Search Button */}
        <button
          className="flex items-center justify-center transition-all duration-200"
          style={{
            width: "44px",
            height: "44px",
            margin: "4px",
            borderRadius: "8px",
            background: "#6366f1",
            flexShrink: 0,
          }}
        >
          <FiSearch size={17} color="#ffffff" />
        </button>
      </div>



      {/* Trending Tags */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {trendingTags.map(({ label, plain }) => (
          <button
            key={label}
            className="text-xs px-3 py-[5px] rounded-full transition-all duration-200"
            style={{
              color: plain ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.65)",
              background: plain ? "transparent" : "rgba(255,255,255,0.05)",
              border: plain ? "none" : "1px solid rgba(255,255,255,0.12)",
              fontWeight: plain ? "400" : "500",
            }}
          >
            {label}
          </button>
        ))}
      </div>

    </section>
  );
};

export default HeroSection;





