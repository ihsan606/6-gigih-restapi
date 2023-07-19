import {ArtistModel} from "./artist.model";

export interface SongModel {
   id: number;
   title: string;
   artists: ArtistModel[]
   duration: number;
   songUrl: string;
   playCount: number;
}
