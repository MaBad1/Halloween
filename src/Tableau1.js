/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        for(let p=1;p<=3;p++){
            this.load.image('bg2-terrain-'+p, 'assets/level/background-2/bg2-terrain-'+p+'.png');
        }
        for(let q=1;q<=5;q++){
            this.load.image('bg2-tree-'+q, 'assets/level/background-2/bg2-tree-'+q+'.png');
        }
        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        for(let j=1;j<=5;j++){
            this.load.image('bg-tree-'+j, 'assets/level/background-1/bg-tree-'+j+'.png');
        }

        //ground (premier plan noir)
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gWater', 'assets/level/ground/g-water.png');
        this.load.image('gWbridge', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('gBox2', 'assets/level/ground/g-box-2.png');
        this.load.image('gMushroom1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gStone2', 'assets/level/ground/g-stone-2.png');
        this.load.image('gStone4', 'assets/level/ground/g-stone-4.png');
        this.load.image('gVineA', 'assets/level/ground/g-vine-a.png');
        for(let d=1;d<=3;d++){
            this.load.image('gTree'+d, 'assets/level/ground/g-tree-'+d+'.png');
        }
        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for(let o=1;o<=5;o++){
            this.load.image('filterFilm'+o, 'assets/level/filters/film/frame-'+o+'.png');
        }

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for(let s=1;s<=3;s++){
        this.load.image('bg-animation-'+s, 'assets/level/background-2/bg-animation/bg-animation-'+s+'.png');
        }
    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-a').setOrigin(0,0);
        this.bganim = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        this.anims.create({
            key: 'bganim',
            frames: [
                {key:'bg-animation-1'},
                {key:'bg-animation-2'},
                {key:'bg-animation-3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.bganim.play('bganim');
        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-150,150, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        let bg2Terrain3=this.add.image(-500,120, 'bg2-terrain-3').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain3);
        let bg2Terrain1=this.add.image(650,230, 'bg2-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain1);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree1=this.add.image(350,-200, 'bg2-tree-1').setOrigin(0,0);
        this.bg2Container.add(bg2Tree1);
         //pencher l'arbre de -5 degrès
        let bg2Tree3=this.add.image(710,-50, 'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-5;



        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(-250,250, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);
        let bg1Terrain1=this.add.image(650,300, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1);
        let bg1Tree1=this.add.image(-30,-20, 'bg-tree-1').setOrigin(0,0);
        this.bg2Container.add(bg1Tree1);
        let bg1Tree2=this.add.image(870,-20, 'bg-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg1Tree2);
        let bg1Tree3=this.add.image(150,-100, 'bg-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg1Tree3);
        bg1Tree1.scale=0.7;
        bg1Terrain3.scale=0.8;
        bg1Tree2.scale=0.8;
        bg1Tree3.scale=0.8;

        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);

        let vine1= this.add.image(600, 20, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vine1);
        let vine2= this.add.image(600, vine1.y+vine1.height-10, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vine2);
        let vine3= this.add.image(600, vine2.y+vine2.height-10, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vine3);
        let vine4= this.add.image(600, vine3.y+vine3.height-10, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vine4);
        let vine5= this.add.image(600, vine4.y+vine4.height-10, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vine5);
        let vine6=this.add.image(650,45, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vine6);
        let vine7=this.add.image(vine6.x+4,vine6.y+vine6.height-8, 'gVineA').setOrigin(0,1);
        vine7.angle+=-5
        this.groundContainer.add(vine7);
        let vine8=this.add.image(vine6.x,vine7.y+vine7.height-10, 'gVineA').setOrigin(0,1);
        vine8.angle+=5
        this.groundContainer.add(vine8);

        let gWater=this.add.image(440,420, 'gWater').setOrigin(0,0);
        this.groundContainer.add(gWater);
        let mushroom=this.add.image(160,380, 'gMushroom1').setOrigin(0,1);
        this.groundContainer.add(mushroom);
        let Box=this.add.image(510,370, 'gBox2').setOrigin(0,1);
        this.groundContainer.add(Box);
        let Stone1=this.add.image(370,390, 'gStone2').setOrigin(0,1);
        this.groundContainer.add(Stone1);
        let Stone2=this.add.image(790,410, 'gStone4').setOrigin(0,1);
        this.groundContainer.add(Stone2);

        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree1=this.add.image(840,400, 'gTree1').setOrigin(0,1);
        tree1.setTintFill(0x000000); // pratique pour dbugger
        this.groundContainer.add(tree1);
        let tree2=this.add.image(20,400, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree2);
        let tree3=this.add.image(280,430, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree3);
        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions
        let gMid1=this.add.image(-150,380, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,380, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,380, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,390,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,390,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);

        let gMid4=this.add.image(760,380, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gMid4);
        let gBridge=this.add.image(420,320, 'gWbridge').setOrigin(0,0);
        this.groundContainer.add(gBridge);
        gBridge.scale=0.8;
        tree1.flipX=true;
        tree1.angle=-5;
        tree2.flipX=true;
        tree3.scale=0.8;
        mushroom.flipX=true;
        mushroom.scale=1.1;
        Box.scale=0.65;
        Box.angle=5;
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.bganim.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=1;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-1;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
