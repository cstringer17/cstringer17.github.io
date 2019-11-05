

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
    anime({
        targets: '#' + id + '> .h3-panel',
        opacity: 0,
        duration: speed,
        direction: 'alternate',
        

    });
    
    anime({
        targets: '#' + id + '> .project-information',
        duration: speed,
        direction: 'alternate',
        opacity:1,

    });


}

// document, addEventListener('DOMContentLoaded', function () {
    
//     var words = ['one ','two ','three ','four ', 'five ','six ','seven ','eight '];
//     flyin();
//     var i;
//     for (i = 0; i < 8; i++) {
//         normalSpin(words[i], 4000);
//     }
// });

function flyin(){
    console.log("working");
    anime({
        targets: ['#layer1', '#layer2'],
        opacity:1,
        duration: 8000,
    });
}