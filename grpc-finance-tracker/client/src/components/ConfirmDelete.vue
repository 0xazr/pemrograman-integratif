<template>
    <div class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <p class="text-lg mb-4">Are you sure you want to delete this item?</p>
          <div class="flex justify-end">
            <button @click.prevent="Transactions.cancelDeleteTransaction()" class="bg-gray-400 text-white px-4 py-2 rounded mr-4">
              Cancel
            </button>
            <button @click="Transactions.deleteTransaction()" class="bg-red-500 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
</template>
<script>
  import { useTransactions } from "../stores/index.js";
  
  export default {
    name: "Confirm Delete",
    setup() {
      const Transactions = useTransactions();
      return {
        Transactions,
      };
    },
  };
</script>