
; /* Start:"a:4:{s:4:"full";s:92:"/bitrix/components/bitrix/system.pagenavigation/templates/show_more/script.js?16709438711025";s:6:"source";s:77:"/bitrix/components/bitrix/system.pagenavigation/templates/show_more/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
    console.log("test");

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
;
; /* Start:"a:4:{s:4:"full";s:93:"/local/templates/furniture_blue/components/bitrix/news.list/flat/script.min.js?16709549063288";s:6:"source";s:74:"/local/templates/furniture_blue/components/bitrix/news.list/flat/script.js";s:3:"min";s:78:"/local/templates/furniture_blue/components/bitrix/news.list/flat/script.min.js";s:3:"map";s:78:"/local/templates/furniture_blue/components/bitrix/news.list/flat/script.map.js";}"*/
(function(t){if(!!t.JCNewsSlider){return}t.JCNewsSlider=function(t,e){if(t&&e){var i=BX(t);if(i){var s=BX.findChildByClassName(i,e.imagesContainerClassName,true);var a=BX.findChildByClassName(i,e.leftArrowClassName,true);var l=BX.findChildByClassName(i,e.rightArrowClassName,true);var r=BX.findChildByClassName(i,e.controlContainerClassName,true);if(s&&a&&l&&r){var n=new JCNewsSlider;n.Init(s,r,a,l)}}}};t.JCNewsSlider.prototype.Init=function(t,e,i,s){this.time=.5;this.type="accelerated";this.threshold=50;this.allowedTime=500;this.startX=0;this.startY=0;this.startTime=0;this.sliderImages=t;BX.bind(t,"touchstart",BX.delegate(this.touchStart,this));BX.bind(t,"touchend",BX.delegate(this.touchEnd,this));this.sliderControls=BX.findChildren(e,{tagName:"LI"},true);var a=function(t,e){return function(){return e(t)}};for(var l=0;l<this.sliderControls.length;l++){BX.bind(this.sliderControls[l],"click",a(l,BX.delegate(this.slideTo,this)))}this.sliderLeft=i;BX.bind(i,"click",BX.delegate(this.slideLeft,this));this.sliderRight=s;BX.bind(s,"click",BX.delegate(this.slideRight,this))};t.JCNewsSlider.prototype.slideRight=function(){if(this.animation)return;this.animation=true;var t=parseInt(this.sliderImages.style.left,10);if(t<=-100*(this.sliderControls.length-1)){this.animation=false;return}var e=this;new BX.fx({start:t,finish:t-100,time:this.time,type:this.type,callback:function(t){e.sliderImages.style.left=t+"%"},callback_start:function(){e.sliderImages.style.left=t+"%"},callback_complete:function(){e.sliderImages.style.left=t-100+"%";e.adjustSliderControls(-(t-100)/100);e.animation=false}}).start()};t.JCNewsSlider.prototype.slideLeft=function(){if(this.animation)return;this.animation=true;var t=parseInt(this.sliderImages.style.left,10);if(t>=0){this.animation=false;return}var e=this;new BX.fx({start:t,finish:t+100,time:this.time,type:this.type,callback:function(t){e.sliderImages.style.left=t+"%"},callback_start:function(){e.sliderImages.style.left=t+"%"},callback_complete:function(){e.sliderImages.style.left=t+100+"%";e.adjustSliderControls(-(t+100)/100);e.animation=false}}).start()};t.JCNewsSlider.prototype.slideTo=function(t){if(this.animation)return;this.animation=true;var e=parseInt(this.sliderImages.style.left,10);if(e==-t*100){this.animation=false;return}var i=this;new BX.fx({start:e,finish:-t*100,time:this.time,type:this.type,callback:function(t){i.sliderImages.style.left=t+"%"},callback_start:function(){i.sliderImages.style.left=e+"%";i.adjustSliderControls(t)},callback_complete:function(){i.sliderImages.style.left=-t*100+"%";i.animation=false}}).start()};t.JCNewsSlider.prototype.adjustSliderControls=function(t){for(var e=0;e<this.sliderControls.length;e++){if(t==e)BX.addClass(this.sliderControls[e],"current");else BX.removeClass(this.sliderControls[e],"current")}};t.JCNewsSlider.prototype.touchStart=function(t){var e=t.changedTouches[0];this.startX=e.pageX;this.startY=e.pageY;this.startTime=(new Date).getTime();t.preventDefault()};t.JCNewsSlider.prototype.touchEnd=function(t){var e=t.changedTouches[0];var i=e.pageX-this.startX;var s=(new Date).getTime()-this.startTime;if(s<=this.allowedTime){if(i>this.threshold)this.slideLeft();else if(i<-this.threshold)this.slideRight()}t.preventDefault()}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:105:"/bitrix/components/bitrix/rating.vote/templates/mobile_comment_like/script_attached.min.js?16707596293983";s:6:"source";s:86:"/bitrix/components/bitrix/rating.vote/templates/mobile_comment_like/script_attached.js";s:3:"min";s:90:"/bitrix/components/bitrix/rating.vote/templates/mobile_comment_like/script_attached.min.js";s:3:"map";s:90:"/bitrix/components/bitrix/rating.vote/templates/mobile_comment_like/script_attached.map.js";}"*/
(function(){if(window["RatingLikeComments"])return;var e={},t={};window.RatingLikeComments=function(t,i,s,n){this.likeId=t;this.entityTypeId=i;this.entityId=s;this.available=n=="Y";this.likeTimeout=false;this.enabled=this.init();e[t]=this};window.RatingLikeComments.prototype={init:function(){this.box=BX("bx-ilike-button-"+this.likeId);if(!this.box)return false;BXMobileApp.addCustomEvent("onPull-main",BX.proxy(function(e){if(e.command=="rating_vote"){var t=e.params;if(t.USER_ID+""!=BX.message("USER_ID")+""&&this.entityTypeId==t.ENTITY_TYPE_ID&&this.entityId==t.ENTITY_ID){this.someoneVote(t.TYPE=="ADD",t.TOTAL_POSITIVE_VOTES)}}},this));this.voted=BX.hasClass(this.box,"post-comment-likes-liked");BX.bind(this.box,"click",BX.proxy(this.vote,this));this.countText=BX("bx-ilike-count-"+this.likeId);BX.bind(this.countText,"click",BX.proxy(this.list,this));return true},vote:function(e){clearTimeout(this.likeTimeout);if(BX.type.isBoolean(e)&&this.voted==e)return false;var t=BX.type.isNotEmptyString(this.countText.innerHTML)?parseInt(this.countText.innerHTML):0,i;i=this.voted=BX.type.isBoolean(e)?e:!this.voted;if(this.voted){this.countText.innerHTML=t+1;BX.addClass(this.box,"post-comment-likes-liked");BX.removeClass(this.box,"post-comment-likes");var s=BX.clone(this.box);var n=this.box;BX.adjust(n.parentNode,{style:{position:"relative"}});BX.adjust(s,{attrs:{id:"bx-ilike-button-animation"},style:{position:"absolute",minWidth:0}});BX.adjust(n,{style:{visibility:"hidden"}});n.parentNode.insertBefore(s,n);new BX.easing({duration:120,start:{scale:100},finish:{scale:130},transition:BX.easing.transitions.quad,step:function(e){s.style.transform="scale("+e.scale/100+")"},complete:function(){new BX.easing({duration:120,start:{scale:130},finish:{scale:100},transition:BX.easing.transitions.quad,step:function(e){s.style.transform="scale("+e.scale/100+")"},complete:function(){s.parentNode.removeChild(s);BX.adjust(n,{style:{visibility:"visible"}});BX.adjust(n.parentNode,{style:{position:"static"}})}}).animate()}}).animate()}else{this.countText.innerHTML=t-1;BX.addClass(this.box,"post-comment-likes");BX.removeClass(this.box,"post-comment-likes-liked")}if(BX.type.isBoolean(e)){return false}else{this.likeTimeout=setTimeout(BX.proxy(function(){this.send(i)},this),1e3);BX.eventCancelBubble(e);return BX.PreventDefault(e)}},send:function(e){var t=new window.MobileAjaxWrapper;t.Wrap({type:"json",method:"POST",url:BX.message("SITE_DIR")+"mobile/ajax.php?mobile_action=like",data:{RATING_VOTE:"Y",RATING_VOTE_TYPE_ID:this.entityTypeId,RATING_VOTE_ENTITY_ID:this.entityId,RATING_VOTE_ACTION:e===true?"plus":"cancel",sessid:BX.bitrix_sessid()},callback:BX.proxy(function(t){if(typeof t!="undefined"&&typeof t.action!="undefined"&&typeof t.items_all!="undefined"){this.vote(t.action=="plus");this.countText.innerHTML=t.items_all}else this.vote(!e)},this),callback_failure:BX.proxy(function(){this.vote(!e)},this)})},someoneVote:function(e,t){this.countText.innerHTML=t;if(t>1||t==1&&!this.voted){BX.addClass(this.box,"post-comment-liked")}else{BX.removeClass(this.box,"post-comment-liked")}},list:function(e){if(window["app"]){var t=BX.message("RVPathToUserProfile")?BX.message("RVPathToUserProfile"):BX.message("RVCPathToUserProfile");window.app.openTable({callback:function(){},url:(BX.message("MobileSiteDir")?BX.message("MobileSiteDir"):"/")+"mobile/index.php?mobile_action=get_likes&RATING_VOTE_TYPE_ID="+this.entityTypeId+"&RATING_VOTE_ENTITY_ID="+this.entityId+"&URL="+t,markmode:false,showtitle:false,modal:false,cache:false,outsection:false,cancelname:BX.message("RVCListBack")})}return BX.PreventDefault(e)}};window.RatingLikeComments.getById=function(t){return e[t]};window.RatingLikeComments.List=function(t){if(e[t])e[t].list()};if(window["RatingLikeCommentsQueue"]&&window["RatingLikeCommentsQueue"].length>0){var i;while((i=window["RatingLikeCommentsQueue"].pop())&&i){i()}delete window["RatingLikeCommentsQueue"]}})();
/* End */
;; /* /bitrix/components/bitrix/system.pagenavigation/templates/show_more/script.js?16709438711025*/
; /* /local/templates/furniture_blue/components/bitrix/news.list/flat/script.min.js?16709549063288*/
; /* /bitrix/components/bitrix/rating.vote/templates/mobile_comment_like/script_attached.min.js?16707596293983*/

//# sourceMappingURL=page_0047c2652e76f9aedbc46313bed79679.map.js