<template>
  <tr>
    <th style="width: 50px">{{ indexTable }}</th>
    <td>
      <a href="#" @click="showModalData(indexTable - 1 )">{{ obj.title }}</a>
    </td>
    <td style="width: 50px">
      <button class="btn btn-danger btn-delete"
              @click="showModalDelete({status: true, indexBot: indexTable - 1})"
      >
        <span>&times;</span>
      </button>
    </td>
  </tr>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  props: {
    obj: {
      type: Object,
      default: () => {
      }
    },
    indexTable: {
      type: Number,
      required: true
    }
  },
  name: "Table-Item",
  methods: {
    ...mapActions({
      showModalData: 'SHOW_MODAL_DATA',
      showModalDelete: 'TOGGLE_MODAL_DELETE'
    }),
  }
}
</script>

<style scoped>

</style>
