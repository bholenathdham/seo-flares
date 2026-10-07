const properties = [
['Nshama Grove','Dubai','Nshama','nshama-grove.html','https://auric-acres.com/wp-content/uploads/11030f0e-5072-49ff-9eb9-90567e578ea0-570x350.jpg','Residential development in Townsquare, Al Qudra Street.','Apartments'],
['Deyaar Rosalia','Dubai','Deyaar Properties','deyaar-rosalia.html','https://auric-acres.com/wp-content/uploads/Rosalia-Elevation-570x350.jpg','Residential development in Al Furjan, Dubai.','Apartments'],
['Danube Bayz101','Dubai','Danube Properties','danube-bayz101.html','https://auric-acres.com/wp-content/uploads/Bayz101-Elevation-570x350.jpg','Residential development in Business Bay, Dubai.','Apartments'],
['Nshama Ayala','Dubai','Nshama','nshama-ayala.html','https://auric-acres.com/wp-content/uploads/Central-Park-570x350.jpg','Residential development in Townsquare, Al Qudra Street.','Apartments'],
['Emaar Parkgate','Dubai','Emaar','emaar-parkgate.html','https://auric-acres.com/wp-content/uploads/WhatsApp-Image-2023-11-21-at-18.14.33-570x350.jpeg','Emaar project presented in Auric Acres project listings.','Apartments'],
['Danube Sportz','Dubai','Danube Properties','danube-sportz.html','https://auric-acres.com/wp-content/uploads/Sportz-570x350.jpg','Twin-tower residential development in Sports City, Dubai.','Apartments'],
['Tiger Volga','Dubai','Tiger Properties','tiger-volga.html','https://auric-acres.com/wp-content/uploads/Volga-570x350.jpeg','Residential project in Jumeirah Village Triangle, Dubai.','Apartments'],
['Aldar Haven','Dubai','Aldar Properties','aldar-haven.html','https://auric-acres.com/wp-content/uploads/Aldar-Haven-1-570x350.jpg','Residential villa development in Dubai Land.','Villas'],
['Prestige City Hyderabad','Hyderabad','Prestige Group','prestige-city-hyderabad.html','https://auric-acres.com/wp-content/uploads/Prestige-City-Hyderabad1-570x350.jpg','Large township project in Umda Nagar, Rajender Nagar.','Residences'],
['Emaar Alana','Dubai','Emaar','emaar-alana.html','https://auric-acres.com/wp-content/uploads/Alana-Twin-Vila-view-570x350.jpeg','Waterfront twin-villa project in The Valley.','Villas'],
['Emaar Nima','Dubai','Emaar','emaar-nima.html','https://auric-acres.com/wp-content/uploads/Emaar-Nima10-570x350.jpg','Townhouse project in The Valley at Al Ain Road.','Townhouses'],
['Danube Skyz','Dubai','Danube Group','danube-skyz.html','https://auric-acres.com/wp-content/uploads/Skyz-Elevation-473x350.jpg','Residential project in Arjan, near Miracle Garden and Motor City.','Apartments'],
['Nshama Reem Townhouse','Dubai','Nshama','nshama-reem-townhouse.html','https://auric-acres.com/wp-content/uploads/TownHouses-View-570x350.jpg','Townhouse project at Town Square, Al Qudra Road.','Townhouses'],
['Brigade Citadel Hyderabad','Hyderabad','Brigade Group','brigade-citadel-hyderabad.html','https://auric-acres.com/wp-content/uploads/Facade-570x350.jpg','Premium residential project in Hyderabad.','Residences'],
['15 Northside','Dubai','Select Group','15-northside.html','https://auric-acres.com/wp-content/uploads/15-North-570x350.jpg','Development near Downtown Dubai and Business Bay, alongside Dubai Canal.','Apartments'],
['La Sirene Port De La Mer','Dubai','Meraas','la-sirene-port-de-la-mer.html','https://auric-acres.com/wp-content/uploads/La-Sirene-Ex-12-06_06_21-V1-570x350.jpg','Freehold community at Jumeirah One.','Apartments'],
['Emaar Bliss','Dubai','Emaar','emaar-bliss.html','https://auric-acres.com/wp-content/uploads/Emaar-Bliss-570x350.jpg','Urban Village community at Arabian Ranches III.','Villas'],
['Murooj Al Furjan','Dubai','Nakheel','murooj-al-furjan.html','https://auric-acres.com/wp-content/uploads/Murooj-Villa-570x350.jpg','Gated villa community in Al Furjan, Dubai.','Villas'],
['Emaar Palace Beach Residence','Dubai','Emaar','emaar-palace-beach-residence.html','https://auric-acres.com/wp-content/uploads/Front-elevation-570x350.jpg','Project at Emaar Beachfront between Dubai Marina and Palm Jumeirah.','Residences'],
['Prestige Waterford Bangalore','Bangalore','Prestige Developers','prestige-waterford-bangalore.html','https://auric-acres.com/wp-content/uploads/Prestige-Waterford4-570x350.jpg','Project on ECC Road in Whitefield, Bangalore.','Apartments'],
['Prestige Windsor Park','Chennai','Prestige Developers','prestige-windsor-park.html','https://auric-acres.com/wp-content/uploads/Front-Gate-570x350.jpg','Project on Poonamallee High Road at Vanagaram, Chennai.','Residences']
];

const grid=document.querySelector('#propertyGrid');
if(grid){properties.forEach(p=>{
  const card=document.createElement('a');
  card.className='property-card';
  card.href='properties/'+p[3];
  card.dataset.search=(p[0]+' '+p[1]+' '+p[2]+' '+p[5]).toLowerCase();
  card.innerHTML=`<div class="property-image-wrap"><img src="${p[4]}" alt="${p[0]}" loading="lazy"><span class="property-location">⌂ ${p[1]}</span><span class="property-status">For Sale</span></div><div class="property-card-content"><h3>${p[0]}</h3><div class="card-details"><span>▧ ${p[6]}</span><span>⌖ ${p[1]}</span></div><p>${p[5]}</p><div class="card-bottom"><span class="card-enquire">View Project</span><span class="round-arrow">→</span></div></div>`;
  grid.appendChild(card);
});}
