import type {Word} from "../../types/word.tsx";
import type {ColumnDef} from "@tanstack/react-table";
import {
    createSortedRowModel,
    rowSortingFeature,
    sortFns,
    tableFeatures,
    useTable,
} from '@tanstack/react-table'

type WordsTableProps = {
  words: Word[];
};

const features = tableFeatures({
    rowSortingFeature, // enables sorting APIs and state
    sortedRowModel: createSortedRowModel(), // client-side sorting
    sortFns,
})

const columns: ColumnDef<typeof features, Word>[] = [
    {
        accessorKey: "en",
        header: "Word",
    },
    {
        accessorKey: "ua",
        header: "Translation",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "progress",
        header: "Progress",
    },
    {
        id: "actions",
        header: "",
        cell: () => (
            <button type='button' aria-label="Open action" className='mx-auto block'>...</button>
        )
    },
];

const WordsTable = ({words} : WordsTableProps) => {
    const table = useTable({
        key: 'words-table',
        features,
        columns,
        data: words,
    })

    return (
        <div className='w-full overflow-hidden rounded-xl bg-white md:p-4'>
        <table className='w-full table-fixed'>
            <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <th key={header.id}
                            className={`
                                h-14 border-b border-r border-gray-200 bg-[#F1F6F4]
                                px-4 text-left text-sm font-medium md:text-lg md:text-center lg:text-xl
                                first:rounded-tl-xl last:rounded-tr-xl last:border-r-0 break-all
                                ${header.column.id === "category" ? "hidden md:table-cell" : ""}
                                ${header.column.id === "actions" ? "w-12 md:w-16 lg:w-36" : ""}
                            `}>
                            {header.isPlaceholder ? null : (
                                <div
                                    style={{
                                        cursor: header.column.getCanSort()
                                            ? 'pointer'
                                            : undefined,
                                    }}
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    <table.FlexRender header={header} />
                                    {{
                                        asc: ' 🔼',
                                        desc: ' 🔽',
                                    }[header.column.getIsSorted() as string] ?? null}
                                </div>
                            )}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                    {row.getAllCells().map((cell) => (
                        <td key={cell.id}
                            className={`
                            md:text-lg md:text-center md:bg-grey-background lg:text-xl
                            border-b border-r border-gray-200
                            p-4 align-top break-all
                            last:border-r-0
                             ${cell.column.id === "category" ? "hidden md:table-cell" : ""}
                             ${cell.column.id === "progress" ? "text-center" : "text-left"}
                             ${cell.column.id === "actions" ? "w-12 md:w-16 lg:w-36 px-2 text-center" : ""}
                             `}>
                            <table.FlexRender cell={cell} />
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    )
}

export default WordsTable;