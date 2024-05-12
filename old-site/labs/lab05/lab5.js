/* Lab 5 JavaScript File 
   Place variables and functions in this file */

function validate(formObj) {
   // put your validation code here
   // it will be a series of if statements

   if (formObj.firstName.value == "") {
      alert("You must enter a first name");
      formObj.firstName.focus();
      return false;
   }
   if (formObj.lastName.value == "") {
      alert("You must enter a last name");
      formObj.lastName.focus();
      return false;
   }
   if (formObj.title.value == "") {
      alert("You must enter a title");
      formObj.title.focus();
      return false;
   }
   if (formObj.org.value == "") {
      alert("You must enter a organization");
      formObj.org.focus();
      return false;
   }
   if (formObj.pseudonym.value == "") {
      alert("You must enter a nickname");
      formObj.pseudonym.focus();
      return false;
   }
   if (formObj.comments.value == "" || formObj.comments.value == "Please enter your comments") {
      alert("You must enter a comment");
      formObj.comments.focus();
      return false;
   }
   alert("Submitted!!");
   return true;
}

function clearValue(){
   if (document.getElementById("comments").value == "Please enter your comments") {
      document.getElementById("comments").innerHTML = "";
   }
}

function toNickname(){
   firstName = document.getElementById("firstName").value;
   lastName = document.getElementById("lastName").value;
   nickname = document.getElementById("pseudonym").value;

   if (firstName == "" || lastName == "" || nickname == "") {
      alert("Please fill out the form to get nicknames.")
      return;
   }
   alert(firstName + ' ' +  lastName + ' is ' + nickname);
}

function setFocus() {
   const firstInput = document.getElementById('firstName');
   firstInput.focus();
}

