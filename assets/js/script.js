const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Why did the developer go broke? Because he used up all his cache.",
    "What do you call a programmer from Finland? Nerdic.",
    "Why was the JavaScript developer sad? Because he didn’t Node how to Express himself.",
    "I told my computer I needed a break… it said 'No problem, I'll go to sleep.'",
    "Why did the function break up with the variable? It needed more space.",
    "Why don’t JavaScript developers trust stairs? They’re always up to something.",
    "Why was the array so calm? It knew how to stay in order.",
    "Why did the frontend developer get kicked out of school? Too many className changes.",
    "Why did the Boolean go to therapy? It couldn’t tell if it was true or false."

  ];

  let count = 0;

  const jokeBtn = document.getElementById("joke-btn");

  const jokeText = document.getElementById("joke-text");

  const countDisplay = document.getElementById("count");

  jokeBtn.addEventListener("click", () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    jokeText.textContent = randomJoke;

    count++;
    countDisplay.textContent = count;
  });

