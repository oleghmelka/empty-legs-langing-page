(function() {

    function closest(el, selector) {
        var matchesFn;
    
        // find vendor prefix
        ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
            if (typeof document.body[fn] == 'function') {
                matchesFn = fn;
                return true;
            };
            return false;
        });
    
        var parent;
    
        // traverse parents
        while (el) {
            parent = el.parentElement;
            if (parent && parent[matchesFn](selector)) {
                return parent;
            };
            el = parent;
        };
    
        return null;
    }

    window.addEventListener('load', function() {

        var rows            = document.querySelectorAll('.schedule__row'),
            purchaseButtons = document.querySelectorAll('.purchase');


        function Popup(el) {

            this.bl   = el;
            this.bg   = this.bl.querySelector('.popup__bg');
            this.cont = this.bl.querySelector('.popup__container');
            this.name = this.bl.querySelector('#flight__name');
            this.date = this.bl.querySelector('#flight__date');


            this.cont.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
            }

            this.bg.onclick = function() {
                this.showHide(false);
            }.bind(this);

            console.log(this);

        }


        Popup.prototype.showHide = function(show) {
            if (show) {
                this.bl.classList.add('popup_active');
                document.getElementsByTagName( 'html' )[0].classList.add('noscroll');
            } else {
                this.bl.classList.remove('popup_active');
                document.getElementsByTagName( 'html' )[0].classList.remove('noscroll');
            }
        }


        Popup.prototype.showInfo = function(name, date) {
            this.name.innerHTML = name;
            this.date.innerHTML = date;
            this.showHide(true);
        }

        var flightInfo = new Popup(document.getElementById('popup'));

        for (var i=0, l=purchaseButtons.length; i<l; i++) {

            purchaseButtons[i].onclick = function() {
                var row  = closest(this, '.schedule__row'),
                    name = row.querySelector('.schedule__row-item_name .schedule__text').innerText,
                    date = row.querySelector('.schedule__row-item_date .schedule__text').innerText;
                flightInfo.showInfo(name, date);
            }

        }

        var burger = document.getElementById('burger'),
            menu   = document.querySelector('.menu');

        burger.onclick = function() {
            burger.classList.toggle('burger_active');
            menu.classList.toggle('menu_active');
        }

        var categories = document.querySelectorAll('.menu__link_with-sublist');

        for (var i=0, l=categories.length; i<l; i++) {

            categories[i].onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                var parent  = closest(this, '.menu__item') || closest(this, '.menu__subitem');

                parent.classList.toggle('menu__item_dropped');
            }

        }


    });

})();

