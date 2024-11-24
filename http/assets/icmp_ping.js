var china_node_num = 0,
    ct_node_num = 0,
    cu_node_num = 0,
    cm_node_num = 0,
    huadong_node_num = 0,
    huanan_node_num = 0,
    huazhong_node_num = 0,
    huabei_node_num = 0,
    xinan_node_num = 0,
    xibei_node_num = 0,
    dongbei_node_num = 0,
    gangaotai_node_num = 0,
    global_node_num = 0,
    asia_node_num = 0,
    europe_node_num = 0,
    north_node_num = 0,
    south_node_num = 0,
    africa_node_num = 0,
    oceania_node_num = 0,
    china_fastping = 9999,
    china_slow = 0,
    china_allping = 0,
    ct_fast = 9999,
    ct_slow = 0,
    ct_allping = 0,
    cu_fast = 9999,
    cu_slow = 0,
    cu_allping = 0,
    cm_fast = 9999,
    cm_slow = 0,
    cm_allping = 0,
    huadong_fast = 9999,
    huadong_slow = 0,
    huadong_allping = 0,
    huanan_fast = 9999,
    huanan_slow = 0,
    huanan_allping = 0,
    huazhong_fast = 9999,
    huazhong_slow = 0,
    huazhong_allping = 0,
    huabei_fast = 9999,
    huabei_slow = 0,
    huabei_allping = 0,
    xinan_fast = 9999,
    xinan_slow = 0,
    xinan_allping = 0,
    xibei_fast = 9999,
    xibei_slow = 0,
    xibei_allping = 0,
    dongbei_fast = 9999,
    dongbei_slow = 0,
    dongbei_allping = 0,
    gangaotai_fast = 9999,
    gangaotai_slow = 0,
    gangaotai_allping = 0,
    global_fast = 9999,
    global_slow = 0,
    global_allping = 0,
    asia_fast = 9999,
    asia_slow = 0,
    asia_allping = 0,
    europe_fast = 9999,
    europe_slow = 0,
    europe_allping = 0,
    north_fast = 9999,
    north_slow = 0,
    north_allping = 0,
    south_fast = 9999,
    south_slow = 0,
    south_allping = 0,
    africa_fast = 9999,
    africa_slow = 0,
    africa_allping = 0,
    oceania_fast = 9999,
    oceania_slow = 0,
    oceania_allping = 0;

function change_mode(a) {
    0 === a ? ($.cookie("ping_mode", "many", {
            expires: 1E3,
            path: "/"
        }),
        $("#ping_mode_button").html('<i class="iconfont icon-xunhuanbofang"></i> \u6301\u7eed\u6d4b\u8bd5')) : 1 === a && ($.cookie("ping_mode", "once", {
            expires: 1E3,
            path: "/"
        }),
        $("#ping_mode_button").html('<i class="iconfont icon-danquxunhuan"></i> \u5355\u6b21\u6d4b\u8bd5'))
}

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
    var a = "",
        b = $.cookie("history"),
        c = $.cookie("top_history"),
        e = history_num(),
        f = top_history_num();
    if (1 == f) {
        var g = c.split("|");
        a = '<li id="li_1"><i class="url-icon del_host feather icon-trash-2" li_id="1" host="' + g[1] + '" title="\u5220\u9664\u8bb0\u5f55"></i><i class="url-icon top_history iconfont icon-zhiding1 text-primary" li_id="1" host="' + g[1] + '" title="\u6536\u85cf\u7f6e\u9876"></i><a href="javascript:" class="input_insert history-url" host="' + g[1] + '">' + g[1] + "</a></li>"
    } else
        1 < f && (g = c.split("|"),
            $.each(g, function(h, k) {
                0 != h && h != g.length - 1 && (a = a + '<li id="li_' + parseInt(h) + '"><i class="url-icon del_host feather icon-trash-2" li_id="' + parseInt(h) + '" host="' + k + '" title="\u5220\u9664\u8bb0\u5f55"></i><i class="url-icon top_history iconfont icon-zhiding1 text-primary" li_id="' + parseInt(h) + '" host="' + k + '" title="\u6536\u85cf\u7f6e\u9876"></i><a href="javascript:" class="input_insert history-url" host="' + k + '">' + k + "</a></li>")
            }));
    if (1 == e) {
        var d = b.split("|");
        a = a + '<li id="li_' + parseInt(f + 1) + '"><i class="url-icon del_host feather icon-trash-2" li_id="' + parseInt(f + 1) + '" host="' + d[1] + '" title="\u5220\u9664\u8bb0\u5f55"></i><i class="url-icon top_history iconfont icon-zhiding1" li_id="' + parseInt(f + 1) + '" host="' + d[1] + '" title="\u6536\u85cf\u7f6e\u9876"></i><a href="javascript:" class="input_insert history-url" host="' + d[1] + '">' + d[1] + "</a></li>"
    } else
        1 < e && (d = b.split("|"),
            $.each(d, function(h, k) {
                0 != h && h != d.length - 1 && (a = a + '<li id="li_' + parseInt(f + h) + '"><i class="url-icon del_host feather icon-trash-2" li_id="' + parseInt(f + h) + '" host="' + k + '" title="\u5220\u9664\u8bb0\u5f55"></i><i class="url-icon top_history iconfont icon-zhiding1" li_id="' + parseInt(f + h) + '" host="' + k + '" title="\u6536\u85cf\u7f6e\u9876"></i><a href="javascript:" class="input_insert history-url" host="' + k + '">' + k + "</a></li>")
            }));
    if (0 < e || 0 < f)
        $("#history_ul").html(a),
        $("#history-list").show()
}

