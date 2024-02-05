
let promisearr=[];
handle.arr=[];

function handle(e,element){
    e.preventDefault();
    console.log(element);
    if(handle.arr.length===7){
        handle.arr=[];
    }
    handle.arr.push(element);
    
    element.style.backgroundColor="green"
    if(handle.arr.length===7){
        let cnt=0;
        for(let i=1;i<=7;i++){
            setTimeout(()=>{
                
                handle.arr[i-1].style.backgroundColor="";
                handle.arr[i-1]="done";
            },2000+(i*1000))
            
        }
        if(handle.arr[6]==="done"){
            handle.arr=[]
        }
        
    }
    
    
    
    
    
    
}
