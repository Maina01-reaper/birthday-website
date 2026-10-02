const scenes = document.querySelectorAll("section");

let currentScene = 0;

const photoPositions = [
    [40, 130, -15],
    [100, 70, -8],
    [175, 40, 0],
    [250, 70, 8],
    [325, 130, 15],
    [90, 190, -6],
    [200, 180, 5],
    [300, 190, 10]
];


// Show only one scene at a time
function showScene(number) {

    scenes.forEach((scene) => {
        scene.style.display = "none";
    });

    scenes[number].style.display = "flex";

    if (number !== 0) {
        animateScene(scenes[number]);
    }

    if (number === 2) {
        createConfetti();
    }

    if (number === 6) {
        animateAppreciation();
    }

    if (number === 9) {
        animateFinale();
        createConfetti();
        createPhotoHeart();
        addPhotoInteractions();
    }
}

 



// How long each scene stays visible
const sceneTimes = [
    9000,   // Scene 1
    4000,   // Scene 2
    7000,   // Scene 3
    6000,   // Scene 4
    10000,  // Scene 5
    8000,   // Scene 6
    12000,  // Scene 7
    7000    // Scene 8
];


// Start with Scene 1
showScene(0);


// Move from Scene 1 to Scene 2
setTimeout(() => {

    currentScene = 1;
    showScene(currentScene);

    startCountdown();

}, sceneTimes[0]);


// Countdown for Scene 2
function startCountdown() {

    const countdown =
    document.getElementById("countdown");

    let count = 3;

    countdown.textContent = count;

    countdown.classList.add("countdown-animate");


    const timer = setInterval(() => {

        count--;

        countdown.textContent = count;


        countdown.classList.remove("countdown-animate");

        void countdown.offsetWidth;

        countdown.classList.add("countdown-animate");


        if (count == 1) {

            clearInterval(timer);


            setTimeout(() => {

                currentScene = 2;

                showScene(currentScene);

                continueScenes();

            }, 1000);
        }

    }, 1000);
}


// Continue from Scene 3 onward
function continueScenes() {

    if (currentScene >= 8) {
        return;
    }


    setTimeout(() => {

        currentScene++;

        showScene(currentScene);

        continueScenes();

    }, sceneTimes[currentScene]);
}
function animateScene(scene) {

    const elements = scene.children;

    Array.from(elements).forEach((element, index) => {

        setTimeout(() => {

            element.classList.add("animate");

        }, index * 500);

    });
}
function animateAppreciation() {

    const items =
    document.querySelectorAll("#scene-appreciation li");

    items.forEach((item, index) => {

        setTimeout(() => {

            item.classList.add("appreciate-show");

        }, index * 700);

    });
}
const surpriseButton =
document.querySelector("#scene-surprise button");

surpriseButton.addEventListener("click", () => {

    currentScene = 9;

    showScene(currentScene);

});
function animateFinale() {

    const title =
    document.querySelector("#scene-finale h1");

    const heart =
    document.querySelector("#scene-finale .photo-heart");


    setTimeout(() => {

        title.classList.add("animate");

    }, 300);


    setTimeout(() => {

        heart.classList.add("animate");

    }, 1000);

}
function createConfetti() {

    const colors = [
        "#d4af37",
        "#ff1493",
        "#ffffff"
    ];

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti");


        // Random color
        piece.style.background =
        colors[Math.floor(Math.random() * colors.length)];


        // Random position
        piece.style.left =
        Math.random() * 100 + "vw";


        // Random size
        const size =
        Math.random() * 8 + 6;

        piece.style.width = size + "px";
        piece.style.height = size * 1.6 + "px";


        // Random starting rotation
        piece.style.transform =
        `rotate(${Math.random() * 360}deg)`;


        // Random delay
        piece.style.animationDelay =
        Math.random() * 2 + "s";


        document.body.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 6000);
    }
}


function createPhotoHeart() {

    const heart =
    document.querySelector("#scene-finale .photo-heart");

    const photos = [
        "photo1.jpg",
        "photo2.jpg",
        "photo3.jpg",
        "photo4.jpg",
        "photo5.jpg",
        "photo6.jpg",
        "photo7.jpg",
        "photo8.jpg",
        "photo9.jpg"
    ];


 


    photos.forEach((photo, index) => {

        const image =
        document.createElement("img");

        image.src = photo;

        image.classList.add("heart-photo");


        image.style.left =
        photoPositions[index][0] + "px";

        image.style.top =
        photoPositions[index][1] + "px";

        
        image.style.transform =
        `rotate(${photoPositions[index][2]}deg)`;

        image.style.animationDelay =
        index * 0.2 + "s";


        heart.appendChild(image);

    });
}
function addPhotoInteractions() {

    const cards =
    document.querySelectorAll(".heart-photo");


    cards.forEach((card, index) => {

        card.addEventListener("mouseenter", () => {

            card.style.zIndex = "20";

            card.style.transform =
            "scale(1.15) rotate(0deg)";

        });


        card.addEventListener("mouseleave", () => {

            card.style.zIndex = "1";

            card.style.transform =
            `rotate(${photoPositions[index][2]}deg)`;

        });

    });
}


