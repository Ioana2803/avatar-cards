export default class AvatarModel{
    constructor(playerName, defaultImage){
        this.playerName = playerName;
        this.avatarImage = defaultImage;
    }

    set image(newImage){
        this.avatarImage = newImage;
    }

    get image(){
        return this.avatarImage;
    }
}