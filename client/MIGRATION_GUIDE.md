# Vite Migration Guide

The React application has been successfully migrated from Create React App (CRA) to Vite.

## Changes Checklist

- [x] **Vite Config**: `vite.config.js` added.
- [x] **Dependencies**: Removed `react-scripts`, added `vite`.
- [x] **Scripts**: Updated `start`, `build` to use Vite.
- [x] **Entry Point**: `index.html` moved to root, `%PUBLIC_URL%` removed.
- [x] **File Extensions**: Renamed entry files to `.jsx`.
- [x] **ESM**: Enabled `"type": "module"` and updated `postcss.config.js`.

## How to Run

- **Development**: `npm start` (runs `vite`)
- **Build**: `npm run build` (runs `vite build`)
- **Preview**: `npm run preview` (runs `vite preview`)
