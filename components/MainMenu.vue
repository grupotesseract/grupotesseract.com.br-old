<template>
  <div class="main-menu">
    <v-toolbar fixed app dark color="transparent">
      <!-- <v-avatar>
        <img
          src=""
          alt="Grupo Tesseract Logo"
        />
      </v-avatar>-->
      <!-- <img
        src=""
        alt="Grupo Tesseract Título"
        height="30px"
      />-->
      <v-spacer />
      <v-btn icon @click.stop="showMenu = !showMenu">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="showMenu" right temporary fixed dark>
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          v-scroll-to="item.to"
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
          to: '#welcome'
        },
        {
          title: 'Quem Somos',
          to: '#about-us'
        },
        {
          title: 'Projetos',
          to: '#projects'
        },
        {
          title: 'Contato',
          to: '#contact'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-toolbar {
  background-color : red
}
.main-menu {
  color: red;
  font-family: jaapokki-regular;
}

a.v-list__tile {
  color: magenta;
}

a.v-list__tile--active {
  color: green;
}
</style>
