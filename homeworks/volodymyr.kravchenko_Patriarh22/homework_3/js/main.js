(function(){

    console.log(this);

    this.setTimeout = function(delay, callback){
        var date = Date.now();
        while(Date.now() < date + delay){}
        try {
            callback.call();
        }
        catch (exception) {
            console.log('=====Error====');
            console.log(exception);
        }
    };

    this.setInterval = function(callback, delay){
        this.setTimeout(delay, callback);
        this.setInterval(callback, delay);
    };

    function timeOutCallback(){
        alert('======TimeOut========');
    }

    this.setInterval(function (){timeOutCallback()}, 2000);

})();