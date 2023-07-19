import {songs} from "../data/db";
import {SongModel} from "../models/song.model";




const getAll: () => Promise<SongModel[]> = ()=> {
    return new Promise((resolve, reject) => {
        if(songs.length > 0) {
            resolve(songs)
        } else {
            reject('song not found')
        }
    });
}

const sortByPlayCount = (data: SongModel[])=> {
    return data.sort((a,b)=> b.playCount - a.playCount)
}

const play = (song_id: number)=> {
    const {data, errors} = findOneById(song_id);
    if(errors != undefined){
        return {
            data: {},
            errors: errors
        };
    }
    const songIndex = songs.indexOf(data as any);
    songs[songIndex].playCount++;
    return {
        data: songs[songIndex]
    };
}

const findOneById = (song_id: number)=> {
    const song = songs.find((x)=> x.id === song_id)
    if(!song){
        return {
            data: {},
            errors: 'data not found'
        }
    }

    return {
        data: song
    }
}



export default {
    getAll,
    sortByPlayCount,
    play
}
