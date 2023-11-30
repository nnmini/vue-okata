<template>
  <div>
    <v-combobox
      label="Combobox"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    ></v-combobox>
  </div>
</template>

<script>
import axios from 'axios';
import sampleConfig from '../config';

export default {
  name: 'Messages',
  data() {
    return {
      failed: false,
      messages: [],
    };
  },
  async created() {
    try {
      const accessToken = this.$auth.getAccessToken();
      const response = await axios.get(
        sampleConfig.resourceServer.messagesUrl,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const messages = response.data.messages.map((message, index) => {
        const date = new Date(message.date);
        const day = date.toLocaleDateString();
        const time = date.toLocaleTimeString();
        return {
          date: `${day} ${time}`,
          text: message.text,
          index: index + 1,
        };
      });
      this.messages = messages;
    } catch (e) {
      // eslint-disable-next-line
      console.error(e);
      this.failed = true;
    }
  },
};
</script>
