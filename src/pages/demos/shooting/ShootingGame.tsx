import React from 'react';
import Sketch from 'react-p5';

// --------------------------------
// クラス定義（型安全性を確保）
// --------------------------------

class Player {
  x: number;
  y: number;
  is_up: boolean;
  is_down: boolean;
  is_right: boolean;
  is_left: boolean;
  speed: number;
  HP: number;
  Max_HP: number;
  XP: number;
  Max_XP: number;

  constructor(
    x: number, y: number, up: boolean, down: boolean, right: boolean, left: boolean,
    speed: number, health: number, Max_HP: number, XP: number, Max_XP: number
  ) {
    this.x = x;
    this.y = y;
    this.is_up = up;
    this.is_down = down;
    this.is_right = right;
    this.is_left = left;
    this.speed = speed;
    this.HP = health;
    this.Max_HP = Max_HP;
    this.XP = XP;
    this.Max_XP = Max_XP;
  }

  display(p5: any, img: any) {
    p5.noStroke();
    p5.image(img, this.x - 50, this.y - 55);
  }

  movement(p5: any, height: number, gameWidth: number, enemy: Enemy) {
    if (this.y > 0 && this.is_up) {
      this.y -= this.speed;
      if (p5.dist(this.x, this.y, enemy.x, enemy.y) < 40) {
        this.y += this.speed;
        this.HP -= 1;
      }
    }
    if (this.y <= height && this.is_down) {
      this.y += this.speed;
      if (p5.dist(this.x, this.y, enemy.x, enemy.y) < 40) {
        this.y -= this.speed;
        this.HP -= 1;
      }
    }
    if (this.x <= gameWidth && this.is_right) {
      this.x += this.speed;
      if (p5.dist(this.x, this.y, enemy.x, enemy.y) < 40) {
        this.x -= this.speed;
        this.HP -= 1;
      }
    }
    if (this.x >= 0 && this.is_left) {
      this.x -= this.speed;
      if (p5.dist(this.x, this.y, enemy.x, enemy.y) < 40) {
        this.x += this.speed;
        this.HP -= 1;
      }
    }
  }
}

class Weapon {
  x: number;
  y: number;
  speed: number;
  atk: number;
  XP: number;
  vecX: number;
  vecY: number;
  r: number = 0;
  biase: number = 0;

  constructor(p5: any, xpos: number, ypos: number, sped: number, attack: number, XP: number, vecX: number, vecY: number) {
    this.x = xpos;
    this.y = ypos;
    this.speed = sped;
    this.atk = attack;
    this.XP = XP;
    this.vecX = p5.cos(p5.radians(vecX));
    this.vecY = p5.sin(p5.radians(vecY));
  }

  movebullet(p5: any) {
    p5.fill(0, 0, 400);
    p5.noStroke();
    this.y -= this.speed;
    p5.ellipse(this.x, this.y, 10, 10);
  }

  rect_fall(p5: any) {
    p5.noStroke();
    p5.fill(this.x, this.y, 400);
    this.y += this.speed;
    p5.rect(this.x, this.y, 50, 50);
  }

  cbullet(p5: any, img: any) {
    p5.noStroke();
    p5.fill(0, 0, 400);
    this.r += this.speed / 30;
    this.x += this.r * this.vecX;
    this.y += this.r * this.vecY;
    p5.image(img, this.x, this.y);
  }

  gearbullet(p5: any) {
    p5.noStroke();
    p5.fill(0, 0, 400);
    this.r += this.speed / 30;
    this.x += this.r * this.vecX;
    this.y += this.r * this.vecY;
    p5.ellipse(this.x, this.y, 10, 10);
  }

  bomb(p5: any, numOfbomb: number) {
    this.r += this.speed / numOfbomb;
    p5.strokeWeight(2);
    p5.noFill();
    p5.stroke(this.x, this.y, 400);
    p5.ellipse(this.x, this.y, this.r, this.r);
  }

  tetrab(p5: any) {
    this.x += this.biase * this.vecX;
    this.y += this.biase * this.vecY;
    p5.noStroke();
    p5.fill(0, 0, 400);
    p5.rect(this.x, this.y, 10, 10);
    this.biase += this.speed;
  }
}

