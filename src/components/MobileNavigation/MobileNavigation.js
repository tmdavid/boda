import React from 'react';

import { useLanguage } from '../../context/LanguageProvider';
import { getTranslation } from '../../helpers/translations';

import * as styles from './MobileNavigation.module.css';

const MobileNavigation = ({ close }) => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (close) close();
  };

  const navItems = [
    { label: t('when'), sectionId: 'when-where' },
    { label: t('where'), sectionId: 'when-where' },
    { label: t('rsvp'), sectionId: 'rsvp' },
  ];

  return (
    <div className={styles.root}>
      <nav>
        <div className={styles.mobileNavContainer}>
          {navItems.map((item) => (
            <a
              key={item.sectionId + item.label}
              href={`#${item.sectionId}`}
              onClick={(e) => scrollToSection(e, item.sectionId)}
              className={styles.mobileLink}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default MobileNavigation;
