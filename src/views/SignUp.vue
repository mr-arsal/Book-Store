<template>
    <v-container fluid class="background-container">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="8" md="6" lg="4">
                <v-card class="elevation-12 pa-5">
                    <form @submit.prevent="submitForm" ref="signupForm" novalidate>

                        <h2 class="text-center mb-5">Welcome To Sign Up</h2>

                        <v-text-field v-model="name" label="Name" required :error-messages="nameErrors"
                            :error="submitted && nameErrors.length > 0"></v-text-field>

                        <v-text-field v-model="password" label="Password" type="password" required
                            pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).*$"
                            title="Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol."
                            :error-messages="passwordErrors" :error="submitted && passwordErrors.length > 0"></v-text-field>

                        <v-text-field v-model="email" label="E-mail" required type="email" :error-messages="emailErrors"
                            :error="submitted && emailErrors.length > 0"></v-text-field>
                        <div class="text-center">
                            <v-btn color="teal-darken-3" class="mr-4" type="submit">Submit</v-btn>
                        </div>
                        <p class="text-center pt-5">
                            Already have an account?
                            <router-link to="/login">Login</router-link>
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
            name: "",
            email: "",
            password: "",
            submitted: false,
        };
    },
    computed: {
        nameErrors() {
            return this.name.length < 6 && this.submitted
                ? ["Username must be at least 6 characters"]
                : [];
        },
        passwordErrors() {
            const errors = [];
            if (
                !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).*$/.test(
                    this.password
                ) &&
                this.submitted
            ) {
                errors.push(
                    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol."
                );
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
            if (this.$refs.signupForm.checkValidity()) {
                const userData = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                };
                this.$store.dispatch('registerUser', userData)
                    // Console User Data
                    // console.log(userData)

                    .then(() => {
                        this.$router.push('/login');
                    })
                    .catch((error) => {
                        console.error('Registration failed:', error);
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

/* Center the card vertically on small screens */

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
</style>