var trex, trexImage
var ground, groundImage
var invisiableGround
var cloud, cloudsImage
var obstacles, obstacleImage1, obstacleImage2, obstacleImage3, obstacleImage4, obstacleImage5, obstacleImage6

// to upload images,vidoes, audios or any assests we use function preload
function preload() {
  trexImage = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundImage = loadImage("ground2.png")
  cloudsImage = loadImage("cloud.png")
  obstacleImage1 = loadImage("obstacle1.png")
  obstacleImage2 = loadImage("obstacle2.png")
  obstacleImage3 = loadImage("obstacle3.png")
  obstacleImage4 = loadImage("obstacle4.png")
  obstacleImage5 = loadImage("obstacle5.png")
  obstacleImage6 = loadImage("obstacle6.png")
}

// to create object one time or assiging task one time we use  function setup
function setup() {
  createCanvas(600, 200)

  trex = createSprite(25, 150, 20, 20)
  trex.addAnimation("runner", trexImage)
  trex.scale = 0.5

  ground = createSprite(300, 180, 600, 10)
  ground.addImage("ground", groundImage)
  ground.velocityX = -6


  invisiableGround = createSprite(300, 195, 600, 30)
  invisiableGround.visible = false

  console.log(trex.depth)

}

// to display objcets or its function multiple time we use function draw
function draw() {
  background("white")

  text(mouseX + " " + mouseY, mouseX, mouseY)


  // creating infinte ground
  if (ground.x < 0) {
    ground.x = width / 2
  }

  if (keyDown("space") && trex.y >= 100) {
    trex.velocityY = -6
  }

  // trex.velocityY= -6+1.5 = 4.5
  trex.velocityY = trex.velocityY + 0.8

  // collide
  trex.collide(invisiableGround)

  // console.log(trex.y)
  // console.log(frameCount)

  drawSprites()
  spawclouds()
  spawObstcales()
}



function spawclouds() {
  if (frameCount % 60 === 0) {
    cloud = createSprite(550, 80, 80, 10)
    cloud.y = Math.round(random(80, 150))
    cloud.addImage("cloud", cloudsImage)
    cloud.velocityX = -6
    cloud.scale = 0.5


    cloud.depth = trex.depth
    trex.depth = trex.depth + 1
    console.log(trex.depth)


    // clouds lifetime time= ditance/speed
    // lifetime= x/velocity= 550/6 = 92
    cloud.lifetime = 92
  }
}


function spawObstcales() {
  if (frameCount % 50 === 0) {
    obstacles = createSprite(570, 170, 10, 80)
    // obstacles.addImage("obstacle1",obstacleImage1)
    obstacles.velocityX = -6
    obstacles.lifetime = 95
    obstacles.scale=0.5

    // switch
    var ran = Math.round(random(1, 6))
    switch (ran) {
      case 1: obstacles.addImage("obstacle1", obstacleImage1)
        break;
      case 2: obstacles.addImage("obstacle2", obstacleImage2)
        break;
      case 3: obstacles.addImage("obstacle3", obstacleImage3)
        break;
      case 4: obstacles.addImage("obstacle4", obstacleImage4)
        break;
      case 5: obstacles.addImage("obstacle5", obstacleImage5)
        break;
      case 6: obstacles.addImage("obstacle6", obstacleImage6)
        break;

      default: break;

    }
  }



}