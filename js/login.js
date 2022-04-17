const inputUsername = document.querySelector("[data-username]"),
      btnLogin = document.querySelector("[data-btn]");


btnLogin.addEventListener("click", (e)=>{
    e.preventDefault();
    const value = inputUsername.value;

    // username validation
    const regexUsername = /^[a-zA-Z0-9]+$/;

    
    // check username if right >> enter the game
    // and save the username in local storage
    if(!regexUsername.test(value)){
        alert("Enter your username");
        console.log()
    }else{
        localStorage.setItem("username",value);
        return window.location.assign("/game.html");
    }
});

