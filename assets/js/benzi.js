$(document).ready(function() {
    $("#code-submit").click(function () {
        if($("#code").val() === ""){
            $("#msgTitle").text("神秘代码为空");
            $("#msg").text("你好像还没有填写神秘代码");
            $('#Modal').modal('show');
        }else {
            $.ajax({
                url: "api.php?mode=activeCode&code=" + $("#code").val(), async: true, success: function (result) {
                    $("#msgTitle").text("返回消息");
                    $("#msg").text(result.errMsg);
                    $('#Modal').modal('show');
                    console.log(result);
                }, cache: false
            });
        }
    });
});