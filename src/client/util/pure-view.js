class PureThunk {
  constructor(view) {
    this.view = view
    this.type = 'Thunk'
  }

  render(previous) {
    return (previous && previous.vnode) ? previous.vnode : this.view
  }
}

export const toPureView = state => new PureThunk(state)
