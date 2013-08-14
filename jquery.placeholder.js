/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
* jQuery Placeholder
* Kent English 2013
* http://zeroviscosity.com
*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

;(function($) {
    'use strict';
    $.fn.placeholder = function() {
        // Ensure that this plugin is needed
        var supported = false;
        if ('placeholder' in document.createElement('input')) {
            supported = true;
        }

        return this.each(function() {
            if (supported) {
                return;
            }

            var input = $(this),
                placeholder = input.attr('placeholder'),
                add = function() {
                    if (input.val() === '') {
                        input.val(placeholder);
                        input.addClass('placeholder');
                    }
                },
                remove = function() {
                    if (input.val() === placeholder) {
                        input.val('');
                        input.removeClass('placeholder');
                    }
                };
            
            //Ensure that a placeholder has been defined
            if (typeof placeholder !== 'undefined' && placeholder !== null) {
                add();
                input.focus(function() {
                    remove();
                }).blur(function() {
                    add();
                });
            }
        });
    };
})(jQuery);