<template>
  <div class="modal fade show" @click.self="hideModalDelete(false)">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title m-auto">Are you sure?</h5>
        </div>
        <div class="modal-footer m-auto">
          <button class="btn btn-secondary" @click="hideModalDelete(false)">Close</button>
          <button class="btn btn-danger" @click="removeItem">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "ModalDelete",
  methods: {
    ...mapActions({
      hideModalDelete: 'TOGGLE_MODAL_DELETE',
      removeItem: 'REMOVE_BOT'
    })
  }
}
</script>

<style scoped>

</style>
