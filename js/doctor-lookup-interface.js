// var apiKey = require('./../.env').apiKey;
var DoctorLookup = require('./../js/doctor-lookup.js').doctorLookupModule;

var displaySpecialties = function(specialtiesArray) {
  specialtiesArray.forEach(function(specialty) {
    $('#specialties-dropdown').append("<option>" + specialty + "</option>");
  });
};

var displayDoctors = function(doctorsArray) {
  doctorsArray.forEach(function(doctor) {
    $('#show-doctors').append(doctor + "<br>");
  });
};

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
