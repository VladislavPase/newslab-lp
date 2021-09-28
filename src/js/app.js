import $ from 'jquery';
import 'lazysizes';
import Swiper from 'swiper/bundle';

import page from 'page';
import forms from 'forms';
import './anchor';

let app = {

    // параметры, изменяемые в appConfig

    breakpoints: {
        sm: 320,
        md: 768,
        lg: 1280
    },
    media: 320,
    resizeEventName: 'app_resize',
    submitEventName: 'app_submit',
    popupLoadedEventName: 'app_popup_loaded',
    popupClosedEventName: 'app_popup_closed',
    tabChangedEventName: 'app_tab_changed',
    scrollToOffset: 200, // оффсет при скролле до элемента
    scrollToSpeed: 500, // скорость скролла

    init: function () {
        // read config
        if (typeof appConfig === 'object') {
            Object.keys(appConfig).forEach(key => {
                if (Object.prototype.hasOwnProperty.call(app, key)) {
                    app[key] = appConfig[key];
                }
            });
        }

        app.currentID = 0;

        // Init page
        this.page = page;
        this.page.init.call(this);

        // Init page
        this.forms = forms;
        this.forms.init.call(this);

        app.checkMedia();
        app.window.on('resize', app.checkMedia);
        window.jQuery = $;
        window.app = app;

        app.document.ready(() => {
            this.initHeader();
            this.initSlider();
            this.initMenu();
            this.initInputs();
        });
    },

    /**
     * Проверяет размер окна и пишет его в app.media
     * @returns void
     */
    checkMedia() {
        let current = app.media;
        for (let key in app.breakpoints) {
            if (app.window.outerWidth() >= app.breakpoints[key]) {
                app.media = app.breakpoints[key];
            }
//            console.log(app.media);
        }
        if (app.media != current) {
            app.document.trigger(app.resizeEventName, {media: app.media});
        }
    },

    uniqID() {
        return `app_id_${app.currentID++}`;
    },

    initHeader() {
        let header = $('.header');

        if (header.offset().top > 50) {
            $('body').addClass('header-scrolling');
        } else {
            $('body').removeClass('header-scrolling');
        }

        $(window).on('scroll', function () {
            if (header.offset().top > 50) {
                $('body').addClass('header-scrolling');
            } else {
                $('body').removeClass('header-scrolling');
            }
        });
    },

    initSlider() {
        new Swiper('.statistics__slider', {
           slidesPerView: 'auto',
           loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
           autoplay: {
               delay: 2500
           },
           breakpoints: {
               0: {
                   spaceBetween: 60,
               },
               1280: {
                   spaceBetween: 100,
               }
           }
        });

        new Swiper('.reviews__slider', {
            slidesPerView: 'auto',
            watchOverflow: true,
            spaceBetween: 250,
            centeredSlides: true,
            navigation: {
                nextEl: '.reviews__slider .next',
                prevEl: '.reviews__slider .prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });
    },

    initMenu() {
        $(document).on('click', '.header__burger', function () {
            $('body').toggleClass('menu-open');
        });
    },

    initInputs() {
        let input = $('.input');

        input.focus(function () {
            $(this).removeClass('_is-empty');
            $(this).removeClass('_filled');
        });

        input.blur(function () {
            if ($(this).val()) {
                $(this).addClass('_filled');
                $(this).removeClass('_is-empty');
            }
        });
    }

};
app.init();
