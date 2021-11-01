<template>
  <div>
    <!-- Sign Up Image And Headings -->
    <div class="sign-up-header" :style="{ backgroundImage: 'url(' + bg + ')' }">
      <div class="content">
        <h1 class="mb-5">Sign Up</h1>
        <p class="text-lg">
          Use these awesome forms to login or create new account in your project
          for free.
        </p>
      </div>
    </div>
    <!-- / Sign Up Image And Headings -->

    <!-- Sign Up Form -->
    <a-card
      :bordered="false"
      class="card-signup header-solid h-full"
      :bodyStyle="{ paddingTop: 0 }"
    >
      <template #title>
        <h5 class="font-semibold text-center">Register</h5>
      </template>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item class="mb-10">
          <a-input
            v-decorator="[
              'name',
              {
                rules: [{ required: true, message: '请输入用户名称!' }],
              },
            ]"
            placeholder="Name"
          >
          </a-input>
        </a-form-item>
        <a-form-item class="mb-10">
          <a-input
            v-decorator="[
              'email',
              {
                rules: [{ required: true, message: '请输入用户邮箱!' }],
              },
            ]"
            placeholder="Email"
          >
          </a-input>
        </a-form-item>
        <a-form-item class="mb-5">
          <a-input
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: '请输入用户密码!' }],
              },
            ]"
            type="password"
            placeholder="Password"
          >
          </a-input>
        </a-form-item>
        <a-form-item class="mb-10">
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true,
              },
            ]"
          >
            I agree the
            <a href="#" class="font-bold text-dark">Terms and Conditions</a>
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            block
            html-type="submit"
            class="login-form-button"
          >
            SIGN UP
          </a-button>
        </a-form-item>
      </a-form>
      <p class="font-semibold text-muted text-center">
        Already have an account?
        <router-link to="/sign-in" class="font-bold text-dark"
          >Sign In</router-link
        >
      </p>
    </a-card>
    <!-- / Sign Up Form -->
  </div>
</template>

<script lang="ts">
import Bg from "../assets/images/bg-signup.jpg";
import { Component, Vue } from "vue-property-decorator";

// interface form {
//   email?: string;
//   name?: string;
//   password?: string;
// }

@Component
export default class SignUp extends Vue {
  bg: string = Bg;
  form: any;
  beforeCreate(): void {
    console.log("form", this);
    this.form = this.$form.createForm(this, { name: "normal_login" });
  }
  handleSubmit(e: { preventDefault: () => void }): void {
    e.preventDefault();
    this.form.validateFields((err: unknown, values: unknown): void => {
      console.log(err);
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  }
}
</script>

<style lang="scss" scoped>
/deep/ body {
  background-color: #ffffff;
}
</style>
