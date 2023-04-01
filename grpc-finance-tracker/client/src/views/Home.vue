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
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 3a3 3 0 013-3h14a3 3 0 013 3v1H0V3zm0 8h20v1a3 3 0 01-3 3H3a3 3 0 01-3-3v-1z"
            />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow"></div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg -blue-100 mt-4 lg:mt-0"
            >Sign In</a
          >
        </div>
      </div>
    </nav>
    <!-- Page Content -->
    <div class="container mx-auto mt-8">
      <div class="grid grid-cols-3">
        <div class="w-full px-4 mb-8">
          <div class="bg-white shadow p-6 rounded-lg">
            <div class="text-gray-700 font-semibold mb-4">Income</div>
            <div class="text-3xl font-bold text-gray-900 mb-2">$5,000</div>
            <div class="text-sm text-gray-600 flex items-center">
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
            </div>
          </div>
        </div>
        <div class="w-full px-4 mb-8">
          <div class="bg-white shadow p-6 rounded-lg">
            <div class="text-gray-700 font-semibold mb-4">Expenses</div>
            <div class="text-3xl font-bold text-gray-900 mb-2">$2,500</div>
            <div class="text-sm text-gray-600 flex items-center">
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
            </div>
          </div>
        </div>
        <div class="w-full px-4 mb-8">
          <div class="bg-white shadow p-6 rounded-lg">
            <div class="text-gray-700 font-semibold mb-4">Net Income</div>
            <div class="text-3xl font-bold text-gray-900 mb-2">$2,500</div>
            <div class="text-sm text-gray-600 flex items-center">
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
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white shadow rounded-lg p-6 mt-8">
        <div class="text-gray-700 font-semibold mb-4">Transactions</div>
        <table class="w-full">
          <thead>
            <tr class="text-gray-600 text-sm border-b">
              <th class="py-2 text-left">Date</th>
              <th class="py-2 text-left">Description</th>
              <th class="py-2 text-left">Category</th>
              <th class="py-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm">
            <tr class="border-b">
              <td class="py-2">03/28/2023</td>
              <td class="py-2">Groceries</td>
              <td class="py-2">Food</td>
              <td class="py-2 text-right">$100</td>
            </tr>
            <tr class="border-b">
              <td class="py-2">03/27/2023</td>
              <td class="py-2">Gas</td>
              <td class="py-2">Transportation</td>
              <td class="py-2 text-right">$50</td>
            </tr>
            <tr class="border-b">
              <td class="py-2">03/26/2023</td>
              <td class="py-2">Netflix subscription</td>
              <td class="py-2">Entertainment</td>
              <td class="py-2 text-right">$15</td>
            </tr>
            <tr class="border-b">
              <td class="py-2">03/25/2023</td>
              <td class="py-2">Salary</td>
              <td class="py-2">Income</td>
              <td class="py-2 text-right">$5,000</td>
            </tr>
            <tr class="border-b">
              <td class="py-2">03/24/2023</td>
              <td class="py-2">Rent</td>
              <td class="py-2">Housing</td>
              <td class="py-2 text-right">-$1,500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>