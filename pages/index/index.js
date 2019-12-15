Page({
  data:{
    
  },
  handlerClick(event){
   
    let myStyle = this.selectComponent("#my-style");

    myStyle.increment();

  }

});