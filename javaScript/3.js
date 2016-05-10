// (function() {
//
//     //-----------Standard Event Models------------------//
//         //used for the flexibility of being able to handle multiple pieces of code when an event occurs
//
//     var buttons = document.getElementsByTagName("button");
//
//     var buttonClick = function() {
//                 var className = this.innerHTML.toLowerCase();
//
//                 document.body.className = className;
//   };
//
//     for (var i = 0, len = buttons.length; i < len; i = i + 1) {
//     /*  buttons[i].onclick = function() {
//         var className = this.innerHTML.toLowerCase();
//
//         document.body.className = className;
//       }; */
//
//       buttons[i].addEventListener("click",buttonClick, true);//true-for capturing , false -for bubbling
//       buttons[i].addEventListener("click",function() {alert("hi"); }, true);
//
//       buttons[i].removeEventListener("click", buttonClick ,true); // removes the event
//       buttons[i].removeEventListener("click", function() {alert("hi"); } ,true); // doesnt remove the event since we have used an anonymous function
//       //so if we have to remove an event we shuld specify perticular function to be removed
//
//     }
//
// }());



function readFile (path) {
var fso = new ActiveXObject('Scripting.FileSystemObject'),
    iStream=fso.OpenTextFile(path, 1, false);
while(!iStream.AtEndOfStream) {
    document.body.innerHTML += iStream.ReadLine() + '<br/>';
}
iStream.Close();
}
readFile("Documents/1.txt");
