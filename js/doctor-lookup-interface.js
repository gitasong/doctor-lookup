// var apiKey = require('./../.env').apiKey;
var DoctorLookup = require('./../js/doctor-lookup.js').doctorLookupModule;

var displayDoctors = function(doctorsArray) {
  doctorsArray.forEach(function(doctor) {
    $('#show-doctors').append(doctor + "<br>");
  });
};

$(document).ready(function() {
  $("#medical-issue-submit").click(function() {
    var medicalIssue = $("#medical-issue").val();
    $("#medical-issue").val("");
    var newDoctorLookup = new DoctorLookup(medicalIssue);
    console.log(newDoctorLookup);
    var doctorList = newDoctorLookup.getDoctors(medicalIssue, displayDoctors);  // need to format
  });
});
