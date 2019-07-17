
var db = firebase.firestore();

var companyId = "fjkevmnkvcxjio4581848rs";

// checking if the user has logged in //
window.addEventListener('DOMContentLoaded', function () {

    // getting the company info just once //
    var companyRef = db.collection("companies").doc(companyId);
    companyRef.get().then(function(doc){
        if(doc.exists){
            // document is good and then we parse out the document //
            parseCompanyInfo(doc.data());
        }else{
            console.log("document doesnt exist");
        }
    }).catch(function(error){
        console.log("there was a catch error " + error);
    });

}, false);


// parsing the company info //
function parseCompanyInfo(data){
    var newCompany = new Company();
    newCompany.owner_fName = data.owner_fName;
    newCompany.owner_lName = data.owner_lName;
    newCompany.company_id = data.company_id;
    newCompany.company_name = data.company_name;
    newCompany.contact_title = data.contact_title;
    newCompany.email_1 = data.email_1;
    newCompany.email_2 = data.email_2;
    newCompany.notes = data.notes;
    newCompany.phone_1 = data.phone_1;
    newCompany.phone_2 = data.phone_2;
    newCompany.projects = data.projects;
    newCompany.website = data.website; 
}










// classes //
class Projects{
    constructor(){
        var project_id;
        var company;
        var project_name;
        var type;
        var platform;
        var est_cost;
        var our_cost;
        var tot_cost;
        var hours_worked;
        var paid;
        var notes;
    }
}

class Company{
    constructor(){
        var owner_fName;
        var owner_lName;
        var company_id;
        var company_name;
        var contact_title;
        var email_1;
        var email_2;
        var notes;
        var phone_1;
        var phone_2;
        var projects;
        var website;
        
    }
}

