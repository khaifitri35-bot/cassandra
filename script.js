const text = `

To Sandra ❤️,

This song was chosen to show u how my feelings was.

Thank you for having me,
for making me smile,
I am grateful that I met you.

There's so many things I want to share with you Sandra,
and I want to go through my life every day with you, just like we've been doing.

No matter where life takes us,
I will always choose you.


- Kai

`;

let i = 0;

function typeWriter(){
    if(i < text.length){
        document.getElementById("letter").innerHTML += text[i];
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = typeWriter;

function toggleMusic(){
    const music = document.getElementById("bgMusic");
    music.play();
}

function showLove(){
    document.getElementById("surprise").innerHTML =
    "I Love Youuuuu ❤️";
}