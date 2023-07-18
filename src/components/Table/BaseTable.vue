<template>
  <div class="recent-verifications-wrapper">
    <div class="recent-verifcation">
      <div class="text-block-8">{{ title }}</div>
      <div class="div-block-8">
        <div class="div-block-9">
          <div data-w-id="1b074c74-2faa-54fe-770d-694a408ae8ef" data-animation-type="lottie" data-src="documents/14306-empty-state-illustration.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="2.0020019204587935" data-duration="0" class="lottie-animation-2"></div>
        </div>
      </div>
      <div class="card no-padding receipt-table">
        <div class="table-header">
          <div v-for="field in fields" v-bind:key="field.key" class="card-setting-text caption">
            {{field.label}}
          </div>
        </div>
        <span v-if="tableItems.length > 0">
          <a v-for="item in tableItems" v-bind:key="item[fields[0]]" href="#" class="table-details-row w-inline-block">
          <div class="receipt-row-2">
            <div v-for="field in fields" v-bind:key="field.key" class="card-setting-text">
              <span v-if="field.key === 'action'"><b-button variant="info">more</b-button></span>
              <span>{{item[field.key]}}</span>
            </div>
          </div>
        </a>
        </span>
        <span v-else>
          <div class="text-block-9">Oops😟..nothing to show here</div>
        </span>

        <div style="justify-content: center; align-content: center"
             class="pagination">
          <div class="div-block-27">
            <div @click="previous()" style="cursor:pointer;">Prev</div>
            <a href="#" @click="previous()" :class="paginations[0]===this.currentPage?'_1 w-inline-block':'_2 w-inline-block'">
              <div :class="paginations[0]===this.currentPage?'text-block-16-copy':'text-block-16'">{{paginations[0]}}</div>
            </a>
            <a href="#" :class="paginations[1]===this.currentPage?'_1 w-inline-block':'_2 w-inline-block'">
              <div :class="paginations[1]===this.currentPage?'text-block-16-copy':'text-block-16'">{{paginations[1]}}</div>
            </a>
            <a href="#"  @click="next()" :class="paginations[2]===this.currentPage?'_1 w-inline-block':'_2 w-inline-block'">
              <div :class="paginations[2]===this.currentPage?'text-block-16-copy':'text-block-16'">{{paginations[2]}}</div>
            </a>
            <div @click="next()" style="cursor:pointer;">Next</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "fields", "items"],
  name: "BaseTable",
  data(){
    return{
      currentPage:1,
      numberPerPage: 10
    }
  },
  methods:{
    next(){
      if (this.totalPage >= this.currentPage) this.currentPage += 1
    },
    previous(){
      if (this.totalPage > 1) this.currentPage -= 1
    },
    firstPage(){
      this.currentPage = 1
    },
    lastPage(){
      this.currentPage = this.totalPage
    },
    chunk(arr, chunkSize) {
      if (chunkSize <= 0) throw "Invalid chunk size";
      let array = arr?arr:[];
      let R = [];
      for (let i=0,len=array.length; i<len; i+=chunkSize)
        R.push(array.slice(i,i+chunkSize));
      return R;
    }
  },
  computed:{
    totalPage(){
      return this.elements.length % this.numberPerPage
    },
    elements() {
      return this.chunk(this.items,this.numberPerPage)
    },
    tableItems(){
      return this.elements[this.currentPage-1]?this.elements[this.currentPage-1]:[]
    },
    paginations(){
      let pages = []
      if (this.currentPage > 1) pages.push(this.currentPage-1); else pages.push(1);
      if (this.currentPage > 1) pages.push(this.currentPage); else pages.push(2);
      if (this.currentPage > 1) pages.push(this.currentPage+1); else pages.push(3);
      return pages
    }
  }
}
// Object.defineProperty(Array.prototype, 'toChunk', {
//   value: function(chunkSize) {
//     console.log("chunkSize", chunkSize)
//     var R = [];
//     for (var i = 0; i < this.length; i += chunkSize)
//       R.push(this.slice(i, i + chunkSize));
//     return R;
//   }
// });
</script>

<style scoped>

</style>