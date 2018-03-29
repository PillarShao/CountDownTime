function countdownTime(data){            
    var endTime = new Date(data);
    var nowTime = new Date();
    var cTime = endTime -nowTime;
    var result = {};
    //add 0
    function addZero(n){
        if(n<10){
            n = '0' + n
        }
        return n;
    }
    //get data
    if(cTime>0){
        result.staus = 1;                
        result.day = addZero(parseInt(cTime/1000/60/60/24));
        result.hour = addZero(parseInt(cTime/1000/60/60%24));
        result.minutes = addZero(parseInt(cTime/1000/60%60));
        result.sencond = addZero(parseInt(cTime/1000%60));
    }else{
        result.staus = 0;
    }
    return result;
}

//初始结束如期
var now = Date.parse(new Date());
var endTime = new Date(now + 6*1000*60*60*24);        
document.getElementById('endtime').innerHTML = endTime.getFullYear()+'年'+(endTime.getMonth()+1)+'月'+endTime.getDate()+'日'+endTime.getHours()+'时'+endTime.getMinutes()+'分'+endTime.getSeconds()+'秒';

var timer = setInterval(function(){            
    var data = countdownTime(endTime);
    if(data.staus == 1){
        document.getElementById('day').innerHTML = data.day;
        document.getElementById('hour').innerHTML = data.hour;
        document.getElementById('minutes').innerHTML = data.minutes;
        document.getElementById('sencond').innerHTML = data.sencond;
    }else{
        document.getElementsByClassName('result')[0].innerHTML = '时间已过！'
    }            
},1000)  