import React from 'react';
import { navigate } from 'gatsby';
import * as styles from './404.module.css';

import Button from '../components/Button';
import Container from '../components/Container';
import Layout from '../components/Layout';

import { useLanguage } from '../context/LanguageProvider';
import { getTranslation } from '../helpers/translations';

const NotFoundPage = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>404</h1>
          <h2>{language === 'ca' ? 'Pàgina no trobada' : 'Página no encontrada'}</h2>
          <p>
            {language === 'ca'
              ? 'Sembla que t\'has perdut pel camí cap al casament.'
              : 'Parece que te has perdido de camino a la boda.'}
          </p>
          <Button level={'primary'} onClick={() => navigate('/')}>
            {language === 'ca' ? 'Torna a l\'inici' : 'Volver al inicio'}
          </Button>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
