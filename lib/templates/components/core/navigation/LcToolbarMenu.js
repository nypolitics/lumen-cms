export default {
  name: 'LcToolbarMenu',
  // functional: true,
  render: function (h) {
    const content = this.content
    let childs = []
    Object.keys(content).forEach(navigation => {
      const root = content[navigation]
      if (Array.isArray(root)) {
        childs = root.map((item, i) => h('lc-toolbar-menu-item', {props: {item, i, level: 0}}))
      }
    })
    return h('v-layout', {props: {row: true}, attrs: {'justify-end': true}}, childs)
  },
  props: {
    content: {
      type: Object,
      'default': () => {
      }
    }
  }
}