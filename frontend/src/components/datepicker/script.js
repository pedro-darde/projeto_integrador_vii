import moment from "moment";
export default {
  props: {
    value: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menu: false,
      date: this.value,
      modal: false,
      dateFormatted: moment(new Date()).format("DD/MM/YYYY"),
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format("DD/MM/YYYY");
    },
  },

  watch: {
    date(value) {
      this.$emit("input", value);
      this.dateFormatted = this.formatDate(this.date);
    },
  },
};
