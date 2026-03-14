import fs from 'fs-extra'
import { getXtermTheme } from './extra'
import getTheme from './theme'

console.log('starting')

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './themes/abysal-marble.json',
      getTheme({
        color: 'light',
        name: 'Abysal Marble',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/abysal-obsidian.json',
      getTheme({
        color: 'dark',
        name: 'Abysal Obsidian',
      }),
      { spaces: 2 },
    ),
  ]))

fs.mkdir('./extra', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './extra/xterm-abysal-marble.json',
      getXtermTheme({
        color: 'light',
        name: 'Abysal Marble',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './extra/xterm-abysal-obsidian.json',
      getXtermTheme({
        color: 'dark',
        name: 'Abysal Obsidian',
      }),
      { spaces: 2 },
    ),
  ]))

console.log('finished')
