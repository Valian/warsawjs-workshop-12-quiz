<script>
  export default {
    render: function (createElement) {
      if (this.loading) {
        const spinner = createElement(
          'span',
          {attrs: {'class': 'fa fa-refresh fa-spin is-size-4'}})
        const spinnerWrapper = createElement(
          'div',
          {attrs: {'class': 'icon'}},
          [ spinner ])
        return createElement(
          'div',
          {attrs: {'class': 'has-text-centered has-text-grey-light'}},
          [ spinnerWrapper ]
        )
      } else {
        return this.$slots.default[0]
      }
    },
    props: {
      loading: {
        type: Boolean,
        required: true
      }
    }
  }
</script>
