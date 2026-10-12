"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandIdentity, Icon } from "./icon";

type ServiceGroup = {
  id: string;
  title: string;
  icon: string;
  links: { slug: string; title: string }[];
};

export function Header({ serviceGroups }: { serviceGroups: ServiceGroup[] }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const path = usePathname();
  const header = useRef<HTMLElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const servicesButton = useRef<HTMLButtonElement>(null);
  const servicesPanel = useRef<HTMLDivElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const cancelLeave = () => clearTimeout(leaveTimer.current);
  const closeMenus = () => {
    cancelLeave();
    setServicesOpen(false);
    setOpen(false);
  };

  useEffect(() => {
    setServicesOpen(false);
    setOpen(false);
    return () => clearTimeout(leaveTimer.current);
  }, [path]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      clearTimeout(leaveTimer.current);
      if (servicesOpen) {
        setServicesOpen(false);
        if (servicesPanel.current?.contains(document.activeElement)) servicesButton.current?.focus();
      } else if (open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) {
        clearTimeout(leaveTimer.current);
        setServicesOpen(false);
        setOpen(false);
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [open, servicesOpen]);

  const leaveServices = () => {
    cancelLeave();
    leaveTimer.current = setTimeout(() => {
      if (!servicesPanel.current?.contains(document.activeElement)) setServicesOpen(false);
    }, 180);
  };

  return (
    <header ref={header} className="site-header" onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) closeMenus();
    }}>
      <div className="container header-inner">
        <Link className="brand-lockup" href="/" aria-label="ManaCircle home" onClick={closeMenus}>
          <BrandIdentity />
        </Link>
        <button ref={button} type="button" className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}
          aria-controls="main-navigation" onClick={() => { setOpen(!open); setServicesOpen(false); }}>
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav id="main-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          <Link href="/" aria-current={path === "/" ? "page" : undefined} onClick={closeMenus}>Home</Link>
          <div className="nav-services"
            onPointerEnter={event => {
              if (event.pointerType === "mouse" && window.matchMedia("(min-width: 901px)").matches) {
                cancelLeave();
                setServicesOpen(true);
              }
            }}
            onPointerLeave={event => { if (event.pointerType === "mouse") leaveServices(); }}
            onBlur={event => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                cancelLeave();
                setServicesOpen(false);
              }
            }}>
            <div className={`services-trigger ${path.startsWith("/services") ? "is-current" : ""}`}>
              <Link href="/services" aria-current={path === "/services" ? "page" : undefined} onClick={closeMenus}>Services</Link>
              <button ref={servicesButton} type="button" className="services-toggle"
                aria-label={servicesOpen ? "Hide services" : "Show services"} aria-expanded={servicesOpen}
                aria-controls="services-dropdown" onClick={() => { cancelLeave(); setServicesOpen(!servicesOpen); }}>
                <Icon name="chevron" size={15} />
              </button>
            </div>
            <div ref={servicesPanel} id="services-dropdown" className="services-dropdown" hidden={!servicesOpen}>
              <div className="services-dropdown-grid">
                {serviceGroups.map(group => (
                  <section key={group.id} className="services-dropdown-group" aria-labelledby={`nav-${group.id}`}>
                    <h2 id={`nav-${group.id}`}><span><Icon name={group.icon} size={19} /></span>{group.title}</h2>
                    <ul>{group.links.map(service => (
                      <li key={service.slug}><Link href={`/services/${service.slug}`}
                        aria-current={path === `/services/${service.slug}` ? "page" : undefined} onClick={closeMenus}>
                        <span>{service.title}</span><Icon name="diagonal" size={14} />
                      </Link></li>
                    ))}</ul>
                  </section>
                ))}
              </div>
              <div className="services-dropdown-bottom">
                <span>One team. From first idea to launch.</span>
                <Link href="/services" onClick={closeMenus}>View all services <Icon name="arrow" size={17} /></Link>
              </div>
            </div>
          </div>
          {[
            ["/work", "Our work"],
            ["/#how-it-works", "How it works"],
            ["/about", "About us"],
          ].map(([href, label]) => (
            <Link key={href} href={href} aria-current={path === href ? "page" : undefined} onClick={closeMenus}>{label}</Link>
          ))}
          <Link href="/contact" aria-current={path === "/contact" ? "page" : undefined}
            className="button button-small nav-cta" onClick={closeMenus}>
            Start your project <Icon name="diagonal" size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
