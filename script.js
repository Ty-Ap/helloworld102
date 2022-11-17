
alert ("lorem ipsum");

function enterName() {
    let username=prompt("what do i call you");
    alert("Hello " + username);
    return username;
}

function math() {
    let x=80
    let y=340
    let sum= x + y
    alert(sum + "blaze it");
    return sum;
}

function punkCheck() {
    let x=prompt("say yes");
     if (x=="yes") alert("you just do whatever you're told huh?");
     else alert(("you're a rebel. i like you") + math())
    return x;
}