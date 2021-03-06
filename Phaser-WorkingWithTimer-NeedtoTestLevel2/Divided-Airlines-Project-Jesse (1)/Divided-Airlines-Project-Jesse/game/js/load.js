//Preloader: Loads assests, starts physics engine
var Load = function(game) {};
Load.prototype =
{
    preload: function()
    {
        //Load Non-Atlas Images
    	game.load.image('background', 'assets/img/darkforest3.png');

        //Load Sprites (eventually Atlas)
        game.load.image('play', 'assets/img/Play.png');
        game.load.image('rewind', 'assets/img/Rewind.png');
        game.load.image('door', 'assets/img/TheBESTdoor.png');
        game.load.spritesheet('dude', 'assets/img/dude.png', 32, 48);
        game.load.image('star', 'assets/img/star.png', 32, 32);
    },
    create: function()
    {
        //Start Physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //Move to MainMenu
        game.state.start('MainMenu');
    }
};
