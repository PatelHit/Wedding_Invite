async function loadGuest(){

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const res = await fetch("guests.json");
const guests = await res.json();

const guest = guests.find(g => g.id === id);

const el = document.getElementById("guestName");

if(guest){
el.innerText = guest.name;
}else{
el.innerText = "Guest";
}

}

loadGuest();