export interface ICompetenceCenter {
    id: number;
    code: string;
    city: string;
    country: string;
}

export class TransferObject {
    formType: string;
    data?: ICompetenceCenter;
}