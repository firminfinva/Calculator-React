

function eval2(str){
   
    const  calc = (a,b) => a*b
    const calcpow = (a,b) => a**b
    const calcdiv = (a, b) => Number(a)/Number(b)
    const calcmod = (a,b) => Number(a) % Number(b)
    function getleftandrightel(str3, operation){
        let index = str3.indexOf(operation)

        let leftside = str3.slice(0,index)
        let leftel = ""
        for(let i=leftside.length-1;i>-1;i--){
            if((+leftside[i])||(leftside[i]=="0")||(leftside[i]==".")) leftel += leftside[i]
            else break  
        }
        leftel = leftel.split("").reverse().join("")
    
        let rightside = str3.slice(index+1,str3.length)
        let rightel = ""
        for(let i=0;i<rightside.length;i++){
            if((+rightside[i])||(rightside[i]=="0")||(rightside[i]==".")) rightel += rightside[i]
            else break
        }

        return [leftel,rightel,index]
    }
    
    while(str.includes("^")){
        let indexpow= str.indexOf("^")
        let arr = getleftandrightel(str, "^")    
        let element = calcpow(arr[0],arr[1])
        str = str.replace(str.slice(arr[2]-arr[0].length, arr[2]+arr[1].length+1),element.toString())
    

    }

    while((str.includes("/"))||(str.includes("%"))){
        let indexdiv = str.indexOf("/")
        let indexmod = str.indexOf("%")
   
        if((indexdiv>-1)&&(indexmod>-1)){
            if(indexdiv>indexmod){
                let arr = getleftandrightel(str, "%")    
                let element = calcmod(arr[0],arr[1])
                str = str.replace(str.slice(arr[2]-arr[0].length, arr[2]+arr[1].length+1),element.toString())
            }else{
                let arr = getleftandrightel(str, "/")    
                let element = calcdiv(arr[0],arr[1])
                str = str.replace(str.slice(arr[2]-arr[0].length, arr[2]+arr[1].length+1),element.toString())
            }
        }else if(indexdiv>-1){
            let arr = getleftandrightel(str, "/")    
            let element = calcdiv(arr[0],arr[1])
            str = str.replace(str.slice(arr[2]-arr[0].length, arr[2]+arr[1].length+1),element.toString())
        }else if(indexmod>-1){
            let arr = getleftandrightel(str, "%")    
            let element = calcmod(arr[0],arr[1])
            str = str.replace(str.slice(arr[2]-arr[0].length, arr[2]+arr[1].length+1),element.toString())
        }
        
    }
    
    while(str.includes("*")){
        let arr = getleftandrightel(str, "*")    
        let element = calc(arr[0],arr[1])
        str = str.replace(str.slice(arr[2]-arr[0].length, arr[2]+arr[1].length+1),element.toString())
    }
    str = str.replace("e+", "^")

    let arr = str.split("+").map(function(el){
        if(+el) return +el
        else return el
      
    })
    str = str.replace("^", "e+")
    let arr2 = arr.map(function(el){
        if((typeof el)=="string"){
            if(el.includes("^")){
                el = el.replace("^", "e+")
            }
            el = el.split("-")
            let ans = 0
            for(let i=1;i<el.length;i++){

                if((el[i-1]=="") && i!=1) ans -= +el[i]
                else ans+= +el[i]
            }
            return el[0]-ans
        }else return el
            
    })
  
    let ans = 0
    for(let i=0;i<arr2.length;i++){
        ans += arr2[i]
    } 

    return ans
}

let optab = ["+","/","*","%","(",")"] 
let mathtab = ["sin", "sqrt", "log10", "log", "cos", "tan", "round", "floor","exp","E"]
let mathtab2 = ["sin", "cos", "tan"]
function getleftonly(leftstr){
    let leftel2 = ""
    for(let i=leftstr.length-1;i>-1;i--){
        if(!optab.includes(leftstr[i])) leftel2 += leftstr[i]
        else break  
    }
    leftel2 = leftel2.split("").reverse().join("")       
    let lefttype = 0, lefttypemultiplier = 0
    if(+leftel2){
        lefttype = 1
    }else{
        let strleftel2 = ''
        for(let i=0;i<leftel2.length;i++){
            if((!(+leftel2[i])) ||(i!=0)){
                strleftel2+= leftel2[i]
            }
        }
      
        if(leftel2.length!=strleftel2.length){
            lefttypemultiplier = 1
        }
        leftel2 = strleftel2
    }
    return [leftel2, lefttype, lefttypemultiplier]
}

export default function myeval(str2){
    str2 = str2.replaceAll("**","^")
    str2 = str2.replaceAll("[","(") ; str2 = str2.replaceAll("]",")")
    str2 = str2.replaceAll("{","(") ; str2 = str2.replaceAll("}",")")
    let opens = 0; let closed = 0
    for(let i=0;i<str2.length;i++){
        if(str2[i]=="(") opens += 1
        else if(str2[i]==")") closed += 1
    }
    if(opens==closed){
        while(str2.includes("(")){   
            let begind = 0; let endind = 0
            for(let i=0;i<str2.length;i++){
                if(str2[i]=="(") begind=i
                if((str2[i]==")") && (begind<i) && (endind==0)) endind = i
                if(begind<endind) break 
            }  

            if((optab.includes(str2[begind-1]))||(!begind)){
                if(str2[endind+1]){
                    if((!optab.includes(str2[endind+1])) && (str2[endind+1]!="(")){
                       
                        str2 = str2.replace(str2.slice(begind,endind+1), eval2(str2.slice(begind+1,endind)).toString()+ "*")
                    }else  str2 = str2.replace(str2.slice(begind,endind+1), eval2(str2.slice(begind+1,endind)).toString())
               
                }else str2 = str2.replace(str2.slice(begind,endind+1),"*" + eval2(str2.slice(begind+1,endind)).toString())
              
            }else{
                let sliceleft = getleftonly(str2.slice(0,begind))
                if(sliceleft[1]==1){
                    if(str2[endind+1]){
                        if((!optab.includes(str2[endind+1])) && (str2[endind+1]!="(")){
                           
                            str2 = str2.replace(str2.slice(begind,endind+1),"*" + eval2(str2.slice(begind+1,endind)).toString()+ "*")
                        }else  str2 = str2.replace(str2.slice(begind,endind+1),"*" + eval2(str2.slice(begind+1,endind)).toString())
                   
                    }else str2 = str2.replace(str2.slice(begind,endind+1),"*" + eval2(str2.slice(begind+1,endind)).toString())
                   
                }else{
                   
                    let funparam =  eval2(str2.slice(begind+1,endind)) 
                
                    let thefunction = ""
                    let myFunction = ""
                    if(mathtab.includes(sliceleft[0])){
                        if(mathtab2.includes(sliceleft[0])){
                            funparam *= Math.PI/180
                        }
                        thefunction = "Math." +  (sliceleft[0]+'('+ funparam +')')
                        myFunction = new Function("return " + thefunction)().toFixed(10)
                    }

                    if(sliceleft[2]){
                        str2 = str2.replace(str2.slice(begind-sliceleft[0].length,endind+1),"*" + (+myFunction).toString())
                    }else{
                        str2 = str2.replace(str2.slice(begind-sliceleft[0].length,endind+1), (+myFunction).toString())
                    }
                
                }
               
            }
           
        }
        return eval2(str2)
    }else return "Check your expression please"
    
}