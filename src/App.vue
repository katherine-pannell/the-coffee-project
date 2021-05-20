<template>
  <div>
    <Header title="The Coffee Project"/>
    <Topnav />
    <Sidebar />
    <Rightnav />
    <div class="main">
      <img alt="Vue logo" src="./assets/coffee.jpg">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Topnav from './components/Topnav.vue'
import Rightnav from './components/Rightnav.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, Header, Sidebar, Topnav, Rightnav,
  },
  data() {
    return {
      tasks: []
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Task 1',
        day: 'all day errday',
        reminder: true,
      },
      {
        id: 2,
        text: 'Task 2',
        day: 'all day errday',
        reminder: true,
      },
      {
        id: 3,
        text: 'Task 3',
        day: 'all day errday',
        reminder: false,
      }
    ]
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
max-width: 100%;
margin-top: 0px;
overflow: auto;
height: 150px;
border: none;
padding: 0px;
border-radius: 2px;
background: #be9b7bbb;
}

.main {
  text-align: center;
  padding-top: 10px;
}

.title {
  text-align: center;
  margin-top: 65px;
  color: #98694F;
}

.sidenav {
  height: auto; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background: #be9b7bbb; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 0px;
  margin-top: 220px;
  margin-left: 8px;
  padding-bottom: 100px;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #66462F;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Add a black background color to the top navigation */
.topnav {
  background-color: #fff;
  overflow: hidden;
  padding-top: 2px;
  margin-left: 25%;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #98694F;
  text-align: center;
  padding: 14px 14px;
  text-decoration: none;
  font-size: 25px;
}
/* Change the color of links on hover */
.topnav a:hover {
  background-color: #66462F;
  color: #fff;
}
.rightnav {
  height: auto; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  background: #be9b7bbb; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 0px;
  margin-top: 220px;
  margin-left: 8px;
  padding-bottom: 100px;
}
.rightnav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #363636;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.rightnav a:hover {
  color: #f1f1f1;
}
</style>
