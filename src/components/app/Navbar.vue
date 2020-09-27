<template>
    <div class="nav">
        <!-- Dropdown Structure -->
        <ul id="dropdown1" class="dropdown-content">
            <li>
                <router-link to="/">Dashboard</router-link>
            </li>
            <li>
                <router-link to="/settings">Settings</router-link>
            </li>
            <li class="divider"></li>
            <li>
                <a href="#!">Exit</a>
            </li>
        </ul>
        <nav>
            <div class="nav-wrapper blue darken-4">
                <router-link to="/" class="brand-logo">
                    <a href="#" @click.prevent="$emit('click')">
                        <i class="material-icons black-text">dehaze</i>
                    </a>
                    Logo
                </router-link>
                <ul class="right hide-on-med-and-down">
                    <li>
                        <a href="#!" v-tooltip="'Notifications'">
                            <span class="material-icons">notifications</span>
                        </a>
                    </li>
                    <!-- Dropdown Trigger -->
                    <li>
                        <a 
                            class="dropdown-trigger" 
                            href="#!" 
                            data-target="dropdown1"
                            ref="dropdown"
                        ><span class="material-icons">person</span><i class="material-icons right">arrow_drop_down</i></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data: () => ({
        dropdown: null
    }),
    mounted() {
        this.dropdown = window.M.Dropdown.init(this.$refs.dropdown, {
            constrainWidth: false
        })
    },
    beforeDestroy() {
        if(this.dropdown && this.dropdown.destroy) {
            this.dropdown.destroy()
        }
    }
}
</script>

<style lang="scss">
    .nav {
        position: relative;
        z-index: 1000;
        .brand-logo {
            margin-left: 10px;
        }
        .right {
            display: flex;
            align-items: center;
            & > li > a {
                display: flex;
            }
        }
        .dropdown-trigger {
            span.material-icons {
                display: flex;
                align-items: center;
            }
        }
    }
</style>