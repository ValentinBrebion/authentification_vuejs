<script setup>
import useAuth from '../composables/useAuth'
const { login, loginForm } = useAuth()
</script>
<template>
        <form class="formConnexion" @submit.prevent="login" method="POST">
        <h2>Connexion</h2>
        <input type="text" placeholder="Identifiant" v-model="loginForm.username">
        <input type="password" placeholder="Mot de passe" v-model="loginForm.password">
        <input type="submit" value="Se connecter">
    </form>
</template>
<style scoped>
.formConnexion {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap:1rem;
    max-width: 10em;
}
</style>