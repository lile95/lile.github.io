
$(function(){
    // let allUrl = 'http://dev.pay.jiangxinit.com/api/pay' ;
    let allUrl = 'http://dev.pay.jiangxinit.com/api/pay' ;
    // let allUrl = ' http://192.168.0.18:8090/api/pay' ;
    let wxUrl = 'http://wx.jiangxinit.com/api' ;
    let typePay = '' ;  //支付类型
    let openId = '' ;    //用户id
    //let unique = {};    //  code
    let appId = '' ;
    let price = '';  //消费金额
    //let menuList = [] ;
    let text = '';
    let status = null;
    let tradeno =  null
    function IsWeixinOrAlipay(){
        let ua = window.navigator.userAgent.toLowerCase();
        //判断是不是微信
        if ( ua.match(/MicroMessenger/i) == 'micromessenger' ) {
            // return "WeiXIN";
            typePay = 'wxpay';
            function onBridgeReady(){   // 隐藏右上角功能
                WeixinJSBridge.call('hideOptionMenu');
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
            }

            if (!GetQueryString('openid')) {  //todo 获取openid  页面已重定向
                getOpenid()
            }else {
                getOrder(); //获取订单详情
            }

            $('#pos-but').on('click',function() {
                // let money = document.getElementById("money").innerHTML;
                let date = Date.parse(new Date())+'';
                let data = {
                    "money":price,  //todo
                    "mchnt_cd":GetQueryString('mchntcd'),  //商户号
                    "tradeNo":tradeno,
                    "type":typePay,
                    "out_trade_no":'ok',
                    "name":GetQueryString('sid')?'KS'+GetQueryString('sid')+'-'+date.substr(date.length - 7):'向商家付款',
                    "site_name":'匠心互动',
                    "openId":openId,    // 微信 用户ID
                    "appId":appId,
                    "sid":GetQueryString('sid')?GetQueryString('sid'):null,
					"tcode":GetQueryString('tcode')?GetQueryString('tcode'):null
                };
                $.ajax({
                    type: 'POST',
                    contentType:'application/json',
                    url:allUrl+"/receiptcode",
                    data: JSON.stringify(data),
                    xhrFields: {
                        withCredentials: true    // 前端设置是否带cookie
                    },
                    crossDomain: true,   // 会让请求头中包含跨域的额外信息，但不会含cookie
                    success: function(res){
                        console.log(res);
                        if (res.code !=0){
                            alert(res.msg) ;
                            return false
                        }
                        function onBridgeReady(){
                            // noinspection JSUnresolvedVariable
                            WeixinJSBridge.invoke(
                                'getBrandWCPayRequest', {
                                    "appId":res.data.sdk_appid,     //公众号名称，由商户传入
                                    "timeStamp":res.data.sdk_timestamp,         //时间戳，自1970年以来的秒数
                                    "nonceStr":res.data.sdk_noncestr, //随机串
                                    "package":res.data.sdk_package,
                                    "signType":res.data.sdk_signtype,         //微信签名方式：
                                    "paySign":res.data.sdk_paysign //微信签名
                                },
                                function(res){
                                    if(res.err_msg === "get_brand_wcpay_request:ok" ){
                                        window.location.replace('paySuccess.html?money='+price)
                                        // 使用以上方式判断前端返回,微信团队郑重提示：
                                        //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                                    }else{
                                        // dialog(res.err_desc)
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
                        }
                    }});
            });

        }
        //判断是不是支付宝
        if (ua.match(/AlipayClient/i) == 'alipayclient') {
            // typePay = 'alipay';
            AlipayJSBridge.call('setTitle', {
                title: '向商户付款',
            });
            AlipayJSBridge.call("setTitleColor", {
                color: 3128310,
                reset: false //(可选,默认为false)  是否重置title颜色为默认颜色。
            });
            function ready(callback) {
                // 如果jsbridge已经注入则直接调用
                if (window.AlipayJSBridge) {
                    callback && callback();
                } else {
                    // 如果没有注入则监听注入的事件
                    document.addEventListener('AlipayJSBridgeReady', callback, false);
                }
            }
            ready(function() {
                AlipayJSBridge.call('setOptionMenu', {
                    title : ' ',
                    redDot : '-1', // -1表示不显示，0表示显示红点，1-99表示在红点上显示的数字
                    color : '#ffff6600', // 必须以＃
                });

                document.addEventListener('optionMenu', function(e) {
                }, false);
            });
            getOrder(); //获取订单详情
            $('#pos-but').on('click',function() {
                // let money = document.getElementById("money").innerHTML;
                let date = Date.parse(new Date())+'';
                let data = {
                    "money":price,
                    "mchnt_cd":GetQueryString('mchntcd'),  //商户号 todo
                    "type":'alipay',
                    "name":GetQueryString('sid')?'KS'+GetQueryString('sid')+'-'+date.substr(date.length - 7):'向商家付款',
                    "tradeNo":tradeno,
                    "sid":GetQueryString('sid')?GetQueryString('sid'):null,
					"tcode":GetQueryString('tcode')?GetQueryString('tcode'):null
                };
                $.ajax({
                    type: 'POST',
                    contentType:'application/json',
                    // url: "http://192.168.0.16:8088/api/pay/receiptcode",
                    url: allUrl+"/receiptcode",
                    data: JSON.stringify(data),
                    xhrFields: {
                        withCredentials: true    // 前端设置是否带cookie
                    },
                    crossDomain: true,   // 会让请求头中包含跨域的额外信息，但不会含cookie
                    success: function(res){
                        console.log(res.code);
                        if (res.code !=0){
                            alert(res.msg)
                        } else {
                            window.location.replace(res.data.qr_code)
                        }
                    }});
            });

        }
       /* if (ua.match(/AlipayClient/i) == 'alipayclient' ||ua.match(/MicroMessenger/i) == 'micromessenger') {

        }else{
         location.replace('http://404')
        }*/
    }
    IsWeixinOrAlipay();
    // getUrl ()
    function getUrl (){   // 获取重定向地址
        let data = {
            "type":0,
            "account":GetQueryString('account'),//"gh_81a0e00e0e34",   //todo  公众号id
            "url":"http://dev.web.jiangxinit.com/test.html",  //window.location.host+'/pos.html' //todo 测试or正式
            "tradeNo":GetQueryString('tradeno'),
            "mchntCd":GetQueryString('mchntcd'),
            "tcode":GetQueryString('tcode')?GetQueryString('tcode'):''
        };
        $.ajax({
            type: 'POST',
            contentType:'application/json',
            url:wxUrl+"/oAuthUrl",
            data: JSON.stringify(data),
            success: function(res){
                    //页面重定向  获取code
               location.replace(res.data.url)
            }});
    }
    if (GetQueryString('openid')) {
        openId = GetQueryString('openid');
        appId = GetQueryString('appid')
    }
    //getOpenid()  //todo
    function getOpenid() {
        let data = {
            "url":'http://web.jiangxinit.com/pos.html', //"http://dev.web.jiangxinit.com/pos.html",
            "mchntCd":GetQueryString('mchntcd') ,  //"0002900F0370588",
            "tradeno":GetQueryString('tradeno'),
            "tcode":GetQueryString('tcode'),
            "sid":GetQueryString('sid')
            // "mchntcd":GetQueryString('mchntcd')
        };
        $.ajax({
            type: 'POST',
            contentType:'application/json',
            url:allUrl+"/oAuthOpenIdByFuiou",
            data: JSON.stringify(data),
            success: function(res){
                if (res.data){
                    console.log(res)
                    let redUrl = res.data
                    window.location.replace(redUrl)
                }
            }});
    }

    /*function GetRequest() {  //获取openid appId
        let data = {
            "code":unique.code,
            "account":unique.state
        } ;
        $.ajax({
            type:"POST",
            url:wxUrl+"/oAuthOpenId",
            contentType:'application/json',
            data:JSON.stringify(data),
            success: function(res){
                appId = res.data.appid ;
                openId = res.data.openid;
            }
        })
    }*/
        //获取店铺名字


   getOrder()  //todo
    function getOrder() { // 订单查询  金额
        let data = {
            "tradeNo":GetQueryString('tradeno'),
            "mchntCd":GetQueryString('mchntcd'),
            "tcode":GetQueryString('tcode'),
            "sid":GetQueryString('sid')
        };
        $.ajax({
            type:"POST",
            // url:"http://192.168.0.16:8088/api/pay/greceipt",
            url:allUrl+'/greceipt',
            contentType:'application/json',
            data:JSON.stringify(data),
            success: function(res){
                console.log(res);
                $('#shopName').html(res.data.shortName);
                if (res.code != 0){
                    alert(res.msg);
                    // $("#pos").hide();
                }
				if(res.data.receipt == null){
					alert("订单还没生成，请服务员生成支付订单！")
				}
                $('#shopName').html(res.data.shortName);
                tradeno = res.data.receipt.tradeNo ; // 订单号
                price = res.data.receipt.amount;
                $('#money').html(price);
                $('.rnb').html('￥');
                $('.tablesName').html(res.data.receipt.tablesName);  //桌名
                $('.tables').html(flexRow('桌名：'+res.data.receipt.tablesName,'桌号：'+res.data.receipt.tablesId) );
                $('#people').html(flexRow('账单号：'+res.data.receipt.shopOrderId,'人数：'+res.data.receipt.peopleNum) );  //账单号  人数

                $('#createTime').html(flexRow('时间：', res.data.receipt.createTime)) ;
                $('#menuFee').html( flexRow("餐费： ",'￥'+res.data.receipt.mealFee));

                if (res.data.receipt.discount != 1) {
                    $('#discounts').html( flexRow("折扣率： "+res.data.receipt.discount*100+'%',"折扣金额： ￥"+res.data.receipt.dsAmount));
                }
                if (res.data.receipt.directDsAmount != 0) {
                    $('#zero').html(flexRow("去零金额： ","￥"+res.data.receipt.directDsAmount));
                }
                if (res.data.receipt.addFee !== 0) {
                    $('#serviceCharge').html(flexRow("服务费： ","￥"+res.data.receipt.addFee));
                }
                res.data.receipt.menuList.forEach(function (item) {
                    text += `<li>
                            <span>${getItem(item.menuName)}</span><span>${getItem(item.num)}</span>
                            <span>${getItem(item.unit)}</span><span>${getItem(item.price)}</span>
                           </li>`;
                    return text
                });
                $('.toggle-menu').html(text);

                status = res.data.receipt.status;
                if (status != 1){
                    $('#pos-but').css("background-color","rgb(144, 147, 153)");
                    $('#pos-but').attr('disabled',true);

                }else{
                    $('#pos-but').css("background-color","#67c23a");
                    $('#pos-but').attr('disabled',false);
                }
            }
        })
    }

    /*if (GetQueryString('mchntcd')) {  // 判断url有没有商户号
        getShop();
    }*/

    function flexRow(val,name) {  //生成标签
        let row = '';

       // if (type===2){
           if(val && name){
               row =  ` <div class="flex-1 "><span>${val}</span> </div>
                        <div class="text-1" > <span>${name}</span></div>`;
               return row
           }
       // }
    }



    /**
     * @return {string}
     */
    function GetQueryString(name) {   //获取url  的参数
        let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
        if(r!=null)return  unescape(r[2]); return null;
    }

    function getItem(item){   //返回获取的参数 是否 为空
           if (item) return item;return''
    }

    $(document).ready(function(){
       let targetLayer = $("#toggle-head");
       $('.scroll').hide();
        targetLayer.click(function(){
            // console.log($(this).next().is(":hidden"));
            if($(this).next().is(":hidden")){
                $(this).children().next().html('&#xe731;');
            }
            else{
                $(this).children().next().html('&#xe72f;');
            }
            $(this).next().slideToggle();
            // targetLayer.not(this).html('&#xe607;');
            targetLayer.not(this).parent().next().slideUp();

        });
    });
});


