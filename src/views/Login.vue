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
                            <label for="exampleInputEmail1">Email address</label>
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
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input
                                id="exampleInputPassword1"
                                type="password"
                                class="form-control"
                            >
                        </div>
                        <div class="form-group form-check">
                            <input
                                id="exampleCheck1"
                                type="checkbox"
                                class="form-check-input"
                            >
                            <label
                                class="form-check-label"
                                for="exampleCheck1"
                            >Check me out</label>
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
