<template>
  <div class="log-reg-form">
    <div class="login" v-if="state.login">
      <div class="logo">SimpleEnglish</div>
      <input
        type="text"
        v-model="login.username"
        class="username"
        placeholder="username"
      />
      <input
        type="password"
        v-model="login.password"
        class="password"
        placeholder="password"
      />
      <input
        class="login-btn"
        @keyup.enter="userLogin"
        @click="userLogin"
        type="submit"
        value="Sign In"
      />
      <input
        class="reg-btn"
        type="submit"
        value="Sign Up"
        @click="toReg"
      />
    </div>
    <div class="registration" v-if="state.registration">
      <div class="logo">SimpleEnglish</div>
      <input
        type="text"
        class="username"
        v-model="registration.username"
        placeholder="username"
      />
      <input
        type="password"
        v-model="registration.password"
        class="password"
        placeholder="password"
      />
      <input
        class="reg-btn"
        type="submit"
        value="Create User"
        @click="userRegistration"
      />
      <input
        class="login-btn"
        type="submit"
        value="To Sign In"
        @click="toLog"
      />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
      registration: {
        username: "",
        password: "",
      },
      state: {
        login: true,
        registration: false,
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });
        this.$toast.success(`${this.login.username} снова с нами!`)
        this.$router.push("/main");
      } catch (err) {
        console.log(err);
      }
    },
    async userRegistration() {
      try {
        let response = await this.$store.dispatch(
          "userRegistration",
          this.registration
        );
        this.$toast.success(`Пользователь ${this.registration.username} создан`)
        this.registration.username = "";
        this.registration.password = "";
        this.toLog();
      } catch (err) {
        
      }
    },
    toReg() {
      this.state.login = false;
      this.state.registration = true;
    },
    toLog() {
      this.state.login = true;
      this.state.registration = false;
    },
  },
};
</script>


<style lang="scss" scoped>
.log-reg-form {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login,
  .registration {
    width: 400px;
    height: 400px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 41px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      margin-top: 20px;
      margin-bottom: 40px;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #ababab;
    }
    .username,
    .password {
      outline: none;
      width: 350px;
      height: 50px;
      background: #ededed;
      border: 1px solid rgba(0, 0, 0, 0.04);
      box-sizing: border-box;
      box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      padding: 0 15px;
      margin-bottom: 20px;
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
      color: #616161;
      &::placeholder {
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        align-items: center;
        color: #919191;
      }
      &:focus {
        &::placeholder {
          opacity: 0;
        }
      }
    }
    .password {
      margin-bottom: 50px;
    }
    .reg-btn,
    .login-btn {
      outline: none;
      width: 350px;
      height: 50px;
      display: flex;
      justify-content: center;
      color: #ffffff;
      margin-bottom: 5px;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
    }
    .reg-btn {
      background: linear-gradient(267.9deg, #00ff94 0%, #00a3ff 100%);
      border: none;
      box-sizing: border-box;
      border-radius: 15px;
      cursor: pointer;
      &:hover {
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
    .login-btn {
      background: linear-gradient(267.9deg, #00E0FF 0%, #BD00FF 100%);
      border: none;
      box-sizing: border-box;
      border-radius: 15px;
      cursor: pointer;
      &:hover {
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  }
}
@media screen and (max-width: 768px) {
.log-reg-form {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login,
  .registration {
    width: 300px;
    height: 300px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 41px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      margin-top: 20px;
      margin-bottom: 20px;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #ababab;
    }
    .username,
    .password {
      outline: none;
      width: 270px;
      height: 40px;
      background: #ededed;
      border: 1px solid rgba(0, 0, 0, 0.04);
      box-sizing: border-box;
      box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      padding: 0 15px;
      margin-bottom: 10px;
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
      color: #616161;
      &::placeholder {
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        align-items: center;
        color: #919191;
      }
      &:focus {
        &::placeholder {
          opacity: 0;
        }
      }
    }
    .password {
      margin-bottom: 40px;
    }
    .reg-btn,
    .login-btn {
      outline: none;
      width: 270px;
      height: 40px;
      display: flex;
      justify-content: center;
      color: #ffffff;
      margin-bottom: 5px;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
    }
    .reg-btn {
      background: linear-gradient(267.9deg, #00ff94 0%, #00a3ff 100%);
      border: none;
      box-sizing: border-box;
      border-radius: 15px;
      cursor: pointer;
      &:hover {
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
    .login-btn {
      background: linear-gradient(267.9deg, #00E0FF 0%, #BD00FF 100%);
      border: none;
      box-sizing: border-box;
      border-radius: 15px;
      cursor: pointer;
      &:hover {
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  }
}
}
</style>