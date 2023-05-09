function printContact(contact){
    console.log(`
${contact.name}
${contact.address}
${contact.city}, ${contact.state} ${contact.zip}
    `);
}

let myInfo = {
    name: "Pursalane Faye",
    address: "121 Main Street",
    city: "Benbrook",
    state: "Texas",
    zip: "76126"
};

printContact(myInfo)