<template>
  <div>
    <h1>Manual Brews</h1>
    <p>
      Just some info on different manual brewing methods.
      </p>
      <h2 id="aeropress">Aeropress</h2>
      <p>Some Aerporess info.</p>

      <h3 id="brew-time">Brew time</h3>
      <p>Info on brew time and all that goodness.</p>

            <h3 id="grind-size">Grind size</h3>
      <p>Grind size can make or break your cup.</p>

                  <h3 id="water-temp">Water temperature</h3>
      <p>Info on how much you should heat your water.</p>

            <h3 id="method">Method</h3>
      <p>To mix or not to mix is the question and even then, swirl or stir?</p>

            <h2 id="v60">V60</h2>
      <p>Some V60 info.</p>
            <h2 id="espresso">Espresso</h2>
      <p>Some espresso info.</p>
            <h2 id="chemex">Aeropress</h2>
      <p>Some Chemex info.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
