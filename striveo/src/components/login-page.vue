<script lang="ts" setup>
    import { IonPage, IonContent, IonButton } from '@ionic/vue'
</script>
<template>
<ion-page>
    <ion-content fullscreen class="login-container">
        <!-- Title and Tagline -->
        <div class="title-container">
            <h1 class="title">Striveo</h1>
            <p class="tagline">Strive every day.</p>
        </div>

        <!-- Authentication Section -->
         <div class="login-labels">
            <h2 class="login-title">Sign in to continue</h2>
            <p class="login-subtitle">Choose your preferred method</p>

            <!-- Google authentication button -->
             <ion-button expand="block" fill="outline" shape="round" class="google-btn">
                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="currentColor"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="currentColor"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="currentColor"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="currentColor"
              />
            </svg>
                <span>Continue with Google</span>
                </ion-button>
         </div>

    </ion-content>
</ion-page>
</template>
<style scoped>
.login-container {
   --background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 24px;
}

.title-container {
    display: flex; 
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    background-color: #ffffff; 
    margin-top: 80px;
}

.title {
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  letter-spacing: 0.5px;
  color: #000;
}

.tagline {
  font-size: 14px;
  color: #666;
}


</style>