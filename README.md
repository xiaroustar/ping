# 简介
免费的在线PING｜网站测速｜Tcping等针对网站测速的工具，可以在任意web环境部署！
# 声明
本项目切勿盈利，仅供学习交流使用
# 节点问题
关于节点由我控制，可以赞助节点，下面是部分节点安装测试工具的一条龙命令，可以直接在终端执行
## 网站测速 - 节点安装
Centos机器提供测速节点命令：curl -s https://ping.aa1.cn/download/http_service/ssh/centos/service.sh | bash
<br>Ubantu机器提供测速节点命令：curl -s https://ping.aa1.cn/download/http_service/ssh/ubantu/service.sh | bash
<br>Debian机器提供测速节点命令：curl -s https://ping.aa1.cn/download/http_service/ssh/debian/service.sh | bash
<br>执行后，开放5782端口，测试url：http://ip:5782/analyze_url?url=
<br>最后加我qq，提供赞助商名称和跳转url！

## Tcping - 节点安装
Centos机器提供测速节点命令：curl -s https://ping.aa1.cn/download/tcping_service/ssh/centos/service.sh | bash
<br>Ubantu机器提供测速节点命令：curl -s https://ping.aa1.cn/download/tcping_service/ssh/ubantu/service.sh | bash
<br>Debian机器提供测速节点命令：curl -s https://ping.aa1.cn/download/tcping_service/ssh/debian/service.sh | bash
<br>执行后，开放5783端口，测试url：http://ip:5782/analyze_url?url=
<br>最后加我qq，提供赞助商名称和跳转url！

### 服务器环境报错 若出现依赖安装报错，请尝试以下命令：

<br>sudo python3 /opt/http_service.py

<br>Debian系统启用了 PEP 668 指定的 "Externally Managed Environment" 功能，防止系统范围内的 Python 包安装。Debian 12 及以上版本的系统默认开启了这个机制，以确保系统的稳定性。
<br>执行以下命令
<br>sudo pip3 install flask requests --break-system-packages

<br>重启服务 更新服务配置并重新启动服务：
<br>sudo systemctl daemon-reload
<br>sudo systemctl restart http_service.service

## 在线ping - 节点安装
下载php源码 并开放exec函数

<br>下载链接：https://ping.aa1.cn/download/ping_service/ping.zip
<br>将php文件上传至任意php环境网站根目录，开放exec函数后重启php服务测试url：http://域名/ping.php?url=
<br>最后加我qq，提供赞助商名称和跳转url！


## 其他节点
可联系我的QQ：15001904，发PHP文件拖管至网站根目录即可！
# 安装教程
将源码克隆到本地，并在网站根目录上传解压，访问：域名 即可完成搭建；

代码持续更新，请关注本项目推送动态，或加QQ群：1群938564996 2群227379858 3群721926462

演示网站：https://ping.aa1.cn


