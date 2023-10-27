const app = document.getElementById('app')
const innerApp = document.querySelector(".inner-app")
const element = Hammer(innerApp)

element.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

element.on("swipeup",function(event){
  app.classList.add("body-full")
})
element.on("swipedown",function(event){
  app.classList.remove("body-full")
})