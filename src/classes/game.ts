import Menu from "../scenes/menu";

export class Game extends Phaser.Game {
    constructor() {
        super({
            type: Phaser.AUTO,
            width: 500,
            height: 500,
            scene: Menu,
        });
    }
}
