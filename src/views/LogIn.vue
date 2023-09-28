<template>
    <v-container fluid class="background-container">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="8" md="6" lg="4">
                <v-card class="elevation-12 pa-5">
                    <form @submit.prevent="submitForm" ref="loginForm" novalidate>
                        <h2 class="text-center mb-5">Login</h2>
                        <v-text-field v-model="email" label="E-mail" required type="email" :error-messages="emailErrors"
                            :error="submitted && emailErrors.length > 0"></v-text-field>
                        <v-text-field v-model="password" label="Password" type="password" required
                            :error-messages="passwordErrors" :error="submitted && passwordErrors.length > 0"></v-text-field>
                        <div class="text-center">
                            <v-btn color="teal-darken-3" class="mr-4" type="submit">Login</v-btn>
                        </div>
                        <p class="text-center pt-5">
                            Don't have an account?
                            <router-link to="/signup">Sign Up</router-link>
                        </p>
                    </form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>

export default {
    data() {

        return {
            email: "",
            password: "",
            submitted: false, // Added to track form submission
        };
    },
    computed: {
        passwordErrors() {
            const errors = [];
            if (!this.password && this.submitted) {
                errors.push("Password is required");
            }
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.isValidEmail(this.email) && this.submitted) {
                errors.push("Invalid email format");
            }
            return errors;
        },
    },
    methods: {
        submitForm() {
            this.submitted = true;
            if (this.$refs.loginForm.checkValidity()) {
                // console.log("Form is valid. Logging in...");
                const loginData = {
                    email: this.email,
                    password: this.password,
                };
                this.$store.dispatch('userLogin', loginData)
                    // Console User Data
                    // console.log(userData)

                    .then(() => {
                        this.$router.push('/');
                    })
                    .catch((error) => {
                        console.error('Login failed:', error);
                    });
            } else {
                console.log("Form is invalid. Please correct the errors.");
            }
        },
        isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },
    },
};
</script>

  
<style scoped>
.elevation-12 {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    background-color: #fff;
    padding: 20px;
}

.background-container {
    background-image: url("");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 600px) {

    .elevation-12 {
        margin-top: 20vh;
    }

}



/* Style for invalid input fields */

.v-text-field.error--text {

    border-color: red;

}



/* Style for valid input fields */

.v-text-field.success--text {

    border-color: green;

}
</style>s