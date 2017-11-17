<template>
  <div class="modal" :class="isOpen && 'is-active'">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <slot name="title">
            Modal title
          </slot>
        </p>
        <button class="delete" type="button" @click="$emit('close')" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <slot name="body"></slot>
      </section>
      <footer class="modal-card-foot">
        <slot name="footer"></slot>
        <button class="button" type="button" @click="$emit('close')">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['isOpen']
  }
</script>
