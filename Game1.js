function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDifficultySettings() {
    const levels = {
        "Facile": { min: 1, max: 10, attempts: 5 },
        "Intermediaire": { min: 1, max: 50, attempts: 7 },
        "Difficile": { min: 1, max: 100, attempts: 10 }
    };
    
    let choice;
    do {
        choice = prompt("Choisissez un niveau de difficulte : Facile, Intermediaire, Difficile").trim();
    } while (!levels[choice]);
    
    return levels[choice];
}

function playGame() {
    const settings = getDifficultySettings();
    const targetNumber = getRandomNumber(settings.min, settings.max);
    let attemptsLeft = settings.attempts;
    let guess;

    alert(`Devinez le nombre entre ${settings.min} et ${settings.max}. Vous avez ${attemptsLeft} tentatives.`);

    while (attemptsLeft > 0) {
        guess = parseInt(prompt(`Il vous reste ${attemptsLeft} tentatives. Entrez un nombre:`), 10);
        
        if (isNaN(guess)) {
            alert("Veuillez entrer un nombre valide.");
            continue;
        }

        if (guess === targetNumber) {
            alert("Bravo ! Vous avez trouvé le nombre !");
            break;
        } else if (guess < targetNumber) {
            alert("Trop petit ! Essayez encore.");
        } else {
            alert("Trop grand ! Essayez encore.");
        }

        attemptsLeft--;
    }

    if (attemptsLeft === 0) {
        alert(`Dommage ! Le nombre etait ${targetNumber}.`);
    }

    if (confirm("Voulez-vous rejouer ?")) {
        playGame();
    } else {
        alert("Merci d'avoir joue !");
    }
}

playGame();
