<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <appQuote>
                    <button v-on:click="selectedComponent = 'appQuote'">Quote</button>
                    <button v-on:click="selectedComponent = 'appAuthor'">Author</button>
                    <button v-on:click="selectedComponent = 'appNew'">New</button>
                    <hr>
                    <p>{{selectedComponent}}</p>
                    <!-- dynamic component keyword and tag -->
                    <keep-alive>
                         <component :is="selectedComponent">
                             <p>Default Content</p>
                         </component>        
                    </keep-alive>           
                    <hr>
                    <h2 slot="">A Quote</h2>  <!-- slot with no name takes default -->
                    <h1 slot="title">{{ quoteTitle }}</h1>
                    <!--  slot order adjustmanr -->
                    <h3 slot="header">A quote to test for multiple slots (should go below)</h3>
                    <p slot="text">A quote to test for multiple slots (should go above)</p>
                    
                </appQuote>
                
            </div>
        </div>
    </div>
</template>

<script>
// import globally
    import Quotes from './components/Quote';
    import Author from './components/Author';
    import New from './components/New';


// register globally
    export default {
        data: function (){
            return {
                quoteTitle: 'A Wonderful Quote',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quotes,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>

</style>
