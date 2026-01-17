// Lista completa de destinos de Mallorca
const destinations = [
    'AEROPUERTO',
    'ALARO',
    'ALCUDIA',
    'ALGAIDA',
    'ALQUERIA BLANCA',
    'ANDRATX',
    'ARENAL',
    'ARIANY',
    'ARTA',
    'AUCANADA',
    'BADIA BLAVA',
    'BADIA GRAN',
    'BANYALBUFAR',
    'BENDINAT',
    'BETLEM',
    'BINIALI',
    'BINIAMAR',
    'BINISSALEM',
    'BUGER',
    'BUNYOLA',
    'CAIMARI',
    'CALA BARCA',
    'CALA BONA',
    'CALA D\'OR',
    'CALA FERRERA',
    'CALA FIGUERA',
    'CALA FORNELLS',
    'CALA LLOMBARDS',
    'CALA MANDIA',
    'CALA MESQUIDA',
    'CALA MILLOR',
    'CALA MONDRAGO',
    'CALA MOREIA',
    'CALA MURADA',
    'CALA PI',
    'CALA RATJADA',
    'CALA SANTANY',
    'CALA SERENA',
    'CALA VINYES',
    'CALAS DE MALLORCA',
    'CALVIA',
    'CAMP DE MAR',
    'CAMPANET',
    'CAMPOS',
    'CAN PASTILLA',
    'CAN PICAFORT',
    'CANYAMEL',
    'CAPDEPERA',
    'CAS CATALA',
    'CAS CONCOS',
    'COLONIA SANT JORDI',
    'COLONIA SANT PERE',
    'CONSELL',
    'COSTA DE LA CALMA',
    'COSTA DE LOS PINOS',
    'COSTA DEN BLANES',
    'COSTITX',
    'DEIA',
    'EL TORO',
    'ELS GARROVERS',
    'ESPORLES',
    'ESTELLENCS',
    'FELANITX',
    'FONT DE SA CALA',
    'FORMENTOR',
    'FORNALUTX',
    'ILLETAS',
    'INCA',
    'LLOSETA',
    'LLUBI',
    'LLUC',
    'LLUCALCARI',
    'LLUCMAJOR',
    'MAGALUF',
    'MAL PAS',
    'MANACOR',
    'MANOR DEL VALL',
    'MARIA DE LA SALUD',
    'PAGUERA',
    'PALMA',
    'PALMANOVA',
    'PALMANYOLA',
    'PETRA',
    'PLAYA DE MURO',
    'PLAYA DE PALMA',
    'PLAYA ROMANTICA',
    'POLLENSA',
    'PORRERAS',
    'PORT ADRIANO',
    'PORT DE SOLLER',
    'PORTALS NOUS',
    'PORTALS VELLS',
    'PORTO COLOM',
    'PORTO CRISTO',
    'PORTO CRISTO NOVO',
    'PORTOL',
    'PUERTO DE ALCUDIA',
    'PUERTO DE ANDRATX',
    'PUERTO POLLENSA',
    'SA COMA',
    'SA RAPITA',
    'SAN AGUSTIN',
    'SAN LORENZO',
    'SANT JOAN',
    'SANT TELM',
    'SANTA MARIA',
    'SANTA PONSA',
    'SANTANY',
    'SELVA',
    'SENCELLES',
    'SES SALINES',
    'SILLOT',
    'SINEU',
    'SOLLER',
    'SON SERRA MARINA',
    'SON SERVERA',
    'SON VIDA',
    'VALLDEMOSSA',
    'VALLGORNERA'
];

// Google Reviews Data (simuladas basadas en el enlace de Google)
const googleReviews = [
    {
        author: 'John Doe',
        rating: 5,
        text: 'Servicio excelente, puntual y muy profesional. Recomiendo.',
        date: 'Hace 2 semanas',
        avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=1a56db&color=fff'
    },
    {
        author: 'Maria Garcia',
        rating: 5,
        text: 'Kristian es un super conductor, siempre puntual incluso con retrasos. Muy confiable y recomendable.',
        date: 'Hace 1 mes',
        avatar: 'https://ui-avatars.com/api/?name=Maria+Garcia&background=10b981&color=fff'
    },
    {
        author: 'Thomas Müller',
        rating: 5,
        text: 'Sehr zuverlässig und pünktlich. Kristian war stets geduldig, selbst bei Verspätungen. Sehr empfehlenswert!',
        date: 'Hace 3 semanas',
        avatar: 'https://ui-avatars.com/api/?name=Thomas+Muller&background=f59e0b&color=fff'
    },
    {
        author: 'Sarah Johnson',
        rating: 5,
        text: 'Excellent service! Friendly driver, on time, and very professional. Made our vacation stress-free. Highly recommend!',
        date: 'Hace 2 meses',
        avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=ef4444&color=fff'
    },
    {
        author: 'Carlos Rodriguez',
        rating: 5,
        text: 'Servicio impecable. Muy profesional, puntual y amable. El mejor servicio de traslados en Mallorca.',
        date: 'Hace 1 semana',
        avatar: 'https://ui-avatars.com/api/?name=Carlos+Rodriguez&background=8b5cf6&color=fff'
    },
    {
        author: 'Emma Wilson',
        rating: 5,
        text: 'Perfect service from start to finish. Kristian was very helpful and made sure we arrived on time. Will definitely use again!',
        date: 'Hace 3 meses',
        avatar: 'https://ui-avatars.com/api/?name=Emma+Wilson&background=ec4899&color=fff'
    },
    {
        author: 'Jean Dubois',
        rating: 5,
        text: 'Service exceptionnel! Très professionnel, ponctuel et amical. Je recommande vivement.',
        date: 'Hace 2 semanas',
        avatar: 'https://ui-avatars.com/api/?name=Jean+Dubois&background=06b6d4&color=fff'
    },
    {
        author: 'Luigi Rossi',
        rating: 5,
        text: 'Servizio eccellente! Conducente professionale, puntuale e molto disponibile. Consigliatissimo!',
        date: 'Hace 1 mes',
        avatar: 'https://ui-avatars.com/api/?name=Luigi+Rossi&background=f97316&color=fff'
    },
    {
        author: 'Ana Silva',
        rating: 5,
        text: 'Serviço perfeito! Muito pontual e profissional. Kristian foi muito atencioso durante toda a viagem.',
        date: 'Hace 3 semanas',
        avatar: 'https://ui-avatars.com/api/?name=Ana+Silva&background=84cc16&color=fff'
    }
];

// Variables globales para carousel
let currentReviewIndex = 0;
let carouselInterval = null;
const reviewsPerView = 3;

// Navegación de páginas
function showPage(pageId) {
    // Verificar si intenta acceder a "Mi cuenta" sin estar logueado
    if (pageId === 'cuenta') {
        const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
        if (!currentUser) {
            // Mostrar formulario de login automáticamente
            const loginCard = document.getElementById('loginCard');
            const registerCard = document.getElementById('registerCard');
            if (loginCard) loginCard.style.display = 'block';
            if (registerCard) registerCard.style.display = 'none';
        }
    }
    
    // Ocultar todas las páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Mostrar la página seleccionada
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Actualizar enlaces del menú
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });
    
    // Aplicar traducción a la nueva página
    const savedLang = localStorage.getItem('selectedLanguage') || 'es';
    if (typeof changeLanguage === 'function') {
        changeLanguage(savedLang);
    }
    
    // Si es la página de reseñas, reiniciar el carousel
    if (pageId === 'inicio' || pageId === 'reservar') {
        setTimeout(() => {
            initializeCarousel();
        }, 300);
    }
    
    // Resetear estado de confirmación cuando se muestra la página de reservar
    if (pageId === 'reservar') {
        resetConfirmationState();
        // Reinicializar selectores de hora cuando se muestra la página de reservar
        setTimeout(() => {
            initializeTimeSelectors();
        }, 200);
    }
    
    // Si es la página de reservar, resetear el wizard
    if (pageId === 'reservar') {
        resetBookingWizard();
    }
}

// Reset booking wizard to start from step 1
function resetBookingWizard() {
    // Hide booking form
    const formSection = document.getElementById('bookingFormSection');
    if (formSection) {
        formSection.style.display = 'none';
    }
    
    // Show wizard
    const wizard = document.getElementById('bookingWizard');
    if (wizard) {
        wizard.style.display = 'block';
        
        // Reset to step service
        document.querySelectorAll('.booking-step').forEach(step => {
            step.classList.remove('active');
        });
        
        const stepService = document.getElementById('step-service');
        if (stepService) {
            stepService.classList.add('active');
        }
        
        // Reset booking data
        selectedDirection = '';
        selectedTripType = '';
        bookingData = {
            direction: '',
            tripType: '',
            origin: '',
            destination: '',
            returnOrigin: '',
            returnDestination: '',
            adults: 0,
            children: 0,
            babies: 0,
            luggage: 0,
            babySeat: 0,
            maxiCosi: 0,
            bicycles: 0,
            golf: 0
        };
        
        // Reset counters
        const counterValues = ['adultsCount', 'childrenCount', 'babiesCount', 'luggageCount', 'babySeatCount', 'maxiCosiCount', 'bicyclesCount', 'golfCount'];
        counterValues.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = '0';
            }
        });
        
        // Reset buttons
        document.querySelectorAll('.step-option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Hide next buttons
        document.querySelectorAll('.step-next-btn').forEach(btn => {
            btn.style.display = 'none';
        });
    }
}

// Inicializar carousel de reseñas
function initializeCarousel() {
    const carousel = document.getElementById('reviewsCarousel');
    const carouselSmall = document.getElementById('reviewsCarouselSmall');
    
    if (carousel) {
        loadReviews(carousel, googleReviews, reviewsPerView);
        startAutoCarousel(carousel, googleReviews.length, reviewsPerView);
    }
    
    if (carouselSmall) {
        loadReviews(carouselSmall, googleReviews, 1);
        startAutoCarousel(carouselSmall, googleReviews.length, 1);
    }
}

// Cargar reseñas en el carousel
function loadReviews(container, reviews, perView) {
    if (!container) return;
    
    container.innerHTML = '';
    
    const reviewsToShow = reviews.slice(0, perView).map((review, index) => {
        return createReviewCard(review, index);
    }).join('');
    
    container.innerHTML = reviewsToShow;
}

// Crear tarjeta de reseña
function createReviewCard(review, index) {
    const stars = Array(review.rating).fill('<i class="fas fa-star"></i>').join('');
    return `
        <div class="review-card" data-index="${index}">
            <div class="review-header">
                <img src="${review.avatar}" alt="${review.author}" class="review-avatar">
                <div class="review-author-info">
                    <p class="review-author">${review.author}</p>
                    <div class="review-rating">${stars}</div>
                </div>
            </div>
            <p class="review-text">"${review.text}"</p>
            <p class="review-date">${review.date}</p>
        </div>
    `;
}

// El carousel ahora es completamente automático, no se necesita función moveCarousel

