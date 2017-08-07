// var apiKey = require('./../.env').apiKey;
var DoctorLookup = require('./../js/doctor-lookup.js').doctorLookupModule;
var SpecialtyLookup = require('./../js/doctor-lookup.js').specialtyLookupModule;;

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
  newSpecialtyLookup = new SpecialtyLookup();;
  $('#specialties-dropdown').empty();;
  var specialties = newSpecialtyLookup.getSpecialties(displaySpecialties);
  $("#medical-issue-submit").click(function() {
    $('#show-doctors').empty();
    var medicalIssue = $("#medical-issue").val();
    $("#medical-issue").val("");
    var newDoctorLookup = new DoctorLookup(medicalIssue);
    $('#medical-issue-display').text(" who treat " + medicalIssue);
    var doctorList = newDoctorLookup.getDoctors(medicalIssue, displayDoctors);
  });
});