function add_history(a) {
    var b = $.cookie("history"),
        c = $.cookie("top_history"),
        e = history_num(),
        f = top_history_num(),
        g = f + e;
    if (10 <= f || 1 == f && c == "|" + a + "|" || 1 < f && 0 < str_num(c, "|" + a + "|"))
        return !1;
    if (0 < e)
        if (1 == e) {
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
                    }), !1;
            if (10 > g)
                return $.cookie("history", "|" + a + $.cookie("history"), {
                    expires: 1E3,
                    path: "/"
                }), !1;
            if (10 <= g)
                return b = b.split("|"),
                    del_history(b[b.length - 2]),
                    $.cookie("history", "|" + a + $.cookie("history"), {
                        expires: 1E3,
                        path: "/"
                    }), !1
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
    a.sort(function(c, e) {
        return e[b] - c[b]
    });
    return a
}

function filter_ip(a) {
    $(".filter_ip").text(a);
    $(".label_filter_ip").show();
    $("input[name='filter_line']").prop("checked", !1);
    $(".node_tr").each(function() {
        $("#real_ip_" + $(this).attr("node")).text() == a ? $(this).show() : $(this).hide()
    })
}
$("input[name='filter_line']").click(function() {
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

function ping_once(a) {
    var b = a.node_id;
    complete_node_num += 1;
    if (complete_node_num > check_node_num)
        return !1;
    complete_node_num == check_node_num && $(".checking").hide();
    var c = '<div class="progress-bar" role="progressbar" style="width:' + GetPercent(complete_node_num, check_node_num) + ';" aria-valuenow="' + complete_node_num + '" aria-valuemin="0" aria-valuemax="' + check_node_num + '">' + GetPercent(complete_node_num, check_node_num) + "</div>";
    $("#complete_progress").html(c);
    isip(a.ip) ? ($("#real_ip_" + b).text(a.ip),
        $("#address_" + b).text(a.address),
        $("#address_" + b).attr("title", a.address),
        $("#hover_button_" + b).attr("style", ""),
        ip = a.ip,
        c = parseInt(a.result),
        0 == c ? $("#ping_" + b).html("<1ms") : -1 == c ? ($("#ping_" + b).html('<span class="text-danger">\u8d85\u65f6</span>'),
            $(".node_tr[node='" + b + "']").attr("time_out", "true"),
            time_out_num += 1,
            $(".time_out").text(time_out_num),
            $(".time_out").show()) : $("#ping_" + b).html(c + "ms")) : ($("#real_ip_" + b).html('<span class="text-danger">\u89e3\u6790\u5931\u8d25</span>'),
        $(".node_tr[node='" + b + "']").attr("time_out", "true"),
        time_out_num += 1,
        $(".time_out").text(time_out_num),
        $(".time_out").show());
    ipv4_list_arr.push(a);
    var e = 100 / ipv4_list_arr.length,
        f = {};
    ipv4_list_arr.forEach(function(h) {
        f[h.ip] = f[h.ip] || [];
        h.pre = e;
        f[h.ip].push(h)
    });
    var g = [];
    Object.keys(f).forEach(function(h) {
        var k = {};
        k.ip = h;
        k.pre = (e * f[h].length).toFixed(2);
        g.push(k)
    });
    g = sortByDescNum(g, "pre");
    $(".ip_list").html("");
    $(".copy_ip").attr("data-clipboard-text", "");
    for (b = 0; b < g.length; b++)
        c = isip(g[b].ip) ? g[b].ip : "\u89e3\u6790\u5931\u8d25",
        $(".ip_list").append(' <a title="\u70b9\u51fb\u7b5b\u9009" class="pointer noselect" onclick="filter_ip(\'' + c + '\')"><li><span class="real_ip ml-3">' + c + '</span><span class="text-primary float-right mr-3">' + g[b].pre + "%</span></li></a>"),
        "" == $(".copy_ip").attr("data-clipboard-text") ? $(".copy_ip").attr("data-clipboard-text", c) : $(".copy_ip").attr("data-clipboard-text", $(".copy_ip").attr("data-clipboard-text") + "\n" + c);
    $("#ipv4_num").text(g.length);
    99 != a.province && ("-1" != a.result && china_fast[a.province] > a.result ? china_fast[a.province] = a.result : "-1" == a.result && "9999" == china_fast[a.province] && (china_fast[a.province] = 5E3));
    mydata = [];
    for (b = 0; 34 > b; b++) {
        if (0 == b)
            var d = {
                name: "\u5317\u4eac",
                value: china_fast[0]
            };
        else
            1 == b ? d = {
                name: "\u5929\u6d25",
                value: china_fast[1]
            } : 2 == b ? d = {
                name: "\u4e0a\u6d77",
                value: china_fast[2]
            } : 3 == b ? d = {
                name: "\u91cd\u5e86",
                value: china_fast[3]
            } : 4 == b ? d = {
                name: "\u6cb3\u5317",
                value: china_fast[4]
            } : 5 == b ? d = {
                name: "\u6cb3\u5357",
                value: china_fast[5]
            } : 6 == b ? d = {
                name: "\u4e91\u5357",
                value: china_fast[6]
            } : 7 == b ? d = {
                name: "\u8fbd\u5b81",
                value: china_fast[7]
            } : 8 == b ? d = {
                name: "\u9ed1\u9f99\u6c5f",
                value: china_fast[8]
            } : 9 == b ? d = {
                name: "\u6e56\u5357",
                value: china_fast[9]
            } : 10 == b ? d = {
                name: "\u5b89\u5fbd",
                value: china_fast[10]
            } : 11 == b ? d = {
                name: "\u5c71\u4e1c",
                value: china_fast[11]
            } : 12 == b ? d = {
                name: "\u65b0\u7586",
                value: china_fast[12]
            } : 13 == b ? d = {
                name: "\u6c5f\u82cf",
                value: china_fast[13]
            } : 14 == b ? d = {
                name: "\u6d59\u6c5f",
                value: china_fast[14]
            } : 15 == b ? d = {
                name: "\u6c5f\u897f",
                value: china_fast[15]
            } : 16 == b ? d = {
                name: "\u6e56\u5317",
                value: china_fast[16]
            } : 17 == b ? d = {
                name: "\u5e7f\u897f",
                value: china_fast[17]
            } : 18 == b ? d = {
                name: "\u7518\u8083",
                value: china_fast[18]
            } : 19 == b ? d = {
                name: "\u5c71\u897f",
                value: china_fast[19]
            } : 20 == b ? d = {
                name: "\u5185\u8499\u53e4",
                value: china_fast[20]
            } : 21 == b ? d = {
                name: "\u9655\u897f",
                value: china_fast[21]
            } : 22 == b ? d = {
                name: "\u5409\u6797",
                value: china_fast[22]
            } : 23 == b ? d = {
                name: "\u798f\u5efa",
                value: china_fast[23]
            } : 24 == b ? d = {
                name: "\u8d35\u5dde",
                value: china_fast[24]
            } : 25 == b ? d = {
                name: "\u5e7f\u4e1c",
                value: china_fast[25]
            } : 26 == b ? d = {
                name: "\u9752\u6d77",
                value: china_fast[26]
            } : 27 == b ? d = {
                name: "\u897f\u85cf",
                value: china_fast[27]
            } : 28 == b ? d = {
                name: "\u56db\u5ddd",
                value: china_fast[28]
            } : 29 == b ? d = {
                name: "\u5b81\u590f",
                value: china_fast[29]
            } : 30 == b ? d = {
                name: "\u6d77\u5357",
                value: china_fast[30]
            } : 31 == b ? d = {
                name: "\u53f0\u6e7e",
                value: china_fast[31]
            } : 32 == b ? d = {
                name: "\u9999\u6e2f",
                value: china_fast[32]
            } : 33 == b && (d = {
                name: "\u6fb3\u95e8",
                value: china_fast[33]
            });
        9999 != china_fast[b] && (mydata[mydata.length] = d)
    }
    refreshData();
    99 != a.province && "-1" != a.result && (china_node_num += 1,
        china_allping += parseInt(a.result),
        china_fastping > parseInt(a.result) && (china_fastping = a.result,
            0 == a.result ? $("#china_fast").text(a.name + " <1ms") : $("#china_fast").text(a.name + " " + a.result + "ms")),
        china_slow < parseInt(a.result) && (china_slow = a.result,
            0 == a.result ? $("#china_slow").text(a.name + " <1ms") : $("#china_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(china_allping / china_node_num),
        0 == d ? $("#china_avg").text("<1ms") : $("#china_avg").text(d + "ms"));
    "1" == a.line && "-1" != a.result && (ct_node_num += 1,
        ct_allping += parseInt(a.result),
        ct_fast > parseInt(a.result) && (ct_fast = a.result,
            0 == a.result ? $("#ct_fast").text(a.name + " <1ms") : $("#ct_fast").text(a.name + " " + a.result + "ms")),
        ct_slow < parseInt(a.result) && (ct_slow = a.result,
            0 == a.result ? $("#ct_slow").text(a.name + " <1ms") : $("#ct_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(ct_allping / ct_node_num),
        0 == d ? $("#ct_avg").text("<1ms") : $("#ct_avg").text(d + "ms"));
    "2" == a.line && "-1" != a.result && (cu_node_num += 1,
        cu_allping += parseInt(a.result),
        cu_fast > parseInt(a.result) && (cu_fast = a.result,
            0 == a.result ? $("#cu_fast").text(a.name + " <1ms") : $("#cu_fast").text(a.name + " " + a.result + "ms")),
        cu_slow < parseInt(a.result) && (cu_slow = a.result,
            0 == a.result ? $("#cu_slow").text(a.name + " <1ms") : $("#cu_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(cu_allping / cu_node_num),
        0 == d ? $("#cu_avg").text("<1ms") : $("#cu_avg").text(d + "ms"));
    "3" == a.line && "-1" != a.result && (cm_node_num += 1,
        cm_allping += parseInt(a.result),
        cm_fast > parseInt(a.result) && (cm_fast = a.result,
            0 == a.result ? $("#cm_fast").text(a.name + " <1ms") : $("#cm_fast").text(a.name + " " + a.result + "ms")),
        cm_slow < parseInt(a.result) && (cm_slow = a.result,
            0 == a.result ? $("#cm_slow").text(a.name + " <1ms") : $("#cm_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(cm_allping / cm_node_num),
        0 == d ? $("#cm_avg").text("<1ms") : $("#cm_avg").text(d + "ms"));
    "1" == a.region && "-1" != a.result && (huadong_node_num += 1,
        huadong_allping += parseInt(a.result),
        huadong_fast > parseInt(a.result) && (huadong_fast = a.result,
            0 == a.result ? $("#huadong_fast").text(a.name + " <1ms") : $("#huadong_fast").text(a.name + " " + a.result + "ms")),
        huadong_slow < parseInt(a.result) && (huadong_slow = a.result,
            0 == a.result ? $("#huadong_slow").text(a.name + " <1ms") : $("#huadong_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(huadong_allping / huadong_node_num),
        0 == d ? $("#huadong_avg").text("<1ms") : $("#huadong_avg").text(d + "ms"));
    "2" == a.region && "-1" != a.result && (huanan_node_num += 1,
        huanan_allping += parseInt(a.result),
        huanan_fast > parseInt(a.result) && (huanan_fast = a.result,
            0 == a.result ? $("#huanan_fast").text(a.name + " <1ms") : $("#huanan_fast").text(a.name + " " + a.result + "ms")),
        huanan_slow < parseInt(a.result) && (huanan_slow = a.result,
            0 == a.result ? $("#huanan_slow").text(a.name + " <1ms") : $("#huanan_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(huanan_allping / huanan_node_num),
        0 == d ? $("#huanan_avg").text("<1ms") : $("#huanan_avg").text(d + "ms"));
    "3" == a.region && "-1" != a.result && (huazhong_node_num += 1,
        huazhong_allping += parseInt(a.result),
        huazhong_fast > parseInt(a.result) && (huazhong_fast = a.result,
            0 == a.result ? $("#huazhong_fast").text(a.name + " <1ms") : $("#huazhong_fast").text(a.name + " " + a.result + "ms")),
        huazhong_slow < parseInt(a.result) && (huazhong_slow = a.result,
            0 == a.result ? $("#huazhong_slow").text(a.name + " <1ms") : $("#huazhong_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(huazhong_allping / huazhong_node_num),
        0 == d ? $("#huazhong_avg").text("<1ms") : $("#huazhong_avg").text(d + "ms"));
    "4" == a.region && "-1" != a.result && (huabei_node_num += 1,
        huabei_allping += parseInt(a.result),
        huabei_fast > parseInt(a.result) && (huabei_fast = a.result,
            0 == a.result ? $("#huabei_fast").text(a.name + " <1ms") : $("#huabei_fast").text(a.name + " " + a.result + "ms")),
        huabei_slow < parseInt(a.result) && (huabei_slow = a.result,
            0 == a.result ? $("#huabei_slow").text(a.name + " <1ms") : $("#huabei_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(huabei_allping / huabei_node_num),
        0 == d ? $("#huabei_avg").text("<1ms") : $("#huabei_avg").text(d + "ms"));
    "5" == a.region && "-1" != a.result && (xinan_node_num += 1,
        xinan_allping += parseInt(a.result),
        xinan_fast > parseInt(a.result) && (xinan_fast = a.result,
            0 == a.result ? $("#xinan_fast").text(a.name + " <1ms") : $("#xinan_fast").text(a.name + " " + a.result + "ms")),
        xinan_slow < parseInt(a.result) && (xinan_slow = a.result,
            0 == a.result ? $("#xinan_slow").text(a.name + " <1ms") : $("#xinan_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(xinan_allping / xinan_node_num),
        0 == d ? $("#xinan_avg").text("<1ms") : $("#xinan_avg").text(d + "ms"));
    "6" == a.region && "-1" != a.result && (xibei_node_num += 1,
        xibei_allping += parseInt(a.result),
        xibei_fast > parseInt(a.result) && (xibei_fast = a.result,
            0 == a.result ? $("#xibei_fast").text(a.name + " <1ms") : $("#xibei_fast").text(a.name + " " + a.result + "ms")),
        xibei_slow < parseInt(a.result) && (xibei_slow = a.result,
            0 == a.result ? $("#xibei_slow").text(a.name + " <1ms") : $("#xibei_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(xibei_allping / xibei_node_num),
        0 == d ? $("#xibei_avg").text("<1ms") : $("#xibei_avg").text(d + "ms"));
    "7" == a.region && "-1" != a.result && (dongbei_node_num += 1,
        dongbei_allping += parseInt(a.result),
        dongbei_fast > parseInt(a.result) && (dongbei_fast = a.result,
            0 == a.result ? $("#dongbei_fast").text(a.name + " <1ms") : $("#dongbei_fast").text(a.name + " " + a.result + "ms")),
        dongbei_slow < parseInt(a.result) && (dongbei_slow = a.result,
            0 == a.result ? $("#dongbei_slow").text(a.name + " <1ms") : $("#dongbei_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(dongbei_allping / dongbei_node_num),
        0 == d ? $("#dongbei_avg").text("<1ms") : $("#dongbei_avg").text(d + "ms"));
    "8" == a.region && "-1" != a.result && (gangaotai_node_num += 1,
        gangaotai_allping += parseInt(a.result),
        gangaotai_fast > parseInt(a.result) && (gangaotai_fast = a.result,
            0 == a.result ? $("#gangaotai_fast").text(a.name + " <1ms") : $("#gangaotai_fast").text(a.name + " " + a.result + "ms")),
        gangaotai_slow < parseInt(a.result) && (gangaotai_slow = a.result,
            0 == a.result ? $("#gangaotai_slow").text(a.name + " <1ms") : $("#gangaotai_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(gangaotai_allping / gangaotai_node_num),
        0 == d ? $("#gangaotai_avg").text("<1ms") : $("#gangaotai_avg").text(d + "ms"));
    "99" == a.province && "-1" != a.result && (global_node_num += 1,
        global_allping += parseInt(a.result),
        global_fast > parseInt(a.result) && (global_fast = a.result,
            0 == a.result ? $("#global_fast").text(a.name + " <1ms") : $("#global_fast").text(a.name + " " + a.result + "ms")),
        global_slow < parseInt(a.result) && (global_slow = a.result,
            0 == a.result ? $("#global_slow").text(a.name + " <1ms") : $("#global_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(global_allping / global_node_num),
        0 == d ? $("#global_avg").text("<1ms") : $("#global_avg").text(d + "ms"));
    "9" == a.region && "-1" != a.result && (asia_node_num += 1,
        asia_allping += parseInt(a.result),
        asia_fast > parseInt(a.result) && (asia_fast = a.result,
            0 == a.result ? $("#asia_fast").text(a.name + " <1ms") : $("#asia_fast").text(a.name + " " + a.result + "ms")),
        asia_slow < parseInt(a.result) && (asia_slow = a.result,
            0 == a.result ? $("#asia_slow").text(a.name + " <1ms") : $("#asia_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(asia_allping / asia_node_num),
        0 == d ? $("#asia_avg").text("<1ms") : $("#asia_avg").text(d + "ms"));
    "10" == a.region && "-1" != a.result && (europe_node_num += 1,
        europe_allping += parseInt(a.result),
        europe_fast > parseInt(a.result) && (europe_fast = a.result,
            0 == a.result ? $("#europe_fast").text(a.name + " <1ms") : $("#europe_fast").text(a.name + " " + a.result + "ms")),
        europe_slow < parseInt(a.result) && (europe_slow = a.result,
            0 == a.result ? $("#europe_slow").text(a.name + " <1ms") : $("#europe_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(europe_allping / europe_node_num),
        0 == d ? $("#europe_avg").text("<1ms") : $("#europe_avg").text(d + "ms"));
    "11" == a.region && "-1" != a.result && (north_node_num += 1,
        north_allping += parseInt(a.result),
        north_fast > parseInt(a.result) && (north_fast = a.result,
            0 == a.result ? $("#north_fast").text(a.name + " <1ms") : $("#north_fast").text(a.name + " " + a.result + "ms")),
        north_slow < parseInt(a.result) && (north_slow = a.result,
            0 == a.result ? $("#north_slow").text(a.name + " <1ms") : $("#north_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(north_allping / north_node_num),
        0 == d ? $("#north_avg").text("<1ms") : $("#north_avg").text(d + "ms"));
    "12" == a.region && "-1" != a.result && (south_node_num += 1,
        south_allping += parseInt(a.result),
        south_fast > parseInt(a.result) && (south_fast = a.result,
            0 == a.result ? $("#south_fast").text(a.name + " <1ms") : $("#south_fast").text(a.name + " " + a.result + "ms")),
        south_slow < parseInt(a.result) && (south_slow = a.result,
            0 == a.result ? $("#south_slow").text(a.name + " <1ms") : $("#south_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(south_allping / south_node_num),
        0 == d ? $("#south_avg").text("<1ms") : $("#south_avg").text(d + "ms"));
    "13" == a.region && "-1" != a.result && (africa_node_num += 1,
        africa_allping += parseInt(a.result),
        africa_fast > parseInt(a.result) && (africa_fast = a.result,
            0 == a.result ? $("#africa_fast").text(a.name + " <1ms") : $("#africa_fast").text(a.name + " " + a.result + "ms")),
        africa_slow < parseInt(a.result) && (africa_slow = a.result,
            0 == a.result ? $("#africa_slow").text(a.name + " <1ms") : $("#africa_slow").text(a.name + " " + a.result + "ms")),
        d = parseInt(africa_allping / africa_node_num),
        0 == d ? $("#africa_avg").text("<1ms") : $("#africa_avg").text(d + "ms"));
    "14" == a.region && "-1" != a.result && (oceania_node_num += 1,
        oceania_allping += parseInt(a.result),
        oceania_fast > parseInt(a.result) && (oceania_fast = a.result,
            0 == a.result ? $("#oceania_fast").text(a.name + " <1ms") : $("#oceania_fast").text(a.name + " " + a.result + "ms")),
        oceania_slow < parseInt(a.result) && (oceania_slow = a.result,
            0 == a.result ? $("#oceania_slow").text(a.name + " <1ms") : $("#oceania_slow").text(a.name + " " + a.result + "ms")),
        a = parseInt(oceania_allping / oceania_node_num),
        0 == a ? $("#oceania_avg").text("<1ms") : $("#oceania_avg").text(a + "ms"))
}

function ping_many(a, b, c, e) {
    if ("--" == $("#address_" + c).text())
        if ("Not Found" != a)
            $("#real_ip_" + c).text(a),
            $("#address_" + c).text(b),
            $("#address_" + c).attr("title", b),
            $("#hover_button_" + c).attr("style", "");
        else
            return $("#real_ip_" + c).html('<span class="text-danger">\u89e3\u6790\u5931\u8d25</span>'), !1;
    a = parseInt($(".node_tr[node=" + c + "]").attr("send_num"));
    e = parseInt(e);
    a += 1;
    $(".node_tr[node=" + c + "]").attr("send_num", a);
    $("#send_" + c).text(a);
    b = parseInt($(".node_tr[node=" + c + "]").attr("all_ping")); -
    1 != e && (b += e,
        $(".node_tr[node=" + c + "]").attr("all_ping", b));
    "-1" == e && $(".node_tr[node=" + c + "]").attr("loss_num", parseInt($(".node_tr[node=" + c + "]").attr("loss_num")) + 1);
    var f = parseInt($(".node_tr[node=" + c + "]").attr("loss_num"));
    "1" == a && "-1" != e ? $("#loss_" + c).text("0%") : "1" == a && "-1" == e ? $("#loss_" + c).text("100%") : "0" == f ? $("#loss_" + c).text("0%") : $("#loss_" + c).text(GetPercent(f, a));
    0 == e ? $("#last_ping_" + c).text("<1") : -1 == e ? $("#last_ping_" + c).html('<span class="text-danger">\u8d85\u65f6</span>') : $("#last_ping_" + c).text(e);
    "0" == b ? "1" != a && -1 != e ? $("#avg_ping_" + c).text("<1") : $("#avg_ping_" + c).text("--") : (b = parseInt(b / (a - f)),
        0 == b ? $("#avg_ping_" + c).text("<1") : $("#avg_ping_" + c).text(b));
    "1" == a || "--" == $("#best_ping_" + c).text() ? "-1" != e ? 0 == e ? $("#best_ping_" + c).text("<1") : $("#best_ping_" + c).text(e) : $("#best_ping_" + c).text("--") : e < parseInt($("#best_ping_" + c).text()) && "-1" != e && (0 == e ? $("#best_ping_" + c).text("<1") : $("#best_ping_" + c).text(e));
    "1" == a || "--" == $("#worst_ping_" + c).text() ? "-1" != e ? 0 == e ? $("#worst_ping_" + c).text("<1") : $("#worst_ping_" + c).text(e) : $("#worst_ping_" + c).text("--") : e > parseInt($("#worst_ping_" + c).text()) && (0 == e ? $("#worst_ping_" + c).text("<1") : $("#worst_ping_" + c).text(e));
    update_canvas(c, a, e)
}

function GetPercent(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return isNaN(a) || isNaN(b) ? "-" : 0 >= b ? "0%" : Math.round(a / b * 100) + "%"
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

function update_canvas(a, b, c) {
    a = document.getElementById("canvas_" + a).getContext("2d");
    --b;
    a.fillStyle = 350 <= c ? "orange" : "-1" == c ? "red" : "green";
    c = "-1" == c ? 20 : parseInt(c / 15);
    1 > c && (c = 1);
    a.fillRect(2 * b, 20 - c, 2, c)
}

function check_post(a, b) {
    var c = document.createElement("form");
    c.action = a;
    c.method = "post";
    c.style.display = "none";
    for (var e in b)
        a = document.createElement("textarea"),
        a.name = e,
        a.value = b[e],
        c.appendChild(a);
    document.body.appendChild(c);
    c.submit();
    return c
}

function check_post_blank(a, b) {
    var c = document.createElement("form");
    c.action = a;
    c.method = "post";
    c.target = Math.random() + "_blank";
    c.style.display = "none";
    for (var e in b)
        a = document.createElement("textarea"),
        a.name = e,
        a.value = b[e],
        c.appendChild(a);
    document.body.appendChild(c);
    c.submit();
    return c
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
    check_post_blank("/tcping/?addr=" + a, {
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
        host: a
    })
}

function feedback_button(a) {
    a = $("#real_ip_" + a).text();
    check_post_blank("/feedback.php", {
        ip: a
    })
}
// function check_form() {
//     var a = $("#ip").val();
//     a = a.split("/");
//     a[2] ? a = a[2] : (a = $("#ip").val().replace(/\//g, ""),
//     a = a.replace(/\u3002/g, "."),
//     a = a.replace(/\\/g, ""),
//     a = a.replace(/\uff1a/g, ":"));
//     var b = check_line();
//     check_post("/ping/?addr=" + a, {
//         line: b,
//         button_click: "yes"
//     })
// }
function down_screenshot(a) {
    ad_hide();
    setTimeout(function() {
        $("#takeScreenshot").html('<div class="spinner-grow spinner-grow-sm" role="status"></div> \u6b63\u5728\u751f\u6210 \u00b7\u00b7\u00b7');
        $("#takeScreenshot").attr("disabled", !0);
        domtoimage.toBlob(document.getElementById("screenshots")).then(function(b) {
            window.saveAs(b, a + "_\u591a\u5730Ping\u503c\u6d4b\u8bd5.png");
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
        var b = convertBase64ToBlob(a, "image/png"),
            c = new ClipboardItem({
                "image/png": b
            });
        navigator.clipboard.write([c]);
        $("#takeScreenshot").html('<i class="feather icon-camera"></i> \u5b8c\u6574\u622a\u56fe');
        $("#takeScreenshot").attr("disabled", !1);
        layer.msg('<i class="fas fa-check-circle text-success"></i> \u622a\u56fe\u590d\u5236\u6210\u529f\uff0c\u53ef\u4ee5\u7c98\u8d34\u5230\uff31\uff31\u3001Word\u7b49\u7f16\u8f91\u5668');
        unmosaic()
    } catch (e) {
        console.log(e)
    }
}

function convertBase64ToBlob(a, b) {
    a = window.atob(a);
    for (var c = new ArrayBuffer(a.length), e = new Uint8Array(c), f = 0; f < a.length; f++)
        e[f] = a.charCodeAt(f);
    return new Blob([c], {
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
        "ip" == $(this).val() ? $(".real_ip").addClass("mosaic") : "address" == $(this).val() && $(".ip_address").addClass("mosaic")
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
$(function() {
    var a;
    $("#takeScreenshot").mouseover(function() {
        a = layer.tips("1\u3001\u5c06\u5173\u952e\u6570\u636e\u622a\u56fe\u5e76\u540c\u65f6\u53bb\u9664\u5e7f\u544a<br>2\u3001\u53ef\u4ee5\u9009\u62e9\u6307\u5b9a\u6570\u636e\u8fdb\u884c\u6253\u7801\u5904\u7406<br>3\u3001\u9996\u6b21\u751f\u6210\u622a\u56fe\u53ef\u80fd\u9700\u8981\u8f83\u957f\u65f6\u95f4", "#takeScreenshot", {
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
    $("#ip").bind("keyup", function(b) {
        "13" == b.keyCode && check_form()
    });
    $("#ip").click(function() {
        load_history()
    });
    $("#ip").blur(function() {
        $("#history-list").hide()
    });
    $("#ip").bind("input propertychange", function() {
        $("#history-list").hide()
    });
    $("body").on("mousedown", ".input_insert", function(b) {
        if ("1" != b.which)
            return !1;
        $("#ip").val($(this).attr("host"));
        $("#ip").focus()
    });
    $("body").on("mousedown", ".url-icon.del_host", function(b) {
        if ("1" != b.which)
            return !1;
        b = $(this).attr("host");
        var c = $(this).attr("li_id");
        del_history(b);
        del_top_history(b);
        $("#li_" + c).remove();
        return !1
    });
    $("body").on("mousedown", ".url-icon.top_history", function(b) {
        if ("1" != b.which)
            return !1;
        $(this).attr("li_id");
        var c = $(this).attr("host");
        b = $.cookie("history");
        var e = $.cookie("top_history"),
            f = history_num();
        top_history_num();
        if ("" != e && "undefined" != typeof e)
            if (2 == str_num(e, "|"))
                e == "|" + c + "|" ? ($.cookie("top_history", "", {
                        expires: 1E3,
                        path: "/"
                    }),
                    del_top_history(c),
                    add_history(c)) : ($.cookie("top_history", "|" + c + e, {
                        expires: 1E3,
                        path: "/"
                    }),
                    del_history(c));
            else {
                var g = e.split("|");
                1 < f && b.split("|");
                var d = !1;
                $.each(g, function(h, k) {
                    k == c && (d = !0)
                });
                if (d)
                    return del_top_history(c),
                        add_history(c),
                        load_history(), !1;
                12 > g.length ? ($.cookie("top_history", "|" + c + e, {
                        expires: 1E3,
                        path: "/"
                    }),
                    del_history(c)) : del_top_history(g[10])
            }
        else
            $.cookie("top_history", "|" + c + "|", {
                expires: 1E3,
                path: "/"
            }),
            del_history(c);
        load_history();
        return !1
    })
});