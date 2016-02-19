/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Michael McDermott";
var role = "Lead Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);