<script>
    import { Spinner, Button } from 'flowbite-svelte';
  </script>
  
  <div class="flex flex-wrap items-center gap-2 justify-center">
    <Button outline color="dark">
      <Spinner class="me-3" size="4" />
      Loading ...
    </Button>
  </div>