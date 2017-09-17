"use strict";

(function(){
    $("#submit").click(function(){
        var _searchContent = $("#search").val();
        if (_searchContent) {
            window.open("https://www.baidu.com");
            $("#kw").html(function(){
                return _searchContent;
            });
            $("#su").click();
        }
    })
})()