<template>
  <v-card
    class="pa-12"
    color="indigo darken-2"
    flat
  >
    <v-card
      elevation="12"
      width="256"
    >
      <v-navigation-drawer
        floating
        permanent
      >
        <v-list
          dense
          rounded
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :disabled="item.disabled ? true : false"
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            title: 'New Todo',
            icon: 'mdi-plus',
            link: '/todo/add',
            accent: true
          },
          {
            title: 'Todos',
            icon: 'mdi-format-list-bulleted-type',
            link: '/'
          },
          {
            title: 'Calendar',
            icon: 'mdi-calendar',
            disabled: true,
            link: '/calendar'
          },
        ],
      }
    },
  }
</script>

<style>
.v-card {
    width: 240px;
}
.v-list-item__content {
    text-align: center;
}
.v-icon {
  fill: currentColor
}
</style>