var tab;
var tabContent;
var block = document.getElementsByClassName('block');
window.onload=function () {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}
function hideTabsContent(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}
function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}
document.getElementById('tabs').onclick=function (event) {
    var target=event.target;
    if (target.className=='tab'){
        for (var i=0;i<tab.length;i++){
            if (target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}
var cssradius = document.getElementById('cssradius');
var rtl=document.getElementById('rtl');
var rtr=document.getElementById('rtr');
var rbl=document.getElementById('rbl');
var rbr=document.getElementById('rbr');
var ttl=document.getElementById('ttl');
var ttr=document.getElementById('ttr');
var tbl=document.getElementById('tbl');
var tbr=document.getElementById('tbr');
rtl.addEventListener("input", updateValues);
rtr.addEventListener("input", updateValues);
rbl.addEventListener("input", updateValues);
rbr.addEventListener("input", updateValues);
ttl.addEventListener("input", updateValuestext);
ttr.addEventListener("input", updateValuestext);
tbl.addEventListener("input", updateValuestext);
tbr.addEventListener("input", updateValuestext);

function updateValues() {
    var rtli = rtl.value;
    var rtri = rtr.value;
    var rbli = rbl.value;
    var rbri = rbr.value;
    ttl.value = rtli;
    ttr.value = rtri;
    tbl.value = rbli;
    tbr.value = rbri;
    updateStylesForBlocks();
}
function updateValuestext() {
    var ttli = ttl.value;
    var ttri = ttr.value;
    var tbli = tbl.value;
    var tbri = tbr.value;
    rtl.value = ttli;
    rtr.value = ttri;
    rbl.value = tbli;
    rbr.value = tbri;
    updateStylesForBlocks();
}
function updateStylesForBlocks() {
    Array.from(block).forEach(function (block) {
        block.style.borderRadius = rtl.value + "px " + rtr.value + "px " + rbr.value + "px " + rbl.value + "px";
        cssradius.textContent = "Your css code: border-radius: " + rtl.value + "px " + rtr.value + "px " + rbr.value + "px " + rbl.value + "px";
    });
}