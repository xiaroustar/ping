var china_node_num = 0
  , ct_node_num = 0
  , cu_node_num = 0
  , cm_node_num = 0
  , huadong_node_num = 0
  , huanan_node_num = 0
  , huazhong_node_num = 0
  , huabei_node_num = 0
  , xinan_node_num = 0
  , xibei_node_num = 0
  , dongbei_node_num = 0
  , gangaotai_node_num = 0
  , global_node_num = 0
  , asia_node_num = 0
  , europe_node_num = 0
  , north_node_num = 0
  , south_node_num = 0
  , africa_node_num = 0
  , oceania_node_num = 0
  , china_fast_time = 9999
  , china_slow = 0
  , china_all_time = 0
  , ct_fast = 9999
  , ct_slow = 0
  , ct_all_time = 0
  , cu_fast = 9999
  , cu_slow = 0
  , cu_all_time = 0
  , cm_fast = 9999
  , cm_slow = 0
  , cm_all_time = 0
  , huadong_fast = 9999
  , huadong_slow = 0
  , huadong_all_time = 0
  , huanan_fast = 9999
  , huanan_slow = 0
  , huanan_all_time = 0
  , huazhong_fast = 9999
  , huazhong_slow = 0
  , huazhong_all_time = 0
  , huabei_fast = 9999
  , huabei_slow = 0
  , huabei_all_time = 0
  , xinan_fast = 9999
  , xinan_slow = 0
  , xinan_all_time = 0
  , xibei_fast = 9999
  , xibei_slow = 0
  , xibei_all_time = 0
  , dongbei_fast = 9999
  , dongbei_slow = 0
  , dongbei_all_time = 0
  , gangaotai_fast = 9999
  , gangaotai_slow = 0
  , gangaotai_all_time = 0
  , global_fast = 9999
  , global_slow = 0
  , global_all_time = 0
  , asia_fast = 9999
  , asia_slow = 0
  , asia_all_time = 0
  , europe_fast = 9999
  , europe_slow = 0
  , europe_all_time = 0
  , north_fast = 9999
  , north_slow = 0
  , north_all_time = 0
  , south_fast = 9999
  , south_slow = 0
  , south_all_time = 0
  , africa_fast = 9999
  , africa_slow = 0
  , africa_all_time = 0
  , oceania_fast = 9999
  , oceania_slow = 0
  , oceania_all_time = 0;
