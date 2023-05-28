function getData(callback) {
    setTimeout(function() {
      const data = { name: 'John', age: 30 };
      callback(data);
    }, 1000);
  }
  
  function processData(data, callback) {
    setTimeout(function() {
      const processedData = Object.assign({}, data, { city: 'New York' });
      callback(processedData);
    }, 1000);
  }
  
  function displayData(data) {
    setTimeout(function() {
      console.log(data);
    }, 1000);
  }
  
  getData(function(data) {
    processData(data, function(processedData) {
      displayData(processedData);
    });
  });