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
      <div className={styles.copyright}>
        <span>{t('madeWith')} &#10084;</span>
      </div>
    </div>
  );
};

export default Footer;