function refreshData() {
    var a = china_map.getOption();
    a.series[0].data = mydata;
    china_map.setOption(a)
}
function str_num(a, b) {
    return a.split(b).length - 1
}
function left(a, b) {
    return 0 < b ? a.substring(0, b) : null
}
function right(a, b) {
    return 0 <= a.length - b && 0 <= a.length && a.length - b <= a.length ? a.substring(a.length - b, a.length) : null
}
function load_history() {
    var a = ""
      , b = $.cookie("history")
      , e = $.cookie("top_history")
      , d = history_num()
      , f = top_history_num();
    if (1 == f) {
        var h = e.split("|");
        a = '<li id="li_1"><i class="url-icon del_host feather icon-trash-2" li_id="1" host="' + h[1] + '" title="\u5220\u9664\u8bb0\u5f55"></i><i class="url-icon top_history iconfont icon-zhiding1 text-primary" li_id="1" host="' + h[1] + '" title="\u6536\u85cf\u7f6e\u9876"></i><a href="javascript:" class="input_insert history-url" host="' + h[1] + '">' + h[1] + "</a></li>"
    } else
        1 < f && (h = e.split("|"),
        $.each(h, function(g, c) {
            0 != g && g != h.length - 1 && (a = a + '<li id="li_' + parseInt(g) + '"><i class="url-icon del_host feather icon-trash-2" li_id="' + parseInt(g) + '" host="' + c + '" title="\u5220\u9664\u8bb0\u5f55"></i><i class="url-icon top_history iconfont icon-zhiding1 text-primary" li_id="' + parseInt(g) + '" host="' + c + '" title="\u6536\u85cf\u7f6e\u9876"></i><a href="javascript:" class="input_insert history-url" host="' + c + '">' + c + "</a></li>")
        }));
    if (1 == d) {
        var k = b.split("|");
        a = a + '<li id="li_' + parseInt(f + 1) + '"><i class="url-icon del_host feather icon-trash-2" li_id="' + parseInt(f + 1) + '" host="' + k[1] + '" title="\u5220\u9664\u8bb0\u5f55"></i><i class="url-icon top_history iconfont icon-zhiding1" li_id="' + parseInt(f + 1) + '" host="' + k[1] + '" title="\u6536\u85cf\u7f6e\u9876"></i><a href="javascript:" class="input_insert history-url" host="' + k[1] + '">' + k[1] + "</a></li>"
    } else
        1 < d && (k = b.split("|"),
        $.each(k, function(g, c) {
            0 != g && g != k.length - 1 && (a = a + '<li id="li_' + parseInt(f + g) + '"><i class="url-icon del_host feather icon-trash-2" li_id="' + parseInt(f + g) + '" host="' + c + '" title="\u5220\u9664\u8bb0\u5f55"></i><i class="url-icon top_history iconfont icon-zhiding1" li_id="' + parseInt(f + g) + '" host="' + c + '" title="\u6536\u85cf\u7f6e\u9876"></i><a href="javascript:" class="input_insert history-url" host="' + c + '">' + c + "</a></li>")
        }));
    if (0 < d || 0 < f)
        $("#history_ul").html(a),
        $("#history-list").show()
}
function add_history(a) {
    var b = $.cookie("history")
      , e = $.cookie("top_history")
      , d = history_num()
      , f = top_history_num()
      , h = f + d;
    if (10 <= f || 1 == f && e == "|" + a + "|" || 1 < f && 0 < str_num(e, "|" + a + "|"))
        return !1;
    if (0 < d)
        if (1 == d) {
            if (b == "|" + a + "|")
                return !1;
            8 >= f ? $.cookie("history", "|" + a + b, {
                expires: 1E3,
                path: "/"
            }) : $.cookie("history", "|" + a + "|", {
                expires: 1E3,
                path: "/"
            })
        } else {
            if (0 < str_num(b, "|" + a + "|"))
                return del_history(a),
                $.cookie("history", "|" + a + $.cookie("history"), {
                    expires: 1E3,
                    path: "/"
                }),
                !1;
            if (10 > h)
                return $.cookie("history", "|" + a + $.cookie("history"), {
                    expires: 1E3,
                    path: "/"
                }),
                !1;
            if (10 <= h)
                return b = b.split("|"),
                del_history(b[b.length - 2]),
                $.cookie("history", "|" + a + $.cookie("history"), {
                    expires: 1E3,
                    path: "/"
                }),
                !1
        }
    else
        $.cookie("history", "|" + a + "|", {
            expires: 1E3,
            path: "/"
        })
}
function del_history(a) {
    var b = $.cookie("history");
    0 < str_num(b, "|" + a + "|") && (b = b.replace("|" + a + "|", "|"),
    "|" == b && (b = ""),
    $.cookie("history", b, {
        expires: 1E3,
        path: "/"
    }));
    return !0
}
function del_top_history(a) {
    var b = $.cookie("top_history");
    0 < str_num(b, "|" + a + "|") && (b = b.replace("|" + a + "|", "|"),
    "|" == b && (b = ""),
    $.cookie("top_history", b, {
        expires: 1E3,
        path: "/"
    }))
}
function history_num() {
    var a = $.cookie("history");
    return "" != a && "undefined" != typeof a ? 0 < str_num(a, "|") ? str_num(a, "|") - 1 : 0 : 0
}
function top_history_num() {
    var a = $.cookie("top_history");
    return "" != a && "undefined" != typeof a ? 0 < str_num(a, "|") ? str_num(a, "|") - 1 : 0 : 0
}
function sortByDescNum(a, b) {
    a.sort(function(e, d) {
        return d[b] - e[b]
    });
    return a
}
function filter_ip(a) {
    $(".head_info").hide();
    $(".filter_ip").text(a);
    $(".label_filter_ip").show();
    $("input[name='filter_line']").prop("checked", !1);
    $(".node_tr").each(function() {
        $("#real_ip_" + $(this).attr("node")).text() == a ? $(this).show() : $(this).hide()
    })
}
$("input[name='filter_line']").click(function() {
    $(".head_info").hide();
    $(".label_filter_ip").hide();
    var a = $(this).val();
    $(".node_tr").each(function() {
        $(this).attr("node_type") == a && "0" == $(this).attr("offline") || "all" == a && "0" == $(this).attr("offline") ? $(this).show() : $(this).hide();
        "6" == a && "true" == $(this).attr("time_out") && "0" == $(this).attr("offline") && $(this).show()
    })
});
function ipv4_list_sh() {
    0 == $(".ipv4_list").is(":hidden") ? ($(".ipv4_list").hide(),
    $(".show_hide").html('\u5c55\u5f00<i class="feather icon-chevrons-down"></i>')) : ($(".ipv4_list").show(),
    $(".show_hide").html('\u6536\u8d77<i class="feather icon-chevrons-up"></i>'))
}
$(document).on("click", ".show_head_button", function() {
    $("#head_show_" + $(this).attr("node")).is(":hidden") ? ($("#head_show_" + $(this).attr("node")).show(300),
    $(this).text("\u6536\u8d77")) : ($("#head_show_" + $(this).attr("node")).hide(),
    $(this).text("\u67e5\u770b"))
});
$("#ad_options").click(function() {
    "block" == $(".advanced").css("display") ? ($(".advanced").hide(30),
    $(".icon-chevrons-down").css("transform", "unset")) : ($(".advanced").show(30),
    $(".icon-chevrons-down").css("transform", "rotate(-180deg)"))
});
function http_test(a) {
    var b = a.node_id;
    complete_node_num += 1;
    if (complete_node_num > check_node_num)
        return !1;
    complete_node_num == check_node_num && $(".checking").hide();
    var e = '<div class="progress-bar" role="progressbar" style="width:' + GetPercent(complete_node_num, check_node_num) + ';" aria-valuenow="' + complete_node_num + '" aria-valuemin="0" aria-valuemax="' + check_node_num + '">' + GetPercent(complete_node_num, check_node_num) + "</div>";
    $("#complete_progress").html(e);
    if (isip(a.ip)) {
        $("#real_ip_" + b).text(a.ip);
        $("#address_" + b).text(a.address);
        $("#address_" + b).attr("title", a.address);
        $("#hover_button_" + b).attr("style", "");
        ip = a.ip;
        var d = parseInt(a.http_code);
        "0" != d && "0.0.0.0" != ip ? ($("#http_code_" + b).text(d),
        "500" != d && "502" != d || $("#http_code_" + b).css("color", "#e61610")) : ($("#http_code_" + b).html("<font color='#e61610'>\u5931\u8d25</font>"),
        $(".node_tr[node='" + b + "']").attr("time_out", "true"),
        time_out_num += 1,
        staStatusRat_num = (check_node_num-time_out_num)*100/check_node_num,
        $(".time_out").text(time_out_num),
        $(".time_out").show(),
        $(".staStatusRat").text("节点连通率: " + staStatusRat_num.toFixed(2) +"%"),
        $(".staStatusRat").show()
        
        );
        d = parseFloat(a.all_time);
        if (.7 >= d)
            var f = "#24aa1d";
        else
            .501 < d && 1 >= d ? f = "#42dd3f" : 1.501 < d && 3 >= d ? f = "#968c43" : 3.001 < d && 10 >= d ? f = "#f69833" : 10 < d && (f = "#e61610");
        $("#all_time_" + b).html("<font color='" + f + "'>" + d + "s</font>");
        f = a.dns_time;
        "0.000" != f && $("#dns_time_" + b).text(f + "s");
        f = a.connect_time;
        "0.00" != f ? $("#connect_time_" + b).text(f + "s") : $("#connect_time_" + b).text("\u5931\u8d25");
        f = a.ssl_time;
        "0.000" != f && $("#ssl_time_" + b).text(f + "s");
        f = a.redirect;
        e = a.redirect_time;
        "0" != f && $("#redirect_" + b).text(f + "\u6b21 (\u8017\u65f6: " + e + "s)");
        "0" != a.http_code && (f = left(a.head, a.head.length - 8),
        $(".node_tr[node='" + b + "']").after('<tr class="head_info" id="head_show_' + b + '" style="display:none;background-color: #f9fbff"><td class="text-left head_view" colspan="11">' + f + "</td></tr>"),
        $("#head_" + b).html('<a class="show_head_button" node="' + b + '" href="javascript:;">\u67e5\u770b</a>'))
    } else
        $("#real_ip_" + b).html('<span class="text-danger">\u89e3\u6790\u5931\u8d25</span>'),
        $(".node_tr[node='" + b + "']").attr("time_out", "true"),
        time_out_num += 1,
        staStatusRat_num = (check_node_num-time_out_num)*100/check_node_num,
        $(".time_out").text(time_out_num),
        $(".staStatusRat").text("节点连通率: " + staStatusRat_num.toFixed(2) +"%"),
        $(".staStatusRat").show(),
        $(".time_out").show();
    ipv4_list_arr.push(a);
    var h = 100 / ipv4_list_arr.length
      , k = {};
    ipv4_list_arr.forEach(function(l) {
        k[l.ip] = k[l.ip] || [];
        l.pre = h;
        k[l.ip].push(l)
    });
    var g = [];
    Object.keys(k).forEach(function(l) {
        var m = {};
        m.ip = l;
        m.pre = (h * k[l].length).toFixed(2);
        g.push(m)
    });
    g = sortByDescNum(g, "pre");
    $(".ip_list").html("");
    $(".copy_ip").attr("data-clipboard-text", "");
    for (b = 0; b < g.length; b++)
        f = isip(g[b].ip) ? g[b].ip : "\u89e3\u6790\u5931\u8d25",
        $(".ip_list").append(' <a title="\u70b9\u51fb\u7b5b\u9009" class="pointer noselect" onclick="filter_ip(\'' + f + '\')"><li><span class="ml-3">' + f + '</span><span class="text-primary float-right mr-3">' + g[b].pre + "%</span></li></a>"),
        "" == $(".copy_ip").attr("data-clipboard-text") ? $(".copy_ip").attr("data-clipboard-text", f) : $(".copy_ip").attr("data-clipboard-text", $(".copy_ip").attr("data-clipboard-text") + "\n" + f);
    $("#ipv4_num").text(g.length);
    staStatusRat_num = (check_node_num-time_out_num)*100/check_node_num;
    $(".staStatusRat").text("节点连通率: " + staStatusRat_num.toFixed(2) +"%");
    $(".staStatusRat").show();
    if (99 != a.province)
        if ("0" != a.http_code && china_fast[a.province] > a.all_time)
            china_fast[a.province] = a.all_time;
        else if ("0" == a.http_code && "9999" == china_fast[a.province] || 0 == isip(a.ip))
            china_fast[a.province] = 15;
    mydata = [];
    for (b = 0; 34 > b; b++) {
        if (0 == b)
            var c = {
                name: "\u5317\u4eac",
                value: china_fast[0]
            };
        else
            1 == b ? c = {
                name: "\u5929\u6d25",
                value: china_fast[1]
            } : 2 == b ? c = {
                name: "\u4e0a\u6d77",
                value: china_fast[2]
            } : 3 == b ? c = {
                name: "\u91cd\u5e86",
                value: china_fast[3]
            } : 4 == b ? c = {
                name: "\u6cb3\u5317",
                value: china_fast[4]
            } : 5 == b ? c = {
                name: "\u6cb3\u5357",
                value: china_fast[5]
            } : 6 == b ? c = {
                name: "\u4e91\u5357",
                value: china_fast[6]
            } : 7 == b ? c = {
                name: "\u8fbd\u5b81",
                value: china_fast[7]
            } : 8 == b ? c = {
                name: "\u9ed1\u9f99\u6c5f",
                value: china_fast[8]
            } : 9 == b ? c = {
                name: "\u6e56\u5357",
                value: china_fast[9]
            } : 10 == b ? c = {
                name: "\u5b89\u5fbd",
                value: china_fast[10]
            } : 11 == b ? c = {
                name: "\u5c71\u4e1c",
                value: china_fast[11]
            } : 12 == b ? c = {
                name: "\u65b0\u7586",
                value: china_fast[12]
            } : 13 == b ? c = {
                name: "\u6c5f\u82cf",
                value: china_fast[13]
            } : 14 == b ? c = {
                name: "\u6d59\u6c5f",
                value: china_fast[14]
            } : 15 == b ? c = {
                name: "\u6c5f\u897f",
                value: china_fast[15]
            } : 16 == b ? c = {
                name: "\u6e56\u5317",
                value: china_fast[16]
            } : 17 == b ? c = {
                name: "\u5e7f\u897f",
                value: china_fast[17]
            } : 18 == b ? c = {
                name: "\u7518\u8083",
                value: china_fast[18]
            } : 19 == b ? c = {
                name: "\u5c71\u897f",
                value: china_fast[19]
            } : 20 == b ? c = {
                name: "\u5185\u8499\u53e4",
                value: china_fast[20]
            } : 21 == b ? c = {
                name: "\u9655\u897f",
                value: china_fast[21]
            } : 22 == b ? c = {
                name: "\u5409\u6797",
                value: china_fast[22]
            } : 23 == b ? c = {
                name: "\u798f\u5efa",
                value: china_fast[23]
            } : 24 == b ? c = {
                name: "\u8d35\u5dde",
                value: china_fast[24]
            } : 25 == b ? c = {
                name: "\u5e7f\u4e1c",
                value: china_fast[25]
            } : 26 == b ? c = {
                name: "\u9752\u6d77",
                value: china_fast[26]
            } : 27 == b ? c = {
                name: "\u897f\u85cf",
                value: china_fast[27]
            } : 28 == b ? c = {
                name: "\u56db\u5ddd",
                value: china_fast[28]
            } : 29 == b ? c = {
                name: "\u5b81\u590f",
                value: china_fast[29]
            } : 30 == b ? c = {
                name: "\u6d77\u5357",
                value: china_fast[30]
            } : 31 == b ? c = {
                name: "\u53f0\u6e7e",
                value: china_fast[31]
            } : 32 == b ? c = {
                name: "\u9999\u6e2f",
                value: china_fast[32]
            } : 33 == b && (c = {
                name: "\u6fb3\u95e8",
                value: china_fast[33]
            });
        9999 != china_fast[b] && (mydata[mydata.length] = c)
    }
    refreshData();
    if (0 == isip(a.ip))
        return !1;
    99 != a.province && "0" != a.http_code && (china_node_num += 1,
    china_all_time += d,
    china_fast_time > d && (china_fast_time = d,
    $("#china_fast").text(a.name + " " + d + "s")),
    china_slow < d && (china_slow = d,
    $("#china_slow").text(a.name + " " + d + "s")),
    c = china_all_time / china_node_num,
    $("#china_avg").text(c.toFixed(3) + "s"));
    "1" == a.line && "0" != a.http_code && (ct_node_num += 1,
    ct_all_time += d,
    ct_fast > a.all_time && (ct_fast = a.all_time,
    $("#ct_fast").text(a.name + " " + a.all_time + "s")),
    ct_slow < a.all_time && (ct_slow = a.all_time,
    $("#ct_slow").text(a.name + " " + a.all_time + "s")),
    c = ct_all_time / ct_node_num,
    $("#ct_avg").text(c.toFixed(3) + "s"));
    "2" == a.line && "0" != a.http_code && (cu_node_num += 1,
    cu_all_time += d,
    cu_fast > a.all_time && (cu_fast = a.all_time,
    $("#cu_fast").text(a.name + " " + a.all_time + "s")),
    cu_slow < a.all_time && (cu_slow = a.all_time,
    $("#cu_slow").text(a.name + " " + a.all_time + "s")),
    c = cu_all_time / cu_node_num,
    $("#cu_avg").text(c.toFixed(3) + "s"));
    "3" == a.line && "0" != a.http_code && (cm_node_num += 1,
    cm_all_time += d,
    cm_fast > a.all_time && (cm_fast = a.all_time,
    $("#cm_fast").text(a.name + " " + a.all_time + "s")),
    cm_slow < a.all_time && (cm_slow = a.all_time,
    $("#cm_slow").text(a.name + " " + a.all_time + "s")),
    c = cm_all_time / cm_node_num,
    $("#cm_avg").text(c.toFixed(3) + "s"));
    "1" == a.region && "0" != a.http_code && (huadong_node_num += 1,
    huadong_all_time += d,
    huadong_fast > a.all_time && (huadong_fast = a.all_time,
    $("#huadong_fast").text(a.name + " " + a.all_time + "s")),
    huadong_slow < a.all_time && (huadong_slow = a.all_time,
    $("#huadong_slow").text(a.name + " " + a.all_time + "s")),
    c = huadong_all_time / huadong_node_num,
    $("#huadong_avg").text(c.toFixed(3) + "s"));
    "2" == a.region && "0" != a.http_code && (huanan_node_num += 1,
    huanan_all_time += d,
    huanan_fast > a.all_time && (huanan_fast = a.all_time,
    $("#huanan_fast").text(a.name + " " + a.all_time + "s")),
    huanan_slow < a.all_time && (huanan_slow = a.all_time,
    $("#huanan_slow").text(a.name + " " + a.all_time + "s")),
    c = huanan_all_time / huanan_node_num,
    $("#huanan_avg").text(c.toFixed(3) + "s"));
    "3" == a.region && "0" != a.http_code && (huazhong_node_num += 1,
    huazhong_all_time += d,
    huazhong_fast > a.all_time && (huazhong_fast = a.all_time,
    $("#huazhong_fast").text(a.name + " " + a.all_time + "s")),
    huazhong_slow < a.all_time && (huazhong_slow = a.all_time,
    $("#huazhong_slow").text(a.name + " " + a.all_time + "s")),
    c = huazhong_all_time / huazhong_node_num,
    $("#huazhong_avg").text(c.toFixed(3) + "s"));
    "4" == a.region && "0" != a.http_code && (huabei_node_num += 1,
    huabei_all_time += d,
    huabei_fast > a.all_time && (huabei_fast = a.all_time,
    $("#huabei_fast").text(a.name + " " + a.all_time + "s")),
    huabei_slow < a.all_time && (huabei_slow = a.all_time,
    $("#huabei_slow").text(a.name + " " + a.all_time + "s")),
    c = huabei_all_time / huabei_node_num,
    $("#huabei_avg").text(c.toFixed(3) + "s"));
    "5" == a.region && "0" != a.http_code && (xinan_node_num += 1,
    xinan_all_time += d,
    xinan_fast > a.all_time && (xinan_fast = a.all_time,
    $("#xinan_fast").text(a.name + " " + a.all_time + "s")),
    xinan_slow < a.all_time && (xinan_slow = a.all_time,
    $("#xinan_slow").text(a.name + " " + a.all_time + "s")),
    c = xinan_all_time / xinan_node_num,
    $("#xinan_avg").text(c.toFixed(3) + "s"));
    "6" == a.region && "0" != a.http_code && (xibei_node_num += 1,
    xibei_all_time += d,
    xibei_fast > a.all_time && (xibei_fast = a.all_time,
    $("#xibei_fast").text(a.name + " " + a.all_time + "s")),
    xibei_slow < a.all_time && (xibei_slow = a.all_time,
    $("#xibei_slow").text(a.name + " " + a.all_time + "s")),
    c = xibei_all_time / xibei_node_num,
    $("#xibei_avg").text(c.toFixed(3) + "s"));
    "7" == a.region && "0" != a.http_code && (dongbei_node_num += 1,
    dongbei_all_time += d,
    dongbei_fast > a.all_time && (dongbei_fast = a.all_time,
    $("#dongbei_fast").text(a.name + " " + a.all_time + "s")),
    dongbei_slow < a.all_time && (dongbei_slow = a.all_time,
    $("#dongbei_slow").text(a.name + " " + a.all_time + "s")),
    c = dongbei_all_time / dongbei_node_num,
    $("#dongbei_avg").text(c.toFixed(3) + "s"));
    "8" == a.region && "0" != a.http_code && (gangaotai_node_num += 1,
    gangaotai_all_time += d,
    gangaotai_fast > a.all_time && (gangaotai_fast = a.all_time,
    $("#gangaotai_fast").text(a.name + " " + a.all_time + "s")),
    gangaotai_slow < a.all_time && (gangaotai_slow = a.all_time,
    $("#gangaotai_slow").text(a.name + " " + a.all_time + "s")),
    c = gangaotai_all_time / gangaotai_node_num,
    $("#gangaotai_avg").text(c.toFixed(3) + "s"));
    "99" == a.province && "-1" != a.http_code && (global_node_num += 1,
    global_all_time += d,
    global_fast > a.all_time && (global_fast = a.all_time,
    $("#global_fast").text(a.name + " " + a.all_time + "s")),
    global_slow < a.all_time && (global_slow = a.all_time,
    $("#global_slow").text(a.name + " " + a.all_time + "s")),
    c = global_all_time / global_node_num,
    $("#global_avg").text(c.toFixed(3) + "s"));
    "9" == a.region && "0" != a.http_code && (asia_node_num += 1,
    asia_all_time += d,
    asia_fast > a.all_time && (asia_fast = a.all_time,
    $("#asia_fast").text(a.name + " " + a.all_time + "s")),
    asia_slow < a.all_time && (asia_slow = a.all_time,
    $("#asia_slow").text(a.name + " " + a.all_time + "s")),
    c = asia_all_time / asia_node_num,
    $("#asia_avg").text(c.toFixed(3) + "s"));
    "10" == a.region && "0" != a.http_code && (europe_node_num += 1,
    europe_all_time += d,
    europe_fast > a.all_time && (europe_fast = a.all_time,
    $("#europe_fast").text(a.name + " " + a.all_time + "s")),
    europe_slow < a.all_time && (europe_slow = a.all_time,
    $("#europe_slow").text(a.name + " " + a.all_time + "s")),
    c = europe_all_time / europe_node_num,
    $("#europe_avg").text(c.toFixed(3) + "s"));
    "11" == a.region && "0" != a.http_code && (north_node_num += 1,
    north_all_time += d,
    north_fast > a.all_time && (north_fast = a.all_time,
    $("#north_fast").text(a.name + " " + a.all_time + "s")),
    north_slow < a.all_time && (north_slow = a.all_time,
    $("#north_slow").text(a.name + " " + a.all_time + "s")),
    c = north_all_time / north_node_num,
    $("#north_avg").text(c.toFixed(3) + "s"));
    "12" == a.region && "0" != a.http_code && (south_node_num += 1,
    south_all_time += d,
    south_fast > a.all_time && (south_fast = a.all_time,
    $("#south_fast").text(a.name + " " + a.all_time + "s")),
    south_slow < a.all_time && (south_slow = a.all_time,
    $("#south_slow").text(a.name + " " + a.all_time + "s")),
    c = south_all_time / south_node_num,
    $("#south_avg").text(c.toFixed(3) + "s"));
    "13" == a.region && "0" != a.http_code && (africa_node_num += 1,
    africa_all_time += d,
    africa_fast > a.all_time && (africa_fast = a.all_time,
    $("#africa_fast").text(a.name + " " + a.all_time + "s")),
    africa_slow < a.all_time && (africa_slow = a.all_time,
    $("#africa_slow").text(a.name + " " + a.all_time + "s")),
    c = africa_all_time / africa_node_num,
    $("#africa_avg").text(c.toFixed(3) + "s"));
    "14" == a.region && "0" != a.http_code && (oceania_node_num += 1,
    oceania_all_time += d,
    oceania_fast > a.all_time && (oceania_fast = a.all_time,
    $("#oceania_fast").text(a.name + " " + a.all_time + "s")),
    oceania_slow < a.all_time && (oceania_slow = a.all_time,
    $("#oceania_slow").text(a.name + " " + a.all_time + "s")),
    a = oceania_all_time / oceania_node_num,
    $("#oceania_avg").text(a.toFixed(3) + "s"))
}
function GetPercent(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return isNaN(a) || isNaN(b) ? "-" : 0 >= b ? "0%" : Math.round(a / b * 1E4) / 100 + "%"
}
function check_complete() {
    var a = !0;
    $.each($("tr.node_tr"), function() {
        var b = $(this).attr("node");
        if ("100" != $("#send_" + b).text())
            return a = !1
    });
    return a
}
function update_canvas(a, b, e) {
    a = document.getElementById("canvas_" + a).getContext("2d");
    --b;
    a.fillStyle = 350 <= e ? "orange" : "-1" == e ? "red" : "green";
    e = "-1" == e ? 20 : parseInt(e / 15);
    1 > e && (e = 1);
    a.fillRect(2 * b, 20 - e, 2, e)
}
function check_post(a, b) {
    var e = document.createElement("form");
    e.action = a;
    e.method = "post";
    e.style.display = "none";
    for (var d in b)
        a = document.createElement("textarea"),
        a.name = d,
        a.value = b[d],
        e.appendChild(a);
    document.body.appendChild(e);
    e.submit();
    return e
}
function check_post_blank(a, b) {
    var e = document.createElement("form");
    e.action = a;
    e.method = "post";
    e.target = Math.random() + "_blank";
    e.style.display = "none";
    for (var d in b)
        a = document.createElement("textarea"),
        a.name = d,
        a.value = b[d],
        e.appendChild(a);
    document.body.appendChild(e);
    e.submit();
    return e
}
function check_line() {
    var a = "";
    $("input:checkbox:not(#checkAll):checked").each(function() {
        a += $(this).val() + ","
    });
    return "1,2,3,4,5," == a ? "" : a
}
function ping_button(a) {
    a = $("#real_ip_" + a).text();
    check_post_blank("/ping/?addr=" + a, {
        button_click: "yes"
    })
}
function tcping_button(a) {
    a = $("#real_ip_" + a).text();
    check_post_blank("/tcping/?addr=" + a + ":" + port, {
        button_click: "yes"
    })
}
function tracert_button(a) {
    var b = $("#real_ip_" + a).text();
    check_post_blank("/traceroute/" + b, {
        node: a
    })
}
function http_button(a) {
    a = $("#real_ip_" + a).text();
    check_post_blank("/http/", {
        host: a + ":" + port
    })
}
function feedback_button(a) {
    a = $("#real_ip_" + a).text();
    check_post_blank("/feedback.php", {
        ip: a
    })
}
function check_form() {
    $(".advanced").hide();
    $(".icon-chevrons-down").css("transform", "unset");
    var a = $("#host").val().trim()
      , b = a;
    b = b.split("/");
    b[2] ? b = b[2] : (b = a.replace(/\//g, ""),
    b = b.replace(/\u3002/g, "."),
    b = b.replace(/\\/g, ""),
    b = b.replace(/\uff1a/g, ":"));
    var e = check_line()
      , d = $("#ipv4").val()
      , f = $("input[name='method']:checked").val()
      , h = $("#referer").val()
      , k = $("#ua").val()
      , g = $("#cookies").val();
    "" != d || "post" == f || "" != h || "" != k || "" != g ? layer.confirm("1\u3001\u9ad8\u7ea7\u9009\u9879\u5df2\u8bbe\u7f6e\uff0c\u5728\u672c\u9875\u7684\u4e0b\u6b21\u6d4b\u8bd5\u4f1a\u6cbf\u7528<br>2\u3001\u9700\u8981\u5173\u95ed\u9ad8\u7ea7\u9009\u9879\u8bf7\u91cd\u65b0\u6253\u5f00\u4e00\u4e2a\u7a97\u53e3\u5373\u53ef", {
        title: !1,
        anim: -1,
        isOutAnim: !1,
        btn: ["\u5f00\u59cb\u6d4b\u8bd5"],
        btnAlign: "c"
    }, function() {
        check_post("/http/", {
            line: e,
            host: a,
            host_s: b,
            ipv4: d,
            method: f,
            referer: h,
            ua: k,
            cookies: g
        })
    }) : check_post("/http/", {
        line: e,
        host: a,
        host_s: b,
        ipv4: d,
        method: f,
        referer: h,
        ua: k,
        cookies: g
    })
}
function down_screenshot(a) {
    ad_hide();
    setTimeout(function() {
        $("#takeScreenshot").html('<div class="spinner-grow spinner-grow-sm" role="status"></div> \u6b63\u5728\u751f\u6210 \u00b7\u00b7\u00b7');
        $("#takeScreenshot").attr("disabled", !0);
        domtoimage.toBlob(document.getElementById("screenshots")).then(function(b) {
            window.saveAs(b, a + "_\u591a\u5730\u533a\u591a\u7ebf\u8defHTTP\u6d4b\u901f.png");
            unmosaic();
            $("#takeScreenshot").html('<i class="feather icon-camera"></i> \u5b8c\u6574\u622a\u56fe');
            $("#takeScreenshot").attr("disabled", !1)
        })
    }, 10)
}
function copy_screenshot_tip() {
    layer.confirm('\u70b9\u51fb\u5f00\u59cb\u540e\uff0c\u4e0d\u8981\u64cd\u4f5c\u9f20\u6807\uff0c\u4fdd\u6301\u5f53\u524d\u9875\u9762\u83b7\u7126\u72b6\u6001\uff01<br><div class="mt-2 text-muted">1\u3001Firefox \u9700\u624b\u52a8\u5f00\u542f\u590d\u5236\u56fe\u7247\u529f\u80fd > <a class="text-primary" target="view_open_blank" href="/article/content-278.html">\u67e5\u770b\u6559\u7a0b</a><br>2\u3001\u5c11\u6570\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u590d\u5236\u56fe\u7247\uff0c\u8bf7\u9009\u62e9\u4e0b\u8f7d\u56fe\u7247</div>', {
        title: "",
        anim: -1,
        isOutAnim: !1,
        btnAlign: "c",
        btn: ['<i class="feather icon-play"></i> \u5f00\u59cb\u590d\u5236\u622a\u56fe'],
        yes: function() {
            $(".layui-layer-btn0").text("\u6b63\u5728\u751f\u6210\u622a\u56fe \u00b7\u00b7\u00b7");
            $(".layui-layer-btn0").attr("disabled", !0);
            $(".layui-layer-btn0").css("pointer-events", "none");
            $(".layui-layer-btn0").css("background-color", "#bbb");
            $(".layui-layer-btn0").css("border-color", "#bbb");
            copy_screenshot()
        },
        cancel: function() {
            unmosaic()
        }
    })
}
function copy_screenshot() {
    ad_hide();
    setTimeout(function() {
        $("#takeScreenshot").html('<div class="spinner-grow spinner-grow-sm" role="status"></div> \u6b63\u5728\u751f\u6210 \u00b7\u00b7\u00b7');
        $("#takeScreenshot").attr("disabled", !0);
        var a = document.getElementById("screenshots");
        domtoimage.toPng(a).then(function(b) {
            get_img(b.replace(/data:image\/png;base64,/g, ""))
        }).catch(function(b) {
            console.error("oops, something went wrong!", b)
        })
    }, 10)
}
function get_img(a) {
    try {
        var b = convertBase64ToBlob(a, "image/png")
          , e = new ClipboardItem({
            "image/png": b
        });
        navigator.clipboard.write([e]);
        $("#takeScreenshot").html('<i class="feather icon-camera"></i> \u5b8c\u6574\u622a\u56fe');
        $("#takeScreenshot").attr("disabled", !1);
        layer.msg('<i class="fas fa-check-circle text-success"></i> \u622a\u56fe\u590d\u5236\u6210\u529f\uff0c\u53ef\u4ee5\u7c98\u8d34\u5230\uff31\uff31\u3001Word\u7b49\u7f16\u8f91\u5668');
        unmosaic()
    } catch (d) {
        console.log(d)
    }
}
function convertBase64ToBlob(a, b) {
    a = window.atob(a);
    for (var e = new ArrayBuffer(a.length), d = new Uint8Array(e), f = 0; f < a.length; f++)
        d[f] = a.charCodeAt(f);
    return new Blob([e],{
        type: b
    })
}
function ad_hide() {
    $(".gg_link").remove();
    $(".address-hidden").css("max-width", "200px");
    $(".hover-button").addClass("d-none")
}
function mosaic() {
    $("input[name='mosaic']:checked").each(function(a, b) {
        "ip" == $(this).val() ? ($(".real_ip").addClass("mosaic"),
        ipv4_list_sh()) : "address" == $(this).val() && $(".ip_address").addClass("mosaic")
    })
}
function unmosaic() {
    $(".real_ip").removeClass("mosaic");
    $(".ip_address").removeClass("mosaic");
    $(".hover-button").removeClass("d-none")
}
function select_screenshot(a) {
    layer.open({
        type: 1,
        anim: -1,
        title: "",
        isOutAnim: !1,
        closeBtn: 2,
        area: "350px",
        content: '<div class="p-4" style="background-color: #ecf0f5;"> <div class="text-center"> <div style="border: 1px dashed #4680ff;padding: 10px 0;height: 75px;display: flex;"><i class="fas fa-chess-board" style="font-size: 46px;padding: 3px 10px;color: #7c9eff;width: 70px;height: 70px;"></i> <div><div><i class="fas fa-info-circle" style="font-size:15px;"></i>  \u54ea\u4e9b\u5730\u65b9\u9700\u8981\u6253\u7801? (\u53ef\u9009)</div> <div class="text-center mt-2" style="display: inline-flex;"><label class="custom-control custom-checkbox done-task"> <input type="checkbox" name="mosaic" value="ip" class="custom-control-input"> <span class="custom-control-label text-secondary" style=" "> \u57df\u540d\u6216IP</span> </label> <label class="ml-3 custom-control custom-checkbox done-task"> <input type="checkbox" name="mosaic" value="address" class="custom-control-input"> <span class="custom-control-label text-secondary"> \u5730\u7406\u4f4d\u7f6e</span> </label> </div></div></div> <div class="mt-3" style="display: inline-flex;"><button class="btn btn-primary btn-sm" onclick="mosaic();layer.closeAll();down_screenshot(\'' + a + '\')" style="display: inline-block;"><i class="feather icon-download"></i> \u4e0b\u8f7d\u622a\u56fe</button> <button class="btn btn-primary btn-sm ml-4" onclick="mosaic();layer.closeAll();copy_screenshot_tip();" style=" display: inline-block; "><i class="feather icon-copy"></i> \u590d\u5236\u622a\u56fe</button> </div> </div>   </div>'
    })
}
function isip(a) {
    return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(a)
}
$("#takeScreenshot").click(function() {
    $(".advanced").hide();
    $(".icon-chevrons-down").css("transform", "unset")
});
$(function() {
    var a;
    $("#takeScreenshot").mouseover(function() {
        a = layer.tips("1\u3001\u5c06\u5173\u952e\u6570\u636e\u622a\u56fe\u5e76\u540c\u65f6\u53bb\u9664\u5e7f\u544a<br>2\u3001\u9996\u6b21\u751f\u6210\u622a\u56fe\u53ef\u80fd\u9700\u8981\u8f83\u957f\u65f6\u95f4", "#takeScreenshot", {
            tips: [1, "#6c757d"],
            time: 0,
            anim: -1,
            tipsMore: !0,
            isOutAnim: !1
        })
    });
    $("#takeScreenshot").mouseout(function() {
        layer.close(a)
    });
    $("#host").bind("keyup", function(b) {
        "13" == b.keyCode && check_form()
    });
    $("#host").click(function() {
        load_history()
    });
    $("#host").blur(function() {
        $("#history-list").hide()
    });
    $("#host").bind("input propertychange", function() {
        $("#history-list").hide()
    });
    $("body").on("mousedown", ".input_insert", function(b) {
        if ("1" != b.which)
            return !1;
        $("#host").val($(this).attr("host"));
        $("#host").focus()
    });
    $("body").on("mousedown", ".url-icon.del_host", function(b) {
        if ("1" != b.which)
            return !1;
        b = $(this).attr("host");
        var e = $(this).attr("li_id");
        del_history(b);
        del_top_history(b);
        $("#li_" + e).remove();
        return !1
    });
    $("body").on("mousedown", ".url-icon.top_history", function(b) {
        if ("1" != b.which)
            return !1;
        $(this).attr("li_id");
        var e = $(this).attr("host");
        b = $.cookie("history");
        var d = $.cookie("top_history")
          , f = history_num();
        top_history_num();
        if ("" != d && "undefined" != typeof d)
            if (2 == str_num(d, "|"))
                d == "|" + e + "|" ? ($.cookie("top_history", "", {
                    expires: 1E3,
                    path: "/"
                }),
                del_top_history(e),
                add_history(e)) : ($.cookie("top_history", "|" + e + d, {
                    expires: 1E3,
                    path: "/"
                }),
                del_history(e));
            else {
                var h = d.split("|");
                1 < f && b.split("|");
                var k = !1;
                $.each(h, function(g, c) {
                    c == e && (k = !0)
                });
                if (k)
                    return del_top_history(e),
                    add_history(e),
                    load_history(),
                    !1;
                12 > h.length ? ($.cookie("top_history", "|" + e + d, {
                    expires: 1E3,
                    path: "/"
                }),
                del_history(e)) : del_top_history(h[10])
            }
        else
            $.cookie("top_history", "|" + e + "|", {
                expires: 1E3,
                path: "/"
            }),
            del_history(e);
        load_history();
        return !1
    })
});
