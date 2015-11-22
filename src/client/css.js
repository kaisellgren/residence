function merge(left, right) {
  return {}
}

exports.mix = {
  relative: {
    position: 'relative'
  }
}

exports.container = {
  width: '100%',
  background: '#f0f0f0',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '8px',
  fontFamily: "'Titillium Web', sans-serif"
}

exports.header = {
  padding: 16,
  background: 'rgba(255, 255, 255, 0.7)',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 1,
  display: 'flex',
  borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
  boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.15)'
}

exports.headerTitleColumn = {
  flex: 1,
  textAlign: 'center'
}

exports.headerTitle = {
  margin: 0,
  color: '#78BD12',
  display: 'inline',
  fontSize: '2rem'
}

exports.footer = {
  padding: 32,
  background: 'rgba(255, 255, 255, 0.7)',
  borderTop: '1px solid rgba(0, 0, 0, 0.4)',
  boxShadow: '0 -2px 6px 0 rgba(0, 0, 0, 0.15)',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  fontSize: '1rem'
}

exports.menu = {
  display: 'flex',
  flex: 1,
  alignItems: 'center'
}

exports.menuItem = {
  marginRight: 64,
  cursor: 'pointer',
  fontSize: '1.1rem',
  color: '#525252'
}

exports.introduction = {
  position: 'absolute',
  top: 410,
  left: 300,
  width: 640,
  background: 'rgba(0,0,0,0.8)',
  padding: 24,
  borderRadius: '8px',
  color: 'white'
}

exports.frontPageBackground = {
  background: 'url(/static/interior3.jpg)',
  width: '100%',
  height: '100%',
  backgroundSize: 'cover'
}

exports.frontPageTitle = {
  fontSize: '2rem',
  margin: 0
}

exports.frontPageDescription = {
  fontSize: '1.2rem'
}
