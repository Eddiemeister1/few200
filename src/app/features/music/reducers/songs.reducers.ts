import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/song.action';
export interface SongEntity {
  _id: string,
  title: String,
  artist: String,
  album: String
}

export interface SongState extends EntityState<SongEntity> {

}

export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.loadSongSucceeded, (s, a) => adapter.setAll(a.payload, s)),
  on(actions.tempSongCreated, (s, a) => adapter.addOne(a.payload, s)),
  on(actions.songAdded, (s, a) => adapter.updateOne({
    id: a.temporaryId,
    changes: {
      _id: a.payload._id
    }
  }, s)
  ));

export function reducer(state: SongState = initialState, action: Action): SongState {
  return reducerFunction(state, action);
}



