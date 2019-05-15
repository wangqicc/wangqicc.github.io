jQuery(document).ready(function($) {
    $("#spig").mousedown(function(e) {
        if (e.which == 3) {
            showMessage("����ͨ����<br /> <a href=\"\" title=\"��ҳ\">��ҳ</a>    <a href=\"\" title=\"����\">����</a> <a href=\"\" title=\"����\">����</a>", 10000);
        }
    });
    $("#spig").bind("contextmenu",
    function(e) {
        return false;
    });
});

jQuery(document).ready(function($) {
    $("#message").hover(function() {
        $("#message").fadeTo("100", 1);
    });
});

jQuery(document).ready(function($) {
    //$(".mumu").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
    $(".mumu").mouseover(function() {
        $(".mumu").fadeTo("300", 0.3);
        msgs = ["�������ˣ��㿴������", "�һ�����Ŷ���ٺ٣�", "���ֶ��ŵģ������ÿ���", "�����ÿ��Ҳų�����"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".mumu").mouseout(function() {
        $(".mumu").fadeTo("300", 1)
    });
});

jQuery(document).ready(function($) {
    if (isindex) { //�������ҳ
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + ' ����ҹè��ѽ������˯�������������ô�㣿', 6000);
        } else if (now > 6 && now <= 11) {
            showMessage(visitor + ' ���Ϻã����������г���ޣ�����ĳ������ԣ�����������ǳ����������', 6000);
        } else if (now > 11 && now <= 14) {
            showMessage(visitor + ' �����ˣ��Է���ô����Ҫ�����ˣ�������˭��ͦ��ѽ��', 6000);
        } else if (now > 14 && now <= 18) {
            showMessage(visitor + ' �����ʱ�����Ѱ������������ڣ�', 6000);
        } else {
            showMessage(visitor + ' ����������ɣ�', 6000);
        }
    } else {
        showMessage('��ӭ' + visitor + '������������ҹ�ѳ��Ρ��Ķ� ' + title + ' ', 6000);
    }
    $(".spig").animate({
        top: $(".spig").offset().top + 300,
        left: document.body.offsetWidth - 160
    },
    {
        queue: false,
        duration: 1000
    });
});

jQuery(document).ready(function($) {
    $('h2 a').click(function() { //���ⱻ���ʱ
        showMessage('�����ó��̵ľ����ء�<span style="color:#0099cc;">' + $(this).text() + '</span>�����Ժ�');
    });
    $('h2 a').mouseover(function() {
        showMessage('Ҫ������<span style="color:#0099cc;">' + $(this).text() + '</span>����ƪ����ô��');
    });
    $('#prev-page').mouseover(function() {
        showMessage('Ҫ������һҳ��?');
    });
    $('#next-page').mouseover(function() {
        showMessage('Ҫ������һҳ��?');
    });
    $('#index-links li a').mouseover(function() {
        showMessage('ȥ <span style="color:#0099cc;">' + $(this).text() + '</span> ���');
    });
    $('.comments').mouseover(function() {
        showMessage('<span style="color:#0099cc;">' + visitor + '</span> �������������ɣ�');
    });
    $('#submit').mouseover(function() {
        showMessage('ȷ���ύ��ô��');
    });
    $('#s').focus(function() {
        showMessage('�������������Ĺؼ����ٰ�Enter(�س�)���Ϳ���������!');
    });
    $('#go-prev').mouseover(function() {
        showMessage('�������Ժ���Ŷ��');
    });
    $('#go-next').mouseover(function() {
        showMessage('��������ǰ��Ŷ��');
    });
    $('#refresh').mouseover(function() {
        showMessage('�����������������ҳŶ��');
    });
    $('#go-home').mouseover(function() {
        showMessage('�����Ϳ��Իص���ҳ����');
    });
    $('#addfav').mouseover(function() {
        showMessage('�������԰Ѵ�ҳ������ǩŶ��');
    });
    $('#nav-two a').mouseover(function() {
        showMessage('�꣬��������Խ����������Ŷ��');
    });
    $('.post-category a').mouseover(function() {
        showMessage('����鿴�˷����µ���������');
    });
    $('.post-heat a').mouseover(function() {
        showMessage('��������ֱ�����������б���.');
    });
    $('#tho-shareto span a').mouseover(function() {
        showMessage('��֪����?�������Է������ĵ�' + $(this).attr('title'));
    });
    $('#switch-to-wap').mouseover(function() {
        showMessage('��������л����ֻ��沩�Ͱ���');
    });
});

jQuery(document).ready(function($) {

    window.setInterval(function() {
        msgs = [$("#hitokoto").text(), weather.c[0], weather.c[2], weather.c[5], weather.c[7]];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 10000);
    },
    35000);
});

