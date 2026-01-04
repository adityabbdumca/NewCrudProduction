import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useGetData, useDelete } from "../hooks/useEmp";

function EpmTable({ edit }) {
  const { data = [] } = useGetData();
  const deleteMutate = useDelete();

  const handleDeleteMutate = (id) => {
    deleteMutate.mutate(id);
  };

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "Name",
      header: "Name",
    },
    {
      accessorKey: "RollNo",
      header: "Roll No",
    },
    {
      accessorKey: "Address",
      header: "Address",
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => edit(row.original)}>Edit</button>
          <button onClick={() => handleDeleteMutate(row.original.id)}>
            Delete
          </button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EpmTable;
