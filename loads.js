var auto=1;
 const mode=document.getElementById("mode");
var lab1,lab2,lab3,lab4,lab5,lab6,lab7,lab8=0;
var count1,count2,count3,count4,count5,count6,count7,count8=0;
function Syncs(){
  // light3 count8
  fetch('https://blynk.cloud/external/api/get?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v5') // switch
     .then(response => response.json())
     .then(data => {
       const myJSON = JSON.stringify(data);
      lab1=myJSON;
     
      if(lab1==1){
        $("#light3").addClass("fa-beat");
        $("#light3").css("color","green");
        count8=1
        
      }
      else{
        $("#light3").removeClass("fa-beat");
        $("#light3").css("color","rgb(140, 178, 181)");
        count8=0;
      }
      })
//  fan5 count7
      fetch('https://blynk.cloud/external/api/get?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v0') // switch
     .then(response => response.json())
     .then(data => {
       const myJSON = JSON.stringify(data);
      lab2=myJSON;
      if(lab2==1){
        $("#fan5").addClass("fa-spin");
        $("#fan5").css("color","green");
        count7=1
      }
      else{
        $("#fan5").removeClass("fa-spin");
        $("#fan5").css("color","rgb(140, 178, 181)");
        count7=0;
      }
      })
//fan1 count1
fetch('https://blynk.cloud/external/api/get?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v1') // switch
     .then(response => response.json())
     .then(data => {
       const myJSON = JSON.stringify(data);
      lab3=myJSON;
      if(lab3==1){
        $("#fan1").addClass("fa-spin");
        $("#fan1").css("color","green");
        count1=1
       
      }
      else{
        $("#fan1").removeClass("fa-spin");
        $("#fan1").css("color","rgb(140, 178, 181)");
        count1=0;
      }
      })
//fan2 count3
fetch('https://blynk.cloud/external/api/get?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v4') // switch
     .then(response => response.json())
     .then(data => {
       const myJSON = JSON.stringify(data);
      lab4=myJSON;
      if(lab4==1){
        $("#fan2").addClass("fa-spin");
        $("#fan2").css("color","green");
        count3=1
       
      }
      else{
        $("#fan2").removeClass("fa-spin");
        $("#fan2").css("color","rgb(140, 178, 181)");
        count3=0;
      }
      })
//fan3 count4
fetch('https://blynk.cloud/external/api/get?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v4') // switch
.then(response => response.json())
.then(data => {
  const myJSON = JSON.stringify(data);
 lab5=myJSON;
 if(lab5==1){
   $("#fan3").addClass("fa-spin");
   $("#fan3").css("color","green");
   count4=1
  
 }
 else{
   $("#fan3").removeClass("fa-spin");
   $("#fan3").css("color","rgb(140, 178, 181)");
   count4=0;
 }
 })

 //fan4 count6
fetch('https://blynk.cloud/external/api/get?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v2') // switch
.then(response => response.json())
.then(data => {
  const myJSON = JSON.stringify(data);
 lab6=myJSON;
 if(lab6==1){
   $("#fan4").addClass("fa-spin");
   $("#fan4").css("color","green");
   count6=1
  
 }
 else{
   $("#fan4").removeClass("fa-spin");
   $("#fan4").css("color","rgb(140, 178, 181)");
   count6=0;
 }
 })

// light1 count2
fetch('https://blynk.cloud/external/api/get?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v2') // switch
.then(response => response.json())
.then(data => {
  const myJSON = JSON.stringify(data);
 lab7=myJSON;
 if(lab7==1){
   $("#light1").addClass("fa-beat");
   $("#light1").css("color","green");
   count6=1
  
 }
 else{
   $("#light1").removeClass("fa-beat");
   $("#light1").css("color","rgb(140, 178, 181)");
   count6=0;
 }
 })

//light2 count5
fetch('https://blynk.cloud/external/api/get?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v0') // switch
.then(response => response.json())
.then(data => {
  const myJSON = JSON.stringify(data);
 lab8=myJSON;
 if(lab8==1){
   $("#light2").addClass("fa-beat");
   $("#light2").css("color","green");
   count5=1
  
 }
 else{
   $("#light2").removeClass("fa-beat");
   $("#light2").css("color","rgb(140, 178, 181)");
   count5=0;
 }
 })


}
 setInterval(Syncs,3000)


// Automation Mode V4
mode.addEventListener("change", () => {
    if (mode.checked) {
   fetch('https://blynk.cloud/external/api/update?token=s2291g1WHa7xVg5Sz8MD1Kx2nJ_BfwpL&v4=1')
  .then(response => {
    if (response.ok) {
      console.log("on"); // Log success message to console
      // auto=1;
    } else {
      throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
    }
  })
  .catch(error => console.error(error));
  fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v8=1')
  .then(response => {
    if (response.ok) {
      console.log("on"); // Log success message to console
      auto=1;
    } else {
      throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
    }
  })
  .catch(error => console.error(error));
}


else{
        fetch('https://blynk.cloud/external/api/update?token=s2291g1WHa7xVg5Sz8MD1Kx2nJ_BfwpL&v4=0')
        .then(response => {
          if (response.ok) {
            console.log("off"); // Log success message to console
           //write the code here
            auto=0;
          } else {
            throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
          }
        })
        .catch(error => console.error(error));
        
        fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v8=0')
        .then(response => {
          if (response.ok) {
            console.log("off"); // Log success message to console
            auto=0;
          } else {
            throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
          }
        })
        .catch(error => console.error(error));
        }
  })

