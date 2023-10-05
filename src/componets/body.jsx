import bodycss from "./body.module.css"

export function Body (){
    return  <div className="body">body
    <Leftbody/>
    <Midbody/>
    </div>
    
        
}

function Leftbody(){
    return <div className="leftbody">
        leftbody
    </div>
}

function Midbody(){
    return <div className="midbody">
       <h1 className="name">midbody</h1> 
       <p className={bodycss.text}>maaz2</p>
    </div>
}

