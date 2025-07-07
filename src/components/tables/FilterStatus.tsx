import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterStatusProps {
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    statuses: Array<{
        label: string;
        value: string;
        icon?: React.ReactNode;
    }>;
}

export function FilterStatus({
    defaultValue = '',
    onValueChange,
    statuses
}: FilterStatusProps) {

    return (
        <Select
            onValueChange={(value) => onValueChange?.(value)}
            defaultValue={defaultValue}
        >
            <SelectTrigger className="w-[160px] my-1">
                <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {statuses.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                        {status.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export default FilterStatus;