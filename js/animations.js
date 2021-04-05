window.onload = window.addEventListener('scroll', function(){
    function fade(direction){
        var animate = document.querySelectorAll('.fade_'+direction);
        for(var i = 0; i < animate.length; i++){
            var altura = window.innerHeight/1.3;
            var distancia = animate[i].getBoundingClientRect().top;
            console.log(altura);
            console.log(distancia);
            animate[i].classList.add('transform_'+direction)
            if(distancia <= altura){
                animate[i].classList.add('appear');
            } else {
                animate[i].classList.remove('appear');
            }
        }
    }
    
    fade('left');
    fade('right');
    fade('up');
    fade('down');
    fade('none');
})