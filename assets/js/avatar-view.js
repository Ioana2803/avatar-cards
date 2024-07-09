export default class AvatarView{
    constructor(parentDOMElement, avatarModel){
        this.parentDOMElement = parentDOMElement;

        this.avatarModel = avatarModel;
        this.init();
        this.update();
    }

    init(){
        // TODO: should create AVATAR the DOM elements
        // console.log('Initialising AVATAR DOM elements...');
        this.topDiv = document.createElement('div');
        this.parentDOMElement.append(this.topDiv);

        // creating image div
        this.avatar = document.createElement('div');
        this.avatar.classList.add('avatar');
        this.topDiv.append(this.avatar);

        //creating name div
        this.pName = document.createElement('h2');
        this.pName.classList.add('player-name');
        this.topDiv.append(this.pName);
    }

    update(){
        // TODO: should update the AVATAR new values in the created DOM elements
        // console.log('Rendering the AVATAR new values');
        const image = this.avatarModel.image;
        this.avatar.style.backgroundImage = `url(${image})`;

        const name = this.avatarModel.playerName;
        this.pName.innerText = name;

        // console.log(this.avatarModel);
    }
}