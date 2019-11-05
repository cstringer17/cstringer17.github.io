document,addEventListener('DOMContentLoaded', function(){
var elems = document.querySelectorAll('.parallax');
var instances  = M.Parallax.init(elems);
});


document,addEventListener('DOMContentLoaded', function(){
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
    
    console.log("ey this is working");
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: false
    });
  });

 