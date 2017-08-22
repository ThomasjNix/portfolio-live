/* Common use declarations */
var pathNameSub = window.location.pathname.substr(1),
	mobileMenuIcon = $('#mobile-menu-icon'),
	mainContentContainer = $('#main-content-container'),
	slideOutMenu = $('#slide-out');

/* Add active class to side menu tab based on page location*/
$('#slide-out li a[href="/'+pathNameSub+'"]').parent().addClass('active');


/* Add blur to background page when side menu is opened on mobile */
mobileMenuIcon.on('click touch', function(){
	mainContentContainer.css('filter','blur(5px)');
	$('#sidenav-overlay').css('display','none');

});

/* Remove background blur if client touches/clicks outside of side menu */
$('body').on('click touch', function(e){
	if (e.clientX > slideOutMenu.width()){
		$('body > div.drag-target').css('display','none');
		mainContentContainer.css('filter','none');	
	}	
});