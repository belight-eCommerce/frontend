import React from 'react';

export interface Column<T> {
    id: string;
    header: string;
    accessor: keyof T | ((row: T) => React.ReactNode);
    headerClassName?: string;
    cellClassName?: string;
}

export interface Action<T> {
    label: string;
    onClick: (row: T) => void;
    icon?: React.ReactNode;
    className?: string;
}

