import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';
import { IUser } from '../models/interface/IUser';

export class ProfileStore {
  user: IUser | null = null;
  isLoading = false;
  error: string | null = null;

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);
  }

  // ... profile methods
}