// stick Header

let header = document.getElementById("header");
let sticky = header.offsetTop;
window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.scrollY >= sticky) {
    header.classList.add("stickyHeader");
  } else {
    header.classList.remove("stickyHeader");
  }
}

// Email form alert

let emailFormBtn = document.getElementById ('efBtn')

 


emailFormBtn.addEventListener ('click', function(){
  let emailFormName = document.getElementById ('emailFormName').value
  let emailFormEmail = document.getElementById ('emailFormEmail').value

  if ( emailFormEmail && emailFormName !== 0){
      alert('Thank you dear ,'+ emailFormName +' , we will definitely contact you at the earliest opportunity!')
    }
  else{  
    alert ('Enter your information!')
  }
});