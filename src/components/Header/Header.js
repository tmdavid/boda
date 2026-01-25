import React, { useState, useEffect } from 'react';

import { useLanguage } from '../../context/LanguageProvider';
import { getTranslation } from '../../helpers/translations';

import Brand from '../Brand';
import Container from '../Container';
import Icon from '../Icons/Icon';
import * as styles from './Header.module.css';

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = (key) => getTranslation(language, key);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenu(false);
  };

  const navItems = [
    { label: t('when'), sectionId: 'when-where' },
    { label: t('where'), sectionId: 'when-where' },
    { label: t('rsvp'), sectionId: 'rsvp' },
  ];

  return (
    <div className={`${styles.root} ${scrolled ? styles.scrolled : ''}`}>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.header}>
          {/* Left: Navigation Links */}
          <div className={styles.linkContainer}>
            <nav>
              {navItems.map((item) => (
                <a
                  key={item.sectionId + item.label}
                  href={`#${item.sectionId}`}
                  onClick={(e) => scrollToSection(e, item.sectionId)}
                  className={styles.navLink}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile: Burger Icon */}
          <div
            role={'presentation'}
            onClick={() => setMobileMenu(!mobileMenu)}
            className={styles.burgerIcon}
          >
            <Icon symbol={mobileMenu ? 'cross' : 'burger'} />
          </div>

          {/* Center: Brand */}
          <Brand />

          {/* Right: Language Toggle */}
          <div className={styles.actionContainers}>
            <div className={styles.languageToggle}>
              <button
                className={`${styles.langButton} ${language === 'ca' ? styles.activeLang : ''}`}
                onClick={() => setLanguage('ca')}
              >
                CA
              </button>
              <span className={styles.langDivider}>|</span>
              <button
                className={`${styles.langButton} ${language === 'es' ? styles.activeLang : ''}`}
                onClick={() => setLanguage('es')}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenuContainer} ${mobileMenu ? styles.show : ''}`}>
        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <a
              key={item.sectionId + item.label}
              href={`#${item.sectionId}`}
              onClick={(e) => scrollToSection(e, item.sectionId)}
              className={styles.mobileNavLink}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
