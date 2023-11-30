<template>

 


    <v-container>
      <v-combobox
        label="Combobox"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      ></v-combobox>
    </v-container>


</template>

<script>
export default {
  data() {
    return {
      months: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
    };
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
