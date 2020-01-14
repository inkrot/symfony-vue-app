<template>
    <div class="container p-2">

        <Card v-bind:cars="cars" />

        <div class="row mt-2 m-0">
            <div class="text-center col-12">
                <p>
                    Hello, {{name.length ? name : 'Default'}}
                </p>
                <p @mouseenter="onMouseEnter"
                   @mouseleave="onMouseLeave">
                    now is {{year}}!
                </p>
                <button class="btn bg-dark shadow-none text-white" v-on:click="count++">counter: {{count}}</button>
            </div>
        </div>
        <div class="row mt-2 m-0">
            <input class="col-12 form-control" type="text" v-model="name" :placeholder="placeholder">
        </div>
    </div>
</template>

<script>
    import Card from './component/Card'

    export default {
        name: "app",
        props: {
            year: {
                default: 2020,
                type: Number
            }
        },
        data() {
            return {
                name: '',
                title: 'Test app',
                count: 0,
                color: '',
                placeholder: 'Input data',
                cars: [
                    { name: 'bmw x5', price: 2900 },
                    { name: 'audi a3', price: 2700 },
                    { name: 'range rover sport', price: 3000 }
                ]
            };
        },
        methods: {
            onMouseEnter: function (e) {
                this.color = e.target.style.color;
                e.target.style.color = 'red'
            },
            onMouseLeave: function (e) {
                e.target.style.color = this.color
            }
        },
        components: {
            Card
        }
    }
</script>

<style scoped>

</style>