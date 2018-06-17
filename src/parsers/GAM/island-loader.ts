import FileSystem from "../../filesystem";
import {Island} from "./gam-parser";

export default class IslandLoader {
    private readonly islandSizes = new Map([
        [ 35, 'lit'],
        [ 45, 'mit'],
        [ 55, 'med'],
        [ 85, 'big'],
        [100, 'lar'],
    ]);

    constructor(private fs: FileSystem) {}

    async load(island: Island) {
        const climate = island.is_south ? "south" : "north";
        const islandNumber = island['num_base_island'].toString().padStart(2, '0');
        for (const entry of this.islandSizes.entries()) {
            const size = entry[0];
            const sizeName = entry[1];
            if (island.width <= size) {
                return await this.fs.openAndGetContentAsStream(`/islands/${climate}/${sizeName}${islandNumber}.scp`);
            }
        }

        throw new Error('Could not load island');
    }
}