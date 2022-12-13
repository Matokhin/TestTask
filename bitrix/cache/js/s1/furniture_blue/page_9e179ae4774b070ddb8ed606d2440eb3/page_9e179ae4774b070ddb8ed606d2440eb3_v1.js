
; /* Start:"a:4:{s:4:"full";s:92:"/bitrix/components/bitrix/system.pagenavigation/templates/show_more/script.js?16709438711025";s:6:"source";s:77:"/bitrix/components/bitrix/system.pagenavigation/templates/show_more/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
    console.log("test");

    $(document).on('click', '.load_more', function(){

        var targetContainer = $('.news-list'),          //  Контейнер, в котором хранятся элементы
            url =  $('.load_more').attr('data-url');    //  URL, из которого будем брать элементы

        if (url !== undefined) {
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'html',
                success: function(data){

                    //  Удаляем старую навигацию
                    $('.load_more').remove();

                    var elements = $(data).find('.news-item'),  //  Ищем элементы
                        pagination = $(data).find('.load_more');//  Ищем навигацию

                    targetContainer.append(elements);   //  Добавляем посты в конец контейнера
                    targetContainer.append(pagination); //  добавляем навигацию следом

                }
            })
        }

    });

});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:93:"/local/templates/furniture_blue/components/bitrix/news.list/test_task/script.js?1670947755754";s:6:"source";s:79:"/local/templates/furniture_blue/components/bitrix/news.list/test_task/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$('.counter').on('click', '.counter_minus', function(){
    var input = $(this).siblings('.counter_input');
    var i = $(input).val();
    id_minus = $(input).attr('data-id');
    if (i <= 1) {return;};
    $(input).val(--i);
    $.ajax({
        url:'/sql_quantity.php',
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
        url:'/sql_quantity.php',
        type: 'POST',
        data:  {id_plus: id_plus},
        success: function() {}
    });



});
/* End */
;; /* /bitrix/components/bitrix/system.pagenavigation/templates/show_more/script.js?16709438711025*/
; /* /local/templates/furniture_blue/components/bitrix/news.list/test_task/script.js?1670947755754*/
