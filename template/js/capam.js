$(document).ready(function() {
    var host = "http://capam.herokuapp.com/post/js/";
    var id_length = 128;

    function randomID() {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var randomstring = '';
        for (var i = 0; i < id_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
        return randomstring;
    }

    var setUserID = function() {
        var id = randomID();
        document.cookie = "id=" + id + ";max-age=2592000;";
        return id;
    };

    var getUserID = function() {
        cookie = document.cookie;

        if (cookie.length > 0) {
            if (cookie.indexOf('id=') !== -1) {
                var ind = cookie.indexOf('id=') + 3;
                return cookie.substring(ind, id_length);
            } else {
                return setUserID();
            }
        } else {
            return setUserID();
        }
    };

    $.ajax({
        data: {
            'referrer': document.referrer,
            'token': token,
            'userid': getUserID
        },
        type: 'POST',
        url: host
    });
});
