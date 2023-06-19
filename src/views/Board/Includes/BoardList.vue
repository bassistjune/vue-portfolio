<template>
  <div class="table-wrapper">
    <table>
      <colgroup>
        <col width="15%;">
        <col>
        <col width="10%;">
        <col width="12%;">
      </colgroup>
      <thead>
      <tr>
        <th class="__alginC">No.</th>
        <th class="__alginC">Title</th>
        <th class="__alginC">Name</th>
        <th class="__alginC">Data</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td class="__alginL"><a href="#">제목...</a></td>
        <td>이름</td>
        <td>2023.06.19</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
  .table-wrapper thead th.__alginC {text-align: center;}
  .table-wrapper tbody td.__alginL {text-align: left;}
  .table-wrapper tbody td {text-align: center;}
  .__alginC {text-align: center;}
  .__alginL {text-align: left;}
</style>
<script>
export default {
  name: "BoradList",
}
</script>