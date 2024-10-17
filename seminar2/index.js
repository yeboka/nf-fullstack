const cName = "S. Kalshabekov";
const cAddress = "Almaty";

const pickle = {
    id: 1,
    price: 500,
    name: "pickle",
    type: "vegetable",
    eatable: true,
    amount: 4,
};

const apple = {
    id: 2,
    price: 1250,
    name: "apple",
    type: "fruit",
    eatable: true,
    amount: 1,
    left: 30,
};

let output = `New Order from ${cName}, purchased ${pickle.amount} vegs and ${apple.amount} fruit. Total price: ${pickle.price*pickle.amount + apple.price*apple.amount}, Destination address: ${cAddress}`

console.log(output);
