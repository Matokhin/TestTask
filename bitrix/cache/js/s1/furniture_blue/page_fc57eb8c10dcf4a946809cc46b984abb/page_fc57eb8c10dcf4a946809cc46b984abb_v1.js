
; /* Start:"a:4:{s:4:"full";s:86:"/bitrix/components/bitrix/system.pagenavigation/templates/more/script.js?1670942405993";s:6:"source";s:72:"/bitrix/components/bitrix/system.pagenavigation/templates/more/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
    $(document).on('click', '.load_more', function(){

        var targetContainer = $('.news-list'),          //  ���������, � ������� �������� ��������
            url =  $('.load_more').attr('data-url');    //  URL, �� �������� ����� ����� ��������

        if (url !== undefined) {
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'html',
                success: function(data){

                    //  ������� ������ ���������
                    $('.load_more').remove();

                    var elements = $(data).find('.news-item'),  //  ���� ��������
                        pagination = $(data).find('.load_more');//  ���� ���������

                    targetContainer.append(elements);   //  ��������� ����� � ����� ����������
                    targetContainer.append(pagination); //  ��������� ��������� ������

                }
            })
        }
    });
});
/* End */
;; /* /bitrix/components/bitrix/system.pagenavigation/templates/more/script.js?1670942405993*/
