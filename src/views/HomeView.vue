<script setup>
  import { computed, ref } from 'vue';
  import { useCounterStore } from '../stores/counter';
  const count = ref(0);
  const storeCounter = useCounterStore()
</script>

<template>
  <main>
    <p>{{storeCounter.count}}</p>
    <div>
      <button @click="storeCounter.decrese">-</button>
      <button @click="storeCounter.increment">+</button>
    </div>
    <hr/>
    <p>The Counter is a  : {{storeCounter.oddEven}}</p>

    <hr/>

    <input v-model="storeCounter.count" type="number"/>
  </main>
</template>
