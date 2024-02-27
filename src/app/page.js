import { CodeCom } from '@/components/component/code-com'
import Image from 'next/image'

export default function Home() {

  const code1 = `function y = movingAverageFilter(x, windowSize)
  // Apply moving average filter to input signal x
  // with a window size of windowSize

  M = length(x);
  y = zeros(1, M);

  for i = 1:M
      // Define window range
      startIdx = max(1, i - windowSize);
      endIdx = min(M, i + windowSize);

      // Calculate average of window
      y(i) = mean(x(startIdx:endIdx));
  end
endfunction

// Read audio file
file = 'C:\Users\Aditya\Downloads\file_example_WAV_1MG.wav';
[input_signal, sample_rate] = wavread(file);

// Parameters for noise reduction
window_size = 90; // Adjust this value based on the level of noise

// Apply moving average filter
filtered_signal = movingAverageFilter(input_signal, window_size);

// Write filtered audio to a new file
output_file = 'filteredh_audios11.wav';
wavwrite(filtered_signal, sample_rate, output_file);`

const code2 = `#include <stdio.h>

void Fun(float num) {
int ptr=(int) &num;
  for(int i=31;i>=0;i--){
      printf("%d",(*ptr >> i)& 1);
      if(i%4==0){
          printf(" ");
      }
  }
  printf("\n");
}
int main(){
    float a=0001267;
    Fun(a);
    return 0;
}`

const code3 = `
function y = remove_noise(audio_file_path, cutoff_frequency)
    % Read audio file
    [y, Fs] = audioread(audio_file_path);

    % Design a low-pass filter
    order = 4;  % Filter order
    Wn = cutoff_frequency / (Fs / 2);  % Normalize cutoff frequency
    [b, a] = butter(order, Wn, 'low');

    % Apply the filter to remove noise
    y_filtered = filter(b, a, y);

    % Plot original and filtered signals
    t = (0:length(y)-1) / Fs;
    subplot(2, 1, 1);
    plot(t, y);
    title('Original Audio Signal');
    xlabel('Time (s)');
    ylabel('Amplitude');
    subplot(2, 1, 2);
    plot(t, y_filtered);
    title('Filtered Audio Signal');
    xlabel('Time (s)');
    ylabel('Amplitude');

    % Play the filtered audio
    sound(y_filtered, Fs);
endfunction

% Example usage:
audio_file_path = 'path_to_your_audio_file.wav';  % Specify the path to your audio file
cutoff_frequency = 2000;  % Specify the cutoff frequency for the low-pass filter
remove_noise(audio_file_path, cutoff_frequency);

`
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div>

    <h1>This is code for odd batch A</h1>
    <CodeCom code={code1} />
      </div>
      <div className='pt-28' >
    <CodeCom code={code2} />
      </div>

      <div className='pt-28' >
    <h1>This is code for even batch A</h1>
    <CodeCom code={code3} />
      </div>
    </main>
  )
}
