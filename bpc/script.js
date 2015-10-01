$(function() {
    
    // Wait for window load
	/*$(window).load(function() {
	    $('a[href="#home"]').simulate('click');
	    document.body.scrollTop = document.documentElement.scrollTop = 0;
	});*/
	    
    
    // Add fixed class to nav-menu when scrolled 
    // function onScrolledTop(){
    // 	// AdobeEdge.getComposition("docpad-keys-animation").getStage().play("start");
    // 	document.getElementById('main-menu').className += " main-menu-scrolled";
    // 	console.log('SCROLLED!!!!!!!!!!!!');
    // }
    
    // // document.documentElement.className += " foo";
    // // document.documentElementstyle.borderBottom = '7px solid #005EAC';
    
    // window.onscroll = function(){
    // 	document.documentElement.scrollTop || document.body.scrollTop > 366 ?
    // 		onScrolledTop()
    // 		: document.getElementById('main-menu').className -= " main-menu-scrolled";
    // }
    
    // http://stackoverflow.com/questions/18831568/jquery-onclick-not-firing-on-dynamically-inserted-html-elements
    // All bpc-detail links
    $('a[href="#bpc-detail"]').on('click', function(){
        $('#bpc-detail-link').simulate('click'); 
    });
    
    // link to hidden updates page
    //$('#updates-link').on('click', function(){
    $('a[href="#updates"]').on('click', function(){
        $('#updates').simulate('click'); 
    });
    
    // simulate click for compete icon button
    $('#tt2').on('click', function(){
        $('#compete-link').simulate('click'); 
    });
    
    // simulate click for hidden privacy tab
    $('#privacy-footer-link').on('click', function(){
        $('#privacy-link').simulate('click'); 
    });
    
    // Override Material Design Lite tab event and load meetup page
    $('#attend-header-link').on('click', function() {
       window.location.assign('http://www.meetup.com/NewSpace-NYC/events/225224233/'); 
    });
    // Override Material Design Lite tab event and load Space Fontier page
    $('#bpc-rules-link').on('click', function() {
       window.location.assign('http://newspacebpc.com/competition-rules/'); 
    });

});