import { Request, Response } from "express";
import { PaymentBusiness } from "../business/PaymentBusiness";
import { PaymentDataInputDTO } from "../model/paymentData";

const paymentBusiness = new PaymentBusiness();

export class PaymentController {
    createPayment = async (req: Request, res: Response) => {
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
            } = req.body;

            const input: PaymentDataInputDTO = {
                name,
                email,
                CPF,
                amount,
                type,
                cardHolderName,
                cardNumber,
                cardExpirationDate,
                cardCVV
            };

            const result = await paymentBusiness.createPayment(input);

            res.status(201).send(result);
        } catch (err: any) {
            res.status(err.status || 400).send(err.message || err.sqlMessage);
        };
    };
};