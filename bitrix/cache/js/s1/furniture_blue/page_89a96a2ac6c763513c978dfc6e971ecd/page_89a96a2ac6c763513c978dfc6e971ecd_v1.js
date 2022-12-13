
; /* Start:"a:4:{s:4:"full";s:93:"/local/templates/furniture_blue/components/bitrix/news.list/test_task/script.js?1670948204889";s:6:"source";s:79:"/local/templates/furniture_blue/components/bitrix/news.list/test_task/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {

    $('.counter').on('click', '.counter_minus', function(){
        var input = $(this).siblings('.counter_input');
        var i = $(input).val();
        id_minus = $(input).attr('data-id');
        if (i <= 0) {return;};
        $(input).val(--i);
        $.ajax({
            url: this.action,
            type:'POST',
            data: {id_minus: id_minus},
            success: function() {}
        });


    });


    $('.counter').on('click', '.counter_plus', function(){
        var input = $(this).siblings('.counter_input');
        var i = $(input).val();
        id_plus = $(input).attr('data-id');
        $(input).val(++i);
        $.ajax({
            url: this.action,
            type: 'POST',
            data:  {id_plus: id_plus},
            success: function() {}
        });



    });





});
/* End */
;; /* /local/templates/furniture_blue/components/bitrix/news.list/test_task/script.js?1670948204889*/