jQuery(document).ready(function($) {
    window.setInterval(function() {
        msgs = [$("#hitokoto").text()];
        //if(weather.state)msgs.concat(weather.c);
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
        $(".spig").animate({
            left: document.body.offsetWidth / 2 * (1 + s[i1]),
            top: document.body.offsetheight / 2 * (1 + s[i1])
        },
        {
            duration: 2000,
            complete: showMessage(msgs[i])
        });
    },
    45000);
});

jQuery(document).ready(function($) {
    $("#author").click(function() {
        showMessage("����������մ�����");
        $(".spig").animate({
            top: $("#author").offset().top - 70,
            left: $("#author").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#email").click(function() {
        showMessage("����������䣬��Ȼ������ͷ����ʿ�ˣ�");
        $(".spig").animate({
            top: $("#email").offset().top - 70,
            left: $("#email").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#url").click(function() {

        showMessage("����������ļ������������ȥ�ι۲ιۣ�");
        $(".spig").animate({
            top: $("#url").offset().top - 70,
            left: $("#url").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#comment").click(function() {
        showMessage("������дŶ����Ȼ�ᱻ�����������۵ģ��ҵĹԹ�~");
        $(".spig").animate({
            top: $("#comment").offset().top - 70,
            left: $("#comment").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
});

var spig_top = 50;
jQuery(document).ready(function($) {
    var f = $(".spig").offset().top;
    $(window).scroll(function() {
        $(".spig").animate({
            top: $(window).scrollTop() + f + 300
        },
        {
            queue: false,
            duration: 1000
        });
    });
});

jQuery(document).ready(function($) {
    var stat_click = 0;
    $(".mumu").click(function() {
        if (!ismove) {
            stat_click++;
            if (stat_click <= 4) {
                msgs = [weather.c[0], weather.c[2], weather.c[5], weather.c[7]];
            } else if (stat_click > 4) {
                msgs = ["������û��ѽ��", "���Ѿ�����" + stat_click + "����", "����ѽ��������OH��My ladygaga"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["��ƣ�~�ҷɣ�", "����ѽ��ѽ�ܣ�~~", "�����ң������ˣ���ʲô�����ģ�", "�ǲ����㣬�һ��㲻����ô��", "��Ҫ�����ˣ��һ��������������ģ�", "���ﶯ��ѽ��С����ҧ�㣡"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
            s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
            var i1 = Math.floor(Math.random() * s.length);
            var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
                left: document.body.offsetWidth / 2 * (1 + s[i1]),
                top: document.body.offsetheight / 2 * (1 + s[i1])
            },
            {
                duration: 500,
                complete: showMessage(msgs[i])
            });
        } else {
            ismove = false;
        }
    });
});


function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};

var _move = false;
var ismove = false; //�ƶ����
var _x, _y; //�����ؼ����Ͻǵ����λ��
jQuery(document).ready(function($) {
    $("#spig").mousedown(function(e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"));
    });
    $(document).mousemove(function(e) {
        if (_move) {
            var x = e.pageX - _x;
            var y = e.pageY - _y;
            var wx = $(window).width() - $('#spig').width();
            var dy = $(document).height() - $('#spig').height();
            if (x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({
                    top: y,
                    left: x
                }); //�ؼ���λ��
                ismove = true;
            }
        }
    }).mouseup(function() {
        _move = false;
    });
});

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null;
}
function setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString()
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/"
}
var weather = Array();
weather.s = false;
jQuery(document).ready(function($) {
    var date = new Date();
    weather.d = "" + date.getFullYear() + date.getMonth() + date.getDay();
    weather.ck = getCookie("weather");
    if (weather.ck == null || weather.d != getCookie("wea_tstamp")) {
        $.ajax({
            dataType: "jsonp",
            success: function(data) {
                if (data.success != 1) {
                    return;
                }
                weather.s = true;
                weather.c = Array();
                weather.c[0] = "������" + data.result[0].days + "��" + data.result[0].week;
                weather.c[1] = data.result[0].citynm + "����" + data.result[0].temp_high + "��C��" + data.result[0].temp_low + "��C";
                weather.c[2] = data.result[0].citynm + "����" + data.result[0].weather;
                weather.c[3] = data.result[0].citynm + "����" + data.result[0].winp + "��" + data.result[0].wind;
                weather.c[4] = data.result[0].citynm + "����" + data.result[1].temp_high + "��C��" + data.result[1].temp_low + "��C";
                weather.c[5] = data.result[0].citynm + "����" + data.result[1].weather;
                weather.c[6] = data.result[0].citynm + "����" + data.result[2].temp_high + "��C��" + data.result[2].temp_low + "��C";
                weather.c[7] = data.result[0].citynm + "����" + data.result[2].weather;
                setCookie("wea_tstamp", weather.d, 1);
                setCookie("weather", encodeURI(weather.c.join(",")), 1);
            },
            type: "GET",
            url: "https://myhloliapi.sinaapp.com/weather/?callback=?"
        });
    } else {
        weather.s = true;
        weather.c = decodeURI(weather.ck).split(",");
    }
});