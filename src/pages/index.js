import React, { useState } from 'react';

import { useLanguage } from '../context/LanguageProvider';
import { getTranslation } from '../helpers/translations';

import Button from '../components/Button';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

import * as styles from './index.module.css';

const IndexPage = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  const [openFaq, setOpenFaq] = useState(null);

  const rsvpUrl = t('rsvpUrl');

  const faqItems = [
    { id: 'dressCode', title: t('faqDressCodeTitle'), answer: t('faqDressCodeText') },
    { id: 'transport', title: t('faqTransportTitle'), answer: t('faqTransportText') },
    { id: 'children', title: t('faqChildrenTitle'), answer: t('faqChildrenText') },
    { id: 'gifts', title: t('faqGiftsTitle'), answer: t('faqGiftsText') },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <Layout disablePaddingBottom>
      {/* Section 1: Hero */}
      <section className={styles.heroSection}></section>

      {/* Section 2: When & Where */}
      <section id="when-where" className={styles.whenWhereSection}>
        <Container>
          <div className={styles.whenWhereGrid}>
            <div className={styles.whenColumn}>
              <img src="/when.png" alt="When" className={styles.columnImage} />
              <h2 className={styles.sectionTitle}>{t('whenTitle')}</h2>
              <span className={styles.weddingDate}>{t('weddingDateFull')}</span>
              <span className={styles.scheduleTime}>{t('cocktailTime')}</span>
              <span className={styles.scheduleTime}>{t('partyTime')}</span>
            </div>
            <div className={styles.whereColumn}>
              <img src="/where.png" alt="Where" className={styles.columnImage} />
              <h2 className={styles.sectionTitle}>{t('whereTitle')}</h2>
              <span className={styles.venueName}>{t('venueName')}</span>
              <span className={styles.venueAddress}>{t('venueAddress')}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: Photo Gallery */}
      <section id="gallery" className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          <img src="/fotos/cascada.jpg" alt="Sofia i David" />
          <img src="/fotos/islandia.jpg" alt="Sofia i David" />
          <img src="/fotos/caracas.jpg" alt="Sofia i David" />
          <img src="/fotos/humboldt.jpg" alt="Sofia i David" />
          <img src="/fotos/washingtonss.jpg" alt="Sofia i David" />
          <img src="/fotos/freeeed.jpg" alt="Sofia i David" />
          <img src="/fotos/anell.jpg" alt="Sofia i David" />
          <img src="/fotos/colombia.jpg" alt="Sofia i David" />
          <img src="/fotos/guapos.jpg" alt="Sofia i David" />
          <img src="/fotos/guaposcolombians.jpg" alt="Sofia i David" />
          <img src="/fotos/ovelles.jpg" alt="Sofia i David" />
          <img src="/fotos/vi.jpg" alt="Sofia i David" />
        </div>
      </section>

      {/* Section 4: FAQ */}
      <section id="faq" className={styles.faqSection}>
        <Container>
          <div className={styles.faqContent}>
            <h2 className={styles.faqTitle}>{t('faqTitle')}</h2>
            <div className={styles.faqList}>
              {faqItems.map((item) => (
                <div key={item.id} className={styles.faqItem}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(item.id)}
                  >
                    <h3>{item.title}</h3>
                    <span className={`${styles.faqIcon} ${openFaq === item.id ? styles.open : ''}`}>
                      +
                    </span>
                  </button>
                  <div className={`${styles.faqAnswer} ${openFaq === item.id ? styles.open : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Section 5: RSVP CTA */}
      <section id="rsvp" className={styles.rsvpCtaSection}>
        <Container>
          <div className={styles.rsvpCtaContent}>
            <h2 className={styles.rsvpCtaTitle}>{t('rsvpTitle')}</h2>
            <p className={styles.rsvpCtaSubtitle}>{t('rsvpSubtitle')}</p>
            <Button
              className={styles.rsvpCtaButton}
              level={'primary'}
              onClick={() => window.open(rsvpUrl, '_blank')}
            >
              RSVP
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default IndexPage;
