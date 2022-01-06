var Nombre = 'NA';
var Apellido = 'NA';
var Apellido2 = 'NA';
var NombreCompleto = 'NA';
var celular = 'NA';
var Mail = 'NA'
var Provincia = 'NA';
var Pais = 'NA';
var Dircompleto = 'NA';
var Photo = 'MA';

function post() {
    //var parameters = ("Nombre=Allen&Application=1&Usuario=1&Top=-99&token=" + token);
    var url = "https://bi.cdtbigdata.com:3032/cpfr/api/CdtRH/Empleado";
    var method = "POST";
    var apptoken = "cd97eda8855904c66bd0dc6a503d3836cd97eda8855904c66bd0dc6a503d3836cd97eda8855904c66bd0dc6a503d3836cd97eda8855904c66bd0dc6a503d3836";
    //var token = "49268f8d4cf9e80d467487d868060cf9";
    var parameters = { "Empleado": { "ID": id } };

    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", 'application/json');
    xhr.setRequestHeader("Authorization", " " + apptoken);
    xhr.send(JSON.stringify(parameters));

    xhr.onload = function() {
        var data = xhr.responseText;
        var jsonResponse = JSON.parse(data);
        var jsonObjeto = jsonResponse["objeto"];
        //console.log(jsonObjeto);
        //console.log(jsonObjeto[0].PrimerApell);


        Nombre = jsonObjeto[0].Nombre;
        Apellido = jsonObjeto[0].PrimerApell;
        Apellido2 = jsonObjeto[0].SegundoApell;
        NombreCompleto = Nombre + ' ' + Apellido + ' ' + Apellido2;
        Photo = '../images/contactphotos/' + Nombre + '.jpg';

        Celular = jsonObjeto[0].Tel;
        Celularhtml = 'C: ' + Celular;

        Mail = jsonObjeto[0].Correo;
        Mailhtml = 'E: ' + Mail;

        Provincia = jsonObjeto[0].Provincia;
        Pais = jsonObjeto[0].Pais;
        DirCompleto = Provincia + ', ' + Pais;

        var Facebook = jsonObjeto[0].Facebook;
        var LinkedIn = jsonObjeto[0].Linkedin;
        var Instagram = jsonObjeto[0].Instagram;

        document.getElementById("photo").src = Photo;
        document.getElementById("nombre").innerHTML = NombreCompleto;

        document.getElementById("celular").innerHTML = Celularhtml;
        document.getElementById("mail").innerHTML = Mailhtml;
        document.getElementById("direccion").innerHTML = DirCompleto;
        if (Facebook == null || Facebook == "") {
            document.getElementById("faceblock").style.display = "none";
        } else {
            document.getElementById("facebook").href = Facebook;
        }
        if (LinkedIn == null || LinkedIn == "") {
            document.getElementById("linkedlock").style.display = "none";
        } else {
            document.getElementById("linkedin").href = LinkedIn;
        }
        if (Instagram == null || Instagram == "") {
            document.getElementById("instablock").style.display = "none";
        } else {
            document.getElementById("instagram").href = Instagram;
        }

        document.getElementById("logo").src = "../images/logo.png";
    }
}




function getInfo() {

    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    id = urlParams.get('id');
    nom = urlParams.get('nom');

    post();
}

function saveContact() {
    var theContact = vCard.create(vCard.Version.TWO);
    var vName = Apellido + ';' + Nombre + ';;';
    theContact.add(vCard.Entry.NAME, vName);
    theContact.add(vCard.Entry.PHONE, Celular, vCard.Type.CELL);
    theContact.add(vCard.Entry.EMAIL, Mail, vCard.Type.WORK);
    theContact.add(vCard.Entry.ORGANIZATION, "CDT Big Data & Business Intelligence");
    theContact.add(vCard.Entry.URL, "https://cdtbigdata.com");

    var link = vCard.export(theContact, Nombre, true) // use parameter true to force download
    document.body.appendChild(link);
};