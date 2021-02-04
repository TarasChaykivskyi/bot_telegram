<template>
  <div class="py-3 w-50">
    <vue-dropzone ref="myVueDropzone"
                  id="dropzone"
                  :options="dropzoneOptions"
                  :useCustomSlot=true
    >
      <div class="dropzone-custom-content">
        <h3 class="dropzone-custom-title text-success" style="font-size: 15px">Drag and drop to upload content or click here</h3>
      </div>
    </vue-dropzone>

  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: "DragAndGrop",
  data() {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        addRemoveLinks: true
      }
    }
  },
  components: {
    vueDropzone: vue2Dropzone
  }
}
</script>

<style>

.dropzone {
  min-height: 100px;
}

.vue-dropzone>.dz-preview .dz-remove {
  width: 80%;
  bottom: 5px;
  font-size: 10px;
  padding: 0;
}
</style>
