
;
(function($) {
    $.fn.carbon = function(option, settings) {
        var value = $(this).attr('data-value');
        var template = '<div class="carbon"">\
            <div class="inner">' + value + '</div>\
            <div class="disclaimer">Raciones de Carbohidratos</div>\
        </div>';


        $(this).html(template);


    };
})(jQuery);
