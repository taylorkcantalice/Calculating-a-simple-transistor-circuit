function calculate(){
    var Vbb=document.getElementById("Vbb").value;
    var Rb=document.getElementById("Rb").value;
    var Vcc=document.getElementById("Vcc").value;
    var Rc=document.getElementById("Rc").value;
    var Ganho=document.getElementById("Ganho").value;

    var Ib = (Vbb/Rb)*(10 ** 6);
    var Ic = (Ib * Ganho)*(10 ** -3);
    var Ie = (Ib*(10 ** -3)) + Ic;
    var Vce = Vcc - (Rc*(Ic*(10 ** -3)));
    var Pd = Vce * Ic;

    document.getElementById("text_area_Ib").innerText=Ib
    document.getElementById("text_area_Ic").innerText=Ic
    document.getElementById("text_area_Ie").innerText=Ie
    document.getElementById("text_area_Vce").innerText=Vce
    document.getElementById("text_area_Pd").innerText=Pd
}