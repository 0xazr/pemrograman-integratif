import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import Swal from "sweetalert2";

const API_URL = "http://localhost:3000";
export const useStyle = defineStore({
    id: "style",
    state: () => ({
        loading: false,
    }),
    actions: {
        stylingAmount(amount) {
            if(amount < 0) {
                return this.formatAmount(amount).toString().replace("-", "-Rp. ");
            } else {
                return "+Rp. " + this.formatAmount(amount);
            }
        },
        formatAmount(amount) {
            // Example: 1000000 -> 1.000.000
            return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
    }
});

export const useApp = defineStore({
    id: "logic",
    state: () => ({
        user: {},
        email: "",
        password: "",
    }),
    actions: {
        async login() {
            try {
                const response = await axios.post(`${API_URL}/api/login`, {
                    email: this.email,
                    password: this.password
                });

                if(response.status === 200) {
                    let token = response.data.token;
                    localStorage.setItem("access_token", token);
                    this.email = "";
                    this.password = "";
                    router.push("/");
                } else {
                    alert("Error logging in");
                }
    
            } catch (error) {
                console.log(error);
            }
        },
        async logout() {
            try {
                localStorage.removeItem("access_token");
                router.push("/login");
            } catch (error) {
                console.log(error);
            }
        },
        async isLoggedIn() {
            try {
                if(!localStorage.getItem("access_token")) {
                    router.push("/login");
                    return;
                }

                const response = await axios.get(`${API_URL}/api/user`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
                });

                if(response.status === 200) {
                    this.user = response.data.data;
                } else {
                    router.push("/login");
                }
            } catch (error) {
                console.log(error);
            }
        }
    } 
});

export const useStatistics = defineStore({
    id: "statistics",
    state: () => ({
        data: {
            total_income: 0,
            total_expense: 0,
            total_net_income: 0
        },
        loading: false,
    }),
    actions: {
        async getStatistics(transaction_data) {
            let total_income = 0;
            let total_expense = 0;
            let total_net_income = 0;
            transaction_data.forEach(transaction => {
                transaction.amount = parseInt(transaction.amount);
                if(transaction.amount > 0) {
                    total_income += transaction.amount;
                } else {
                    total_expense += Math.abs(transaction.amount);
                }
            });

            total_net_income = total_income - total_expense;

            this.data.total_income = total_income;
            this.data.total_expense = total_expense;
            this.data.total_net_income = total_net_income;
        }
    }
});

export const useTransactions = defineStore({
    id: "transactions",
    state: () => ({
        data: [],
        add_transaction: false,
        update_transaction: false,
        delete_transaction: null,
        form_data: {
            amount: 0,
            description: "",
            category: "",
            date: ""
        },
        loading: false,
    }),
    actions: {
        async getTransactions() {
            // get statistics using function from statistics store
            const useStatisticsStore = useStatistics();

            const response = await axios.get(`${API_URL}/api/transactions`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            });

            if(response.status === 200) {
                this.data = response.data.data.transactions;
                console.log(useStatisticsStore.getStatistics(this.data));
            }
        },
        async addTransaction() {
            this.add_transaction = true;
        },
        async cancelAddTransaction() {
            this.add_transaction = false;
        },
        async saveTransaction() {
            const response = await axios.put(`${API_URL}/api/transaction`, this.form_data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            });

            if(response.status === 200) {
                this.add_transaction = false;
                this.form_data = {
                    amount: 0,
                    description: "",
                    category: "",
                    date: ""
                };
                this.getTransactions();
                Swal.fire({
                    title: "Success!",
                    text: "Transaction added successfully",
                    icon: "success",
                    confirmButtonText: "OK"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Error adding transaction",
                    icon: "error",
                    confirmButtonText: "OK"
                });
            }
        },
        async editTransaction(id) {
            let transaction = this.data.find(transaction => transaction._id === id);
            console.log(transaction);
            this.form_data = transaction;
            this.form_data.date = new Date(this.form_data.date);
            this.update_transaction = true;
        },

        async updateTransaction() {
            const response = await axios.patch(`${API_URL}/api/transaction`, this.form_data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                },
            });

            if(response.status === 200) {
                this.update_transaction = false;
                this.form_data = {
                    id: "",
                    amount: 0,
                    description: "",
                    category: "",
                    date: ""
                };
                this.getTransactions();
                Swal.fire({
                    title: "Success!",
                    text: "Transaction updated successfully",
                    icon: "success",
                    confirmButtonText: "OK"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Error updating transaction",
                    icon: "error",
                    confirmButtonText: "OK"
                });
            }
        },

        async cancelUpdateTransaction() {
            this.update_transaction = false;
            this.form_data = {
                _id: "",
                amount: 0,
                description: "",
                category: "",
                date: ""
            };
        },
        async confirmDeleteTransaction(id) {
            this.delete_transaction = id;
        },
        async cancelDeleteTransaction() {
            this.delete_transaction = null;
        },
        async deleteTransaction() {
            const response = await axios.delete(`${API_URL}/api/transaction`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                },
                data: {
                    id: this.delete_transaction
                }
            });

            this.delete_transaction = null;

            if(response.status === 200) {
                this.getTransactions();
                Swal.fire({
                    title: "Success!",
                    text: "Transaction deleted successfully",
                    icon: "success",
                    confirmButtonText: "OK"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Error deleting transaction",
                    icon: "error",
                    confirmButtonText: "OK"
                });
            }
        }
    }
});