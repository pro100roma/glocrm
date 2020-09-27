<template>
    <table class="clients-table">
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date</th>
          <th>Budget</th>
          <th>Category</th>
          <th>Open</th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="(client, idx) of clients" :key="client.id">
          <td>{{ idx + 1 }}</td>
          <td>{{ client.name}}</td>
          <td>{{ client.signDate}}</td>
          <td>{{ client.budget }}</td>
          <td>{{ client.category }}</td>
          <td>
            <button
              v-tooltip="'Open record'"
              class="btn-small btn"
              @click="$router.push('/clients/' + client.id)">
              <i class="material-icons">open_in_new</i>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
</template>

<script>
export default {
  props: {
    clients: {
      required: true,
      type: Array
    }
  }
}
</script>