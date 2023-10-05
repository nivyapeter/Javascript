const userLeft = false;
const userWatchingCatMeme = false;

const watchTutorialPromise = () => {
  return new Promise((resolve, reject) => {
    if (userLeft) {
        reject({
        name: "user left",
        message: "error",
      });
    } else if (userWatchingCatMeme) {
        reject({
        name: "user watching cat meme",
        message: "webdev simplified",
      });
    } else {
        resolve("thumbs up and subscribe");
    }
  });
};

watchTutorialPromise().then(
  (message) => {
    console.log("success:" + message);
  }).catch(
  (error) => {
    console.log("error" + error.message);
  })
