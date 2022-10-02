<template>
  <div class="table__col">
    <div class="service__item" :class="highlight ? 'highlight' : ''">
      <i
        :class="
          (icon ? `icon icon__${icon}` : '') + (highlight ? ' white' : ' black')
        "
      ></i>
      <!-- <img class="service__icon" :src="imgSrc" :alt="jobTitle"/> -->
      <span class="service__title common-text-color">{{ jobTitle }}</span>
      <span class="service__description">{{ description }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    highlight: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    jobTitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
}
</script>