// Actualizar carousel
function updateCarousel(carousel) {
    if (!carousel) return;
    
    const reviewsToShow = googleReviews.slice(currentReviewIndex, currentReviewIndex + reviewsPerView);
    carousel.innerHTML = reviewsToShow.map((review, index) => {
        return createReviewCard(review, currentReviewIndex + index);
    }).join('');
    
    carousel.style.transform = `translateX(0)`;
    carousel.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
}

// Auto carousel (completamente automático, sin controles)
function startAutoCarousel(container, totalReviews, perView) {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
    
    carouselInterval = setInterval(() => {
        const maxIndex = totalReviews - perView;
        currentReviewIndex = currentReviewIndex >= maxIndex ? 0 : currentReviewIndex + 1;
        
        if (container.id === 'reviewsCarousel') {
            updateCarousel(container);
        } else if (container.id === 'reviewsCarouselSmall') {
            const reviewsToShow = googleReviews.slice(currentReviewIndex).concat(googleReviews.slice(0, currentReviewIndex));
            container.innerHTML = reviewsToShow.slice(0, 1).map((review, index) => {
                return createReviewCard(review, currentReviewIndex + index);
            }).join('');
        }
    }, 4000); // Cambiar cada 4 segundos para más fluidez
}

// Traducciones
const translations = {
    es: {
        nav: { inicio: 'Inicio', servicios: 'Servicios', precios: 'Precios', reservar: 'Reservar', soporte: 'Soporte' },
        btn: { reservar: 'Reservar', bookNow: 'Reservar ahora' },
        hero: { title: 'Traslado privado seguro y puntual desde/hacia el aeropuerto', subtitle: 'Transporte de calidad y confianza en Mallorca' },
        howItWorks: { title: 'CÓMO FUNCIONA', step1: 'Elige fecha y hora', step2: 'Selecciona ruta', step3: 'Reserva y disfruta' },
        testimonials: { title: 'NUESTROS CLIENTES' },
        prices: { title: 'PRECIOS', intro: 'Precios de traslados privados en Mallorca', table: { route: 'Ruta', standard: 'Standard', nocturno: 'Nocturno', oneway: 'One-Way', return: 'Return' }},
        whyBookUs: { title: 'Por qué reservar con nosotros', item1: 'Conductores profesionales', item2: 'Opiniones excelentes', item3: 'Servicio puerta a puerta', item4: 'Experimenta un viaje acogedor y tranquilo' },
        whyBookKristian: { title: 'Por qué reservar con KristianTransfers', feature1: { title: 'A Tiempo', desc: 'Nos aseguramos que llegues siempre a tiempo' }, feature2: { title: 'Privacidad', desc: 'Disfruta de tu privacidad' }, feature3: { title: 'Rapidez', desc: 'Llega a tu destino en poco tiempo' }, feature4: { title: 'Reserva Fácil', desc: 'Reserva en tan solo 2 minutos' }, feature5: { title: 'Soporte 24/7', desc: 'Atención al cliente disponible las 24 horas' }},
        soporte: { title: 'Soporte' },
        serviceAreas: { title: 'ZONAS DE SERVICIO', description: 'Ofrecemos transfers privados desde/hacia el aeropuerto de Palma de Mallorca y otros destinos populares en la isla.' },
        services: { title: 'NUESTROS SERVICIOS', service1: { title: 'Traslados al Aeropuerto', desc: 'Servicio puntual y confiable desde cualquier punto de Mallorca hacia el aeropuerto de Palma.' }, service2: { title: 'Traslados desde el Aeropuerto', desc: 'Te recogemos en el aeropuerto y te llevamos a tu destino en Mallorca de forma cómoda y segura.' }, service3: { title: 'Traslados entre Destinos', desc: 'Transporte privado entre diferentes puntos de la isla. Disfruta de la comodidad de un servicio puerta a puerta.' }, service4: { title: 'Servicio VIP', desc: 'Vehículos de lujo y servicio premium para ocasiones especiales. Máxima comodidad y elegancia.' }, service5: { title: 'Transporte en Grupo', desc: 'Vehículos espaciosos para grupos grandes. Furgonetas y minivans disponibles para tu comodidad.' }, service6: { title: 'Servicio Nocturno', desc: 'Disponible las 24 horas del día, todos los días del año, incluidos festivos. Siempre ahí cuando nos necesites.' }},
        footer: { terms: 'Términos y condiciones' }
    },
    en: {
        nav: { inicio: 'Home', servicios: 'Services', precios: 'Prices', reservar: 'Book', soporte: 'Support' },
        btn: { reservar: 'Book', bookNow: 'Book now' },
        hero: { title: 'Safe and punctual private transfer to/from the airport', subtitle: 'Quality and reliable transport in Mallorca' },
        howItWorks: { title: 'HOW IT WORKS', step1: 'Choose date and time', step2: 'Select route', step3: 'Book and enjoy' },
        testimonials: { title: 'OUR CLIENTS' },
        prices: { title: 'PRICES', intro: 'Private transfer prices in Mallorca', table: { route: 'Route', standard: 'Standard', nocturno: 'Night', oneway: 'One-Way', return: 'Return' }},
        whyBookUs: { title: 'Why book with us', item1: 'Professional drivers', item2: 'Excellent reviews', item3: 'Door-to-door service', item4: 'Experience a welcoming and relaxing trip' },
        whyBookKristian: { title: 'Why book with KristianTransfers', feature1: { title: 'On Time', desc: 'We ensure you always arrive on time' }, feature2: { title: 'Privacy', desc: 'Enjoy your privacy' }, feature3: { title: 'Speed', desc: 'Arrive at your destination quickly' }, feature4: { title: 'Easy Booking', desc: 'Book in just 2 minutes' }, feature5: { title: '24/7 Support', desc: 'Customer service available 24 hours' }},
        soporte: { title: 'Support' },
        serviceAreas: { title: 'SERVICE AREAS', description: 'We offer private transfers from/to Palma de Mallorca airport and other popular destinations on the island.' },
        services: { title: 'OUR SERVICES', service1: { title: 'Airport Transfers', desc: 'Punctual and reliable service from any point in Mallorca to Palma airport.' }, service2: { title: 'Transfers from Airport', desc: 'We pick you up at the airport and take you to your destination in Mallorca comfortably and safely.' }, service3: { title: 'Inter-Destination Transfers', desc: 'Private transport between different points on the island. Enjoy the comfort of a door-to-door service.' }, service4: { title: 'VIP Service', desc: 'Luxury vehicles and premium service for special occasions. Maximum comfort and elegance.' }, service5: { title: 'Group Transport', desc: 'Spacious vehicles for large groups. Vans and minivans available for your comfort.' }, service6: { title: 'Night Service', desc: 'Available 24 hours a day, every day of the year, including holidays. Always there when you need us.' }},
        footer: { terms: 'Terms and conditions' }
    },
    de: {
        nav: { inicio: 'Startseite', servicios: 'Dienstleistungen', precios: 'Preise', reservar: 'Buchen', soporte: 'Support' },
        btn: { reservar: 'Buchen', bookNow: 'Jetzt buchen' },
        hero: { title: 'Sicherer und pünktlicher Privattransfer zum/vom Flughafen', subtitle: 'Qualitäts- und zuverlässiger Transport auf Mallorca' },
        howItWorks: { title: 'WIE ES FUNKTIONIERT', step1: 'Datum und Uhrzeit wählen', step2: 'Route auswählen', step3: 'Buchen und genießen' },
        testimonials: { title: 'UNSERE KUNDEN' },
        prices: { title: 'PREISE', intro: 'Preise für Privattransfers auf Mallorca', table: { route: 'Route', standard: 'Standard', nocturno: 'Nacht', oneway: 'Einfache Fahrt', return: 'Rückfahrt' }},
        whyBookUs: { title: 'Warum bei uns buchen', item1: 'Professionelle Fahrer', item2: 'Ausgezeichnete Bewertungen', item3: 'Tür-zu-Tür-Service', item4: 'Erleben Sie eine einladende und entspannende Reise' },
        whyBookKristian: { title: 'Warum mit KristianTransfers buchen', feature1: { title: 'Pünktlich', desc: 'Wir stellen sicher, dass Sie immer pünktlich ankommen' }, feature2: { title: 'Privatsphäre', desc: 'Genießen Sie Ihre Privatsphäre' }, feature3: { title: 'Geschwindigkeit', desc: 'Erreichen Sie schnell Ihr Ziel' }, feature4: { title: 'Einfache Buchung', desc: 'Buchen Sie in nur 2 Minuten' }, feature5: { title: '24/7 Support', desc: 'Kundenservice rund um die Uhr verfügbar' }},
        soporte: { title: 'Support' },
        serviceAreas: { title: 'SERVICEBEREICHE', description: 'Wir bieten Privattransfers vom/zum Flughafen Palma de Mallorca und anderen beliebten Zielen auf der Insel an.' },
        services: { title: 'UNSERE DIENSTLEISTUNGEN', service1: { title: 'Flughafentransfers', desc: 'Pünktlicher und zuverlässiger Service von jedem Punkt in Mallorca zum Flughafen Palma.' }, service2: { title: 'Transfers vom Flughafen', desc: 'Wir holen Sie am Flughafen ab und bringen Sie bequem und sicher zu Ihrem Ziel in Mallorca.' }, service3: { title: 'Transfers zwischen Zielen', desc: 'Privater Transport zwischen verschiedenen Punkten der Insel. Genießen Sie den Komfort eines Tür-zu-Tür-Services.' }, service4: { title: 'VIP-Service', desc: 'Luxusfahrzeuge und Premium-Service für besondere Anlässe. Maximaler Komfort und Eleganz.' }, service5: { title: 'Gruppentransport', desc: 'Geräumige Fahrzeuge für große Gruppen. Transporter und Minivans für Ihren Komfort verfügbar.' }, service6: { title: 'Nachtservice', desc: 'Verfügbar 24 Stunden am Tag, jeden Tag des Jahres, einschließlich Feiertage. Immer da, wenn Sie uns brauchen.' }},
        footer: { terms: 'Allgemeine Geschäftsbedingungen' }
    },
    fr: {
        nav: { inicio: 'Accueil', servicios: 'Services', precios: 'Prix', reservar: 'Réserver', soporte: 'Support' },
        btn: { reservar: 'Réserver', bookNow: 'Réserver maintenant' },
        hero: { title: 'Transfert privé sûr et ponctuel depuis/vers l\'aéroport', subtitle: 'Transport de qualité et fiable à Majorque' },
        howItWorks: { title: 'COMMENT ÇA MARCHE', step1: 'Choisissez la date et l\'heure', step2: 'Sélectionnez l\'itinéraire', step3: 'Réservez et profitez' },
        testimonials: { title: 'NOS CLIENTS' },
        prices: { title: 'PRIX', intro: 'Prix des transferts privés à Majorque', table: { route: 'Itinéraire', standard: 'Standard', nocturno: 'Nocturne', oneway: 'Aller simple', return: 'Aller-retour' }},
        whyBookUs: { title: 'Pourquoi réserver avec nous', item1: 'Chauffeurs professionnels', item2: 'Avis excellents', item3: 'Service porte à porte', item4: 'Vivez un voyage accueillant et relaxant' },
        whyBookKristian: { title: 'Pourquoi réserver avec KristianTransfers', feature1: { title: 'À l\'heure', desc: 'Nous nous assurons que vous arrivez toujours à l\'heure' }, feature2: { title: 'Confidentialité', desc: 'Profitez de votre intimité' }, feature3: { title: 'Rapidité', desc: 'Arrivez rapidement à destination' }, feature4: { title: 'Réservation facile', desc: 'Réservez en seulement 2 minutes' }, feature5: { title: 'Support 24/7', desc: 'Service client disponible 24h/24' }},
        soporte: { title: 'Support' },
        serviceAreas: { title: 'ZONES DE SERVICE', description: 'Nous proposons des transferts privés depuis/vers l\'aéroport de Palma de Majorque et d\'autres destinations populaires de l\'île.' },
        services: { title: 'NOS SERVICES', service1: { title: 'Transferts vers l\'aéroport', desc: 'Service ponctuel et fiable depuis n\'importe quel point de Majorque vers l\'aéroport de Palma.' }, service2: { title: 'Transferts depuis l\'aéroport', desc: 'Nous vous récupérons à l\'aéroport et vous emmenons à votre destination à Majorque de manière confortable et sûre.' }, service3: { title: 'Transferts entre destinations', desc: 'Transport privé entre différents points de l\'île. Profitez du confort d\'un service porte à porte.' }, service4: { title: 'Service VIP', desc: 'Véhicules de luxe et service premium pour occasions spéciales. Confort et élégance maximum.' }, service5: { title: 'Transport de groupe', desc: 'Véhicules spacieux pour grands groupes. Fourgonnettes et minibus disponibles pour votre confort.' }, service6: { title: 'Service nocturne', desc: 'Disponible 24 heures sur 24, tous les jours de l\'année, y compris les jours fériés. Toujours là quand vous avez besoin de nous.' }},
        footer: { terms: 'Termes et conditions' }
    },
    it: {
        nav: { inicio: 'Home', servicios: 'Servizi', precios: 'Prezzi', reservar: 'Prenota', soporte: 'Supporto' },
        btn: { reservar: 'Prenota', bookNow: 'Prenota ora' },
        hero: { title: 'Trasferimento privato sicuro e puntuale da/per l\'aeroporto', subtitle: 'Trasporto di qualità e affidabile a Maiorca' },
        howItWorks: { title: 'COME FUNZIONA', step1: 'Scegli data e ora', step2: 'Seleziona percorso', step3: 'Prenota e goditi' },
        testimonials: { title: 'I NOSTRI CLIENTI' },
        prices: { title: 'PREZZI', intro: 'Prezzi trasferimenti privati a Maiorca', table: { route: 'Percorso', standard: 'Standard', nocturno: 'Notturno', oneway: 'Andata', return: 'Andata e ritorno' }},
        whyBookUs: { title: 'Perché prenotare con noi', item1: 'Autisti professionisti', item2: 'Recensioni eccellenti', item3: 'Servizio porta a porta', item4: 'Vivi un viaggio accogliente e rilassante' },
        whyBookKristian: { title: 'Perché prenotare con KristianTransfers', feature1: { title: 'Puntuale', desc: 'Ci assicuriamo che arrivi sempre in orario' }, feature2: { title: 'Privacy', desc: 'Goditi la tua privacy' }, feature3: { title: 'Velocità', desc: 'Raggiungi velocemente la tua destinazione' }, feature4: { title: 'Prenotazione facile', desc: 'Prenota in soli 2 minuti' }, feature5: { title: 'Supporto 24/7', desc: 'Assistenza clienti disponibile 24 ore su 24' }},
        soporte: { title: 'Supporto' },
        serviceAreas: { title: 'AREE DI SERVIZIO', description: 'Offriamo trasferimenti privati da/per l\'aeroporto di Palma di Maiorca e altre destinazioni popolari sull\'isola.' },
        services: { title: 'I NOSTRI SERVIZI', service1: { title: 'Trasferimenti all\'aeroporto', desc: 'Servizio puntuale e affidabile da qualsiasi punto di Maiorca all\'aeroporto di Palma.' }, service2: { title: 'Trasferimenti dall\'aeroporto', desc: 'Ti preleviamo all\'aeroporto e ti portiamo a destinazione a Maiorca in modo comodo e sicuro.' }, service3: { title: 'Trasferimenti tra destinazioni', desc: 'Trasporto privato tra diversi punti dell\'isola. Goditi il comfort di un servizio porta a porta.' }, service4: { title: 'Servizio VIP', desc: 'Veicoli di lusso e servizio premium per occasioni speciali. Massimo comfort ed eleganza.' }, service5: { title: 'Trasporto di gruppo', desc: 'Veicoli spaziosi per grandi gruppi. Furgoni e minivan disponibili per il tuo comfort.' }, service6: { title: 'Servizio notturno', desc: 'Disponibile 24 ore su 24, tutti i giorni dell\'anno, compresi i giorni festivi. Sempre qui quando ci serviamo.' }},
        footer: { terms: 'Termini e condizioni' }
    },
    pt: {
        nav: { inicio: 'Início', servicios: 'Serviços', precios: 'Preços', reservar: 'Reservar', soporte: 'Suporte' },
        btn: { reservar: 'Reservar', bookNow: 'Reservar agora' },
        hero: { title: 'Transfer privado seguro e pontual de/para o aeroporto', subtitle: 'Transporte de qualidade e confiável em Maiorca' },
        howItWorks: { title: 'COMO FUNCIONA', step1: 'Escolha data e hora', step2: 'Selecione rota', step3: 'Reserve e aproveite' },
        testimonials: { title: 'NOSSOS CLIENTES' },
        prices: { title: 'PREÇOS', intro: 'Preços de transferências privadas em Maiorca', table: { route: 'Rota', standard: 'Standard', nocturno: 'Noturno', oneway: 'Ida', return: 'Ida e volta' }},
        whyBookUs: { title: 'Por que reservar conosco', item1: 'Motoristas profissionais', item2: 'Avaliações excelentes', item3: 'Serviço porta a porta', item4: 'Experimente uma viagem acolhedora e relaxante' },
        whyBookKristian: { title: 'Por que reservar com KristianTransfers', feature1: { title: 'Pontual', desc: 'Garantimos que você sempre chegue no horário' }, feature2: { title: 'Privacidade', desc: 'Desfrute de sua privacidade' }, feature3: { title: 'Rapidez', desc: 'Chegue ao seu destino rapidamente' }, feature4: { title: 'Reserva fácil', desc: 'Reserve em apenas 2 minutos' }, feature5: { title: 'Suporte 24/7', desc: 'Atendimento ao cliente disponível 24 horas' }},
        soporte: { title: 'Suporte' },
        serviceAreas: { title: 'ÁREAS DE SERVIÇO', description: 'Oferecemos transferências privadas de/para o aeroporto de Palma de Maiorca e outros destinos populares na ilha.' },
        services: { title: 'NOSSOS SERVIÇOS', service1: { title: 'Transferências para o Aeroporto', desc: 'Serviço pontual e confiável de qualquer ponto de Maiorca para o aeroporto de Palma.' }, service2: { title: 'Transferências do Aeroporto', desc: 'Buscamos você no aeroporto e levamos você ao seu destino em Maiorca de forma confortável e segura.' }, service3: { title: 'Transferências entre Destinos', desc: 'Transporte privado entre diferentes pontos da ilha. Desfrute do conforto de um serviço porta a porta.' }, service4: { title: 'Serviço VIP', desc: 'Veículos de luxo e serviço premium para ocasiões especiais. Máximo conforto e elegância.' }, service5: { title: 'Transporte em Grupo', desc: 'Veículos espaçosos para grandes grupos. Furgões e minivans disponíveis para seu conforto.' }, service6: { title: 'Serviço Noturno', desc: 'Disponível 24 horas por dia, todos os dias do ano, incluindo feriados. Sempre aqui quando você precisar de nós.' }},
        footer: { terms: 'Termos e condições' }
    },
    ru: {
        nav: { inicio: 'Главная', servicios: 'Услуги', precios: 'Цены', reservar: 'Забронировать', soporte: 'Поддержка' },
        btn: { reservar: 'Забронировать', bookNow: 'Забронировать сейчас' },
        hero: { title: 'Безопасный и пунктуальный частный трансфер в/из аэропорта', subtitle: 'Качественный и надежный транспорт на Майорке' },
        howItWorks: { title: 'КАК ЭТО РАБОТАЕТ', step1: 'Выберите дату и время', step2: 'Выберите маршрут', step3: 'Забронируйте и наслаждайтесь' },
        testimonials: { title: 'НАШИ КЛИЕНТЫ' },
        prices: { title: 'ЦЕНЫ', intro: 'Цены на частные трансферы на Майорке', table: { route: 'Маршрут', standard: 'Стандарт', nocturno: 'Ночной', oneway: 'В одну сторону', return: 'Туда и обратно' }},
        whyBookUs: { title: 'Почему бронировать у нас', item1: 'Профессиональные водители', item2: 'Отличные отзывы', item3: 'Доставка от двери до двери', item4: 'Окунитесь в приветливое и расслабляющее путешествие' },
        whyBookKristian: { title: 'Почему бронировать с KristianTransfers', feature1: { title: 'Вовремя', desc: 'Мы гарантируем, что вы всегда прибудете вовремя' }, feature2: { title: 'Конфиденциальность', desc: 'Наслаждайтесь своей конфиденциальностью' }, feature3: { title: 'Скорость', desc: 'Быстро добраться до места назначения' }, feature4: { title: 'Легкое бронирование', desc: 'Забронируйте всего за 2 минуты' }, feature5: { title: 'Поддержка 24/7', desc: 'Служба поддержки клиентов доступна 24 часа' }},
        soporte: { title: 'Поддержка' },
        serviceAreas: { title: 'ОБЛАСТИ ОБСЛУЖИВАНИЯ', description: 'Мы предлагаем частные трансферы из/в аэропорт Пальма-де-Майорка и другие популярные направления на острове.' },
        services: { title: 'НАШИ УСЛУГИ', service1: { title: 'Трансферы в аэропорт', desc: 'Пунктуальный и надежный сервис из любой точки Майорки в аэропорт Пальмы.' }, service2: { title: 'Трансферы из аэропорта', desc: 'Мы заберем вас в аэропорту и доставим к месту назначения на Майорке комфортно и безопасно.' }, service3: { title: 'Трансферы между пунктами назначения', desc: 'Частный транспорт между разными точками острова. Наслаждайтесь комфортом услуги от двери до двери.' }, service4: { title: 'VIP-сервис', desc: 'Роскошные автомобили и премиальный сервис для особых случаев. Максимальный комфорт и элегантность.' }, service5: { title: 'Групповой транспорт', desc: 'Просторные автомобили для больших групп. Фургоны и минивэны доступны для вашего комфорта.' }, service6: { title: 'Ночной сервис', desc: 'Доступен 24 часа в сутки, каждый день года, включая праздники. Всегда здесь, когда вы нуждаетесь в нас.' }},
        footer: { terms: 'Условия и положения' }
    }
};

