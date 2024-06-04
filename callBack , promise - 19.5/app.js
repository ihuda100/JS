const callRestaurantPromise = (km) => {
  return new Promise((resolve, reject) => {
    // resolve after two secont
    setTimeout(() => {
      if (km > 5) {
        reject("is very far");
      }
      resolve("what is order");
    }, 2000);
  });
};
// callRestaurantPromise(4)
//   .then((data) => {
//     console.log(data);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("ham");
//       }, 2000);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

let num = Math.floor(Math.random() * 200);

const randomPromise = (n) => {
  return new Promise((resolve, reject) => {
    if (n > 100) {
      reject("not now");
    }
    resolve("ok I'm radey");
  });
};
randomPromise(num)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));
// .finally(() => console.log("thanks for watching"));

const double = (value) => {
  return new Promise((resolve, reject) => {
    resolve((value += 10));
  });
};


double(15)
  .then((addTen) => {
    console.log(addTen);
    return new Promise((resolve, reject) => {
      resolve((addTen *= 3));
    });
  })
  .then((multiplyThree) => {
    return new Promise((resolve, reject) => {
      resolve(multiplyThree);
    });
  })
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
