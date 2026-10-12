// Run through the browser MCP's filename option against the local development site.
// Creates an original silent concept animation from our generated still. No external service.
async (page) => {
  await page.goto('http://127.0.0.1:3000');
  const posterDownload = page.waitForEvent('download');
  await page.evaluate(async () => {
    const photo = new Image(); photo.src = '/images/botanical-tea.png'; await photo.decode();
    const canvas = document.createElement('canvas'); canvas.width = 540; canvas.height = 960;
    const ctx = canvas.getContext('2d');
    const draw = (seconds) => {
      ctx.fillStyle = '#ece3cf'; ctx.fillRect(0, 0, 540, 960);
      ctx.fillStyle = '#344731'; ctx.font = '40px Georgia'; ctx.fillText('nila·', 46, 80);
      ctx.font = '56px Georgia';
      const lines = seconds < 3 ? ['Make room', 'for a little', 'pause.'] : seconds < 6 ? ['A cup of tea.', 'A moment', 'to yourself.'] : ['Small rituals.', 'A softer', 'everyday.'];
      lines.forEach((line, i) => ctx.fillText(line, 46, 175 + i * 61));
      const zoom = 1 + seconds * .008;
      ctx.save(); ctx.beginPath(); ctx.rect(0, 378, 540, 512); ctx.clip();
      const height = 512 * zoom; const width = height * photo.width / photo.height;
      ctx.drawImage(photo, 270 - width / 2 - 32, 634 - height / 2, width, height); ctx.restore();
      ctx.fillStyle = '#344731'; ctx.font = '15px Arial'; ctx.fillText('AN ORIGINAL MANACIRCLE CONCEPT', 46, 932);
    };
    draw(0);
    const save = (blob, name) => { const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(url), 15000); };
    const poster = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', .9));
    save(poster, 'reel-poster.jpg');
    window.__renderManaMotion = async () => {
      const stream = canvas.captureStream(30);
      const mimeType = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'].find(type => MediaRecorder.isTypeSupported(type));
      const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 1600000 }); const chunks = [];
      recorder.ondataavailable = event => { if (event.data.size) chunks.push(event.data); };
      const stopped = new Promise(resolve => recorder.onstop = resolve);
      const started = performance.now(); recorder.start(250);
      await new Promise(resolve => {
        const frame = () => { const seconds = (performance.now() - started) / 1000; draw(Math.min(seconds, 7.99)); if (seconds < 8) requestAnimationFrame(frame); else resolve(); }; frame();
      });
      recorder.stop(); await stopped; stream.getTracks().forEach(track => track.stop());
      save(new Blob(chunks, { type: 'video/webm' }), 'nila-motion.webm');
    };
  });
  await (await posterDownload).saveAs('C:/Users/mouli/OneDrive/Documents/Desktop/ManaCircle/public/images/reel-poster.jpg');
  const videoDownload = page.waitForEvent('download');
  await page.evaluate(() => window.__renderManaMotion());
  await (await videoDownload).saveAs('C:/Users/mouli/OneDrive/Documents/Desktop/ManaCircle/public/media/nila-motion.webm');
  return { created: ['public/images/reel-poster.jpg', 'public/media/nila-motion.webm'] };
}
