
; /* Start:"a:4:{s:4:"full";s:91:"/bitrix/components/bitrix/system.pagenavigation/templates/show_more/script.js?1670943266999";s:6:"source";s:77:"/bitrix/components/bitrix/system.pagenavigation/templates/show_more/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){

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
;; /* /bitrix/components/bitrix/system.pagenavigation/templates/show_more/script.js?1670943266999*/
