<template>
    <div class="employes">
        <h2>Clients</h2>
        <ClientsTable :clients="clients" />
    </div>
</template>

<script>
    import ClientsTable from '@/components/ClientsTable'
    export default {
        name: 'clients',
        components: {
            ClientsTable
        },
        data: () => ({
            clients: [
                {name: 'Client 1', signDate: '01.09.2020', budget: 100000, category: 'Finance', id: '1'},
                {name: 'Client 2', signDate: '01.09.2020', budget: 80000, category: 'Industry', id: '2'},
                {name: 'Client 3', signDate: '01.09.2020', budget: 90000, category: 'Finance', id: '3'},
                {name: 'Client 4', signDate: '01.09.2020', budget: 150000, category: 'Industry', id: '4'},
            ]
        })
    }
</script>