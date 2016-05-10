var fs = require("fs");

var list=[];
var name=[];
var count=1;
var data = fs.readFileSync('new.csv');
var nxt= data.toString().split('\r\n');
for(var i=0;i<nxt.length-1;i++){

  list.push(nxt[i].split(','));

}

console.log(list);

for(i=0;i<=list.length;i++)
{
  for(j=0;j<2;j++)
    {
          n=i;
          console.log(n);
          if(list[0][n]=="place")
      {
        name.push(list[count][n]);
        count++;
      }
    }
    count=1;
  }

console.log(name);

// fs.writeFile('a.txt',list,function(err) {
//    if (err) {
//        return console.error(err);
//      }
//    });
// console.log(list);
