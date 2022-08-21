import { GenerateIdMock } from "../common/mocks/mocks";
import { ProductBusiness } from "./ProductBusiness";

const generateIdMock = new GenerateIdMock();

const productBusiness = new ProductBusiness(generateIdMock);

describe("Testing Business layer, endpoint to create product", () => {
    it("Should return error 'Entrada inválida ou vazia, verifique a documentação'", async () => {

        expect.assertions(1)
        const input = {
            name: "teste",
            price: 1500,
            tags: ""
        };

        try {
            await productBusiness.createProduct(input);
        } catch (error: any) {
            expect(error.message).toBe("Entrada inválida ou vazia, verifique a documentação");
        };
    });

    it("Should return error 'O parâmetro 'price' não deve ser um número negativo'", async () => {

        expect.assertions(1)
        const input = {
            name: "teste",
            price: -1,
            tags: "teste"
        };

        try {
            await productBusiness.createProduct(input);
        } catch (error: any) {
            expect(error.message).toBe("O parâmetro 'price' não deve ser um número negativo");
        };
    });

    it("Should return error 'O parâmetro 'name', deve conter no máximo 60 caracteres'", async () => {

        expect.assertions(1)
        const input = {
            name: "testetestetestetestetestetestetestetestetestetestetestetesteteste",
            price: 200,
            tags: "teste"
        };

        try {
            await productBusiness.createProduct(input);
        } catch (error: any) {
            expect(error.message).toBe("O parâmetro 'name', deve conter no máximo 60 caracteres");
        };
    });
});

describe("Testing Business layer, endpoint to get product", () => {
    it("Should return error 'Produto não encontrado'", async () => {

        expect.assertions(1);

        try {
            await productBusiness.getProduct("Asda12dlas90d")
        } catch (error: any) {
            expect(error.message).toBe("Produto não encontrado")
        }
    });

    it("test if you found a result", () => {
        const result = [
            {
                "id": "cd972647-d184-4a0a-b794-8ced7202c104",
                "name": "Placa de Vídeo Galax NVIDIA GeForce RTX 2060 Super V2",
                "price": 2599,
                "tags": [
                    "GeForce",
                    "NVIDIA",
                    "8GB GDDR6",
                    "Ray Tracing"
                ]
            }
        ]

        expect(result).toHaveLength(1);
    });

    it("tests if the 'tags' property exists", () => {
        const result = {
            "id": "cd972647-d184-4a0a-b794-8ced7202c104",
            "name": "Placa de Vídeo Galax NVIDIA GeForce RTX 2060 Super V2",
            "price": 2599,
            "tags": [
                "GeForce",
                "NVIDIA",
                "8GB GDDR6",
                "Ray Tracing"
            ]
        };

        expect(result).toHaveProperty("tags");
    });
});

describe("Testing Business layer, endpoint to update product", () => {
    it("Should return error 'Entrada inválida ou vazia, verifique a documentação'", async () => {

        expect.assertions(1)
        const input = {
            id: "",
            name: "teste",
            price: 1500,
            tags: ""
        };

        try {
            await productBusiness.updateProduct(input);
        } catch (error: any) {
            expect(error.message).toBe("Entrada inválida ou vazia, verifique a documentação");
        };
    });

    it("Should return error 'O parâmetro 'price' não deve ser um número negativo'", async () => {

        expect.assertions(1)
        const input = {
            id: "adasdasd",
            name: "teste",
            price: -1,
            tags: "teste"
        };

        try {
            await productBusiness.updateProduct(input);
        } catch (error: any) {
            expect(error.message).toBe("O parâmetro 'price' não deve ser um número negativo");
        };
    });

    it("Should return error 'O parâmetro 'name', deve conter no máximo 60 caracteres'", async () => {

        expect.assertions(1)
        const input = {
            id: "asdasd",
            name: "testetestetestetestetestetestetestetestetestetestetestetesteteste",
            price: 200,
            tags: "teste"
        };

        try {
            await productBusiness.updateProduct(input);
        } catch (error: any) {
            expect(error.message).toBe("O parâmetro 'name', deve conter no máximo 60 caracteres");
        };
    });

    it("Should return error 'Produto não encontrado'", async () => {
        expect.assertions(1);

        const input = {
            id: "Ada21casd0913",
            name: "teste",
            price: 1500,
            tags: "teste"
        };

        try {
            await productBusiness.updateProduct(input)
        } catch (error: any) {  
            expect(error.message).toBe("Produto não encontrado");
        }
    });
});

describe("Testing Business layer, endpoint to delete product", () => {
    it("Should return error 'Produto não encontrado'", async () => {
        expect.assertions(1);

        const id = "ASDasd1231asd";

        try {
            await productBusiness.deleteProduct(id)
        } catch (error: any) {  
            expect(error.message).toBe("Produto não encontrado");
        }
    });
});