// load1
$(".light1").click(function(){ 
  if(count2==1){
    fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v2=0').then(response=>{
     if(response.ok){
       $("#light1").removeClass("fa-beat");
       $("#light1").css("color","rgb(140, 178, 181)");
       
     }
     else{
       throw new Error("failed")
     }
    }).catch(error=>console.error(error));
    count2=0
  
 }
 else{
   fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v2=1').then(response=>{
     if (response.ok) {
       $("#light1").addClass("fa-beat")
       $("#light1").css("color","green")
      }
     else {
       throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
     }
 }).catch(error => console.error(error)); 
 count2=1;

}

})


// load2
$(".light2").click(function(){
  if(count5==1){
    fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v0=0').then(response=>{
     if(response.ok){
       $("#light2").removeClass("fa-beat");
       $("#light2").css("color","rgb(140, 178, 181)");
       
     }
     else{
       throw new Error("failed")
     }
    }).catch(error=>console.error(error));
    count5=0
  
 }
 else{
   fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v0=1').then(response=>{
     if (response.ok) {
       $("#light2").addClass("fa-beat")
       $("#light2").css("color","green")
      }
     else {
       throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
     }
 }).catch(error => console.error(error)); 
 count5=1;

}
  
})
//   load3
$(".light3").click(function(){
  console.log("hello light")
  console.log("count3 inside",count3)
  
  if(count8==1){
    fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v5=0').then(response=>{
     if(response.ok){
       console.log("off light3");
       $("#light3").removeClass("fa-beat");
       $("#light3").css("color","rgb(140, 178, 181)");
       
     }
     else{
       throw new Error("failed")
     }
    }).catch(error=>console.error(error));
    count8=0
  
 }
 else{
   fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v5=1').then(response=>{
     if (response.ok) {
       console.log("on light3"); // Log success message to console
       $("#light3").addClass("fa-beat")
       $("#light3").css("color","green")
     

     } else {
       throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
     }
 }).catch(error => console.error(error)); 
 count8=1;

}

})

//   load4
$(".fan1").click(function(){
  if(count1==1){
    fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v1=0').then(response=>{
     if(response.ok){
       console.log("off light3");
       $("#fan1").removeClass("fa-spin");
       $("#fan1").css("color","rgb(140, 178, 181)");
       
     }
     else{
       throw new Error("failed")
     }
    }).catch(error=>console.error(error));
    count1=0
 }
 else{
   fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v1=1').then(response=>{
     if (response.ok) {
       console.log("on light3"); // Log success message to console
       $("#fan1").addClass("fa-spin")
       $("#fan1").css("color","green")
     

     } else {
       throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
     }
 }).catch(error => console.error(error)); 
 count1=1;
 
}
})

//   load5
$(".fan2").click(function(){
  if(count3==1){
    fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v4=0').then(response=>{
     if(response.ok){
       console.log("off light3");
       $("#fan2").removeClass("fa-spin");
       $("#fan2").css("color","rgb(140, 178, 181)");
       
     }
     else{
       throw new Error("failed")
     }
    }).catch(error=>console.error(error));
    count3=0
 }
 else{
   fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v4=1').then(response=>{
     if (response.ok) {
       console.log("on light3"); // Log success message to console
       $("#fan2").addClass("fa-spin")
       $("#fan2").css("color","green")
     

     } else {
       throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
     }
 }).catch(error => console.error(error)); 
 count3=1;
 
}
})
// load6

  $(".fan3").click(function(){
    if(count4==1){
      fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v4=0').then(response=>{
       if(response.ok){
         console.log("off light3");
         $("#fan3").removeClass("fa-spin");
         $("#fan3").css("color","rgb(140, 178, 181)");
         
       }
       else{
         throw new Error("failed")
       }
      }).catch(error=>console.error(error));
      count4=0
   }
   else{
     fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v4=1').then(response=>{
       if (response.ok) {
         console.log("on light3"); // Log success message to console
         $("#fan3").addClass("fa-spin")
         $("#fan3").css("color","green")
       
  
       } else {
         throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
       }
   }).catch(error => console.error(error)); 
   count4=1;
   
  }
  })
   // load7
   $(".fan4").click(function(){
    if(count6==1){
      fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v2=0').then(response=>{
       if(response.ok){
         console.log("off light3");
         $("#fan4").removeClass("fa-spin");
         $("#fan4").css("color","rgb(140, 178, 181)");
         
       }
       else{
         throw new Error("failed")
       }
      }).catch(error=>console.error(error));
      count6=0
      
   }
   else{
     fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v2=1').then(response=>{
       if (response.ok) {
         console.log("on light3"); // Log success message to console
         $("#fan4").addClass("fa-spin")
         $("#fan4").css("color","green")
       
  
       } else {
         throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
       }
   }).catch(error => console.error(error)); 
   count6=1;
   
  }
  })
    // load8

    $(".fan5").click(function(){
      console.log("hello")
      if(count7==1){
        fetch('https://blynk.cloud/external/api/update?token=s2291g1WHa7xVg5Sz8MD1Kx2nJ_BfwpL&v0=0').then(response=>{
         if(response.ok){
           console.log("off light3");
           $("#fan5").removeClass("fa-spin");
           $("#fan5").css("color","rgb(140, 178, 181)");
           
         }
         else{
           throw new Error("failed")
         }
        }).catch(error=>console.error(error));
        count7=0
        console.log("if ",count7)
     }
     else{
       fetch('https://blynk.cloud/external/api/update?token=zfCMt9IIeUhhKmPMK0Au1E7IDm8Tfi9l&v0=1').then(response=>{
         if (response.ok) {
           console.log("on light3"); // Log success message to console
           $("#fan5").addClass("fa-spin")
           $("#fan5").css("color","green")
         
    
         } else {
           throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
         }
     }).catch(error => console.error(error)); 
     count7=1;
     console.log("else ",count7)
    }
    })
//setTimeout function in javascript ?
