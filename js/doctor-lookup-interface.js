// var apiKey = require('./../.env').apiKey;
var DoctorLookup = require('./../js/doctor-lookup.js').doctorLookupModule;

$(document).ready(function() {
  $("#medical-issue-submit").click(function() {
    var medicalIssue = $("#medical-issue").val();
    $("#medical-issue").val("");
    var newDoctorLookup = new DoctorLookup();
    var doctors = newDoctorLookup.getDoctors(medicalIssue);
    // $("#show-doctors").text(result.data.practices.name);
  });
});
