alert("pravljeno iskljucivo za vjezbu HTML,CSS i nekih funkcija JS,nezavrseno");
var reklama="Prostor za reklame";
  var reklama1=reklama.split('');
  var epp=document.getElementById('reklame');
  var text;
  function start(){
      if(reklama1.length>0){
          epp.innerHTML +=reklama1.shift();
        text = setTimeout(start, 300);

      }
  }start();

var proizvod = [{
    ime: 'Smart-Watch',
    cijena: 50,
    popust:'-12%',
    url:'https://cdn.pixabay.com/photo/2015/07/02/10/29/smartwatch-828786_960_720.jpg'
},
{
    ime: 'Mobitel',
    cijena: 125,
    popust:'-20%',
    url:'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_960_720.jpg'
},
{
    ime: 'Noz',
    cijena: 58,
    popust:'-15%'

},
{
    ime: 'Puska',
    cijena: 458,
    popust:'-10%'

},
{
    ime: 'Telefon',
    cijena: 218,
    popust:'-12%'

},
{
    ime: 'Jakna',
    cijena: 160,
    popust:'-5%'
},
{
    ime: 'Pametni sat',
    cijena: 35,
    popust: '-22%'
}
]

var q;





function dodaj  (index)  {
    var pro = document.getElementById('naziv'+index);

    var cijena1 = document.getElementById('iznos'+index);

    var popust1=document.getElementById('popust'+index);

    q = proizvod[index];
    pro.innerHTML = q.ime;
    cijena1.innerHTML = q.cijena;
    popust1.innerHTML=q.popust;

}

for (let i =0;i < proizvod.length; i++) {
    dodaj(i);
    
}








   
    
    



