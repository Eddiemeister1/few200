import { createAction, props } from "@ngrx/store";
import { SongEntity } from "../reducers/songs.reducers";

//initator(command)
export const loadSongs = createAction(
  '[music] load the songs'
);


//success
export const loadSongSucceeded = createAction(
  '[music] loading the songs succeeded',
  props<{ payload: SongEntity[] }>()
);
//failure

//we will do an example of this with adding songs.
