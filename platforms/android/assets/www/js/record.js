var dropped = false;
var timer;
function record_time(){
    var recording = $('body').hasClass('recording');
    var $record_box = $('#record-box');
    var $time = $record_box.find('.time');
    var time = $time.data('time');
    if (recording){
        time++;
        $time.data('time', time).text(time);
        setTimeout(record_time, 1000);
    }
}
$(document).ready(function() {    
    var $record = $('#record');
     $record.draggable({
        revert: function (socketObj) {
            $record.find('.fa').addClass('fa-microphone').removeClass('fa-microphone-slash');
            if (socketObj === true) {
                // success
                return false;
            }else {
                // reverting
                if (dropped == false){
                    alert('SENDING ! :D');
                    resetTimer();
                    $('body').removeClass('sending');
                    setTimeout(function(){
                        $('body').removeClass('sending');
                    }, 3000);
                }
                dropped = false;
                return true;
            }
        },
        scroll: false,
        stack: "#peg_icon",
        start: function(event, ui) {
            $('body').addClass('recording');
            setTimeout(record_time, 1000);
        },
        cursorAt: { top: 100, left: 70 }
    });

    $("#record-box .trash").droppable({ 
        drop: function(dropElem) {
            dropped = true;          
            
            alert('ELIMINAR !');
            resetTimer();
        },      
        over: function(event, ui) {
            $record.find('.fa').addClass('fa-microphone-slash').removeClass('fa-microphone');
        },      
        out: function(event, ui) {
            $record.find('.fa').addClass('fa-microphone').removeClass('fa-microphone-slash');
        },
        accept: '#record'
    });

    function resetTimer(){
        $('body').removeClass('recording');
        var $record_box = $('#record-box');
        var $time = $record_box.find('.time');
        $time.data('time', 0);
        $time.text('0');
    }
});
