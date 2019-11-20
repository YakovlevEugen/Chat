<template lang="pug">
  <div>
    <h1>Уютный чатик</h1>
    <p>Привет, {{ user.name }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: `Комната ${this.user.room}`
    }
  },
  middleware: ['chat'],
  computed: {
    ...mapState(['user'])
  }
}
</script>
