<template>
    <div class="employes-list">
        <div class="employes-head">
            <div>Photo</div>
            <div>Name</div>
            <div>Age</div>
            <div>Position</div>
            <div>In company since</div>
        </div>
        <div class="employe" v-for="(employe, idx) of employes" :key="idx">
            <div class="employe__photo">
                <img :src="require('../assets/img/employes/' + employe.photo)" alt="Person">
            </div>
            <div class="employe__name">
                {{employe.name}}
            </div>
            <div class="employe__age">
                {{employe.age}}
            </div>
            <div class="employe__position">
                {{employe.position}}
            </div>
            <div class="employe__in-company">
                {{employe.inCompany}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        employes: {
            type: Array
        }
    }
}
</script>

<style lang="scss">
    .employes-head {
        display: flex;
        box-shadow: 0 0 8px 0 #c0c0c0;
        margin: 10px;
        padding: 10px;
        border-radius: 6px;
        & > div {
            width: 20%;
            text-align: center;
            font-size: 20px;
        }
    }
    .employe {
        display: flex;
        margin: 20px 10px;
        box-shadow: 0 0 8px 0 #c0c0c0;
        padding: 0 10px;
        border-radius: 6px;
        & > div {
            width: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        img {
            width: 60px;
        }
    }
</style>