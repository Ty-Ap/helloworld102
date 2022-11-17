
alert ("lorem ipsum");

function enterName() {
    let username=prompt("what do i call you");
    document.write("Hello " + username);
    return username;
}

function math() {
    let x=80
    let y=340
    let sum= x + y
    document.write(sum + "blaze it");
    return sum;
}

function punkCheck() {
    let x=prompt("say yes");
     if (x=="yes") document.write("you just do whatever you're told huh?") 
     else document.write("you're a rebel. i like you");
    return ;
}
