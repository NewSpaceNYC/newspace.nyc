$(function() {
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
    
    $('#tt2').on('click', function(){
        $('#compete-link').simulate('click'); 
    });
    
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