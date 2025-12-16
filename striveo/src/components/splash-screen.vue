<script lang="ts" setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goNext = () => {
  router.push('/login') 
}
</script>

<template>
  <ion-page>
    <ion-content fullscreen class="splash-container">
      <div class="splash-content">
        <!-- Logo -->
        <img src="@/assets/runner.svg" alt="Runner" class="logo" />

        <!-- App Name -->
        <h1 class="title">Striveo</h1>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Tagline -->
        <h4 class="tagline">Strive every day.</h4>
      </div>

      <!-- Button -->
      <div class="footer">
        <ion-button
          expand="block"
          fill="outline"
          shape="round"
          class="start-btn"
          @click="goNext"
        >
          Get Started
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.splash-container {
  --background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 24px;
}

.splash-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  text-align: center;
  height: 75%;
  justify-content: center;
}

.logo {
  margin-bottom: 20px;
}

.title {
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  letter-spacing: 0.5px;
  color: #000;
}

.divider {
  width: 80px;
  height: 1px;
  background-color: #000;
  margin: 12px 0 16px;
}

.tagline {
  font-size: 14px;
  color: #666;
}

.footer {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}

.start-btn {
  height: 52px;
  font-size: 16px;
  --border-width: 1.5px;
  --border-color: #000000; 
  color: #000000; 
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms; 
}

.start-btn:hover {
  color: #ffffff; 
  background-color: #000000; 
}
</style>
