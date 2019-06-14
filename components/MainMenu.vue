<template>
  <div class="main-menu">
    <v-toolbar fixed app dark>
      <!-- <v-avatar>
        <img
          src=""
          alt="Grupo Tesseract Logo"
        />
      </v-avatar> -->
      <!-- <img
        src=""
        alt="Grupo Tesseract Título"
        height="30px"
      /> -->
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="showMenu = !showMenu">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="showMenu" right temporary fixed dark>
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      items: [
        {
          title: 'Home',
          to: '/',
        },
        {
          title: 'Quem Somos',
          to: '#about-us',
        },
        {
          title: 'Projetos',
          to: '#projects',
        },
        {
          title: 'Contato',
          to: '#contact',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.main-menu {
  color: red;
  font-family: jaapokki-regular;
}
</style>
