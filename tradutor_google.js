var comboGoogleTradutor = null;

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        includedLanguages: 'en,es,pt,it,fr,de',
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
    }, 'google_translate_element');

    comboGoogleTradutor = document
        .getElementById("google_translate_element")
        .querySelector(".goog-te-combo");
}

function changeEvent(el) {
    if (el.fireEvent) {
        el.fireEvent('onchange');
    } else {
        var evObj = document.createEvent("HTMLEvents");
        evObj.initEvent("change", false, true);
        el.dispatchEvent(evObj);
    }
}

function trocarIdioma(sigla, pais) {
    if (comboGoogleTradutor) {
        // Sempre definir para "pt" no combo do tradutor para português
        comboGoogleTradutor.value = sigla === 'ptbr' ? 'pt' : sigla;
        changeEvent(comboGoogleTradutor);

        // Mapas de preços para cada idioma e país
        const prices = {
            en: {
                'price-1-year': '$68',
                'price-6-months': '$48',
                'price-3-months': '$27',
                'price-1-month': '$12'
            },
            pt: {
                portugal: {
                    'price-1-year': '65€',
                    'price-6-months': '45€',
                    'price-3-months': '24.99€',
                    'price-1-month': '10€'
                },
                brasil: {
                    'price-1-year': 'R$ 250,00',
                    'price-6-months': 'R$ 165,00',
                    'price-3-months': 'R$ 90,00',
                    'price-1-month': 'R$ 35,00'
                }
            },
            de: {
                'price-1-year': '65€',
                'price-6-months': '45€',
                'price-3-months': '24.99€',
                'price-1-month': '10€'
            },
            it: {
                'price-1-year': '65€',
                'price-6-months': '45€',
                'price-3-months': '24.99€',
                'price-1-month': '10€'
            },
            fr: {
                'price-1-year': '65€',
                'price-6-months': '45€',
                'price-3-months': '24.99€',
                'price-1-month': '10€'
            },
            es: {
                'price-1-year': '65€',
                'price-6-months': '45€',
                'price-3-months': '24.99€',
                'price-1-month': '10€'
            }
        };

        // Atualiza os preços com base no idioma e país
        const idioma = sigla === 'ptbr' ? 'pt' : sigla;
        const region = sigla === 'ptbr' ? 'brasil' : 'portugal';

        if (prices[idioma] && prices[idioma][region]) {
            Object.keys(prices[idioma][region]).forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.textContent = prices[idioma][region][id];
                }
            });
        } else if (prices[idioma]) {
            Object.keys(prices[idioma]).forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.textContent = prices[idioma][id];
                }
            });
        }
    }
}
