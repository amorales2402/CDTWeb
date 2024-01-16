// Función para cargar las traducciones según el idioma seleccionado

function cargarTraducciones(idioma) {
        return fetch(`languajes/${idioma}.json`)
        .then(response => response.json())
        .then(data => {
            window.translations = data;
        })
        .catch(error => console.error('Error cargando traducciones:', error));
}

// Función para cambiar el idioma y aplicar las traducciones
function cambiarIdioma(idioma) {
    
    
    cargarTraducciones(idioma)
        .then(() => {
            // Aplicar las traducciones a los elementos del DOM
            document.getElementById('welcome_message_h3_1').innerText = window.translations.welcome_message_h3_1;
            document.getElementById('welcome_message_h3_2').innerText = window.translations.welcome_message_h3_2;
            document.getElementById('home').innerText = window.translations.home;
            document.getElementById('our_products').innerText = window.translations.our_products;
            document.getElementById('our_clients').innerText = window.translations.our_clients;
            document.getElementById('contact_l').innerText = window.translations.contact_l;
            document.getElementById('more_information').innerText = window.translations.more_information;
            document.getElementById('more_information_2').innerText = window.translations.more_information;
            document.getElementById('more_information_3').innerText = window.translations.more_information;
            document.getElementById('languaje').innerText = window.translations.languaje;
            document.getElementById('services_h3').innerText = window.translations.services_h3;
            document.getElementById('im_interested').innerText = window.translations.im_interested;
            document.getElementById('bi_text').innerText = window.translations.bi_text;
            document.getElementById('bi_text_tc').innerText = window.translations.bi_text_tc;
            document.getElementById('bi_text_mc').innerText = window.translations.bi_text_mc;
            document.getElementById('bi_text_sos').innerText = window.translations.bi_text_sos;
            document.getElementById('bi_text_sdm').innerText = window.translations.bi_text_sdm;
            document.getElementById('bi_text_sim').innerText = window.translations.bi_text_sim;
            document.getElementById('bi_text_kapis').innerText = window.translations.bi_text_kapis;
            document.getElementById('pos_text').innerText = window.translations.pos_text;
            document.getElementById('pos_text_1').innerText = window.translations.pos_text_1;
            document.getElementById('pos_text_2').innerText = window.translations.pos_text_2;
            document.getElementById('pos_text_3').innerText = window.translations.pos_text_3;
            document.getElementById('pos_text_4').innerText = window.translations.pos_text_4;
            document.getElementById('pos_text_5').innerText = window.translations.pos_text_5;
            document.getElementById('pos_text_6').innerText = window.translations.pos_text_6;
            document.getElementById('pos_text_7').innerText = window.translations.pos_text_7;
            document.getElementById('pos_tittle_2').innerText = window.translations.pos_tittle_2;
            document.getElementById('pos_tittle_3').innerText = window.translations.pos_tittle_3;
            document.getElementById('pos_tittle_4').innerText = window.translations.pos_tittle_4;
            document.getElementById('pos_tittle_5').innerText = window.translations.pos_tittle_5;
            document.getElementById('pos_tittle_6').innerText = window.translations.pos_tittle_6;
            document.getElementById('pos_tittle_7').innerText = window.translations.pos_tittle_7;
            document.getElementById('line_text').innerText = window.translations.line_text;
            document.getElementById('line_text_2_1').innerText = window.translations.line_text_2_1;
            document.getElementById('line_text_2_2').innerText = window.translations.line_text_2_2;
            document.getElementById('line_text_2_3').innerText = window.translations.line_text_2_3;
            document.getElementById('line_text_3_1').innerText = window.translations.line_text_3_1;
            document.getElementById('line_text_3_2').innerText = window.translations.line_text_3_2;
            document.getElementById('line_text_4_1').innerText = window.translations.line_text_4_1;
            document.getElementById('line_text_4_2').innerText = window.translations.line_text_4_2;
            document.getElementById('line_tittle_2').innerText = window.translations.line_tittle_2;
            document.getElementById('line_tittle_3').innerText = window.translations.line_tittle_3;
            document.getElementById('line_tittle_4').innerText = window.translations.line_tittle_4;
            document.getElementById('gis_text').innerText = window.translations.gis_text;
            document.getElementById('gis_text_1').innerText = window.translations.gis_text_1;
            document.getElementById('gis_text_2').innerText = window.translations.gis_text_2;
            document.getElementById('gis_text_3').innerText = window.translations.gis_text_3;
            document.getElementById('gis_tittle_2').innerText = window.translations.gis_tittle_2;
            document.getElementById('gis_tittle_3').innerText = window.translations.gis_tittle_3;
            document.getElementById('read_more1').innerText = window.translations.read_more;
            document.getElementById('read_more2').innerText = window.translations.read_more;
            document.getElementById('read_more3').innerText = window.translations.read_more;
            document.getElementById('read_more4').innerText = window.translations.read_more;
            document.getElementById('clients_h3').innerText = window.translations.clients_h3;
            document.getElementById('clients_p').innerText = window.translations.clients_p;
            document.getElementById('contact_h3').innerText = window.translations.contact_h3;
            document.getElementById('ask_us').innerText = window.translations.ask_us;
            document.getElementById('Your_name').innerText = window.translations.Your_name;
            document.getElementById('your_mail').innerText = window.translations.your_mail;
            document.getElementById('your_question').innerText = window.translations.your_question;
            document.getElementById('send_mail').value = window.translations.send_mail;
            document.getElementById('contact_l_2').innerText = window.translations.contact_l_2;
            document.getElementById('phone').innerText = window.translations.phone;

        }) .catch((error)=> console.error(error));
        
}

// Por defecto, cargar traducciones en español al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    cambiarIdioma('es');
});
