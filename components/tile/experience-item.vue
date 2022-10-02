<template>
  <div class="table__col">
    <div class="experience__item">
      <img class="experience__icon" :src="imgSrc" :alt="jobTitle" />
      <span class="experience__time">{{ duringTime }}</span>
      <span class="experience__title common-text-color">{{ jobTitle }}</span>
      <span class="experience__customer">{{ customer }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
    duringTime: {
      type: String,
      default: '',
    },
    jobTitle: {
      type: String,
      default: '',
    },
    customer: {
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
