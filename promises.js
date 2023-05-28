function getData() {
  return new Promise((resolve, reject) => {
    const data = { name: "John", age: 30 };
    resolve(data);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    const processedData = Object.assign({}, data, { city: "New York" });
    resolve(processedData);
  });
}

function displayData(processedData) {
  return new Promise((resolve, reject) => {
    console.log(processedData);
  });
}

/* --- call the promises */

getData()
  .then((data) => {
    return processData(data);
  })
  .then((processData) => {
    return displayData(processData);
  })
  .catch((error) => {
    console.log(error);
  });

/* ---- use async await */
const runData = async () => {
  try {
    let data = await getData();
    let processedData = await processData(data);
    return await displayData(processedData);
  } catch (error) {
    console.log(error);
  }
};

runData()