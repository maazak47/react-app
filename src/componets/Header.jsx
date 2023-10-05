 import style from "./Header.module.css"

export function Header(){
   return ( <div className="header">
       header
       < Lefthead/>
    </div>
  
   )
};

function Lefthead(){
    return ( <div>
        <p className={style.para}>maaz1</p>
        <p >maaz2</p>
    </div>
        
    )
};
