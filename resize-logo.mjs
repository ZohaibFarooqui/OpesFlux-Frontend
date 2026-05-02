
import sharp from 'sharp';
await sharp('public/logo.png').resize(120, 120, {fit:'inside',background:{r:255,g:255,b:255,alpha:0}}).png({compressionLevel:9}).toFile('public/logo-email.png');
console.log('done', (await import('fs')).default.statSync('public/logo-email.png').size, 'bytes');
