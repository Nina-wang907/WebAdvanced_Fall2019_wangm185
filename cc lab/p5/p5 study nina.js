

function setup() {
    createCanvas(1000, 1000);
    noStroke();
  }
  
  function draw() {
    background(206,236,242);
    
    //turning and change pattern
    var lines;
    let w = 10;
    let e = 10; 
    c= color(255,255,255);
    a = color(242, 203,5);
    b = color(206,236,242);
   
      //change lines & circles
    
    for(var y = 40;y <= height-60; y+=60){
        
    
    fill(c);
    rect(20,y,width-40,w);
    
    
    if(mouseY>500){
      lines =true;
    } else{
      lines = false;
    }
    
    for (var i = 20;  i <=height-20;i+=60){
      fill(b);
      rect(20,i,width-40,e);
      
      //change circles
      for (var u = 20; u <= width-20; u +=60){
        for (var q = 20; q <= height-20; q+=60){
        fill(a);
        ellipse(u,q,e,e);}
      }
      
      
      if(lines){
        e=10;
      }else{
        e=-40;
      }
    }
   }
  }