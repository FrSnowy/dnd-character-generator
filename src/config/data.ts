import * as CharacterListT from "features/CharacterList/duck/types";

type LocalStorageData = {
  characterList: Array<CharacterListT.Character>;
};

class LocalStorage {
  private storage: LocalStorageData = {
    characterList: [],
  };

  constructor() {
    const localStorageData = window.localStorage.getItem("storage");
    if (!localStorageData) return;

    const parsedData = JSON.parse(localStorageData) as LocalStorageData;
    this.storage.characterList = parsedData?.characterList || [];
  }

  getCharacterList(): Array<CharacterListT.Character> {
    return this.storage.characterList;
  }
}

export const localStorage = new LocalStorage();
