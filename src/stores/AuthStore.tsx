import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';
import { IUser } from '../models/interface/IUser';

export class AuthStore {
  user: IUser | null = null;
  isAuthenticated = false;
  isLoading = false;
  error: string | null = null;

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);
  }

  // ... auth methods
}