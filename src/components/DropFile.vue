<template>
    <div class="main">
      <div
        class="dropzone-container"
        @dragover="dragover"
        @dragleave="dragleave"
        @drop="drop"
      >
        <input
          type="file"
          multiple
          name="file"
          id="fileInput"
          class="hidden"
          @change="onChange"
          ref="file"
          accept=".pdf,.jpg,.jpeg,.png"
        />
  
        <label for="fileInput" class="file-label">
          <div v-if="isDragging">Release to drop files here.</div>
          <div v-else>Drop files here or <u>click here</u> to upload.</div>
        </label>
  
        <div class="mt-4 flex space-x-5 items-center" v-if="files.length">
          <div v-for="file in files" :key="file.name">
            <div>
              <img class="h-25 w-20" :src="generateThumbnail(file)" />
              <p :title="file.name">
                {{ makeName(file.name) }}
              </p>
            </div>
            <div>
              <button
                class="ml-2"
                type="button"
                @click="remove(files.indexOf(file))"
                title="Remove file"
              >
                <b>&times;</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDragging: false,
        files: [],
      };
    },
    methods: {
      onChange() {
        this.files = [...this.$refs.file.files];
      },
  
      generateThumbnail(file) {
        let fileSrc = URL.createObjectURL(file);
        setTimeout(() => {
          URL.revokeObjectURL(fileSrc);
        }, 1000);
        return fileSrc;
      },
  
      makeName(name) {
        return (
          name.split(".")[0].substring(0, 3) +
          "..." +
          name.split(".")[name.split(".").length - 1]
        );
      },
  
      remove(i) {
        this.files.splice(i, 1);
      },
  
      dragover(e) {
        e.preventDefault();
        this.isDragging = true;
      },
  
      dragleave() {
        this.isDragging = false;
      },
  
      drop(e) {
        e.preventDefault();
        this.$refs.file.files = e.dataTransfer.files;
        this.onChange();
        this.isDragging = false;
      },
    },
  };
  </script>
 