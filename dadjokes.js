document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
    const jokes = [
        "Chcela by som si vyskúšať tie šaty vo výklade. Nech sa páči, ale predsa, nebolo by to lepšie v kabínke?",
        
        "Viete ako robi teply blesk? Šváááááááááác",
        "Viete čo vchádza dverami a vychádza komínom? Židia.",
        "Prečo je číňan žltý? Lebo čúra protivetru. ",
        "Bol raz jeden pes, ktorý mal gumennú labu. A keďže mal blchy, tak sa stále škrabal, až kým sa nevygumoval.",
        "Počul si už v hlave kroky? Áno.Tak to ti asi odchádzal rozum.",
        "- Mišo, prečo si stále nachladnutý? - Vediem studenú vojnu.",
        "Prečo vozičkár nemôže ísť do basy? Lebo už sedí.",
        "Viete ako sa povie vozičkárovi čo horí? Hotwheels.",
        "Viete ako sa povie Autistovi s pištoľou? Špeciálne sily.",
        "VIdú dve babky po púšti a tretiu prejde lokomotíva..",
        "Nápis na náhrobku učiteľa matematiky: ”Odpočítaj v pokoji!”",
        "Nápis na náhrobku predavačky z novinového stánku: ”Prídem o chvíľu!”",
        "Idú dve kostry po púšti a jedna nesie okno. Prvá povie: Mne je teplo. A druhá na to: Tak si otvor okno!",
        "Viete prečo deti v Afrike nejedia lieky? Lebo je na nich napísané až po jedle.",
        "Pán Mrkvička ide na trh a chce si kúpiť jablká. Predavač mu hovorí: ale pán Mrkvička, veď vy patríte do zeleniny..."  ,     
        "Sedí babka na koľaji nepočuje vlak o chvíľu má rušňovodič na okienku fľak.",
        "Čo nedostane dieťa s rakovinou na Vianoce? No predsa hrebeň.",
        "Keď som bol malý, bál som sa tmy. Dnes, keď vidím účet za elektrinu, bojím sa svetla.",
        "Idú dva tanky a jeden tankuje.",
        "Letí jedna mucha okolo druhej a druhá okolo pol tretej.",
        "Išli dve huby a jedna povedala drž hubu.",
        "Viete prečo majú smetiari oranžové vesty? Nie? Ani ja.",
        "Idú dve babky po púšti a na jednu padne chladnička.",


    ];

    const jokeContainer = document.getElementById('joke');
    const jokeButton = document.getElementById('joke-button');

    jokeButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        jokeContainer.textContent = jokes[randomIndex];
    });
});
=======
    const blackHumorBtn = document.getElementById('blackHumorBtn');
    const dadJokeBtn = document.getElementById('dadJokeBtn');
    const randomJokeBtn = document.getElementById('randomJokeBtn');

    const blackHumorJoke = document.getElementById('blackHumorJoke');
    const dadJoke = document.getElementById('dadJoke');
    const randomJoke = document.getElementById('randomJoke');

    blackHumorBtn.addEventListener('click', generateBlackHumorJoke);
    dadJokeBtn.addEventListener('click', generateDadJoke);
    randomJokeBtn.addEventListener('click', generateRandomJoke);

    function generateBlackHumorJoke() {
        const url = 'https://v2.jokeapi.dev/joke/Dark?type=single';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    blackHumorJoke.textContent = 'Failed to fetch a joke. Please try again.';
                } else {
                    blackHumorJoke.textContent = data.joke;
                }
            })
            .catch(error => {
                console.error('Error fetching the joke:', error);
                blackHumorJoke.textContent = 'Failed to fetch a joke. Please try again.';
            });
    }

    function generateDadJoke() {
        const url = 'https://icanhazdadjoke.com/';

        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                dadJoke.textContent = data.joke;
            })
            .catch(error => {
                console.error('Error fetching the joke:', error);
                dadJoke.textContent = 'Failed to fetch a joke. Please try again.';
            });
    }

    function generateRandomJoke() {
        const url = 'https://v2.jokeapi.dev/joke/Any?type=single';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    randomJoke.textContent = 'Failed to fetch a joke. Please try again.';
                } else {
                    randomJoke.textContent = data.joke;
                }
            })
            .catch(error => {
                console.error('Error fetching the joke:', error);
                randomJoke.textContent = 'Failed to fetch a joke. Please try again.';
            });
    }
});
>>>>>>> 0be0b27e6cf5913f03574b15a673813d4a9ffef3
