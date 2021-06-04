function esElFinal() {
  let element = document.getElementById("scroll-cont");

  if (element.offsetHeight + element.scrollTop >= element.scrollHeight) {
      alert("SRCIPT");
  }
}



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

  