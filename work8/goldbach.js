// 判断一个数是否是质数
function hzy(num){                                                         
    var sum = 0;                                                                  
    for(var d=1;d<=num;d++){                                                                                                      
        if (num % d==0){
            sum++;
        }
    }
    if (sum==2){
        return true;
    }else{
        return false;
    }
}
// 判断用户输入的偶数是否可分为两个质数之和
function goldbach(double){
     double = document.getElementById("double").value
     double = parseInt(double);
     let str=''
for(var b=2;b<double;b++){
    var c=double-b;
    if(hzy(b) && hzy(c) &&b<=c){
     str += (double+"可以拆分为两个质数"+ b+"与"+c+"的和"+'<br>');
    }
}
document.getElementById("goldbach").innerHTML = str;
}


    