class Enemy {
  x: number;
  y: number;
  xsize: number;
  ysize: number;
  xmove: number;
  ymove: number;
  HP: number;
  Max_HP: number;
  is_boss: boolean;

  constructor(gameWidth: number, height: number, x: number, y: number, xsize: number, ysize: number, HP: number, Max_HP: number, is_boss: boolean) {
    this.x = x;
    this.y = y;
    this.xsize = xsize;
    this.ysize = ysize;
    this.HP = HP;
    this.Max_HP = Max_HP;
    this.is_boss = is_boss;
    this.xmove = gameWidth / 2;
    this.ymove = height / 4;
  }

  display(p5: any, img: any) {
    p5.noStroke();
    p5.image(img, this.x - 30, this.y - 45);
  }

  enemy_move(p5: any, phase: number, frameCount: number, height: number) {
    if (phase === 1 && frameCount % 1000 === 0) {
      this.xmove = p5.random(512);
      this.ymove = p5.random(200);
    } else if (phase === 2 && frameCount % 500 === 0) {
      this.xmove = p5.random(512);
      this.ymove = p5.random(200);
    } else if (phase === 3 && frameCount % 200 === 0) {
      this.xmove = p5.random(512);
      this.ymove = p5.random(200);
    } else if (phase === 4 && frameCount % 300 === 0) {
      if (!this.is_boss) {
        this.xmove = p5.random(512);
        this.ymove = p5.random(height);
      }
      if (this.is_boss && frameCount % 600 === 0) {
        this.xmove = p5.random(512);
        this.ymove = p5.random(400);
      }
    }

    if (!(this.x > this.xmove - 10 && this.x < this.xmove + 10)) {
      if (this.x < this.xmove) this.x += 5;
      else if (this.x > this.xmove) this.x -= 5;
    }
    if (!(this.y > this.ymove - 10 && this.y < this.ymove + 10)) {
      if (this.y < this.ymove) this.y += 5;
      else if (this.y > this.ymove) this.y -= 5;
    }
  }

  HP_gauge(p5: any, gameWidth: number) {
    if (this.is_boss) {
      p5.stroke(255);
      p5.strokeWeight(3);
      p5.line(0, 3, this.HP * (gameWidth / this.Max_HP), 3);
    }
  }

  drawGear(p5: any, frameCount: number) {
    p5.noStroke();
    p5.fill(400, 400, 400);
    p5.ellipse(this.x, this.y, 50, 50);
    for (let i = 0; i < 8; i++) {
      p5.push();
      p5.fill(0);
      p5.translate(this.x, this.y);
      p5.rotate(p5.radians(5 * frameCount));
      p5.rect(0, 0, 10, 10);
      p5.translate(30 * p5.cos(p5.radians((360 * i) / 8)), 30 * p5.sin(p5.radians((360 * i) / 8)));
      p5.rotate(p5.radians((360 * i) / 8));
      p5.noStroke();
      p5.fill(400, 400, 400);
      p5.rect(-1, -1, 10, 10);
      p5.pop();
    }
  }
}

// --------------------------------
// メインコンポーネント
// --------------------------------

