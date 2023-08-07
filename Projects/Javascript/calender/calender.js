const currentdate=document.getElementById('current_month');
const datenum=document.getElementById('nums');

const icons=document.querySelectorAll('.arrw button')

let date=new Date(),
year=date.getFullYear(),
month=date.getMonth();


const allmonths=['Januvary','Febravary','March','April','May','June','July','August','September','October','November','December']

const mycalender=()=>{
    let firstday=new Date(year,month,1).getDay();// gets 1st day of month
    let lastdate=new Date(year,month+1,0).getDate();//gets last month date
    let lastdayofmonth=new Date(year,month,lastdate).getDay();//gets last day
    let lastdateofmonth=new Date(year,month,0).getDate();//gets last date of prev. month
    let thelist=" ";

    for(let i = firstday;i>0;i--){
       
        thelist+=`<li class="inactive">${lastdateofmonth-i+1}</li>` 
    }//last month number
   
    for(let i=1;i<=lastdate;i++){
        if (i === date.getDate() && month === date.getMonth() && year === date.getFullYear()) {
            thelist += `<li class="numactive">${i}</li>`;
          } else {
            thelist += `<li class="num">${i}</li>`;
          }
        

    }
    for(let i = lastdayofmonth;i<6;i++){
       
        thelist+=`<li class="inactive">${i-lastdayofmonth+1}</li>` 
    }//next month numbers

    currentdate.innerText=`${allmonths[month]} ${year}`
    datenum.innerHTML=thelist;
}
mycalender();


icons.forEach(buttn=>{
    buttn.addEventListener('click',()=>{
        if(buttn.id==="left"){
            month=month-1;
        }
        else{
            month=month+1;
        }

        if(month<0||month>11){
            date=new Date(year,month);
            year=date.getFullYear();
            month=date.getMonth();
        }
        else{
            date=new Date();
        }


        mycalender();
    })
})
