<template>
  <div
    class="h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"
  >
    <div
      class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
    >
      <div class="flex flex-col w-full md:w-1/2 p-4">
        <div class="flex flex-col flex-grow">
          <h2 class="text-4xl text-center font-bold text-gray-800 py-4">
            Login
          </h2>
          <form class="flex flex-col pt-3 md:pt-0">
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg font-semibold text-gray-600"
                >Email</label
              >
              <input
                v-model="App.email"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                class="form-input mt-2 py-2 px-3 rounded-lg border-2 border-gray-200"
              />
            </div>
            <div class="flex flex-col pt-4 mb-4">
              <label for="password" class="text-lg font-semibold text-gray-600"
                >Password</label
              >
              <input
              v-model="App.password"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                class="form-input mt-2 py-2 px-3 rounded-lg border-2 border-gray-200"
              />
            </div>
            <button
                @click.prevent="App.login"
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div
        class="hidden md:block md:w-1/2 rounded-r-lg"
        style="
          background-image: url('https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center center;
        "
      ></div>
    </div>
  </div>
</template>
<script>
import { useApp } from "../stores/index.js";

export default {
  name: "Login",
  setup() {
    const App = useApp();
    return {
      App,
    };
  }
};
</script>