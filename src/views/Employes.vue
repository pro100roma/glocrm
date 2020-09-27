<template>
    <div class="employes">
        <h2>Employes</h2>
        <EmployesList :employes="employes" />
    </div>
</template>

<script>
import EmployesList from '@/components/EmployesList'
export default {
    components: {
        EmployesList
    },
    data: () => ({
        employes: [
            {name: 'Ivan', age: 26, position: 'Developer', inCompany: '01.05.2019', photo: 'employe1.jpg'},
            {name: 'Anna', age: 28, position: 'Designer', inCompany: '01.09.2019', photo: 'employe2.jpg'},
            {name: 'Michael', age: 22, position: 'Marketer', inCompany: '01.12.2019', photo: 'employe3.jpg'},
            {name: 'Julia', age: 36, position: 'Manager', inCompany: '01.03.2017', photo: 'employe4.jpg'},
        ]
    })
}
</script>