// Selector de idioma (función global)
window.changeLanguage = function(lang) {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const currentLangSpan = document.getElementById('currentLang');
    const currentFlag = document.getElementById('currentFlag');
    
    // Cerrar dropdown
    if (langDropdown) langDropdown.classList.remove('active');
    
    // Actualizar código de idioma y bandera
    const langData = {
        'es': { code: 'ES', flag: 'https://flagcdn.com/w20/es.png' },
        'en': { code: 'EN', flag: 'https://flagcdn.com/w20/gb.png' },
        'de': { code: 'DE', flag: 'https://flagcdn.com/w20/de.png' },
        'fr': { code: 'FR', flag: 'https://flagcdn.com/w20/fr.png' },
        'it': { code: 'IT', flag: 'https://flagcdn.com/w20/it.png' },
        'pt': { code: 'PT', flag: 'https://flagcdn.com/w20/pt.png' },
        'ru': { code: 'RU', flag: 'https://flagcdn.com/w20/ru.png' }
    };
    
    const selected = langData[lang] || langData['es'];
    
    if (currentLangSpan) {
        currentLangSpan.textContent = selected.code;
    }
    
    if (currentFlag) {
        currentFlag.src = selected.flag;
        currentFlag.alt = selected.code;
    }
    
    // Guardar preferencia
    localStorage.setItem('selectedLanguage', lang);
    
    // Traducir contenido
    const t = translations[lang] || translations['es'];
    
    // Traducir elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(el => {
        const keys = el.getAttribute('data-translate').split('.');
        let value = t;
        for (const key of keys) {
            value = value[key];
        }
        if (value) {
            el.textContent = value;
        }
    });
    
    // Actualizar atributos lang del HTML
    document.documentElement.lang = lang;
};

