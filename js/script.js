// FUNCTIONS

// Funzione che crea una card per ogni membro
const addNewMember = (member) => {
  const { name, role, email, img } = member;
  const colCard = `
   <div class="col card">
                <div class="member">
                    <div class="image">
                        <img class="img-fluid" src="${img}" alt="${name}">
                    </div>
                    <div class="member-info">
                        <h2>${name}</h2>
                        <p>${role}</p>
                        <a href="${email}">${email}</a>
                    </div>
                </div>
            </div>`;
  return colCard;
}

// Funzione che stampa l'array' dei membri 
const rendArray = () => {
  let memberList = "";
  for (let i = 0; i < teamMembers.length; i++) {
    memberList += addNewMember(teamMembers[i])
  }
  membersSection.innerHTML = memberList;
}
// VARIABLES

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//DOM ELEMENTS
const membersSection = document.getElementById("members");

// Stampo l'array di oggetti al log della pagina
rendArray();


// BONUS - FORM PER AGGIUNTA MEMBRI
const addMemberForm = document.getElementById("addUser");
const userName = document.getElementById("userName");
const userRole = document.getElementById("userRole");
const userEmail = document.getElementById("userEmail");
const userImg = document.getElementById("userImg");
const section = document.getElementById("form")


//Submit del form
addMemberForm.addEventListener("submit", (event) =>{
 event.preventDefault();

 const name = userName.value;
 const role = userRole.value;
 const email = userEmail.value;
 const img= userImg.value;

 const newMember = {
  name,
  role,
  email,
  img
 };

 teamMembers.push(newMember);
 rendArray();
})
