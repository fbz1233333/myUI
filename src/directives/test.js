export default {
  fade_in(el,timer){
    let opacity=0
    let change=0.02
    el.style.opacity=opacity

    let interval=setInterval(()=>{
      opacity+=change;
      el.style.opacity=opacity.toString()
      if (opacity>=1){
        clearInterval(interval)
      }
    },timer)
  },
  fade_out(el,timer){
    console.log('fading out')
    let opacity=1
    let change=-0.02
    el.style.opacity=opacity
    console.log('start opacity is',opacity)
    let interval=setInterval(()=>{
      opacity+=change;
      el.style.opacity=opacity.toString()
      if (opacity<=0){
        clearInterval(interval)
        el.style.display='none'
      }
    },timer)
  }
}
