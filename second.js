const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      signIn = document.querySelector(".sigin-link");
    


      // js code to show/hide password and change icon

      pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", ()=> {
            pwFields.forEach(pwFields => {
                if(pwFields.type ==="password"){
                    pwFields.type = "text";

                    pwShowHide.forEach(icon => {
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwFields.type = "password";

                    pwShowHide.forEach(icon => {
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            })
        })
      })

      //  js code to appear signup and login form
      signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
      });
      signIn.addEventListener("click", ( )=>{
        container.classList.remove("active");
      });