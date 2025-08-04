import React from "react";
import { Table } from "nextra/components";
import { cn } from "@/lib/utils";

export const Props = ({ data }: { data: Record<string, any>[] }) => {
  return (
    <Table>
      <thead className="border-0">
        <Table.Tr>
          <Table.Th>Property</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th>Type</Table.Th>
          <Table.Th>Default</Table.Th>
        </Table.Tr>
      </thead>
      <tbody className="text-sm font-mono">
        {data.map((row, index) => (
          <Table.Tr key={index}>
            <Table.Td className="font-semibold">{row.Property}</Table.Td>
            <Table.Td className="text-gray-600 dark:text-gray-400">
              {row.Description}
            </Table.Td>
            <Table.Td>
              <p
                className={cn("text-xs", {
                  "text-fuchsia-700": !row.Type.includes("Record<"),
                  "text-blue-700": row.Type.includes("Record<"),
                })}
              >
                {row.Type.includes(" | ")
                  ? row.Type.split(" | ").map((type: string) => (
                      <span
                        key={type}
                        className={cn(
                          "inline-block border rounded-full px-2 py-1 border-fuchsia-700 m-0.5"
                        )}
                      >
                        {type}
                      </span>
                    ))
                  : row.Type}
              </p>
            </Table.Td>
            <Table.Td>
              {["-", "false", "true"].includes(row.Default) ? (
                row.Default
              ) : (
                <span className="font-mono bg-primary/40 text-white font-extrabold rounded-full px-2 py-1 text-xs">
                  {row.Default}
                </span>
              )}
            </Table.Td>
          </Table.Tr>
        ))}
      </tbody>
    </Table>
  );
};
