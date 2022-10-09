interface IAlaramList {
    name: string;
    state: boolean;
}

export interface IAlarm {
    accountName: string;
    alaramList: IAlaramList[]
}