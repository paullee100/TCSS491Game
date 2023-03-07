class AttackBox {
    constructor(game, attacker, x, y, width, height, starttime, endtime, damage) {
        Object.assign(this, {game, attacker, x, y, width, height, starttime, endtime, damage});

        this.left = x;
        this.top = y;
        this.right = this.left + this.width;
        this.bottom = this.top + this.height;
        this.game.addEntity(this);
    };

    collide(oth) {
        if (this.right > oth.left && this.left < oth.right && this.top < oth.bottom && this.bottom > oth.top) {
            return true;
        };
        return false;
    };

    damageDeal(entity) {
        if (this.removeFromWorld !== true) {
            entity.health -= this.damage;
        }
        this.removeFromWorld = true;
    }

    update() {
        if ((this.attacker.state == 1 && this.attacker.animation[1].currentFrame() == this.endtime) || (this.attacker.state == 2 && this.attacker.animation[2].currentFrame() == this.endtime)
        || (this.attacker instanceof Dragon && this.attacker.animation[4].currentFrame() == this.endtime)) {
            this.removeFromWorld = true;
        };
        if (this.attacker.facing == 1 && this.attacker instanceof Dragon) {
            this.x = this.attacker.x + 125;
            this.y = this.attacker.y + 75;
        }
        if (this.attacker.facing == -1 && this.attacker instanceof Dragon) {
            this.x = this.attacker.x + 25;
            this.y = this.attacker.y + 75;
        }
    };

    draw(ctx) {
        if (this.removeFromWorld !== false) {
            ctx.strokeStyle = "red";
            ctx.strokeRect(this.x - this.game.camera.x, this.y - this.game.camera.y, this.width, this.height);
        };
    };
};