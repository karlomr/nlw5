import { getCustomRepository, Repository } from 'typeorm'
import { SettingsRepository } from "../repositories/SettingsRepository";
import { Setting } from  '../entities/Setting';

interface ISettingsCreate{
  chat: boolean;
  username: string;
}

//business rule
class SettingsService{
  private settingsRepository: Repository<Setting>;

  constructor(){
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }  
  async create({ chat, username }: ISettingsCreate){

    //select * from settings where username = "username" limit 1;
    const userAlreadyExist = await this.settingsRepository.findOne({ username});
    
    if(userAlreadyExist) {
      throw new Error("User already exists!");
    }
    
    const settings = this.settingsRepository.create({ chat, username });

    await this.settingsRepository.save(settings);
  }
}

export {SettingsService}