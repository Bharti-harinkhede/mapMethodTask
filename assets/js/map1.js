const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
]
var cl = console.log;
//1 ["Company One (1981 - 2003)", "Company Two (1992 - 2008)"]
  var res1 = [];
  for(let i = 0; i < companies.length; i++){
	  res1.push(`${companies[i].name} ( ${companies[i].start} - ${companies[i].end} )`);
  }
  console.log(res1);
  
  
  companies.forEach(comp => {	  
	  res1.push(`${comp.name} ( ${comp.start} - ${comp.end} )`);	  
  }) 
  console.log(res1);
  
  
  let result1 = companies.map(comp => `${comp.name} ( ${comp.start} - ${comp.end} )` );
  document.getElementById("info1").innerHTML = result1;
  
  
  

//2 ["Company One - 22", "Company Two - 16"]

let res2 = companies.map(comp => `${comp.name} - ${comp.end - comp.start}`);
document.getElementById("info2").innerHTML = res2;


//3 ['Company One - Finance', 'Company Two - Retail'...]
let res3 = companies.map(comp => `${comp.name} - ${comp.category}`);
document.getElementById("info3").innerHTML = res3;



//4 [
// {compName : "Company One"},
// {compName : "Company Two"},
// {compName : "Company Three"},
// ]
let res4 = companies.map(comp => {
	return{
	compName : comp.name
	}
})
document.getElementById("info4").innerHTML = res4;
cl(res4);



//5  [{compName : "Compnay One", lifeSpan : '1981 - 2003'}]

let res5 = companies.map(comp => {
	return{
	compName : comp.name,
	lifeSpan : `${comp.start} - ${comp.end}`
	}
})
document.getElementById("info5").innerHTML = res4;
cl(res5);

// 6 [{compName : "Company One", duration : 22}]

let res6 = companies.map(comp => {
	return{
	compName : comp.name,
	duration : `${comp.end - comp.start}`
	}
})
document.getElementById("info6").innerHTML = res6;
cl(res6);

// 7 [{compName : "Company One", catg : "Finance"}]
let res7 = companies.map(comp => `${comp.name} - ${comp.category}`);
document.getElementById("info7").innerHTML = res7;

// #### **1. List all company names**

// `["Company One", "Company Two", "Company Three", ..., "Company Nine"]`
let res8 = companies.map(comp => comp.name);
document.getElementById("info8").innerHTML = res8;


// #### **2. Company names with category**

// `["Company One - Finance", "Company Two - Retail", ..., "Company Nine - Retail"]`

 let res9 = companies.map(comp => comp.category);
document.getElementById("info9").innerHTML = res9;
cl(res9);


// #### **3. Company duration in years**

// `[22, 16, 8, 21, 5, 23, 10, 5, 8]`
let res10 = companies.map(comp => comp.end - comp.start);
document.getElementById("info10").innerHTML = res10;
cl(res10);


// #### **4. Company names in uppercase**

// `["COMPANY ONE", "COMPANY TWO", ..., "COMPANY NINE"]`

let res11 = companies.map(comp => comp.name.toUpperCase());

document.getElementById("info11").innerHTML = res11;
cl(res11);


// #### **5. Company start years only**

// `[1981, 1992, 1999, 1989, 2009, 1987, 1986, 2011, 1981]`
let res12 = companies.map(comp => comp.start);

document.getElementById("info12").innerHTML = res12;
cl(res12);


// #### **6. Company end years only**

// `[2003, 2008, 2007, 2010, 2014, 2010, 1996, 2016, 1989]`

let res13 = companies.map(comp => comp.end);

document.getElementById("info13").innerHTML = res13;
cl(res13);


// #### **7. Company names with their duration formatted**

// `["Company One (22 years)", "Company Two (16 years)", ..., "Company Nine (8 years)"]`

let res14 = companies.map(comp => `${comp.name} ( ${comp.end - comp.start} years)`);

document.getElementById("info14").innerHTML = res14;
cl(res14);


// #### **8. Category only list**

// `["Finance", "Retail", "Auto", "Retail", "Technology", "Finance", "Auto", "Technology", "Retail"]`

let res15 = companies.map(comp => comp.category);

document.getElementById("info15").innerHTML = res15;
cl(res15);


// #### **9. Company names with start and end year range**

// `["Company One (1981 - 2003)", ..., "Company Nine (1981 - 1989)"]`
let res16 = companies.map(comp => `${comp.name} ( ${comp.start} - ${comp.end}`);

document.getElementById("info16").innerHTML = res16;
cl(res16);


// #### **10. Company details in object with name and years worked**


// ```js
// [
//   { name: "Company One", years: 22 },
//   { name: "Company Two", years: 16 },
//   ...
// ]
let res17 = companies.map(comp => {
	return {
		name: comp.name,
		years: `${comp.end - comp.start}`
	}
})
document.getElementById("info17").innerHTML = res17;
cl(res17);


