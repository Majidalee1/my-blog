import { useEffect, useState } from 'react';
import { getDefaultFormatCodeSettings } from 'typescript';
import { IBlog } from '../interfaces/blog';

export interface IuseFetchProps {
}

export function useFetch({ url }: { url: string }) {
    const [data, setdata] = useState<IBlog | null>(null)
    const [isPending, setIsPending] = useState(true);

    async function getDataFromServer() {

        const data = await fetch("http://localhost:8000/blogs")
        if (data) {
            setIsPending(false)
        }
        return data.json()
    }

    useEffect(() => {
        getDataFromServer()
    }, [url])
    return { data, isPending }
}
