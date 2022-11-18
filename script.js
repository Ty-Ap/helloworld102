
alert ("lorem ipsum");

function enterName() {
    let username=prompt("what do i call you");
        while (username ===(""))
        {
            username=prompt("no really you must have a name");
        }
    alert("Hello " + username);
    return username;
}

function math() {
    let x=80
    let y=340
    let sum= x + y
    alert(sum + "blaze it");
    return ("enjoy!");
}

function punkCheck() {
    let x=prompt("say yes");
     if (x=="yes") alert("you just do whatever you're told huh?");
     else alert ("you're a rebel. i like you"); alert (math());
    return x;
}
function forLoop() {
   for (let i = 13; i > 11 ; i--)
    {
     document.write( i ); 
    }
   }
function imageCounter() {
    let count = prompt("how many Punks do you want to see? 1-5");
    while (count < 1 || count > 5) {
        count = prompt("must be between 1-5");
    }
    for (i =0; i < count; i++) {
        document.write("<img src='https://images.unsplash.com/photo-1599275332750-94224515260c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' alt='person with mohawk in a leather jacket on a beach'/>" );
    }
}