// #### **11. Company name with starting decade**

// `["Company One - 1980s", "Company Two - 1990s", ..., "Company Nine - 1980s"]`

let res18 = companies.map(comp => {
 let decade = Math.floor(comp.start / 10) * 10 + "s";
 return `${comp.name} - ${decade}`;
}
)

document.getElementById("info18").innerHTML = res18;
cl(res18);


// #### **12. Category wise label for companies**

// `["Finance Company", "Retail Company", "Auto Company", ..., "Retail Company"]`

let res19 = companies.map(comp => `${comp.category} Company `)

document.getElementById("info19").innerHTML = res19;
cl(res19);


// #### **13. Name and category together in object**


// ```js
// [
//   { company: "Company One", category: "Finance" },
//   ...
// ]

let res20 = companies.map(comp => `company: ${comp.name} , category: ${comp.category} `);

document.getElementById("info20").innerHTML = res20;
cl(res20);


// #### **14. Company names with initials only**

// `["CO", "CT", "CT", "CR", "CT", "CF", "CA", "CT", "CR"]`

let res21 = companies.map(comp => {
	let init = comp.name.split(" ")
	.map(c => c[0].toUpperCase()).join("");
	return init;
});

document.getElementById("info21").innerHTML = res21;
cl(res21);


// #### **15. Add 'Ltd.' to every company name**

// `["Company One Ltd.", "Company Two Ltd.", ..., "Company Nine Ltd."]`

let res22 = companies.map(comp => ` ${comp.name} Ltd. `);

document.getElementById("info22").innerHTML = res22;
cl(res22);


// #### **16. Create unique ID for each company**

// `["Company One-1981", "Company Two-1992", ..., "Company Nine-1981"]`

let res23 = companies.map(comp => ` ${comp.name}-${comp.start} `);

document.getElementById("info23").innerHTML = res23;
cl(res23);


// #### **17. Boolean array: Was company active after 2000?**

// `[true, true, true, true, true, true, false, true, false]`


let res24 = companies.map(comp => comp.end >= 2000 );

document.getElementById("info24").innerHTML = res24;
cl(res24);


// #### **18. Company name with their start age (Assume current year = 2025)**

// `["Company One - 44 years old", ..., "Company Nine - 44 years old"]`

let res25 = companies.map(comp => {
	let currentYear = new Date().getFullYear();
	let age = currentYear - comp.start;
	return `${comp.name} - ${age} years`
});

document.getElementById("info25").innerHTML = res25;
cl(res25);

// #### **19. Format all companies as CSV row**

// `["Company One,Finance,1981,2003", ..., "Company Nine,Retail,1981,1989"]`


let res26 = companies.map(comp => ` ${comp.name} ${comp.category} ${comp.start} ${comp.end} <br>`);

document.getElementById("info26").innerHTML = res26;
cl(res26);

// #### **20. Convert company objects into stringified JSONs**


// ```js
// [
//   '{"name":"Company One","category":"Finance","start":1981,"end":2003}',
//   ...
// ]
let res27 = companies.map(comp => JSON.stringify(comp));

document.getElementById("info27").innerHTML = res27;
cl(res27);

// #### **21. Years active as string range**

// `["1981 to 2003", "1992 to 2008", ..., "1981 to 1989"]`

let res28 = companies.map(comp => `${comp.start} to ${comp.end}`);

document.getElementById("info28").innerHTML = res28;
cl(res28);

// #### **22. All lowercase company names**

// `["company one", "company two", ..., "company nine"]`

let res29 = companies.map(comp => comp.name.toLowerCase());

document.getElementById("info29").innerHTML = res29;
cl(res29);


// #### **23. Company names with their index**

// `["0: Company One", "1: Company Two", ..., "8: Company Nine"]`

let res30 = companies.map((comp, index) => `${index} : ${comp.name} `);

document.getElementById("info30").innerHTML = res30;
cl(res30);

// #### **24. First letters of all company names**

// `["C", "C", "C", "C", "C", "C", "C", "C", "C"]`

let res31 = companies.map(comp => {
	let firstLetter = "C" + comp.name.slice(1);
	return firstLetter;
	
});

document.getElementById("info31").innerHTML = res31;
cl(res31);

// #### **25. Length of each company name string**

// `[12, 12, 14, 14, 14, 13, 14, 14, 14]`

let res32 = companies.map(comp => comp.name.length);

document.getElementById("info32").innerHTML = res32;
cl(res32);

// #### **26. Extract last word from each company name**

// `["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]`

let res33 = companies.map(comp => {
  var lastword = comp.name.split(" ");
  return lastword[lastword.length-1];
})

