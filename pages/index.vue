<template>
  <ACard class="login-container" title="Войти">
    <AForm :form="form" @submit.prevent="handleSubmit">
      <AFormItem label="Ваше имя" :label-col="{ span: 5 }" :wrapper-col="{ span: 16 }">
        <AInput
          v-decorator="['name', { rules: [{ required: true, message: 'Введите Ваше имя' }] }]"
        />
      </AFormItem>
      <AFormItem label="Комната" :label-col="{ span: 5 }" :wrapper-col="{ span: 16 }">
        <AInput
          v-decorator="['room', { rules: [{ required: true, message: 'Введите название комнаты' }] }]"
        />
      </AFormItem>
      <AFormItem :wrapper-col="{ span: 12, offset: 5 }">
        <AButton type="primary" html-type="submit">Submit</AButton>
      </AFormItem>
    </AForm>
  </ACard>
</template>

<script>
import { mapMutations } from 'vuex'
import {
  Card as ACard,
  Form as AForm,
  Input as AInput,
  Button as AButton
} from 'ant-design-vue/lib'

export default {
  layout: 'empty',
  head: {
    title: 'DaBro chat'
  },
  components: { ACard, AForm, AInput, AButton, AFormItem: AForm.Item },
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'login' })
    }
  },
  sockets: {
    connect () {
      console.log('Client IO connected')
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    handleSubmit () {
      this.form.validateFields((err, values) => {
        if (!err) {
          const user = this.form.getFieldsValue()

          this.$socket.emit('userJoined', user, data => {
            if (typeof(data) === 'string') {
              console.error(data)
            } else {
              user.id = data.userId
              this.setUser(user)
              this.$router.push('/chat')
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="stylus">
  .login-container
    width: 500px
</style>
