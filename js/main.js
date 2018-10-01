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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZXN0KGVsLCBzZWxlY3Rvcikge1xyXG4gICAgICAgIHZhciBtYXRjaGVzRm47XHJcbiAgICBcclxuICAgICAgICAvLyBmaW5kIHZlbmRvciBwcmVmaXhcclxuICAgICAgICBbJ21hdGNoZXMnLCd3ZWJraXRNYXRjaGVzU2VsZWN0b3InLCdtb3pNYXRjaGVzU2VsZWN0b3InLCdtc01hdGNoZXNTZWxlY3RvcicsJ29NYXRjaGVzU2VsZWN0b3InXS5zb21lKGZ1bmN0aW9uKGZuKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keVtmbl0gPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlc0ZuID0gZm47XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgdmFyIHBhcmVudDtcclxuICAgIFxyXG4gICAgICAgIC8vIHRyYXZlcnNlIHBhcmVudHNcclxuICAgICAgICB3aGlsZSAoZWwpIHtcclxuICAgICAgICAgICAgcGFyZW50ID0gZWwucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnRbbWF0Y2hlc0ZuXShzZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGVsID0gcGFyZW50O1xyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgcm93cyAgICAgICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjaGVkdWxlX19yb3cnKSxcclxuICAgICAgICAgICAgcHVyY2hhc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnB1cmNoYXNlJyk7XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBQb3B1cChlbCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ibCAgID0gZWw7XHJcbiAgICAgICAgICAgIHRoaXMuYmcgICA9IHRoaXMuYmwucXVlcnlTZWxlY3RvcignLnBvcHVwX19iZycpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnQgPSB0aGlzLmJsLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMuYmwucXVlcnlTZWxlY3RvcignI2ZsaWdodF9fbmFtZScpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGUgPSB0aGlzLmJsLnF1ZXJ5U2VsZWN0b3IoJyNmbGlnaHRfX2RhdGUnKTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnQub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmcub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SGlkZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBQb3B1cC5wcm90b3R5cGUuc2hvd0hpZGUgPSBmdW5jdGlvbihzaG93KSB7XHJcbiAgICAgICAgICAgIGlmIChzaG93KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJsLmNsYXNzTGlzdC5hZGQoJ3BvcHVwX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdodG1sJyApWzBdLmNsYXNzTGlzdC5hZGQoJ25vc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJsLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdodG1sJyApWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ25vc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBQb3B1cC5wcm90b3R5cGUuc2hvd0luZm8gPSBmdW5jdGlvbihuYW1lLCBkYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZS5pbm5lckhUTUwgPSBuYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGUuaW5uZXJIVE1MID0gZGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93SGlkZSh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmbGlnaHRJbmZvID0gbmV3IFBvcHVwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaT0wLCBsPXB1cmNoYXNlQnV0dG9ucy5sZW5ndGg7IGk8bDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBwdXJjaGFzZUJ1dHRvbnNbaV0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJvdyAgPSBjbG9zZXN0KHRoaXMsICcuc2NoZWR1bGVfX3JvdycpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSByb3cucXVlcnlTZWxlY3RvcignLnNjaGVkdWxlX19yb3ctaXRlbV9uYW1lIC5zY2hlZHVsZV9fdGV4dCcpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlID0gcm93LnF1ZXJ5U2VsZWN0b3IoJy5zY2hlZHVsZV9fcm93LWl0ZW1fZGF0ZSAuc2NoZWR1bGVfX3RleHQnKS5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgICAgICBmbGlnaHRJbmZvLnNob3dJbmZvKG5hbWUsIGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXInKSxcclxuICAgICAgICAgICAgbWVudSAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcclxuXHJcbiAgICAgICAgYnVyZ2VyLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2J1cmdlcl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9fbGlua193aXRoLXN1Ymxpc3QnKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaT0wLCBsPWNhdGVnb3JpZXMubGVuZ3RoOyBpPGw7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY2F0ZWdvcmllc1tpXS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgID0gY2xvc2VzdCh0aGlzLCAnLm1lbnVfX2l0ZW0nKSB8fCBjbG9zZXN0KHRoaXMsICcubWVudV9fc3ViaXRlbScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X19pdGVtX2Ryb3BwZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxufSkoKTtcclxuXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
