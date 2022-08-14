enum Status {
    Finished = "FINALIZADO",
    InProgress = "EM ANDAMENTO",
    Scheduled = "AGENDADO"
};

enum Duration {
    HalfAnHour = "30",
    OneHour = "60"
};

export interface DogWalking {
    id: string;
    status?: Status;
    scheduleDate: string;
    price: number;
    duration: Duration;
    latitude: number;
    longitude: number;
    pets: number;
    startTime: number;
    endTime: number;
};

export interface InputDTO {
    scheduleDate: string;
    duration: Duration;
    latitude: number;
    longitude: number;
    pets: number;
    startTime: number;
    endTime: number;
};