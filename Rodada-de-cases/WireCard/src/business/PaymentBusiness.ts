import { PaymentDataBase } from "../data/PaymentDataBase";
import { CustomError, InvalidInput } from "../Errors/CustomError";
import { Buyer, Card, Payment, PaymentData, PaymentDataInputDTO } from "../model/paymentData";
import { generateBoletoNumber } from "../services/generateBoletoNumber";
import { generateID } from "../services/generateID";

const paymentDB = new PaymentDataBase();

export class PaymentBusiness {
    createPayment = async (input: PaymentDataInputDTO) => {
        try {
            const {
                name,
                email,
                CPF,
                amount,
                type,
                cardHolderName,
                cardNumber,
                cardExpirationDate,
                cardCVV
            } = input;

            if (!name || !email || !CPF || !amount || !type) {
                throw new InvalidInput();
            };

            if (type === "Credit Card") {
                if (!cardHolderName || !cardNumber || !cardExpirationDate || !cardCVV) {
                    throw new InvalidInput();
                };
            };

            const buyer: Buyer =  {
                id: generateID(),
                name,
                email,
                CPF
            };

            const payment: Payment = {
                id: generateID(),
                buyerID: buyer.id,
                amount,
                type
            };

            const card: Card = {
                id: generateID(),
                buyerID: buyer.id,
                cardHolderName,
                cardNumber,
                cardExpirationDate,
                cardCVV
            };

            const paymentData: PaymentData = {
                buyer,
                payment,
                card
            };

            const numberBoleto = generateBoletoNumber(amount);
            const result = type === 'Boleto' ? `Número do boleto: ${numberBoleto}` : 'Pagamento realizado ✅';
            
            await paymentDB.insertPayment(paymentData);
            
            return result;

        } catch (err: any) {
            throw new CustomError(err.status, err.message);
        };
    };
}