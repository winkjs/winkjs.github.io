function hideAllButCurrent(){$("nav > ul > li > ul li").hide();var l=window.location.pathname.split("/").pop();$("nav > ul > li > a[href^='"+l+"']").parent().find("> ul li").show()}$(document).ready(function(){hideAllButCurrent()});