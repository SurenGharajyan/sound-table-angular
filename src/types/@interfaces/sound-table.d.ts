import {SoundType} from "../@enums/sound-type";

export interface SoundTable {
  id: string;
  soundType: SoundType;
  fileName: string;
}
