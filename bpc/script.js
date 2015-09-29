$(function() {
    // http://stackoverflow.com/questions/18831568/jquery-onclick-not-firing-on-dynamically-inserted-html-elements
    $('a[href="#bpc-detail"]').on('click', function(){
    //$('#hero-link').on('click', 'a',  function(){
        $('#bpc-detail-link').simulate('click'); 
        console.log('clicked!!!!!')
    });
    
    if($('#hero-link').data('clicked')) {
        alert('yes');
    }
});