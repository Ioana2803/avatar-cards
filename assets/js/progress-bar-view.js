export default class ProgressBarView{
    constructor(progresBarModel){
        this.progresBarModel = progresBarModel;
        this.init();
        this.update();
    }

    init(){
        // TODO: should create the PROGRESS BAR DOM elements
        console.log('Initialising PROGRGESS BAR DOM elements...');
    }

    update(){
        // TODO: should update the PROGRESS BAR new values in the created DOM elements
        console.log('Rendering the PROGRGESS BAR new values');
        console.log(this.progresBarModel);
    }
}