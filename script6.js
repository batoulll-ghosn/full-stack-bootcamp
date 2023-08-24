// Challenge 6 - Grasped Asynchronous Building Blocks

// Timers

// setTimeout example
function delayedAlert() {
    setTimeout(() => {
        console.log("Delayed alert after 2 seconds");
    }, 2000);
}
delayedAlert();

// setInterval example
let intervalCounter = 0;
const intervalId = setInterval(() => {
    intervalCounter++;
    console.log(`Interval counter: ${intervalCounter}`);
    if (intervalCounter >= 5) {
        clearInterval(intervalId);
        console.log("Interval stopped.");
    }
}, 1000);

// Promise Chains

function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ username: "user123", email: "user@example.com" });
        }, 1500);
    });
}

function updateUserProfile(userData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            userData.profileUpdated = true;
            resolve(userData);
        }, 1000);
    });
}

fetchUserData()
    .then(updateUserProfile)
    .then((updatedUserData) => {
        console.log("Updated user data:", updatedUserData);
    });

// Callback Hell vs. Promises

// Callback hell example (nested callbacks)
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 1000);
}

function processFetchedData(callback) {
    setTimeout(() => {
        console.log("Data processed");
        callback();
    }, 1500);
}

function displayProcessedData() {
    setTimeout(() => {
        console.log("Data displayed");
    }, 800);
}

// Refactored version using promises
function fetchDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetched");
            resolve();
        }, 1000);
    });
}

function processFetchedDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data processed");
            resolve();
        }, 1500);
    });
}

function displayProcessedDataPromise() {
    setTimeout(() => {
        console.log("Data displayed");
    }, 800);
}

fetchDataPromise()
    .then(processFetchedDataPromise)
    .then(displayProcessedDataPromise);


// Challenge 6 - Mastered Advanced Asynchronous Patterns

// Custom Promise Creation

function customDelay(milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random > 0.5) {
                resolve(`Operation completed in ${milliseconds}ms.`);
            } else {
                reject(`Operation failed after ${milliseconds}ms.`);
            }
        }, milliseconds);
    });
}

customDelay(2000)
    .then(result => console.log(result))
    .catch(error => console.error(error));

// Generators & Promises

function* promiseGenerator() {
    yield customDelay(1000);
    console.log("Step 1 completed");
    yield customDelay(1500);
    console.log("Step 2 completed");
    yield customDelay(800);
    console.log("Step 3 completed");
}

const generator = promiseGenerator();
const button = document.getElementById("progressButton");
button.addEventListener("click", () => {
    const { value, done } = generator.next();
    if (!done) {
        value.then(() => generator.next());
    }
});

// Async/Await with Error Handling

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error("Network error");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Cleanup after fetch");
    }
}

(async () => {
    const fetchedData = await fetchData();
    if (fetchedData) {
        console.log("Fetched Data:", fetchedData);
    }
})();

// Commit: "Challenge 6 - Mastered Advanced Asynchronous Patterns".


// Challenge 6 - Conquered Real-world Asynchronous Challenges

// Concurrency with Promise.all

function fetchData(endpoint) {
    return fetch('https://jsonplaceholder.typicode.com/' + endpoint)
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            const data = eval('(' + text + ')');
            return data;
        });
}

const endpoints = ['posts/1', 'comments/1', 'users/1'];
const fetchPromises = endpoints.map(function (endpoint) {
    return fetchData(endpoint);
});

Promise.all(fetchPromises)
    .then(function (dataArray) {
        console.log("Combined Data:", dataArray);
    })
    .catch(function (error) {
        console.error("Error:", error);
    });

// Async Iteration

async function* asyncGenerator() {
    const promises = [
        customDelay(1000).then(function () {
            return "Step 1 completed";
        }),
        customDelay(1500).then(function () {
            return "Step 2 completed";
        }),
        customDelay(800).then(function () {
            return "Step 3 completed";
        })
    ];

    for await (const result of promises) {
        yield result;
    }
}

(async function () {
    for await (const stepResult of asyncGenerator()) {
        console.log(stepResult);
    }
})();

// Implement a Throttle Function

function throttle(fn, delay) {
    let lastCallTime = 0;
    let timeout;

    return function () {
        const args = arguments;
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;

        if (timeSinceLastCall >= delay) {
            fn.apply(null, args);
            lastCallTime = now;
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                fn.apply(null, args);
                lastCallTime = Date.now();
            }, delay - timeSinceLastCall);
        }
    };
}

const throttledFetch = throttle(fetchData, 2000);
throttledFetch('posts/1');
throttledFetch('comments/1');
throttledFetch('users/1');


