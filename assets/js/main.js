import AvatarModel from "./avatar-model.js";
import AvatarView from "./avatar-view.js";
import ProgressBarModel from "./progress-bar-model.js";
import ProgressBarView from "./progress-bar-view.js";


const player = {
    name: 'Kiki',
    avatar: 'https://api.dicebear.com/9.x/fun-emoji/svg?seed=Kiki',
    stats: {
        health: {
            max: 120,
            current: 33
        },
        energy: {
            max: 90,
            current: 68
        }
    }
}

console.log(player);
console.log('');

const healthBarModel = new ProgressBarModel('Health', player.stats.health.max, player.stats.health.current);
const healthBarView = new ProgressBarView(null, healthBarModel);

const energyBarModel = new ProgressBarModel('Energy', player.stats.energy.max, player.stats.energy.current);
const energyBarView = new ProgressBarView(null, energyBarModel);

const avatarModel = new AvatarModel(player.name, player.avatar);
const avatarView = new AvatarView(null, avatarModel);

