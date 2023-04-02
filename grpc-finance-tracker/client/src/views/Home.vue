<template>
  <div>
    <!-- Navigation -->
    <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fill-rule="evenodd"
            d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.707 13.707l-1.414 1.414-4.293-4.293-4.293 4.293-1.414-1.414 4.293-4.293-4.293-4.293 1.414-1.414 4.293 4.293 4.293-4.293 1.414 1.414-4.293 4.293z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="font-semibold text-xl tracking-tight"
          >Finance Tracker</span
        >
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto cursor-pointer">
        <div class="text-sm lg:flex-grow"></div>
        <div @click.prevent="App.logout">
          <a
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-red-500 hover:text-red-500 hover:bg -red-100 mt-4 lg:mt-0"
            >Logout</a
          >
        </div>
      </div>
    </nav>
    <!-- Page Content -->
    <div class="container mx-auto mt-5">
      <div class="px-4">
        <h1 class="font-bold text-xl mb-4">Welcome, {{ App.user.name }}</h1>
      </div>
      <div class="grid grid-cols-3">
        <div class="w-full px-4 mb-8">
          <div class="bg-white shadow p-6 rounded-lg">
            <div class="text-gray-700 font-semibold mb-4">Income</div>
            <div class="text-3xl font-bold text-gray-900 mb-2 text-green-500">Rp. {{Style.formatAmount(Statistics.data.total_income)}}</div>
            <!-- <div class="text-sm text-gray-600 flex items-center">
              <svg
                class="h-6 w-6 fill-current text-green-500 mr-2"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fill-rule="evenodd"
                  d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.707 13.707l-1.414 1.414-4.293-4.293-4.293 4.293-1.414-1.414 4.293-4.293-4.293-4.293 1.414-1.414 4.293 4.293 4.293-4.293 1.414 1.414-4.293 4.293z"
                  clip-rule="evenodd"
                />
              </svg>
              + $500 from last month
            </div> -->
          </div>
        </div>
        <div class="w-full px-4 mb-8">
          <div class="bg-white shadow p-6 rounded-lg">
            <div class="text-gray-700 font-semibold mb-4">Expenses</div>
            <div class="text-3xl font-bold text-gray-900 mb-2 text-red-500">Rp. {{Style.formatAmount(Statistics.data.total_expense)}}</div>
            <!-- <div class="text-sm text-gray-600 flex items-center">
              <svg
                class="h-6 w-6 fill-current text-red-500 mr-2"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm-.707 13.707l-4-4 1.414-1.414L10 10.586l2.293-2.293 1.414 1.414-4 4a.996.996 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              - $500 from last month
            </div> -->
          </div>
        </div>
        <div class="w-full px-4 mb-8">
          <div class="bg-white shadow p-6 rounded-lg">
            <div class="text-gray-700 font-semibold mb-4">Net Income</div>
            <div class="text-3xl font-bold text-gray-900 mb-2">Rp. {{Style.formatAmount(Statistics.data.total_net_income)}}</div>
            <!-- <div class="text-sm text-gray-600 flex items-center">
              <svg
                class="h-6 w-6 fill-current text-green-500 mr-2"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fill-rule="evenodd"
                  d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.707 13.707l-1.414 1.414-4.293-4.293-4.293 4.293-1.414-1.414 4.293-4.293-4.293-4.293 1.414-1.414 4.293 4.293 4.293-4.293 1.414 1.414-4.293 4.293z"
                  clip-rule="evenodd"
                />
              </svg>
              Total income - Total expenses
            </div> -->
          </div>
        </div>
      </div>
      <div class="bg-white shadow rounded-lg p-6 mt-8">
        <div class="flex justify-between items-center mb-4">
          <div class="text-gray-700 font-semibold">Transactions</div>
          <button @click="Transactions.addTransaction" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
            Add Transaction
          </button>
        </div>
        <table class="w-full">
          <thead>
            <tr class="text-gray-600 text-sm border-b">
              <th class="py-2 text-left">Date</th>
              <th class="py-2 text-left">Description</th>
              <th class="py-2 text-left">Category</th>
              <th class="py-2 text-right">Amount</th>
              <th class="py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm">
            <tr v-for="data in Transactions.data" class="border-b">
              <td class="py-2">{{new Date(data.date).toLocaleDateString("en-US", {month: "2-digit", day: "2-digit", year: "numeric"})}}</td>
              <td class="py-2">{{data.description}}</td>
              <td class="py-2">{{data.category}}</td>
              <td v-if="data.amount >= 0" class="py-2 text-right text-green-500">{{Style.stylingAmount(data.amount)}}</td>
              <td v-else class="py-2 text-right text-green-500 text-red-500">{{Style.stylingAmount(data.amount)}}</td>
              <td class="py-2 text-right space-x-1">
                <button @click.prevent="Transactions.editTransaction(data._id)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                  
                </button>
                <button @click.prevent="Transactions.confirmDeleteTransaction(data._id)" class="text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>                  
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <AddTransaction v-if="Transactions.add_transaction"/>
    <UpdateTransaction v-if="Transactions.update_transaction"/>
    <ConfirmDelete v-if="Transactions.delete_transaction"/>
  </div>
</template>
<script>
import { useApp, useStyle, useStatistics, useTransactions } from "../stores/index.js";
import AddTransaction from "../components/AddTransaction.vue";
import UpdateTransaction from "../components/UpdateTransaction.vue";
import ConfirmDelete from "../components/ConfirmDelete.vue";

export default {
  name: "Home",
  setup() {
    const App = useApp();
    const Style = useStyle();
    const Transactions = useTransactions();
    const Statistics = useStatistics();
    return {
      App,
      Style,
      Transactions,
      Statistics,
    };
  },
  created() {
    this.Transactions.getTransactions();
    this.Statistics.getStatistics(this.Transactions.data);
  },
  components: {
    AddTransaction,
    UpdateTransaction,
    ConfirmDelete,
  },
};
</script>