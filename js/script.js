const section_seller = document.getElementById('section_seller');
const section_reseller = document.getElementById('section_reseller');
const section_admin = document.getElementById('section_admin');
const section_menu = document.getElementById('section_menu');
const url = 'http://localhost:8080/api/v1';

function hideAllSections() {
    const sections = [section_seller, section_reseller, section_admin];
    sections.forEach(section => {
        section.classList.remove("show");
        section.classList.add("hide");
    });
}

function change_sections(button) {
    section_menu.classList.remove("show");
    section_menu.classList.add("hide");
    let id_section = button.id;
    hideAllSections();

    switch(id_section) {
        case "act_seller":
            section_seller.classList.remove("hide");
            section_seller.classList.add("show");
            break;
        case "act_reseller":
            section_reseller.classList.remove("hide");
            section_reseller.classList.add("show");
            break;
        case "act_admin":
            section_admin.classList.remove("hide");
            section_admin.classList.add("show");
            break;
        default:
            break;
    }
}

function back_menu(){
    section_menu.classList.remove("hide");
    section_menu.classList.add("show");
    hideAllSections();
}


async function loginSeller(){
    let doc = document.getElementById('labelDocSeller').value;
    let contain_log = document.getElementById("login_seller");
    let contain  = document.getElementById("contain_seller");
    let validation = await searchSeller(doc);
    if(validation == true){
        alert("Ingreso valido")
        contain_log.classList.add("hide")
        contain.classList.remove("hide")
    }else{
        alert("Valida el documento")
    }
}

async function searchSeller(document){
    let validation = false;
    try {
        const response = await fetch(url + '/sellers/search/' + document)
        const data = await response.json();
        validation = true;
    } catch (error) {
        console.error("Error consultando el documento")
    }
    return validation;
}