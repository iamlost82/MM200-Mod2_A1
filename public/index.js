let myContent = document.getElementById('content');
//NAV
let homeBtn = document.getElementById('homeBtn');
let createNewUserBtn = document.getElementById('createNewUserBtn');
//INIT
let userNameInput = null;
let userEmailInput = null;
let userPasswordInput = null;

function showLoadingPage(){
    myContent.innerHTML = `
    <div id="loadingContainer">
        <div id="loadingSpinner"></div><h1 id="loadingHeader">Loading...</h1>
    </div>
    `;
}
function pickLoginOrHomePage(){
    if(sessionStorage.getItem('id')){
        showHomePage();
    } else{
        showLoginPage();
    }
}
function showLoginPage(){
    showLoadingPage();
    myContent.innerHTML = `
    <fieldset>
        <legend>Log in user:</legend>
        <label for="userEmail">Email:</label>
        <input type="email" id="userEmail">
        <label for="userPassword">Password:</label>
        <input type="password" id="userPassword">
        <button class="button" type="button" id="loginUserBtn">Log in</button>
    </fieldset>
    `;
    userEmailInput = document.getElementById('userEmail');
    userPasswordInput = document.getElementById('userPassword');
    let loginUserBtn = document.getElementById('loginUserBtn');
    loginUserBtn.addEventListener("click", async function(){
        showLoadingPage();
        let userEmail = userEmailInput.value;
        let userPassword = userPasswordInput.value;
        let apiBody = {"email":userEmail,"password":userPassword};
        let response = await fetch('/api/users/auth',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(apiBody)
        });
        response = await response.json();
        if(response.id){
            sessionStorage.setItem('id',response.id);
            sessionStorage.setItem('name',response.name);
            sessionStorage.setItem('email',response.email);
            showHomePage();
        } else{
            showLoginPage();
        }
    });
}
async function showHomePage(){
    let userName = sessionStorage.getItem('name');
    myContent.innerHTML = `
    <div class="content-container">
    <h1>Greetings, ${userName}!!</h1>
    <p> Hey, I made you a joke of sorts.. Here goes:</p>
    <div id="jokeDiv"></div>
    <div class="content-container"><p><button class="button" id="logoutBtn" type="button">If you want to log out and start fresh on the loginpage.<br>Feel free to press this button and log out</button></p></div>
    </div>
    `;
    let logoutUserBtn = document.getElementById('logoutBtn');
    let jokeDiv = document.getElementById('jokeDiv');
    logoutUserBtn.addEventListener("click", logOut);
    let apiBody = {name:sessionStorage.name};
    let response = await fetch('/api/joke',
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(apiBody)
    });
    response = await response.json();
    jokeDiv.innerHTML = response;
}
function showCreateUserPage(){
    myContent.innerHTML = `
    <fieldset>
        <legend>Create new user</legend>
        <label for="userName">Name:</label>
        <input type="text" id="userName" autocomplete="off">
        <label for="userEmail">Email:</label>
        <input type="email" id="userEmail" autocomplete="off">
        <label for="userPassword">Password:</label>
        <input type="password" id="userPassword" autocomplete="off">
        <button class="button" type="button" id="addNewUserBtn">Creat new user</button>
    </fieldset>
    <div id="errorDiv"></div>
    `;
    userNameInput = document.getElementById('userName');
    userEmailInput = document.getElementById('userEmail');
    userPasswordInput = document.getElementById('userPassword');
    let addNewUserBtn = document.getElementById('addNewUserBtn');
    let errorDiv = document.getElementById('errorDiv');
    addNewUserBtn.addEventListener("click", async function(){
        let userName = userNameInput.value;
        let userEmail = userEmailInput.value;
        let userPassword = userPasswordInput.value;
        let apiBody = {"name":userName,"email":userEmail,"password":userPassword};
        let response = await fetch('/api/users/new',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(apiBody)
        });
        response = await response.json();
        if(response.id){
            userNameInput.value = "";
            userEmailInput.value = "";
            userPasswordInput.value = "";
            errorDiv.innerHTML = `
                <h2>User creation successful:</h2>
                <ul>
                    <li>ID:${response.id}</li>
                    <li>Name:${response.name}</li>
                    <li>Email:${response.email}</li>
                </ul>
            `;
        } else{
            errorDiv.innerHTML = `
                <h2>User creation failed:</h2>
                <p>${response.msg}</p>
            `;
        }
    });
}
function logOut(){
    sessionStorage.clear();
    showLoginPage();
}

showLoadingPage();
pickLoginOrHomePage();

homeBtn.addEventListener("click",pickLoginOrHomePage);
createNewUserBtn.addEventListener("click",showCreateUserPage);