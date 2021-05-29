var Nombre = 'NA';
var Apellido = 'NA';
var Apellido2 = 'NA';
var NombreCompleto = 'NA';
var celular = 'NA';
var Mail = 'NA'
var Provincia = 'NA';
var Pais = 'NA';
var Dircompleto = 'NA';

function getInfo() {

    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    id = urlParams.get('id');
    nom = urlParams.get('nom');

    Nombre = 'Allen';
    Apellido = 'Morales';
    Apellido2 = 'Arroyo';
    NombreCompleto = Nombre + ' ' + Apellido + ' ' + Apellido2;

    Celular = '8703-0908';
    Celularhtml = 'C: ' + Celular;

    Mail = 'amorales@cdtbigdata.com';
    Mailhtml = 'E: ' + Mail;

    Provincia = 'Heredia';
    Pais = 'Costa Rica';
    DirCompleto = Provincia + ', ' + Pais;

    var Facebook = 'https://www.facebook.com/allenmmorales/';
    var LinkedIn = 'https://www.linkedin.com/in/allen-morales/';
    var Instagram = 'https://www.instagram.com/allen.morales.a/';

    document.getElementById("nombre").innerHTML = NombreCompleto;
    document.getElementById("celular").innerHTML = Celularhtml;
    document.getElementById("mail").innerHTML = Mailhtml;
    document.getElementById("direccion").innerHTML = DirCompleto;
    if (Facebook == null) {
        document.getElementById("faceblock").style.display = "none";
    } else {
        document.getElementById("facebook").href = Facebook;
    }
    if (LinkedIn == null) {
        document.getElementById("linkedlock").style.display = "none";
    } else {
        document.getElementById("linkedin").href = LinkedIn;
    }
    if (Instagram == null) {
        document.getElementById("instablock").style.display = "none";
    } else {
        document.getElementById("instagram").href = Instagram;
    }


}


function saveContact() {
    var theContact = vCard.create(vCard.Version.FOUR);
    var vName = Apellido + ';' + Nombre + ';;';
    theContact.add(vCard.Entry.NAME, vName);
    theContact.add(vCard.Entry.PHONE, Celular, vCard.Type.CELL);
    theContact.add(vCard.Entry.EMAIL, Mail, vCard.Type.WORK);
    theContact.add(vCard.Entry.ORGANIZATION, "CDT Big Data & Business Intelligence");
    theContact.add(vCard.Entry.URL, "https://cdtbigdata.com");

    var link = vCard.export(theContact, Nombre, true) // use parameter true to force download
    document.body.appendChild(link);
}

//function saveContact() {
//    var Nombre = document.getElementById("nombre").innerHTML;
//    var Celular = document.getElementById("celular").innerHTML;
//    if (Celular != null) {
//        Celular = Celular.substr(3, 10);
//    }
//    console.log(Celular);
//
//    var Mail = document.getElementById("mail").innerHTML;
//    if (Mail != null) {
//        Mail = Mail.substr(3, 100);
//    }
//    console.log(Mail);
//
//    //Arreglo para los correos
//    //var emails = [];
//    //emails[0] = new ContactField('email', Mail, false);
//
//    var theContact = navigator.contacts.create({ "displayName": Nombre });
//    theContact.Celular = Celular;
//    theContact.Mail = Mail;
//
//    //Guardar el contacto
//    theContact.save(onSaveSuccess, onSaveError);
//
//}
//
//function onSaveSuccess(contact) {
//    alert('Your Contact Has Been Saved');
//}
//
//function onSaveError(error) {
//    alert('Error: ' + error.code);
//}