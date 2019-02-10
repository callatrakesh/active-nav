// JavaScript Document
$(document).ready(function(){
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();  
  if ( path == '' ) {
    path = 'index.html';
  }      
  var target = $('.nav > li > a[href="'+path+'"]').parent(); 
  target.addClass('active');
});

