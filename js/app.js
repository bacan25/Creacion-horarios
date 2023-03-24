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
const horario_input = document.getElementById("horario");

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
    const horario = horario_input.value;
    const data = {
        nombre: nombre,
        lunes: lunes,
        martes: martes,
        miercoles: miercoles,
        jueves: jueves,
        viernes: viernes,
        sabado: sabado,
        domingo: domingo,
        horario: horario
    };
    await insert("integrantes",data);
    // console.log(data);
    const user_form = document.getElementById("formulario");
    user_form.reset();
}

user_form.addEventListener("submit", add_form);

