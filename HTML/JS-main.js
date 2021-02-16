/* January 2021 - RoccoLox Programs */
function choiceS() {
    // if you selected student
    localStorage.setItem('portal','Student');
}
function choiceT() {
    // if you selected teacher
    localStorage.setItem('portal','Teacher');
}
function signout() {
    // asks if you want to sign out
    // stores answer in var signOut
    var signOut = confirm('Continue to logout of RawrRar.');
    if (signOut === true) {
        localStorage.setItem('username','');
        localStorage.setItem('password','');
    } else {
        // stops the link from executing
        event.preventDefault();
    }
}
// gets 'Student' or 'Teacher' from localStorage
var portal = localStorage.getItem('portal');
// changes title of login page
document.getElementById('loginTitle').innerHTML = 'RawrRar - ' + portal + ' Login';
// changes login portal name
document.getElementById('header').innerHTML = 'RawrRar Classroom Portal ' + portal + ' Login';
// changes html attributes based on portal value
if (portal === 'Student') {
    document.getElementById('submitLogin').setAttribute('style','background-color: rgb(4,165,228);');
    document.getElementById('header').setAttribute('style','color: rgb(4,165,228);');
} else {
    document.getElementById('submitLogin').setAttribute('style','background-color: rgb(179,11,0);');
    document.getElementById('header').setAttribute('style','color: rgb(179,11,0);');
}
// tells what page to submit to
function submit() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    localStorage.setItem('password',document.getElementById('password').value);
    localStorage.setItem('username',document.getElementById('username').value);
    if (username.length > 0 && password.length > 0) {
        if (portal === 'Student') {
            window.location.href = "Rawr-overview.html";
        } else {
            window.location.href = "Rawr-overview(teacher).html";
        }
    } else {
        // if an invalid username or password is entered
        document.getElementById('errorLogin').innerHTML = 'Invalid username or password';
    }
}
// clears 'Invalid username or password' if it's being displayed
function blank() {
    document.getElementById('errorLogin').innerHTML = '';
}
