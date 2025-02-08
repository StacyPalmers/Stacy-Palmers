const translations = {
    en: {
        home: "Home",
        about: "About",
        services: "Services",
        gallery: "Gallery",
        contact: "Contact",
        welcome: "Welcome to Stacy Palmers Sewing Studio",
        description: "Exclusive tailoring: coats, evening and ballroom dresses.",
        about_title: "About Us",
        about_text: "We create unique custom clothing, paying attention to every detail."
    },
    ru: {
        home: "Главная",
        about: "О нас",
        services: "Услуги",
        gallery: "Галерея",
        contact: "Контакты",
        welcome: "Добро пожаловать в Stacy Palmers Sewing Studio",
        description: "Эксклюзивный пошив одежды: пальто, вечерние и бальные платья.",
        about_title: "О нас",
        about_text: "Мы создаем уникальные модели одежды на заказ, уделяя внимание каждой детали."
    },
    pl: {
        home: "Strona główna",
        about: "O nas",
        services: "Usługi",
        gallery: "Galeria",
        contact: "Kontakt",
        welcome: "Witamy w Stacy Palmers Sewing Studio",
        description: "Ekskluzywne szycie: płaszcze, suknie wieczorowe i balowe.",
        about_title: "O nas",
        about_text: "Tworzymy unikalne ubrania na zamówienie, zwracając uwagę na każdy szczegół."
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang] && translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });
}

// Устанавливаем язык по умолчанию (польский)
changeLanguage('pl');