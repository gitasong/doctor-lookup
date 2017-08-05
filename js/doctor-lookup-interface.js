// var apiKey = require('./../.env').apiKey;
var DoctorLookup = require('./../js/doctor-lookup.js').doctorLookupModule;

var displayDoctors = function(doctorsArray) {
  doctorsArray.forEach(function(doctor) {
    $('#show-doctors').append(doctor + "<br>");
  });
};

// var displayMedicalIssue = function() {
//   $('#medical-issue-display').text(this.medicalIssue);
// };

$(document).ready(function() {
  $("#medical-issue-submit").click(function() {
    $('#show-doctors').empty();
    var medicalIssue = $("#medical-issue").val();
    $("#medical-issue").val("");
    var newDoctorLookup = new DoctorLookup(medicalIssue);
    $('#medical-issue-display').text(" who treat " + medicalIssue);
    var doctorList = newDoctorLookup.getDoctors(medicalIssue, displayDoctors);
  });
});
