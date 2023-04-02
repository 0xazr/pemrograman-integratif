<template>
  <div class="min-h-screen flex items-center justify-center h-full w-full sticky bottom-0 top-0 left-0 right-0">
    <div class="max-w-md w-full">
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-xl font-bold mb-4">Add Transaction</h2>
        <form @submit.prevent="Transactions.addTransaction" class="grid grid-cols-2 gap-4">
          <div>
            <label class="block mb-2">
              <span class="text-gray-700 font-bold">Description</span>
              <input
                v-model="Transactions.form_data.description"
                type="text"
                name="description"
                class="form-input mt-1 block w-full"
                required
              />
            </label>
            <label class="block mb-2">
              <span class="text-gray-700 font-bold">Category</span>
              <input
                v-model="Transactions.form_data.category"
                type="text"
                name="category"
                class="form-input mt-1 block w-full"
                required
              />
            </label>
          </div>
          <div>
            <label class="block mb-2">
              <span class="text-gray-700 font-bold">Amount</span>
              <input
                v-model="Transactions.form_data.amount"
                type="number"
                name="amount"
                class="form-input mt-1 block w-full"
                required
              />
            </label>
            <label class="block mb-2">
              <span class="text-gray-700 font-bold">Date</span>
              <input
                v-model="Transactions.form_data.date"
                type="date"
                name="date"
                class="form-input mt-1 block w-full"
                required
              />
            </label>
          </div>
          <div class="col-span-2 text-right">
            <!-- Cancel button -->
            <button
              type="button"
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                @click="Transactions.cancelAddTransaction"
            >
                Cancel
            </button>
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              @click="Transactions.saveTransaction"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { useTransactions } from "../stores/index.js";

export default {
  name: "AddTransaction",
  setup() {
    const Transactions = useTransactions();
    return {
      Transactions,
    };
  },
};
</script>