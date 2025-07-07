'use client'
import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../ui/table";
import { Action, Column } from "./types";
import { MoreDotIcon } from "@/icons";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { IPagination } from "@/types/common";
import Pagination from "./Pagination";

interface DataTableProps<T> {
    data: Array<T>;
    columns: Column<T>[];
    actions?: Array<Action<T>>;
    click?: (entity: T) => void;
    pagination?: IPagination;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DataTable = <T extends Record<string, any>>({
    data, columns, actions, click, pagination = {
        currentPage: 1, totalPages: 1, size: 10, onPageChange: () => { }
    }
}: DataTableProps<T>) => {
    return (
        <>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                <div className="max-w-full overflow-x-auto">
                    <div className="min-w-[1102px] min-h-[300px]">
                        <Table>
                            {/* Table Header */}
                            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                                <TableRow>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                    >
                                        #
                                    </TableCell>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            isHeader
                                            className={`px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 ${column.headerClassName || ""}`}
                                        >
                                            {column.header}
                                        </TableCell>
                                    ))}
                                    {actions && actions.length > 0 && (
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                        >
                                            Actions
                                        </TableCell>
                                    )}
                                </TableRow>
                            </TableHeader>

                            {/* Table Body */}
                            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                {data.map((row, rowIndex) => (
                                    <TableRow key={rowIndex}>
                                        <TableCell
                                            className="cursor-pointer px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400"
                                            onClick={() => click && click(row)}
                                        >
                                            {(pagination.currentPage - 1) * pagination.size + (rowIndex + 1)}
                                        </TableCell>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={`${rowIndex}-${column.id}`}
                                                onClick={() => click && click(row)}
                                                className={`cursor-pointer ${column.cellClassName || "px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400"} text-start`}
                                            >
                                                {typeof column.accessor === "function"
                                                    ? column.accessor(row)
                                                    : row[column.accessor]}
                                            </TableCell>
                                        ))}

                                        {actions && actions.length > 0 && (
                                            <TableCell className="px-4 py-3 text-start">
                                                <ActionsDropDown actions={actions} row={row} />
                                            </TableCell>
                                        )}
                                    </TableRow>
                                ))}
                                {/* Case data is empty */}
                                {data.length === 0 && (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columns.length + (actions ? 2 : 1)}
                                            className="px-4 py-10 text-center text-gray-500 dark:text-gray-400"
                                        >
                                            No data available
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
            <Pagination {...pagination} />
        </>
    );
};

export default DataTable;

interface ActionsDropDownProps<T> {
    actions: Array<Action<T>>;
    row: T;
}

const ActionsDropDown = <T,>({ actions, row }: ActionsDropDownProps<T>) => {
    const [open, setOpen] = useState(false);
    const toggleDropdown = () => setOpen(prev => !prev);
    const closeDropdown = () => setOpen(false);

    const clickItem = (action: Action<T>) => {
        action.onClick(row);  // Pass the row data to the action handler
        closeDropdown();
    }

    return (
        <div className="relative inline-block">
            <button onClick={toggleDropdown} className="dropdown-toggle">
                <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
            </button>
            <Dropdown
                isOpen={open}
                onClose={closeDropdown}
                className="w-60 p-1"
            >
                {actions.map((action, index) => {
                    return (
                        <DropdownItem
                            key={index}
                            onItemClick={() => clickItem(action)}
                            className="flex items-center gap-2 w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                        >
                            {action.icon}
                            {action.label}
                        </DropdownItem>
                    )
                })}
            </Dropdown>
        </div>
    )
}