document.getElementById("info33").innerHTML = res33;
cl(res33);

// #### **27. Company name with total digits in start+end**

// `["Company One - 8 digits", ..., "Company Nine - 8 digits"]`
let res34 = companies.map(comp => {
  return `${comp.name.length} digits`;
})

document.getElementById("info34").innerHTML = res34;
cl(res34);


// #### **28. Total characters in company name + category**

// `[24, 23, 23, 24, 26, 24, 23, 26, 24]`
// *(e.g., "Company OneFinance" = 12 + 7 = 19)*

let res35 = companies.map(comp => {
  var cmp = (comp.name + comp.category).length;
  return `${comp.name} ${comp.category} = ${cmp}`;
})

document.getElementById("info35").innerHTML = res35;
cl(res35);

// #### **29. Reverse of company name**

// `["enO ynapmoC", "owT ynapmoC", ..., "eniN ynapmoC"]`

let res36 = companies.map(comp => comp.name.split("").reverse().join(""))

document.getElementById("info36").innerHTML = res36;
cl(res36);

// #### **30. First 3 letters of category (abbreviation)**

// `["Fin", "Ret", "Aut", "Ret", "Tec", "Fin", "Aut", "Tec", "Ret"]`

let res37 = companies.map(comp => comp.category.slice(0,3))

document.getElementById("info37").innerHTML = res37;
cl(res37);

// 1.create list usgin map , foreach and for loop
 let skills = ['HTML', 'CSS', 'JS', 'Angular']
 
 //USING FOR LOOP
 var resultarr = "";  
   for(let i = 0; i < skills.length; i++){
	   var resultarr = resultarr +`<li>${skills[i]}</li>`;  
   }
 //USING FOREACH LOOP  
   skills.forEach(s => {
	   var resultarr = resultarr +`<li>${s}</li>`;
   })
   document.getElementById("lists").innerHTML = resultarr;
   cl(resultarr);
 // USING MAP METHOD 
   var res = skills.map(c => {
	   return `<li>${c}</li>`;
   })
   
  



//2.
 let hobbiesArr = ["Chess", "Cricket", "Codeing", "Cooking"];
 
 //USING FOR LOOP
var resultarr1 = "";  
   for(let i = 0; i < hobbiesArr.length; i++){
	   var resultarr1 = resultarr1 +`<li>${hobbiesArr[i]}</li>`;  
   }
 //USING FOREACH LOOP
   hobbiesArr.forEach(com => {
	   var resultarr1 = resultarr1 +`<li>${com}</li>`;
   })   
   document.getElementById("lists1").innerHTML = resultarr1;
   cl(resultarr1);

// USING MAP METHOD 
   var resultarr1 = hobbiesArr.map(c => {
	   return `<li>${c}</li>`;
   })
   

// create tables usgin map , foreach and for loop
 let employees = [
   { name: 'John', dept: 'HR', email: 'john@abc.com' },
   { name: 'Sara', dept: 'IT', email: 'sara@abc.com' },
   { name: 'Amit', dept: 'Finance', email: 'amit@abc.com' },
   { name: 'Pooja', dept: 'IT', email: 'pooja@abc.com' },
   { name: 'Tina', dept: 'HR', email: 'tina@abc.com' },
   { name: 'Ravi', dept: 'Sales', email: 'ravi@abc.com' },
   { name: 'Sneha', dept: 'IT', email: 'sneha@abc.com' },
   { name: 'Nikhil', dept: 'Support', email: 'nikhil@abc.com' },
   { name: 'Simran', dept: 'Finance', email: 'simran@abc.com' },
   { name: 'Karan', dept: 'Admin', email: 'karan@abc.com' }
  ];
  
  var rst1 = "";
  //USING FOR LOOP
  for(let i = 0; i < employees.length; i++){
	   var rst1 =  rst1 +`
	   <tr>
	   <td>${employees[i].name}</td>
	    <td>${employees[i].dept}</td>
	    <td>${employees[i].email}</td>
		</tr>
	   
	   `;  
   }
   
   //USING FOREACH LOOP
   employees.forEach(comp =>{
	   var rst1 =  rst1 +`
	   <tr>
	   <td>${comp.name}</td>
	    <td>${comp.dept}</td>
	    <td>${comp.email}</td>
		</tr>
	   
	   `;     
   })
  document.getElementById("table1").innerHTML = rst1;
   cl(rst1);

//USING MAP METHOD
     var tbl1 = employees.map(comp =>{
	   return`
	   <tr>
	   <td>${comp.name}</td>
	    <td>${comp.dept}</td>
	    <td>${comp.email}</td>
		</tr>
	   
	   `;     
   })
  document.getElementById("table1").innerHTML = rst1;
   cl(rst1);
