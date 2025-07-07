
import {
    Check,
    PauseCircle,
    Clock,
} from "lucide-react";

export const USER_STATUSES = [
    {
        label: "Active",
        value: "active",
        icon: <Check className="h-4 w-4 text-green-600" />,
    },
    {
        label: "Pending",
        value: "pending",
        icon: <Clock className="h-4 w-4 text-yellow-500" />,
    },
    {
        label: "Inactive",
        value: "inactive",
        icon: <PauseCircle className="h-4 w-4 text-gray-500" />,
    },
];

export const STATUS_COLORS: Record<typeof USER_STATUSES[number]['value'], string> = {
    active: "bg-green-200 text-green-800",
    inactive: "bg-gray-200 text-gray-800",
    pending: "bg-yellow-200 text-yellow-800",
}

export const getStatusColor = (status: typeof USER_STATUSES[number]['value']) => {
    return STATUS_COLORS[status] || "bg-gray-100 text-gray-800";
}