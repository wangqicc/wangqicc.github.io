/*崩溃欺骗*/
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
 if (document.hidden) {
     $('[rel="icon"]').attr('href', "/img/TEP.ico");
     document.title = '(｡>﹏<)哈啾 页面崩溃啦 ~';
     clearTimeout(titleTime);
 }
 else {
     $('[rel="icon"]').attr('href', "/favicon.ico");
     document.title = 'ε٩(๑> ₃ <)۶з 咦，又好了~';
     titleTime = setTimeout(function () {
         document.title = OriginTitle;
     }, 2000);
 }
});