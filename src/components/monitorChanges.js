
var db = firebase.firestore();

var companyId = "fjkevmnkvcxjio4581848rs";

var arrayOfJobs = [];

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


    var projectsRef = db.collection("projects");
    projectsRef.onSnapshot(function(querySnapshot){

		var data = querySnapshot.docs.map(function(documentSnapshot){

			return documentSnapshot.data();
        });	

        parseProject(data);
        
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

    // we can now use the company info for whatever we need //
}


function parseProject(data){

    arrayOfJobs = [];
    for(var projects in data){

        var project = data[projects];

        var newProject = new Projects();
        newProject.company = project.company;
        newProject.est_cost = project.est_cost;
        newProject.hours_worked = project.hours_worked;
        newProject.notes = project.notes;
        newProject.our_cost = project.our_cost;
        newProject.platform = project.platform;
        newProject.project_id = project.project_id;
        newProject.project_name = project.project_name;
        newProject.tot_cost = project.tot_cost;
        newProject.type = project.type;

        arrayOfJobs.push(newProject);
    }


    // we can now use the array of jobs where ever we want //

    for(var i in arrayOfJobs){
        console.log(arrayOfJobs[i].project_id);
    }
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

