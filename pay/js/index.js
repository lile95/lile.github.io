function btnNum_onclick(i,that) {
    // let reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    let money = document.getElementById("money");
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
    that.style.background = '#e1e5e1';
    setTimeout(()=>{
        that.style.background = '#fff'
    },200);

}
function delText(that) {
    that.style.background = '#e1e5e1';
    setTimeout(()=>{
        that.style.background = '#fff'
    },200);
    let value = document.getElementById("money").innerHTML;
    document.getElementById("money").innerHTML = value.substring(0, value.length - 1);
}



/*let disabledTime = res.data.data.disabledTime  // 获取loading时间
function onBridgeReady(){
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
            "appId":res.data.data.sdk_appid,     //公众号名称，由商户传入
            "timeStamp":res.data.data.sdk_timestamp,         //时间戳，自1970年以来的秒数
            "nonceStr":res.data.data.sdk_noncestr, //随机串
            "package":res.data.data.sdk_package,
            "signType":res.data.data.sdk_signtype,         //微信签名方式：
            "paySign":res.data.data.sdk_paysign //微信签名
        },
        function(res){
            _this.wxtext = res;
            if(res.err_msg === "get_brand_wcpay_request:ok" ){
                // alert(res.err_msg);
                // 使用以上方式判断前端返回,微信团队郑重提示：
                //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                _this.$store.state.loadingShow = true
                setTimeout(()=>{
                    _this.$store.state.loadingShow = false
                },disabledTime*1000)
            }else{
                // alert(res.err_desc)
            }
        });
}
if (typeof WeixinJSBridge == "undefined"){
    if( document.addEventListener ){
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    }else if (document.attachEvent){
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
}else{
    onBridgeReady();
}*/
