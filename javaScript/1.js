    // // alert("Hello , World!");
    // // alert("Hello,JavaScript")
    //
    //
    //
    //
    // var myvariable="Hello,World!";
    // alert(myvariable);
    //
    // // var doSomething= function(paramOne,paramTwo) {
    // //
    // //   paramOne=paramOne+3;
    // //   paramOne=paramOne+1;
    // //   paramOne=paramOne*8;
    // //
    // //   return paramOne *paramTwo;
    // // };
    //
    //
    // var doSomething= function(paramOne,paramTwo, fn) {
    //
    //   paramOne=paramOne+3;
    //   paramOne=paramOne+1;
    //   paramOne=paramOne*8;
    //
    //   return fn(paramOne ,paramTwo);
    // };
    //
    // // function sum(paramOne,paramTwo)
    // // {
    // //   return paramOne+paramTwo;
    // // }
    // //
    // // function product(paramOne,paramTwo)
    // // {
    // //   return paramOne * paramTwo;
    // // }
    // //
    // // var foo= doSomething(2,2,sum);
    // // var bar= doSomething(3,2,product);
    //
    //
    //
    // var foo= doSomething(2,2,    function sum(paramOne,paramTwo)
    //     {
    //       return paramOne+paramTwo;
    //     });
    // var bar= doSomething(3,2,function product(paramOne,paramTwo)
    // {
    //   return paramOne * paramTwo;
    // });
    //
    // //  var foo= doSomething(2,2);
    // //  var bar= doSomething(3,2);
    // //
    // // function doSomething(paramOne , paramTwo)
    // // {
    // //   paramOne=paramOne+3;
    // //   paramOne=paramOne+1;
    // //   paramOne=paramOne*8;
    // //
    // //   return paramOne *paramTwo;
    // // }
    //
    // alert(foo);
    // alert(bar);
    //
    //
    // var obj="This is a string object.";
    // lenght= obj.length;
    //
    // var index = obj.indexOf("is");
    // var index2 = obj.indexOf("is",index+1);
    // var index3 = obj.indexOf("this");
    // var index4 = obj.lastIndexOf("is");
    // var index5 = obj.lastIndexOf("is",index4-1);
    //
    // alert(length);
    //
    // alert(index);
    // alert(index2);
    // alert(index3);
    // alert(index4);
    // alert(index5);
    //
    //
    // // var person=new Object();
    // //
    // // person.firstName = "Preethi";
    // // person.lastName = "Radhakrishnan"
    // // person.getFullName = function(){
    // //       return this.firstName+ " " + this.lastName;
    // // };
    //
    //
    // var person = {
    //     firstName : "Preethi",
    //     lastName : "Radhakrishnan",
    //     getFullName :     function(){
    //               return this.firstName+ " " + this.lastName;
    //         }
    // };
    //
    // alert(person.getFullName());

    (function() {

      var divFoo = document.getElementById("foo");
        style = divFoo.style;

      //   divFoo.className = " css-class  css-class2 "; //can use multiple classes to style the element
      //   //add space b4 and after the class names for easily replacing a class
      //   // divFoo.className = ""; //to remove all classes applied to the element
      //   divFoo.className = divFoo.className.replace(" css-class2 ", "");
      // // style.color = "blue";
      // // style.border = "1px solid black";
      // // style.backgroundColor = "#ffff00";
      // // style.padding = "10px";
      //
      // alert(style.color);

      divFoo.className = " css-class  css-class2 ";

      // divFoo.classList.add("css-class");
      // divFoo.classList.add("css-class2");

      // divFoo.classList.remove("css-class");

      // divFoo.classList.toggle("css-class"); //removes class
      // divFoo.classList.toggle("css-class"); //adds the class back wen d browser ses that d class is removed

      // var color = window.getComputedStyle(divFoo, null).getPropertyValue("color"); //css property to be retrieved

    //   //---------------------------------------------//
    //   //legacy versions of ie use
    //   //-----------------------------//
    //
    // var color =  divFoo.currentStyle["color"];

      //------------------------------------
      /* Writing cross browser javascript*/
      //------------------------------------
      var getStyle = function(e1, cssProperty) {
        if (typeof getComputedStyle !== "undefined") {
          return window.getComputedStyle(e1, null).getPropertyValue(cssProperty);
        } else {
          return e1.currentStyle[cssProperty];
        }
      };

      var color =  getStyle(divFoo, "color");

      alert(color);

    }())
