new Vue({
  data(){
    return{
      table:[],
      options: {
        data:[
          [ 'Lorem', 10, 1.10, '=B1*C1'],
          [ 'Ipsum', 30, 0.40, '=B2*C2'],
          [ 'sit', 15, 0.45, '=B3*C3'],
          [ 'amet', 20, 0.49, '=B4*C4'],
          [ 'Lorem', 10, 1.10, '=B5*C5'],
          [ 'Ipsum', 30, 0.40, '=B6*C6'],
          [ 'sit', 15, 0.45, '=B7*C7'],
          [ 'amet', 20, 0.49, '=B8*C8'],
          ],
        colHeaders: [ 'Product', 'Quantity', 'Price', 'Total'],
        colWidths: [ 300, 100, 100, 100],
      }
    }
  },
  mounted: function() {
    let spreadsheet = jexcel(this.$el, this.options);
    this.table = Object.assign(this, spreadsheet);
  },
  methods:{
    
  }
}).$mount('#app')