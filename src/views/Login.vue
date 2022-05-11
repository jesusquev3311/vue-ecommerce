<template>
    <div>
        <div
            class="container"
            style="padding-top: 10%"
        >
            <div class="row d-flex justify-content-center">
                <div class="col-5 text-left login-form-container">
                    <div class="d-flex justify-content-center">
                        <img
                            src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
                            width="150"
                            alt=""
                        >
                    </div>
                    <div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">
                                Email address
                                <input
                                    id="exampleInputEmail1"
                                    type="email"
                                    class="form-control"
                                    aria-describedby="emailHelp"
                                >
                                <small
                                    id="emailHelp"
                                    class="form-text text-muted"
                                >We'll never share your email with anyone else.</small>
                            </label>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">
                                Password
                                <input
                                    id="exampleInputPassword1"
                                    type="password"
                                    class="form-control"
                                >
                            </label>
                        </div>
                        <div class="form-group form-check">
                            <label
                                class="form-check-label"
                                for="exampleCheck1"
                            >
                                Check me out
                                <input
                                    id="exampleCheck1"
                                    type="checkbox"
                                    class="form-check-input"
                                >
                            </label>
                        </div>
                        <button
                            type="submit"
                            class="btn btn-primary btn-block"
                            @click="login()"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
    name: "LoginComponent",
    methods: {
        ...mapActions("account", ["login"]),
    },
};
</script>

<style scoped>
    .form-control {
    border-radius: 0%;
    height: 50px;
    }
    .login-form-container {
    padding: 20px;
    box-shadow: 0px 2px 5px 2px #888888;
    }
    .btn {
    border-radius: 0%;
    font-weight: bold;
    background: teal;
    border: teal;
    }
    .btn:hover {
    background: #00b4b4;
    }
    .btn:focus {
    background: teal;
    }
</style>
