<template>
  <div>
    <v-toolbar fixed app dark flat color="transparent">
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

    <v-navigation-drawer
      v-model="showMenu"
      class="navigation"
      right
      temporary
      fixed
    >
      <v-list class="main-menu">
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          v-scroll-to="item.to"
          class="item-menu"
          active-class="item-menu-active"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-content>
            <v-list-tile-title
              class="title-menu"
              v-text="item.title"
            ></v-list-tile-title>
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
      showMenu: null,
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
.title-menu {
  text-align: right;
  width: auto;
  overflow: visible;
}
.title-menu::before {
  content: '';
  width: 0;
  height: 2px;
  display: block;
  position: absolute;
  right: 115%;
  top: 40%;
  background-color: $blue-1;
  transition: ease all 0.5s;
}

aside.navigation {
  background-color: transparent;
  box-shadow: none;
  height: auto !important;
  margin-top: 4em !important;
  padding-right: 1em;
}

.main-menu {
  color: red;
  font-family: jaapokki-regular;
}

.item-menu {
  color: white;
  transition: ease 0.3s all;
}

.item-menu:hover {
  color: $blue-1;
  .title-menu::before {
    width: 2em;
  }
}

.item-menu > a {
  height: 0 !important;
}

.main-menu:hover .item-menu a {
  height: 100%;
}

.item-menu-active div{
  color: $blue-1;
}
</style>