// Inicializar selector de idioma
function initializeLanguageSelector() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });
        
        // Cerrar al hacer click fuera
        document.addEventListener('click', function(e) {
            if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.remove('active');
            }
        });
        
        langDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        
        // Cargar idioma guardado o usar español por defecto
        const savedLang = localStorage.getItem('selectedLanguage') || 'es';
        changeLanguage(savedLang);
    } else {
        // Si los elementos no están disponibles todavía, intentar de nuevo después de un breve delay
        setTimeout(initializeLanguageSelector, 100);
    }
}

// Verificación de código por email (simulada - en producción usarías un servicio real)
let emailVerificationCodes = {};

// Crear cuenta de prueba inicial
function initializeTestAccount() {
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
    // Verificar si la cuenta de Siyana ya existe
    const siyanaExists = users.some(u => u.username === 'Siyana' || u.name === 'Siyana');
    
    if (!siyanaExists) {
        const testUser = {
            id: 'siyana-' + Date.now().toString(),
            name: 'Siyana',
            username: 'Siyana',
            email: 'siyana@kristiantransfers.com',
            phone: '',
            password: 'holasoysiyana',
            verified: true,
            createdAt: new Date().toISOString()
        };
        
        users.push(testUser);
        localStorage.setItem('registeredUsers', JSON.stringify(users));
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Crear cuenta de prueba
    initializeTestAccount();
    
    // Inicializar selector de idioma PRIMERO para que esté disponible
    initializeLanguageSelector();
    
    // Actualizar header según estado de login
    updateUserHeader();
    
    // Mostrar página inicial (esto aplicará el idioma guardado)
    showPage('inicio');
    
    // Inicializar componentes
    initializeDestinations();
    initializeTimeSelectors();
    initializeDateInputs();
    initializeFormHandlers();
    initializeCarousel();
    
    // Inicializar banner de cookies
    initializeCookieBanner();
});

// Inicializar animaciones para elementos al entrar en viewport
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos individuales para animación
    document.querySelectorAll('.step, .service-card, .why-book-item, .why-book-feature').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Llamar animaciones cuando se cambia de página
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeAnimations, 500);
});

// Cargar destinos en los selects y datalists
function initializeDestinations() {
    const originSelect = document.getElementById('origin');
    const destinationSelect = document.getElementById('destination');
    const originSearch = document.getElementById('originSearch');
    const destinationSearch = document.getElementById('destinationSearch');
    const originList = document.getElementById('originList');
    const destinationList = document.getElementById('destinationList');
    
    // Crear opciones para ambos selects y datalists
    destinations.forEach(dest => {
        // Opciones para selects (ocultos)
        const option1 = new Option(dest, dest);
        const option2 = new Option(dest, dest);
        originSelect.appendChild(option1);
        destinationSelect.appendChild(option2);
        
        // Opciones para datalists (para autocompletado)
        const optionDatalist1 = document.createElement('option');
        optionDatalist1.value = dest;
        originList.appendChild(optionDatalist1);
        
        const optionDatalist2 = document.createElement('option');
        optionDatalist2.value = dest;
        destinationList.appendChild(optionDatalist2);
    });
    
    // Sincronizar búsqueda de origen con select
    if (originSearch && originSelect) {
        originSearch.addEventListener('input', function() {
            const value = this.value;
            // Buscar coincidencia exacta
            const matchingOption = Array.from(originSelect.options).find(opt => 
                opt.value.toLowerCase() === value.toLowerCase()
            );
            if (matchingOption) {
                originSelect.value = matchingOption.value;
            }
        });
        
        originSearch.addEventListener('change', function() {
            if (this.value && originSelect.value !== this.value) {
                originSelect.value = this.value;
            }
        });
    }
    
    // Sincronizar búsqueda de destino con select
    if (destinationSearch && destinationSelect) {
        destinationSearch.addEventListener('input', function() {
            const value = this.value;
            // Buscar coincidencia exacta
            const matchingOption = Array.from(destinationSelect.options).find(opt => 
                opt.value.toLowerCase() === value.toLowerCase()
            );
            if (matchingOption) {
                destinationSelect.value = matchingOption.value;
            }
        });
        
        destinationSearch.addEventListener('change', function() {
            if (this.value && destinationSelect.value !== this.value) {
                destinationSelect.value = this.value;
            }
        });
    }
    
    // Sincronizar selects con inputs de búsqueda (para el botón de intercambio)
    if (originSelect && originSearch) {
        originSelect.addEventListener('change', function() {
            originSearch.value = this.value;
        });
    }
    
    if (destinationSelect && destinationSearch) {
        destinationSelect.addEventListener('change', function() {
            destinationSearch.value = this.value;
        });
    }
}

// Inicializar selectores de hora
function initializeTimeSelectors() {
    const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
    const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));
    
    const hourSelects = ['pickupHour', 'returnHour'];
    const minuteSelects = ['pickupMinute', 'returnMinute'];
    
    hourSelects.forEach(id => {
        const select = document.getElementById(id);
        if (select) {
            // Limpiar opciones existentes excepto la primera (placeholder)
            while (select.options.length > 1) {
                select.remove(1);
            }
            // Agregar opciones de hora
            hours.forEach(hour => {
                const option = new Option(hour, hour);
                select.appendChild(option);
            });
        }
    });
    
    minuteSelects.forEach(id => {
        const select = document.getElementById(id);
        if (select) {
            // Limpiar opciones existentes excepto la primera (placeholder)
            while (select.options.length > 1) {
                select.remove(1);
            }
            // Agregar opciones de minutos
            minutes.forEach(minute => {
                const option = new Option(minute, minute);
                select.appendChild(option);
            });
        }
    });
}

// Inicializar inputs de fecha (mínimo: hoy)
function initializeDateInputs() {
    const today = new Date().toISOString().split('T')[0];
    const pickupDate = document.getElementById('pickupDate');
    const returnDate = document.getElementById('returnDate');
    
    if (pickupDate) {
        pickupDate.min = today;
        pickupDate.addEventListener('change', function() {
            if (returnDate) {
                returnDate.min = this.value || today;
            }
        });
    }
    
    if (returnDate) {
        returnDate.min = today;
    }
}

// Manejar tipo de viaje (One-Way/Return)
function initializeFormHandlers() {
    const tripTypeRadios = document.querySelectorAll('input[name="tripType"]');
    const returnSection = document.getElementById('returnSection');
    const returnTimeSection = document.getElementById('returnTimeSection');
    
    tripTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'return') {
                returnSection.style.display = 'flex';
                returnTimeSection.style.display = 'grid';
                document.getElementById('returnDate').required = true;
                document.getElementById('returnHour').required = true;
                document.getElementById('returnMinute').required = true;
            } else {
                returnSection.style.display = 'none';
                returnTimeSection.style.display = 'none';
                document.getElementById('returnDate').required = false;
                document.getElementById('returnHour').required = false;
                document.getElementById('returnMinute').required = false;
            }
        });
    });
    
    // Intercambiar destinos
    const swapBtn = document.getElementById('swapDestinations');
    if (swapBtn) {
        swapBtn.addEventListener('click', function() {
            const origin = document.getElementById('origin');
            const destination = document.getElementById('destination');
            const originSearch = document.getElementById('originSearch');
            const destinationSearch = document.getElementById('destinationSearch');
            
            const originValue = origin.value || originSearch.value;
            const destinationValue = destination.value || destinationSearch.value;
            
            origin.value = destinationValue;
            destination.value = originValue;
            originSearch.value = destinationValue;
            destinationSearch.value = originValue;
        });
    }
    
    // Manejar envío del formulario
    const form = document.getElementById('bookingForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this);
        });
    }
}

// Manejar scroll de botones "Reservar ahora"
function initializeScrollButtons() {
    // Los botones ya tienen onclick="scrollToSection('reservar')" en el HTML
    // Esta función se mantiene por compatibilidad pero ya no es necesaria
}

// Manejar envío del formulario
function handleFormSubmit(form) {
    const formData = new FormData(form);
    const data = {};
    
    // Obtener valores de los campos de búsqueda si los selects están vacíos
    const originSearch = document.getElementById('originSearch');
    const destinationSearch = document.getElementById('destinationSearch');
    const originSelect = document.getElementById('origin');
    const destinationSelect = document.getElementById('destination');
    
    // Sincronizar valores de búsqueda con selects antes de enviar
    if (originSearch && originSearch.value && !originSelect.value) {
        originSelect.value = originSearch.value;
        formData.set('origin', originSearch.value);
    }
    
    if (destinationSearch && destinationSearch.value && !destinationSelect.value) {
        destinationSelect.value = destinationSearch.value;
        formData.set('destination', destinationSearch.value);
    }
    
    formData.forEach((value, key) => {
        if (key === 'phone' && formData.get('phoneCode')) {
            data['phone'] = formData.get('phoneCode') + ' ' + value;
        } else if (key !== 'phoneCode') {
            data[key] = value;
        }
    });
    
    // Validación adicional
    if (!data.origin || !data.destination) {
        alert('Por favor, selecciona origen y destino válidos.');
        return;
    }
    
    if (data.origin === data.destination) {
        alert('El origen y destino no pueden ser iguales.');
        return;
    }
    
    // Mostrar modal de confirmación de términos
    showTermsModal(data, form);
}

