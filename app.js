function addElement(){
    const nuevo = document.createElement("h2");
    const txt = document.createTextNode("Takjsda");

    nuevo.appendChild(txt);

    const elemnt = document.getElementById("box-container");
    elemnt.appendChild(nuevo);

}