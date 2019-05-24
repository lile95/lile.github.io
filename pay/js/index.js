function btnNum_onclick(i,that) {
    // let reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    var money = document.getElementById("money");
    // money.value=money.value+i;
    if (money.innerHTML+i < 99999) {
        money.innerHTML = money.innerHTML+i;
    }
    money.innerHTML = money.innerHTML.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符
    money.innerHTML = money.innerHTML.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的
    money.innerHTML = money.innerHTML.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
    money.innerHTML = money.innerHTML.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数
    if(money.innerHTML.indexOf(".")< 0 && money.innerHTML !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
        money.innerHTML= parseFloat(money.innerHTML);
        // money.value=money.value+i;
    }
//  that.style.background = '#e1e5e1';
   /* setTimeout(()=>{
        that.style.background = '#fff'
    },200);*/

}
function delText(that) {
    that.style.background = '#e1e5e1';
    /*setTimeout(()=>{
        that.style.background = '#fff'
    },200);*/
    var value = document.getElementById("money").innerHTML;
    document.getElementById("money").innerHTML = value.substring(0, value.length - 1);
}




