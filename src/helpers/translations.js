const translations = {
  ca: {
    // Header / Navigation
    names: "Sofia i David",
    when: "Quan",
    where: "On",
    rsvp: "Confirmar",

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
    outdoor: "A l'aire lliure",
    indoor: "Interior",
    outdoorTime: "19:00 - 23:00",
    indoorTime: "23:00 - 02:00",
    venueName: "Gran Hotel La Florida",
    venueAddress: "Ctra. de Vallvidrera al Tibidabo, 83-93, 08035 Barcelona",
    moreDetails: "Tots els detalls +",

    // RSVP Section
    rsvpTitle: "Esperem que ens acompanyis",
    rsvpSubtitle: "Si us plau, confirmeu la vostra assistència abans del 15 de maig",
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
    when: "Cuándo",
    where: "Dónde",
    rsvp: "Confirmar",

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
    outdoor: "Al aire libre",
    indoor: "Interior",
    outdoorTime: "19:00 - 23:00",
    indoorTime: "23:00 - 02:00",
    venueName: "Gran Hotel La Florida",
    venueAddress: "Ctra. de Vallvidrera al Tibidabo, 83-93, 08035 Barcelona",
    moreDetails: "Todos los detalles +",

    // RSVP Section
    rsvpTitle: "Esperamos que nos acompañes",
    rsvpSubtitle: "Por favor, confirma tu asistencia antes del 15 de mayo",
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
