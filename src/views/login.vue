<style>
.index {
  display: flex;
  width: 100%;
  min-width: 300px;
  min-height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  /*background: rebeccapurple;*/
  background-image: url(../images/login.png);
}
.index .ivu-row-flex {
  height: 100%;
}
#logo_wrap{
  padding-bottom: 50px;
}
#index_pc_bj {
  width: 100%;
  margin-top: 120px;
  height: auto;
  background-size: cover;
  overflow: hidden;
  background-position: center center; /*box-shadow: 0 0px 3px rgba(0,0,0,.5);*/
  text-align: center;
}
/*具体内容*/
.wrap_conter ul {
  position: relative;
  width: 435px;
  background: #fff;
  margin: 0 auto;
}
.wrap_conter li {
  text-align: center;
  color: #fff;
  font-size: 12px;
  line-height: 30px;
  padding: 0 25px 0px 25px;
  width: 100%;
}
.content {
  color: #1c2438;
  line-height: 36px;
  display: block;
  text-align: center;
  font-size: 34px;
  height: 36px;
  padding: 40px 0;
}
.pc-hign {
  height: 75px;
  display: inline-table;
}
.wrap_conter li dl {
  width: 100%;
  margin-top: 20px;
}
.name-password-error {
  padding-bottom: 2px;
  text-align: left;
  line-height: 1;
  color: #ed3f14;
}
.ivu-form-item-content .account-list {
  width: auto;
  padding-top: 10px;
}
.account-list li {
  width: auto;
  display: inline-block;
}

.account-list .icon {
  width: 35px;
  height: 40px;
}
.login_input .ivu-input{
  height: 60px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #f4f4f4;
}
input:-webkit-autofill {
  transition:background-color 5000s ease-in-out 0s;
}
</style>
<template>
    <div class="index">
        <div id="index_pc_bj">
          <div id="logo_wrap">
            <img src="../images/login_pic_logo.png">
          </div>
            <Form ref="formLogin" :model="formLogin" :rules="ruleLogin">
                <div class="wrap_conter">
                    <ul style="list-style: none;">
                        <li>
                            <h1 class="content">加入ALSOLIFE</h1>
                        </li>
                        <li>
                            <div class="name-password-error" v-if="this.$store.state.ifSign">用户名或密码错误</div>
                            <dl>
                                <FormItem prop="userName" >
                                    <Input class="login_input" v-model="formLogin.userName" type="text" placeholder="输入您的手机号" ></Input>
                                </FormItem>
                                <FormItem prop="password">
                                    <Input class="login_input" v-model="formLogin.password" type="password" placeholder="输入您的密码" ></Input>
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" @click="login('formLogin')" long style="height:60px; border-radius:0; background-color:#36B9BF; border: 1px solid #36B9BF; font-size: 16px; color:#fff">登录</Button>
                                </FormItem>
                            </dl>
                        </li>
                        <li style="height:60px; background-color:#F8FAFB">
                            <a href="https://github.com/login/oauth/authorize?client_id=7407aa56315bde784031&state=github" style="{width: 36px; height:36px; line-height: 60px; display:inline-block}">
                                <img style="width: 24px;" class="icon" src="../images/GitHub.svg" />
                            </a>
                        </li>
                    </ul>
                </div>
            </Form>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      code: null,
      formLogin: {
        userName: null,
        password: null
      },
      ruleLogin: {
        userName: [
          { required: true, message: "请输入您的手机号", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入您的密码", trigger: "blur" }]
      }
    };
  },
  mounted() {
    if (this.$store.getters._isMobile) {
      this.$router.replace("/mlogin");
    }
  },
  methods: {
    login(formLogin) {
      this.$refs[formLogin].validate(valid => {
        if (valid) {
          this.$store.dispatch("users/userLogin", {
            user_name: this.formLogin.userName,
            user_password: this.formLogin.password,
            router: this.$router
          });
        }
      });
    },
    register() {
      this.$router.push({ path: "/register" });
    }
  }
};
</script>
