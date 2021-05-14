export const fruitMixin = {
    data: function () {
        return{
            fruits: ['mango','papaya', 'orange', 'grape', 'apple', 'banana', 'cocoa'],
            filterText: ''
        }
    },

    computed: {
        filteredFruits() {
            return this.fruits.filter((el) => {
                return el.match(this.filterText)
            })
        }
    }
}