(function(jQuery) {
    jQuery.fn.jqs_setMove = function(config) {
        var defaults = {
            x: 1,
            y: 1
        }
        var options = $.extend(defaults, config);
        return this.each(function(i) {
            position = $(this).position();
            $(this).data({
                "nx": options['x'],
                "ny": options['y']
            });
        });
    };
    jQuery.fn.jqs_nMove = function(config) {
        var defaults = {}
        var options = $.extend(defaults, config);
        return this.each(function(i) {
            var position = $(this).position();
            $(this).css({
                "left": position.left + parseInt($(this).data('nx')) + "px",
                "top": position.top + parseInt($(this).data('ny')) + "px"
            });
        });
    };
    jQuery.fn.jqs_move = function(config) {
        var defaults = {
            x: 1,
            y: 1
        }
        var options = $.extend(defaults, config);
        return this.each(function(i) {
            var position = $(this).position();
            $(this).css({
                "left": (position.left + options['x']) + "px",
                "top": (position.top + options['y']) + "px"
            });
        });
    };
})(jQuery);