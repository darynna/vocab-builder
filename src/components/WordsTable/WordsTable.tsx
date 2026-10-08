import type {Word} from "../../types/word.tsx";
import type {ColumnDef} from "@tanstack/react-table";
import {
    createSortedRowModel,
    rowSortingFeature,
    sortFns,
    tableFeatures,
    useTable,
} from '@tanstack/react-table'
import {useState} from "react";

type WordsTableProps = {
    words: Word[];
};

const features = tableFeatures({
    rowSortingFeature, // enables sorting APIs and state
    sortedRowModel: createSortedRowModel(), // client-side sorting
    sortFns,
})


const WordsTable = ({words}: WordsTableProps) => {

    const [openActionId, setOpenActionId] = useState<string | null>(null);

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
            cell: ({row}) => (
                <div className='relative  h-full'>
                    <button type='button' aria-label="Open action" className='mx-auto block'
                            onClick={() => setOpenActionId(row.original._id)}>...
                    </button>
                    {openActionId === row.original._id && (
                        <div className='absolute right-0 top-0 z-10 w-32 -translate-y-1/3 rounded-xl bg-white px-6 py-3 shadow-lg'>
                            <button type='button' aria-label="Edit word"
                                    className='flex w-full items-center gap-2 rounded-lg text-sm md:text-base mb-2'><img
                                src='/icons/edit.png'/> Edit
                            </button>
                            <button type='button' aria-label="Delete word"
                                    className='flex w-full items-center gap-2 rounded-lg text-sm md:text-base'><img
                                src='/icons/trash.png'/>Delete
                            </button>
                        </div>
                    )}
                </div>
            )
        },
    ];

    const table = useTable({
        key: ' words-table',
        features,
        columns,
        data: words,
    })

    return (
        <div className=' w-full overflow-hidden rounded-xl bg-white md:p-4'>
            <table className=' w-full table-fixed'>
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
                                                ? ' pointer'
                                                : undefined,
                                        }}
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        <table.FlexRender header={header}/>
                                        {{
                                            asc: ' 🔼',
                                desc: ' 🔽',
                                }[header.column.getIsSorted() as string] ?? null}
                        </div>
                        )}
                </th>
            )
)}
</tr>
))
}
</thead>
    <tbody>
    {table.getRowModel().rows.map((row) => (
        <tr key={row.id}
            className={openActionId === row.original._id ? "h-26" : ""}>
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
                    <table.FlexRender cell={cell}/>
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