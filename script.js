let yesSize = 18;
let noClickCount = 0;

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const graphic = document.getElementById('graphic');
const audio = document.getElementById('bgMusic');

const messages = [
    "Serious lah awak tak suka kita? 🥺",
    "Jangan lah macam ni awak... 😭",
    "Plss awakkkkk... 🙏",
    "Hahah awak tak de choice yee! 😂"
];

noBtn.addEventListener('click', () => {
    // Play music on first interaction
    audio.play().catch(e => console.log("Audio play failed", e));
    
    if (noClickCount < messages.length) {
        question.innerHTML = messages[noClickCount];
    }
    noClickCount++;

    if (yesSize < 350) { 
        yesSize += 35;
        yesBtn.style.fontSize = yesSize + 'px';
        yesBtn.style.padding = (yesSize/2) + 'px ' + yesSize + 'px';
    }

    let currentNoSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    if (currentNoSize > 6) {
        noBtn.style.fontSize = (currentNoSize - 4) + 'px';
    } else {
        noBtn.style.display = 'none';
        question.innerHTML = "Hahah awak tak de choice yee 😜";
    }
});

yesBtn.addEventListener('click', () => {
    audio.play().catch(e => console.log("Audio play failed", e));
    
    // Final Screen Content
    question.innerHTML = `
        I knew it! ❤️ <br>
        <span style='font-size:20px; display:block; margin-top:10px;'>i lope u tuw</span>
        <p style='font-size:16px; margin-top:20px; color:rgba(255,255,255,0.8);'>nak lagi? 😉</p>
    `;
    
    graphic.src = "iman.jpg"; 
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';

    // Create the "Mula Balik" button
    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = "Mula Balik ✨";
    resetBtn.className = "reset-style"; // We will style this in CSS
    document.querySelector('.btn-group').appendChild(resetBtn);

    // Reset Logic
    resetBtn.addEventListener('click', () => {
        noClickCount = 0;
        yesSize = 18;
        question.innerHTML = "Do you love me?";
        graphic.src = "cute-cat.gif";
        noBtn.style.display = 'inline-block';
        noBtn.style.fontSize = '18px';
        yesBtn.style.display = 'inline-block';
        yesBtn.style.fontSize = '18px';
        yesBtn.style.padding = '12px 25px';
        resetBtn.remove(); // Remove the reset button
    });
});