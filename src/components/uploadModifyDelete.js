

// temporary variable list... this is used for testing of placing stuff //

// This is the variable list for creating a new company //
// in the data base //
// 16 digit company id -- we can change this to whatever we want //
var company_id = "fjkevmnkvcxjio4581848rs";
var company_name = "Gregs Pickle Supply";
var owner_fName = "Greg";
var owner_lName = "Johnson";
var contact_title = "CEO";
var phone_1 = 2093901234;
var phone_2 = 2093894321;
var email_1 = "gregsPickleSupply@yahoo.com";
var email_2 = "gregsNumber2@yahoo.com";
var website = "https://www.gregssupergaywebsite.com";
var notes = "This is gregs main site.  We need to add more pickles to it... Like... A lot more pickles.";
var projects = ["jfkdljsaklj904932jlkfld", "iroewjfkldjsa85493fjdkf"];



// This is the variable list for creating a new Project
var project_id = "jfkdljsaklj904932jlkfld"
var company = "fjkevmnkvcxjio4581848rs";
var project_name = "Gregs Pickle Supplies main site";
var type = "website";
var platform = ["web"];
var hours_worked = 10;
var est_cost = 1500.00;
var our_cost = 1500.00;
var tot_cost = 3000.00;
var paid = true;
var notes = "Notes Here";


var db = firebase.firestore();





// checking if the user has logged in //
window.addEventListener('DOMContentLoaded', function () {
    //createCompany();
    //createProject();
}, false);



// creation of a company //
function createCompany(){
    // from here we would grab elements in the form //
    // so lik var company_name = document.getElementById("company_name");
    db.collection("companies").doc(company_id).set({
        company_id: this.company_id,
        company_name: this.company_name,
        owner_fName: this.owner_fName,
        owner_lName: this.owner_lName,
        contact_title: this.contact_title,
        phone_1: this.phone_1,
        phone_2: this.phone_2,
        email_1: this.email_1,
        email_2: this.email_2,
        website: this.website,
        notes: this.notes,
        projects: this.projects

    }).then(function(){
        // provide a call back or something upon success //
        console.log("success creating a company!");
    }).catch(function(error){
        console.log("error in creating a company " + error);
    });
}


// this function takes in the company ID and scans the form values 
// (for now it just takes in hard coded values) //
// then updates the database //
function updateCompanyField(id){
    var updateRef = db.collection("companies").doc(id);
    return updateRef.update({

        // from here we can grab what ever values we want //
        // I would recommend grabbing all the form values //
        // regardless of if they changed or not. This will //
        // be quick and easy and prevent us from doing a //
        // single update for each field. //

        // for now, im just doing a single update //
        website: "https://www.thisisnolongergregssite.com"
    }).then(function(){
        // provide a call back or something upon success //
        console.log("success in update");
    }).catch(function(error){
        console.log("error in updating " + error);
    }); 
}


// deletes a company based on an id //
function deleteCompany(id){
    db.collection("companies").doc(id).delete().then(function(){
        console.log("success in deleting company");
    }).catch(function(error){
        console.log("error deleting company " + error);
    });
}










// creation of a project //
function createProject(){
    db.collection("projects").doc(project_id).set({
        project_id: this.project_id,
        company: this.company,
        project_name: this.project_name,
        type: this.type,
        platform: this.platform,
        hours_worked: this.hours_worked,
        est_cost: this.est_cost,
        our_cost: this.our_cost,
        tot_cost: this.tot_cost,
        paid: this.paid,
        notes: this.notes
    }).then(function(){
        // provide a call back or something upon success //
        console.log("success in creating a project!");
    }).catch(function(error){
        console.log("error in creating a project " + error);
    });
}

function updateProject(id){
    var updateRef = db.collection("projects").doc(id);
    return updateRef.update({

        // from here we can grab what ever values we want //
        // I would recommend grabbing all the form values //
        // regardless of if they changed or not. This will //
        // be quick and easy and prevent us from doing a //
        // single update for each field. //

        // for now, im just doing a single update //
        est_cost: 1300
    }).then(function(){
        // provide a call back or something upon success //
        console.log("success in update");
    }).catch(function(error){
        console.log("error in updating " + error);
    }); 
}

function deleteProject(id){
    db.collection("projects").doc(id).delete().then(function(){
        console.log("success in deleting project");
    }).catch(function(error){
        console.log("error deleting project " + error);
    });
}