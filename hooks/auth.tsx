import useSWR, { useSWRConfig } from "swr"
import { list, signin, signup } from "../api/auth"

export const useAuth = () => {

    const { data, error } = useSWR("/users")
    const { mutate } = useSWRConfig()

    const register = (users: any) => {
        mutate("/users", async () => {
            const { data: user } = await signup(users)
            return [...data, user]
        })
    }

    const login = (users: any) => {
        mutate("/users", async () => {
            const { data: user } = await signin(users)
        })
    }
    return {
        data,
        error,
        register,
        login
    }
}

