import React from 'react';

import { useLanguage } from '../context/LanguageProvider';
import { getTranslation } from '../helpers/translations';

import Button from '../components/Button';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

import * as styles from './index.module.css';

const IndexPage = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const googleFormsUrl = 'https://forms.gle/vTdj9iuPoZDH8rnTA';

  return (
    <Layout disablePaddingBottom>
      {/* Section 1: Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <img
            src="/banner.png"
            alt="Gran Hotel La Florida illustration"
            className={styles.heroBanner}
          />
          <span className={styles.saveTheDate}>{t('saveTheDate')}</span>
          <h1 className={styles.heroNames}>{t('names')}</h1>
          <span className={styles.heroTagline}>{t('tagline')}</span>
          <Button
            className={styles.heroCta}
            level={'primary'}
            onClick={() => window.open(googleFormsUrl, '_blank')}
          >
            {t('ctaButton')}
          </Button>
        </div>
      </section>

      {/* Section 2: When & Where */}
      <section id="when-where" className={styles.whenWhereSection}>
        <Container>
          <div className={styles.whenWhereGrid}>
            <div className={styles.whenColumn}>
              <h2 className={styles.sectionTitle}>{t('whenTitle')}</h2>
              <div className={styles.scheduleItem}>
                <span className={styles.scheduleLabel}>{t('outdoor')}</span>
                <span className={styles.scheduleTime}>{t('outdoorTime')}</span>
              </div>
              <div className={styles.scheduleItem}>
                <span className={styles.scheduleLabel}>{t('indoor')}</span>
                <span className={styles.scheduleTime}>{t('indoorTime')}</span>
              </div>
            </div>
            <div className={styles.whereColumn}>
              <h2 className={styles.sectionTitle}>{t('whereTitle')}</h2>
              <span className={styles.venueName}>{t('venueName')}</span>
              <span className={styles.venueAddress}>{t('venueAddress')}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: Invitation */}
      <section className={styles.invitationSection}>
        <Container>
          <div className={styles.invitationContent}>
            <span className={styles.invitationSubtitle}>{t('subtitle')}</span>
            <p className={styles.invitationText}>{t('invitationText')}</p>
            <span className={styles.dressCode}>{t('dressCode')}</span>
          </div>
        </Container>
      </section>

      {/* Section 4: Photo Gallery */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          <img src="/fotos/cascada.jpg" alt="Sofia i David" />
          <img src="/fotos/islandia.jpg" alt="Sofia i David" />
          <img src="/fotos/caracas.jpg" alt="Sofia i David" />
          <img src="/fotos/humboldt.jpg" alt="Sofia i David" />
          <img src="/fotos/washingtonss.jpg" alt="Sofia i David" />
          <img src="/fotos/freeeed.jpg" alt="Sofia i David" />
        </div>
      </section>

      {/* Section 5: RSVP CTA */}
      <section id="rsvp" className={styles.rsvpCtaSection}>
        <Container>
          <div className={styles.rsvpCtaContent}>
            <h2 className={styles.rsvpCtaTitle}>{t('rsvpTitle')}</h2>
            <p className={styles.rsvpCtaSubtitle}>{t('rsvpSubtitle')}</p>
            <Button
              level={'primary'}
              onClick={() => window.open(googleFormsUrl, '_blank')}
            >
              {t('rsvpButton')}
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default IndexPage;
