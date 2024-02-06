<script>
    import { Alert } from 'flowbite-svelte';
    import { APP_STATUS, appStatus } from '../store.ts'
    import StepUpload from './StepUpload.svelte'
    import StepLoading from './StepLoading.svelte'
    import StepChat from './StepChat.svelte';
  </script>

  {#if $appStatus === APP_STATUS.INIT }
  <StepUpload />

  {:else if $appStatus === APP_STATUS.LOADING }
  <StepLoading />

  {:else if $appStatus === APP_STATUS.ERROR}
  <Alert>
    <span class="font-medium">¡Ups! Algo malo pasó😨</span>
    Hay un error en la aplicación
  </Alert>

  {:else if $appStatus === APP_STATUS.CHAT_MODE}
  <StepChat />

  {:else}
  <Alert>
    <span class="font-medium">Acción no reconocida🤔</span>
    Este estado de la aplicación no está reconocido
  </Alert>

  {/if}