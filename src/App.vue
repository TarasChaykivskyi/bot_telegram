<template>
  <div id="app">
    <div class="container">
      <news-telegram-bot-page />
    </div>
  </div>
</template>

<script>
import NewsTelegramBotPage from "@/views/NewsTelegramBotPage";

export default {
  name: 'App',
  components: {
    NewsTelegramBotPage
  }
}
</script>
