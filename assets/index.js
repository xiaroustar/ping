//联系站长
function contact_master(){
layer.open({
type:1,
title: '',
content: '<div class="card m-0" style="width:400px;">  <div class="card-body text-center p-0"><div style="width: 100%;height: 80px;background-image: linear-gradient(to right, #003dc1 , #b5399a)"></div> <img class="img-fluid img-thumbnail" src="/frame/images/head_logo.jpg" alt="Profile-user" style="width:80px;height:80px;border-radius: 50%; margin-top: -40px; ">  <div class="mb-3" style=" margin-top: 10px; "><span class="badge" style=" background-image: linear-gradient(to right, #ffcf3e , #f19204); color: #fff; ">一品带刀运维狗</span></div> <p>QQ：962922968<span class="ml-3">邮箱：itdog-cn@qq.com</span></p></div> <div class="card-footer bg-inverse"> <div class="row text-center"> <div class="col">  <button class="btn btn-primary btn-sm" onclick="window.open(\'tencent://message/?uin=962922968\');"><i class="fab fa-qq"></i> QQ临时会话</button> <button class="ml-2 copy_qq btn btn-primary btn-sm"><i class="feather icon-copy"></i> 复制QQ号码</button> </div>   </div> </div> </div>',
closeBtn:2
});
}

function err_tip(str){
    layer.open({
        title: false,
        content: '<i class="fas fa-ban text-danger mr-2" style="font-size:23px;vertical-align: middle;"></i>'+str,
        btnAlign: 'c',
        anim:-1,
        isOutAnim:false
    });
}

function success_tip(str){
    layer.open({
        title: false,
        content: '<i class="fas fa-check-circle text-success mr-2" style="font-size:23px;vertical-align: middle;"></i>'+str,
        btnAlign: 'c',
        anim:-1,
        isOutAnim:false
    });
}

function get_ipv6_address(){

	var ajaxpost = $.ajax({
　　
	url:"https://ipv6.itdog.cn",
	timeout : 3000, 
　　type : 'get', 
　　dataType:'json',
　　success:function(data){
　　
	if (data.type == "success"){
		$("#local_ipv6").text(data.ip);
		$("#local_ipv6_addr").text(data.address);
		$("#local_ipv6_addr").attr('title',data.address);
	}else{
		//连接成功的情况下，返回错误的处理
	}

　　},
　　complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
　　　　if(status=='timeout'){
 　　　　　 ajaxpost.abort();
			get_ipv6_address();
　　　　}
　　}
});	
	
}

function get_ip_version(){

	var ajaxpost = $.ajax({
　　
	url:"https://test.itdog.cn",
	timeout : 3000, 
　　type : 'get', 
　　dataType:'json',
　　success:function(data){
	if (data.type == "success" && data.version == "IPV6"){
	    $("#first_ip_version").text('IPv6');
	}else{
	    $("#first_ip_version").text('IPv4');
	}
    $('.network_loading').remove();
    $('.network_first').show();
　　},
　　complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
　　　　if(status=='timeout'){
            $('.network_loading').remove();
            $('.network_first').show();
　　　　}
　　}
});	
	
}

$(function(){
     setTimeout(function() {
        $('.loader-bg').fadeOut('slow', function() {
            $(this).remove();
        });
    }, 400);
	
$(".nav-item").mouseover(function(){
	
$.each($("li.nav-item"),function(){
	if ($(this).hasClass("default-menu") == false){
	$(this).removeClass('pcoded-trigger').removeClass('active');
	}
});	

$(this).addClass('pcoded-trigger').addClass('active');

});

$(".nav-item").mouseout(function(){
	if ($(this).hasClass("default-menu") == false){
	$(this).removeClass('pcoded-trigger').removeClass('active');
	}
});	
	
	});