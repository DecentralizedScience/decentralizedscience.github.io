$(document).ready(function() {
    $("#phplistsubscribeform").submit(function() {
        var d = $("#emailaddress").val();
        var e = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var f = this.action;
        ajaxaddress = f.replace(/subscribe/, 'asubscribe');
        if (e.test(d)) {
            var g = $.ajax({
                type: 'POST',
                url: ajaxaddress,
                crossDomain: true,
                data: "email=" + d,
                success: function(a, b, c) {
                    if (a.search(/FAIL/) >= 0) {
                        document.location = f + "&email=" + d
                    } else {
                        $("#phplistsubscribeform").html(thanksForSubscribing)
                    }
                },
                error: function(a, b, c) {
                    document.location = f + "&email=" + d
                }
            })
        } else {
            document.location = f + "&email=" + d
        }
        return false
    });
});
if (thanksForSubscribing == undefined) {
    var thanksForSubscribing = '<div class="subscribed">Thanks for subscribing. Please click the link in the confirmation email you will receive.</div>'
}
