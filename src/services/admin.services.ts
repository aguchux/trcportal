import { dbCon } from "@/models"
import { AdminAttrs } from "@/models/admins.model"

export const adminServices = async () => {

    const login = async (email: string, password: string) => {
        const logon = await fetch('/api/login', {});
    }

    const logout = async () => {

    }

    return { login }
}