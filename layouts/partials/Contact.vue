<template>
  <div class="contact">
    <v-layout>
      <v-flex xs12 md6 class="title">
        <v-layout align-end justify-center column fill-height>
          <h3>QUER CRIAR</h3>
          <h2>UM PROJETO</h2>
          <h3>COM A GENTE?</h3>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.contact {
  padding: 4rem 0rem;
  background-color: $blue-2;

  .title {
    height: 500px;
    border-right: 3px solid $gray-1;

    h2, h3 {
      margin-right: 3rem;
    }

    h3 {
      color: $black-1;
    }

    h2 {
      -webkit-text-fill-color: $blue-2;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: $black-1;
    }
  }
}
</style>
