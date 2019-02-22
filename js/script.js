
var arr=[]; 
var sep=[];
var con=[];
var str,n,i,j,ans;

/* str is a string in with arr element is stored as string   **/

/******    function declaration for no button   *********/

var button_fun= function(val){
  arr.push(val);
    str=arr.join('')
document.getElementById('text').textContent=str; 
   sep= str.split(' ');

    for(i=0;i<sep.length;i++)
        {
           if(sep[i] =="+"||sep[i]=="*"||sep[i]=="/"||sep[i]=="-") 
               {
                   con[i]=sep[i];
               }
         else             
   con[i]=parseFloat(sep[i]); 
        
        }      
      
          
};


/***  taking button variable for easy targeting of DOM  ****/

var button=document.querySelectorAll(".no");





/******  function call for no button ************/




for (i = 0; i < button.length; i++) {
    
   button[i].addEventListener('click', function(){
  
    button_fun(this.value);
      console.log(arr,sep,con); 
   });
}


/**********      function declaration for equal button           *********/


var enter_fun=function(total){
   console.log("enter"); 
    console.log(total); 
    n=total.length;
    console.log(n);
   
           
       
    
    /*** NaN elements to 0  *******/
    
    
       for(i=0;i<n;i+=2){
           if(isNaN(total[i])){
               total[i]=0;
           }
           
       }
    
      
         
     
    
    
    
    /*** loop performing division   ****/
    
  
    for(j=0;j<n;j++){
    for(i=0;i<n;i++)
        {
            if(total[i+1]==="/"){
              
               total[i+2]= total[i]/total[i+2];
                total.splice(i,2);
                
             } 
 
            }
    }
    
    /***** loop performing multiplication ********/
    
    
     for(j=0;j<n;j++){
    for(i=0;i<n;i++)
        {
            if(total[i+1]==="*"){
               total[i+2]= total[i]*total[i+2];
                total.splice(i,2);
             } 
 
            }
     }
    
    
    /***** loop performing subtraction   ***********/
    
    
    
        for(j=0;j<n;j++){
    for(i=0;i<n;i++)
        {
            if(total[i+1]==="-"){
               total[i+2]= 0-total[i+2];
total[i+1]="+";
             } 
 
            }
     }
    
    
    
    
    
    
    
    /****** loop performing addition   *******/
    
    
     for(j=0;j<n;j++){
    for(i=0;i<n;i++)
        {
            if(total[i+1]==="+"){
               total[i+2]= total[i]+total[i+2];
                total.splice(i,2);
             } 
 
            }
     }
 
   
  
    
       n=total.length;
     document.getElementById('text').textContent=total[n-1];
    
    /** if the final result is 0 then no need clear the field  **/
    
     if(total[n-1]===0){
        arr=[];
        sep=[];
        con=[];
        }
    
    /****    as no./0 is set to ifinity in js | to convert it to maths error******/
    
    
    
          if(total[n-1]===Infinity || total[n-1]===-Infinity)
           {
                document.getElementById('text').textContent="Maths Error";
       
    }
   
    console.log(total);
    
};
   





/*******function call for equal button************/


document.querySelector("#equal").addEventListener('click',function(){
    enter_fun(con); 
});


/********* function declaration for cancel button   ***********/



var cancel_fun=function(){
    document.getElementById('text').textContent="0";
   console.log(arr);
    
    
    
    /**  converting  all array to empty    *********/
    arr=[];
    sep=[];
    con=[];
};



/****** function call for cancel button   ***********/


document.querySelector("#cancel").addEventListener('click',function(){
    cancel_fun(); 
});












