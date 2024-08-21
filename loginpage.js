function SubForm (){
    // var name=document.getElementById("name").value
    // var email=document.getElementById("email").value
    // var password=document.getElementById("password").value

    // if(name==""|| email=="" || password==""){
    //     alert("* are required feilds");
    // }
    $.ajax({
        url:'https://api.apispreadsheets.com/data/H802gGPBrt7qUddT/',
        type:'post',
        data:$("#newForm").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
          location.reload()
        },
        error: function(){
          alert("There was an error :(")
        }
    });
   
}

function submit(){

const sheetId = "1J0W21jRKn5Bxbw9jVWIqQwb24OrR7PEMNQMB-bHl4_w";

const sheetName = encodeURIComponent("Sheet1");
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

$.ajax({
  type: "GET",
  url: sheetURL,
  dataType: "text",
  success: function (response) {
    var data = $.csv.toArrays(response);
    var data = $.csv.toObjects(response);
    console.log(data.length)
    var emailInput=document.getElementById("emailInput").value
    for(var i=0;i<data.length;i++){
        if(emailInput==data[i]["email"]){
        console.log("got it");
        
        
        indexValue=i;
        break;
        }
        else{
           
            indexValue=-1
        }
    }
    // var circlevalue=document.querySelector("#circlevalue");
    //     var dats=data[indexValue]["Name"]
    //     circlevalue.innerHTML=dats[0]
        // alert(dats[0])
    if(indexValue==-1){
        alert("Acoount not found ")
        location.reload()
    }
    else{
    var passwordInput=document.getElementById("passwordInput").value;
    if(passwordInput==data[indexValue]["password"]){
        window.open('labs.html','_self');
    }
    else{
        alert("Check your email and password")
        location.reload()
    }
}
}})

}



