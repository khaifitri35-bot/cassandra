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

let index = 0;

function typeWriter(){

    const letter = document.getElementById("letter");

    if(index === 0){
        letter.innerHTML = ""; // important reset
    }

    if(index < text.length){

        letter.innerHTML += text.charAt(index);
        index++;

        setTimeout(typeWriter, 40);
    }
}

window.onload = typeWriter;
function toggleMusic(){

    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");

    if(music.paused){

        music.play();

        btn.innerHTML = "⏸ Pause Music";

    }else{

        music.pause();

        btn.innerHTML = "🎵 Play Music";
    }
}

function showLove(){

    document.getElementById("surprise").innerHTML =
    "I Love Youuuuu Sandraaa ❤️❤️❤️";
}