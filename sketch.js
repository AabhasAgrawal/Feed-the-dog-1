var dog,sadDog,happyDog;
var feed ;
var addfood ; 


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  feed=createButton("Feed The dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressedPressed(Add Food)
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  drawSprites();

  if (keyDownCode=32){
    
  }
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock

function addFoods(){
foodS++;
database.ref('/').update({
  Food:Foods
})


}

function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    Food:foodObj.getFoodtock(),
  })
} 


