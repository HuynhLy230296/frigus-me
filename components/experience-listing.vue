<template>
  <div class="wrap">
    <div class="experience-listing table">
      <span class="common-text-title--common-color">Experience</span>
      <div class="experience-items">
        <experience-item
          :img-src="require('/assets/icon/medal-reward.svg')"
          during-time="Jan 2007 - Feb 2009"
          job-title="Junior UX Designer"
          customer="WEBEX"
        >
        </experience-item>
        <experience-item
          :img-src="require('/assets/icon/medal-reward.svg')"
          during-time="Mar 2009 - Aug 2014"
          job-title="UX & UI Designer"
          customer="AUGMEDIX"
        >
        </experience-item>
        <experience-item
          :img-src="require('/assets/icon/medal-reward.svg')"
          during-time="Sep 2014 - Present"
          job-title="Senior UX Designer"
          customer="THEMEFISHER"
        >
        </experience-item>
      </div>
    </div>
  </div>
</template>
<script>
import experienceItem from './tile/experience-item.vue'
export default {
  components: { experienceItem },
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
}
</script>
