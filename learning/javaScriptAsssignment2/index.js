var fs = require("fs");
var readline = require('readline');
var cases=[];
var cases1=[];
var cases2=[];

var flag=false;
var Type,Index,desc,typeOfRobbery;
var obj = {};
var obj1 = {};
var obj2 = {};
var count = 0;

var total = 0;
//var lines;


var rd = readline.createInterface({
  input: fs.createReadStream('Crimes_-_2001_to_present.csv')
});


rd.on('line', (line) => {

  var lines = line.toString().split(/,(?=(?:(?:[*"]*"){2})*[^"]*$)/);

  // filter1(lines);
  filter2(lines);
  // filter3(lines);

});

// function filter1(lines)
// {
//   for(var i=0;i<lines.length;i++)
//   {
//       if(lines[i] == "Primary Type")
//       {
//         Type=i;
//       }
//       else if(lines[i]=="Year")
//       {
//         Index=i;
//       }
//   }
//
//
// if(lines[Type]=="ROBBERY")
// {
//   if(lines[Index]>=2001 || lines[Index]<=2016)
//   {
//     for(var i in cases)
//     {
//       if(cases[i]["year"]===lines[Index]){
//         cases[i]["ROBBERY"]+=1;
//         flag=true;
//         break;
//       }
//     }
//
//     if(flag==false)
//     {
//
//       cases.push({year:lines[Index],ROBBERY:1,BURGLARY:0});
//       // cases.push({ROBBERY : {year:lines[Index],RobberyCount:1}});
//
//
//     }
//     flag=false;
//   }
// }
//
// else if (lines[Type]=="BURGLARY")
// {
//   if(lines[Index]>=2001 || lines[Index]<=2016)
//   {
//     for(var i in cases)
//     {
//       if(cases[i]["year"]===lines[Index])
//       {
//         cases[i]["BURGLARY"]+=1;
//         flag=true;
//         break;
//       }
//     }
//
//     if(flag==false){
//
//       cases.push({year:lines[Index],ROBBERY:0,BURGLARY:1});
//       // cases.push( {BURGLARY : {year:lines[Index],BurglaryCount:1}});
//
//
//     }
//     flag=false;
//   }
// }
//
// }


function filter2(lines)
{
  for(var i=0;i<lines.length;i++)
  {
      if(lines[i]=="Primary Type")
      {
      Type=i;
      }
      else if(lines[i]=="Year")
      {
        Index=i;
      }
      else if(lines[i]=="Description")
      {
        desc=i;
      }
    }

    if(lines[Type]=="CRIMINAL DAMAGE")
    {
        if(lines[Index]>=2001 || lines[Index]<=2016)
        {
          if(lines[desc]==="TO PROPERTY")
          {
            for(var i in cases1)
            {
              if(cases1[i]["year"]===lines[Index])
              {
                cases1[i]["Property"]+=1;
                flag=true;
                break;
              }
            }

            if(flag==false){
              cases1.push({year:lines[Index],Property:1,Vehicle:0,stateSup:0});


            }
            flag=false;
          }

          else if(lines[desc]==="TO VEHICLE")
          {
            for(var i in cases1)
            {
              if(cases1[i]["year"]===lines[Index])
              {
                cases1[i]["Vehicle"]+=1;
                flag=true;
                break;
              }
            }
            if(flag==false)
            {
              cases1.push({year:lines[Index],Property:0,Vehicle:1,stateSup:0});

            }
            flag=false;
          }

          else if(lines[desc]==="TO STATE SUP PROP")
          {
            for(var i in cases1)
            {
              if(cases1[i]["year"]===lines[Index])
              {
                cases1[i]["stateSup"]+=1;
                flag=true;
                break;
              }
            }
            if(flag==false)
            {
              cases.push({year:lines[Index],Property:0,Vehicle:0,stateSup:1});

            }
            flag=false;
          }
        }
      }
}

// function filter3(lines)
// {
//   for(var i=0;i<lines.length;i++)
//   {
//         if(lines[i]=="Primary Type")
//         {
//         Type=i;
//       }
//       else if(lines[i]=="IUCR")
//       {
//         typeOfRobbery=i;
//       }
//       else if(lines[i]=="Description")
//       {
//         desc=i;
//       }
//     }
//       if(lines[Type]=="ROBBERY")
//       {
//               for(var i in cases2)
//               {
//                 if(cases2[i]["Type"]===lines[typeOfRobbery])
//                 {
//                   cases2[i]["case"]=lines[desc];
//                   cases2[i]["count"]+=1;
//                   total+=1;
//                   flag=true;
//                   break;
//                 }
//               }
//               if(flag==false)
//               {
//                 total+=1;
//                 cases2.push({Type:lines[typeOfRobbery],case:lines[desc],count:1});
//                 // obj2["Type"] = lines[typeOfRobbery];
//                 // obj2["case"] = lines[desc];
//                 // obj2["count"] = 1;
//                 //
//                 // cases2.push(obj2);
//               }
//               flag=false;
//       }
// }




rd.on('close',function(){

  // print("json1.json",cases);
  print("json2.json",cases1);
  // print("json3.json",cases2);

  function print(file,ob){

    ob.sort(function(a, b){
      return b.year-a.year;
      });

  fs.writeFile(file, JSON.stringify(ob, null, 2), function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("written");
      }
  });
}
});
