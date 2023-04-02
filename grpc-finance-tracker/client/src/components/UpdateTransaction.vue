<template>
    <div class="min-h-screen flex items-center justify-center h-full w-full sticky bottom-0 top-0 left-0 right-0">
      <div class="max-w-md w-full">
        <div class="bg-white shadow-lg rounded-lg p-6">
          <h2 class="text-xl font-bold mb-4">Add Transaction</h2>
          <form class="grid grid-cols-2 gap-4">
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
                  :value="Transactions.form_data.date && new Date(Transactions.form_data.date.getTime()-(Transactions.form_data.date.getTimezoneOffset()*60*1000)).toISOString().split('T')[0]"
                  @input="Transactions.form_data.date = $event.target.valueAsDate"
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
                  @click="Transactions.cancelUpdateTransaction"
              >
                  Cancel
              </button>
              <button
                type="button"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                @click="Transactions.updateTransaction"
              >
                Update
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
    name: "UpdateTransaction",
    setup() {
      const Transactions = useTransactions();
      return {
        Transactions,
      };
    },
  };
  </script>