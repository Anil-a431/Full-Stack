function validate(){
    var mob=document.getElementById("txtMobile").value;
    var user=document.getElementById("txtUsername").value;
    var email=document.getElementById("txtEmaild").value;
    var roll=document.getElementById("txtRollNumber").value;
    var m=/^[6-9][0-9]{9}$|^[0][6-9][0-9]{9}$|^[+][9][1][6-9][0-9]{9}$/;
    var e=/^[a-zA-Z0-9._-]{6,12}[@][a-z]{3,15}[.][a-z]{2,6}$/;
    var r=/^[2][2][1][7][1][0][3][0-9]{2}[0-9]{3}$/;
    if(mob=='' || user=='' || email=='' || roll == ''){
       window.alert('Please enter all the fields');
       return false;
    }
    else{
        if(m.test(mob)&&e.test(email)&&r.test(roll)){
            window.alert("Valid");
            return true;
        }
        else{
            window.alert("Invalid");
            return false;
        }   
    }
}