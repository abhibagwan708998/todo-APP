import React, { useState } from "react";

function Todolist() {
    const [ activity , setActivity]= useState("");
    const [ listData , setlistData] = useState ([]);

  function addActivity(){
    if(activity.trim() !== ''){
    setlistData((listData)=>{
        const updatedList =[...listData, activity];
        console.log(updatedList)
        setActivity('');
        return updatedList
  })
      
    }}
    function removeActivity(i){
        const updatedlistData=listData.filter((Elem,id)=>{
           return i!==id ;

        })
     setlistData(updatedlistData);   
}
function removeAll(){
  setlistData([]);
}
  return (
    <>  
    <div className="container">
        <div className="Header">Just Do it.</div>
        <div className="Inpt">
        <input type="text"  placeholder="Add a task." value={activity} onChange={(e)=> setActivity (e.target.value)} />
        
        <button onKeyPress={addActivity} onClick={addActivity}> I Got This!</button>
        </div>
          {listData!==[] && listData.map(( data,i)=>{
            return(
           <>    
           <p className="main" key={i} > 
             <div className='list-data'>{data}
             </div>      
             <button  onClick={()=>removeActivity(i)} > 
       
            Remove(-) </button>

             </p>
           </>   
          )})}
         
         {listData.length>=1 &&  
        <button className="Btn" onClick={removeAll}> Remove All </button>}

    </div>
    </>
  )
 
}

export default Todolist

