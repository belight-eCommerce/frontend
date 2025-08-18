'use client';

import { ErrorState } from "@/components/common/Error";
import { LoadingState } from "@/components/common/Loading";
import axiosClient from "@/config/axiosClient";
import { useEffect, useState } from "react"

const url = process.env.NEXT_PUBLIC_API_URL || 'URL_NOT_FOUND'

export default function TestAPIPage() {

    const [apiData, setApiData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchData = async () => {
        setLoading(true);
        try {
            const result = await axiosClient.get(url);
            setApiData(result.data)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to fetch data");
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchData();
    }, [])

    if (loading) {
        return <LoadingState />
    }

    if (error) {
        return <ErrorState />
    }

    return (
        <pre>
            {JSON.stringify(apiData, null, 2)}
        </pre>
    )
}