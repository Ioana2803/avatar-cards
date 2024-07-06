export default class ProgressBarView{
    constructor(progresBarModel){
        this.progresBarModel = progresBarModel;
        this.init();
        this.update();
    }

    init(){
        // TODO: should create the DOM elements
        console.log('Initialising progress bar DOM elements...');
    }

    update(){
        // TODO: should update the new values in the created DOM elements
        console.log('Rendering the new values');
        console.log(this.progresBarModel);
    }
}