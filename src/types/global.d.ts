
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

type PageProps = {
    _id?: string,
    title: string,
    slug: string,
    pageType: string,
    content: string,
    sortNumber: number
}
