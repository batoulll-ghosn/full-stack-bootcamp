function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

console.log("Start");

delay(2000)
    .then(() => {
        console.log("Delayed action after 2000 milliseconds");
        return delay(1000);
    })
    .then(() => {
        console.log("Delayed action after 1000 milliseconds");
    });

console.log("End");

fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then(response => response.json())
    .then(data => {
        const randomFact = data.text;
        console.log("Random Fact:", randomFact);
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });

async function fetchRandomFact() {
    try {
        const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
        const data = await response.json();
        const randomFact = data.text;
        console.log("Random Fact:", randomFact);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

fetchRandomFact();

const imageUrls = [
    "https://dog.ceo/api/breeds/image/random",
    "https://dog.ceo/api/breeds/image/random",
    "https://dog.ceo/api/breeds/image/random"
];

async function fetchImages(urls) {
    try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const responseData = await Promise.all(responses.map(response => response.json()));

        const imageUrls = responseData.map(data => data.message);

        console.log("Fetched Images:", imageUrls);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

fetchImages(imageUrls);
