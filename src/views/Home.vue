<template>
  <div class="home">
    首页 -- {{ message }}
    <a-button @click="sayHello">say</a-button>
    所有人：{{ allPserson }}
    <div>
      <a-button @click="handleAboutPage">跳转 about 页面</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// @ is an alias to /src

@Component({
  components: {},
})
export default class Home extends Vue {
  message = "Hello World";
  firstName = "John";
  lastName = "Doe";
  // 计算属性
  get allPserson(): string {
    return this.firstName + "跟" + this.lastName;
  }
  set allPserson(value: string) {
    const splitted = value.split("跟");
    this.firstName = splitted[0];
    this.lastName = splitted[1] || "";
  }

  mounted(): void {
    console.log("mounted");
  }

  // 方法 == methods
  sayHello(): void {
    this.message = "Admin: Hello World";
  }
  handleAboutPage(): void {
    this.$router.push({
      path: "/about",
    });
  }
}
</script>
