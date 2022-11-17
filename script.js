
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
   return i;
   }