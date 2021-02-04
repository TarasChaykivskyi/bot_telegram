<template>
  <div class="modal fade show"
       @click.self="hideModal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="close" @click="hideModal">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent v-if="dataItem">
            <div class="form-group">
              <label for="exampleFormControl1">Title</label>
              <textarea class="form-control" id="exampleFormControl1" rows="1" v-model.trim="dataItem.title"></textarea>
<!--              <span class="text-danger" v-if="$v.dataItem.title.$error">Please enter correct your title</span>-->
            </div>
            <div class="form-group">
              <label for="exampleFormControl2">Description</label>
              <textarea class="form-control" id="exampleFormControl2" rows="2"
                        v-model.trim="dataItem.description"></textarea>
<!--              <span class="text-danger" v-if="$v.dataItem.description.$error">Please enter correct your description</span>-->
            </div>
            <div class="d-flex justify-content-between">
              <DragAndGrop />
              <div class="pt-3 position-relative">
                <h4 class="text-center">Selected date</h4>
                <date-picker v-model="dataItem.date" type="date" valueType="format"></date-picker>
              </div>
            </div>
            <button type="button"
                    class="btn btn-primary"
                    @click="saveBot(dataItem)"
            >Save</button>
          </form>
          <form @submit.prevent v-else>
            <div class="form-group">
              <label for="exampleFormControl3">Title</label>
              <textarea class="form-control" id="exampleFormControl3" rows="1" v-model.trim="newData.title"></textarea>
              <span class="text-danger" v-if="$v.newData.title.$error">Please enter correct your title</span>
            </div>
            <div class="form-group">
              <label for="exampleFormControl4">Description</label>
              <textarea class="form-control" id="exampleFormControl4" rows="2"
                        v-model.trim="newData.description"></textarea>
              <span class="text-danger"
                    v-if="$v.newData.description.$error">Please enter correct your description</span>
            </div>
            <div class="d-flex justify-content-between">
              <DragAndGrop />
              <div class="pt-3 position-relative">
                <h4 class="text-center">Selected date</h4>
                <date-picker v-model="newData.date" type="date" valueType="format"></date-picker>
              </div>
            </div>
            <button type="button"
                    class="btn btn-primary"
                    @click="validateNewBot(newData)"
            >Create</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {mapGetters, mapActions} from 'vuex';
import UUID from 'vue-uuid';
import Vuelidate from 'vuelidate';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

Vue.use(UUID);
Vue.use(Vuelidate);
import {uuid} from 'vue-uuid';
import {validationMixin} from 'vuelidate';
import {required, minLength} from 'vuelidate/lib/validators';
import DragAndGrop from "@/components/table/DragAndGrop";

export default {
  components: {DragAndGrop, DatePicker},
  props: {
    title: {
      type: String,
      default: 'Modal title'
    }
  },
  name: "ModalData",
  data() {
    return {
      newData: {
        id: uuid.v4(),
        title: '',
        description: '',
        img: '',
        date: new Date().toLocaleDateString()
      },
      formError: {
        title: false,
        description: false,
      }
    }
  },
  mixins: [validationMixin],
  validations: {
    newData: {
      title: {
        required,
        minLength: minLength(2)
      },
      description: {
        required,
        minLength: minLength(2)
      }
    },
    dataItem: {
      title: {
        required,
        minLength: minLength(2)
      },
      description: {
        required,
        minLength: minLength(2)
      }
    }
  },
  computed: {
    ...mapGetters({
      dataItem: 'CURRENT_BOT'
    }),
  },
  methods: {
    ...mapActions({
      hideModal: 'HIDE_MODAL_DATA',
      addNewBot: 'ADD_NEW_BOT',
      saveBot: 'SAVE_BOT',
    }),
    validateNewBot(obj) {
      this.$v.newData.$touch();
      if (!this.$v.newData.$error) {
        this.addNewBot(obj)
      }
    }
  }
}
</script>

<style scoped>

</style>
