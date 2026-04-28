# Hero Background Videos

Add your hero section background videos here.

## Required Files

Place your video files in this folder:
- `hero-bg.mp4` - Main video (MP4 format)
- `hero-bg.webm` - Optional (WebM format for better compression)

## Video Specifications

- **Format:** MP4 (required), WebM (optional)
- **Resolution:** 1920x1080 or higher
- **Aspect Ratio:** 16:9
- **File Size:** Keep under 5MB for optimal performance
- **Duration:** 10-30 seconds (will loop)
- **Codec:** H.264 for MP4
- **Frame Rate:** 30fps

## Tips

1. Use a tool like FFmpeg to convert videos to MP4/WebM:
   ```bash
   ffmpeg -i input.mov -c:v libx264 -crf 23 -c:a aac -b:a 128k hero-bg.mp4
   ```

2. For WebM (smaller file size):
   ```bash
   ffmpeg -i hero-bg.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 hero-bg.webm
   ```

3. The video will be shown with a semi-transparent dark overlay (50% black) for better text contrast.

## Notes

- Videos autoplay, mute, and loop automatically
- The overlay darkness can be adjusted in `Hero.tsx` by changing `bg-black/50` to:
  - `bg-black/30` for lighter overlay
  - `bg-black/70` for darker overlay
