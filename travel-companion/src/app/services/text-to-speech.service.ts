import { Injectable } from '@angular/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  constructor() { }

  speak = async (givenText:string) => {
    await TextToSpeech.speak({
      text: givenText,
      lang: 'en-US',
      rate: 1.0,
      pitch: 1.0,
      volume: 1.0,
      category: 'ambient',
      queueStrategy: 1
    });
  };
  
  stop = async () => {
    await TextToSpeech.stop();
  };
  
  getSupportedLanguages = async () => {
    const languages = await TextToSpeech.getSupportedLanguages();
  };
  
  getSupportedVoices = async () => {
    const voices = await TextToSpeech.getSupportedVoices();
  };
  
  isLanguageSupported = async (lang: string) => {
    const isSupported = await TextToSpeech.isLanguageSupported({ lang });
  };
}
