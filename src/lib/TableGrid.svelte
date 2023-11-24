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
  style={{
    container:{
      border:"1px solid orange",
    },
    table: {
      border: '3px solid #ccc',
      "background-color":'#fff',
    },
    th: {
      'background-color': 'rgba(0, 0, 0, 0.1)',
      color: '#000',
      'border-bottom': '3px solid #ccc',
      'text-align': 'center'
    },
    td: {
      'text-align': 'center',
      border: '1px solid #ccc',
    }
  }}
></Grid>

