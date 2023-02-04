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
        entity.health -= this.damage;
        ASSET_MANAGER.playAsset("./sounds/knight_attack_hit.mp3");
        this.removeFromWorld = true;
    }

    update() {
        if (this.game.timer.tick >= this.endtime) {
            this.removeFromWorld = true;
        };
        this.x = this.attacker.position.x;
        this.y = this.attacker.position.y;
    };

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, 1000, 1000);
    };
};