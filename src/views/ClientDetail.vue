<template>
    <div class="client-details">
        <div class="breadcrumb-wrap">
            <router-link to="/" class="breadcrumb">Dashboard</router-link>
            <router-link to="/clients" class="breadcrumb">Clients</router-link>
            <a @click.prevent class="breadcrumb">
                {{clients[this.$route.params.id - 1].name}}
            </a>
        </div>
        <h1>Client detail</h1>

        <div 
            class="progress" 
            v-tooltip="'Spent ' + clients[this.$route.params.id - 1].spent + ' of ' + clients[this.$route.params.id - 1].budget"
        >
          <div
              class="determinate blue"
          ></div>
        </div>

        <div class="row">
            <div class="col s12 m6">
            <div 
                class="card blue"
            >
                <div class="card-content white-text">
                <p>Name: {{clients[this.$route.params.id - 1].name}}</p>
                <p>Budget: {{clients[this.$route.params.id - 1].budget}}</p>
                <p>Spent: {{clients[this.$route.params.id - 1].spent}}</p>
                <p>Category: {{clients[this.$route.params.id - 1].category}}</p>

                <small>{{clients[this.$route.params.id - 1].signDate}}</small>
                </div>
            </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data: () => ({
        clients: [
            {name: 'Client 1', signDate: '01.09.2020', budget: 100000, spent: 50000, category: 'Finance', id: '1'},
            {name: 'Client 2', signDate: '01.09.2020', budget: 80000, spent: 60000, category: 'Industry', id: '2'},
            {name: 'Client 3', signDate: '01.09.2020', budget: 90000, spent: 10000, category: 'Finance', id: '3'},
            {name: 'Client 4', signDate: '01.09.2020', budget: 150000, spent: 135000, category: 'Industry', id: '4'},
        ]
    }),
    mounted() {
        let clientId = this.$route.params.id - 1,
            percent = this.clients[clientId].spent / this.clients[clientId].budget * 100,
            progressPercent = percent > 100 ? 100 : percent
        document.querySelector('.progress .determinate').style.width = progressPercent + '%'
    }
}
</script>