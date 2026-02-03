import React from 'react';

import { useLanguage } from '../../context/LanguageProvider';
import { getTranslation } from '../../helpers/translations';

import Container from '../Container';
import * as styles from './Footer.module.css';

const Footer = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  return (
    <div className={styles.root}>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.content}>
          <span className={styles.names}>{t('names')}</span>
          <span className={styles.footerText}>{t('footerText')}</span>
          <span className={styles.hashtag}>#SofiaIDavid</span>
        </div>
      </Container>
      <div className={styles.illustrationCredit}>
        <span>{t('illustrationsBy')}</span>
        <a href="https://www.instagram.com/vinoandtype" target="_blank" rel="noopener noreferrer">
          <img src="/blancolargo.png" alt="Vino and Type" className={styles.illustrationLogo} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
