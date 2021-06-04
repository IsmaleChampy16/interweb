
// const numero=document.getElementById('numero')
        
//        let cantidad=0
//         let tiempo=setInterval(() => {
//             cantidad+=1
//             numero.textContent=cantidad
//             if(cantidad===32){
//                 clearInterval(tiempo)
//             }
//         }, 80);

$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 5000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
  });



