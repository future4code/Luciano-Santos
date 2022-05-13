import { User } from "./Classes/User";
import { Customer } from "./Classes/Customer";
import { Client } from "./Interfaces/Client";
import { Place } from "./Classes/Place";
import { Residence } from "./Classes/Residence";
import { Industry } from "./Classes/Industry";
import { Commerce } from "./Classes/Commerce";
import { ResidentialClient } from "./Classes/ResidentialClient";
import { CommercialClient } from "./Classes/CommercialClient";
import { IndustrialClient } from "./Classes/IndustrialClient";

/* =============================== Herança =============================== */

// Exercício 1

// const newUser = new User(
//     "001",
//     "luciano@email.com",
//     "Luciano",
//     "WaWAWAWsa" 
// );

// a) Não, pois não existe um método getter, para pegar está informação.

// b) A mensagem é impressa apenas uma vez.

// Exercício 2

// const newCustomer = new Customer(
//     "001",
//     "luciano@email.com",
//     "Luciano",
//     "WaWAWAWsa",
//     "12236541166" 
// );

// a) A mensagem é impressa apenas uma vez.

// b) A mensagem é impressa apenas uma vez, por que a classe Customer
// é uma subclasse da classe User, consequentemente hedar tudo da classe User.

// Exercício 3

// a) Não, por que o atributo declarado na classe User é private e não há
// um método getter.
// console.log(newCustomer.getId())
// console.log(newCustomer.getName())
// console.log(newCustomer.getEmail())
// console.log(newCustomer.purchaseTotal)
// console.log(newCustomer.getCreditCard())

// Exercício 4

// console.log(newCustomer.introduceYourself())

// Exercício 5

// console.log(newCustomer.introduceYourself())

/* =============================== Polimorfismo =============================== */

// Exercício 1

// a) Todas as propriedades. É possível imprimir todas as propriedades, pois segue corretamente o
// estipulado pela interface Client.

// const client: Client = {
//     name: "Luciano",
//     registrationNumber: 123.1020,
//     consumedEnergy: 350.99,

//     calculateBill: (): number =>{
//         return 2
//     }
// };

// console.log(client.calculateBill())
// console.log(client.consumedEnergy)
// console.log(client.name)
// console.log(client.registrationNumber)

// Exercício 2

// a) Não é possível criar uma instância de uma classe abstrata.

// b) Criar uma nova classe, estendendo a classe Place.

// class myPlace extends Place{

// }
// const newPlace = new myPlace("15450000")
// console.log(newPlace.getCep())

// Exercício 3

// const newResidence = new Residence(5, "15450000");
// const newCommerce = new Commerce(20, "15450070")
// const newIndustry = new Industry(50, "15450963")

// console.log(newResidence.getCep())
// console.log(newCommerce.getCep())
// console.log(newIndustry.getCep())

// console.log(newResidence.getResidentsQuantity())
// console.log(newCommerce.getfloorsQuantity())
// console.log(newIndustry.getmachinesQuantity())

// Exercício 4

// a) Suas próprias propriedades implementadss da interface Client,
// seu método getter e os métodos da classe Residence. 
// const newResidential = new ResidentialClient(
//     "Luciano",
//     123.120,
//     30,
//     "122.541.552-52",
//     5,
//     "15450000"
// );
// console.log(newResidential.calculateBill())

// Exercício 5

// a) As propriedades da interface Client e propridade cep da classe abstrata Place.

// b) Possui propridade, métodos diferentes.

// const newCommercial = new CommercialClient(
//     "Labenu",
//     132411,
//     120,
//     "18361789000162",
//     5,
//     "15450963"
// );

// console.log(newCommercial.calculateBill())

// Exercício 6

const newIndustrial = new IndustrialClient(
    "Facchini",
    2,
    10,
    10,
    5,
    "15450000"
);

console.log(newIndustrial.calculateBill())