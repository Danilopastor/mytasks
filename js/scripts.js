const innerApp = document.querySelector(".inner-app")
const element = Hammer(innerApp)

element.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

element.on("swipe",function(event){
  console.log(event)
})