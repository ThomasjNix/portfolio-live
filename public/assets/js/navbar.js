(function(location){
	$('#slide-out a[href="/'+location).parent().addClass('active');
})(window.location.pathname.substr(1));

$(".button-collapse").sideNav();

$('#mobile-menu-icon').on('click', function(){
	$('body > div.drag-target').css('display','initial');
	$('#main-content-container').css('filter','blur(5px)');

});

/* Add blur to background page when nav opens on mobile */
$('body > div.drag-target').on('click touch', function(){
	$('body > div.drag-target').css('display','none');
	$('#main-content-container').css('filter','none');
});