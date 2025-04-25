import { TextToSpeechPipe } from './text-to-speech.pipe';

describe('TextToSpeechPipe', () => {
  let pipe: TextToSpeechPipe;

  beforeEach(() => {
    pipe = new TextToSpeechPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should call speechSynthesis.speak with utterance', () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      spyOn(window.speechSynthesis, 'speak');
      pipe.transform('Hello', 'en-US');
      expect(window.speechSynthesis.speak).toHaveBeenCalledWith(jasmine.any(SpeechSynthesisUtterance))
    }
  });

  it('should do nothing for empty input', () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      spyOn(window.speechSynthesis, 'speak');
      pipe.transform('');
      expect(window.speechSynthesis.speak).not.toHaveBeenCalled()
    }
  });
});
