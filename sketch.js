var sword, enemy, swordImage, fruit, fruitGroup1, fruitImage1, fruitImage2, fruitImage3, fruitImage4, monster, monsterImage, monsterGroup, monster, fruit1, fruit2, fruit3, fruit4, fruitGroup2, fruitGroup3, fruitGroup4, createSwords, swordGroup, fruit1B, fruit2B, fruit3B, fruit4B, enemyB, monsterB, gameoverimage;

var PLAY = 1;
var END = 0;
var gameState = 1;

var score = 0;

function preload() {

  swordImage = loadImage("sword.png")
  fruitImage1 = loadImage("fruit1.png")
  fruitImage2 = loadImage("fruit2.png")
  fruitImage3 = loadImage("fruit3.png")
  fruitImage4 = loadImage("fruit4.png")
  monsterImage = loadImage("alien1.png")
  gameoverImage = loadImage("gameover.png")
}

function setup() {

  sword = createSprite(40, 200, 20, 20);
  sword.addImage(swordImage);
  sword.scale = 0.7;

  //create Groups
  fruit1B = createGroup();
  fruit2B = createGroup();
  fruit3B = createGroup();
  fruit4B = createGroup();
  monsterGroup = createGroup();
  swordGroup = createGroup();
}


function draw() {
  background("lightBlue");
  sword.y = World.mouseY;
  sword.x = World.mouseX;
  var select_fruit = Math.round(random(1, 5));
  if (frameCount % 80 === 0) {

    swordGroup.add(sword);

    if (select_fruit == 1) {
      fruitGroup1();
    } else if (select_fruit == 2) {
      fruitGroup2();
    } else if (select_fruit == 3) {
      fruitGroup3();
    } else if (select_fruit == 4) {
      enemyGroup();
    } else {
      fruitGroup4();
    }
  }

  if (gameState === END) {
    // sword.changeAnimation("gameover.png", sword);
    fruit1B.setVelocityXEach(0);
    fruit2B.setVelocityXEach(0);
    fruit3B.setVelocityXEach(0);
    fruit4B.setVelocityXEach(0);
    monsterGroup.setVelocityXEach(0);
    fruit1B.setLifetimeEach(-100);
    fruit2B.setLifetimeEach(-100);
    fruit3B.setLifetimeEach(-100);
    fruit4B.setLifetimeEach(-100);
    monsterGroup.setLifetimeEach(-100);
  }


  fruits();
  enemy();

  drawSprites();

  text("score: " + score, 325, 20);
  textSize(20);

  if (fruit1B.isTouching(sword)) {
    fruit1B.destroyEach();
    score = score + 1;
  }
  if (fruit2B.isTouching(sword)) {
    fruit2B.destroyEach();
    score = score + 2;
  }
  if (fruit3B.isTouching(sword)) {
    fruit3B.destroyEach();
    score = score + 3;
  }
  if (fruit4B.isTouching(sword)) {
    fruit4B.destroyEach();
    score = score + 4;
  }

  if (monsterGroup.isTouching(sword)) {
    monsterGroup.destroyEach();
    swordGroup.destroyEach();
    sword.changeAnimation("gameover.png", sword);
    gameState = END;
  }

}


function fruits() {
  if (World.framecount % 80 === 0) {
    fruit = createSprite(400, 200, 20, 20)
    fruit.scale = 0.2;
    Math.round(random(1, 4));
    if (r == 1) {
      fruit.addImage(fruitImage1);
    } else if (r == 2) {
      fruit.addImage(fruitImage2);
    } else if (r == 3) {
      fruit.addImage(fruitImage3);
    } else {
      fruit.addImage(fruitImage4);
    }

    fruit.y = Math.round(random(50, 340));

    fruit.velocityX = -7;
    fruit.setLifetime = 100;

    fruitGroup.add(fruit);

    if (gameState === PLAY) {
      fruitGroup.setVelocityX = (-8);
      monsterGroup.setVelocityX = (-8);
      fruits.setLifetimeEach(4);
      monsterGroup.setLifetimeEach(4);
    } else if (gameState === END) {
      sword.changeAnimation("gameover.png", sword);
      fruit1B.setVelocityXEach(0);
      fruit2B.setVelocityXEach(0);
      fruit3B.setVelocityXEach(0);
      fruit4B.setVelocityXEach(0);
      monsterGroup.setVelocityXEach(0);
      fruit1B.setLifetimeEach(-100);
      fruit2B.setLifetimeEach(-100);
      fruit3B.setLifetimeEach(-100);
      fruit4B.setLifetimeEach(-100);
      monsterGroup.setLifetimeEach(-100);
    }
  }
}

function enemy() {
  if (World.framecount % 200 === 0) {
    monsterGroup = createSprite(400, 200, 20, 20)
    monsterGroup.addAnimation("moving", monsterImage);
    monsterGroup.y = Math.round(random(100, 300));
    monsterGroup.velocityX = -8;
    monsterGroup.setLifetime = 50;

    monsterGroup.add(enemy);

  }
}

function fruitGroup1() {
  var fruit1 = createSprite(360, Math.round(random(20, 370)), 10, 10);
  fruit1.addImage(fruitImage1);
  fruit1.velocityX = -3;
  fruit1.lifetime = 100;
  fruit1.scale = 0.1
  fruit1B.add(fruit1);
}

function fruitGroup2() {
  var fruit2 = createSprite(360, Math.round(random(20, 370)), 10, 10);
  fruit2.addImage(fruitImage2);
  fruit2.velocityX = -3;
  fruit2.lifetime = 100;
  fruit2.scale = 0.1
  fruit2B.add(fruit2);
}

function fruitGroup3() {
  var fruit3 = createSprite(360, Math.round(random(20, 370)), 10, 10);
  fruit3.addImage(fruitImage3);
  fruit3.velocityX = -3;
  fruit3.lifetime = 100;
  fruit3.scale = 0.1
  fruit3B.add(fruit3);
}

function fruitGroup4() {
  var fruit4 = createSprite(360, Math.round(random(20, 370)), 10, 10);
  fruit4.addImage(fruitImage4);
  fruit4.velocityX = -3;
  fruit4.lifetime = 100;
  fruit4.scale = 0.1
  fruit4B.add(fruit4);
}

function enemyGroup() {
  var enemy = createSprite(360, Math.round(random(20, 370)), 10, 10);
  enemy.addImage(monsterImage);
  enemy.velocityX = -3;
  enemy.lifetime = 100;
  enemy.scale = 0.7
  monsterGroup.add(enemy);

}