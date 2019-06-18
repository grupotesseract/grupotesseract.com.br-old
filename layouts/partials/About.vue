<template>
  <v-layout class="about" row wrap justify-center>
    <v-flex xs12>
      <div class="title-line" :style="{ width: bottomTitle + 'px' }"></div>
    </v-flex>
    <v-flex xs12 sm12 md4 lg3 xl2>
      <h1 v-waypoint="{ active: true, callback: logOne }">QUEM</h1>
      <h2 ref="bottomTitleRef">SOMOS</h2>
    </v-flex>
    <v-flex xs12 sm12 md6 lg5 xl4>
      <p>
        Grupo de prossionais da área de TI que acredita na IMPORTÂNCIA DA
        TRANSPARÊNCIA E DA CULTURA COLABORATIVA em seus processos. Oferecemos
        serviços dos mais variados tipos, como: desenvolvimento de sites,
        aplicativos e soluções de infraestrutura.
      </p>
      <button style="color: white;" @click="getPos()">Button</button>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      bottomTitle: 0
    }
  },
  mounted() {
    this.bottomTitle =
      this.$refs.bottomTitleRef.getBoundingClientRect().left + 248
  },
  methods: {
    logOne({ el, going, direction }) {
      el.classList.toggle('active', this.$waypointMap.GOING_IN === going)
    }
  }
}
</script>

<style lang="stylus" scoped>
.about {
  padding-bottom: 8rem;

  .title-line {
    height: 2px;
    background-color: $blue-1;
    margin-bottom: 2rem;
  }

  h1, h2, p {
    @media screen and (max-width: 599px) {
      padding: 0 1rem;
    }

    @media (max-width: 959px) and (min-width: 600px) {
      padding: 0 2rem;
    }
  }

  h1, h2 {
    line-height: 1;
    font-weight: 100;
  }

  h1 {
    font-size: 6rem;
    margin-left: 3rem;
    color: $black-1;
    -webkit-text-fill-color: $black-1;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: $white-1;
  }

  h2 {
    color: $white-1;
    margin-top: 0rem;
    font-size: 5rem;
  }

  p {
    color: $white-1;
    margin-top: 4rem;

    @media (max-width: 959px) {
      margin-top: 2rem;
    }

    @media (max-width: 959px) and (min-width: 600px) {
      padding-right: 6rem;
    }

    font-size: 1.3rem;
    font-weight: 100;
    line-height: 1.3;
  }
}

.active {
  border: 2px dashed white;
}
</style>
