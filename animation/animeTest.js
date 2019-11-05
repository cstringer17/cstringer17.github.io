

function normalSpin(id, speed) {
    //panel
    console.log('#' + id);
    anime({
        targets: '#' + id,
        rotate: '90deg',
        //rotate: '1turn',
        duration: speed,
        direction: 'alternate',
    });
    //textbox
    console.log('#' + id + ' > .textbox');
    anime({
        targets: '#' + id + ' > .textbox',
        duration: speed,
        direction: 'alternate',
        width: '100%',
        height: '70%',
        position: 'relative',
        backgroundColor: 'red',
        opacity: '0',
        rotate: '90deg',
    });
    //bar
    anime({
        targets: '#' + id + '> .bar',
        width: '100%',
        transform: 'rotate(0deg)',
        rotate: '90deg',
        top: '90%',
        left: '-50%',
        duration: speed,
        direction: 'alternate',
        opacity: '0',
        position: 'relative',

    });
}

document, addEventListener('DOMContentLoaded', function () {
    
    var words = ['one ','two ','three ','four ', 'five ','six ','seven ','eight '];

    var i;
    for (i = 0; i < 8; i++) {
        
        normalSpin(words[i], 2000);
    }
});