// Mostrar modal de términos y condiciones
function showTermsModal(data, form) {
    const modal = document.createElement('div');
    modal.className = 'terms-modal';
    modal.innerHTML = `
        <div class="terms-modal-content">
            <h3>Aceptas nuestros términos y condiciones</h3>
            <p>Para continuar, debes aceptar nuestros términos y condiciones.</p>
            <div class="terms-modal-buttons">
                <button class="btn btn-primary" onclick="acceptTerms()">Confirmar</button>
                <button class="btn btn-secondary" onclick="closeTermsModal()">Cancelar</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    window.currentFormData = data;
    window.currentForm = form;
}

function acceptTerms() {
    closeTermsModal();
    const data = window.currentFormData;
    const form = window.currentForm;
    
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    console.log('Formulario enviado:', data);
    
    // Mostrar mensaje de confirmación
    alert('¡Gracias por tu reserva! Te contactaremos pronto para confirmar los detalles.');
    
    // Limpiar el formulario
    if (form) form.reset();
}

function closeTermsModal() {
    const modal = document.querySelector('.terms-modal');
    if (modal) {
        modal.remove();
    }
}

// Las funciones de scroll ya no son necesarias ya que ahora usamos páginas separadas

// Cookie Banner Functionality
function initializeCookieBanner() {
    // Actualizar ID de consentimiento si existe
    updateConsentIdDisplay();
    
    // Verificar si ya hay consentimiento guardado
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
        // NO aplicar blur al body - modo no bloqueante
        // Mostrar banner después de un breve delay sin bloquear la página
        setTimeout(() => {
            const banner = document.getElementById('cookieBanner');
            if (banner) {
                banner.style.display = 'flex';
                setTimeout(() => {
                    banner.classList.add('show');
                }, 10);
            }
        }, 500);
    }
    
    // Inicializar pestañas
    const tabs = document.querySelectorAll('.cookie-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });
}

function switchTab(tabName) {
    // Remover active de todas las pestañas y paneles
    document.querySelectorAll('.cookie-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Activar la pestaña y panel seleccionados
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    const activePanel = document.getElementById(`tab-${tabName}`);
    
    if (activeTab) activeTab.classList.add('active');
    if (activePanel) activePanel.classList.add('active');
}

function generateConsentId() {
    return 'consent-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

function saveCookieConsent(necessary, preferences, statistics, marketing) {
    const consentId = generateConsentId();
    const consentData = {
        id: consentId,
        necessary: necessary !== undefined ? necessary : true, // Siempre true
        preferences: preferences !== undefined ? preferences : false,
        statistics: statistics !== undefined ? statistics : false,
        marketing: marketing !== undefined ? marketing : false,
        date: new Date().toISOString()
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    
    // Actualizar ID de consentimiento en la pestaña "Acerca de"
    updateConsentIdDisplay();
    
    return consentId;
}

window.handleCookieAccept = function() {
    const consentId = saveCookieConsent(true, true, true, true);
    hideCookieBanner();
    console.log('Cookies aceptadas. ID:', consentId);
    // Aquí puedes añadir lógica para cargar scripts de analytics, marketing, etc.
};

window.handleCookieDeny = function() {
    // Aunque deneguen, deben aceptar para continuar - guardamos el consentimiento pero requerimos aceptación
    alert('Debes aceptar las cookies para continuar navegando en el sitio.');
    return false;
};

window.handleCookieCustomize = function() {
    // Para personalizar, deben aceptar al menos las cookies necesarias
    const preferences = document.getElementById('preferences').checked;
    const statistics = document.getElementById('statistics').checked;
    const marketing = document.getElementById('marketing').checked;
    
    // Al menos las necesarias deben estar aceptadas (siempre true)
    const consentId = saveCookieConsent(true, preferences, statistics, marketing);
    hideCookieBanner();
    console.log('Cookies personalizadas. ID:', consentId, { preferences, statistics, marketing });
    // Aquí puedes añadir lógica condicional para cargar scripts según las preferencias
};

function hideCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.classList.remove('show');
        // Remover blur del body
        document.body.classList.remove('cookie-blur');
        setTimeout(() => {
            banner.style.display = 'none';
        }, 300);
    }
}

// Función para actualizar el ID de consentimiento en la UI
function updateConsentIdDisplay() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
        try {
            const consentData = JSON.parse(cookieConsent);
            const consentIdElement = document.getElementById('consentId');
            if (consentIdElement) {
                consentIdElement.textContent = consentData.id || 'No disponible';
            }
        } catch (e) {
            console.error('Error parsing cookie consent:', e);
        }
    }
}

// FAQ Functions
function showFAQs() {
    const faqsSection = document.getElementById('faqsSection');
    if (faqsSection) {
        faqsSection.style.display = 'block';
        faqsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked FAQ if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Booking Wizard Functions
let selectedDirection = ''; // 'aeropuerto-destino' or 'destino-aeropuerto'
let selectedTripType = '';
let bookingData = {
    direction: '',
    tripType: '',
    origin: '',
    destination: '',
    returnOrigin: '',
    returnDestination: '',
    adults: 0,
    children: 0,
    babies: 0,
    luggage: 0,
    babySeat: 0,
    maxiCosi: 0,
    bicycles: 0,
    golf: 0
};

function selectService(service) {
    // Update button styles
    const clickedBtn = window.event ? window.event.target : event.target;
    document.querySelectorAll('#step-service .step-option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    if (clickedBtn) {
        clickedBtn.classList.add('selected');
    }
    
    if (service === 'direccion') {
        // Show direction selection step
        setTimeout(() => {
            nextStepById('step0');
        }, 300);
    } else if (service === 'traslado') {
        // Do nothing for now
        // This is where Traslado functionality will be added later
    }
}

function selectDirection(direction) {
    selectedDirection = direction;
    bookingData.direction = direction;
    
    // Update button styles
    document.querySelectorAll('#step0 .step-option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
    
    // Show next step (trip type)
    setTimeout(() => {
        nextStep(1);
    }, 300);
}

function selectTripType(type) {
    selectedTripType = type;
    bookingData.tripType = type;
    
    // Update button styles
    document.querySelectorAll('#step1 .step-option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
    
    // Show next step (destinations)
    setTimeout(() => {
        nextStep(2);
    }, 300);
}

function nextStepById(stepId) {
    // Hide all steps
    document.querySelectorAll('.booking-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Show target step
    const targetStep = document.getElementById(stepId);
    if (targetStep) {
        targetStep.classList.add('active');
    }
}

function nextStep(stepNum) {
    // Hide all steps
    document.querySelectorAll('.booking-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Show target step
    const targetStep = document.getElementById(`step${stepNum}`);
    if (targetStep) {
        targetStep.classList.add('active');
        
        // Special handling for step 2 (destinations)
        if (stepNum === 2) {
            loadDestinationsStep();
        } else if (stepNum === 3) {
            validatePassengers();
        } else if (stepNum === 4) {
            validateExtras();
        }
    }
}

function loadDestinationsStep() {
    const destinationsContent = document.getElementById('destinationsContent');
    if (!destinationsContent) return;
    
    // Determine origin and destination based on selected direction
    const isAirportToDestination = selectedDirection === 'aeropuerto-destino';
    const originLabel = isAirportToDestination ? 'Desde (Aeropuerto)' : 'Desde';
    const destinationLabel = isAirportToDestination ? 'Hasta' : 'Hasta (Aeropuerto)';
    const originPlaceholder = isAirportToDestination ? 'AEROPUERTO' : 'Buscar origen...';
    const destinationPlaceholder = isAirportToDestination ? 'Buscar destino...' : 'AEROPUERTO';
    
    if (selectedTripType === 'ida') {
        destinationsContent.innerHTML = `
            <div class="destination-group">
                <label>${originLabel}</label>
                <div class="select-search-wrapper">
                    <input type="text" id="originSearch" placeholder="${originPlaceholder}" class="search-input" autocomplete="off" list="originList" ${isAirportToDestination ? 'value="AEROPUERTO" readonly' : ''}>
                    <datalist id="originList"></datalist>
                    <select id="origin" name="origin" required style="display: none;">
                        <option value="">Selecciona origen...</option>
                        ${isAirportToDestination ? '<option value="AEROPUERTO" selected>AEROPUERTO</option>' : ''}
                    </select>
                </div>
            </div>
            <div class="destination-group">
                <label>${destinationLabel}</label>
                <div class="select-search-wrapper">
                    <input type="text" id="destinationSearch" placeholder="${destinationPlaceholder}" class="search-input" autocomplete="off" list="destinationList" ${!isAirportToDestination ? 'value="AEROPUERTO" readonly' : ''}>
                    <datalist id="destinationList"></datalist>
                    <select id="destination" name="destination" required style="display: none;">
                        <option value="">Selecciona destino...</option>
                        ${!isAirportToDestination ? '<option value="AEROPUERTO" selected>AEROPUERTO</option>' : ''}
                    </select>
                </div>
            </div>
        `;
    } else if (selectedTripType === 'ida-vuelta') {
        const returnOriginLabel = isAirportToDestination ? 'Desde (final)' : 'Desde (final - Aeropuerto)';
        const returnDestinationLabel = isAirportToDestination ? 'Hasta (final - Aeropuerto)' : 'Hasta (final)';
        const returnOriginPlaceholder = isAirportToDestination ? 'Buscar origen...' : 'AEROPUERTO';
        const returnDestinationPlaceholder = isAirportToDestination ? 'AEROPUERTO' : 'Buscar destino...';
        
        destinationsContent.innerHTML = `
            <div class="destination-group">
                <label>${originLabel} (inicial)</label>
                <div class="select-search-wrapper">
                    <input type="text" id="originSearch" placeholder="${originPlaceholder}" class="search-input" autocomplete="off" list="originList" ${isAirportToDestination ? 'value="AEROPUERTO" readonly' : ''}>
                    <datalist id="originList"></datalist>
                    <select id="origin" name="origin" required style="display: none;">
                        <option value="">Selecciona origen...</option>
                        ${isAirportToDestination ? '<option value="AEROPUERTO" selected>AEROPUERTO</option>' : ''}
                    </select>
                </div>
            </div>
            <div class="destination-group">
                <label>${destinationLabel} (inicial)</label>
                <div class="select-search-wrapper">
                    <input type="text" id="destinationSearch" placeholder="${destinationPlaceholder}" class="search-input" autocomplete="off" list="destinationList" ${!isAirportToDestination ? 'value="AEROPUERTO" readonly' : ''}>
                    <datalist id="destinationList"></datalist>
                    <select id="destination" name="destination" required style="display: none;">
                        <option value="">Selecciona destino...</option>
                        ${!isAirportToDestination ? '<option value="AEROPUERTO" selected>AEROPUERTO</option>' : ''}
                    </select>
                </div>
            </div>
            <div class="destination-group">
                <label>${returnOriginLabel}</label>
                <div class="select-search-wrapper">
                    <input type="text" id="returnOriginSearch" placeholder="${returnOriginPlaceholder}" class="search-input" autocomplete="off" list="returnOriginList" ${!isAirportToDestination ? 'value="AEROPUERTO" readonly' : ''}>
                    <datalist id="returnOriginList"></datalist>
                    <select id="returnOrigin" name="returnOrigin" required style="display: none;">
                        <option value="">Selecciona origen...</option>
                        ${!isAirportToDestination ? '<option value="AEROPUERTO" selected>AEROPUERTO</option>' : ''}
                    </select>
                </div>
            </div>
            <div class="destination-group">
                <label>${returnDestinationLabel}</label>
                <div class="select-search-wrapper">
                    <input type="text" id="returnDestinationSearch" placeholder="${returnDestinationPlaceholder}" class="search-input" autocomplete="off" list="returnDestinationList" ${isAirportToDestination ? 'value="AEROPUERTO" readonly' : ''}>
                    <datalist id="returnDestinationList"></datalist>
                    <select id="returnDestination" name="returnDestination" required style="display: none;">
                        <option value="">Selecciona destino...</option>
                        ${isAirportToDestination ? '<option value="AEROPUERTO" selected>AEROPUERTO</option>' : ''}
                    </select>
                </div>
            </div>
        `;
    }
    
    // Initialize destination selects based on direction
    initializeDestinationSelects();
    
    // Set airport values if needed
    if (isAirportToDestination) {
        const originSelect = document.getElementById('origin');
        if (originSelect) {
            originSelect.value = 'AEROPUERTO';
        }
        if (selectedTripType === 'ida-vuelta') {
            const returnDestinationSelect = document.getElementById('returnDestination');
            if (returnDestinationSelect) {
                returnDestinationSelect.value = 'AEROPUERTO';
            }
        }
    } else {
        const destinationSelect = document.getElementById('destination');
        if (destinationSelect) {
            destinationSelect.value = 'AEROPUERTO';
        }
        if (selectedTripType === 'ida-vuelta') {
            const returnOriginSelect = document.getElementById('returnOrigin');
            if (returnOriginSelect) {
                returnOriginSelect.value = 'AEROPUERTO';
            }
        }
    }
    
    // Add change listeners
    const nextBtn = document.getElementById('nextFromDestinations');
    if (nextBtn) {
        const selects = destinationsContent.querySelectorAll('select');
        selects.forEach(select => {
            select.addEventListener('change', () => {
                checkDestinationsComplete(selects, nextBtn);
            });
        });
        
        // Also listen to search inputs
        const inputs = destinationsContent.querySelectorAll('.search-input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                // Sync search input with select
                const selectId = input.id.replace('Search', '');
                const select = document.getElementById(selectId);
                if (select) {
                    const value = input.value.toUpperCase();
                    const matchingDest = destinations.find(d => d === value);
                    if (matchingDest) {
                        select.value = matchingDest;
                    }
                }
                checkDestinationsComplete(selects, nextBtn);
            });
            input.addEventListener('change', () => {
                checkDestinationsComplete(selects, nextBtn);
            });
        });
        
        // Save destinations when clicking "Siguiente"
        nextBtn.addEventListener('click', function(e) {
            // Ensure values are saved before proceeding
            checkDestinationsComplete(selects, nextBtn);
        });
    }
}

function checkDestinationsComplete(selects, nextBtn) {
    let allSelected = true;
    selects.forEach(select => {
        const selectValue = select.value;
        const selectId = select.id;
        const searchInput = document.getElementById(selectId + 'Search');
        const searchValue = searchInput ? searchInput.value.toUpperCase() : '';
        
        // Check if either select or search input has a value
        if (selectValue === '' && searchValue === '') {
            allSelected = false;
        } else if (selectValue === '' && searchValue !== '') {
            // If select is empty but search has value, try to match and set select
            const matchingDest = destinations.find(d => d === searchValue);
            if (matchingDest) {
                select.value = matchingDest;
            }
        }
    });
    
    // Save destination values to bookingData (prefer select value, fallback to search input)
    const originSelect = document.getElementById('origin');
    const destinationSelect = document.getElementById('destination');
    const originSearch = document.getElementById('originSearch');
    const destinationSearch = document.getElementById('destinationSearch');
    
    if (originSelect || originSearch) {
        const originValue = originSelect && originSelect.value ? originSelect.value : (originSearch && originSearch.value ? originSearch.value.toUpperCase() : '');
        bookingData.origin = originValue;
    }
    if (destinationSelect || destinationSearch) {
        const destinationValue = destinationSelect && destinationSelect.value ? destinationSelect.value : (destinationSearch && destinationSearch.value ? destinationSearch.value.toUpperCase() : '');
        bookingData.destination = destinationValue;
    }
    
    // For return trips, also save return destinations
    if (selectedTripType === 'ida-vuelta') {
        const returnOriginSelect = document.getElementById('returnOrigin');
        const returnDestinationSelect = document.getElementById('returnDestination');
        const returnOriginSearch = document.getElementById('returnOriginSearch');
        const returnDestinationSearch = document.getElementById('returnDestinationSearch');
        
        if (returnOriginSelect || returnOriginSearch) {
            const returnOriginValue = returnOriginSelect && returnOriginSelect.value ? returnOriginSelect.value : (returnOriginSearch && returnOriginSearch.value ? returnOriginSearch.value.toUpperCase() : '');
            bookingData.returnOrigin = returnOriginValue;
        }
        if (returnDestinationSelect || returnDestinationSearch) {
            const returnDestinationValue = returnDestinationSelect && returnDestinationSelect.value ? returnDestinationSelect.value : (returnDestinationSearch && returnDestinationSearch.value ? returnDestinationSearch.value.toUpperCase() : '');
            bookingData.returnDestination = returnDestinationValue;
        }
    }
    
    if (allSelected && nextBtn) {
        nextBtn.style.display = 'inline-block';
    } else if (nextBtn) {
        nextBtn.style.display = 'none';
    }
}

function validatePassengers() {
    const total = bookingData.adults + bookingData.children + bookingData.babies;
    const nextBtn = document.getElementById('nextFromPassengers');
    if (nextBtn) {
        if (total > 0) {
            nextBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'none';
        }
    }
}

function validateExtras() {
    // Extras are optional, so always show next button
    const nextBtn = document.getElementById('nextFromExtras');
    if (nextBtn) {
        nextBtn.style.display = 'inline-block';
    }
}

function changeCounter(type, change) {
    const currentValue = bookingData[type] || 0;
    const newValue = Math.max(0, currentValue + change);
    bookingData[type] = newValue;
    
    const countElement = document.getElementById(`${type}Count`);
    if (countElement) {
        countElement.textContent = newValue;
    }
    
    // Validate passengers if in step 3
    const step3 = document.getElementById('step3');
    if (step3 && step3.classList.contains('active')) {
        validatePassengers();
    }
}

function showBookingForm() {
    // Hide wizard
    const wizard = document.getElementById('bookingWizard');
    if (wizard) {
        wizard.style.display = 'none';
    }
    
    // Show booking form
    const formSection = document.getElementById('bookingFormSection');
    if (formSection) {
        formSection.style.display = 'block';
        
        // Update summary box with booking data
        updateBookingSummary();
    }
}

function updateBookingSummary() {
    // Update trip type
    const tripTypeDisplay = document.getElementById('summaryTripType');
    if (tripTypeDisplay) {
        if (bookingData.tripType === 'ida') {
            tripTypeDisplay.textContent = 'Ida';
            document.getElementById('formTripType').value = 'one-way';
        } else if (bookingData.tripType === 'ida-vuelta') {
            tripTypeDisplay.textContent = 'Ida y vuelta';
            document.getElementById('formTripType').value = 'return';
        } else {
            tripTypeDisplay.textContent = '-';
        }
    }
    
    // Update destinations
    const origin = bookingData.origin || '';
    const destination = bookingData.destination || '';
    
    // Show/hide destination displays based on trip type
    const summaryOneWay1 = document.getElementById('summaryDestinationsOneWay');
    const summaryOneWay2 = document.getElementById('summaryDestinationsOneWay2');
    const summaryReturn1 = document.getElementById('summaryDestinationsReturn');
    const summaryReturn2 = document.getElementById('summaryDestinationsReturn2');
    const summaryReturn3 = document.getElementById('summaryDestinationsReturn3');
    const summaryReturn4 = document.getElementById('summaryDestinationsReturn4');
    
    if (bookingData.tripType === 'ida') {
        // Show one-way
        if (summaryOneWay1) summaryOneWay1.style.display = 'flex';
        if (summaryOneWay2) summaryOneWay2.style.display = 'flex';
        if (summaryReturn1) summaryReturn1.style.display = 'none';
        if (summaryReturn2) summaryReturn2.style.display = 'none';
        if (summaryReturn3) summaryReturn3.style.display = 'none';
        if (summaryReturn4) summaryReturn4.style.display = 'none';
        
        const summaryOrigin = document.getElementById('summaryOrigin');
        const summaryDestination = document.getElementById('summaryDestination');
        if (summaryOrigin) summaryOrigin.textContent = origin || '-';
        if (summaryDestination) summaryDestination.textContent = destination || '-';
    } else if (bookingData.tripType === 'ida-vuelta') {
        // Show return
        if (summaryOneWay1) summaryOneWay1.style.display = 'none';
        if (summaryOneWay2) summaryOneWay2.style.display = 'none';
        if (summaryReturn1) summaryReturn1.style.display = 'flex';
        if (summaryReturn2) summaryReturn2.style.display = 'flex';
        if (summaryReturn3) summaryReturn3.style.display = 'flex';
        if (summaryReturn4) summaryReturn4.style.display = 'flex';
        
        const summaryReturnOrigin = document.getElementById('summaryReturnOrigin');
        const summaryReturnDestination = document.getElementById('summaryReturnDestination');
        const summaryReturnBackOrigin = document.getElementById('summaryReturnBackOrigin');
        const summaryReturnBackDestination = document.getElementById('summaryReturnBackDestination');
        
        if (summaryReturnOrigin) summaryReturnOrigin.textContent = origin || '-';
        if (summaryReturnDestination) summaryReturnDestination.textContent = destination || '-';
        // For return, the back trip is the reverse
        if (summaryReturnBackOrigin) summaryReturnBackOrigin.textContent = destination || '-';
        if (summaryReturnBackDestination) summaryReturnBackDestination.textContent = origin || '-';
    }
    
    // Update hidden form fields
    document.getElementById('formOrigin').value = origin;
    document.getElementById('formDestination').value = destination;
    
    // Update passengers with detailed breakdown
    const adults = bookingData.adults || 0;
    const children = bookingData.children || 0;
    const babies = bookingData.babies || 0;
    const totalPassengers = adults + children + babies;
    
    const summaryPassengers = document.getElementById('summaryPassengers');
    if (summaryPassengers) {
        const adultsLine = summaryPassengers.querySelector('.detail-line:first-child');
        const childrenLine = summaryPassengers.querySelector('.detail-line:nth-child(2)');
        const babiesLine = summaryPassengers.querySelector('.detail-line:last-child');
        
        if (adultsLine) adultsLine.textContent = `-Adultos 12+ (${adults})`;
        if (childrenLine) childrenLine.textContent = `-Niños 2-12 (${children})`;
        if (babiesLine) babiesLine.textContent = `-Bebés <2 (${babies})`;
    }
    document.getElementById('formPassengers').value = totalPassengers >= 8 ? '8' : totalPassengers.toString();
    
    // Update extras with detailed breakdown
    const luggage = bookingData.luggage || 0;
    const babySeat = bookingData.babySeat || 0;
    const maxiCosi = bookingData.maxiCosi || 0;
    const bicycles = bookingData.bicycles || 0;
    const golf = bookingData.golf || 0;
    
    const extrasLineLuggage = document.getElementById('extrasLineLuggage');
    const extrasLineBabySeat = document.getElementById('extrasLineBabySeat');
    const extrasLineMaxiCosi = document.getElementById('extrasLineMaxiCosi');
    const extrasLineBicycles = document.getElementById('extrasLineBicycles');
    const extrasLineGolf = document.getElementById('extrasLineGolf');
    
    // Only show extras with count > 0
    if (extrasLineLuggage) {
        if (luggage > 0) {
            extrasLineLuggage.textContent = `-Maleta adicional (${luggage})`;
            extrasLineLuggage.style.display = 'block';
        } else {
            extrasLineLuggage.style.display = 'none';
        }
    }
    if (extrasLineBabySeat) {
        if (babySeat > 0) {
            extrasLineBabySeat.textContent = `-Silla Bebé 11-18kg (${babySeat})`;
            extrasLineBabySeat.style.display = 'block';
        } else {
            extrasLineBabySeat.style.display = 'none';
        }
    }
    if (extrasLineMaxiCosi) {
        if (maxiCosi > 0) {
            extrasLineMaxiCosi.textContent = `-Maxi Cosi <10 kg (${maxiCosi})`;
            extrasLineMaxiCosi.style.display = 'block';
        } else {
            extrasLineMaxiCosi.style.display = 'none';
        }
    }
    if (extrasLineBicycles) {
        if (bicycles > 0) {
            extrasLineBicycles.textContent = `-Bicicletas Adicionales (${bicycles})`;
            extrasLineBicycles.style.display = 'block';
        } else {
            extrasLineBicycles.style.display = 'none';
        }
    }
    if (extrasLineGolf) {
        if (golf > 0) {
            extrasLineGolf.textContent = `-Bolsas de golf (${golf})`;
            extrasLineGolf.style.display = 'block';
        } else {
            extrasLineGolf.style.display = 'none';
        }
    }
    
    document.getElementById('formLuggage').value = luggage.toString();
}

// Resetear el estado de confirmación
function resetConfirmationState() {
    const btn = document.querySelector('.btn-confirm-check');
    const summaryBox = document.getElementById('confirmationBoxSummary');
    const secondSection = document.getElementById('bookingFormSecondSection');
    
    if (btn) {
        btn.classList.remove('confirmed');
        btn.innerHTML = '<i class="fas fa-check"></i> Confirmar';
        btn.disabled = false;
    }
    
    if (summaryBox) {
        summaryBox.style.opacity = '1';
    }
    
    if (secondSection) {
        secondSection.style.display = 'none';
        secondSection.style.opacity = '0';
    }
}

function confirmBookingSummary() {
    const btn = event.target.closest('.btn-confirm-check');
    const summaryBox = document.getElementById('confirmationBoxSummary');
    const secondSection = document.getElementById('bookingFormSecondSection');
    
    if (!btn || !summaryBox) return;
    
    const isConfirmed = btn.classList.contains('confirmed');
    
    if (isConfirmed) {
        // Unconfirm - Hide second section and reset button
        btn.classList.remove('confirmed');
        btn.innerHTML = '<i class="fas fa-check"></i> Confirmar';
        btn.disabled = false;
        summaryBox.style.opacity = '1';
        
        if (secondSection) {
            secondSection.style.display = 'none';
            secondSection.style.opacity = '0';
        }
    } else {
        // Validate first section
        const tripType = document.getElementById('summaryTripType').textContent;
        const origin = document.getElementById('summaryOrigin').textContent;
        const destination = document.getElementById('summaryDestination').textContent;
        const returnOrigin = document.getElementById('summaryReturnOrigin').textContent;
        
        // Check if required fields are filled
        if (tripType === '-' || tripType === '') {
            alert('Por favor, completa el tipo de viaje.');
            return;
        }
        
        // Validate destinations based on trip type
        if (tripType.includes('Ida y vuelta')) {
            if (returnOrigin === '-' || returnOrigin === '') {
                alert('Por favor, completa todos los destinos del viaje de ida y vuelta.');
                return;
            }
        } else {
            if (origin === '-' || origin === '' || destination === '-' || destination === '') {
                alert('Por favor, completa los destinos del viaje.');
                return;
            }
        }
        
        // Confirm - Show second section with smooth transition
        btn.classList.add('confirmed');
        btn.innerHTML = '<i class="fas fa-check"></i> Confirmado';
        btn.disabled = true;
        summaryBox.style.opacity = '0.8';
        
        // Show second section with smooth transition
        if (secondSection) {
            secondSection.style.display = 'block';
            setTimeout(() => {
                secondSection.style.opacity = '0';
                secondSection.style.transition = 'opacity 0.5s ease-in-out';
                setTimeout(() => {
                    secondSection.style.opacity = '1';
                }, 10);
            }, 10);
            
            // Smooth scroll to pickup date field
            setTimeout(() => {
                const pickupDateField = document.getElementById('pickupDate');
                if (pickupDateField) {
                    pickupDateField.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }
            }, 600);
        }
    }
}

// Confirmation functions
function confirmSection(sectionType) {
    const box = document.getElementById(`confirmationBox${sectionType.charAt(0).toUpperCase() + sectionType.slice(1)}`);
    const btn = event.target;
    
    if (!box || !btn) return;
    
    // Toggle confirmed state
    const isConfirmed = box.classList.contains('confirmed');
    
    if (isConfirmed) {
        // Unconfirm
        box.classList.remove('confirmed');
        btn.classList.remove('confirmed');
        btn.textContent = 'Confirmación';
        
        // Enable all inputs in the box
        const inputs = box.querySelectorAll('input, select, textarea, button');
        inputs.forEach(input => {
            if (input !== btn) {
                input.disabled = false;
            }
        });
        
        // Special handling for destinations
        if (sectionType === 'destinations') {
            const formInputs = document.getElementById('destinationFormInputs');
            const displayOneWay = document.getElementById('destinationDisplayOneWay');
            const displayReturn = document.getElementById('destinationDisplayReturn');
            
            if (formInputs) formInputs.style.display = 'block';
            if (displayOneWay) displayOneWay.style.display = 'none';
            if (displayReturn) displayReturn.style.display = 'none';
        }
    } else {
        // Confirm
        box.classList.add('confirmed');
        btn.classList.add('confirmed');
        btn.textContent = 'Confirmado';
        
        // Disable all inputs in the box
        const inputs = box.querySelectorAll('input, select, textarea, button');
        inputs.forEach(input => {
            if (input !== btn && input.type !== 'submit') {
                input.disabled = true;
            }
        });
        
        // Special handling for destinations
        if (sectionType === 'destinations') {
            updateDestinationDisplay();
            const formInputs = document.getElementById('destinationFormInputs');
            const displayOneWay = document.getElementById('destinationDisplayOneWay');
            const displayReturn = document.getElementById('destinationDisplayReturn');
            
            if (formInputs) formInputs.style.display = 'none';
        }
    }
}

function updateDestinationDisplay() {
    // Check trip type
    const tripTypeInputs = document.querySelectorAll('input[name="tripType"]');
    let tripType = 'one-way';
    tripTypeInputs.forEach(input => {
        if (input.checked) {
            tripType = input.value;
        }
    });
    
    const originSearch = document.getElementById('originSearch');
    const destinationSearch = document.getElementById('destinationSearch');
    const originValue = originSearch ? originSearch.value : '';
    const destinationValue = destinationSearch ? destinationSearch.value : '';
    
    const displayOneWay = document.getElementById('destinationDisplayOneWay');
    const displayReturn = document.getElementById('destinationDisplayReturn');
    
    if (tripType === 'return') {
        // Show return display
        if (displayOneWay) displayOneWay.style.display = 'none';
        if (displayReturn) displayReturn.style.display = 'block';
        
        // Update return display values
        const returnOrigin = document.getElementById('returnOriginDisplayValue');
        const returnDestination = document.getElementById('returnDestinationDisplayValue');
        const returnBackOrigin = document.getElementById('returnBackOriginDisplayValue');
        const returnBackDestination = document.getElementById('returnBackDestinationDisplayValue');
        
        if (returnOrigin) returnOrigin.textContent = originValue || '-';
        if (returnDestination) returnDestination.textContent = destinationValue || '-';
        // For return trip, the back trip is the reverse
        if (returnBackOrigin) returnBackOrigin.textContent = destinationValue || '-';
        if (returnBackDestination) returnBackDestination.textContent = originValue || '-';
    } else {
        // Show one-way display
        if (displayOneWay) displayOneWay.style.display = 'block';
        if (displayReturn) displayReturn.style.display = 'none';
        
        // Update one-way display values
        const originDisplay = document.getElementById('originDisplayValue');
        const destinationDisplay = document.getElementById('destinationDisplayValue');
        
        if (originDisplay) originDisplay.textContent = originValue || '-';
        if (destinationDisplay) destinationDisplay.textContent = destinationValue || '-';
    }
}

function updatePassengersCountDisplay() {
    const totalPassengers = (bookingData.adults || 0) + (bookingData.children || 0) + (bookingData.babies || 0);
    const display = document.getElementById('passengersCountDisplay');
    if (display) {
        display.textContent = `(${totalPassengers} seleccionadas)`;
    }
}

function updateExtrasCountDisplay() {
    // Count extras from wizard
    const wizardExtras = [
        bookingData.luggage || 0,
        bookingData.babySeat || 0,
        bookingData.maxiCosi || 0,
        bookingData.bicycles || 0,
        bookingData.golf || 0
    ];
    const wizardTotal = wizardExtras.reduce((sum, val) => sum + val, 0);
    
    // Also check luggage select in form
    const luggageSelect = document.getElementById('luggage');
    let luggageValue = 0;
    if (luggageSelect && luggageSelect.value) {
        luggageValue = parseInt(luggageSelect.value) || 0;
    }
    
    // Use the maximum of wizard total or form luggage value
    const totalExtras = Math.max(wizardTotal, luggageValue);
    
    const display = document.getElementById('extrasCountDisplay');
    if (display) {
        display.textContent = `(${totalExtras} seleccionadas)`;
    }
}

function initializeBookingFormDestinations() {
    // Initialize origin and destination search
    const originSearch = document.getElementById('originSearch');
    const destinationSearch = document.getElementById('destinationSearch');
    const originSelect = document.getElementById('origin');
    const destinationSelect = document.getElementById('destination');
    const originList = document.getElementById('originList');
    const destinationList = document.getElementById('destinationList');
    
    if (!originSearch || !destinationSearch || !originSelect || !destinationSelect) return;
    
    // Populate datalists
    destinations.forEach(dest => {
        const option1 = document.createElement('option');
        option1.value = dest;
        if (originList) originList.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = dest;
        if (destinationList) destinationList.appendChild(option2);
    });
    
    // Handle origin search
    originSearch.addEventListener('input', function() {
        const value = this.value.toUpperCase();
        const matchingDest = destinations.find(d => d === value);
        if (matchingDest) {
            originSelect.value = matchingDest;
        }
    });
    
    // Handle destination search
    destinationSearch.addEventListener('input', function() {
        const value = this.value.toUpperCase();
        const matchingDest = destinations.find(d => d === value);
        if (matchingDest) {
            destinationSelect.value = matchingDest;
        }
    });
    
    // Set values from bookingData if available
    if (bookingData.origin) {
        originSearch.value = bookingData.origin;
        originSelect.value = bookingData.origin;
    }
    if (bookingData.destination) {
        destinationSearch.value = bookingData.destination;
        destinationSelect.value = bookingData.destination;
    }
    
    // Update destination display if destinations box is confirmed
    const destinationsBox = document.getElementById('confirmationBoxDestinations');
    if (destinationsBox && destinationsBox.classList.contains('confirmed')) {
        updateDestinationDisplay();
    }
}

// User Account Functions
function showRegisterForm() {
    const loginCard = document.getElementById('loginCard');
    const registerCard = document.getElementById('registerCard');
    if (loginCard && registerCard) {
        loginCard.style.display = 'none';
        registerCard.style.display = 'block';
    }
}

function showLoginForm() {
    const loginCard = document.getElementById('loginCard');
    const registerCard = document.getElementById('registerCard');
    if (loginCard && registerCard) {
        registerCard.style.display = 'none';
        loginCard.style.display = 'block';
    }
}

function handleUserLogin(event) {
    event.preventDefault();
    const emailOrUsername = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
    // Buscar usuario por email O por nombre de usuario
    const user = users.find(u => 
        (u.email === emailOrUsername || u.name === emailOrUsername || u.username === emailOrUsername) && 
        u.password === password
    );
    
    if (user) {
        // Verificar que el usuario tenga cuenta confirmada
        if (!user.verified) {
            alert('Por favor, verifica tu email antes de iniciar sesión.');
            return;
        }
        
        // Store current user session
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        updateUserHeader();
        alert('¡Bienvenido de nuevo!');
        showPage('inicio');
    } else {
        alert('Email/Usuario o contraseña incorrectos');
    }
}

// Enviar código de verificación
function sendVerificationCode() {
    const email = document.getElementById('registerEmail').value;
    if (!email) {
        alert('Por favor, ingresa un email primero');
        return;
    }
    
    // Generar código de 6 dígitos
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Guardar código (en producción, enviarías esto por email)
    emailVerificationCodes[email] = {
        code: code,
        expiresAt: Date.now() + 10 * 60 * 1000 // 10 minutos
    };
    
    // Mostrar sección de verificación
    document.getElementById('emailVerificationSection').style.display = 'block';
    
    // En producción, aquí enviarías el email con el código
    // Por ahora, mostramos el código en un alert (SOLO PARA DESARROLLO)
    alert(`Código de verificación enviado a ${email}\nCódigo: ${code}\n(En producción esto se enviaría por email)`);
}

// Verificar código de verificación
function verifyEmailCode() {
    const email = document.getElementById('registerEmail').value;
    const enteredCode = document.getElementById('verificationCode').value;
    
    const storedCode = emailVerificationCodes[email];
    
    if (!storedCode) {
        alert('Por favor, envía primero el código de verificación');
        return false;
    }
    
    if (Date.now() > storedCode.expiresAt) {
        alert('El código de verificación ha expirado. Por favor, solicita uno nuevo.');
        return false;
    }
    
    if (enteredCode !== storedCode.code) {
        alert('Código de verificación incorrecto');
        return false;
    }
    
    // Código verificado, habilitar botón de registro
    document.getElementById('registerSubmitBtn').disabled = false;
    return true;
}

// Manejar cambios en el código de verificación
document.addEventListener('DOMContentLoaded', function() {
    const verificationCodeInput = document.getElementById('verificationCode');
    if (verificationCodeInput) {
        verificationCodeInput.addEventListener('input', function() {
            if (this.value.length === 6) {
                if (verifyEmailCode()) {
                    alert('Email verificado correctamente. Puedes completar el registro.');
                }
            }
        });
    }
});

function handleUserRegister(event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
    const terms = event.target.terms.checked;
    const verificationCode = document.getElementById('verificationCode').value;
    
    // Verificar código de verificación
    if (!verifyEmailCode()) {
        return;
    }
    
    // Validate passwords match
    if (password !== passwordConfirm) {
        alert('Las contraseñas no coinciden');
        return;
    }
    
    if (!terms) {
        alert('Debes aceptar los términos y condiciones');
        return;
    }
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
    // Check if email already exists
    if (users.some(u => u.email === email)) {
        alert('Este email ya está registrado');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now().toString(),
        name: name,
        email: email,
        phone: phone,
        password: password, // In production, this should be hashed
        verified: true,
        createdAt: new Date().toISOString()
    };
    
    // Add user to list
    users.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(users));
    
    // Eliminar código de verificación usado
    delete emailVerificationCodes[email];
    
    // Store current user session
    sessionStorage.setItem('currentUser', JSON.stringify(newUser));
    updateUserHeader();
    
    alert('¡Registro exitoso! Bienvenido a Kristian Transfers.');
    
    // Show login form
    showLoginForm();
}

// Actualizar header con nombre de usuario
function updateUserHeader() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    const userMenuText = document.getElementById('userMenuText');
    const userMenuDropdown = document.getElementById('userMenuDropdown');
    
    if (currentUser && userMenuText) {
        userMenuText.textContent = currentUser.name || 'Mi cuenta';
        if (userMenuDropdown) {
            userMenuDropdown.style.display = 'none';
        }
    } else if (userMenuText) {
        userMenuText.textContent = 'Mi cuenta';
        if (userMenuDropdown) {
            userMenuDropdown.style.display = 'none';
        }
    }
}

// Toggle menú de usuario
function toggleUserMenu(event) {
    event.stopPropagation();
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    const dropdown = document.getElementById('userMenuDropdown');
    
    if (!currentUser) {
        // Si no está logueado, ir a la página de cuenta
        showPage('cuenta');
        return;
    }
    
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    }
}

// Cerrar sesión
function logoutUser() {
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        sessionStorage.removeItem('currentUser');
        updateUserHeader();
        showPage('inicio');
        alert('Has cerrado sesión correctamente');
    }
}

// Cerrar menú al hacer click fuera
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('userMenuDropdown');
    const menuBtn = document.getElementById('userMenuBtn');
    
    if (dropdown && menuBtn && !dropdown.contains(event.target) && !menuBtn.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});

// Initialize destination selects when step 2 loads
function initializeDestinationSelects() {
    const isAirportToDestination = selectedDirection === 'aeropuerto-destino';
    
    // Filter destinations based on direction
    const availableDestinations = destinations.filter(dest => dest !== 'AEROPUERTO');
    
    // Populate destinations in all selects based on their role
    const selects = document.querySelectorAll('#destinationsContent select');
    selects.forEach(select => {
        // Clear existing options except the first one
        while (select.options.length > 1) {
            select.remove(1);
        }
        
        const selectId = select.id;
        let destinationsToShow = [];
        
        // Determine which destinations to show based on select ID and direction
        if (selectId === 'origin') {
            // Origin select
            if (isAirportToDestination) {
                // Only show AEROPUERTO
                destinationsToShow = ['AEROPUERTO'];
            } else {
                // Show all except AEROPUERTO
                destinationsToShow = availableDestinations;
            }
        } else if (selectId === 'destination') {
            // Destination select
            if (isAirportToDestination) {
                // Show all except AEROPUERTO
                destinationsToShow = availableDestinations;
            } else {
                // Only show AEROPUERTO
                destinationsToShow = ['AEROPUERTO'];
            }
        } else if (selectId === 'returnOrigin') {
            // Return origin select
            if (isAirportToDestination) {
                // Show all except AEROPUERTO
                destinationsToShow = availableDestinations;
            } else {
                // Only show AEROPUERTO
                destinationsToShow = ['AEROPUERTO'];
            }
        } else if (selectId === 'returnDestination') {
            // Return destination select
            if (isAirportToDestination) {
                // Only show AEROPUERTO
                destinationsToShow = ['AEROPUERTO'];
            } else {
                // Show all except AEROPUERTO
                destinationsToShow = availableDestinations;
            }
        } else {
            // Default: show all destinations
            destinationsToShow = destinations;
        }
        
        // Add options
        destinationsToShow.forEach(dest => {
            const option = document.createElement('option');
            option.value = dest;
            option.textContent = dest;
            select.appendChild(option);
        });
    });
    
    // Initialize search functionality for all inputs
    const searchInputs = document.querySelectorAll('#destinationsContent .search-input');
    searchInputs.forEach(input => {
        const selectId = input.id.replace('Search', '');
        const select = document.getElementById(selectId);
        const datalistId = input.getAttribute('list');
        const datalist = document.getElementById(datalistId);
        
        if (select && datalist) {
            // Clear datalist
            datalist.innerHTML = '';
            
            // Determine which destinations to show in datalist
            let destinationsToShow = [];
            if (selectId === 'origin') {
                destinationsToShow = isAirportToDestination ? ['AEROPUERTO'] : availableDestinations;
            } else if (selectId === 'destination') {
                destinationsToShow = isAirportToDestination ? availableDestinations : ['AEROPUERTO'];
            } else if (selectId === 'returnOrigin') {
                destinationsToShow = isAirportToDestination ? availableDestinations : ['AEROPUERTO'];
            } else if (selectId === 'returnDestination') {
                destinationsToShow = isAirportToDestination ? ['AEROPUERTO'] : availableDestinations;
            } else {
                destinationsToShow = destinations;
            }
            
            // Populate datalist
            destinationsToShow.forEach(dest => {
                const option = document.createElement('option');
                option.value = dest;
                datalist.appendChild(option);
            });
            
            // Handle input changes
            input.addEventListener('input', function() {
                if (this.readOnly) return; // Skip if readonly (airport field)
                
                const value = this.value.toUpperCase();
                const matchingOption = Array.from(select.options).find(opt => 
                    opt.value.toUpperCase() === value
                );
                if (matchingOption) {
                    select.value = matchingOption.value;
                }
            });
        }
    });
}