(function() {

    // var speed = 10,
    //   // i = 0,
    //   // doSomething = function() {
    //     // console.log("doSomething() executed " + (i + 1) + " times");
    //     // i = i + 1;
    //     //
    //     // if (i > 9) {
    //     //   // setTimeout(doSomething, speed);
    //     //   clearInterval(timer);
    //     // }
    //
    //     //-----------Animation-----------------//
    //     moveBox = function(moveBy) {
    //
    //       var el = document.getElementById("box"),
    //           left = el.offsetLeft; //offsetTop
    //
    //           // moveBy = 3; //+ve value for left and -ve value for right
    //           // el.style.left = left + moveBy + "px";
    //
    //      if ((moveBy > 0 && left > 399) || (moveBy < 0 && left < 51))
    //      {
    //        clearTimeout(timer);
    //        timer = setInterval(function() {
    //          moveBox(moveBy * -1);
    //        }, speed);
    //      }
    //
    //      el.style.left = left + moveBy + "px";
    //
    //   };
    //   // var timer = setInterval(moveBox, speed);
    //
    //   var timer = setInterval(function() {
    //     moveBox(3);
    //   }, speed);


    // var timer = setTimeout(doSomething, speed);

  //  var timer = setInterval(doSomething, speed);

    // alert(timer);
    // clearTimeout(timer); //to cum out of setTimeout()

    //----------------events-----------------//

    // window.onload = function() {
    // var e1 = document.getElementById("box");
    //
    // e1.onclick = function() {
    //   this.style.backgroundColor = "red";
    // };
  // };

      var buttons = document.getElementsByTagName("button");
      for (var i = 0, len = buttons.length; i < len; i = i + 1) {
        buttons[i].onclick = function() {
          var className = this.innerHTML.toLowerCase();

          document.body.className = className;
        };
        buttons[i].onclick = function() {}; //overrites/conflicts d previous onclick(DOM level 0 event handlers) since it is volatile it can contain/ service only one function at a tym
      }




}());
