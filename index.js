function checkForm(){
    const user = document.getElementsById('user').value;
    document.getElementById('results').innerText = user;
    console.log(user);
}