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
        for(let p=1;p<=4;p++){
            this.load.image('bg2-terrain-'+p, 'assets/level/background-2/bg2-terrain-'+p+'.png');
        }
        for(let q=1;q<=3;q++){
            this.load.image('bg2-tree-'+q, 'assets/level/background-2/bg2-tree-'+q+'.png');
        }
        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-terrain-4', 'assets/level/background-1/bg-terrain-4.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1Bridge', 'assets/level/background-1/bg-wooden-bridge.png');
        for(let j=1;j<=3;j++){
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
        this.load.image('gStone5', 'assets/level/ground/g-stone-5.png');
        this.load.image('gVineA', 'assets/level/ground/g-vine-a.png');
        this.load.image('gSpike', 'assets/level/ground/g-spike-1.png');
        this.load.image('gz1', 'assets/zombies/z3.png');
        this.load.image('gz2', 'assets/zombies/z15.png');
        this.load.image('gz3', 'assets/zombies/z12.png');
        this.load.image('gz4', 'assets/zombies/z6.png');
        this.load.image('gFtree1', 'assets/level/ground/g-fellen-tree-1.png');
        for(let i=1;i<=10;i++){
            this.load.image('boyidle'+i, 'assets/anime/boy/boy1/idle/idle'+i+'.png');
        }
        for(let d=1;d<=3;d++){
            this.load.image('gTree'+d, 'assets/level/ground/g-tree-'+d+'.png');
        }
        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for(let o=1;o<=3;o++){
            this.load.image('filterFilm'+o, 'assets/level/filters/film/frame-'+o+'.png');
        }

        for(let a=1;a<=3;a++){
            this.load.image('filterBloody'+a, 'assets/level/filters/bloody/frame'+a+'.png');
        }

        for(let c=1;c<=3;c++){
            this.load.image('rain'+c, 'assets/level/weather/rain/frame'+c+'.png');
        }


        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for(let s=1;s<=3;s++){
            this.load.image('bg-animation-'+s, 'assets/level/background-2/bg-animation/bg-animation-'+s+'.png');
        }
        for(let s=1;s<=10;s++){
            this.load.image('ennemyid'+s, 'assets/anime/enemy1/idle/idle'+s+'.png');
        }
    }
    getFrames(prefix,length){
        let frames=[];
        for (let i=1;i<=length;i++){
            frames.push({key: prefix+i});
        }
        return frames;
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
        let bg2Terrain4=this.add.image(650,450, 'bg2-terrain-3').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain4);
        let bg2Terrain5=this.add.image(1100,100, 'bg2-terrain-4').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain5);
        bg2Terrain4.scale=0.5;
        bg2Terrain4.angle=-50;
        bg2Terrain5.scale=1;

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
        let bg2Tree2=this.add.image(800,-50, 'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        let bg2Tree4=this.add.image(1380,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree4);
        let bg2Tree5=this.add.image(1530,-200, 'bg2-tree-1').setOrigin(0,0);
        this.bg2Container.add(bg2Tree5);
        let bg2Tree6=this.add.image(1650,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree6);
        bg2Tree4.scale=0.6;





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
        let bg1Terrain2=this.add.image(900,220, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain2);
        let bg1Terrain4=this.add.image(820,250, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain4);
        let bg1Terrain5=this.add.image(1400,200, 'bg1-terrain-4').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain5);
        let bg1Tree1=this.add.image(-30,-20, 'bg-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree1);
        let bg1Tree2=this.add.image(870,-20, 'bg-tree-2').setOrigin(0,0);
        this.bg1Container.add(bg1Tree2);
        let bg1Tree3=this.add.image(150,-100, 'bg-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree3);
        let bg1Tree4=this.add.image(1100,-10, 'bg-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree4);
        let bg1Tree5=this.add.image(1650,-20, 'bg-tree-2').setOrigin(0,0);
        this.bg1Container.add(bg1Tree5);
        let bg1Tree6=this.add.image(1800,-20, 'bg-tree-2').setOrigin(0,0);
        this.bg1Container.add(bg1Tree6);
        let bg1Bridge=this.add.image(1250,210, 'bg1Bridge').setOrigin(0,0);
        this.bg1Container.add(bg1Bridge);
        bg1Tree1.scale=0.7;
        bg1Terrain3.scale=0.8;
        bg1Tree2.scale=0.8;
        bg1Tree3.scale=0.8;
        bg1Tree4.scale=0.7;
        bg1Tree5.scale=0.7;
        bg1Tree6.scale=0.7;
        bg1Terrain2.scale=0.6;
        bg1Terrain4.scale=0.7;
        bg1Terrain2.flipX=true;

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
        let vine9= this.add.image(1940, 20, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vine9);
        let vine10= this.add.image(1940, vine9.y+vine9.height-10, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vine10);
        let vine11= this.add.image(1940, vine10.y+vine10.height-10, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vine11);
        let vine12= this.add.image(1940, vine11.y+vine11.height-10, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vine12);
        let vine13= this.add.image(1940, vine12.y+vine12.height-10, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vine13);

        let gWater=this.add.image(440,420, 'gWater').setOrigin(0,0);
        this.groundContainer.add(gWater);
        let mushroom=this.add.image(160,390, 'gMushroom1').setOrigin(0,1);
        this.groundContainer.add(mushroom);
        let Box=this.add.image(510,370, 'gBox2').setOrigin(0,1);
        this.groundContainer.add(Box);
        let Stone1=this.add.image(370,390, 'gStone2').setOrigin(0,1);
        this.groundContainer.add(Stone1);
        let Stone2=this.add.image(790,410, 'gStone4').setOrigin(0,1);
        this.groundContainer.add(Stone2);
        let Grass1=this.add.image(400,380, 'g-grass-1').setOrigin(0,1);
        this.groundContainer.add(Grass1);
        let Grass2=this.add.image(350,390, 'g-grass-2').setOrigin(0,1);
        this.groundContainer.add(Grass2);
        let Grass3=this.add.image(10,400, 'g-grass-3').setOrigin(0,1);
        this.groundContainer.add(Grass3);
        let Grass4=this.add.image(130,400, 'g-grass-4').setOrigin(0,1);
        this.groundContainer.add(Grass4);
        let Grass5=this.add.image(210,400, 'g-grass-5').setOrigin(0,1);
        this.groundContainer.add(Grass5);
        let Grass6=this.add.image(870,400, 'g-grass-5').setOrigin(0,1);
        this.groundContainer.add(Grass6);
        let Grass7=this.add.image(770,410, 'g-grass-2').setOrigin(0,1);
        this.groundContainer.add(Grass7);
        Grass7.angle=-5;
        let Stone3=this.add.image(1060,390, 'gStone5').setOrigin(0,1);
        this.groundContainer.add(Stone3);
        Stone3.scale=1.5;
        let mushroom2=this.add.image(1350,400, 'gMushroom1').setOrigin(0,1);
        this.groundContainer.add(mushroom2);
        mushroom2.scale=0.8;
        let Grass8=this.add.image(1050,410, 'g-grass-4').setOrigin(0,1);
        this.groundContainer.add(Grass8);
        let Grass9=this.add.image(1080,390, 'g-grass-3').setOrigin(0,1);
        this.groundContainer.add(Grass9);
        let Grass10=this.add.image(1320,400, 'g-grass-2').setOrigin(0,1);
        this.groundContainer.add(Grass10);
        let Grass11=this.add.image(1430,410, 'g-grass-3').setOrigin(0,1);
        this.groundContainer.add(Grass11);
        let Grass12=this.add.image(1940,430, 'g-grass-2').setOrigin(0,1);
        this.groundContainer.add(Grass12);

        let Spike=this.add.image(450,550, 'gSpike').setOrigin(0,1);
        this.groundContainer.add(Spike);
        let Spike2=this.add.image(550,550, 'gSpike').setOrigin(0,1);
        this.groundContainer.add(Spike2);
        Spike2.flipX=true;
        Spike.scale=1.2;
        Spike2.scale=1.2;
        let Spike3=this.add.image(1450,550, 'gSpike').setOrigin(0,1);
        this.groundContainer.add(Spike3);
        let Spike4=this.add.image(1730,560, 'gSpike').setOrigin(0,1);
        this.groundContainer.add(Spike4);
        Spike3.scale=1.2;
        Spike4.scale=1.2;

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
        let tree4=this.add.image(1100,430, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree4);
        tree4.scale=0.8;
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
        let grass=this.add.tileSprite(0,390,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);
         */
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
        let grass2=this.add.tileSprite(0,390,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);
         */

        let gMid4=this.add.image(760,380, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gMid4);
        let gMid5=this.add.image(gMid4.x+gMid4.width,380, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid5);
        let gMid6=this.add.image(gMid5.x+gMid5.width,380, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid6);
        let gMid7=this.add.image(gMid6.x+gMid6.width,380, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid7);
        let gBridge=this.add.image(420,320, 'gWbridge').setOrigin(0,0);
        this.groundContainer.add(gBridge);
        let gFtree1=this.add.image(gMid6.x+330,300, 'gFtree1').setOrigin(0,0);
        this.groundContainer.add(gFtree1);
        let gMid8=this.add.image(1900,415, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gMid8);
        let gz1=this.add.image(950,250, 'gz1').setOrigin(0,0);
        this.groundContainer.add(gz1);
        let gz2=this.add.image(1200,200, 'gz2').setOrigin(0,0);
        this.groundContainer.add(gz2);
        let gz3=this.add.image(600,250, 'gz3').setOrigin(0,0);
        this.groundContainer.add(gz3);

        gFtree1.angle=5;
        gBridge.scale=0.8;
        tree1.flipX=true;
        tree1.angle=-5;
        tree2.flipX=true;
        tree3.scale=0.8;
        mushroom.flipX=true;
        mushroom.scale=1.1;
        Box.scale=0.65;
        Box.angle=5;
        gz1.scale=0.8;
        gz3.scale=0.8;

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

        this.rainAnim = this.add.sprite(0, 0, 'rain1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'rain',
            frames: [
                {key:'rain1'},
                {key:'rain2'},
                {key:'rain3'},
            ],
            frameRate: 13,
            repeat: -1
        });
        this.rainAnim.play('rain');

        this.filterBloody = this.add.sprite(0, 0, 'filterBloody1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'blood',
            frames: [
                {key:'filterBloody1'},
                {key:'filterBloody2'},
                {key:'filterBloody3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterBloody.play('blood');

        this.idleb1 = this.add.sprite(310, 100, 'boyidle1').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'bidle',
            frames: this.getFrames("boyidle",10),
            frameRate: 15,
            repeat: -1
        });
        this.idleb1.play('bidle');

        this.ennemidle1 = this.add.sprite(710, 140, 'ennemyid1').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'enidle',
            frames: this.getFrames("ennemyid",10),
            frameRate: 15,
            repeat: -1
        });
        this.ennemidle1.play('enidle');
        this.idleb1.scale=0.7;
        this.ennemidle1.scale=0.5;


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
        this.filterBloody.scrollFactorX=0;
        this.rainAnim.scrollFactorX=0;
        this.bganim.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.8;
        this.bg1Container.scrollFactorX=0.9;
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
        this.filterBloody.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
