<template>
  <div class="login">
    <div class="login-header">
      <div class="container">
        <div class="logo">
          <a href="/#/index">
            <img src="/imgs/login-logo.png" alt />
          </a>
        </div>
      </div>
    </div>

    <div class="login-middle">
      <div class="wrap">
        <div class="container">
          <div class="form">
            <div class="nav-tabs">
              <a href="javascript:;" :class="{active:isActive == 1}" @click="isActive=1">账号登录</a>
              <span class="line"></span>
              <a href="javascript:;" :class="{active:isActive == 2}" @click="isActive=2">扫码登录</a>
            </div>

            <div class="nav-box-login">
              <div>
                <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username" />
              </div>
              <div>
                <input type="password" placeholder="密码" v-model="password" />
              </div>
              <button @click="login">登录</button>
            </div>

            <div class="nav-box-others">
              <div class="switch">
                <a href="javascript:;" @click="register">手机短信登录/注册</a>
              </div>
              <div class="account">
                <a href="javascript:;">立即注册</a>
                <a href="javascript:;">忘记密码</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="login-footer">
      <div class="lang">
        <span>
          <a href="javascript:;" class="font-active">简体</a>
        </span>
        <span>
          <a href="javascript:;">繁体</a>
        </span>
        <span>
          <a href="javascript:;">English</a>
        </span>
        <span>
          <a href="javascript:;">常见问题</a>
        </span>
        <span>
          <a href="javascript:;">隐私政策</a>
        </span>
      </div>
      <div class="copyright">
        Copyright ©2020
        <span>www.xxxxx.com</span> All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      isActive: 1,
      username: "",
      password: "",
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    login() {
      let { username, password } = this;

      this.axios
        .post("/user/login", {
          username,
          password,
        })
        .then((res) => {
          this.$cookie.set("userId", res.id, { expires: "1M" });
          console.log(res.id);
          this.$store.dispatch("setUserInfo", res);

          this.$router.push("/index");
        })
        .catch(() => {});
    },
    register() {
      let { username, password } = this;
      this.axios
        .post("/user/register", {
          username,
          password,
          email: "xxxx" + Math.floor(Math.random() * 10) + "@qq.com",
        })
        .then(() => {
          alert("注册成功");
        });
    },
    checkLogin() {
      if (this.$store.state.userInfo != "") {
        this.$router.push("/index");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
.font-active {
  color: $colorB !important;
}
.login {
  .login-header {
    margin-bottom: 30px;
  }

  .login-middle {
    height: 588px;
    .wrap {
      position: relative;

      width: 100%;
      height: 100%;
      background: url(/imgs/login-bg.jpg) no-repeat 50%;
      background-size: cover;
      .container {
        height: 588px;
        .form {
          width: 410px;
          height: 530px;
          background-color: $colorG;
          position: absolute;
          bottom: 29px;
          right: 0px;
          .nav-tabs {
            padding: 27px 60px 24px;

            .line {
              display: inline-block;
              margin: 2px 35px 0 42px;
              border: 1px solid #e0e0e0;
              background: #e0e0e0;
              width: 1px;
              height: $fontE;
              vertical-align: center;
            }
            a {
              display: inline-block;
              color: #666;
              font-size: $fontE;
              vertical-align: center;
            }
            .active {
              color: $colorA;
            }
          }

          .nav-box-login {
            margin-top: 10px;
            div {
              border: 1px solid rgb(195, 195, 195);
              margin: 20px 20px 20px 20px;
              input {
                outline: none;
                padding-left: 10px;
                border: none;
                height: 60px;
                line-height: 60px;
              }
            }
            button {
              margin: 0 auto;
              display: block;
              background-color: $colorA;
              color: $colorG;
              line-height: 50px;
              height: 50px;
              font-size: $fontI;
              cursor: pointer;
              width: 80%;
              border: none;
              margin: 0 auto;
            }
          }
          .nav-box-others {
            margin-top: 10px;
            font-size: $fontJ;
            text-align: center;
            .switch {
              margin-bottom: 20px;
              a {
                color: $colorA;
              }
            }
            .account {
              a {
                color: $colorD;
                &:first-child:after {
                  content: "|";
                  margin: 0 3px;
                }
              }
            }
          }
        }
      }
    }
  }

  .login-footer {
    height: 180px;
    margin-top: 100px;
    background-color: $colorG;
    text-align: center;
    font-size: $fontJ;
    color: #757575;
    .lang {
      margin: 0 auto;
      width: 100%;
      height: 20px;
      margin-bottom: 10px;
      span {
        display: inline-block;
        a {
          color: #757575;
        }
        &:before {
          content: "|";
          margin: 0 8px;
        }
        &:first-child:before {
          display: none;
        }
      }
    }
    .copyright {
      span {
        color: $colorA;
      }
    }
  }
}
</style>