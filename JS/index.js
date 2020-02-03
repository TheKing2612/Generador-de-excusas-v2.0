function excusa()
{
var quien = [ "perro", "gato", "urón", "alien", "abuela", "duende", "dragon", "robot", "serpiente", "mapache"]
var como = [ "se comió", "meó", "destruyó", "desintegró", "desapareció", "escondió", "lamió"]
var cuando = ["después de cenar", "anoche", "al amanecer", "al ocaso", "hace 5 minutos"]

var who = quien[Math.round(Math.random()*(quien.length-1))];
var did = como[Math.round(Math.random()*(como.length-1))];
var when = cuando[Math.round(Math.random()*(cuando.length-1))]

document.getElementById('excusa').innerHTML = 
'<h1>Mi ' + who + ' ' + did + ' mi projecto'+ ' ' + when + '.</h1>'
}