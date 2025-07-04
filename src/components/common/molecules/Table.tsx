"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

export interface Column<T> {
  header: string;
  accessor: keyof T;
  className?: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

const tableBase = cva(
  "min-w-full text-sm text-left divide-y divide-gray-200 rounded-md overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white",
        bordered: "bg-white border border-gray-300",
        striped: "bg-white",
        compact: "bg-white text-xs",
        borderedStriped: "bg-white border border-gray-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface TableProps<T> extends VariantProps<typeof tableBase> {
  data: T[];
  columns: Column<T>[];
  rowKey?: (row: T, index: number) => string | number;
  isLoading?: boolean;
  emptyText?: string;
  className?: string;
}

export function Table<T>({
  data,
  columns,
  rowKey,
  variant,
  isLoading = false,
  emptyText = "No data available",
  className,
}: TableProps<T>) {
  const [sortConfig, setSortConfig] = React.useState<{
    key: keyof T;
    direction: "asc" | "desc";
  } | null>(null);

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      if (aVal === bVal) return 0;

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal;
      }

      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortConfig.direction === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      const aStr = String(aVal);
      const bStr = String(bVal);
      return sortConfig.direction === "asc"
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });
  }, [data, sortConfig]);

  const toggleSort = (key: keyof T) => {
    setSortConfig((prev) => {
      if (!prev || prev.key !== key) return { key, direction: "asc" };
      return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
    });
  };

  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className={tableBase({ variant })}>
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className={cn(
                  "px-4 py-3 font-medium text-gray-700 cursor-pointer select-none",
                  col.className,
                  col.sortable && "hover:text-primary-600",
                  // Add borders on header for bordered and borderedStriped variants
                  (variant === "bordered" || variant === "borderedStriped") &&
                    "border border-gray-300"
                )}
                onClick={() => col.sortable && toggleSort(col.accessor)}
              >
                <div className="flex items-center gap-1">
                  {col.header}
                  {col.sortable && sortConfig?.key === col.accessor && (
                    <span className="text-xs text-gray-500">
                      {sortConfig.direction === "asc" ? "▲" : "▼"}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {isLoading ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-6 text-center text-gray-500"
              >
                Loading...
              </td>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-6 text-center text-gray-500"
              >
                {emptyText}
              </td>
            </tr>
          ) : (
            sortedData.map((row, rowIndex) => (
              <tr
                key={rowKey ? rowKey(row, rowIndex) : rowIndex}
                className={cn(
                  // striped or borderedStriped variant: add bg on even rows
                  (variant === "striped" || variant === "borderedStriped") &&
                    rowIndex % 2 === 1 &&
                    "bg-gray-50"
                )}
              >
                {columns.map((col, colIndex) => {
                  const value = row[col.accessor];
                  return (
                    <td
                      key={colIndex}
                      className={cn(
                        col.className,
                        // bordered or borderedStriped variant: add border on td
                        variant === "bordered" || variant === "borderedStriped"
                          ? "border border-gray-300"
                          : "",
                        // compact variant: smaller padding
                        variant === "compact" ? "px-3 py-2" : "px-4 py-3",
                        "text-gray-700"
                      )}
                    >
                      {col.render
                        ? col.render(value, row)
                        : (value as React.ReactNode)}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
