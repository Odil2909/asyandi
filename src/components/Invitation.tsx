"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  Heart,
  MapPin,
  Menu,
  Music2,
  Pause,
  PenLine,
  Phone,
  Share2,
  Sparkles,
  X,
} from "lucide-react";
import { eventDateTime, invitation } from "@/config/invitation";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={`section-shell ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={stagger}
    >
      {children}
    </motion.section>
  );
}
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.p variants={reveal} className="section-label">
      {children}
    </motion.p>
  );
}
function Ornament({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`ornament ${small ? "ornament-small" : ""}`}
      aria-hidden="true"
    >
      <span />
      <i />
      <span />
    </div>
  );
}
function IconFor({
  icon,
}: {
  icon: (typeof invitation.tolchabi)[number]["icon"];
}) {
  const props = { size: 21, strokeWidth: 1.4 };
  if (icon === "book") return <BookOpen {...props} />;
  if (icon === "pen") return <PenLine {...props} />;
  if (icon === "coin") return <CircleDollarSign {...props} />;
  if (icon === "thread") return <Sparkles {...props} />;
  return <span className="ball-icon" aria-hidden="true" />;
}

const ambientElements = [
  {
    kind: "petal",
    x: 7,
    size: 0.78,
    duration: 18,
    delay: -4,
    drift: 28,
    opacity: 0.42,
  },
  {
    kind: "heart",
    x: 17,
    size: 0.62,
    duration: 24,
    delay: -15,
    drift: -22,
    opacity: 0.3,
  },
  {
    kind: "petal",
    x: 29,
    size: 1.12,
    duration: 21,
    delay: -9,
    drift: 34,
    opacity: 0.34,
  },
  {
    kind: "heart",
    x: 41,
    size: 0.52,
    duration: 17,
    delay: -2,
    drift: -18,
    opacity: 0.26,
  },
  {
    kind: "petal",
    x: 53,
    size: 0.7,
    duration: 26,
    delay: -18,
    drift: 25,
    opacity: 0.38,
  },
  {
    kind: "heart",
    x: 64,
    size: 0.76,
    duration: 22,
    delay: -11,
    drift: -30,
    opacity: 0.3,
  },
  {
    kind: "petal",
    x: 75,
    size: 0.92,
    duration: 19,
    delay: -6,
    drift: 20,
    opacity: 0.36,
  },
  {
    kind: "heart",
    x: 84,
    size: 0.58,
    duration: 25,
    delay: -20,
    drift: -26,
    opacity: 0.28,
  },
  {
    kind: "petal",
    x: 93,
    size: 0.68,
    duration: 23,
    delay: -13,
    drift: 31,
    opacity: 0.32,
  },
  {
    kind: "heart",
    x: 48,
    size: 0.46,
    duration: 20,
    delay: -7,
    drift: 18,
    opacity: 0.24,
  },
  {
    kind: "petal",
    x: 12,
    size: 0.58,
    duration: 22,
    delay: -16,
    drift: -24,
    opacity: 0.28,
  },
  {
    kind: "heart",
    x: 23,
    size: 0.48,
    duration: 19,
    delay: -10,
    drift: 27,
    opacity: 0.22,
  },
  {
    kind: "petal",
    x: 36,
    size: 0.82,
    duration: 27,
    delay: -21,
    drift: -32,
    opacity: 0.3,
  },
  {
    kind: "heart",
    x: 58,
    size: 0.64,
    duration: 23,
    delay: -5,
    drift: 21,
    opacity: 0.25,
  },
  {
    kind: "petal",
    x: 70,
    size: 0.55,
    duration: 18,
    delay: -14,
    drift: -20,
    opacity: 0.26,
  },
  {
    kind: "heart",
    x: 89,
    size: 0.72,
    duration: 26,
    delay: -19,
    drift: 29,
    opacity: 0.24,
  },
] as const;

function AmbientElements() {
  return (
    <div className="ambient-layer" aria-hidden="true">
      {ambientElements.map((element, index) => (
        <span
          className={`ambient-element ambient-${element.kind}`}
          key={`${element.kind}-${index}`}
          style={
            {
              left: `${element.x}%`,
              "--element-size": element.size,
              "--element-opacity": element.opacity,
              "--fall-duration": `${element.duration}s`,
              "--fall-delay": `${element.delay}s`,
              "--fall-drift": `${element.drift}px`,
            } as React.CSSProperties
          }
        >
          {element.kind === "heart" && (
            <Heart size={15} strokeWidth={1.2} fill="currentColor" />
          )}
        </span>
      ))}
    </div>
  );
}

function Intro({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.section
      className="intro-screen"
      initial="hidden"
      animate="visible"
      exit={{
        opacity: 0,
        y: "-18%",
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
      }}
      variants={stagger}
    >
      <div className="intro-topline">
        <span>초대합니다</span>
        <span>2026</span>
      </div>
      <div className="intro-center">
        <motion.div variants={reveal} className="intro-korean">
          안녕하세요
        </motion.div>
        <motion.p variants={reveal} className="eyebrow">
          Приглашение на Асянди
        </motion.p>
        <motion.h1 variants={reveal}>Ан Айлин</motion.h1>
        <motion.p variants={reveal} className="intro-subtitle">
          첫 번째 생일 <span>·</span> первый день рождения
        </motion.p>
        <motion.div variants={reveal} className="intro-date">
          16 <span>·</span> 09 <span>·</span> 2026
        </motion.div>
      </div>
      <motion.button
        variants={reveal}
        className="scroll-cue"
        onClick={onOpen}
        aria-label="Листать вниз"
      >
        <span>Листайте вниз</span>
        <ArrowDown size={16} strokeWidth={1.4} />
      </motion.button>
      <div className="intro-vertical">A Y L I N · I K K O T</div>
    </motion.section>
  );
}

function Hero() {
  return (
    <Section className="hero-section" id="invitation">
      <div className="hero-topline">
        <span>Асянди</span>
        <span>16 · 09 · 2026</span>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-ring hero-ring-one" />
        <div className="hero-ring hero-ring-two" />
        <div className="hero-seal">
          <span>첫</span>
          <small>birthday</small>
          <span>생일</span>
        </div>
        <div className="hero-petal petal-one" />
        <div className="hero-petal petal-two" />
        <div className="hero-petal petal-three" />
      </div>
      <motion.p variants={reveal} className="section-label">
        С любовью приглашаем
      </motion.p>
      <motion.h2 variants={reveal} className="hero-title">
        Ан Айлин
      </motion.h2>
      <motion.p variants={reveal} className="hero-lead">
        разделить с нами
        <br />
        её первый важный день
      </motion.p>
      <motion.div variants={reveal} className="hero-details">
        <span className="event-date">
          16 сентября 2026
          <motion.span
            className="event-date-heart"
            initial={{ opacity: 0, scale: 0.72 }}
            animate={{ opacity: 1, scale: [0.92, 1.06, 0.96, 1] }}
            transition={{
              opacity: { duration: 0.7, delay: 0.25, ease: "easeOut" },
              scale: {
                duration: 1.8,
                delay: 0.7,
                repeat: Infinity,
                repeatDelay: 2.2,
                ease: "easeInOut",
              },
            }}
            aria-hidden="true"
          >
            <Heart size={13} strokeWidth={1.2} fill="currentColor" />
          </motion.span>
        </span>
        <i />
        <span>19:00</span>
      </motion.div>
      <motion.a variants={reveal} href="#details" className="text-link">
        Детали праздника <ChevronRight size={15} />
      </motion.a>
    </Section>
  );
}
function InvitationText() {
  return (
    <Section className="text-section">
      <SectionLabel>
        01 <span>·</span> приглашение
      </SectionLabel>
      <motion.div variants={reveal} className="quote-mark">
        “
      </motion.div>
      <motion.p variants={reveal} className="invitation-copy">
        Дорогие родные и близкие!
      </motion.p>
      <motion.p variants={reveal} className="invitation-copy muted">
        Наша маленькая Айлин отмечает свой первый день рождения. Для нас этот
        день наполнен особой радостью и благодарностью, и мы хотим разделить
        этот важный момент вместе с вами.
      </motion.p>
      <motion.p variants={reveal} className="invitation-copy">
        Будем счастливы видеть вас
        <br />
        на её Асянди.
      </motion.p>
      <motion.div variants={reveal} className="signature">
        <span>Алена</span>
        <Heart size={13} fill="currentColor" />
        <span>Дима</span>
      </motion.div>
    </Section>
  );
}

function Countdown() {
  const [remaining, setRemaining] = useState(0);
  useEffect(() => {
    const update = () =>
      setRemaining(Math.max(0, eventDateTime.getTime() - Date.now()));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);
  const units = [
    [Math.floor(remaining / 86400000), "дней"],
    [Math.floor(remaining / 3600000) % 24, "часов"],
    [Math.floor(remaining / 60000) % 60, "минут"],
    [Math.floor(remaining / 1000) % 60, "секунд"],
  ] as const;
  return (
    <Section className="countdown-section">
      <SectionLabel>
        02 <span>·</span> до встречи
      </SectionLabel>
      <motion.h2 variants={reveal}>Совсем скоро</motion.h2>
      {remaining === 0 ? (
        <motion.p variants={reveal} className="countdown-today">
          Сегодня особенный день <Heart size={15} fill="currentColor" />
        </motion.p>
      ) : (
        <motion.div variants={reveal} className="countdown-grid">
          {units.map(([value, label]) => (
            <div className="countdown-unit" key={label}>
              <strong>{String(value).padStart(2, "0")}</strong>
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      )}
    </Section>
  );
}
function CalendarSection() {
  const days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  return (
    <Section className="calendar-section" id="details">
      <div className="calendar-card">
        <motion.div variants={reveal} className="calendar-heading">
          <span>Сентябрь</span>
          <strong>2026</strong>
          <CalendarDays size={18} strokeWidth={1.2} />
        </motion.div>
        <div className="calendar-week">
          {days.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <motion.div variants={reveal} className="calendar-days">
          <span />
          {Array.from({ length: 30 }, (_, i) => (
            <span className={i + 1 === 16 ? "selected" : ""} key={i}>
              {i + 1 === 16 ? (
                <>
                  <Heart
                    className="calendar-heart"
                    size={39}
                    strokeWidth={1.1}
                    fill="currentColor"
                  />
                  <b>16</b>
                </>
              ) : (
                i + 1
              )}
            </span>
          ))}
        </motion.div>
        <div className="calendar-footer">
          <span>Среда</span>
          <span>19:00</span>
        </div>
      </div>
    </Section>
  );
}
function Program() {
  return (
    <Section className="program-section">
      <SectionLabel>
        03 <span>·</span> вечер
      </SectionLabel>
      <motion.div variants={reveal} className="section-heading-row">
        <h2>
          Детали
          <br />
          <em>праздника</em>
        </h2>
        <span className="heading-korean">우리의 하루</span>
      </motion.div>
      <div className="timeline">
        {invitation.program.map((item) => (
          <motion.div
            variants={reveal}
            className="timeline-item"
            key={item.time}
          >
            <div className="timeline-time">{item.time}</div>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
function Tolchabi() {
  return (
    <Section className="tolchabi-section">
      <div className="tolchabi-intro">
        <motion.div
          variants={reveal}
          className="tolchabi-illustration"
          aria-hidden="true"
        >
          <span className="line-sun" />
          <span className="line-moon" />
          <span className="line-branch" />
        </motion.div>
        <div>
          <SectionLabel>
            04 <span>·</span> традиция
          </SectionLabel>
          <motion.h2 variants={reveal}>Толчаби</motion.h2>
        </div>
      </div>
      <motion.p variants={reveal} className="tolchabi-copy">
        Одной из самых важных традиций первого дня рождения является Толчаби —
        момент, когда перед ребёнком раскладывают различные предметы. Считается,
        что выбранный предмет символически рассказывает о его будущем.
      </motion.p>
      <div className="tolchabi-grid">
        {invitation.tolchabi.map((item) => (
          <motion.div
            variants={reveal}
            className="tolchabi-item"
            key={item.title}
          >
            <div className="tolchabi-icon">
              <IconFor icon={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
function RSVP() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };
  return (
    <Section className="rsvp-section" id="rsvp">
      <SectionLabel>
        05 <span>·</span> ваш ответ
      </SectionLabel>
      <motion.h2 variants={reveal}>
        Будем рады
        <br />
        <em>видеть вас</em>
      </motion.h2>
      <motion.p variants={reveal} className="rsvp-subtitle">
        Пожалуйста, подтвердите своё присутствие
      </motion.p>
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="thanks"
            className="thanks-card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Check size={24} />
            <h3>Спасибо!</h3>
            <p>Ваш ответ получен. До встречи на празднике.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            variants={stagger}
            onSubmit={submit}
            className="rsvp-form"
          >
            <motion.label variants={reveal}>
              Имя
              <input required name="name" placeholder="Как вас зовут?" />
            </motion.label>
            <motion.label variants={reveal}>
              Количество гостей
              <select name="guests" defaultValue="1">
                <option value="1">1 гость</option>
                <option value="2">2 гостя</option>
                <option value="3">3 гостя</option>
                <option value="4">4 гостя</option>
              </select>
            </motion.label>
            <motion.div variants={reveal} className="choice-row">
              <label>
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  defaultChecked
                />
                <span>Буду</span>
              </label>
              <label>
                <input type="radio" name="attendance" value="no" />
                <span>Не смогу прийти</span>
              </label>
            </motion.div>
            <motion.label variants={reveal}>
              Пожелание для Айлин
              <textarea
                name="message"
                placeholder="Напишите несколько тёплых слов..."
                rows={3}
              />
            </motion.label>
            <motion.button
              variants={reveal}
              className="primary-button"
              type="submit"
            >
              Подтвердить <ArrowUpRight size={16} />
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </Section>
  );
}
function Location() {
  return (
    <Section className="location-section" id="location">
      <SectionLabel>
        06 <span>·</span> где встретимся
      </SectionLabel>
      <motion.div variants={reveal} className="location-card">
        <a
          className="location-graphic"
          href={invitation.maps.google}
          target="_blank"
          rel="noreferrer"
          aria-label="Открыть Bar Villa на карте"
        >
          <iframe
            className="location-map"
            src={invitation.maps.embed}
            title="Bar Villa, Ташкент, ул. Уйсозлар, 7"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <span className="location-marker">
            <MapPin size={28} strokeWidth={1.1} />
          </span>
          <span>Bar Villa</span>
        </a>
        <div className="location-info">
          <h2>Bar Villa</h2>
          <p>{invitation.address}</p>
          <div className="map-buttons">
            <a href={invitation.maps.google} target="_blank" rel="noreferrer">
              Google Maps <ArrowUpRight size={14} />
            </a>
            <a href={invitation.maps.yandex} target="_blank" rel="noreferrer">
              Яндекс Карты <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
function Contacts() {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    const url = window.location.href;
    if (navigator.share)
      await navigator.share({
        title: "Асянди Ан Айлин",
        text: "Приглашение на первый день рождения Ан Айлин",
        url,
      });
    else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    }
  };
  return (
    <Section className="contacts-section">
      <SectionLabel>
        07 <span>·</span> на связи
      </SectionLabel>
      <motion.h2 variants={reveal}>
        Если возникнут
        <br />
        <em>вопросы</em>
      </motion.h2>
      <motion.div variants={reveal} className="contact-names">
        <span>Алена</span>
        <i> / </i>
        <span>Дима</span>
      </motion.div>
      <div className="contact-actions">
        <motion.a variants={reveal} href={`tel:${invitation.phone}`}>
          <Phone size={16} /> Позвонить
        </motion.a>
        <motion.a
          variants={reveal}
          href={invitation.telegramUrl || `tel:${invitation.phone}`}
          onClick={(event) => {
            if (!invitation.telegramUrl) event.preventDefault();
          }}
        >
          <MailIcon /> Telegram
        </motion.a>
      </div>
      <motion.button variants={reveal} className="share-button" onClick={share}>
        {copied ? <Check size={16} /> : <Share2 size={16} />}{" "}
        {copied ? "Ссылка скопирована" : "Поделиться приглашением"}
      </motion.button>
    </Section>
  );
}
function MailIcon() {
  return (
    <span className="mail-icon" aria-hidden="true">
      @
    </span>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <Ornament small />
      <p className="footer-korean">사랑을 담아</p>
      <h2>Ан Айлин</h2>
      <p>
        С любовью,
        <br />
        Алена &amp; Дима
      </p>
      <span>16.09.2026</span>
      <div className="footer-bottom">
        <span>
          Будем рады разделить
          <br />
          этот день вместе с вами
        </span>
        <Heart size={15} fill="currentColor" />
      </div>
    </footer>
  );
}
function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    const audio = document.querySelector<HTMLAudioElement>("#invitation-audio");
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };
  return (
    <>
      <audio id="invitation-audio" loop src="/music/invitation.mp3" />
      <button
        aria-label={playing ? "Поставить музыку на паузу" : "Включить музыку"}
        className={`music-button ${playing ? "is-playing" : ""}`}
        onClick={toggle}
      >
        {playing ? <Pause size={16} /> : <Music2 size={16} />}
      </button>
    </>
  );
}

export default function Invitation() {
  const [opened, setOpened] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const openOnScroll = (event: WheelEvent | TouchEvent) => {
      if (event instanceof WheelEvent && event.deltaY <= 0) return;
      setOpened(true);
    };
    window.addEventListener("wheel", openOnScroll, { passive: true });
    window.addEventListener("touchmove", openOnScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", openOnScroll);
      window.removeEventListener("touchmove", openOnScroll);
    };
  }, []);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.1,
  });
  return (
    <>
      <AnimatePresence>
        {!opened && <Intro onOpen={() => setOpened(true)} />}
      </AnimatePresence>
      <motion.div
        className="site-frame"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AmbientElements />
        <motion.div className="progress-line" style={{ scaleX }} />
        <header className="site-header">
          <a href="#invitation" className="header-logo">
            A<span>·</span>A
          </a>
          <nav className={menuOpen ? "menu-open" : ""}>
            <a href="#details" onClick={() => setMenuOpen(false)}>
              Праздник
            </a>
            <a href="#rsvp" onClick={() => setMenuOpen(false)}>
              RSVP
            </a>
            <a href="#location" onClick={() => setMenuOpen(false)}>
              Место
            </a>
          </nav>
          <button
            className="menu-button"
            aria-label="Открыть меню"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </header>
        <main>
          <Hero />
          <InvitationText />
          <Countdown />
          <CalendarSection />
          <Program />
          <Tolchabi />
          <RSVP />
          <Location />
          <Contacts />
        </main>
        <Footer />
        <MusicPlayer />
      </motion.div>
    </>
  );
}
