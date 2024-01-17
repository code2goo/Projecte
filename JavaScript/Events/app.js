//**************/ Target Elements
const h1 = document.querySelector("h1");
const table = document.getElementById("outside");

//*************/ Adding listners

// h1.addEventListener("click", (e)=>{console.log(e)});
h1.addEventListener("click", headingClickEventHandler);
table.addEventListener("click", tableClickEventHandler)

//**************/ Event handlers
function headingClickEventHandler(e) {
    // console.log(e.type)
    console.log(e.target)
}
//***************/
function tableClickEventHandler(e) {
    console.log(e.target)
    e.target.classList.add("yellowBK");
    setTimeout(()=> {
        e.target.classList.remove("yellowBK");
    },3000)
    console.log(table)
}


// console.log(h1)