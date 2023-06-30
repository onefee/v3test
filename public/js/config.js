/*
激活windows
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
console.debug('init config');
let item = {
  childRechargeBalance: '0',
  invitationMinBalance: '2.00',
  todayInvitationBalance: '0',
  totalInvitation: 0,
  totalInvitationBalance: '0.00',
  totalInvitationPeople: 0,
  totalRecharge: 0,
  userTotalInvitationBalance: '0',
  levels: [
    {
      averageRewardAmount: '2.00',
      level: 1,
      maxPeople: 5,
      minPeople: 3,
    },
  ],
};
