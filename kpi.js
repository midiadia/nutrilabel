;
(function($) {
    $.fn.kpi = function(option, settings) {

        var cal = parseInt($(this).attr('data-cal')), percent = 100 * cal / 2000;


        var template = '<div class="kpi_idr" style="width:255px">\
            <div class="inner">\
                <table style="border-collapse:collapse;width:100%" cellpadding="0" cellspacing="0">\
                    <tbody><tr>\
                            <td>\
                                <div class="big">\
                                    ' + percent + '%\
                                </div>\
                            </td>\
                            <td>\
                                <div class="medium">de IDR*</div>\
                                <div class="small">(' + cal + ' cal)</div>\
                            </td>\
                            <td width="50">\
                                <div class="image">\
                                </div>\
                            </td>\
                        </tr>\
                    </tbody></table>\
            </div>\
        </div>';
        var html = '';
        for (var i = 0; i < 100; i++) {
            html += '<div class="percent"></div>';
        }

        $(this).html(template);

        $(this).find('.kpi_idr .image').append(html);

        $(this).find('.kpi_idr .percent:lt(' + percent + ')').addClass('fill');
    };

})(jQuery);