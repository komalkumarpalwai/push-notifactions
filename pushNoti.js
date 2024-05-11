const btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    Notification.requestPermission().then(prem=>{
   if( prem ==="granted"){
    console.log("hi")
    const noti=new Notification(
        "example notification",{
            body:"this is an example notification",
            icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1u05OPc7MSt9f5Dg2QMSbRPu_FHowIjog-jxeSwHIw&s",
        }
    )
   }else{
 
 Notification.requestPermission()
   }
    })
})
document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState === "hidden")
    {
        const leavedate= new Date();
let interval= setInterval(()=>{
     let notification= new Notification("come back to our website",{
        body:`you have been inactive from our websitse past  ${Math.round((new Date()-leavedate)/100)} Seconds`
     })
},100)
}else{
    if(interval) clearInterval(interval)
    if(notification) notification.close
}
})