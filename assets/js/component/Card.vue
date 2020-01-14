<template>
    <div class="card">
        <div class="card-header">
            Simple card
        </div>
        <div class="card-body">
            <h5 class="card-title mb-2">{{ title }}</h5>
            <p class="card-text bg-dark text-white p-2 h6 mb-3">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary float-right">Next</a>
        </div>
        <div>
            <ul>
                <li v-for="i of 3">{{i+10}}</li>
            </ul>

            <ul>
                <li v-for="(car, i) in cars" class="mb-1">
                    {{car.name}}
                    <span class="py-1 px-2 rounded-pill text-white bg-success">{{car.price}} $</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: { default: 'Title' },
            cars: { default: [] }
        },
        data: function () {
            return {
                hover: false
            }
        }
    };
</script>

<style scoped>
    li {
        list-style-type: circle;
    }
</style>