var table=document.createElement("table")
table.setAttribute("id","calculator")

var row=document.createElement("tr")



var data=document.createElement("td")
data.setAttribute("colspan","3")


var input =document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("class","display-box")
input.setAttribute("id","result")

var data1= document.createElement("td")


var clear =document.createElement("input")
clear.setAttribute("type","button")
clear.setAttribute("id","btn")
clear.setAttribute("onclick","clearScreen()")
clear.setAttribute("value","C")

var row1=document.createElement("tr")


var data2=document.createElement("td")
var data3=document.createElement("td")
var data4=document.createElement("td")
var data5=document.createElement("td")

var one =document.createElement("input")
one.setAttribute("type","button")
one.setAttribute("onclick","display('1')")
one.setAttribute("value","1")

var two =document.createElement("input")
two.setAttribute("type","button")
two.setAttribute("onclick","display('2')")
two.setAttribute("value","2")

var three =document.createElement("input")
three.setAttribute("type","button")
three.setAttribute("onclick","display('3')")
three.setAttribute("value","3")

var add =document.createElement("input")
add.setAttribute("type","button")
add.setAttribute("onclick","display('+')")
add.setAttribute("value","+")

var row2=document.createElement("tr")


var data6=document.createElement("td")
var data7=document.createElement("td")
var data8=document.createElement("td")
var data9=document.createElement("td")

var four =document.createElement("input")
four.setAttribute("type","button")
four.setAttribute("onclick","display('4')")
four.setAttribute("value","4")

var five =document.createElement("input")
five.setAttribute("type","button")
five.setAttribute("onclick","display('5')")
five.setAttribute("value","5")

var six =document.createElement("input")
six.setAttribute("type","button")
six.setAttribute("onclick","display('6')")
six.setAttribute("value","6")

var sub =document.createElement("input")
sub.setAttribute("type","button")
sub.setAttribute("onclick","display('-')")
sub.setAttribute("value","-")

var row3=document.createElement("tr")


var data10=document.createElement("td")
var data11=document.createElement("td")
var data12=document.createElement("td")
var data13=document.createElement("td")

var seven =document.createElement("input")
seven.setAttribute("type","button")
seven.setAttribute("onclick","display('7')")
seven.setAttribute("value","7")

var eight =document.createElement("input")
eight.setAttribute("type","button")
eight.setAttribute("onclick","display('8')")
eight.setAttribute("value","8")

var nine =document.createElement("input")
nine.setAttribute("type","button")
nine.setAttribute("onclick","display('9')")
nine.setAttribute("value","9")

var mul =document.createElement("input")
mul.setAttribute("type","button")
mul.setAttribute("onclick","display('*')")
mul.setAttribute("value","x")

var row4=document.createElement("tr")


var data14=document.createElement("td")
var data15=document.createElement("td")
var data16=document.createElement("td")
var data17=document.createElement("td")

var fstop =document.createElement("input")
fstop.setAttribute("type","button")
fstop.setAttribute("onclick","display('.')")
fstop.setAttribute("value",".")

var zero =document.createElement("input")
zero.setAttribute("type","button")
zero.setAttribute("onclick","display('0')")
zero.setAttribute("value","0")

var divi =document.createElement("input")
divi.setAttribute("type","button")
divi.setAttribute("onclick","display('/')")
divi.setAttribute("value","/")

var equal =document.createElement("input")
equal.setAttribute("type","button")
equal.setAttribute("onclick","calculate()")
equal.setAttribute("value","=")




data16.append(divi)
data17.append(equal)
data15.append(zero)
data14.append(fstop)
row4.append(data14,data15,data16,data17)
data13.append(mul)
data12.append(nine)
data11.append(eight)
data10.append(seven)
row3.append(data10,data11,data12,data13)
data9.append(sub)
data8.append(six)
data7.append(five)
data6.append(four)
row2.append(data6,data7,data8,data9)
data5.append(add)
data4.append(three)
data3.append(two)
data2.append(one)
row1.append(data2,data3,data4,data5)
data.append(input)
data1.append(clear)
// row.append(data)
row.append(data,data1)
table.append(row,row1,row2,row3,row4)
document.body.append(table)


function clearScreen(){
    document.getElementById("result").value="";
}

function display(value){
    document.getElementById("result").value+=value;
}

function calculate(){
    var p=document.getElementById("result").value;
    var q=eval(p)
    document.getElementById("result").value=q
}

