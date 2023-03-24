import { insert, read } from "./firestore.js";
const user_form = document.getElementById("formulario");
const name_input = document.getElementById("nombre");
const lunes_input = document.getElementById("lunes");
const martes_input = document.getElementById("martes");
const miercoles_input = document.getElementById("miercoles");
const jueves_input = document.getElementById("jueves");
const viernes_input = document.getElementById("viernes");
const sabado_input = document.getElementById("sabado");
const domingo_input = document.getElementById("domingo");
const horario_input1 = document.getElementById("horarioInicio");
const horario_input2 = document.getElementById("horarioFinal");

async function add_form(e){
    e.preventDefault();
    const nombre = name_input.value;
    const lunes = lunes_input.checked;
    const martes = martes_input.checked;
    const miercoles = miercoles_input.checked;
    const jueves = jueves_input.checked;
    const viernes = viernes_input.checked;
    const sabado = sabado_input.checked;
    const domingo = domingo_input.checked;
    const horario1 = horario_input1.value;
    const horario2 = horario_input2.value;

    const data = {
        nombre: nombre,
        lunes: lunes,
        martes: martes,
        miercoles: miercoles,
        jueves: jueves,
        viernes: viernes,
        sabado: sabado,
        domingo: domingo,
        horario1: horario1,
        horario2: horario2,

    };
    await insert("integrantes",data);
    // console.log(data);
    const user_form = document.getElementById("formulario");
    user_form.reset();
}
async function read_form(){
    const response = await read("integrantes");
    response.forEach(element => {
        console.log(element.data());
    })
}
const btn = document.getElementById("log");
btn.addEventListener("click", read_form);
user_form.addEventListener("submit", add_form);

