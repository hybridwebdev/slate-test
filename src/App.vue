<template>
  <Slate :value="JSON.stringify(initialValue)">
    <Editable placeholder="Enter some plain text..."></Editable>
  </Slate>
</template>

<script>
import { Slate, Editable } from "slate-vue";

// this value is for editor
const initialValue = [
  {
    children: [{ text: "This is editable plain text, just like a <textarea>!" }]
  }
];
export default {
  name: "index",
  components: {
    Slate,
    Editable
  },
  data() {
    return {
      initialValue
    };
  }
};
</script>
