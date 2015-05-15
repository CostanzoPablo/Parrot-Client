// Bind events
/*$(document).on('bottomreached', '#content', function() {
    // Load more
    alert('rechazado');
    $('#content').scrollz('hidePullHeader');
});*/

$(document).on('pulled', '#content', function() {
     // Reset page index
    nextPageIndex = 0;
    
    // Reload
    alert('refreshing');
    setTimeout(function(){ 
    	alert("Refresed ! :)"); 
    	$('#content').scrollz('hidePullHeader');
    }, 3000);
    
});