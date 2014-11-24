(function($) {
    var icons = {
        'text/plain:*': 'rinku-icon-text',
        'application/pdf:*': 'rinku-icon-pdf',
        'application/json:*': 'rinku-icon-braces',
        'text/html:github': 'rinku-icon-github',
    };

    var make_icon = function(icon, href, title) {
        var e = $('<a>').addClass('rinku-icon-container')
                        .append(
                            $('<span>').addClass('rinku-icon')
                                       .addClass(icon + window.rinku.iconFormat)
                        )
                        .attr('href', href);
        if (title) {
            e.attr('title', title);
        }
        return e;
    };

    window.rinku = {
        links: [],

        iconFormat: '-svg',
    
        init: function() {
            var i, e, sig, div, that=this;

            if (!document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1')) {
                this.iconFormat = '-png';
            }

            $('link[rel="alternate"]').each(function(i, e) {
                elem = $(e);
                sig = elem.attr('type') + ':' + (elem.attr('title') ? elem.attr('title') : '*');
                if (icons.hasOwnProperty(sig)) {
                    that.links.push({icon: icons[sig], href: elem.attr('href'), label: elem.attr('data-rinku-label')});
                }
            });

            div = $('<div id="rinku-container">');
            for (i=0; i<that.links.length; i++) {
                div.append(make_icon(that.links[i].icon, that.links[i].href, that.links[i].label));
            }
            $('body').append(div);
        },

        destroy: function() {
            $('#rinku-container').remove();
        },
    };
})(jQuery);
