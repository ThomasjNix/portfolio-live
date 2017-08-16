(function(location){
	$('#slide-out a[href="/'+location).parent().addClass('active');
})(window.location.pathname.substr(1));

$(".button-collapse").sideNav();