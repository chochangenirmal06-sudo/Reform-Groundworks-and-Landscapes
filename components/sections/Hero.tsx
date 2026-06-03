"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { clientConfig } from "@/lib/client.config";

const AWARDS = [
  { label: "On The Tools Awards 2022 Winner",                            src: "/images/award1.jpg", pos: "left center"   },
  { label: "London & South East England Prestige Awards 2023/24 Winner", src: "/images/award2.jpg", pos: "center center" },
  { label: "Three Best Rated 2024 — Landscape Gardeners Ipswich",        src: "/images/award3.jpg", pos: "right center"  },
];

const STATS = [
  { val: "450+", label: "Projects\nCompleted"  },
  { val: "15+",  label: "Years of\nExperience" },
  { val: "5.0★", label: "Customer\nRating"     },
];

export default function Hero() {
  const { business } = clientConfig;
  const biz   = business as typeof business & { heroLine1?: string; heroLine2?: string };
  const words  = business.tagline.split(" ");
  const mid    = Math.ceil(words.length / 2);
  const line1  = biz.heroLine1 ?? words.slice(0, mid).join(" ");
  const line2  = biz.heroLine2 ?? words.slice(mid).join(" ");

  return (
    <section className="relative min-h-svh flex flex-col overflow-hidden">

      {/* Background */}
      <Image
        src="/images/hero-bg.png"
        alt={`${business.fullName} ${business.city}`}
        fill priority quality={92} sizes="100vw"
        className="object-cover object-center z-0"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(170deg, rgba(5,15,5,0.76) 0%, rgba(0,0,0,0.30) 50%, rgba(5,12,5,0.70) 100%)" }}
      />

      {/* ── Centered text content ── */}
      <div className="relative z-[2] flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-8 pt-[100px] sm:pt-[112px] pb-6">
        <div className="w-full max-w-[860px]">

          {/* Location label */}
          <p className="hero-label font-dmsans font-bold uppercase text-white mb-4">
            {business.city}, {business.state}&nbsp;&nbsp;·&nbsp;&nbsp;Landscaping Services
          </p>

          {/* Heading */}
          <h1 className="m-0 mb-5" style={{ lineHeight: 1.0 }}>
            <span
              className="font-playfair hero-line1 block font-normal italic"
              style={{ color: "var(--color-accent)", lineHeight: 1.15 }}
            >
              {line1}
            </span>
            <span
              className="font-playfair hero-line2 block font-extrabold not-italic"
              style={{ color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.0 }}
            >
              {line2}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-subtitle font-dmsans mx-auto mb-8"
            style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.75, maxWidth: "540px" }}
          >
            {business.heroSubtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="hero-cta font-dmsans w-full sm:w-auto text-center"
              style={{
                display: "block",
                border: "2px solid var(--color-accent)",
                color: "var(--color-accent-text)",
                background: "var(--color-accent)",
                fontWeight: 700,
                padding: "14px 38px",
                borderRadius: "4px",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                textDecoration: "none",
              }}
            >
              {business.ctaLabel} →
            </Link>
            <a
              href={business.phoneHref}
              className="hero-phone font-dmsans w-full sm:w-auto"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "9px",
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(8px)",
                color: "#fff",
                fontWeight: 600,
                padding: "14px 26px",
                borderRadius: "4px",
                fontSize: "14px",
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              <Phone size={14} strokeWidth={2} />
              {business.phone}
            </a>
          </div>

          {/* Mobile awards (below CTAs) */}
          <div className="lg:hidden mt-8 flex items-center justify-center gap-4 sm:gap-6">
            {AWARDS.map(({ label, src, pos }) => (
              <div key={pos} role="img" aria-label={label} className="award-sm"
                style={{ flexShrink: 0, borderRadius: 6, backgroundImage: `url(${src})`, backgroundPosition: pos, backgroundRepeat: "no-repeat", opacity: 0.92 }} />
            ))}
          </div>

        </div>
      </div>

      {/* ── Full-width trust bar — desktop only ── */}
      <div
        className="hidden lg:block relative z-[2]"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.10)",
          background: "rgba(0,0,0,0.22)",
          backdropFilter: "blur(8px)",
          paddingBottom: "80px", /* clears the wave */
        }}
      >
        <div className="max-w-6xl mx-auto px-12 py-5 flex items-center justify-center gap-0">

          {/* Awards */}
          {AWARDS.map(({ label, src, pos }, i) => (
            <div key={pos} className="flex items-center">
              {i > 0 && <div style={{ width: "1px", height: "44px", background: "rgba(255,255,255,0.10)", margin: "0 20px" }} />}
              <div role="img" aria-label={label} className="award-bar"
                style={{ flexShrink: 0, borderRadius: 6, backgroundImage: `url(${src})`, backgroundPosition: pos, backgroundRepeat: "no-repeat", opacity: 0.92 }} />
            </div>
          ))}

          {/* Divider between awards and stats */}
          <div style={{ width: "1px", height: "44px", background: "rgba(255,255,255,0.18)", margin: "0 40px", flexShrink: 0 }} />

          {/* Stats */}
          {STATS.map(({ val, label }, i) => (
            <div key={label} className="flex items-center">
              {i > 0 && <div style={{ width: "1px", height: "44px", background: "rgba(255,255,255,0.10)", margin: "0 36px" }} />}
              <div className="text-center">
                <p className="font-playfair font-bold" style={{ fontSize: "30px", lineHeight: 1, color: "var(--color-accent)", letterSpacing: "-0.02em" }}>
                  {val}
                </p>
                <p className="font-dmsans uppercase" style={{ fontSize: "9px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.40)", marginTop: "5px", whiteSpace: "pre-line", lineHeight: 1.5 }}>
                  {label}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-[3] leading-none pointer-events-none">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="block w-full h-[40px] sm:h-[56px] lg:h-[72px]">
          <path d="M0,36 C240,72 480,8 720,38 C960,68 1200,12 1440,36 L1440,72 L0,72 Z" fill="var(--color-bg)" />
        </svg>
      </div>

      <style>{`
        .hero-label    { font-size: 9px; letter-spacing: 0.14em; }
        .hero-line1    { font-size: clamp(22px, 3.4vw, 52px); overflow-wrap: break-word; }
        .hero-line2    { font-size: clamp(34px, 5.8vw, 80px); overflow-wrap: break-word; word-break: break-word; }
        .hero-subtitle { font-size: clamp(14px, 1.6vw, 17px); overflow-wrap: break-word; }

        @media (min-width: 480px) { .hero-label { font-size: 10px; letter-spacing: 0.22em; } }
        @media (min-width: 640px) { .hero-label { font-size: 11px; letter-spacing: 0.28em; } }

        .award-sm  { width: 74px;  height: 74px;  background-size: auto 74px;  }
        @media (min-width: 480px) { .award-sm { width: 94px; height: 94px; background-size: auto 94px; } }

        .award-bar { width: 78px; height: 78px; background-size: auto 78px; }

        .hero-cta:hover   { background: var(--color-accent-light) !important; border-color: var(--color-accent-light) !important; }
        .hero-phone:hover { background: rgba(255,255,255,0.18)    !important; border-color: rgba(255,255,255,0.45)    !important; }
      `}</style>

    </section>
  );
}
