let score = 0;

document.getElementById('startButton').addEventListener('click', showOptions);
document.getElementById('jokeButton').addEventListener('click', () => tellContent('joke'));
document.getElementById('factButton').addEventListener('click', () => tellContent('fact'));
document.getElementById('adviceButton').addEventListener('click', () => tellContent('advice'));
document.getElementById('riddleButton').addEventListener('click', () => tellContent('riddle'));
document.getElementById('anotherButton').addEventListener('click', showOptions);

function showOptions() {
    document.getElementById('options').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('anotherButton').classList.add('hidden');
    document.getElementById('scoreBoard').classList.add('hidden');
}

function tellContent(type) {
    let content;
    switch (type) {
        case 'joke':
            content = getRandomElement(jokes);
            break;
        case 'fact':
            content = getRandomElement(facts);
            break;
        case 'advice':
            content = getRandomElement(advice);
            break;
        case 'riddle':
            content = getRandomElement(riddles);
            break;
    }
    displayResult(content, type);
}

function displayResult(message, type) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = message.text || message;
    resultDiv.classList.remove('hidden');
    document.getElementById('anotherButton').classList.remove('hidden');
    document.getElementById('options').classList.add('hidden');

    if (type === 'riddle') {
        askForAnswer(message);
    } else {
        score++;
        document.getElementById('score').innerText = score;
        document.getElementById('scoreBoard').classList.remove('hidden');
    }
}

function askForAnswer(riddle) {
    const answer = prompt(`Acertijo: ${riddle.question}\nTu respuesta:`);

    if (answer.toLowerCase() === riddle.answer.toLowerCase()) {
        alert("¡Correcto! 🎉");
        score++;
    } else {
        alert(`Incorrecto. La respuesta correcta era: ${riddle.answer}`);
    }

    document.getElementById('score').innerText = score;
    document.getElementById('scoreBoard').classList.remove('hidden');
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Contenido
const jokes = [
    { text: "¿Por qué los pájaros no usan Facebook? ¡Porque ya tienen Twitter!" },
    { text: "¿Cuál es el café más peligroso del mundo? ¡El ex-preso!" },
    { text: "¿Qué le dice una iguana a su hermana gemela? ¡Iguanita!" },
    { text: "¿Por qué los esqueletos no pelean entre ellos? ¡Porque no tienen agallas!" },
    { text: "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!" }
];

const facts = [
    { text: "Las ranas no pueden vomitar. En su lugar, ¡se dan la vuelta y sacan su estómago por la boca!" },
    { text: "El corazón de un camarón está en su cabeza." },
    { text: "Los flamencos son rosados porque comen muchos camarones." },
    { text: "Las abejas pueden reconocer rostros humanos." },
    { text: "Los pulpos tienen tres corazones y sangre azul." }
];

const advice = [
    { text: "Si alguna vez te sientes inútil, recuerda que hay una persona que mete una cuerda en un frasco para hacer un embotellado de ketchup." },
    { text: "Nunca discutas con un loco, te arrastrará a su nivel y te ganará por experiencia." },
    { text: "Si la vida te da limones, ¡haz limonada! Pero si la vida te da melones, ¡quizás deberías revisar tu visión!" },
    { text: "Recuerda que el camino al éxito está lleno de ladrillos de fracasos. ¡Usa los ladrillos como escaleras!" },
    { text: "La vida es como una bicicleta: para mantener el equilibrio, debes seguir adelante." }
];

const riddles = [
    { question: "¿Qué tiene un ojo pero no puede ver?", answer: "Una aguja" },
    { question: "¿Qué se rompe cuando se menciona?", answer: "El silencio" },
    { question: "¿Qué es tan frágil que solo con decir su nombre se rompe?", answer: "El silencio" },
    { question: "¿Qué tiene patas y puede correr pero no tiene alas?", answer: "El gato" },
    { question: "¿Qué es lo que siempre se queda en el suelo y no se puede recoger?", answer: "El tiempo" }
];
