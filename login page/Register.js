function  validation(){

    
    document.getElementById("t").style.display = "block";

    var fname = document.getElementById('fname').value;
    document.getElementById('f').innerHTML="";
    if(fname==""){
        document.getElementById('f').innerHTML="plese enter the firstname";
        return false;
    }else{
        document.getElementById('fn').innerHTML=fname;
    }
    if((fname.length  <=2) || (fname.length >20)){
        document.getElementById('f').innerHTML="fname must be  2 to 20  charachter";
        return false;

    }
    
    
   
    var lname =document.getElementById('lname').value;
    document.getElementById('l').innerHTML="";
    if(lname==""){
        document.getElementById('l').innerHTML="plese enter the last name";
        return false;
    }
    else{
        document.getElementById('ln').innerHTML=lname;
    }
    if(!isNaN(lname)){
        document.getElementById('l').innerHTML="number are not allowed";
        return false;
    }

    var email = document.getElementById('email').value;
    document.getElementById('em').innerHTML="";
    if(email == ""){
        document.getElementById('em').innerHTML="please enter  the email id";
        return false;
    }else{
        document.getElementById('eid').innerHTML=email;
    }
    if(email.indexOf('@')<=0){
        document.getElementById('em').innerHTML="@invalid position";
        return false;
    }


    var mno = document.getElementById('mno').value;
    document.getElementById('mo').innerHTML="";
    if(mno==""){
        document.getElementById('mo').innerHTML="plese enter the  mobail number";
        return false;
    }
    else{
        document.getElementById('mn').innerHTML=mno;
    }
    if(mno.length != 10){
        document.getElementById('mo').innerHTML=" please enter 10 digit only";
        return false;
    }
    if(isNaN(mno)){
        document.getElementsById('mo').innerHTML="character are not allowed";
    }
    


    var pwd = document.getElementById('pwd').value;
    document.getElementById('ps').innerHTML="";
    if(pwd==""){
        document.getElementById('ps').innerHTML="password are required";
        return false;
    }else{
        document.getElementById('pw').innerHTML=pwd;
    }
    if((pwd.length <=4) || (pwd.length > 8)){
        document.getElementById('ps').innerHTML="password must be between 4 to 8  numbers";
        return false;
    }

    var pwds = document.getElementById('pwds').value;
    document.getElementById('pss').innerHTML="";
    if(pwds==""){
        document.getElementById('pss').innerHTML=" confrim password are required";
        return false;
    }else{
        document.getElementById('cpw').innerHTML=pwds;
    }
    if(pwd!=pwds){
        document.getElementById('pss').innerHTML="password is not matched";
        return false;
    }


    
 alert("registration successfully");
}


