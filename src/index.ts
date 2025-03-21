
import p5 from 'p5';

import * as Matter from 'matter-js';

let screen = 'home';
let level = 0;

let height = 0;
let power = 0;

let shotsTaken = 0;
let shotsMade = 0;
let shotsMissed = 0;

var level1Comp = false;
var level2Comp = false;
var level3Comp = false;
var level4Comp = false;
var level5Comp = false;

var level1Pop = false;
var level2Pop = false;
var level3Pop = false;
var level4Pop = false;
var level5Pop = false;

var level1PopCheck = false;
var level2PopCheck = false;
var level3PopCheck = false;
var level4PopCheck = false;
var level5PopCheck = false;

var shot = false;
var levelC = false;
var levelF = false;

var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let sketch = function (p: p5) {
    let engine: Matter.Engine;
    var ballA: Matter.Body;
    var ground: Matter.Body;
    var borders: Matter.Body[];
    var hoopPole: Matter.Body;
    var hoopBackboard: Matter.Body;
    var hoopPaint: Matter.Body;
    var hoopRim: Matter.Body;
    var rimCollisions: Matter.Body[];
    var net: Matter.Body[];
    var boxLvl1: Matter.Body;
    var boxLvl2: Matter.Body[];
    var boxLvl3: Matter.Body[];
    var boxLvl3NoCollisionA: Matter.Body;
    var boxLvl3NoCollisionB: Matter.Body;
    var boxLvl4: Matter.Body;
    var boxLvl5: Matter.Body[];

    p.setup = function () {
        p.createCanvas(1500, 700);

        engine = Engine.create();
        ballA = Bodies.circle(200, 675, 25, { restitution: 1 });
        ground = Bodies.rectangle(400, 700, 10000, 60, { isStatic: true });
        borders = []
        borders.push(Bodies.rectangle(-5, 350, 10, 10000, { isStatic: true }));
        borders.push(Bodies.rectangle(1505, 350, 10, 10000, { isStatic: true }));
        hoopPole = Bodies.rectangle(1400, 475, 25, 390, { isStatic: true });
        hoopPole.collisionFilter = { 'group': -1 };
        hoopBackboard = Bodies.rectangle(1400, 200, 30, 200, { isStatic: true });
        hoopPaint = Bodies.rectangle(1390, 250, 10, 100, { isStatic: true });
        rimCollisions = []
        rimCollisions.push(Bodies.rectangle(1375, 275, 20, 10, { isStatic: true }));
        rimCollisions.push(Bodies.rectangle(1290, 275, 10, 10, { isStatic: true }));
        hoopRim = Bodies.rectangle(1335, 275, 100, 10, { isStatic: true });
        hoopRim.collisionFilter = { 'group': -1 };
        net = []
        net.push(Bodies.rectangle(1381.5, 310, 3, 60, { isStatic: true }));
        net.push(Bodies.rectangle(1288.5, 310, 3, 60, { isStatic: true }));

        World.add(engine.world, [ballA, ground, hoopPole, hoopBackboard, hoopPaint, hoopRim]);

        engine.world.gravity.y = 3;

        p.textSize(16);

        if (screen == 'level') {
            engine = Engine.create();
            ballA = Bodies.circle(200, 675, 25, { restitution: 1 });
            ground = Bodies.rectangle(400, 700, 10000, 60, { isStatic: true });
            borders = []
            borders.push(Bodies.rectangle(-500, 350, 1000, 10000, { isStatic: true }));
            borders.push(Bodies.rectangle(2000, 350, 1000, 10000, { isStatic: true }));
            hoopPole = Bodies.rectangle(1400, 475, 25, 390, { isStatic: true });
            hoopPole.collisionFilter = { 'group': -1 };
            hoopBackboard = Bodies.rectangle(1400, 200, 30, 200, { isStatic: true });
            hoopPaint = Bodies.rectangle(1390, 250, 10, 100, { isStatic: true });
            rimCollisions = []
            rimCollisions.push(Bodies.rectangle(1375, 275, 20, 10, { isStatic: true }));
            rimCollisions.push(Bodies.rectangle(1290, 275, 10, 10, { isStatic: true }));
            hoopRim = Bodies.rectangle(1335, 275, 100, 10, { isStatic: true });
            hoopRim.collisionFilter = { 'group': -1 };
            net = []
            net.push(Bodies.rectangle(1381.5, 310, 3, 60, { isStatic: true }));
            net.push(Bodies.rectangle(1288.5, 310, 3, 60, { isStatic: true }));

            World.add(engine.world, [ballA, ground, hoopPole, hoopBackboard, hoopPaint, hoopRim]);

            engine.world.gravity.y = 3;

            p.textSize(16);

            if (level == 1) {
                boxLvl1 = Bodies.rectangle(750, 350, 75, 75, { isStatic: true });

                World.add(engine.world, [boxLvl1]);
            }

            if (level == 2) {
                boxLvl2 = []
                boxLvl2.push(Bodies.rectangle(1110, 25, 550, 50, { isStatic: true }));
                boxLvl2.push(Bodies.rectangle(950, 175, 100, 50, { isStatic: true }));
                boxLvl2.push(Bodies.rectangle(1075, 225, 100, 50, { isStatic: true }));
                boxLvl2.push(Bodies.rectangle(1200, 275, 100, 50, { isStatic: true }));
            }

            if (level == 3) {
                boxLvl3 = []
                boxLvl3.push(Bodies.rectangle(750, 660, 50, 20, { isStatic: true }));
                boxLvl3.push(Bodies.rectangle(750, 525, 50, 250));
                boxLvl3.push(Bodies.rectangle(200, 300, 100, 100, { isStatic: true }));
                boxLvl3.push(Bodies.rectangle(1100, 400, 100, 100, { isStatic: true }));
                boxLvl3.push(Bodies.rectangle(400, 645, 100, 50, { isStatic: true }));
                boxLvl3.push(Bodies.rectangle(600, 150, 100, 100, { isStatic: true }));
                boxLvl3.push(Bodies.rectangle(300, 100, 100, 100, { isStatic: true }));
                boxLvl3.push(Bodies.rectangle(1450, 645, 50, 50));
                boxLvl3NoCollisionA = Bodies.rectangle(900, 250, 100, 100, { isStatic: true });
                boxLvl3NoCollisionA.collisionFilter = { 'group': -1 };
                boxLvl3NoCollisionB = Bodies.rectangle(1300, 200, 100, 100, { isStatic: true });
                boxLvl3NoCollisionB.collisionFilter = { 'group': -1 };
            }

            if (level == 4) {
                boxLvl4 = Bodies.rectangle(750, 350, 300, 700, { isStatic: true });

                World.add(engine.world, [boxLvl4]);
            }

            if (level == 5) {
                boxLvl5 = []
                boxLvl5.push(Bodies.rectangle(500, 620, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(700, 520, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(900, 420, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(1100, 320, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(100, 550, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(300, 450, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(500, 350, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(700, 250, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(900, 150, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(1100, 75, 200, 50, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(1350, 25, 300, 50, { isStatic: true }));
            }
        };
    };

    p.draw = function () {
        if (screen == 'level') {

            Engine.update(engine, 10);

            p.background('blue');
            p.textSize(16);

            if (level == 0) {
                p.fill('white');
                p.textAlign(p.CENTER);
                p.textSize(50);
                p.text('Practice Level', 750, 50);
                p.textSize(16);
                p.text('A base level to practice shots', 750, 75);
                p.textAlign(p.LEFT);
                p.text('Controls:', 5, 25);
                p.text('Increase Height - W or Up Arrow', 5, 50);
                p.text('Decrease Height - S or Down Arrow', 5, 75);
                p.text('Increase Power - D or Right Arrow', 5, 100);
                p.text('Decrease Power - A or Left Arrow', 5, 125);
                p.text('Take Shot - Enter', 5, 150);
                p.text('Home - H', 5, 175);
                p.text('Restart Level - R', 5, 200);
                if (p.keyIsDown(72)) {
                    screen = 'home'
                }
                if (screen == 'levelCS') {
                    shotsMade = shotsMade - 1;
                    reset();
                    screen = 'level';
                }
                if (screen == 'levelFS') {
                    shotsMissed = shotsMissed - 1;
                    reset();
                    screen = 'level';
                }
            }

            if (level == 1) {
                // Draw BoxLvl1
                p.fill('#715428');

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl1.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                p.textAlign(p.LEFT);
                p.stroke(0);
                p.fill('white');

                // Draw instructions
                p.text('Controls:', 5, 25);
                p.text('Increase Height - W or Up Arrow', 5, 50);
                p.text('Decrease Height - S or Down Arrow', 5, 75);
                p.text('Increase Power - D or Right Arrow', 5, 100);
                p.text('Decrease Power - A or Left Arrow', 5, 125);
                p.text('Take Shot - Enter', 5, 150);
                p.text('Home - H', 5, 175);
                p.text('Restart Level - R', 5, 200);

                p.textSize(50);
                p.textAlign(p.CENTER);
                p.text('Level 1', 750, 50);
                p.textSize(16);
                p.text("One Box, One Basket", 750, 75);
            }

            if (level == 2) {
                p.fill('#715428');

                boxLvl2.forEach(boxLvl2 => {
                    p.beginShape()
                    boxLvl2.vertices.forEach(v => {
                        p.vertex(v.x, v.y);
                    })
                    p.endShape(p.CLOSE);
                });

                p.fill('white');
                p.textSize(50);
                p.textAlign(p.CENTER);
                p.text('Level 2', 750, 50);
                p.textSize(16);
                p.text('Bouncing Down', 750, 75)
            }

            if (level == 3) {
                p.textAlign(p.CENTER);
                p.fill('white');
                p.text('But', 750, 425);
                p.text('things', 750, 450);
                p.text('may', 750, 475);
                p.text('not', 750, 500);
                p.text('be', 750, 525);
                p.text('as', 750, 550);
                p.text('they', 750, 575);
                p.text('seem', 750, 600);

                p.fill('#715428');

                boxLvl3.forEach(boxLvl3 => {
                    p.beginShape()
                    boxLvl3.vertices.forEach(v => {
                        p.vertex(v.x, v.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl3NoCollisionA.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl3NoCollisionB.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                p.fill('white');
                p.textSize(50);
                p.text('Level 3', 750, 50);
                p.textSize(16);
                p.text('Boxes everywhere', 750, 75);
            }

            if (level == 4) {
                p.fill('#715428');
                
                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl4.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                p.fill('white');
                p.textSize(50);
                p.textAlign(p.CENTER);
                p.text('Level 4', 750, 50);
                p.textSize(16);
                p.text("Think outside 'the box'", 750, 75);
            }

            if (level == 5) {
                p.fill('#715428');

                boxLvl5.forEach(boxLvl5 => {
                    p.beginShape()
                    boxLvl5.vertices.forEach(v => {
                        p.vertex(v.x, v.y);
                    })
                    p.endShape(p.CLOSE);
                });

                p.fill('white');
                p.textSize(50);
                p.textAlign(p.CENTER);
                p.text('Level 5', 750, 50);
                p.textSize(16);
                p.text("'The Staircase'", 750, 75);
            }

            // Draw BallA
            p.fill('orange');

            engine.world.bodies.forEach(body => {
                p.beginShape()
                ballA.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw Ground
            p.fill('grey');

            engine.world.bodies.forEach(body => {
                p.beginShape()
                ground.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw Borders
            borders.forEach(borders => {
                p.beginShape()
                borders.vertices.forEach(v => {
                    p.vertex(v.x, v.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw HoopPole
            p.fill('#757575');

            engine.world.bodies.forEach(body => {
                p.beginShape()
                hoopPole.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw HoopBackboard
            p.fill('white');

            engine.world.bodies.forEach(body => {
                p.beginShape()
                hoopBackboard.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw HoopPaint
            p.fill('red');

            engine.world.bodies.forEach(body => {
                p.beginShape()
                hoopPaint.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw RimCollisions
            p.fill('#f74323');

            rimCollisions.forEach(rimCollisions => {
                p.beginShape()
                rimCollisions.vertices.forEach(v => {
                    p.vertex(v.x, v.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw HoopRim
            engine.world.bodies.forEach(body => {
                p.beginShape()
                hoopRim.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            p.noStroke();

            // Draw Net
            p.fill('white');

            net.forEach(net => {
                p.beginShape()
                net.vertices.forEach(v => {
                    p.vertex(v.x, v.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw Net Design
            p.stroke(255);

            p.line(1287.5, 290, 1307.5, 280);
            p.line(1287.5, 300, 1322.5, 280);
            p.line(1287.5, 310, 1337.5, 280);
            p.line(1287.5, 320, 1352.5, 280);
            p.line(1287.5, 330, 1367.5, 280);
            p.line(1287.5, 340, 1382.5, 280);
            p.line(1302.5, 340, 1382.5, 290);
            p.line(1317.5, 340, 1382.5, 300);
            p.line(1332.5, 340, 1382.5, 310);
            p.line(1347.5, 340, 1382.5, 320);
            p.line(1362.5, 340, 1382.5, 330);

            p.line(1362.5, 280, 1382.5, 290);
            p.line(1347.5, 280, 1382.5, 300);
            p.line(1332.5, 280, 1382.5, 310);
            p.line(1317.5, 280, 1382.5, 320);
            p.line(1302.5, 280, 1382.5, 330);
            p.line(1287.5, 280, 1382.5, 340);
            p.line(1287.5, 290, 1367.5, 340);
            p.line(1287.5, 300, 1352.5, 340);
            p.line(1287.5, 310, 1337.5, 340);
            p.line(1287.5, 320, 1322.5, 340);
            p.line(1287.5, 330, 1307.5, 340);
            
            // Draw Height & Power Values
            p.textSize(16);
            p.textAlign(p.LEFT);
            p.stroke(0);
            p.fill('white');
            p.text('Height = ' + height, 1400, 25);
            p.text('Power = ' + power, 1400, 50);

            // Checks that the user has not already shot the ball
            if (shot == false) {
                if (p.keyIsDown(p.UP_ARROW)) {
                    height = height + 1;
                    if (height > 100) {
                        height = 100;
                    };
                }
                if (p.keyIsDown(p.LEFT_ARROW)) {
                    power = power - 1;
                    if (power < -100) {
                        power = -100;
                    };
                }
                if (p.keyIsDown(p.RIGHT_ARROW)) {
                    power = power + 1;
                    if (power > 100) {
                        power = 100;
                    };
                }
                if (p.keyIsDown(p.DOWN_ARROW)) {
                    height = height - 1;
                    if (height < 0) {
                        height = 0;
                    };
                }
                if (p.keyIsDown(87)) {
                    height = height + 1;
                    if (height > 100) {
                        height = 100;
                    };
                }
                if (p.keyIsDown(65)) {
                    power = power - 1;
                    if (power < -100) {
                        power = -100;
                    };
                }
                if (p.keyIsDown(68)) {
                    power = power + 1;
                    if (power > 100) {
                        power = 100;
                    };
                }
                if (p.keyIsDown(83)) {
                    height = height - 1;
                    if (height < 0) {
                        height = 0;
                    };
                }
                if (p.keyIsDown(p.ENTER)) {
                    Matter.Body.applyForce(ballA, ballA.position, { x: 0, y: -(height * 0.008) });
                    Matter.Body.applyForce(ballA, ballA.position, { x: power * 0.008, y: 0 });
                    shot = true;
                    shotsTaken = shotsTaken + 1;
                    if (level == 0) {
                        shotsTaken = shotsTaken - 1;
                    }
                }
            }

            if (p.keyIsDown(72)) {
                screen = 'home'
            }
            if (p.keyIsDown(82)) {
                reset();
            }

            // Check if the ball has landed in the basket
            var distBallA = p.dist(ballA.position.x, ballA.position.y, 1335, 310);
            if (distBallA < 25) {
                levelC = true;
                shotsMade = shotsMade + 1;
                if (level == 1) {
                    level1Comp = true;
                    level1Pop = true;
                }
                if (level == 2) {
                    level2Comp = true;
                    level2Pop = true;
                }
                if (level == 3) {
                    level3Comp = true;
                    level3Pop = true;
                }
                if (level == 4) {
                    level4Comp = true;
                    level4Pop = true;
                }
                if (level == 5) {
                    level5Comp = true;
                    level5Pop = true;
                }
            }
            if (levelC == true) {
                screen = 'levelCS';
            }

            // Display level failure text if the ball is stationary after the user has taken the shot
            if (shot == true) {
                if (ballA.velocity.x < 0.005 && ballA.velocity.x > -0.005 && ballA.velocity.y < 0.005 && ballA.velocity.y > -0.005) {
                    levelF = true;
                    shotsMissed = shotsMissed + 1;
                }         
            }

            // Don't display level failure text if level has been completed
            if (levelC == true) {
                levelF = false;
            }

            // Display level failure text if the user has failed the level
            if (levelF == true) {
                screen = 'levelFS';
            }
        }

        if (screen == 'home') {
            height = 0;
            power = 0;
            shot = false;
            levelC = false;
            levelF = false;
            p.background('black');
            p.fill('purple');
            p.rect(550, 150, 400, 200);
            p.rect(100, 400, 400, 200);
            p.rect(550, 400, 400, 200);
            p.rect(1000, 400, 400, 200);
            p.fill('white');
            p.textSize(75);
            p.textAlign(p.CENTER);
            p.text('Basket Bounce', 750, 100);
            p.textSize(50);
            p.text('Level Selection', 750, 240);
            p.text('[L]', 750, 290);
            p.text('View Stats', 300, 490);
            p.text('[S]', 300, 540);
            p.text('Achievements', 1200, 490);
            p.text('[A]', 1200, 540);
            p.text('Practice Level', 750, 490);
            p.text('[P]', 750, 540);
            if (p.keyIsDown(76)) {
                screen = 'levelSel'
            }
            if (p.keyIsDown(83)) {
                screen = 'stats'
            }
            if (p.keyIsDown(65)) {
                screen = 'achievement'
            }
            if (p.keyIsDown(80)) {
                screen = 'level'
                level = 0
            }
        }

        if (screen == 'stats') {
            p.background('black');
            p.fill('brown');
            p.rect(100, 200, 400, 200);
            p.rect(550, 200, 400, 200);
            p.rect(1000, 200, 400, 200);
            p.fill('purple');
            p.rect(550, 450, 400, 200);
            p.fill('white');
            p.textSize(75);
            p.textAlign(p.CENTER);
            p.text('Session Stats', 750, 100);
            p.textSize(50);
            p.text('Shots Taken', 300, 275);
            p.text(shotsTaken, 300, 350);
            p.text('Shots Made', 750, 275);
            p.text(shotsMade, 750, 350);
            p.text('Shots Missed', 1200, 275);
            p.text(shotsMissed, 1200, 350);
            p.text('Home', 750, 535);
            p.text('[H]', 750, 585);
            if (p.keyIsDown(72)) {
                screen = 'home'
            }
        }

        if (screen == 'achievement') {
            p.background('black');
            p.fill('purple');
            p.rect(550, 475, 400, 200);
            if (level1Comp == false) {
                p.fill('red');
            }
            if (level1Comp == true) {
                p.fill('green');
            }
            p.rect(550, 150, 400, 50);
            if (level2Comp == false) {
                p.fill('red');
            }
            if (level2Comp == true) {
                p.fill('green');
            }
            p.rect(550, 210, 400, 50);
            if (level3Comp == false) {
                p.fill('red');
            }
            if (level3Comp == true) {
                p.fill('green');
            }
            p.rect(550, 270, 400, 50);
            if (level4Comp == false) {
                p.fill('red');
            }
            if (level4Comp == true) {
                p.fill('green');
            }
            p.rect(550, 330, 400, 50);
            if (level5Comp == false) {
                p.fill('red');
            }
            if (level5Comp == true) {
                p.fill('green');
            }
            p.rect(550, 390, 400, 50);
            p.fill('white');
            p.textSize(75);
            p.textAlign(p.CENTER)
            p.text('Achievements', 750, 100);
            p.textSize(25);
            p.text('Complete Level 1', 750, 182);
            p.text('Complete Level 2', 750, 242);
            p.text('Complete Level 3', 750, 302);
            p.text('Complete Level 4', 750, 362);
            p.text('Complete Level 5', 750, 422);
            p.textSize(50);
            p.text('Home', 750, 560);
            p.text('[H]', 750, 610);
            if (p.keyIsDown(72)) {
                screen = 'home'
            }
        }

        if (screen == 'levelSel') {
            p.background('black');
            p.fill('white');
            p.textSize(75);
            p.textAlign(p.CENTER);
            p.text('Level Selection', 750, 100);
            p.textSize(25);
            p.text('Press the number on your keyboard corresponding to the level that you would like to play', 750, 625);
            p.textSize(50);
            p.fill('blue');
            if (level1Comp == true) {
                p.fill('green');
            }
            p.rect(100, 325, 100, 100);
            p.fill('red');
            if (level1Comp == true) {
                p.fill('blue');
            }
            if (level2Comp == true) {
                p.fill('green');
            }
            p.rect(400, 325, 100, 100);
            p.fill('red');
            if (level2Comp == true) {
                p.fill('blue');
            }
            if (level3Comp == true) {
                p.fill('green');
            }
            p.rect(700, 325, 100, 100);
            p.fill('red');
            if (level3Comp == true) {
                p.fill('blue');
            }
            if (level4Comp == true) {
                p.fill('green');
            }
            p.rect(1000, 325, 100, 100);
            p.fill('red');
            if (level4Comp == true) {
                p.fill('blue');
            }
            if (level5Comp == true) {
                p.fill('green');
            }
            p.rect(1300, 325, 100, 100);
            p.fill('purple');
            p.rect(150, 25, 200, 125);
            p.fill('white');
            p.text('1', 150, 390);
            if (p.keyIsDown(49)) {
                screen = 'level'
                level = 1
                reset();
            }
            p.text('2', 450, 390);
            if (level1Comp == true) {
                if (p.keyIsDown(50)) {
                    screen = 'level'
                    level = 2
                    reset();
                }
            }
            p.text('3', 750, 390);
            if (level2Comp == true) {
                if (p.keyIsDown(51)) {
                    screen = 'level'
                    level = 3
                    reset();
                }
            }
            p.text('4', 1050, 390);
            if (level3Comp == true) {
                if (p.keyIsDown(52)) {
                    screen = 'level'
                    level = 4
                    reset();
                }
            }
            p.text('5', 1350, 390);
            if (level4Comp == true) {
                if (p.keyIsDown(53)) {
                    screen = 'level'
                    level = 5
                    reset();
                }
            }
            p.textSize(50);
            p.text('Home', 250, 75);
            p.text('[H]', 250, 125);
            if (p.keyIsDown(72)) {
                screen = 'home'
            }
        }

        if (screen == 'levelCS') {
            height = 0;
            power = 0;
            shot = false;
            levelC = false;
            levelF = false;
            p.background('green');
            p.textSize(100);
            p.textAlign(p.CENTER);
            p.text('Level Completed!', 750, 150);
            p.fill('white');
            p.textSize(50);
            p.text('Home', 750, 250);
            p.text('[H]', 750, 300);
            p.text('Level Selection', 750, 400);
            p.text('[L]', 750, 450);
            p.text('Restart Level', 750, 550);
            p.text('[R]', 750, 600);
            if (p.keyIsDown(72)) {
                screen = 'home'
            }
            if (p.keyIsDown(76)) {
                screen = 'levelSel'
            }
            if (p.keyIsDown(82)) {
                screen = 'level'
                reset();
            }
            if (level == 0) {
                shotsMade = shotsMade - 1;
                screen = 'level';
                reset();
            }
        }

        if (screen == 'levelFS') {
            height = 0;
            power = 0;
            shot = false;
            levelC = false;
            levelF = false;
            p.background('red');
            p.textSize(100);
            p.textAlign(p.CENTER);
            p.text('Level Failed!', 750, 150);
            p.fill('white');
            p.textSize(50);
            p.text('Home', 750, 250);
            p.text('[H]', 750, 300);
            p.text('Level Selection', 750, 400);
            p.text('[L]', 750, 450);
            p.text('Restart Level', 750, 550);
            p.text('[R]', 750, 600);
            if (p.keyIsDown(72)) {
                screen = 'home'
            }
            if (p.keyIsDown(76)) {
                screen = 'levelSel'
            }
            if (p.keyIsDown(82)) {
                screen = 'level';
                reset();
            }
            if (level == 0) {
                shotsMissed = shotsMissed - 1;
                screen = 'level'
                reset();
            }
        }

        if (level1PopCheck == false) {
            if (level1Pop == true) {
                p.fill('brown');
                p.rect(25, 25, 300, 100);
                p.fill('white');
                p.textAlign(p.CENTER);
                p.textSize(25);
                p.text('Achievement Complete', 175, 65);
                p.text('Complete Level 1', 175, 100);
                if (screen !== 'levelCS') {
                    level1PopCheck = true;
                }
            }
        }

        if (level2PopCheck == false) {
            if (level2Pop == true) {
                p.fill('brown');
                p.rect(25, 25, 300, 100);
                p.fill('white');
                p.textAlign(p.CENTER);
                p.textSize(25);
                p.text('Achievement Complete', 175, 65);
                p.text('Complete Level 2', 175, 100);
                if (screen !== 'levelCS') {
                    level2PopCheck = true;
                }
            }
        }

        if (level3PopCheck == false) {
            if (level3Pop == true) {
                p.fill('brown');
                p.rect(25, 25, 300, 100);
                p.fill('white');
                p.textAlign(p.CENTER);
                p.textSize(25);
                p.text('Achievement Complete', 175, 65);
                p.text('Complete Level 3', 175, 100);
                if (screen !== 'levelCS') {
                    level3PopCheck = true;
                }
            }
        }

        if (level4PopCheck == false) {
            if (level4Pop == true) {
                p.fill('brown');
                p.rect(25, 25, 300, 100);
                p.fill('white');
                p.textAlign(p.CENTER);
                p.textSize(25);
                p.text('Achievement Complete', 175, 65);
                p.text('Complete Level 4', 175, 100);
                if (screen !== 'levelCS') {
                    level4PopCheck = true;
                }
            }
        }

        if (level5PopCheck == false) {
            if (level5Pop == true) {
                p.fill('brown');
                p.rect(25, 25, 300, 100);
                p.fill('white');
                p.textAlign(p.CENTER);
                p.textSize(25);
                p.text('Achievement Complete', 175, 65);
                p.text('Complete Level 5', 175, 100);
                if (screen !== 'levelCS') {
                    level5PopCheck = true;
                }
            }
        }

        function reset() {
            engine = Engine.create();
            ballA = Bodies.circle(200, 675, 25, { restitution: 1 });
            ground = Bodies.rectangle(400, 700, 10000, 60, { isStatic: true });
            borders = []
            borders.push(Bodies.rectangle(-500, 350, 1000, 10000, { isStatic: true }));
            borders.push(Bodies.rectangle(2000, 350, 1000, 10000, { isStatic: true }));
            hoopPole = Bodies.rectangle(1400, 475, 25, 390, { isStatic: true });
            hoopPole.collisionFilter = { 'group': -1 };
            hoopBackboard = Bodies.rectangle(1400, 200, 30, 200, { isStatic: true });
            hoopPaint = Bodies.rectangle(1390, 250, 10, 100, { isStatic: true });
            rimCollisions = []
            rimCollisions.push(Bodies.rectangle(1375, 275, 20, 10, { isStatic: true }));
            rimCollisions.push(Bodies.rectangle(1290, 275, 10, 10, { isStatic: true }));
            hoopRim = Bodies.rectangle(1335, 275, 100, 10, { isStatic: true });
            hoopRim.collisionFilter = { 'group': -1 };
            net = []
            net.push(Bodies.rectangle(1381.5, 310, 3, 60, { isStatic: true }));
            net.push(Bodies.rectangle(1288.5, 310, 3, 60, { isStatic: true }));
    
            World.add(engine.world, [ballA, ground, hoopPole, hoopBackboard, hoopPaint, hoopRim]);
    
            engine.world.gravity.y = 3;
    
            p.textSize(16);

            if (level == 1) {
                boxLvl1 = Bodies.rectangle(750, 350, 75, 75, { isStatic: true });
    
                World.add(engine.world, [boxLvl1]);
            }

            if (level == 2) {
                boxLvl2 = []
                boxLvl2.push(Bodies.rectangle(1110, 25, 550, 50, { isStatic: true }));
                boxLvl2.push(Bodies.rectangle(950, 175, 100, 50, { isStatic: true }));
                boxLvl2.push(Bodies.rectangle(1075, 225, 100, 50, { isStatic: true }));
                boxLvl2.push(Bodies.rectangle(1200, 275, 100, 50, { isStatic: true }));
            }
    
            if (level == 3) {
                boxLvl3 = []
                boxLvl3.push(Bodies.rectangle(750, 660, 50, 20, { isStatic: true }));
                boxLvl3.push(Bodies.rectangle(750, 525, 50, 250));
                boxLvl3.push(Bodies.rectangle(200, 300, 100, 100, { isStatic: true }));
                boxLvl3.push(Bodies.rectangle(1100, 400, 100, 100, { isStatic: true }));
                boxLvl3.push(Bodies.rectangle(400, 645, 100, 50, { isStatic: true }));
                boxLvl3.push(Bodies.rectangle(600, 150, 100, 100, { isStatic: true }));
                boxLvl3.push(Bodies.rectangle(300, 100, 100, 100, { isStatic: true }));
                boxLvl3.push(Bodies.rectangle(1450, 645, 50, 50));
                boxLvl3NoCollisionA = Bodies.rectangle(900, 250, 100, 100, { isStatic: true });
                boxLvl3NoCollisionA.collisionFilter = { 'group': -1 };
                boxLvl3NoCollisionB = Bodies.rectangle(1300, 200, 100, 100, { isStatic: true });
                boxLvl3NoCollisionB.collisionFilter = { 'group': -1 };
            }

            if (level == 4) {
                boxLvl4 = Bodies.rectangle(750, 350, 300, 700, { isStatic: true });
    
                World.add(engine.world, [boxLvl4]);
            }

            if (level == 5) {
                boxLvl5 = []
                boxLvl5.push(Bodies.rectangle(500, 620, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(700, 520, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(900, 420, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(1100, 320, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(100, 550, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(300, 450, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(500, 350, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(700, 250, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(900, 150, 200, 100, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(1100, 75, 200, 50, { isStatic: true }));
                boxLvl5.push(Bodies.rectangle(1350, 25, 300, 50, { isStatic: true }));
            }
        }
    };
};

let myp5 = new p5(sketch);