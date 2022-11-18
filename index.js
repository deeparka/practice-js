// Promise
const time = "8th December, 2022";

const myConcert = (concertTime) => {
    return new Promise((resolve, reject) => {
        if (concertTime === "8th December, 2022") {
            resolve({
                name: "Sapphire ",
                message: `Concert is happening on ${concertTime}.`,
            });
        } else {
            reject({
                name: "Sapphire ",
                message: "Concert is not happening due to some reasons.",
                messageTwo:
                    "Your amount will be refunded within 2 working days",
            });
        }
    });
};

const myFans = (concert) => {
    return new Promise((resolve, reject) => {
        resolve(`I love all of you, see you at the ${concert}concert`);
    });
};

// // using then and catch
// myConcert(time)
//     .then((success) => {
//         console.log(success.name + success.message);
//         return myFans(success.name);
//     })
//     .then((concertName) => {
//         console.log(concertName);
//     })
//     .catch((error) => {
//         console.log(error.name + error.message);
//         console.log(error.messageTwo);
//     });

// using async await
const checkConcert = async () => {
    try {
        const concertStatus = await myConcert(time);
        console.log(concertStatus.name + concertStatus.message);
        const messageForFans = await myFans(concertStatus.name);
        console.log(messageForFans);
    } catch (error) {
        console.log(error.name + error.message);
        console.log(error.messageTwo);
    }
};

checkConcert();
