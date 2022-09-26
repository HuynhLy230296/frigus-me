<template>
  <div class="wrap">
    <div class="service-listing table">
      <span class="common-text-title--common-color">Services</span>
      <div class="service-items">
        <service-item
          icon="palette"
          job-title="UI Design"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
        </service-item>
        <service-item
          icon="vector"
          job-title="UX Design"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          highlight="true"
        >
        </service-item>
        <service-item
          icon="panel"
          job-title="Interaction Design"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
        </service-item>
      </div>
    </div>
  </div>
</template>
<script>
import serviceItem from './tile/service-item.vue'
export default {
  components: { serviceItem },
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
}
</script>
