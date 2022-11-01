//nav burger
const sidebar = document.getElementById('sidebar');
const burger = document.getElementById('burger');
document.onclick = function (e) {
    if (e.target.id !== 'sidebar' && e.target.id !== 'burger') {
        sidebar.classList.remove('active');
        // console.log('sidebar deactivated');
    }
}
burger.onclick = function () {
    sidebar.classList.toggle('active');
    // console.log('sidebar activated');
}
//sign up
function signup(){
   document.querySelector('.container').style.top='17vh';
}
// ---------------------------------
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
function close_up(){
    document.querySelector('.container').style.top='-100vh';
}
signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});
signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});
fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());



// ----------------------------------------
//home
function home(){
    window.location.href='/'
} 
//about
function about(){
    window.location.href='/about'
}
//rules
function rules(){
    window.location.href='/rules'
}