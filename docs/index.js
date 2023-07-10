/*
# 域名相关
http://panda.www.net.cn/cgi-bin/check.cgi?area_domain=qq.com
国际域名：
1 到期当天暂停解析，如果在72小时未续费，则修改域名DNS指向广告页面（停放）。域名到期后30-45天为域名保留期（不同注册商政策规定时间不同）
2 过了保留期域名将进入赎回期（REDEMPTIONPERIOD，为期30天）
3 过了赎回期域名将进入为期5天左右的删除期，删除期过后域名开放，任何人可注。

国内域名：
1 到期当天暂停解析，如果在72小时未续费，则修改域名DNS指向广告页面（停放）。35天内，可以自动续费。
2 过期后36－48天，将进入13天的高价赎回期，此期间域名无法管理。
3 过期后48天后仍未续费的，域名将随时被删除。

# 激活windows
slmgr /ipk HTNHD-QP67R-GMFM6-WR47H-HXMQB
slmgr /skms win.kms.pub
slmgr /ato
wmic os get caption
slmgr /skms ''
激活 office
cd “C:\Program Files\Microsoft Office\Office16”
cscript ospp.vbs /inpkey:XQNVK-8JYDB-WJ9W3-YJ8YR-WFG99
cscript ospp.vbs /sethst:''
cscript ospp.vbs /sethst:win.kms.pub
cscript ospp.vbs /act
cscript ospp.vbs /dstatus
*/
