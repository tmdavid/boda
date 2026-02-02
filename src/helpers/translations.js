const translations = {
  ca: {
    // Header / Navigation
    names: "Sofia i David",
    navWhenWhere: "Quan/On",
    navFaq: "FAQ",
    navConfirm: "Confirmar",
    rsvpUrl: "https://tally.so/r/44KGGk",

    // Hero Section
    tagline: "Ens casem!",
    saveTheDate: "Reserva la data",
    weddingDate: "19 de Setembre de 2026",
    ctaButton: "Confirmar assistència",

    // Invitation Section
    subtitle: "Una parella celestial",
    invitationText: "Ens complau convidar-vos a celebrar el nostre casament. Serà un honor compartir aquest dia tan especial amb vosaltres.",
    dressCode: "Codi de vestimenta: Elegant",

    // When & Where Section
    whenTitle: "Quan",
    whereTitle: "On",
    weddingDateFull: "Dissabte, 19 de setembre de 2026",
    cocktailTime: "Còctel: 7:00 p.m.",
    partyTime: "Festa: 11:00 p.m.",
    venueName: "Gran Hotel La Florida",
    venueAddress: "Ctra. de Vallvidrera al Tibidabo, 83, 93, Barcelona",
    moreDetails: "Tots els detalls +",

    // FAQ Section
    faqTitle: "Detalls del dia",
    faqDressCodeTitle: "Codi de vestimenta",
    faqDressCodeText: "La celebració comença a les 7 pm, per la qual cosa demanem etiqueta formal de nit. Els homes amb vestit fosc i les dones amb vestit llarg.",
    faqTransportTitle: "Transport",
    faqTransportText: "No proporcionarem transport, però hi haurà servei de taxi disponible cap a i des de l'hotel. També disposem de places d'aparcament limitades. Si prefereixes venir amb cotxe, avisa'ns per reservar-te'n una!",
    faqChildrenTitle: "Nens",
    faqChildrenText: "Ens encanten els nens, però volem que tots puguem gaudir plenament d'aquest dia, per la qual cosa aquesta celebració és només per a adults.",
    faqGiftsTitle: "Regals",
    faqGiftsText: "A la nostra edat, l'únic que volem és retirar-nos aviat. Si voleu contribuir a aquest somni, us ho agrairem enormement.",

    // RSVP Section
    rsvpTitle: "Confirmar assistència",
    rsvpSubtitle: "Ens encantaria comptar amb tu. Si us plau, fes-nos-ho saber abans del 15 de juny de 2026.",
    rsvpButton: "Confirmar assistència",

    // RSVP Form
    formName: "Nom complet",
    formEmail: "Correu electrònic",
    formAttending: "Assistireu?",
    formYes: "Sí, hi seré!",
    formNo: "Ho sento, no podré assistir",
    formGuests: "Nombre de convidats",
    formDietary: "Restriccions alimentàries",
    formDietaryPlaceholder: "Al·lèrgies, vegetarià, etc.",
    formMessage: "Missatge (opcional)",
    formMessagePlaceholder: "Deixeu-nos un missatge...",
    formSubmit: "Enviar confirmació",
    formSuccess: "Gràcies per confirmar! Ens veiem aviat.",
    formError: "Hi ha hagut un error. Si us plau, torneu a intentar-ho.",

    // Footer
    footerText: "Ens veiem el 19 de setembre!",
    madeWith: "Fet amb amor",
  },
  es: {
    // Header / Navigation
    names: "Sofia y David",
    navWhenWhere: "Cuándo/Dónde",
    navFaq: "FAQ",
    navConfirm: "Confirmar",
    rsvpUrl: "https://tally.so/r/ob2xKx",

    // Hero Section
    tagline: "¡Nos casamos!",
    saveTheDate: "Reserva la fecha",
    weddingDate: "19 de Septiembre de 2026",
    ctaButton: "Confirmar asistencia",

    // Invitation Section
    subtitle: "Una pareja celestial",
    invitationText: "Nos complace invitarte a celebrar nuestra boda. Será un honor compartir este día tan especial contigo.",
    dressCode: "Código de vestimenta: Elegante",

    // When & Where Section
    whenTitle: "Cuándo",
    whereTitle: "Dónde",
    weddingDateFull: "Sábado, 19 de septiembre de 2026",
    cocktailTime: "Cóctel: 7:00 p.m.",
    partyTime: "Fiesta: 11:00 p.m.",
    venueName: "Gran Hotel La Florida",
    venueAddress: "Ctra. de Vallvidrera al Tibidabo, 83, 93, Barcelona",
    moreDetails: "Todos los detalles +",

    // FAQ Section
    faqTitle: "Detalles del día",
    faqDressCodeTitle: "Código de vestimenta",
    faqDressCodeText: "La celebración comienza a las 7 pm, por lo que pedimos etiqueta formal de noche. Los hombres en traje oscuro y las mujeres en vestido largo.",
    faqTransportTitle: "Transporte",
    faqTransportText: "No proporcionaremos transporte, pero habrá servicio de taxi disponible hacia y desde el hotel. También contamos con plazas de parking limitadas. Si prefieres venir en coche, avísanos para reservarte una!",
    faqChildrenTitle: "Niños",
    faqChildrenText: "Nos encantan los niños, pero queremos que todos podamos disfrutar plenamente de este día, por lo que esta celebración es solo para adultos.",
    faqGiftsTitle: "Regalos",
    faqGiftsText: "A nuestra edad, lo único que queremos es retirarnos pronto. Si quieres contribuir a ese sueño, lo agradeceremos enormemente.",

    // RSVP Section
    rsvpTitle: "Confirmar asistencia",
    rsvpSubtitle: "Nos encantaría contar contigo. Por favor, háznoslo saber antes del 15 de junio de 2026.",
    rsvpButton: "Confirmar asistencia",

    // RSVP Form
    formName: "Nombre completo",
    formEmail: "Correo electrónico",
    formAttending: "¿Asistirás?",
    formYes: "¡Sí, ahí estaré!",
    formNo: "Lo siento, no podré asistir",
    formGuests: "Número de invitados",
    formDietary: "Restricciones alimentarias",
    formDietaryPlaceholder: "Alergias, vegetariano, etc.",
    formMessage: "Mensaje (opcional)",
    formMessagePlaceholder: "Déjanos un mensaje...",
    formSubmit: "Enviar confirmación",
    formSuccess: "¡Gracias por confirmar! Nos vemos pronto.",
    formError: "Ha habido un error. Por favor, inténtalo de nuevo.",

    // Footer
    footerText: "¡Nos vemos el 19 de septiembre!",
    madeWith: "Hecho con amor",
  }
};

export const getTranslation = (language, key) => {
  return translations[language]?.[key] || translations.ca[key] || key;
};

export const useTranslation = (language) => {
  return (key) => getTranslation(language, key);
};

export default translations;
