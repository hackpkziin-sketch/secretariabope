function toggleMenu(){
let s=document.getElementById("sidebar");
let o=document.getElementById("overlay");
s.classList.toggle("active");
o.classList.toggle("active");
}

function enviar(){

let webhook="https://discord.com/api/webhooks/1493864448425726012/MwJaxORT8Xt_nHOtPz-Nwgtpb8TEAcQcgn7Ee9RzNywvqRkka7l1JHV3lvoO7Qxq-2j2";

let nome=document.getElementById("nome").value;
let acusado=document.getElementById("acusado").value;
let rg=document.getElementById("rg").value;
let motivo=document.getElementById("motivo").value;
let video=document.getElementById("video").value;

fetch(webhook,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
embeds:[{
title:"🚨 Nova Denúncia",
color:16711680,
fields:[
{name:"Acusador",value:nome||"N/A"},
{name:"Acusado",value:acusado||"N/A"},
{name:"RG",value:rg||"N/A"},
{name:"Motivo",value:motivo||"N/A"},
{name:"Prova",value:video||"N/A"}
]
}]
})
});
}