// var apiKey = require('./../.env').apiKey;
var DoctorLookup = require('./../js/doctor-lookup.js').doctorLookupModule;

var displayRawData = function(result) {
  // console.log(result);
  $('#show-doctors').text(result);
};

$(document).ready(function() {
  $("#medical-issue-submit").click(function() {
    var medicalIssue = $("#medical-issue").val();
    $("#medical-issue").val("");
    var newDoctorLookup = new DoctorLookup(medicalIssue);
    console.log(newDoctorLookup);
    var doctors = newDoctorLookup.getDoctors(medicalIssue);  // need to format
    console.log(doctors);
    // $("#show-doctors").text(doctors);
  });
});
