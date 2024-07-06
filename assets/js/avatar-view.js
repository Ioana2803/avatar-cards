export default class AvatarView{
    constructor(parentDOMElement, avatarModel){
        this.parentDOMElement = parentDOMElement;

        this.avatarModel = avatarModel;
        this.init();
        this.update();
    }

    init(){
        // TODO: should create AVATAR the DOM elements
        console.log('Initialising AVATAR DOM elements...');
    }

    update(){
        // TODO: should update the AVATAR new values in the created DOM elements
        console.log('Rendering the AVATAR new values');
        console.log(this.avatarModel);
    }
}