export const ShootingGame: React.FC = () => {
  // コンポーネント再実行で汚染されないよう、変数はsetup内でリセットするか、外で管理
  let A = 50, fire = 10, T = 360;
  let frameCount = 0;
  let x_count = 0;
  let Game_width = 512;
  let phase = 0;
  let z_push = false, x_push = false;
  let game_play = true;
  let ckey = false, ekey = false;
  let gear_push = true;

  let player: Player;
  let enemy: Enemy;
  let gear: Enemy[] = [];
  let bullets: Weapon[] = [];
  let bullet2: Weapon[] = [];
  let bomb: Weapon[] = [];
  let Rect_attack: Weapon[] = [];
  let Cparts: Weapon[] = [];
  let sinb: Weapon[] = [];
  let cosb: Weapon[] = [];
  let gear_bullet: Weapon[] = [];

  let dog: any, dog_head: any;
  let cat: any, cat_head: any, cat_bulled: any;

  const preload = (p5: any) => {
    dog = p5.loadImage('/assets/shooting/dog.png');
    cat = p5.loadImage('/assets/shooting/cat.png');
    dog_head = p5.loadImage('/assets/shooting/doghead.png');
    cat_head = p5.loadImage('/assets/shooting/cathead.png');
    cat_bulled = p5.loadImage('/assets/shooting/cathead.png');
  };

  const setup = (p5: any, canvasParentRef: Element) => {
    // 【重要】二重描画対策: すでに親要素の中にcanvasが存在する場合は削除する
    if (canvasParentRef.hasChildNodes()) {
      canvasParentRef.innerHTML = '';
    }

    p5.createCanvas(800, 800).parent(canvasParentRef);
    p5.rectMode(p5.CENTER);
    p5.ellipseMode(p5.CENTER);
    p5.colorMode(p5.HSB, 400);

    dog.resize(50, 100);
    cat.resize(50, 100);
    dog_head.resize(50, 50);
    cat_head.resize(50, 50);
    cat_bulled.resize(10, 10);

    // 変数と配列の完全な初期化
    gear = []; bullets = []; bullet2 = []; bomb = []; Rect_attack = [];
    Cparts = []; sinb = []; cosb = []; gear_bullet = [];
    frameCount = 0;
    phase = 0;

    player = new Player(Game_width / 2, p5.height / 3, false, false, false, false, 5, 300, 300, 30, 30);
    enemy = new Enemy(Game_width, p5.height, Game_width / 2, p5.height / 4, 50, 50, 15000, 15000, true);
  };

  const draw = (p5: any) => {
    p5.background(0);

    if (phase === 0) {
      p5.fill(255);
      p5.textSize(60);
      p5.text("Press C", p5.width / 2 - 80, p5.height / 2);
      if (ckey) phase = 1;
    }

    if (game_play && phase > 0) {
      statusDisplay(p5);
      judge_phase();
      player.display(p5, dog);
      player.movement(p5, p5.height, Game_width, enemy);
      enemy.display(p5, cat);
      enemy.enemy_move(p5, phase, frameCount, p5.height);
      enemy.HP_gauge(p5, Game_width);

      if (z_push) {
        if ((player.speed === 5 && frameCount % 5 === 0) || (player.speed === 2 && frameCount % 2 === 0)) {
          bullets.push(new Weapon(p5, player.x - 15, player.y - 22, 20, 10, 0, 0, 0));
          bullet2.push(new Weapon(p5, player.x - 35, player.y - 22, 20, 10, 0, 0, 0));
        }
      }

      if (x_push) {
        if (player.XP >= 10 && x_count === 1) {
          const numOfBomb = 8;
          for (let i = 0; i < numOfBomb; i++) {
            bomb.push(new Weapon(p5, p5.random(100, 400), p5.random(100, 700), 20, 30, 10, 0, 0));
          }
          player.XP -= bomb[0].XP;
        }
        x_count++;
      } else {
        x_count = 0;
      }

      if (phase === 1 && frameCount % 10 === 0) {
        Rect_attack.push(new Weapon(p5, p5.random(500), p5.random(200), 10, 15, 0, 0, 0));
      }

      if (phase === 2 && frameCount % 10 === 0) {
        for (let i = 0; i < 30; i++) {
          Cparts.push(new Weapon(p5, enemy.x, enemy.y, 3, 5, 0, (12 * i) + Cparts.length / 30, (12 * i) + Cparts.length / 30));
        }
      }

      if (phase === 3 && frameCount % 60 === 0) {
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < T / fire; j++) {
            if (T * i + (T / fire) * j < Game_width) {
              sinb.push(new Weapon(p5, T * i + (T / fire) * j, A * p5.sin(p5.radians(36 * j)), 0.02, 5, 0, 90, 90));
            }
            if (T * i + (T / fire) * j < Game_width) {
              cosb.push(new Weapon(p5, T * i + (T / fire) * j, p5.height - A * p5.cos(p5.radians(36 * j)), 0.02, 5, 0, 90, -90));
            }
          }
        }
      }

      if (phase === 4) {
        if (gear_push) {
          const numOfGear = 8;
          for (let i = 0; i < numOfGear; i++) {
            gear.push(new Enemy(Game_width, p5.height, enemy.x, enemy.y, 50, 50, 2000, 2000, false));
          }
          gear_push = false;
        }
        if (frameCount % 10 === 0) {
          let dx, dy;
          for (let i = 0; i < gear.length; i++) {
            dx = player.x - gear[i].x;
            dy = player.y - gear[i].y;
            gear_bullet.push(new Weapon(p5, gear[i].x, gear[i].y, 10, 1, 0, p5.degrees(p5.atan2(dy, dx)), p5.degrees(p5.atan2(dy, dx))));
          }
          dx = player.x - enemy.x;
          dy = player.y - enemy.y;
          gear_bullet.push(new Weapon(p5, enemy.x, enemy.y, 15, 1, 0, p5.degrees(p5.atan2(dy, dx)), p5.degrees(p5.atan2(dy, dx))));
        }
      }

      control_bullet(p5);
      control_rect(p5);
      control_cparts(p5);
      control_bomb(p5);
      control_tetra(p5);
      control_gear(p5);
      frameCount++;
    }
    judge(p5);
    if (!game_play) {
      continue_judge(p5);
    }
  };

  const control_bullet = (p5: any) => {
    for (let i = bullets.length - 1; i >= 0; i--) {
      bullets[i].movebullet(p5);
      if (bullets[i].y < 0) {
        bullets.splice(i, 1);
        continue;
      }
      if ((bullets[i].x < enemy.x + 30 && bullets[i].x > enemy.x - 30) && (bullets[i].y > enemy.y - 30 && bullets[i].y < enemy.y + 30)) {
        enemy.HP -= bullets[i].atk;
        bullets.splice(i, 1);
      }
    }
    for (let i = bullet2.length - 1; i >= 0; i--) {
      bullet2[i].movebullet(p5);
      if (bullet2[i].y < 0) {
        bullet2.splice(i, 1);
        continue;
      }
      if ((bullet2[i].x < enemy.x + 30 && bullet2[i].x > enemy.x - 30) && (bullet2[i].y > enemy.y - 30 && bullet2[i].y < enemy.y + 30)) {
        enemy.HP -= bullet2[i].atk;
        bullet2.splice(i, 1);
      }
    }
  };

  const control_bomb = (p5: any) => {
    if (bomb.length === 0) return;
    let distance = 500;
    for (let i = bomb.length - 1; i >= 0; i--) {
      bomb[i].bomb(p5, 8);
      if (bomb[i].r > 200) {
        bomb.splice(i, 1);
        continue;
      }
      distance = p5.dist(bomb[i].x, bomb[i].y, enemy.x, enemy.y);
      if (distance < bomb[i].r) {
        enemy.HP -= bomb[i].atk;
      }

      if (phase === 1) {
        for (let j = Rect_attack.length - 1; j >= 0; j--) {
          distance = p5.dist(bomb[i].x, bomb[i].y, Rect_attack[j].x, Rect_attack[j].y);
          if (distance < bomb[i].r + 25) Rect_attack.splice(j, 1);
        }
      } else if (phase === 2) {
        for (let j = Cparts.length - 1; j >= 0; j--) {
          distance = p5.dist(bomb[i].x, bomb[i].y, Cparts[j].x, Cparts[j].y);
          if (distance < bomb[i].r + 5) Cparts.splice(j, 1);
        }
      } else if (phase === 3) {
        for (let j = sinb.length - 1; j >= 0; j--) {
          distance = p5.dist(bomb[i].x, bomb[i].y, sinb[j].x, sinb[j].y);
          if (distance < bomb[i].r + 5) sinb.splice(j, 1);
        }
        for (let j = cosb.length - 1; j >= 0; j--) {
          distance = p5.dist(bomb[i].x, bomb[i].y, cosb[j].x, cosb[j].y);
          if (distance < bomb[i].r) cosb.splice(j, 1);
        }
      } else if (phase === 4) {
        for (let j = gear_bullet.length - 1; j >= 0; j--) {
          distance = p5.dist(bomb[i].x, bomb[i].y, gear_bullet[j].x, gear_bullet[j].y);
          if (distance < bomb[i].r) gear_bullet.splice(j, 1);
        }
        for (let j = gear.length - 1; j >= 0; j--) {
          distance = p5.dist(bomb[i].x, bomb[i].y, gear[j].x, gear[j].y);
          if (distance < bomb[i].r) gear[j].HP -= bomb[i].atk;
        }
      }
    }
  };

  const control_rect = (p5: any) => {
    for (let i = Rect_attack.length - 1; i >= 0; i--) {
      Rect_attack[i].rect_fall(p5);
      if (Rect_attack[i].y > p5.height || Rect_attack[i].x > Game_width) {
        Rect_attack.splice(i, 1);
        continue;
      }
      if ((Rect_attack[i].x < player.x + 25 && Rect_attack[i].x > player.x - 25) && (Rect_attack[i].y < player.y + 25 && Rect_attack[i].y > player.y - 25)) {
        player.HP -= Rect_attack[i].atk;
        Rect_attack.splice(i, 1);
      }
    }
  };

  const control_cparts = (p5: any) => {
    for (let i = Cparts.length - 1; i >= 0; i--) {
      Cparts[i].cbullet(p5, cat_bulled);
      if (Cparts[i].y > p5.height || Cparts[i].x > Game_width) {
        Cparts.splice(i, 1);
        continue;
      }
      if ((Cparts[i].x < player.x + 10 && Cparts[i].x > player.x - 10) && (Cparts[i].y < player.y + 10 && Cparts[i].y > player.y - 10)) {
        player.HP -= Cparts[i].atk;
        Cparts.splice(i, 1);
      }
    }
  };

  const control_tetra = (p5: any) => {
    for (let i = sinb.length - 1; i >= 0; i--) {
      sinb[i].tetrab(p5);
      if (sinb[i].y > p5.height) {
        sinb.splice(i, 1);
        continue;
      }
      if ((sinb[i].x >= player.x - 10 && sinb[i].x <= player.x + 10) && (sinb[i].y >= player.y - 10 && sinb[i].y <= player.y + 10)) {
        player.HP -= sinb[i].atk;
        sinb.splice(i, 1);
      }
    }
    for (let i = cosb.length - 1; i >= 0; i--) {
      cosb[i].tetrab(p5);
      if (cosb[i].y < 0) {
        cosb.splice(i, 1);
        continue;
      }
      if ((cosb[i].x >= player.x - 10 && cosb[i].x <= player.x + 10) && (cosb[i].y >= player.y - 10 && cosb[i].y <= player.y + 10)) {
        player.HP -= cosb[i].atk;
        cosb.splice(i, 1);
      }
    }
  };

  const control_gear = (p5: any) => {
    for (let i = gear.length - 1; i >= 0; i--) {
      gear[i].drawGear(p5, frameCount);
      gear[i].enemy_move(p5, phase, frameCount, p5.height);

      for (let j = bullets.length - 1; j >= 0; j--) {
        if (p5.dist(bullets[j].x, bullets[j].y, gear[i].x, gear[i].y) < 30) {
          gear[i].HP -= bullets[j].atk;
          bullets.splice(j, 1);
        }
      }
      for (let j = bullet2.length - 1; j >= 0; j--) {
        if (p5.dist(bullet2[j].x, bullet2[j].y, gear[i].x, gear[i].y) < 30) {
          gear[i].HP -= bullet2[j].atk;
          bullet2.splice(j, 1);
        }
      }
      if (gear[i].HP < 0) {
        gear.splice(i, 1);
      }
    }

    for (let i = gear_bullet.length - 1; i >= 0; i--) {
      gear_bullet[i].gearbullet(p5);
      if ((gear_bullet[i].x < player.x + 25 && gear_bullet[i].x > player.x - 25) && (gear_bullet[i].y < player.y + 25 && gear_bullet[i].y > player.y - 25)) {
        player.HP -= gear_bullet[i].atk;
        gear_bullet.splice(i, 1);
        continue;
      }
      if (gear_bullet[i].y > p5.height || gear_bullet[i].y < 0 || gear_bullet[i].x > Game_width) {
        gear_bullet.splice(i, 1);
      }
    }
  };

  const statusDisplay = (p5: any) => {
    p5.strokeWeight(3);
    p5.stroke(0, 0, 400);
    p5.fill(0, 0, 400);
    p5.line(Game_width + 2, 0, Game_width + 2, p5.height);
    p5.textSize(60);
    p5.text("YOU", Game_width + 60, p5.height * 3 / 4);
    p5.text("Enemy", Game_width + 60, p5.height / 4);
    p5.image(dog_head, p5.width - 70, p5.height * 3 / 4 - 40, 40, 40);
    p5.textSize(40);
    p5.text("HP:" + player.HP + " / " + player.Max_HP, Game_width + 30, p5.height * 3 / 4 + 60);
    p5.text("XP:" + player.XP + "/" + player.Max_XP, Game_width + 30, p5.height * 3 / 4 + 100);
    p5.textSize(30);
    p5.text("HP:" + enemy.HP + "/" + enemy.Max_HP, Game_width + 30, p5.height / 4 + 60);
    p5.text("phase : " + phase, Game_width + 30, p5.height / 4 + 90);
    p5.image(cat_head, p5.width - 40, p5.height / 4 - 40, 40, 40);
  };

  const judge = (p5: any) => {
    p5.textSize(60);
    p5.fill(0, 0, 400);
    if (enemy.HP <= 0) {
      alert("YOU WIN!!");
      window.location.reload();
      game_play = false;
    } else if (player.HP <= 0) {
      game_play = false;
    }
  };

  const continue_judge = (p5: any) => {
    p5.textSize(30);
    p5.text("C:Continue", p5.width / 2 - 65, p5.height / 2);
    p5.text("E:Exit", p5.width / 2 - 65, p5.height / 2 + 30);
    if (p5.keyIsPressed) {
      if (ckey) {
        game_play = true;
        player.x = Game_width / 2;
        player.y = p5.height - 100;
        enemy.x = Game_width / 2;
        enemy.y = p5.height / 4;
        player.HP = player.Max_HP;
        player.XP = player.Max_XP;
        enemy.HP = enemy.Max_HP;

        bullets = [];
        bullet2 = [];
        Rect_attack = [];
        Cparts = [];
        sinb = [];
        cosb = [];
        gear = [];
        gear_bullet = [];
        bomb = [];

        gear_push = true;
        frameCount = 0;
        phase = 1;
      }
      if (ekey) {
        window.location.reload();
      }
    }
  };

  const judge_phase = () => {
    if (phase !== 0) {
      if (enemy.HP > enemy.Max_HP * 11 / 13) phase = 1;
      else if (enemy.HP > enemy.Max_HP * 7 / 13) phase = 2;
      else if (enemy.HP > enemy.Max_HP * 3 / 13) phase = 3;
      else if (enemy.HP <= enemy.Max_HP * 3 / 13) phase = 4;
    }
  };

  // --------------------------------
  // イベントハンドラー (型エラーの原因だったキーコード処理を修正)
  // --------------------------------

  const keyPressed = (p5: any) => {
    // keyCode を用いた安全な方向キー判定
    if (p5.keyCode === p5.UP_ARROW) player.is_up = true;
    if (p5.keyCode === p5.DOWN_ARROW) player.is_down = true;
    if (p5.keyCode === p5.RIGHT_ARROW) player.is_right = true;
    if (p5.keyCode === p5.LEFT_ARROW) player.is_left = true;
    
    // Shiftキー
    if (p5.keyCode === 16) player.speed = 2;

    const lowerKey = String(p5.key).toLowerCase();
    if (lowerKey === 'z') z_push = true;
    if (lowerKey === 'c') ckey = true;
    if (lowerKey === 'e') ekey = true;
    if (lowerKey === 'x') x_push = true;
    if (lowerKey === 's') p5.save("screenshot.png");
  };

  const keyReleased = (p5: any) => {
    if (p5.keyCode === p5.UP_ARROW) player.is_up = false;
    if (p5.keyCode === p5.DOWN_ARROW) player.is_down = false;
    if (p5.keyCode === p5.RIGHT_ARROW) player.is_right = false;
    if (p5.keyCode === p5.LEFT_ARROW) player.is_left = false;
    if (p5.keyCode === 16) player.speed = 5;

    const lowerKey = String(p5.key).toLowerCase();
    if (lowerKey === 'z') z_push = false;
    if (lowerKey === 'c') ckey = false;
    if (lowerKey === 'e') ekey = false;
    if (lowerKey === 'x') x_push = false;
  };

  return <Sketch preload={preload} setup={setup} draw={draw} keyPressed={keyPressed} keyReleased={keyReleased} />;
};