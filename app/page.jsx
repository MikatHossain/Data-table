
import {data}  from "@/data/data"
import {columns} from "@/components/columns"
import DataTable from "@/components/data-table";

export default function page() {
  return (
    <div className="h-screen my-10">
      <div className="flex items-center flex-col">
        <h1 className="text-4xl  font-semibold">Tanstack Table</h1>
        <p className="capitalize">This Table use for large data handle.</p>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
