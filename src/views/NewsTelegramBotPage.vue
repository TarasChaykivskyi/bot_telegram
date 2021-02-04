<template>
  <div class="p-3 w-75 m-auto">
    <Table :title="titleTable"
           :textButtonCreate="textButtonCreate"
           :showButtonCreate="showButtonCreate"
    />
    <ModalData v-if="showModalData" :title="'Create bot'" />
    <ModalDelete v-if="showModalDelete" :title="'Edit bot'" />
  </div>
</template>

<script>
import Table from "@/components/table/Table";
import ModalData from "@/components/modal/ModalData";
import ModalDelete from "@/components/modal/ModalDelete";
import {mapGetters} from 'vuex';

export default {
  name: "NewsTelegramBotPage",
  data: () => {
    return {
      titleTable: 'Telegram bots',
      textButtonCreate: 'Create bot',
      showButtonCreate: true
    }
  },
  computed: {
    ...mapGetters({
      showModalData: 'SHOW_MODAL_DATA',
      showModalDelete: 'SHOW_MODAL_DELETE'
    })
  },
  components: {
    ModalDelete,
    ModalData,
    Table
  }
}
</script>

<style scoped>

</style>
