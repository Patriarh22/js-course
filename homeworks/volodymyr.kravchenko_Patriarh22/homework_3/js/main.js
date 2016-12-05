(function(){

    console.log(this);

    window.realTimeOut = window.setTimeout;

    window.setTimeout = function (delay, callback) {
        return window.realTimeOut(function () {
            try {
                callback();
            }
            catch (exeption){
                console.log('========error========');
            }}, delay)
    };


    // window.setTimeout = function(delay, callback){
    //     var date = Date.now();
    //     while(Date.now() < date + delay){}
    //     try {
    //         callback.call();
    //     }
    //     catch (exception) {
    //         console.log('=====Error====');
    //         console.log(exception);
    //     }
    // };

    window.setInterval = function(callback, delay){
        window.setTimeout(delay, function(){callback()});
        window.setInterval(function(){callback()}, delay);
    };

    function timeOutCallback(){
        alert('=====TimeOut Done====');
    }

    setInterval(function (){timeOutCallback()}, 2000);
    // setTimeout(5000, function (){timeOutCallback()});

})();