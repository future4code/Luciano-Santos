import { PaymentData } from "../model/paymentData";
import { BaseDataBase } from "./BaseDataBase";

export class PaymentDataBase extends BaseDataBase {
    insertPayment = async (paymentData: PaymentData) => {
        try {
            await PaymentDataBase
                .connection('Buyer')
                .select()
                .where({
                    'CPF': paymentData.buyer.CPF
                })
                .then(async rows => {
                    if (rows.length === 0) {
                        await PaymentDataBase.connection("Buyer")
                            .insert({
                                id: paymentData.buyer.id,
                                name: paymentData.buyer.name,
                                email: paymentData.buyer.email,
                                CPF: paymentData.buyer.CPF
                            });
                    }
                });

            const buyerId = await PaymentDataBase
                .connection('Buyer')
                .select('id')
                .where({ 'CPF': paymentData.buyer.CPF });

            if (paymentData.payment.type === 'Credit Card') {
                await PaymentDataBase
                    .connection('Card')
                    .select()
                    .where({
                        'card_number': paymentData.card?.cardNumber
                    })
                    .then(async rows => {
                        if (rows.length === 0) {
                            await PaymentDataBase.connection("Card")
                                .insert({
                                    id: paymentData.card?.id,
                                    card_holder_name: paymentData.card?.cardHolderName,
                                    card_number: paymentData.card?.cardNumber,
                                    card_expiration_date: paymentData.card?.cardExpirationDate,
                                    card_CVV: paymentData.card?.cardCVV,
                                    buyer_id: buyerId[0].id ? buyerId[0].id : paymentData.card?.buyerID
                                });
                        }
                    });
            };

            await PaymentDataBase
                .connection('Payment')
                .insert({
                    id: paymentData.payment.id,
                    amount: paymentData.payment.amount,
                    type: paymentData.payment.type,
                    buyer_id: buyerId[0].id ? buyerId[0].id : paymentData.payment.buyerID
                });

        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage);
        };
    };

    selectPayment = async (id: string) => {
        try {
            const payment = await PaymentDataBase
            .connection('Payment')
            .select('buyer_id', 'amount', 'type')
            .where({id});

            return payment[0];
        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage);
        };
    };
};