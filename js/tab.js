;(function($,undefined){
    var added=false;
    function Tab(option){
        this.root=$(option.root);
        this.tabNav=this.root.find('.tabBtn li');//菜单栏
        this.tabTest=this.root.find('.tabTest div');//隐藏内容
        this.init();
    }
    Tab.prototype={
        init:function(){
            var that=this;
            this.tabNav.each(function(i){
                $(this).hover(function(){
                    that.tabNav.removeClass('cur');
                    $(this).addClass('cur');
                    that.tabTest.eq(i).show().siblings().hide();            
                })
            })
        }
    }
    if(!added){
        var oLink=document.createElement('link');
        oLink.href="style/tab.css";
        oLink.rel="stylesheet";
        var oHead=document.getElementsByTagName('head')[0];
        oHead.appendChild(oLink);
    }
    window.Tab=Tab;
})(jQuery)
 