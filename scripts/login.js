//#region <Main>
console.log('login js fired');

const submitButton = document.querySelector("#loginButton");
submitButton.addEventListener('click',function(e){
   e.preventDefault();

   window.location.href = "views/";
  
   AjaxPost();
})
//#endregion

//#region <formTurnedToJsonString>
function formToJsonString(){
  const form = document.querySelector("#form");
  let formdata = new FormData(form);
  let formString = "";
  formString += "{";
  for(const[key,value] of formdata){
  formString+="\""+key+"\":\""+value+"\"";
  }
  formString+="}"
  return formString;
}
//#endregion


//#region <Login check>
function loginCheck(userdataJSON){
  let userdata = JSON.parse(userdataJSON);
  if(userdata['login'] == "valid"){
    validLogin(userdata);
  }else{
    invalidLogin(userdata);
  }
};
//#endregion

//#region <Valid login handle>
function validLogin(userdata){
   alert("Login success!"); 
}
//#endregion

//#region <Invalid Login handle - Informs user about wrong username or password>
function invalidLogin(userdata){
  
    alert("Login failed");
  
}
//#endregion


//#region <AjaxPost to server- most important function>
function AjaxPost() {
  var name = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  $.ajax({
          type : "POST",  //type of method
          url  : "login.php",  //your page
          data : { name : name, password : password },// passing the values
          success: function(res){  
                                  //do what you want here...
                                  loginCheck(res);
                  },
          error: function() {
            alert('Something went wrong. Server might not be running.');
          }
      });
 
}
//#endregion