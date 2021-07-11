

window.addEventListener('DOMContentLoaded', ()=>{

    
  let intro = document.querySelector('.intro');
  let logo = document.querySelector('.logo-header');
  let logoSpan = document.querySelectorAll('.logo');
    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        
        setTimeout(()=>{
            logoSpan.forEach((span,idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx +1) * 50)
            })
        },3000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },3300);
        /**/
    })
})
 var activated = false
 var picScroll = 0;
// Variables
var viewport = $(window),
    root = $('html'),
    maxScroll;

    function changeBackground(color) {
        console.log(color);
        root.css({ background: `${color}` });
        //root.css({ background: color });
        //root.css({zIndex: 100 });

     }

     function movePicture(number){
         picScroll = number;
         console.log("in the function");
        var scrolled = viewport.scrollTop();
        console.log("scrolled: " + scrolled + "  Max scroll: " + maxScroll);
            if(number > -40 && scrolled >= maxScroll-100){
                
            setTimeout(function(){ number-=.05 ;
                document.getElementById("bull").style.marginLeft = `${number}rem`;
                document.getElementById("other").style.marginLeft = `${number}rem`;
                                    movePicture(number); }, 25);
            }
            
         
     }

    
// Bind events to window
viewport.on({
  scroll: function() {
    // Grab scroll position
    var scrolled = viewport.scrollTop();
    

    var tempholder;
    /**
     * Calculate our factor, setting it as the root `font-size`.
     *
     * Our factor is calculated by multiplying the ratio of the page scrolled by our base factor. The higher the base factor, the larger the parallax effect.
     */
     //console.log("Scrolled:  " + scrolled + ", MaxScroll: " + maxScroll + ", Total: " + (scrolled / maxScroll) * 50);

     var html = document.getElementById("html");
    root.css({ fontSize: (scrolled / maxScroll) * 50 });
    blackSize = Math.round(((scrolled / maxScroll) * 75 ));
    whiteSize = 75 - blackSize;
    
    if(whiteSize >= 50){
        tempholder = `linear-gradient(black, white)`;
        //tempholder = ` linear-gradient(black ), rgb(139, 139, 139) ${whiteSize}%`;
        changeBackground(tempholder);

    }
    else{
        tempholder = `linear-gradient(black, white)`
        //tempholder =  `linear-gradient(black ${blackSize}% ), rgb(139, 139, 139)`;
        changeBackground(tempholder);
    }
    
    console.log(blackSize);
    console.log(activated)
    if(blackSize == 75){
        console.log("hello")
        movePicture(picScroll);
        activated = true;
        
    }
  },
  resize: function() {
    // Calculate the maximum scroll position
    maxScroll = root.height() - viewport.height();
  }
}).trigger('resize');


