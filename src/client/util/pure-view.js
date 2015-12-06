var id = 0

class PureView {
  constructor(view) {
    this.view = view
    this.type = 'Thunk'
    this.id = id++
  }

  render(previous) {
    return (previous && previous.vnode && previous.id === this.id) ? previous.vnode : this.view
  }
}

export const toPureView = view => new PureView(view)
