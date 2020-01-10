<template>
    <form @submit.prevent="uploadFile" enctype="multipart/form-data">
        <div class="field">
            <label for="file" class="upload">Upload a thumbnail image</label>
            <input type="file" ref="file" @change="selectFile"/>
        </div>
        <div class="field">
            <button class="button button-warning">Upload</button>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                file: "",
                location: ""
            }
        },
        methods: {
            selectFile() {
                this.file = this.$refs.file.files[0];
            },
            uploadFile() {
                const formData = new FormData();
                formData.append('file', this.file);
                this.$http.post('http://localhost:3000/images', formData).then((saved) => {
                    this.location = saved;
                    console.log(this.location);
                })
            }
        }
    }
</script>

<style scoped>

</style>