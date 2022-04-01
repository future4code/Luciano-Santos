export type typeToDos = {
    userId : number,
    id: number,
    title: string,
    completed: boolean
};

export const toDos: typeToDos[] = [
    {
        userId: 1,
        id: 1,
        title: "Ler e-mails",
        completed: true
    },
    {
        userId: 2,
        id: 2,
        title: "Cotar produtos",
        completed: true
    },
    {
        userId: 3,
        id: 3,
        title: "Lançar notas fiscais",
        completed: true
    },
    {
        userId: 4,
        id: 4,
        title: "Verificar chamados pendentes",
        completed: true
    },
    {
        userId: 5,
        id: 5,
        title: "Enviar produtos",
        completed: true
    }
];