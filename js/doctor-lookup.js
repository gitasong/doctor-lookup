var apiKey = require('./../.env').apiKey;

function DoctorLookup(medicalIssue) {
  this.medicalIssue = medicalIssue;
}

function parseDoctorsData(result) {
  var doctorsArray = [];
  for (i = 0; i < result.data.length; i++) {
    for (j = 0; j < result.data.practices.length; j++) {
      doctorsArray.push(result.data[i].practices[j].name);
      // console.log(doctorsArray);
    }
  }
  return doctorsArray;
}

DoctorLookup.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(result) {
      // $("show-doctors").text("Your results: " + result);
    //   // medicalIssue = this.medicalIssue;
    //   // $('.showDoctors').text(result.JSON.stringify);
      console.log(result);
      return result;
      // var doctorsData = displayResult(result);
      // console.log(doctorsData);
    //   // return doctorsArray;
    //   // var doctorsData = displayDoctors(result);  // result.data[i].practices[j].name
    //   // console.log(doctorsData);
    })
    .fail(function(error){
      console.log("fail");
    });
};

DoctorLookup.prototype.doctorData = function(displayRawData) {
  var response = this.apiCall;
  response.then(function(response) {
    console.log(response);
    displayRawData(response);
  })
  .fail(function(error) {
    console.log("fail");
  });
};

exports.doctorLookupModule = DoctorLookup;
