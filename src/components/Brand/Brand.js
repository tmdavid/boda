import React from 'react';
import { navigate } from 'gatsby';

import { useLanguage } from '../../context/LanguageProvider';
import { getTranslation } from '../../helpers/translations';

import * as styles from './Brand.module.css';

const Brand = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      <span className={styles.brandText}>{t('names')}</span>
    </div>
  );
};

export default Brand;
