"use strict";
import Phaser from 'phaser';
export default class TestScene extends Phaser.Scene {
    constructor() {
        super({key: "TestScene"});
    }

    preload() {
        this.load.image('logo', './assets/logo.png');
    }

    create() {
        var logo = this.add.image(400, 150, 'logo');

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        });
    }
}