import { defineComponent } from "vue";
import "@styles/index.css";
export default defineComponent({
  setup() {
    return () => {
      return <div class="word">Hello Vue3 Jsx</div>;
    };
  },
});
