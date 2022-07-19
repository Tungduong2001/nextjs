import useSWR from "swr"
import { add, removeItem } from "../api/product"

const useProduct = () => {
    const { data, error, mutate } = useSWR('/products')


    const create = async (item: any) => {
        const product = await add(item)
        mutate([...data, product])
    }

    const remove = async (id: any) => {
        await removeItem(id)
        const newItems = data.filter((item: any) => item.id !== id)
        mutate(newItems)
    }
    return {
        data,
        error,
        create,
        remove
    }
}

export default useProduct