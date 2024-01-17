// Event delegation

const table = document.querySelector("#curse-table");

table.onclick = function (event) {
    console.log(event.target);
    event.target.classList.add("highlight");
    let Target = event.target;
    while (Target != this) {
        if(Target.tagName == "TD") {
            Target.classList.add("highlight");
            return true;
        }
        return true;
    }
}