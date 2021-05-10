<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <appQuotes>
                    <h2>A Quote</h2>
                    <p>A Wonderful Quote</p>
                    <!--  slot order adjustmanr -->
                    <h3 slot="header">A quote to test for multiple slots (should go below)</h3>
                    <p slot="text">A quote to test for multiple slots (should go above)</p>
                </appQuotes>
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
