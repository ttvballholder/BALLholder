function downloadVideo() {
  const videoUrl = 'videos/video.mp4'; // Change 'videos/zzart.mp4' to the relative path of your video file
  const a = document.createElement('a');
  a.href = videoUrl;
  a.download = 'video.mp4';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
