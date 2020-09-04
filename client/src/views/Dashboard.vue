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
            link: '/todos'
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
    margin-left: 24px;
    margin-top: 40px;
    width: 240px;
}
.v-list-item__content {
    text-align: center;
}
.v-icon {
  fill: currentColor
}
</style>