<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <appQuotes quote="A wonderful Quote!"></appQuotes>
            </div>
        </div>
    </div>
</template>

<script>
// import globally
    import Quotes from './components/Quote';


// register globally
    export default {
        components: {
            appQuotes: Quotes
        }
    }
</script>

<style>

</style>
