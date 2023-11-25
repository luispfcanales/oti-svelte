<script>
  import Grid from "gridjs-svelte"
  import fakedata from "./fakedata.js"
  let data = fakedata
</script>

<Grid
  {data}
  search={true}
  pagination={{
    limit:15,
    summary:false,
  }}
  columns={[
    "Dni",
    "Fullname",
    "email",
    { 
      name: 'State',
      formatter: (_, row) => `${(row.cells[3].data)?"activo":"inactivo" }`
    },
    "role",
    "staff",,
    "options",
  ]}
  className={
    {
      container:"flex flex-col",
      table:"w-full text-sm text-left rtl:text-right text-gray-500",
      thead:"text-xs text-gray-700 uppercase bg-gray-50",
      th:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap",
      td:"px-4 py-2",
      tr:"bg-white hover:bg-gray-50",
    }
  }
></Grid>

