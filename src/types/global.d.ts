
interface ResponseData {
    success: boolean;
    data: any;
    message: string;
}

type TLogin = {
    email: string;
    password: string;
    remember: boolean;
}

interface IAdmin {
    id: string;
    email: string;
    name: string;
    lastSeen: Date;
}
