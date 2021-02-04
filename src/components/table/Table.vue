<template>
  <div>
    <h1 class="text-center">{{title}}</h1>
    <button class="btn btn-primary my-3 float-right"
            v-if="showButtonCreate"
            @click="showModal(null)"
    >
      {{textButtonCreate}}
    </button>
    <table class="table table-bordered">
      <thead>
      <tr class="text-center">
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
        <TableItem v-for="(item, index) in bots"
                   :key="index"
                   :indexTable="index + 1"
                   :obj="item"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import TableItem from "@/components/table/Table-Item";
import {mapGetters, mapActions} from 'vuex';
export default {
  props: {
    title: {
      type: String,
      default: 'Title table'
    },
    textButtonCreate: {
      type: String,
      default: 'Create'
    },
    showButtonCreate: {
      type: Boolean,
      default: false
    }
  },
  name: "Table",
  components: {TableItem},
  computed: {
    ...mapGetters({
      bots: 'BOT'
    })
  },
  methods: {
    ...mapActions({
      showModal: 'SHOW_MODAL_DATA',
      setCurrentBot: 'SET_CURRENT_BOT'
    })
  }
}
</script>

<style scoped>

</style>
