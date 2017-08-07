var apiKey = require('./../.env').apiKey;

SpecialtyLookup.prototype.getSpecialties = function(displaySpecialties) {
  $.get('https://api.betterdoctor.com/2016-03-01/specialties?skip=0&limit=20&user_key=' + apiKey)
    .then(function(result) {
      var specialtiesArray = [];
      for (i = 0; i < result.data.length; i++) {
        specialtiesArray.push(result.data[i].name);
      }
      displaySpecialties(specialtiesArray);
    })
    .fail(function(error) {
      console.log("fail");
    });
};


function DoctorLookup(medicalIssue) {
  this.medicalIssue = medicalIssue;
}

DoctorLookup.prototype.getDoctors = function(medicalIssue, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(result) {
      var doctorsArray = [];
      for (i = 0; i < result.data.length; i++) {
        for (j = 0; j < result.data[i].practices.length; j++) {
          if (doctorsArray.indexOf(result.data[i].practices[j].name) === -1) {
            doctorsArray.push(result.data[i].practices[j].name);
          }
        }
      }
      displayDoctors(doctorsArray);
    })
    .fail(function(error){
      console.log("fail");
    });
};

exports.doctorLookupModule = DoctorLookup;
