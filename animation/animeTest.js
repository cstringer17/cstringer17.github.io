

function display2() {
    console.log("hover");
    anime({
        targets: '.panel',
        rotate: '90deg',
         //rotate: '1turn',
        duration: 8000,
        direction: 'normal'
    });
    anime({
        targets: '.textbox',
        duration: 8000,
        direction: 'normal',
        width: '100%',
        height: '70%',
        position: 'relative',
        backgroundColor: 'red',
        opacity: '0',
        rotate: '90deg',

    });
    anime({
        targets: '.bar',
        width: '100%',
        transform: 'rotate(0deg)',
        rotate: '90deg',
        top: '90%',
        left: '-50%',
        duration: 8000,
        direction: 'normal',
        opacity: '0'

    });
}