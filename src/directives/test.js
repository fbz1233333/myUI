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
    el.style.display=''
    let opacity=1
    let change=-0.02
    el.style.opacity=opacity
    // console.log('start opacity is',opacity)
    let interval=setInterval(()=>{
      opacity+=change;
      el.style.opacity=opacity.toString()
      // console.log(opacity)
      if (opacity<=0){
        el.style.display='none'
        clearInterval(interval)
      }
    },timer)
  },
  wider(el,timer) {
    if (el.style.display === 'none') {
      el.style.display = 'inline-block'

      let left = Number.parseInt(el.style.paddingLeft.slice(0, -2))
      let right = Number.parseInt(el.style.paddingRight.slice(0, -2))
      let width_base = el.offsetWidth - (left + right)

      let per = 100;
      let interval = setInterval(() => {
        if (per <= 0) {
          el.style.width = ''
          el.style.display = 'none'
          clearInterval(interval)
        } else {
          per -= 2;
          el.style.width = per * width_base / 100 + 'px'
        }
      }, timer)
    } else {
      let per = 0;

      let left = Number.parseInt(el.style.paddingLeft.slice(0, -2))
      let right = Number.parseInt(el.style.paddingRight.slice(0, -2))
      let width_base = el.offsetWidth - (left + right)


      let interval = setInterval(() => {
        if (per >= 100) {
          el.style.width = ''
          el.style.display = ''
          clearInterval(interval)
        } else {
          per += 2;
          el.style.width = per * width_base / 100 + 'px'
        }
      }, timer)
    }
  },
  higher(el,timer){
    if (el.style.display==='none')
    {
      el.style.display='inline-block'

      let left=Number.parseInt(el.style.paddingTop.slice(0,-2))
      let right=Number.parseInt(el.style.paddingBottom.slice(0,-2))
      let height_base=el.offsetWidth-(left+right)

      let per=100;
      let interval=setInterval(()=>{
        if (per<=0){
          el.style.height=''
          el.style.display='none'
          clearInterval(interval)
        }else {
          per-=2;
          el.style.height=per*height_base/100+'px'
        }
      },timer)
    }else {
      let per=0;

      let left=Number.parseInt(el.style.paddingTop.slice(0,-2))
      let right=Number.parseInt(el.style.paddingBottom.slice(0,-2))
      let height_base=el.offsetWidth-(left+right)


      let interval=setInterval(()=>{
        if (per>=100){
          el.style.height=''
          el.style.display=''
          clearInterval(interval)
        }else {
          per+=2;
          el.style.height=per*height_base/100+'px'
        }
      },timer)
  }



},

  move(el,e){
    el.style.position='absolute'
    el.style.left=e.pageX-el.offsetWidth/2+'px'
    el.style.top=e.pageY-el.offsetHeight/2+'px'
  }

}
